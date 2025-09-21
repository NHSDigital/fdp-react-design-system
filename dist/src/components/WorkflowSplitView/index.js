// src/components/WorkflowSplitView/WorkflowSplitView.tsx
import { useState as useState3 } from "react";

// src/components/WorkflowSplitView/components/BreadcrumbsBar.tsx
import { jsx } from "react/jsx-runtime";
function BreadcrumbsBar({
  steps,
  currentIndex,
  onNavigate,
  renderLabel,
  ariaLabel = "Breadcrumbs",
  className
}) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": ariaLabel, className, children: /* @__PURE__ */ jsx("ol", { className: "nhsfdp-breadcrumbs", role: "list", children: steps.map((s, i) => {
    var _a;
    const isCurrent = i === currentIndex;
    const label = renderLabel ? renderLabel(s, i) : (_a = s.label) != null ? _a : `Step ${i + 1}`;
    return /* @__PURE__ */ jsx("li", { className: isCurrent ? "is-current" : void 0, children: isCurrent ? /* @__PURE__ */ jsx("span", { "aria-current": "page", children: label }) : /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "nhsfdp-breadcrumb",
        onClick: () => onNavigate == null ? void 0 : onNavigate(i),
        children: label
      }
    ) }, i);
  }) }) });
}

// src/components/WorkflowSplitView/components/CardsScroller.tsx
import * as React from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function CardsScroller({
  steps,
  currentIndex,
  onNavigate,
  renderCard,
  className,
  ariaLabel = "Steps"
}) {
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const child = el.children[currentIndex];
    child == null ? void 0 : child.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }, [currentIndex]);
  return /* @__PURE__ */ jsx2("div", { className, "aria-label": ariaLabel, role: "region", children: /* @__PURE__ */ jsx2("div", { ref: containerRef, className: "nhsfdp-cards-scroller", tabIndex: 0, children: steps.map((s, i) => {
    var _a;
    return /* @__PURE__ */ jsx2(
      "div",
      {
        className: "nhsfdp-card" + (i === currentIndex ? " is-current" : ""),
        role: "group",
        "aria-roledescription": "step",
        "aria-label": ((_a = s.label) != null ? _a : `Step ${i + 1}`).toString(),
        onClick: () => onNavigate == null ? void 0 : onNavigate(i),
        children: renderCard(s, i, i === currentIndex)
      },
      i
    );
  }) }) });
}

// src/components/WorkflowSplitView/hooks/useWorkflowLayout.ts
import * as React3 from "react";

