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
      function classNames7() {
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
          return classNames7.apply(null, arg);
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
        classNames7.default = classNames7;
        module.exports = classNames7;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames7;
        });
      } else {
        window.classNames = classNames7;
      }
    })();
  }
});

// src/components/DateInput/DateInput.tsx
var import_classnames6 = __toESM(require_classnames(), 1);
import { useState as useState2, useMemo, useCallback } from "react";

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

// src/components/Hint/Hint.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { jsx as jsx2 } from "react/jsx-runtime";
var Hint = ({
  id,
  className,
  children,
  ...props
}) => {
  const hintClasses = (0, import_classnames2.default)("nhsuk-hint", className);
  return /* @__PURE__ */ jsx2("div", { className: hintClasses, id, ...props, children });
};

// src/components/ErrorMessage/ErrorMessage.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import { jsxs as jsxs2 } from "react/jsx-runtime";
var ErrorMessage = ({
  id,
  className,
  visuallyHiddenText = "Error:",
  children,
  ...props
}) => {
  const errorClasses = (0, import_classnames3.default)("nhsuk-error-message", className);
  return /* @__PURE__ */ jsxs2("span", { className: errorClasses, id, ...props, children: [
    /* @__PURE__ */ jsxs2("span", { className: "nhsuk-u-visually-hidden", children: [
      visuallyHiddenText,
      " "
    ] }),
    children
  ] });
};

// src/components/Label/Label.tsx
var import_classnames4 = __toESM(require_classnames(), 1);
import { jsx as jsx3 } from "react/jsx-runtime";
var Label = ({
  htmlFor,
  className,
  isPageHeading = false,
  size = "m",
  children,
  ...props
}) => {
  const labelClasses = (0, import_classnames4.default)(
    "nhsuk-label",
    {
      [`nhsuk-label--${size}`]: size !== "m"
    },
    className
  );
  const LabelElement = isPageHeading ? "h1" : "label";
  return /* @__PURE__ */ jsx3(
    LabelElement,
    {
      className: labelClasses,
      htmlFor: isPageHeading ? void 0 : htmlFor,
      ...props,
      children: isPageHeading ? /* @__PURE__ */ jsx3("label", { className: "nhsuk-label-wrapper", htmlFor, children }) : children
    }
  );
};

