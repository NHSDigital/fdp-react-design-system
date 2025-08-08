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
export { HeaderSSR } from './Header/HeaderSSR';
export { HeaderStatic } from './Header/HeaderStatic';
export type { HeaderProps, AccountItem, NavigationItem } from './Header/Header.types';
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
