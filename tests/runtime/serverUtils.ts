import { spawn, ChildProcess, execSync } from "child_process";
import http from "http";
import fs from "fs";
import path from "path";

export interface StartedProcess {
	proc: ChildProcess;
	url: string;
	stop: () => void;
}

// In ESM test environment __dirname is undefined; use process.cwd() (repo root) instead.
const ROOT = process.cwd();

async function waitForHttp(url: string, timeoutMs = 6000, intervalMs = 150) {
	const start = Date.now();
	return new Promise<void>((resolve, reject) => {
		const attempt = () => {
			if (Date.now() - start > timeoutMs)
				return reject(new Error(`Timeout waiting for ${url}`));
			try {
				const req = http.get(url, (res) => {
					res.resume();
					resolve();
				});
				req.on("error", () => setTimeout(attempt, intervalMs));
				req.setTimeout(1200, () => {
					req.destroy();
					setTimeout(attempt, intervalMs);
				});
			} catch {
				setTimeout(attempt, intervalMs);
			}
		};
		attempt();
	});
}

const LOCK_DIR = path.join(ROOT, ".runtime-locks");
function ensureLockDir() {
	if (!fs.existsSync(LOCK_DIR)) fs.mkdirSync(LOCK_DIR);
}

interface OwnedProcess extends StartedProcess {
	owned: boolean;
}

async function startWithLock(options: {
	name: string;
	url: string;
	healthPath?: string;
	scriptDecider: () => { script: string; timeout: number };
}): Promise<OwnedProcess> {
	ensureLockDir();
	const { name, url, healthPath = "/healthz", scriptDecider } = options;
	const lockFile = path.join(LOCK_DIR, `${name}.lock`);
	const urlObj = new URL(url);
	const port = Number(urlObj.port || (urlObj.protocol === "https:" ? 443 : 80));
	// If caller wants a fresh server regardless of current health, kill anything on the port up-front
	if (process.env.DS_FORCE_RESPAWN) {
		try {
			const out = execSync(`lsof -iTCP:${port} -sTCP:LISTEN -Pn || true`, { stdio: 'pipe' }).toString();
			if (out.trim()) {
				const lines = out.trim().split('\n').slice(1);
				for (const line of lines) {
					const parts = line.split(/\s+/);
					const pid = parts[1];
					if (pid) {
						try { process.kill(Number(pid), 'SIGKILL'); } catch {}
					}
				}
				await new Promise(res => setTimeout(res, 150));
			}
		} catch {}
	}

	async function quickHttpCheck(): Promise<boolean> {
		try {
			await waitForHttp(`${url}${healthPath}`, 500, 100);
			return true;
		} catch {
			return false;
		}
	}

	function tryKillPort(p: number) {
		if (!process.env.DS_KILL_STALE) return false;
		try {
			const out = execSync(`lsof -iTCP:${p} -sTCP:LISTEN -Pn || true`, {
				stdio: "pipe",
			}).toString();
			if (!out.trim()) return false;
			const lines = out.trim().split("\n").slice(1); // skip header
			for (const line of lines) {
				const parts = line.split(/\s+/);
				const pid = parts[1];
				if (pid) {
					try {
						process.kill(Number(pid), "SIGKILL");
						console.warn(
							`[server-utils] killed stale process ${pid} on port ${p}`
						);
					} catch {}
				}
			}
			return true;
		} catch {
			return false;
		}
	}
	// Fast path: already listening (skip if forcing respawn)
	if (!process.env.DS_FORCE_RESPAWN) {
	  try {
		  await waitForHttp(`${url}${healthPath}`, 700, 120);
		  return { proc: undefined as any, url, stop: () => {}, owned: false };
	  } catch {
		  /* not up */
	  }
	}
	// If another worker is spawning (lock exists) wait until up
	if (fs.existsSync(lockFile)) {
		const waitTimeout = Number(process.env.DS_SERVER_START_TIMEOUT || 8000);
		try {
			await waitForHttp(`${url}${healthPath}`, waitTimeout);
			return { proc: undefined as any, url, stop: () => {}, owned: false };
		} catch (e) {
			// Stale lock – remove and proceed to spawn
			console.warn(
				`[server-utils] stale lock detected for ${name}, removing and respawning...`
			);
			try {
				fs.unlinkSync(lockFile);
			} catch {}
		}
	}
	// Create lock
	fs.writeFileSync(lockFile, String(Date.now()));
	// If port appears bound but not responding, optionally kill it
	try {
		const portOut = execSync(`lsof -iTCP:${port} -sTCP:LISTEN -Pn || true`, {
			stdio: "pipe",
		}).toString();
		if (portOut.trim()) {
			// Optionally force respawn even if a responsive server is running (useful to pick up code/template changes)
			if (process.env.DS_FORCE_RESPAWN) {
				console.warn(
					`[server-utils] DS_FORCE_RESPAWN set – killing existing process on port ${port} to start fresh.`
				);
				tryKillPort(port);
			} else {
				const responsive = await quickHttpCheck();
				if (!responsive) {
					console.warn(
						`[server-utils] port ${port} occupied by unresponsive process. Set DS_KILL_STALE=1 to auto-kill.`
					);
					if (process.env.DS_KILL_STALE) {
						tryKillPort(port);
					}
				}
			}
		}
	} catch {}
	const { script, timeout } = scriptDecider();
	console.log(
		`[server-utils] starting ${name} via npm run ${script} (timeout ${timeout}ms)`
	);
	const proc = spawn("npm", ["run", script], {
		cwd: ROOT,
		stdio: "pipe",
		env: { ...process.env },
	});
	let sawAddrInUse = false;
	proc.on("exit", (code, signal) => {
		if (code !== 0) {
			console.error(
				`[server-utils] Child process ${name} exited early code=${code} signal=${signal}`
			);
		}
	});
	const debug = !!process.env.DS_RUNTIME_DEBUG;
	if (debug && proc.stdout && proc.stderr) {
		proc.stdout.on("data", (d) =>
			process.stdout.write(`[${name}-stdout] ${d}`)
		);
		proc.stderr.on("data", (d) => {
			const text = d.toString();
			process.stderr.write(`[${name}-stderr] ${text}`);
			if (/EADDRINUSE/.test(text)) {
				sawAddrInUse = true;
			}
		});
	}
	try {
		await waitForHttp(`${url}${healthPath}`, timeout);
		return {
			proc,
			url,
			stop: () => {
				try {
					proc.kill();
				} catch {}
				fs.existsSync(lockFile) && fs.unlinkSync(lockFile);
			},
			owned: true,
		};
	} catch (e) {
		// If address in use we adopt existing server and proceed (not owned)
		if (sawAddrInUse) {
			console.warn(
				`[server-utils] adopting pre-existing ${name} server (EADDRINUSE)`
			);
			try {
				fs.existsSync(lockFile) && fs.unlinkSync(lockFile);
			} catch {}
			// Quick confirm it's actually up (another short wait)
			await waitForHttp(`${url}${healthPath}`, 3000, 150);
			return { proc: undefined as any, url, stop: () => {}, owned: false };
		}
		try {
			proc.kill();
		} catch {}
		if (fs.existsSync(lockFile)) fs.unlinkSync(lockFile);
		throw e;
	}
}

