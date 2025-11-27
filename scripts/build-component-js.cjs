#!/usr/bin/env node
// Builds per-component ESM entry points (index.js) into dist/src/components/** using esbuild.
// These correspond to the package.json component export entries.
const path = require('path');
const fs = require('fs');
const { build } = require('esbuild');

const root = path.join(__dirname, '..');
const srcComponentsDir = path.join(root, 'src', 'components');
const outRoot = path.join(root, 'dist', 'src', 'components');

if (!fs.existsSync(srcComponentsDir)) {
	console.error('[build-component-js] components directory missing');
	process.exit(1);
}

function findIndexEntries(dir, rel = '') {
	const results = [];
	const items = fs.readdirSync(dir, { withFileTypes: true });
	for (const item of items) {
		if (!item.isDirectory()) continue;
		if (item.name.startsWith('.')) continue;
		const full = path.join(dir, item.name);
		const relDir = rel ? path.join(rel, item.name) : item.name;
		const indexPath = path.join(full, 'index.ts');
		if (fs.existsSync(indexPath)) {
			results.push({ relDir, indexPath });
		}
		// Recurse
		results.push(...findIndexEntries(full, relDir));
	}
	return results;
}

const entries = findIndexEntries(srcComponentsDir);

if (!entries.length) {
	console.warn('[build-component-js] No component index.ts files found');
	process.exit(0);
}

const ignoreScssPlugin = {
	name: 'ignore-scss',
	setup(buildApi) {
		buildApi.onLoad({ filter: /\.scss$/ }, () => ({ contents: '', loader: 'js' }));
	}
};

async function run() {
	let built = 0;
	for (const e of entries) {
		const outdir = path.join(outRoot, e.relDir);
		fs.mkdirSync(outdir, { recursive: true });
		try {
			await build({
				entryPoints: [e.indexPath],
				bundle: true,
				format: 'esm',
				platform: 'browser',
				sourcemap: true,
				target: 'es2019',
				treeShaking: true,
				outfile: path.join(outdir, 'index.js'),
				logLevel: 'silent',
				external: ['react', 'react-dom'],
				plugins: [ignoreScssPlugin],
				// Treat static assets as files so imports resolve to URLs within the package
				loader: {
					'.svg': 'file',
					'.png': 'file',
					'.jpg': 'file',
					'.jpeg': 'file',
					'.gif': 'file',
					'.webp': 'file'
				},
				assetNames: 'assets/[name]-[hash]'
			});
			built++;
		} catch (err) {
			const id = e?.indexPath || e?.relDir || 'unknown entry';
			console.error(`[build-component-js] Failed to build ${id}:`, err.message);
			process.exitCode = 1;
		}
	}
	console.log(`[build-component-js] Built ${built} component JS entry files.`);
	if (process.exitCode) process.exit(process.exitCode);
}

run();
