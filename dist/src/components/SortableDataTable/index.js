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

// src/components/SortableDataTable/AriaDataGrid.tsx
var import_classnames = __toESM(require_classnames(), 1);
import React, { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var AriaDataGrid = React.forwardRef(
  ({
    data,
    columns,
    sortConfig,
    onSort,
    selectedRowIndex,
    onRowSelect,
    id,
    testId,
    ariaLabel,
    ariaLabelledby,
    ariaDescribedby,
    className,
    tableClassName,
    bordered = false,
    striped = false,
    responsive = false,
    tableType = "default"
  }, forwardedRef) => {
    const tableRef = useRef(null);
    const headerRowRef = useRef(null);
    const tbodyRef = useRef(null);
    React.useImperativeHandle(forwardedRef, () => tableRef.current, []);
    const [focusedRowIndex, setFocusedRowIndex] = useState(0);
    const [focusedColumnIndex, setFocusedColumnIndex] = useState(0);
    const [focusArea, setFocusArea] = useState("headers");
    const [navigationMode, setNavigationMode] = useState("browse");
    const columnCount = columns.length;
    const rowCount = data.length;
    const sortedData = useMemo(() => {
      if (!sortConfig || sortConfig.length === 0) return data;
      return [...data].sort((a, b) => {
        for (const { key, direction } of sortConfig) {
          const aValue = a[key];
          const bValue = b[key];
          if (aValue == null && bValue == null) continue;
          if (aValue == null) return 1;
          if (bValue == null) return -1;
          let comparison = 0;
          if (typeof aValue === "number" && typeof bValue === "number") {
            comparison = aValue - bValue;
          } else {
            comparison = String(aValue).localeCompare(String(bValue));
          }
          if (comparison !== 0) {
            return direction === "asc" ? comparison : -comparison;
          }
        }
        return 0;
      });
    }, [data, sortConfig]);
    const focusCell = useCallback((rowIndex, colIndex) => {
      setTimeout(() => {
        var _a;
        const targetCell = (_a = tableRef.current) == null ? void 0 : _a.querySelector(
          `tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
        );
        if (targetCell) {
          targetCell.focus();
          if (typeof targetCell.scrollIntoView === "function") {
            targetCell.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            });
          }
        }
      }, 0);
    }, []);
    const focusHeader = useCallback((colIndex) => {
      setTimeout(() => {
        var _a;
        const headerCell = (_a = tableRef.current) == null ? void 0 : _a.querySelector(`th:nth-child(${colIndex + 1})`);
        if (headerCell) {
          headerCell.focus();
          if (typeof headerCell.scrollIntoView === "function") {
            headerCell.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            });
          }
        }
      }, 0);
    }, []);
    const handleSort = useCallback((columnKey) => {
      onSort == null ? void 0 : onSort(columnKey);
    }, [onSort]);
    const handleRowSelect = useCallback((rowIndex) => {
      onRowSelect == null ? void 0 : onRowSelect(rowIndex);
    }, [onRowSelect]);
    const handleKeyDown = useCallback((event) => {
      const { key } = event;
      switch (key) {
        case "Enter":
          event.preventDefault();
          if (focusArea === "headers" && navigationMode === "browse") {
            setNavigationMode("navigate");
            focusHeader(focusedColumnIndex);
          } else if (focusArea === "headers" && navigationMode === "navigate") {
            const currentColumn = columns[focusedColumnIndex];
            if (currentColumn) {
              handleSort(currentColumn.key);
            }
          } else if (focusArea === "cells" && navigationMode === "browse") {
            setNavigationMode("navigate");
            focusCell(focusedRowIndex, focusedColumnIndex);
          } else if (focusArea === "cells" && navigationMode === "navigate") {
            handleRowSelect(focusedRowIndex);
          }
          break;
        case "Escape":
          event.preventDefault();
          if (focusArea === "headers" && navigationMode === "navigate") {
            setNavigationMode("browse");
          } else if (focusArea === "cells" && navigationMode === "navigate") {
            setNavigationMode("browse");
          }
          break;
        case "ArrowLeft":
          event.preventDefault();
          if (navigationMode === "navigate" || navigationMode === "browse" && focusArea === "headers") {
            if (focusArea === "headers") {
              const newIndex = Math.max(0, focusedColumnIndex - 1);
              setFocusedColumnIndex(newIndex);
              focusHeader(newIndex);
            } else if (focusArea === "cells") {
              const newIndex = Math.max(0, focusedColumnIndex - 1);
              setFocusedColumnIndex(newIndex);
              focusCell(focusedRowIndex, newIndex);
            }
          }
          break;
        case "ArrowRight":
          event.preventDefault();
          if (navigationMode === "navigate" || navigationMode === "browse" && focusArea === "headers") {
            if (focusArea === "headers") {
              const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
              setFocusedColumnIndex(newIndex);
              focusHeader(newIndex);
            } else if (focusArea === "cells") {
              const newIndex = Math.min(columnCount - 1, focusedColumnIndex + 1);
              setFocusedColumnIndex(newIndex);
              focusCell(focusedRowIndex, newIndex);
            }
          }
          break;
        case "ArrowUp":
          event.preventDefault();
          if (focusArea === "cells") {
            if (navigationMode === "browse") {
              const newIndex = Math.max(0, focusedRowIndex - 1);
              setFocusedRowIndex(newIndex);
              focusCell(newIndex, 0);
              setFocusedColumnIndex(0);
            } else if (navigationMode === "navigate") {
              if (focusedRowIndex > 0) {
                const newIndex = focusedRowIndex - 1;
                setFocusedRowIndex(newIndex);
                focusCell(newIndex, focusedColumnIndex);
              } else {
                setFocusArea("headers");
                setNavigationMode("browse");
                focusHeader(focusedColumnIndex);
              }
            }
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          if (focusArea === "headers" && navigationMode === "browse") {
            setFocusArea("cells");
            setFocusedRowIndex(0);
            setFocusedColumnIndex(0);
            focusCell(0, 0);
          } else if (focusArea === "cells") {
            const maxRowIndex = rowCount - 1;
            if (navigationMode === "browse") {
              const newIndex = Math.min(maxRowIndex, focusedRowIndex + 1);
              setFocusedRowIndex(newIndex);
              focusCell(newIndex, 0);
              setFocusedColumnIndex(0);
            } else if (navigationMode === "navigate") {
              if (focusedRowIndex < maxRowIndex) {
                const newIndex = focusedRowIndex + 1;
                setFocusedRowIndex(newIndex);
                focusCell(newIndex, focusedColumnIndex);
              }
            }
          }
          break;
        case "Home":
          event.preventDefault();
          if (focusArea === "headers") {
            setFocusedColumnIndex(0);
            focusHeader(0);
          } else if (focusArea === "cells") {
            if (event.ctrlKey) {
              setFocusedRowIndex(0);
              setFocusedColumnIndex(0);
              focusCell(0, 0);
            } else {
              setFocusedColumnIndex(0);
              focusCell(focusedRowIndex, 0);
            }
          }
          break;
        case "End":
          event.preventDefault();
          if (focusArea === "headers") {
            const lastIndex = columnCount - 1;
            setFocusedColumnIndex(lastIndex);
            focusHeader(lastIndex);
          } else if (focusArea === "cells") {
            if (event.ctrlKey) {
              const lastRow = rowCount - 1;
              const lastCol = columnCount - 1;
              setFocusedRowIndex(lastRow);
              setFocusedColumnIndex(lastCol);
              focusCell(lastRow, lastCol);
            } else {
              const lastCol = columnCount - 1;
              setFocusedColumnIndex(lastCol);
              focusCell(focusedRowIndex, lastCol);
            }
          }
          break;
        case " ":
          event.preventDefault();
          if (focusArea === "headers" && navigationMode === "navigate") {
            const currentColumn = columns[focusedColumnIndex];
            if (currentColumn) {
              handleSort(currentColumn.key);
            }
          } else if (focusArea === "cells" && navigationMode === "navigate") {
            handleRowSelect(focusedRowIndex);
          }
          break;
      }
    }, [
      focusArea,
      navigationMode,
      focusedColumnIndex,
      focusedRowIndex,
      columnCount,
      rowCount,
      columns,
      focusCell,
      focusHeader,
      handleSort,
      handleRowSelect
    ]);
    useEffect(() => {
      const table = tableRef.current;
      if (table) {
        table.addEventListener("keydown", handleKeyDown);
        return () => table.removeEventListener("keydown", handleKeyDown);
      }
    }, [handleKeyDown]);
    const tableClasses = (0, import_classnames.default)(
      "nhsuk-table",
      tableClassName,
      {
        "nhsuk-table--responsive": responsive,
        "nhsuk-table--bordered": bordered,
        "nhsuk-table--striped": striped,
        "nhsuk-table--compact": tableType === "compact"
      },
      className
    );
    return /* @__PURE__ */ jsxs(
      "table",
      {
        ref: tableRef,
        className: tableClasses,
        id,
        "data-testid": testId,
        role: "grid",
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby,
        "aria-describedby": ariaDescribedby,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ jsx("tr", { ref: headerRowRef, role: "row", children: columns.map((column, colIndex) => {
            const sortInfo = sortConfig == null ? void 0 : sortConfig.find((config) => config.key === column.key);
            const isSorted = !!sortInfo;
            const isFocused = focusArea === "headers" && focusedColumnIndex === colIndex;
            return /* @__PURE__ */ jsx(
              "th",
              {
                className: (0, import_classnames.default)("sortable-header", {
                  "sortable-header--focused": isFocused
                }),
                role: "columnheader",
                tabIndex: isFocused ? 0 : -1,
                onClick: () => handleSort(column.key),
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSort(column.key);
                  }
                },
                "aria-sort": isSorted ? (sortInfo == null ? void 0 : sortInfo.direction) === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ jsx("span", { className: "header-label", children: column.label }),
                  isSorted && /* @__PURE__ */ jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    sortConfig && sortConfig.length > 1 && /* @__PURE__ */ jsx("span", { className: "sort-priority", children: sortConfig.findIndex((config) => config.key === column.key) + 1 }),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: (sortInfo == null ? void 0 : sortInfo.direction) === "asc" ? /* @__PURE__ */ jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              column.key
            );
          }) }) }),
          /* @__PURE__ */ jsx("tbody", { ref: tbodyRef, className: "nhsuk-table__body", role: "rowgroup", children: sortedData.map((row, rowIndex) => {
            const isSelected = selectedRowIndex === rowIndex;
            const isRowFocused = focusArea === "cells" && focusedRowIndex === rowIndex;
            return /* @__PURE__ */ jsx(
              "tr",
              {
                role: "row",
                className: (0, import_classnames.default)("data-row", {
                  "data-row--selected": isSelected,
                  "data-row--focused": isRowFocused
                }),
                "aria-selected": isSelected,
                children: columns.map((column, colIndex) => {
                  const value = column.tableRenderer ? column.tableRenderer(row) : column.render ? column.render(row) : row[column.key];
                  const isCellFocused = focusArea === "cells" && focusedRowIndex === rowIndex && focusedColumnIndex === colIndex;
                  const renderValue = () => {
                    if (typeof value === "boolean") {
                      return /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: value ? "\u2713" : "\u2717" }),
                        /* @__PURE__ */ jsx("span", { className: "sr-only", children: value ? "Yes" : "No" })
                      ] });
                    }
                    return String(value != null ? value : "");
                  };
                  return /* @__PURE__ */ jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: (0, import_classnames.default)("data-cell", {
                        "data-cell--focused": isCellFocused
                      }),
                      tabIndex: isCellFocused ? 0 : -1,
                      onClick: () => handleRowSelect(rowIndex),
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
  }
);
AriaDataGrid.displayName = "AriaDataGrid";

// src/components/SortableDataTable/AriaTabsDataGrid.tsx
import React4, { useReducer, useCallback as useCallback4, useMemo as useMemo3, useRef as useRef3, useImperativeHandle, forwardRef as forwardRef2, useEffect as useEffect2, useState as useState3 } from "react";

// src/components/SortableDataTable/SortStatusControl/SortStatusControl.tsx
import { useCallback as useCallback3, useMemo as useMemo2, useRef as useRef2 } from "react";

// src/components/Button/Button.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var { forwardRef, useCallback: useCallback2, useState: useState2 } = React2;
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
  const [isPressed, setIsPressed] = useState2(false);
  const [isHovered, setIsHovered] = useState2(false);
  const [isFocused, setIsFocused] = useState2(false);
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
  const handleMouseDown = useCallback2(() => !isDisabled && setIsPressed(true), [isDisabled]);
  const handleMouseUp = useCallback2(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback2(() => !isDisabled && setIsHovered(true), [isDisabled]);
  const handleMouseLeave = useCallback2(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback2(() => setIsFocused(true), []);
  const handleBlur = useCallback2(() => setIsFocused(false), []);
  const handleKeyDown = useCallback2((event) => {
    if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
      event.preventDefault();
      event.currentTarget.click();
    }
  }, [rest]);
  const handleClick = useCallback2((event) => {
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
    return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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

// src/components/Tag/Tag.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const tagClasses = (0, import_classnames2.default)(
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
  return /* @__PURE__ */ jsxs2("strong", { className: tagClasses, ...props, children: [
    children ? children : html ? /* @__PURE__ */ jsx3("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx3(
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
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
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
  const containerRef = useRef2(null);
  const draggedItem = useRef2(null);
  const draggedOverItem = useRef2(null);
  const handleDragStart = useCallback3((e, key) => {
    if (disabled) return;
    draggedItem.current = key;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", key);
  }, [disabled]);
  const handleDragOver = useCallback3((e, key) => {
    if (disabled || draggedItem.current === key) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    draggedOverItem.current = key;
  }, [disabled]);
  const handleDrop = useCallback3((e, targetKey) => {
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
  const handleDragEnd = useCallback3(() => {
    draggedItem.current = null;
    draggedOverItem.current = null;
  }, []);
  const getColumnLabel = useCallback3((key) => {
    const column = columns.find((col) => col.key === key);
    return column ? column.label : key;
  }, [columns]);
  const getPriorityColor = useCallback3((index) => {
    const colorMap = ["red", "orange", "blue", "aqua-green", "grey"];
    return colorMap[index] || "grey";
  }, []);
  const handleDirectionToggle = useCallback3((sortKey) => {
    if (disabled) return;
    const updatedConfig = sortConfig.map(
      (config) => config.key === sortKey ? { ...config, direction: config.direction === "asc" ? "desc" : "asc" } : config
    );
    onSortChange(updatedConfig);
  }, [sortConfig, onSortChange, disabled]);
  const handleRemove = useCallback3((sortKey) => {
    if (disabled) return;
    const filteredConfig = sortConfig.filter((config) => config.key !== sortKey);
    onSortChange(filteredConfig);
  }, [sortConfig, onSortChange, disabled]);
  const handleReset = useCallback3(() => {
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
  const describedBy = useMemo2(() => {
    const ids = ["sort-description"];
    if (showHelp) ids.push("sort-help");
    if (ariaDescribedBy) ids.push(ariaDescribedBy);
    return ids.join(" ");
  }, [showHelp, ariaDescribedBy]);
  if (sortConfig.length === 0) {
    return /* @__PURE__ */ jsxs3("div", { className: `sort-status-control ${className}`, children: [
      /* @__PURE__ */ jsx4(
        "div",
        {
          className: "sort-status-control__description",
          id: "sort-description",
          "aria-live": "polite",
          children: emptyDescription
        }
      ),
      showHelp && /* @__PURE__ */ jsx4("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ jsx4("small", { children: "Drag tags to reorder priority. Click tags or \u2191/\u2193 buttons to toggle ascending/descending. Click \xD7 to remove a sort." }) })
    ] });
  }
  return /* @__PURE__ */ jsxs3("div", { className: `sort-status-control ${className}`, children: [
    /* @__PURE__ */ jsx4(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: getSortDescription()
      }
    ),
    /* @__PURE__ */ jsxs3("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ jsx4(
        "div",
        {
          ref: containerRef,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": ariaLabel,
          "aria-describedby": describedBy,
          children: sortConfig.map((config, index) => /* @__PURE__ */ jsx4(
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
              children: /* @__PURE__ */ jsx4(
                Tag,
                {
                  color: getPriorityColor(index),
                  className: "sort-status-control__tag",
                  closable: true,
                  onClose: () => handleRemove(config.key),
                  disabled,
                  children: /* @__PURE__ */ jsxs3("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ jsx4("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "\u22EE\u22EE" }),
                    /* @__PURE__ */ jsx4("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${index + 1}`, children: index + 1 }),
                    /* @__PURE__ */ jsx4("span", { className: "sort-status-control__tag-label", children: getColumnLabel(config.key) }),
                    /* @__PURE__ */ jsx4(
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
                        children: /* @__PURE__ */ jsx4("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${config.direction}`, children: /* @__PURE__ */ jsx4(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${config.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ jsx4("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
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
      showReset && /* @__PURE__ */ jsx4("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ jsx4(
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
    showHelp && /* @__PURE__ */ jsx4("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ jsx4("small", { children: "Drag tags to reorder priority. Click tags or \u2191/\u2193 buttons to toggle ascending/descending. Click \xD7 to remove a sort." }) })
  ] });
};

// src/components/SortableDataTable/AriaTabsDataGrid.tsx
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
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
var AriaTabsDataGrid = forwardRef2(
  function AriaTabsDataGrid2(props, ref) {
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
      "data-testid": dataTestId
    } = props;
    const {
      dataComparator = (a, b) => JSON.stringify(a) === JSON.stringify(b),
      filterFunction = (data) => data,
      booleanRenderer = (value) => value ? "\u2713" : "\u2717"
    } = dataConfig || {};
    const isControlled = selectedIndexProp !== void 0;
    const selectedIndex = selectedIndexProp != null ? selectedIndexProp : 0;
    const [navigationState, setNavigationState] = useState3({
      focusArea: "tabs",
      focusedTabIndex: selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: false
    });
    const initialState = useMemo3(() => {
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
    useEffect2(() => {
      const currentLength = state.tabLoadingStates.length;
      const newLength = tabPanels.length;
      if (currentLength !== newLength) {
        dispatch({ type: "ADJUST_ARRAYS", payload: { newLength } });
      }
    }, [tabPanels.length]);
    useEffect2(() => {
      if (isControlled) {
        dispatch({ type: "SET_SELECTED_INDEX", payload: selectedIndex });
      }
    }, [selectedIndex, isControlled]);
    useEffect2(() => {
      setNavigationState((prev) => ({
        ...prev,
        focusArea: "tabs",
        focusedTabIndex: state.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: false
      }));
    }, [state.selectedIndex]);
    useEffect2(() => {
      if (onGlobalRowSelectionChange) {
        onGlobalRowSelectionChange(state.globalSelectedRowData);
      }
    }, [state.globalSelectedRowData, onGlobalRowSelectionChange]);
    const isDataEqual = useCallback4((data1, data2) => {
      return dataComparator(data1, data2);
    }, [dataComparator]);
    const handleTabSelect = useCallback4((index) => {
      if (index >= 0 && index < tabPanels.length && !tabPanels[index].disabled) {
        dispatch({ type: "SET_SELECTED_INDEX", payload: index });
        setNavigationState((prev) => ({
          ...prev,
          focusedTabIndex: index,
          focusArea: "tabs"
        }));
        onTabChange == null ? void 0 : onTabChange(index);
      }
    }, [tabPanels, onTabChange]);
    const scrollTabIntoView = useCallback4((tabIndex) => {
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
          } catch (e) {
            tabElement.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else {
          if (!process.env.SILENCE_SCROLL_DEBUG) {
            console.debug("[AriaTabsDataGrid] Missing elements for scroll", { tabElementExists: !!tabElement, tabListElementExists: !!tabListElement });
          }
        }
      }, 50);
    }, []);
    const handleTabKeyDown = useCallback4((event, index) => {
      var _a, _b, _c, _d;
      const { key } = event;
      switch (key) {
        case "ArrowLeft":
          event.preventDefault();
          const prevIndex = index > 0 ? index - 1 : tabPanels.length - 1;
          handleTabSelect(prevIndex);
          scrollTabIntoView(prevIndex);
          (_a = tabRefs.current[prevIndex]) == null ? void 0 : _a.focus();
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextIndex = index < tabPanels.length - 1 ? index + 1 : 0;
          handleTabSelect(nextIndex);
          scrollTabIntoView(nextIndex);
          (_b = tabRefs.current[nextIndex]) == null ? void 0 : _b.focus();
          break;
        case "ArrowDown":
          event.preventDefault();
          setNavigationState((prev) => ({
            ...prev,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: true
          }));
          break;
        case "Home":
          event.preventDefault();
          handleTabSelect(0);
          scrollTabIntoView(0);
          (_c = tabRefs.current[0]) == null ? void 0 : _c.focus();
          break;
        case "End":
          event.preventDefault();
          const lastIndex = tabPanels.length - 1;
          handleTabSelect(lastIndex);
          scrollTabIntoView(lastIndex);
          (_d = tabRefs.current[lastIndex]) == null ? void 0 : _d.focus();
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          handleTabSelect(index);
          break;
      }
    }, [tabPanels.length, handleTabSelect, scrollTabIntoView]);
    const tabRefs = useRef3([]);
    const panelRefs = useRef3([]);
    const handleSort = useCallback4((tabIndex, key) => {
      var _a;
      const currentSort = state.sortConfig || [];
      const existingSort = currentSort.find((sort) => sort.key === key);
      let newSortConfig;
      if (existingSort) {
        if (existingSort.direction === "asc") {
          newSortConfig = currentSort.map(
            (sort) => sort.key === key ? { ...sort, direction: "desc" } : sort
          );
        } else {
          newSortConfig = currentSort.filter((sort) => sort.key !== key);
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
    }, [state.sortConfig, tabPanels]);
    const focusGridHeader = useCallback4((headerIndex) => {
      setTimeout(() => {
        const headerElement = document.querySelector(
          `[data-tab-panel="${state.selectedIndex}"] th:nth-child(${headerIndex + 1})`
        );
        if (headerElement) {
          headerElement.focus();
        }
      }, 0);
    }, [state.selectedIndex]);
    const renderBooleanIcon = useCallback4((value) => {
      return booleanRenderer(value);
    }, [booleanRenderer]);
    const focusGridCell = useCallback4((rowIndex, colIndex) => {
      setTimeout(() => {
        const cellElement = document.querySelector(
          `[data-tab-panel="${state.selectedIndex}"] tbody tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
        );
        if (cellElement) {
          cellElement.focus();
        }
      }, 0);
    }, [state.selectedIndex]);
    useEffect2(() => {
      if (navigationState.isGridActive) {
        if (navigationState.focusArea === "headers") {
          setTimeout(() => {
            focusGridHeader(navigationState.focusedHeaderIndex);
          }, 0);
        } else if (navigationState.focusArea === "cells") {
          setTimeout(() => {
            focusGridCell(navigationState.focusedRowIndex, navigationState.focusedColumnIndex);
          }, 0);
        }
      }
    }, [navigationState.focusArea, navigationState.isGridActive, navigationState.focusedHeaderIndex, navigationState.focusedRowIndex, navigationState.focusedColumnIndex, focusGridHeader, focusGridCell]);
    useEffect2(() => {
      scrollTabIntoView(state.selectedIndex);
    }, [state.selectedIndex, scrollTabIntoView]);
    const handleHeaderKeyDown = useCallback4((event, headerIndex) => {
      var _a, _b;
      const { key } = event;
      const currentPanel = tabPanels[state.selectedIndex];
      const columnCount = (currentPanel == null ? void 0 : currentPanel.columns.length) || 0;
      switch (key) {
        case "ArrowLeft":
          event.preventDefault();
          const prevHeaderIndex = Math.max(0, headerIndex - 1);
          setNavigationState((prev) => ({ ...prev, focusedHeaderIndex: prevHeaderIndex }));
          focusGridHeader(prevHeaderIndex);
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextHeaderIndex = Math.min(columnCount - 1, headerIndex + 1);
          setNavigationState((prev) => ({ ...prev, focusedHeaderIndex: nextHeaderIndex }));
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
          setNavigationState((prev) => ({ ...prev, focusedHeaderIndex: lastHeaderIndex }));
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
    }, [tabPanels, state.selectedIndex, handleSort, setNavigationState, focusGridHeader, focusGridCell, tabRefs]);
    const handleCellKeyDown = useCallback4((event, rowIndex, colIndex) => {
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
            setNavigationState((prev) => ({ ...prev, focusedRowIndex: newRowIndex2 }));
            focusGridCell(newRowIndex2, colIndex);
          }
          break;
        case "ArrowDown":
          event.preventDefault();
          const newRowIndex = Math.min(rowCount - 1, rowIndex + 1);
          setNavigationState((prev) => ({ ...prev, focusedRowIndex: newRowIndex }));
          focusGridCell(newRowIndex, colIndex);
          break;
        case "ArrowLeft":
          event.preventDefault();
          const newColIndex = Math.max(0, colIndex - 1);
          setNavigationState((prev) => ({ ...prev, focusedColumnIndex: newColIndex }));
          focusGridCell(rowIndex, newColIndex);
          break;
        case "ArrowRight":
          event.preventDefault();
          const nextColIndex = Math.min(columnCount - 1, colIndex + 1);
          setNavigationState((prev) => ({ ...prev, focusedColumnIndex: nextColIndex }));
          focusGridCell(rowIndex, nextColIndex);
          break;
        case "Home":
          event.preventDefault();
          if (event.ctrlKey) {
            setNavigationState((prev) => ({ ...prev, focusedRowIndex: 0, focusedColumnIndex: 0 }));
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
            setNavigationState((prev) => ({ ...prev, focusedRowIndex: lastRow, focusedColumnIndex: lastCol }));
            focusGridCell(lastRow, lastCol);
          } else {
            const lastCol = columnCount - 1;
            setNavigationState((prev) => ({ ...prev, focusedColumnIndex: lastCol }));
            focusGridCell(rowIndex, lastCol);
          }
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          if (currentPanel && currentPanel.data[rowIndex]) {
            const displayData = currentPanel.data.some((item) => "ews_data" in item) ? filterFunction(currentPanel.data, state.filters) : currentPanel.data;
            const sortConfig = state.sortConfig;
            let sortedData = displayData;
            if (sortConfig && sortConfig.length > 0) {
              sortedData = [...displayData].sort((a, b) => {
                for (const { key: key2, direction } of sortConfig) {
                  let aValue = a[key2];
                  let bValue = b[key2];
                  const column = currentPanel.columns.find((col) => col.key === key2);
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
                    result = String(aValue).localeCompare(String(bValue), void 0, { numeric: true, sensitivity: "base" });
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
    }, [tabPanels, state.selectedIndex, state.filters, state.sortConfig, filterFunction, isDataEqual, dispatch, setNavigationState, focusGridHeader, focusGridCell]);
    const getFilteredData = useCallback4((data, filters) => {
      return filterFunction(data, filters);
    }, [filterFunction]);
    useImperativeHandle(ref, () => ({
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
    }), [state.selectedIndex, state.selectedRows, tabPanels, onTabChange]);
    if (isLoading) {
      return /* @__PURE__ */ jsx5("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${className}`, "data-testid": dataTestId, children: loadingComponent || /* @__PURE__ */ jsx5("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ jsx5("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ jsx5("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) });
    }
    if (error) {
      return /* @__PURE__ */ jsx5("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${className}`, "data-testid": dataTestId, children: errorComponent || /* @__PURE__ */ jsxs4("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
        /* @__PURE__ */ jsx5("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
        /* @__PURE__ */ jsx5("p", { children: error })
      ] }) });
    }
    return /* @__PURE__ */ jsxs4(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${orientation} ${className}`,
        id,
        "data-testid": dataTestId,
        children: [
          /* @__PURE__ */ jsx5("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${id}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ jsx5(
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
          /* @__PURE__ */ jsx5(
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
                return /* @__PURE__ */ jsxs4(
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
                      /* @__PURE__ */ jsx5("span", { className: "aria-tabs-datagrid__tab-label", children: panel.label }),
                      state.tabLoadingStates[index] && /* @__PURE__ */ jsx5("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "\u23F3" }),
                      state.tabErrors[index] && /* @__PURE__ */ jsx5("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "\u26A0\uFE0F" })
                    ]
                  },
                  panel.id
                );
              })
            }
          ),
          tabPanels.map((panel, index) => {
            const isSelected = index === state.selectedIndex;
            return /* @__PURE__ */ jsx5(
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
                  const displayData = panel.data.some((item) => "ews_data" in item) ? getFilteredData(panel.data, state.filters) : panel.data;
                  const sortedData = useMemo3(() => {
                    const sortConfig = state.sortConfig;
                    if (!sortConfig || sortConfig.length === 0) return displayData;
                    return [...displayData].sort((a, b) => {
                      for (const { key, direction } of sortConfig) {
                        let aValue = a[key];
                        let bValue = b[key];
                        const column = panel.columns.find((col) => col.key === key);
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
                          comparison = String(aValue).localeCompare(String(bValue), void 0, {
                            numeric: true,
                            sensitivity: "base"
                          });
                        }
                        if (comparison !== 0) {
                          return direction === "asc" ? comparison : -comparison;
                        }
                      }
                      return 0;
                    });
                  }, [displayData, state.sortConfig, panel.columns]);
                  return /* @__PURE__ */ jsxs4(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": panel.ariaLabel,
                      "aria-describedby": panel.ariaDescription,
                      children: [
                        /* @__PURE__ */ jsx5("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ jsx5("tr", { role: "row", children: panel.columns.map((column, colIndex) => {
                          var _a;
                          const sortInfo = (_a = state.sortConfig) == null ? void 0 : _a.find((config) => config.key === column.key);
                          const isSorted = !!sortInfo;
                          const isFocused = navigationState.focusArea === "headers" && navigationState.focusedHeaderIndex === colIndex;
                          return /* @__PURE__ */ jsx5(
                            "th",
                            {
                              className: `sortable-header ${isFocused ? "sortable-header--focused" : ""} ${isSorted ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: isFocused ? 0 : -1,
                              onClick: () => handleSort(index, column.key),
                              onKeyDown: (e) => handleHeaderKeyDown(e, colIndex),
                              "aria-sort": isSorted ? (sortInfo == null ? void 0 : sortInfo.direction) === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ jsxs4("div", { className: "header-content", children: [
                                /* @__PURE__ */ jsx5("span", { className: "header-label", children: column.label }),
                                /* @__PURE__ */ jsxs4("div", { className: `sort-indicator-container ${isSorted ? `sort-indicator--${sortInfo == null ? void 0 : sortInfo.direction}` : ""}`, children: [
                                  state.sortConfig && state.sortConfig.length > 0 && state.sortConfig.findIndex((config) => config.key === column.key) !== -1 && /* @__PURE__ */ jsx5(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${state.sortConfig.findIndex((config) => config.key === column.key) + 1}`,
                                      "data-priority": state.sortConfig.findIndex((config) => config.key === column.key) + 1,
                                      title: `Sort priority: ${state.sortConfig.findIndex((config) => config.key === column.key) + 1}`,
                                      children: state.sortConfig.findIndex((config) => config.key === column.key) + 1
                                    }
                                  ),
                                  isSorted && /* @__PURE__ */ jsx5(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${sortInfo == null ? void 0 : sortInfo.direction}`,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ jsx5("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                    }
                                  )
                                ] })
                              ] })
                            },
                            column.key
                          );
                        }) }) }),
                        /* @__PURE__ */ jsx5("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: sortedData.map((row, rowIndex) => {
                          const isRowSelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
                          const isRowFocused = navigationState.focusArea === "cells" && navigationState.focusedRowIndex === rowIndex;
                          return /* @__PURE__ */ jsx5(
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
                                    return column.customRenderer(rawValue, row);
                                  }
                                  if (typeof rawValue === "boolean" && value === rawValue) {
                                    return /* @__PURE__ */ jsxs4(Fragment2, { children: [
                                      renderBooleanIcon(rawValue),
                                      /* @__PURE__ */ jsx5("span", { className: "nhsuk-u-visually-hidden", children: rawValue ? "Yes" : "No" })
                                    ] });
                                  }
                                  if (React4.isValidElement(value) || typeof value !== "object") {
                                    return value != null ? value : "";
                                  }
                                  return value;
                                };
                                return /* @__PURE__ */ jsx5(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${isCellFocused ? "data-cell--focused" : ""}`,
                                    tabIndex: isCellFocused ? 0 : -1,
                                    onClick: () => {
                                      const isCurrentlySelected = state.globalSelectedRowData && isDataEqual(state.globalSelectedRowData, row);
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
  }
);

// src/components/SortableDataTable/SortStatusControl.tsx
import { useCallback as useCallback5, useMemo as useMemo4 } from "react";

// src/components/SortableDataTable/SortStatusControlTypes.ts
var DEFAULT_DIRECTION_LABELS = {
  asc: "\u2191",
  desc: "\u2193"
};
var sortByPriority = (configs) => [...configs].sort((a, b) => a.priority - b.priority);
function reassignPriorities(configs) {
  return configs.map((config, index) => ({
    ...config,
    priority: index
  }));
}
function getMaxPriority(configs) {
  return configs.length > 0 ? Math.max(...configs.map((c) => c.priority)) : -1;
}
function canMoveUp(sortId, configs) {
  const sort = configs.find((c) => c.id === sortId);
  return sort ? sort.priority > 0 : false;
}
function canMoveDown(sortId, configs) {
  const sort = configs.find((c) => c.id === sortId);
  const maxPriority = getMaxPriority(configs);
  return sort ? sort.priority < maxPriority : false;
}

// src/components/SortableDataTable/SortStatusControl.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var SortStatusControl2 = ({
  sortConfig,
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
  const sortedConfig = useMemo4(() => sortByPriority(sortConfig), [sortConfig]);
  const handleDirectionToggle = useCallback5((sortId) => {
    if (disabled) return;
    const updatedConfig = sortConfig.map(
      (config) => config.id === sortId ? { ...config, direction: config.direction === "asc" ? "desc" : "asc" } : config
    );
    onSortChange(updatedConfig);
  }, [sortConfig, onSortChange, disabled]);
  const handleMoveUp = useCallback5((sortId) => {
    if (disabled) return;
    const sortIndex = sortConfig.findIndex((c) => c.id === sortId);
    if (sortIndex <= 0) return;
    const newConfig = [...sortConfig];
    [newConfig[sortIndex], newConfig[sortIndex - 1]] = [newConfig[sortIndex - 1], newConfig[sortIndex]];
    onSortChange(reassignPriorities(newConfig));
  }, [sortConfig, onSortChange, disabled]);
  const handleMoveDown = useCallback5((sortId) => {
    if (disabled) return;
    const sortIndex = sortConfig.findIndex((c) => c.id === sortId);
    if (sortIndex >= sortConfig.length - 1 || sortIndex === -1) return;
    const newConfig = [...sortConfig];
    [newConfig[sortIndex], newConfig[sortIndex + 1]] = [newConfig[sortIndex + 1], newConfig[sortIndex]];
    onSortChange(reassignPriorities(newConfig));
  }, [sortConfig, onSortChange, disabled]);
  const handleRemove = useCallback5((sortId) => {
    if (disabled) return;
    const filteredConfig = sortConfig.filter((config) => config.id !== sortId);
    onSortChange(reassignPriorities(filteredConfig));
  }, [sortConfig, onSortChange, disabled]);
  const handleReset = useCallback5(() => {
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
    const sortDescriptions = sortedConfig.map((sort, index) => {
      const direction = sort.direction === "asc" ? "ascending" : "descending";
      return `${index + 1}. ${sort.label} (${direction})`;
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
  const describedBy = useMemo4(() => {
    const ids = ["sort-description"];
    if (showHelp) ids.push("sort-help");
    if (ariaDescribedBy) ids.push(ariaDescribedBy);
    return ids.join(" ");
  }, [showHelp, ariaDescribedBy]);
  if (sortConfig.length === 0) {
    return /* @__PURE__ */ jsx6("div", { className: `sort-status-control sort-status-control--empty ${className}`, children: /* @__PURE__ */ jsx6(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: getSortDescription()
      }
    ) });
  }
  return /* @__PURE__ */ jsxs5("div", { className: `sort-status-control ${className}`, children: [
    /* @__PURE__ */ jsx6(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: getSortDescription()
      }
    ),
    /* @__PURE__ */ jsxs5(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": ariaLabel,
        "aria-describedby": describedBy,
        children: [
          /* @__PURE__ */ jsx6("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          sortedConfig.map((config) => /* @__PURE__ */ jsx6(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ jsx6(
                Tag,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: true,
                  onClose: () => handleRemove(config.id),
                  disabled,
                  children: /* @__PURE__ */ jsxs5("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ jsx6("span", { className: "sort-status-control__tag-priority", children: config.priority + 1 }),
                    /* @__PURE__ */ jsx6("span", { className: "sort-status-control__tag-label", children: config.label }),
                    /* @__PURE__ */ jsx6(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => handleDirectionToggle(config.id),
                        disabled,
                        "aria-label": `Toggle sort direction for ${config.label}. Currently ${config.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: config.direction === "asc" ? DEFAULT_DIRECTION_LABELS.asc : DEFAULT_DIRECTION_LABELS.desc
                      }
                    ),
                    /* @__PURE__ */ jsxs5("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ jsx6(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => handleMoveUp(config.id),
                          disabled: disabled || !canMoveUp(config.id, sortConfig),
                          "aria-label": `Move ${config.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "\u25B2"
                        }
                      ),
                      /* @__PURE__ */ jsx6(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => handleMoveDown(config.id),
                          disabled: disabled || !canMoveDown(config.id, sortConfig),
                          "aria-label": `Move ${config.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "\u25BC"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            config.id
          ))
        ]
      }
    ),
    showReset && /* @__PURE__ */ jsx6("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ jsx6(
      Button,
      {
        variant: "secondary",
        onClick: handleReset,
        disabled,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    showHelp && /* @__PURE__ */ jsx6("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ jsxs5("small", { children: [
      "Click ",
      DEFAULT_DIRECTION_LABELS.asc,
      "/",
      DEFAULT_DIRECTION_LABELS.desc,
      " to toggle ascending/descending. Use \u25B2/\u25BC to change sort priority. Click \xD7 to remove a sort."
    ] }) })
  ] });
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
      render: col.render
    })),
    sortConfig: def.sortConfig,
    ariaLabel: def.ariaLabel || `${def.label} Data Grid`,
    ariaDescription: def.ariaDescription || `Data grid showing ${def.label.toLowerCase()}`,
    className: def.className,
    disabled: def.disabled
  }));
};

