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
      function classNames5() {
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
          return classNames5.apply(null, arg);
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
        classNames5.default = classNames5;
        module.exports = classNames5;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames5;
        });
      } else {
        window.classNames = classNames5;
      }
    })();
  }
});

// src/components/SlotMatrix/SlotMatrix.tsx
var import_classnames4 = __toESM(require_classnames(), 1);
import { useMemo, useState as useState2, useCallback as useCallback2 } from "react";

// src/components/Button/Button.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var { forwardRef, useCallback, useState } = React;
function ButtonComponent(props, ref) {
  const {
    children,
    variant = "primary",
    size = "default",
    fullWidth = false,
    className = "",
    preventDoubleClick = false,
    ...rest
  } = props;
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const classes = [
    "nhs-aria-button",
    `nhs-aria-button--${variant}`,
    size !== "default" ? `nhs-aria-button--${size}` : "",
    fullWidth ? "nhs-aria-button--full-width" : "",
    className
  ].filter(Boolean).join(" ");
  const isDisabled = "disabled" in rest ? rest.disabled : rest["aria-disabled"] === "true";
  const dataAttributes = {
    ...isPressed && { "data-pressed": "true" },
    ...isHovered && { "data-hovered": "true" },
    ...isFocused && { "data-focused": "true" },
    ...isDisabled && { "data-disabled": "true" }
  };
  const handleMouseDown = useCallback(() => !isDisabled && setIsPressed(true), [isDisabled]);
  const handleMouseUp = useCallback(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback(() => !isDisabled && setIsHovered(true), [isDisabled]);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);
  const handleKeyDown = useCallback((event) => {
    if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
      event.preventDefault();
      event.currentTarget.click();
    }
  }, [rest]);
  const handleClick = useCallback((event) => {
    if (preventDoubleClick) {
      const target = event.currentTarget;
      const isAlreadyProcessing = target.getAttribute("data-processing") === "true";
      if (isAlreadyProcessing) {
        event.preventDefault();
        return;
      }
      target.setAttribute("data-processing", "true");
      setTimeout(() => {
        target.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [preventDoubleClick]);
  if ("href" in rest && rest.href) {
    const { id: id2, style: style2, title: title2, ["aria-label"]: ariaLabel2, ["aria-describedby"]: ariaDescribedBy2, ["aria-labelledby"]: ariaLabelledBy2, tabIndex: tabIndex2, ...anchorRest } = rest;
    const anchorProps = rest;
    return /* @__PURE__ */ jsx(
      "a",
      {
        ref,
        href: anchorProps.href,
        target: anchorProps.target,
        rel: anchorProps.rel,
        className: classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...dataAttributes,
        ...preventDoubleClick && { "data-prevent-double-click": "true" },
        ...anchorRest,
        onKeyDown: (event) => {
          var _a;
          (_a = anchorProps.onKeyDown) == null ? void 0 : _a.call(anchorProps, event);
          handleKeyDown(event);
        },
        onClick: (event) => {
          var _a;
          (_a = anchorProps.onClick) == null ? void 0 : _a.call(anchorProps, event);
          handleClick(event);
        },
        onMouseDown: (event) => {
          var _a;
          (_a = anchorProps.onMouseDown) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseDown();
        },
        onMouseUp: (event) => {
          var _a;
          (_a = anchorProps.onMouseUp) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseUp();
        },
        onMouseEnter: (event) => {
          var _a;
          (_a = anchorProps.onMouseEnter) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseEnter();
        },
        onMouseLeave: (event) => {
          var _a;
          (_a = anchorProps.onMouseLeave) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseLeave();
        },
        onFocus: (event) => {
          var _a;
          (_a = anchorProps.onFocus) == null ? void 0 : _a.call(anchorProps, event);
          handleFocus();
        },
        onBlur: (event) => {
          var _a;
          (_a = anchorProps.onBlur) == null ? void 0 : _a.call(anchorProps, event);
          handleBlur();
        },
        "aria-disabled": anchorProps["aria-disabled"],
        ...anchorProps["aria-disabled"] === "true" && { "tabIndex": -1 },
        id: id2,
        style: style2,
        title: title2,
        "aria-label": ariaLabel2,
        "aria-describedby": ariaDescribedBy2,
        "aria-labelledby": ariaLabelledBy2,
        tabIndex: tabIndex2,
        children
      }
    );
  }
  const { id, style, title, ["aria-label"]: ariaLabel, ["aria-describedby"]: ariaDescribedBy, ["aria-labelledby"]: ariaLabelledBy, tabIndex, name, value: valueProp, form, formAction, formEncType, formMethod, formNoValidate, formTarget, autoFocus, ...buttonRest } = rest;
  const buttonProps = rest;
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: buttonProps.type || "button",
      disabled: buttonProps.disabled,
      className: classes,
      "data-module": "nhs-button",
      ...dataAttributes,
      ...preventDoubleClick && { "data-prevent-double-click": "true" },
      ...buttonProps.disabled && { "aria-disabled": "true" },
      ...buttonRest,
      onKeyDown: (event) => {
        var _a;
        (_a = buttonProps.onKeyDown) == null ? void 0 : _a.call(buttonProps, event);
        handleKeyDown(event);
      },
      onClick: (event) => {
        var _a;
        (_a = buttonProps.onClick) == null ? void 0 : _a.call(buttonProps, event);
        handleClick(event);
      },
      onMouseDown: (event) => {
        var _a;
        (_a = buttonProps.onMouseDown) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseDown();
      },
      onMouseUp: (event) => {
        var _a;
        (_a = buttonProps.onMouseUp) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseUp();
      },
      onMouseEnter: (event) => {
        var _a;
        (_a = buttonProps.onMouseEnter) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseEnter();
      },
      onMouseLeave: (event) => {
        var _a;
        (_a = buttonProps.onMouseLeave) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseLeave();
      },
      onFocus: (event) => {
        var _a;
        (_a = buttonProps.onFocus) == null ? void 0 : _a.call(buttonProps, event);
        handleFocus();
      },
      onBlur: (event) => {
        var _a;
        (_a = buttonProps.onBlur) == null ? void 0 : _a.call(buttonProps, event);
        handleBlur();
      },
      id,
      style,
      title,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-labelledby": ariaLabelledBy,
      tabIndex,
      name,
      value: valueProp,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      autoFocus,
      children
    }
  );
}
var Button = forwardRef(ButtonComponent);
Button.displayName = "Button";
var Button_default = Button;

// src/components/Select/Select.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx as jsx2 } from "react/jsx-runtime";
var SelectOption = ({
  value,
  disabled = false,
  selected = false,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className,
  children,
  ...props
}) => {
  const optionClasses = (0, import_classnames.default)(
    "nhsuk-select__option",
    className
  );
  return /* @__PURE__ */ jsx2(
    "option",
    {
      className: optionClasses,
      value,
      disabled,
      ...props,
      children
    }
  );
};
var SelectBase = ({
  id,
  name,
  ariaLabel,
  value,
  defaultValue,
  disabled = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  multiple = false,
  size,
  autoComplete,
  options,
  children,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  var _a;
  const selectClasses = (0, import_classnames.default)(
    "nhsuk-select",
    {
      "nhsuk-select--error": hasError
    },
    className
  );
  const renderOptionsFromProp = () => {
    if (!options) return null;
    return options.map((option, index) => /* @__PURE__ */ jsx2(
      "option",
      {
        value: option.value,
        disabled: option.disabled,
        "data-initial-selected": option.selected || void 0,
        children: option.text
      },
      `${option.value}-${index}`
    ));
  };
  const derivedDefaultValue = defaultValue === void 0 && value === void 0 && options ? (_a = options.find((o) => o.selected)) == null ? void 0 : _a.value : void 0;
  return /* @__PURE__ */ jsx2(
    "select",
    {
      className: selectClasses,
      id,
      name,
      "aria-label": ariaLabel,
      value,
      defaultValue: defaultValue !== void 0 ? defaultValue : derivedDefaultValue,
      disabled,
      required,
      "aria-describedby": describedBy,
      multiple,
      size,
      autoComplete,
      onChange,
      onBlur,
      onFocus,
      ...props,
      children: children || renderOptionsFromProp()
    }
  );
};
var Select = SelectBase;
Select.Option = SelectOption;

// src/components/SlotMatrix/SlotMatrixToolbar.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var SlotMatrixToolbar = ({
  dateRange,
  onPrev,
  onNext,
  onToday,
  density,
  onDensityChange,
  a11yMode,
  onA11yModeChange
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
    /* @__PURE__ */ jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
      /* @__PURE__ */ jsx3(Button_default, { variant: "secondary", size: "small", onClick: onPrev, "aria-label": "Previous date range", children: "Prev" }),
      /* @__PURE__ */ jsx3(Button_default, { variant: "secondary", size: "small", onClick: onToday, "aria-label": "Jump to today", children: "Today" }),
      /* @__PURE__ */ jsx3(Button_default, { variant: "secondary", size: "small", onClick: onNext, "aria-label": "Next date range", children: "Next" }),
      /* @__PURE__ */ jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
        dateRange.start.toDateString(),
        " \u2013 ",
        dateRange.end.toDateString()
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
      /* @__PURE__ */ jsx3("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
      /* @__PURE__ */ jsx3(
        Select,
        {
          id: "slot-matrix-density-select",
          name: "slot-matrix-density",
          ariaLabel: "Change density",
          value: density,
          onChange: (e) => onDensityChange == null ? void 0 : onDensityChange(e.target.value),
          options: [
            { value: "comfortable", text: "Comfortable" },
            { value: "compact", text: "Compact" }
          ]
        }
      ),
      /* @__PURE__ */ jsx3("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
      /* @__PURE__ */ jsx3(
        Select,
        {
          id: "slot-matrix-mode-select",
          name: "slot-matrix-mode",
          ariaLabel: "Change accessibility mode",
          value: a11yMode,
          onChange: (e) => onA11yModeChange == null ? void 0 : onA11yModeChange(e.target.value),
          options: [
            { value: "grid", text: "Grid" },
            { value: "list", text: "List" }
          ]
        }
      )
    ] })
  ] });
};

