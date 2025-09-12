import { c as l, j as r } from "./SkipLink-CFQznirl.js";
import h from "react";
var m = /* @__PURE__ */ ((s) => (s.OneQuarter = "one-quarter", s.OneThird = "one-third", s.OneHalf = "one-half", s.TwoThirds = "two-thirds", s.ThreeQuarters = "three-quarters", s.Full = "full", s))(m || {}), p = /* @__PURE__ */ ((s) => (s.Left = "left", s.Center = "center", s.Right = "right", s))(p || {});
const $ = ({
  children: s,
  className: i,
  fluid: n = !1,
  maxWidth: t,
  style: a,
  ...e
}) => {
  const o = l(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    i
  ), u = t ? { maxWidth: t, ...a || {} } : a;
  return /* @__PURE__ */ r.jsx("div", { className: o, style: u, ...e, children: s });
}, d = ({
  children: s,
  className: i,
  style: n,
  ...t
}) => {
  const a = l("nhsuk-grid-row", i);
  return /* @__PURE__ */ r.jsx("div", { className: a, style: n, ...t, children: s });
}, w = ({
  children: s,
  width: i = m.Full,
  mobileWidth: n,
  tabletWidth: t,
  desktopWidth: a,
  start: e,
  className: o,
  forceWidth: u = !1,
  style: c,
  align: g,
  ...k
}) => {
  const f = l(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${i}`]: !u,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${i}`]: u,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${t}-tablet`]: !!t,
      [`nhsuk-u-${a}-desktop`]: !!a,
      // Grid positioning
      [`nhsuk-grid-column-start-${e}`]: e && e >= 1 && e <= 7,
      // Alignment
      "nhsuk-grid-align-left": g === p.Left,
      "nhsuk-grid-align-center": g === p.Center,
      "nhsuk-grid-align-right": g === p.Right
    },
    o
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...k, children: s });
}, j = ({
  children: s,
  className: i,
  style: n,
  ...t
}) => {
  const e = h.Children.toArray(s)[0], o = h.isValidElement(e) && (e.type === d || typeof e.props == "object" && e.props && "className" in e.props && typeof e.props.className == "string" && e.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx($, { className: i, style: n, ...t, children: o ? s : /* @__PURE__ */ r.jsx(d, { children: s }) });
}, C = ({
  as: s = "main",
  size: i = "default",
  className: n,
  children: t,
  ...a
}) => {
  const e = [
    "nhsuk-main-wrapper",
    i === "large" && "nhsuk-main-wrapper--l",
    i === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(s, { className: e, ...a, children: t });
}, N = ({
  debug: s = !1,
  className: i,
  children: n,
  ...t
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-spacing-utilities",
    s && "nhsuk-spacing-utilities--debug",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...t, children: n });
}, T = {
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
}, b = ({
  debug: s = !1,
  className: i,
  children: n,
  ...t
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-width-utilities",
    s && "nhsuk-width-utilities--debug",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...t, children: n });
}, x = {
  width: (s) => `nhsuk-u-width-${s}`,
  widthTablet: (s) => `nhsuk-u-width-${s}-tablet`
}, y = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
];
export {
  $ as C,
  j as G,
  C as M,
  d as R,
  N as S,
  b as W,
  w as a,
  x as b,
  y as c,
  T as g
};
//# sourceMappingURL=WidthUtilities-BBRQkGiZ.js.map