// src/components/SortableDataTable/icons.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var bedIcon = [
  {
    value: "bed",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("rect", { x: "5", y: "10", width: "14", height: "5", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("rect", { x: "5", y: "7", width: "5", height: "3", stroke: "#000", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("line", { x1: "5", y1: "15", x2: "5", y2: "19", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "19", y1: "15", x2: "19", y2: "19", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  },
  {
    value: "cot",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("rect", { x: "5", y: "7", width: "14", height: "10", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "7", y1: "7", x2: "7", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "17", y1: "7", x2: "17", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  },
  {
    value: "swap space",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("line", { x1: "7", y1: "8", x2: "17", y2: "8", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("polyline", { points: "13 4 17 8 13 12", stroke: "#000", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("line", { x1: "17", y1: "16", x2: "7", y2: "16", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("polyline", { points: "11 20 7 16 11 12", stroke: "#000", strokeWidth: "2", strokeLinecap: "round", fill: "none" })
    ] })
  },
  {
    value: "trolley",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("rect", { x: "5", y: "7", width: "14", height: "5", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "8", y1: "12", x2: "8", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "16", y1: "12", x2: "16", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("circle", { cx: "8", cy: "19", r: "1.5", fill: "#000" }),
      /* @__PURE__ */ jsx7("circle", { cx: "16", cy: "19", r: "1.5", fill: "#000" })
    ] })
  }
];
var completeIcon = [
  {
    value: "due",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("rect", { x: "3", y: "4", width: "18", height: "16", stroke: "#000", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("line", { x1: "3", y1: "9", x2: "21", y2: "9", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "7", y1: "13", x2: "7", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "12", y1: "13", x2: "12", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "17", y1: "13", x2: "17", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  },
  {
    value: "overdue",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("path", { d: "M12 2L2 20H22L12 2Z", stroke: "#ffbf47", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("line", { x1: "12", y1: "8", x2: "12", y2: "14", stroke: "#ffb81c", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("circle", { cx: "12", cy: "17", r: "1", fill: "#ffb81c" })
    ] })
  },
  {
    value: "complete",
    icon: /* @__PURE__ */ jsx7("svg", { className: "nhsuk-icon__tick", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ jsx7("path", { strokeWidth: "4", strokeLinecap: "round", d: "M18.4 7.8l-8.5 8.4L5.6 12", stroke: "#007f3b" }) })
  }
];
var transportStatusIcon = [
  {
    value: "Confirmed",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("rect", { x: "3", y: "4", width: "18", height: "16", stroke: "#000", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("line", { x1: "3", y1: "9", x2: "21", y2: "9", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "7", y1: "13", x2: "7", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "12", y1: "13", x2: "12", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "17", y1: "13", x2: "17", y2: "17", stroke: "#000", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  },
  {
    value: "Pending",
    icon: /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ jsxs6("g", { id: "pending-group", children: [
      /* @__PURE__ */ jsx7("circle", { id: "pending-oval", stroke: "none", fill: "rgb(255, 184, 28)", cx: "27", cy: "50", r: "6" }),
      /* @__PURE__ */ jsx7("circle", { id: "pending-oval2", stroke: "none", fill: "rgb(255, 184, 28)", cx: "50.5", cy: "50", r: "6" }),
      /* @__PURE__ */ jsx7("circle", { id: "pending-oval3", stroke: "none", fill: "rgb(255, 184, 28)", cx: "73.5", cy: "50", r: "6" })
    ] }) })
  },
  {
    value: "In Progress",
    icon: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("rect", { x: "3", y: "8", width: "16", height: "8", stroke: "#007f3b", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("rect", { x: "16", y: "10", width: "5", height: "6", stroke: "#007f3b", strokeWidth: "2", strokeLinecap: "round", fill: "none" }),
      /* @__PURE__ */ jsx7("circle", { cx: "7", cy: "18", r: "2", fill: "#007f3b" }),
      /* @__PURE__ */ jsx7("circle", { cx: "17", cy: "18", r: "2", fill: "#007f3b" }),
      /* @__PURE__ */ jsx7("line", { x1: "6", y1: "12", x2: "10", y2: "12", stroke: "#007f3b", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "8", y1: "10", x2: "8", y2: "14", stroke: "#007f3b", strokeWidth: "2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx7("line", { x1: "10", y1: "6", x2: "14", y2: "6", stroke: "#007f3b", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  }
];
var booleanIcon = [
  {
    value: true,
    icon: /* @__PURE__ */ jsx7("svg", { className: "nhsuk-icon nhsuk-icon__tick", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ jsx7("path", { strokeWidth: "4", strokeLinecap: "round", d: "M18.4 7.8l-8.5 8.4L5.6 12", stroke: "#007f3b" }) })
  },
  {
    value: false,
    icon: /* @__PURE__ */ jsxs6("svg", { className: "nhsuk-icon nhsuk-icon__cross", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ jsx7("path", { d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z", fill: "#d5281b" }),
      /* @__PURE__ */ jsx7("path", { d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z", fill: "#d5281b" })
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
var createHealthcareViewConfig = () => ({
  overview: [
    { key: "name", label: "Patient Name" },
    { key: "age", label: "Age" },
    { key: "ward_name", label: "Ward" },
    { key: "bed_name", label: "Bed" },
    { key: "ews_score", label: "EWS Score" },
    { key: "speciality", label: "Specialty" },
    { key: "consultant", label: "Consultant" }
  ],
  vitals: [
    { key: "name", label: "Patient Name" },
    { key: "ews_score", label: "EWS Score" },
    { key: "respiratory_rate_bpm", label: "Respiratory Rate", render: (data) => data.ews_data.respiratory_rate_bpm },
    { key: "sp02", label: "SpO2 %", render: (data) => data.ews_data.sp02 },
    { key: "temperature", label: "Temperature \xB0C", render: (data) => data.ews_data.temperature },
    { key: "systolic_bp", label: "Systolic BP", render: (data) => data.ews_data.systolic_bp },
    { key: "heart_rate", label: "Heart Rate", render: (data) => data.ews_data.heart_rate },
    { key: "avpu", label: "AVPU", render: (data) => data.ews_data.avpu.toUpperCase() }
  ],
  discharge: [
    { key: "name", label: "Patient Name" },
    { key: "anticipated_discharge_date", label: "Anticipated Discharge", render: (data) => new Date(data.anticipated_discharge_date).toLocaleDateString() },
    { key: "early_discharge_notification", label: "Discharge Status" },
    { key: "medically_optimised", label: "Medically Optimised" },
    { key: "criteria_to_reside", label: "Criteria to Reside" },
    { key: "fast_track", label: "Fast Track" },
    { key: "transport_status", label: "Transport Status" },
    { key: "pathway", label: "Pathway" }
  ],
  logistics: [
    { key: "name", label: "Patient Name" },
    { key: "ward_name", label: "Ward" },
    { key: "room_name", label: "Room" },
    { key: "bed_name", label: "Bed" },
    { key: "bed_type", label: "Bed Type" },
    { key: "transport_booking", label: "Transport Booked" },
    { key: "transport_mobility", label: "Transport Type" },
    { key: "district_nurse_referral", label: "District Nurse" },
    { key: "equipment", label: "Equipment" }
  ]
});
var createTCHTabsConfig = (patients) => {
  const viewConfig = createHealthcareViewConfig();
  return [
    {
      id: "overview",
      label: "Patient Overview",
      data: patients,
      columns: viewConfig.overview,
      ariaLabel: "Patient Overview Data Grid",
      ariaDescription: "Overview of all patients with basic information"
    },
    {
      id: "vitals",
      label: "Vital Signs & EWS",
      data: patients,
      columns: viewConfig.vitals,
      sortConfig: [
        { key: "ews_score", direction: "desc" },
        { key: "name", direction: "asc" },
        { key: "ward_name", direction: "asc" }
      ],
      ariaLabel: "Patient Vital Signs Data Grid",
      ariaDescription: "Patient vital signs and Early Warning Scores"
    },
    {
      id: "discharge",
      label: "Discharge Planning",
      data: patients.filter((p) => p.anticipated_discharge_date),
      columns: viewConfig.discharge,
      sortConfig: [
        { key: "anticipated_discharge_date", direction: "asc" },
        { key: "discharge_status", direction: "desc" }
      ],
      ariaLabel: "Discharge Planning Data Grid",
      ariaDescription: "Patient discharge planning and status information"
    },
    {
      id: "logistics",
      label: "Bed Management",
      data: patients,
      columns: viewConfig.logistics,
      sortConfig: [{ key: "ward_name", direction: "asc" }],
      ariaLabel: "Bed Management Data Grid",
      ariaDescription: "Patient location and logistics information"
    }
  ];
};
var tchDataConfig = {
  dataComparator: healthcareDataComparator,
  filterFunction: healthcareFilterFunction,
  booleanRenderer: nhsBooleanRenderer,
  getDataId: healthcareGetDataId
};

// src/components/SortableDataTable/utils.tsx
var formatHeader = (header) => header.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\./g, " ").replace(/\b\w/g, (char) => char.toUpperCase()).replace(/\b[A-Z]{3}\b/g, (match) => match.toUpperCase());
var parseDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const suffix = day % 10 === 1 && day !== 11 ? "st" : day % 10 === 2 && day !== 12 ? "nd" : day % 10 === 3 && day !== 13 ? "rd" : "th";
  return `${day}${suffix} ${month} ${year}`;
};
export {
  AriaDataGrid,
  AriaTabsDataGrid,
  SortStatusControl2 as SortStatusControl,
  bedIcon,
  booleanIcon,
  completeIcon,
  createGenericTabsConfig,
  createTCHTabsConfig,
  formatHeader,
  parseDate,
  tchDataConfig,
  transportStatusIcon
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
