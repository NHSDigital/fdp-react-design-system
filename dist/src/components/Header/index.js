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
      function classNames6() {
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
          return classNames6.apply(null, arg);
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
        classNames6.default = classNames6;
        module.exports = classNames6;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames6;
        });
      } else {
        window.classNames = classNames6;
      }
    })();
  }
});

// src/components/Header/Header.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import { useState as useState2, useRef as useRef2, useEffect as useEffect2, useCallback as useCallback2 } from "react";

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
        children: /* @__PURE__ */ jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null;
    const textContent = item.html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
    const content = /* @__PURE__ */ jsxs(Fragment, { children: [
      iconContent,
      textContent
    ] });
    if (item.href) {
      return /* @__PURE__ */ jsx("a", { className: "nhsuk-account__link", href: item.href, children: content });
    }
    if (item.action) {
      return /* @__PURE__ */ jsx(
        "form",
        {
          className: "nhsuk-account__form",
          action: item.action,
          method: item.method || "post",
          children: /* @__PURE__ */ jsx(
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
      children: /* @__PURE__ */ jsx("ul", { className: "nhsuk-account__list", children: items.map((item, index) => item && /* @__PURE__ */ jsx(
        "li",
        {
          className: (0, import_classnames.default)("nhsuk-account__item", item.className),
          children: renderAccountItem(item)
        },
        index
      )) })
    }
  );
};

// src/components/HeaderSearch/HeaderSearch.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { useState, useCallback, useRef, useEffect } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var HeaderSearch = ({
  mode = "form",
  action = "https://www.nhs.uk/search/",
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
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
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
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);
  const renderSearchIcon = () => /* @__PURE__ */ jsx2(
    "svg",
    {
      className: (0, import_classnames2.default)("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": isLoading
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx2("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  );
  const renderLoadingSpinner = () => /* @__PURE__ */ jsx2(
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
            /* @__PURE__ */ jsx2(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ jsx2(
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
    return /* @__PURE__ */ jsx2(
      "button",
      {
        type: "button",
        className: "nhsuk-header__search-clear",
        onClick: handleClear,
        "aria-label": "Clear search",
        children: /* @__PURE__ */ jsx2("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ jsx2("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
      }
    );
  };
  const renderResults = () => {
    if (!showResults || !results.length || !isFocused) return null;
    return /* @__PURE__ */ jsx2("div", { className: "nhsuk-header__search-results", role: "listbox", children: results.map((result) => /* @__PURE__ */ jsx2("div", { className: "nhsuk-header__search-result", role: "option", children: result.href ? /* @__PURE__ */ jsxs2("a", { href: result.href, className: "nhsuk-header__search-result-link", children: [
      /* @__PURE__ */ jsx2("span", { className: "nhsuk-header__search-result-title", children: result.title }),
      result.description && /* @__PURE__ */ jsx2("span", { className: "nhsuk-header__search-result-description", children: result.description })
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
          /* @__PURE__ */ jsx2("span", { className: "nhsuk-header__search-result-title", children: result.title }),
          result.description && /* @__PURE__ */ jsx2("span", { className: "nhsuk-header__search-result-description", children: result.description })
        ]
      }
    ) }, result.id)) });
  };
  return /* @__PURE__ */ jsxs2("search", { className: (0, import_classnames2.default)("nhsuk-header__search", className, {
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
        onSubmit: handleFormSubmit,
        ...formAttributes,
        children: [
          /* @__PURE__ */ jsx2(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: visuallyHiddenLabel
            }
          ),
          /* @__PURE__ */ jsxs2("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ jsx2(
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
                /* @__PURE__ */ jsx2("span", { className: "nhsuk-u-visually-hidden", children: isLoading ? "Searching..." : visuallyHiddenButton })
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
import { Fragment as Fragment2, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
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
  const [menuOpen, setMenuOpen] = useState2(false);
  const [showMoreButton, setShowMoreButton] = useState2(false);
  const [visibleItems, setVisibleItems] = useState2(((_a = navigation == null ? void 0 : navigation.items) == null ? void 0 : _a.length) || 0);
  const [isInitialized, setIsInitialized] = useState2(false);
  const [dropdownVisible, setDropdownVisible] = useState2(false);
  const [isClient, setIsClient] = useState2(false);
  const navigationRef = useRef2(null);
  const containerRef = useRef2(null);
  const overflowCheckRef = useRef2(false);
  const resizeTimeoutRef = useRef2(null);
  const navigationItemsRef = useRef2([]);
  const lastBreakpointRef = useRef2(null);
  useEffect2(() => {
    if (typeof window === "undefined") return;
    setIsClient(true);
    setIsInitialized(true);
  }, []);
  useEffect2(() => {
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
  const headerClasses = (0, import_classnames3.default)(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": variant === "organisation" || organisation,
      "nhsuk-header--white": variant === "white"
    },
    className
  );
  const containerClass = (0, import_classnames3.default)(
    "nhsuk-header__container",
    "nhsuk-width-container",
    containerClasses
  );
  const navigationClasses = (0, import_classnames3.default)(
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
  useEffect2(() => {
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
  useEffect2(() => {
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
  useEffect2(() => {
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
        /* @__PURE__ */ jsx3("title", { children: logo.ariaLabel || "NHS" }),
        /* @__PURE__ */ jsx3(
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
      return /* @__PURE__ */ jsx3(
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
      organisation.descriptor && /* @__PURE__ */ jsx3("span", { className: "nhsuk-header__organisation-name-descriptor", children: organisation.descriptor })
    ] });
  };
  const renderServiceName = (text, href) => {
    if (!text) return null;
    if (href) {
      return /* @__PURE__ */ jsx3("a", { className: "nhsuk-header__service-name", href, children: text });
    }
    return /* @__PURE__ */ jsx3("span", { className: "nhsuk-header__service-name", children: text });
  };
  const renderChevronIcon = () => /* @__PURE__ */ jsx3(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx3("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  const renderNavigationLinkContent = (item) => {
    if (item.active || item.current) {
      const content = item.html ? /* @__PURE__ */ jsx3("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
      return /* @__PURE__ */ jsx3("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: content });
    }
    return item.html ? /* @__PURE__ */ jsx3("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
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
          search && /* @__PURE__ */ jsx3(HeaderSearch, { ...search }),
          /* @__PURE__ */ jsx3(
            Account,
            {
              ...account,
              variant: variant === "white" ? "white" : "default"
            }
          )
        ] }),
        navigation && navigation.items && navigation.items.length > 0 && /* @__PURE__ */ jsx3(
          "nav",
          {
            className: navigationClasses,
            "aria-label": navigation.ariaLabel || "Menu",
            children: /* @__PURE__ */ jsx3(
              "div",
              {
                className: (0, import_classnames3.default)(
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
                  (!isClient ? navigation.items : navigation.items.slice(0, visibleItems)).map((item, index) => /* @__PURE__ */ jsx3(
                    "li",
                    {
                      className: (0, import_classnames3.default)(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": item.active || item.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !isClient && index >= 4
                          // Mark items that would be hidden on client
                        },
                        item.className
                      ),
                      ...item.attributes || {},
                      children: /* @__PURE__ */ jsx3(
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
                  isClient && showMoreButton && visibleItems < navigation.items.length && /* @__PURE__ */ jsx3(
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
                            /* @__PURE__ */ jsx3("span", { children: "More" }),
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
        isClient && navigation && navigation.items && navigation.items.length > 0 && menuOpen && dropdownVisible && /* @__PURE__ */ jsx3(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !dropdownVisible,
            children: /* @__PURE__ */ jsx3("ul", { className: "nhsuk-header__dropdown-list", children: navigation.items.slice(visibleItems).map((item, index) => /* @__PURE__ */ jsx3(
              "li",
              {
                className: (0, import_classnames3.default)(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": item.active || item.current
                  }
                ),
                children: /* @__PURE__ */ jsx3(
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

// src/components/Header/HeaderSSR.tsx
var import_classnames4 = __toESM(require_classnames(), 1);
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var HeaderSSR = ({
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
  const combineLogoAndServiceNameLinks = service.href && !logo.href || service.href && service.href === logo.href;
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;
  const headerClasses = (0, import_classnames4.default)(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
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
    navigation == null ? void 0 : navigation.className
  );
  const renderNHSLogo = () => /* @__PURE__ */ jsxs4(
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
    return /* @__PURE__ */ jsxs4(Fragment3, { children: [
      /* @__PURE__ */ jsxs4("span", { className: "nhsuk-header__organisation-name", children: [
        organisation.name,
        organisation.split && /* @__PURE__ */ jsxs4("span", { className: "nhsuk-header__organisation-name-split", children: [
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
  const renderNavigationItems = () => {
    if (!(navigation == null ? void 0 : navigation.items) || navigation.items.length === 0) return null;
    return navigation.items.map((item, index) => /* @__PURE__ */ jsx4(
      "li",
      {
        className: "nhsuk-header__navigation-item",
        "data-navigation-item": "true",
        children: /* @__PURE__ */ jsx4(
          "a",
          {
            className: "nhsuk-header__navigation-link",
            href: item.href,
            ...item.attributes || {},
            children: item.text
          }
        )
      },
      item.href || index
    ));
  };
  const renderSearch = () => {
    if (!search) return null;
    return /* @__PURE__ */ jsx4(HeaderSearch, { ...search });
  };
  return /* @__PURE__ */ jsxs4(
    "header",
    {
      className: headerClasses,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": ((_a = navigation == null ? void 0 : navigation.items) == null ? void 0 : _a.length) || 0,
      ...attributes,
      ...props,
      children: [
        /* @__PURE__ */ jsxs4("div", { className: containerClass, children: [
          /* @__PURE__ */ jsxs4("div", { className: "nhsuk-header__service", children: [
            logoHref ? /* @__PURE__ */ jsxs4("a", { className: "nhsuk-header__service-logo", href: logoHref, children: [
              renderServiceLogo(),
              renderOrganisationName(),
              combineLogoAndServiceNameLinks && renderServiceName(service.text)
            ] }) : /* @__PURE__ */ jsxs4(Fragment3, { children: [
              renderServiceLogo(),
              renderOrganisationName(),
              combineLogoAndServiceNameLinks && renderServiceName(service.text)
            ] }),
            service.text && !combineLogoAndServiceNameLinks && renderServiceName(service.text, service.href)
          ] }),
          (variant === "organisation" || organisation) && /* @__PURE__ */ jsxs4("div", { className: "nhsuk-header__content", id: "content-header", children: [
            organisation && /* @__PURE__ */ jsxs4("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ jsx4("span", { className: "nhsuk-header__organisation-name", children: organisation.name }),
              organisation.descriptor && /* @__PURE__ */ jsx4("span", { className: "nhsuk-header__organisation-descriptor", children: organisation.descriptor })
            ] }),
            renderSearch()
          ] }),
          variant !== "organisation" && !organisation && renderSearch(),
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
            id: "header-navigation",
            role: "navigation",
            "aria-label": navigation.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ jsx4("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ jsx4(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: renderNavigationItems()
              }
            ) })
          }
        )
      ]
    }
  );
};

// src/components/Header/HeaderStatic.tsx
var import_classnames5 = __toESM(require_classnames(), 1);
import { Fragment as Fragment4, jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var HeaderStatic = ({
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
  maxVisibleItems = 5,
  // New prop to control CSS-based overflow
  ...props
}) => {
  const combineLogoAndServiceNameLinks = service.href && !logo.href || service.href && service.href === logo.href;
  const logoHref = combineLogoAndServiceNameLinks ? service.href : logo.href;
  const headerClasses = (0, import_classnames5.default)(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": variant === "organisation" || organisation,
      "nhsuk-header--white": variant === "white"
    },
    className
  );
  const containerClass = (0, import_classnames5.default)(
    "nhsuk-header__container",
    "nhsuk-width-container",
    containerClasses
  );
  const navigationClasses = (0, import_classnames5.default)(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": navigation == null ? void 0 : navigation.white,
      "nhsuk-header__navigation--justified": navigation == null ? void 0 : navigation.justified
    },
    navigation == null ? void 0 : navigation.className
  );
  const renderNHSLogo = () => /* @__PURE__ */ jsxs5(
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
        /* @__PURE__ */ jsx5("title", { children: logo.ariaLabel || "NHS" }),
        /* @__PURE__ */ jsx5(
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
      return /* @__PURE__ */ jsx5(
        "img",
        {
          className: "nhsuk-header__logo",
          src: logo.src,
          alt: logo.ariaLabel || "",
          width: "100",
          height: "40"
        }
      );
    }
    return renderNHSLogo();
  };
  const renderOrganisationName = () => {
    if (!organisation) return null;
    return /* @__PURE__ */ jsxs5(Fragment4, { children: [
      /* @__PURE__ */ jsxs5("span", { className: "nhsuk-header__organisation-name", children: [
        organisation.name,
        organisation.split && /* @__PURE__ */ jsxs5("span", { className: "nhsuk-header__organisation-name-split", children: [
          " ",
          organisation.split
        ] })
      ] }),
      organisation.descriptor && /* @__PURE__ */ jsx5("span", { className: "nhsuk-header__organisation-name-descriptor", children: organisation.descriptor })
    ] });
  };
  const renderServiceName = (text, href) => {
    if (!text) return null;
    if (href) {
      return /* @__PURE__ */ jsx5("a", { className: "nhsuk-header__service-name", href, children: text });
    }
    return /* @__PURE__ */ jsx5("span", { className: "nhsuk-header__service-name", children: text });
  };
  const renderNavigationLinkContent = (item) => {
    if (item.active || item.current) {
      const content = item.html ? /* @__PURE__ */ jsx5("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
      return /* @__PURE__ */ jsx5("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: content });
    }
    return item.html ? /* @__PURE__ */ jsx5("span", { dangerouslySetInnerHTML: { __html: item.html } }) : item.text;
  };
  return /* @__PURE__ */ jsxs5(
    "header",
    {
      className: headerClasses,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...attributes,
      ...props,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: containerClass, children: [
          /* @__PURE__ */ jsxs5("div", { className: "nhsuk-header__service", children: [
            logoHref ? /* @__PURE__ */ jsxs5("a", { className: "nhsuk-header__service-logo", href: logoHref, children: [
              renderServiceLogo(),
              renderOrganisationName(),
              combineLogoAndServiceNameLinks && renderServiceName(service.text)
            ] }) : /* @__PURE__ */ jsxs5(Fragment4, { children: [
              renderServiceLogo(),
              renderOrganisationName(),
              combineLogoAndServiceNameLinks && renderServiceName(service.text)
            ] }),
            service.text && !combineLogoAndServiceNameLinks && renderServiceName(service.text, service.href)
          ] }),
          /* @__PURE__ */ jsx5(
            Account,
            {
              ...account,
              variant: variant === "white" ? "white" : "default"
            }
          )
        ] }),
        navigation && navigation.items && navigation.items.length > 0 && /* @__PURE__ */ jsx5(
          "nav",
          {
            className: navigationClasses,
            "aria-label": navigation.ariaLabel || "Menu",
            children: /* @__PURE__ */ jsx5(
              "div",
              {
                className: (0, import_classnames5.default)(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  containerClasses
                ),
                children: /* @__PURE__ */ jsxs5("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  navigation.items.slice(0, maxVisibleItems).map((item, index) => /* @__PURE__ */ jsx5(
                    "li",
                    {
                      className: (0, import_classnames5.default)(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": item.active || item.current
                        },
                        item.className
                      ),
                      ...item.attributes || {},
                      children: /* @__PURE__ */ jsx5(
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
                  navigation.items.length > maxVisibleItems && /* @__PURE__ */ jsx5("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ jsxs5("details", { className: "nhsuk-header__navigation-details", children: [
                    /* @__PURE__ */ jsxs5("summary", { className: "nhsuk-header__navigation-summary", children: [
                      /* @__PURE__ */ jsx5("span", { children: "More" }),
                      /* @__PURE__ */ jsx5(
                        "svg",
                        {
                          className: "nhsuk-icon nhsuk-icon__chevron-down",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ jsx5("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx5("ul", { className: "nhsuk-header__navigation-dropdown", children: navigation.items.slice(maxVisibleItems).map((item, index) => /* @__PURE__ */ jsx5(
                      "li",
                      {
                        className: (0, import_classnames5.default)(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": item.active || item.current
                          }
                        ),
                        children: /* @__PURE__ */ jsx5(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: item.href,
                            ...item.active || item.current ? {
                              "aria-current": item.current ? "page" : "true"
                            } : {},
                            children: renderNavigationLinkContent(item)
                          }
                        )
                      },
                      `overflow-${maxVisibleItems + index}`
                    )) })
                  ] }) })
                ] })
              }
            )
          }
        )
      ]
    }
  );
};
export {
  Header,
  HeaderSSR,
  HeaderStatic
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
