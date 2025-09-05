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

// src/components/CharacterCount/CharacterCount.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { useState, useEffect, useCallback } from "react";

// src/components/Textarea/Textarea.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx } from "react/jsx-runtime";
var Textarea = ({
  id,
  name,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  rows = 5,
  cols,
  maxLength,
  minLength,
  wrap = "soft",
  resize = "vertical",
  autoComplete,
  spellCheck,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const textareaClasses = (0, import_classnames.default)(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": hasError,
      [`nhsuk-textarea--resize-${resize}`]: resize !== "vertical"
    },
    className
  );
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: textareaClasses,
      id,
      name,
      value,
      defaultValue,
      placeholder,
      disabled,
      readOnly,
      required,
      "aria-describedby": describedBy,
      rows,
      cols,
      maxLength,
      minLength,
      wrap,
      autoComplete,
      spellCheck,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      ...props
    }
  );
};

// src/mapping/hint.ts
function mapHintProps(input) {
  const classes = [
    "nhsuk-hint",
    input.className || ""
  ].filter(Boolean).join(" ");
  return { classes, id: input.id };
}

// src/components/Hint/Hint.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Hint = ({ id, className, children, ...rest }) => {
  const model = mapHintProps({ id, className });
  return /* @__PURE__ */ jsx2("div", { className: model.classes, id: model.id, ...rest, children });
};

// src/components/CharacterCount/CharacterCount.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var CharacterCount = ({
  id,
  maxLength,
  maxWords,
  threshold = 75,
  name,
  value,
  defaultValue,
  rows,
  className,
  countMessage,
  onCountChange,
  onChange,
  ...textareaProps
}) => {
  var _a;
  const initial = (_a = value != null ? value : defaultValue) != null ? _a : "";
  const [currentValue, setCurrentValue] = useState(initial);
  const [remaining, setRemaining] = useState(0);
  const [isOverLimit, setIsOverLimit] = useState(false);
  const [showCount, setShowCount] = useState(false);
  const calculateCount = useCallback((text) => {
    if (maxWords) {
      return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    } else {
      return text.length;
    }
  }, [maxWords]);
  useEffect(() => {
    const newCount = calculateCount(currentValue);
    const limit = maxLength || maxWords || 0;
    const newRemaining = limit - newCount;
    const thresholdCount = Math.floor(limit * (threshold / 100));
    setRemaining(newRemaining);
    setIsOverLimit(newCount > limit);
    setShowCount(newCount >= thresholdCount || newCount > limit);
    if (onCountChange) {
      onCountChange(newCount, newRemaining);
    }
  }, [currentValue, maxLength, maxWords, threshold, calculateCount, onCountChange]);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setCurrentValue(newValue);
    if (onChange) onChange(event);
  };
  const generateCountMessage = () => {
    const limit = maxLength || maxWords || 0;
    const unit = maxWords ? "word" : "character";
    const unitPlural = maxWords ? "words" : "characters";
    if (!showCount) {
      return `You can enter up to ${limit} ${limit === 1 ? unit : unitPlural}`;
    }
    if (isOverLimit) {
      const overage = Math.abs(remaining);
      return `You have ${overage} ${overage === 1 ? unit : unitPlural} too many`;
    } else {
      return `You have ${remaining} ${remaining === 1 ? unit : unitPlural} remaining`;
    }
  };
  const characterCountClasses = (0, import_classnames2.default)(
    "nhsuk-character-count",
    className
  );
  const messageClasses = (0, import_classnames2.default)(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !showCount,
      "nhsuk-error-message": isOverLimit
    },
    countMessage == null ? void 0 : countMessage.classes
  );
  const textareaClasses = (0, import_classnames2.default)(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": isOverLimit
    }
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: characterCountClasses,
      "data-module": "nhsuk-character-count",
      "data-maxlength": maxLength,
      "data-maxwords": maxWords,
      "data-threshold": threshold,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ jsx3(
          Textarea,
          {
            id,
            name,
            value: value !== void 0 ? currentValue : void 0,
            defaultValue: value === void 0 ? defaultValue != null ? defaultValue : currentValue : void 0,
            rows,
            className: textareaClasses,
            onChange: handleChange,
            "aria-describedby": `${id}-info`,
            "aria-invalid": isOverLimit || void 0,
            ...textareaProps
          }
        ),
        /* @__PURE__ */ jsx3(
          Hint,
          {
            id: `${id}-info`,
            className: messageClasses,
            role: "status",
            "aria-live": "polite",
            children: generateCountMessage()
          }
        )
      ]
    }
  );
};
export {
  CharacterCount
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
