/**
 * SSR-Safe Exports for Server-Side Rendering
 *
 * This entry point provides access to components that are guaranteed
 * to work in SSR environments without React hooks or createContext.
 *
 * USAGE IN NEXT.JS:
 * import { HeaderSSR, HeaderStatic } from '@fergusbisset/nhs-fdp-design-system/ssr';
 *
 * IMPORTANT: Progressive Enhancement
 * The behaviours layer is NOT automatically initialized when importing from /ssr.
 * You must manually initialize behaviours in your app for interactive features:
 *
 * Option 1 - Import behaviours directly (causes side effect initialization):
 * ```tsx
 * import '@fergusbisset/nhs-fdp-design-system/behaviours'
 * ```
 *
 * Option 2 - Use the InitBehaviours helper (Next.js):
 * ```tsx
 * import { InitBehaviours } from '@fergusbisset/nhs-fdp-design-system/nextjs'
 * // Add <InitBehaviours /> to your layout
 * ```
 *
 * Without behaviour initialization, components like HeaderServer will render
 * but won't be interactive (no overflow menus, no keyboard navigation).
 */
export * from './components/ssr';
export { BrandKey, LogoVariant, getBrandLogo, brandLogos } from './assets/brand';