// src/components/Fieldset/Fieldset.tsx
var import_classnames5 = __toESM(require_classnames(), 1);
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Fieldset = ({
  children,
  legend,
  className,
  describedBy,
  ...fieldsetProps
}) => {
  const fieldsetClasses = (0, import_classnames5.default)(
    "nhsuk-fieldset",
    className
  );
  const legendClasses = (0, import_classnames5.default)(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${legend == null ? void 0 : legend.size}`]: legend == null ? void 0 : legend.size
    },
    legend == null ? void 0 : legend.className
  );
  const renderLegendContent = () => {
    const content = (legend == null ? void 0 : legend.html) ? /* @__PURE__ */ jsx4("span", { dangerouslySetInnerHTML: { __html: legend.html } }) : legend == null ? void 0 : legend.text;
    if (legend == null ? void 0 : legend.isPageHeading) {
      return /* @__PURE__ */ jsx4("h1", { className: "nhsuk-fieldset__heading", children: content });
    }
    return content;
  };
  return /* @__PURE__ */ jsxs3(
    "fieldset",
    {
      className: fieldsetClasses,
      "aria-describedby": describedBy,
      ...fieldsetProps,
      children: [
        legend && (legend.text || legend.html) && /* @__PURE__ */ jsx4("legend", { className: legendClasses, children: renderLegendContent() }),
        children
      ]
    }
  );
};

// src/components/DateInput/DateInput.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var DateInput = ({
  id,
  className,
  items,
  namePrefix,
  values = {},
  fieldset,
  hint,
  errorMessage,
  onChange,
  ...props
}) => {
  const [currentValues, setCurrentValues] = useState2(() => ({
    day: values.day || "",
    month: values.month || "",
    year: values.year || ""
  }));
  const [fieldErrors, setFieldErrors] = useState2({});
  const isLeapYear = (year) => {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
  };
  const getDaysInMonth = (month, year) => {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 2 && isLeapYear(year)) {
      return 29;
    }
    return daysInMonth[month - 1];
  };
  const validateDay = (day, month, year) => {
    if (!day) return void 0;
    if (!/^\d+$/.test(day)) return "Day must be a number";
    const dayNum = parseInt(day, 10);
    if (dayNum < 1 || dayNum > 31) return "Day must be between 1 and 31";
    if (month && year) {
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);
      if (!isNaN(monthNum) && !isNaN(yearNum) && monthNum >= 1 && monthNum <= 12) {
        const maxDays = getDaysInMonth(monthNum, yearNum);
        if (dayNum > maxDays) {
          const monthNames = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          return `${monthNames[monthNum - 1]} ${yearNum} only has ${maxDays} days`;
        }
      }
    }
    return void 0;
  };
  const validateMonth = (month) => {
    if (!month) return void 0;
    if (!/^\d+$/.test(month)) return "Month must be a number";
    const monthNum = parseInt(month, 10);
    if (monthNum < 1 || monthNum > 12) return "Month must be between 1 and 12";
    return void 0;
  };
  const validateYear = (year) => {
    if (!year) return void 0;
    if (!/^\d+$/.test(year)) return "Year must be a number";
    const yearNum = parseInt(year, 10);
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    if (yearNum < 1900 || yearNum > currentYear + 10) {
      return `Year must be between 1900 and ${currentYear + 10}`;
    }
    return void 0;
  };
  const validateDate = (day, month, year) => {
    if (!day || !month || !year) return void 0;
    const dayNum = parseInt(day, 10);
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);
    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) return void 0;
    if (monthNum < 1 || monthNum > 12) return void 0;
    if (yearNum < 1900) return void 0;
    const maxDays = getDaysInMonth(monthNum, yearNum);
    if (dayNum < 1 || dayNum > maxDays) {
      return void 0;
    }
    return void 0;
  };
  const handleInputChange = useCallback((fieldName, value) => {
    const newValues = {
      ...currentValues,
      [fieldName]: value
    };
    setCurrentValues(newValues);
    if (onChange) {
      onChange(newValues);
    }
  }, [currentValues, onChange]);
  const handleInputBlur = useCallback((fieldName) => {
    const value = currentValues[fieldName];
    let fieldError;
    if (fieldName === "day") {
      fieldError = validateDay(value, currentValues.month, currentValues.year);
    } else if (fieldName === "month") {
      fieldError = validateMonth(value);
      if (!fieldError && currentValues.day) {
        const dayError = validateDay(currentValues.day, value, currentValues.year);
        setFieldErrors((prev) => ({
          ...prev,
          day: dayError
        }));
      }
    } else if (fieldName === "year") {
      fieldError = validateYear(value);
      if (!fieldError && currentValues.day && currentValues.month) {
        const dayError = validateDay(currentValues.day, currentValues.month, value);
        setFieldErrors((prev) => ({
          ...prev,
          day: dayError
        }));
      }
    }
    setFieldErrors((prev) => ({
      ...prev,
      [fieldName]: fieldError
    }));
    if (currentValues.day && currentValues.month && currentValues.year) {
      const dateError = validateDate(
        fieldName === "day" ? value : currentValues.day,
        fieldName === "month" ? value : currentValues.month,
        fieldName === "year" ? value : currentValues.year
      );
      if (dateError) {
        setFieldErrors((prev) => ({
          ...prev,
          day: dateError
        }));
      }
    }
  }, [currentValues, validateDay, validateMonth, validateYear, validateDate]);
  const defaultItems = useMemo(() => [
    {
      name: "day",
      classes: "nhsuk-input--width-2",
      inputmode: "numeric",
      pattern: "[0-9]*"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2",
      inputmode: "numeric",
      pattern: "[0-9]*"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4",
      inputmode: "numeric",
      pattern: "[0-9]*"
    }
  ], []);
  const dateInputItems = items || defaultItems;
  let describedBy = (fieldset == null ? void 0 : fieldset.describedBy) || "";
  const hintId = hint ? `${id}-hint` : "";
  const errorId = errorMessage ? `${id}-error` : "";
  if (hintId) {
    describedBy = describedBy ? `${describedBy} ${hintId}` : hintId;
  }
  if (errorId) {
    describedBy = describedBy ? `${describedBy} ${errorId}` : errorId;
  }
  const hasFieldErrors = Object.values(fieldErrors).some((error) => error);
  const formGroupClasses = (0, import_classnames6.default)(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": errorMessage || hasFieldErrors
    }
  );
  const dateInputClasses = (0, import_classnames6.default)(
    "nhsuk-date-input",
    className
  );
  const renderInputs = () => /* @__PURE__ */ jsxs4(Fragment, { children: [
    hint && /* @__PURE__ */ jsx5(
      Hint,
      {
        id: hintId,
        className: hint.classes,
        children: hint.html ? /* @__PURE__ */ jsx5("span", { dangerouslySetInnerHTML: { __html: hint.html } }) : hint.text
      }
    ),
    errorMessage && /* @__PURE__ */ jsx5(
      ErrorMessage,
      {
        id: errorId,
        className: errorMessage.classes,
        children: errorMessage.html ? /* @__PURE__ */ jsx5("span", { dangerouslySetInnerHTML: { __html: errorMessage.html } }) : errorMessage.text
      }
    ),
    Object.entries(fieldErrors).map(
      ([field, error]) => error ? /* @__PURE__ */ jsxs4(
        ErrorMessage,
        {
          id: `${id}-${field}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ jsx5("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            error
          ]
        },
        `${field}-error`
      ) : null
    ),
    /* @__PURE__ */ jsx5("div", { className: dateInputClasses, id, "data-testid": "date-input", ...props, children: dateInputItems.map((item) => {
      const inputId = item.id || `${id}-${item.name}`;
      const inputName = namePrefix ? `${namePrefix}[${item.name}]` : item.name;
      const labelText = item.label || item.name.charAt(0).toUpperCase() + item.name.slice(1);
      const fieldError = fieldErrors[item.name];
      const currentValue = currentValues[item.name] || "";
      let inputDescribedBy = describedBy;
      if (fieldError) {
        const fieldErrorId = `${id}-${item.name}-error`;
        inputDescribedBy = inputDescribedBy ? `${inputDescribedBy} ${fieldErrorId}` : fieldErrorId;
      }
      return /* @__PURE__ */ jsxs4("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ jsx5(
          Label,
          {
            htmlFor: inputId,
            className: "nhsuk-date-input__label",
            children: labelText
          }
        ),
        /* @__PURE__ */ jsx5(
          Input,
          {
            id: inputId,
            name: inputName,
            value: currentValue,
            className: (0, import_classnames6.default)("nhsuk-date-input__input", item.classes, {
              "nhsuk-input--error": fieldError
            }),
            inputMode: item.inputmode,
            autoComplete: item.autocomplete,
            pattern: item.pattern,
            "aria-describedby": inputDescribedBy || void 0,
            hasError: !!fieldError,
            onChange: (e) => handleInputChange(item.name, e.target.value),
            onBlur: () => handleInputBlur(item.name)
          }
        )
      ] }, item.name);
    }) })
  ] });
  return /* @__PURE__ */ jsx5("div", { className: formGroupClasses, children: fieldset ? /* @__PURE__ */ jsx5(
    Fieldset,
    {
      className: fieldset.classes,
      legend: fieldset.legend ? { text: fieldset.legend } : void 0,
      describedBy: describedBy || void 0,
      children: renderInputs()
    }
  ) : renderInputs() });
};
export {
  DateInput
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
