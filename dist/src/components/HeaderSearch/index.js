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

// src/components/HeaderSearch/HeaderSearch.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { useState, useCallback, useRef, useEffect } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var HeaderSearch = ({
  mode = "form",
  action = "/search",
  method = "get",
  name = "q",
  value,
  placeholder = "Search",
  visuallyHiddenLabel = "Search the NHS website",
  visuallyHiddenButton = "Search",
  className,
  disabled = false,
  callbacks = {},
  isLoading = false,
  showResults = false,
  results = [],
  formAttributes = {},
  inputAttributes = {},
  buttonAttributes = {},
  preventDefaultSubmit = false,
  debounceMs = 300,
  minQueryLength = 1
}) => {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const debounceRef = useRef(void 0);
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const isControlled = mode === "controlled" && value !== void 0;
  const currentValue = isControlled ? value : internalValue;
  const debouncedOnChange = useCallback(
    (query) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        if (callbacks.onChange && query.length >= minQueryLength) {
          callbacks.onChange(query);
        }
      }, debounceMs);
    },
    [callbacks.onChange, debounceMs, minQueryLength]
  );
  const handleInputChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (!isControlled) {
        setInternalValue(newValue);
      }
      if (mode !== "form") {
        debouncedOnChange(newValue);
      }
    },
    [isControlled, mode, debouncedOnChange]
  );
  const handleFormSubmit = useCallback(
    (e) => {
      const query = currentValue.trim();
      const searchData = {
        query,
        timestamp: Date.now(),
        formData: new FormData(e.currentTarget)
      };
      if (mode === "controlled" || mode === "hybrid" && preventDefaultSubmit) {
        e.preventDefault();
        if (callbacks.onSearch && query.length >= minQueryLength) {
          callbacks.onSearch(searchData);
        }
      } else if (mode === "hybrid" && callbacks.onSearch) {
        if (query.length >= minQueryLength) {
          callbacks.onSearch(searchData);
        }
      }
    },
    [
      mode,
      currentValue,
      callbacks.onSearch,
      preventDefaultSubmit,
      minQueryLength
    ]
  );
  const handleFocus = useCallback(() => {
    var _a;
    setIsFocused(true);
    (_a = callbacks.onFocus) == null ? void 0 : _a.call(callbacks);
  }, [callbacks.onFocus]);
  const handleBlur = useCallback(() => {
    var _a;
    setIsFocused(false);
    (_a = callbacks.onBlur) == null ? void 0 : _a.call(callbacks);
  }, [callbacks.onBlur]);
  const handleClear = useCallback(() => {
    var _a, _b;
    if (!isControlled) {
      setInternalValue("");
    }
    (_a = callbacks.onClear) == null ? void 0 : _a.call(callbacks);
    (_b = inputRef.current) == null ? void 0 : _b.focus();
  }, [isControlled, callbacks.onClear]);
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);
  const renderSearchIcon = () => /* @__PURE__ */ jsx(
    "svg",
    {
      className: (0, import_classnames.default)("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": isLoading
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  );
  const renderLoadingSpinner = () => /* @__PURE__ */ jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsxs(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "2",
          fill: "none",
          strokeLinecap: "round",
          strokeDasharray: "31.416",
          strokeDashoffset: "31.416",
          children: [
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ jsx(
              "animate",
              {
                attributeName: "stroke-dashoffset",
                dur: "2s",
                values: "0;-15.708;-31.416",
                repeatCount: "indefinite"
              }
            )
          ]
        }
      )
    }
  );
  const renderClearButton = () => {
    if (!currentValue || mode === "form") return null;
    return /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-header__search-clear",
        onClick: handleClear,
        "aria-label": "Clear search",
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__close",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            focusable: "false",
            children: /* @__PURE__ */ jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" })
          }
        )
      }
    );
  };
  const renderResults = () => {
    if (!showResults || !results.length || !isFocused) return null;
    return /* @__PURE__ */ jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: results.map((result) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "nhsuk-header__search-result",
        role: "option",
        children: result.href ? /* @__PURE__ */ jsxs(
          "a",
          {
            href: result.href,
            className: "nhsuk-header__search-result-link",
            children: [
              /* @__PURE__ */ jsx("span", { className: "nhsuk-header__search-result-title", children: result.title }),
              result.description && /* @__PURE__ */ jsx("span", { className: "nhsuk-header__search-result-description", children: result.description })
            ]
          }
        ) : /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "nhsuk-header__search-result-button",
            onClick: () => {
              var _a;
              return (_a = callbacks.onSearch) == null ? void 0 : _a.call(callbacks, {
                query: result.title,
                timestamp: Date.now()
              });
            },
            children: [
              /* @__PURE__ */ jsx("span", { className: "nhsuk-header__search-result-title", children: result.title }),
              result.description && /* @__PURE__ */ jsx("span", { className: "nhsuk-header__search-result-description", children: result.description })
            ]
          }
        )
      },
      result.id
    )) });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: (0, import_classnames.default)("nhsuk-header__search", className, {
        "nhsuk-header__search--controlled": mode === "controlled",
        "nhsuk-header__search--hybrid": mode === "hybrid",
        "nhsuk-header__search--loading": isLoading,
        "nhsuk-header__search--focused": isFocused,
        "nhsuk-header__search--has-results": showResults && results.length > 0
      }),
      children: [
        /* @__PURE__ */ jsxs(
          "form",
          {
            ref: formRef,
            className: "nhsuk-header__search-form",
            id: "search",
            action: mode !== "controlled" ? action : void 0,
            method: mode !== "controlled" ? method : void 0,
            role: "search",
            onSubmit: handleFormSubmit,
            ...formAttributes,
            children: [
              /* @__PURE__ */ jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: visuallyHiddenLabel }),
              /* @__PURE__ */ jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    ref: inputRef,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: mode !== "controlled" ? name : void 0,
                    type: "search",
                    placeholder,
                    autoComplete: "off",
                    value: currentValue,
                    onChange: handleInputChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    disabled: disabled || isLoading,
                    ...showResults && results.length > 0 ? { "aria-expanded": true, "aria-haspopup": "listbox" } : {},
                    ...inputAttributes
                  }
                ),
                renderClearButton()
              ] }),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: disabled || isLoading || mode !== "form" && currentValue.length < minQueryLength,
                  ...buttonAttributes,
                  children: [
                    isLoading ? renderLoadingSpinner() : renderSearchIcon(),
                    /* @__PURE__ */ jsx("span", { className: "nhsuk-u-visually-hidden", children: isLoading ? "Searching..." : visuallyHiddenButton })
                  ]
                }
              )
            ]
          }
        ),
        renderResults()
      ]
    }
  );
};
export {
  HeaderSearch
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
