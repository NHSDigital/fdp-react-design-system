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

// src/components/Select/Select.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
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
    return options.map((option, index) => /* @__PURE__ */ jsx(
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
  return /* @__PURE__ */ jsx(
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
export {
  Select,
  SelectOption
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
