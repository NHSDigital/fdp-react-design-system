// src/components/WarningCallout/WarningCallout.tsx
import { createElement } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var WarningCallout = ({
  heading,
  headingLevel = 3,
  text,
  html,
  children,
  className,
  ...props
}) => {
  const headingContainsImportant = /important/i.test(heading);
  const renderContent = () => {
    if (children) {
      return children;
    }
    if (html) {
      return /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } });
    }
    if (text) {
      return /* @__PURE__ */ jsx("p", { children: text });
    }
    return null;
  };
  const classes = [
    "nhsuk-warning-callout",
    className
  ].filter(Boolean).join(" ");
  const headingTag = `h${headingLevel}`;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes,
      ...props,
      children: [
        createElement(
          headingTag,
          { className: "nhsuk-warning-callout__label" },
          headingContainsImportant ? /* @__PURE__ */ jsxs(Fragment, { children: [
            heading,
            /* @__PURE__ */ jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ jsxs("span", { role: "text", children: [
            /* @__PURE__ */ jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            heading
          ] })
        ),
        renderContent()
      ]
    }
  );
};
export {
  WarningCallout
};
//# sourceMappingURL=index.js.map
