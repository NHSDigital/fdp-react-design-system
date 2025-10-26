// src/components/Heading/Heading.tsx
import { createElement } from "react";

// src/mapping/heading.ts
function deriveLevel(size) {
  switch (size) {
    case "xxl":
    case "xl":
      return 1;
    case "l":
      return 2;
    case "m":
      return 3;
    case "s":
      return 4;
    case "xs":
      return 5;
    default:
      return 2;
  }
}
function mapHeadingProps(input) {
  var _a;
  const level = (_a = input.level) != null ? _a : deriveLevel(input.size);
  const classes = [
    "nhsuk-heading",
    input.size ? `nhsuk-heading--${input.size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const style = input.marginBottom ? { marginBottom: input.marginBottom } : void 0;
  return { tag: `h${level}`, classes, style };
}

// src/components/Heading/Heading.tsx
import { jsx } from "react/jsx-runtime";
var Heading = ({
  level,
  className,
  text,
  html,
  children,
  size,
  marginBottom,
  ...rest
}) => {
  const model = mapHeadingProps({ level, size, className, marginBottom });
  const content = children || (html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  return createElement(
    model.tag,
    { className: model.classes, style: model.style, ...rest },
    content
  );
};

// src/components/SummaryCard/SummaryCard.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var SummaryCard = ({
  title,
  value,
  subtitle,
  variant = "default",
  href,
  className = "",
  ariaLabel,
  ...props
}) => {
  const baseClasses = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${variant}`,
    className
  ].filter(Boolean).join(" ");
  const content = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx2(Heading, { level: 3, className: "nhs-fdp-summary-card__title", children: title }),
    /* @__PURE__ */ jsx2("p", { className: "nhs-fdp-summary-card__value", children: value }),
    subtitle && /* @__PURE__ */ jsx2("p", { className: "nhs-fdp-summary-card__subtitle", children: subtitle })
  ] });
  if (href) {
    return /* @__PURE__ */ jsx2(
      "a",
      {
        className: `${baseClasses} nhs-fdp-summary-card--clickable`,
        href,
        "aria-label": ariaLabel || `${title}: ${value}`,
        ...props,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    "div",
    {
      className: baseClasses,
      "aria-label": ariaLabel,
      ...props,
      children: content
    }
  );
};
export {
  SummaryCard
};
//# sourceMappingURL=index.js.map
