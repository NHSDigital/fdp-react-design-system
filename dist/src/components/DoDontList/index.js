// src/components/DoDontList/DoDontList.tsx
import { forwardRef } from "react";

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

// src/components/DoDontList/DoDontList.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var DoDontList = forwardRef(
  ({
    title,
    type,
    items,
    hidePrefix = false,
    headingLevel = 3,
    className,
    ...props
  }, ref) => {
    const classes = ["nhsuk-do-dont-list"];
    if (className) {
      classes.push(className);
    }
    const listClasses = [
      "nhsuk-list",
      type === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ];
    const renderIcon = () => {
      if (type === "cross") {
        return /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__cross",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "34",
            height: "34",
            children: [
              /* @__PURE__ */ jsx2(
                "path",
                {
                  d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
                  fill: "#d5281b"
                }
              ),
              /* @__PURE__ */ jsx2(
                "path",
                {
                  d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
                  fill: "#d5281b"
                }
              )
            ]
          }
        );
      } else {
        return /* @__PURE__ */ jsx2(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__tick",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            width: "34",
            height: "34",
            children: /* @__PURE__ */ jsx2(
              "path",
              {
                strokeWidth: "4",
                strokeLinecap: "round",
                d: "M18.4 7.8l-8.5 8.4L5.6 12",
                stroke: "#007f3b"
              }
            )
          }
        );
      }
    };
    const formatItemText = (itemText) => {
      if (type === "cross" && !hidePrefix) {
        return `do not ${itemText}`;
      }
      return itemText;
    };
    const renderHeading = () => {
      return /* @__PURE__ */ jsx2(
        Heading,
        {
          level: headingLevel,
          className: "nhsuk-do-dont-list__label",
          text: title
        }
      );
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: classes.join(" "),
        ...props,
        children: [
          renderHeading(),
          /* @__PURE__ */ jsx2("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ jsx2("ul", { className: listClasses.join(" "), role: "list", children: items.map((item, index) => /* @__PURE__ */ jsxs("li", { children: [
            renderIcon(),
            formatItemText(item.item)
          ] }, index)) }) })
        ]
      }
    );
  }
);
DoDontList.displayName = "DoDontList";
export {
  DoDontList
};
//# sourceMappingURL=index.js.map
