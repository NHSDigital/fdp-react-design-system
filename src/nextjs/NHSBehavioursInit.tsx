"use client";

/**
 * @deprecated This component is deprecated and will be removed in a future version.
 * 
 * Instead, create your own client-side behaviours initializer in your Next.js app:
 * 
 * ```tsx
 * // app/components/BehavioursInit.tsx
 * "use client";
 * import { useEffect } from "react";
 * 
 * export function BehavioursInit() {
 *   useEffect(() => {
 *     let cancelled = false;
 *     (async () => {
 *       try {
 *         const { initAll } = await import("@nhsdigital/fdp-design-system/behaviours");
 *         if (!cancelled && typeof initAll === "function") {
 *           initAll(document);
 *         }
 *       } catch (err) {
 *         console.error("Failed to load behaviours", err);
 *       }
 *     })();
 *     return () => { cancelled = true; };
 *   }, []);
 *   return null;
 * }
 * ```
 * 
 * Then use it in your layout:
 * ```tsx
 * // app/layout.tsx
 * import { BehavioursInit } from "./components/BehavioursInit";
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <BehavioursInit />
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 * 
 * This approach removes the Next.js dependency from the design system while
 * giving you full control over when and how behaviours are initialized.
 */
import { useEffect } from "react";

/**
 * @deprecated Create your own BehavioursInit component in your app instead.
 * See the JSDoc above for migration guidance.
 */
export function NHSBehavioursInit() {
	useEffect(() => {
		// Emit deprecation warning once
		if (process.env.NODE_ENV !== 'production') {
			console.warn(
				'[NHSBehavioursInit] DEPRECATED: This component will be removed in a future version. ' +
				'Create your own BehavioursInit component in your app instead. ' +
				'See the JSDoc comments for migration guidance.'
			);
		}

		let cancelled = false;

		(async () => {
			try {
				// Import via the package export so Next bundles it for the client.
				const mod: any = await import(
					"@nhsdigital/fdp-design-system/behaviours"
				);
				if (cancelled) return;

				// The behaviours bundle already exposes globals when loaded.
				// For determinism in hydration-sensitive apps, also invoke initAll immediately if present.
				if (mod && typeof mod.initAll === "function") {
					try {
						mod.initAll(document);
					} catch {}
				}
			} catch (err) {
				console.error("NHSBehavioursInit: failed to load behaviours", err);
			}
		})();

		return () => {
			cancelled = true;
		};
	}, []);

	return null;
}
