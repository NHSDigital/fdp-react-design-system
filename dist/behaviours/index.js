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
import { initButtons as initButtons2, detachButtons as detachButtons2 } from "./buttonBehaviour.js";
import { initRadios as initRadios2, detachRadios as detachRadios2 } from "./radiosBehaviour.js";
import { initRanges as initRanges2, detachRanges as detachRanges2 } from "./rangeBehaviour.js";
import {
  initCharacterCounts as initCharacterCounts2,
  detachCharacterCounts as detachCharacterCounts2
} from "./characterCountBehaviour.js";
import { initCheckboxes as initCheckboxes2, detachCheckboxes as detachCheckboxes2 } from "./checkboxesBehaviour.js";
import { initHeaders as initHeaders2, detachHeaders as detachHeaders2 } from "./headerBehaviour.js";
function initAll(scope = document) {
  initButtons2(scope);
  initRadios2(scope);
  initRanges2(scope);
  initCharacterCounts2(scope);
  initCheckboxes2(scope);
  initHeaders2(scope);
}
function teardownAll(scope = document) {
  detachButtons2(scope);
  detachRadios2(scope);
  detachRanges2(scope);
  detachCharacterCounts2(scope);
  detachCheckboxes2(scope);
  detachHeaders2(scope);
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitAllBehaviours) {
    window.__nhsInitAllBehaviours = initAll;
    window.__nhsTeardownAllBehaviours = teardownAll;
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
  initAll,
  initButtons,
  initCharacterCounts,
  initCheckboxes,
  initHeaders,
  initRadios,
  initRanges,
  teardownAll
};
//# sourceMappingURL=index.js.map
