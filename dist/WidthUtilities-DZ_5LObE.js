import { c as p, j as r } from "./SkipLink-CFQznirl.js";
import g from "react";
var h = /* @__PURE__ */ ((s) => (s.OneQuarter = "one-quarter", s.OneThird = "one-third", s.OneHalf = "one-half", s.TwoThirds = "two-thirds", s.ThreeQuarters = "three-quarters", s.Full = "full", s))(h || {}), f = /* @__PURE__ */ ((s) => (s.Mobile = "mobile", s.Tablet = "tablet", s.Desktop = "desktop", s.LargeDesktop = "large-desktop", s))(f || {}), $ = /* @__PURE__ */ ((s) => (s.Left = "left", s.Right = "right", s))($ || {});
const v = ({
  children: s,
  className: a,
  fluid: n = !1,
  maxWidth: i,
  style: t,
  ...e
}) => {
  const o = p(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    a
  ), u = i ? { maxWidth: i, ...t || {} } : t;
  return /* @__PURE__ */ r.jsx("div", { className: o, style: u, ...e, children: s });
}, d = ({
  children: s,
  className: a,
  style: n,
  ...i
}) => {
  const t = p("nhsuk-grid-row", a);
  return /* @__PURE__ */ r.jsx("div", { className: t, style: n, ...i, children: s });
}, b = ({
  children: s,
  width: a = h.Full,
  mobileWidth: n,
  tabletWidth: i,
  desktopWidth: t,
  start: e,
  className: o,
  forceWidth: u = !1,
  style: m,
  align: l,
  ...c
}) => {
  const k = p(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${a}`]: !u,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${a}`]: u,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${i}-tablet`]: !!i,
      [`nhsuk-u-${t}-desktop`]: !!t,
      // Grid positioning
      [`nhsuk-grid-column-start-${e}`]: e && e >= 1 && e <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...l ? { [`nhsuk-grid-align-${l}`]: !0 } : {}
    },
    o
  );
  return /* @__PURE__ */ r.jsx("div", { className: k, style: m, ...c, children: s });
}, j = ({
  children: s,
  className: a,
  style: n,
  ...i
}) => {
  const e = g.Children.toArray(s)[0], o = g.isValidElement(e) && (e.type === d || typeof e.props == "object" && e.props && "className" in e.props && typeof e.props.className == "string" && e.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(v, { className: a, style: n, ...i, children: o ? s : /* @__PURE__ */ r.jsx(d, { children: s }) });
}, C = ({
  as: s = "main",
  size: a = "default",
  className: n,
  children: i,
  ...t
}) => {
  const e = [
    "nhsuk-main-wrapper",
    a === "large" && "nhsuk-main-wrapper--l",
    a === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(s, { className: e, ...t, children: i });
}, T = ({
  debug: s = !1,
  className: a,
  children: n,
  ...i
}) => {
  if (!n)
    return null;
  const t = [
    "nhsuk-spacing-utilities",
    s && "nhsuk-spacing-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: t, ...i, children: n });
}, N = {
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
}, x = ({
  debug: s = !1,
  className: a,
  children: n,
  ...i
}) => {
  if (!n)
    return null;
  const t = [
    "nhsuk-width-utilities",
    s && "nhsuk-width-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: t, ...i, children: n });
}, y = {
  width: (s) => `nhsuk-u-width-${s}`,
  widthTablet: (s) => `nhsuk-u-width-${s}-tablet`
}, L = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
];
export {
  f as B,
  v as C,
  $ as F,
  j as G,
  C as M,
  d as R,
  T as S,
  x as W,
  b as a,
  h as b,
  y as c,
  L as d,
  N as g
};
//# sourceMappingURL=WidthUtilities-DZ_5LObE.js.map
