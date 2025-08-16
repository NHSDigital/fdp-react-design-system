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
      function classNames9() {
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
          return classNames9.apply(null, arg);
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
        classNames9.default = classNames9;
        module.exports = classNames9;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames9;
        });
      } else {
        window.classNames = classNames9;
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

// src/components/Header/Header.tsx
var import_classnames4 = __toESM(require_classnames(), 1);
import { useState as useState3, useRef as useRef2, useEffect as useEffect3, useCallback as useCallback2 } from "react";

// src/components/Account/Account.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
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
    const iconContent = item.icon ? /* @__PURE__ */ jsx2(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": item.icon === true ? "User" : void 0,
        children: /* @__PURE__ */ jsx2("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null;
    const textContent = item.html ? /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      iconContent,
      textContent
    ] });
    if (item.href) {
      return /* @__PURE__ */ jsx2("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: item.href, children: content });
    }
    if (item.action) {
      return /* @__PURE__ */ jsx2(
        "form",
        {
          className: "nhsuk-account__form",
          action: item.action,
          method: item.method || "post",
          children: /* @__PURE__ */ jsx2(
            "button",
            {
              className: "nhsuk-account__button",
              type: "submit",
              role: "button",
              children: content
            }
          )
        }
      );
    }
    return /* @__PURE__ */ jsx2("span", { children: content });
  };
  return /* @__PURE__ */ jsx2(
    "nav",
    {
      className: (0, import_classnames2.default)(
        "nhsuk-account",
        {
          "nhsuk-account--white": variant === "white"
        },
        className
      ),
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ jsx2("ul", { className: "nhsuk-account__list", children: items.map((item, index) => item && /* @__PURE__ */ jsx2(
        "li",
        {
          className: (0, import_classnames2.default)("nhsuk-account__item nhsuk-header__account-item", item.className),
          children: renderAccountItem(item)
        },
        index
      )) })
    }
  );
};

