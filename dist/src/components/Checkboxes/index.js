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

// src/components/Checkboxes/Checkboxes.tsx
var import_classnames4 = __toESM(require_classnames(), 1);
import { useState as useState2 } from "react";

// src/components/Input/Input.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { useState, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Input = ({
  id,
  name,
  type = "text",
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  width = "full",
  inputMode,
  autoComplete,
  maxLength,
  minLength,
  pattern,
  step,
  min,
  max,
  showValueLabels = false,
  showCurrentValue = false,
  valueLabels,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(value || defaultValue || (type === "range" ? min || "0" : ""));
  useEffect(() => {
    if (value !== void 0) {
      setCurrentValue(value);
    }
  }, [value]);
  const handleChange = (event) => {
    const el = event.target;
    setCurrentValue(el.value);
    if ("type" in event && event.nativeEvent) {
      onChange == null ? void 0 : onChange(event);
    } else if (event.type === "keydown") {
      onChange == null ? void 0 : onChange(event);
    }
  };
  const isRange = type === "range";
  const inputClasses = (0, import_classnames.default)(
    "nhsuk-input",
    {
      "nhsuk-input--error": hasError,
      "nhsuk-input--range": isRange,
      [`nhsuk-input--width-${width}`]: width !== "full" && !isRange
    },
    className
  );
  const isControlled = value !== void 0;
  const sharedRangeProps = {
    id,
    name,
    type,
    placeholder,
    disabled,
    readOnly,
    required,
    "aria-describedby": describedBy,
    inputMode,
    autoComplete,
    maxLength,
    minLength,
    pattern,
    step,
    min,
    max,
    onChange: handleChange,
    onBlur,
    onFocus,
    onKeyDown: (e) => {
      if (isRange && /[0-9]/.test(e.key)) {
        const next = ((currentValue == null ? void 0 : currentValue.toString()) || "") + e.key;
        e.target.value = next;
        handleChange(e);
      }
      onKeyDown == null ? void 0 : onKeyDown(e);
    },
    ...props
  };
  const rangeWrapper = isRange ? /* @__PURE__ */ jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    showValueLabels && /* @__PURE__ */ jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: (valueLabels == null ? void 0 : valueLabels.min) || min || "0" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          className: inputClasses,
          value: isControlled ? value : currentValue,
          ...!isControlled && defaultValue !== void 0 ? { defaultValue } : {},
          ...sharedRangeProps
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: (valueLabels == null ? void 0 : valueLabels.max) || max || "100" })
    ] }),
    !showValueLabels && /* @__PURE__ */ jsx(
      "input",
      {
        className: inputClasses,
        value: isControlled ? value : currentValue,
        ...!isControlled && defaultValue !== void 0 ? { defaultValue } : {},
        ...sharedRangeProps
      }
    ),
    showCurrentValue && /* @__PURE__ */ jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      (valueLabels == null ? void 0 : valueLabels.current) || "Current value:",
      " ",
      /* @__PURE__ */ jsx("strong", { children: currentValue })
    ] }) })
  ] }) : null;
  if (isRange) {
    return rangeWrapper;
  }
  return /* @__PURE__ */ jsx(
    "input",
    {
      className: inputClasses,
      id,
      name,
      type,
      value,
      ...value === void 0 && defaultValue !== void 0 ? { defaultValue } : {},
      placeholder,
      disabled,
      readOnly,
      required,
      "aria-describedby": describedBy,
      inputMode,
      autoComplete,
      maxLength,
      minLength,
      pattern,
      step,
      min,
      max,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      ...props
    }
  );
};

// src/components/Label/Label.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { jsx as jsx2 } from "react/jsx-runtime";
var Label = ({
  htmlFor,
  className,
  isPageHeading = false,
  size = "m",
  children,
  ...props
}) => {
  const labelClasses = (0, import_classnames2.default)(
    "nhsuk-label",
    {
      [`nhsuk-label--${size}`]: size !== "m"
    },
    className
  );
  const LabelElement = isPageHeading ? "h1" : "label";
  return /* @__PURE__ */ jsx2(
    LabelElement,
    {
      className: labelClasses,
      htmlFor: isPageHeading ? void 0 : htmlFor,
      ...props,
      children: isPageHeading ? /* @__PURE__ */ jsx2("label", { className: "nhsuk-label-wrapper", htmlFor, children }) : children
    }
  );
};

