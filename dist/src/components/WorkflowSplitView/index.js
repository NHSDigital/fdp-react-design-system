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
      function classNames4() {
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
          return classNames4.apply(null, arg);
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
        classNames4.default = classNames4;
        module.exports = classNames4;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames4;
        });
      } else {
        window.classNames = classNames4;
      }
    })();
  }
});

// src/components/WorkflowSplitView/WorkflowSplitView.tsx
import { useCallback as useCallback2, useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";

// src/components/WorkflowSplitView/components/CardsScroller.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
function CardsScroller({
  steps,
  currentIndex,
  onNavigate,
  renderCard,
  className,
  ariaLabel = "Steps"
}) {
  const trackRef = React.useRef(null);
  const onKeyDown = (e) => {
    if (!(steps == null ? void 0 : steps.length)) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.max(0, currentIndex - 1);
      if (next !== currentIndex) onNavigate == null ? void 0 : onNavigate(next);
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.min(steps.length - 1, currentIndex + 1);
      if (next !== currentIndex) onNavigate == null ? void 0 : onNavigate(next);
    } else if (e.key === "Home") {
      e.preventDefault();
      onNavigate == null ? void 0 : onNavigate(0);
    } else if (e.key === "End") {
      e.preventDefault();
      onNavigate == null ? void 0 : onNavigate(steps.length - 1);
    }
  };
  return /* @__PURE__ */ jsx("div", { className, "aria-label": ariaLabel, role: "region", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "nhsfdp-cards-viewport",
      role: "group",
      "aria-roledescription": "steps",
      tabIndex: 0,
      onKeyDown,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          ref: trackRef,
          className: "nhsfdp-cards-track",
          style: { transform: `translate3d(-${Math.max(0, currentIndex) * 100}%, 0, 0)` },
          children: steps.map((s, i) => {
            var _a;
            const isCurrent = i === currentIndex;
            return /* @__PURE__ */ jsx(
              "div",
              {
                className: "nhsfdp-pane mobile-pane" + (isCurrent ? " is-current" : ""),
                role: "group",
                "aria-roledescription": "step",
                "aria-label": ((_a = s.label) != null ? _a : `Step ${i + 1}`).toString(),
                "aria-hidden": !isCurrent,
                onClick: (e) => {
                  if (e.defaultPrevented) return;
                  const target = e.target;
                  if (target) {
                    const interactive = target.closest(
                      'button, a, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"], [data-prevent-card-click]'
                    );
                    if (interactive) return;
                  }
                  onNavigate == null ? void 0 : onNavigate(i);
                },
                children: renderCard(s, i, isCurrent)
              },
              i
            );
          })
        }
      )
    }
  ) });
}

// src/components/Breadcrumb/Breadcrumb.tsx
var import_classnames = __toESM(require_classnames(), 1);
import React2 from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var BreadcrumbItemComponent = ({
  children,
  href,
  active = false,
  attributes = {}
}) => {
  return /* @__PURE__ */ jsx2("li", { className: "nhsuk-breadcrumb__item", children: active ? /* @__PURE__ */ jsx2(
    "span",
    {
      className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
      "aria-current": "page",
      ...attributes,
      children
    }
  ) : /* @__PURE__ */ jsx2(
    "a",
    {
      className: "nhsuk-breadcrumb__link",
      href,
      ...attributes,
      children
    }
  ) });
};
var BreadcrumbBase = ({
  items = [],
  children,
  classes,
  labelText = "Breadcrumb",
  href,
  text,
  reverse = false,
  attributes = {}
}) => {
  var _a;
  const getItemsFromChildren = () => {
    if (!children) return [];
    const childrenArray = React2.Children.toArray(children);
    return childrenArray.filter(
      (child) => {
        var _a2;
        return React2.isValidElement(child) && (child.type === BreadcrumbItemComponent || ((_a2 = child.type) == null ? void 0 : _a2.displayName) === "BreadcrumbItem");
      }
    ).map((child) => ({
      text: typeof child.props.children === "string" ? child.props.children : String(child.props.children),
      href: child.props.href,
      active: child.props.active,
      attributes: child.props.attributes
    }));
  };
  const getBreadcrumbItems = () => {
    if (children) {
      return getItemsFromChildren();
    }
    if (href && text) {
      return [{ href, text }];
    }
    return items;
  };
  const getLastItem = () => {
    const breadcrumbItems2 = getBreadcrumbItems();
    if (breadcrumbItems2 && breadcrumbItems2.length > 0) {
      const lastLinkItem = breadcrumbItems2.slice().reverse().find((item) => item.href && !item.active);
      if (lastLinkItem) {
        return { href: lastLinkItem.href, text: lastLinkItem.text };
      }
    }
    return { text: "Home" };
  };
  const breadcrumbItems = getBreadcrumbItems();
  const lastItem = getLastItem();
  const breadcrumbClasses = (0, import_classnames.default)(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": reverse
    },
    classes
  );
  const ariaLabel = labelText;
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: breadcrumbClasses,
      "aria-label": ariaLabel,
      role: "navigation",
      ...attributes,
      children: [
        /* @__PURE__ */ jsx2("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: children ? (
          // Render children directly if using compound component pattern
          React2.Children.map(children, (child, index) => {
            var _a2;
            if (React2.isValidElement(child) && (child.type === BreadcrumbItemComponent || ((_a2 = child.type) == null ? void 0 : _a2.displayName) === "BreadcrumbItem")) {
              return React2.cloneElement(child, { key: index });
            }
            return null;
          })
        ) : (
          // Render from items array
          breadcrumbItems == null ? void 0 : breadcrumbItems.filter((item) => item.active || !!item.href).map((item, index) => /* @__PURE__ */ jsx2("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: item.active ? /* @__PURE__ */ jsx2(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...item.attributes || {},
              children: item.text
            }
          ) : /* @__PURE__ */ jsx2(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: item.href,
              role: "link",
              ...item.attributes || {},
              children: item.text
            }
          ) }, index))
        ) }),
        lastItem.href && /* @__PURE__ */ jsx2("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: lastItem.href,
            role: "link",
            "aria-label": `Back to ${lastItem.text}`,
            ...items.length > 0 ? ((_a = items[items.length - 1]) == null ? void 0 : _a.attributes) || {} : {},
            children: [
              /* @__PURE__ */ jsx2("span", { className: "nhsuk-u-visually-hidden", children: "Back to \xA0" }),
              lastItem.text
            ]
          }
        ) })
      ]
    }
  );
};
var Breadcrumb = BreadcrumbBase;
Breadcrumb.Item = BreadcrumbItemComponent;
BreadcrumbItemComponent.displayName = "BreadcrumbItem";

