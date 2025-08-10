import C, { useState as ie, useEffect as U } from "react";
function ue(r) {
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
var W;
function le() {
  if (W) return _;
  W = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function o(i, s, t) {
    var u = null;
    if (t !== void 0 && (u = "" + t), s.key !== void 0 && (u = "" + s.key), "key" in s) {
      t = {};
      for (var c in s)
        c !== "key" && (t[c] = s[c]);
    } else t = s;
    return s = t.ref, {
      $$typeof: r,
      type: i,
      key: u,
      ref: s !== void 0 ? s : null,
      props: t
    };
  }
  return _.Fragment = a, _.jsx = o, _.jsxs = o, _;
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
var B;
function ce() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === se ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case H:
          return "Profiler";
        case X:
          return "StrictMode";
        case ee:
          return "Suspense";
        case re:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case G:
            return "Portal";
          case Q:
            return (e.displayName || "Context") + ".Provider";
          case Z:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return n = e.displayName || null, n !== null ? n : r(e.type) || "Memo";
          case L:
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
    function o(e) {
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
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var n = r(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function u(e) {
      if (I.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function c(e, n) {
      function l() {
        Y || (Y = !0, console.error(
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
      return F[e] || (F[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, n, l, f, b, h, x, O) {
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
        value: x
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, n, l, f, b, h, x, O) {
      var d = n.children;
      if (d !== void 0)
        if (f)
          if (oe(d)) {
            for (f = 0; f < d.length; f++)
              m(d[f]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(d);
      if (I.call(n, "key")) {
        d = r(e);
        var E = Object.keys(n).filter(function(ae) {
          return ae !== "key";
        });
        f = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", M[d + f] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), M[d + f] = !0);
      }
      if (d = null, l !== void 0 && (o(l), d = "" + l), u(n) && (o(n.key), d = "" + n.key), "key" in n) {
        l = {};
        for (var N in n)
          N !== "key" && (l[N] = n[N]);
      } else l = n;
      return d && c(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        d,
        h,
        b,
        s(),
        l,
        x,
        O
      );
    }
    function m(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var R = C, P = Symbol.for("react.transitional.element"), G = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), se = Symbol.for("react.client.reference"), y = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, oe = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, F = {}, q = R.react_stack_bottom_frame.bind(
      R,
      t
    )(), D = j(i(t)), M = {};
    T.Fragment = A, T.jsx = function(e, n, l, f, b) {
      var h = 1e4 > y.recentlyCreatedOwnerStacks++;
      return g(
        e,
        n,
        l,
        !1,
        f,
        b,
        h ? Error("react-stack-top-frame") : q,
        h ? j(i(e)) : D
      );
    }, T.jsxs = function(e, n, l, f, b) {
      var h = 1e4 > y.recentlyCreatedOwnerStacks++;
      return g(
        e,
        n,
        l,
        !0,
        f,
        b,
        h ? Error("react-stack-top-frame") : q,
        h ? j(i(e)) : D
      );
    };
  }()), T;
}
var V;
function fe() {
  return V || (V = 1, process.env.NODE_ENV === "production" ? w.exports = le() : w.exports = ce()), w.exports;
}
var v = fe(), $ = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var J;
function de() {
  return J || (J = 1, function(r) {
    (function() {
      var a = {}.hasOwnProperty;
      function o() {
        for (var t = "", u = 0; u < arguments.length; u++) {
          var c = arguments[u];
          c && (t = s(t, i(c)));
        }
        return t;
      }
      function i(t) {
        if (typeof t == "string" || typeof t == "number")
          return t;
        if (typeof t != "object")
          return "";
        if (Array.isArray(t))
          return o.apply(null, t);
        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
          return t.toString();
        var u = "";
        for (var c in t)
          a.call(t, c) && t[c] && (u = s(u, c));
        return u;
      }
      function s(t, u) {
        return u ? t ? t + " " + u : t + u : t;
      }
      r.exports ? (o.default = o, r.exports = o) : window.classNames = o;
    })();
  }($)), $.exports;
}
var pe = de();
const S = /* @__PURE__ */ ue(pe), me = ({
  children: r,
  className: a,
  fluid: o = !1,
  maxWidth: i,
  ...s
}) => {
  const t = S(
    {
      "nhsuk-width-container": !o,
      "nhsuk-width-container-fluid": o
    },
    a
  ), u = i ? { maxWidth: i } : void 0;
  return /* @__PURE__ */ v.jsx("div", { className: t, style: u, ...s, children: r });
}, z = ({
  children: r,
  className: a,
  ...o
}) => {
  const i = S("nhsuk-grid-row", a);
  return /* @__PURE__ */ v.jsx("div", { className: i, ...o, children: r });
}, he = ({
  children: r,
  width: a = "full",
  mobileWidth: o,
  tabletWidth: i,
  desktopWidth: s,
  start: t,
  className: u,
  forceWidth: c = !1,
  ...k
}) => {
  const p = S(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${a}`]: !c,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${a}`]: c,
      // Responsive width overrides
      [`nhsuk-u-${o}-mobile`]: o,
      [`nhsuk-u-${i}-tablet`]: i,
      [`nhsuk-u-${s}-desktop`]: s,
      // Grid positioning
      [`nhsuk-grid-column-start-${t}`]: t && t >= 1 && t <= 7
    },
    u
  );
  return /* @__PURE__ */ v.jsx("div", { className: p, ...k, children: r });
}, ge = ({
  children: r,
  className: a,
  ...o
}) => {
  const s = C.Children.toArray(r)[0], t = C.isValidElement(s) && (s.type === z || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ v.jsx(me, { className: a, ...o, children: t ? r : /* @__PURE__ */ v.jsx(z, { children: r }) });
}, ve = ({
  as: r = "main",
  size: a = "default",
  className: o,
  children: i,
  ...s
}) => {
  const t = [
    "nhsuk-main-wrapper",
    a === "large" && "nhsuk-main-wrapper--l",
    a === "small" && "nhsuk-main-wrapper--s",
    o
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v.jsx(r, { className: t, ...s, children: i });
}, be = ({
  debug: r = !1,
  className: a,
  children: o,
  ...i
}) => {
  if (!o)
    return null;
  const s = [
    "nhsuk-spacing-utilities",
    r && "nhsuk-spacing-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v.jsx("div", { className: s, ...i, children: o });
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
  children: o,
  ...i
}) => {
  if (!o)
    return null;
  const s = [
    "nhsuk-width-utilities",
    r && "nhsuk-width-utilities--debug",
    a
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ v.jsx("div", { className: s, ...i, children: o });
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
  classes: o,
  attributes: i = {}
}) => {
  const [s, t] = ie(!1);
  U(() => {
    t(!0);
  }, []), U(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const c = (k) => {
      const p = k.target, g = p.getAttribute("href");
      if (g && g.startsWith("#")) {
        const m = document.querySelector(g);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const R = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          p.__nhsSkipLinkTimeout = R;
        }
      }
    };
    try {
      const k = document.querySelectorAll(".nhsuk-skip-link");
      return k.forEach((p) => {
        p.addEventListener("click", c);
      }), () => {
        try {
          k.forEach((p) => {
            p.removeEventListener("click", c);
            const g = p.__nhsSkipLinkTimeout;
            g && window.clearTimeout && window.clearTimeout(g);
          });
        } catch (p) {
          console.warn("SkipLink cleanup error:", p);
        }
      };
    } catch (k) {
      return console.warn("SkipLink initialization error:", k), () => {
      };
    }
  }, [s]);
  const u = S("nhsuk-skip-link", o);
  return /* @__PURE__ */ v.jsx(
    "a",
    {
      className: u,
      href: a,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": s ? "true" : "false",
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
  z as Row,
  we as SkipLink,
  be as SpacingUtilities,
  Te as WIDTH_FRACTIONS,
  Ee as WidthUtilities,
  Re as getSpacingClass,
  _e as getWidthClass
};
//# sourceMappingURL=core.js.js.map