// src/components/Fieldset/Fieldset.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Fieldset = ({
  children,
  legend,
  className,
  describedBy,
  ...fieldsetProps
}) => {
  const fieldsetClasses = (0, import_classnames3.default)(
    "nhsuk-fieldset",
    className
  );
  const legendClasses = (0, import_classnames3.default)(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${legend == null ? void 0 : legend.size}`]: legend == null ? void 0 : legend.size
    },
    legend == null ? void 0 : legend.className
  );
  const renderLegendContent = () => {
    const content = (legend == null ? void 0 : legend.html) ? /* @__PURE__ */ jsx3("span", { dangerouslySetInnerHTML: { __html: legend.html } }) : legend == null ? void 0 : legend.text;
    if (legend == null ? void 0 : legend.isPageHeading) {
      return /* @__PURE__ */ jsx3("h1", { className: "nhsuk-fieldset__heading", children: content });
    }
    return content;
  };
  return /* @__PURE__ */ jsxs2(
    "fieldset",
    {
      className: fieldsetClasses,
      "aria-describedby": describedBy,
      ...fieldsetProps,
      children: [
        legend && (legend.text || legend.html) && /* @__PURE__ */ jsx3("legend", { className: legendClasses, children: renderLegendContent() }),
        children
      ]
    }
  );
};

// src/components/Checkboxes/Checkboxes.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Checkboxes = ({
  items,
  name,
  idPrefix,
  legend,
  isPageHeading = false,
  legendSize = "l",
  hint,
  errorMessage,
  className = "",
  small = false,
  onChange,
  fieldsetAttributes,
  attributes,
  ...props
}) => {
  const [selectedValues, setSelectedValues] = useState2(
    items.filter((item) => item.checked).map((item) => item.value)
  );
  const finalIdPrefix = idPrefix || name;
  const hintId = hint ? `${finalIdPrefix}-hint` : void 0;
  const errorId = errorMessage ? `${finalIdPrefix}-error` : void 0;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || void 0;
  const handleCheckboxChange = (value, checked) => {
    let newValues;
    if (checked) {
      newValues = [...selectedValues, value];
    } else {
      newValues = selectedValues.filter((v) => v !== value);
    }
    setSelectedValues(newValues);
    onChange == null ? void 0 : onChange(newValues);
  };
  const renderItems = () => {
    return items.map((item, index) => {
      const itemId = `${finalIdPrefix}-${index + 1}`;
      const conditionalId = `${itemId}-conditional`;
      const isChecked = selectedValues.includes(item.value);
      const isDisabled = item.disabled || false;
      return /* @__PURE__ */ jsxs3("div", { className: "nhsuk-checkboxes__item", children: [
        /* @__PURE__ */ jsx4(
          "input",
          {
            className: "nhsuk-checkboxes__input",
            id: itemId,
            name,
            type: "checkbox",
            value: item.value,
            checked: isChecked,
            disabled: isDisabled,
            onChange: (e) => handleCheckboxChange(item.value, e.target.checked),
            "aria-describedby": item.hint ? `${itemId}-hint` : describedBy,
            ...item.conditional && {
              "aria-controls": conditionalId,
              "aria-expanded": isChecked ? "true" : "false"
            },
            ...item.attributes
          }
        ),
        /* @__PURE__ */ jsx4("label", { className: "nhsuk-checkboxes__label", htmlFor: itemId, children: item.text }),
        item.hint && /* @__PURE__ */ jsx4("div", { id: `${itemId}-hint`, className: "nhsuk-checkboxes__hint", children: item.hint }),
        item.conditional && /* @__PURE__ */ jsx4(
          "div",
          {
            className: (0, import_classnames4.default)("nhsuk-checkboxes__conditional", {
              "nhsuk-checkboxes__conditional--hidden": !isChecked
            }),
            id: conditionalId,
            children: typeof item.conditional === "object" && item.conditional !== null && "label" in item.conditional && "id" in item.conditional && "name" in item.conditional ? /* @__PURE__ */ jsxs3("div", { style: { marginTop: "16px" }, children: [
              item.conditional.label && /* @__PURE__ */ jsx4(Label, { htmlFor: item.conditional.id, children: item.conditional.label }),
              /* @__PURE__ */ jsx4(Input, { ...item.conditional })
            ] }) : item.conditional
          }
        )
      ] }, item.value);
    });
  };
  const checkboxesClasses = (0, import_classnames4.default)(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": small
    },
    className
  );
  const formGroupClasses = (0, import_classnames4.default)("nhsuk-form-group", {
    "nhsuk-form-group--error": !!errorMessage
  });
  return /* @__PURE__ */ jsx4("div", { className: formGroupClasses, ...attributes, ...props, children: /* @__PURE__ */ jsxs3(
    Fieldset,
    {
      legend: legend ? {
        text: legend,
        isPageHeading,
        size: legendSize
      } : void 0,
      describedBy,
      ...fieldsetAttributes,
      children: [
        hint && /* @__PURE__ */ jsx4("div", { id: hintId, className: "nhsuk-hint", children: hint }),
        errorMessage && /* @__PURE__ */ jsxs3("div", { id: errorId, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ jsx4("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          errorMessage
        ] }),
        /* @__PURE__ */ jsx4("div", { className: checkboxesClasses, children: renderItems() })
      ]
    }
  ) });
};
Checkboxes.displayName = "Checkboxes";
export {
  Checkboxes
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
