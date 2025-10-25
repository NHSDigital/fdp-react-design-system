/**
 * Browser-only behaviour initialization script
 *
 * This module provides a vanilla JS approach to initialize behaviours after page load.
 * No React required - can be used via a script tag in Next.js or any SSR framework.
 *
 * Usage in Next.js App Router:
 *
 * @example
 * ```tsx
 * // app/layout.tsx
 * import Script from 'next/script'
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <Script
 *           src="/@fergusbisset/nhs-fdp-design-system/behaviours/init.js"
 *           strategy="afterInteractive"
 *         />
 *       </body>
 *     </html>
 *   )
 * }
 * ```
 *
 * @example
 * ```html
 * <!-- Or use standard script tag -->
 * <script src="/node_modules/@fergusbisset/nhs-fdp-design-system/dist/behaviours/init.js" defer></script>
 * ```
 */
export {};
