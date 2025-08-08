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
export type { HeaderProps, AccountItem, NavigationItem } from './Header/Header.types';

// SSR-Safe Basic Components (verified to have no hooks or context usage)
export { ActionLink } from './ActionLink';
export type { ActionLinkProps } from './ActionLink';
export { Button } from './Button';
export type { NHSButtonProps } from './Button';
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

// Additional SSR-Safe Components (add more as verified)
export { Input } from './Input';
export type { InputProps } from './Input';
export { Textarea } from './Textarea';
export type { TextareaProps } from './Textarea';
export { Select } from './Select';
export type { SelectProps, SelectOption } from './Select';
export { Checkboxes } from './Checkboxes';
export type { CheckboxesProps, CheckboxItem } from './Checkboxes';
export { Radios } from './Radios';
export type { RadiosProps, RadioOption } from './Radios';

// ⚠️  EXCLUDED COMPONENTS (contain hooks or context):
// - NHSThemeProvider (uses createContext, useContext, useEffect)
// - Header (uses useState, useRef, useEffect, useCallback)
// - CharacterCount (uses useState, useEffect, useCallback)
// - SortableDataTable components (heavy hook usage)
// - Any components that depend on NHSThemeProvider
//
// If you need these components in SSR, consider:
// 1. Using dynamic imports with { ssr: false }
// 2. Wrapping in a client component with "use client"
// 3. Using the static/SSR alternatives where available
