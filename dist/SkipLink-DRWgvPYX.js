import i from "react";
import { c as r } from "./SkipLink-ByzSQC80.js";
const c = ({
  as: t = "main",
  size: s = "default",
  className: e,
  children: a,
  ...n
}) => {
  const l = [
    "nhsuk-main-wrapper",
    s === "large" && "nhsuk-main-wrapper--l",
    s === "small" && "nhsuk-main-wrapper--s",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.createElement(t, { className: l, ...n }, a);
}, h = ({
  debug: t = !1,
  className: s,
  children: e,
  ...a
}) => {
  if (!e)
    return null;
  const n = [
    "nhsuk-width-utilities",
    t && "nhsuk-width-utilities--debug",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ i.createElement("div", { className: n, ...a }, e);
}, m = {
  width: (t) => `nhsuk-u-width-${t}`,
  widthTablet: (t) => `nhsuk-u-width-${t}-tablet`
}, k = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], p = ({
  text: t = "Skip to main content",
  href: s = "#maincontent",
  classes: e,
  attributes: a = {}
}) => {
  const n = r("nhsuk-skip-link", e);
  return /* @__PURE__ */ i.createElement(
    "a",
    {
      className: n,
      href: s,
      "data-module": "nhsuk-skip-link",
      ...a
    },
    t
  );
};
export {
  c as M,
  p as S,
  h as W,
  k as a,
  m as g
};
//# sourceMappingURL=SkipLink-DRWgvPYX.js.map
