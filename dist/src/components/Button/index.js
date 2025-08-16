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
        id: anchorProps.id,
        style: anchorProps.style,
        title: anchorProps.title,
        "aria-label": anchorProps["aria-label"],
        "aria-describedby": anchorProps["aria-describedby"],
        "aria-labelledby": anchorProps["aria-labelledby"],
        tabIndex: anchorProps.tabIndex,
        children
      }
    );
  }
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
      id: buttonProps.id,
      style: buttonProps.style,
      title: buttonProps.title,
      "aria-label": buttonProps["aria-label"],
      "aria-describedby": buttonProps["aria-describedby"],
      "aria-labelledby": buttonProps["aria-labelledby"],
      tabIndex: buttonProps.tabIndex,
      name: buttonProps.name,
      value: buttonProps.value,
      form: buttonProps.form,
      formAction: buttonProps.formAction,
      formEncType: buttonProps.formEncType,
      formMethod: buttonProps.formMethod,
      formNoValidate: buttonProps.formNoValidate,
      formTarget: buttonProps.formTarget,
      autoFocus: buttonProps.autoFocus,
      children
    }
  );
}
var Button = forwardRef(ButtonComponent);
Button.displayName = "Button";
var Button_default = Button;
export {
  Button_default as Button
};
//# sourceMappingURL=index.js.map
