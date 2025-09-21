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
import * as React7 from "react";

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

// src/hooks/useNavigationSplitUrlSync.ts
import * as React from "react";
function useNavigationSplitUrlSync(options = {}) {
  const { enabled = true, paramSelected = "nsv", paramDrill = "nsvDrill" } = options;
  const [selectedId, setSelectedId] = React.useState(() => {
    if (typeof window === "undefined" || !enabled) return void 0;
    const sp = new URLSearchParams(window.location.search);
    return sp.get(paramSelected);
  });
  const [drilledIn, setDrilledIn] = React.useState(() => {
    if (typeof window === "undefined" || !enabled) return false;
    const sp = new URLSearchParams(window.location.search);
    return sp.get(paramDrill) === "1";
  });
  React.useEffect(() => {
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

// src/components/NavigationSplitView/components/Icons.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ChevronLeftIcon = ({
  className
}) => /* @__PURE__ */ jsx2(
  "svg",
  {
    className,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ jsx2(
      "path",
      {
        fill: "currentColor",
        d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z"
      }
    )
  }
);
var ChevronRightIcon = ({
  className
}) => /* @__PURE__ */ jsx2(
  "svg",
  {
    className,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ jsx2(
      "path",
      {
        fill: "currentColor",
        d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z"
      }
    )
  }
);

// src/components/NavigationSplitView/components/ContentHeader.tsx
import * as React2 from "react";

// src/components/BackLink/ForwardLink.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
    html ? /* @__PURE__ */ jsx3("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    /* @__PURE__ */ jsx3(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ jsx3("path", { d: "M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" })
      }
    )
  ] });
  return /* @__PURE__ */ jsx3("div", { className: containerClasses, children: element === "button" ? /* @__PURE__ */ jsx3("button", { className: linkClasses, type: "button", onClick, ...props, children: renderContent() }) : /* @__PURE__ */ jsx3("a", { className: linkClasses, href, ...props, children: renderContent() }) });
};
ForwardLink.displayName = "ForwardLink";

// src/components/NavigationSplitView/components/ContentHeader.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var ContentHeader = ({
  show,
  label,
  contentHeaderLevel,
  detailActive,
  headerContext,
  backLabel,
  nextLabel,
  onBack,
  onForward,
  renderContentHeader,
  item,
  contentSubheader,
  tertiaryInlineActive
}) => {
  if (!show || !item) return null;
  const headingTag = `h${contentHeaderLevel}`;
  const defaultHeadingNode = label ? React2.createElement(
    headingTag,
    {
      style: {
        marginLeft: detailActive ? 32 : 0,
        marginRight: detailActive ? 32 : 0
      }
    },
    label
  ) : null;
  const backLinkNode = detailActive ? /* @__PURE__ */ jsx4(
    BackLink,
    {
      element: "button",
      text: backLabel,
      style: { marginRight: 16 },
      onClick: onBack
    }
  ) : void 0;
  const forwardLinkNode = !tertiaryInlineActive ? /* @__PURE__ */ jsx4(ForwardLink, { element: "button", text: nextLabel, onClick: onForward }) : void 0;
  if (renderContentHeader) {
    return /* @__PURE__ */ jsx4("div", { className: "nhs-navigation-split-view__header", children: renderContentHeader({
      item,
      detailActive,
      context: headerContext,
      backLink: backLinkNode,
      defaultHeading: defaultHeadingNode
    }) });
  }
  const sub = item && contentSubheader ? typeof contentSubheader === "function" ? contentSubheader(item) : contentSubheader : null;
  return /* @__PURE__ */ jsx4("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
    /* @__PURE__ */ jsxs3(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 0,
          flex: "1 1 auto",
          minWidth: 0
        },
        children: [
          backLinkNode,
          /* @__PURE__ */ jsxs3(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: 0
              },
              children: [
                defaultHeadingNode,
                sub && /* @__PURE__ */ jsx4("div", { className: "nhs-navigation-split-view__subheader", children: sub })
              ]
            }
          )
        ]
      }
    ),
    forwardLinkNode && /* @__PURE__ */ jsx4("div", { style: { marginLeft: "auto" }, children: forwardLinkNode })
  ] }) });
};

