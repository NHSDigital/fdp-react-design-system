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
      function classNames4() {
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
          return classNames4.apply(null, arg);
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
        classNames4.default = classNames4;
        module.exports = classNames4;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames4;
        });
      } else {
        window.classNames = classNames4;
      }
    })();
  }
});

// src/components/ResponsiveDataGrid/ResponsiveDataGrid.tsx
import { useState as useState3, useEffect as useEffect2, useCallback as useCallback4, useRef as useRef3, useReducer as useReducer2, useMemo as useMemo3 } from "react";

// src/components/SortableDataTable/AriaTabsDataGrid.tsx
import React3, {
  useReducer,
  useCallback as useCallback3,
  useMemo as useMemo2,
  useRef as useRef2,
  useImperativeHandle,
  forwardRef as forwardRef2,
  useEffect,
  useState as useState2
} from "react";

// src/components/SortableDataTable/SortStatusControl/SortStatusControl.tsx
import { useCallback as useCallback2, useMemo, useRef } from "react";

// src/components/Button/Button.tsx
import * as React from "react";
import { jsx } from "react/jsx-runtime";
var { forwardRef, useCallback, useState } = React;
function ButtonComponent(props, ref) {
  const {
    children,
    variant = "primary",
    size = "default",
    fullWidth = false,
    className = "",
    preventDoubleClick = false,
    ...rest
  } = props;
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const classes = [
    "nhs-aria-button",
    `nhs-aria-button--${variant}`,
    size !== "default" ? `nhs-aria-button--${size}` : "",
    fullWidth ? "nhs-aria-button--full-width" : "",
    className
  ].filter(Boolean).join(" ");
  const isDisabled = "disabled" in rest ? rest.disabled : rest["aria-disabled"] === "true";
  const dataAttributes = {
    ...isPressed && { "data-pressed": "true" },
    ...isHovered && { "data-hovered": "true" },
    ...isFocused && { "data-focused": "true" },
    ...isDisabled && { "data-disabled": "true" }
  };
  const handleMouseDown = useCallback(() => !isDisabled && setIsPressed(true), [isDisabled]);
  const handleMouseUp = useCallback(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback(() => !isDisabled && setIsHovered(true), [isDisabled]);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);
  const handleKeyDown = useCallback((event) => {
    if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
      event.preventDefault();
      event.currentTarget.click();
    }
  }, [rest]);
  const handleClick = useCallback((event) => {
    if (preventDoubleClick) {
      const target = event.currentTarget;
      const isAlreadyProcessing = target.getAttribute("data-processing") === "true";
      if (isAlreadyProcessing) {
        event.preventDefault();
        return;
      }
      target.setAttribute("data-processing", "true");
      setTimeout(() => {
        target.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [preventDoubleClick]);
  if ("href" in rest && rest.href) {
    const { id: id2, style: style2, title: title2, ["aria-label"]: ariaLabel2, ["aria-describedby"]: ariaDescribedBy2, ["aria-labelledby"]: ariaLabelledBy2, tabIndex: tabIndex2, ...anchorRest } = rest;
    const anchorProps = rest;
    return /* @__PURE__ */ jsx(
      "a",
      {
        ref,
        href: anchorProps.href,
        target: anchorProps.target,
        rel: anchorProps.rel,
        className: classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...dataAttributes,
        ...preventDoubleClick && { "data-prevent-double-click": "true" },
        ...anchorRest,
        onKeyDown: (event) => {
          var _a;
          (_a = anchorProps.onKeyDown) == null ? void 0 : _a.call(anchorProps, event);
          handleKeyDown(event);
        },
        onClick: (event) => {
          var _a;
          (_a = anchorProps.onClick) == null ? void 0 : _a.call(anchorProps, event);
          handleClick(event);
        },
        onMouseDown: (event) => {
          var _a;
          (_a = anchorProps.onMouseDown) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseDown();
        },
        onMouseUp: (event) => {
          var _a;
          (_a = anchorProps.onMouseUp) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseUp();
        },
        onMouseEnter: (event) => {
          var _a;
          (_a = anchorProps.onMouseEnter) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseEnter();
        },
        onMouseLeave: (event) => {
          var _a;
          (_a = anchorProps.onMouseLeave) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseLeave();
        },
        onFocus: (event) => {
          var _a;
          (_a = anchorProps.onFocus) == null ? void 0 : _a.call(anchorProps, event);
          handleFocus();
        },
        onBlur: (event) => {
          var _a;
          (_a = anchorProps.onBlur) == null ? void 0 : _a.call(anchorProps, event);
          handleBlur();
        },
        "aria-disabled": anchorProps["aria-disabled"],
        ...anchorProps["aria-disabled"] === "true" && { "tabIndex": -1 },
        id: id2,
        style: style2,
        title: title2,
        "aria-label": ariaLabel2,
        "aria-describedby": ariaDescribedBy2,
        "aria-labelledby": ariaLabelledBy2,
        tabIndex: tabIndex2,
        children
      }
    );
  }
  const { id, style, title, ["aria-label"]: ariaLabel, ["aria-describedby"]: ariaDescribedBy, ["aria-labelledby"]: ariaLabelledBy, tabIndex, name, value: valueProp, form, formAction, formEncType, formMethod, formNoValidate, formTarget, autoFocus, ...buttonRest } = rest;
  const buttonProps = rest;
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: buttonProps.type || "button",
      disabled: buttonProps.disabled,
      className: classes,
      "data-module": "nhs-button",
      ...dataAttributes,
      ...preventDoubleClick && { "data-prevent-double-click": "true" },
      ...buttonProps.disabled && { "aria-disabled": "true" },
      ...buttonRest,
      onKeyDown: (event) => {
        var _a;
        (_a = buttonProps.onKeyDown) == null ? void 0 : _a.call(buttonProps, event);
        handleKeyDown(event);
      },
      onClick: (event) => {
        var _a;
        (_a = buttonProps.onClick) == null ? void 0 : _a.call(buttonProps, event);
        handleClick(event);
      },
      onMouseDown: (event) => {
        var _a;
        (_a = buttonProps.onMouseDown) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseDown();
      },
      onMouseUp: (event) => {
        var _a;
        (_a = buttonProps.onMouseUp) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseUp();
      },
      onMouseEnter: (event) => {
        var _a;
        (_a = buttonProps.onMouseEnter) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseEnter();
      },
      onMouseLeave: (event) => {
        var _a;
        (_a = buttonProps.onMouseLeave) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseLeave();
      },
      onFocus: (event) => {
        var _a;
        (_a = buttonProps.onFocus) == null ? void 0 : _a.call(buttonProps, event);
        handleFocus();
      },
      onBlur: (event) => {
        var _a;
        (_a = buttonProps.onBlur) == null ? void 0 : _a.call(buttonProps, event);
        handleBlur();
      },
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
      children
    }
  );
}
var Button = forwardRef(ButtonComponent);
Button.displayName = "Button";
var Button_default = Button;

// src/components/Tag/Tag.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
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
    children ? children : html ? /* @__PURE__ */ jsx2("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx2(
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

// src/components/SortableDataTable/SortStatusControl/SortStatusControl.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var SortStatusControl = ({
  sortConfig,
  columns,
  onSortChange,
  className = "",
  emptyDescription = "No sorting applied",
  activeDescription,
  showReset = true,
  showHelp = true,
  disabled = false,
  ariaLabel = "Sort configuration",
  ariaDescribedBy
}) => {
  const containerRef = useRef(null);
  const draggedItem = useRef(null);
  const draggedOverItem = useRef(null);
  const handleDragStart = useCallback2((e, key) => {
    if (disabled) return;
    draggedItem.current = key;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", key);
  }, [disabled]);
  const handleDragOver = useCallback2((e, key) => {
    if (disabled || draggedItem.current === key) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    draggedOverItem.current = key;
  }, [disabled]);
  const handleDrop = useCallback2((e, targetKey) => {
    if (disabled) return;
    e.preventDefault();
    const sourceKey = draggedItem.current;
    if (!sourceKey || sourceKey === targetKey) return;
    const sourceIndex = sortConfig.findIndex((config) => config.key === sourceKey);
    const targetIndex = sortConfig.findIndex((config) => config.key === targetKey);
    if (sourceIndex !== -1 && targetIndex !== -1) {
      const newConfig = [...sortConfig];
      const [draggedConfig] = newConfig.splice(sourceIndex, 1);
      newConfig.splice(targetIndex, 0, draggedConfig);
      onSortChange(newConfig);
    }
    draggedItem.current = null;
    draggedOverItem.current = null;
  }, [disabled, sortConfig, onSortChange]);
  const handleDragEnd = useCallback2(() => {
    draggedItem.current = null;
    draggedOverItem.current = null;
  }, []);
  const getColumnLabel = useCallback2((key) => {
    const column = columns.find((col) => col.key === key);
    return column ? column.label : key;
  }, [columns]);
  const getPriorityColor = useCallback2((index) => {
    const colorMap = ["red", "orange", "blue", "aqua-green", "grey"];
    return colorMap[index] || "grey";
  }, []);
  const handleDirectionToggle = useCallback2((sortKey) => {
    if (disabled) return;
    const updatedConfig = sortConfig.map(
      (config) => config.key === sortKey ? { ...config, direction: config.direction === "asc" ? "desc" : "asc" } : config
    );
    onSortChange(updatedConfig);
  }, [sortConfig, onSortChange, disabled]);
  const handleRemove = useCallback2((sortKey) => {
    if (disabled) return;
    const filteredConfig = sortConfig.filter((config) => config.key !== sortKey);
    onSortChange(filteredConfig);
  }, [sortConfig, onSortChange, disabled]);
  const handleReset = useCallback2(() => {
    if (disabled) return;
    onSortChange([]);
  }, [onSortChange, disabled]);
  const getSortDescription = () => {
    if (sortConfig.length === 0) {
      return emptyDescription;
    }
    if (activeDescription) {
      return activeDescription;
    }
    const sortDescriptions = sortConfig.map((sort, index) => {
      const direction = sort.direction === "asc" ? "ascending" : "descending";
      return `${index + 1}. ${getColumnLabel(sort.key)} (${direction})`;
    });
    if (sortDescriptions.length === 1) {
      return `Sorted by: ${sortDescriptions[0]}`;
    } else if (sortDescriptions.length === 2) {
      return `Sorted by: ${sortDescriptions.join(" and ")}`;
    } else {
      const lastItem = sortDescriptions.pop();
      return `Sorted by: ${sortDescriptions.join(", ")}, and ${lastItem}`;
    }
  };
  const describedBy = useMemo(() => {
    const ids = ["sort-description"];
    if (showHelp) ids.push("sort-help");
    if (ariaDescribedBy) ids.push(ariaDescribedBy);
    return ids.join(" ");
  }, [showHelp, ariaDescribedBy]);
  if (sortConfig.length === 0) {
    return /* @__PURE__ */ jsxs2("div", { className: `sort-status-control ${className}`, children: [
      /* @__PURE__ */ jsx3(
        "div",
        {
          className: "sort-status-control__description",
          id: "sort-description",
          "aria-live": "polite",
          children: emptyDescription
        }
      ),
      showHelp && /* @__PURE__ */ jsx3("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ jsx3("small", { children: "Drag tags to reorder priority. Click tags or \u2191/\u2193 buttons to toggle ascending/descending. Click \xD7 to remove a sort." }) })
    ] });
  }
  return /* @__PURE__ */ jsxs2("div", { className: `sort-status-control ${className}`, children: [
    /* @__PURE__ */ jsx3(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: getSortDescription()
      }
    ),
    /* @__PURE__ */ jsxs2("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ jsx3(
        "div",
        {
          ref: containerRef,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": ariaLabel,
          "aria-describedby": describedBy,
          children: sortConfig.map((config, index) => /* @__PURE__ */ jsx3(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !disabled,
              onDragStart: (e) => handleDragStart(e, config.key),
              onDragOver: (e) => handleDragOver(e, config.key),
              onDrop: (e) => handleDrop(e, config.key),
              onDragEnd: handleDragEnd,
              onClick: () => handleDirectionToggle(config.key),
              style: { cursor: disabled ? "default" : "pointer" },
              title: disabled ? "" : `Click to toggle sort direction. Currently ${config.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": config.key,
              children: /* @__PURE__ */ jsx3(
                Tag,
                {
                  color: getPriorityColor(index),
                  className: "sort-status-control__tag",
                  closable: true,
                  onClose: () => handleRemove(config.key),
                  disabled,
                  children: /* @__PURE__ */ jsxs2("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ jsx3("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "\u22EE\u22EE" }),
                    /* @__PURE__ */ jsx3("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${index + 1}`, children: index + 1 }),
                    /* @__PURE__ */ jsx3("span", { className: "sort-status-control__tag-label", children: getColumnLabel(config.key) }),
                    /* @__PURE__ */ jsx3(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (e) => {
                          e.stopPropagation();
                          handleDirectionToggle(config.key);
                        },
                        disabled,
                        "aria-label": `Toggle sort direction for ${getColumnLabel(config.key)}. Currently ${config.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ jsx3("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${config.direction}`, children: /* @__PURE__ */ jsx3(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${config.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ jsx3("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                          }
                        ) })
                      }
                    )
                  ] })
                }
              )
            },
            config.key
          ))
        }
      ),
      showReset && /* @__PURE__ */ jsx3("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ jsx3(
        Button,
        {
          variant: "secondary",
          onClick: handleReset,
          disabled,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    showHelp && /* @__PURE__ */ jsx3("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ jsx3("small", { children: "Drag tags to reorder priority. Click tags or \u2191/\u2193 buttons to toggle ascending/descending. Click \xD7 to remove a sort." }) })
  ] });
};

