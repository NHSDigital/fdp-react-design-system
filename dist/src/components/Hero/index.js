// src/components/Hero/Hero.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Hero = ({
  heading,
  headingLevel = 1,
  headingClasses = "",
  text,
  html,
  imageURL,
  containerClasses = "",
  classes = "",
  children,
  ...attributes
}) => {
  const heroClasses = [
    "nhsuk-hero",
    imageURL && heading ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    imageURL && !heading ? "nhsuk-hero--image" : "",
    classes
  ].filter(Boolean).join(" ");
  const containerClassNames = [
    "nhsuk-width-container",
    containerClasses,
    !imageURL ? "nhsuk-hero--border" : ""
  ].filter(Boolean).join(" ");
  const headingClassNames = [
    "nhsuk-hero__heading",
    headingClasses,
    !children && !text && !html ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" ");
  const hasContent = children || heading || text || html;
  const renderHeading = () => {
    if (!heading) return null;
    const props = { className: headingClassNames };
    switch (headingLevel) {
      case 1:
        return /* @__PURE__ */ jsx("h1", { ...props, children: heading });
      case 2:
        return /* @__PURE__ */ jsx("h2", { ...props, children: heading });
      case 3:
        return /* @__PURE__ */ jsx("h3", { ...props, children: heading });
      case 4:
        return /* @__PURE__ */ jsx("h4", { ...props, children: heading });
      case 5:
        return /* @__PURE__ */ jsx("h5", { ...props, children: heading });
      case 6:
        return /* @__PURE__ */ jsx("h6", { ...props, children: heading });
      default:
        return /* @__PURE__ */ jsx("h1", { ...props, children: heading });
    }
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: heroClasses,
      style: imageURL ? { backgroundImage: `url('${imageURL}')` } : void 0,
      role: "banner",
      ...attributes,
      children: [
        imageURL && /* @__PURE__ */ jsx("div", { className: "nhsuk-hero__overlay", children: hasContent && /* @__PURE__ */ jsx("div", { className: containerClassNames, children: /* @__PURE__ */ jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ jsxs("div", { className: "nhsuk-hero-content", children: [
          renderHeading(),
          children ? children : html ? /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } }) : text ? /* @__PURE__ */ jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: text }) : null,
          /* @__PURE__ */ jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !imageURL && hasContent && /* @__PURE__ */ jsx("div", { className: containerClassNames, children: /* @__PURE__ */ jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          renderHeading(),
          children ? children : html ? /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } }) : text ? /* @__PURE__ */ jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: text }) : null
        ] }) }) }) })
      ]
    }
  );
};
Hero.displayName = "Hero";
var Hero_default = Hero;
export {
  Hero_default as Hero
};
//# sourceMappingURL=index.js.map
