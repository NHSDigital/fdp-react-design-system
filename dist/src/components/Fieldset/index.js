// src/mapping/fieldset.ts
function mapFieldsetProps(input) {
  var _a;
  const fieldsetClasses = ["nhsuk-fieldset", input.className || ""].filter(Boolean).join(" ");
  const legendClasses = input.legend ? [
    "nhsuk-fieldset__legend",
    input.legend.size ? `nhsuk-fieldset__legend--${input.legend.size}` : "",
    input.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses,
    legendClasses,
    legendIsPageHeading: !!((_a = input.legend) == null ? void 0 : _a.isPageHeading),
    describedBy: input.describedBy
  };
}

// src/components/Fieldset/Fieldset.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Fieldset = ({
  children,
  legend,
  className,
  describedBy,
  ...fieldsetProps
}) => {
  const model = mapFieldsetProps({
    className,
    describedBy,
    legend: legend ? {
      size: legend.size,
      className: legend.className,
      isPageHeading: legend.isPageHeading
    } : void 0
  });
  const renderLegendContent = () => {
    const content = (legend == null ? void 0 : legend.html) ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: legend.html } }) : legend == null ? void 0 : legend.text;
    if (model.legendIsPageHeading) {
      return /* @__PURE__ */ jsx("h1", { className: "nhsuk-fieldset__heading", children: content });
    }
    return content;
  };
  return /* @__PURE__ */ jsxs(
    "fieldset",
    {
      className: model.fieldsetClasses,
      "aria-describedby": model.describedBy,
      ...fieldsetProps,
      children: [
        legend && (legend.text || legend.html) && /* @__PURE__ */ jsx("legend", { className: model.legendClasses, children: renderLegendContent() }),
        children
      ]
    }
  );
};
export {
  Fieldset
};
//# sourceMappingURL=index.js.map
