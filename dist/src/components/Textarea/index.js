// src/mapping/textarea.ts
function mapTextareaProps(input) {
  var _a;
  const resize = (_a = input.resize) != null ? _a : "vertical";
  const classes = [
    "nhsuk-textarea",
    input.hasError ? "nhsuk-textarea--error" : "",
    resize !== "vertical" ? `nhsuk-textarea--resize-${resize}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  return { classes, describedBy: input.describedBy };
}

// src/components/Textarea/Textarea.tsx
import { jsx } from "react/jsx-runtime";
var Textarea = ({
  id,
  name,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  readOnly = false,
  required = false,
  hasError = false,
  describedBy,
  className,
  rows = 5,
  cols,
  maxLength,
  minLength,
  wrap = "soft",
  resize = "vertical",
  autoComplete,
  spellCheck,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...props
}) => {
  const { classes: textareaClasses, describedBy: mappedDescribedBy } = mapTextareaProps({ hasError, resize, className, describedBy });
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: textareaClasses,
      id,
      name,
      value,
      defaultValue,
      placeholder,
      disabled,
      readOnly,
      required,
      "aria-describedby": mappedDescribedBy,
      rows,
      cols,
      maxLength,
      minLength,
      wrap,
      autoComplete,
      spellCheck,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      ...props
    }
  );
};
export {
  Textarea
};
//# sourceMappingURL=index.js.map
