import React from 'react';
import './SkipLink.scss';
import { SkipLinkProps } from './SkipLink.types';
/**
 * Server-only SkipLink variant with no hooks.
 * Renders a plain anchor suitable for SSR environments (e.g., Next.js server components).
 * Client-side enhancements (focus management) are intentionally omitted here.
 */
export declare const SkipLinkServer: React.FC<SkipLinkProps>;
