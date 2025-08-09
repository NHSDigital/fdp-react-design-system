import oe, { useState as ae, useEffect as M } from "react";
function ie(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var w = { exports: {} }, _ = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ue() {
  if (U) return _;
  U = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function s(i, o, t) {
    var u = null;
    if (t !== void 0 && (u = "" + t), o.key !== void 0 && (u = "" + o.key), "key" in o) {
      t = {};
      for (var c in o)
        c !== "key" && (t[c] = o[c]);
    } else t = o;
    return o = t.ref, {
      $$typeof: r,
      type: i,
      key: u,
      ref: o !== void 0 ? o : null,
      props: t
    };
  }
  return _.Fragment = a, _.jsx = s, _.jsxs = s, _;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function le() {
  return W || (W = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case G:
          return "Profiler";
        case z:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case H:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return n = e.displayName || null, n !== null ? n : r(e.type) || "Memo";
          case C:
            n = e._payload, e = e._init;
            try {
              return r(e(n));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function s(e) {
      try {
        a(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var l = n.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), a(e);
      }
    }
    function i(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var n = r(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (L.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function c(e, n) {
      function l() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function k() {
      var e = r(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function m(e, n, l, f, b, h, O, y) {
      return l = h.ref, e = {
        $$typeof: P,
        type: e,
        key: n,
        props: h,
        _owner: b
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: k
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, n, l, f, b, h, O, y) {
      var d = n.children;
      if (d !== void 0)
        if (f)
          if (ne(d)) {
            for (f = 0; f < d.length; f++)
              p(d[f]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(d);
      if (L.call(n, "key")) {
        d = r(e);
        var E = Object.keys(n).filter(function(se) {
          return se !== "key";
        });
        f = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", D[d + f] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          d,
          E,
          d
        ), D[d + f] = !0);
      }
      if (d = null, l !== void 0 && (s(l), d = "" + l), u(n) && (s(n.key), d = "" + n.key), "key" in n) {
        l = {};
        for (var $ in n)
          $ !== "key" && (l[$] = n[$]);
      } else l = n;
      return d && c(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), m(
        e,
        d,
        h,
        b,
        o(),
        l,
        O,
        y
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var R = oe, P = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), H = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), x = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, ne = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, q = R.react_stack_bottom_frame.bind(
      R,
      t
    )(), F = A(i(t)), D = {};
    T.Fragment = j, T.jsx = function(e, n, l, f, b) {
      var h = 1e4 > x.recentlyCreatedOwnerStacks++;
      return g(
        e,
        n,
        l,
        !1,
        f,
        b,
        h ? Error("react-stack-top-frame") : q,
        h ? A(i(e)) : F
      );
    }, T.jsxs = function(e, n, l, f, b) {
      var h = 1e4 > x.recentlyCreatedOwnerStacks++;
      return g(
        e,
        n,
        l,
        !0,
        f,
        b,
        h ? Error("react-stack-top-frame") : q,
        h ? A(i(e)) : F
      );
    };
  }()), T;
}
var B;
function ce() {
  return B || (B = 1, process.env.NODE_ENV === "production" ? w.exports = ue() : w.exports = le()), w.exports;
}
var v = ce(), N = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var J;
function fe() {
  return J || (J = 1, function(r) {
    (function() {
      var a = {}.hasOwnProperty;
      function s() {
        for (var t = "", u = 0; u < arguments.length; u++) {
          var c = arguments[u];
          c && (t = o(t, i(c)));
        }
        return t;
      }
      function i(t) {
        if (typeof t == "string" || typeof t == "number")
          return t;
        if (typeof t != "object")
          return "";
        if (Array.isArray(t))
          return s.apply(null, t);
        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
          return t.toString();
        var u = "";
        for (var c in t)
          a.call(t, c) && t[c] && (u = o(u, c));
        return u;
      }
      function o(t, u) {
        return u ? t ? t + " " + u : t + u : t;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  }(N)), N.exports;
}
var de = fe();
const S = /* @__PURE__ */ ie(de), me = ({
  children: r,
  className: a,
  fluid: s = !1,
  maxWidth: i,
  ...o
}) => {
  const t = S(
    {
      "nhsuk-width-container": !s,
      "nhsuk-width-container-fluid": s
    },
    a
  ), u = i ? { maxWidth: i } : void 0;
  return /* @__PURE__ */ v.jsx("div", { className: t, style: u, ...o, children: r });
}, pe = ({
  children: r,
  className: a,
  ...s
}) => {
  const i = S("nhsuk-grid-row", a);
  return /* @__PURE__ */ v.jsx("div", { className: i, ...s, children: r });
}, he = ({
  children: r,
  width: a = "full",
  mobileWidth: s,
  tabletWidth: i,
  desktopWidth: o,
  start: t,
  className: u,
  forceWidth: c = !1,
  ...k
}) => {
  const m = S(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${a}`]: !c,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${a}`]: c,
      // Responsive width overrides
      [`nhsuk-u-${s}-mobile`]: s,
      [`nhsuk-u-${i}-tablet`]: i,
      [`nhsuk-u-${o}-desktop`]: o,
      // Grid positioning
      [`nhsuk-grid-column-start-${t}`]: t && t >= 1 && t <= 7
    },
    u
  );
  return /* @__PURE__ */ v.jsx("div", { className: m, ...k, children: r });
}, ge = ({
  children: r,
  className: a,
  ...s
}) => /* @__PURE__ */ v.jsx(me, { className: a, ...s, children: /* @__PURE__ */ v.jsx(pe, { children: r }) }), ve = ({
  as: r = "main",
  size: a = "default",
  className: s,
  children: i,
  ...o
}) => {
  const t = [
    "nhsuk-main-wrapper",
    a === "large" && "nhsuk-main-wrapper--l",
    a === "small" && "nhsuk-main-wrapper--s",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v.jsx(r, { className: t, ...o, children: i });
}, be = ({
  debug: r = !1,
  className: a,
  children: s,
  ...i
}) => {
  if (!s)
    return null;
  const o = [
    "nhsuk-spacing-utilities",
    r && "nhsuk-spacing-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v.jsx("div", { className: o, ...i, children: s });
}, Re = {
  margin: (r) => `nhsuk-u-margin-${r}`,
  marginTop: (r) => `nhsuk-u-margin-top-${r}`,
  marginRight: (r) => `nhsuk-u-margin-right-${r}`,
  marginBottom: (r) => `nhsuk-u-margin-bottom-${r}`,
  marginLeft: (r) => `nhsuk-u-margin-left-${r}`,
  padding: (r) => `nhsuk-u-padding-${r}`,
  paddingTop: (r) => `nhsuk-u-padding-top-${r}`,
  paddingRight: (r) => `nhsuk-u-padding-right-${r}`,
  paddingBottom: (r) => `nhsuk-u-padding-bottom-${r}`,
  paddingLeft: (r) => `nhsuk-u-padding-left-${r}`,
  // Responsive variants
  marginResponsive: (r) => `nhsuk-u-margin-responsive-${r}`,
  marginTopResponsive: (r) => `nhsuk-u-margin-top-responsive-${r}`,
  marginRightResponsive: (r) => `nhsuk-u-margin-right-responsive-${r}`,
  marginBottomResponsive: (r) => `nhsuk-u-margin-bottom-responsive-${r}`,
  marginLeftResponsive: (r) => `nhsuk-u-margin-left-responsive-${r}`,
  paddingResponsive: (r) => `nhsuk-u-padding-responsive-${r}`,
  paddingTopResponsive: (r) => `nhsuk-u-padding-top-responsive-${r}`,
  paddingRightResponsive: (r) => `nhsuk-u-padding-right-responsive-${r}`,
  paddingBottomResponsive: (r) => `nhsuk-u-padding-bottom-responsive-${r}`,
  paddingLeftResponsive: (r) => `nhsuk-u-padding-left-responsive-${r}`
}, Ee = ({
  debug: r = !1,
  className: a,
  children: s,
  ...i
}) => {
  if (!s)
    return null;
  const o = [
    "nhsuk-width-utilities",
    r && "nhsuk-width-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v.jsx("div", { className: o, ...i, children: s });
}, _e = {
  width: (r) => `nhsuk-u-width-${r}`,
  widthTablet: (r) => `nhsuk-u-width-${r}-tablet`
}, Te = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], we = ({
  text: r = "Skip to main content",
  href: a = "#maincontent",
  classes: s,
  attributes: i = {}
}) => {
  const [o, t] = ae(!1);
  M(() => {
    t(!0);
  }, []), M(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const c = (k) => {
      const m = k.target, g = m.getAttribute("href");
      if (g && g.startsWith("#")) {
        const p = document.querySelector(g);
        if (p) {
          p.hasAttribute("tabindex") || p.setAttribute("tabindex", "-1"), p.focus(), p.classList.add("nhsuk-skip-link-focused-element");
          const R = window.setTimeout(() => {
            p.classList.remove("nhsuk-skip-link-focused-element"), p.getAttribute("tabindex") === "-1" && p.removeAttribute("tabindex");
          }, 3e3);
          m.__nhsSkipLinkTimeout = R;
        }
      }
    };
    try {
      const k = document.querySelectorAll(".nhsuk-skip-link");
      return k.forEach((m) => {
        m.addEventListener("click", c);
      }), () => {
        try {
          k.forEach((m) => {
            m.removeEventListener("click", c);
            const g = m.__nhsSkipLinkTimeout;
            g && window.clearTimeout && window.clearTimeout(g);
          });
        } catch (m) {
          console.warn("SkipLink cleanup error:", m);
        }
      };
    } catch (k) {
      return console.warn("SkipLink initialization error:", k), () => {
      };
    }
  }, [o]);
  const u = S("nhsuk-skip-link", s);
  return /* @__PURE__ */ v.jsx(
    "a",
    {
      className: u,
      href: a,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": o ? "true" : "false",
      ...i,
      children: r
    }
  );
};
export {
  he as Column,
  me as Container,
  ge as Grid,
  ve as MainWrapper,
  pe as Row,
  we as SkipLink,
  be as SpacingUtilities,
  Te as WIDTH_FRACTIONS,
  Ee as WidthUtilities,
  Re as getSpacingClass,
  _e as getWidthClass
};
//# sourceMappingURL=core.js.js.map
