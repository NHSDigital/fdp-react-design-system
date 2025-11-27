/** @deprecated Use <NHSBehavioursInit /> instead. */
export declare function InitBehaviours(): import("react/jsx-runtime").JSX.Element;
/**
 * Alternative: Direct inline initialization (no dynamic import)
 * Use this if you want behaviours bundled with your app bundle
 *
 * @example
 * ```tsx
 * import { InitBehavioursInline } from '@nhsdigital/fdp-design-system/nextjs'
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
/** @deprecated Use <NHSBehavioursInit /> instead. */
export declare function InitBehavioursInline(): import("react/jsx-runtime").JSX.Element;
