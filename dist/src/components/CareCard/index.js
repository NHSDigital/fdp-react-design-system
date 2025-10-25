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

// src/components/CareCard/CareCard.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var CareCard = ({
  type,
  heading,
  headingHtml,
  headingLevel = 3,
  headingClasses,
  description,
  descriptionHtml,
  className,
  children,
  "data-testid": dataTestId,
  id,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy
}) => {
  const cardClasses = [
    "nhsuk-care-card",
    `nhsuk-care-card--${type}`,
    className
  ].filter(Boolean).join(" ");
  const headingClassList = [
    "nhsuk-care-card__heading",
    headingClasses
  ].filter(Boolean).join(" ");
  const renderHeading = () => {
    if (headingHtml) {
      return /* @__PURE__ */ jsx2("div", { dangerouslySetInnerHTML: { __html: headingHtml } });
    }
    if (!heading) return null;
    const visuallyHiddenText = {
      "non-urgent": "Non-urgent advice:",
      "urgent": "Urgent advice:",
      "emergency": "Immediate action required:"
    }[type];
    const headingContent = /* @__PURE__ */ jsxs("span", { role: "text", children: [
      /* @__PURE__ */ jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        visuallyHiddenText,
        " "
      ] }),
      heading
    ] });
    return /* @__PURE__ */ jsx2(
      Heading,
      {
        level: headingLevel,
        className: headingClassList,
        children: headingContent
      }
    );
  };
  const renderContent = () => {
    if (children) return children;
    if (descriptionHtml) return /* @__PURE__ */ jsx2("div", { dangerouslySetInnerHTML: { __html: descriptionHtml } });
    if (description) return /* @__PURE__ */ jsx2("p", { className: "nhsuk-care-card__text", children: description });
    return null;
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cardClasses,
      "data-testid": dataTestId,
      id,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          renderHeading(),
          /* @__PURE__ */ jsx2("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsx2("div", { className: "nhsuk-care-card__content", children: renderContent() })
      ]
    }
  );
};
export {
  CareCard
};
//# sourceMappingURL=index.js.map
