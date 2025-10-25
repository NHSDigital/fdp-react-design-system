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

import Script from 'next/script';

export function InitBehaviours() {
	return (
		<Script
			id="nhs-fdp-behaviours"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
(function() {
	// Dynamic import to avoid bundling behaviours in server bundle
	if (typeof window !== 'undefined') {
		// Wait for hydration to complete
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initBehaviours);
		} else {
			// Use setTimeout to ensure hydration is complete
			setTimeout(initBehaviours, 0);
		}
	}
	
	function initBehaviours() {
		// Check if already initialized
		if (window.__nhsFdpBehavioursInitialized) return;
		window.__nhsFdpBehavioursInitialized = true;
		
		// Import and initialize
		import('/@fergusbisset/nhs-fdp-design-system/behaviours')
			.then(function(mod) {
				if (mod && mod.initAll) {
					mod.initAll(document);
				}
			})
			.catch(function(err) {
				console.warn('Failed to initialize NHS FDP behaviours:', err);
			});
	}
})();
				`.trim()
			}}
		/>
	);
}

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
export function InitBehavioursInline() {
	return (
		<Script
			id="nhs-fdp-behaviours-inline"
			strategy="afterInteractive"
		>
			{`
(function() {
	if (typeof window === 'undefined' || window.__nhsFdpBehavioursInitialized) return;
	window.__nhsFdpBehavioursInitialized = true;
	
	function init() {
		// This will be bundled by your build tool
		// Import the behaviours module synchronously
		try {
			const behaviours = require('@fergusbisset/nhs-fdp-design-system/behaviours');
			if (behaviours && behaviours.initAll) {
				behaviours.initAll(document);
			}
		} catch (err) {
			console.warn('Failed to initialize NHS FDP behaviours:', err);
		}
	}
	
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		setTimeout(init, 0);
	}
})();
			`.trim()}
		</Script>
	);
}
