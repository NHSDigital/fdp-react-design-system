var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames3() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames3.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames3.default = classNames3;
        module.exports = classNames3;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames3;
        });
      } else {
        window.classNames = classNames3;
      }
    })();
  }
});

// src/components/NavigationSplitView/NavigationSplitView.tsx
import * as React3 from "react";

// src/components/BackLink/BackLink.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var BackLink = ({
  text = "Back",
  html,
  href = "#",
  className,
  element = "a",
  onClick,
  ...props
}) => {
  const containerClasses = (0, import_classnames.default)(
    "nhsuk-back-link",
    className
  );
  const linkClasses = (0, import_classnames.default)(
    "nhsuk-back-link__link"
  );
  const renderContent = () => {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          className: "nhsuk-icon nhsuk-icon__chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          height: "24",
          width: "24",
          children: /* @__PURE__ */ jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
        }
      ),
      html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text
    ] });
  };
  return /* @__PURE__ */ jsx("div", { className: containerClasses, children: element === "button" ? /* @__PURE__ */ jsx(
    "button",
    {
      className: linkClasses,
      onClick,
      type: "button",
      ...props,
      children: renderContent()
    }
  ) : /* @__PURE__ */ jsx(
    "a",
    {
      className: linkClasses,
      href,
      ...props,
      children: renderContent()
    }
  ) });
};

// src/components/BackLink/ForwardLink.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ForwardLink = ({
  text = "Next",
  html,
  href = "#",
  className,
  element = "a",
  onClick,
  ...props
}) => {
  const containerClasses = (0, import_classnames2.default)("nhsuk-back-link", className);
  const linkClasses = (0, import_classnames2.default)("nhsuk-back-link__link");
  const renderContent = () => /* @__PURE__ */ jsxs2("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
    html ? /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    /* @__PURE__ */ jsx2(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ jsx2("path", { d: "M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" })
      }
    )
  ] });
  return /* @__PURE__ */ jsx2("div", { className: containerClasses, children: element === "button" ? /* @__PURE__ */ jsx2("button", { className: linkClasses, type: "button", onClick, ...props, children: renderContent() }) : /* @__PURE__ */ jsx2("a", { className: linkClasses, href, ...props, children: renderContent() }) });
};
ForwardLink.displayName = "ForwardLink";

// src/hooks/useBreakpoints.ts
import * as React from "react";
var NHS_FDP_BREAKPOINTS = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function getViewportWidth() {
  if (typeof window === "undefined") return NHS_FDP_BREAKPOINTS.small;
  return window.innerWidth || document.documentElement.clientWidth || 0;
}
function useNhsFdpBreakpoints() {
  const [width, setWidth] = React.useState(getViewportWidth());
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => setWidth(getViewportWidth());
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  const up = React.useCallback((key) => width >= NHS_FDP_BREAKPOINTS[key], [width]);
  const down = React.useCallback((key) => width < NHS_FDP_BREAKPOINTS[key], [width]);
  const between = React.useCallback((min, max) => {
    return width >= NHS_FDP_BREAKPOINTS[min] && width < NHS_FDP_BREAKPOINTS[max];
  }, [width]);
  return {
    width,
    up,
    down,
    between,
    /** Raw numeric values */
    values: NHS_FDP_BREAKPOINTS
  };
}

// src/hooks/useNavigationSplitUrlSync.ts
import * as React2 from "react";
function useNavigationSplitUrlSync(options = {}) {
  const { enabled = true, paramSelected = "nsv", paramDrill = "nsvDrill" } = options;
  const [selectedId, setSelectedId] = React2.useState(() => {
    if (typeof window === "undefined" || !enabled) return void 0;
    const sp = new URLSearchParams(window.location.search);
    return sp.get(paramSelected);
  });
  const [drilledIn, setDrilledIn] = React2.useState(() => {
    if (typeof window === "undefined" || !enabled) return false;
    const sp = new URLSearchParams(window.location.search);
    return sp.get(paramDrill) === "1";
  });
  React2.useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    if (selectedId) sp.set(paramSelected, String(selectedId));
    else sp.delete(paramSelected);
    sp.set(paramDrill, drilledIn ? "1" : "0");
    const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", newUrl);
  }, [selectedId, drilledIn, enabled, paramSelected, paramDrill]);
  return { selectedId, setSelectedId, drilledIn, setDrilledIn };
}

