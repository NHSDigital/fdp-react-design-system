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

"use client";
import { useEffect } from "react";

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

export function BehavioursLoader({ scope, onInit, onError }: BehavioursLoaderProps = {}) {
	useEffect(() => {
		if (typeof window === "undefined") return;

		// Prevent behaviours module from auto-initialising on import
		// We'll set the real function after we import, and then run it.
		if (!(window as any).__nhsInitAllBehaviours) {
			(window as any).__nhsInitAllBehaviours = () => {};
		}

		// Dynamic import keeps the behaviours bundle out of the server chunk
		// and only loads it in the browser on demand
		import("./index.js")
			.then(({ initAll }) => {
				// Replace shim with real function
				(window as any).__nhsInitAllBehaviours = initAll;
				
				try {
					// Initialize behaviours after React hydration
					const target = scope || document;
					initAll(target);
					onInit?.();
				} catch (e) {
					// Log error but don't break the page
					console.error('[BehavioursLoader] Failed to initialize behaviours:', e);
					onError?.(e);
				}
			})
			.catch((error) => {
				console.error('[BehavioursLoader] Failed to load behaviours module:', error);
				onError?.(error);
			});
	}, [scope, onInit, onError]);

	return null;
}
