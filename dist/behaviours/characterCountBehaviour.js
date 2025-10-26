function enhanceCharacterCount(root) {
  const textarea = root.querySelector("textarea");
  const message = root.querySelector(".nhsuk-character-count__message, .nhsuk-hint");
  if (!textarea || !message) return { detach: () => {
  } };
  const maxLength = Number(root.getAttribute("data-maxlength")) || void 0;
  const maxWords = Number(root.getAttribute("data-maxwords")) || void 0;
  const threshold = Number(root.getAttribute("data-threshold")) || 0;
  const limit = maxLength || maxWords || 0;
  const unit = maxWords ? "word" : "character";
  const unitPlural = maxWords ? "words" : "characters";
  function countValue(val) {
    if (maxWords) {
      const t = val.trim();
      if (!t) return 0;
      return t.split(/\s+/).length;
    }
    return val.length;
  }
  function update() {
    const text = textarea.value;
    const current = countValue(text);
    const remaining = limit - current;
    const thresholdCount = Math.floor(limit * (threshold / 100));
    const showCount = current >= thresholdCount || current > limit;
    const isOver = current > limit;
    let msg;
    if (!showCount) {
      msg = `You can enter up to ${limit} ${limit === 1 ? unit : unitPlural}`;
    } else if (isOver) {
      const over = Math.abs(remaining);
      msg = `You have ${over} ${over === 1 ? unit : unitPlural} too many`;
    } else {
      msg = `You have ${remaining} ${remaining === 1 ? unit : unitPlural} remaining`;
    }
    message.textContent = msg;
    message.classList.toggle("nhsuk-error-message", isOver);
    if (isOver) textarea.setAttribute("aria-invalid", "true");
    else textarea.removeAttribute("aria-invalid");
    root.dispatchEvent(new CustomEvent("nhs:character-count:update", { bubbles: true, detail: { current, remaining, isOverLimit: isOver } }));
  }
  const handler = () => update();
  textarea.addEventListener("input", handler);
  update();
  return { detach() {
    textarea.removeEventListener("input", handler);
  } };
}
function initCharacterCounts(scope = document) {
  const roots = Array.from(scope.querySelectorAll('[data-module="nhsuk-character-count"]'));
  roots.forEach((r) => {
    if (!r.__nhsCharacterCount) r.__nhsCharacterCount = enhanceCharacterCount(r);
  });
}
function detachCharacterCounts(scope = document) {
  const roots = Array.from(scope.querySelectorAll('[data-module="nhsuk-character-count"]'));
  roots.forEach((r) => {
    var _a;
    (_a = r.__nhsCharacterCount) == null ? void 0 : _a.detach();
    delete r.__nhsCharacterCount;
  });
}
if (typeof window !== "undefined") {
  if (!window.__nhsInitCharacterCounts) {
    window.__nhsInitCharacterCounts = initCharacterCounts;
    window.__nhsDetachCharacterCounts = detachCharacterCounts;
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => initCharacterCounts());
    else initCharacterCounts();
  }
}
export {
  detachCharacterCounts,
  initCharacterCounts
};
//# sourceMappingURL=characterCountBehaviour.js.map