// src/components/NavigationSplitView/NavigationSplitView.tsx
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var ChevronLeftIcon = ({ className }) => /* @__PURE__ */ jsx3("svg", { className, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ jsx3("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) });
var ChevronRightIcon = ({ className }) => /* @__PURE__ */ jsx3("svg", { className, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ jsx3("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function NavigationSplitView(props) {
  const {
    items,
    selectedId: controlledSelectedId,
    defaultSelectedId,
    onSelectionChange,
    renderItemContent,
    renderContent,
    renderSecondaryContent,
    forceLayout,
    animated = true,
    backLabel = "Back",
    nextLabel = "Next",
    isLoading = false,
    emptyState,
    a11y,
    className,
    getId = (i) => i.id,
    orientation = "vertical",
    autoEnableThirdColumn = true,
    onDrillChange,
    navigationInstructions = "Use arrow keys to navigate, Enter to open.",
    initialFocus = "first",
    skipFocusOnSelect = false,
    skipAnnouncements = false,
    onFocusChange,
    syncUrl = false,
    urlParamSelected = "nsv",
    urlParamDrill = "nsvDrill",
    urlSyncDebounceMs = 0,
    lazySecondary = false,
    navFooter,
    collapsibleNav = false,
    navInitiallyCollapsed = false,
    onNavCollapseChange,
    collapseToggleLabelShow = "Show navigation",
    collapseToggleLabelHide = "Hide navigation",
    collapseToggleIconShow,
    collapseToggleIconHide,
    persistNavCollapsed,
    navCollapsedStorageKey = "nsvCollapsed",
    navCollapsedUrlParam = "nsvCollapsed",
    autoContentHeader,
    contentHeaderLevel = 2,
    renderContentHeader,
    contentSubheader,
    secondarySubheader
  } = props;
  const { up } = useNhsFdpBreakpoints();
  const [hydrated, setHydrated] = React3.useState(false);
  React3.useEffect(() => {
    setHydrated(true);
  }, []);
  const isAtLeastMedium = hydrated && up("medium");
  const isAtLeastXlarge = hydrated && up("xlarge");
  let effectiveLayout;
  if (forceLayout) {
    effectiveLayout = forceLayout;
  } else if (isAtLeastMedium) {
    effectiveLayout = "two-column";
  } else {
    effectiveLayout = "list";
  }
  if (!forceLayout && autoEnableThirdColumn && renderSecondaryContent && isAtLeastXlarge) {
    effectiveLayout = "three-column";
  }
  const urlSync = useNavigationSplitUrlSync({
    enabled: syncUrl,
    paramSelected: urlParamSelected,
    paramDrill: urlParamDrill
  });
  const [uncontrolledSelected, setUncontrolledSelected] = React3.useState(
    () => urlSync.selectedId !== void 0 ? urlSync.selectedId : defaultSelectedId
  );
  const selectedId = controlledSelectedId !== void 0 ? controlledSelectedId : uncontrolledSelected;
  const selectedItem = items.find((i) => getId(i) === selectedId);
  const rootRef = React3.useRef(null);
  const contentPaneRef = React3.useRef(null);
  const detailActive = !!selectedItem && (effectiveLayout === "list" || effectiveLayout === "cards");
  const autoHeaderConfig = React3.useMemo(() => {
    if (autoContentHeader === void 0) {
      return { mobile: true, tablet: false, desktop: false };
    }
    if (autoContentHeader === true) {
      return { mobile: true, tablet: true, desktop: true };
    }
    if (autoContentHeader === false) {
      return { mobile: false, tablet: false, desktop: false };
    }
    return {
      mobile: autoContentHeader.mobile !== void 0 ? autoContentHeader.mobile : true,
      tablet: autoContentHeader.tablet || false,
      desktop: autoContentHeader.desktop || false
    };
  }, [autoContentHeader]);
  const isTabletRange = hydrated && up("medium") && !up("xlarge");
  const isDesktopRange = hydrated && up("xlarge");
  const tertiaryAvailable = !!renderSecondaryContent;
  const tertiaryVisible = effectiveLayout === "three-column";
  const [tertiaryInlineActive, setTertiaryInlineActive] = React3.useState(false);
  React3.useEffect(() => {
    if (tertiaryVisible && tertiaryInlineActive) setTertiaryInlineActive(false);
  }, [tertiaryVisible, tertiaryInlineActive]);
  const baseHeaderCondition = !!selectedItem && (detailActive && autoHeaderConfig.mobile || !detailActive && isTabletRange && autoHeaderConfig.tablet || !detailActive && isDesktopRange && autoHeaderConfig.desktop);
  const showHeader = baseHeaderCondition || tertiaryAvailable && !tertiaryVisible;
  const headingTag = `h${contentHeaderLevel}`;
  const defaultHeadingNode = selectedItem ? React3.createElement(headingTag, { style: { marginLeft: detailActive ? 32 : 0, marginRight: detailActive ? 32 : 0 } }, selectedItem.label) : null;
  const headerContext = detailActive ? "mobile" : isTabletRange ? "tablet" : "desktop";
  const showForward = tertiaryAvailable && !tertiaryVisible && !tertiaryInlineActive;
  const backLinkNode = detailActive && autoHeaderConfig.mobile ? /* @__PURE__ */ jsx3(
    BackLink,
    {
      element: "button",
      text: backLabel,
      style: { marginRight: 16 },
      onClick: () => handleSelect(void 0, void 0)
    }
  ) : void 0;
  const forwardLinkNode = showForward ? /* @__PURE__ */ jsx3(
    ForwardLink,
    {
      element: "button",
      text: nextLabel,
      onClick: () => {
        setTertiaryInlineActive(true);
      }
    }
  ) : void 0;
  const tertiaryBackNode = !tertiaryVisible && tertiaryInlineActive ? /* @__PURE__ */ jsx3(
    BackLink,
    {
      element: "button",
      text: backLabel,
      style: { marginRight: 16 },
      onClick: () => setTertiaryInlineActive(false)
    }
  ) : void 0;
  const renderedHeaderInner = React3.useMemo(() => {
    if (!showHeader || !selectedItem) return null;
    if (renderContentHeader) return renderContentHeader({
      item: selectedItem,
      detailActive,
      context: headerContext,
      backLink: backLinkNode,
      defaultHeading: defaultHeadingNode
    });
    const sub = selectedItem && contentSubheader ? typeof contentSubheader === "function" ? contentSubheader(selectedItem) : contentSubheader : null;
    return /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
        tertiaryBackNode || backLinkNode,
        /* @__PURE__ */ jsxs3("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: [
          defaultHeadingNode,
          sub && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__subheader", children: sub })
        ] })
      ] }),
      forwardLinkNode && /* @__PURE__ */ jsx3("div", { style: { marginLeft: "auto" }, children: forwardLinkNode })
    ] });
  }, [showHeader, selectedItem, renderContentHeader, detailActive, headerContext, backLinkNode, tertiaryBackNode, defaultHeadingNode, forwardLinkNode, contentSubheader]);
  React3.useEffect(() => {
    if (!syncUrl) return;
    const drilled = effectiveLayout === "three-column";
    let cancelled = false;
    const apply = () => {
      if (cancelled) return;
      if (urlSync.selectedId !== selectedId) urlSync.setSelectedId(selectedId);
      if (urlSync.drilledIn !== drilled) urlSync.setDrilledIn(drilled);
    };
    if (urlSyncDebounceMs && urlSyncDebounceMs > 0) {
      const t = setTimeout(apply, urlSyncDebounceMs);
      return () => {
        cancelled = true;
        clearTimeout(t);
      };
    } else {
      apply();
    }
  }, [syncUrl, urlSync, selectedId, effectiveLayout, urlSyncDebounceMs]);
  React3.useEffect(() => {
    if (!syncUrl) return;
    const handler = () => {
      const sp = new URLSearchParams(window.location.search);
      const sel = sp.get(urlParamSelected);
      const drill = sp.get(urlParamDrill) === "1";
      setUncontrolledSelected(sel === null ? void 0 : sel);
      if (!forceLayout && drill && renderSecondaryContent) {
      }
    };
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, [syncUrl, urlParamSelected, urlParamDrill, forceLayout, renderSecondaryContent]);
  const lastFocusedIndexRef = React3.useRef(0);
  const handleSelect = React3.useCallback((id, item) => {
    if (controlledSelectedId === void 0) setUncontrolledSelected(id);
    onSelectionChange == null ? void 0 : onSelectionChange(id, item);
  }, [controlledSelectedId, onSelectionChange]);
  React3.useEffect(() => {
    if (!skipFocusOnSelect && detailActive && contentPaneRef.current) {
      const t = setTimeout(() => {
        var _a;
        return (_a = contentPaneRef.current) == null ? void 0 : _a.focus();
      }, 30);
      return () => clearTimeout(t);
    }
  }, [detailActive, selectedId, skipFocusOnSelect]);
  const listRef = React3.useRef(null);
  const [focusedIndex, setFocusedIndex] = React3.useState(() => initialFocus === "first" ? 0 : -1);
  React3.useEffect(() => {
    if (!listRef.current) return;
    const nodes = Array.from(listRef.current.querySelectorAll("button[data-nav-item]"));
    nodes.forEach((btn, idx) => btn.tabIndex = (focusedIndex === -1 ? idx === 0 && initialFocus === "first" : idx === focusedIndex) ? 0 : -1);
    if (focusedIndex >= 0) {
      const node = nodes[focusedIndex];
      node == null ? void 0 : node.focus();
      const item = items[focusedIndex];
      onFocusChange == null ? void 0 : onFocusChange(item ? getId(item) : void 0, item, focusedIndex);
    }
  }, [focusedIndex, items, initialFocus, onFocusChange, getId]);
  const onKeyDownList = (e) => {
    const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const backward = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (e.key === forward) {
      e.preventDefault();
      setFocusedIndex((i) => Math.min(items.length - 1, i + 1));
    } else if (e.key === backward) {
      e.preventDefault();
      setFocusedIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setFocusedIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setFocusedIndex(items.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const item = items[focusedIndex];
      if (item && !item.disabled) handleSelect(getId(item), item);
    }
  };
  const initialCollapsed = React3.useMemo(() => {
    if (persistNavCollapsed && (persistNavCollapsed === "url" || persistNavCollapsed === "both") && typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      const val = sp.get(navCollapsedUrlParam);
      if (val === "1") return true;
      if (val === "0") return false;
    }
    if (persistNavCollapsed && (persistNavCollapsed === "localStorage" || persistNavCollapsed === "both") && typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem(navCollapsedStorageKey);
        if (raw === "1") return true;
        if (raw === "0") return false;
      } catch {
      }
    }
    return navInitiallyCollapsed;
  }, [persistNavCollapsed, navInitiallyCollapsed, navCollapsedStorageKey, navCollapsedUrlParam]);
  const [navCollapsed, setNavCollapsed] = React3.useState(initialCollapsed);
  React3.useEffect(() => {
    onNavCollapseChange == null ? void 0 : onNavCollapseChange(navCollapsed);
  }, [navCollapsed, onNavCollapseChange]);
  const toggleNav = React3.useCallback(() => {
    if (isAtLeastMedium && collapsibleNav) setNavCollapsed((c) => !c);
  }, [isAtLeastMedium, collapsibleNav]);
  React3.useEffect(() => {
    if (!persistNavCollapsed) return;
    if (typeof window === "undefined") return;
    if (persistNavCollapsed === "localStorage" || persistNavCollapsed === "both") {
      try {
        window.localStorage.setItem(navCollapsedStorageKey, navCollapsed ? "1" : "0");
      } catch {
      }
    }
    if (persistNavCollapsed === "url" || persistNavCollapsed === "both") {
      const sp = new URLSearchParams(window.location.search);
      sp.set(navCollapsedUrlParam, navCollapsed ? "1" : "0");
      const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [navCollapsed, persistNavCollapsed, navCollapsedStorageKey, navCollapsedUrlParam]);
  const rootClasses = [
    "nhs-navigation-split-view",
    animated ? "nhs-navigation-split-view--animated" : "",
    detailActive ? "nhs-navigation-split-view--detail-active" : "",
    effectiveLayout === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    collapsibleNav && isAtLeastMedium && navCollapsed ? "nhs-navigation-split-view--nav-collapsed" : "",
    className
  ].filter(Boolean).join(" ");
  const liveRef = React3.useRef(null);
  React3.useEffect(() => {
    if (skipAnnouncements) return;
    if (liveRef.current) {
      const msg = selectedItem ? `Selected ${selectedItem.label}` : "Selection cleared";
      liveRef.current.textContent = msg;
    }
  }, [selectedItem, skipAnnouncements]);
  React3.useEffect(() => {
    if (!detailActive && selectedId == null && listRef.current) {
      const btns = listRef.current.querySelectorAll("button[data-nav-item]");
      const target = btns[lastFocusedIndexRef.current];
      target == null ? void 0 : target.focus();
    }
  }, [detailActive, selectedId]);
  const drilledIn = effectiveLayout === "three-column";
  const [secondaryMounted, setSecondaryMounted] = React3.useState(false);
  React3.useEffect(() => {
    if (drilledIn && !secondaryMounted) setSecondaryMounted(true);
  }, [drilledIn, secondaryMounted]);
  const prevDrillRef = React3.useRef(drilledIn);
  React3.useEffect(() => {
    if (prevDrillRef.current !== drilledIn) {
      onDrillChange == null ? void 0 : onDrillChange(drilledIn);
      prevDrillRef.current = drilledIn;
    }
  }, [drilledIn, onDrillChange]);
  const renderNavigationCollection = () => {
    if (effectiveLayout === "cards") {
      return /* @__PURE__ */ jsxs3("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": selectedId ? String(selectedId) : void 0, children: [
        items.map((item) => {
          const id = getId(item);
          const selected = id === selectedId;
          return /* @__PURE__ */ jsx3("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": selected, children: /* @__PURE__ */ jsxs3(
            "button",
            {
              id: String(id),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": selected || void 0,
              "data-disabled": item.disabled || void 0,
              disabled: item.disabled,
              onClick: () => !item.disabled && handleSelect(id, item),
              children: [
                item.icon && /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__item-icon", children: item.icon }),
                /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__item-label", children: item.label }),
                item.description && /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__item-description", children: item.description }),
                renderItemContent == null ? void 0 : renderItemContent(item),
                item.badge !== void 0 && /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__badge", children: item.badge })
              ]
            }
          ) }, id);
        }),
        items.length === 0 && !isLoading && /* @__PURE__ */ jsx3("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: emptyState || /* @__PURE__ */ jsx3("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    }
    const instructionsId = "nsv-nav-instructions";
    const NavItem = React3.useMemo(() => {
      const C = ({ item, idx, selected }) => {
        const id = getId(item);
        return /* @__PURE__ */ jsx3("li", { className: "nhs-navigation-split-view__list-item", role: "option", "aria-selected": selected, children: /* @__PURE__ */ jsxs3(
          "button",
          {
            id: String(id),
            "data-nav-item": true,
            type: "button",
            className: "nhs-navigation-split-view__item-button",
            "data-selected": selected || void 0,
            "data-disabled": item.disabled || void 0,
            disabled: item.disabled,
            "aria-current": selected ? "true" : void 0,
            onClick: () => {
              if (!item.disabled) {
                lastFocusedIndexRef.current = idx;
                handleSelect(id, item);
              }
            },
            children: [
              item.icon && /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__item-icon", children: item.icon }),
              /* @__PURE__ */ jsxs3("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__item-label", children: item.label }),
                item.description && /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__item-description", children: item.description }),
                renderItemContent == null ? void 0 : renderItemContent(item)
              ] }),
              item.badge !== void 0 && /* @__PURE__ */ jsx3("span", { className: "nhs-navigation-split-view__badge", children: item.badge })
            ]
          }
        ) });
      };
      return React3.memo(C);
    }, [getId, handleSelect, renderItemContent]);
    return /* @__PURE__ */ jsxs3(Fragment2, { children: [
      /* @__PURE__ */ jsxs3(
        "ul",
        {
          ref: listRef,
          className: "nhs-navigation-split-view__list",
          onKeyDown: onKeyDownList,
          role: "listbox",
          "aria-describedby": instructionsId,
          "aria-activedescendant": selectedId ? String(selectedId) : void 0,
          children: [
            items.map((item, idx) => /* @__PURE__ */ jsx3(NavItem, { item, idx, selected: getId(item) === selectedId }, getId(item))),
            items.length === 0 && !isLoading && /* @__PURE__ */ jsx3("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: emptyState || /* @__PURE__ */ jsx3("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx3("div", { id: instructionsId, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: navigationInstructions })
    ] });
  };
  return /* @__PURE__ */ jsx3(
    "div",
    {
      ref: rootRef,
      className: rootClasses,
      "aria-label": a11y == null ? void 0 : a11y.rootLabel,
      "data-layout": effectiveLayout,
      children: /* @__PURE__ */ jsxs3("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ jsxs3("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": detailActive || void 0, style: { transform: detailActive ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ jsxs3(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": (a11y == null ? void 0 : a11y.navigationLabel) || "Items",
              "data-collapsed": navCollapsed || void 0,
              children: [
                collapsibleNav && isAtLeastMedium && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ jsx3(
                  "button",
                  {
                    type: "button",
                    onClick: toggleNav,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": navCollapsed ? collapseToggleLabelShow : collapseToggleLabelHide,
                    title: navCollapsed ? collapseToggleLabelShow : collapseToggleLabelHide,
                    children: navCollapsed ? collapseToggleIconShow || /* @__PURE__ */ jsx3(ChevronRightIcon, {}) : collapseToggleIconHide || /* @__PURE__ */ jsx3(ChevronLeftIcon, {})
                  }
                ) }),
                /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__nav-scroll", children: renderNavigationCollection() }),
                navFooter && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: navFooter })
              ]
            }
          ),
          /* @__PURE__ */ jsxs3(
            "div",
            {
              ref: contentPaneRef,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": (a11y == null ? void 0 : a11y.contentLabel) || "Content",
              "data-has-selection": !!selectedItem || void 0,
              tabIndex: -1,
              children: [
                showHeader && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__header", children: renderedHeaderInner }),
                /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: tertiaryInlineActive && !tertiaryVisible ? renderSecondaryContent == null ? void 0 : renderSecondaryContent(selectedItem) : renderContent(selectedItem) })
              ]
            }
          ),
          effectiveLayout === "three-column" && (!lazySecondary || secondaryMounted) && /* @__PURE__ */ jsx3(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": (a11y == null ? void 0 : a11y.secondaryContentLabel) || "Secondary",
              children: /* @__PURE__ */ jsxs3("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                selectedItem && secondarySubheader && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof secondarySubheader === "function" ? secondarySubheader(selectedItem) : secondarySubheader }),
                /* @__PURE__ */ jsx3("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: renderSecondaryContent == null ? void 0 : renderSecondaryContent(selectedItem) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx3("div", { ref: liveRef, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ jsx3("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: drilledIn ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
NavigationSplitView.displayName = "NavigationSplitView";
export {
  NavigationSplitView
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=index.js.map
