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

// src/components/ErrorSummary/ErrorSummary.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var ErrorSummary = ({
  titleText = "There is a problem",
  titleHtml,
  descriptionText,
  descriptionHtml,
  errorList,
  className,
  children,
  ...props
}) => {
  const errorSummaryRef = useRef(null);
  useEffect(() => {
    if (errorSummaryRef.current) {
      errorSummaryRef.current.focus();
    }
  }, []);
  const errorSummaryClasses = (0, import_classnames.default)(
    "nhsuk-error-summary",
    className
  );
  const renderTitle = () => {
    if (titleHtml) {
      return /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: titleHtml } });
    }
    return titleText;
  };
  const renderDescription = () => {
    if (descriptionHtml) {
      return /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: descriptionHtml } });
    }
    return descriptionText;
  };
  const renderErrorItem = (item) => {
    const content = item.html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
    if (item.href) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: item.href,
          ...item.attributes,
          children: content
        }
      );
    }
    return content;
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: errorSummaryRef,
      className: errorSummaryClasses,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...props,
      children: [
        /* @__PURE__ */ jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: renderTitle() }),
        /* @__PURE__ */ jsxs("div", { className: "nhsuk-error-summary__body", children: [
          children && /* @__PURE__ */ jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children }),
          !children && (descriptionText || descriptionHtml) && /* @__PURE__ */ jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: renderDescription() }),
          /* @__PURE__ */ jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: errorList.map((item, index) => /* @__PURE__ */ jsx("li", { children: renderErrorItem(item) }, index)) })
        ] })
      ]
    }
  );
};
export {
  ErrorSummary
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
