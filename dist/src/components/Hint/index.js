// src/mapping/hint.ts
function mapHintProps(input) {
  const classes = [
    "nhsuk-hint",
    input.className || ""
  ].filter(Boolean).join(" ");
  return { classes, id: input.id };
}

// src/components/Hint/Hint.tsx
import { jsx } from "react/jsx-runtime";
var Hint = ({ id, className, children, ...rest }) => {
  const model = mapHintProps({ id, className });
  return /* @__PURE__ */ jsx("div", { className: model.classes, id: model.id, ...rest, children });
};
export {
  Hint
};
//# sourceMappingURL=index.js.map
