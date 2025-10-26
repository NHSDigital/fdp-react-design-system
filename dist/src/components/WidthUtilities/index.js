// src/components/WidthUtilities/WidthUtilities.tsx
import { jsx } from "react/jsx-runtime";
var WidthUtilities = ({
  debug = false,
  className,
  children,
  ...props
}) => {
  if (!children) {
    return null;
  }
  const classes = [
    "nhsuk-width-utilities",
    debug && "nhsuk-width-utilities--debug",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx("div", { className: classes, ...props, children });
};
var getWidthClass = {
  width: (fraction) => `nhsuk-u-width-${fraction}`,
  widthTablet: (fraction) => `nhsuk-u-width-${fraction}-tablet`
};
var WIDTH_FRACTIONS = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
];
export {
  WIDTH_FRACTIONS,
  WidthUtilities,
  getWidthClass
};
//# sourceMappingURL=index.js.map