// src/components/NavigationSplitView/components/NavigationCollection.tsx
import * as React3 from "react";
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function NavigationCollection({
  layout,
  items,
  getId,
  selectedId,
  isLoading,
  emptyState,
  renderItemContent,
  onSelect,
  orientation,
  initialFocus,
  onFocusChange,
  justSelectedId,
  listRef,
  onKeyDownList,
  navigationInstructions,
  controlledFocusedIndex
}) {
  const [focusedIndex, setFocusedIndex] = React3.useState(
    () => initialFocus === "first" ? 0 : -1
  );
  const lastFocusedIndexRef = React3.useRef(0);
  React3.useEffect(() => {
    if (typeof controlledFocusedIndex === "number") return;
    if (focusedIndex < 0) return;
    if (!(listRef == null ? void 0 : listRef.current)) return;
    const nodes = Array.from(
      listRef.current.querySelectorAll("[data-nav-item]")
    );
    const node = nodes[focusedIndex];
    if (node) {
      if (document.activeElement !== node) node.focus();
      lastFocusedIndexRef.current = focusedIndex;
      const item = items[focusedIndex];
      onFocusChange == null ? void 0 : onFocusChange(item ? getId(item) : void 0, item, focusedIndex);
    }
  }, [controlledFocusedIndex, focusedIndex, items, onFocusChange, getId, listRef]);
  const handleKeyDown = (e) => {
    if (onKeyDownList) return onKeyDownList(e);
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
      if (item && !item.disabled)
        onSelect(getId(item), item, focusedIndex);
    }
  };
  if (layout === "cards") {
    return /* @__PURE__ */ jsxs4(
      "ul",
      {
        className: "nhs-navigation-split-view__cards",
        role: "listbox",
        "aria-activedescendant": selectedId ? String(selectedId) : void 0,
        children: [
          items.map((item, idx) => {
            const id = getId(item);
            const selected = id === selectedId;
            return /* @__PURE__ */ jsx5(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": selected,
                children: /* @__PURE__ */ jsxs4(
                  "button",
                  {
                    id: String(id),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": selected || void 0,
                    "data-disabled": item.disabled || void 0,
                    disabled: item.disabled,
                    onClick: () => !item.disabled && onSelect(id, item, idx),
                    children: [
                      item.icon && /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__item-icon", children: item.icon }),
                      /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__item-label", children: item.label }),
                      item.description && /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__item-description", children: item.description }),
                      renderItemContent == null ? void 0 : renderItemContent(item),
                      item.badge !== void 0 && /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__badge", children: item.badge })
                    ]
                  }
                )
              },
              String(id)
            );
          }),
          items.length === 0 && !isLoading && /* @__PURE__ */ jsx5(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: emptyState || /* @__PURE__ */ jsx5("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  }
  const instructionsId = "nsv-nav-instructions";
  const NavItem = React3.useMemo(() => {
    return React3.memo(
      ({
        item,
        idx,
        selected,
        focused
      }) => {
        const id = getId(item);
        const interactiveProps = item.disabled ? { "aria-disabled": true, tabIndex: -1 } : {
          tabIndex: focused ? 0 : -1,
          onClick: () => {
            lastFocusedIndexRef.current = idx;
            onSelect(id, item, idx);
          },
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              lastFocusedIndexRef.current = idx;
              onSelect(id, item, idx);
            }
          }
        };
        return /* @__PURE__ */ jsxs4(
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
              item.icon && /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__item-icon", children: item.icon }),
              /* @__PURE__ */ jsxs4("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__item-label", children: item.label }),
                item.description && /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__item-description", children: item.description }),
                renderItemContent == null ? void 0 : renderItemContent(item)
              ] }),
              item.badge !== void 0 && /* @__PURE__ */ jsx5("span", { className: "nhs-navigation-split-view__badge", children: item.badge })
            ]
          }
        );
      }
    );
  }, [getId, onSelect, renderItemContent]);
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsxs4(
      "ul",
      {
        ref: listRef,
        className: "nhs-navigation-split-view__list",
        onKeyDown: handleKeyDown,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": instructionsId,
        "aria-activedescendant": selectedId ? String(selectedId) : void 0,
        children: [
          items.map((item, idx) => /* @__PURE__ */ jsx5(
            NavItem,
            {
              item,
              idx,
              selected: getId(item) === selectedId,
              focused: /* @__PURE__ */ (() => {
                const fi = typeof controlledFocusedIndex === "number" ? controlledFocusedIndex : focusedIndex;
                return idx === fi || fi === -1 && idx === 0 && initialFocus === "first";
              })(),
              "data-just-selected": getId(item) === justSelectedId ? "true" : void 0
            },
            String(getId(item))
          )),
          items.length === 0 && !isLoading && /* @__PURE__ */ jsx5(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: emptyState || /* @__PURE__ */ jsx5("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx5(
      "div",
      {
        id: instructionsId,
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)"
        },
        children: navigationInstructions || "Use arrow keys to navigate, Enter to open."
      }
    )
  ] });
}

