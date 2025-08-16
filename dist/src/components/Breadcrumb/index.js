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

// src/components/Breadcrumb/Breadcrumb.tsx
var import_classnames = __toESM(require_classnames(), 1);
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var BreadcrumbItemComponent = ({
  children,
  href,
  active = false,
  attributes = {}
}) => {
  return /* @__PURE__ */ jsx("li", { className: "nhsuk-breadcrumb__item", children: active ? /* @__PURE__ */ jsx(
    "span",
    {
      className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
      "aria-current": "page",
      ...attributes,
      children
    }
  ) : /* @__PURE__ */ jsx(
    "a",
    {
      className: "nhsuk-breadcrumb__link",
      href,
      ...attributes,
      children
    }
  ) });
};
var BreadcrumbBase = ({
  items = [],
  children,
  classes,
  labelText = "Breadcrumb",
  href,
  text,
  reverse = false,
  attributes = {}
}) => {
  var _a;
  const getItemsFromChildren = () => {
    if (!children) return [];
    const childrenArray = React.Children.toArray(children);
    return childrenArray.filter(
      (child) => {
        var _a2;
        return React.isValidElement(child) && (child.type === BreadcrumbItemComponent || ((_a2 = child.type) == null ? void 0 : _a2.displayName) === "BreadcrumbItem");
      }
    ).map((child) => ({
      text: typeof child.props.children === "string" ? child.props.children : String(child.props.children),
      href: child.props.href,
      active: child.props.active,
      attributes: child.props.attributes
    }));
  };
  const getBreadcrumbItems = () => {
    if (children) {
      return getItemsFromChildren();
    }
    if (href && text) {
      return [{ href, text }];
    }
    return items;
  };
  const getLastItem = () => {
    const breadcrumbItems2 = getBreadcrumbItems();
    if (breadcrumbItems2 && breadcrumbItems2.length > 0) {
      const lastLinkItem = breadcrumbItems2.slice().reverse().find((item) => item.href && !item.active);
      if (lastLinkItem) {
        return { href: lastLinkItem.href, text: lastLinkItem.text };
      }
    }
    return { text: "Home" };
  };
  const breadcrumbItems = getBreadcrumbItems();
  const lastItem = getLastItem();
  const breadcrumbClasses = (0, import_classnames.default)(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": reverse
    },
    classes
  );
  const hasMultipleItems = breadcrumbItems && breadcrumbItems.length > 1;
  const ariaLabel = hasMultipleItems ? labelText : void 0;
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: breadcrumbClasses,
      "aria-label": ariaLabel,
      role: "navigation",
      ...attributes,
      children: [
        /* @__PURE__ */ jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: children ? (
          // Render children directly if using compound component pattern
          React.Children.map(children, (child, index) => {
            var _a2;
            if (React.isValidElement(child) && (child.type === BreadcrumbItemComponent || ((_a2 = child.type) == null ? void 0 : _a2.displayName) === "BreadcrumbItem")) {
              return React.cloneElement(child, { key: index });
            }
            return null;
          })
        ) : (
          // Render from items array
          breadcrumbItems == null ? void 0 : breadcrumbItems.map((item, index) => /* @__PURE__ */ jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: item.active ? /* @__PURE__ */ jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...item.attributes || {},
              children: item.text
            }
          ) : /* @__PURE__ */ jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: item.href,
              role: "link",
              ...item.attributes || {},
              children: item.text
            }
          ) }, index))
        ) }),
        lastItem.href && /* @__PURE__ */ jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: lastItem.href,
            role: "link",
            "aria-label": `Back to ${lastItem.text}`,
            ...items.length > 0 ? ((_a = items[items.length - 1]) == null ? void 0 : _a.attributes) || {} : {},
            children: [
              /* @__PURE__ */ jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to \xA0" }),
              lastItem.text
            ]
          }
        ) })
      ]
    }
  );
};
var Breadcrumb = BreadcrumbBase;
Breadcrumb.Item = BreadcrumbItemComponent;
BreadcrumbItemComponent.displayName = "BreadcrumbItem";
export {
  Breadcrumb
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
