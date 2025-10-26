function initSkipLinks(scope = document) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const handleSkipLinkClick = (event) => {
    const target = event.currentTarget;
    const targetId = target.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;
    const hadTabIndex = targetElement.hasAttribute("tabindex");
    if (!hadTabIndex) targetElement.setAttribute("tabindex", "-1");
    targetElement.focus();
    targetElement.classList.add("nhsuk-skip-link-focused-element");
    const timeoutId = window.setTimeout(() => {
      targetElement.classList.remove("nhsuk-skip-link-focused-element");
      if (!hadTabIndex && targetElement.getAttribute("tabindex") === "-1") {
        targetElement.removeAttribute("tabindex");
      }
    }, 3e3);
    target.__nhsSkipLinkTimeout = timeoutId;
  };
  const links = scope.querySelectorAll(".nhsuk-skip-link");
  links.forEach((link) => {
    const el = link;
    if (!el.__nhsSkipLinkHandler) {
      el.addEventListener("click", handleSkipLinkClick);
      el.__nhsSkipLinkHandler = handleSkipLinkClick;
    }
    el.setAttribute("data-enhanced", "true");
  });
}
function detachSkipLinks(scope = document) {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  const links = scope.querySelectorAll(".nhsuk-skip-link");
  links.forEach((link) => {
    const el = link;
    const timeoutId = el.__nhsSkipLinkTimeout;
    if (timeoutId && window.clearTimeout) window.clearTimeout(timeoutId);
    if (el.__nhsSkipLinkHandler) {
      el.removeEventListener("click", el.__nhsSkipLinkHandler);
      delete el.__nhsSkipLinkHandler;
    }
    el.removeAttribute("data-enhanced");
  });
}
export {
  detachSkipLinks,
  initSkipLinks
};
//# sourceMappingURL=skipLinkBehaviour.js.map
