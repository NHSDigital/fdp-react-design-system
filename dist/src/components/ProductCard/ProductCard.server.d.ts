import React from "react";
import type { ProductCardProps } from "./ProductCard.types";
import "./ProductCard.scss";
export { ProductCardThemeEnum } from "./ProductCard.types";
export type { ProductCardImageType, ProductCardTheme, VectorGraphicShape, } from "./ProductCard.types";
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
export declare const ProductCardServer: React.FC<ProductCardServerProps>;
