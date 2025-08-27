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

// src/components/DoDontList/DoDontList.tsx
import { forwardRef } from "react";

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

// src/components/DoDontList/DoDontList.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var DoDontList = forwardRef(
  ({
    title,
    type,
    items,
    hidePrefix = false,
    headingLevel = 3,
    className,
    ...props
  }, ref) => {
    const classes = ["nhsuk-do-dont-list"];
    if (className) {
      classes.push(className);
    }
    const listClasses = [
      "nhsuk-list",
      type === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ];
    const renderIcon = () => {
      if (type === "cross") {
        return /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__cross",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "34",
            height: "34",
            children: [
              /* @__PURE__ */ jsx2(
                "path",
                {
                  d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
                  fill: "#d5281b"
                }
              ),
              /* @__PURE__ */ jsx2(
                "path",
                {
                  d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
                  fill: "#d5281b"
                }
              )
            ]
          }
        );
      } else {
        return /* @__PURE__ */ jsx2(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__tick",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            width: "34",
            height: "34",
            children: /* @__PURE__ */ jsx2(
              "path",
              {
                strokeWidth: "4",
                strokeLinecap: "round",
                d: "M18.4 7.8l-8.5 8.4L5.6 12",
                stroke: "#007f3b"
              }
            )
          }
        );
      }
    };
    const formatItemText = (itemText) => {
      if (type === "cross" && !hidePrefix) {
        return `do not ${itemText}`;
      }
      return itemText;
    };
    const renderHeading = () => {
      return /* @__PURE__ */ jsx2(
        Heading,
        {
          level: headingLevel,
          className: "nhsuk-do-dont-list__label",
          text: title
        }
      );
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: classes.join(" "),
        ...props,
        children: [
          renderHeading(),
          /* @__PURE__ */ jsx2("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ jsx2("ul", { className: listClasses.join(" "), role: "list", children: items.map((item, index) => /* @__PURE__ */ jsxs("li", { children: [
            renderIcon(),
            formatItemText(item.item)
          ] }, index)) }) })
        ]
      }
    );
  }
);
DoDontList.displayName = "DoDontList";
export {
  DoDontList
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
