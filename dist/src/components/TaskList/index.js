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

// src/components/TaskList/TaskList.tsx
import { forwardRef } from "react";

// src/components/Tag/Tag.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx, jsxs } from "react/jsx-runtime";
var Tag = ({
  text,
  html,
  children,
  color = "default",
  noBorder = false,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const tagClasses = (0, import_classnames.default)(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${color}`]: color !== "default",
      "nhsuk-tag--no-border": noBorder,
      "nhsuk-tag--closable": closable,
      "nhsuk-tag--disabled": disabled
    },
    className
  );
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs("strong", { className: tagClasses, ...props, children: [
    children ? children : html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: handleClose,
        disabled,
        "aria-label": "Remove",
        title: "Remove",
        children: "\xD7"
      }
    )
  ] });
};

// src/components/TaskList/TaskList.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var TaskList = forwardRef(
  ({ items, idPrefix = "task-list", className, ...props }, ref) => {
    const classes = [
      "nhsuk-task-list",
      className
    ].filter(Boolean).join(" ");
    const renderTaskItem = (item, index) => {
      const itemIndex = index + 1;
      const hintId = `${idPrefix}-${itemIndex}-hint`;
      const statusId = `${idPrefix}-${itemIndex}-status`;
      const hasLink = Boolean(item.href);
      const itemClasses = [
        "nhsuk-task-list__item",
        hasLink && "nhsuk-task-list__item--with-link",
        item.classes
      ].filter(Boolean).join(" ");
      const ariaDescribedBy = [
        item.hint && hintId,
        statusId
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ jsx2(
        TaskListItem,
        {
          item,
          itemClasses,
          hasLink,
          hintId,
          statusId,
          ariaDescribedBy
        },
        index
      );
    };
    return /* @__PURE__ */ jsx2(
      "ul",
      {
        ref,
        className: classes,
        ...props,
        children: items.map(renderTaskItem)
      }
    );
  }
);
var TaskListItem = ({
  item,
  itemClasses,
  hasLink,
  hintId,
  statusId,
  ariaDescribedBy
}) => {
  const renderTitle = () => {
    const titleContent = item.title.html ? /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: item.title.html } }) : item.title.text;
    const titleClasses = [
      hasLink ? "nhsuk-task-list__link" : "",
      item.title.classes
    ].filter(Boolean).join(" ");
    if (hasLink) {
      return /* @__PURE__ */ jsx2(
        "a",
        {
          className: titleClasses,
          href: item.href,
          "aria-describedby": ariaDescribedBy,
          children: titleContent
        }
      );
    }
    return /* @__PURE__ */ jsx2("div", { className: item.title.classes || "", children: titleContent });
  };
  const renderHint = () => {
    if (!item.hint) return null;
    const hintContent = item.hint.html ? /* @__PURE__ */ jsx2(
      "div",
      {
        id: hintId,
        className: "nhsuk-task-list__hint",
        dangerouslySetInnerHTML: { __html: item.hint.html }
      }
    ) : /* @__PURE__ */ jsx2("div", { id: hintId, className: "nhsuk-task-list__hint", children: item.hint.text });
    return hintContent;
  };
  const renderStatus = () => {
    const statusClasses = [
      "nhsuk-task-list__status",
      item.status.classes
    ].filter(Boolean).join(" ");
    let statusContent;
    if (item.status.tag) {
      statusContent = /* @__PURE__ */ jsx2(Tag, { ...item.status.tag });
    } else if (item.status.html) {
      statusContent = /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: item.status.html } });
    } else {
      statusContent = item.status.text;
    }
    return /* @__PURE__ */ jsx2("div", { className: statusClasses, id: statusId, children: statusContent });
  };
  return /* @__PURE__ */ jsxs2("li", { className: itemClasses, children: [
    /* @__PURE__ */ jsxs2("div", { className: "nhsuk-task-list__name-and-hint", children: [
      renderTitle(),
      renderHint()
    ] }),
    renderStatus()
  ] });
};
TaskList.displayName = "TaskList";
export {
  TaskList
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