// src/components/SortableDataTable/AriaTabsDataGrid.tsx
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function tabsDataGridReducer(state, action) {
  switch (action.type) {
    case "SET_SELECTED_INDEX":
      return { ...state, selectedIndex: action.payload };
    case "SET_TAB_LOADING":
      const newLoadingStates = [...state.tabLoadingStates];
      newLoadingStates[action.payload.tabIndex] = action.payload.isLoading;
      return { ...state, tabLoadingStates: newLoadingStates };
    case "SET_TAB_ERROR":
      const newErrors = [...state.tabErrors];
      newErrors[action.payload.tabIndex] = action.payload.error;
      return { ...state, tabErrors: newErrors };
    case "SET_SORT":
      return { ...state, sortConfig: action.payload };
    case "SET_SELECTED_ROWS":
      const newSelectedRows = [...state.selectedRows];
      newSelectedRows[action.payload.tabIndex] = action.payload.rowIndices;
      return { ...state, selectedRows: newSelectedRows };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...state, globalSelectedRowData: action.payload };
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    case "ADJUST_ARRAYS":
      const { newLength } = action.payload;
      const adjustedLoadingStates = new Array(newLength).fill(false);
      const adjustedErrors = new Array(newLength).fill(null);
      const adjustedSelectedRows = new Array(newLength).fill([]);
      for (let i = 0; i < Math.min(state.tabLoadingStates.length, newLength); i++) {
        adjustedLoadingStates[i] = state.tabLoadingStates[i];
        adjustedErrors[i] = state.tabErrors[i];
        adjustedSelectedRows[i] = state.selectedRows[i];
      }
      return {
        ...state,
        tabLoadingStates: adjustedLoadingStates,
        tabErrors: adjustedErrors,
        selectedRows: adjustedSelectedRows
      };
    case "RESET_STATE":
      return {
        selectedIndex: 0,
        tabLoadingStates: new Array(state.tabLoadingStates.length).fill(false),
        tabErrors: new Array(state.tabErrors.length).fill(null),
        sortConfig: [],
        selectedRows: new Array(state.selectedRows.length).fill([]),
        globalSelectedRowData: null,
        filters: void 0
      };
    default:
      return state;
  }
}
var AriaTabsDataGrid = forwardRef2(function AriaTabsDataGrid2(props, ref) {
  const {
    dataConfig = {},
    tabPanels,
    selectedIndex: selectedIndexProp,
    onTabChange,
    onGlobalRowSelectionChange,
    ariaLabel,
    ariaDescription,
    className = "",
    disabled = false,
    orientation = "horizontal",
    id,
    isLoading = false,
    loadingComponent,
    error = null,
    errorComponent,
    "data-testid": dataTestId,
    actions,
    actionsMinGap = 16,
    forceActionsAbove = false
  } = props;
  const baseIdRef = useRef2(
    id || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  );
  const baseId = baseIdRef.current;
  const descriptionLooksLikeId = typeof ariaDescription === "string" && ariaDescription.trim() !== "" && !/\s/.test(ariaDescription);
  const generatedDescriptionId = `${baseId}-description`;
  const navigationHelpId = `${baseId}-navigation-help`;
  const {
    dataComparator = (a, b) => JSON.stringify(a) === JSON.stringify(b),
    filterFunction = (data) => data,
    booleanRenderer = (value) => value ? "\u2713" : "\u2717"
  } = dataConfig || {};
  const isControlled = selectedIndexProp !== void 0;
  const selectedIndex = selectedIndexProp != null ? selectedIndexProp : 0;
  const [navigationState, setNavigationState] = useState2({
    focusArea: "tabs",
    focusedTabIndex: selectedIndex,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: false
  });
  const initialState = useMemo2(() => {
    return {
      selectedIndex,
      tabLoadingStates: new Array(tabPanels.length).fill(false),
      tabErrors: new Array(tabPanels.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(tabPanels.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    };
  }, [selectedIndex]);
  const [state, dispatch] = useReducer(tabsDataGridReducer, initialState);
  useEffect(() => {
    const currentLength = state.tabLoadingStates.length;
    const newLength = tabPanels.length;
    if (currentLength !== newLength) {
      dispatch({ type: "ADJUST_ARRAYS", payload: { newLength } });
    }
  }, [tabPanels.length]);
  useEffect(() => {
    if (isControlled) {
      dispatch({ type: "SET_SELECTED_INDEX", payload: selectedIndex });
    }
  }, [selectedIndex, isControlled]);
  useEffect(() => {
    setNavigationState((prev) => ({
      ...prev,
      focusArea: "tabs",
      focusedTabIndex: state.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: false
    }));
  }, [state.selectedIndex]);
  useEffect(() => {
    if (onGlobalRowSelectionChange) {
      onGlobalRowSelectionChange(state.globalSelectedRowData);
    }
  }, [state.globalSelectedRowData, onGlobalRowSelectionChange]);
  const isDataEqual = useCallback3(
    (data1, data2) => {
      return dataComparator(data1, data2);
    },
    [dataComparator]
  );
  const handleTabSelect = useCallback3(
    (index) => {
      if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
        dispatch({ type: "SET_SELECTED_INDEX", payload: index });
        setNavigationState((prev) => ({
          ...prev,
          focusedTabIndex: index,
          focusArea: "tabs"
        }));
        onTabChange == null ? void 0 : onTabChange(index);
      }
    },
    [tabPanels, onTabChange]
  );
  const initialScrollDoneRef = useRef2(false);
  const scrollTabIntoView = useCallback3(
    (tabIndex, opts) => {
      if (!(opts == null ? void 0 : opts.force) && !initialScrollDoneRef.current && tabIndex === 0) {
        initialScrollDoneRef.current = true;
        return;
      }
      initialScrollDoneRef.current = true;
      setTimeout(() => {
        const tabElement = tabRefs.current[tabIndex];
        const tabListElement = tabElement == null ? void 0 : tabElement.parentElement;
        if (tabElement && tabListElement) {
          const tabOffsetLeft = tabElement.offsetLeft;
          const tabWidth = tabElement.offsetWidth;
          const tabListWidth = tabListElement.clientWidth;
          const targetScrollLeft = tabOffsetLeft - tabListWidth / 2 + tabWidth / 2;
          try {
            tabListElement.scrollTo({
              left: Math.max(0, targetScrollLeft),
              behavior: "smooth"
            });
          } catch {
            tabElement.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else if (!process.env.SILENCE_SCROLL_DEBUG) {
          console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
            tabElementExists: !!tabElement,
            tabListElementExists: !!tabListElement
          });
        }
      }, 50);
    },
    []
  );
  const tabRefs = useRef2([]);
  const panelRefs = useRef2([]);
  const handleSort = useCallback3(
    (tabIndex, key) => {
      var _a;
      const currentSort = state.sortConfig || [];
      const existingSort = currentSort.find(
        (sort) => sort.key === key
      );
      let newSortConfig;
      if (existingSort) {
        if (existingSort.direction === "asc") {
          newSortConfig = currentSort.map(
            (sort) => sort.key === key ? { ...sort, direction: "desc" } : sort
          );
        } else {
          newSortConfig = currentSort.filter(
            (sort) => sort.key !== key
          );
        }
      } else {
        newSortConfig = [...currentSort, { key, direction: "asc" }];
      }
      dispatch({
        type: "SET_SORT",
        payload: newSortConfig
      });
      const panel = tabPanels[tabIndex];
      (_a = panel.onSort) == null ? void 0 : _a.call(panel, key);
    },
    [state.sortConfig, tabPanels]
  );
  const focusGridHeader = useCallback3(
    (headerIndex) => {
      setTimeout(() => {
        const headerElement = document.querySelector(
          `[data-tab-panel="${state.selectedIndex}"] th:nth-child(${headerIndex + 1})`
        );
        if (headerElement) {
          headerElement.focus();
        }
      }, 0);
    },
    [state.selectedIndex]
  );
  const renderBooleanIcon = useCallback3(
    (value) => {
      return booleanRenderer(value);
    },
    [booleanRenderer]
  );
  const focusGridCell = useCallback3(
    (rowIndex, colIndex) => {
      setTimeout(() => {
        const cellElement = document.querySelector(
          `[data-tab-panel="${state.selectedIndex}"] tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
        );
        if (cellElement) {
          cellElement.focus();
        }
      }, 0);
    },
    [state.selectedIndex]
  );
  useEffect(() => {
    if (navigationState.isGridActive) {
      if (navigationState.focusArea === "headers") {
        setTimeout(() => {
          focusGridHeader(navigationState.focusedHeaderIndex);
        }, 0);
      } else if (navigationState.focusArea === "cells") {
        setTimeout(() => {
          focusGridCell(
            navigationState.focusedRowIndex,
            navigationState.focusedColumnIndex
          );
        }, 0);
      }
    }
  }, [
    navigationState.focusArea,
    navigationState.isGridActive,
    navigationState.focusedHeaderIndex,
    navigationState.focusedRowIndex,
    navigationState.focusedColumnIndex,
    focusGridHeader,
    focusGridCell
  ]);
  useEffect(() => {
    scrollTabIntoView(state.selectedIndex);
  }, [state.selectedIndex, scrollTabIntoView]);
  const handleHeaderKeyDown = useCallback3(
    (event, headerIndex) => {
      var _a, _b;
      const { key } = event;
      const currentPanel = tabPanels[state.selectedIndex];
      const columnCount = (currentPanel == null ? void 0 : currentPanel.columns.length) || 0;
      switch (key) {
        case "ArrowLeft":
          event.preventDefault();
          const prevHeaderIndex = Math.max(0, headerIndex - 1);
          setNavigationState((prev) => ({
            ...prev,
            focusedHeaderIndex: prevHeaderIndex
          }));
          focusGridHeader(prevHeaderIndex);
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextHeaderIndex = Math.min(columnCount - 1, headerIndex + 1);
          setNavigationState((prev) => ({
            ...prev,
            focusedHeaderIndex: nextHeaderIndex
          }));
          focusGridHeader(nextHeaderIndex);
          break;
        case "ArrowUp":
          event.preventDefault();
          setNavigationState((prev) => ({
            ...prev,
            focusArea: "tabs",
            focusedTabIndex: state.selectedIndex
          }));
          scrollTabIntoView(state.selectedIndex);
          (_a = tabRefs.current[state.selectedIndex]) == null ? void 0 : _a.focus();
          break;
        case "ArrowDown":
          event.preventDefault();
          setNavigationState((prev) => ({
            ...prev,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: headerIndex,
            isGridActive: true
          }));
          break;
        case "Home":
          event.preventDefault();
          setNavigationState((prev) => ({ ...prev, focusedHeaderIndex: 0 }));
          focusGridHeader(0);
          break;
        case "End":
          event.preventDefault();
          const lastHeaderIndex = columnCount - 1;
          setNavigationState((prev) => ({
            ...prev,
            focusedHeaderIndex: lastHeaderIndex
          }));
          focusGridHeader(lastHeaderIndex);
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          const columnKey = (_b = currentPanel == null ? void 0 : currentPanel.columns[headerIndex]) == null ? void 0 : _b.key;
          if (columnKey) {
            handleSort(state.selectedIndex, columnKey);
          }
          break;
      }
    },
    [
      tabPanels,
      state.selectedIndex,
      handleSort,
      setNavigationState,
      focusGridHeader,
      focusGridCell,
      tabRefs
    ]
  );
  const handleCellKeyDown = useCallback3(
    (event, rowIndex, colIndex) => {
      const { key } = event;
      const currentPanel = tabPanels[state.selectedIndex];
      const rowCount = (currentPanel == null ? void 0 : currentPanel.data.length) || 0;
      const columnCount = (currentPanel == null ? void 0 : currentPanel.columns.length) || 0;
      switch (key) {
        case "ArrowUp":
          event.preventDefault();
          if (rowIndex === 0) {
            setNavigationState((prev) => ({
              ...prev,
              focusArea: "headers",
              focusedHeaderIndex: colIndex,
              isGridActive: false
            }));
            focusGridHeader(colIndex);
          } else {
            const newRowIndex2 = rowIndex - 1;
            setNavigationState((prev) => ({
              ...prev,
              focusedRowIndex: newRowIndex2
            }));
            focusGridCell(newRowIndex2, colIndex);
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          const newRowIndex = Math.min(rowCount - 1, rowIndex + 1);
          setNavigationState((prev) => ({
            ...prev,
            focusedRowIndex: newRowIndex
          }));
          focusGridCell(newRowIndex, colIndex);
          break;
        case "ArrowLeft":
          event.preventDefault();
          const newColIndex = Math.max(0, colIndex - 1);
          setNavigationState((prev) => ({
            ...prev,
            focusedColumnIndex: newColIndex
          }));
          focusGridCell(rowIndex, newColIndex);
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextColIndex = Math.min(columnCount - 1, colIndex + 1);
          setNavigationState((prev) => ({
            ...prev,
            focusedColumnIndex: nextColIndex
          }));
          focusGridCell(rowIndex, nextColIndex);
          break;
        case "Home":
          event.preventDefault();
          if (event.ctrlKey) {
            setNavigationState((prev) => ({
              ...prev,
              focusedRowIndex: 0,
              focusedColumnIndex: 0
            }));
            focusGridCell(0, 0);
          } else {
            setNavigationState((prev) => ({ ...prev, focusedColumnIndex: 0 }));
            focusGridCell(rowIndex, 0);
          }
          break;
        case "End":
          event.preventDefault();
          if (event.ctrlKey) {
            const lastRow = rowCount - 1;
            const lastCol = columnCount - 1;
            setNavigationState((prev) => ({
              ...prev,
              focusedRowIndex: lastRow,
              focusedColumnIndex: lastCol
            }));
            focusGridCell(lastRow, lastCol);
          } else {
            const lastCol = columnCount - 1;
            setNavigationState((prev) => ({
              ...prev,
              focusedColumnIndex: lastCol
            }));
            focusGridCell(rowIndex, lastCol);
          }
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (currentPanel && currentPanel.data[rowIndex]) {
            const displayData = currentPanel.data.some(
              (item) => "ews_data" in item
            ) ? filterFunction(currentPanel.data, state.filters) : currentPanel.data;
            const sortConfig = state.sortConfig;
            let sortedData = displayData;
            if (sortConfig && sortConfig.length > 0) {
              sortedData = [...displayData].sort((a, b) => {
                for (const { key: key2, direction } of sortConfig) {
                  let aValue = a[key2];
                  let bValue = b[key2];
                  const column = currentPanel.columns.find(
                    (col) => col.key === key2
                  );
                  if (column == null ? void 0 : column.tableRenderer) {
                    aValue = column.tableRenderer(a);
                    bValue = column.tableRenderer(b);
                  } else if (column == null ? void 0 : column.render) {
                    aValue = column.render(a);
                    bValue = column.render(b);
                  }
                  if (aValue == null && bValue == null) continue;
                  if (aValue == null) return direction === "asc" ? -1 : 1;
                  if (bValue == null) return direction === "asc" ? 1 : -1;
                  let result = 0;
                  if (typeof aValue === "number" && typeof bValue === "number") {
                    result = aValue - bValue;
                  } else {
                    result = String(aValue).localeCompare(
                      String(bValue),
                      void 0,
                      { numeric: true, sensitivity: "base" }
                    );
                  }
                  if (result !== 0) {
                    return direction === "asc" ? result : -result;
                  }
                }
                return 0;
              });
            }
            if (sortedData[rowIndex]) {
              const row = sortedData[rowIndex];
              const isCurrentlySelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
              const newSelectedRowData = isCurrentlySelected ? null : row;
              dispatch({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: newSelectedRowData
              });
            }
          }
          break;
      }
    },
    [
      tabPanels,
      state.selectedIndex,
      state.filters,
      state.sortConfig,
      filterFunction,
      isDataEqual,
      dispatch,
      setNavigationState,
      focusGridHeader,
      focusGridCell
    ]
  );
  const getFilteredData = useCallback3(
    (data, filters) => {
      return filterFunction(data, filters);
    },
    [filterFunction]
  );
  useImperativeHandle(
    ref,
    () => ({
      selectTab: (index) => {
        if (index >= 0 && index < tabPanels.length) {
          dispatch({ type: "SET_SELECTED_INDEX", payload: index });
          onTabChange == null ? void 0 : onTabChange(index);
        }
      },
      refreshData: (tabIndex) => {
        console.log("Refreshing data for tab:", tabIndex != null ? tabIndex : "all");
      },
      exportData: (tabIndex) => {
        const targetIndex = tabIndex != null ? tabIndex : state.selectedIndex;
        const panel = tabPanels[targetIndex];
        return panel ? panel.data : [];
      },
      getSelectedRows: (_tabIndex) => {
        const selectedRows = state.globalSelectedRowData ? [] : [];
        return selectedRows;
      },
      clearSelection: (_tabIndex) => {
        dispatch({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (filters) => {
        dispatch({ type: "SET_FILTERS", payload: filters });
      }
    }),
    [state.selectedIndex, state.selectedRows, tabPanels, onTabChange]
  );
  if (isLoading) {
    return /* @__PURE__ */ jsx4(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${className}`,
        "data-testid": dataTestId,
        children: loadingComponent || /* @__PURE__ */ jsx4("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ jsx4(
          "div",
          {
            className: "nhsuk-spinner",
            role: "status",
            "aria-label": "Loading data",
            children: /* @__PURE__ */ jsx4("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." })
          }
        ) })
      }
    );
  }
  if (error) {
    return /* @__PURE__ */ jsx4(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${className}`,
        "data-testid": dataTestId,
        children: errorComponent || /* @__PURE__ */ jsxs3("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ jsx4("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ jsx4("p", { children: error })
        ] })
      }
    );
  }
  const containerRef = useRef2(null);
  const tabListRef = useRef2(null);
  const actionsRef = useRef2(null);
  const [placeActionsInline, setPlaceActionsInline] = useState2(true);
  useEffect(() => {
    if (!actions) {
      setPlaceActionsInline(false);
      return;
    }
    if (forceActionsAbove) {
      setPlaceActionsInline(false);
      return;
    }
    function recompute() {
      if (!containerRef.current || !tabListRef.current || !actionsRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const tabButtons = Array.from(
        tabListRef.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      );
      const tabsWidth = tabButtons.reduce((w, el) => w + el.offsetWidth, 0);
      const actionsWidth = actionsRef.current.offsetWidth;
      const estimatedGaps = Math.max(8 * (tabButtons.length - 1), 0);
      const fits = tabsWidth + estimatedGaps + actionsWidth + actionsMinGap <= containerWidth;
      setPlaceActionsInline(fits);
    }
    const raf = requestAnimationFrame(() => recompute());
    const ro = new ResizeObserver(() => recompute());
    if (containerRef.current) ro.observe(containerRef.current);
    if (tabListRef.current) ro.observe(tabListRef.current);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [actions, actionsMinGap, forceActionsAbove, tabPanels.length]);
  const actionsContainerRef = actionsRef;
  const getActionElements = useCallback3(() => {
    if (!actionsContainerRef.current) return [];
    return Array.from(
      actionsContainerRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute("disabled"));
  }, []);
  const focusAction = useCallback3(
    (idx) => {
      const els = getActionElements();
      if (!els.length) return;
      const clamped = Math.max(0, Math.min(idx, els.length - 1));
      els[clamped].focus();
      setNavigationState((prev) => ({ ...prev, focusArea: "actions", focusedActionIndex: clamped }));
    },
    [getActionElements]
  );
  const focusFirstAction = useCallback3(() => focusAction(0), [focusAction]);
  const handleTabKeyDown = useCallback3(
    (event, index) => {
      var _a, _b, _c, _d;
      const { key } = event;
      const lastTab = tabPanels.length - 1;
      switch (key) {
        case "ArrowUp": {
          if (actions && !placeActionsInline) {
            event.preventDefault();
            focusFirstAction();
          }
          break;
        }
        case "ArrowLeft": {
          event.preventDefault();
          const prevIdx = index > 0 ? index - 1 : lastTab;
          handleTabSelect(prevIdx);
          scrollTabIntoView(prevIdx);
          (_a = tabRefs.current[prevIdx]) == null ? void 0 : _a.focus();
          break;
        }
        case "ArrowRight": {
          event.preventDefault();
          if (index === lastTab && actions && placeActionsInline) {
            focusFirstAction();
            return;
          }
          const nextIdx = index < lastTab ? index + 1 : 0;
          handleTabSelect(nextIdx);
          scrollTabIntoView(nextIdx);
          (_b = tabRefs.current[nextIdx]) == null ? void 0 : _b.focus();
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          setNavigationState((prev) => ({
            ...prev,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: true
          }));
          break;
        }
        case "Home": {
          event.preventDefault();
          handleTabSelect(0);
          scrollTabIntoView(0);
          (_c = tabRefs.current[0]) == null ? void 0 : _c.focus();
          break;
        }
        case "End": {
          event.preventDefault();
          handleTabSelect(lastTab);
          scrollTabIntoView(lastTab);
          (_d = tabRefs.current[lastTab]) == null ? void 0 : _d.focus();
          break;
        }
        case "Enter":
        case " ": {
          event.preventDefault();
          handleTabSelect(index);
          break;
        }
        case "Tab": {
          if (!event.shiftKey && index === lastTab && actions && placeActionsInline) {
            focusFirstAction();
          }
          break;
        }
      }
    },
    [tabPanels.length, handleTabSelect, scrollTabIntoView, actions, placeActionsInline, focusFirstAction]
  );
  const handleActionsKeyDown = useCallback3((event) => {
    var _a, _b, _c;
    const { key } = event;
    const els = getActionElements();
    if (!els.length) return;
    const currentIndex = els.findIndex((el) => el === document.activeElement);
    switch (key) {
      case "ArrowLeft": {
        if (placeActionsInline) {
          if (currentIndex > 0) {
            event.preventDefault();
            focusAction(currentIndex - 1);
          } else {
            event.preventDefault();
            const last = tabPanels.length - 1;
            handleTabSelect(last);
            scrollTabIntoView(last);
            (_a = tabRefs.current[last]) == null ? void 0 : _a.focus();
            setNavigationState((p) => ({ ...p, focusArea: "tabs", focusedTabIndex: last }));
          }
        }
        break;
      }
      case "ArrowRight": {
        if (placeActionsInline) {
          if (currentIndex < els.length - 1) {
            event.preventDefault();
            focusAction(currentIndex + 1);
          } else {
            event.preventDefault();
            handleTabSelect(0);
            scrollTabIntoView(0);
            (_b = tabRefs.current[0]) == null ? void 0 : _b.focus();
            setNavigationState((p) => ({ ...p, focusArea: "tabs", focusedTabIndex: 0 }));
          }
        }
        break;
      }
      case "ArrowDown": {
        if (!placeActionsInline) {
          event.preventDefault();
          const currentTab = state.selectedIndex;
          (_c = tabRefs.current[currentTab]) == null ? void 0 : _c.focus();
          setNavigationState((p) => ({ ...p, focusArea: "tabs", focusedTabIndex: currentTab }));
        } else {
          event.preventDefault();
          setNavigationState((prev) => ({ ...prev, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: true }));
        }
        break;
      }
    }
  }, [getActionElements, placeActionsInline, focusAction, tabPanels.length, handleTabSelect, scrollTabIntoView, state.selectedIndex]);
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${orientation} ${className}`,
      id,
      "data-testid": dataTestId,
      ref: containerRef,
      children: [
        ariaDescription && !descriptionLooksLikeId && /* @__PURE__ */ jsx4("div", { id: generatedDescriptionId, className: "nhsuk-u-visually-hidden", children: ariaDescription }),
        /* @__PURE__ */ jsx4(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: navigationHelpId,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ jsx4(
          SortStatusControl,
          {
            sortConfig: state.sortConfig || [],
            columns: tabPanels.flatMap(
              (panel) => panel.columns.map((col) => ({ key: col.key, label: col.label }))
            ).filter(
              (col, index, arr) => arr.findIndex((c) => c.key === col.key) === index
              // Remove duplicates
            ),
            onSortChange: (newSortConfig) => {
              dispatch({ type: "SET_SORT", payload: newSortConfig });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        actions && !placeActionsInline && /* @__PURE__ */ jsx4(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: actionsRef,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: handleActionsKeyDown,
            children: actions
          }
        ),
        /* @__PURE__ */ jsxs3("div", { className: `aria-tabs-datagrid__tabs-wrapper ${placeActionsInline ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ jsx4(
            "div",
            {
              role: "tablist",
              "aria-label": ariaLabel,
              "aria-describedby": (() => {
                if (ariaDescription) {
                  return descriptionLooksLikeId ? ariaDescription : generatedDescriptionId;
                }
                return navigationHelpId;
              })(),
              "aria-orientation": orientation,
              className: "aria-tabs-datagrid__tabs",
              ref: tabListRef,
              children: tabPanels.map((panel, index) => {
                const isSelected = index === state.selectedIndex;
                const isDisabled = panel.disabled || disabled;
                return /* @__PURE__ */ jsxs3(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${panel.id}`,
                    "aria-controls": `panel-${panel.id}`,
                    "aria-selected": isSelected,
                    "aria-disabled": isDisabled,
                    tabIndex: isSelected ? 0 : -1,
                    ref: (el) => {
                      tabRefs.current[index] = el;
                    },
                    onClick: () => handleTabSelect(index),
                    onKeyDown: (event) => handleTabKeyDown(event, index),
                    disabled: isDisabled,
                    className: [
                      "aria-tabs-datagrid__tab",
                      isSelected ? "aria-tabs-datagrid__tab--selected" : "",
                      isDisabled ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ jsx4("span", { className: "aria-tabs-datagrid__tab-label", children: panel.label }),
                      state.tabLoadingStates[index] && /* @__PURE__ */ jsx4("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "\u23F3" }),
                      state.tabErrors[index] && /* @__PURE__ */ jsx4("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "\u26A0\uFE0F" })
                    ]
                  },
                  panel.id
                );
              })
            }
          ),
          actions && placeActionsInline && /* @__PURE__ */ jsx4(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: actionsRef,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: handleActionsKeyDown,
              children: actions
            }
          )
        ] }),
        tabPanels.map((panel, index) => {
          const isSelected = index === state.selectedIndex;
          return /* @__PURE__ */ jsx4(
            "div",
            {
              role: "tabpanel",
              id: `panel-${panel.id}`,
              "aria-labelledby": `tab-${panel.id}`,
              tabIndex: 0,
              hidden: !isSelected,
              ref: (el) => {
                panelRefs.current[index] = el;
              },
              className: `aria-tabs-datagrid__panel ${panel.className || ""}`,
              "data-tab-panel": index,
              children: isSelected && (() => {
                const displayData = panel.data.some(
                  (item) => "ews_data" in item
                ) ? getFilteredData(panel.data, state.filters) : panel.data;
                const sortedData = useMemo2(() => {
                  const sortConfig = state.sortConfig;
                  if (!sortConfig || sortConfig.length === 0)
                    return displayData;
                  return [...displayData].sort((a, b) => {
                    for (const { key, direction } of sortConfig) {
                      let aValue = a[key];
                      let bValue = b[key];
                      const column = panel.columns.find(
                        (col) => col.key === key
                      );
                      if (column == null ? void 0 : column.tableRenderer) {
                        aValue = column.tableRenderer(a);
                        bValue = column.tableRenderer(b);
                      } else if (column == null ? void 0 : column.render) {
                        aValue = column.render(a);
                        bValue = column.render(b);
                      }
                      if (aValue == null && bValue == null) continue;
                      if (aValue == null) return 1;
                      if (bValue == null) return -1;
                      let comparison = 0;
                      if (typeof aValue === "number" && typeof bValue === "number") {
                        comparison = aValue - bValue;
                      } else if (typeof aValue === "boolean" && typeof bValue === "boolean") {
                        comparison = aValue === bValue ? 0 : aValue ? 1 : -1;
                      } else {
                        comparison = String(aValue).localeCompare(
                          String(bValue),
                          void 0,
                          {
                            numeric: true,
                            sensitivity: "base"
                          }
                        );
                      }
                      if (comparison !== 0) {
                        return direction === "asc" ? comparison : -comparison;
                      }
                    }
                    return 0;
                  });
                }, [displayData, state.sortConfig, panel.columns]);
                return /* @__PURE__ */ jsxs3(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": panel.ariaLabel,
                    "aria-describedby": panel.ariaDescription ? `panel-${panel.id}-description` : void 0,
                    children: [
                      panel.ariaDescription && /* @__PURE__ */ jsx4(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${panel.id}-description`,
                          children: panel.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ jsx4("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ jsx4("tr", { role: "row", children: panel.columns.map((column, colIndex) => {
                        var _a;
                        const sortInfo = (_a = state.sortConfig) == null ? void 0 : _a.find(
                          (config) => config.key === column.key
                        );
                        const isSorted = !!sortInfo;
                        const isFocused = navigationState.focusArea === "headers" && navigationState.focusedHeaderIndex === colIndex;
                        return /* @__PURE__ */ jsx4(
                          "th",
                          {
                            className: `sortable-header ${isFocused ? "sortable-header--focused" : ""} ${isSorted ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: isFocused ? 0 : -1,
                            onClick: () => handleSort(index, column.key),
                            onKeyDown: (e) => handleHeaderKeyDown(e, colIndex),
                            "aria-sort": isSorted ? (sortInfo == null ? void 0 : sortInfo.direction) === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ jsxs3("div", { className: "header-content", children: [
                              /* @__PURE__ */ jsx4("span", { className: "header-label", children: column.label }),
                              /* @__PURE__ */ jsxs3(
                                "div",
                                {
                                  className: `sort-indicator-container ${isSorted ? `sort-indicator--${sortInfo == null ? void 0 : sortInfo.direction}` : ""}`,
                                  children: [
                                    state.sortConfig && state.sortConfig.length > 0 && state.sortConfig.findIndex(
                                      (config) => config.key === column.key
                                    ) !== -1 && /* @__PURE__ */ jsx4(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${state.sortConfig.findIndex((config) => config.key === column.key) + 1}`,
                                        "data-priority": state.sortConfig.findIndex(
                                          (config) => config.key === column.key
                                        ) + 1,
                                        title: `Sort priority: ${state.sortConfig.findIndex((config) => config.key === column.key) + 1}`,
                                        children: state.sortConfig.findIndex(
                                          (config) => config.key === column.key
                                        ) + 1
                                      }
                                    ),
                                    isSorted && /* @__PURE__ */ jsx4(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${sortInfo == null ? void 0 : sortInfo.direction}`,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        children: /* @__PURE__ */ jsx4("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                      }
                                    )
                                  ]
                                }
                              )
                            ] })
                          },
                          column.key
                        );
                      }) }) }),
                      /* @__PURE__ */ jsx4("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: sortedData.map((row, rowIndex) => {
                        const isRowSelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
                        const isRowFocused = navigationState.focusArea === "cells" && navigationState.focusedRowIndex === rowIndex;
                        return /* @__PURE__ */ jsx4(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${isRowSelected ? "data-row--selected" : ""} ${isRowFocused ? "data-row--focused" : ""}`,
                            "aria-selected": isRowSelected,
                            children: panel.columns.map((column, colIndex) => {
                              const rawValue = row[column.key];
                              let value;
                              if (column.tableRenderer) {
                                value = column.tableRenderer(row);
                              } else if (column.render) {
                                value = column.render(row);
                              } else {
                                value = rawValue;
                              }
                              const isCellFocused = navigationState.focusArea === "cells" && navigationState.focusedRowIndex === rowIndex && navigationState.focusedColumnIndex === colIndex;
                              const renderValue = () => {
                                if (column.customRenderer) {
                                  const rendered = column.customRenderer(
                                    rawValue,
                                    row
                                  );
                                  return /* @__PURE__ */ jsx4(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: rendered
                                    }
                                  );
                                }
                                if (typeof rawValue === "boolean" && value === rawValue) {
                                  return /* @__PURE__ */ jsxs3(Fragment, { children: [
                                    renderBooleanIcon(rawValue),
                                    /* @__PURE__ */ jsx4("span", { className: "nhsuk-u-visually-hidden", children: rawValue ? "Yes" : "No" })
                                  ] });
                                }
                                if (React3.isValidElement(value) || typeof value !== "object") {
                                  return value != null ? value : "";
                                }
                                return value;
                              };
                              return /* @__PURE__ */ jsx4(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${isCellFocused ? "data-cell--focused" : ""}`,
                                  tabIndex: isCellFocused ? 0 : -1,
                                  onClick: () => {
                                    const isCurrentlySelected = state.globalSelectedRowData && isDataEqual(
                                      state.globalSelectedRowData,
                                      row
                                    );
                                    const newSelectedRowData = isCurrentlySelected ? null : row;
                                    dispatch({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: newSelectedRowData
                                    });
                                  },
                                  onKeyDown: (e) => handleCellKeyDown(e, rowIndex, colIndex),
                                  children: renderValue()
                                },
                                column.key
                              );
                            })
                          },
                          rowIndex
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            panel.id
          );
        })
      ]
    }
  );
});

