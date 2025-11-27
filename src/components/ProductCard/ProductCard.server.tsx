import React from "react";
import { Heading } from "../Heading";
import type {
	ProductCardProps,
	VectorGraphicShape,
	ProductCardTheme,
} from "./ProductCard.types";
import { ProductCardThemeEnum, VectorGraphicKindEnum, VectorGraphicShadowEnum, ProductCardLayoutEnum } from "./ProductCard.types";
import "./ProductCard.scss";

// Re-export for convenience
export { ProductCardThemeEnum } from "./ProductCard.types";
export type {
	ProductCardImageType,
	ProductCardTheme,
	VectorGraphicShape,
} from "./ProductCard.types";

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
	const kinds: VectorGraphicShape["kind"][] = [VectorGraphicKindEnum.Rect, VectorGraphicKindEnum.Hex, VectorGraphicKindEnum.Circle];

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
		if (kind === VectorGraphicKindEnum.Rect) {
			const w = widthPx ?? 48;
			const h = heightPx ?? 36;
			wPct = (w / BASE_W) * 100;
			hPct = (h / BASE_H) * 100;
		} else if (kind === VectorGraphicKindEnum.Circle) {
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
		const shadow = shapes.length < 2 ? VectorGraphicShadowEnum.Soft : VectorGraphicShadowEnum.None;

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
					
					for (let i = 0; i < shapes.length; i++) {
						const neighbors: Array<{ index: number; dist: number }> = [];
						const cx1 = (shapes[i].x / 100) * viewW;
						const cy1 = (shapes[i].y / 100) * viewH;
						
						for (let j = 0; j < shapes.length; j++) {
							if (i === j) continue;
							const cx2 = (shapes[j].x / 100) * viewW;
							const cy2 = (shapes[j].y / 100) * viewH;
							const dist = Math.sqrt((cx2 - cx1) ** 2 + (cy2 - cy1) ** 2);
							neighbors.push({ index: j, dist });
						}
						
						neighbors.sort((a, b) => a.dist - b.dist);
						
						for (let n = 0; n < k && n < neighbors.length; n++) {
							const j = neighbors[n].index;
							const key = i < j ? `${i}-${j}` : `${j}-${i}`;
							edges.add(key);
						}
					}

					// Draw connector lines between nearest edge points
					return Array.from(edges).map((key) => {
						const [i, j] = key.split("-").map(Number);
						const cand1 = candidates[i];
						const cand2 = candidates[j];
						
						// Find closest edge-to-edge pair
						let minDist = Infinity;
						let p1: [number, number] = [0, 0];
						let p2: [number, number] = [0, 0];
						
						for (const c1 of cand1) {
							for (const c2 of cand2) {
								const d = Math.sqrt((c2[0] - c1[0]) ** 2 + (c2[1] - c1[1]) ** 2);
								if (d < minDist) {
									minDist = d;
									p1 = c1;
									p2 = c2;
								}
							}
						}
						
						return (
							<line
								key={key}
								x1={p1[0]}
								y1={p1[1]}
								x2={p2[0]}
								y2={p2[1]}
								stroke="rgba(255,255,255,0.25)"
								strokeWidth="1.5"
							/>
						);
					});
				})()}
			</g>

			{/* Render shapes */}
			{shapes.map((shape, idx) => {
				const cx = (shape.x / 100) * viewW;
				const cy = (shape.y / 100) * viewH;
				const fill = `url(#pc-grad-${shape.gradient})`;
				const filter =
					shape.shadow === "soft"
						? "url(#pc-shadow-soft)"
						: shape.shadow === "strong"
							? "url(#pc-shadow-strong)"
							: undefined;

				if (shape.kind === "circle") {
					const r = (shape.size ?? 40) / 2;
					return (
						<circle
							key={idx}
							cx={cx}
							cy={cy}
							r={r}
							fill={fill}
							filter={filter}
						/>
					);
				} else if (shape.kind === "rect") {
					const w = shape.width ?? 60;
					const h = shape.height ?? 40;
					const transform = shape.rotate
						? `rotate(${shape.rotate} ${cx} ${cy})`
						: undefined;
					return (
						<rect
							key={idx}
							x={cx - w / 2}
							y={cy - h / 2}
							width={w}
							height={h}
							rx="4"
							fill={fill}
							filter={filter}
							transform={transform}
						/>
					);
				} else {
					// hexagon
					const transform = shape.rotate
						? `rotate(${shape.rotate} ${cx} ${cy})`
						: undefined;
					return (
						<polygon
							key={idx}
							points={hexPoints(cx, cy, shape.size ?? 40)}
							fill={fill}
							filter={filter}
							transform={transform}
						/>
					);
				}
			})}
		</svg>
	);
};

