// src/components/Card/Card.tsx
import React2 from "react";

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
var Heading = ({ level, className, text, html, children, size, marginBottom, ...rest }) => {
  const model = mapHeadingProps({ level, size, className, marginBottom });
  const content = children || (html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  return createElement(model.tag, { className: model.classes, style: model.style, ...rest }, content);
};

// src/components/Card/Card.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = React2.forwardRef(({
  variant = "default",
  heading,
  headingHtml,
  headingLevel = 2,
  headingClasses,
  description,
  descriptionHtml,
  href,
  imgURL,
  imgAlt,
  ...htmlAttributes
}, ref) => {
  const cardClasses = [
    "nhsuk-card",
    variant === "clickable" && "nhsuk-card--clickable",
    variant === "secondary" && "nhsuk-card--secondary",
    variant === "feature" && "nhsuk-card--feature",
    htmlAttributes.className
  ].filter(Boolean).join(" ");
  const contentClasses = [
    "nhsuk-card__content",
    variant === "feature" && "nhsuk-card__content--feature",
    variant === "primary" && "nhsuk-card__content--primary",
    variant === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" ");
  const headingClassList = [
    "nhsuk-card__heading",
    variant === "feature" && "nhsuk-card__heading--feature",
    headingClasses
  ].filter(Boolean).join(" ");
  const renderHeading = () => {
    if (headingHtml) {
      return /* @__PURE__ */ jsx2("div", { dangerouslySetInnerHTML: { __html: headingHtml } });
    }
    if (!heading) return null;
    const headingContent = () => {
      if (href && variant !== "feature") {
        return /* @__PURE__ */ jsx2("a", { className: "nhsuk-card__link", href, children: heading });
      }
      return heading;
    };
    return /* @__PURE__ */ jsx2(
      Heading,
      {
        level: headingLevel,
        className: headingClassList,
        children: headingContent()
      }
    );
  };
  const renderContent = () => {
    if (htmlAttributes.children) return htmlAttributes.children;
    if (descriptionHtml) return /* @__PURE__ */ jsx2("div", { dangerouslySetInnerHTML: { __html: descriptionHtml } });
    if (description) return /* @__PURE__ */ jsx2("p", { className: "nhsuk-card__description", children: description });
    return null;
  };
  const renderPrimaryIcon = () => {
    if (variant !== "primary") return null;
    return /* @__PURE__ */ jsxs(
      "svg",
      {
        className: "nhsuk-icon",
        xmlns: "http://www.w3.org/2000/svg",
        width: "27",
        height: "27",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          /* @__PURE__ */ jsx2("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
          /* @__PURE__ */ jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
            /* @__PURE__ */ jsx2("path", { d: "M15.438 13l-3.771 3.771" }),
            /* @__PURE__ */ jsx2("path", { d: "M11.667 9.229L15.438 13" })
          ] })
        ]
      }
    );
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...htmlAttributes,
      className: cardClasses,
      ref,
      children: [
        imgURL && /* @__PURE__ */ jsx2(
          "img",
          {
            className: "nhsuk-card__img",
            src: imgURL,
            alt: imgAlt || ""
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: contentClasses, children: [
          renderHeading(),
          renderContent(),
          renderPrimaryIcon()
        ] })
      ]
    }
  );
});
Card.displayName = "Card";
var CardGroup = ({
  className,
  children,
  "data-testid": dataTestId,
  id
}) => {
  const classes = ["nhsuk-card-group", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx2(
    "ul",
    {
      className: classes,
      "data-testid": dataTestId,
      id,
      children
    }
  );
};
var CardGroupItem = ({
  className,
  children,
  "data-testid": dataTestId
}) => {
  const classes = ["nhsuk-card-group__item", className].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx2(
    "li",
    {
      className: classes,
      "data-testid": dataTestId,
      children
    }
  );
};
export {
  Card,
  CardGroup,
  CardGroupItem
};
//# sourceMappingURL=index.js.map
