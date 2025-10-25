/**
 * BehavioursLoader - React component for loading and initializing behaviours after hydration
 *
 * This client component ensures behaviours are initialized after React hydration completes,
 * preventing SSR/client attribute mismatches and hydration warnings. It dynamically imports
 * the behaviours bundle to keep it out of the server chunk.
 *
 * @example
 * ```tsx
 * // app/layout.tsx (Next.js App Router)
 * import { BehavioursLoader } from '@fergusbisset/nhs-fdp-design-system/behaviours';
 *
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <BehavioursLoader />
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Scoped initialization
 * <div ref={containerRef}>
 *   <YourComponents />
 *   <BehavioursLoader scope={containerRef.current} />
 * </div>
 * ```
 */
export interface BehavioursLoaderProps {
    /**
     * Optional scope to limit behaviour initialization to a specific container.
     * If not provided, behaviours will be initialized on the entire document.
     */
    scope?: ParentNode | null;
    /**
     * Optional callback invoked after behaviours are successfully initialized.
     */
    onInit?: () => void;
    /**
     * Optional callback invoked if behaviour initialization fails.
     */
    onError?: (error: unknown) => void;
}
export declare function BehavioursLoader({ scope, onInit, onError }?: BehavioursLoaderProps): null;
