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

// src/components/SummaryList/SummaryList.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx, jsxs } from "react/jsx-runtime";
var SummaryList = ({
  items,
  noBorder = false,
  className,
  ...rest
}) => {
  const summaryListClasses = (0, import_classnames.default)(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": noBorder
    },
    className
  );
  const renderContent = (content) => {
    if (content.children) {
      return content.children;
    }
    if (content.html) {
      return /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: content.html } });
    }
    if (content.text) {
      return content.text;
    }
    return null;
  };
  const renderActions = (actions) => {
    if (!actions || !actions.items.length) {
      return null;
    }
    return /* @__PURE__ */ jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ jsx("ul", { className: "nhsuk-summary-list__actions-list", children: actions.items.map((action, actionIndex) => /* @__PURE__ */ jsx(
      "li",
      {
        className: "nhsuk-summary-list__actions-list-item",
        children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: action.href,
            className: "nhsuk-link",
            ...action.attributes,
            children: [
              renderContent(action),
              action.visuallyHiddenText && /* @__PURE__ */ jsx("span", { className: "nhsuk-u-visually-hidden", children: action.visuallyHiddenText })
            ]
          }
        )
      },
      actionIndex
    )) }) });
  };
  return /* @__PURE__ */ jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ jsx("dl", { className: summaryListClasses, ...rest, children: items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ jsx("dt", { className: "nhsuk-summary-list__key", children: renderContent(item.key) }),
    /* @__PURE__ */ jsx("dd", { className: "nhsuk-summary-list__value", children: renderContent(item.value) }),
    renderActions(item.actions)
  ] }, index)) }) });
};
export {
  SummaryList
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
