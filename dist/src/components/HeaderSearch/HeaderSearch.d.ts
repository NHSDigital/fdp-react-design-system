import React from 'react';
import { HeaderSearchProps } from './HeaderSearch.types';
import './HeaderSearch.scss';
/**
 * HeaderSearch Component - Flexible Search Implementation
 *
 * Supports three modes:
 * 1. 'form' - Traditional form submission (SSR-friendly, default)
 * 2. 'controlled' - Full React controlled component with callbacks
 * 3. 'hybrid' - Form submission with optional client-side enhancement
 *
 * Examples:
 *
 * // SSR/Traditional form (default)
 * <HeaderSearch action="/search" />
 *
 * // Controlled React component
 * <HeaderSearch
 *   mode="controlled"
 *   value={searchQuery}
 *   callbacks={{ onChange: setSearchQuery, onSearch: handleSearch }}
 * />
 *
 * // Progressive enhancement
 * <HeaderSearch
 *   mode="hybrid"
 *   action="/search"
 *   callbacks={{ onSearch: handleClientSearch }}
 * />
 */
export declare const HeaderSearch: React.FC<HeaderSearchProps>;
