import React from "react";
import { Heading } from "../Heading";
import type {
	ProductCardProps,
	VectorGraphicShape,
	ProductCardTheme,
} from "./ProductCard.types";
import { ProductCardThemeEnum } from "./ProductCard.types";
import "./ProductCard.scss";

// Deterministic RNG (same as PatternBanner)
function mulberry32(a: number) {
	return function () {
		let t = (a += 0x6d2b79f5);
		t = Math.imul(t ^ (t >>> 15), t | 1);
		t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

const DEFAULT_GRADIENTS: ProductCardTheme[] = [
	ProductCardThemeEnum.AquaGreen,
	ProductCardThemeEnum.Purple,
	ProductCardThemeEnum.Blue,
	ProductCardThemeEnum.Grey,
	ProductCardThemeEnum.Azure,
];

function clamp(n: number, min: number, max: number) {
	return Math.max(min, Math.min(max, n));
}

/**
 * Generate vector shapes for graphic images (adapted from PatternBanner)
 */
function generateVectorShapes(
	seed: number,
	theme: ProductCardTheme,
	density: number = 4
): VectorGraphicShape[] {
	const rng = mulberry32(seed);
	const shapes: VectorGraphicShape[] = [];
	const kinds: VectorGraphicShape["kind"][] = ["rect", "hex", "circle"];

	// Get complementary gradients based on theme
	const themeIndex = DEFAULT_GRADIENTS.indexOf(theme);
	const gradients = [
		theme,
		DEFAULT_GRADIENTS[(themeIndex + 2) % DEFAULT_GRADIENTS.length],
		DEFAULT_GRADIENTS[(themeIndex + 3) % DEFAULT_GRADIENTS.length],
	];

	// Track bounding boxes for collision detection (in viewBox % units)
	type Box = { left: number; right: number; top: number; bottom: number };
	const boxes: Box[] = [];

	// Base reference for converting px to viewBox %
	const BASE_W = 1200;
	const BASE_H = 400;
	const PADDING_PCT = 1.2; // spacing between shapes

	const intersects = (a: Box, b: Box) =>
		!(
			a.right < b.left ||
			a.left > b.right ||
			a.bottom < b.top ||
			a.top > b.bottom
		);

	const withinViewBox = (b: Box) =>
		b.left >= 0 && b.top >= 0 && b.right <= 100 && b.bottom <= 100;

	const candidateBox = (
		kind: VectorGraphicShape["kind"],
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
			// hex
			const s = sizePx ?? 40;
			wPct = (s / BASE_W) * 100;
			hPct = ((s * (Math.sqrt(3) / 2)) / BASE_H) * 100;
		}
		return {
			left: x - wPct / 2 - PADDING_PCT,
			right: x + wPct / 2 + PADDING_PCT,
			top: y - hPct / 2 - PADDING_PCT,
			bottom: y + hPct / 2 + PADDING_PCT,
		};
	};

	let attempts = 0;
	const target = clamp(Math.round(density), 4, 12);

	while (shapes.length < target && attempts < target * 120) {
		attempts++;
		const kind = kinds[Math.floor(rng() * kinds.length)];

		// Sample position with slight bias to center
		const x = clamp(20 + rng() * 60, 10, 90);
		const y = clamp(20 + rng() * 60, 10, 90);

		const gradient = gradients[Math.floor(rng() * gradients.length)];
		const shadow = shapes.length < 2 ? "soft" : "none";

		if (kind === "rect") {
			const width = 40 + rng() * 80; // 40-120px (same as PatternBanner)
			const height = 28 + rng() * 64; // 28-92px
			const box = candidateBox(kind, x, y, width, height);

			if (!withinViewBox(box)) continue;

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
			shapes.push({ kind, x, y, width, height, gradient, rotate: 0, shadow });
		} else if (kind === "circle") {
			const size = 24 + rng() * 80; // 24-104px diameter (same as PatternBanner)
			const box = candidateBox(kind, x, y, undefined, undefined, size);

			if (!withinViewBox(box)) continue;

			let overlaps = false;
			for (let i = 0; i < boxes.length; i++) {
				if (intersects(box, boxes[i])) {
					overlaps = true;
					break;
				}
			}
			if (overlaps) continue;

			boxes.push(box);
			shapes.push({ kind, x, y, size, gradient, rotate: 0, shadow });
		} else {
			// hex - hexagons can rotate for visual variety
			const size = 28 + rng() * 72; // 28-100px (same as PatternBanner)
			const rotate = rng() * 360;
			const box = candidateBox(kind, x, y, undefined, undefined, size);

			if (!withinViewBox(box)) continue;

			let overlaps = false;
			for (let i = 0; i < boxes.length; i++) {
				if (intersects(box, boxes[i])) {
					overlaps = true;
					break;
				}
			}
			if (overlaps) continue;

			boxes.push(box);
			shapes.push({ kind, x, y, size, gradient, rotate, shadow });
		}
	}

	return shapes;
}

/**
 * Render vector graphic shapes
 */
const VectorGraphic: React.FC<{
	shapes: VectorGraphicShape[];
	aspectRatio: number;
}> = ({ shapes, aspectRatio }) => {
	// Use actual SVG coordinates (like the example: 840x525)
	// This prevents any scaling/skewing issues
	const baseHeight = 600;
	const viewW = baseHeight * aspectRatio;
	const viewH = baseHeight;

	const hexPoints = (cx: number, cy: number, size: number): string => {
		// Hexagon points in proper coordinates
		const r = size / 2;
		const angles = [0, 60, 120, 180, 240, 300];
		return angles
			.map((a) => {
				const rad = (a * Math.PI) / 180;
				const x = cx + r * Math.cos(rad);
				const y = cy + r * Math.sin(rad);
				return `${x},${y}`;
			})
			.join(" ");
	};

	return (
		<svg
			className="nhs-product-card__graphic"
			viewBox={`0 0 ${viewW} ${viewH}`}
			preserveAspectRatio="xMidYMid slice"
			aria-hidden="true"
		>
			<defs>
				<linearGradient
					id="pc-grad-aqua-green"
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
					id="pc-grad-purple"
					x1="0"
					y1="0"
					x2="1"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="rgb(176, 161, 201)" />
					<stop offset="1" stopColor="rgb(198, 189, 216)" />
				</linearGradient>
				<linearGradient
					id="pc-grad-blue"
					x1="0"
					y1="0"
					x2="1"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="rgb(0, 94, 184)" />
					<stop offset="1" stopColor="rgb(65, 131, 196)" />
				</linearGradient>
				<linearGradient
					id="pc-grad-grey"
					x1="0"
					y1="0"
					x2="1"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="rgb(76, 98, 114)" />
					<stop offset="1" stopColor="rgb(174, 184, 192)" />
				</linearGradient>
				<linearGradient
					id="pc-grad-azure"
					x1="0"
					y1="0"
					x2="1"
					y2="1"
					gradientUnits="objectBoundingBox"
				>
					<stop offset="0" stopColor="rgb(0, 122, 204)" />
					<stop offset="1" stopColor="rgb(103, 192, 229)" />
				</linearGradient>
				{/* Shadow filters */}
				<filter
					id="pc-shadow-soft"
					x="-50%"
					y="-50%"
					width="200%"
					height="200%"
				>
					<feGaussianBlur in="SourceAlpha" stdDeviation="2" />
					<feOffset dx="0" dy="2" result="offsetblur" />
					<feComponentTransfer>
						<feFuncA type="linear" slope="0.2" />
					</feComponentTransfer>
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
				<filter
					id="pc-shadow-strong"
					x="-50%"
					y="-50%"
					width="200%"
					height="200%"
				>
					<feGaussianBlur in="SourceAlpha" stdDeviation="4" />
					<feOffset dx="0" dy="4" result="offsetblur" />
					<feComponentTransfer>
						<feFuncA type="linear" slope="0.3" />
					</feComponentTransfer>
					<feMerge>
						<feMergeNode />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>

			{/* Connector lines between shapes */}
			<g style={{ mixBlendMode: "multiply" }}>
				{(() => {
					if (shapes.length < 2) return null;
					
					// Generate candidate edge points for each shape (same as PatternBanner)
					const candidates = shapes.map((s) => {
						const cx = (s.x / 100) * viewW;
						const cy = (s.y / 100) * viewH;
						
						if (s.kind === "circle") {
							// Circle: use 8 cardinal/diagonal points on perimeter
							const r = (s.size ?? 40) / 2;
							const angles = [0, 45, 90, 135, 180, 225, 270, 315];
							return angles.map((deg) => {
								const rad = (deg * Math.PI) / 180;
								return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as [number, number];
							});
						} else if (s.kind === "rect") {
							// Rectangle: use 4 corners
							const w = s.width ?? 60;
							const h = s.height ?? 40;
							return [
								[cx - w / 2, cy - h / 2],
								[cx + w / 2, cy - h / 2],
								[cx + w / 2, cy + h / 2],
								[cx - w / 2, cy + h / 2],
							] as Array<[number, number]>;
						} else {
							// Hexagon: use 6 vertices
							const size = s.size ?? 40;
							const r = size / 2;
							const angles = [0, 60, 120, 180, 240, 300];
							return angles.map((deg) => {
								const rad = (deg * Math.PI) / 180;
								return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)] as [number, number];
							});
						}
					});

					// Build unique k-nearest-neighbor pairs (by center distance)
					const k = 1; // Connect to 1 nearest neighbor
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

					// For each pair, pick closest edge points (same as PatternBanner)
					return pairs.map(([i, j]) => {
						const Ai = candidates[i];
						const Bj = candidates[j];
						let best: { p: [number, number]; q: [number, number]; d2: number } | null = null;
						
						for (const p of Ai) {
							for (const q of Bj) {
								const dx = p[0] - q[0];
								const dy = p[1] - q[1];
								const d2 = dx * dx + dy * dy;
								if (!best || d2 < best.d2) {
									best = { p, q, d2 };
								}
							}
						}
						
						if (!best) return null;
						
						return (
							<line
								key={`connector-${i}-${j}`}
								x1={best.p[0]}
								y1={best.p[1]}
								x2={best.q[0]}
								y2={best.q[1]}
								stroke="rgb(158, 171, 181)"
								strokeWidth="0.5"
								strokeMiterlimit="0.5"
							/>
						);
					});
				})()}
			</g>

			{shapes.map((shape, idx) => {
				const fillClass = `pc-grad-${shape.gradient}`;
				const filter =
					shape.shadow === "soft"
						? "url(#pc-shadow-soft)"
						: shape.shadow === "strong"
							? "url(#pc-shadow-strong)"
							: undefined;

				// Convert percentage coordinates (0-100) to actual SVG coordinates
				// No scaling needed - shapes use their natural sizes
				const x = (shape.x / 100) * viewW;
				const y = (shape.y / 100) * viewH;

				if (shape.kind === "rect") {
					// Rectangles use their specified dimensions directly
					const w = shape.width || 60;
					const h = shape.height || 40;
					return (
						<rect
							key={idx}
							className={fillClass}
							x={x - w / 2}
							y={y - h / 2}
							width={w}
							height={h}
							transform={`rotate(${shape.rotate || 0} ${x} ${y})`}
							filter={filter}
						/>
					);
				} else if (shape.kind === "circle") {
					// Circles use their specified radius directly
					const r = (shape.size || 40) / 2;
					return (
						<circle
							key={idx}
							className={fillClass}
							cx={x}
							cy={y}
							r={r}
							filter={filter}
						/>
					);
				} else if (shape.kind === "hex") {
					// Hexagons use their specified size directly
					const size = shape.size || 40;
					return (
						<polygon
							key={idx}
							className={fillClass}
							points={hexPoints(x, y, size)}
							transform={`rotate(${shape.rotate || 0} ${x} ${y})`}
							filter={filter}
						/>
					);
				}
				return null;
			})}
		</svg>
	);
};

