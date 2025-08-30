import { c as p, j as o } from "./SkipLink-CFQznirl.js";
import d from "react";
const c = ({
  children: s,
  className: e,
  fluid: n = !1,
  maxWidth: a,
  style: t,
  ...i
}) => {
  const r = p(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    e
  ), u = a ? { maxWidth: a, ...t || {} } : t;
  return /* @__PURE__ */ o.jsx("div", { className: r, style: u, ...i, children: s });
}, l = ({
  children: s,
  className: e,
  style: n,
  ...a
}) => {
  const t = p("nhsuk-grid-row", e);
  return /* @__PURE__ */ o.jsx("div", { className: t, style: n, ...a, children: s });
}, f = ({
  children: s,
  width: e = "full",
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: t,
  start: i,
  className: r,
  forceWidth: u = !1,
  style: g,
  ...h
}) => {
  const m = p(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${e}`]: !u,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${e}`]: u,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: n,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${t}-desktop`]: t,
      // Grid positioning
      [`nhsuk-grid-column-start-${i}`]: i && i >= 1 && i <= 7
    },
    r
  );
  return /* @__PURE__ */ o.jsx("div", { className: m, style: g, ...h, children: s });
}, v = ({
  children: s,
  className: e,
  style: n,
  ...a
}) => {
  const i = d.Children.toArray(s)[0], r = d.isValidElement(i) && (i.type === l || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ o.jsx(c, { className: e, style: n, ...a, children: r ? s : /* @__PURE__ */ o.jsx(l, { children: s }) });
}, R = ({
  as: s = "main",
  size: e = "default",
  className: n,
  children: a,
  ...t
}) => {
  const i = [
    "nhsuk-main-wrapper",
    e === "large" && "nhsuk-main-wrapper--l",
    e === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(s, { className: i, ...t, children: a });
}, w = ({
  debug: s = !1,
  className: e,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const t = [
    "nhsuk-spacing-utilities",
    s && "nhsuk-spacing-utilities--debug",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("div", { className: t, ...a, children: n });
}, j = {
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
}, C = ({
  debug: s = !1,
  className: e,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const t = [
    "nhsuk-width-utilities",
    s && "nhsuk-width-utilities--debug",
    e
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("div", { className: t, ...a, children: n });
}, N = {
  width: (s) => `nhsuk-u-width-${s}`,
  widthTablet: (s) => `nhsuk-u-width-${s}-tablet`
}, b = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
];
export {
  c as C,
  v as G,
  R as M,
  l as R,
  w as S,
  C as W,
  f as a,
  N as b,
  b as c,
  j as g
};
//# sourceMappingURL=WidthUtilities-1pLGiAi2.js.map
