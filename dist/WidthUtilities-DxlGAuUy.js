import { c as u, j as o } from "./SkipLink-CFQznirl.js";
import d from "react";
const m = ({
  children: s,
  className: e,
  fluid: i = !1,
  maxWidth: a,
  ...n
}) => {
  const t = u(
    {
      "nhsuk-width-container": !i,
      "nhsuk-width-container-fluid": i
    },
    e
  ), r = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ o.jsx("div", { className: t, style: r, ...n, children: s });
}, l = ({
  children: s,
  className: e,
  ...i
}) => {
  const a = u("nhsuk-grid-row", e);
  return /* @__PURE__ */ o.jsx("div", { className: a, ...i, children: s });
}, $ = ({
  children: s,
  width: e = "full",
  mobileWidth: i,
  tabletWidth: a,
  desktopWidth: n,
  start: t,
  className: r,
  forceWidth: p = !1,
  ...g
}) => {
  const h = u(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${e}`]: !p,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${e}`]: p,
      // Responsive width overrides
      [`nhsuk-u-${i}-mobile`]: i,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${n}-desktop`]: n,
      // Grid positioning
      [`nhsuk-grid-column-start-${t}`]: t && t >= 1 && t <= 7
    },
    r
  );
  return /* @__PURE__ */ o.jsx("div", { className: h, ...g, children: s });
}, f = ({
  children: s,
  className: e,
  ...i
}) => {
  const n = d.Children.toArray(s)[0], t = d.isValidElement(n) && (n.type === l || typeof n.props == "object" && n.props && "className" in n.props && typeof n.props.className == "string" && n.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ o.jsx(m, { className: e, ...i, children: t ? s : /* @__PURE__ */ o.jsx(l, { children: s }) });
}, v = ({
  as: s = "main",
  size: e = "default",
  className: i,
  children: a,
  ...n
}) => {
  const t = [
    "nhsuk-main-wrapper",
    e === "large" && "nhsuk-main-wrapper--l",
    e === "small" && "nhsuk-main-wrapper--s",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(s, { className: t, ...n, children: a });
}, R = ({
  debug: s = !1,
  className: e,
  children: i,
  ...a
}) => {
  if (!i)
    return null;
  const n = [
    "nhsuk-spacing-utilities",
    s && "nhsuk-spacing-utilities--debug",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("div", { className: n, ...a, children: i });
}, w = {
  margin: (s) => `nhsuk-u-margin-${s}`,
  marginTop: (s) => `nhsuk-u-margin-top-${s}`,
  marginRight: (s) => `nhsuk-u-margin-right-${s}`,
  marginBottom: (s) => `nhsuk-u-margin-bottom-${s}`,
  marginLeft: (s) => `nhsuk-u-margin-left-${s}`,
  padding: (s) => `nhsuk-u-padding-${s}`,
  paddingTop: (s) => `nhsuk-u-padding-top-${s}`,
  paddingRight: (s) => `nhsuk-u-padding-right-${s}`,
  paddingBottom: (s) => `nhsuk-u-padding-bottom-${s}`,
  paddingLeft: (s) => `nhsuk-u-padding-left-${s}`,
  // Responsive variants
  marginResponsive: (s) => `nhsuk-u-margin-responsive-${s}`,
  marginTopResponsive: (s) => `nhsuk-u-margin-top-responsive-${s}`,
  marginRightResponsive: (s) => `nhsuk-u-margin-right-responsive-${s}`,
  marginBottomResponsive: (s) => `nhsuk-u-margin-bottom-responsive-${s}`,
  marginLeftResponsive: (s) => `nhsuk-u-margin-left-responsive-${s}`,
  paddingResponsive: (s) => `nhsuk-u-padding-responsive-${s}`,
  paddingTopResponsive: (s) => `nhsuk-u-padding-top-responsive-${s}`,
  paddingRightResponsive: (s) => `nhsuk-u-padding-right-responsive-${s}`,
  paddingBottomResponsive: (s) => `nhsuk-u-padding-bottom-responsive-${s}`,
  paddingLeftResponsive: (s) => `nhsuk-u-padding-left-responsive-${s}`
}, j = ({
  debug: s = !1,
  className: e,
  children: i,
  ...a
}) => {
  if (!i)
    return null;
  const n = [
    "nhsuk-width-utilities",
    s && "nhsuk-width-utilities--debug",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("div", { className: n, ...a, children: i });
}, C = {
  width: (s) => `nhsuk-u-width-${s}`,
  widthTablet: (s) => `nhsuk-u-width-${s}-tablet`
}, N = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
];
export {
  m as C,
  f as G,
  v as M,
  l as R,
  R as S,
  j as W,
  $ as a,
  C as b,
  N as c,
  w as g
};
//# sourceMappingURL=WidthUtilities-DxlGAuUy.js.map
