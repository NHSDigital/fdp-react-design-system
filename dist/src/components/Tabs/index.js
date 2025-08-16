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

// src/components/Tabs/Tabs.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { useState, useCallback, useRef, forwardRef, useImperativeHandle } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Tabs = forwardRef(({
  items,
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onTabChange,
  onTabFocus,
  onTabListBlur,
  onEscape,
  autoActivate = true,
  className,
  id,
  "data-testid": testId,
  ...props
}, ref) => {
  const isControlled = controlledActiveTab !== void 0;
  const [internalActiveTab, setInternalActiveTab] = useState(() => {
    var _a;
    return defaultActiveTab || ((_a = items[0]) == null ? void 0 : _a.id) || "";
  });
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  const tabListRef = useRef(null);
  const tabRefs = useRef(/* @__PURE__ */ new Map());
  const handleTabClick = useCallback((tabId) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onTabChange == null ? void 0 : onTabChange(tabId);
  }, [isControlled, onTabChange]);
  const handleTabFocus = useCallback((tabId) => {
    onTabFocus == null ? void 0 : onTabFocus(tabId);
    if (autoActivate) {
      handleTabClick(tabId);
    }
  }, [onTabFocus, autoActivate, handleTabClick]);
  const handleKeyDown = useCallback((event, tabId) => {
    const tabIds = items.filter((item) => !item.disabled).map((item) => item.id);
    const currentIndex = tabIds.indexOf(tabId);
    let newIndex = null;
    switch (event.key) {
      case "ArrowLeft":
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabIds.length - 1;
        break;
      case "ArrowRight":
        newIndex = currentIndex < tabIds.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabIds.length - 1;
        break;
      case "Escape":
        event.preventDefault();
        onEscape == null ? void 0 : onEscape();
        return;
      default:
        return;
    }
    if (newIndex !== null) {
      event.preventDefault();
      const newTabId = tabIds[newIndex];
      const newTabRef = tabRefs.current.get(newTabId);
      if (newTabRef) {
        newTabRef.focus();
        handleTabFocus(newTabId);
      }
    }
  }, [items, handleTabFocus, onEscape]);
  const setTabRef = useCallback((tabId, element) => {
    if (element) {
      tabRefs.current.set(tabId, element);
    } else {
      tabRefs.current.delete(tabId);
    }
  }, []);
  const focusTab = useCallback((tabId) => {
    const tabRef = tabRefs.current.get(tabId);
    if (tabRef) {
      tabRef.focus();
    }
  }, []);
  useImperativeHandle(ref, () => ({
    focusTab,
    getActiveTab: () => activeTab,
    getTabListElement: () => tabListRef.current
  }), [focusTab, activeTab]);
  const handleTabListBlur = useCallback((event) => {
    var _a;
    const relatedTarget = event.relatedTarget;
    if (!((_a = tabListRef.current) == null ? void 0 : _a.contains(relatedTarget))) {
      onTabListBlur == null ? void 0 : onTabListBlur();
    }
  }, [onTabListBlur]);
  const tabsClasses = (0, import_classnames.default)("nhsuk-tabs", className);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: tabsClasses,
      id,
      "data-testid": testId,
      ...props,
      children: [
        /* @__PURE__ */ jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: tabListRef,
            children: /* @__PURE__ */ jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: handleTabListBlur,
                children: items.map((item) => {
                  const isActive = item.id === activeTab;
                  const isDisabled = item.disabled;
                  const tabClasses = (0, import_classnames.default)("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": isActive,
                    "nhsuk-tabs__list-item--disabled": isDisabled
                  });
                  return /* @__PURE__ */ jsx("li", { className: tabClasses, children: /* @__PURE__ */ jsx(
                    "button",
                    {
                      ref: (element) => setTabRef(item.id, element),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": isActive,
                      "aria-controls": `${item.id}-panel`,
                      id: `${item.id}-tab`,
                      tabIndex: isActive ? 0 : -1,
                      disabled: isDisabled,
                      onClick: () => !isDisabled && handleTabClick(item.id),
                      onKeyDown: (event) => !isDisabled && handleKeyDown(event, item.id),
                      onFocus: () => !isDisabled && handleTabFocus(item.id),
                      ...item.attributes,
                      children: item.label
                    }
                  ) }, item.id);
                })
              }
            )
          }
        ),
        items.map((item) => {
          const isActive = item.id === activeTab;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${item.id}-tab`,
              id: `${item.id}-panel`,
              hidden: !isActive,
              children: item.content
            },
            item.id
          );
        })
      ]
    }
  );
});
export {
  Tabs
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
