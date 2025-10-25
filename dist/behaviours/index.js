import {
  createButtonBehaviour,
  initButtons,
  detachButtons
} from "./buttonBehaviour.js";
import { initRadios, detachRadios } from "./radiosBehaviour.js";
import { initRanges, detachRanges } from "./rangeBehaviour.js";
import {
  initCharacterCounts,
  detachCharacterCounts
} from "./characterCountBehaviour.js";
import { initCheckboxes, detachCheckboxes } from "./checkboxesBehaviour.js";
import { initHeaders, detachHeaders } from "./headerBehaviour.js";
import { initSkipLinks, detachSkipLinks } from "./skipLinkBehaviour.js";
import { initButtons as initButtons2, detachButtons as detachButtons2 } from "./buttonBehaviour.js";
import { initRadios as initRadios2, detachRadios as detachRadios2 } from "./radiosBehaviour.js";
import { initRanges as initRanges2, detachRanges as detachRanges2 } from "./rangeBehaviour.js";
import {
  initCharacterCounts as initCharacterCounts2,
  detachCharacterCounts as detachCharacterCounts2
} from "./characterCountBehaviour.js";
import { initCheckboxes as initCheckboxes2, detachCheckboxes as detachCheckboxes2 } from "./checkboxesBehaviour.js";
import { initHeaders as initHeaders2, detachHeaders as detachHeaders2 } from "./headerBehaviour.js";
import { initSkipLinks as initSkipLinks2, detachSkipLinks as detachSkipLinks2 } from "./skipLinkBehaviour.js";
function initAll(scope = document) {
  initButtons2(scope);
  initRadios2(scope);
  initRanges2(scope);
  initCharacterCounts2(scope);
  initCheckboxes2(scope);
  initHeaders2(scope);
  initSkipLinks2(scope);
}
function teardownAll(scope = document) {
  detachButtons2(scope);
  detachRadios2(scope);
  detachRanges2(scope);
  detachCharacterCounts2(scope);
  detachCheckboxes2(scope);
  detachHeaders2(scope);
  detachSkipLinks2(scope);
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitAllBehaviours) {
    window.__nhsInitAllBehaviours = initAll;
    window.__nhsTeardownAllBehaviours = teardownAll;
    window.__nhsHeaderBehaviours = {
      initHeaders: initHeaders2,
      detachHeaders: detachHeaders2,
      initButtons: initButtons2,
      detachButtons: detachButtons2,
      initRadios: initRadios2,
      detachRadios: detachRadios2,
      initRanges: initRanges2,
      detachRanges: detachRanges2,
      initCharacterCounts: initCharacterCounts2,
      detachCharacterCounts: detachCharacterCounts2,
      initCheckboxes: initCheckboxes2,
      detachCheckboxes: detachCheckboxes2,
      initSkipLinks: initSkipLinks2,
      detachSkipLinks: detachSkipLinks2
    };
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => initAll());
    } else {
      initAll();
    }
  }
}
export {
  createButtonBehaviour,
  detachButtons,
  detachCharacterCounts,
  detachCheckboxes,
  detachHeaders,
  detachRadios,
  detachRanges,
  detachSkipLinks,
  initAll,
  initButtons,
  initCharacterCounts,
  initCheckboxes,
  initHeaders,
  initRadios,
  initRanges,
  initSkipLinks,
  teardownAll
};
//# sourceMappingURL=index.js.map
