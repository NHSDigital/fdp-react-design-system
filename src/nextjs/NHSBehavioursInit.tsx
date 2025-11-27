"use client";

/**
 * Client-only behaviours initializer for Next.js apps.
 *
 * Purpose:
 * - Ensures the behaviours bundle is included in the consuming app's client build
 * - Exposes expected globals for the SSR header inline script
 * - Triggers initialisation after hydration
 *
 * Usage (App Router):
 *   import { NHSBehavioursInit } from '@nhsdigital/fdp-design-system/nextjs';
 *   // in app/layout.tsx (Server Component)
 *   <body>
 *     <NHSBehavioursInit />
 *     <HeaderServer ... />
 *     {children}
 *   </body>
 */
import { useEffect } from "react";

export function NHSBehavioursInit() {
	useEffect(() => {
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