/**
 * NHS FDP ProductCard Component
 *
 * A modern product card component following FDP brand guidelines with vector graphics,
 * gradients, and flexible content options.
 *
 * @example
 * ```tsx
 * // Basic card with auto-generated graphic
 * <ProductCard
 *   title="Product Name"
 *   description="Brief description of the product"
 *   theme="blue"
 *   buttons={[
 *     { label: "Learn More", href: "/products/example" }
 *   ]}
 * />
 *
 * // Card with photo
 * <ProductCard
 *   title="Product Name"
 *   description="Description"
 *   image={{ type: "photo", src: "/images/product.jpg", alt: "Product" }}
 *   layout="horizontal"
 * />
 *
 * // Card with custom vector graphic
 * <ProductCard
 *   title="Custom Product"
 *   description="With custom shapes"
 *   image={{
 *     type: "graphic",
 *     shapes: [
 *       { kind: "circle", x: 50, y: 50, size: 80, gradient: "aqua-green" }
 *     ]
 *   }}
 * />
 * ```
 */
export const ProductCard: React.FC<ProductCardProps> = ({
	title,
	description,
	image,
	layout = "vertical",
	buttons = [],
	badge,
	theme = "blue",
	className,
	style,
	onClick,
	href,
	headingLevel = 3,
	footer,
	elevated = true,
	imageAspectRatio = 1.5,
}) => {
	const cardRef = React.useRef<HTMLDivElement>(null);

	// Generate or use provided shapes
	const shapes = React.useMemo(() => {
		if (image?.type === "graphic") {
			if (image.shapes) return image.shapes;
			const seed = image.seed ?? Date.now();
			const imgTheme = image.theme ?? theme;
			return generateVectorShapes(seed, imgTheme);
		}
		return [];
	}, [image, theme]);

	const cardClasses = [
		"nhs-product-card",
		`nhs-product-card--${layout}`,
		`nhs-product-card--theme-${theme}`,
		elevated && "nhs-product-card--elevated",
		(onClick || href) && "nhs-product-card--clickable",
		className,
	]
		.filter(Boolean)
		.join(" ");

	const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (onClick) {
			onClick(e);
		} else if (href && !e.defaultPrevented) {
			window.location.href = href;
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if ((onClick || href) && (e.key === "Enter" || e.key === " ")) {
			e.preventDefault();
			if (onClick) {
				onClick(e as unknown as React.MouseEvent<HTMLDivElement>);
			} else if (href) {
				window.location.href = href;
			}
		}
	};

	const renderImage = () => {
		if (!image) return null;

		const imageClasses = [
			"nhs-product-card__image",
			image.type === "graphic" && "nhs-product-card__image--graphic",
		]
			.filter(Boolean)
			.join(" ");

		return (
			<div
				className={imageClasses}
				style={{ aspectRatio: imageAspectRatio.toString() }}
			>
				{image.type === "photo" && image.src ? (
					<img src={image.src} alt={image.alt || ""} />
				) : image.type === "graphic" ? (
					<VectorGraphic shapes={shapes} aspectRatio={imageAspectRatio} />
				) : null}
			</div>
		);
	};

	const renderButtons = () => {
		if (!buttons.length) return null;

		return (
			<div className="nhs-product-card__actions">
				{buttons.map((button, idx) => {
					const buttonClasses = [
						"nhs-product-card__button",
						`nhs-product-card__button--${button.variant || "primary"}`,
						button.disabled && "nhs-product-card__button--disabled",
					]
						.filter(Boolean)
						.join(" ");

					if (button.href) {
						return (
							<a
								key={idx}
								href={button.href}
								className={buttonClasses}
								aria-label={button.ariaLabel}
								onClick={(e) => {
									if (button.disabled) {
										e.preventDefault();
										return;
									}
									if (button.onClick) {
										e.stopPropagation();
										button.onClick(e);
									}
								}}
							>
								{button.label}
							</a>
						);
					}

					return (
						<button
							key={idx}
							type="button"
							className={buttonClasses}
							disabled={button.disabled}
							aria-label={button.ariaLabel}
							onClick={(e) => {
								if (button.onClick) {
									e.stopPropagation();
									button.onClick(e);
								}
							}}
						>
							{button.label}
						</button>
					);
				})}
			</div>
		);
	};

	return (
		<div
			ref={cardRef}
			className={cardClasses}
			style={style}
			onClick={onClick || href ? handleCardClick : undefined}
			onKeyDown={onClick || href ? handleKeyDown : undefined}
			role={onClick || href ? "button" : undefined}
			tabIndex={onClick || href ? 0 : undefined}
		>
			{badge && <div className="nhs-product-card__badge">{badge}</div>}

			{renderImage()}

			<div className="nhs-product-card__content">
				<Heading level={headingLevel} className="nhs-product-card__title">
					{title}
				</Heading>

				<p className="nhs-product-card__description">{description}</p>

				{renderButtons()}

				{footer && <div className="nhs-product-card__footer">{footer}</div>}
			</div>
		</div>
	);
};
