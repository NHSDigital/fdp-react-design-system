import type React from "react";

export type PatternBannerShapeKind = "rect" | "hex" | "circle" | "svg";

export type PatternBannerShape = {
	kind: PatternBannerShapeKind;
	// For svg kind
	src?: string; // Vite ?url asset
	// Size in px (converted to viewBox pct)
	width?: number;
	height?: number;
	size?: number; // for circle/hex
	x: number; // 0-100 (center)
	y: number; // 0-100 (center)
	rotate?: number;
	depth?: number; // 0..1 parallax depth scaling
	fill?: string; // class token for gradient fill (applied via SCSS)
	shadow?: "none" | "soft" | "strong";
};

export type PatternBannerProps = {
	seed?: number;
	width?: number | string; // css width
	height?: number | string; // css height
	density?: number; // number of shapes
	centrality?: number; // 0..1 bias placement towards centre (0 = uniform)
	gradients?: string[]; // class hooks for gradient fills
	shapes?: PatternBannerShape[]; // optional exact shapes override
	// Allow shapes to overlap each other (skips collision avoidance)
	allowOverlaps?: boolean;
		// Overlap color policy when allowOverlaps=true: 'recolor' tries another gradient to avoid conflicts; 'skip' skips placing conflicting shapes
		overlapColorPolicy?: 'recolor' | 'skip';
	// Hexagon proportions (screen-space height/width). Default: sqrt(3)/2 ≈ 0.8660254
	hexAspectRatio?: number;
	// Connector options
	neighbors?: number; // connect up to k nearest unique neighbours (default 1)
	connectorColor?: string; // stroke color override (falls back to CSS class)
	connectorWidth?: number; // stroke width override in viewBox units
	connectorDasharray?: string; // e.g. "2 2"
	// Feature box in the middle
	feature: React.ReactNode;
	featureWidth?: number | string;
		// Feature layering: over shapes (default) or behind shapes
		featureLayer?: 'over' | 'under';
	// Exclude a central region from shapes (in % of width/height)
	excludeBoxPct?: { w: number; h: number };
	// Alternate protected regions (centred at 50,50) in percent units
	excludeCirclePct?: { r: number }; // radius as % of viewBox
	excludeEllipsePct?: { rx: number; ry: number }; // radii as % of viewBox
		// Uniform variant: distribute shapes evenly and ignore all exclusion zones
		uniformDistribution?: boolean;
	className?: string;
	style?: React.CSSProperties;
};