// src/components/HeaderSearch/HeaderSearch.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import { useState as useState2, useCallback, useRef, useEffect as useEffect2 } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var HeaderSearch = ({
  mode = "form",
  action = "/search",
  method = "get",
  name = "q",
  value,
  placeholder = "Search",
  visuallyHiddenLabel = "Search the NHS website",
  visuallyHiddenButton = "Search",
  className,
  disabled = false,
  callbacks = {},
  isLoading = false,
  showResults = false,
  results = [],
  formAttributes = {},
  inputAttributes = {},
  buttonAttributes = {},
  preventDefaultSubmit = false,
  debounceMs = 300,
  minQueryLength = 1
}) => {
  const [internalValue, setInternalValue] = useState2("");
  const [isFocused, setIsFocused] = useState2(false);
  const debounceRef = useRef(void 0);
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const isControlled = mode === "controlled" && value !== void 0;
  const currentValue = isControlled ? value : internalValue;
  const debouncedOnChange = useCallback((query) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      if (callbacks.onChange && query.length >= minQueryLength) {
        callbacks.onChange(query);
      }
    }, debounceMs);
  }, [callbacks.onChange, debounceMs, minQueryLength]);
  const handleInputChange = useCallback((e) => {
    const newValue = e.target.value;
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (mode !== "form") {
      debouncedOnChange(newValue);
    }
  }, [isControlled, mode, debouncedOnChange]);
  const handleFormSubmit = useCallback((e) => {
    const query = currentValue.trim();
    const searchData = {
      query,
      timestamp: Date.now(),
      formData: new FormData(e.currentTarget)
    };
    if (mode === "controlled" || mode === "hybrid" && preventDefaultSubmit) {
      e.preventDefault();
      if (callbacks.onSearch && query.length >= minQueryLength) {
        callbacks.onSearch(searchData);
      }
    } else if (mode === "hybrid" && callbacks.onSearch) {
      if (query.length >= minQueryLength) {
        callbacks.onSearch(searchData);
      }
    }
  }, [mode, currentValue, callbacks.onSearch, preventDefaultSubmit, minQueryLength]);
  const handleFocus = useCallback(() => {
    var _a;
    setIsFocused(true);
    (_a = callbacks.onFocus) == null ? void 0 : _a.call(callbacks);
  }, [callbacks.onFocus]);
  const handleBlur = useCallback(() => {
    var _a;
    setIsFocused(false);
    (_a = callbacks.onBlur) == null ? void 0 : _a.call(callbacks);
  }, [callbacks.onBlur]);
  const handleClear = useCallback(() => {
    var _a, _b;
    if (!isControlled) {
      setInternalValue("");
    }
    (_a = callbacks.onClear) == null ? void 0 : _a.call(callbacks);
    (_b = inputRef.current) == null ? void 0 : _b.focus();
  }, [isControlled, callbacks.onClear]);
  useEffect2(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);
  const renderSearchIcon = () => /* @__PURE__ */ jsx3(
    "svg",
    {
      className: (0, import_classnames3.default)("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": isLoading
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx3("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  );
  const renderLoadingSpinner = () => /* @__PURE__ */ jsx3(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsxs2(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "2",
          fill: "none",
          strokeLinecap: "round",
          strokeDasharray: "31.416",
          strokeDashoffset: "31.416",
          children: [
            /* @__PURE__ */ jsx3(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ jsx3(
              "animate",
              {
                attributeName: "stroke-dashoffset",
                dur: "2s",
                values: "0;-15.708;-31.416",
                repeatCount: "indefinite"
              }
            )
          ]
        }
      )
    }
  );
  const renderClearButton = () => {
    if (!currentValue || mode === "form") return null;
    return /* @__PURE__ */ jsx3(
      "button",
      {
        type: "button",
        className: "nhsuk-header__search-clear",
        onClick: handleClear,
        "aria-label": "Clear search",
        children: /* @__PURE__ */ jsx3("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ jsx3("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
      }
    );
  };
  const renderResults = () => {
    if (!showResults || !results.length || !isFocused) return null;
    return /* @__PURE__ */ jsx3("div", { className: "nhsuk-header__search-results", role: "listbox", children: results.map((result) => /* @__PURE__ */ jsx3("div", { className: "nhsuk-header__search-result", role: "option", children: result.href ? /* @__PURE__ */ jsxs2("a", { href: result.href, className: "nhsuk-header__search-result-link", children: [
      /* @__PURE__ */ jsx3("span", { className: "nhsuk-header__search-result-title", children: result.title }),
      result.description && /* @__PURE__ */ jsx3("span", { className: "nhsuk-header__search-result-description", children: result.description })
    ] }) : /* @__PURE__ */ jsxs2(
      "button",
      {
        type: "button",
        className: "nhsuk-header__search-result-button",
        onClick: () => {
          var _a;
          return (_a = callbacks.onSearch) == null ? void 0 : _a.call(callbacks, { query: result.title, timestamp: Date.now() });
        },
        children: [
          /* @__PURE__ */ jsx3("span", { className: "nhsuk-header__search-result-title", children: result.title }),
          result.description && /* @__PURE__ */ jsx3("span", { className: "nhsuk-header__search-result-description", children: result.description })
        ]
      }
    ) }, result.id)) });
  };
  return /* @__PURE__ */ jsxs2("div", { className: (0, import_classnames3.default)("nhsuk-header__search", className, {
    "nhsuk-header__search--controlled": mode === "controlled",
    "nhsuk-header__search--hybrid": mode === "hybrid",
    "nhsuk-header__search--loading": isLoading,
    "nhsuk-header__search--focused": isFocused,
    "nhsuk-header__search--has-results": showResults && results.length > 0
  }), children: [
    /* @__PURE__ */ jsxs2(
      "form",
      {
        ref: formRef,
        className: "nhsuk-header__search-form",
        id: "search",
        action: mode !== "controlled" ? action : void 0,
        method: mode !== "controlled" ? method : void 0,
        role: "search",
        onSubmit: handleFormSubmit,
        ...formAttributes,
        children: [
          /* @__PURE__ */ jsx3(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: visuallyHiddenLabel
            }
          ),
          /* @__PURE__ */ jsxs2("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ jsx3(
              "input",
              {
                ref: inputRef,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: mode !== "controlled" ? name : void 0,
                type: "search",
                placeholder,
                autoComplete: "off",
                value: currentValue,
                onChange: handleInputChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
                disabled: disabled || isLoading,
                "aria-expanded": showResults && results.length > 0,
                "aria-haspopup": "listbox",
                ...inputAttributes
              }
            ),
            renderClearButton()
          ] }),
          /* @__PURE__ */ jsxs2(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: disabled || isLoading || mode !== "form" && currentValue.length < minQueryLength,
              ...buttonAttributes,
              children: [
                isLoading ? renderLoadingSpinner() : renderSearchIcon(),
                /* @__PURE__ */ jsx3("span", { className: "nhsuk-u-visually-hidden", children: isLoading ? "Searching..." : visuallyHiddenButton })
              ]
            }
          )
        ]
      }
    ),
    renderResults()
  ] });
};

