/**
 * SSR-Safe Component Exports
 *
 * Components re-exported here are verified to avoid React hooks / context in their
 * render paths so they can be safely imported in a server component (e.g. Next.js
 * App Router) without triggering client boundary errors.
 *
 * Legacy exports HeaderSSR / HeaderStatic have been removed – use `Header` directly.
 */

// SSR-safe Header (pure render path)
export { Header } from './Header';
export { Account } from './Account';
export type { HeaderProps, NavigationItem } from './Header/Header.types';
export type { HeaderSearchProps } from './HeaderSearch';
export type { AccountProps, AccountItem } from './Account/Account.types';

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

// ⚠️  REMOVED COMPONENTS (contain react-aria dependencies or other context dependencies):
// - Input, Textarea, Select, Checkboxes, Radios (may use react-aria-components)

// ⚠️  EXCLUDED COMPONENTS (contain hooks, context, or react-aria dependencies):
// - All form input components that haven't been converted yet
// - Input, Textarea, Select, Checkboxes, Radios (may use react-aria-components)
// - DataTable, SortableDataTable (use hooks and state)
// - Any components that depend on NHSThemeProvider or react-aria dependencies
//
// If you need these components in SSR, consider:
// 1. Using dynamic imports with { ssr: false }
// 2. Wrapping in a client component with "use client"
// 3. Using the static/SSR alternatives where available (e.g., ButtonSSR)
