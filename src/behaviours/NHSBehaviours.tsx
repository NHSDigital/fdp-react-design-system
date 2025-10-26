'use client';

import { useEffect } from 'react';

// Dynamically import behaviours and attach to window to avoid tree-shaking
export default function NHSBehavioursInit() {
	useEffect(() => {
		let cancelled = false;

		(async () => {
			try {
				// When developing inside the design system repo, import the local behaviours module.
				// Consumers should use the exported component from '@fergusbisset/nhs-fdp-design-system/nextjs'.
				const mod: any = await import('./index');

				if (cancelled) return;

				const {
					initAll,
					teardownAll,
					initHeaders,
					detachHeaders,
					initButtons,
					detachButtons,
					initRadios,
					detachRadios,
					initRanges,
					detachRanges,
					initCharacterCounts,
					detachCharacterCounts,
					initCheckboxes,
					detachCheckboxes,
					initSkipLinks,
					detachSkipLinks,
				} = mod || {};

				const w = window as any;
				// Expose globals expected by the SSR header’s inline script
				w.__nhsInitAllBehaviours = initAll;
				w.__nhsTeardownAllBehaviours = teardownAll;
				w.__nhsHeaderBehaviours = {
					initHeaders,
					detachHeaders,
					initButtons,
					detachButtons,
					initRadios,
					detachRadios,
					initRanges,
					detachRanges,
					initCharacterCounts,
					detachCharacterCounts,
					initCheckboxes,
					detachCheckboxes,
					initSkipLinks,
					detachSkipLinks,
				};

				// Ensure behaviours run for current document
				if (typeof initAll === 'function') {
					initAll(document);
				}
			} catch (err) {
				console.error('NHSBehavioursInit: failed to load behaviours', err);
			}
		})();

		return () => {
			cancelled = true;
		};
	}, []);

	return null;
}