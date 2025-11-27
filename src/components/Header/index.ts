export { Header } from './Header';
export { HeaderServer } from './Header.server';
// Backward compatibility aliases (deprecated): map old names to unified implementations
// HeaderStatic previously pointed to a purely static SSR-friendly header; now use Header
// HeaderSSR previously pointed to an SSR-specific variant; now HeaderServer
export { Header as HeaderStatic } from './Header';
export { HeaderServer as HeaderSSR } from './Header.server';
export type { HeaderProps, NavigationItem } from './Header.types';
