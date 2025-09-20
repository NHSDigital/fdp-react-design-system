import u from "react";
function k(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var p = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var c;
function $() {
  return c || (c = 1, (function(e) {
    (function() {
      var i = {}.hasOwnProperty;
      function n() {
        for (var s = "", t = 0; t < arguments.length; t++) {
          var o = arguments[t];
          o && (s = a(s, r(o)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return n.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var t = "";
        for (var o in s)
          i.call(s, o) && s[o] && (t = a(t, o));
        return t;
      }
      function a(s, t) {
        return t ? s ? s + " " + t : s + t : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(p)), p.exports;
}
var R = $();
const l = /* @__PURE__ */ k(R);
var m = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(m || {}), b = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(b || {}), y = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(y || {}), w = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(w || {});
const C = ({
  children: e,
  className: i,
  fluid: n = !1,
  maxWidth: r,
  style: a,
  ...s
}) => {
  const t = l(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    i
  ), o = r ? { maxWidth: r, ...a || {} } : a;
  return /* @__PURE__ */ u.createElement("div", { className: t, style: o, ...s }, e);
}, d = ({
  children: e,
  className: i,
  style: n,
  align: r,
  ...a
}) => {
  const s = l(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    r ? `nhsuk-grid-row-align-${r}` : void 0,
    i
  );
  return /* @__PURE__ */ u.createElement("div", { className: s, style: n, ...a }, e);
}, E = ({
  children: e,
  width: i = m.Full,
  mobileWidth: n,
  tabletWidth: r,
  desktopWidth: a,
  start: s,
  className: t,
  forceWidth: o = !1,
  style: h,
  align: g,
  ...f
}) => {
  const v = l(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${i}`]: !o,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${i}`]: o,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${r}-tablet`]: !!r,
      [`nhsuk-u-${a}-desktop`]: !!a,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...g ? { [`nhsuk-grid-align-${g}`]: !0 } : {}
    },
    t
  );
  return /* @__PURE__ */ u.createElement("div", { className: v, style: h, ...f }, e);
}, S = ({
  children: e,
  className: i,
  style: n,
  ...r
}) => {
  const s = u.Children.toArray(e)[0], t = u.isValidElement(s) && (s.type === d || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ u.createElement(C, { className: i, style: n, ...r }, t ? e : /* @__PURE__ */ u.createElement(d, null, e));
}, T = ({
  debug: e = !1,
  className: i,
  children: n,
  ...r
}) => {
  if (!n)
    return null;
  const a = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u.createElement("div", { className: a, ...r }, n);
}, O = {
  margin: (e) => `nhsuk-u-margin-${e}`,
  marginTop: (e) => `nhsuk-u-margin-top-${e}`,
  marginRight: (e) => `nhsuk-u-margin-right-${e}`,
  marginBottom: (e) => `nhsuk-u-margin-bottom-${e}`,
  marginLeft: (e) => `nhsuk-u-margin-left-${e}`,
  padding: (e) => `nhsuk-u-padding-${e}`,
  paddingTop: (e) => `nhsuk-u-padding-top-${e}`,
  paddingRight: (e) => `nhsuk-u-padding-right-${e}`,
  paddingBottom: (e) => `nhsuk-u-padding-bottom-${e}`,
  paddingLeft: (e) => `nhsuk-u-padding-left-${e}`,
  // Responsive variants
  marginResponsive: (e) => `nhsuk-u-margin-responsive-${e}`,
  marginTopResponsive: (e) => `nhsuk-u-margin-top-responsive-${e}`,
  marginRightResponsive: (e) => `nhsuk-u-margin-right-responsive-${e}`,
  marginBottomResponsive: (e) => `nhsuk-u-margin-bottom-responsive-${e}`,
  marginLeftResponsive: (e) => `nhsuk-u-margin-left-responsive-${e}`,
  paddingResponsive: (e) => `nhsuk-u-padding-responsive-${e}`,
  paddingTopResponsive: (e) => `nhsuk-u-padding-top-responsive-${e}`,
  paddingRightResponsive: (e) => `nhsuk-u-padding-right-responsive-${e}`,
  paddingBottomResponsive: (e) => `nhsuk-u-padding-bottom-responsive-${e}`,
  paddingLeftResponsive: (e) => `nhsuk-u-padding-left-responsive-${e}`
};
export {
  b as B,
  C,
  y as F,
  S as G,
  d as R,
  T as S,
  E as a,
  m as b,
  l as c,
  w as d,
  O as g
};
//# sourceMappingURL=SkipLink-9NnU450j.js.map
