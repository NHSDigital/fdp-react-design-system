/**
 * SSR-Safe Component Exports
 * 
 * This file exports only components that are safe for server-side rendering
 * without any React hooks, createContext, or client-side dependencies.
 * 
 * Use these imports in Next.js App Router and other SSR environments
 * to avoid "createContext only works in Client Components" errors.
 * 
 * USAGE:
 * import { HeaderSSR, HeaderStatic } from '@fergusbisset/nhs-fdp-design-system/ssr';
 * 
 * Or import individual components:
 * import { HeaderSSR } from '@fergusbisset/nhs-fdp-design-system/components/Header/HeaderSSR';
 */

// SSR-Safe Header Components (zero hooks, pure React components)
export { HeaderSSR } from './Header/HeaderSSR';
export { HeaderStatic } from './Header/HeaderStatic';
export type { HeaderProps, NavigationItem } from './Header/Header.types';
export type { AccountItem } from './Account/Account.types';

// SSR-Safe Basic Components (verified to have no hooks or context usage)
export { ActionLink } from './ActionLink';
export type { ActionLinkProps } from './ActionLink';
export { ButtonSSR as Button } from './Button/ButtonSSR';
export type { ButtonSSRProps as ButtonProps } from './Button/ButtonSSR';
export { BackLink } from './BackLink';
export type { BackLinkProps } from './BackLink';
export { Tag } from './Tag';
export type { TagColor, TagProps } from './Tag';
export { Label } from './Label';
export type { LabelProps } from './Label';
export { Heading } from './Heading';
export type { HeadingProps } from './Heading';
export { Hint } from './Hint';
export type { HintProps } from './Hint';
export { ErrorMessage } from './ErrorMessage';
export type { ErrorMessageProps } from './ErrorMessage';
export { SkipLink } from './SkipLink';
export type { SkipLinkProps } from './SkipLink';

// ⚠️  REMOVED COMPONENTS (contain react-aria-components or other context dependencies):
// - Button (uses react-aria-components which includes createContext)
// - Input, Textarea, Select, Checkboxes, Radios (may use react-aria-components)

// ⚠️  EXCLUDED COMPONENTS (contain hooks, context, or react-aria-components):
// - NHSThemeProvider (uses createContext, useContext, useEffect)
// - Header (uses useState, useRef, useEffect, useCallback)
// - Button (uses react-aria-components which includes createContext)
// - CharacterCount (uses useState, useEffect, useCallback)
// - Input, Textarea, Select, Checkboxes, Radios (may use react-aria-components)
// - SortableDataTable components (heavy hook usage)
// - Any components that depend on NHSThemeProvider or react-aria-components
//
// If you need these components in SSR, consider:
// 1. Using dynamic imports with { ssr: false }
// 2. Wrapping in a client component with "use client"
// 3. Using the static/SSR alternatives where available (e.g., ButtonSSR)
