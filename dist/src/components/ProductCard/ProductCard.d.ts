import React from "react";
import type { ProductCardProps } from "./ProductCard.types";
import "./ProductCard.scss";
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
export declare const ProductCard: React.FC<ProductCardProps>;
