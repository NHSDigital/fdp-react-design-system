// src/components/SpacingUtilities/SpacingUtilities.tsx
import { jsx } from "react/jsx-runtime";
var SpacingUtilities = ({
  debug = false,
  className,
  children,
  ...props
}) => {
  if (!children) {
    return null;
  }
  const classes = [
    "nhsuk-spacing-utilities",
    debug && "nhsuk-spacing-utilities--debug",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("div", { className: classes, ...props, children });
};
var getSpacingClass = {
  margin: (size) => `nhsuk-u-margin-${size}`,
  marginTop: (size) => `nhsuk-u-margin-top-${size}`,
  marginRight: (size) => `nhsuk-u-margin-right-${size}`,
  marginBottom: (size) => `nhsuk-u-margin-bottom-${size}`,
  marginLeft: (size) => `nhsuk-u-margin-left-${size}`,
  padding: (size) => `nhsuk-u-padding-${size}`,
  paddingTop: (size) => `nhsuk-u-padding-top-${size}`,
  paddingRight: (size) => `nhsuk-u-padding-right-${size}`,
  paddingBottom: (size) => `nhsuk-u-padding-bottom-${size}`,
  paddingLeft: (size) => `nhsuk-u-padding-left-${size}`,
  // Responsive variants
  marginResponsive: (size) => `nhsuk-u-margin-responsive-${size}`,
  marginTopResponsive: (size) => `nhsuk-u-margin-top-responsive-${size}`,
  marginRightResponsive: (size) => `nhsuk-u-margin-right-responsive-${size}`,
  marginBottomResponsive: (size) => `nhsuk-u-margin-bottom-responsive-${size}`,
  marginLeftResponsive: (size) => `nhsuk-u-margin-left-responsive-${size}`,
  paddingResponsive: (size) => `nhsuk-u-padding-responsive-${size}`,
  paddingTopResponsive: (size) => `nhsuk-u-padding-top-responsive-${size}`,
  paddingRightResponsive: (size) => `nhsuk-u-padding-right-responsive-${size}`,
  paddingBottomResponsive: (size) => `nhsuk-u-padding-bottom-responsive-${size}`,
  paddingLeftResponsive: (size) => `nhsuk-u-padding-left-responsive-${size}`
};
export {
  SpacingUtilities,
  getSpacingClass
};
//# sourceMappingURL=index.js.map
