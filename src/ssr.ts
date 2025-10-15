/**
 * SSR-Safe Exports for Server-Side Rendering
 * 
 * This entry point provides access to components that are guaranteed
 * to work in SSR environments without React hooks or createContext.
 * 
 * USAGE IN NEXT.JS:
 * import { HeaderSSR, HeaderStatic } from '@fergusbisset/nhs-fdp-design-system/ssr';
 */

export * from './components/ssr';

// Brand assets and helpers are SSR-safe (static imports only)
export { BrandKey, LogoVariant, getBrandLogo, brandLogos } from './assets/brand';