// src/components/Tag/Tag.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Tag = ({
  text,
  html,
  children,
  color = "default",
  noBorder = false,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const tagClasses = (0, import_classnames2.default)(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${color}`]: color !== "default",
      "nhsuk-tag--no-border": noBorder,
      "nhsuk-tag--closable": closable,
      "nhsuk-tag--disabled": disabled
    },
    className
  );
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs2("strong", { className: tagClasses, ...props, children: [
    children ? children : html ? /* @__PURE__ */ jsx4("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx4(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: handleClose,
        disabled,
        "aria-label": "Remove",
        title: "Remove",
        children: "\xD7"
      }
    )
  ] });
};

// src/components/SlotMatrix/SlotMatrixLegend.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var SlotMatrixLegend = ({ items, orientation = "horizontal" }) => {
  return /* @__PURE__ */ jsx5("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${orientation}`, role: "list", "aria-label": "Slot legend", children: items.map((item) => /* @__PURE__ */ jsx5("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ jsx5(Tag, { color: mapStatusToTagColor(item.status), text: item.label }) }, item.status)) });
};
function mapStatusToTagColor(status) {
  switch (status) {
    case "available":
      return "green";
    case "full":
      return "grey";
    case "overbook":
      return "orange";
    case "held":
      return "yellow";
    // 'blocked' not mapped directly; choose grey as neutral representation
    case "blocked":
      return "grey";
    default:
      return "default";
  }
}

// src/components/Grid/Grid.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import React2 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Container = ({
  children,
  className,
  fluid = false,
  maxWidth,
  style,
  ...props
}) => {
  const containerClasses = (0, import_classnames3.default)(
    {
      "nhsuk-width-container": !fluid,
      "nhsuk-width-container-fluid": fluid
    },
    className
  );
  const mergedStyle = maxWidth ? { maxWidth, ...style || {} } : style;
  return /* @__PURE__ */ jsx6("div", { className: containerClasses, style: mergedStyle, ...props, children });
};
var Row = ({
  children,
  className,
  style,
  ...props
}) => {
  const rowClasses = (0, import_classnames3.default)("nhsuk-grid-row", className);
  return /* @__PURE__ */ jsx6("div", { className: rowClasses, style, ...props, children });
};
var Column = ({
  children,
  width = "full",
  mobileWidth,
  tabletWidth,
  desktopWidth,
  start,
  className,
  forceWidth = false,
  style,
  ...props
}) => {
  const columnClasses = (0, import_classnames3.default)(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${width}`]: !forceWidth,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${width}`]: forceWidth,
      // Responsive width overrides
      [`nhsuk-u-${mobileWidth}-mobile`]: mobileWidth,
      [`nhsuk-u-${tabletWidth}-tablet`]: tabletWidth,
      [`nhsuk-u-${desktopWidth}-desktop`]: desktopWidth,
      // Grid positioning
      [`nhsuk-grid-column-start-${start}`]: start && start >= 1 && start <= 7
    },
    className
  );
  return /* @__PURE__ */ jsx6("div", { className: columnClasses, style, ...props, children });
};
var Grid = ({
  children,
  className,
  style,
  ...props
}) => {
  const childrenArray = React2.Children.toArray(children);
  const firstChild = childrenArray[0];
  const hasRowAsFirstChild = React2.isValidElement(firstChild) && (firstChild.type === Row || typeof firstChild.props === "object" && firstChild.props && "className" in firstChild.props && typeof firstChild.props.className === "string" && firstChild.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ jsx6(Container, { className, style, ...props, children: hasRowAsFirstChild ? children : /* @__PURE__ */ jsx6(Row, { children }) });
};

// src/components/SlotMatrix/SlotMatrix.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var SlotMatrix = ({
  slots,
  sessions,
  // dateRange reserved for future horizontal multi-day features
  value,
  defaultValue,
  onChange,
  selectionMode = "single",
  a11yMode: controlledA11yMode,
  className,
  style,
  getSlotAriaLabel,
  toolbar,
  enableDefaultToolbar = true,
  legendItems,
  enableDefaultLegend = true,
  legendPlacement = "bottom",
  onA11yModeChange
}) => {
  const [uncontrolledA11yMode, setUncontrolledA11yMode] = useState2("grid");
  const a11yMode = controlledA11yMode || uncontrolledA11yMode;
  const [internalSelection, setInternalSelection] = useState2(defaultValue || []);
  const selected = value != null ? value : internalSelection;
  const timebandKeys = useMemo(() => {
    const keys = /* @__PURE__ */ new Set();
    slots.forEach((s) => keys.add(new Date(s.start).getTime()));
    return Array.from(keys).sort((a, b) => a - b);
  }, [slots]);
  const byTimeband = useMemo(() => {
    const map = {};
    slots.forEach((slot) => {
      const k = new Date(slot.start).getTime();
      if (!map[k]) map[k] = {};
      const remaining = slot.capacity - slot.booked - (slot.held || 0);
      map[k][slot.sessionId] = { slot, remaining };
    });
    return map;
  }, [slots]);
  const toggleSelect = useCallback2((slot) => {
    if (selectionMode === "single") {
      const next = [slot.id];
      if (!value) setInternalSelection(next);
      onChange == null ? void 0 : onChange(next, { lastAction: "select" });
    } else {
      const exists = selected.includes(slot.id);
      const next = exists ? selected.filter((id) => id !== slot.id) : [...selected, slot.id];
      if (!value) setInternalSelection(next);
      onChange == null ? void 0 : onChange(next, { lastAction: exists ? "deselect" : "select" });
    }
  }, [selectionMode, selected, value, onChange]);
  const derivedLegend = useMemo(() => {
    if (legendItems) return legendItems;
    if (!enableDefaultLegend) return void 0;
    const statuses = Array.from(new Set(slots.map((s) => s.status)));
    return statuses.map((st) => ({
      status: st,
      label: st.charAt(0).toUpperCase() + st.slice(1)
    }));
  }, [legendItems, enableDefaultLegend, slots]);
  const legendNode = derivedLegend ? /* @__PURE__ */ jsx7(
    SlotMatrixLegend,
    {
      items: derivedLegend,
      orientation: legendPlacement === "left" || legendPlacement === "right" ? "vertical" : "horizontal"
    }
  ) : null;
  const handleA11yModeChange = (mode) => {
    if (!controlledA11yMode) setUncontrolledA11yMode(mode);
    onA11yModeChange == null ? void 0 : onA11yModeChange(mode);
  };
  const toolbarNode = toolbar || (enableDefaultToolbar ? /* @__PURE__ */ jsx7(
    SlotMatrixToolbar,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode,
      onA11yModeChange: handleA11yModeChange
    }
  ) : null);
  const ListView = /* @__PURE__ */ jsx7("div", { style, className: (0, import_classnames4.default)(className), children: /* @__PURE__ */ jsx7(Grid, { className: (0, import_classnames4.default)("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ jsx7(Row, { children: /* @__PURE__ */ jsx7(Column, { width: "full", children: /* @__PURE__ */ jsxs3("div", { className: "nhs-slot-matrix", children: [
    toolbarNode,
    legendPlacement === "top" && legendNode,
    /* @__PURE__ */ jsx7("ul", { "aria-label": "Appointment slots list", children: slots.map((s) => /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsxs3("button", { type: "button", onClick: () => toggleSelect(s), "aria-pressed": selected.includes(s.id), children: [
      formatTime(new Date(s.start)),
      " \u2013 ",
      formatTime(new Date(s.end)),
      " (",
      s.status,
      ")"
    ] }) }, s.id)) }),
    legendPlacement === "bottom" && legendNode
  ] }) }) }) }) });
  if (a11yMode === "list") return ListView;
  return /* @__PURE__ */ jsx7("div", { style, className: (0, import_classnames4.default)(className), children: /* @__PURE__ */ jsx7(Grid, { className: (0, import_classnames4.default)("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ jsx7(Row, { children: /* @__PURE__ */ jsx7(Column, { width: "full", children: /* @__PURE__ */ jsxs3("div", { className: "nhs-slot-matrix", children: [
    toolbarNode,
    legendPlacement === "top" && legendNode,
    /* @__PURE__ */ jsxs3("div", { role: "grid", "aria-rowcount": timebandKeys.length + 1, "aria-colcount": sessions.length + 1, children: [
      /* @__PURE__ */ jsxs3("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ jsx7("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        sessions.map((session) => /* @__PURE__ */ jsx7("div", { role: "columnheader", "aria-label": `Session ${session.specialty}`, className: "nhs-slot-matrix__session-header", children: session.specialty }, session.id))
      ] }),
      timebandKeys.map((tk) => /* @__PURE__ */ jsxs3("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ jsx7("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": formatTime(new Date(tk)), children: formatTime(new Date(tk)) }),
        sessions.map((session) => {
          var _a;
          const cellData = (_a = byTimeband[tk]) == null ? void 0 : _a[session.id];
          if (!cellData) {
            return /* @__PURE__ */ jsx7("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, session.id);
          }
          const { slot, remaining } = cellData;
          const isSelected = selected.includes(slot.id);
          const ariaLabel = getSlotAriaLabel ? getSlotAriaLabel(slot) : `Slot ${formatTime(new Date(slot.start))} ${slot.status}${remaining === 0 ? " full" : ""}`;
          return /* @__PURE__ */ jsx7(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": slot.status,
              className: (0, import_classnames4.default)("nhs-slot-matrix__cell", isSelected && "nhs-slot-matrix__cell--selected"),
              "aria-label": ariaLabel,
              "aria-selected": isSelected || void 0,
              onClick: () => toggleSelect(slot),
              children: remaining > 0 ? `${remaining} left` : "Full"
            },
            slot.id
          );
        })
      ] }, tk))
    ] }),
    legendPlacement === "bottom" && legendNode
  ] }) }) }) }) });
};
function pad(n) {
  return n < 10 ? `0${n}` : `${n}`;
}
function formatTime(d) {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
export {
  SlotMatrix
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
