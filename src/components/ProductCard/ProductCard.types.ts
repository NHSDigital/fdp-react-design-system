import type React from "react";

/**
 * Product card image type - either a photo or vector graphic
 */
export type ProductCardImageType = "photo" | "graphic";

/**
 * Product card layout orientation
 */
export type ProductCardLayout = "horizontal" | "vertical";

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
export interface VectorGraphicShape {
  kind: "rect" | "hex" | "circle";
  x: number; // 0-100 percentage
  y: number; // 0-100 percentage
  size?: number; // for circle/hex in px
  width?: number; // for rect in px
  height?: number; // for rect in px
  rotate?: number; // degrees
  gradient: ProductCardTheme;
  shadow?: "none" | "soft" | "strong";
}

/**
 * Button configuration for ProductCard
 */
export interface ProductCardButton {
  label: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  variant?: "primary" | "secondary" | "tertiary";
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
   * @default "vertical"
   */
  layout?: ProductCardLayout;

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
