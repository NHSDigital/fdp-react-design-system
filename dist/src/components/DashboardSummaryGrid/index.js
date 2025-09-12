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
import { createElement } from "react";

// src/mapping/heading.ts
function deriveLevel(size) {
  switch (size) {
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
}
function mapHeadingProps(input) {
  var _a;
  const level = (_a = input.level) != null ? _a : deriveLevel(input.size);
  const classes = [
    "nhsuk-heading",
    input.size ? `nhsuk-heading--${input.size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const style = input.marginBottom ? { marginBottom: input.marginBottom } : void 0;
  return { tag: `h${level}`, classes, style };
}

// src/components/Heading/Heading.tsx
import { jsx } from "react/jsx-runtime";
var Heading = ({ level, className, text, html, children, size, marginBottom, ...rest }) => {
  const model = mapHeadingProps({ level, size, className, marginBottom });
  const content = children || (html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  return createElement(model.tag, { className: model.classes, style: model.style, ...rest }, content);
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

// src/components/Grid/Grid.tsx
var import_classnames = __toESM(require_classnames(), 1);
import React2 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Container = ({
  children,
  className,
  fluid = false,
  maxWidth,
  style,
  ...props
}) => {
  const containerClasses = (0, import_classnames.default)(
    {
      "nhsuk-width-container": !fluid,
      "nhsuk-width-container-fluid": fluid
    },
    className
  );
  const mergedStyle = maxWidth ? { maxWidth, ...style || {} } : style;
  return /* @__PURE__ */ jsx3("div", { className: containerClasses, style: mergedStyle, ...props, children });
};
var Row = ({
  children,
  className,
  style,
  ...props
}) => {
  const rowClasses = (0, import_classnames.default)("nhsuk-grid-row", className);
  return /* @__PURE__ */ jsx3("div", { className: rowClasses, style, ...props, children });
};
var Column = ({
  children,
  width = "full" /* Full */,
  mobileWidth,
  tabletWidth,
  desktopWidth,
  start,
  className,
  forceWidth = false,
  style,
  align,
  ...props
}) => {
  const columnClasses = (0, import_classnames.default)(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${width}`]: !forceWidth,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${width}`]: forceWidth,
      // Responsive width overrides
      [`nhsuk-u-${mobileWidth}-mobile`]: !!mobileWidth,
      [`nhsuk-u-${tabletWidth}-tablet`]: !!tabletWidth,
      [`nhsuk-u-${desktopWidth}-desktop`]: !!desktopWidth,
      // Grid positioning
      [`nhsuk-grid-column-start-${start}`]: start && start >= 1 && start <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...align ? { [`nhsuk-grid-align-${align}`]: true } : {}
    },
    className
  );
  return /* @__PURE__ */ jsx3("div", { className: columnClasses, style, ...props, children });
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
  return /* @__PURE__ */ jsx3(Container, { className, style, ...props, children: hasRowAsFirstChild ? children : /* @__PURE__ */ jsx3(Row, { children }) });
};

// src/components/DashboardSummaryGrid/DashboardSummaryGrid.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var DashboardSummaryGrid = ({
  cards,
  className = "",
  ...props
}) => {
  const baseClasses = ["nhs-fdp-dashboard-summary-grid", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx4("div", { className: baseClasses, ...props, children: /* @__PURE__ */ jsx4(Grid, { children: /* @__PURE__ */ jsx4(Row, { children: cards.map((cardProps, index) => /* @__PURE__ */ jsx4(
    Column,
    {
      width: "one-quarter" /* OneQuarter */,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": index,
      children: /* @__PURE__ */ jsx4(SummaryCard, { ...cardProps })
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
