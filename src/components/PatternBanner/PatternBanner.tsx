import React from "react";
import "./PatternBanner.scss";
import type {
	PatternBannerProps,
	PatternBannerShape,
} from "./PatternBanner.types";

// Deterministic RNG
function mulberry32(a: number) {
	return function () {
		let t = (a += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

function generateShapes(
	seed: number,
	density: number,
	gradients: string[],
	excludeBox: { w: number; h: number }
): PatternBannerShape[] {
	const rng = mulberry32(seed);
	const shapes: PatternBannerShape[] = [];
	// Track bounding boxes alongside shapes for fast collision tests (in viewBox % units)
	type Box = { left: number; right: number; top: number; bottom: number };
	const boxes: Box[] = [];
	const kinds: PatternBannerShape["kind"][] = ["rect", "hex", "circle"];

	const center = { x: 50, y: 50 };
	const ex = excludeBox;
	// Base reference pixels to convert px sizes to viewBox % for overlap tests
	const BASE_W = 1200;
	const BASE_H = 400;
	const PADDING_PCT = 1.2; // small spacing between shapes

	const excludeBoxRect: Box = {
		left: center.x - ex.w / 2,
		right: center.x + ex.w / 2,
		top: center.y - ex.h / 2,
		bottom: center.y + ex.h / 2,
	};

	const intersects = (a: Box, b: Box) =>
		!(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);

	const withinViewBox = (b: Box) => b.left >= 0 && b.top >= 0 && b.right <= 100 && b.bottom <= 100;

	const candidateBox = (
		kind: PatternBannerShape["kind"],
		x: number,
		y: number,
		widthPx?: number,
		heightPx?: number,
		sizePx?: number
	): Box => {
		let wPct = 0;
		let hPct = 0;
		if (kind === "rect") {
			const w = widthPx ?? 48;
			const h = heightPx ?? 36;
			wPct = (w / BASE_W) * 100;
			hPct = (h / BASE_H) * 100;
		} else if (kind === "circle") {
			const d = sizePx ?? 40;
			wPct = (d / BASE_W) * 100;
			hPct = (d / BASE_H) * 100;
		} else {
			// hex: width = size, height ≈ size * 0.866 in viewBox terms
			const s = sizePx ?? 40;
			wPct = (s / BASE_W) * 100;
			hPct = ((s * 0.866) / BASE_H) * 100;
		}
		return {
			left: x - wPct / 2 - PADDING_PCT,
			right: x + wPct / 2 + PADDING_PCT,
			top: y - hPct / 2 - PADDING_PCT,
			bottom: y + hPct / 2 + PADDING_PCT,
		};
	};

	let attempts = 0;
	const target = clamp(Math.round(density), 4, 48);
	while (shapes.length < target && attempts < target * 120) {
		attempts++;
		const kind = kinds[Math.floor(rng() * kinds.length)];
		const x = rng() * 100;
		const y = rng() * 100;
		// Quick reject if outside viewbox margins when accounting for min size
		// Use a modest min size per kind to avoid placing too close to edge
		const minBox = candidateBox(kind, x, y, 32, 24, 28);
		if (!withinViewBox(minBox)) continue;

		// Exclude overlap with feature box (by full candidate box after actual sizing below)
		const depth = clamp(rng(), 0.15, 0.95);
		const rotate = 0; // no rotation per request
		const fill = gradients[Math.floor(rng() * gradients.length)];

		if (kind === "rect") {
			const width = 40 + rng() * 80; // px
			const height = 28 + rng() * 64; // px
			const box = candidateBox(kind, x, y, width, height);
			if (intersects(box, excludeBoxRect)) continue;
			// Check collisions
			let overlaps = false;
			for (let i = 0; i < boxes.length; i++) {
				if (intersects(box, boxes[i])) {
					overlaps = true;
					break;
				}
			}
			if (overlaps) continue;
			boxes.push(box);
			shapes.push({ kind, x, y, width, height, rotate, depth, fill, shadow: "soft" });
		} else if (kind === "circle") {
			const size = 24 + rng() * 80; // px (diameter)
			const box = candidateBox(kind, x, y, undefined, undefined, size);
			if (intersects(box, excludeBoxRect)) continue;
			let overlaps = false;
			for (let i = 0; i < boxes.length; i++) {
				if (intersects(box, boxes[i])) {
					overlaps = true;
					break;
				}
			}
			if (overlaps) continue;
			boxes.push(box);
			shapes.push({ kind, x, y, size, rotate, depth, fill, shadow: "soft" });
		} else {
			const size = 28 + rng() * 72; // px (hex width)
			const box = candidateBox(kind, x, y, undefined, undefined, size);
			if (intersects(box, excludeBoxRect)) continue;
			let overlaps = false;
			for (let i = 0; i < boxes.length; i++) {
				if (intersects(box, boxes[i])) {
					overlaps = true;
					break;
				}
			}
			if (overlaps) continue;
			boxes.push(box);
			shapes.push({ kind, x, y, size, rotate, depth, fill, shadow: "soft" });
		}
	}
	return shapes;
}

export const PatternBanner: React.FC<PatternBannerProps> = ({
	seed = 1,
	width = "100%",
	height = 400,
	density = 16,
	gradients = [
		"pb-grad-aqua-green",
		"pb-grad-purple",
		"pb-grad-blue",
		"pb-grad-grey",
		"pb-grad-azure",
	],
	shapes: shapesProp,
	neighbors = 1,
	connectorColor,
	connectorWidth,
	connectorDasharray,
	feature,
	featureWidth = "min(640px, 80%)",
	excludeBoxPct = { w: 50, h: 36 },
	className,
	style,
}) => {
	const ref = React.useRef<HTMLDivElement>(null);
	const [size, setSize] = React.useState({ w: 1200, h: 400 });

	React.useLayoutEffect(() => {
		if (!ref.current) return;
		const obs = new ResizeObserver((entries) => {
			for (const e of entries) {
				const r = e.contentRect;
				setSize({ w: r.width, h: r.height });
			}
		});
		obs.observe(ref.current);
		return () => obs.disconnect();
	}, []);

	const shapes = React.useMemo(() => {
		if (shapesProp?.length) return shapesProp;
		return generateShapes(seed, density, gradients, excludeBoxPct);
	}, [
		seed,
		density,
		gradients.join(","),
		excludeBoxPct.w,
		excludeBoxPct.h,
		shapesProp,
	]);

	const viewW = 100,
		viewH = 100;

	// Constant used for regular hexagon vertical span relative to width (sqrt(3)/2)
	const SQRT3_2 = Math.sqrt(300) / 2; // ≈ 0.8660254038

	return (
		<div
			ref={ref}
			className={["nhs-pattern-banner", className].filter(Boolean).join(" ")}
			style={{
				width: typeof width === "number" ? `${width}px` : width,
				height: typeof height === "number" ? `${height}px` : height,
				...style,
			}}
			aria-hidden
		>
			<svg
				className="nhs-pattern-banner__svg"
				viewBox={`0 0 ${viewW} ${viewH}`}
				preserveAspectRatio="none"
				aria-hidden
			>
				<defs>
					{/* Exact gradients adapted to viewBox units (names simplified) */}
					<linearGradient
						id="pb-grad-aqua-green"
						x1="0"
						y1="0"
						x2="1"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="rgb(0, 163, 151)" />
						<stop offset="1" stopColor="rgb(11, 148, 71)" />
					</linearGradient>
					<linearGradient
						id="pb-grad-purple"
						x1="0"
						y1="0"
						x2="1"
						y2="0"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="rgb(214, 203, 226)" />
						<stop offset="0.72" stopColor="rgb(192, 177, 213)" />
						<stop offset="1" stopColor="rgb(171, 151, 199)" />
					</linearGradient>
					<linearGradient
						id="pb-grad-blue"
						x1="0"
						y1="0"
						x2="1"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="rgb(38, 58, 127)" />
						<stop offset="1" stopColor="rgb(34, 94, 171)" />
					</linearGradient>
					<linearGradient
						id="pb-grad-grey"
						x1="0"
						y1="0"
						x2="1"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="rgb(66, 85, 101)" />
						<stop offset="1" stopColor="rgb(112, 132, 147)" />
					</linearGradient>
					<linearGradient
						id="pb-grad-azure"
						x1="0"
						y1="0"
						x2="1"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="rgb(96, 178, 226)" />
						<stop offset="0.51" stopColor="rgb(34, 94, 172)" />
					</linearGradient>
				</defs>

				{/* connectors: direct lines to neighbouring shapes
					- from corners of non-radial shapes (rect/hex/svg)
					- from centers of radial shapes (circle)
					Lines render behind shapes.
				*/}
				<g>
					{(() => {
						const wPct = (px: number) => (px / size.w) * 100;
						const hPct = (px: number) => (px / size.h) * 100;

						// Corner candidates per shape (circles return just center)
						const candidates: [number, number][][] = shapes.map((s) => {
							const cx = clamp(s.x, 0, 100);
							const cy = clamp(s.y, 0, 100);
							if (s.kind === 'circle') return [[cx, cy]]; // radial -> center only
							if (s.kind === 'rect') {
								const w = wPct(s.width ?? 48);
								const h = hPct(s.height ?? 36);
								return [
									[cx - w / 2, cy - h / 2],
									[cx + w / 2, cy - h / 2],
									[cx + w / 2, cy + h / 2],
									[cx - w / 2, cy + h / 2],
								];
							}
							if (s.kind === 'svg') {
								const w = wPct(s.width ?? 48);
								const h = hPct(s.height ?? 48);
								return [
									[cx - w / 2, cy - h / 2],
									[cx + w / 2, cy - h / 2],
									[cx + w / 2, cy + h / 2],
									[cx - w / 2, cy + h / 2],
								];
							}
							// hex: match polygon points used below for fills (equilateral in screen space)
							const w = wPct(s.size ?? 40);
							const h = (w * SQRT3_2) * (size.h / size.w);
							return [
								[cx - w / 2, cy],
								[cx - w / 4, cy - h / 2],
								[cx + w / 4, cy - h / 2],
								[cx + w / 2, cy],
								[cx + w / 4, cy + h / 2],
								[cx - w / 4, cy + h / 2],
							];
						});

						// Build unique k-nearest-neighbour pairs (by center distance)
						const k = Math.max(1, Math.floor(neighbors ?? 1));
						const edges = new Set<string>();
						const pairs: Array<[number, number]> = [];
						for (let i = 0; i < shapes.length; i++) {
							const dists: Array<{ j: number; d2: number }> = [];
							for (let j = 0; j < shapes.length; j++) {
								if (i === j) continue;
								const dx = shapes[i].x - shapes[j].x;
								const dy = shapes[i].y - shapes[j].y;
								dists.push({ j, d2: dx * dx + dy * dy });
							}
							dists.sort((a, b) => a.d2 - b.d2);
							const limit = Math.min(k, dists.length);
							for (let n = 0; n < limit; n++) {
								const j = dists[n].j;
								const a = Math.min(i, j);
								const b = Math.max(i, j);
								const key = `${a}-${b}`;
								if (!edges.has(key)) {
									edges.add(key);
									pairs.push([a, b]);
								}
							}
						}

						// For each pair, pick closest endpoints respecting shape type rules
						const lines: React.ReactElement[] = [];
						for (const [i, j] of pairs) {
							const Ai = candidates[i];
							const Bj = candidates[j];
							let best: { p: [number, number]; q: [number, number]; d2: number } | null = null;
							for (const p of Ai) {
								for (const q of Bj) {
									const dx = p[0] - q[0];
									const dy = p[1] - q[1];
									const d2 = dx * dx + dy * dy;
									if (!best || d2 < best.d2) best = { p, q, d2 };
								}
							}
							if (best) {
								lines.push(
									<line
										key={`nn-line-${i}-${j}`}
										x1={clamp(best.p[0], 0, 100)}
										y1={clamp(best.p[1], 0, 100)}
										x2={clamp(best.q[0], 0, 100)}
										y2={clamp(best.q[1], 0, 100)}
										className="nhs-pattern-banner-connector"
										style={{
											stroke: connectorColor,
											strokeWidth: connectorWidth,
											strokeDasharray: connectorDasharray,
										}}
									/>
								);
							}
						}
						return lines;
					})()}
				</g>

				{/* shapes */}
				<g>
					{shapes.map((s, i) => {
						const className = ["nhs-pattern-banner-shape", s.fill]
							.filter(Boolean)
							.join(" ");
						if (s.kind === "circle") {
							// Pre-compensate for non-uniform scaling to keep true circles in screen space
							const rx = ((s.size ?? 40) / size.w) * 100 * 0.5; // viewBox units based on width
							const ar = size.w / size.h; // aspect ratio (w/h)
							const ry = rx * ar; // so that after scaling, rx'==ry'
							return (
								<ellipse
									key={i}
									cx={clamp(s.x, 0, 100)}
									cy={clamp(s.y, 0, 100)}
									rx={rx}
									ry={ry}
									className={className}
								/>
							);
						}
						if (s.kind === "rect") {
							const w = ((s.width ?? 48) / size.w) * 100;
							const h = ((s.height ?? 36) / size.h) * 100;
							const x = clamp(s.x - w / 2, 0, 100),
								y = clamp(s.y - h / 2, 0, 100);
							// Do not rotate or distort shapes
							return (
								<rect
									key={i}
									x={x}
									y={y}
									width={w}
									height={h}
									className={className}
								/>
							);
						}
						if (s.kind === "svg" && s.src) {
							const w = ((s.width ?? 48) / size.w) * 100;
							const h = ((s.height ?? 48) / size.h) * 100;
							const x = clamp(s.x - w / 2, 0, 100),
								y = clamp(s.y - h / 2, 0, 100);
							// Do not rotate external SVGs either
							return (
								<image
									key={i}
									href={s.src}
									x={x}
									y={y}
									width={w}
									height={h}
									preserveAspectRatio="xMidYMid meet"
									className={className}
								/>
							);
						}
						// hexagon (pre-compensate height for aspect ratio to remain equilateral in screen space)
						const w = ((s.size ?? 40) / size.w) * 100; // viewBox units along x
						const h = w * SQRT3_2 * (size.h / size.w); // final screen-space height corresponds to regular hex
						const tx = clamp(s.x, 0, 100), ty = clamp(s.y, 0, 100);
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

			<div
				className="nhs-pattern-banner__feature"
				style={{
					width:
						typeof featureWidth === "number"
							? `${featureWidth}px`
							: featureWidth,
				}}
			>
				{feature}
			</div>
		</div>
	);
};

export default PatternBanner;
