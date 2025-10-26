import type React from "react";
/**
 * Product card image type - either a photo or vector graphic
 */
export type ProductCardImageType = "photo" | "graphic";
/**
 * Strongly typed enum for image type
 */
export declare enum ProductCardImageTypeEnum {
    Photo = "photo",
    Graphic = "graphic"
}
/**
 * Strongly typed enum for ProductCard layout orientation.
 * Includes canonical values and their semantic aliases.
 */
export declare enum ProductCardLayoutEnum {
    Vertical = "vertical",
    Horizontal = "horizontal",
    Portrait = "portrait",// alias of Vertical
    Landscape = "landscape"
}
/**
 * Product card theme enum based on FDP brand gradients
 */
export declare enum ProductCardThemeEnum {
    AquaGreen = "aqua-green",
    Purple = "purple",
    Blue = "blue",
    Grey = "grey",
    Azure = "azure"
}
/**
 * Product card theme based on FDP brand gradients
 */
export type ProductCardTheme = "aqua-green" | "purple" | "blue" | "grey" | "azure";
/**
 * Vector graphic shape configuration
 */
export declare enum VectorGraphicKindEnum {
    Rect = "rect",
    Hex = "hex",
    Circle = "circle"
}
export declare enum VectorGraphicShadowEnum {
    None = "none",
    Soft = "soft",
    Strong = "strong"
}
export interface VectorGraphicShape {
    kind: VectorGraphicKindEnum;
    x: number;
    y: number;
    size?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient: ProductCardTheme;
    shadow?: VectorGraphicShadowEnum;
}
/**
 * Button configuration for ProductCard
 */
export declare enum ProductCardButtonVariantEnum {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}
export interface ProductCardButton {
    label: string;
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
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
        src?: string;
        alt?: string;
        shapes?: VectorGraphicShape[];
        seed?: number;
        theme?: ProductCardTheme;
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