// src/components/NavigationSplitView/hooks/useEffectiveLayout.ts
import * as React5 from "react";

// src/hooks/useBreakpoints.ts
import * as React4 from "react";
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
  const [width, setWidth] = React4.useState(getViewportWidth());
  React4.useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => setWidth(getViewportWidth());
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  const up = React4.useCallback((key) => width >= NHS_FDP_BREAKPOINTS[key], [width]);
  const down = React4.useCallback((key) => width < NHS_FDP_BREAKPOINTS[key], [width]);
  const between = React4.useCallback((min, max) => {
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

// src/components/NavigationSplitView/hooks/useEffectiveLayout.ts
function useEffectiveLayout(forceLayout, autoEnableThirdColumn, hasSecondary) {
  const { up } = useNhsFdpBreakpoints();
  const [hydrated, setHydrated] = React5.useState(false);
  React5.useEffect(() => setHydrated(true), []);
  const isAtLeastMedium = hydrated && up("medium");
  const isAtLeastXlarge = hydrated && up("xlarge");
  let effectiveLayout;
  if (forceLayout) effectiveLayout = forceLayout;
  else if (isAtLeastMedium) effectiveLayout = "two-column";
  else effectiveLayout = "list";
  if (!forceLayout && autoEnableThirdColumn && hasSecondary && isAtLeastXlarge) {
    effectiveLayout = "three-column";
  }
  return { effectiveLayout, hydrated, isAtLeastMedium, isAtLeastXlarge };
}

// src/components/NavigationSplitView/hooks/useCollapsibleNav.ts
import * as React6 from "react";
function useCollapsibleNav(args) {
  const {
    enabled,
    isAtLeastMedium,
    initiallyCollapsed,
    persist,
    storageKey,
    urlParam,
    onChange
  } = args;
  const initialCollapsed = React6.useMemo(() => {
    if (persist && (persist === "url" || persist === "both") && typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      const val = sp.get(urlParam);
      if (val === "1") return true;
      if (val === "0") return false;
    }
    if (persist && (persist === "localStorage" || persist === "both") && typeof window !== "undefined") {
      try {
        const raw = window.localStorage.getItem(storageKey);
        if (raw === "1") return true;
        if (raw === "0") return false;
      } catch {
      }
    }
    return initiallyCollapsed;
  }, [persist, initiallyCollapsed, storageKey, urlParam]);
  const [collapsed, setCollapsed] = React6.useState(initialCollapsed);
  React6.useEffect(() => {
    onChange == null ? void 0 : onChange(collapsed);
  }, [collapsed, onChange]);
  const toggle = React6.useCallback(() => {
    if (enabled && isAtLeastMedium) setCollapsed((c) => !c);
  }, [enabled, isAtLeastMedium]);
  React6.useEffect(() => {
    if (!persist || typeof window === "undefined") return;
    if (persist === "localStorage" || persist === "both") {
      try {
        window.localStorage.setItem(storageKey, collapsed ? "1" : "0");
      } catch {
      }
    }
    if (persist === "url" || persist === "both") {
      const sp = new URLSearchParams(window.location.search);
      sp.set(urlParam, collapsed ? "1" : "0");
      const newUrl = `${window.location.pathname}?${sp.toString()}${window.location.hash}`;
      window.history.replaceState(null, "", newUrl);
    }
  }, [collapsed, persist, storageKey, urlParam]);
  return { collapsed, toggle };
}

// src/components/NavigationSplitView/NavigationSplitView.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
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
  const { effectiveLayout, hydrated, isAtLeastMedium } = useEffectiveLayout(
    forceLayout,
    autoEnableThirdColumn,
    !!renderSecondaryContent
  );
  const urlSync = useNavigationSplitUrlSync({
    enabled: syncUrl,
    paramSelected: urlParamSelected,
    paramDrill: urlParamDrill
  });
  const [uncontrolledSelected, setUncontrolledSelected] = React7.useState(
    () => urlSync.selectedId !== void 0 ? urlSync.selectedId : defaultSelectedId
  );
  const selectedId = controlledSelectedId !== void 0 ? controlledSelectedId : uncontrolledSelected;
  const selectedItem = items.find((i) => getId(i) === selectedId);
  const [justSelectedId, setJustSelectedId] = React7.useState(
    void 0
  );
  React7.useEffect(() => {
    if (selectedId === void 0) return;
    setJustSelectedId(selectedId);
    const t = setTimeout(() => setJustSelectedId(void 0), 220);
    return () => clearTimeout(t);
  }, [selectedId]);
  const rootRef = React7.useRef(null);
  const contentPaneRef = React7.useRef(null);
  const secondaryPaneRef = React7.useRef(null);
  const navPaneRef = React7.useRef(null);
  const [paneNavState, setPaneNavState] = React7.useState(() => ({ contentIndex: 0, secondaryIndex: 0 }));
  const [paneFocusMode, setPaneFocusMode] = React7.useState(() => "nav");
  const [containerIndex, setContainerIndex] = React7.useState(0);
  const getPaneOrder = () => {
    return [
      navPaneRef.current,
      contentPaneRef.current,
      secondaryPaneRef.current
    ].filter(Boolean);
  };
  const focusContainerByIndex = (idx) => {
    const order = getPaneOrder();
    const clamped = Math.max(0, Math.min(idx, order.length - 1));
    focusEl(order[clamped]);
    setContainerIndex(clamped);
  };
  const getFocusableElements = React7.useCallback(
    (root) => {
      if (!root) return [];
      const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      return Array.from(root.querySelectorAll(selector)).filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
      );
    },
    []
  );
  const focusEl = React7.useCallback((el) => {
    if (!el) return;
    try {
      el.focus({ preventScroll: true });
    } catch {
      el.focus();
    }
  }, []);
  const focusContentElement = React7.useCallback(
    (idx) => {
      const els = getFocusableElements(contentPaneRef.current);
      if (!els.length) {
        focusEl(contentPaneRef.current);
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
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          focusEl(contentPaneRef.current);
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
    },
    [getFocusableElements]
  );
  const focusSecondaryElement = React7.useCallback(
    (idx) => {
      const els = getFocusableElements(secondaryPaneRef.current);
      if (!els.length) {
        focusEl(secondaryPaneRef.current);
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
      setPaneNavState((p) => ({ ...p, secondaryIndex: clamped }));
      const handleChildEscape = (e) => {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopPropagation();
          focusEl(secondaryPaneRef.current);
          targetElement.removeEventListener("keydown", handleChildEscape);
        }
      };
      els.forEach((el) => {
        const existing = el._escapeHandler;
        if (existing) el.removeEventListener("keydown", existing);
      });
      targetElement._escapeHandler = handleChildEscape;
      targetElement.addEventListener("keydown", handleChildEscape);
    },
    [getFocusableElements]
  );
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
    const isMobileDetail = detailActive && (effectiveLayout === "list" || effectiveLayout === "cards");
    const inContentHeader = inContent && !!target.closest(".nhs-navigation-split-view__header");
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
            const nodes = Array.from(
              listRef.current.querySelectorAll("[data-nav-item]")
            );
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
            const nodes = Array.from(
              listRef.current.querySelectorAll("[data-nav-item]")
            );
            const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
            setTimeout(() => candidate == null ? void 0 : candidate.focus(), 10);
          }
        } else if (target === contentPaneRef.current || target === secondaryPaneRef.current) {
          e.preventDefault();
          setPaneFocusMode("nav");
          if (listRef.current) {
            const nodes = Array.from(
              listRef.current.querySelectorAll("[data-nav-item]")
            );
            const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
            setTimeout(() => candidate == null ? void 0 : candidate.focus(), 10);
          }
        }
      }
      return;
    }
    if (key === "Enter" || key === " ") {
      const isInteractiveElement = target.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      );
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
        const secondaryElements = getFocusableElements(
          secondaryPaneRef.current
        );
        if (secondaryElements.length > 0) {
          setTimeout(() => {
            focusSecondaryElement(paneNavState.secondaryIndex);
          }, 50);
        }
        return;
      }
    }
    if (isMobileDetail && inContentHeader && !isContainer && (key === "ArrowRight" || key === "ArrowLeft")) {
      const all = getFocusableElements(contentPaneRef.current).filter(
        (el) => el.closest(".nhs-navigation-split-view__header")
      );
      if (all.length > 1) {
        const currentIndex = all.indexOf(target);
        if (currentIndex >= 0) {
          const dir = key === "ArrowRight" ? 1 : -1;
          const next = (currentIndex + dir + all.length) % all.length;
          e.preventDefault();
          all[next].focus();
          return;
        }
      }
    }
    if (key === "ArrowRight") {
      if (inNav || paneFocusMode === "nav") {
        e.preventDefault();
        setPaneFocusMode("content");
        setTimeout(() => focusEl(contentPaneRef.current), 10);
        return;
      }
      if (inContent || paneFocusMode === "content") {
        if (hasSecondary) {
          e.preventDefault();
          setPaneFocusMode("secondary");
          setTimeout(() => focusEl(secondaryPaneRef.current), 10);
        }
        return;
      }
    }
    if (key === "ArrowLeft") {
      if (inSecondary || paneFocusMode === "secondary") {
        e.preventDefault();
        setPaneFocusMode("content");
        setTimeout(() => focusEl(contentPaneRef.current), 10);
        return;
      }
      if (inContent || paneFocusMode === "content") {
        e.preventDefault();
        setPaneFocusMode("nav");
        if (listRef.current) {
          const nodes = Array.from(
            listRef.current.querySelectorAll("[data-nav-item]")
          );
          const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0];
          setTimeout(() => focusEl(candidate), 10);
        }
        return;
      }
    }
    if (key === "Home") {
      if (!inNav) {
        e.preventDefault();
        setPaneFocusMode("nav");
        if (listRef.current) {
          const nodes = Array.from(
            listRef.current.querySelectorAll("[data-nav-item]")
          );
          const candidate = nodes[focusedIndex >= 0 ? focusedIndex : 0] || nodes[0];
          setTimeout(() => focusEl(candidate), 10);
        }
      }
    }
    if (key === "End") {
      const targetPane = hasSecondary ? secondaryPaneRef.current : contentPaneRef.current;
      if (targetPane && !targetPane.contains(target)) {
        e.preventDefault();
        if (hasSecondary) {
          setPaneFocusMode("secondary");
          setTimeout(() => focusEl(secondaryPaneRef.current), 10);
        } else {
          setPaneFocusMode("content");
          setTimeout(() => focusEl(contentPaneRef.current), 10);
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
        const secondaryElements = getFocusableElements(
          secondaryPaneRef.current
        );
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
  const autoHeaderConfig = React7.useMemo(() => {
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
  const isTabletRange = hydrated && isAtLeastMedium && effectiveLayout !== "three-column";
  const isDesktopRange = hydrated && effectiveLayout === "three-column";
  const tertiaryAvailable = !!renderSecondaryContent;
  const tertiaryVisible = effectiveLayout === "three-column";
  const [tertiaryInlineActive, setTertiaryInlineActive] = React7.useState(false);
  React7.useEffect(() => {
    if (tertiaryVisible && tertiaryInlineActive) setTertiaryInlineActive(false);
  }, [tertiaryVisible, tertiaryInlineActive]);
  React7.useEffect(() => {
    if (tertiaryInlineActive && !tertiaryVisible) {
      setPaneFocusMode("secondary");
      setContainerIndex(2);
      setTimeout(() => {
        focusEl(secondaryPaneRef.current);
      }, 50);
    }
  }, [tertiaryInlineActive, tertiaryVisible]);
  React7.useEffect(() => {
    if (!tertiaryInlineActive && !tertiaryVisible && paneFocusMode === "secondary") {
      setPaneFocusMode("content");
      setContainerIndex(1);
      setTimeout(() => {
        focusEl(contentPaneRef.current);
      }, 50);
    }
  }, [tertiaryInlineActive, tertiaryVisible, paneFocusMode]);
  const baseHeaderCondition = !!selectedItem && (detailActive && autoHeaderConfig.mobile || !detailActive && isTabletRange && autoHeaderConfig.tablet || !detailActive && isDesktopRange && autoHeaderConfig.desktop);
  const showHeader = baseHeaderCondition || tertiaryAvailable && !tertiaryVisible;
  const headerContext = detailActive ? "mobile" : isTabletRange ? "tablet" : "desktop";
  React7.useEffect(() => {
    if (!syncUrl) return;
    const drilled = effectiveLayout === "three-column";
    let cancelled = false;
    const apply = () => {
      if (cancelled) return;
      if (urlSync.selectedId !== selectedId)
        urlSync.setSelectedId(selectedId);
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
  React7.useEffect(() => {
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
  }, [
    syncUrl,
    urlParamSelected,
    urlParamDrill,
    forceLayout,
    renderSecondaryContent
  ]);
  const lastFocusedIndexRef = React7.useRef(0);
  const typeaheadRef = React7.useRef(
    null
  );
  const handleSelect = React7.useCallback(
    (id, item) => {
      if (id === selectedId) return;
      if (controlledSelectedId === void 0) setUncontrolledSelected(id);
      onSelectionChange == null ? void 0 : onSelectionChange(id, item);
    },
    [controlledSelectedId, onSelectionChange, selectedId]
  );
  React7.useEffect(() => {
    if (!skipFocusOnSelect && detailActive && contentPaneRef.current) {
      const t = setTimeout(() => focusEl(contentPaneRef.current), 30);
      return () => clearTimeout(t);
    }
  }, [detailActive, selectedId, skipFocusOnSelect]);
  const listRef = React7.useRef(null);
  const [focusedIndex, setFocusedIndex] = React7.useState(
    () => initialFocus === "first" ? 0 : -1
  );
  React7.useEffect(() => {
    if (focusedIndex < 0) return;
    if (!listRef.current) return;
    const nodes = Array.from(
      listRef.current.querySelectorAll("[data-nav-item]")
    );
    const node = nodes[focusedIndex];
    if (node) {
      if (document.activeElement !== node) {
        focusEl(node);
      }
      lastFocusedIndexRef.current = focusedIndex;
      const item = items[focusedIndex];
      onFocusChange == null ? void 0 : onFocusChange(
        item ? getId(item) : void 0,
        item,
        focusedIndex
      );
    }
  }, [focusedIndex, items, onFocusChange, getId]);
  const onKeyDownList = (e) => {
    const forward = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    const backward = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (e.key === "ArrowRight" && orientation === "vertical") {
      e.preventDefault();
      if (tertiaryInlineActive) {
        setPaneFocusMode("secondary");
        setTimeout(() => {
          focusEl(secondaryPaneRef.current);
        }, 10);
      } else {
        setPaneFocusMode("content");
        setTimeout(() => {
          focusEl(contentPaneRef.current);
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
      const labels = items.map(
        (it) => String(it.label || "").toLowerCase()
      );
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
            if (typeaheadRef.current)
              typeaheadRef.current.buffer = buffer[buffer.length - 1];
          }
        }
      }
      if (matchIndex !== void 0) setFocusedIndex(matchIndex);
    }
  };
  const { collapsed: navCollapsed, toggle: toggleNav } = useCollapsibleNav({
    enabled: collapsibleNav,
    isAtLeastMedium,
    initiallyCollapsed: navInitiallyCollapsed,
    persist: persistNavCollapsed,
    storageKey: navCollapsedStorageKey,
    urlParam: navCollapsedUrlParam,
    onChange: onNavCollapseChange
  });
  const rootClasses = [
    "nhs-navigation-split-view",
    animated ? "nhs-navigation-split-view--animated" : "",
    detailActive ? "nhs-navigation-split-view--detail-active" : "",
    effectiveLayout === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    collapsibleNav && isAtLeastMedium && navCollapsed ? "nhs-navigation-split-view--nav-collapsed" : "",
    className
  ].filter(Boolean).join(" ");
  const liveRef = React7.useRef(null);
  React7.useEffect(() => {
    if (skipAnnouncements) return;
    if (liveRef.current) {
      const msg = selectedItem ? `Selected ${selectedItem.label}` : "Selection cleared";
      liveRef.current.textContent = msg;
    }
  }, [selectedItem, skipAnnouncements]);
  React7.useEffect(() => {
    if (!detailActive && selectedId == null && listRef.current) {
      const nodes = listRef.current.querySelectorAll("[data-nav-item]");
      const target = nodes[lastFocusedIndexRef.current];
      focusEl(target);
    }
  }, [detailActive, selectedId]);
  const drilledIn = effectiveLayout === "three-column";
  const [secondaryMounted, setSecondaryMounted] = React7.useState(false);
  React7.useEffect(() => {
    if (drilledIn && !secondaryMounted) setSecondaryMounted(true);
  }, [drilledIn, secondaryMounted]);
  const prevDrillRef = React7.useRef(drilledIn);
  React7.useEffect(() => {
    if (prevDrillRef.current !== drilledIn) {
      onDrillChange == null ? void 0 : onDrillChange(drilledIn);
      prevDrillRef.current = drilledIn;
    }
  }, [drilledIn, onDrillChange]);
  return /* @__PURE__ */ jsx6(
    "div",
    {
      ref: rootRef,
      className: rootClasses,
      "aria-label": a11y == null ? void 0 : a11y.rootLabel,
      "data-layout": effectiveLayout,
      onKeyDown: onRootKeyDown,
      children: /* @__PURE__ */ jsxs5("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ jsxs5(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": detailActive || void 0,
            style: { transform: detailActive ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ jsxs5(
                "div",
                {
                  ref: navPaneRef,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": (a11y == null ? void 0 : a11y.navigationLabel) || "Items",
                  "data-collapsed": navCollapsed || void 0,
                  tabIndex: 0,
                  children: [
                    collapsibleNav && isAtLeastMedium && /* @__PURE__ */ jsx6("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ jsx6(
                      "button",
                      {
                        type: "button",
                        onClick: toggleNav,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": navCollapsed ? collapseToggleLabelShow : collapseToggleLabelHide,
                        title: navCollapsed ? collapseToggleLabelShow : collapseToggleLabelHide,
                        children: navCollapsed ? collapseToggleIconShow || /* @__PURE__ */ jsx6(ChevronRightIcon, {}) : collapseToggleIconHide || /* @__PURE__ */ jsx6(ChevronLeftIcon, {})
                      }
                    ) }),
                    /* @__PURE__ */ jsx6("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ jsx6(
                      NavigationCollection,
                      {
                        layout: effectiveLayout === "cards" ? "cards" : "list",
                        items,
                        getId,
                        selectedId,
                        isLoading,
                        emptyState,
                        renderItemContent,
                        onSelect: (id, item, idx) => {
                          lastFocusedIndexRef.current = idx;
                          handleSelect(id, item);
                        },
                        orientation,
                        initialFocus,
                        onFocusChange,
                        justSelectedId,
                        listRef,
                        onKeyDownList,
                        navigationInstructions,
                        controlledFocusedIndex: focusedIndex
                      }
                    ) }),
                    navFooter && /* @__PURE__ */ jsx6(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: navFooter
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxs5(
                "div",
                {
                  ref: contentPaneRef,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": (a11y == null ? void 0 : a11y.contentLabel) || "Content",
                  "data-has-selection": !!selectedItem || void 0,
                  tabIndex: 0,
                  style: {
                    display: tertiaryInlineActive && !tertiaryVisible ? "none" : void 0
                  },
                  children: [
                    showHeader && /* @__PURE__ */ jsx6(
                      ContentHeader,
                      {
                        show: showHeader,
                        label: selectedItem ? selectedItem.label : void 0,
                        contentHeaderLevel,
                        detailActive,
                        headerContext,
                        backLabel,
                        nextLabel,
                        onBack: () => handleSelect(void 0, void 0),
                        onForward: () => setTertiaryInlineActive(true),
                        renderContentHeader,
                        item: selectedItem,
                        contentSubheader,
                        tertiaryInlineActive
                      }
                    ),
                    /* @__PURE__ */ jsx6(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: renderContent(selectedItem)
                      }
                    )
                  ]
                }
              ),
              effectiveLayout === "three-column" && (!lazySecondary || secondaryMounted) || tertiaryInlineActive && !tertiaryVisible ? /* @__PURE__ */ jsx6(
                "div",
                {
                  ref: secondaryPaneRef,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": (a11y == null ? void 0 : a11y.secondaryContentLabel) || "Secondary",
                  tabIndex: 0,
                  children: /* @__PURE__ */ jsxs5(
                    "div",
                    {
                      className: "nhs-navigation-split-view__secondary-inner",
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minWidth: 0
                      },
                      children: [
                        tertiaryInlineActive && !tertiaryVisible && /* @__PURE__ */ jsx6("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ jsx6(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              width: "100%"
                            },
                            children: /* @__PURE__ */ jsxs5(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0,
                                  flex: "1 1 auto",
                                  minWidth: 0
                                },
                                children: [
                                  /* @__PURE__ */ jsx6(
                                    BackLink,
                                    {
                                      element: "button",
                                      text: backLabel,
                                      style: { marginRight: 16 },
                                      onClick: () => setTertiaryInlineActive(false)
                                    }
                                  ),
                                  /* @__PURE__ */ jsx6(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ jsx6("h2", { style: { marginLeft: 0, marginRight: 0 }, children: selectedItem && typeof selectedItem === "object" && "label" in selectedItem ? selectedItem.label : String(selectedItem) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        selectedItem && secondarySubheader && /* @__PURE__ */ jsx6(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof secondarySubheader === "function" ? secondarySubheader(selectedItem) : secondarySubheader
                          }
                        ),
                        /* @__PURE__ */ jsx6("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: renderSecondaryContent == null ? void 0 : renderSecondaryContent(selectedItem) })
                      ]
                    }
                  )
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ jsx6(
          "div",
          {
            ref: liveRef,
            "aria-live": "polite",
            "aria-atomic": "true",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)"
            }
          }
        ),
        /* @__PURE__ */ jsx6(
          "div",
          {
            "aria-live": "polite",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)"
            },
            children: drilledIn ? "Expanded to three column layout" : "In two column layout"
          }
        )
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