// src/components/WorkflowSplitView/components/BreadcrumbsBar.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function BreadcrumbsBar({
  steps,
  currentIndex,
  onNavigate,
  renderLabel,
  ariaLabel = "Breadcrumbs",
  className,
  style
}) {
  const items = steps.map((s, i) => {
    var _a;
    const isCurrent = i === currentIndex;
    const isPast = i < currentIndex;
    const label = renderLabel ? renderLabel(s, i) : (_a = s.label) != null ? _a : `Step ${i + 1}`;
    return {
      text: String(label),
      href: isPast ? "#" : void 0,
      active: isCurrent,
      attributes: isPast ? { "data-index": String(i) } : void 0
    };
  });
  const handleClick = (e) => {
    const target = e.target;
    const link = target.closest("a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink");
    if (!link) return;
    if (link.classList.contains("nhsuk-breadcrumb__backlink")) {
      e.preventDefault();
      const prev = Math.max(0, currentIndex - 1);
      if (prev !== currentIndex) onNavigate == null ? void 0 : onNavigate(prev);
      return;
    }
    const idxStr = link.getAttribute("data-index");
    if (idxStr != null) {
      e.preventDefault();
      const idx = parseInt(idxStr, 10);
      if (!Number.isNaN(idx)) onNavigate == null ? void 0 : onNavigate(idx);
    }
  };
  return /* @__PURE__ */ jsx3("div", { style, onClick: handleClick, children: /* @__PURE__ */ jsx3(Breadcrumb, { labelText: ariaLabel, classes: className, items }) });
}

// src/components/WorkflowSplitView/hooks/useWorkflowLayout.ts
import * as React4 from "react";