// src/hooks/useBreakpoints.ts
import * as React2 from "react";
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
  const [width, setWidth] = React2.useState(getViewportWidth());
  React2.useEffect(() => {
    if (typeof window === "undefined") return;
    const handle = () => setWidth(getViewportWidth());
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  const up = React2.useCallback((key) => width >= NHS_FDP_BREAKPOINTS[key], [width]);
  const down = React2.useCallback((key) => width < NHS_FDP_BREAKPOINTS[key], [width]);
  const between = React2.useCallback((min, max) => {
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
  const [hydrated, setHydrated] = React3.useState(false);
  React3.useEffect(() => setHydrated(true), []);
  const isTablet = hydrated && up("medium") && !up("xlarge");
  const isDesktop = hydrated && up("xlarge");
  const breakpoint = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";
  const paneConfig = React3.useMemo(() => {
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

// src/components/WorkflowSplitView/WorkflowSplitView.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function WorkflowSplitView(props) {
  var _a;
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
    getId = (s) => s.id
  } = props;
  const [uncontrolledId, setUncontrolledId] = useState3(
    defaultStepId != null ? defaultStepId : steps[0] ? getId(steps[0]) : void 0
  );
  const activeId = currentStepId != null ? currentStepId : uncontrolledId;
  const currentIndex = steps.findIndex((s) => getId(s) === activeId);
  const current = currentIndex >= 0 ? steps[currentIndex] : steps[0];
  const navigateTo = (id) => {
    if (currentStepId === void 0) setUncontrolledId(id);
    const step = steps.find((s) => getId(s) === id);
    if (step && onStepChange) onStepChange(id, step);
  };
  const { hydrated, breakpoint, paneConfig } = useWorkflowLayout({
    step: current,
    index: currentIndex,
    layoutForStep
  });
  const breadcrumbs = renderBreadcrumbs ? renderBreadcrumbs({ steps, current, onNavigate: navigateTo }) : /* @__PURE__ */ jsx3(
    BreadcrumbsBar,
    {
      steps,
      currentIndex: Math.max(0, currentIndex),
      onNavigate: (i) => navigateTo(getId(steps[i]))
    }
  );
  const PrimaryNav = () => /* @__PURE__ */ jsx3("ul", { className: "nhsfdp-primary-nav", role: "list", children: steps.map((s, i) => {
    const id = getId(s);
    const isCurrent = i === currentIndex;
    return /* @__PURE__ */ jsx3("li", { children: /* @__PURE__ */ jsx3(
      "button",
      {
        type: "button",
        className: "nhsfdp-primary-nav__item" + (isCurrent ? " is-current" : ""),
        "aria-current": isCurrent ? "step" : void 0,
        onClick: () => navigateTo(id),
        children: s.label
      }
    ) }, String(id));
  }) });
  const renderMobile = () => /* @__PURE__ */ jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
    breadcrumbs,
    /* @__PURE__ */ jsx3(
      CardsScroller,
      {
        steps,
        currentIndex: Math.max(0, currentIndex),
        onNavigate: (i) => navigateTo(getId(steps[i])),
        renderCard: (s) => renderStepCard ? renderStepCard(s) : renderStepContent(s)
      }
    )
  ] });
  const renderTabletDesktop = (cfg) => {
    var _a2;
    return /* @__PURE__ */ jsxs("div", { className: "nhsfdp-workflow-grid panes-" + ((_a2 = cfg.panes) != null ? _a2 : 2), children: [
      breadcrumbs,
      /* @__PURE__ */ jsxs("div", { className: "nhsfdp-workflow-body", children: [
        cfg.showPrimaryNav && /* @__PURE__ */ jsx3(
          "aside",
          {
            className: "nhsfdp-pane primary-nav",
            "aria-label": "Primary navigation",
            children: /* @__PURE__ */ jsx3(PrimaryNav, {})
          }
        ),
        /* @__PURE__ */ jsx3("main", { className: "nhsfdp-pane content", "aria-live": "polite", children: renderStepContent(current) }),
        cfg.showSecondaryNav && (renderSecondaryNav || renderSecondaryContent) && /* @__PURE__ */ jsxs(
          "aside",
          {
            className: "nhsfdp-pane secondary-nav",
            "aria-label": "Secondary navigation",
            children: [
              renderSecondaryNav == null ? void 0 : renderSecondaryNav(current),
              renderSecondaryContent == null ? void 0 : renderSecondaryContent(current)
            ]
          }
        )
      ] })
    ] });
  };
  if (!hydrated) {
    return /* @__PURE__ */ jsxs("div", { className: "nhsfdp-workflow " + (className != null ? className : ""), children: [
      breadcrumbs,
      /* @__PURE__ */ jsx3("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ jsx3("main", { className: "nhsfdp-pane content", children: current ? renderStepContent(current) : null }) })
    ] });
  }
  if (breakpoint === "mobile" || ((_a = paneConfig.panes) != null ? _a : 1) === 1) {
    return /* @__PURE__ */ jsx3("div", { className: "nhsfdp-workflow " + (className != null ? className : ""), children: renderMobile() });
  }
  return /* @__PURE__ */ jsx3("div", { className: "nhsfdp-workflow " + (className != null ? className : ""), children: renderTabletDesktop(paneConfig) });
}
export {
  WorkflowSplitView
};
//# sourceMappingURL=index.js.map
