function enhanceRangeInput(input) {
  const wrapper = input.closest(".nhsuk-input-range-wrapper");
  const currentValueEl = wrapper == null ? void 0 : wrapper.querySelector(
    ".nhsuk-input-range-current-value strong"
  );
  const update = () => {
    const val = input.value;
    input.setAttribute("data-current-value", val);
    if (currentValueEl) currentValueEl.textContent = val;
  };
  const listener = () => {
    update();
    input.dispatchEvent(new CustomEvent("nhs:range:update", { bubbles: true }));
  };
  input.addEventListener("input", listener);
  update();
  return {
    detach() {
      input.removeEventListener("input", listener);
    }
  };
}
function initRanges(scope = document) {
  const inputs = Array.from(
    scope.querySelectorAll(
      "input.nhsuk-input--range[data-current-value]"
    )
  );
  inputs.forEach((inp) => {
    if (!inp.__nhsRangeBehaviour) {
      inp.__nhsRangeBehaviour = enhanceRangeInput(inp);
    }
  });
}
function detachRanges(scope = document) {
  const inputs = Array.from(
    scope.querySelectorAll(
      "input.nhsuk-input--range[data-current-value]"
    )
  );
  inputs.forEach((inp) => {
    var _a;
    (_a = inp.__nhsRangeBehaviour) == null ? void 0 : _a.detach();
    delete inp.__nhsRangeBehaviour;
  });
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitRanges) {
    window.__nhsInitRanges = initRanges;
    window.__nhsDetachRanges = detachRanges;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => initRanges());
    } else {
      initRanges();
    }
  }
}
export {
  detachRanges,
  initRanges
};
//# sourceMappingURL=rangeBehaviour.js.map
