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

// src/components/Radios/Radios.tsx
import { useState as useState2, useRef, useCallback } from "react";

// src/components/Radios/Radios.render.tsx
var import_classnames2 = __toESM(require_classnames(), 1);

// src/components/Input/Input.tsx
import { useState, useEffect } from "react";

// src/mapping/input.ts
function mapInputProps(p) {
  const type = p.type || "text";
  const isRange = type === "range";
  const classes = [
    "nhsuk-input",
    p.hasError ? "nhsuk-input--error" : "",
    isRange ? "nhsuk-input--range" : "",
    !isRange && p.width && p.width !== "full" ? `nhsuk-input--width-${p.width}` : "",
    p.className || ""
  ].filter(Boolean).join(" ");
  return { classes, isRange };
}

// src/components/Input/Input.tsx
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
  const { classes: inputClasses, isRange } = mapInputProps({ id, name, type, hasError, width, className });
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

// src/mapping/label.ts
function mapLabelProps(input) {
  const size = input.size || "m";
  const classes = [
    "nhsuk-label",
    size !== "m" ? `nhsuk-label--${size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: input.isPageHeading ? "h1" : "label",
    classes,
    size,
    htmlFor: input.isPageHeading ? void 0 : input.htmlFor,
    isPageHeading: !!input.isPageHeading
  };
}

// src/components/Label/Label.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Label = ({
  htmlFor,
  className,
  isPageHeading = false,
  size = "m",
  children,
  ...props
}) => {
  const model = mapLabelProps({ size, isPageHeading, className, htmlFor });
  const LabelElement = model.tag;
  return /* @__PURE__ */ jsx2(LabelElement, { className: model.classes, htmlFor: model.htmlFor, ...props, children: isPageHeading ? /* @__PURE__ */ jsx2("label", { className: "nhsuk-label-wrapper", htmlFor, children }) : children });
};

// src/components/Fieldset/Fieldset.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Fieldset = ({
  children,
  legend,
  className,
  describedBy,
  ...fieldsetProps
}) => {
  const fieldsetClasses = (0, import_classnames.default)(
    "nhsuk-fieldset",
    className
  );
  const legendClasses = (0, import_classnames.default)(
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

// src/components/Radios/Radios.render.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function renderRadiosMarkup(props, {
  variant,
  selectedValue,
  enableBehaviourAttr,
  handleChange,
  handleBlur,
  handleFocus,
  handleKeyDown,
  itemsRef
}) {
  const { onChange: _omitOnChange, onBlur: _omitOnBlur, onFocus: _omitOnFocus, ...safeProps } = props;
  const {
    name,
    hasError = false,
    describedBy,
    className,
    size = "normal",
    inline = false,
    options,
    ...rest
  } = safeProps;
  const radiosClasses = (0, import_classnames2.default)(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": hasError,
      "nhsuk-radios--small": size === "small",
      "nhsuk-radios--inline": inline
    },
    className
  );
  return /* @__PURE__ */ jsx4(Fieldset, { children: /* @__PURE__ */ jsx4(
    "div",
    {
      className: radiosClasses,
      ...rest,
      ...enableBehaviourAttr ? { "data-nhs-behaviour": "radios" } : {},
      children: options.map((option, index) => {
        const radioId = `${name}-${index}`;
        const conditionalId = option.conditional ? `${radioId}-conditional` : void 0;
        const isSelected = selectedValue === option.value;
        return /* @__PURE__ */ jsxs3("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ jsx4(
            "input",
            {
              className: "nhsuk-radios__input",
              id: radioId,
              name,
              type: "radio",
              value: option.value,
              disabled: option.disabled,
              ...variant === "client" ? { checked: isSelected, onChange: handleChange, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleKeyDown, ref: (el) => {
                if (el && itemsRef) itemsRef.current[index] = el;
              } } : { defaultChecked: isSelected, "data-nhs-radios-input": true },
              "aria-describedby": describedBy
            }
          ),
          /* @__PURE__ */ jsx4("label", { className: "nhsuk-radios__label", htmlFor: radioId, children: option.text }),
          option.hint && /* @__PURE__ */ jsx4("div", { className: "nhsuk-radios__hint", children: option.hint }),
          option.conditional && /* @__PURE__ */ jsx4(
            "div",
            {
              className: (0, import_classnames2.default)("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !isSelected
              }),
              id: conditionalId,
              ...variant === "server" ? { "data-nhs-radios-conditional": true } : {},
              children: typeof option.conditional === "object" && option.conditional !== null && "label" in option.conditional && "id" in option.conditional && "name" in option.conditional ? /* @__PURE__ */ jsxs3("div", { style: { marginTop: "16px" }, children: [
                option.conditional.label && /* @__PURE__ */ jsx4(Label, { htmlFor: option.conditional.id, children: option.conditional.label }),
                /* @__PURE__ */ jsx4(Input, { ...option.conditional })
              ] }) : option.conditional
            }
          )
        ] }, option.value);
      })
    }
  ) });
}

// src/components/Radios/Radios.tsx
var Radios = ({ value, defaultValue, onChange, onBlur, onFocus, ...rest }) => {
  const [selectedValue, setSelectedValue] = useState2(value || defaultValue || "");
  const itemsRef = useRef([]);
  const lastValueRef = useRef(selectedValue);
  const handleChange = (event) => {
    const newValue = event.target.value;
    if (newValue === lastValueRef.current) return;
    lastValueRef.current = newValue;
    setSelectedValue(newValue);
    onChange == null ? void 0 : onChange(event);
  };
  const handleFocus = (event) => {
    onFocus == null ? void 0 : onFocus(event);
  };
  const handleKeyDown = useCallback((event) => {
    const { key } = event;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(key)) return;
    event.preventDefault();
    const enabledRadios = itemsRef.current.filter((r) => r && !r.disabled);
    const current = enabledRadios.indexOf(event.currentTarget);
    if (current === -1) return;
    let nextIndex = current;
    if (["ArrowDown", "ArrowRight"].includes(key)) nextIndex = (current + 1) % enabledRadios.length;
    else if (["ArrowUp", "ArrowLeft"].includes(key)) nextIndex = (current - 1 + enabledRadios.length) % enabledRadios.length;
    const nextRadio = enabledRadios[nextIndex];
    if (nextRadio) {
      nextRadio.focus();
      if (!nextRadio.checked) nextRadio.click();
    }
  }, []);
  return renderRadiosMarkup(
    { value, defaultValue, onChange, onBlur, onFocus, ...rest },
    {
      variant: "client",
      selectedValue,
      enableBehaviourAttr: false,
      handleChange,
      handleBlur: onBlur,
      handleFocus,
      // wrapped to suppress duplicate focus calls
      handleKeyDown,
      itemsRef
    }
  );
};

// src/components/Radios/Radios.server.tsx
var RadiosServer = ({ value, defaultValue, ...rest }) => {
  const selectedValue = value || defaultValue || "";
  return renderRadiosMarkup(
    { value, defaultValue, ...rest },
    {
      variant: "server",
      selectedValue,
      enableBehaviourAttr: true
    }
  );
};
export {
  Radios,
  RadiosServer
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
