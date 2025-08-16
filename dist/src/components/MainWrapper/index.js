// src/components/MainWrapper/MainWrapper.tsx
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(Component, { className: classes, ...props, children });
};
export {
  MainWrapper
};
//# sourceMappingURL=index.js.map
