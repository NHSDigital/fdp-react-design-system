// Behaviour for Checkboxes using shared conditional reveal utility
import { attachConditionalReveals } from "./conditionalRevealUtil.js";

interface CheckboxesHandles {
	detach: () => void;
}
interface CheckboxesContainer extends HTMLElement {
	__nhsCheckboxesBehaviour?: CheckboxesHandles;
}

function enhance(container: CheckboxesContainer): CheckboxesHandles {
	return attachConditionalReveals({
		inputSelector: 'input.nhsuk-checkboxes__input[type="checkbox"]',
		hiddenClass: "nhsuk-checkboxes__conditional--hidden",
		container,
		eventName: "nhs:checkboxes:change",
	});
}

export function initCheckboxes(scope: ParentNode = document) {
	const groups = Array.from(
		scope.querySelectorAll<CheckboxesContainer>(".nhsuk-checkboxes")
	);
	groups.forEach((g) => {
		if (!g.__nhsCheckboxesBehaviour) g.__nhsCheckboxesBehaviour = enhance(g);
	});
}

export function detachCheckboxes(scope: ParentNode = document) {
	const groups = Array.from(
		scope.querySelectorAll<CheckboxesContainer>(".nhsuk-checkboxes")
	);
	groups.forEach((g) => {
		g.__nhsCheckboxesBehaviour?.detach();
		delete g.__nhsCheckboxesBehaviour;
	});
}

if (typeof window !== "undefined") {
	// @ts-ignore
	if (!window.__nhsInitCheckboxes) {
		// @ts-ignore
		window.__nhsInitCheckboxes = initCheckboxes;
		// @ts-ignore
		window.__nhsDetachCheckboxes = detachCheckboxes;
		if (document.readyState === "loading")
			document.addEventListener("DOMContentLoaded", () => initCheckboxes());
		else initCheckboxes();
	}
}
