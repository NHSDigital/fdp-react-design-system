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

// src/components/Account/Account.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Account = ({
  ariaLabel = "Account",
  items = [],
  className,
  variant = "default"
}) => {
  if (!items || items.length === 0) {
    return null;
  }
  const renderAccountItem = (item) => {
    const iconContent = item.icon ? /* @__PURE__ */ jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": item.icon === true ? "User" : void 0,
        children: /* @__PURE__ */ jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null;
    const textContent = item.html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      iconContent,
      textContent
    ] });
    if (item.href) {
      return /* @__PURE__ */ jsx(
        "a",
        {
          className: "nhsuk-account__link nhsuk-header__account-link",
          href: item.href,
          children: content
        }
      );
    }
    if (item.action) {
      return /* @__PURE__ */ jsx(
        "form",
        {
          className: "nhsuk-account__form",
          action: item.action,
          method: item.method || "post",
          children: /* @__PURE__ */ jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: content })
        }
      );
    }
    return /* @__PURE__ */ jsx("span", { children: content });
  };
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: (0, import_classnames.default)(
        "nhsuk-account",
        {
          "nhsuk-account--white": variant === "white"
        },
        className
      ),
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ jsx("ul", { className: "nhsuk-account__list", children: items.map(
        (item, index) => item && /* @__PURE__ */ jsx(
          "li",
          {
            className: (0, import_classnames.default)(
              "nhsuk-account__item nhsuk-header__account-item",
              item.className
            ),
            children: renderAccountItem(item)
          },
          index
        )
      ) })
    }
  );
};
var Account_default = Account;
export {
  Account,
  Account_default as default
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
