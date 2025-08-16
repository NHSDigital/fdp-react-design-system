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
      function classNames2() {
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
          return classNames2.apply(null, arg);
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
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

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
  const uncontrolledRangeProps = !isControlled && defaultValue !== void 0 ? { defaultValue } : {};
  const controlledRangeProps = isControlled ? { value } : {};
  const renderRangeInput = () => /* @__PURE__ */ jsx(
    "input",
    {
      className: inputClasses,
      ...controlledRangeProps,
      ...uncontrolledRangeProps,
      "data-current-value": currentValue,
      ...sharedRangeProps
    }
  );
  const rangeWrapper = isRange ? /* @__PURE__ */ jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    showValueLabels && /* @__PURE__ */ jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: (valueLabels == null ? void 0 : valueLabels.min) || min || "0" }),
      renderRangeInput(),
      /* @__PURE__ */ jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: (valueLabels == null ? void 0 : valueLabels.max) || max || "100" })
    ] }),
    !showValueLabels && renderRangeInput(),
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
export {
  Input
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
