// src/components/StepByStepNavigation/StepByStepNavigation.tsx
import React, { useCallback, useMemo, useState } from "react";

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/components/StepByStepNavigation/StepByStepNavigation.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var HeadingTag = ({ level, children, className }) => {
  const Tag = `h${level}`;
  return React.createElement(Tag, { className }, children);
};
var DefaultLink = ({ href, children, className, ...rest }) => /* @__PURE__ */ jsx("a", { href, className, ...rest, children });
function renderTitleContent(item, isCurrent) {
  return /* @__PURE__ */ jsx("span", { className: clsx_default("nhs-step-nav__title", { "nhs-step-nav__title--current": isCurrent }), children: item.title });
}
var StepByStepNavigation = ({
  id,
  className,
  ariaLabel = "Step by step",
  heading,
  summary,
  headingLevel = 3,
  variant = "full-width",
  items,
  numbered = true,
  currentStepId,
  renderLink,
  collapsible = true,
  singleOpen = false,
  defaultExpandedIds,
  expandedIds,
  onToggle,
  showAllControls = false,
  autoFocusExpanded = false
}) => {
  const Link = renderLink != null ? renderLink : DefaultLink;
  const containerProps = variant === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" };
  const ContainerTag = containerProps.as === "aside" ? "aside" : "nav";
  const uncontrolled = expandedIds === void 0;
  const [internalExpanded, setInternalExpanded] = useState(
    () => new Set(defaultExpandedIds != null ? defaultExpandedIds : [])
  );
  const expandedSet = useMemo(() => uncontrolled ? internalExpanded : new Set(expandedIds), [uncontrolled, internalExpanded, expandedIds]);
  const hasAnyContent = useMemo(
    () => items.some((it) => it.description || it.items && it.items.length > 0),
    [items]
  );
  const isExpanded = useCallback((stepId) => expandedSet.has(stepId), [expandedSet]);
  const setExpanded = useCallback((stepId, next) => {
    if (uncontrolled) {
      setInternalExpanded((prev) => {
        if (singleOpen) {
          return next ? /* @__PURE__ */ new Set([stepId]) : /* @__PURE__ */ new Set();
        }
        const nextSet = new Set(prev);
        if (next) nextSet.add(stepId);
        else nextSet.delete(stepId);
        return nextSet;
      });
    }
    onToggle == null ? void 0 : onToggle(stepId, next);
  }, [uncontrolled, onToggle, singleOpen]);
  const toggleAll = useCallback((expand) => {
    const ids = items.filter((it) => it.description || it.items && it.items.length > 0).map((it) => it.id);
    if (uncontrolled) {
      setInternalExpanded(() => expand ? singleOpen ? new Set(ids.slice(0, 1)) : new Set(ids) : /* @__PURE__ */ new Set());
    }
    ids.forEach((sid) => onToggle == null ? void 0 : onToggle(sid, expand));
  }, [items, uncontrolled, onToggle, singleOpen]);
  const onItemToggle = useCallback((item, buttonEl) => {
    const next = !isExpanded(item.id);
    setExpanded(item.id, next);
    if (next && autoFocusExpanded) {
      const panel = document.getElementById(`sbs-${item.id}-panel`);
      if (panel) {
        const focusable = panel.querySelector(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusable == null ? void 0 : focusable.focus();
      }
    } else {
      buttonEl == null ? void 0 : buttonEl.focus();
    }
  }, [autoFocusExpanded, isExpanded, setExpanded]);
  return React.createElement(
    ContainerTag,
    { id, "aria-label": ariaLabel, className: clsx_default(containerProps.className, className) },
    /* @__PURE__ */ jsxs(Fragment, { children: [
      variant === "full-width" && (heading || summary) && /* @__PURE__ */ jsxs("div", { className: "nhs-step-nav__intro", children: [
        heading && /* @__PURE__ */ jsx(HeadingTag, { level: headingLevel, className: "nhs-step-nav__heading", children: heading }),
        summary && /* @__PURE__ */ jsx("p", { className: "nhs-step-nav__summary", children: summary }),
        collapsible && !singleOpen && showAllControls && hasAnyContent && /* @__PURE__ */ jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => toggleAll(true), children: "Show all" }),
          /* @__PURE__ */ jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => toggleAll(false), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: clsx_default("nhs-step-nav__list", { "nhs-step-nav__list--numbered": numbered }), children: items.map((item, idx) => {
        const isCurrent = currentStepId === item.id;
        const itemClasses = clsx_default(
          "nhs-step-nav__item",
          isCurrent && "nhs-step-nav__item--current",
          item.status && `nhs-step-nav__item--${item.status}`
        );
        const title = item.href ? /* @__PURE__ */ jsx(Link, { href: item.href, className: "nhs-step-nav__link", "aria-current": isCurrent ? "step" : void 0, children: renderTitleContent(item, isCurrent) }) : renderTitleContent(item, isCurrent);
        const hasContent = !!(item.description || item.items && item.items.length > 0);
        const expanded = collapsible && hasContent ? isExpanded(item.id) : true;
        const headerId = `sbs-${item.id}-header`;
        const panelId = `sbs-${item.id}-panel`;
        return /* @__PURE__ */ jsxs("li", { className: itemClasses, children: [
          /* @__PURE__ */ jsxs("div", { className: "nhs-step-nav__header", children: [
            title,
            (item.optional || item.duration || item.meta) && /* @__PURE__ */ jsxs("div", { className: "nhs-step-nav__meta", children: [
              item.optional && /* @__PURE__ */ jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              item.duration && /* @__PURE__ */ jsx("span", { className: "nhs-step-nav__duration", children: item.duration }),
              item.meta
            ] }),
            collapsible && hasContent && /* @__PURE__ */ jsx(
              "button",
              {
                id: headerId,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": expanded,
                "aria-controls": panelId,
                onClick: (e) => onItemToggle(item, e.currentTarget),
                "aria-label": (expanded ? "Hide" : "Show") + ` details for ${typeof item.title === "string" ? item.title : "this step"}`,
                children: /* @__PURE__ */ jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          hasContent && (!collapsible || expanded) && /* @__PURE__ */ jsxs(
            "div",
            {
              id: panelId,
              role: "region",
              "aria-labelledby": collapsible ? headerId : void 0,
              className: clsx_default("nhs-step-nav__content"),
              children: [
                item.description && /* @__PURE__ */ jsx("p", { className: "nhs-step-nav__description", children: item.description }),
                item.items && item.items.length > 0 && /* @__PURE__ */ jsx("ol", { className: "nhs-step-nav__sublist", children: item.items.map((sub) => {
                  const subCurrent = currentStepId === sub.id;
                  const subTitle = sub.href ? /* @__PURE__ */ jsx(Link, { href: sub.href, className: "nhs-step-nav__sublink", "aria-current": subCurrent ? "step" : void 0, children: renderTitleContent(sub, subCurrent) }) : renderTitleContent(sub, subCurrent);
                  return /* @__PURE__ */ jsx("li", { className: clsx_default("nhs-step-nav__subitem", sub.status && `nhs-step-nav__subitem--${sub.status}`), children: subTitle }, sub.id);
                }) })
              ]
            }
          )
        ] }, item.id || idx);
      }) })
    ] })
  );
};
export {
  StepByStepNavigation
};
//# sourceMappingURL=index.js.map