// src/components/Header/Header.tsx
import { Fragment as Fragment2, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Header = ({
  className,
  logo = {},
  service = {},
  organisation,
  search,
  account,
  navigation,
  containerClasses,
  variant = "default",
  attributes = {},
  ...props
}) => {
  var _a;
  const [menuOpen, setMenuOpen] = useState3(false);
  const [showMoreButton, setShowMoreButton] = useState3(false);
  const [visibleItems, setVisibleItems] = useState3(((_a = navigation == null ? void 0 : navigation.items) == null ? void 0 : _a.length) || 0);
  const [isInitialized, setIsInitialized] = useState3(false);
  const [dropdownVisible, setDropdownVisible] = useState3(false);
  const [isClient, setIsClient] = useState3(false);
  const navigationRef = useRef2(null);
  const containerRef = useRef2(null);
  const overflowCheckRef = useRef2(false);
  const resizeTimeoutRef = useRef2(null);
  const navigationItemsRef = useRef2([]);
  const lastBreakpointRef = useRef2(null);
  useEffect3(() => {
    if (typeof window === "undefined") return;
    setIsClient(true);
    setIsInitialized(true);
  }, []);
  useEffect3(() => {
    var _a2;
    if (!isClient || !((_a2 = navigation == null ? void 0 : navigation.items) == null ? void 0 : _a2.length)) return;
    navigationItemsRef.current = navigation.items;
    const timer = setTimeout(() => {
      if (navigationRef.current && containerRef.current) {
        checkOverflow();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isClient, navigation == null ? void 0 : navigation.items]);
  const combineLogoAndServiceNameLinks = service.href && !logo.href || service.href && service.href === logo.href;
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;
  const headerClasses = (0, import_classnames4.default)(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": variant === "organisation" || organisation,
      "nhsuk-header--white": variant === "white"
    },
    className
  );
  const containerClass = (0, import_classnames4.default)(
    "nhsuk-header__container",
    "nhsuk-width-container",
    containerClasses
  );
  const navigationClasses = (0, import_classnames4.default)(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": navigation == null ? void 0 : navigation.white,
      "nhsuk-header__navigation--justified": navigation == null ? void 0 : navigation.justified
    },
    navigation == null ? void 0 : navigation.className
  );
  const checkOverflow = useCallback2(() => {
    if (typeof window === "undefined" || overflowCheckRef.current) return;
    if (!navigationRef.current || !containerRef.current || !navigationItemsRef.current.length) return;
    overflowCheckRef.current = true;
    try {
      const container = containerRef.current;
      const nav = navigationRef.current;
      const containerWidth = container.offsetWidth;
      const navItems = nav.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
      if (navItems.length === 0 || containerWidth === 0) {
        overflowCheckRef.current = false;
        return;
      }
      const mobile = window.innerWidth < 768;
      const gutterSize = mobile ? 16 : 32;
      const totalGutters = gutterSize * 2;
      const availableContainerWidth = containerWidth - totalGutters;
      const measurements = Array.from(navItems).map((item) => item.offsetWidth);
      const totalWidth = measurements.reduce((sum, width) => sum + width, 0);
      const moreButtonWidth = mobile ? 80 : 100;
      const breakpointChanged = lastBreakpointRef.current !== null && lastBreakpointRef.current !== mobile;
      lastBreakpointRef.current = mobile;
      console.log("Overflow check:", {
        containerWidth,
        availableContainerWidth,
        totalGutters,
        gutterSize,
        totalWidth,
        mobile,
        breakpointChanged,
        itemCount: measurements.length,
        measurements
      });
      if (totalWidth <= availableContainerWidth) {
        setShowMoreButton(false);
        setVisibleItems(navigationItemsRef.current.length);
      } else {
        const availableWidth = availableContainerWidth - moreButtonWidth;
        let itemsToShow = 0;
        let runningWidth = 0;
        for (let i = 0; i < measurements.length; i++) {
          const newWidth = runningWidth + measurements[i];
          if (newWidth <= availableWidth) {
            runningWidth = newWidth;
            itemsToShow = i + 1;
          } else {
            break;
          }
        }
        itemsToShow = Math.max(1, itemsToShow);
        const shouldShowMore = itemsToShow < measurements.length;
        setShowMoreButton(shouldShowMore);
        setVisibleItems(itemsToShow);
      }
      overflowCheckRef.current = false;
    } catch (error) {
      console.error("Overflow detection error:", error);
      setShowMoreButton(false);
      setVisibleItems(navigationItemsRef.current.length);
      overflowCheckRef.current = false;
    }
  }, []);
  useEffect3(() => {
    if (typeof document === "undefined") return;
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      return () => document.removeEventListener("keydown", handleEscapeKey);
    }
  }, [menuOpen]);
  useEffect3(() => {
    if (typeof window === "undefined" || !isClient) return;
    const handleResize = () => {
      if (menuOpen) {
        setMenuOpen(false);
        setDropdownVisible(false);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        if (navigationItemsRef.current.length > 0) {
          checkOverflow();
        }
      }, 250);
    };
    let mediaQueryList = null;
    let handleBreakpointChange = null;
    if (window.matchMedia) {
      mediaQueryList = window.matchMedia("(max-width: 767px)");
      handleBreakpointChange = () => {
        if (navigationItemsRef.current.length > 0) {
          setTimeout(() => checkOverflow(), 50);
        }
      };
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener("change", handleBreakpointChange);
      } else {
        mediaQueryList.addListener(handleBreakpointChange);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mediaQueryList && handleBreakpointChange) {
        if (mediaQueryList.removeEventListener) {
          mediaQueryList.removeEventListener("change", handleBreakpointChange);
        } else {
          mediaQueryList.removeListener(handleBreakpointChange);
        }
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [isClient, menuOpen, checkOverflow]);
  useEffect3(() => {
    if (typeof document === "undefined") return;
    const handleClickOutside = (event) => {
      var _a2;
      const target = event.target;
      const isInsideNavigation = (_a2 = navigationRef.current) == null ? void 0 : _a2.contains(target);
      if (menuOpen && !isInsideNavigation) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen]);
  const toggleMenu = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);
    if (newMenuState) {
      setTimeout(() => {
        setDropdownVisible(true);
      }, 50);
    } else {
      setDropdownVisible(false);
    }
  };
  const renderNHSLogo = () => /* @__PURE__ */ jsxs3(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": logo.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ jsx4("title", { children: logo.ariaLabel || "NHS" }),
        /* @__PURE__ */ jsx4(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  );
  const renderServiceLogo = () => {
    if (logo.src) {
      return /* @__PURE__ */ jsx4(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: logo.src,
          width: "280",
          alt: logo.ariaLabel || "NHS"
        }
      );
    }
    return renderNHSLogo();
  };
  const renderOrganisationName = () => {
    if (!organisation) return null;
    return /* @__PURE__ */ jsxs3(Fragment2, { children: [
      /* @__PURE__ */ jsxs3("span", { className: "nhsuk-header__organisation-name", children: [
        organisation.name,
        organisation.split && /* @__PURE__ */ jsxs3("span", { className: "nhsuk-header__organisation-name-split", children: [
          " ",
          organisation.split
        ] })
      ] }),
      organisation.descriptor && /* @__PURE__ */ jsx4("span", { className: "nhsuk-header__organisation-name-descriptor", children: organisation.descriptor })
    ] });
  };
  const renderServiceName = (text, href) => {
    if (!text) return null;
    if (href) {
      return /* @__PURE__ */ jsx4("a", { className: "nhsuk-header__service-name", href, children: text });
    }
    return /* @__PURE__ */ jsx4("span", { className: "nhsuk-header__service-name", children: text });
  };
  const renderChevronIcon = () => /* @__PURE__ */ jsx4(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx4("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  const renderNavigationLinkContent = (item) => {
    if (item.active || item.current) {
      const content = item.html ? /* @__PURE__ */ jsx4("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
      return /* @__PURE__ */ jsx4("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: content });
    }
    return item.html ? /* @__PURE__ */ jsx4("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
  };
  return /* @__PURE__ */ jsxs3(
    "header",
    {
      className: headerClasses,
      role: "banner",
      "data-module": "nhsuk-header",
      ...attributes,
      ...props,
      children: [
        /* @__PURE__ */ jsxs3("div", { className: containerClass, children: [
          /* @__PURE__ */ jsxs3("div", { className: "nhsuk-header__service", children: [
            logoHref ? /* @__PURE__ */ jsxs3("a", { className: "nhsuk-header__service-logo", href: logoHref, children: [
              renderServiceLogo(),
              renderOrganisationName(),
              combineLogoAndServiceNameLinks && renderServiceName(service.text)
            ] }) : /* @__PURE__ */ jsxs3(Fragment2, { children: [
              renderServiceLogo(),
              renderOrganisationName(),
              combineLogoAndServiceNameLinks && renderServiceName(service.text)
            ] }),
            service.text && !combineLogoAndServiceNameLinks && renderServiceName(service.text, service.href)
          ] }),
          search && /* @__PURE__ */ jsx4(HeaderSearch, { ...search }),
          /* @__PURE__ */ jsx4(
            Account,
            {
              ...account,
              variant: variant === "white" ? "white" : "default"
            }
          )
        ] }),
        navigation && navigation.items && navigation.items.length > 0 && /* @__PURE__ */ jsx4(
          "nav",
          {
            className: navigationClasses,
            "aria-label": navigation.ariaLabel || "Menu",
            children: /* @__PURE__ */ jsx4(
              "div",
              {
                className: (0, import_classnames4.default)(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !isInitialized && isClient,
                    "nhsuk-header__navigation-container--ssr": !isClient
                  },
                  containerClasses
                ),
                ref: containerRef,
                children: /* @__PURE__ */ jsxs3("ul", { className: "nhsuk-header__navigation-list", ref: navigationRef, children: [
                  (!isClient ? navigation.items : navigation.items.slice(0, visibleItems)).map((item, index) => /* @__PURE__ */ jsx4(
                    "li",
                    {
                      className: (0, import_classnames4.default)(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": item.active || item.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !isClient && index >= 4
                          // Mark items that would be hidden on client
                        },
                        item.className
                      ),
                      ...item.attributes || {},
                      children: /* @__PURE__ */ jsx4(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: item.href,
                          ...item.active || item.current ? {
                            "aria-current": item.current ? "page" : "true"
                          } : {},
                          children: renderNavigationLinkContent(item)
                        }
                      )
                    },
                    index
                  )),
                  isClient && showMoreButton && visibleItems < navigation.items.length && /* @__PURE__ */ jsx4(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ jsxs3(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: toggleMenu,
                          type: "button",
                          children: [
                            /* @__PURE__ */ jsx4("span", { children: "More" }),
                            renderChevronIcon()
                          ]
                        }
                      )
                    }
                  )
                ] })
              }
            )
          }
        ),
        isClient && navigation && navigation.items && navigation.items.length > 0 && menuOpen && dropdownVisible && /* @__PURE__ */ jsx4(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !dropdownVisible,
            children: /* @__PURE__ */ jsx4("ul", { className: "nhsuk-header__dropdown-list", children: navigation.items.slice(visibleItems).map((item, index) => /* @__PURE__ */ jsx4(
              "li",
              {
                className: (0, import_classnames4.default)(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": item.active || item.current
                  }
                ),
                children: /* @__PURE__ */ jsx4(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: item.href,
                    ...item.active || item.current ? {
                      "aria-current": item.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      setMenuOpen(false);
                      setDropdownVisible(false);
                    },
                    children: renderNavigationLinkContent(item)
                  }
                )
              },
              `overflow-${visibleItems + index}`
            )) })
          }
        )
      ]
    }
  );
};

