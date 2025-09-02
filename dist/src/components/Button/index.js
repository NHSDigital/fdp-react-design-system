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
var Button_default = Button;
export {
  Button_default as Button
};
//# sourceMappingURL=index.js.map