/**
 * Server-safe props for ProductCard (no event handlers)
 */
export interface ProductCardServerProps extends Omit<ProductCardProps, 'onClick' | 'buttons'> {
	/**
	 * Optional buttons/CTAs (max 2 recommended) - href only, no onClick
	 */
	buttons?: Array<{
		label: string;
		href: string;
		variant?: "primary" | "secondary" | "tertiary";
		disabled?: boolean;
		ariaLabel?: string;
	}>;
}

/**
 * ProductCard Server Component
 * 
 * Server-safe version of ProductCard for use in Next.js Server Components.
 * This version does not support onClick handlers or button onClick callbacks.
 * 
 * For interactive cards, use the client version from the main barrel:
 * ```tsx
 * 'use client';
 * import { ProductCard } from '@nhsdigital/fdp-design-system';
 * ```
 * 
 * @example
 * ```tsx
 * // Server Component usage
 * import { ProductCard } from '@nhsdigital/fdp-design-system/ssr';
 * 
 * <ProductCard
 *   title="FDP Product"
 *   description="Server-rendered product card"
 *   image={{
 *     type: "graphic",
 *     seed: 12345,
 *     theme: "blue"
 *   }}
 *   buttons={[
 *     { label: "Learn More", href: "/product", variant: "primary" }
 *   ]}
 * />
 * ```
 */
export const ProductCardServer: React.FC<ProductCardServerProps> = ({
	title,
	description,
	image,
	layout = ProductCardLayoutEnum.Vertical,
	buttons = [],
	badge,
	theme = "blue",
	className,
	style,
	href,
	headingLevel = 3,
	footer,
	elevated = true,
	imageAspectRatio = 1.5,
}) => {
	// Generate or use provided shapes
	// Note: For SSR compatibility, always provide a seed if using graphic images
	// to avoid hydration mismatches from Date.now()
	const shapes = React.useMemo(() => {
		if (image?.type === "graphic") {
			if (image.shapes) return image.shapes;
			const seed = image.seed ?? 0; // Default to 0 for SSR consistency
			const imgTheme = image.theme ?? theme;
			return generateVectorShapes(seed, imgTheme);
		}
		return [];
	}, [image, theme]);

	// Normalize layout for class names
	const normalizedLayout = React.useMemo(() => {
		if (layout === ProductCardLayoutEnum.Landscape) return "horizontal" as const;
		if (layout === ProductCardLayoutEnum.Portrait) return "vertical" as const;
		if (layout === ProductCardLayoutEnum.Horizontal) return "horizontal" as const;
		return "vertical" as const;
	}, [layout]);

	const cardClasses = [
		"nhs-product-card",
		`nhs-product-card--${normalizedLayout}`,
		`nhs-product-card--theme-${theme}`,
		elevated && "nhs-product-card--elevated",
		href && "nhs-product-card--clickable",
		className,
	]
		.filter(Boolean)
		.join(" ");

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

					return (
						<a
							key={idx}
							href={button.href}
							className={buttonClasses}
							aria-label={button.ariaLabel}
							aria-disabled={button.disabled}
						>
							{button.label}
						</a>
					);
				})}
			</div>
		);
	};

	const content = (
		<>
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
		</>
	);

	// If href is provided, wrap entire card in anchor
	if (href) {
		return (
			<a
				href={href}
				className={cardClasses}
				style={style}
			>
				{content}
			</a>
		);
	}

	// Otherwise, just render as div
	return (
		<div
			className={cardClasses}
			style={style}
		>
			{content}
		</div>
	);
};
