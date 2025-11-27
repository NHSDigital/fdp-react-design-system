// Behaviour layer aggregate exports
// Additional behaviours should be registered here for initAll()
export {
	createButtonBehaviour,
	initButtons,
	detachButtons,
} from "./buttonBehaviour.js";
export { initRadios, detachRadios } from "./radiosBehaviour.js";
export { initRanges, detachRanges } from "./rangeBehaviour.js";
export {
	initCharacterCounts,
	detachCharacterCounts,
} from "./characterCountBehaviour.js";
export { initCheckboxes, detachCheckboxes } from "./checkboxesBehaviour.js";
export { initHeaders, detachHeaders } from "./headerBehaviour.js";
export { initSkipLinks, detachSkipLinks } from "./skipLinkBehaviour.js";

import { initButtons, detachButtons } from "./buttonBehaviour.js";
import { initRadios, detachRadios } from "./radiosBehaviour.js";
import { initRanges, detachRanges } from "./rangeBehaviour.js";
import {
	initCharacterCounts,
	detachCharacterCounts,
} from "./characterCountBehaviour.js";
import { initCheckboxes, detachCheckboxes } from "./checkboxesBehaviour.js";
import { initHeaders, detachHeaders } from "./headerBehaviour.js";
import { initSkipLinks, detachSkipLinks } from "./skipLinkBehaviour.js";

export function initAll(scope: ParentNode = document) {
	initButtons(scope);
	initRadios(scope);
	initRanges(scope);
	initCharacterCounts(scope);
	initCheckboxes(scope);
	initHeaders(scope);
	initSkipLinks(scope);
	// Future: conditional reveals generalisation util.
}

export function teardownAll(scope: ParentNode = document) {
	detachButtons(scope);
	detachRadios(scope);
	detachRanges(scope);
	detachCharacterCounts(scope);
	detachCheckboxes(scope);
	detachHeaders(scope);
	detachSkipLinks(scope);
}

// Auto init hook (opt-in via data attribute in future if needed)
if (typeof window !== "undefined") {
	// @ts-ignore
	if (!window.__nhsInitAllBehaviours) {
		// @ts-ignore
		window.__nhsInitAllBehaviours = initAll;
		// @ts-ignore
		window.__nhsTeardownAllBehaviours = teardownAll;
		
		// Expose individual init functions for HeaderServer inline script
		// @ts-ignore
		window.__nhsHeaderBehaviours = {
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
		
		// Auto run after DOM ready
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", () => initAll());
		} else {
			initAll();
		}
	}
}
