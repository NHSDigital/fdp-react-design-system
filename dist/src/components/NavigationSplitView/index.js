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
  const secondaryPaneRef = React3.useRef(null);
  const navPaneRef = React3.useRef(null);
  const [paneNavState, setPaneNavState] = React3.useState(() => ({ contentIndex: 0, secondaryIndex: 0 }));
  const [paneFocusMode, setPaneFocusMode] = React3.useState(() => "nav");
  const [containerIndex, setContainerIndex] = React3.useState(0);
  const getPaneOrder = () => {
    return [navPaneRef.current, contentPaneRef.current, secondaryPaneRef.current].filter(Boolean);
  };
  const focusContainerByIndex = (idx) => {
    var _a;
    const order = getPaneOrder();
    const clamped = Math.max(0, Math.min(idx, order.length - 1));
    (_a = order[clamped]) == null ? void 0 : _a.focus();
    setContainerIndex(clamped);
  };
  const getFocusableElements = React3.useCallback((root) => {
    if (!root) return [];
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll(selector)).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1 && el.offsetParent !== null);
  }, []);
  const focusContentElement = React3.useCallback((idx) => {
    var _a;
    const els = getFocusableElements(contentPaneRef.current);
    if (!els.length) {
      (_a = contentPaneRef.current) == null ? void 0 : _a.focus();
      return;
    }
    const clamped = Math.max(0, Math.min(idx, els.length - 1));
    const targetElement = els[clamped];
    targetElement.focus();
    setTimeout(() => {
      if (document.activeElement !== targetElement) {
        targetElement.focus();
        setTimeout(() => {
          if (document.activeElement !== targetElement) {
            targetElement.click();
          }
        }, 10);
      }
    }, 10);
    setPaneNavState((p) => ({ ...p, contentIndex: clamped }));
    const handleChildEscape = (e) => {
      var _a2;
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        (_a2 = contentPaneRef.current) == null ? void 0 : _a2.focus();
        targetElement.removeEventListener("keydown", handleChildEscape);
      }
    };
    els.forEach((el) => {
      const existingHandler = el._escapeHandler;
      if (existingHandler) {
        el.removeEventListener("keydown", existingHandler);
      }
    });
    targetElement._escapeHandler = handleChildEscape;
    targetElement.addEventListener("keydown", handleChildEscape);
  }, [getFocusableElements]);
  const focusSecondaryElement = React3.useCallback((idx) => {
    var _a;
    const els = getFocusableElements(secondaryPaneRef.current);
    if (!els.length) {
      (_a = secondaryPaneRef.current) == null ? void 0 : _a.focus();
      return;
    }
    const clamped = Math.max(0, Math.min(idx, els.length - 1));
    els[clamped].focus();
    setPaneNavState((p) => ({ ...p, secondaryIndex: clamped }));
    const handleChildEscape = (e) => {
      var _a2;
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        (_a2 = secondaryPaneRef.current) == null ? void 0 : _a2.focus();
        els[clamped].removeEventListener("keydown", handleChildEscape);
      }
    };
    els.forEach((el) => el.removeEventListener("keydown", handleChildEscape));
    els[clamped].addEventListener("keydown", handleChildEscape);
  }, [getFocusableElements]);
  const onRootKeyDown = (e) => {
    var _a;
    if (e.defaultPrevented) return;
    const key = e.key;
    const target = e.target;
    const inNav = !!listRef.current && listRef.current.contains(target);
    const inContent = !!contentPaneRef.current && contentPaneRef.current.contains(target);
    const inSecondary = !!secondaryPaneRef.current && secondaryPaneRef.current.contains(target);
    const hasSecondary = !!secondaryPaneRef.current;
    const isContainer = target === navPaneRef.current || target === contentPaneRef.current || target === secondaryPaneRef.current;
    if (paneFocusMode === "containers" && isContainer) {
      if (key === "ArrowRight") {
        e.preventDefault();
        const order = getPaneOrder();
        const next = Math.min(order.length - 1, containerIndex + 1);
        focusContainerByIndex(next);
        return;
      }
      if (key === "ArrowLeft") {
        e.preventDefault();
        const prev = Math.max(0, containerIndex - 1);
        focusContainerByIndex(prev);
        return;
      }
      if (key === "Home") {
        e.preventDefault();
        focusContainerByIndex(0);
        return;
      }
      if (key === "End") {
        e.preventDefault();
        focusContainerByIndex(getPaneOrder().length - 1);
        return;
      }
      if (key === "Enter" || key === " ") {
        e.preventDefault();
        if (target === navPaneRef.current) {
          setPaneFocusMode("nav");
          if (listRef.current) {
            const nodes = Array.from(listRef.current.querySelectorAll("[data-nav-item]"));
            (_a = nodes[focusedIndex >= 0 ? focusedIndex : 0] || nodes[0]) == null ? void 0 : _a.focus();
          }
        } else if (target === contentPaneRef.current) {
          setPaneFocusMode("content");
          focusContentElement(paneNavState.contentIndex);
        } else if (target === secondaryPaneRef.current) {
          setPaneFocusMode("secondary");
          focusSecondaryElement(paneNavState.secondaryIndex);
        }
        return;
      }
      return;
    }
    if (key === "Escape") {
      if (paneFocusMode === "content" || paneFocusMode === "secondary") {
        if (inContent || inSecondary) {
          e.preventDefault();
          setPaneFocusMode("nav");
          if (listRef.current) {
            const nodes = Array.from(listRef.current.querySelectorAll("[data-nav-item]"));
            const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
            setTimeout(() => candidate == null ? void 0 : candidate.focus(), 10);
          }
        } else if (target === contentPaneRef.current || target === secondaryPaneRef.current) {
          e.preventDefault();
          setPaneFocusMode("nav");
          if (listRef.current) {
            const nodes = Array.from(listRef.current.querySelectorAll("[data-nav-item]"));
            const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
            setTimeout(() => candidate == null ? void 0 : candidate.focus(), 10);
          }
        }
      }
      return;
    }
    if (key === "Enter" || key === " ") {
      const isInteractiveElement = target.matches('button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]');
      if (isInteractiveElement) {
        return;
      }
      if (target === contentPaneRef.current && paneFocusMode === "content") {
        e.preventDefault();
        e.stopPropagation();
        const contentElements = getFocusableElements(contentPaneRef.current);
        if (contentElements.length > 0) {
          setTimeout(() => {
            focusContentElement(paneNavState.contentIndex);
          }, 50);
        }
        return;
      }
      if (target === secondaryPaneRef.current && paneFocusMode === "secondary") {
        e.preventDefault();
        e.stopPropagation();
        const secondaryElements = getFocusableElements(secondaryPaneRef.current);
        if (secondaryElements.length > 0) {
          setTimeout(() => {
            focusSecondaryElement(paneNavState.secondaryIndex);
          }, 50);
        }
        return;
      }
    }
    if (key === "ArrowRight") {
      if (inNav || paneFocusMode === "nav") {
        e.preventDefault();
        setPaneFocusMode("content");
        setTimeout(() => {
          var _a2;
          return (_a2 = contentPaneRef.current) == null ? void 0 : _a2.focus();
        }, 10);
        return;
      }
      if (inContent || paneFocusMode === "content") {
        if (hasSecondary) {
          e.preventDefault();
          setPaneFocusMode("secondary");
          setTimeout(() => {
            var _a2;
            return (_a2 = secondaryPaneRef.current) == null ? void 0 : _a2.focus();
          }, 10);
        }
        return;
      }
    }
    if (key === "ArrowLeft") {
      if (inSecondary || paneFocusMode === "secondary") {
        e.preventDefault();
        setPaneFocusMode("content");
        setTimeout(() => {
          var _a2;
          return (_a2 = contentPaneRef.current) == null ? void 0 : _a2.focus();
        }, 10);
        return;
      }
      if (inContent || paneFocusMode === "content") {
        e.preventDefault();
        setPaneFocusMode("nav");
        if (listRef.current) {
          const nodes = Array.from(listRef.current.querySelectorAll("[data-nav-item]"));
          const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
          setTimeout(() => candidate == null ? void 0 : candidate.focus(), 10);
        }
        return;
      }
    }
    if (key === "Home") {
      if (!inNav) {
        e.preventDefault();
        setPaneFocusMode("nav");
        if (listRef.current) {
          const nodes = Array.from(listRef.current.querySelectorAll("[data-nav-item]"));
          const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0] || nodes[0];
          setTimeout(() => candidate == null ? void 0 : candidate.focus(), 10);
        }
      }
    }
    if (key === "End") {
      const targetPane = hasSecondary ? secondaryPaneRef.current : contentPaneRef.current;
      if (targetPane && !targetPane.contains(target)) {
        e.preventDefault();
        if (hasSecondary) {
          setPaneFocusMode("secondary");
          setTimeout(() => {
            var _a2;
            return (_a2 = secondaryPaneRef.current) == null ? void 0 : _a2.focus();
          }, 10);
        } else {
          setPaneFocusMode("content");
          setTimeout(() => {
            var _a2;
            return (_a2 = contentPaneRef.current) == null ? void 0 : _a2.focus();
          }, 10);
        }
      }
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      if (target === contentPaneRef.current && key === "ArrowDown") {
        e.preventDefault();
        const contentElements = getFocusableElements(contentPaneRef.current);
        if (contentElements.length > 0) {
          focusContentElement(0);
        }
        return;
      }
      if (target === secondaryPaneRef.current && key === "ArrowDown") {
        e.preventDefault();
        const secondaryElements = getFocusableElements(secondaryPaneRef.current);
        if (secondaryElements.length > 0) {
          focusSecondaryElement(0);
        }
        return;
      }
      if (inContent) {
        const els = getFocusableElements(contentPaneRef.current);
        if (els.length) {
          e.preventDefault();
          const dir = key === "ArrowDown" ? 1 : -1;
          const next = (paneNavState.contentIndex + dir + els.length) % els.length;
          focusContentElement(next);
        }
      } else if (inSecondary) {
        const els = getFocusableElements(secondaryPaneRef.current);
        if (els.length) {
          e.preventDefault();
          const dir = key === "ArrowDown" ? 1 : -1;
          const next = (paneNavState.secondaryIndex + dir + els.length) % els.length;
          focusSecondaryElement(next);
        }
      }
    }
  };
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
  React3.useEffect(() => {
    if (tertiaryInlineActive && !tertiaryVisible) {
      setPaneFocusMode("secondary");
      setContainerIndex(2);
      setTimeout(() => {
        var _a;
        (_a = secondaryPaneRef.current) == null ? void 0 : _a.focus();
      }, 50);
    }
  }, [tertiaryInlineActive, tertiaryVisible]);
  React3.useEffect(() => {
    if (!tertiaryInlineActive && !tertiaryVisible && paneFocusMode === "secondary") {
      setPaneFocusMode("content");
      setContainerIndex(1);
      setTimeout(() => {
        var _a;
        (_a = contentPaneRef.current) == null ? void 0 : _a.focus();
      }, 50);
    }
  }, [tertiaryInlineActive, tertiaryVisible, paneFocusMode]);
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
  const typeaheadRef = React3.useRef(null);
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
    const nodes = Array.from(listRef.current.querySelectorAll("[data-nav-item]"));
    nodes.forEach((el, idx) => {
      el.tabIndex = (focusedIndex === -1 ? idx === 0 && initialFocus === "first" : idx === focusedIndex) ? 0 : -1;
    });
    if (focusedIndex >= 0) {
      const node = nodes[focusedIndex];
      node == null ? void 0 : node.focus();
      lastFocusedIndexRef.current = focusedIndex;
      const item = items[focusedIndex];
      onFocusChange == null ? void 0 : onFocusChange(item ? getId(item) : void 0, item, focusedIndex);
    }
  }, [focusedIndex, items, initialFocus, onFocusChange, getId]);
  const onKeyDownList = (e) => {
    const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const backward = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (e.key === "ArrowRight" && orientation === "vertical") {
      e.preventDefault();
      if (tertiaryInlineActive) {
        setPaneFocusMode("secondary");
        setTimeout(() => {
          var _a;
          (_a = secondaryPaneRef.current) == null ? void 0 : _a.focus();
        }, 10);
      } else {
        setPaneFocusMode("content");
        setTimeout(() => {
          var _a;
          (_a = contentPaneRef.current) == null ? void 0 : _a.focus();
        }, 10);
      }
      return;
    }
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
    } else if (e.key.length === 1 && /[a-z0-9]/i.test(e.key)) {
      if (!typeaheadRef.current) typeaheadRef.current = { buffer: "", last: 0 };
      const now = Date.now();
      const timeout = 700;
      const lower = e.key.toLowerCase();
      if (now - typeaheadRef.current.last > timeout) {
        typeaheadRef.current.buffer = lower;
      } else {
        typeaheadRef.current.buffer += lower;
      }
      typeaheadRef.current.last = now;
      let buffer = typeaheadRef.current.buffer;
      const allSame = buffer.split("").every((ch) => ch === buffer[0]);
      const labels = items.map((it) => String(it.label || "").toLowerCase());
      let startIndex = 0;
      if (focusedIndex >= 0) {
        startIndex = (focusedIndex + 1) % items.length;
      }
      let matchIndex;
      const search = (prefix, cycleFromCurrent) => {
        const total = items.length;
        for (let offset = 0; offset < total; offset++) {
          const idx = ((cycleFromCurrent ? startIndex : 0) + offset) % total;
          const it = items[idx];
          if (!it.disabled && labels[idx].startsWith(prefix)) {
            return idx;
          }
        }
        return void 0;
      };
      if (allSame && buffer.length > 1) {
        matchIndex = search(buffer[0], true);
      } else {
        matchIndex = search(buffer, true);
        if (matchIndex === void 0 && buffer.length > 1) {
          matchIndex = search(buffer[buffer.length - 1], true);
          if (matchIndex !== void 0) {
            if (typeaheadRef.current) typeaheadRef.current.buffer = buffer[buffer.length - 1];
          }
        }
      }
      if (matchIndex !== void 0) setFocusedIndex(matchIndex);
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
      const nodes = listRef.current.querySelectorAll("[data-nav-item]");
      const target = nodes[lastFocusedIndexRef.current];
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
        const interactiveProps = item.disabled ? {
          "aria-disabled": true,
          tabIndex: -1
        } : {
          tabIndex: selected ? 0 : -1,
          onClick: () => {
            lastFocusedIndexRef.current = idx;
            handleSelect(id, item);
          },
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              lastFocusedIndexRef.current = idx;
              handleSelect(id, item);
            }
          }
        };
        return /* @__PURE__ */ jsxs3(
          "li",
          {
            id: String(id),
            "data-nav-item": true,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": selected,
            "aria-current": selected ? "true" : void 0,
            "data-selected": selected || void 0,
            "data-disabled": item.disabled || void 0,
            ...interactiveProps,
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
        );
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
          "aria-label": "Navigation items",
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
      onKeyDown: onRootKeyDown,
      children: /* @__PURE__ */ jsxs3("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ jsxs3("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": detailActive || void 0, style: { transform: detailActive ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ jsxs3(
            "div",
            {
              ref: navPaneRef,
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": (a11y == null ? void 0 : a11y.navigationLabel) || "Items",
              "data-collapsed": navCollapsed || void 0,
              tabIndex: 0,
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
              tabIndex: 0,
              style: { display: tertiaryInlineActive && !tertiaryVisible ? "none" : void 0 },
              children: [
                showHeader && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__header", children: renderedHeaderInner }),
                /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: renderContent(selectedItem) })
              ]
            }
          ),
          effectiveLayout === "three-column" && (!lazySecondary || secondaryMounted) || tertiaryInlineActive && !tertiaryVisible ? /* @__PURE__ */ jsx3(
            "div",
            {
              ref: secondaryPaneRef,
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": (a11y == null ? void 0 : a11y.secondaryContentLabel) || "Secondary",
              tabIndex: 0,
              children: /* @__PURE__ */ jsxs3("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                tertiaryInlineActive && !tertiaryVisible && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ jsx3("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
                  tertiaryBackNode,
                  /* @__PURE__ */ jsx3("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: /* @__PURE__ */ jsx3("h2", { style: { marginLeft: 0, marginRight: 0 }, children: selectedItem && typeof selectedItem === "object" && "label" in selectedItem ? selectedItem.label : String(selectedItem) }) })
                ] }) }) }),
                selectedItem && secondarySubheader && /* @__PURE__ */ jsx3("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof secondarySubheader === "function" ? secondarySubheader(selectedItem) : secondarySubheader }),
                /* @__PURE__ */ jsx3("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: renderSecondaryContent == null ? void 0 : renderSecondaryContent(selectedItem) })
              ] })
            }
          ) : null
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
