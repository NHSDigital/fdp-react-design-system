import type React from "react";

/**
 * Product card image type - either a photo or vector graphic
 */
export type ProductCardImageType = "photo" | "graphic";

/**
 * Strongly typed enum for image type
 */
export enum ProductCardImageTypeEnum {
	Photo = "photo",
	Graphic = "graphic",
}

// Note: Deprecated union removed in favor of strongly-typed enum below.

/**
 * Strongly typed enum for ProductCard layout orientation.
 * Includes canonical values and their semantic aliases.
 */
export enum ProductCardLayoutEnum {
	Vertical = "vertical",
	Horizontal = "horizontal",
	Portrait = "portrait", // alias of Vertical
	Landscape = "landscape", // alias of Horizontal
}

/**
 * Product card theme enum based on FDP brand gradients
 */
export enum ProductCardThemeEnum {
	AquaGreen = "aqua-green",
	Purple = "purple",
	Blue = "blue",
	Grey = "grey",
	Azure = "azure",
}

/**
 * Product card theme based on FDP brand gradients
 */
export type ProductCardTheme =
	| "aqua-green"
	| "purple"
	| "blue"
	| "grey"
	| "azure";

/**
 * Vector graphic shape configuration
 */
export enum VectorGraphicKindEnum {
	Rect = "rect",
	Hex = "hex",
	Circle = "circle",
}

export enum VectorGraphicShadowEnum {
	None = "none",
	Soft = "soft",
	Strong = "strong",
}

export interface VectorGraphicShape {
	kind: VectorGraphicKindEnum;
	x: number; // 0-100 percentage
	y: number; // 0-100 percentage
	size?: number; // for circle/hex in px
	width?: number; // for rect in px
	height?: number; // for rect in px
	rotate?: number; // degrees
	gradient: ProductCardTheme;
	shadow?: VectorGraphicShadowEnum;
}

/**
 * Button configuration for ProductCard
 */
export enum ProductCardButtonVariantEnum {
	Primary = "primary",
	Secondary = "secondary",
	Tertiary = "tertiary",
}

export interface ProductCardButton {
	label: string;
	href?: string;
	onClick?: (
		event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
	) => void;
	variant?: ProductCardButtonVariantEnum;
	disabled?: boolean;
	ariaLabel?: string;
}

/**
 * Props for the ProductCard component
 */
export interface ProductCardProps {
	/**
	 * Product title
	 */
	title: string;

	/**
	 * Product description
	 */
	description: string;

	/**
	 * Image configuration
	 */
	image?: {
		type: ProductCardImageType;
		src?: string; // URL for photo type
		alt?: string; // Alt text for photo
		shapes?: VectorGraphicShape[]; // Custom shapes for graphic type
		seed?: number; // Seed for auto-generated graphics
		theme?: ProductCardTheme; // Theme for auto-generated graphics
	};

	/**
	 * Card layout orientation
	 * @default ProductCardLayoutEnum.Vertical
	 */
	layout?: ProductCardLayoutEnum;

	/**
	 * Optional buttons/CTAs (max 2 recommended)
	 */
	buttons?: ProductCardButton[];

	/**
	 * Optional badge or tag text
	 */
	badge?: string;

	/**
	 * Theme for the card
	 * @default "blue"
	 */
	theme?: ProductCardTheme;

	/**
	 * Custom class name
	 */
	className?: string;

	/**
	 * Custom inline styles
	 */
	style?: React.CSSProperties;

	/**
	 * Optional click handler for the entire card
	 */
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

	/**
	 * Make the entire card clickable with an href
	 */
	href?: string;

	/**
	 * Heading level for the title
	 * @default 3
	 */
	headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;

	/**
	 * Optional custom content to render in the card footer
	 */
	footer?: React.ReactNode;

	/**
	 * Enable elevation/shadow effect
	 * @default true
	 */
	elevated?: boolean;

	/**
	 * Aspect ratio for image area (width/height)
	 * @default 1.5 (3:2)
	 */
	imageAspectRatio?: number;
}
