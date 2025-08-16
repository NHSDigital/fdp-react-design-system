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

// src/components/Heading/Heading.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { createElement } from "react";
import { jsx } from "react/jsx-runtime";
var Heading = ({
  level,
  className,
  text,
  html,
  children,
  size,
  marginBottom,
  ...props
}) => {
  const getDefaultLevelFromSize = (size2) => {
    switch (size2) {
      case "xxl":
      case "xl":
        return 1;
      case "l":
        return 2;
      case "m":
        return 3;
      case "s":
        return 4;
      case "xs":
        return 5;
      default:
        return 2;
    }
  };
  const headingLevel = level != null ? level : getDefaultLevelFromSize(size);
  const headingClasses = (0, import_classnames.default)(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${size}`]: size
    },
    className
  );
  const content = children || (html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  const tagName = `h${headingLevel}`;
  const style = marginBottom ? { ...props.style, marginBottom } : props.style;
  return createElement(
    tagName,
    { className: headingClasses, ...props, style },
    content
  );
};

// src/components/SummaryCard/SummaryCard.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var SummaryCard = ({
  title,
  value,
  subtitle,
  variant = "default",
  href,
  className = "",
  ariaLabel,
  ...props
}) => {
  const baseClasses = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${variant}`,
    className
  ].filter(Boolean).join(" ");
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2(Heading, { level: 3, className: "nhs-fdp-summary-card__title", children: title }),
    /* @__PURE__ */ jsx2("p", { className: "nhs-fdp-summary-card__value", children: value }),
    subtitle && /* @__PURE__ */ jsx2("p", { className: "nhs-fdp-summary-card__subtitle", children: subtitle })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx2(
      "a",
      {
        className: `${baseClasses} nhs-fdp-summary-card--clickable`,
        href,
        "aria-label": ariaLabel || `${title}: ${value}`,
        ...props,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: baseClasses,
      "aria-label": ariaLabel,
      ...props,
      children: content
    }
  );
};

// src/components/DashboardSummaryGrid/DashboardSummaryGrid.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var DashboardSummaryGrid = ({
  cards,
  className = "",
  ...props
}) => {
  const baseClasses = [
    "nhs-fdp-dashboard-summary-grid",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx3("div", { className: baseClasses, ...props, children: /* @__PURE__ */ jsx3("div", { className: "nhs-fdp-grid", children: /* @__PURE__ */ jsx3("div", { className: "nhs-fdp-grid__row", children: cards.map((cardProps, index) => /* @__PURE__ */ jsx3(
    "div",
    {
      className: "nhs-fdp-grid__column nhs-fdp-grid__column--one-half nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": index,
      children: /* @__PURE__ */ jsx3(SummaryCard, { ...cardProps })
    },
    index
  )) }) }) });
};
export {
  DashboardSummaryGrid
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
