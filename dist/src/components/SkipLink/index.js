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

// src/components/SkipLink/SkipLink.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
var SkipLink = ({
  text = "Skip to main content",
  href = "#maincontent",
  classes,
  attributes = {}
}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined" || !document.querySelector || !document.querySelectorAll) {
      return;
    }
    const handleSkipLinkClick = (event) => {
      const target = event.target;
      const targetId = target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          if (!targetElement.hasAttribute("tabindex")) {
            targetElement.setAttribute("tabindex", "-1");
          }
          targetElement.focus();
          targetElement.classList.add("nhsuk-skip-link-focused-element");
          const timeoutId = window.setTimeout(() => {
            targetElement.classList.remove("nhsuk-skip-link-focused-element");
            if (targetElement.getAttribute("tabindex") === "-1") {
              targetElement.removeAttribute("tabindex");
            }
          }, 3e3);
          target.__nhsSkipLinkTimeout = timeoutId;
        }
      }
    };
    try {
      const skipLinks = document.querySelectorAll(".nhsuk-skip-link");
      skipLinks.forEach((link) => {
        link.addEventListener("click", handleSkipLinkClick);
      });
      return () => {
        try {
          skipLinks.forEach((link) => {
            link.removeEventListener("click", handleSkipLinkClick);
            const timeoutId = link.__nhsSkipLinkTimeout;
            if (timeoutId && window.clearTimeout) {
              window.clearTimeout(timeoutId);
            }
          });
        } catch (error) {
          console.warn("SkipLink cleanup error:", error);
        }
      };
    } catch (error) {
      console.warn("SkipLink initialization error:", error);
      return () => {
      };
    }
  }, [isClient]);
  const skipLinkClasses = (0, import_classnames.default)("nhsuk-skip-link", classes);
  return /* @__PURE__ */ jsx(
    "a",
    {
      className: skipLinkClasses,
      href,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": isClient ? "true" : "false",
      ...attributes,
      children: text
    }
  );
};
export {
  SkipLink
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
