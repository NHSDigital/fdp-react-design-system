// Behaviour layer aggregate exports
// Additional behaviours should be registered here for initAll()
export { createButtonBehaviour, initButtons, detachButtons } from './buttonBehaviour';
export { initRadios, detachRadios } from './radiosBehaviour';
export { initRanges, detachRanges } from './rangeBehaviour';
export { initCharacterCounts, detachCharacterCounts } from './characterCountBehaviour';
export { initCheckboxes, detachCheckboxes } from './checkboxesBehaviour';
export { initHeaders, detachHeaders } from './headerBehaviour';
import { initButtons, detachButtons } from './buttonBehaviour';
import { initRadios, detachRadios } from './radiosBehaviour';
import { initRanges, detachRanges } from './rangeBehaviour';
import { initCharacterCounts, detachCharacterCounts } from './characterCountBehaviour';
import { initCheckboxes, detachCheckboxes } from './checkboxesBehaviour';
import { initHeaders, detachHeaders } from './headerBehaviour';

export function initAll(scope: ParentNode = document) {
  initButtons(scope);
  initRadios(scope);
  initRanges(scope);
  initCharacterCounts(scope);
  initCheckboxes(scope);
  initHeaders(scope);
  // Future: conditional reveals generalisation util.
}

export function teardownAll(scope: ParentNode = document) {
  detachButtons(scope);
  detachRadios(scope);
  detachRanges(scope);
  detachCharacterCounts(scope);
  detachCheckboxes(scope);
  detachHeaders(scope);
}

// Auto init hook (opt-in via data attribute in future if needed)
if (typeof window !== 'undefined') {
  // @ts-ignore
  if (!window.__nhsInitAllBehaviours) {
    // @ts-ignore
    window.__nhsInitAllBehaviours = initAll;
    // @ts-ignore
    window.__nhsTeardownAllBehaviours = teardownAll;
    // Auto run after DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => initAll());
    } else {
      initAll();
    }
  }
}
