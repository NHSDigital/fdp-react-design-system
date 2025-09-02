import { attachConditionalReveals } from "./conditionalRevealUtil";
function enhanceRadiosContainer(container) {
  var _a;
  const inputs = Array.from(container.querySelectorAll('input.nhsuk-radios__input[type="radio"][name]'));
  const name = (_a = inputs[0]) == null ? void 0 : _a.name;
  if (!name) return { detach: () => {
  } };
  const handleKeyDown = (e) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
    const enabled = inputs.filter((i) => !i.disabled);
    const current = enabled.indexOf(e.target);
    if (current === -1) return;
    e.preventDefault();
    let nextIndex = current;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") nextIndex = (current + 1) % enabled.length;
    else nextIndex = (current - 1 + enabled.length) % enabled.length;
    const next = enabled[nextIndex];
    if (next && next !== e.target) {
      next.focus();
      if (!next.checked) {
        next.click();
      }
    }
  };
  const conditionalHandles = attachConditionalReveals({
    inputSelector: 'input.nhsuk-radios__input[type="radio"][name="' + name + '"]',
    hiddenClass: "nhsuk-radios__conditional--hidden",
    container,
    eventName: "nhs:radios:change",
    exclusive: true
  });
  inputs.forEach((i) => {
    i.addEventListener("keydown", handleKeyDown);
  });
  return {
    detach() {
      inputs.forEach((i) => {
        i.removeEventListener("keydown", handleKeyDown);
      });
      conditionalHandles.detach();
    }
  };
}
function initRadios(scope = document) {
  const containers = Array.from(scope.querySelectorAll(".nhsuk-radios"));
  containers.forEach((c) => {
    if (!c.__nhsRadiosBehaviour) {
      c.__nhsRadiosBehaviour = enhanceRadiosContainer(c);
    }
  });
}
function detachRadios(scope = document) {
  const containers = Array.from(scope.querySelectorAll(".nhsuk-radios"));
  containers.forEach((c) => {
    var _a;
    (_a = c.__nhsRadiosBehaviour) == null ? void 0 : _a.detach();
    delete c.__nhsRadiosBehaviour;
  });
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitRadios) {
    window.__nhsInitRadios = initRadios;
    window.__nhsDetachRadios = detachRadios;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => initRadios());
    } else {
      initRadios();
    }
  }
}
export {
  detachRadios,
  initRadios
};
//# sourceMappingURL=radiosBehaviour.js.map
