function createButtonBehaviour(options = {}) {
  let el = null;
  const { preventDoubleClick, onClick } = options;
  let processingTimeout = null;
  const handleClick = (e) => {
    if (preventDoubleClick) {
      if ((el == null ? void 0 : el.getAttribute("data-processing")) === "true") {
        e.preventDefault();
        return;
      }
      el == null ? void 0 : el.setAttribute("data-processing", "true");
      processingTimeout = window.setTimeout(() => {
        el == null ? void 0 : el.removeAttribute("data-processing");
        processingTimeout = null;
      }, 1e3);
    }
    onClick == null ? void 0 : onClick(e);
  };
  const handleKeyDown = (e) => {
    if (!el) return;
    if (e.key === " " && el.tagName === "A") {
      e.preventDefault();
      el.click();
    }
  };
  return {
    attach(element) {
      el = element;
      el.addEventListener("click", handleClick);
      el.addEventListener("keydown", handleKeyDown);
    },
    detach() {
      if (!el) return;
      el.removeEventListener("click", handleClick);
      el.removeEventListener("keydown", handleKeyDown);
      if (processingTimeout) window.clearTimeout(processingTimeout);
      el = null;
    }
  };
}
function initButtons(scope = document) {
  const nodes = Array.from(scope.querySelectorAll('[data-module="nhs-button"][data-prevent-double-click]'));
  nodes.forEach((node) => {
    const n = node;
    if (!n.__nhsButtonBehaviour) {
      const behaviour = createButtonBehaviour({ preventDoubleClick: true });
      behaviour.attach(n);
      n.__nhsButtonBehaviour = behaviour;
    }
  });
}
function detachButtons(scope = document) {
  const nodes = Array.from(scope.querySelectorAll('[data-module="nhs-button"][data-prevent-double-click]'));
  nodes.forEach((node) => {
    const n = node;
    if (n.__nhsButtonBehaviour) {
      n.__nhsButtonBehaviour.detach();
      delete n.__nhsButtonBehaviour;
    }
  });
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitButtons) {
    window.__nhsInitButtons = initButtons;
    window.__nhsDetachButtons = detachButtons;
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => initButtons());
    } else {
      initButtons();
    }
  }
}
export {
  createButtonBehaviour,
  detachButtons,
  initButtons
};
//# sourceMappingURL=buttonBehaviour.js.map
