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

// src/components/Card/Card.tsx
import React2 from "react";

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

// src/components/Card/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = React2.forwardRef(({
  variant = "default",
  heading,
  headingHtml,
  headingLevel = 2,
  headingClasses,
  description,
  descriptionHtml,
  href,
  imgURL,
  imgAlt,
  ...htmlAttributes
}, ref) => {
  const cardClasses = [
    "nhsuk-card",
    variant === "clickable" && "nhsuk-card--clickable",
    variant === "secondary" && "nhsuk-card--secondary",
    variant === "feature" && "nhsuk-card--feature",
    htmlAttributes.className
  ].filter(Boolean).join(" ");
  const contentClasses = [
    "nhsuk-card__content",
    variant === "feature" && "nhsuk-card__content--feature",
    variant === "primary" && "nhsuk-card__content--primary",
    variant === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" ");
  const headingClassList = [
    "nhsuk-card__heading",
    variant === "feature" && "nhsuk-card__heading--feature",
    headingClasses
  ].filter(Boolean).join(" ");
  const renderHeading = () => {
    if (headingHtml) {
      return /* @__PURE__ */ jsx2("div", { dangerouslySetInnerHTML: { __html: headingHtml } });
    }
    if (!heading) return null;
    const headingContent = () => {
      if (href && variant !== "feature") {
        return /* @__PURE__ */ jsx2("a", { className: "nhsuk-card__link", href, children: heading });
      }
      return heading;
    };
    return /* @__PURE__ */ jsx2(
      Heading,
      {
        level: headingLevel,
        className: headingClassList,
        children: headingContent()
      }
    );
  };
  const renderContent = () => {
    if (htmlAttributes.children) return htmlAttributes.children;
    if (descriptionHtml) return /* @__PURE__ */ jsx2("div", { dangerouslySetInnerHTML: { __html: descriptionHtml } });
    if (description) return /* @__PURE__ */ jsx2("p", { className: "nhsuk-card__description", children: description });
    return null;
  };
  const renderPrimaryIcon = () => {
    if (variant !== "primary") return null;
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "nhsuk-icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "27",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          /* @__PURE__ */ jsx2("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
          /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
            /* @__PURE__ */ jsx2("path", { d: "M15.438 13l-3.771 3.771" }),
            /* @__PURE__ */ jsx2("path", { d: "M11.667 9.229L15.438 13" })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...htmlAttributes,
      className: cardClasses,
      ref,
      children: [
        imgURL && /* @__PURE__ */ jsx2(
          "img",
          {
            className: "nhsuk-card__img",
            src: imgURL,
            alt: imgAlt || ""
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: contentClasses, children: [
          renderHeading(),
          renderContent(),
          renderPrimaryIcon()
        ] })
      ]
    }
  );
});
Card.displayName = "Card";
var CardGroup = ({
  className,
  children,
  "data-testid": dataTestId,
  id
}) => {
  const classes = ["nhsuk-card-group", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx2(
    "ul",
    {
      className: classes,
      "data-testid": dataTestId,
      id,
      children
    }
  );
};
var CardGroupItem = ({
  className,
  children,
  "data-testid": dataTestId
}) => {
  const classes = ["nhsuk-card-group__item", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx2(
    "li",
    {
      className: classes,
      "data-testid": dataTestId,
      children
    }
  );
};
export {
  Card,
  CardGroup,
  CardGroupItem
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
