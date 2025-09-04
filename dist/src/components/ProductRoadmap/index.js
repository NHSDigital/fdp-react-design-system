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

// src/components/ProductRoadmap/ProductRoadmap.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { memo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var clamp = (val, min, max, def) => {
  if (val == null || Number.isNaN(val)) return def;
  return Math.min(max, Math.max(min, val));
};
var RoadmapItem = ({ item, maxLines }) => {
  const {
    content,
    dateOffset = 0,
    length = 1,
    partialLength = 1,
    verticalPosition = 1,
    ariaLabel
  } = item;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "nhsuk-product-roadmap__item",
      style: {
        ["--item-vertical-position"]: verticalPosition,
        ["--item-length"]: length,
        ["--item-partial-length"]: partialLength,
        ["--date-offset"]: dateOffset
      },
      role: "listitem",
      "aria-label": ariaLabel,
      children: [
        /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__item-content", style: { ["--item-height"]: maxLines }, children: content })
      ]
    }
  );
};
var ProductRoadmap = memo(
  ({
    dateHeadings,
    categories,
    columnWidthPx = 400,
    itemMaxLines = 2,
    className,
    ariaLabel = "Product roadmap",
    ...rest
  }) => {
    const rootCls = (0, import_classnames.default)("nhsuk-product-roadmap", className);
    const colWidth = clamp(columnWidthPx, 120, 1200, 400);
    const maxLines = clamp(itemMaxLines, 1, 6, 2);
    return /* @__PURE__ */ jsx("div", { className: rootCls, style: { ["--column-width"]: `${colWidth}px` }, ...rest, children: /* @__PURE__ */ jsxs("table", { className: "nhsuk-product-roadmap__table", "aria-label": ariaLabel, role: "grid", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "nhsuk-product-roadmap__row nhsuk-product-roadmap__row--dates", children: [
        /* @__PURE__ */ jsx("th", { scope: "col", children: /* @__PURE__ */ jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
        dateHeadings.map((heading, i) => /* @__PURE__ */ jsx("th", { scope: "col", children: heading }, i))
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: categories.map((cat, ci) => /* @__PURE__ */ jsxs("tr", { className: "nhsuk-product-roadmap__row", role: "row", children: [
        /* @__PURE__ */ jsx("th", { scope: "row", className: "nhsuk-product-roadmap__category-cell", children: cat.heading }),
        dateHeadings.map((_, colIndex) => {
          const columnNumber = colIndex + 1;
          const items = cat.roadmapItems.filter((it) => it.date === columnNumber);
          return /* @__PURE__ */ jsx("td", { className: "nhsuk-product-roadmap__date-cell", children: /* @__PURE__ */ jsx("div", { className: "nhsuk-product-roadmap__cell-container", role: "list", children: items.map((it, idx) => /* @__PURE__ */ jsx(RoadmapItem, { item: it, columnWidth: colWidth, maxLines }, idx)) }) }, colIndex);
        })
      ] }, ci)) })
    ] }) });
  }
);
ProductRoadmap.displayName = "ProductRoadmap";
export {
  ProductRoadmap
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
