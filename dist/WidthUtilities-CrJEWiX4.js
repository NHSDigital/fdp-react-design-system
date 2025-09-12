import { c as g, j as r } from "./SkipLink-CFQznirl.js";
import h from "react";
var m = /* @__PURE__ */ ((s) => (s.OneQuarter = "one-quarter", s.OneThird = "one-third", s.OneHalf = "one-half", s.TwoThirds = "two-thirds", s.ThreeQuarters = "three-quarters", s.Full = "full", s))(m || {}), v = /* @__PURE__ */ ((s) => (s.Mobile = "mobile", s.Tablet = "tablet", s.Desktop = "desktop", s.LargeDesktop = "large-desktop", s))(v || {}), $ = /* @__PURE__ */ ((s) => (s.Left = "left", s.Right = "right", s))($ || {}), p = /* @__PURE__ */ ((s) => (s.Left = "left", s.Center = "center", s.Right = "right", s))(p || {});
const R = ({
  children: s,
  className: t,
  fluid: n = !1,
  maxWidth: i,
  style: a,
  ...e
}) => {
  const o = g(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), u = i ? { maxWidth: i, ...a || {} } : a;
  return /* @__PURE__ */ r.jsx("div", { className: o, style: u, ...e, children: s });
}, d = ({
  children: s,
  className: t,
  style: n,
  ...i
}) => {
  const a = g("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: a, style: n, ...i, children: s });
}, j = ({
  children: s,
  width: t = m.Full,
  mobileWidth: n,
  tabletWidth: i,
  desktopWidth: a,
  start: e,
  className: o,
  forceWidth: u = !1,
  style: c,
  align: l,
  ...k
}) => {
  const f = g(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !u,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: u,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${i}-tablet`]: !!i,
      [`nhsuk-u-${a}-desktop`]: !!a,
      // Grid positioning
      [`nhsuk-grid-column-start-${e}`]: e && e >= 1 && e <= 7,
      // Alignment
      "nhsuk-grid-align-left": l === p.Left,
      "nhsuk-grid-align-center": l === p.Center,
      "nhsuk-grid-align-right": l === p.Right
    },
    o
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...k, children: s });
}, C = ({
  children: s,
  className: t,
  style: n,
  ...i
}) => {
  const e = h.Children.toArray(s)[0], o = h.isValidElement(e) && (e.type === d || typeof e.props == "object" && e.props && "className" in e.props && typeof e.props.className == "string" && e.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(R, { className: t, style: n, ...i, children: o ? s : /* @__PURE__ */ r.jsx(d, { children: s }) });
}, T = ({
  as: s = "main",
  size: t = "default",
  className: n,
  children: i,
  ...a
}) => {
  const e = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(s, { className: e, ...a, children: i });
}, N = ({
  debug: s = !1,
  className: t,
  children: n,
  ...i
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-spacing-utilities",
    s && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...i, children: n });
}, x = {
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
}, L = ({
  debug: s = !1,
  className: t,
  children: n,
  ...i
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-width-utilities",
    s && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...i, children: n });
}, y = {
  width: (s) => `nhsuk-u-width-${s}`,
  widthTablet: (s) => `nhsuk-u-width-${s}-tablet`
}, B = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
];
export {
  v as B,
  R as C,
  $ as F,
  C as G,
  T as M,
  d as R,
  N as S,
  L as W,
  j as a,
  m as b,
  y as c,
  B as d,
  x as g
};
//# sourceMappingURL=WidthUtilities-CrJEWiX4.js.map
