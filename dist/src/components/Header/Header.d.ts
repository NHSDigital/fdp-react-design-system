import React from 'react';
import './Header.scss';
import './Header.ssr.scss';
import { HeaderProps } from './Header.types';
/**
 * SSR-compatible Header Component with Progressive Enhancement
 *
 * This component is designed to work with Next.js SSR by:
 * 1. Rendering a functional header on the server
 * 2. Progressively enhancing with responsive overflow handling on the client
 * 3. Providing fallback navigation that works without JavaScript
 */
export declare const Header: React.FC<HeaderProps>;