export async function startExpress(): Promise<StartedProcess> {
	const fast = !!process.env.DS_RUNTIME_FAST;
	const started = await startWithLock({
		name: "express",
		url: "http://localhost:4200",
		healthPath: "/healthz",
		scriptDecider: () => ({
			script: fast ? "examples:express:serve" : "examples:express:start",
			timeout: Number(process.env.DS_SERVER_START_TIMEOUT || 6000),
		}),
	});
	return started;
}

export async function startNext(): Promise<StartedProcess> {
	// Next dev does not expose /healthz by default – we'll use root path but treat 200/404 as healthy
	const started = await startWithLock({
		name: "next",
		url: "http://localhost:4100",
		healthPath: "/healthz",
		scriptDecider: () => {
			const nextDir = fs.existsSync("./examples/nextjs/.next");
			const fast = !!process.env.DS_RUNTIME_FAST || !!process.env.DS_NEXT_DEV;
			const script = fast
				? "examples:next:dev:fast"
				: nextDir
					? "examples:next:start:fast"
					: "examples:next:start";
			const timeout = Number(
				process.env.DS_SERVER_START_TIMEOUT || (fast ? 15000 : 20000)
			);
			return { script, timeout };
		},
	});
	return started;
}

export function stop(started?: StartedProcess) {
	if (started) started.stop();
}

// Helper to wait for behaviours global inside a page (polling) to reduce duplicated logic
export async function waitForBehavioursGlobal(page: any, timeoutMs = 8000) {
	try {
		await page.waitForFunction(() => !!(window as any).__nhsInitAllBehaviours, {
			timeout: timeoutMs,
		});
	} catch (e) {
		// Emit some diagnostics to help debug why missing
		const html = await page.content();
		// eslint-disable-next-line no-console
		console.error(
			"[diagnostic] behaviours global missing after wait. First 500 chars of HTML:",
			html.slice(0, 500)
		);
		throw e;
	}
}
