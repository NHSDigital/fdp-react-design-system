// src/components/Images/Images.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Images = ({
  src,
  alt,
  caption,
  sizes,
  srcset,
  className,
  ...props
}) => {
  const classes = [
    "nhsuk-image",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs(
    "figure",
    {
      className: classes,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src,
            alt,
            ...sizes && srcset ? { sizes, srcSet: srcset } : {}
          }
        ),
        caption && /* @__PURE__ */ jsx(
          "figcaption",
          {
            className: "nhsuk-image__caption",
            dangerouslySetInnerHTML: { __html: caption }
          }
        )
      ]
    }
  );
};
export {
  Images
};
//# sourceMappingURL=index.js.map
