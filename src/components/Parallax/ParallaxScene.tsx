import React from "react";
import type {
	ParallaxSceneProps,
	ParallaxShapeSpec,
} from "./ParallaxScene.types";
import "./ParallaxScene.scss";

// Tiny seeded RNG for deterministic layout
function mulberry32(a: number) {
	return function () {
		let t = (a += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function useReducedMotion(pref: "auto" | "off" | "minimal" = "auto") {
	const [reduced, setReduced] = React.useState(
		pref === "off" ? false : pref === "minimal" ? false : false
	);
	React.useEffect(() => {
		if (pref !== "auto") return;
		if (typeof window === "undefined" || !window.matchMedia) return;
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const onChange = () => setReduced(mq.matches);
		onChange();
		mq.addEventListener?.("change", onChange);
		return () => mq.removeEventListener?.("change", onChange);
	}, [pref]);
	return pref === "off" ? false : reduced;
}

function pick<T>(rng: () => number, arr: T[]): T {
	return arr[Math.floor(rng() * arr.length)];
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

// Generate shapes if not provided. Ensures they don't overlap the callout rect.
function generateShapes(
	props: ParallaxSceneProps,
	sceneW: number
): ParallaxShapeSpec[] {
	const seed = props.seed ?? 1;
	const rng = mulberry32(seed);
	const count = Math.max(6, Math.min(48, Math.round(props.density ?? 18)));
	const kinds: ParallaxShapeSpec["kind"][] = ["circle", "hexagon", "rect"];
	const shapes: ParallaxShapeSpec[] = [];
	const gradients =
		props.gradients && props.gradients.length > 0
			? props.gradients
			: [
					"nhs-fdp-gradient-blue",
					"nhs-fdp-gradient-aqua",
					"nhs-fdp-gradient-green",
				];

	// Compute callout exclusion in percentage
	const calloutWidth =
		typeof props.callout.width === "number" ? props.callout.width : undefined;
	const calloutPx = calloutWidth ?? Math.min(520, sceneW * 0.7);
	const calloutLeft = (sceneW - calloutPx) / 2;
	const calloutRight = calloutLeft + calloutPx;
	const exclusion = {
		left: (calloutLeft / sceneW) * 100,
		right: (calloutRight / sceneW) * 100,
		top: 20,
		bottom: 80,
	};

	const fits = (xPct: number, yPct: number) =>
		!(
			xPct > exclusion.left - 6 &&
			xPct < exclusion.right + 6 &&
			yPct > exclusion.top - 10 &&
			yPct < exclusion.bottom + 10
		);

	let attempts = 0;
	while (shapes.length < count && attempts < count * 50) {
		attempts++;
		const kind = pick(rng, kinds);
		const depth = clamp(rng() * 1.0, 0.15, 0.95);
		const sizeBase = 24 + rng() * 72; // 24-96
		const x = rng() * 100;
		const y = rng() * 100;
		if (!fits(x, y)) continue;
		const fillToken = pick(rng, gradients);
		if (kind === "rect") {
			const ratio = 0.6 + rng() * 0.8; // 0.6-1.4
			shapes.push({
				kind,
				width: sizeBase * ratio,
				height: sizeBase,
				x,
				y,
				depth,
				fillToken,
				shadow: "soft",
			});
		} else {
			shapes.push({
				kind,
				size: sizeBase,
				x,
				y,
				depth,
				fillToken,
				shadow: "soft",
			});
		}
	}
	return shapes;
}

export const ParallaxScene: React.FC<ParallaxSceneProps> = (props) => {
	const {
		seed = 1,
		mode = "scroll",
		axis = "xy",
		height = 520,
		strength = 120,
		pin = false,
		reducedMotion = "auto",
		callout,
		className,
		style,
	} = props;

	const ref = React.useRef<HTMLDivElement>(null);
	const [sceneSize, setSceneSize] = React.useState<{ w: number; h: number }>({
		w: 1000,
		h: 520,
	});
	const isReduced = useReducedMotion(reducedMotion);

	// Resolve direction vector for diagonal motion
	const dir = props.direction ?? "se";
	const diagVec = React.useMemo(() => {
		switch (dir) {
			case "ne":
				return { x: 1, y: -1 } as const;
			case "nw":
				return { x: -1, y: -1 } as const;
			case "sw":
				return { x: -1, y: 1 } as const;
			case "se":
			default:
				return { x: 1, y: 1 } as const;
		}
	}, [dir]);

	// Measure container
	React.useLayoutEffect(() => {
		if (!ref.current) return;
		const obs = new ResizeObserver((entries) => {
			for (const e of entries) {
				const cr = e.contentRect;
				setSceneSize({ w: cr.width, h: cr.height });
			}
		});
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, []);

	// Shapes (generated once per seed or when size changes majorly)
	const shapes = React.useMemo(() => {
		if (props.shapes && props.shapes.length) return props.shapes;
		return generateShapes(props, sceneSize.w);
	}, [seed, sceneSize.w, sceneSize.h]);

	// Scroll progress
	const [progress, setProgress] = React.useState(0);
	const [scrollBase, setScrollBase] = React.useState<number | null>(null);
	React.useEffect(() => {
		if (mode !== "scroll" || isReduced) return;
		if (typeof window === "undefined") return;
		const el = ref.current;
		if (!el) return;

		// Native scroll-based parallax (no GSAP dependency)
		const handler = () => {
			const rect = el.getBoundingClientRect();
			const viewport = window.innerHeight || document.documentElement.clientHeight;
			const total = rect.height + viewport;
			const traveled = viewport - rect.top;
			const visible = clamp(traveled / total, 0, 1);
			setScrollBase((prev) => (prev === null ? visible : prev));
			setProgress(visible);
		};
		handler();
		window.addEventListener("scroll", handler, { passive: true });
		window.addEventListener("resize", handler);
		return () => {
			window.removeEventListener("scroll", handler);
			window.removeEventListener("resize", handler);
		};
	}, [mode, isReduced]);

	// Timed progress
	React.useEffect(() => {
		if (mode !== "timed" || isReduced) return;
		let raf = 0;
		let start = performance.now();
		const duration = 8000; // 8s loop
		const loop = (t: number) => {
			const d = (t - start) % duration;
			const p = d / duration;
			setProgress(p);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => cancelAnimationFrame(raf);
	}, [mode, isReduced]);

	const depthToFactor = (d?: number) => {
		const base = d ?? 0.5;
		return 0.15 + base * 0.6; // 0.15-0.75
	};

	const calloutStyle: React.CSSProperties = {
		position: "absolute",
		left: "50%",
		top: "50%",
		bottom: undefined,
		right: undefined,
		transform: "translate(-50%, -50%)",
		width:
			typeof callout.width === "number"
				? `${callout.width}px`
				: callout.width || "min(520px, 70%)",
	};

	return (
		<div
			ref={ref}
			className={["nhs-parallax-scene", className].filter(Boolean).join(" ")}
			style={{
				position: "relative",
				height: typeof height === "number" ? `${height}px` : height,
				overflow: "hidden",
				...style,
			}}
			aria-hidden
		>
			{/* SVG layer for shapes and connectors */}
			<svg
				className="nhs-parallax-canvas"
				width="100%"
				height="100%"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden
			>
				<defs>
					{/* Temporary gradient paint servers; replace with token-driven ones when available */}
					<linearGradient id="fdpgradient-blue" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#2E61A5" />
						<stop offset="100%" stopColor="#1B3E73" />
					</linearGradient>
					<linearGradient id="fdpgradient-aqua" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#1DC6D2" />
						<stop offset="100%" stopColor="#117E8A" />
					</linearGradient>
					<linearGradient id="fdpgradient-green" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#2BC06A" />
						<stop offset="100%" stopColor="#1A874A" />
					</linearGradient>
					{/* Brand-aligned gradient palettes (derived from SCSS token values) */}
					<linearGradient id="fdpgradient-dark-blue" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#005eb8" />
						<stop offset="100%" stopColor="#003087" />
					</linearGradient>
					<linearGradient id="fdpgradient-light-blue" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#005eb8" />
						<stop offset="100%" stopColor="#60b2e2" />
					</linearGradient>
					<linearGradient id="fdpgradient-purple" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#ac98cb" />
						<stop offset="100%" stopColor="#d6cce3" />
					</linearGradient>
					<linearGradient id="fdpgradient-green-palette" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#007f3b" />
						<stop offset="100%" stopColor="#63a691" />
					</linearGradient>
					<linearGradient id="fdpgradient-grey" x1="0" x2="1" y1="0" y2="1">
						<stop offset="0%" stopColor="#4c6272" />
						<stop offset="100%" stopColor="#768692" />
					</linearGradient>
				</defs>
				{/* Connector lines first (behind shapes) */}
				<g className="nhs-parallax-connectors">
					{shapes.map((s, i) => {
						// approximate corner points in percentage (viewBox coords)
						const cx = s.x,
							cy = s.y;
						const w = ((s.width ?? s.size ?? 40) / sceneSize.w) * 100 * 1.0;
						const h = ((s.height ?? s.size ?? 40) / sceneSize.h) * 100 * 1.0;
						const corners: [number, number][] =
							s.kind === "circle"
								? [
										[cx, cy - h / 2],
										[cx + w / 2, cy],
										[cx, cy + h / 2],
										[cx - w / 2, cy],
									]
							: s.kind === "rect" || s.kind === "svg"
									? [
											[cx - w / 2, cy - h / 2],
											[cx + w / 2, cy - h / 2],
											[cx + w / 2, cy + h / 2],
											[cx - w / 2, cy + h / 2],
										]
									: // hexagon approx points
										[
											[cx - w / 2, cy],
											[cx - w / 4, cy - h / 2],
											[cx + w / 4, cy - h / 2],
											[cx + w / 2, cy],
											[cx + w / 4, cy + h / 2],
											[cx - w / 4, cy + h / 2],
										];

						const f = depthToFactor(s.depth);
						// During pinned phase, map directly to progress (0..1) for proportional movement
						// Otherwise, keep baseline-relative behavior to avoid on-load jumps
						const base = scrollBase ?? 0.5;
						const p = pin ? progress : progress - base;
						const delta = p * strength * f;
						const dx = axis === "x" ? delta : axis === "xy" ? delta * diagVec.x : 0;
						const dy = axis === "y" ? delta : axis === "xy" ? delta * diagVec.y : 0;

						return corners.map((p, j) => (
							<line
								key={`c-${i}-${j}`}
								x1={clamp(p[0] + dx, 0, 100)}
								y1={clamp(p[1] + dy, 0, 100)}
								x2={clamp(50 + dx * 0.2, 0, 100)}
								y2={clamp(50 + dy * 0.2, 0, 100)}
								className="nhs-parallax-connector"
							/>
						));
					})}
				</g>

				{/* Shapes */}
				<g className="nhs-parallax-shapes">
					{shapes.map((s, i) => {
						const f = depthToFactor(s.depth);
						const base = scrollBase ?? 0.5;
						const p = pin ? progress : progress - base;
						const delta = p * strength * f;
						const dx = axis === "x" ? delta : axis === "xy" ? delta * diagVec.x : 0;
						const dy = axis === "y" ? delta : axis === "xy" ? delta * diagVec.y : 0;
						const tx = clamp(s.x + dx, 0, 100);
						const ty = clamp(s.y + dy, 0, 100);
						const rot = s.rotate ?? 0;
						const className = [
							"nhs-parallax-shape",
							s.fillToken,
							s.shadow && `nhs-parallax-shadow--${s.shadow}`,
						]
							.filter(Boolean)
							.join(" ");

						if (s.kind === "circle") {
							const r = ((s.size ?? 40) / sceneSize.w) * 100 * 0.5;
							return (
								<circle key={i} cx={tx} cy={ty} r={r} className={className} />
							);
						}

						if (s.kind === "rect") {
							const w = ((s.width ?? 48) / sceneSize.w) * 100;
							const h = ((s.height ?? 36) / sceneSize.h) * 100;
							return (
								<rect
									key={i}
									x={tx - w / 2}
									y={ty - h / 2}
									width={w}
									height={h}
									transform={`rotate(${rot} ${tx} ${ty})`}
									className={className}
								/>
							);
						}

						if (s.kind === "svg" && s.src) {
							const w = ((s.width ?? 48) / sceneSize.w) * 100;
							const h = ((s.height ?? 48) / sceneSize.h) * 100;
							return (
								<image
									key={i}
									href={s.src}
									x={tx - w / 2}
									y={ty - h / 2}
									width={w}
									height={h}
									preserveAspectRatio="xMidYMid meet"
									transform={`rotate(${rot} ${tx} ${ty})`}
									className={className}
								/>
							);
						}

						// hexagon path (regular, width = size)
						const w = ((s.size ?? 40) / sceneSize.w) * 100;
						const h = w * 0.866; // sin(60) for regular hex
						const points = [
							[tx - w / 2, ty],
							[tx - w / 4, ty - h / 2],
							[tx + w / 4, ty - h / 2],
							[tx + w / 2, ty],
							[tx + w / 4, ty + h / 2],
							[tx - w / 4, ty + h / 2],
						]
							.map((p) => p.join(","))
							.join(" ");
						return <polygon key={i} points={points} className={className} />;
					})}
				</g>
			</svg>

			{/* Callout on top; shapes are always below */}
			<div
				className="nhs-parallax-callout"
				style={calloutStyle}
				aria-hidden={false}
			>
				<div
					className={["nhs-parallax-callout-inner", callout.backgroundToken]
						.filter(Boolean)
						.join(" ")}
				>
					{" "}
					{callout.content}{" "}
				</div>
			</div>
		</div>
	);
};

export default ParallaxScene;
