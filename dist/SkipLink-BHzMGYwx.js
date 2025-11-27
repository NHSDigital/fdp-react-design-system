import u from "react";
function S(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var h = { exports: {} };
var y;
function C() {
  return y || (y = 1, (function(e) {
    (function() {
      var a = {}.hasOwnProperty;
      function t() {
        for (var s = "", n = 0; n < arguments.length; n++) {
          var i = arguments[n];
          i && (s = o(s, r(i)));
        }
        return s;
      }
      function r(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return t.apply(null, s);
        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
          return s.toString();
        var n = "";
        for (var i in s)
          a.call(s, i) && s[i] && (n = o(n, i));
        return n;
      }
      function o(s, n) {
        return n ? s ? s + " " + n : s + n : s;
      }
      e.exports ? (t.default = t, e.exports = t) : window.classNames = t;
    })();
  })(h)), h.exports;
}
var E = C();
const k = /* @__PURE__ */ S(E);
var R = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(R || {}), T = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(T || {}), L = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(L || {}), O = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(O || {});
const j = ({
  children: e,
  className: a,
  fluid: t = !1,
  maxWidth: r,
  style: o,
  ...s
}) => {
  const n = k(
    {
      "nhsuk-width-container": !t,
      "nhsuk-width-container-fluid": t
    },
    a
  ), i = r ? { maxWidth: r, ...o || {} } : o;
  return /* @__PURE__ */ u.createElement("div", { className: n, style: i, ...s }, e);
}, v = ({
  children: e,
  className: a,
  style: t,
  align: r,
  rowGap: o,
  ...s
}) => {
  const n = k(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    r ? `nhsuk-grid-row-align-${r}` : void 0,
    a
  );
  return /* @__PURE__ */ u.createElement("div", { className: n, style: t, ...s }, e);
}, A = ({
  children: e,
  width: a = R.Full,
  mobileWidth: t,
  tabletWidth: r,
  desktopWidth: o,
  start: s,
  className: n,
  forceWidth: i = !1,
  style: m,
  align: l,
  ...p
}) => {
  const d = k(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${a}`]: !i,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${a}`]: i,
      // Responsive width overrides
      [`nhsuk-u-${t}-mobile`]: !!t,
      [`nhsuk-u-${r}-tablet`]: !!r,
      [`nhsuk-u-${o}-desktop`]: !!o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...l ? { [`nhsuk-grid-align-${l}`]: !0 } : {}
    },
    n
  );
  return /* @__PURE__ */ u.createElement("div", { className: d, style: m, ...p }, e);
}, F = ({
  children: e,
  className: a,
  style: t,
  rowGap: r = 8,
  ...o
}) => {
  const s = u.Children.toArray(e), n = s[0], i = u.isValidElement(n) && (n.type === v || typeof n.props == "object" && n.props && "className" in n.props && typeof n.props.className == "string" && n.props.className.includes("nhsuk-grid-row")), m = typeof r == "number" ? `${r}px` : r;
  let l = e;
  if (i)
    l = s.map((p, d) => {
      if (!u.isValidElement(p)) return p;
      const f = p, c = f.props || {}, b = typeof c.className == "string" ? c.className : "";
      if (!(f.type === v || b.includes("nhsuk-grid-row"))) return p;
      const g = c.rowGap, w = g !== void 0 ? typeof g == "number" ? `${g}px` : g : m, $ = d === 0 ? void 0 : w;
      if (!$) return p;
      const N = { ...c.style || {}, marginTop: $ };
      return u.cloneElement(f, { style: N });
    });
  else {
    const p = { marginTop: void 0 };
    l = /* @__PURE__ */ u.createElement(v, { style: p }, e);
  }
  return /* @__PURE__ */ u.createElement(j, { className: a, style: t, ...o }, l);
}, V = ({
  debug: e = !1,
  className: a,
  children: t,
  ...r
}) => {
  if (!t)
    return null;
  const o = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ u.createElement("div", { className: o, ...r }, t);
}, _ = {
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
  T as B,
  j as C,
  L as F,
  F as G,
  v as R,
  V as S,
  A as a,
  R as b,
  k as c,
  O as d,
  _ as g
};
//# sourceMappingURL=SkipLink-BHzMGYwx.js.map
