// src/components/SortableDataTable/SortStatusControl/SortStatusControl.tsx
import { useCallback as useCallback2, useMemo, useRef } from "react";

// src/components/Button/Button.tsx
import * as React from "react";

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

// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var { forwardRef, useCallback, useState } = React;
function ButtonComponent(props, ref) {
  const {
    children,
    variant = "primary" /* Primary */,
    size = "default" /* Default */,
    fullWidth = false,
    className = "",
    preventDoubleClick = false,
    ...rest
  } = props;
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const model = mapButtonProps({
    variant,
    size,
    fullWidth,
    className,
    preventDoubleClick,
    href: "href" in rest ? rest.href : void 0
  });
  const isDisabled = "disabled" in rest ? rest.disabled : rest["aria-disabled"] === "true";
  const dataAttributes = {
    ...isPressed && { "data-pressed": "true" },
    ...isHovered && { "data-hovered": "true" },
    ...isFocused && { "data-focused": "true" },
    ...isDisabled && { "data-disabled": "true" }
  };
  const handleMouseDown = useCallback(
    () => !isDisabled && setIsPressed(true),
    [isDisabled]
  );
  const handleMouseUp = useCallback(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback(
    () => !isDisabled && setIsHovered(true),
    [isDisabled]
  );
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
        event.preventDefault();
        event.currentTarget.click();
      }
    },
    [rest]
  );
  const handleClick = useCallback(
    (event) => {
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
    },
    [preventDoubleClick]
  );
  if ("href" in rest && rest.href) {
    const {
      id: id2,
      style: style2,
      title: title2,
      ["aria-label"]: ariaLabel2,
      ["aria-describedby"]: ariaDescribedBy2,
      ["aria-labelledby"]: ariaLabelledBy2,
      tabIndex: tabIndex2,
      ...anchorRest
    } = rest;
    const anchorProps = rest;
    return /* @__PURE__ */ jsx(
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
        ...anchorProps["aria-disabled"] === "true" && { tabIndex: -1 },
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
    ...buttonRest
  } = rest;
  const buttonProps = rest;
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: buttonProps.type || "button",
      disabled: buttonProps.disabled,
      className: model.classes,
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

// src/mapping/tag.ts
function mapTagProps(input) {
  const { color = "default", noBorder, closable, disabled, className } = input;
  const classes = [
    "nhsuk-tag",
    color !== "default" ? `nhsuk-tag--${color}` : "",
    noBorder ? "nhsuk-tag--no-border" : "",
    closable ? "nhsuk-tag--closable" : "",
    disabled ? "nhsuk-tag--disabled" : "",
    className || ""
  ].filter(Boolean).join(" ");
  return { classes, showClose: !!closable, disabled: !!disabled };
}

// src/components/Tag/Tag.tsx
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
  const model = mapTagProps({ color, noBorder, closable, disabled, className });
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs("strong", { className: model.classes, ...props, children: [
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
export {
  SortStatusControl
};
//# sourceMappingURL=index.js.map