// src/components/Card/Card.tsx
import React5 from "react";

// src/components/Heading/Heading.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { createElement } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
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
  const headingClasses = (0, import_classnames2.default)(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${size}`]: size
    },
    className
  );
  const content = children || (html ? /* @__PURE__ */ jsx5("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  const tagName = `h${headingLevel}`;
  const style = marginBottom ? { ...props.style, marginBottom } : props.style;
  return createElement(
    tagName,
    { className: headingClasses, ...props, style },
    content
  );
};

// src/components/Card/Card.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var Card = React5.forwardRef(({
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
      return /* @__PURE__ */ jsx6("div", { dangerouslySetInnerHTML: { __html: headingHtml } });
    }
    if (!heading) return null;
    const headingContent = () => {
      if (href && variant !== "feature") {
        return /* @__PURE__ */ jsx6("a", { className: "nhsuk-card__link", href, children: heading });
      }
      return heading;
    };
    return /* @__PURE__ */ jsx6(
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
    if (descriptionHtml) return /* @__PURE__ */ jsx6("div", { dangerouslySetInnerHTML: { __html: descriptionHtml } });
    if (description) return /* @__PURE__ */ jsx6("p", { className: "nhsuk-card__description", children: description });
    return null;
  };
  const renderPrimaryIcon = () => {
    if (variant !== "primary") return null;
    return /* @__PURE__ */ jsxs4(
      "svg",
      {
        className: "nhsuk-icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "27",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          /* @__PURE__ */ jsx6("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
          /* @__PURE__ */ jsxs4("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
            /* @__PURE__ */ jsx6("path", { d: "M15.438 13l-3.771 3.771" }),
            /* @__PURE__ */ jsx6("path", { d: "M11.667 9.229L15.438 13" })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      ...htmlAttributes,
      className: cardClasses,
      ref,
      children: [
        imgURL && /* @__PURE__ */ jsx6(
          "img",
          {
            className: "nhsuk-card__img",
            src: imgURL,
            alt: imgAlt || ""
          }
        ),
        /* @__PURE__ */ jsxs4("div", { className: contentClasses, children: [
          renderHeading(),
          renderContent(),
          renderPrimaryIcon()
        ] })
      ]
    }
  );
});
Card.displayName = "Card";

// src/components/Select/Select.tsx
var import_classnames3 = __toESM(require_classnames(), 1);
import { jsx as jsx7 } from "react/jsx-runtime";
var SelectOption = ({
  value,
  disabled = false,
  selected = false,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className,
  children,
  ...props
}) => {
  const optionClasses = (0, import_classnames3.default)(
    "nhsuk-select__option",
    className
  );
  return /* @__PURE__ */ jsx7(
    "option",
    {
      className: optionClasses,
      value,
      disabled,
      ...props,
      children
    }
  );
};
var SelectBase = ({
  id,
  name,
  ariaLabel,
  value,
  defaultValue,
  disabled = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  multiple = false,
  size,
  autoComplete,
  options,
  children,
  onChange,
  onBlur,
  onFocus,
  ...props
}) => {
  var _a;
  const selectClasses = (0, import_classnames3.default)(
    "nhsuk-select",
    {
      "nhsuk-select--error": hasError
    },
    className
  );
  const renderOptionsFromProp = () => {
    if (!options) return null;
    return options.map((option, index) => /* @__PURE__ */ jsx7(
      "option",
      {
        value: option.value,
        disabled: option.disabled,
        "data-initial-selected": option.selected || void 0,
        children: option.text
      },
      `${option.value}-${index}`
    ));
  };
  const derivedDefaultValue = defaultValue === void 0 && value === void 0 && options ? (_a = options.find((o) => o.selected)) == null ? void 0 : _a.value : void 0;
  return /* @__PURE__ */ jsx7(
    "select",
    {
      className: selectClasses,
      id,
      name,
      "aria-label": ariaLabel,
      value,
      defaultValue: defaultValue !== void 0 ? defaultValue : derivedDefaultValue,
      disabled,
      required,
      "aria-describedby": describedBy,
      multiple,
      size,
      autoComplete,
      onChange,
      onBlur,
      onFocus,
      ...props,
      children: children || renderOptionsFromProp()
    }
  );
};
var Select = SelectBase;
Select.Option = SelectOption;

// src/components/ResponsiveDataGrid/GenericCardRenderer.ts
function createGenericCard(data, columns, config) {
  const {
    primaryField,
    secondaryFields = [],
    badges: badgeConfigs = [],
    hiddenFields = [],
    getPriority,
    getVariant,
    fieldRenderers = {},
    classPrefix = "adaptive-card"
  } = config;
  const primaryColumn = columns.find((col) => col.key === primaryField);
  const primaryValue = (primaryColumn == null ? void 0 : primaryColumn.cardRenderer) ? primaryColumn.cardRenderer(data) : (primaryColumn == null ? void 0 : primaryColumn.render) ? primaryColumn.render(data) : data[primaryField || "name"] || "Untitled";
  const createDescription = () => {
    const relevantFields = secondaryFields.filter((fieldKey) => !hiddenFields.includes(fieldKey) && data[fieldKey]).slice(0, 3);
    return relevantFields.map((fieldKey) => {
      const column = columns.find((col) => col.key === fieldKey);
      const rawValue = data[fieldKey];
      const value = fieldRenderers[fieldKey] ? fieldRenderers[fieldKey](rawValue, data) : (column == null ? void 0 : column.cardRenderer) ? column.cardRenderer(data) : (column == null ? void 0 : column.render) ? column.render(data) : rawValue;
      const label = (column == null ? void 0 : column.label) || fieldKey;
      return `${label}: ${value}`;
    }).join(" \u2022 ");
  };
  const createBadges = () => {
    if (badgeConfigs.length === 0) return null;
    return badgeConfigs.filter((badgeConfig) => data[badgeConfig.fieldKey] !== void 0).map((badgeConfig) => {
      const rawValue = data[badgeConfig.fieldKey];
      const value = badgeConfig.render ? badgeConfig.render(rawValue, data) : rawValue;
      const badgeClass = getBadgeClass(badgeConfig, rawValue);
      return `<span class="nhsuk-tag ${badgeClass}">${value}</span>`;
    }).join("");
  };
  const determineVariant = () => {
    if (getVariant) {
      return getVariant(data);
    }
    const priority = getPriority == null ? void 0 : getPriority(data);
    if (priority === "high") return "primary";
    return "default";
  };
  const badgeElements = createBadges();
  const description = createDescription();
  const enhancedDescription = badgeElements ? `${description}${badgeElements ? `<div class="adaptive-card__badges">${badgeElements}</div>` : ""}` : description;
  return {
    variant: determineVariant(),
    heading: String(primaryValue),
    descriptionHtml: enhancedDescription,
    className: `adaptive-card ${classPrefix}`,
    "aria-label": `Record for ${primaryValue}`
  };
}
function getBadgeClass(badgeConfig, value) {
  const baseClass = badgeConfig.className || "adaptive-card__badge";
  if (badgeConfig.fieldKey === "ews_score" || badgeConfig.fieldKey.includes("score")) {
    const score = Number(value);
    if (score >= 7) return `${baseClass} nhsuk-tag--red`;
    if (score >= 3) return `${baseClass} nhsuk-tag--yellow`;
    return `${baseClass} nhsuk-tag--green`;
  }
  if (badgeConfig.fieldKey === "priority") {
    const priority = String(value).toLowerCase();
    if (priority === "high") return `${baseClass} nhsuk-tag--red`;
    if (priority === "medium") return `${baseClass} nhsuk-tag--yellow`;
    if (priority === "low") return `${baseClass} nhsuk-tag--green`;
  }
  if (badgeConfig.fieldKey === "status") {
    const status = String(value).toLowerCase();
    if (status === "urgent" || status === "critical") return `${baseClass} nhsuk-tag--red`;
    if (status === "pending" || status === "warning") return `${baseClass} nhsuk-tag--yellow`;
    if (status === "completed" || status === "success") return `${baseClass} nhsuk-tag--green`;
  }
  switch (badgeConfig.color) {
    case "primary":
      return `${baseClass} nhsuk-tag--blue`;
    case "secondary":
      return `${baseClass} nhsuk-tag--grey`;
    case "success":
      return `${baseClass} nhsuk-tag--green`;
    case "warning":
      return `${baseClass} nhsuk-tag--yellow`;
    case "danger":
      return `${baseClass} nhsuk-tag--red`;
    default:
      return baseClass;
  }
}
var defaultGenericCardConfig = {
  primaryField: "name",
  secondaryFields: ["id", "description", "status"],
  badges: [
    {
      fieldKey: "priority",
      render: (value) => value.charAt(0).toUpperCase() + value.slice(1),
      className: "adaptive-card__priority-badge"
    },
    {
      fieldKey: "status",
      render: (value) => value.charAt(0).toUpperCase() + value.slice(1),
      className: "adaptive-card__status-badge"
    }
  ],
  hiddenFields: [],
  getPriority: (data) => data.priority || "medium",
  getStatus: (data) => data.status || "active",
  getVariant: (data) => {
    if (data.priority === "high") return "primary";
    return "default";
  },
  fieldRenderers: {},
  classPrefix: "adaptive-card--generic"
};

// src/components/ResponsiveDataGrid/HealthcareCardTemplates.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var PatientCard = ({
  data,
  columns: _columns,
  onSelect,
  onAction,
  priority = "medium",
  status = "active"
}) => {
  const name = data.name;
  const age = data.age;
  const ward = data.ward_name;
  const bed = data.bed_name;
  const ewsScore = data.ews_score;
  const specialty = data.speciality;
  const consultant = data.consultant;
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${priority} healthcare-card--${status}`,
      onClick: () => onSelect == null ? void 0 : onSelect(data),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${name}, Age ${age}, Ward ${ward}, Bed ${bed}`,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ jsx8("h3", { className: "healthcare-card__patient-name", children: name }),
            /* @__PURE__ */ jsxs5("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ jsx8("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ jsx8("span", { className: "healthcare-card__value", children: age })
            ] })
          ] }),
          /* @__PURE__ */ jsx8("div", { className: "healthcare-card__badges", children: ewsScore !== void 0 && /* @__PURE__ */ jsxs5(
            Tag,
            {
              color: getAlertTagColor(getAlertLevel(ewsScore)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                ewsScore
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx8("div", { className: "healthcare-card__body", children: /* @__PURE__ */ jsxs5("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ jsx8("dt", { children: "Ward" }),
            /* @__PURE__ */ jsx8("dd", { children: ward })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ jsx8("dt", { children: "Bed" }),
            /* @__PURE__ */ jsx8("dd", { children: bed })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ jsx8("dt", { children: "Specialty" }),
            /* @__PURE__ */ jsx8("dd", { children: specialty })
          ] }),
          /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ jsx8("dt", { children: "Consultant" }),
            /* @__PURE__ */ jsx8("dd", { children: consultant })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (e) => {
                e.stopPropagation();
                onAction == null ? void 0 : onAction("view-notes", data);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (e) => {
                e.stopPropagation();
                onAction == null ? void 0 : onAction("view-vitals", data);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (e) => {
                e.stopPropagation();
                onAction == null ? void 0 : onAction("view-full", data);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
};
var AppointmentCard = ({ data, onAction }) => /* @__PURE__ */ jsxs5("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ jsx8("h3", { className: "healthcare-card__time", children: new Date(data.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ jsx8("p", { className: "healthcare-card__type", children: data.appointment_type })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ jsx8(
        Tag,
        {
          color: getStatusTagColor(data.status || "active"),
          className: "healthcare-card__status",
          children: (data.status || "active").charAt(0).toUpperCase() + (data.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ jsxs5(
        Tag,
        {
          color: "grey",
          className: "healthcare-card__duration",
          children: [
            data.duration || "30",
            " min"
          ]
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ jsx8("div", { className: "healthcare-card__body", children: /* @__PURE__ */ jsxs5("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ jsx8("dt", { children: "Patient" }),
      /* @__PURE__ */ jsx8("dd", { children: data.patient_name })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ jsx8("dt", { children: "Consultant" }),
      /* @__PURE__ */ jsx8("dd", { children: data.consultant })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ jsx8("dt", { children: "Location" }),
      /* @__PURE__ */ jsx8("dd", { children: data.location })
    ] })
  ] }) }),
  /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ jsx8(
      Button,
      {
        variant: "secondary",
        size: "small",
        onClick: () => onAction == null ? void 0 : onAction("view", data),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ jsx8(
      Button,
      {
        variant: "primary",
        size: "small",
        onClick: () => onAction == null ? void 0 : onAction("edit", data),
        children: "Reschedule"
      }
    )
  ] })
] });
var MedicationCard = ({
  data,
  onAction
}) => /* @__PURE__ */ jsxs5("div", { className: "healthcare-card healthcare-card--medication healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__medication-info", children: [
      /* @__PURE__ */ jsx8("h3", { className: "healthcare-card__medication-name", children: data.medication }),
      /* @__PURE__ */ jsxs5("p", { className: "healthcare-card__dose", children: [
        data.dose,
        " \u2022 ",
        data.frequency
      ] })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ jsx8(
        Tag,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: data.route
        }
      ),
      data.next_due && /* @__PURE__ */ jsxs5(
        Tag,
        {
          color: "red",
          className: "healthcare-card__warning",
          children: [
            "Due: ",
            new Date(data.next_due).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
          ]
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ jsx8("div", { className: "healthcare-card__body", children: /* @__PURE__ */ jsxs5("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ jsx8("dt", { children: "Patient" }),
      /* @__PURE__ */ jsx8("dd", { children: data.patient_name })
    ] }),
    /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ jsx8("dt", { children: "Prescriber" }),
      /* @__PURE__ */ jsx8("dd", { children: data.prescriber })
    ] }),
    data.allergies && /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
      /* @__PURE__ */ jsx8("dt", { children: "Allergies" }),
      /* @__PURE__ */ jsx8("dd", { children: data.allergies })
    ] })
  ] }) }),
  /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ jsx8(
      Button,
      {
        variant: "secondary",
        size: "small",
        onClick: () => onAction == null ? void 0 : onAction("view", data),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ jsx8(
      Button,
      {
        variant: "primary",
        size: "small",
        onClick: () => onAction == null ? void 0 : onAction("edit", data),
        children: "Adjust Dose"
      }
    )
  ] })
] });
var VitalsCard = ({
  data,
  onSelect,
  onAction,
  priority = "medium"
}) => {
  var _a, _b, _c, _d, _e, _f;
  const name = data.name;
  const ewsScore = data.ews_score;
  const respiratoryRate = (_a = data.ews_data) == null ? void 0 : _a.respiratory_rate_bpm;
  const sp02 = (_b = data.ews_data) == null ? void 0 : _b.sp02;
  const temperature = (_c = data.ews_data) == null ? void 0 : _c.temperature;
  const systolicBp = (_d = data.ews_data) == null ? void 0 : _d.systolic_bp;
  const heartRate = (_e = data.ews_data) == null ? void 0 : _e.heart_rate;
  const avpu = (_f = data.ews_data) == null ? void 0 : _f.avpu;
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${priority}`,
      onClick: () => onSelect == null ? void 0 : onSelect(data),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${name}, EWS Score ${ewsScore}`,
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ jsx8("h3", { className: "healthcare-card__patient-name", children: name }),
            ewsScore !== void 0 && /* @__PURE__ */ jsxs5("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${getEWSLevel(ewsScore)}`, children: [
              "EWS: ",
              ewsScore
            ] })
          ] }),
          /* @__PURE__ */ jsx8("div", { className: "healthcare-card__badges", children: avpu && /* @__PURE__ */ jsxs5(
            Tag,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                avpu.toUpperCase()
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx8("div", { className: "healthcare-card__body", children: /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vitals-grid", children: [
          respiratoryRate !== void 0 && /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ jsx8("span", { className: "healthcare-card__vital-label", children: "Respiratory Rate" }),
            /* @__PURE__ */ jsxs5("span", { className: "healthcare-card__vital-value", children: [
              respiratoryRate,
              " bpm"
            ] })
          ] }),
          sp02 !== void 0 && /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ jsx8("span", { className: "healthcare-card__vital-label", children: "SpO2" }),
            /* @__PURE__ */ jsxs5("span", { className: "healthcare-card__vital-value", children: [
              sp02,
              "%"
            ] })
          ] }),
          temperature !== void 0 && /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ jsx8("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ jsxs5("span", { className: "healthcare-card__vital-value", children: [
              temperature,
              "\xB0C"
            ] })
          ] }),
          systolicBp !== void 0 && /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ jsx8("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ jsx8("span", { className: "healthcare-card__vital-value", children: systolicBp })
          ] }),
          heartRate !== void 0 && /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ jsx8("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ jsxs5("span", { className: "healthcare-card__vital-value", children: [
              heartRate,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs5("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (e) => {
                e.stopPropagation();
                onAction == null ? void 0 : onAction("view-trend", data);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ jsx8(
            Button,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (e) => {
                e.stopPropagation();
                onAction == null ? void 0 : onAction("record-new", data);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function getAlertLevel(score) {
  const numScore = typeof score === "string" ? parseInt(score, 10) : score;
  if (numScore >= 7) return "critical";
  if (numScore >= 5) return "high";
  if (numScore >= 3) return "medium";
  return "low";
}
function getEWSLevel(score) {
  return getAlertLevel(score);
}
function getAlertTagColor(alertLevel) {
  switch (alertLevel) {
    case "critical":
      return "red";
    case "high":
      return "orange";
    case "medium":
      return "yellow";
    case "low":
      return "grey";
    default:
      return "grey";
  }
}
function getStatusTagColor(status) {
  switch (status.toLowerCase()) {
    case "active":
      return "blue";
    case "pending":
      return "orange";
    case "completed":
      return "green";
    case "cancelled":
      return "grey";
    default:
      return "blue";
  }
}

// src/components/ResponsiveDataGrid/HealthcarePlugin.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var healthcareBadges = [
  {
    fieldKey: "ews_score",
    render: (value) => `EWS: ${value}`,
    className: "adaptive-card__ews-badge",
    color: "default"
    // Will be overridden by custom logic
  },
  {
    fieldKey: "priority",
    render: (value) => value.charAt(0).toUpperCase() + value.slice(1),
    className: "adaptive-card__priority-badge"
  },
  {
    fieldKey: "status",
    render: (value) => value.charAt(0).toUpperCase() + value.slice(1),
    className: "adaptive-card__status-badge"
  }
];
var getHealthcarePriority = (data) => {
  if (data.ews_score && Number(data.ews_score) >= 7) return "high";
  if (data.ews_score && Number(data.ews_score) >= 3) return "medium";
  if (data.priority === "high" || data.status === "urgent") return "high";
  if (data.priority === "low") return "low";
  return "medium";
};
var getHealthcareStatus = (data) => {
  if (data.status) {
    const status = data.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(status)) {
      return status;
    }
  }
  return "active";
};
var getHealthcareVariant = (data) => {
  const priority = getHealthcarePriority(data);
  if (priority === "high") return "primary";
  if (data.status === "urgent") return "primary";
  return "default";
};
var healthcareFieldRenderers = {
  nhs_number: (value) => value ? `NHS: ${value}` : "",
  ews_score: (value) => {
    const score = Number(value);
    const level = score >= 7 ? "HIGH" : score >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${value} (${level})`;
  },
  age: (value, data) => {
    if (data.dob) {
      const age = (/* @__PURE__ */ new Date()).getFullYear() - new Date(data.dob).getFullYear();
      return `${age}y`;
    }
    return value ? `${value}y` : "";
  }
};
var defaultHealthcareCardConfig = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: healthcareBadges,
  hiddenFields: [],
  getPriority: getHealthcarePriority,
  getStatus: getHealthcareStatus,
  getVariant: getHealthcareVariant,
  fieldRenderers: healthcareFieldRenderers,
  classPrefix: "adaptive-card--healthcare"
};
var healthcareCardTemplates = {
  patient: (data, columns, config) => {
    var _a, _b;
    const priority = ((_a = config.getPriority) == null ? void 0 : _a.call(config, data)) || "medium";
    const rawStatus = ((_b = config.getStatus) == null ? void 0 : _b.call(config, data)) || "active";
    const status = rawStatus === "urgent" ? "active" : rawStatus;
    return /* @__PURE__ */ jsx9(
      PatientCard,
      {
        data,
        columns,
        priority,
        status,
        onSelect: (selectedData) => console.log("Patient selected:", selectedData),
        onAction: (action, actionData) => console.log("Patient action:", action, actionData)
      }
    );
  },
  appointment: (data, columns, config) => {
    var _a;
    const rawStatus = ((_a = config.getStatus) == null ? void 0 : _a.call(config, data)) || "pending";
    const status = rawStatus === "urgent" ? "pending" : rawStatus;
    return /* @__PURE__ */ jsx9(
      AppointmentCard,
      {
        data,
        columns,
        status,
        onSelect: (selectedData) => console.log("Appointment selected:", selectedData),
        onAction: (action, actionData) => console.log("Appointment action:", action, actionData)
      }
    );
  },
  medication: (data, columns, config) => {
    var _a;
    const priority = ((_a = config.getPriority) == null ? void 0 : _a.call(config, data)) || "medium";
    return /* @__PURE__ */ jsx9(
      MedicationCard,
      {
        data,
        columns,
        priority,
        onSelect: (selectedData) => console.log("Medication selected:", selectedData),
        onAction: (action, actionData) => console.log("Medication action:", action, actionData)
      }
    );
  },
  vitals: (data, columns, config) => {
    var _a;
    const priority = ((_a = config.getPriority) == null ? void 0 : _a.call(config, data)) || "medium";
    return /* @__PURE__ */ jsx9(
      VitalsCard,
      {
        data,
        columns,
        priority,
        onSelect: (selectedData) => console.log("Vitals selected:", selectedData),
        onAction: (action, actionData) => console.log("Vitals action:", action, actionData)
      }
    );
  }
};
var healthcareFieldTypes = {
  isNHSNumber: (value) => {
    return typeof value === "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(value.replace(/\s/g, ""));
  },
  isEWSScore: (value) => {
    return typeof value === "number" && value >= 0 && value <= 20;
  },
  isMedicalDate: (value) => {
    return typeof value === "string" && !isNaN(Date.parse(value));
  }
};
var healthcarePlugin = {
  name: "healthcare",
  defaultCardConfig: defaultHealthcareCardConfig,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: healthcareCardTemplates,
  fieldTypes: healthcareFieldTypes
};

// src/components/ResponsiveDataGrid/ResponsiveDataGridHelpers.ts
function convertLegacyCardConfig(legacyConfig) {
  var _a;
  return {
    primaryField: (legacyConfig == null ? void 0 : legacyConfig.primaryField) || "name",
    secondaryFields: (legacyConfig == null ? void 0 : legacyConfig.secondaryFields) || [],
    badges: ((_a = legacyConfig == null ? void 0 : legacyConfig.badgeFields) == null ? void 0 : _a.map((field) => ({
      fieldKey: field,
      className: "adaptive-card__badge"
    }))) || [],
    hiddenFields: (legacyConfig == null ? void 0 : legacyConfig.hiddenFields) || [],
    cardTemplate: (legacyConfig == null ? void 0 : legacyConfig.cardTemplate) ? (data, columns, _config) => legacyConfig.cardTemplate(data, columns) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function isHealthcareData(data) {
  if (!data || data.length === 0) return false;
  const firstItem = data[0];
  return !!(firstItem.ews_score !== void 0 || firstItem.nhs_number !== void 0 || firstItem.patient_name !== void 0 || firstItem.ward !== void 0 || firstItem.consultant !== void 0);
}

// src/components/ResponsiveDataGrid/ResponsiveDataGrid.tsx
import { Fragment as Fragment2, jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function tabsDataGridReducer2(state, action) {
  switch (action.type) {
    case "SET_SELECTED_INDEX":
      return { ...state, selectedIndex: action.payload };
    case "SET_TAB_LOADING":
      const newLoadingStates = [...state.tabLoadingStates];
      newLoadingStates[action.payload.tabIndex] = action.payload.isLoading;
      return { ...state, tabLoadingStates: newLoadingStates };
    case "SET_TAB_ERROR":
      const newErrors = [...state.tabErrors];
      newErrors[action.payload.tabIndex] = action.payload.error;
      return { ...state, tabErrors: newErrors };
    case "SET_SORT":
      return { ...state, sortConfig: action.payload };
    case "SET_SELECTED_ROWS":
      const newSelectedRows = [...state.selectedRows];
      newSelectedRows[action.payload.tabIndex] = action.payload.rowIndices;
      return { ...state, selectedRows: newSelectedRows };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...state, globalSelectedRowData: action.payload };
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    case "ADJUST_ARRAYS":
      const { newLength } = action.payload;
      const adjustedLoadingStates = new Array(newLength).fill(false);
      const adjustedErrors = new Array(newLength).fill(null);
      const adjustedSelectedRows = new Array(newLength).fill([]);
      for (let i = 0; i < Math.min(state.tabLoadingStates.length, newLength); i++) {
        adjustedLoadingStates[i] = state.tabLoadingStates[i];
        adjustedErrors[i] = state.tabErrors[i];
        adjustedSelectedRows[i] = state.selectedRows[i];
      }
      return {
        ...state,
        tabLoadingStates: adjustedLoadingStates,
        tabErrors: adjustedErrors,
        selectedRows: adjustedSelectedRows
      };
    case "RESET_STATE":
      return {
        selectedIndex: 0,
        tabLoadingStates: new Array(state.tabLoadingStates.length).fill(false),
        tabErrors: new Array(state.tabErrors.length).fill(null),
        sortConfig: [],
        selectedRows: new Array(state.selectedRows.length).fill([]),
        globalSelectedRowData: null,
        filters: void 0
      };
    default:
      return state;
  }
}
function useResponsiveLayout(breakpoints, forceLayout) {
  const [layout, setLayout] = useState3("cards");
  useEffect2(() => {
    if (forceLayout) {
      setLayout(forceLayout);
      return;
    }
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < breakpoints.mobile) {
        setLayout("cards");
      } else if (width < breakpoints.desktop) {
        setLayout("hybrid");
      } else {
        setLayout("table");
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [breakpoints, forceLayout]);
  return layout;
}
function detectHealthcareDataType(data) {
  if (!data || typeof data !== "object") return null;
  if (data.appointment_type || data.appointment_time || data.clinic) {
    return "appointment";
  }
  if (data.medication_name || data.medication || data.dose || data.frequency) {
    return "medication";
  }
  if (data.ews_score !== void 0 || data.respiratory_rate !== void 0 || data.spo2 !== void 0 || data.temperature !== void 0 || data.systolic_bp !== void 0 || data.heart_rate !== void 0) {
    return "vitals";
  }
  if (data.name || data.patient_name || data.nhs_number || data.ward || data.bed) {
    return "patient";
  }
  return null;
}
function createCard(data, columns, cardConfig, domainPlugin) {
  const effectiveConfig = domainPlugin ? { ...domainPlugin.defaultCardConfig, ...cardConfig } : { ...defaultGenericCardConfig, ...cardConfig };
  if (domainPlugin && domainPlugin.cardTemplates) {
    const dataType = detectHealthcareDataType(data);
    if (dataType && domainPlugin.cardTemplates[dataType]) {
      const customCardContent = domainPlugin.cardTemplates[dataType](data, columns, effectiveConfig);
      if (customCardContent) {
        return {
          variant: "default",
          children: customCardContent
        };
      }
    }
  }
  if (effectiveConfig.cardTemplate) {
    const customCard = effectiveConfig.cardTemplate(data, columns, effectiveConfig);
    if (customCard) {
      return createGenericCard(data, columns, effectiveConfig);
    }
  }
  return createGenericCard(data, columns, effectiveConfig);
}
var ResponsiveDataGrid = ({
  // Responsive-specific props
  breakpoints = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout,
  cardConfig = {},
  experimental = {},
  enableAdvancedSorting = false,
  topActions,
  bottomActions,
  gridActions,
  forceGridActionsAbove,
  // Standard AriaTabsDataGrid props
  tabPanels,
  dataConfig,
  selectedIndex: selectedIndexProp,
  onTabChange,
  ariaLabel = "Data grid",
  ariaDescription,
  orientation = "horizontal",
  id,
  disabled = false,
  className,
  ...props
}) => {
  const layout = useResponsiveLayout(breakpoints, forceLayout);
  const isControlled = selectedIndexProp !== void 0;
  const selectedIndex = selectedIndexProp != null ? selectedIndexProp : 0;
  const genericCardConfig = useMemo3(() => {
    const hasHealthcareData = tabPanels.some(
      (panel) => panel.data && panel.data.length > 0 && isHealthcareData(panel.data)
    );
    if (hasHealthcareData) {
      const legacyConverted = convertLegacyCardConfig(cardConfig);
      return {
        ...healthcarePlugin.defaultCardConfig,
        ...legacyConverted
      };
    } else {
      return convertLegacyCardConfig(cardConfig);
    }
  }, [cardConfig, tabPanels]);
  const domainPlugin = useMemo3(() => {
    const hasHealthcareData = tabPanels.some(
      (panel) => panel.data && panel.data.length > 0 && isHealthcareData(panel.data)
    );
    return hasHealthcareData ? healthcarePlugin : void 0;
  }, [tabPanels]);
  const initialState = useMemo3(() => {
    return {
      selectedIndex,
      tabLoadingStates: new Array(tabPanels.length).fill(false),
      tabErrors: new Array(tabPanels.length).fill(null),
      sortConfig: [],
      selectedRows: new Array(tabPanels.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    };
  }, [selectedIndex, tabPanels.length]);
  const [state, dispatch] = useReducer2(tabsDataGridReducer2, initialState);
  const tabRefs = useRef3([]);
  const cardRefs = useRef3([]);
  const sortControlRefs = useRef3([]);
  const cardsContainerRef = useRef3(null);
  const [cardNavState, setCardNavState] = useState3({
    focusArea: "tabs",
    focusedTabIndex: 0,
    focusedCardIndex: 0,
    selectedCardIndex: -1,
    isGridActive: false,
    focusedCardElementIndex: 0,
    cardElements: [],
    isCardNavigationActive: false,
    gridColumns: 1,
    gridRows: 1,
    cardSortConfig: null,
    focusedSortControlIndex: 0,
    isSortControlsActive: false
  });
  const calculateGridDimensions = useCallback4((containerRef) => {
    if (!containerRef.current) {
      return { columns: 1, rows: 0 };
    }
    const container = containerRef.current;
    const cards = container.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (cards.length === 0) {
      return { columns: 1, rows: 0 };
    }
    const containerWidth = container.offsetWidth;
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth;
    const columns = Math.floor(containerWidth / cardWidth) || 1;
    const rows = Math.ceil(cards.length / columns);
    return { columns, rows };
  }, []);
  const indexToGrid = useCallback4((index, columns) => {
    return {
      row: Math.floor(index / columns),
      col: index % columns
    };
  }, []);
  const gridToIndex = useCallback4((row, col, columns) => {
    return row * columns + col;
  }, []);
  const navigate2D = useCallback4((currentIndex, direction, totalCards, columns) => {
    const { row, col } = indexToGrid(currentIndex, columns);
    let newRow = row;
    let newCol = col;
    switch (direction) {
      case "up":
        newRow = Math.max(0, row - 1);
        break;
      case "down":
        newRow = Math.min(Math.floor((totalCards - 1) / columns), row + 1);
        break;
      case "left":
        newCol = Math.max(0, col - 1);
        break;
      case "right":
        newCol = Math.min(columns - 1, col + 1);
        break;
    }
    const newIndex = gridToIndex(newRow, newCol, columns);
    return Math.min(newIndex, totalCards - 1);
  }, [indexToGrid, gridToIndex]);
  useEffect2(() => {
    if (cardNavState.isCardNavigationActive && cardNavState.focusedCardElementIndex >= 0 && cardNavState.cardElements.length > 0) {
      setTimeout(() => {
        const currentElement = cardNavState.cardElements[cardNavState.focusedCardElementIndex];
        if (currentElement) {
          currentElement.element.focus();
          currentElement.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }, 0);
    }
  }, [cardNavState.isCardNavigationActive, cardNavState.focusedCardElementIndex, cardNavState.cardElements.length]);
  useEffect2(() => {
    const updateGridDimensions = () => {
      if (layout === "cards" && cardsContainerRef.current) {
        const { columns, rows } = calculateGridDimensions(cardsContainerRef);
        setCardNavState((prev) => ({
          ...prev,
          gridColumns: columns,
          gridRows: rows
        }));
      }
    };
    const timeoutId = setTimeout(updateGridDimensions, 200);
    const handleResize = () => {
      setTimeout(updateGridDimensions, 100);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [layout, tabPanels, calculateGridDimensions]);
  useEffect2(() => {
    const currentLength = state.tabLoadingStates.length;
    const newLength = tabPanels.length;
    if (currentLength !== newLength) {
      dispatch({ type: "ADJUST_ARRAYS", payload: { newLength } });
    }
  }, [tabPanels.length, state.tabLoadingStates.length]);
  useEffect2(() => {
    if (isControlled && selectedIndexProp !== state.selectedIndex) {
      dispatch({ type: "SET_SELECTED_INDEX", payload: selectedIndexProp });
    }
  }, [isControlled, selectedIndexProp, state.selectedIndex]);
  const handleTabSelect = useCallback4((index) => {
    if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
      dispatch({ type: "SET_SELECTED_INDEX", payload: index });
      onTabChange == null ? void 0 : onTabChange(index);
    }
  }, [tabPanels, onTabChange]);
  const handleCardSelect = useCallback4((data) => {
    console.log("Card selected:", data);
    dispatch({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: data
    });
  }, []);
  const focusCard = useCallback4((cardIndex) => {
    const cardElement = cardRefs.current[cardIndex];
    if (cardElement) {
      cardElement.focus();
      cardElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, []);
  const scanCardElements = useCallback4((cardIndex) => {
    const cardElement = cardRefs.current[cardIndex];
    if (!cardElement) return [];
    const focusableSelectors = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", ");
    const elements = cardElement.querySelectorAll(focusableSelectors);
    return Array.from(elements).map((element, index) => {
      var _a;
      return {
        id: element.id || `card-${cardIndex}-element-${index}`,
        element,
        label: element.getAttribute("aria-label") || ((_a = element.textContent) == null ? void 0 : _a.trim()) || element.getAttribute("title") || `Element ${index + 1}`,
        type: element.tagName.toLowerCase() === "button" ? "button" : element.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(element.tagName.toLowerCase()) ? "input" : "generic"
      };
    });
  }, []);
  const announcementsRef = useRef3(null);
  const announceToScreenReader = useCallback4((message) => {
    const container = announcementsRef.current;
    if (!container) return;
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;
    container.appendChild(announcement);
    setTimeout(() => {
      if (container.contains(announcement)) {
        container.removeChild(announcement);
      }
    }, 1e3);
  }, []);
  const generateSortOptions = useCallback4((columns) => {
    const sortableColumns = columns.filter((col) => col.sortable !== false);
    const options = [
      { value: "", label: "Sort by..." }
    ];
    sortableColumns.forEach((column) => {
      const baseLabel = column.label || column.key;
      if (column.key === "name") {
        options.push(
          { value: `${column.key}-asc`, label: `${baseLabel} (A-Z)` },
          { value: `${column.key}-desc`, label: `${baseLabel} (Z-A)` }
        );
      } else if (column.key === "ews_score" || column.key.includes("score")) {
        options.push(
          { value: `${column.key}-desc`, label: `${baseLabel} (High-Low)` },
          { value: `${column.key}-asc`, label: `${baseLabel} (Low-High)` }
        );
      } else if (column.key === "age" || column.key.includes("date") || column.key.includes("time")) {
        options.push(
          { value: `${column.key}-desc`, label: `${baseLabel} (Oldest-Youngest)` },
          { value: `${column.key}-asc`, label: `${baseLabel} (Youngest-Oldest)` }
        );
      } else {
        options.push(
          { value: `${column.key}-asc`, label: `${baseLabel} (A-Z)` },
          { value: `${column.key}-desc`, label: `${baseLabel} (Z-A)` }
        );
      }
    });
    return options;
  }, []);
  const sortCardData = useCallback4((data, sortConfig) => {
    if (!sortConfig) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue == null && bValue == null) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      const aNum = Number(aValue);
      const bNum = Number(bValue);
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
      }
      const aStr = String(aValue).toLowerCase();
      const bStr = String(bValue).toLowerCase();
      const result = aStr.localeCompare(bStr);
      return sortConfig.direction === "asc" ? result : -result;
    });
  }, []);
  const handleCardSort = useCallback4((sortValue) => {
    if (!sortValue) {
      setCardNavState((prev) => ({ ...prev, cardSortConfig: null }));
      announceToScreenReader("Card sorting cleared");
      return;
    }
    const [key, direction] = sortValue.split("-");
    const newSortConfig = { key, direction };
    setCardNavState((prev) => ({ ...prev, cardSortConfig: newSortConfig }));
    const currentPanel = tabPanels[state.selectedIndex];
    const column = currentPanel == null ? void 0 : currentPanel.columns.find((col) => col.key === key);
    const columnLabel = (column == null ? void 0 : column.label) || key;
    const directionLabel = direction === "asc" ? "ascending" : "descending";
    announceToScreenReader(`Cards sorted by ${columnLabel} in ${directionLabel} order`);
  }, [tabPanels, state.selectedIndex, announceToScreenReader]);
  const getSortLabel = useCallback4((sortConfig) => {
    const currentPanel = tabPanels[state.selectedIndex];
    const column = currentPanel == null ? void 0 : currentPanel.columns.find((col) => col.key === sortConfig.key);
    const columnLabel = (column == null ? void 0 : column.label) || sortConfig.key;
    const directionLabel = sortConfig.direction === "asc" ? "ascending" : "descending";
    return `${columnLabel} (${directionLabel})`;
  }, [tabPanels, state.selectedIndex]);
  const sortCardDataCombined = useCallback4((data) => {
    const currentPanel = tabPanels[state.selectedIndex];
    if (enableAdvancedSorting) {
      const sortConfig = state.sortConfig;
      if (!sortConfig || sortConfig.length === 0) return data;
      return [...data].sort((a, b) => {
        for (const { key, direction } of sortConfig) {
          let aValue = a[key];
          let bValue = b[key];
          const column = currentPanel == null ? void 0 : currentPanel.columns.find((col) => col.key === key);
          if (column == null ? void 0 : column.cardRenderer) {
            aValue = column.cardRenderer(a);
            bValue = column.cardRenderer(b);
          } else if (column == null ? void 0 : column.render) {
            aValue = column.render(a);
            bValue = column.render(b);
          }
          if (aValue == null && bValue == null) continue;
          if (aValue == null) return direction === "asc" ? -1 : 1;
          if (bValue == null) return direction === "asc" ? 1 : -1;
          const aNum = Number(aValue);
          const bNum = Number(bValue);
          if (!isNaN(aNum) && !isNaN(bNum)) {
            const result2 = aNum - bNum;
            if (result2 !== 0) return direction === "asc" ? result2 : -result2;
            continue;
          }
          const aStr = String(aValue).toLowerCase();
          const bStr = String(bValue).toLowerCase();
          const result = aStr.localeCompare(bStr);
          if (result !== 0) return direction === "asc" ? result : -result;
        }
        return 0;
      });
    } else {
      return sortCardData(data, cardNavState.cardSortConfig);
    }
  }, [enableAdvancedSorting, state.sortConfig, cardNavState.cardSortConfig, sortCardData, tabPanels, state.selectedIndex]);
  const focusCardElement = useCallback4((cardIndex, elementIndex) => {
    const cardElements = scanCardElements(cardIndex);
    const element = cardElements[elementIndex];
    if (element) {
      element.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const announcement = `Focused on ${element.label}, ${element.type} ${elementIndex + 1} of ${cardElements.length} within card`;
      announceToScreenReader(announcement);
    }
  }, [scanCardElements, announceToScreenReader]);
  const focusTab = useCallback4((tabIndex) => {
    var _a;
    (_a = tabRefs.current[tabIndex]) == null ? void 0 : _a.focus();
  }, []);
  const getAvailableSortControls = useCallback4(() => {
    const container = sortControlRefs.current[0];
    if (!container) return [];
    const focusableSelectors = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", ");
    const focusableElements = container.querySelectorAll(focusableSelectors);
    return Array.from(focusableElements);
  }, []);
  const focusSortControl = useCallback4((controlIndex) => {
    if (controlIndex === 0) {
      const outer = sortControlRefs.current[0];
      const innerRow = outer == null ? void 0 : outer.querySelector(".sort-controls-row");
      if (innerRow) {
        innerRow.setAttribute("tabindex", "-1");
        innerRow.focus();
        const availableControls = getAvailableSortControls();
        const announcement = `Sort controls group with ${availableControls.length} interactive elements. Press Enter or Space to begin navigating controls.`;
        announceToScreenReader(announcement);
      } else if (outer) {
        outer.focus();
      }
    } else {
      const availableControls = getAvailableSortControls();
      const adjustedIndex = controlIndex - 1;
      const formControl = availableControls[adjustedIndex];
      if (formControl) {
        formControl.focus();
        const isSelect = formControl.tagName.toLowerCase() === "select";
        const isButton = formControl.tagName.toLowerCase() === "button";
        const elementType = isSelect ? "dropdown" : isButton ? "button" : "control";
        const keyboardHint = isSelect ? ". Use Space key to open dropdown" : "";
        const announcement = `${elementType} ${adjustedIndex + 1} of ${availableControls.length}${keyboardHint}`;
        announceToScreenReader(announcement);
      }
    }
  }, [getAvailableSortControls, announceToScreenReader]);
  const handleCardKeyDown = useCallback4((event, cardIndex) => {
    const { key } = event;
    const currentPanel = tabPanels[state.selectedIndex];
    const cardCount = (currentPanel == null ? void 0 : currentPanel.data.length) || 0;
    if (key === "ArrowLeft" && event.shiftKey) {
      event.preventDefault();
      event.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (key === "ArrowRight" && event.shiftKey) {
      event.preventDefault();
      event.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!cardNavState.isCardNavigationActive) {
      switch (key) {
        case "ArrowUp":
          event.preventDefault();
          if (cardIndex === 0) {
            setCardNavState((prev) => ({ ...prev, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: false }));
            focusSortControl(0);
          } else {
            const newCardIndex = navigate2D(cardIndex, "up", cardCount, cardNavState.gridColumns);
            if (newCardIndex !== cardIndex) {
              setCardNavState((prev) => ({ ...prev, focusedCardIndex: newCardIndex }));
              focusCard(newCardIndex);
              announceToScreenReader(`Moved to card ${newCardIndex + 1} of ${cardCount}`);
            }
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          const newDownCardIndex = navigate2D(cardIndex, "down", cardCount, cardNavState.gridColumns);
          if (newDownCardIndex !== cardIndex) {
            setCardNavState((prev) => ({ ...prev, focusedCardIndex: newDownCardIndex }));
            focusCard(newDownCardIndex);
            announceToScreenReader(`Moved to card ${newDownCardIndex + 1} of ${cardCount}`);
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          const newLeftCardIndex = navigate2D(cardIndex, "left", cardCount, cardNavState.gridColumns);
          if (newLeftCardIndex !== cardIndex) {
            setCardNavState((prev) => ({ ...prev, focusedCardIndex: newLeftCardIndex }));
            focusCard(newLeftCardIndex);
            announceToScreenReader(`Moved to card ${newLeftCardIndex + 1} of ${cardCount}`);
          } else {
            if (state.selectedIndex > 0) {
              dispatch({ type: "SET_SELECTED_INDEX", payload: state.selectedIndex - 1 });
              setCardNavState((prev) => ({ ...prev, focusArea: "tabs" }));
              setTimeout(() => focusTab(state.selectedIndex - 1), 0);
            }
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          const newRightCardIndex = navigate2D(cardIndex, "right", cardCount, cardNavState.gridColumns);
          if (newRightCardIndex !== cardIndex) {
            setCardNavState((prev) => ({ ...prev, focusedCardIndex: newRightCardIndex }));
            focusCard(newRightCardIndex);
            announceToScreenReader(`Moved to card ${newRightCardIndex + 1} of ${cardCount}`);
          } else {
            if (state.selectedIndex < tabPanels.length - 1) {
              dispatch({ type: "SET_SELECTED_INDEX", payload: state.selectedIndex + 1 });
              setCardNavState((prev) => ({ ...prev, focusArea: "tabs" }));
              setTimeout(() => focusTab(state.selectedIndex + 1), 0);
            }
          }
          break;
          break;
        case "Enter":
          if (currentPanel == null ? void 0 : currentPanel.data[cardIndex]) {
            event.preventDefault();
            setCardNavState((prev) => ({
              ...prev,
              selectedCardIndex: cardIndex
            }));
            const cardElements = scanCardElements(cardIndex);
            if (cardElements.length > 0) {
              setCardNavState((prev) => ({
                ...prev,
                focusArea: "card",
                isCardNavigationActive: true,
                focusedCardElementIndex: 0,
                cardElements,
                selectedCardIndex: cardIndex
                // Ensure selection is maintained
              }));
              announceToScreenReader(`Card ${cardIndex + 1} selected and navigation activated. ${cardElements.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`);
            } else {
              announceToScreenReader(`Card ${cardIndex + 1} selected.`);
            }
          }
          break;
        case " ":
          if (currentPanel == null ? void 0 : currentPanel.data[cardIndex]) {
            event.preventDefault();
            setCardNavState((prev) => ({
              ...prev,
              selectedCardIndex: prev.selectedCardIndex === cardIndex ? -1 : cardIndex
            }));
            const isSelected = cardNavState.selectedCardIndex === cardIndex;
            announceToScreenReader(`Card ${cardIndex + 1} ${isSelected ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (key) {
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        const newLeftIndex = Math.max(0, cardNavState.focusedCardElementIndex - 1);
        setCardNavState((prev) => ({ ...prev, focusedCardElementIndex: newLeftIndex }));
        focusCardElement(cardIndex, newLeftIndex);
        break;
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        const newRightIndex = Math.min(cardNavState.cardElements.length - 1, cardNavState.focusedCardElementIndex + 1);
        setCardNavState((prev) => ({ ...prev, focusedCardElementIndex: newRightIndex }));
        focusCardElement(cardIndex, newRightIndex);
        break;
      case "Enter":
        event.preventDefault();
        const currentElement = cardNavState.cardElements[cardNavState.focusedCardElementIndex];
        if (currentElement) {
          currentElement.element.click();
          announceToScreenReader(`Activated ${currentElement.label}`);
        }
        break;
      case " ":
        event.preventDefault();
        const currentSpaceElement = cardNavState.cardElements[cardNavState.focusedCardElementIndex];
        if (currentSpaceElement) {
          const event2 = new MouseEvent("dblclick", { bubbles: true });
          currentSpaceElement.element.dispatchEvent(event2);
          announceToScreenReader(`Double-clicked ${currentSpaceElement.label}`);
        }
        break;
      case "Escape":
        event.preventDefault();
        setCardNavState((prev) => ({
          ...prev,
          focusArea: "cards",
          isCardNavigationActive: false,
          focusedCardElementIndex: 0,
          cardElements: []
        }));
        setTimeout(() => focusCard(cardIndex), 0);
        announceToScreenReader("Exited card navigation, returned to card level");
        break;
      case "Home":
        event.preventDefault();
        if (cardNavState.cardElements.length > 0) {
          setCardNavState((prev) => ({ ...prev, focusedCardElementIndex: 0 }));
          focusCardElement(cardIndex, 0);
        }
        break;
      case "End":
        event.preventDefault();
        if (cardNavState.cardElements.length > 0) {
          const lastIndex = cardNavState.cardElements.length - 1;
          setCardNavState((prev) => ({ ...prev, focusedCardElementIndex: lastIndex }));
          focusCardElement(cardIndex, lastIndex);
        }
        break;
    }
  }, [cardNavState, state.selectedIndex, tabPanels, handleCardSelect, focusCard, focusTab, setCardNavState, scanCardElements, focusCardElement, announceToScreenReader]);
  const scrollTabIntoViewMobile = useCallback4((index) => {
    const tab = tabRefs.current[index];
    const tabsContainer = tab == null ? void 0 : tab.parentElement;
    if (!tab || !tabsContainer) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const tabRect = tab.getBoundingClientRect();
    const containerRect = tabsContainer.getBoundingClientRect();
    const isVisible = tabRect.left >= containerRect.left && tabRect.right <= containerRect.right;
    if (!isVisible) {
      console.log("Tab not visible, scrolling into view (mobile)");
      tab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, []);
  const handleTabKeyDownWithCards = useCallback4((event, index) => {
    var _a, _b, _c, _d;
    if (layout !== "cards") {
      return;
    }
    const { key } = event;
    switch (key) {
      case "ArrowLeft":
        event.preventDefault();
        const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
        handleTabSelect(prevIndex);
        setCardNavState((prev) => ({ ...prev, focusedTabIndex: prevIndex }));
        (_a = tabRefs.current[prevIndex]) == null ? void 0 : _a.focus();
        scrollTabIntoViewMobile(prevIndex);
        break;
      case "ArrowRight":
        event.preventDefault();
        const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
        handleTabSelect(nextIndex);
        setCardNavState((prev) => ({ ...prev, focusedTabIndex: nextIndex }));
        (_b = tabRefs.current[nextIndex]) == null ? void 0 : _b.focus();
        scrollTabIntoViewMobile(nextIndex);
        break;
      case "ArrowDown":
        event.preventDefault();
        const currentPanel = tabPanels[state.selectedIndex];
        if (currentPanel && currentPanel.columns && currentPanel.columns.length > 0) {
          setCardNavState((prev) => ({
            ...prev,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          }));
          focusSortControl(0);
        } else {
          setCardNavState((prev) => ({
            ...prev,
            focusArea: "cards",
            focusedCardIndex: 0
          }));
          focusCard(0);
        }
        break;
      case "Home":
        event.preventDefault();
        handleTabSelect(0);
        setCardNavState((prev) => ({ ...prev, focusedTabIndex: 0 }));
        (_c = tabRefs.current[0]) == null ? void 0 : _c.focus();
        scrollTabIntoViewMobile(0);
        break;
      case "End":
        event.preventDefault();
        const lastIndex = tabPanels.length - 1;
        handleTabSelect(lastIndex);
        setCardNavState((prev) => ({ ...prev, focusedTabIndex: lastIndex }));
        (_d = tabRefs.current[lastIndex]) == null ? void 0 : _d.focus();
        scrollTabIntoViewMobile(lastIndex);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        handleTabSelect(index);
        break;
    }
  }, [tabPanels.length, handleTabSelect, layout, focusCard, setCardNavState, scrollTabIntoViewMobile]);
  const handleSortControlKeyDown = useCallback4((event, controlIndex) => {
    if (layout !== "cards") {
      return;
    }
    const { key } = event;
    const currentPanel = tabPanels[state.selectedIndex];
    if (controlIndex === 0 && !cardNavState.isSortControlsActive) {
      switch (key) {
        case "ArrowUp":
          event.preventDefault();
          setCardNavState((prev) => ({
            ...prev,
            focusArea: "tabs",
            isSortControlsActive: false
          }));
          focusTab(state.selectedIndex);
          break;
        case "ArrowDown":
          event.preventDefault();
          if ((currentPanel == null ? void 0 : currentPanel.data) && currentPanel.data.length > 0) {
            setCardNavState((prev) => ({
              ...prev,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: false
            }));
            focusCard(0);
          }
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          const availableControls = getAvailableSortControls();
          if (availableControls.length > 0) {
            setCardNavState((prev) => ({
              ...prev,
              isSortControlsActive: true,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            }));
            focusSortControl(1);
            const announcement = `Entered sort controls navigation mode. ${availableControls.length} controls available. Use arrow keys to navigate between controls.`;
            announceToScreenReader(announcement);
          }
          break;
        case "Escape":
          event.preventDefault();
          setCardNavState((prev) => ({
            ...prev,
            isSortControlsActive: false,
            focusArea: "tabs"
          }));
          focusTab(state.selectedIndex);
          break;
      }
      return;
    }
    if (cardNavState.isSortControlsActive) {
      const availableControls = getAvailableSortControls();
      const controlCount = availableControls.length;
      switch (key) {
        case "ArrowLeft":
          event.preventDefault();
          const prevControlIndex = cardNavState.focusedSortControlIndex > 1 ? cardNavState.focusedSortControlIndex - 1 : controlCount;
          setCardNavState((prev) => ({ ...prev, focusedSortControlIndex: prevControlIndex }));
          focusSortControl(prevControlIndex);
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextControlIndex = cardNavState.focusedSortControlIndex < controlCount ? cardNavState.focusedSortControlIndex + 1 : 1;
          setCardNavState((prev) => ({ ...prev, focusedSortControlIndex: nextControlIndex }));
          focusSortControl(nextControlIndex);
          break;
        case "ArrowDown":
          event.preventDefault();
          if (cardNavState.isSortControlsActive) {
            const nextControlIndexDown = cardNavState.focusedSortControlIndex < controlCount ? cardNavState.focusedSortControlIndex + 1 : 1;
            setCardNavState((prev) => ({ ...prev, focusedSortControlIndex: nextControlIndexDown }));
            focusSortControl(nextControlIndexDown);
          } else {
            if ((currentPanel == null ? void 0 : currentPanel.data) && currentPanel.data.length > 0) {
              setCardNavState((prev) => ({
                ...prev,
                focusArea: "cards",
                focusedCardIndex: 0,
                isSortControlsActive: false
              }));
              focusCard(0);
            }
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          setCardNavState((prev) => ({
            ...prev,
            isSortControlsActive: false,
            focusArea: "sort-controls"
          }));
          focusSortControl(0);
          break;
        case "Escape":
          event.preventDefault();
          setCardNavState((prev) => ({
            ...prev,
            isSortControlsActive: false,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          }));
          focusSortControl(0);
          break;
      }
    }
  }, [layout, tabPanels, state.selectedIndex, cardNavState.isSortControlsActive, cardNavState.focusedSortControlIndex, focusSortControl, focusTab, focusCard, setCardNavState, announceToScreenReader]);
  if (layout === "cards") {
    const currentPanel = tabPanels[state.selectedIndex];
    return /* @__PURE__ */ jsxs6("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${className || ""}`, children: [
      /* @__PURE__ */ jsxs6("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ jsx10(
          "div",
          {
            role: "tablist",
            "aria-label": ariaLabel,
            "aria-describedby": `${ariaDescription || ""} ${id ? `${id}-navigation-help` : ""}`.trim(),
            "aria-orientation": orientation,
            className: "aria-tabs-datagrid__tabs",
            children: tabPanels.map((panel, index) => {
              const isSelected = index === state.selectedIndex;
              const isDisabled = panel.disabled || disabled;
              return /* @__PURE__ */ jsxs6(
                "button",
                {
                  role: "tab",
                  id: `tab-${panel.id}`,
                  "aria-controls": `panel-${panel.id}`,
                  "aria-selected": isSelected,
                  "aria-disabled": isDisabled,
                  tabIndex: isSelected ? 0 : -1,
                  ref: (el) => {
                    tabRefs.current[index] = el;
                  },
                  onClick: () => handleTabSelect(index),
                  onKeyDown: (event) => handleTabKeyDownWithCards(event, index),
                  disabled: isDisabled,
                  className: [
                    "aria-tabs-datagrid__tab",
                    isSelected ? "aria-tabs-datagrid__tab--selected" : "",
                    isDisabled ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ jsx10("span", { className: "aria-tabs-datagrid__tab-label", children: panel.label }),
                    state.tabLoadingStates[index] && /* @__PURE__ */ jsx10("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "\u23F3" }),
                    state.tabErrors[index] && /* @__PURE__ */ jsx10("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "\u26A0\uFE0F" })
                  ]
                },
                panel.id
              );
            })
          }
        ),
        topActions && /* @__PURE__ */ jsx10("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: topActions })
      ] }),
      currentPanel && currentPanel.columns && /* @__PURE__ */ jsx10(Fragment2, { children: enableAdvancedSorting ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ jsx10(
          SortStatusControl,
          {
            sortConfig: state.sortConfig || [],
            columns: currentPanel.columns.map((col) => ({ key: col.key, label: col.label })),
            onSortChange: (newSortConfig) => {
              dispatch({ type: "SET_SORT", payload: newSortConfig });
            },
            ariaLabel: "Card view sort configuration",
            className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
          }
        )
      ) : (
        /* Simple card sorting */
        /* @__PURE__ */ jsx10(
          "div",
          {
            className: "aria-tabs-datagrid-adaptive__sort-controls",
            role: "region",
            "aria-label": "Sort controls",
            tabIndex: cardNavState.focusArea === "sort-controls" ? 0 : -1,
            ref: (el) => {
              sortControlRefs.current[0] = el;
            },
            onKeyDown: (event) => handleSortControlKeyDown(event, 0),
            children: /* @__PURE__ */ jsxs6("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ jsxs6("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ jsx10("label", { htmlFor: `card-sort-${currentPanel.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ jsx10(
                  Select,
                  {
                    id: `card-sort-${currentPanel.id}`,
                    name: `card-sort-${currentPanel.id}`,
                    value: cardNavState.cardSortConfig ? `${cardNavState.cardSortConfig.key}-${cardNavState.cardSortConfig.direction}` : "",
                    onChange: (e) => handleCardSort(e.target.value),
                    className: "sort-select",
                    children: generateSortOptions(currentPanel.columns).map((option) => /* @__PURE__ */ jsx10("option", { value: option.value, children: option.label }, option.value))
                  }
                )
              ] }),
              cardNavState.cardSortConfig && /* @__PURE__ */ jsxs6("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ jsxs6("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  getSortLabel(cardNavState.cardSortConfig)
                ] }),
                /* @__PURE__ */ jsx10(
                  Button_default,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => handleCardSort(""),
                    "aria-label": "Clear card sorting",
                    className: "sort-clear-button",
                    children: "Clear"
                  }
                )
              ] })
            ] })
          }
        )
      ) }),
      /* @__PURE__ */ jsx10(
        "div",
        {
          ref: cardsContainerRef,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${(currentPanel == null ? void 0 : currentPanel.label) || "Data"} cards in ${cardNavState.gridRows} rows and ${cardNavState.gridColumns} columns`,
          "aria-rowcount": cardNavState.gridRows,
          "aria-colcount": cardNavState.gridColumns,
          id: `panel-${currentPanel == null ? void 0 : currentPanel.id}`,
          "aria-labelledby": `tab-${currentPanel == null ? void 0 : currentPanel.id}`,
          children: sortCardDataCombined((currentPanel == null ? void 0 : currentPanel.data) || []).map((row, index) => {
            const isSelected = cardNavState.selectedCardIndex === index;
            const isFocused = cardNavState.focusedCardIndex === index && cardNavState.focusArea === "cards";
            const isInCardNavigation = cardNavState.focusedCardIndex === index && cardNavState.focusArea === "card" && cardNavState.isCardNavigationActive;
            const isFirstCardFocusable = index === 0 && cardNavState.focusArea !== "cards";
            const shouldBeFocusable = isFocused || isFirstCardFocusable;
            const gridPosition = indexToGrid(index, cardNavState.gridColumns);
            if (cardConfig.cardTemplate) {
              const customCard = cardConfig.cardTemplate(row, currentPanel.columns);
              return /* @__PURE__ */ jsx10(
                "div",
                {
                  role: "row",
                  "aria-rowindex": gridPosition.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ jsx10(
                    "div",
                    {
                      ref: (el) => {
                        cardRefs.current[index] = el;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        isSelected ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        isFocused ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        isInCardNavigation ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": gridPosition.col + 1,
                      "aria-selected": isSelected,
                      "aria-expanded": isInCardNavigation,
                      "aria-description": isInCardNavigation ? `Card navigation active. ${cardNavState.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: shouldBeFocusable ? 0 : -1,
                      onClick: () => {
                        setCardNavState((prev) => ({
                          ...prev,
                          selectedCardIndex: prev.selectedCardIndex === index ? -1 : index
                        }));
                        handleCardSelect(row);
                      },
                      onKeyDown: (event) => handleCardKeyDown(event, index),
                      onFocus: () => {
                        setCardNavState((prev) => {
                          if (prev.focusedCardIndex !== index || prev.focusArea !== "cards") {
                            return {
                              ...prev,
                              focusedCardIndex: index,
                              focusArea: "cards"
                            };
                          }
                          return prev;
                        });
                      },
                      children: customCard
                    }
                  )
                },
                `card-${index}`
              );
            }
            const cardProps = createCard(row, currentPanel.columns, genericCardConfig, domainPlugin);
            const cardClassName = [
              cardProps.className || "",
              isSelected ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              isFocused ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              isInCardNavigation ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ jsx10(
              "div",
              {
                role: "row",
                "aria-rowindex": gridPosition.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ jsx10(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      isSelected ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      isFocused ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      isInCardNavigation ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": gridPosition.col + 1,
                    "aria-selected": isSelected,
                    "aria-expanded": isInCardNavigation,
                    onKeyDown: (event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        setCardNavState((prev) => ({
                          ...prev,
                          selectedCardIndex: index
                        }));
                      }
                      handleCardKeyDown(event, index);
                    },
                    children: /* @__PURE__ */ jsx10(
                      Card,
                      {
                        ...cardProps,
                        ref: (el) => {
                          cardRefs.current[index] = el;
                        },
                        className: cardClassName,
                        "aria-label": `${cardProps["aria-label"] || cardProps.heading}. ${isInCardNavigation ? `Card navigation active with ${cardNavState.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: shouldBeFocusable ? 0 : -1,
                        onClick: () => {
                          setCardNavState((prev) => ({
                            ...prev,
                            selectedCardIndex: prev.selectedCardIndex === index ? -1 : index
                          }));
                          handleCardSelect(row);
                        },
                        onKeyDown: (event) => handleCardKeyDown(event, index),
                        onFocus: () => {
                          if (!cardNavState.isCardNavigationActive) {
                            setCardNavState((prev) => {
                              if (prev.focusedCardIndex !== index || prev.focusArea !== "cards") {
                                return {
                                  ...prev,
                                  focusedCardIndex: index,
                                  focusArea: "cards",
                                  focusedCardElementIndex: 0,
                                  cardElements: []
                                };
                              }
                              return prev;
                            });
                          }
                        }
                      }
                    )
                  }
                )
              },
              `card-${index}`
            );
          })
        }
      ),
      bottomActions && /* @__PURE__ */ jsx10("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: bottomActions }),
      /* @__PURE__ */ jsx10(
        "div",
        {
          ref: announcementsRef,
          className: "aria-tabs-datagrid-adaptive__announcements",
          "aria-hidden": "true",
          style: {
            position: "fixed",
            top: "-1px",
            left: "-1px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
            padding: 0,
            margin: 0
          }
        }
      )
    ] });
  }
  if (layout === "hybrid") {
    return /* @__PURE__ */ jsxs6("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${className || ""}`, children: [
      topActions && /* @__PURE__ */ jsx10("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: topActions }),
      /* @__PURE__ */ jsx10(
        AriaTabsDataGrid,
        {
          tabPanels,
          dataConfig,
          ariaLabel,
          ariaDescription,
          orientation,
          id,
          disabled,
          selectedIndex: selectedIndexProp,
          onTabChange,
          className: "aria-tabs-datagrid-adaptive__table--hybrid",
          actions: gridActions,
          forceActionsAbove: forceGridActionsAbove,
          ...props
        }
      ),
      bottomActions && /* @__PURE__ */ jsx10("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: bottomActions })
    ] });
  }
  return /* @__PURE__ */ jsxs6("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${className || ""}`, children: [
    topActions && /* @__PURE__ */ jsx10("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: topActions }),
    /* @__PURE__ */ jsx10(
      AriaTabsDataGrid,
      {
        tabPanels,
        dataConfig,
        ariaLabel,
        ariaDescription,
        orientation,
        id,
        disabled,
        selectedIndex: selectedIndexProp,
        onTabChange,
        actions: gridActions,
        forceActionsAbove: forceGridActionsAbove,
        ...props
      }
    ),
    bottomActions && /* @__PURE__ */ jsx10("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: bottomActions })
  ] });
};

// src/components/ResponsiveDataGrid/ResponsiveDataGridDemo.tsx
import { useState as useState4, useMemo as useMemo4 } from "react";

// src/components/SortableDataTable/icons.tsx
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var booleanIcon = [
  {
    value: true,
    icon: /* @__PURE__ */ jsx11("svg", { className: "nhsuk-icon nhsuk-icon__tick", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ jsx11("path", { strokeWidth: "4", strokeLinecap: "round", d: "M18.4 7.8l-8.5 8.4L5.6 12", stroke: "#007f3b" }) })
  },
  {
    value: false,
    icon: /* @__PURE__ */ jsxs7("svg", { className: "nhsuk-icon nhsuk-icon__cross", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx11("path", { d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z", fill: "#d5281b" }),
      /* @__PURE__ */ jsx11("path", { d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z", fill: "#d5281b" })
    ] })
  }
];

// src/components/SortableDataTable/AriaTabsDataGridTCH.tsx
var healthcareDataComparator = (data1, data2) => {
  if (!data1 || !data2) return data1 === data2;
  if (data1.name && data1.bed_name && data2.name && data2.bed_name) {
    return data1.name === data2.name && data1.bed_name === data2.bed_name;
  }
  return JSON.stringify(data1) === JSON.stringify(data2);
};
var healthcareFilterFunction = (data, filters) => {
  if (!filters) return data;
  return data.filter((patient) => {
    if (filters.ewsScoreRange) {
      const [min, max] = filters.ewsScoreRange;
      if (patient.ews_score < min || patient.ews_score > max) return false;
    }
    if (filters.wards && filters.wards.length > 0) {
      if (!filters.wards.includes(patient.ward_name)) return false;
    }
    if (filters.specialties && filters.specialties.length > 0) {
      if (!filters.specialties.includes(patient.speciality)) return false;
    }
    if (filters.dischargeStatuses && filters.dischargeStatuses.length > 0) {
      if (!filters.dischargeStatuses.includes(patient.early_discharge_notification)) return false;
    }
    if (filters.avpuLevels && filters.avpuLevels.length > 0) {
      if (!filters.avpuLevels.includes(patient.ews_data.avpu)) return false;
    }
    if (filters.medicallyOptimised !== null && filters.medicallyOptimised !== void 0) {
      if (patient.medically_optimised !== filters.medicallyOptimised) return false;
    }
    if (filters.fastTrack !== null && filters.fastTrack !== void 0) {
      if (patient.fast_track !== filters.fastTrack) return false;
    }
    return true;
  });
};
var nhsBooleanRenderer = (value) => {
  if (typeof value === "boolean") {
    const iconEntry2 = booleanIcon.find((icon) => icon.value === value);
    return iconEntry2 ? iconEntry2.icon : null;
  }
  const iconEntry = booleanIcon.find((icon) => icon.value === value);
  return iconEntry ? iconEntry.icon : String(value);
};
var healthcareGetDataId = (data) => {
  return `${data.name}-${data.bed_name}`;
};
var tchDataConfig = {
  dataComparator: healthcareDataComparator,
  filterFunction: healthcareFilterFunction,
  booleanRenderer: nhsBooleanRenderer,
  getDataId: healthcareGetDataId
};

// src/components/SortableDataTable/AriaTabsDataGridFactory.ts
var createGenericTabsConfig = (data, tabDefinitions) => {
  return tabDefinitions.map((def) => ({
    id: def.id,
    label: def.label,
    data: def.filter ? def.filter(data) : data,
    columns: def.columns.map((col) => ({
      key: col.key,
      label: col.label,
      render: col.render,
      customRenderer: col.customRenderer
    })),
    sortConfig: def.sortConfig,
    ariaLabel: def.ariaLabel || `${def.label} Data Grid`,
    ariaDescription: def.ariaDescription || `Data grid showing ${def.label.toLowerCase()}`,
    className: def.className,
    disabled: def.disabled
  }));
};

// src/components/SortableDataTable/AriaTabsDataGridPlugins.ts
var renderBooleanWithIcon = (value) => {
  const iconEntry = booleanIcon.find((icon) => icon.value === value);
  return iconEntry ? iconEntry.icon : null;
};
var ecommerceDataConfig = {
  dataComparator: (a, b) => a.id === b.id,
  filterFunction: (data, filters) => {
    if (!filters) return data;
    return data.filter((product) => {
      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        const price = product.discountedPrice || product.price;
        if (price < min || price > max) return false;
      }
      if (filters.categories && filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) return false;
      }
      if (filters.inStock !== void 0) {
        if (product.inStock !== filters.inStock) return false;
      }
      if (filters.minRating !== void 0) {
        if (product.rating < filters.minRating) return false;
      }
      if (filters.tags && filters.tags.length > 0) {
        if (!filters.tags.some((tag) => product.tags.includes(tag))) return false;
      }
      return true;
    });
  },
  booleanRenderer: (value) => renderBooleanWithIcon(value),
  getDataId: (product) => `ecommerce-${product.id}`
};
var createEcommerceTabs = (products) => {
  const tabDefinitions = [
    {
      id: "all-products",
      label: "All Products",
      columns: [
        { key: "name", label: "Product Name" },
        {
          key: "price",
          label: "Price",
          render: (product) => {
            if (product.discountedPrice) {
              return `$${product.price.toFixed(2)} \u2192 $${product.discountedPrice.toFixed(2)}`;
            }
            return `$${product.price.toFixed(2)}`;
          }
        },
        { key: "inStock", label: "Availability" },
        { key: "category", label: "Category" },
        {
          key: "rating",
          label: "Rating",
          render: (product) => `${product.rating}/5 (${product.reviews} reviews)`
        }
      ],
      ariaLabel: "All Products Grid",
      ariaDescription: "Complete product catalog with pricing and availability"
    },
    {
      id: "on-sale",
      label: "On Sale",
      columns: [
        { key: "name", label: "Product Name" },
        {
          key: "price",
          label: "Original Price",
          render: (product) => `$${product.price.toFixed(2)}`
        },
        {
          key: "discountedPrice",
          label: "Sale Price",
          render: (product) => {
            var _a;
            return `$${((_a = product.discountedPrice) == null ? void 0 : _a.toFixed(2)) || "N/A"}`;
          }
        },
        {
          key: "discount",
          label: "Discount",
          render: (product) => {
            if (product.discountedPrice) {
              const discount = (product.price - product.discountedPrice) / product.price * 100;
              return `${discount.toFixed(0)}% OFF`;
            }
            return "N/A";
          }
        }
      ],
      filter: (products2) => products2.filter((p) => p.discountedPrice !== void 0),
      ariaLabel: "Sale Products Grid",
      ariaDescription: "Products currently on sale with discounted pricing"
    },
    {
      id: "high-rated",
      label: "Top Rated",
      columns: [
        { key: "name", label: "Product Name" },
        { key: "rating", label: "Rating" },
        { key: "reviews", label: "Reviews" },
        { key: "category", label: "Category" }
      ],
      filter: (products2) => products2.filter((p) => p.rating >= 4),
      sortConfig: [{ key: "rating", direction: "desc" }],
      ariaLabel: "Top Rated Products Grid",
      ariaDescription: "Highest rated products with 4+ star ratings"
    }
  ];
  return createGenericTabsConfig(products, tabDefinitions);
};
var financialDataConfig = {
  dataComparator: (a, b) => a.id === b.id,
  filterFunction: (data, filters) => {
    if (!filters) return data;
    return data.filter((transaction) => {
      if (filters.dateRange) {
        const [startDate, endDate] = filters.dateRange;
        if (transaction.date < startDate || transaction.date > endDate) return false;
      }
      if (filters.amountRange) {
        const [min, max] = filters.amountRange;
        if (Math.abs(transaction.amount) < min || Math.abs(transaction.amount) > max) return false;
      }
      if (filters.types && filters.types.length > 0) {
        if (!filters.types.includes(transaction.type)) return false;
      }
      if (filters.categories && filters.categories.length > 0) {
        if (!filters.categories.includes(transaction.category)) return false;
      }
      if (filters.pending !== void 0) {
        if (transaction.pending !== filters.pending) return false;
      }
      return true;
    });
  },
  booleanRenderer: (value) => renderBooleanWithIcon(value),
  getDataId: (transaction) => `financial-${transaction.id}`
};
var createFinancialTabs = (transactions) => {
  const tabDefinitions = [
    {
      id: "all-transactions",
      label: "All Transactions",
      columns: [
        {
          key: "date",
          label: "Date",
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: "description", label: "Description" },
        {
          key: "amount",
          label: "Amount",
          render: (transaction) => {
            const prefix = transaction.type === "credit" ? "+" : "-";
            return `${prefix}$${Math.abs(transaction.amount).toFixed(2)}`;
          }
        },
        { key: "category", label: "Category" },
        { key: "pending", label: "Status" }
      ],
      sortConfig: [{ key: "date", direction: "desc" }],
      ariaLabel: "All Transactions Grid",
      ariaDescription: "Complete transaction history with amounts and categories"
    },
    {
      id: "credits",
      label: "Credits",
      columns: [
        {
          key: "date",
          label: "Date",
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: "description", label: "Description" },
        {
          key: "amount",
          label: "Amount",
          render: (transaction) => `+$${transaction.amount.toFixed(2)}`
        },
        { key: "category", label: "Category" }
      ],
      filter: (transactions2) => transactions2.filter((t) => t.type === "credit"),
      ariaLabel: "Credit Transactions Grid",
      ariaDescription: "Incoming payments and credits only"
    },
    {
      id: "debits",
      label: "Debits",
      columns: [
        {
          key: "date",
          label: "Date",
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: "description", label: "Description" },
        {
          key: "amount",
          label: "Amount",
          render: (transaction) => `-$${Math.abs(transaction.amount).toFixed(2)}`
        },
        { key: "category", label: "Category" }
      ],
      filter: (transactions2) => transactions2.filter((t) => t.type === "debit"),
      ariaLabel: "Debit Transactions Grid",
      ariaDescription: "Outgoing payments and charges only"
    },
    {
      id: "pending",
      label: "Pending",
      columns: [
        {
          key: "date",
          label: "Date",
          render: (transaction) => transaction.date.toLocaleDateString()
        },
        { key: "description", label: "Description" },
        {
          key: "amount",
          label: "Amount",
          render: (transaction) => {
            const prefix = transaction.type === "credit" ? "+" : "-";
            return `${prefix}$${Math.abs(transaction.amount).toFixed(2)}`;
          }
        },
        { key: "type", label: "Type" }
      ],
      filter: (transactions2) => transactions2.filter((t) => t.pending),
      ariaLabel: "Pending Transactions Grid",
      ariaDescription: "Transactions awaiting processing"
    }
  ];
  return createGenericTabsConfig(transactions, tabDefinitions);
};
var dataGridPlugins = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: ecommerceDataConfig,
    createTabs: createEcommerceTabs
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: financialDataConfig,
    createTabs: createFinancialTabs
  }
};
var createPluginDataGrid = (pluginName, data) => {
  const plugin = dataGridPlugins[pluginName];
  return {
    dataConfig: plugin.dataConfig,
    tabPanels: plugin.createTabs(data)
  };
};

// src/components/ResponsiveDataGrid/ResponsiveDataGridDemo.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var samplePatients = [
  {
    name: "Sarah Johnson",
    age: 34,
    ews_data: {
      respiratory_rate_bpm: 16,
      sp02: 98,
      temperature: 36.8,
      systolic_bp: 140,
      heart_rate: 82,
      avpu: "alert"
    },
    ews_score: 3,
    ward_name: "Cardiology",
    room_name: "Room A",
    bed_name: "A-1",
    bed_type: "bed",
    admin_note: "Hypertension monitoring",
    pathway: "Standard",
    speciality: "Cardiology",
    consultant: "Dr. Smith",
    local_authority: "NHS Trust",
    early_discharge_notification: "not_required",
    needs_based_assessment: false,
    medically_optimised: true,
    criteria_to_reside: true,
    date_medically_optimised: "2024-01-15",
    anticipated_discharge_date: "2024-01-18",
    dru_suitability: false,
    optica_planned_discharge_date: "2024-01-18",
    optica_date_confirmed: "2024-01-16",
    dsum: null,
    medications_tta: "None required",
    transport_booking: false,
    transport_status: "Pending",
    transport_date: "",
    transport_mobility: "Independent",
    fast_track: false,
    initial_therapy_contact: "",
    equipment: "None",
    district_nurse_referral: false
  },
  {
    name: "Michael Chen",
    age: 67,
    ews_data: {
      respiratory_rate_bpm: 20,
      sp02: 94,
      temperature: 37.2,
      systolic_bp: 160,
      heart_rate: 95,
      avpu: "alert"
    },
    ews_score: 7,
    ward_name: "Surgery",
    room_name: "Room B",
    bed_name: "B-3",
    bed_type: "bed",
    admin_note: "Post-operative monitoring",
    pathway: "Surgical",
    speciality: "General Surgery",
    consultant: "Dr. Johnson",
    local_authority: "NHS Trust",
    early_discharge_notification: "due",
    needs_based_assessment: true,
    medically_optimised: false,
    criteria_to_reside: true,
    date_medically_optimised: "2024-01-17",
    anticipated_discharge_date: "2024-01-20",
    dru_suitability: true,
    optica_planned_discharge_date: "2024-01-20",
    optica_date_confirmed: "2024-01-16",
    dsum: "Complex discharge",
    medications_tta: "Pain management",
    transport_booking: true,
    transport_status: "In Progress",
    transport_date: "2024-01-20",
    transport_mobility: "Wheelchair",
    fast_track: false,
    initial_therapy_contact: "2024-01-17",
    equipment: "Walking frame",
    district_nurse_referral: true
  },
  {
    name: "Emma Thompson",
    age: 28,
    ews_data: {
      respiratory_rate_bpm: 24,
      sp02: 90,
      temperature: 38.5,
      systolic_bp: 110,
      heart_rate: 105,
      avpu: "alert"
    },
    ews_score: 5,
    ward_name: "Respiratory",
    room_name: "Room C",
    bed_name: "C-2",
    bed_type: "bed",
    admin_note: "Pneumonia treatment",
    pathway: "Respiratory",
    speciality: "Respiratory Medicine",
    consultant: "Dr. Williams",
    local_authority: "NHS Trust",
    early_discharge_notification: "overdue",
    needs_based_assessment: true,
    medically_optimised: false,
    criteria_to_reside: false,
    date_medically_optimised: "",
    anticipated_discharge_date: "2024-01-22",
    dru_suitability: false,
    optica_planned_discharge_date: "2024-01-22",
    optica_date_confirmed: "",
    dsum: null,
    medications_tta: "Antibiotics",
    transport_booking: false,
    transport_status: "Pending",
    transport_date: "",
    transport_mobility: "Independent",
    fast_track: true,
    initial_therapy_contact: "",
    equipment: "Oxygen",
    district_nurse_referral: false
  }
];
var sampleAppointments = [
  {
    id: "appt-001",
    appointment_time: "2024-01-18T09:00:00Z",
    patient_name: "Sarah Johnson",
    appointment_type: "Cardiology Consultation",
    consultant: "Dr. Smith",
    location: "Clinic Room 3",
    duration: 30,
    status: "pending"
  },
  {
    id: "appt-002",
    appointment_time: "2024-01-18T10:30:00Z",
    patient_name: "Michael Davis",
    appointment_type: "Post-op Follow-up",
    consultant: "Dr. Johnson",
    location: "Surgery Ward",
    duration: 15,
    status: "active"
  },
  {
    id: "appt-003",
    appointment_time: "2024-01-18T14:00:00Z",
    patient_name: "Emma Thompson",
    appointment_type: "Respiratory Assessment",
    consultant: "Dr. Wilson",
    location: "Emergency Department",
    duration: 45,
    status: "pending"
  }
];
var sampleMedications = [
  {
    id: "med-001",
    medication: "Amlodipine",
    dose: "5mg",
    frequency: "Once daily",
    route: "Oral",
    next_due: "2024-01-18T08:00:00Z",
    prescriber: "Dr. Smith",
    patient_name: "Sarah Johnson",
    allergies: null,
    priority: "medium"
  },
  {
    id: "med-002",
    medication: "Morphine",
    dose: "10mg",
    frequency: "Every 4 hours",
    route: "IV",
    next_due: "2024-01-18T10:00:00Z",
    prescriber: "Dr. Johnson",
    patient_name: "Michael Davis",
    allergies: "Codeine allergy",
    priority: "high"
  },
  {
    id: "med-003",
    medication: "Salbutamol",
    dose: "2 puffs",
    frequency: "As needed",
    route: "Inhaled",
    next_due: "2024-01-18T12:00:00Z",
    prescriber: "Dr. Wilson",
    patient_name: "Emma Thompson",
    allergies: null,
    priority: "high"
  }
];
var sampleVitals = [
  {
    id: "vitals-001",
    patient_name: "Sarah Johnson",
    recorded_time: "2024-01-18T07:30:00Z",
    temperature: 36.8,
    blood_pressure: "140/90",
    heart_rate: 82,
    respiratory_rate: 16,
    oxygen_saturation: 98,
    ews_score: 3,
    priority: "medium"
  },
  {
    id: "vitals-002",
    patient_name: "Michael Davis",
    recorded_time: "2024-01-18T08:15:00Z",
    temperature: 37.2,
    blood_pressure: "130/85",
    heart_rate: 98,
    respiratory_rate: 20,
    oxygen_saturation: 95,
    ews_score: 7,
    priority: "high"
  },
  {
    id: "vitals-003",
    patient_name: "Emma Thompson",
    recorded_time: "2024-01-18T09:00:00Z",
    temperature: 38.5,
    blood_pressure: "110/70",
    heart_rate: 105,
    respiratory_rate: 24,
    oxygen_saturation: 90,
    ews_score: 9,
    priority: "high"
  }
];
var sampleProducts = [
  {
    id: "PROD001",
    name: "Wireless Headphones",
    price: 199.99,
    discountedPrice: 149.99,
    inStock: true,
    category: "Electronics",
    rating: 4.5,
    reviews: 1247,
    tags: ["wireless", "bluetooth", "premium"]
  },
  {
    id: "PROD002",
    name: "Running Shoes",
    price: 129.99,
    inStock: true,
    category: "Sports",
    rating: 4.8,
    reviews: 892,
    tags: ["running", "athletic", "comfortable"]
  },
  {
    id: "PROD003",
    name: "Coffee Maker",
    price: 89.99,
    discountedPrice: 59.99,
    inStock: false,
    category: "Kitchen",
    rating: 4.2,
    reviews: 456,
    tags: ["kitchen", "coffee", "appliance"]
  },
  {
    id: "PROD004",
    name: "Smartphone Case",
    price: 24.99,
    inStock: true,
    category: "Accessories",
    rating: 4,
    reviews: 234,
    tags: ["protection", "mobile", "durable"]
  }
];
var sampleTransactions = [
  {
    id: "TXN001",
    date: /* @__PURE__ */ new Date("2024-01-15"),
    amount: 2500,
    type: "credit",
    category: "Salary",
    description: "Monthly salary payment",
    accountId: "ACC001",
    pending: false,
    recurring: true
  },
  {
    id: "TXN002",
    date: /* @__PURE__ */ new Date("2024-01-14"),
    amount: 89.5,
    type: "debit",
    category: "Groceries",
    description: "Supermarket shopping",
    accountId: "ACC001",
    pending: false,
    recurring: false
  },
  {
    id: "TXN003",
    date: /* @__PURE__ */ new Date("2024-01-16"),
    amount: 1200,
    type: "debit",
    category: "Rent",
    description: "Monthly rent payment",
    accountId: "ACC001",
    pending: true,
    recurring: true
  },
  {
    id: "TXN004",
    date: /* @__PURE__ */ new Date("2024-01-13"),
    amount: 150,
    type: "credit",
    category: "Refund",
    description: "Product return refund",
    accountId: "ACC001",
    pending: false,
    recurring: false
  }
];
var sampleLeads = [
  {
    id: "LEAD001",
    companyName: "Tech Solutions Inc",
    contactPerson: "John Smith",
    email: "john@techsolutions.com",
    status: "qualified",
    value: 5e4,
    lastContact: /* @__PURE__ */ new Date("2024-01-15"),
    source: "Website",
    isHotLead: true
  },
  {
    id: "LEAD002",
    companyName: "Global Industries",
    contactPerson: "Maria Garcia",
    email: "maria@globalind.com",
    status: "contacted",
    value: 25e3,
    lastContact: /* @__PURE__ */ new Date("2024-01-14"),
    source: "Referral",
    isHotLead: false
  },
  {
    id: "LEAD003",
    companyName: "StartupXYZ",
    contactPerson: "Alex Johnson",
    email: "alex@startupxyz.com",
    status: "new",
    value: 15e3,
    lastContact: /* @__PURE__ */ new Date("2024-01-16"),
    source: "Cold Call",
    isHotLead: true
  }
];
var businessLeadsConfig = {
  dataComparator: (a, b) => a.id === b.id,
  filterFunction: (data, filters) => {
    if (!filters) return data;
    return data.filter((lead) => {
      if (filters.status && !filters.status.includes(lead.status)) return false;
      if (filters.minValue && lead.value < filters.minValue) return false;
      if (filters.hotLeadsOnly && !lead.isHotLead) return false;
      return true;
    });
  },
  booleanRenderer: (value) => /* @__PURE__ */ jsx12("span", { style: {
    color: value ? "#dc2626" : "#6b7280",
    fontWeight: value ? "bold" : "normal"
  }, children: value ? "\u{1F525} Hot Lead" : "\u{1F4CB} Standard" }),
  getDataId: (lead) => `business-${lead.id}`
};
var createHealthcareWorkflowTabs = () => {
  return [
    {
      id: "patients",
      label: "Patients",
      data: samplePatients,
      columns: [
        { key: "name", label: "Patient Name" },
        { key: "age", label: "Age" },
        { key: "ward_name", label: "Ward" },
        { key: "ews_score", label: "EWS Score" }
      ],
      ariaLabel: "Patient Records",
      ariaDescription: "Healthcare patient management with EWS monitoring",
      cardTemplate: (data, columns) => /* @__PURE__ */ jsx12(
        PatientCard,
        {
          data,
          columns,
          onSelect: (patient) => console.log("Selected patient:", patient),
          onAction: (action, patient) => console.log("Patient action:", action, patient),
          priority: data.ews_score >= 7 ? "high" : data.ews_score >= 3 ? "medium" : "low"
        }
      )
    },
    {
      id: "appointments",
      label: "Appointments",
      data: sampleAppointments,
      columns: [
        { key: "appointment_time", label: "Time" },
        { key: "patient_name", label: "Patient" },
        { key: "appointment_type", label: "Type" },
        { key: "consultant", label: "Consultant" }
      ],
      ariaLabel: "Patient Appointments",
      ariaDescription: "Scheduled appointments and consultations",
      cardTemplate: (data, columns) => /* @__PURE__ */ jsx12(
        AppointmentCard,
        {
          data,
          columns,
          onSelect: (appointment) => console.log("Selected appointment:", appointment),
          onAction: (action, appointment) => console.log("Appointment action:", action, appointment),
          status: data.status
        }
      )
    },
    {
      id: "medications",
      label: "Medications",
      data: sampleMedications,
      columns: [
        { key: "medication", label: "Medication" },
        { key: "dose", label: "Dose" },
        { key: "frequency", label: "Frequency" },
        { key: "next_due", label: "Next Due" }
      ],
      ariaLabel: "Patient Medications",
      ariaDescription: "Medication administration and scheduling",
      cardTemplate: (data, columns) => /* @__PURE__ */ jsx12(
        MedicationCard,
        {
          data,
          columns,
          onSelect: (medication) => console.log("Selected medication:", medication),
          onAction: (action, medication) => console.log("Medication action:", action, medication),
          priority: data.priority
        }
      )
    },
    {
      id: "vitals",
      label: "Vital Signs",
      data: sampleVitals,
      columns: [
        { key: "patient_name", label: "Patient" },
        { key: "recorded_time", label: "Time" },
        { key: "temperature", label: "Temperature" },
        { key: "ews_score", label: "EWS Score" }
      ],
      ariaLabel: "Patient Vital Signs",
      ariaDescription: "Patient vital signs monitoring and EWS scores",
      cardTemplate: (data, columns) => /* @__PURE__ */ jsx12(
        VitalsCard,
        {
          data,
          columns,
          onSelect: (vitals) => console.log("Selected vitals:", vitals),
          onAction: (action, vitals) => console.log("Vitals action:", action, vitals),
          priority: data.ews_score >= 7 ? "high" : data.ews_score >= 3 ? "medium" : "low"
        }
      )
    }
  ];
};
var AriaTabsDataGridComprehensiveDemo = () => {
  const [demoMode, setDemoMode] = useState4("healthcare");
  const demoConfigurations = useMemo4(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: tchDataConfig,
      tabPanels: createHealthcareWorkflowTabs(),
      data: samplePatients
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...createPluginDataGrid("ecommerce", sampleProducts),
      data: sampleProducts
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...createPluginDataGrid("financial", sampleTransactions),
      data: sampleTransactions
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: businessLeadsConfig,
      tabPanels: createGenericTabsConfig(sampleLeads, [
        {
          id: "all-leads",
          label: "All Leads",
          columns: [
            { key: "companyName", label: "Company" },
            { key: "contactPerson", label: "Contact" },
            { key: "status", label: "Status" },
            {
              key: "value",
              label: "Value",
              render: (lead) => `$${lead.value.toLocaleString()}`
            },
            { key: "isHotLead", label: "Priority" }
          ],
          ariaLabel: "All Sales Leads Grid",
          ariaDescription: "Complete sales pipeline with lead information"
        },
        {
          id: "hot-leads",
          label: "Hot Leads",
          columns: [
            { key: "companyName", label: "Company" },
            { key: "contactPerson", label: "Contact" },
            {
              key: "value",
              label: "Value",
              render: (lead) => `$${lead.value.toLocaleString()}`
            },
            {
              key: "lastContact",
              label: "Last Contact",
              render: (lead) => lead.lastContact.toLocaleDateString()
            }
          ],
          filter: (leads) => leads.filter((lead) => lead.isHotLead),
          sortConfig: [{ key: "value", direction: "desc" }],
          ariaLabel: "Hot Leads Grid",
          ariaDescription: "High-priority leads requiring immediate attention"
        },
        {
          id: "pipeline",
          label: "Active Pipeline",
          columns: [
            { key: "companyName", label: "Company" },
            { key: "status", label: "Status" },
            {
              key: "value",
              label: "Value",
              render: (lead) => `$${lead.value.toLocaleString()}`
            },
            { key: "source", label: "Source" }
          ],
          filter: (leads) => leads.filter(
            (lead) => ["contacted", "qualified"].includes(lead.status)
          ),
          ariaLabel: "Active Pipeline Grid",
          ariaDescription: "Leads currently in the sales pipeline"
        }
      ]),
      data: sampleLeads
    }
  }), []);
  const currentConfig = demoConfigurations[demoMode];
  return /* @__PURE__ */ jsxs8("div", { style: { padding: "2rem", maxWidth: "1200px", margin: "0 auto" }, children: [
    /* @__PURE__ */ jsxs8("div", { style: { marginBottom: "2rem" }, children: [
      /* @__PURE__ */ jsx12("h1", { style: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#1f2937"
      }, children: "AriaTabsDataGrid - Comprehensive Demo" }),
      /* @__PURE__ */ jsx12("p", { style: {
        fontSize: "1.1rem",
        color: "#6b7280",
        marginBottom: "2rem",
        lineHeight: "1.6"
      }, children: "This demo showcases the component's versatility across different domains: healthcare, e-commerce, financial services, and custom business applications. Each configuration demonstrates domain-specific data operations, custom renderers, and specialized filtering logic." }),
      /* @__PURE__ */ jsx12("div", { style: {
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap"
      }, children: Object.keys(demoConfigurations).map((mode) => /* @__PURE__ */ jsx12(
        Button,
        {
          variant: demoMode === mode ? "primary" : "secondary",
          onClick: () => setDemoMode(mode),
          style: {
            textTransform: "capitalize"
          },
          children: mode
        },
        mode
      )) }),
      /* @__PURE__ */ jsxs8("div", { style: {
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        marginBottom: "2rem"
      }, children: [
        /* @__PURE__ */ jsx12("h2", { style: {
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#1e293b"
        }, children: currentConfig.title }),
        /* @__PURE__ */ jsx12("p", { style: {
          color: "#64748b",
          marginBottom: "1rem"
        }, children: currentConfig.description }),
        /* @__PURE__ */ jsxs8("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          fontSize: "0.9rem"
        }, children: [
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx12("strong", { children: "Data Records:" }),
            " ",
            currentConfig.data.length
          ] }),
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx12("strong", { children: "Tab Panels:" }),
            " ",
            currentConfig.tabPanels.length
          ] }),
          /* @__PURE__ */ jsxs8("div", { children: [
            /* @__PURE__ */ jsx12("strong", { children: "Features:" }),
            " ",
            [
              "Row Selection",
              "Custom Filtering",
              "Domain-Specific Renderers",
              "Keyboard Navigation",
              "ARIA Compliance"
            ].join(", ")
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx12(
      AriaTabsDataGrid,
      {
        dataConfig: currentConfig.dataConfig,
        tabPanels: currentConfig.tabPanels,
        ariaLabel: `${currentConfig.title} Data Grid`,
        ariaDescription: `Interactive data grid for ${currentConfig.description.toLowerCase()}`
      }
    ),
    /* @__PURE__ */ jsxs8("div", { style: {
      marginTop: "3rem",
      padding: "1.5rem",
      backgroundColor: "#f1f5f9",
      borderRadius: "0.5rem",
      border: "1px solid #cbd5e1"
    }, children: [
      /* @__PURE__ */ jsx12("h3", { style: {
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "1rem",
        color: "#334155"
      }, children: "Implementation Details" }),
      /* @__PURE__ */ jsxs8("div", { style: { display: "grid", gap: "1rem", fontSize: "0.9rem" }, children: [
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx12("strong", { children: "Current Mode:" }),
          " ",
          demoMode,
          " configuration"
        ] }),
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx12("strong", { children: "Data Operations:" }),
          " Custom comparator, filter function, and boolean renderer"
        ] }),
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx12("strong", { children: "Architecture:" }),
          " Generic core with domain-specific plugins and factory helpers"
        ] }),
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx12("strong", { children: "State Management:" }),
          " Global row selection with data-object persistence"
        ] }),
        /* @__PURE__ */ jsxs8("div", { children: [
          /* @__PURE__ */ jsx12("strong", { children: "Accessibility:" }),
          " Full ARIA support with dynamic labels and descriptions"
        ] })
      ] })
    ] })
  ] });
};
var ResponsiveDataGridDemo = AriaTabsDataGridComprehensiveDemo;

// src/components/ResponsiveDataGrid/GenericCard.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function GenericCard({ data, columns, config, className, headingOverride }) {
  const mergedConfig = { ...defaultGenericCardConfig, ...config };
  const cardProps = createGenericCard(data, columns, mergedConfig);
  return /* @__PURE__ */ jsx13(
    Card,
    {
      ...cardProps,
      heading: headingOverride != null ? headingOverride : cardProps.heading,
      className: [cardProps.className, className].filter(Boolean).join(" ")
    }
  );
}
export {
  ResponsiveDataGrid as AdaptiveDataGrid,
  AppointmentCard,
  ResponsiveDataGrid as AriaTabsDataGridAdaptive,
  GenericCard,
  MedicationCard,
  PatientCard,
  ResponsiveDataGrid,
  ResponsiveDataGridDemo,
  VitalsCard,
  convertLegacyCardConfig,
  createGenericCard,
  ResponsiveDataGrid as default,
  defaultGenericCardConfig,
  healthcarePlugin,
  isHealthcareData
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
