/**
 * DEPRECATED: Use <NHSBehavioursInit /> instead.
 * This wrapper forwards to the client-only component to ensure bundler-safe behaviour loading.
 */
import { NHSBehavioursInit } from './NHSBehavioursInit';

/** @deprecated Use <NHSBehavioursInit /> instead. */
export function InitBehaviours() {
	// Forward to the client component. This avoids brittle inline script imports.
	return <NHSBehavioursInit />;
}

/**
 * Alternative: Direct inline initialization (no dynamic import)
 * Use this if you want behaviours bundled with your app bundle
 * 
 * @example
 * ```tsx
 * import { InitBehavioursInline } from '@nhsdigital/nhs-fdp-design-system/nextjs'
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
export function InitBehavioursInline() {
	return <NHSBehavioursInit />;
}
