// src/mapping/errorMessage.ts
function mapErrorMessageProps(input) {
  var _a;
  const classes = ["nhsuk-error-message", input.className || ""].filter(Boolean).join(" ");
  return {
    classes,
    id: input.id,
    visuallyHiddenText: (_a = input.visuallyHiddenText) != null ? _a : "Error:"
  };
}

// src/components/ErrorMessage/ErrorMessage.tsx
import { jsxs } from "react/jsx-runtime";
var ErrorMessage = ({ id, className, visuallyHiddenText = "Error:", children, ...rest }) => {
  const model = mapErrorMessageProps({ id, className, visuallyHiddenText });
  return /* @__PURE__ */ jsxs("span", { className: model.classes, id: model.id, ...rest, children: [
    /* @__PURE__ */ jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      model.visuallyHiddenText,
      " "
    ] }),
    children
  ] });
};
export {
  ErrorMessage
};
//# sourceMappingURL=index.js.map
