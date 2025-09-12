import { attachConditionalReveals } from "./conditionalRevealUtil.js";
function enhance(container) {
  return attachConditionalReveals({
    inputSelector: 'input.nhsuk-checkboxes__input[type="checkbox"]',
    hiddenClass: "nhsuk-checkboxes__conditional--hidden",
    container,
    eventName: "nhs:checkboxes:change"
  });
}
function initCheckboxes(scope = document) {
  const groups = Array.from(scope.querySelectorAll(".nhsuk-checkboxes"));
  groups.forEach((g) => {
    if (!g.__nhsCheckboxesBehaviour) g.__nhsCheckboxesBehaviour = enhance(g);
  });
}
function detachCheckboxes(scope = document) {
  const groups = Array.from(scope.querySelectorAll(".nhsuk-checkboxes"));
  groups.forEach((g) => {
    var _a;
    (_a = g.__nhsCheckboxesBehaviour) == null ? void 0 : _a.detach();
    delete g.__nhsCheckboxesBehaviour;
  });
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitCheckboxes) {
    window.__nhsInitCheckboxes = initCheckboxes;
    window.__nhsDetachCheckboxes = detachCheckboxes;
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => initCheckboxes());
    else initCheckboxes();
  }
}
export {
  detachCheckboxes,
  initCheckboxes
};
//# sourceMappingURL=checkboxesBehaviour.js.map