// src/hooks/useBreakpoints.ts
import * as React3 from "react";
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
  const [width, setWidth] = React3.useState(getViewportWidth());
  React3.useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => setWidth(getViewportWidth());
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  const up = React3.useCallback((key) => width >= NHS_FDP_BREAKPOINTS[key], [width]);
  const down = React3.useCallback((key) => width < NHS_FDP_BREAKPOINTS[key], [width]);
  const between = React3.useCallback((min, max) => {
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

// src/components/WorkflowSplitView/hooks/useWorkflowLayout.ts
function useWorkflowLayout(args) {
  const { up } = useNhsFdpBreakpoints();
  const [hydrated, setHydrated] = React4.useState(false);
  React4.useEffect(() => setHydrated(true), []);
  const isTablet = hydrated && up("medium") && !up("xlarge");
  const isDesktop = hydrated && up("xlarge");
  const breakpoint = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";
  const paneConfig = React4.useMemo(() => {
    if (!args.step || !args.layoutForStep) {
      return breakpoint === "mobile" ? { panes: 1, showPrimaryNav: false, showSecondaryNav: false } : breakpoint === "tablet" ? { panes: 2, showPrimaryNav: true, showSecondaryNav: false } : { panes: 3, showPrimaryNav: true, showSecondaryNav: true };
    }
    try {
      return args.layoutForStep({
        step: args.step,
        index: args.index,
        breakpoint
      }) || {};
    } catch {
      return {};
    }
  }, [args.step, args.index, args.layoutForStep, breakpoint]);
  return { hydrated, breakpoint, isTablet, isDesktop, paneConfig };
}

// src/components/BackLink/BackLink.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { Fragment, jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var BackLink = ({
  text = "Back",
  html,
  href = "#",
  className,
  element = "a",
  onClick,
  ...props
}) => {
  const containerClasses = (0, import_classnames2.default)(
    "nhsuk-back-link",
    className
  );
  const linkClasses = (0, import_classnames2.default)(
    "nhsuk-back-link__link"
  );
  const renderContent = () => {
    return /* @__PURE__ */ jsxs2(Fragment, { children: [
      /* @__PURE__ */ jsx4(
        "svg",
        {
          className: "nhsuk-icon nhsuk-icon__chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          height: "24",
          width: "24",
          children: /* @__PURE__ */ jsx4("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
        }
      ),
      html ? /* @__PURE__ */ jsx4("span", { dangerouslySetInnerHTML: { __html: html } }) : text
    ] });
  };
  return /* @__PURE__ */ jsx4("div", { className: containerClasses, children: element === "button" ? /* @__PURE__ */ jsx4(
    "button",
    {
      className: linkClasses,
      onClick,
      type: "button",
      ...props,
      children: renderContent()
    }
  ) : /* @__PURE__ */ jsx4(
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
var import_classnames3 = __toESM(require_classnames(), 1);
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var ForwardLink = ({
  text = "Next",
  html,
  href = "#",
  className,
  element = "a",
  onClick,
  ...props
}) => {
  const containerClasses = (0, import_classnames3.default)("nhsuk-back-link", className);
  const linkClasses = (0, import_classnames3.default)("nhsuk-back-link__link");
  const renderContent = () => /* @__PURE__ */ jsxs3("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
    html ? /* @__PURE__ */ jsx5("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    /* @__PURE__ */ jsx5(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ jsx5("path", { d: "M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" })
      }
    )
  ] });
  return /* @__PURE__ */ jsx5("div", { className: containerClasses, children: element === "button" ? /* @__PURE__ */ jsx5("button", { className: linkClasses, type: "button", onClick, ...props, children: renderContent() }) : /* @__PURE__ */ jsx5("a", { className: linkClasses, href, ...props, children: renderContent() }) });
};
ForwardLink.displayName = "ForwardLink";

// src/components/WorkflowSplitView/WorkflowSplitView.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function WorkflowSplitView(props) {
  var _a, _b, _c;
  const {
    steps,
    currentStepId,
    defaultStepId,
    onStepChange,
    layoutForStep,
    renderStepCard,
    renderStepContent,
    renderSecondaryContent,
    renderSecondaryNav,
    renderBreadcrumbs,
    className,
    getId = (s) => s.id,
    enableTabletGrid = false,
    isStepComplete,
    showMobileControls,
    currentSectionId,
    defaultSectionIdForStep,
    onSectionChange
  } = props;
  const DEBUG_FOCUS = typeof window !== "undefined" && Boolean(window.__WSV_DEBUG_FOCUS) || false;
  const dlog = (...args) => {
    if (DEBUG_FOCUS) {
      console.log("[WorkflowSplitView]", ...args);
    }
  };
  const focusSummary = () => {
    var _a2;
    if (typeof document === "undefined") return {};
    const ae = document.activeElement;
    const role = (_a2 = ae == null ? void 0 : ae.getAttribute) == null ? void 0 : _a2.call(ae, "role");
    return {
      activeTag: ae == null ? void 0 : ae.tagName,
      activeId: ae == null ? void 0 : ae.id,
      activeRole: role,
      activeClasses: ae == null ? void 0 : ae.className
    };
  };
  const [uncontrolledId, setUncontrolledId] = useState3(
    defaultStepId != null ? defaultStepId : steps[0] ? getId(steps[0]) : void 0
  );
  const activeId = currentStepId != null ? currentStepId : uncontrolledId;
  const currentIndex = steps.findIndex((s) => getId(s) === activeId);
  const current = currentIndex >= 0 ? steps[currentIndex] : steps[0];
  const [sectionByStep, setSectionByStep] = useState3({});
  const stepKey = (s) => s ? String(getId(s)) : "";
  const resolveDefaultSectionId = useCallback2((s) => {
    if (!s) return void 0;
    try {
      const viaFn = defaultSectionIdForStep == null ? void 0 : defaultSectionIdForStep(s);
      if (viaFn !== void 0) return viaFn;
    } catch {
    }
    const first = s.sections && s.sections[0];
    return first ? first.id : void 0;
  }, [defaultSectionIdForStep]);
  const activeSectionId = (_a = currentSectionId != null ? currentSectionId : sectionByStep[stepKey(current)]) != null ? _a : resolveDefaultSectionId(current);
  const currentSections = current && current.sections ? current.sections : void 0;
  const activeSection = currentSections == null ? void 0 : currentSections.find((s) => s.id === activeSectionId);
  const selectSection = (sectionId) => {
    if (current) {
      const k = stepKey(current);
      if (currentSectionId === void 0) {
        setSectionByStep((prev) => ({ ...prev, [k]: sectionId }));
      }
      onSectionChange == null ? void 0 : onSectionChange(sectionId, currentSections == null ? void 0 : currentSections.find((s) => s.id === sectionId), current);
    }
  };
  const navigateTo = (id) => {
    dlog("navigateTo", String(id));
    if (currentStepId === void 0) setUncontrolledId(id);
    const step = steps.find((s) => getId(s) === id);
    if (step && onStepChange) onStepChange(id, step);
  };
  const breadcrumbs = renderBreadcrumbs ? renderBreadcrumbs({ steps, current, onNavigate: navigateTo }) : /* @__PURE__ */ jsx6(
    BreadcrumbsBar,
    {
      steps,
      currentIndex: Math.max(0, currentIndex),
      onNavigate: (index) => {
        const step = steps[index];
        if (step) navigateTo(getId(step));
      }
    }
  );
  const showBreadcrumbs = true;
  const { hydrated, breakpoint, paneConfig } = useWorkflowLayout({
    step: current,
    index: currentIndex,
    layoutForStep
  });
  const preselectedView = currentStepId !== void 0 || defaultStepId !== void 0 && steps.length > 0 && steps[0] && defaultStepId !== getId(steps[0]);
  const rootRef = useRef2(null);
  const navPaneRef = useRef2(null);
  const contentPaneRef = useRef2(null);
  const secondaryPaneRef = useRef2(null);
  const navListRef = useRef2(null);
  const navActiveButtonIndexRef = useRef2(0);
  const ignoreNextClickRef = useRef2(false);
  const ignoreNextNavItemActivationRef = useRef2(false);
  const navBootstrapTimeoutRef = useRef2(null);
  const [paneFocusMode, setPaneFocusMode] = useState3("nav");
  const paneFocusModeRef = useRef2("nav");
  useEffect3(() => {
    paneFocusModeRef.current = paneFocusMode;
    if (paneFocusMode !== "nav") setNavContainerFocused(false);
    if (paneFocusMode !== "content") setContentContainerFocused(false);
    if (paneFocusMode !== "secondary") setSecondaryContainerFocused(false);
  }, [paneFocusMode]);
  const [containerIndex, setContainerIndex] = useState3(0);
  const [navFocusedIndex, setNavFocusedIndex] = useState3(
    () => Math.max(0, currentIndex)
  );
  const [navContainerFocused, setNavContainerFocused] = useState3(false);
  const [contentContainerFocused, setContentContainerFocused] = useState3(false);
  const [secondaryContainerFocused, setSecondaryContainerFocused] = useState3(false);
  const focusEl = useCallback2((el) => {
    if (!el) return;
    try {
      el.focus({ preventScroll: true });
    } catch {
      el.focus();
    }
    dlog("focusEl", { to: el.tagName, id: el.id, class: el.className });
  }, []);
  const focusContentSoon = useCallback2(() => {
    const target = () => contentPaneRef.current;
    let attempts = 0;
    const tick = () => {
      const el = target();
      if (el && document.activeElement !== el) {
        focusEl(el);
      }
      attempts += 1;
      if (attempts < 6 && document.activeElement !== target()) {
        setTimeout(tick, 0);
      }
    };
    dlog("focusContentSoon:start", { attempts });
    tick();
    if (typeof queueMicrotask === "function") queueMicrotask(tick);
    requestAnimationFrame(tick);
  }, [focusEl]);
  const getFocusableElements = useCallback2((root) => {
    if (!root) return [];
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll(selector)).filter(
      (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1
    );
  }, []);
  const getPaneOrder = () => [
    navPaneRef.current,
    contentPaneRef.current,
    secondaryPaneRef.current
  ].filter(Boolean);
  const blurActiveIfInside = (root, label) => {
    if (!root) return;
    const ae = typeof document !== "undefined" ? document.activeElement : null;
    if (ae && root.contains(ae)) {
      try {
        ae.blur();
        dlog("blurActiveIfInside", { label, root: root.getAttribute("aria-label") || root.tagName });
      } catch {
      }
    }
  };
  const blurActiveIfInNav = () => {
    const ae = typeof document !== "undefined" ? document.activeElement : null;
    if (ae && navPaneRef.current && navPaneRef.current.contains(ae)) {
      try {
        ae.blur();
        dlog("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
    }
  };
  const focusContainerByIndex = (idx) => {
    const order = getPaneOrder();
    const clamped = Math.max(0, Math.min(idx, order.length - 1));
    dlog("focusContainerByIndex", { idx, clamped });
    focusEl(order[clamped]);
    setContainerIndex(clamped);
  };
  const focusNavItemSoon = useCallback2(
    (index) => {
      let attempts = 0;
      const pickIndex = index != null ? index : navFocusedIndex;
      const target = () => {
        const list = navListRef.current;
        if (!list) return null;
        const nodes = Array.from(list.querySelectorAll("[data-nav-item]"));
        return nodes[pickIndex] || nodes[0] || null;
      };
      const tick = () => {
        if (paneFocusModeRef.current !== "nav") {
          dlog("focusNavItemSoon: abort (mode changed)", { mode: paneFocusModeRef.current });
          return;
        }
        const el = target();
        if (el && document.activeElement !== el) {
          focusEl(el);
        }
        attempts += 1;
        if (attempts < 6 && document.activeElement !== el) {
          setTimeout(tick, 0);
        }
      };
      dlog("focusNavItemSoon:start", { index: pickIndex, ...focusSummary() });
      tick();
      if (typeof queueMicrotask === "function") queueMicrotask(tick);
      requestAnimationFrame(tick);
    },
    [focusEl, navFocusedIndex]
  );
  useEffect3(() => {
    if (!hydrated) return;
    const gridLike = breakpoint === "desktop" || enableTabletGrid && breakpoint === "tablet";
    if (gridLike) {
      if (preselectedView) {
        setPaneFocusMode("nav");
        setContainerIndex(0);
        dlog("init: grid preselected \u2192 mode=nav", { containerIndex: 0 });
      } else {
        setPaneFocusMode("containers");
        setContainerIndex(0);
        dlog("init: grid default \u2192 mode=containers", { containerIndex: 0 });
      }
    } else {
      setPaneFocusMode("nav");
      dlog("init: non-grid \u2192 mode=nav");
    }
  }, [hydrated, breakpoint, preselectedView, enableTabletGrid]);
  useEffect3(() => {
    return () => {
      if (navBootstrapTimeoutRef.current != null) {
        clearTimeout(navBootstrapTimeoutRef.current);
        navBootstrapTimeoutRef.current = null;
        dlog("cleanup: cleared nav bootstrap timeout");
      }
    };
  }, []);
  useEffect3(() => {
    const idx = Math.max(0, currentIndex);
    setNavFocusedIndex(idx);
    dlog("sync navFocusedIndex with currentIndex", { currentIndex, navFocusedIndex: idx });
  }, [currentIndex]);
  useEffect3(() => {
    dlog("paneFocusMode \u2192", paneFocusMode, focusSummary());
  }, [paneFocusMode]);
  const onRootKeyDown = (e) => {
    var _a2, _b2, _c2, _d, _e;
    const gridLike = hydrated && (breakpoint === "desktop" || enableTabletGrid && breakpoint === "tablet");
    if (!gridLike) return;
    const key = e.key;
    const target = e.target;
    const tag = target.tagName.toLowerCase();
    const isEditableTag = tag === "input" || tag === "textarea" || tag === "select";
    const role = target.getAttribute("role");
    const isAriaTextbox = role === "textbox" || role === "searchbox" || role === "combobox";
    const contentEditable = target.getAttribute("contenteditable");
    const isEditable = isEditableTag || isAriaTextbox || contentEditable && contentEditable !== "false";
    dlog("onRootKeyDown", { key, tag, role, isEditable, paneFocusMode, containerIndex, ...focusSummary() });
    if (isEditable && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(key)) {
      return;
    }
    const inNav = !!navListRef.current && navListRef.current.contains(target);
    const inContent = !!contentPaneRef.current && contentPaneRef.current.contains(target);
    const inSecondary = !!secondaryPaneRef.current && secondaryPaneRef.current.contains(target);
    const isContainer = target === navPaneRef.current || target === contentPaneRef.current || target === secondaryPaneRef.current;
    const hasSecondary = !!secondaryPaneRef.current;
    if (isContainer) {
      if (key === "ArrowLeft" && target === contentPaneRef.current) {
        e.preventDefault();
        dlog("container: ArrowLeft on content container \u2192 nav item");
        setPaneFocusMode("nav");
        blurActiveIfInside(contentPaneRef.current, "from-content");
        navActiveButtonIndexRef.current = navFocusedIndex;
        focusNavItemSoon(navFocusedIndex);
        return;
      }
      if (key === "ArrowRight" && target === contentPaneRef.current && hasSecondary) {
        e.preventDefault();
        dlog("container: ArrowRight on content container \u2192 secondary");
        setPaneFocusMode("secondary");
        blurActiveIfInside(contentPaneRef.current, "from-content");
        setContentContainerFocused(false);
        setTimeout(() => focusEl(secondaryPaneRef.current), 10);
        return;
      }
      if (key === "ArrowRight" && target === navPaneRef.current) {
        e.preventDefault();
        dlog("container: ArrowRight on nav container \u2192 content");
        setPaneFocusMode("content");
        blurActiveIfInside(navPaneRef.current, "from-nav");
        setNavContainerFocused(false);
        focusContentSoon();
        return;
      }
      if (key === "ArrowLeft" && target === secondaryPaneRef.current) {
        e.preventDefault();
        dlog("container: ArrowLeft on secondary container \u2192 content");
        setPaneFocusMode("content");
        blurActiveIfInside(secondaryPaneRef.current, "from-secondary");
        setSecondaryContainerFocused(false);
        focusContentSoon();
        return;
      }
      if (key === "ArrowRight") {
        e.preventDefault();
        dlog("container: ArrowRight \u2192 next container");
        blurActiveIfInside(target, "container-roving");
        if (target === navPaneRef.current) setNavContainerFocused(false);
        if (target === contentPaneRef.current) setContentContainerFocused(false);
        if (target === secondaryPaneRef.current) setSecondaryContainerFocused(false);
        focusContainerByIndex(containerIndex + 1);
        return;
      }
      if (key === "ArrowLeft") {
        e.preventDefault();
        dlog("container: ArrowLeft \u2192 prev container");
        blurActiveIfInside(target, "container-roving");
        if (target === navPaneRef.current) setNavContainerFocused(false);
        if (target === contentPaneRef.current) setContentContainerFocused(false);
        if (target === secondaryPaneRef.current) setSecondaryContainerFocused(false);
        focusContainerByIndex(containerIndex - 1);
        return;
      }
      if (key === "Home") {
        e.preventDefault();
        dlog("container: Home \u2192 first container");
        blurActiveIfInside(target, "container-roving");
        if (target === navPaneRef.current) setNavContainerFocused(false);
        if (target === contentPaneRef.current) setContentContainerFocused(false);
        if (target === secondaryPaneRef.current) setSecondaryContainerFocused(false);
        focusContainerByIndex(0);
        return;
      }
      if (key === "End") {
        e.preventDefault();
        dlog("container: End \u2192 last container");
        blurActiveIfInside(target, "container-roving");
        if (target === navPaneRef.current) setNavContainerFocused(false);
        if (target === contentPaneRef.current) setContentContainerFocused(false);
        if (target === secondaryPaneRef.current) setSecondaryContainerFocused(false);
        focusContainerByIndex(getPaneOrder().length - 1);
        return;
      }
      if (key === "Enter" || key === " ") {
        e.preventDefault();
        if (target === navPaneRef.current) {
          setPaneFocusMode("nav");
          dlog("container: Enter/Space on nav \u2192 focus nav item", { navFocusedIndex });
          navActiveButtonIndexRef.current = navFocusedIndex;
          ignoreNextNavItemActivationRef.current = true;
          focusNavItemSoon(navFocusedIndex);
        } else if (target === contentPaneRef.current) {
          setPaneFocusMode("content");
          blurActiveIfInside(contentPaneRef.current, "descend-content");
          setContentContainerFocused(false);
          const els = getFocusableElements(contentPaneRef.current);
          dlog("container: Enter/Space on content \u2192 focus first focusable", { count: els.length });
          (_a2 = els[0] || contentPaneRef.current) == null ? void 0 : _a2.focus();
        } else if (target === secondaryPaneRef.current) {
          setPaneFocusMode("secondary");
          blurActiveIfInside(secondaryPaneRef.current, "descend-secondary");
          setSecondaryContainerFocused(false);
          const els = getFocusableElements(secondaryPaneRef.current);
          dlog("container: Enter/Space on secondary \u2192 focus first focusable", { count: els.length });
          (_b2 = els[0] || secondaryPaneRef.current) == null ? void 0 : _b2.focus();
        }
        return;
      }
    }
    if (key === "Escape") {
      if (inContent || inSecondary) {
        e.preventDefault();
        setPaneFocusMode("containers");
        dlog("Escape: from", inContent ? "content" : "secondary", "\u2192 containers (focus container)");
        if (inContent) blurActiveIfInside(contentPaneRef.current, "escape-ascend");
        if (inSecondary) blurActiveIfInside(secondaryPaneRef.current, "escape-ascend");
        if (inContent) setTimeout(() => focusEl(contentPaneRef.current), 10);
        if (inSecondary) setTimeout(() => focusEl(secondaryPaneRef.current), 10);
        return;
      }
      if (inNav) {
        e.preventDefault();
        setPaneFocusMode("containers");
        dlog("Escape: from nav \u2192 containers (focus nav container)");
        blurActiveIfInNav();
        focusEl(navPaneRef.current);
        return;
      }
      if (isContainer) {
        e.preventDefault();
        setPaneFocusMode("containers");
        dlog("Escape: on container (stay in containers)");
        return;
      }
    }
    if (key === "Enter" || key === " ") {
      if (target === contentPaneRef.current && paneFocusMode === "content") {
        e.preventDefault();
        blurActiveIfInside(contentPaneRef.current, "descend-content");
        const els = getFocusableElements(contentPaneRef.current);
        dlog("Enter/Space on content container in content mode");
        (_c2 = els[0] || contentPaneRef.current) == null ? void 0 : _c2.focus();
        return;
      }
      if (target === secondaryPaneRef.current && paneFocusMode === "secondary") {
        e.preventDefault();
        blurActiveIfInside(secondaryPaneRef.current, "descend-secondary");
        const els = getFocusableElements(secondaryPaneRef.current);
        dlog("Enter/Space on secondary container in secondary mode");
        (_d = els[0] || secondaryPaneRef.current) == null ? void 0 : _d.focus();
        return;
      }
    }
    if (key === "ArrowRight") {
      if (inNav || paneFocusMode === "nav") {
        e.preventDefault();
        setPaneFocusMode("content");
        dlog("ArrowRight: from nav \u2192 content (focus content)");
        blurActiveIfInside(navPaneRef.current, "from-nav");
        setNavContainerFocused(false);
        focusContentSoon();
        return;
      }
      if (inContent || paneFocusMode === "content") {
        if (hasSecondary) {
          e.preventDefault();
          setPaneFocusMode("secondary");
          dlog("ArrowRight: from content \u2192 secondary (focus secondary)");
          blurActiveIfInside(contentPaneRef.current, "from-content");
          setContentContainerFocused(false);
          setTimeout(() => focusEl(secondaryPaneRef.current), 10);
        }
        return;
      }
    }
    if (key === "ArrowLeft") {
      if (inSecondary || paneFocusMode === "secondary") {
        e.preventDefault();
        dlog("ArrowLeft: from secondary \u2192 content (focus content)");
        blurActiveIfInside(secondaryPaneRef.current, "from-secondary");
        setSecondaryContainerFocused(false);
        focusContentSoon();
        return;
      }
      if (inContent || paneFocusMode === "content") {
        e.preventDefault();
        setPaneFocusMode("nav");
        dlog("ArrowLeft: from content \u2192 nav (focus nav item)", { navFocusedIndex });
        navActiveButtonIndexRef.current = navFocusedIndex;
        blurActiveIfInside(contentPaneRef.current, "from-content");
        setContentContainerFocused(false);
        focusNavItemSoon(navFocusedIndex);
        return;
      }
    }
    if ((key === "Enter" || key === " ") && (inNav || paneFocusMode === "nav")) {
      e.preventDefault();
      const list = navListRef.current;
      const nodes = list ? Array.from(list.querySelectorAll("[data-nav-item]")) : [];
      let idx = (_e = navActiveButtonIndexRef.current) != null ? _e : navFocusedIndex;
      if (nodes.length) {
        const ae = document.activeElement;
        const idxFromAe = ae ? nodes.indexOf(ae) : -1;
        if (idxFromAe >= 0) idx = idxFromAe;
      }
      idx = Math.max(0, Math.min(idx, nodes.length - 1));
      setNavFocusedIndex(idx);
      navActiveButtonIndexRef.current = idx;
      dlog("Root: Enter/Space activate from nav context", { idx });
      navigateTo(getId(steps[idx]));
      setPaneFocusMode("content");
      paneFocusModeRef.current = "content";
      ignoreNextClickRef.current = true;
      blurActiveIfInNav();
      focusContentSoon();
      return;
    }
  };
  const PrimaryNav = () => {
    const resetClickSuppression = () => {
      ignoreNextClickRef.current = false;
      ignoreNextNavItemActivationRef.current = false;
    };
    const onKeyDown = (e) => {
      var _a2, _b2;
      if (!navListRef.current) return;
      const nodes = Array.from(navListRef.current.querySelectorAll("[data-nav-item]"));
      if (!nodes.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        e.stopPropagation();
        ignoreNextNavItemActivationRef.current = false;
        setPaneFocusMode("nav");
        const base = (_a2 = navActiveButtonIndexRef.current) != null ? _a2 : navFocusedIndex;
        const next = Math.min(nodes.length - 1, base + 1);
        setNavFocusedIndex(next);
        navActiveButtonIndexRef.current = next;
        focusNavItemSoon(next);
        dlog("PrimaryNav: ArrowDown", { from: base, to: next });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        e.stopPropagation();
        ignoreNextNavItemActivationRef.current = false;
        setPaneFocusMode("nav");
        const base = (_b2 = navActiveButtonIndexRef.current) != null ? _b2 : navFocusedIndex;
        const prev = Math.max(0, base - 1);
        setNavFocusedIndex(prev);
        navActiveButtonIndexRef.current = prev;
        focusNavItemSoon(prev);
        dlog("PrimaryNav: ArrowUp", { from: base, to: prev });
      } else if (e.key === "Home") {
        e.preventDefault();
        e.stopPropagation();
        ignoreNextNavItemActivationRef.current = false;
        const first = 0;
        setNavFocusedIndex(first);
        navActiveButtonIndexRef.current = first;
        focusNavItemSoon(first);
        dlog("PrimaryNav: Home", { to: first });
      } else if (e.key === "End") {
        e.preventDefault();
        e.stopPropagation();
        ignoreNextNavItemActivationRef.current = false;
        const last = nodes.length - 1;
        setNavFocusedIndex(last);
        navActiveButtonIndexRef.current = last;
        focusNavItemSoon(last);
        dlog("PrimaryNav: End", { to: last });
      }
    };
    const onKeyUp = (_e) => {
    };
    const onKeyDownCapture = (e) => {
      var _a2, _b2;
      if (e.key !== "Enter" && e.key !== " ") return;
      if (!navListRef.current) return;
      const nodes = Array.from(navListRef.current.querySelectorAll("[data-nav-item]"));
      if (!nodes.length) return;
      e.preventDefault();
      let idx = -1;
      const target = e.target;
      const button = (_a2 = target == null ? void 0 : target.closest) == null ? void 0 : _a2.call(target, "[data-nav-item]");
      if (button) {
        idx = nodes.indexOf(button);
      }
      if (idx < 0) {
        idx = (_b2 = navActiveButtonIndexRef.current) != null ? _b2 : navFocusedIndex;
      }
      idx = Math.max(0, Math.min(idx, nodes.length - 1));
      setNavFocusedIndex(idx);
      navActiveButtonIndexRef.current = idx;
      dlog("PrimaryNav: Enter/Space activate (capture)", { idx });
      navigateTo(getId(steps[idx]));
      setPaneFocusMode("content");
      paneFocusModeRef.current = "content";
      ignoreNextClickRef.current = true;
      if (navBootstrapTimeoutRef.current != null) {
        clearTimeout(navBootstrapTimeoutRef.current);
        navBootstrapTimeoutRef.current = null;
      }
      blurActiveIfInNav();
      focusContentSoon();
    };
    const onClickList = (e) => {
      if (e.defaultPrevented) return;
      ignoreNextClickRef.current = false;
      const target = e.target;
      if (!target) return;
      const button = target.closest("[data-nav-item]");
      if (!button || !navListRef.current || !navListRef.current.contains(button)) return;
      const nodes = Array.from(navListRef.current.querySelectorAll("[data-nav-item]"));
      const idx = nodes.indexOf(button);
      if (idx < 0) return;
      setNavFocusedIndex(idx);
      navActiveButtonIndexRef.current = idx;
      dlog("PrimaryNav: click delegate activate", { idx });
      navigateTo(getId(steps[idx]));
      setPaneFocusMode("content");
      blurActiveIfInNav();
      if (navBootstrapTimeoutRef.current != null) {
        clearTimeout(navBootstrapTimeoutRef.current);
        navBootstrapTimeoutRef.current = null;
      }
      focusContentSoon();
    };
    return /* @__PURE__ */ jsx6(
      "ul",
      {
        ref: navListRef,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(getId(steps[Math.max(0, navFocusedIndex)])),
        onKeyDownCapture,
        onKeyDown,
        onKeyUp,
        onPointerDown: resetClickSuppression,
        onMouseDown: resetClickSuppression,
        onClick: onClickList,
        children: steps.map((s, i) => {
          const id = getId(s);
          const isCurrent = i === currentIndex;
          const focused = paneFocusMode === "nav" && i === navFocusedIndex;
          return /* @__PURE__ */ jsx6("li", { id: String(id), role: "option", "aria-selected": isCurrent, children: /* @__PURE__ */ jsx6(
            "button",
            {
              "data-nav-item": true,
              tabIndex: focused ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (isCurrent ? " is-current" : "") + (focused ? " is-focused" : ""),
              "aria-current": isCurrent ? "step" : void 0,
              onPointerDown: resetClickSuppression,
              onMouseDown: resetClickSuppression,
              onKeyDown: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (ignoreNextNavItemActivationRef.current) {
                    ignoreNextNavItemActivationRef.current = false;
                    return;
                  }
                  navActiveButtonIndexRef.current = i;
                  ignoreNextClickRef.current = true;
                  dlog("NavItem: onKeyDown activate", { i, id: String(getId(steps[i])) });
                  navigateTo(getId(steps[i]));
                  setPaneFocusMode("content");
                  paneFocusModeRef.current = "content";
                  if (navBootstrapTimeoutRef.current != null) {
                    clearTimeout(navBootstrapTimeoutRef.current);
                    navBootstrapTimeoutRef.current = null;
                  }
                  blurActiveIfInNav();
                  focusContentSoon();
                }
              },
              onKeyUp: (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  if (ignoreNextNavItemActivationRef.current) {
                    ignoreNextNavItemActivationRef.current = false;
                    return;
                  }
                  navActiveButtonIndexRef.current = i;
                  dlog("NavItem: onKeyUp activate (fallback)", { i, id: String(getId(steps[i])) });
                  navigateTo(getId(steps[i]));
                  setPaneFocusMode("content");
                  paneFocusModeRef.current = "content";
                  if (navBootstrapTimeoutRef.current != null) {
                    clearTimeout(navBootstrapTimeoutRef.current);
                    navBootstrapTimeoutRef.current = null;
                  }
                  blurActiveIfInNav();
                  focusContentSoon();
                }
              },
              onClick: (e) => {
                if (ignoreNextClickRef.current) {
                  ignoreNextClickRef.current = false;
                  e.preventDefault();
                  e.stopPropagation();
                  dlog("NavItem: ignored synthetic click after keyboard activation", { i });
                  return;
                }
                setNavFocusedIndex(i);
                navActiveButtonIndexRef.current = i;
                dlog("NavItem: onClick select", { i, id: String(id) });
                navigateTo(id);
                setPaneFocusMode("content");
                paneFocusModeRef.current = "content";
                if (navBootstrapTimeoutRef.current != null) {
                  clearTimeout(navBootstrapTimeoutRef.current);
                  navBootstrapTimeoutRef.current = null;
                }
                blurActiveIfInNav();
                focusContentSoon();
              },
              children: s.label
            }
          ) }, String(id));
        })
      }
    );
  };
  const renderMobile = () => {
    const idx = Math.max(0, currentIndex);
    const hasPrev = idx > 0;
    const hasNext = idx < steps.length - 1;
    const allowControls = showMobileControls ? showMobileControls(current) : isStepComplete ? isStepComplete(current) : true;
    return /* @__PURE__ */ jsxs4("div", { className: "nhsfdp-workflow-mobile", children: [
      breakpoint === "tablet" ? breadcrumbs : null,
      allowControls && /* @__PURE__ */ jsxs4("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        hasPrev ? /* @__PURE__ */ jsx6(
          BackLink,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const step = steps[idx - 1];
              if (step) navigateTo(getId(step));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ jsx6(BackLink, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        hasNext ? /* @__PURE__ */ jsx6(
          ForwardLink,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const step = steps[idx + 1];
              if (step) navigateTo(getId(step));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ jsx6(ForwardLink, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ jsx6(
        CardsScroller,
        {
          steps,
          currentIndex: idx,
          onNavigate: (i) => {
            const step = steps[i];
            if (step) navigateTo(getId(step));
          },
          renderCard: (s, _i, _isCurrent) => renderStepCard ? renderStepCard(s) : renderStepContent(s)
        }
      )
    ] });
  };
  const renderTabletDesktop = (cfg) => {
    var _a2;
    return /* @__PURE__ */ jsx6(
      "div",
      {
        className: "nhsfdp-workflow-grid panes-" + ((_a2 = cfg.panes) != null ? _a2 : 2),
        onKeyDown: onRootKeyDown,
        ref: rootRef,
        role: "grid",
        "aria-rowcount": 1,
        "aria-colcount": (cfg.showPrimaryNav ? 1 : 0) + 1 + (cfg.showSecondaryNav ? 1 : 0),
        "aria-label": "Workflow layout",
        children: /* @__PURE__ */ jsxs4("div", { className: "nhsfdp-workflow-body", role: "row", children: [
          cfg.showPrimaryNav && /* @__PURE__ */ jsx6(
            "aside",
            {
              ref: navPaneRef,
              className: "nhsfdp-pane primary-nav" + (navContainerFocused ? " is-active-pane" : ""),
              "aria-label": "Primary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (e) => {
                if (e.target === navPaneRef.current) setNavContainerFocused(true);
              },
              onBlur: (e) => {
                if (e.target === navPaneRef.current) setNavContainerFocused(false);
              },
              children: /* @__PURE__ */ jsx6("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ jsx6(PrimaryNav, {}) })
            }
          ),
          /* @__PURE__ */ jsxs4(
            "main",
            {
              ref: contentPaneRef,
              className: "nhsfdp-pane content" + (contentContainerFocused ? " is-active-pane" : ""),
              "aria-live": "polite",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (e) => {
                if (e.target === contentPaneRef.current) setContentContainerFocused(true);
              },
              onBlur: (e) => {
                if (e.target === contentPaneRef.current) setContentContainerFocused(false);
              },
              children: [
                showBreadcrumbs ? breadcrumbs : null,
                /* @__PURE__ */ jsx6("div", { role: "main", children: renderStepContent(current, activeSection) })
              ]
            }
          ),
          (() => {
            const secondaryNavNode = renderSecondaryNav ? renderSecondaryNav(current, currentSections, activeSection, (id) => selectSection(id)) : currentSections && currentSections.length > 0 ? /* @__PURE__ */ jsx6("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: currentSections.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return /* @__PURE__ */ jsx6("li", { role: "option", "aria-selected": isActive, children: /* @__PURE__ */ jsx6(
                "button",
                {
                  type: "button",
                  className: "nhsfdp-secondary-nav__item" + (isActive ? " is-current" : ""),
                  "data-sec-item": true,
                  onClick: () => selectSection(sec.id),
                  children: sec.label
                }
              ) }, String(sec.id));
            }) }) : void 0;
            const secondaryContentNode = renderSecondaryContent == null ? void 0 : renderSecondaryContent(current, activeSection);
            const shouldRenderAside = cfg.showSecondaryNav && (secondaryNavNode || secondaryContentNode);
            return shouldRenderAside ? /* @__PURE__ */ jsx6(
              "aside",
              {
                ref: secondaryPaneRef,
                className: "nhsfdp-pane secondary-nav" + (secondaryContainerFocused ? " is-active-pane" : ""),
                "aria-label": "Secondary navigation",
                role: "gridcell",
                tabIndex: 0,
                onFocus: (e) => {
                  if (e.target === secondaryPaneRef.current) setSecondaryContainerFocused(true);
                },
                onBlur: (e) => {
                  if (e.target === secondaryPaneRef.current) setSecondaryContainerFocused(false);
                },
                children: /* @__PURE__ */ jsxs4("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                  secondaryNavNode,
                  secondaryContentNode
                ] })
              }
            ) : null;
          })()
        ] })
      }
    );
  };
  if (!hydrated) {
    return /* @__PURE__ */ jsx6("div", { className: "nhsfdp-workflow " + (className != null ? className : ""), children: /* @__PURE__ */ jsx6("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ jsxs4("main", { className: "nhsfdp-pane content", children: [
      renderBreadcrumbs ? renderBreadcrumbs({ steps, current, onNavigate: navigateTo }) : null,
      current ? renderStepContent(current, (_b = current == null ? void 0 : current.sections) == null ? void 0 : _b.find((s) => {
        var _a2, _b2, _c2;
        return s.id === ((_c2 = defaultSectionIdForStep == null ? void 0 : defaultSectionIdForStep(current)) != null ? _c2 : (_b2 = (_a2 = current == null ? void 0 : current.sections) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.id);
      })) : null
    ] }) }) });
  }
  const useMobilePattern = breakpoint === "mobile" || !enableTabletGrid && breakpoint === "tablet" || ((_c = paneConfig.panes) != null ? _c : 1) === 1;
  if (useMobilePattern) {
    return /* @__PURE__ */ jsx6("div", { className: "nhsfdp-workflow " + (className != null ? className : ""), children: renderMobile() });
  }
  return /* @__PURE__ */ jsx6("div", { className: "nhsfdp-workflow " + (className != null ? className : ""), children: renderTabletDesktop(paneConfig) });
}
export {
  WorkflowSplitView
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
