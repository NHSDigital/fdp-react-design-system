const HEADER_SELECTOR = ".nhsuk-header";
const NAV_CONTAINER_SELECTOR = ".nhsuk-header__navigation-container";
const NAV_LIST_SELECTOR = ".nhsuk-header__navigation-list";
const DROPDOWN_MENU_CLASS = "nhsuk-header__dropdown-menu";
const DROPDOWN_LIST_CLASS = "nhsuk-header__dropdown-list";
const MORE_ITEM_CLASS = "nhsuk-header__navigation-item--more";
const NAV_ITEM_SELECTOR = ".nhsuk-header__navigation-item:not(." + MORE_ITEM_CLASS + ")";
const DEBOUNCE_MS = 150;
function debounce(fn, wait = DEBOUNCE_MS) {
  let t;
  return (...args) => {
    if (t) window.clearTimeout(t);
    t = window.setTimeout(() => fn(...args), wait);
  };
}
function initHeaders(scope = document) {
  if (typeof window === "undefined") return [];
  const headers = Array.from(
    scope.querySelectorAll(HEADER_SELECTOR)
  );
  return headers.map(enhanceHeader).filter(Boolean);
}
function detachHeaders(scope = document) {
  const headers = scope.querySelectorAll(HEADER_SELECTOR) || [];
  headers.forEach((h) => {
    const inst = h._nhsHeaderInstance;
    inst == null ? void 0 : inst.destroy();
  });
}
function enhanceHeader(root) {
  if (root._nhsHeaderInstance) return root._nhsHeaderInstance;
  root.setAttribute("data-enhancing", "header");
  const nav = root.querySelector("nav[data-ssr-hydrating]");
  if (nav) {
    nav.removeAttribute("data-ssr-hydrating");
  }
  const navContainer = root.querySelector(NAV_CONTAINER_SELECTOR);
  const navList = root.querySelector(NAV_LIST_SELECTOR);
  if (!navContainer || !navList) return null;
  let originalItemsHTML = Array.from(
    navList.querySelectorAll(NAV_ITEM_SELECTOR)
  ).map((li) => li.outerHTML);
  if (!originalItemsHTML.length) return null;
  let moreLi = null;
  let dropdownMenu = null;
  let dropdownList = null;
  let open = false;
  function buildMore() {
    if (moreLi) return;
    moreLi = document.createElement("li");
    moreLi.className = `nhsuk-header__navigation-item ${MORE_ITEM_CLASS}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nhsuk-header__navigation-button";
    btn.id = "toggle-more-menu";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", "nhsuk-header-overflow-menu");
    btn.innerHTML = '<span>More</span><svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/></svg>';
    btn.addEventListener("click", toggle);
    moreLi.appendChild(btn);
  }
  function ensureDropdown() {
    if (dropdownMenu) return;
    dropdownMenu = document.createElement("div");
    dropdownMenu.className = DROPDOWN_MENU_CLASS;
    dropdownMenu.hidden = true;
    dropdownMenu.id = "nhsuk-header-overflow-menu";
    dropdownList = document.createElement("ul");
    dropdownList.className = DROPDOWN_LIST_CLASS;
    dropdownMenu.appendChild(dropdownList);
    root.appendChild(dropdownMenu);
  }
  function close() {
    if (!open) return;
    open = false;
    if (dropdownMenu) dropdownMenu.hidden = true;
    const btn = moreLi == null ? void 0 : moreLi.querySelector("button");
    btn == null ? void 0 : btn.setAttribute("aria-expanded", "false");
  }
  function openMenu() {
    if (open) return;
    open = true;
    if (dropdownMenu) dropdownMenu.hidden = false;
    const btn = moreLi == null ? void 0 : moreLi.querySelector("button");
    btn == null ? void 0 : btn.setAttribute("aria-expanded", "true");
  }
  function toggle() {
    open ? close() : openMenu();
  }
  function cloneToDropdown(li) {
    const clone = li.cloneNode(true);
    clone.className = clone.className.replace(
      "nhsuk-header__navigation-item--current",
      "nhsuk-header__dropdown-item--current"
    ).replace("nhsuk-header__navigation-item", "nhsuk-header__dropdown-item");
    const link = clone.querySelector("a");
    if (link) link.className = "nhsuk-header__dropdown-link";
    return clone;
  }
  function measureWidths() {
    const measureUl = document.createElement("ul");
    measureUl.className = "nhsuk-header__navigation-list";
    measureUl.style.cssText = "position:absolute;visibility:hidden;left:-9999px;top:0;display:flex;flex-wrap:nowrap;";
    measureUl.innerHTML = originalItemsHTML.join("");
    document.body.appendChild(measureUl);
    const w = Array.from(measureUl.children).map(
      (li) => li.offsetWidth
    );
    document.body.removeChild(measureUl);
    return w;
  }
  function distribute() {
    close();
    if (!navList) return;
    root.dataset.headerDistStart = String(Date.now());
    const widths = measureWidths();
    root.dataset.headerLastCalc = root.dataset.headerDistStart;
    if (!widths.length) return;
    if (!navContainer) return;
    const containerWidth = navContainer.offsetWidth;
    if (containerWidth <= 0) return;
    const mobile = window.innerWidth < 768;
    const gutterSize = mobile ? 16 : 32;
    const availableContainerWidth = containerWidth - gutterSize * 2;
    const moreButtonReserve = mobile ? 72 : 100;
    navList.innerHTML = "";
    navList.style.display = "flex";
    navList.style.flexWrap = "nowrap";
    if (dropdownMenu) {
      dropdownMenu.hidden = true;
      dropdownList.innerHTML = "";
    }
    navList.innerHTML = originalItemsHTML.join("");
    const realScrollWidth = navList.scrollWidth;
    root.dataset.headerRealScroll = String(realScrollWidth);
    root.dataset.headerAvail = String(availableContainerWidth);
    const fits = realScrollWidth <= availableContainerWidth - 4;
    if (fits) {
      if (dropdownMenu) {
        dropdownMenu.remove();
        dropdownMenu = null;
        dropdownList = null;
      }
      root.dataset.headerOverflow = "none";
      return;
    }
    buildMore();
    ensureDropdown();
    const availableForItems = availableContainerWidth - moreButtonReserve;
    let running = 0;
    let fitCount = 0;
    for (let i = 0; i < widths.length; i++) {
      if (running + widths[i] <= availableForItems) {
        running += widths[i];
        fitCount = i + 1;
      } else break;
    }
    if (fitCount === widths.length) {
      if (dropdownMenu) {
        dropdownMenu.remove();
        dropdownMenu = null;
        dropdownList = null;
      }
      moreLi = null;
      navList.innerHTML = originalItemsHTML.join("");
      root.dataset.headerOverflow = "none";
      root.classList.remove("nhsuk-header--nav-overflow-active");
      return;
    }
    fitCount = Math.max(1, fitCount);
    navList.innerHTML = "";
    for (let i = 0; i < fitCount; i++) {
      navList.insertAdjacentHTML("beforeend", originalItemsHTML[i]);
    }
    navList.appendChild(moreLi);
    for (let i = fitCount; i < originalItemsHTML.length; i++) {
      const temp = document.createElement("div");
      temp.innerHTML = originalItemsHTML[i];
      const li = temp.firstElementChild;
      if (!li) continue;
      dropdownList.appendChild(cloneToDropdown(li));
    }
    const postScroll = navList.scrollWidth;
    root.dataset.headerPostScroll = String(postScroll);
    root.dataset.headerOverflow = "active";
    root.classList.add("nhsuk-header--nav-overflow-active");
  }
  let internalMutation = false;
  const observer = new MutationObserver((mutations) => {
    if (internalMutation) return;
    if (mutations.some((m) => m.type === "childList")) {
      const currentItems = Array.from(
        navList.querySelectorAll(NAV_ITEM_SELECTOR)
      );
      if (currentItems.length && currentItems.length !== originalItemsHTML.length) {
        originalItemsHTML = currentItems.map((li) => li.outerHTML);
      }
      requestAnimationFrame(guardedDistribute);
    }
  });
  observer.observe(navList, { childList: true });
  function guardedDistribute() {
    internalMutation = true;
    try {
      distribute();
    } finally {
      setTimeout(() => {
        internalMutation = false;
      }, 0);
    }
  }
  const handleKey = (e) => {
    if (e.key === "Escape") close();
  };
  const handleDocClick = (e) => {
    if (open && !root.contains(e.target)) close();
  };
  const handleResize = debounce(guardedDistribute, 150);
  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleResize);
  document.addEventListener("keydown", handleKey);
  document.addEventListener("mousedown", handleDocClick);
  requestAnimationFrame(guardedDistribute);
  const instance = {
    root,
    destroy() {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleDocClick);
      observer.disconnect();
      close();
    }
  };
  root.classList.add("nhsuk-header--enhanced");
  root._nhsHeaderInstance = instance;
  return instance;
}
export {
  detachHeaders,
  initHeaders
};
//# sourceMappingURL=headerBehaviour.js.map
