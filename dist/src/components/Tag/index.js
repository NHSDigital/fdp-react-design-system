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
  const model = mapTagProps({ color, noBorder, closable, disabled, className });
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs("strong", { className: model.classes, ...props, children: [
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
export {
  Tag
};
//# sourceMappingURL=index.js.map