// src/components/Grid/Grid.tsx
var import_classnames5 = __toESM(require_classnames(), 1);
import React4 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Container = ({
  children,
  className,
  fluid = false,
  maxWidth,
  ...props
}) => {
  const containerClasses = (0, import_classnames5.default)(
    {
      "nhsuk-width-container": !fluid,
      "nhsuk-width-container-fluid": fluid
    },
    className
  );
  const style = maxWidth ? { maxWidth } : void 0;
  return /* @__PURE__ */ jsx5("div", { className: containerClasses, style, ...props, children });
};
var Row = ({
  children,
  className,
  ...props
}) => {
  const rowClasses = (0, import_classnames5.default)("nhsuk-grid-row", className);
  return /* @__PURE__ */ jsx5("div", { className: rowClasses, ...props, children });
};
var Column = ({
  children,
  width = "full",
  mobileWidth,
  tabletWidth,
  desktopWidth,
  start,
  className,
  forceWidth = false,
  ...props
}) => {
  const columnClasses = (0, import_classnames5.default)(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${width}`]: !forceWidth,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${width}`]: forceWidth,
      // Responsive width overrides
      [`nhsuk-u-${mobileWidth}-mobile`]: mobileWidth,
      [`nhsuk-u-${tabletWidth}-tablet`]: tabletWidth,
      [`nhsuk-u-${desktopWidth}-desktop`]: desktopWidth,
      // Grid positioning
      [`nhsuk-grid-column-start-${start}`]: start && start >= 1 && start <= 7
    },
    className
  );
  return /* @__PURE__ */ jsx5("div", { className: columnClasses, ...props, children });
};

