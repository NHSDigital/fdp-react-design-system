// src/components/Details/Details.tsx
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Details = forwardRef(
  ({
    summaryText,
    summaryHtml,
    text,
    html,
    open = false,
    className = "",
    id,
    children,
    ...props
  }, ref) => {
    const classes = [
      "nhsuk-details",
      className
    ].filter(Boolean).join(" ");
    const summaryContent = summaryHtml ? /* @__PURE__ */ jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: summaryHtml }
      }
    ) : /* @__PURE__ */ jsx("span", { className: "nhsuk-details__summary-text", children: summaryText });
    let bodyContent;
    if (children) {
      bodyContent = children;
    } else if (html) {
      bodyContent = /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html } });
    } else if (text) {
      bodyContent = text;
    }
    return /* @__PURE__ */ jsxs(
      "details",
      {
        ref,
        id,
        className: classes,
        open,
        ...props,
        children: [
          /* @__PURE__ */ jsx("summary", { className: "nhsuk-details__summary", children: summaryContent }),
          /* @__PURE__ */ jsx("div", { className: "nhsuk-details__text", children: bodyContent })
        ]
      }
    );
  }
);
Details.displayName = "Details";
export {
  Details
};
//# sourceMappingURL=index.js.map
