/**
 * Next.js-specific behaviour initialization utility
 *
 * This module provides a server-safe way to initialize behaviours in Next.js
 * without using "use client" directive. It uses Next.js Script component
 * which automatically handles SSR/CSR differences.
 *
 * @example
 * ```tsx
 * // app/layout.tsx (Next.js App Router - Server Component)
 * import { InitBehaviours } from '@fergusbisset/nhs-fdp-design-system/nextjs'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <InitBehaviours />
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export declare function InitBehaviours(): import("react/jsx-runtime").JSX.Element;
/**
 * Alternative: Direct inline initialization (no dynamic import)
 * Use this if you want behaviours bundled with your app bundle
 *
 * @example
 * ```tsx
 * import { InitBehavioursInline } from '@fergusbisset/nhs-fdp-design-system/nextjs'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <InitBehavioursInline />
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 */
export declare function InitBehavioursInline(): import("react/jsx-runtime").JSX.Element;