// src/components/WidthContainer/WidthContainer.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var WidthContainer = (props) => {
  return /* @__PURE__ */ jsx6(Container, { ...props });
};

// src/components/MainWrapper/MainWrapper.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var MainWrapper = ({
  as: Component = "main",
  size = "default",
  className,
  children,
  ...props
}) => {
  const classes = [
    "nhsuk-main-wrapper",
    size === "large" && "nhsuk-main-wrapper--l",
    size === "small" && "nhsuk-main-wrapper--s",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx7(Component, { className: classes, ...props, children });
};

// src/components/Heading/Heading.tsx
var import_classnames6 = __toESM(require_classnames(), 1);
import { createElement } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
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
  const headingClasses = (0, import_classnames6.default)(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${size}`]: size
    },
    className
  );
  const content = children || (html ? /* @__PURE__ */ jsx8("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  const tagName = `h${headingLevel}`;
  const style = marginBottom ? { ...props.style, marginBottom } : props.style;
  return createElement(
    tagName,
    { className: headingClasses, ...props, style },
    content
  );
};

// src/components/Footer/Footer.tsx
var import_classnames7 = __toESM(require_classnames(), 1);
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var Footer = ({
  className,
  links = [],
  linksColumn2,
  linksColumn3,
  metaLinks,
  copyright = "\xA9 NHS England",
  containerClasses,
  attributes = {}
}) => {
  const renderLinkItem = (item, isDefaultLayout = false) => /* @__PURE__ */ jsx9(
    "li",
    {
      className: (0, import_classnames7.default)("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": isDefaultLayout
      }),
      children: /* @__PURE__ */ jsx9(
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
  return /* @__PURE__ */ jsx9("footer", { role: "contentinfo", ...attributes, children: /* @__PURE__ */ jsxs4("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ jsxs4("div", { className: (0, import_classnames7.default)("nhsuk-width-container", containerClasses), children: [
      /* @__PURE__ */ jsx9("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ jsx9("div", { className: (0, import_classnames7.default)("nhsuk-footer", className), children: !isMultiColumnLayout ? (
        // Single column layout (default)
        /* @__PURE__ */ jsxs4("ul", { className: "nhsuk-footer__list", children: [
          links.map((item) => renderLinkItem(item, true)),
          (linksColumn2 || []).map((item) => renderLinkItem(item, true)),
          (linksColumn3 || []).map((item) => renderLinkItem(item, true)),
          (metaLinks || []).map((item) => renderLinkItem(item, true))
        ] })
      ) : (
        // Multi-column layout
        /* @__PURE__ */ jsxs4(Fragment3, { children: [
          links.length > 0 && /* @__PURE__ */ jsx9("ul", { className: "nhsuk-footer__list", children: links.map((item) => renderLinkItem(item)) }),
          linksColumn2 && linksColumn2.length > 0 && /* @__PURE__ */ jsx9("ul", { className: "nhsuk-footer__list", children: linksColumn2.map((item) => renderLinkItem(item)) }),
          linksColumn3 && linksColumn3.length > 0 && /* @__PURE__ */ jsx9("ul", { className: "nhsuk-footer__list", children: linksColumn3.map((item) => renderLinkItem(item)) }),
          metaLinks && metaLinks.length > 0 && /* @__PURE__ */ jsx9("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: metaLinks.map((item) => renderLinkItem(item)) })
        ] })
      ) }),
      !isMultiColumnLayout && /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("p", { className: "nhsuk-footer__copyright", children: copyright }) })
    ] }),
    isMultiColumnLayout && /* @__PURE__ */ jsx9("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("p", { className: "nhsuk-footer__copyright", children: copyright }) }) })
  ] }) });
};

// src/components/BackLink/BackLink.tsx
var import_classnames8 = __toESM(require_classnames(), 1);
import { Fragment as Fragment4, jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var BackLink = ({
  text = "Back",
  html,
  href = "#",
  className,
  element = "a",
  onClick,
  ...props
}) => {
  const containerClasses = (0, import_classnames8.default)(
    "nhsuk-back-link",
    className
  );
  const linkClasses = (0, import_classnames8.default)(
    "nhsuk-back-link__link"
  );
  const renderContent = () => {
    return /* @__PURE__ */ jsxs5(Fragment4, { children: [
      /* @__PURE__ */ jsx10(
        "svg",
        {
          className: "nhsuk-icon nhsuk-icon__chevron-left",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          height: "24",
          width: "24",
          children: /* @__PURE__ */ jsx10("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
        }
      ),
      html ? /* @__PURE__ */ jsx10("span", { dangerouslySetInnerHTML: { __html: html } }) : text
    ] });
  };
  return /* @__PURE__ */ jsx10("div", { className: containerClasses, children: element === "button" ? /* @__PURE__ */ jsx10(
    "button",
    {
      className: linkClasses,
      onClick,
      type: "button",
      ...props,
      children: renderContent()
    }
  ) : /* @__PURE__ */ jsx10(
    "a",
    {
      className: linkClasses,
      href,
      ...props,
      children: renderContent()
    }
  ) });
};

// src/components/TransactionalPageTemplate/TransactionalPageTemplate.tsx
import { Fragment as Fragment5, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var TransactionalPageTemplate = ({
  children,
  pageTitle,
  pageHeadingProps,
  columnWidth = "two-thirds",
  mainWrapperSize = "small",
  // Default to small size for transactional forms
  skipLinkProps,
  headerProps,
  footerProps,
  backLinkProps,
  serviceName,
  serviceHref,
  logo,
  className,
  ...containerProps
}) => {
  const headerConfig = {
    service: {
      text: serviceName,
      href: serviceHref
    },
    logo,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...headerProps
  };
  return /* @__PURE__ */ jsxs6(Fragment5, { children: [
    /* @__PURE__ */ jsx11(SkipLink, { ...skipLinkProps }),
    /* @__PURE__ */ jsx11(Header, { ...headerConfig }),
    /* @__PURE__ */ jsxs6(WidthContainer, { className, ...containerProps, children: [
      backLinkProps && /* @__PURE__ */ jsx11(BackLink, { ...backLinkProps }),
      /* @__PURE__ */ jsx11(MainWrapper, { size: mainWrapperSize, children: /* @__PURE__ */ jsx11(Row, { children: /* @__PURE__ */ jsxs6(Column, { width: columnWidth, children: [
        pageTitle && /* @__PURE__ */ jsx11(Heading, { size: "l", ...pageHeadingProps, children: pageTitle }),
        children
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx11(Footer, { ...footerProps })
  ] });
};
var TransactionalPageTemplate_default = TransactionalPageTemplate;
export {
  TransactionalPageTemplate,
  TransactionalPageTemplate_default as default
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
