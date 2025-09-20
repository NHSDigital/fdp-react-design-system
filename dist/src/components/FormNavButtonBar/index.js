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
      function classNames3() {
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
          return classNames3.apply(null, arg);
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
        classNames3.default = classNames3;
        module.exports = classNames3;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames3;
        });
      } else {
        window.classNames = classNames3;
      }
    })();
  }
});

// src/components/FormNavButtonBar/FormNavButtonBar.server.tsx
var import_classnames2 = __toESM(require_classnames(), 1);

// src/components/Grid/Grid.tsx
var import_classnames = __toESM(require_classnames(), 1);
import React from "react";
import { jsx } from "react/jsx-runtime";
var Row = ({
  children,
  className,
  style,
  align,
  ...props
}) => {
  const rowClasses = (0, import_classnames.default)(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    align ? `nhsuk-grid-row-align-${align}` : void 0,
    className
  );
  return /* @__PURE__ */ jsx("div", { className: rowClasses, style, ...props, children });
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
  return /* @__PURE__ */ jsx("div", { className: columnClasses, style, ...props, children });
};

// src/components/Button/Button.server.tsx
import * as React2 from "react";

// src/mapping/button.ts
function mapButtonProps(input) {
  const variant = input.variant || "primary";
  const size = input.size || "default";
  const fullWidth = !!input.fullWidth;
  const classes = [
    "nhs-aria-button",
    `nhs-aria-button--${variant}`,
    size !== "default" ? `nhs-aria-button--${size}` : "",
    fullWidth ? "nhs-aria-button--full-width" : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const tag = input.href ? "a" : "button";
  return {
    tag,
    classes,
    data: { module: "nhs-button" },
    attrs: input.href ? { href: input.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!input.preventDoubleClick
  };
}

// src/components/Button/Button.server.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ButtonServer = React2.forwardRef(function ButtonServer2(props, ref) {
  const {
    children,
    variant = "primary" /* Primary */,
    size = "default" /* Default */,
    fullWidth = false,
    className = "",
    preventDoubleClick = false,
    ...rest
  } = props;
  const model = mapButtonProps({
    variant,
    size,
    fullWidth,
    className,
    href: "href" in rest ? rest.href : void 0,
    preventDoubleClick
  });
  if ("href" in rest && rest.href) {
    const anchorProps = rest;
    const {
      id: id2,
      style: style2,
      title: title2,
      ["aria-label"]: ariaLabel2,
      ["aria-describedby"]: ariaDescribedBy2,
      ["aria-labelledby"]: ariaLabelledBy2,
      tabIndex: tabIndex2,
      ...anchorRest
    } = anchorProps;
    return /* @__PURE__ */ jsx2(
      "a",
      {
        ref,
        href: anchorProps.href,
        target: anchorProps.target,
        rel: anchorProps.rel,
        className: model.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...preventDoubleClick && { "data-prevent-double-click": "true" },
        id: id2,
        style: style2,
        title: title2,
        "aria-label": ariaLabel2,
        "aria-describedby": ariaDescribedBy2,
        "aria-labelledby": ariaLabelledBy2,
        tabIndex: tabIndex2,
        ...anchorRest,
        children
      }
    );
  }
  const buttonProps = rest;
  const {
    id,
    style,
    title,
    ["aria-label"]: ariaLabel,
    ["aria-describedby"]: ariaDescribedBy,
    ["aria-labelledby"]: ariaLabelledBy,
    tabIndex,
    name,
    value: valueProp,
    form,
    formAction,
    formEncType,
    formMethod,
    formNoValidate,
    formTarget,
    autoFocus,
    type,
    disabled,
    ...buttonRest
  } = buttonProps;
  return /* @__PURE__ */ jsx2(
    "button",
    {
      ref,
      type: type || "button",
      disabled,
      className: model.classes,
      "data-module": "nhs-button",
      ...preventDoubleClick && { "data-prevent-double-click": "true" },
      id,
      style,
      title,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-labelledby": ariaLabelledBy,
      tabIndex,
      name,
      value: valueProp,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      autoFocus,
      ...buttonRest,
      children
    }
  );
});
ButtonServer.displayName = "ButtonServer";
var Button_server_default = ButtonServer;

// src/components/FormNavButtonBar/FormNavButtonBar.server.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
function renderButton(cfg, defaultLabel) {
  if (!cfg || cfg.hidden) return null;
  const { href, label, variant, disabled, type } = cfg;
  const common = { variant, disabled };
  if (href)
    return /* @__PURE__ */ jsx3(Button_server_default, { href, ...common, children: label || defaultLabel });
  return /* @__PURE__ */ jsx3(Button_server_default, { type: type === "button" ? "button" : "submit", ...common, children: label || defaultLabel });
}
var FormNavButtonBar = ({
  back,
  startAgain,
  next,
  flipOrderOnMobile = true,
  className
}) => {
  const showBack = !!back && !back.hidden;
  const showStartAgain = !!startAgain && !startAgain.hidden;
  const showNext = !!next && !next.hidden;
  const visibleCount = [showBack, showStartAgain, showNext].filter(Boolean).length;
  const widthForTwo = "one-half" /* OneHalf */;
  const widthForThree = "one-third" /* OneThird */;
  return /* @__PURE__ */ jsxs(
    Row,
    {
      className: (0, import_classnames2.default)("nhs-form-nav", className, {
        "nhs-form-nav--flip-mobile": flipOrderOnMobile
      }),
      children: [
        showBack && /* @__PURE__ */ jsx3(Column, { width: visibleCount === 2 ? widthForTwo : widthForThree, className: "nhs-form-nav__back", children: renderButton(back, "Back") }),
        showStartAgain && /* @__PURE__ */ jsx3(
          Column,
          {
            width: visibleCount === 2 ? widthForTwo : widthForThree,
            align: visibleCount === 2 ? "right" /* Right */ : "center" /* Center */,
            className: "nhs-form-nav__start-again",
            children: renderButton(startAgain, "Start again")
          }
        ),
        showNext && /* @__PURE__ */ jsx3(
          Column,
          {
            width: !showBack && !showStartAgain ? "full" /* Full */ : visibleCount === 2 ? widthForTwo : widthForThree,
            align: "right" /* Right */,
            className: "nhs-form-nav__next",
            children: renderButton(next, "Next")
          }
        )
      ]
    }
  );
};
var FormNavButtonBar_server_default = FormNavButtonBar;
export {
  FormNavButtonBar_server_default as FormNavButtonBar
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
