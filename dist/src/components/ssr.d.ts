/**
 * SSR-Safe Component Exports
 *
 * Components re-exported here are verified to avoid React hooks / context in their
 * render paths so they can be safely imported in a server component (e.g. Next.js
 * App Router) without triggering client boundary errors.
 *
 * Legacy exports HeaderSSR / HeaderStatic have been removed – use `Header` directly.
 */
export { Header } from './Header';
export { Account } from './Account';
export type { HeaderProps, NavigationItem } from './Header/Header.types';
export type { HeaderSearchProps } from './HeaderSearch';
export type { AccountProps, AccountItem } from './Account/Account.types';
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
