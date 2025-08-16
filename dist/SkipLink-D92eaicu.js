import ne, { useState as oe, useEffect as q } from "react";
function ae(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var h = { exports: {} }, T = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  if (D) return T;
  D = 1;
  var a = Symbol.for("react.transitional.element"), k = Symbol.for("react.fragment");
  function l(p, s, t) {
    var o = null;
    if (t !== void 0 && (o = "" + t), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      t = {};
      for (var c in s)
        c !== "key" && (t[c] = s[c]);
    } else t = s;
    return s = t.ref, {
      $$typeof: a,
      type: p,
      key: o,
      ref: s !== void 0 ? s : null,
      props: t
    };
  }
  return T.Fragment = k, T.jsx = l, T.jsxs = l, T;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ie() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case w:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case z:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case B:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function k(e) {
      return "" + e;
    }
    function l(e) {
      try {
        k(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), k(e);
      }
    }
    function p(e) {
      if (e === w) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = A.A;
      return e === null ? null : e.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function o(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function c(e, r) {
      function n() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function b() {
      var e = a(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function f(e, r, n, i, _, m, y, x) {
      return n = m.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: m,
        _owner: _
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
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
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, n, i, _, m, y, x) {
      var u = r.children;
      if (u !== void 0)
        if (i)
          if (re(u)) {
            for (i = 0; i < u.length; i++)
              d(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(u);
      if (C.call(r, "key")) {
        u = a(e);
        var R = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        i = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", $[u + i] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          R,
          u
        ), $[u + i] = !0);
      }
      if (u = null, n !== void 0 && (l(n), u = "" + n), o(r) && (l(r.key), u = "" + r.key), "key" in r) {
        n = {};
        for (var j in r)
          j !== "key" && (n[j] = r[j]);
      } else n = r;
      return u && c(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), f(
        e,
        u,
        m,
        _,
        s(),
        n,
        y,
        x
      );
    }
    function d(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var v = ne, g = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), X = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), A = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, re = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var L, Y = {}, I = v.react_stack_bottom_frame.bind(
      v,
      t
    )(), F = O(p(t)), $ = {};
    S.Fragment = w, S.jsx = function(e, r, n, i, _) {
      var m = 1e4 > A.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        n,
        !1,
        i,
        _,
        m ? Error("react-stack-top-frame") : I,
        m ? O(p(e)) : F
      );
    }, S.jsxs = function(e, r, n, i, _) {
      var m = 1e4 > A.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        n,
        !0,
        i,
        _,
        m ? Error("react-stack-top-frame") : I,
        m ? O(p(e)) : F
      );
    };
  })()), S;
}
var W;
function ue() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? h.exports = se() : h.exports = ie()), h.exports;
}
var ce = ue(), P = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var U;
function le() {
  return U || (U = 1, (function(a) {
    (function() {
      var k = {}.hasOwnProperty;
      function l() {
        for (var t = "", o = 0; o < arguments.length; o++) {
          var c = arguments[o];
          c && (t = s(t, p(c)));
        }
        return t;
      }
      function p(t) {
        if (typeof t == "string" || typeof t == "number")
          return t;
        if (typeof t != "object")
          return "";
        if (Array.isArray(t))
          return l.apply(null, t);
        if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]"))
          return t.toString();
        var o = "";
        for (var c in t)
          k.call(t, c) && t[c] && (o = s(o, c));
        return o;
      }
      function s(t, o) {
        return o ? t ? t + " " + o : t + o : t;
      }
      a.exports ? (l.default = l, a.exports = l) : window.classNames = l;
    })();
  })(P)), P.exports;
}
var fe = le();
const de = /* @__PURE__ */ ae(fe), pe = ({
  text: a = "Skip to main content",
  href: k = "#maincontent",
  classes: l,
  attributes: p = {}
}) => {
  const [s, t] = oe(!1);
  q(() => {
    t(!0);
  }, []), q(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const c = (b) => {
      const f = b.target, E = f.getAttribute("href");
      if (E && E.startsWith("#")) {
        const d = document.querySelector(E);
        if (d) {
          d.hasAttribute("tabindex") || d.setAttribute("tabindex", "-1"), d.focus(), d.classList.add("nhsuk-skip-link-focused-element");
          const v = window.setTimeout(() => {
            d.classList.remove("nhsuk-skip-link-focused-element"), d.getAttribute("tabindex") === "-1" && d.removeAttribute("tabindex");
          }, 3e3);
          f.__nhsSkipLinkTimeout = v;
        }
      }
    };
    try {
      const b = document.querySelectorAll(".nhsuk-skip-link");
      return b.forEach((f) => {
        f.addEventListener("click", c);
      }), () => {
        try {
          b.forEach((f) => {
            f.removeEventListener("click", c);
            const E = f.__nhsSkipLinkTimeout;
            E && window.clearTimeout && window.clearTimeout(E);
          });
        } catch (f) {
          console.warn("SkipLink cleanup error:", f);
        }
      };
    } catch (b) {
      return console.warn("SkipLink initialization error:", b), () => {
      };
    }
  }, [s]);
  const o = de("nhsuk-skip-link", l);
  return /* @__PURE__ */ ce.jsx(
    "a",
    {
      className: o,
      href: k,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": s ? "true" : "false",
      ...p,
      children: a
    }
  );
};
export {
  pe as S,
  de as c,
  ce as j
};
//# sourceMappingURL=SkipLink-D92eaicu.js.map
