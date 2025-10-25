import React from 'react';
import { HeroProps } from './Hero.types';
import './Hero.scss';
/**
 * Hero component - displays a prominent banner section with optional background image
 *
 * The Hero component creates a prominent banner section, typically used at the top of pages.
 * It supports both text-only and image background variants, with automatic responsive styling.
 *
 * Features:
 * - Blue background with white text by default
 * - Optional background image with overlay
 * - Responsive design with mobile-first approach
 * - Configurable heading levels and content
 * - Accessibility-compliant markup
 * - Support for custom HTML content or React children
 *
 * @param props - The Hero component props
 * @returns JSX.Element
 */
export declare const Hero: React.FC<HeroProps>;
export default Hero;
