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

// src/components/Footer/Footer.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Footer = ({
  className,
  links = [],
  linksColumn2,
  linksColumn3,
  metaLinks,
  copyright = "\xA9 NHS England",
  containerClasses,
  attributes = {},
  style,
  footerStyle,
  containerStyle
}) => {
  const renderLinkItem = (item, isDefaultLayout = false) => /* @__PURE__ */ jsx(
    "li",
    {
      className: (0, import_classnames.default)("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": isDefaultLayout
      }),
      children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: item.URL,
          target: item.newWindow ? "_blank" : void 0,
          rel: item.newWindow ? "noopener noreferrer" : void 0,
          children: item.label
        }
      )
    },
    `${item.URL}-${item.label}`
  );
  const isMultiColumnLayout = !!(linksColumn2 || linksColumn3);
  return /* @__PURE__ */ jsx("footer", { role: "contentinfo", ...attributes, style: { ...attributes == null ? void 0 : attributes.style, ...style }, children: /* @__PURE__ */ jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: (0, import_classnames.default)("nhsuk-width-container", containerClasses),
        style: containerStyle,
        children: [
          /* @__PURE__ */ jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ jsx("div", { className: (0, import_classnames.default)("nhsuk-footer", className), style: footerStyle, children: !isMultiColumnLayout ? (
            // Single column layout (default)
            /* @__PURE__ */ jsxs("ul", { className: "nhsuk-footer__list", children: [
              links.map((item) => renderLinkItem(item, true)),
              (linksColumn2 || []).map((item) => renderLinkItem(item, true)),
              (linksColumn3 || []).map((item) => renderLinkItem(item, true)),
              (metaLinks || []).map((item) => renderLinkItem(item, true))
            ] })
          ) : (
            // Multi-column layout
            /* @__PURE__ */ jsxs(Fragment, { children: [
              links.length > 0 && /* @__PURE__ */ jsx("ul", { className: "nhsuk-footer__list", children: links.map((item) => renderLinkItem(item)) }),
              linksColumn2 && linksColumn2.length > 0 && /* @__PURE__ */ jsx("ul", { className: "nhsuk-footer__list", children: linksColumn2.map((item) => renderLinkItem(item)) }),
              linksColumn3 && linksColumn3.length > 0 && /* @__PURE__ */ jsx("ul", { className: "nhsuk-footer__list", children: linksColumn3.map((item) => renderLinkItem(item)) }),
              metaLinks && metaLinks.length > 0 && /* @__PURE__ */ jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: metaLinks.map((item) => renderLinkItem(item)) })
            ] })
          ) }),
          !isMultiColumnLayout && /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "nhsuk-footer__copyright", children: copyright }) })
        ]
      }
    ),
    isMultiColumnLayout && /* @__PURE__ */ jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "nhsuk-footer__copyright", children: copyright }) }) })
  ] }) });
};
export {
  Footer
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
