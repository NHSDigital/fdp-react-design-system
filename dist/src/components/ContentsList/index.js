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

// src/components/ContentsList/ContentsList.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx, jsxs } from "react/jsx-runtime";
var ContentsList = ({
  items,
  classes,
  ariaLabel = "Pages in this guide",
  attributes = {}
}) => {
  const contentsListClasses = (0, import_classnames.default)("nhsuk-contents-list", classes);
  const renderItem = (item, index) => {
    if (item.current) {
      return /* @__PURE__ */ jsx(
        "li",
        {
          className: "nhsuk-contents-list__item",
          "aria-current": "page",
          ...item.attributes || {},
          children: /* @__PURE__ */ jsx("span", { className: "nhsuk-contents-list__current", children: item.text })
        },
        index
      );
    }
    return /* @__PURE__ */ jsx(
      "li",
      {
        className: "nhsuk-contents-list__item",
        children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "nhsuk-contents-list__link",
            href: item.href,
            ...item.attributes || {},
            children: item.text
          }
        )
      },
      index
    );
  };
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: contentsListClasses,
      role: "navigation",
      "aria-label": ariaLabel,
      ...attributes,
      children: [
        /* @__PURE__ */ jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ jsx("ol", { className: "nhsuk-contents-list__list", children: items.map((item, index) => renderItem(item, index)) })
      ]
    }
  );
};
export {
  ContentsList
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
