// src/mapping/label.ts
function mapLabelProps(input) {
  const size = input.size || "m";
  const classes = [
    "nhsuk-label",
    size !== "m" ? `nhsuk-label--${size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: input.isPageHeading ? "h1" : "label",
    classes,
    size,
    htmlFor: input.isPageHeading ? void 0 : input.htmlFor,
    isPageHeading: !!input.isPageHeading
  };
}

// src/components/Label/Label.tsx
import { jsx } from "react/jsx-runtime";
var Label = ({
  htmlFor,
  className,
  isPageHeading = false,
  size = "m",
  children,
  ...props
}) => {
  const model = mapLabelProps({ size, isPageHeading, className, htmlFor });
  const LabelElement = model.tag;
  return /* @__PURE__ */ jsx(LabelElement, { className: model.classes, htmlFor: model.htmlFor, ...props, children: isPageHeading ? /* @__PURE__ */ jsx("label", { className: "nhsuk-label-wrapper", htmlFor, children }) : children });
};
export {
  Label
};
//# sourceMappingURL=index.js.map
