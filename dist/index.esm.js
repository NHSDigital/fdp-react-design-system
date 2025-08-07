import * as ls from "react";
import pe, { useRef as te, useCallback as J, useState as ne, useContext as qe, useEffect as ae, useMemo as se, forwardRef as tt, createContext as Tn, createElement as Do, useImperativeHandle as Po, useReducer as cs } from "react";
import { flushSync as us } from "react-dom";
function ds(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, gt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ar;
function fs() {
  if (Ar) return gt;
  Ar = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), a.key !== void 0 && (i = "" + a.key), "key" in a) {
      s = {};
      for (var l in a)
        l !== "key" && (s[l] = a[l]);
    } else s = a;
    return a = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return gt.Fragment = t, gt.jsx = n, gt.jsxs = n, gt;
}
var bt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function hs() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === w ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case m:
          return "Fragment";
        case F:
          return "Profiler";
        case C:
          return "StrictMode";
        case R:
          return "Suspense";
        case M:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case k:
            return "Portal";
          case P:
            return (E.displayName || "Context") + ".Provider";
          case N:
            return (E._context.displayName || "Context") + ".Consumer";
          case T:
            var U = E.render;
            return E = E.displayName, E || (E = U.displayName || U.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case A:
            return U = E.displayName || null, U !== null ? U : e(E.type) || "Memo";
          case B:
            U = E._payload, E = E._init;
            try {
              return e(E(U));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function n(E) {
      try {
        t(E);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var W = U.error, ee = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return W.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ee
        ), t(E);
      }
    }
    function r(E) {
      if (E === m) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === B)
        return "<...>";
      try {
        var U = e(E);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var E = c.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (j.call(E, "key")) {
        var U = Object.getOwnPropertyDescriptor(E, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function l(E, U) {
      function W() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: W,
        configurable: !0
      });
    }
    function u() {
      var E = e(this.type);
      return h[E] || (h[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function f(E, U, W, ee, V, v, I, G) {
      return W = v.ref, E = {
        $$typeof: b,
        type: E,
        key: U,
        props: v,
        _owner: V
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, U, W, ee, V, v, I, G) {
      var S = U.children;
      if (S !== void 0)
        if (ee)
          if (K(S)) {
            for (ee = 0; ee < S.length; ee++)
              p(S[ee]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(S);
      if (j.call(U, "key")) {
        S = e(E);
        var x = Object.keys(U).filter(function(H) {
          return H !== "key";
        });
        ee = 0 < x.length ? "{key: someKey, " + x.join(": ..., ") + ": ...}" : "{key: someKey}", Z[S + ee] || (x = 0 < x.length ? "{" + x.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          S,
          x,
          S
        ), Z[S + ee] = !0);
      }
      if (S = null, W !== void 0 && (n(W), S = "" + W), i(U) && (n(U.key), S = "" + U.key), "key" in U) {
        W = {};
        for (var L in U)
          L !== "key" && (W[L] = U[L]);
      } else W = U;
      return S && l(
        W,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), f(
        E,
        S,
        v,
        V,
        a(),
        W,
        I,
        G
      );
    }
    function p(E) {
      typeof E == "object" && E !== null && E.$$typeof === b && E._store && (E._store.validated = 1);
    }
    var g = pe, b = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), P = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), c = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, K = Array.isArray, _ = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var D, h = {}, z = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), Y = _(r(s)), Z = {};
    bt.Fragment = m, bt.jsx = function(E, U, W, ee, V) {
      var v = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        E,
        U,
        W,
        !1,
        ee,
        V,
        v ? Error("react-stack-top-frame") : z,
        v ? _(r(E)) : Y
      );
    }, bt.jsxs = function(E, U, W, ee, V) {
      var v = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        E,
        U,
        W,
        !0,
        ee,
        V,
        v ? Error("react-stack-top-frame") : z,
        v ? _(r(E)) : Y
      );
    };
  }()), bt;
}
var Wr;
function ps() {
  return Wr || (Wr = 1, process.env.NODE_ENV === "production" ? jt.exports = fs() : jt.exports = hs()), jt.exports;
}
var o = ps(), Nn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Or;
function ms() {
  return Or || (Or = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var s = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (s = a(s, r(l)));
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
        var i = "";
        for (var l in s)
          t.call(s, l) && s[l] && (i = a(i, l));
        return i;
      }
      function a(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Nn)), Nn.exports;
}
var gs = ms();
const X = /* @__PURE__ */ ds(gs), sp = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: r,
  ...a
}) => {
  const s = X(
    "nhsuk-action-link__link",
    r
  );
  return /* @__PURE__ */ o.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ o.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...a,
      children: [
        /* @__PURE__ */ o.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ o.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ o.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ o.jsx("span", { className: "nhsuk-action-link__text", children: e })
      ]
    }
  ) });
}, $n = typeof document < "u" ? pe.useLayoutEffect : () => {
};
var En;
const bs = (En = pe.useInsertionEffect) !== null && En !== void 0 ? En : $n;
function Ve(e) {
  const t = te(null);
  return bs(() => {
    t.current = e;
  }, [
    e
  ]), J((...n) => {
    const r = t.current;
    return r?.(...n);
  }, []);
}
const At = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Mo = /* @__PURE__ */ pe.createContext(At), xs = /* @__PURE__ */ pe.createContext(!1);
let ys = !!(typeof window < "u" && window.document && window.document.createElement), jn = /* @__PURE__ */ new WeakMap();
function vs(e = !1) {
  let t = qe(Mo), n = te(null);
  if (n.current === null && !e) {
    var r, a;
    let s = (a = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (s) {
      let i = jn.get(s);
      i == null ? jn.set(s, {
        id: t.current,
        state: s.memoizedState
      }) : s.memoizedState !== i.state && (t.current = i.id, jn.delete(s));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function Ss(e) {
  let t = qe(Mo);
  t === At && !ys && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = vs(!!e), r = t === At && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function ks(e) {
  let t = pe.useId(), [n] = ne(_s()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${At.prefix}`;
  return e || `${r}-${t}`;
}
const ws = typeof pe.useId == "function" ? ks : Ss;
function Ts() {
  return !1;
}
function $s() {
  return !0;
}
function Cs(e) {
  return () => {
  };
}
function _s() {
  return typeof pe.useSyncExternalStore == "function" ? pe.useSyncExternalStore(Cs, Ts, $s) : qe(xs);
}
let Ns = !!(typeof window < "u" && window.document && window.document.createElement), lt = /* @__PURE__ */ new Map(), St;
typeof FinalizationRegistry < "u" && (St = new FinalizationRegistry((e) => {
  lt.delete(e);
}));
function Ur(e) {
  let [t, n] = ne(e), r = te(null), a = ws(t), s = te(null);
  if (St && St.register(s, a), Ns) {
    const i = lt.get(a);
    i && !i.includes(r) ? i.push(r) : lt.set(a, [
      r
    ]);
  }
  return $n(() => {
    let i = a;
    return () => {
      St && St.unregister(s), lt.delete(i);
    };
  }, [
    a
  ]), ae(() => {
    let i = r.current;
    return i && n(i), () => {
      i && (r.current = null);
    };
  }), a;
}
function Es(e, t) {
  if (e === t) return e;
  let n = lt.get(e);
  if (n)
    return n.forEach((a) => a.current = t), t;
  let r = lt.get(t);
  return r ? (r.forEach((a) => a.current = e), e) : t;
}
function Bo(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const he = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, ye = (e) => e && "window" in e && e.window === e ? e : he(e).defaultView || window;
function js(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Fs(e) {
  return js(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Ds = !1;
function yr() {
  return Ds;
}
function ce(e, t) {
  if (!yr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Fs(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const wt = (e = document) => {
  var t;
  if (!yr()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function ie(e) {
  return yr() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Lo(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Lo(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ps() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Lo(e)) && (r && (r += " "), r += t);
  return r;
}
function Ge(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let a in r) {
      let s = t[a], i = r[a];
      typeof s == "function" && typeof i == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = Bo(s, i) : (a === "className" || a === "UNSAFE_className") && typeof s == "string" && typeof i == "string" ? t[a] = Ps(s, i) : a === "id" && s && i ? t.id = Es(s, i) : t[a] = i !== void 0 ? i : s;
    }
  }
  return t;
}
function Ms(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const r = e.map((a) => {
      const s = Yr(a, t);
      return n || (n = typeof s == "function"), s;
    });
    if (n) return () => {
      r.forEach((a, s) => {
        typeof a == "function" ? a() : Yr(e[s], null);
      });
    };
  };
}
function Yr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const Bs = /* @__PURE__ */ new Set([
  "id"
]), Ls = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Is = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Rs = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), Vr = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]), Hs = /^(data-.*)$/;
function Io(e, t = {}) {
  let { labelable: n, isLink: r, global: a, events: s = a, propNames: i } = t, l = {};
  for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (Bs.has(u) || n && Ls.has(u) || r && Is.has(u) || a && Rs.has(u) || s && Vr.has(u) || u.endsWith("Capture") && Vr.has(u.slice(0, -7)) || i?.has(u) || Hs.test(u)) && (l[u] = e[u]);
  return l;
}
function ut(e) {
  if (As()) e.focus({
    preventScroll: !0
  });
  else {
    let t = zs(e);
    e.focus(), Ws(t);
  }
}
let Ft = null;
function As() {
  if (Ft == null) {
    Ft = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Ft = !0, !0;
        }
      });
    } catch {
    }
  }
  return Ft;
}
function zs(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function Ws(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Cn(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function vr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ze(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const dt = ze(function() {
  return vr(/^Mac/i);
}), Os = ze(function() {
  return vr(/^iPhone/i);
}), Ro = ze(function() {
  return vr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  dt() && navigator.maxTouchPoints > 1;
}), Sr = ze(function() {
  return Os() || Ro();
});
ze(function() {
  return dt() || Sr();
});
const Us = ze(function() {
  return Cn(/AppleWebKit/i) && !Ys();
}), Ys = ze(function() {
  return Cn(/Chrome/i);
}), Ho = ze(function() {
  return Cn(/Android/i);
}), Vs = ze(function() {
  return Cn(/Firefox/i);
});
function Tt(e, t, n = !0) {
  var r, a;
  let { metaKey: s, ctrlKey: i, altKey: l, shiftKey: u } = t;
  Vs() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (dt() ? s = !0 : i = !0);
  let f = Us() && dt() && !Ro() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: s,
    ctrlKey: i,
    altKey: l,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: s,
    ctrlKey: i,
    altKey: l,
    shiftKey: u,
    bubbles: !0,
    cancelable: !0
  });
  Tt.isOpening = n, ut(e), e.dispatchEvent(f), Tt.isOpening = !1;
}
Tt.isOpening = !1;
let Ke = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Set();
function Kr() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let a = Ke.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), Ke.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let a = Ke.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ke.delete(r.target)), Ke.size === 0)) {
      for (let s of zn) s();
      zn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Kr() : document.addEventListener("DOMContentLoaded", Kr));
function Ks() {
  for (const [e] of Ke)
    "isConnected" in e && !e.isConnected && Ke.delete(e);
}
function Ao(e) {
  requestAnimationFrame(() => {
    Ks(), Ke.size === 0 ? e() : zn.add(e);
  });
}
function kr() {
  let e = te(/* @__PURE__ */ new Map()), t = J((a, s, i, l) => {
    let u = l?.once ? (...f) => {
      e.current.delete(i), i(...f);
    } : i;
    e.current.set(i, {
      type: s,
      eventTarget: a,
      fn: u,
      options: l
    }), a.addEventListener(s, u, l);
  }, []), n = J((a, s, i, l) => {
    var u;
    let f = ((u = e.current.get(i)) === null || u === void 0 ? void 0 : u.fn) || i;
    a.removeEventListener(s, f, l), e.current.delete(i);
  }, []), r = J(() => {
    e.current.forEach((a, s) => {
      n(a.eventTarget, a.type, s, a.options);
    });
  }, [
    n
  ]);
  return ae(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Gs(e) {
  const t = te(null), n = te(void 0), r = J((a) => {
    if (typeof e == "function") {
      const s = e, i = s(a);
      return () => {
        typeof i == "function" ? i() : s(null);
      };
    } else if (e)
      return e.current = a, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return se(() => ({
    get current() {
      return t.current;
    },
    set current(a) {
      t.current = a, n.current && (n.current(), n.current = void 0), a != null && (n.current = r(a));
    }
  }), [
    r
  ]);
}
function zo(e, t) {
  $n(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Wn(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ho() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function qs(e) {
  return !Ho() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const Xs = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Zs(e) {
  const t = ye(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, a = n !== "none" && r !== "hidden" && r !== "collapse";
  if (a) {
    const { getComputedStyle: s } = e.ownerDocument.defaultView;
    let { display: i, visibility: l } = s(e);
    a = i !== "none" && l !== "hidden" && l !== "collapse";
  }
  return a;
}
function Js(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Wo(e, t) {
  return Xs ? e.checkVisibility() : e.nodeName !== "#comment" && Zs(e) && Js(e, t) && (!e.parentElement || Wo(e.parentElement, e));
}
const Oo = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
], Qs = Oo.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Oo.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function ei(e) {
  return e.matches(Qs) && Wo(e) && !ti(e);
}
function ti(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const ni = Symbol("default");
function ri(e) {
  let { className: t, style: n, children: r, defaultClassName: a, defaultChildren: s, defaultStyle: i, values: l } = e;
  return se(() => {
    let u, f, d;
    return typeof t == "function" ? u = t({
      ...l,
      defaultClassName: a
    }) : u = t, typeof n == "function" ? f = n({
      ...l,
      defaultStyle: i || {}
    }) : f = n, typeof r == "function" ? d = r({
      ...l,
      defaultChildren: s
    }) : r == null ? d = s : d = r, {
      className: u ?? a,
      style: f || i ? {
        ...i,
        ...f
      } : void 0,
      children: d ?? s,
      "data-rac": ""
    };
  }, [
    t,
    n,
    r,
    a,
    s,
    i,
    l
  ]);
}
function oi(e, t) {
  let n = qe(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = t || ni;
    if (!n.slots[r]) {
      let a = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`)), s = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${s} Valid slot names are ${a}.`);
    }
    return n.slots[r];
  }
  return n;
}
function ai(e, t, n) {
  let r = oi(n, e.slot) || {}, { ref: a, ...s } = r, i = Gs(se(() => Ms(t, a), [
    t,
    a
  ])), l = Ge(s, e);
  return "style" in s && s.style && "style" in e && e.style && (typeof s.style == "function" || typeof e.style == "function" ? l.style = (u) => {
    let f = typeof s.style == "function" ? s.style(u) : s.style, d = {
      ...u.defaultStyle,
      ...f
    }, p = typeof e.style == "function" ? e.style({
      ...u,
      defaultStyle: d
    }) : e.style;
    return {
      ...d,
      ...p
    };
  } : l.style = {
    ...s.style,
    ...e.style
  }), [
    l,
    i
  ];
}
if (typeof HTMLTemplateElement < "u") {
  const e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this);
    }
  });
}
const si = /* @__PURE__ */ Tn(!1);
function ii(e) {
  let t = (n, r) => qe(si) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, tt(t);
}
function wr(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Uo(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Yo(e) {
  let t = te({
    isFocused: !1,
    observer: null
  });
  $n(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Ve((r) => {
    e?.(r);
  });
  return J((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, s = (i) => {
        if (t.current.isFocused = !1, a.disabled) {
          let l = wr(i);
          n(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var i;
          (i = t.current.observer) === null || i === void 0 || i.disconnect();
          let l = a === document.activeElement ? null : document.activeElement;
          a.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), a.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(a, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let zt = !1;
function Gr(e) {
  for (; e && !ei(e); ) e = e.parentElement;
  let t = ye(e), n = t.document.activeElement;
  if (!n || n === e) return;
  zt = !0;
  let r = !1, a = (d) => {
    (d.target === n || r) && d.stopImmediatePropagation();
  }, s = (d) => {
    (d.target === n || r) && (d.stopImmediatePropagation(), !e && !r && (r = !0, ut(n), u()));
  }, i = (d) => {
    (d.target === e || r) && d.stopImmediatePropagation();
  }, l = (d) => {
    (d.target === e || r) && (d.stopImmediatePropagation(), r || (r = !0, ut(n), u()));
  };
  t.addEventListener("blur", a, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", i, !0);
  let u = () => {
    cancelAnimationFrame(f), t.removeEventListener("blur", a, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", i, !0), zt = !1, r = !1;
  }, f = requestAnimationFrame(u);
  return u;
}
let at = "default", On = "", Rt = /* @__PURE__ */ new WeakMap();
function qr(e) {
  if (Sr()) {
    if (at === "default") {
      const t = he(e);
      On = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    at = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Rt.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Fn(e) {
  if (Sr()) {
    if (at !== "disabled") return;
    at = "restoring", setTimeout(() => {
      Ao(() => {
        if (at === "restoring") {
          const t = he(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = On || ""), On = "", at = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Rt.has(e)) {
    let t = Rt.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Rt.delete(e);
  }
}
const Vo = pe.createContext({
  register: () => {
  }
});
Vo.displayName = "PressResponderContext";
function li(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Ko(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function ci(e, t) {
  var n = Ko(e, t, "get");
  return li(e, n);
}
function ui(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function di(e, t, n) {
  ui(e, t), t.set(e, n);
}
function fi(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Xr(e, t, n) {
  var r = Ko(e, t, "set");
  return fi(e, r, n), n;
}
function hi(e) {
  let t = qe(Vo);
  if (t) {
    let { register: n, ...r } = t;
    e = Ge(r, e), n();
  }
  return zo(t, e.ref), e;
}
var Dt = /* @__PURE__ */ new WeakMap();
class Pt {
  continuePropagation() {
    Xr(this, Dt, !1);
  }
  get shouldStopPropagation() {
    return ci(this, Dt);
  }
  constructor(t, n, r, a) {
    di(this, Dt, {
      writable: !0,
      value: void 0
    }), Xr(this, Dt, !0);
    var s;
    let i = (s = a?.target) !== null && s !== void 0 ? s : r.currentTarget;
    const l = i?.getBoundingClientRect();
    let u, f = 0, d, p = null;
    r.clientX != null && r.clientY != null && (d = r.clientX, p = r.clientY), l && (d != null && p != null ? (u = d - l.left, f = p - l.top) : (u = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = f;
  }
}
const Zr = Symbol("linkClicked"), Jr = "react-aria-pressable-style", Qr = "data-react-aria-pressable";
function pi(e) {
  let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: a, onPressUp: s, onClick: i, isDisabled: l, isPressed: u, preventFocusOnPress: f, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: g, ...b } = hi(e), [k, m] = ne(!1), C = te({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: F, removeAllGlobalListeners: N } = kr(), P = Ve((c, j) => {
    let K = C.current;
    if (l || K.didFirePressStart) return !1;
    let _ = !0;
    if (K.isTriggeringEvent = !0, r) {
      let D = new Pt("pressstart", j, c);
      r(D), _ = D.shouldStopPropagation;
    }
    return n && n(!0), K.isTriggeringEvent = !1, K.didFirePressStart = !0, m(!0), _;
  }), T = Ve((c, j, K = !0) => {
    let _ = C.current;
    if (!_.didFirePressStart) return !1;
    _.didFirePressStart = !1, _.isTriggeringEvent = !0;
    let D = !0;
    if (a) {
      let h = new Pt("pressend", j, c);
      a(h), D = h.shouldStopPropagation;
    }
    if (n && n(!1), m(!1), t && K && !l) {
      let h = new Pt("press", j, c);
      t(h), D && (D = h.shouldStopPropagation);
    }
    return _.isTriggeringEvent = !1, D;
  }), R = Ve((c, j) => {
    let K = C.current;
    if (l) return !1;
    if (s) {
      K.isTriggeringEvent = !0;
      let _ = new Pt("pressup", j, c);
      return s(_), K.isTriggeringEvent = !1, _.shouldStopPropagation;
    }
    return !0;
  }), M = Ve((c) => {
    let j = C.current;
    if (j.isPressed && j.target) {
      j.didFirePressStart && j.pointerType != null && T(Xe(j.target, c), j.pointerType, !1), j.isPressed = !1, j.isOverTarget = !1, j.activePointerId = null, j.pointerType = null, N(), p || Fn(j.target);
      for (let K of j.disposables) K();
      j.disposables = [];
    }
  }), A = Ve((c) => {
    d && M(c);
  }), B = Ve((c) => {
    i?.(c);
  }), y = Ve((c, j) => {
    if (i) {
      let K = new MouseEvent("click", c);
      Uo(K, j), i(wr(K));
    }
  }), w = se(() => {
    let c = C.current, j = {
      onKeyDown(_) {
        if (Dn(_.nativeEvent, _.currentTarget) && ce(_.currentTarget, ie(_.nativeEvent))) {
          var D;
          no(ie(_.nativeEvent), _.key) && _.preventDefault();
          let h = !0;
          if (!c.isPressed && !_.repeat) {
            c.target = _.currentTarget, c.isPressed = !0, c.pointerType = "keyboard", h = P(_, "keyboard");
            let z = _.currentTarget, Y = (Z) => {
              Dn(Z, z) && !Z.repeat && ce(z, ie(Z)) && c.target && R(Xe(c.target, Z), "keyboard");
            };
            F(he(_.currentTarget), "keyup", Bo(Y, K), !0);
          }
          h && _.stopPropagation(), _.metaKey && dt() && ((D = c.metaKeyEvents) === null || D === void 0 || D.set(_.key, _.nativeEvent));
        } else _.key === "Meta" && (c.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(_) {
        if (!(_ && !ce(_.currentTarget, ie(_.nativeEvent))) && _ && _.button === 0 && !c.isTriggeringEvent && !Tt.isOpening) {
          let D = !0;
          if (l && _.preventDefault(), !c.ignoreEmulatedMouseEvents && !c.isPressed && (c.pointerType === "virtual" || Wn(_.nativeEvent))) {
            let h = P(_, "virtual"), z = R(_, "virtual"), Y = T(_, "virtual");
            B(_), D = h && z && Y;
          } else if (c.isPressed && c.pointerType !== "keyboard") {
            let h = c.pointerType || _.nativeEvent.pointerType || "virtual", z = R(Xe(_.currentTarget, _), h), Y = T(Xe(_.currentTarget, _), h, !0);
            D = z && Y, c.isOverTarget = !1, B(_), M(_);
          }
          c.ignoreEmulatedMouseEvents = !1, D && _.stopPropagation();
        }
      }
    }, K = (_) => {
      var D;
      if (c.isPressed && c.target && Dn(_, c.target)) {
        var h;
        no(ie(_), _.key) && _.preventDefault();
        let Y = ie(_), Z = ce(c.target, ie(_));
        T(Xe(c.target, _), "keyboard", Z), Z && y(_, c.target), N(), _.key !== "Enter" && Tr(c.target) && ce(c.target, Y) && !_[Zr] && (_[Zr] = !0, Tt(c.target, _, !1)), c.isPressed = !1, (h = c.metaKeyEvents) === null || h === void 0 || h.delete(_.key);
      } else if (_.key === "Meta" && (!((D = c.metaKeyEvents) === null || D === void 0) && D.size)) {
        var z;
        let Y = c.metaKeyEvents;
        c.metaKeyEvents = void 0;
        for (let Z of Y.values()) (z = c.target) === null || z === void 0 || z.dispatchEvent(new KeyboardEvent("keyup", Z));
      }
    };
    if (typeof PointerEvent < "u") {
      j.onPointerDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (qs(h.nativeEvent)) {
          c.pointerType = "virtual";
          return;
        }
        c.pointerType = h.pointerType;
        let z = !0;
        if (!c.isPressed) {
          c.isPressed = !0, c.isOverTarget = !0, c.activePointerId = h.pointerId, c.target = h.currentTarget, p || qr(c.target), z = P(h, c.pointerType);
          let Y = ie(h.nativeEvent);
          "releasePointerCapture" in Y && Y.releasePointerCapture(h.pointerId), F(he(h.currentTarget), "pointerup", _, !1), F(he(h.currentTarget), "pointercancel", D, !1);
        }
        z && h.stopPropagation();
      }, j.onMouseDown = (h) => {
        if (ce(h.currentTarget, ie(h.nativeEvent)) && h.button === 0) {
          if (f) {
            let z = Gr(h.target);
            z && c.disposables.push(z);
          }
          h.stopPropagation();
        }
      }, j.onPointerUp = (h) => {
        !ce(h.currentTarget, ie(h.nativeEvent)) || c.pointerType === "virtual" || h.button === 0 && !c.isPressed && R(h, c.pointerType || h.pointerType);
      }, j.onPointerEnter = (h) => {
        h.pointerId === c.activePointerId && c.target && !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, P(Xe(c.target, h), c.pointerType));
      }, j.onPointerLeave = (h) => {
        h.pointerId === c.activePointerId && c.target && c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, T(Xe(c.target, h), c.pointerType, !1), A(h));
      };
      let _ = (h) => {
        if (h.pointerId === c.activePointerId && c.isPressed && h.button === 0 && c.target) {
          if (ce(c.target, ie(h)) && c.pointerType != null) {
            let z = !1, Y = setTimeout(() => {
              c.isPressed && c.target instanceof HTMLElement && (z ? M(h) : (ut(c.target), c.target.click()));
            }, 80);
            F(h.currentTarget, "click", () => z = !0, !0), c.disposables.push(() => clearTimeout(Y));
          } else M(h);
          c.isOverTarget = !1;
        }
      }, D = (h) => {
        M(h);
      };
      j.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && M(h);
      };
    } else if (process.env.NODE_ENV === "test") {
      j.onMouseDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (c.ignoreEmulatedMouseEvents) {
          h.stopPropagation();
          return;
        }
        if (c.isPressed = !0, c.isOverTarget = !0, c.target = h.currentTarget, c.pointerType = Wn(h.nativeEvent) ? "virtual" : "mouse", us(() => P(h, c.pointerType)) && h.stopPropagation(), f) {
          let Y = Gr(h.target);
          Y && c.disposables.push(Y);
        }
        F(he(h.currentTarget), "mouseup", _, !1);
      }, j.onMouseEnter = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !0, z = P(h, c.pointerType)), z && h.stopPropagation();
      }, j.onMouseLeave = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !1, z = T(h, c.pointerType, !1), A(h)), z && h.stopPropagation();
      }, j.onMouseUp = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && !c.ignoreEmulatedMouseEvents && h.button === 0 && !c.isPressed && R(h, c.pointerType || "mouse");
      };
      let _ = (h) => {
        if (h.button === 0) {
          if (c.ignoreEmulatedMouseEvents) {
            c.ignoreEmulatedMouseEvents = !1;
            return;
          }
          c.target && c.target.contains(h.target) && c.pointerType != null || M(h), c.isOverTarget = !1;
        }
      };
      j.onTouchStart = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = mi(h.nativeEvent);
        if (!z) return;
        c.activePointerId = z.identifier, c.ignoreEmulatedMouseEvents = !0, c.isOverTarget = !0, c.isPressed = !0, c.target = h.currentTarget, c.pointerType = "touch", p || qr(c.target), P(Ye(c.target, h), c.pointerType) && h.stopPropagation(), F(ye(h.currentTarget), "scroll", D, !0);
      }, j.onTouchMove = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let z = eo(h.nativeEvent, c.activePointerId), Y = !0;
        z && to(z, h.currentTarget) ? !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, Y = P(Ye(c.target, h), c.pointerType)) : c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, Y = T(Ye(c.target, h), c.pointerType, !1), A(Ye(c.target, h))), Y && h.stopPropagation();
      }, j.onTouchEnd = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let z = eo(h.nativeEvent, c.activePointerId), Y = !0;
        z && to(z, h.currentTarget) && c.pointerType != null ? (R(Ye(c.target, h), c.pointerType), Y = T(Ye(c.target, h), c.pointerType), y(h.nativeEvent, c.target)) : c.isOverTarget && c.pointerType != null && (Y = T(Ye(c.target, h), c.pointerType, !1)), Y && h.stopPropagation(), c.isPressed = !1, c.activePointerId = null, c.isOverTarget = !1, c.ignoreEmulatedMouseEvents = !0, c.target && !p && Fn(c.target), N();
      }, j.onTouchCancel = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && (h.stopPropagation(), c.isPressed && M(Ye(c.target, h)));
      };
      let D = (h) => {
        c.isPressed && ce(ie(h), c.target) && M({
          currentTarget: c.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      j.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && M(h);
      };
    }
    return j;
  }, [
    F,
    l,
    f,
    N,
    p,
    M,
    A,
    T,
    P,
    R,
    B,
    y
  ]);
  return ae(() => {
    if (!g || process.env.NODE_ENV === "test") return;
    const c = he(g.current);
    if (!c || !c.head || c.getElementById(Jr)) return;
    const j = c.createElement("style");
    j.id = Jr, j.textContent = `
@layer {
  [${Qr}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), c.head.prepend(j);
  }, [
    g
  ]), ae(() => {
    let c = C.current;
    return () => {
      var j;
      p || Fn((j = c.target) !== null && j !== void 0 ? j : void 0);
      for (let K of c.disposables) K();
      c.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: u || k,
    pressProps: Ge(b, w, {
      [Qr]: !0
    })
  };
}
function Tr(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Dn(e, t) {
  const { key: n, code: r } = e, a = t, s = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof ye(a).HTMLInputElement && !Go(a, n) || a instanceof ye(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((s === "link" || !s && Tr(a)) && n !== "Enter");
}
function mi(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function eo(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t) return a;
  }
  return null;
}
function Ye(e, t) {
  let n = 0, r = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  };
}
function Xe(e, t) {
  let n = t.clientX, r = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  };
}
function gi(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function bi(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function to(e, t) {
  let n = t.getBoundingClientRect(), r = gi(e);
  return bi(n, r);
}
function xi(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Tr(e);
}
function no(e, t) {
  return e instanceof HTMLInputElement ? !Go(e, t) : xi(e);
}
const yi = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Go(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : yi.has(e.type);
}
let mt = null, Un = /* @__PURE__ */ new Set(), kt = /* @__PURE__ */ new Map(), Qe = !1, Yn = !1;
const vi = {
  Tab: !0,
  Escape: !0
};
function $r(e, t) {
  for (let n of Un) n(e, t);
}
function Si(e) {
  return !(e.metaKey || !dt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Wt(e) {
  Qe = !0, Si(e) && (mt = "keyboard", $r("keyboard", e));
}
function xe(e) {
  mt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Qe = !0, $r("pointer", e));
}
function qo(e) {
  Wn(e) && (Qe = !0, mt = "virtual");
}
function Xo(e) {
  e.target === window || e.target === document || zt || !e.isTrusted || (!Qe && !Yn && (mt = "virtual", $r("virtual", e)), Qe = !1, Yn = !1);
}
function Zo() {
  zt || (Qe = !1, Yn = !0);
}
function Vn(e) {
  if (typeof window > "u" || typeof document > "u" || kt.get(ye(e))) return;
  const t = ye(e), n = he(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Qe = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Wt, !0), n.addEventListener("keyup", Wt, !0), n.addEventListener("click", qo, !0), t.addEventListener("focus", Xo, !0), t.addEventListener("blur", Zo, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", xe, !0), n.addEventListener("pointermove", xe, !0), n.addEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", xe, !0), n.addEventListener("mousemove", xe, !0), n.addEventListener("mouseup", xe, !0)), t.addEventListener("beforeunload", () => {
    Jo(e);
  }, {
    once: !0
  }), kt.set(t, {
    focus: r
  });
}
const Jo = (e, t) => {
  const n = ye(e), r = he(e);
  t && r.removeEventListener("DOMContentLoaded", t), kt.has(n) && (n.HTMLElement.prototype.focus = kt.get(n).focus, r.removeEventListener("keydown", Wt, !0), r.removeEventListener("keyup", Wt, !0), r.removeEventListener("click", qo, !0), n.removeEventListener("focus", Xo, !0), n.removeEventListener("blur", Zo, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", xe, !0), r.removeEventListener("pointermove", xe, !0), r.removeEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", xe, !0), r.removeEventListener("mousemove", xe, !0), r.removeEventListener("mouseup", xe, !0)), kt.delete(n));
};
function ki(e) {
  const t = he(e);
  let n;
  return t.readyState !== "loading" ? Vn(e) : (n = () => {
    Vn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Jo(e, n);
}
typeof document < "u" && ki();
function Qo() {
  return mt !== "pointer";
}
function wi() {
  return mt;
}
const Ti = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $i(e, t, n) {
  let r = he(n?.target);
  const a = typeof window < "u" ? ye(n?.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? ye(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, i = typeof window < "u" ? ye(n?.target).HTMLElement : HTMLElement, l = typeof window < "u" ? ye(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof a && !Ti.has(r.activeElement.type) || r.activeElement instanceof s || r.activeElement instanceof i && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !vi[n.key]);
}
function Ci(e, t, n) {
  Vn(), ae(() => {
    let r = (a, s) => {
      $i(!!n?.isTextInput, a, s) && e(Qo());
    };
    return Un.add(r), () => {
      Un.delete(r);
    };
  }, t);
}
function _i(e) {
  const t = he(e), n = wt(t);
  if (wi() === "virtual") {
    let r = n;
    Ao(() => {
      wt(t) === r && e.isConnected && ut(e);
    });
  } else ut(e);
}
function ea(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const s = J((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), a && a(!1), !0;
  }, [
    r,
    a
  ]), i = Yo(s), l = J((u) => {
    const f = he(u.target), d = f ? wt(f) : wt();
    u.target === u.currentTarget && d === ie(u.nativeEvent) && (n && n(u), a && a(!0), i(u));
  }, [
    a,
    n,
    i
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || a || r) ? l : void 0,
      onBlur: !t && (r || a) ? s : void 0
    }
  };
}
function ro(e) {
  if (!e) return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        t && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : t = !0;
      },
      continuePropagation() {
        t = !1;
      },
      isPropagationStopped() {
        return t;
      }
    };
    e(r), t && n.stopPropagation();
  };
}
function Ni(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: ro(e.onKeyDown),
      onKeyUp: ro(e.onKeyUp)
    }
  };
}
let Ei = /* @__PURE__ */ pe.createContext(null);
function ji(e) {
  let t = qe(Ei) || {};
  zo(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Fi(e, t) {
  let { focusProps: n } = ea(e), { keyboardProps: r } = Ni(e), a = Ge(n, r), s = ji(t), i = e.isDisabled ? {} : s, l = te(e.autoFocus);
  ae(() => {
    l.current && t.current && _i(t.current), l.current = !1;
  }, [
    t
  ]);
  let u = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (u = void 0), {
    focusableProps: Ge({
      ...a,
      tabIndex: u
    }, i)
  };
}
function Di(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, s = te({
    isFocusWithin: !1
  }), { addGlobalListener: i, removeAllGlobalListeners: l } = kr(), u = J((p) => {
    p.currentTarget.contains(p.target) && s.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (s.current.isFocusWithin = !1, l(), n && n(p), a && a(!1));
  }, [
    n,
    a,
    s,
    l
  ]), f = Yo(u), d = J((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = he(p.target), b = wt(g);
    if (!s.current.isFocusWithin && b === ie(p.nativeEvent)) {
      r && r(p), a && a(!0), s.current.isFocusWithin = !0, f(p);
      let k = p.currentTarget;
      i(g, "focus", (m) => {
        if (s.current.isFocusWithin && !ce(k, m.target)) {
          let C = new g.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          Uo(C, k);
          let F = wr(C);
          u(F);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    a,
    f,
    i,
    u
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: d,
      onBlur: u
    }
  };
}
let Ot = !1, Mt = 0;
function Kn() {
  Ot = !0, setTimeout(() => {
    Ot = !1;
  }, 50);
}
function oo(e) {
  e.pointerType === "touch" && Kn();
}
function Pi() {
  if (!(typeof document > "u"))
    return Mt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", oo) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Kn)), Mt++, () => {
      Mt--, !(Mt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", oo) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Kn));
    };
}
function Mi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [s, i] = ne(!1), l = te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ae(Pi, []);
  let { addGlobalListener: u, removeAllGlobalListeners: f } = kr(), { hoverProps: d, triggerHoverEnd: p } = se(() => {
    let g = (m, C) => {
      if (l.pointerType = C, a || C === "touch" || l.isHovered || !m.currentTarget.contains(m.target)) return;
      l.isHovered = !0;
      let F = m.currentTarget;
      l.target = F, u(he(m.target), "pointerover", (N) => {
        l.isHovered && l.target && !ce(l.target, N.target) && b(N, N.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: F,
        pointerType: C
      }), n && n(!0), i(!0);
    }, b = (m, C) => {
      let F = l.target;
      l.pointerType = "", l.target = null, !(C === "touch" || !l.isHovered || !F) && (l.isHovered = !1, f(), r && r({
        type: "hoverend",
        target: F,
        pointerType: C
      }), n && n(!1), i(!1));
    }, k = {};
    return typeof PointerEvent < "u" ? (k.onPointerEnter = (m) => {
      Ot && m.pointerType === "mouse" || g(m, m.pointerType);
    }, k.onPointerLeave = (m) => {
      !a && m.currentTarget.contains(m.target) && b(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (k.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, k.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !Ot && g(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, k.onMouseLeave = (m) => {
      !a && m.currentTarget.contains(m.target) && b(m, "mouse");
    }), {
      hoverProps: k,
      triggerHoverEnd: b
    };
  }, [
    t,
    n,
    r,
    a,
    l,
    u,
    f
  ]);
  return ae(() => {
    a && p({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    a
  ]), {
    hoverProps: d,
    isHovered: s
  };
}
function Bi(e, t) {
  let { elementType: n = "button", isDisabled: r, onPress: a, onPressStart: s, onPressEnd: i, onPressUp: l, onPressChange: u, preventFocusOnPress: f, allowFocusWhenDisabled: d, onClick: p, href: g, target: b, rel: k, type: m = "button" } = e, C;
  n === "button" ? C = {
    type: m,
    disabled: r,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : C = {
    role: "button",
    href: n === "a" && !r ? g : void 0,
    target: n === "a" ? b : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? k : void 0
  };
  let { pressProps: F, isPressed: N } = pi({
    onPressStart: s,
    onPressEnd: i,
    onPressChange: u,
    onPress: a,
    onPressUp: l,
    onClick: p,
    isDisabled: r,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: P } = Fi(e, t);
  d && (P.tabIndex = r ? -1 : P.tabIndex);
  let T = Ge(P, F, Io(e, {
    labelable: !0
  }));
  return {
    isPressed: N,
    buttonProps: Ge(C, T, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function Li(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, a = te({
    isFocused: !1,
    isFocusVisible: t || Qo()
  }), [s, i] = ne(!1), [l, u] = ne(() => a.current.isFocused && a.current.isFocusVisible), f = J(() => u(a.current.isFocused && a.current.isFocusVisible), []), d = J((b) => {
    a.current.isFocused = b, i(b), f();
  }, [
    f
  ]);
  Ci((b) => {
    a.current.isFocusVisible = b, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = ea({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: g } = Di({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: s,
    isFocusVisible: l,
    focusProps: r ? g : p
  };
}
const ta = 7e3;
let Te = null;
function ao(e, t = "assertive", n = ta) {
  Te ? Te.announce(e, t, n) : (Te = new Ii(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Te.announce(e, t, n) : setTimeout(() => {
    Te?.isAttached() && Te?.announce(e, t, n);
  }, 100));
}
class Ii {
  isAttached() {
    var t;
    return (t = this.node) === null || t === void 0 ? void 0 : t.isConnected;
  }
  createLog(t) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", t), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, n = "assertive", r = ta) {
    var a, s;
    if (!this.node) return;
    let i = document.createElement("div");
    typeof t == "object" ? (i.setAttribute("role", "img"), i.setAttribute("aria-labelledby", t["aria-labelledby"])) : i.textContent = t, n === "assertive" ? (a = this.assertiveLog) === null || a === void 0 || a.appendChild(i) : (s = this.politeLog) === null || s === void 0 || s.appendChild(i), t !== "" && setTimeout(() => {
      i.remove();
    }, r);
  }
  clear(t) {
    this.node && ((!t || t === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!t || t === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
const Ri = /* @__PURE__ */ Tn(null), Hi = /* @__PURE__ */ Tn({}), Ai = /* @__PURE__ */ ii(function(t, n) {
  [t, n] = ai(t, n, Hi), t = zi(t);
  let r = t, { isPending: a } = r, { buttonProps: s, isPressed: i } = Bi(t, n), { focusProps: l, isFocused: u, isFocusVisible: f } = Li(t), { hoverProps: d, isHovered: p } = Mi({
    ...t,
    isDisabled: t.isDisabled || a
  }), g = {
    isHovered: p,
    isPressed: (r.isPressed || i) && !a,
    isFocused: u,
    isFocusVisible: f,
    isDisabled: t.isDisabled || !1,
    isPending: a ?? !1
  }, b = ri({
    ...t,
    values: g,
    defaultClassName: "react-aria-Button"
  }), k = Ur(s.id), m = Ur(), C = s["aria-labelledby"];
  a && (C ? C = `${C} ${m}` : s["aria-label"] && (C = `${k} ${m}`));
  let F = te(a);
  ae(() => {
    let P = {
      "aria-labelledby": C || k
    };
    (!F.current && u && a || F.current && u && !a) && ao(P, "assertive"), F.current = a;
  }, [
    a,
    u,
    C,
    k
  ]);
  let N = Io(t, {
    global: !0
  });
  return delete N.onClick, /* @__PURE__ */ pe.createElement("button", {
    ...Ge(N, b, s, l, d),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: s.type === "submit" && a ? "button" : s.type,
    id: k,
    ref: n,
    "aria-labelledby": C,
    slot: t.slot || void 0,
    "aria-disabled": a ? "true" : s["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": g.isPressed || void 0,
    "data-hovered": p || void 0,
    "data-focused": u || void 0,
    "data-pending": a || void 0,
    "data-focus-visible": f || void 0
  }, /* @__PURE__ */ pe.createElement(Ri.Provider, {
    value: {
      id: m
    }
  }, b.children));
});
function zi(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const { forwardRef: Wi } = ls, Cr = Wi(
  ({
    children: e,
    variant: t = "primary",
    size: n = "default",
    fullWidth: r = !1,
    className: a = "",
    ...s
  }, i) => {
    const l = [
      "nhs-aria-button",
      `nhs-aria-button--${t}`,
      n !== "default" ? `nhs-aria-button--${n}` : "",
      r ? "nhs-aria-button--full-width" : "",
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsx(
      Ai,
      {
        ref: i,
        className: l,
        ...s,
        children: e
      }
    );
  }
);
Cr.displayName = "Button";
const ip = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: r,
  element: a = "a",
  onClick: s,
  ...i
}) => {
  const l = X(
    "nhsuk-back-link",
    r
  ), u = X(
    "nhsuk-back-link__link"
  ), f = () => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ o.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    t ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e
  ] });
  return /* @__PURE__ */ o.jsx("div", { className: l, children: a === "button" ? /* @__PURE__ */ o.jsx(
    "button",
    {
      className: u,
      onClick: s,
      type: "button",
      ...i,
      children: f()
    }
  ) : /* @__PURE__ */ o.jsx(
    "a",
    {
      className: u,
      href: n,
      ...i,
      children: f()
    }
  ) });
}, _r = ({
  text: e,
  html: t,
  children: n,
  color: r = "default",
  noBorder: a = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...f
}) => {
  const d = X(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${r}`]: r !== "default",
      "nhsuk-tag--no-border": a,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    u
  ), p = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ o.jsxs("strong", { className: d, ...f, children: [
    n || (t ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: p,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, Nr = ({
  id: e,
  name: t,
  type: n = "text",
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: f = !1,
  describedBy: d,
  className: p,
  width: g = "full",
  inputMode: b,
  autoComplete: k,
  maxLength: m,
  minLength: C,
  pattern: F,
  step: N,
  min: P,
  max: T,
  onChange: R,
  onBlur: M,
  onFocus: A,
  onKeyDown: B,
  ...y
}) => {
  const w = X(
    "nhsuk-input",
    {
      "nhsuk-input--error": f,
      [`nhsuk-input--width-${g}`]: g !== "full"
    },
    p
  );
  return /* @__PURE__ */ o.jsx(
    "input",
    {
      className: w,
      id: e,
      name: t,
      type: n,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: b,
      autoComplete: k,
      maxLength: m,
      minLength: C,
      pattern: F,
      step: N,
      min: P,
      max: T,
      onChange: R,
      onBlur: M,
      onFocus: A,
      onKeyDown: B,
      ...y
    }
  );
}, Er = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: r = "m",
  children: a,
  ...s
}) => {
  const i = X(
    "nhsuk-label",
    {
      [`nhsuk-label--${r}`]: r !== "m"
    },
    t
  ), l = n ? "h1" : "label";
  return /* @__PURE__ */ o.jsx(
    l,
    {
      className: i,
      htmlFor: n ? void 0 : e,
      ...s,
      children: n ? /* @__PURE__ */ o.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: a }) : a
    }
  );
}, jr = ({
  children: e,
  legend: t,
  className: n,
  describedBy: r,
  ...a
}) => {
  const s = X(
    "nhsuk-fieldset",
    n
  ), i = X(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const u = t?.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ o.jsx("h1", { className: "nhsuk-fieldset__heading", children: u }) : u;
  };
  return /* @__PURE__ */ o.jsxs(
    "fieldset",
    {
      className: s,
      "aria-describedby": r,
      ...a,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ o.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, Oi = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: r,
  isPageHeading: a = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: f = !1,
  onChange: d,
  fieldsetAttributes: p,
  attributes: g,
  ...b
}) => {
  const [k, m] = ne(
    e.filter((B) => B.checked).map((B) => B.value)
  ), C = n || t, F = i ? `${C}-hint` : void 0, N = l ? `${C}-error` : void 0, P = [F, N].filter(Boolean).join(" ") || void 0, T = (B, y) => {
    let w;
    y ? w = [...k, B] : w = k.filter((c) => c !== B), m(w), d?.(w);
  }, R = () => e.map((B, y) => {
    const w = `${C}-${y + 1}`, c = `${w}-conditional`, j = k.includes(B.value), K = B.disabled || !1;
    return /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: B.value,
          checked: j,
          disabled: K,
          onChange: (_) => T(B.value, _.target.checked),
          "aria-describedby": B.hint ? `${w}-hint` : P,
          ...B.conditional && {
            "aria-controls": c,
            "aria-expanded": j ? "true" : "false"
          },
          ...B.attributes
        }
      ),
      /* @__PURE__ */ o.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: B.text }),
      B.hint && /* @__PURE__ */ o.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: B.hint }),
      B.conditional && /* @__PURE__ */ o.jsx(
        "div",
        {
          className: X("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !j
          }),
          id: c,
          children: typeof B.conditional == "object" && B.conditional !== null && "label" in B.conditional && "id" in B.conditional && "name" in B.conditional ? /* @__PURE__ */ o.jsxs("div", { style: { marginTop: "16px" }, children: [
            B.conditional.label && /* @__PURE__ */ o.jsx(Er, { htmlFor: B.conditional.id, children: B.conditional.label }),
            /* @__PURE__ */ o.jsx(Nr, { ...B.conditional })
          ] }) : B.conditional
        }
      )
    ] }, B.value);
  }), M = X(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": f
    },
    u
  ), A = X("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ o.jsx("div", { className: A, ...g, ...b, children: /* @__PURE__ */ o.jsxs(
    jr,
    {
      legend: r ? {
        text: r,
        isPageHeading: a,
        size: s
      } : void 0,
      describedBy: P,
      ...p,
      children: [
        i && /* @__PURE__ */ o.jsx("div", { id: F, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ o.jsxs("div", { id: N, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: M, children: R() })
      ]
    }
  ) });
};
Oi.displayName = "Checkboxes";
const Ui = ({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  placeholder: a,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: f,
  className: d,
  rows: p = 5,
  cols: g,
  maxLength: b,
  minLength: k,
  wrap: m = "soft",
  resize: C = "vertical",
  autoComplete: F,
  spellCheck: N,
  onChange: P,
  onBlur: T,
  onFocus: R,
  onKeyDown: M,
  ...A
}) => {
  const B = X(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": u,
      [`nhsuk-textarea--resize-${C}`]: C !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ o.jsx(
    "textarea",
    {
      className: B,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      placeholder: a,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": f,
      rows: p,
      cols: g,
      maxLength: b,
      minLength: k,
      wrap: m,
      autoComplete: F,
      spellCheck: N,
      onChange: P,
      onBlur: T,
      onFocus: R,
      onKeyDown: M,
      ...A
    }
  );
}, na = ({
  id: e,
  className: t,
  children: n,
  ...r
}) => {
  const a = X("nhsuk-hint", t);
  return /* @__PURE__ */ o.jsx("div", { className: a, id: e, ...r, children: n });
}, lp = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: r = 75,
  name: a,
  value: s = "",
  rows: i,
  className: l,
  countMessage: u,
  onCountChange: f,
  onChange: d,
  ...p
}) => {
  const [g, b] = ne(s), [k, m] = ne(0), [C, F] = ne(!1), [N, P] = ne(!1), T = J((w) => n ? w.trim() === "" ? 0 : w.trim().split(/\s+/).length : w.length, [n]);
  ae(() => {
    const w = T(g), c = t || n || 0, j = c - w, K = Math.floor(c * (r / 100));
    m(j), F(w > c), P(w >= K || w > c), f && f(w, j);
  }, [g, t, n, r, T, f]);
  const R = (w) => {
    const c = w.target.value;
    b(c), d && d(w);
  }, M = () => {
    const w = t || n || 0, c = n ? "word" : "character", j = n ? "words" : "characters";
    if (!N)
      return `You can enter up to ${w} ${w === 1 ? c : j}`;
    if (C) {
      const K = Math.abs(k);
      return `You have ${K} ${K === 1 ? c : j} too many`;
    } else
      return `You have ${k} ${k === 1 ? c : j} remaining`;
  }, A = X(
    "nhsuk-character-count",
    l
  ), B = X(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !N,
      "nhsuk-error-message": C
    },
    u?.classes
  ), y = X(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
    }
  );
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: A,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": r,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ o.jsx(
          Ui,
          {
            id: e,
            name: a,
            value: g,
            rows: i,
            className: y,
            onChange: R,
            "aria-describedby": `${e}-info`,
            ...p
          }
        ),
        /* @__PURE__ */ o.jsx(
          na,
          {
            id: `${e}-info`,
            className: B,
            children: M()
          }
        )
      ]
    }
  );
}, cp = ({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  disabled: a = !1,
  required: s = !1,
  hasError: i = !1,
  describedBy: l,
  className: u,
  multiple: f = !1,
  size: d,
  autoComplete: p,
  options: g,
  onChange: b,
  onBlur: k,
  onFocus: m,
  ...C
}) => {
  const F = X(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    u
  );
  return /* @__PURE__ */ o.jsx(
    "select",
    {
      className: F,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      disabled: a,
      required: s,
      "aria-describedby": l,
      multiple: f,
      size: d,
      autoComplete: p,
      onChange: b,
      onBlur: k,
      onFocus: m,
      ...C,
      children: g.map((N, P) => /* @__PURE__ */ o.jsx(
        "option",
        {
          value: N.value,
          disabled: N.disabled,
          selected: N.selected,
          children: N.text
        },
        `${N.value}-${P}`
      ))
    }
  );
}, up = ({
  name: e,
  value: t,
  defaultValue: n,
  hasError: r = !1,
  describedBy: a,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: u,
  onChange: f,
  onBlur: d,
  onFocus: p,
  ...g
}) => {
  const [b, k] = ne(t || n || ""), m = X(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": r,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), C = (F) => {
    const N = F.target.value;
    k(N), f && f(F);
  };
  return /* @__PURE__ */ o.jsx(jr, { children: /* @__PURE__ */ o.jsx("div", { className: m, ...g, children: u.map((F, N) => {
    const P = `${e}-${N}`, T = F.conditional ? `${P}-conditional` : void 0, R = b === F.value;
    return /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: P,
          name: e,
          type: "radio",
          value: F.value,
          disabled: F.disabled,
          checked: R,
          "aria-describedby": a,
          onChange: C,
          onBlur: d,
          onFocus: p
        }
      ),
      /* @__PURE__ */ o.jsx("label", { className: "nhsuk-radios__label", htmlFor: P, children: F.text }),
      F.hint && /* @__PURE__ */ o.jsx("div", { className: "nhsuk-radios__hint", children: F.hint }),
      F.conditional && /* @__PURE__ */ o.jsx(
        "div",
        {
          className: X("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !R
          }),
          id: T,
          children: typeof F.conditional == "object" && F.conditional !== null && "label" in F.conditional && "id" in F.conditional && "name" in F.conditional ? /* @__PURE__ */ o.jsxs("div", { style: { marginTop: "16px" }, children: [
            F.conditional.label && /* @__PURE__ */ o.jsx(Er, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ o.jsx(Nr, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }) }) });
}, ft = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: a,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const f = e ?? ((k) => {
    switch (k) {
      case "xxl":
      case "xl":
        return 1;
      case "l":
        return 2;
      case "m":
        return 3;
      case "s":
        return 4;
      case "xs":
        return 5;
      default:
        return 2;
    }
  })(s), d = X(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), p = a || (r ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n), g = `h${f}`, b = i ? { ...l.style, marginBottom: i } : l.style;
  return Do(
    g,
    { className: d, ...l, style: b },
    p
  );
}, so = ({
  id: e,
  className: t,
  visuallyHiddenText: n = "Error:",
  children: r,
  ...a
}) => {
  const s = X("nhsuk-error-message", t);
  return /* @__PURE__ */ o.jsxs("span", { className: s, id: e, ...a, children: [
    /* @__PURE__ */ o.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n,
      " "
    ] }),
    r
  ] });
}, dp = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: r,
  errorList: a,
  className: s,
  children: i,
  ...l
}) => {
  const u = te(null);
  ae(() => {
    u.current && u.current.focus();
  }, []);
  const f = X(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, p = () => r ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n, g = (b) => {
    const k = b.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
    return b.href ? /* @__PURE__ */ o.jsx(
      "a",
      {
        href: b.href,
        ...b.attributes,
        children: k
      }
    ) : k;
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: u,
      className: f,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ o.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ o.jsx("p", { children: i }),
          !i && (n || r) && /* @__PURE__ */ o.jsx("p", { children: p() }),
          /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: a.map((b, k) => /* @__PURE__ */ o.jsx("li", { children: g(b) }, k)) })
        ] })
      ]
    }
  );
}, fp = ({
  id: e,
  className: t,
  items: n,
  namePrefix: r,
  values: a = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...f
}) => {
  const [d, p] = ne(() => ({
    day: a.day || "",
    month: a.month || "",
    year: a.year || ""
  })), [g, b] = ne({}), k = (D) => D % 4 === 0 && D % 100 !== 0 || D % 400 === 0, m = (D, h) => {
    const z = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return D === 2 && k(h) ? 29 : z[D - 1];
  }, C = (D, h, z) => {
    if (!D) return;
    if (!/^\d+$/.test(D)) return "Day must be a number";
    const Y = parseInt(D, 10);
    if (Y < 1 || Y > 31) return "Day must be between 1 and 31";
    if (h && z) {
      const Z = parseInt(h, 10), E = parseInt(z, 10);
      if (!isNaN(Z) && !isNaN(E) && Z >= 1 && Z <= 12) {
        const U = m(Z, E);
        if (Y > U)
          return `${[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ][Z - 1]} ${E} only has ${U} days`;
      }
    }
  }, F = (D) => {
    if (!D) return;
    if (!/^\d+$/.test(D)) return "Month must be a number";
    const h = parseInt(D, 10);
    if (h < 1 || h > 12) return "Month must be between 1 and 12";
  }, N = (D) => {
    if (!D) return;
    if (!/^\d+$/.test(D)) return "Year must be a number";
    const h = parseInt(D, 10), z = (/* @__PURE__ */ new Date()).getFullYear();
    if (h < 1900 || h > z + 10)
      return `Year must be between 1900 and ${z + 10}`;
  }, P = (D, h, z) => {
    if (!D || !h || !z) return;
    const Y = parseInt(D, 10), Z = parseInt(h, 10), E = parseInt(z, 10);
    if (isNaN(Y) || isNaN(Z) || isNaN(E) || Z < 1 || Z > 12 || E < 1900) return;
    const U = m(Z, E);
    Y < 1 || Y > U;
  }, T = J((D, h) => {
    const z = {
      ...d,
      [D]: h
    };
    p(z), u && u(z);
  }, [d, u]), R = J((D) => {
    const h = d[D];
    let z;
    if (D === "day")
      z = C(h, d.month, d.year);
    else if (D === "month") {
      if (z = F(h), !z && d.day) {
        const Y = C(d.day, h, d.year);
        b((Z) => ({
          ...Z,
          day: Y
        }));
      }
    } else if (D === "year" && (z = N(h), !z && d.day && d.month)) {
      const Y = C(d.day, d.month, h);
      b((Z) => ({
        ...Z,
        day: Y
      }));
    }
    if (b((Y) => ({
      ...Y,
      [D]: z
    })), d.day && d.month && d.year) {
      const Y = P(
        D === "day" ? h : d.day,
        D === "month" ? h : d.month,
        D === "year" ? h : d.year
      );
      Y && b((Z) => ({
        ...Z,
        day: Y
      }));
    }
  }, [d, C, F, N, P]), M = se(() => [
    {
      name: "day",
      classes: "nhsuk-input--width-2",
      inputmode: "numeric",
      pattern: "[0-9]*"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2",
      inputmode: "numeric",
      pattern: "[0-9]*"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4",
      inputmode: "numeric",
      pattern: "[0-9]*"
    }
  ], []), A = n || M;
  let B = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", w = l ? `${e}-error` : "";
  y && (B = B ? `${B} ${y}` : y), w && (B = B ? `${B} ${w}` : w);
  const c = Object.values(g).some((D) => D), j = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || c
    }
  ), K = X(
    "nhsuk-date-input",
    t
  ), _ = () => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    i && /* @__PURE__ */ o.jsx(
      na,
      {
        id: y,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ o.jsx(
      so,
      {
        id: w,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([D, h]) => h ? /* @__PURE__ */ o.jsxs(
        so,
        {
          id: `${e}-${D}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            h
          ]
        },
        `${D}-error`
      ) : null
    ),
    /* @__PURE__ */ o.jsx("div", { className: K, id: e, "data-testid": "date-input", ...f, children: A.map((D) => {
      const h = D.id || `${e}-${D.name}`, z = r ? `${r}[${D.name}]` : D.name, Y = D.label || D.name.charAt(0).toUpperCase() + D.name.slice(1), Z = g[D.name], E = d[D.name] || "";
      let U = B;
      if (Z) {
        const W = `${e}-${D.name}-error`;
        U = U ? `${U} ${W}` : W;
      }
      return /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ o.jsx(
          Er,
          {
            htmlFor: h,
            className: "nhsuk-date-input__label",
            children: Y
          }
        ),
        /* @__PURE__ */ o.jsx(
          Nr,
          {
            id: h,
            name: z,
            value: E,
            className: X("nhsuk-date-input__input", D.classes, {
              "nhsuk-input--error": Z
            }),
            inputMode: D.inputmode,
            autoComplete: D.autocomplete,
            pattern: D.pattern,
            "aria-describedby": U || void 0,
            hasError: !!Z,
            onChange: (W) => T(D.name, W.target.value),
            onBlur: () => R(D.name)
          }
        )
      ] }, D.name);
    }) })
  ] });
  return /* @__PURE__ */ o.jsx("div", { className: j, children: s ? /* @__PURE__ */ o.jsx(
    jr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: B || void 0,
      children: _()
    }
  ) : _() });
}, ra = {
  animation: {
    AnimationDurationFast: "150ms",
    AnimationDurationNormal: "300ms",
    AnimationDurationSlow: "500ms",
    AnimationEasingEaseIn: "cubic-bezier(0.4, 0, 1, 1)",
    AnimationEasingEaseOut: "cubic-bezier(0, 0, 0.2, 1)",
    AnimationEasingEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    AnimationEasingBounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  },
  transition: {
    TransitionButtonDefault: "background-color 300ms cubic-bezier(0, 0, 0.2, 1)",
    TransitionButtonShadow: "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)",
    TransitionInputFocus: "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)",
    TransitionCardHover: "border-color 300ms cubic-bezier(0, 0, 0.2, 1)"
  },
  border: {
    BorderWidthDefault: "1px",
    BorderWidthFormElement: "2px",
    BorderWidthFormElementError: "4px",
    BorderWidthCardBottom: "4px",
    BorderWidthPanel: "4px",
    BorderWidthTableHeader: "2px",
    BorderWidthTableCell: "1px",
    BorderRadiusNone: "0px",
    BorderRadiusSmall: "4px",
    BorderRadiusMedium: "8px",
    BorderRadiusLarge: "12px",
    BorderColorDefault: "#d8dde0",
    BorderColorForm: "#4c6272",
    BorderColorCard: "#d8dde0",
    BorderColorCardHover: "#aeb7bd",
    BorderColorError: "#d5281b"
  },
  color: {
    ColorPrimaryBlue: "#005eb8",
    ColorPrimaryWhite: "#ffffff",
    ColorPrimaryBlack: "#212b32",
    ColorPrimaryGreen: "#007f3b",
    ColorPrimaryPurple: "#330072",
    ColorPrimaryDarkPink: "#7c2855",
    ColorPrimaryRed: "#d5281b",
    ColorPrimaryYellow: "#ffeb3b",
    ColorSecondaryPaleYellow: "#fff9c4",
    ColorSecondaryWarmYellow: "#ffb81c",
    ColorSecondaryOrange: "#ed8b00",
    ColorSecondaryAquaGreen: "#00a499",
    ColorSecondaryPink: "#ae2573",
    ColorGrey1: "#4c6272",
    ColorGrey2: "#768692",
    ColorGrey3: "#aeb7bd",
    ColorGrey4: "#d8dde0",
    ColorGrey5: "#f0f4f5",
    ColorTextPrimary: "#212b32",
    ColorTextSecondary: "#4c6272",
    ColorTextReverse: "#ffffff",
    ColorTextPrint: "#212b32",
    ColorLinkDefault: "#005eb8",
    ColorLinkHover: "#7c2855",
    ColorLinkActive: "#003087",
    ColorLinkVisited: "#330072",
    ColorFocusBackground: "#ffeb3b",
    ColorFocusText: "#212b32",
    ColorBorderDefault: "#d8dde0",
    ColorBorderSecondary: "#ffffff33",
    ColorError: "#d5281b",
    ColorFormBorder: "#4c6272",
    ColorFormBackground: "#ffffff",
    ColorButtonPrimaryBackground: "#007f3b",
    ColorButtonPrimaryText: "#ffffff",
    ColorButtonPrimaryHover: "#006530",
    ColorButtonPrimaryActive: "#004021",
    ColorButtonPrimaryShadow: "#004021",
    ColorButtonSecondaryBackground: "#00000000",
    ColorButtonSecondaryBackgroundSolid: "#ffffff",
    ColorButtonSecondaryBorder: "#005eb8",
    ColorButtonSecondaryText: "#005eb8",
    ColorButtonSecondaryHover: "#d9e5f2",
    ColorButtonSecondaryActive: "#c7daf0",
    ColorButtonSecondaryShadow: "#005eb8",
    ColorButtonReverseBackground: "#ffffff",
    ColorButtonReverseText: "#212b32",
    ColorButtonReverseHover: "#d9dde0",
    ColorButtonReverseActive: "#b3bcc2",
    ColorButtonReverseShadow: "#b3bcc2",
    ColorButtonWarningBackground: "#d5281b",
    ColorButtonWarningHover: "#aa2016",
    ColorButtonWarningActive: "#6a140e",
    ColorButtonWarningShadow: "#6a140e",
    ColorButtonLoginBackground: "#005eb8",
    ColorButtonLoginHover: "#004b93",
    ColorButtonLoginActive: "#002f5c",
    ColorButtonLoginShadow: "#002f5c"
  },
  component: {
    ComponentButtonPaddingMobileVertical: "8px",
    ComponentButtonPaddingMobileHorizontal: "16px",
    ComponentButtonPaddingDesktopVertical: "12px",
    ComponentButtonPaddingDesktopHorizontal: "16px",
    ComponentButtonShadowSize: "4px",
    ComponentFormInputMinHeight: "40px",
    ComponentFormInputPadding: "4px",
    ComponentFormCheckboxSize: "40px",
    ComponentFormCheckboxLabelPadding: "12px",
    ComponentCardPaddingMobile: "16px",
    ComponentCardPaddingDesktop: "32px",
    ComponentCardHeadingMargin: "16px",
    ComponentPanelPaddingMobile: "20px",
    ComponentPanelPaddingDesktop: "28px",
    ComponentBreadcrumbChevronMarginLeft: "9px",
    ComponentBreadcrumbChevronMarginRight: "2px",
    ComponentBreadcrumbPaddingTopMobile: "16px",
    ComponentBreadcrumbPaddingTopDesktop: "24px",
    ComponentSummaryListCellPaddingVertical: "8px",
    ComponentSummaryListCellPaddingHorizontal: "24px",
    ComponentSummaryListRowMargin: "16px",
    ComponentSpread: "4px",
    ComponentBlur: "4px",
    ComponentLink: "4px",
    ComponentDetails: "8px",
    ComponentExpander: "4px",
    ComponentPagination: "16px"
  },
  button: {
    ButtonPrimaryBackgroundDefault: "#007f3b",
    ButtonPrimaryBackgroundHover: "#006530",
    ButtonPrimaryBackgroundActive: "#004021",
    ButtonPrimaryBackgroundDisabled: "#d8dde0",
    ButtonPrimaryTextDefault: "#ffffff",
    ButtonPrimaryTextDisabled: "#768692",
    ButtonPrimaryBorderDefault: "#00000000",
    ButtonPrimaryBorderFocus: "#ffeb3b",
    ButtonSecondaryBackgroundDefault: "#00000000",
    ButtonSecondaryBackgroundSolid: "#ffffff",
    ButtonSecondaryBackgroundHover: "#d9e5f2",
    ButtonSecondaryBackgroundActive: "#c7daf0",
    ButtonSecondaryTextDefault: "#005eb8",
    ButtonSecondaryBorderDefault: "#005eb8",
    ButtonSpacingPaddingVerticalMobile: "8px",
    ButtonSpacingPaddingHorizontalMobile: "16px",
    ButtonSpacingPaddingVerticalDesktop: "12px",
    ButtonSpacingPaddingHorizontalDesktop: "16px",
    ButtonBorderWidth: "2px",
    ButtonBorderRadius: "4px",
    ButtonShadowSize: "4px",
    ButtonTypographyWeight: "600"
  },
  card: {
    CardBackgroundDefault: "#ffffff",
    CardBorderDefault: "#d8dde0",
    CardBorderHover: "#aeb7bd",
    CardBorderBottom: "#f0f4f5",
    CardTextHeading: "#212b32",
    CardTextDescription: "#212b32",
    CardTextLink: "#005eb8",
    CardSpacingPaddingMobile: "16px",
    CardSpacingPaddingDesktop: "32px",
    CardSpacingHeadingMargin: "16px",
    CardBorderWidthDefault: "1px",
    CardBorderWidthBottom: "4px",
    CardShadowDefault: "none",
    CardShadowHover: "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  form: {
    FormInputBackgroundDefault: "#ffffff",
    FormInputBackgroundFocus: "#ffffff",
    FormInputBackgroundDisabled: "#d8dde0",
    FormInputBackgroundError: "#ffffff",
    FormInputBorderDefault: "#4c6272",
    FormInputBorderFocus: "#ffeb3b",
    FormInputBorderError: "#d5281b",
    FormInputBorderDisabled: "#aeb7bd",
    FormInputTextDefault: "#212b32",
    FormInputTextPlaceholder: "#4c6272",
    FormInputTextDisabled: "#768692",
    FormLabelTextDefault: "#212b32",
    FormLabelTextRequired: "#ffffff",
    FormLabelTypographyWeight: "600",
    FormErrorTextDefault: "#d5281b",
    FormErrorTypographyWeight: "600",
    FormHintTextDefault: "#4c6272",
    FormSpacingInputPadding: "4px",
    FormSpacingInputMinHeight: "40px",
    FormSpacingCheckboxSize: "40px",
    FormSpacingCheckboxLabelPadding: "12px",
    FormBorderWidthDefault: "2px",
    FormBorderWidthError: "4px",
    FormBorderRadius: "0px"
  },
  size: {
    SizeIconSmall: "16px",
    SizeIconMedium: "18px",
    SizeIconLarge: "24px",
    SizeIconExtraLarge: "32px",
    SizeIconNhsDefault: "34px",
    SizeFormControlSmall: "32px",
    SizeFormControlMedium: "40px",
    SizeFormControlLarge: "48px",
    SizeFormInputWidthXs: "5.4ex",
    SizeFormInputWidthSm: "7.2ex",
    SizeFormInputWidthMd: "9ex",
    SizeFormInputWidthLg: "10.8ex",
    SizeFormInputWidthXl: "20ex",
    SizeFormInputWidth2xl: "38ex",
    SizeFormInputWidth3xl: "56ex",
    SizeButtonMinHeightMobile: "44px",
    SizeButtonMinHeightDesktop: "40px"
  },
  layout: {
    LayoutContainerMaxWidth: "1020px",
    LayoutColumnFull: "100%",
    LayoutColumnHalf: "50%",
    LayoutColumnThird: "33.333%",
    LayoutColumnQuarter: "25%",
    LayoutColumnActions: "20%"
  },
  breakpoint: {
    BreakpointMobile: "320px",
    BreakpointTablet: "641px",
    BreakpointDesktop: "1025px",
    BreakpointLargeDesktop: "1280px"
  },
  grid: {
    GridPageWidth: "960px",
    GridGutter: "32px",
    GridGutterHalf: "16px"
  },
  state: {
    StateErrorBackground: "#d5281b",
    StateErrorBorder: "#d5281b",
    StateErrorText: "#ffffff",
    StateSuccessBackground: "#007f3b",
    StateSuccessBorder: "#007f3b",
    StateSuccessText: "#ffffff",
    StateWarningBackground: "#ffeb3b",
    StateWarningBorder: "#ffeb3b",
    StateWarningText: "#212b32",
    StateInfoBackground: "#005eb8",
    StateInfoBorder: "#005eb8",
    StateInfoText: "#ffffff",
    StateDisabledBackground: "#d8dde0",
    StateDisabledBorder: "#aeb7bd",
    StateDisabledText: "#768692"
  },
  shadow: {
    ShadowButtonDefault: "0 4px 0 #004021",
    ShadowButtonSecondary: "0 4px 0 #005eb8",
    ShadowButtonWarning: "0 4px 0 #6a140e",
    ShadowButtonFocus: "0 4px 0 #ffeb3b",
    ShadowCardDefault: "none",
    ShadowCardHover: "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  "focus-outline": {
    FocusOutlineWidth: "4px",
    FocusOutlineOffset: "0px",
    FocusOutlineStyle: "solid"
  },
  "focus-shadow": {
    FocusShadowInput: "0 0 0 3px #ffeb3b",
    FocusShadowButton: "0 0 0 3px #ffeb3b"
  },
  elevation: {
    ElevationNone: "none",
    ElevationLow: "0 1px 3px rgba(0, 0, 0, 0.12)",
    ElevationMedium: "0 2px 6px rgba(0, 0, 0, 0.16)",
    ElevationHigh: "0 4px 12px rgba(0, 0, 0, 0.20)"
  },
  spacing: {
    Spacing0: "0",
    Spacing1: "4px",
    Spacing2: "8px",
    Spacing3: "16px",
    Spacing4: "24px",
    Spacing5: "32px",
    Spacing6: "40px",
    Spacing7: "48px",
    Spacing8: "56px",
    Spacing9: "64px"
  },
  "spacing-responsive": {
    SpacingResponsive0Mobile: "0",
    SpacingResponsive0Tablet: "0",
    SpacingResponsive1Mobile: "4px",
    SpacingResponsive1Tablet: "4px",
    SpacingResponsive2Mobile: "8px",
    SpacingResponsive2Tablet: "8px",
    SpacingResponsive3Mobile: "8px",
    SpacingResponsive3Tablet: "16px",
    SpacingResponsive4Mobile: "16px",
    SpacingResponsive4Tablet: "24px",
    SpacingResponsive5Mobile: "24px",
    SpacingResponsive5Tablet: "32px",
    SpacingResponsive6Mobile: "32px",
    SpacingResponsive6Tablet: "40px",
    SpacingResponsive7Mobile: "40px",
    SpacingResponsive7Tablet: "48px",
    SpacingResponsive8Mobile: "48px",
    SpacingResponsive8Tablet: "56px",
    SpacingResponsive9Mobile: "56px",
    SpacingResponsive9Tablet: "64px"
  },
  font: {
    FontFamilyBase: "Frutiger W01",
    FontFamilyFallback: "Arial, Helvetica, sans-serif",
    FontFamilyPrint: "sans-serif",
    FontWeightNormal: "400",
    FontWeightBold: "600",
    FontWeightLight: "400",
    FontSize14Mobile: "12px",
    FontSize14Tablet: "14px",
    FontSize14Print: "12pt",
    FontSize16Mobile: "14px",
    FontSize16Tablet: "16px",
    FontSize16Print: "12pt",
    FontSize19Mobile: "16px",
    FontSize19Tablet: "19px",
    FontSize19Print: "13pt",
    FontSize22Mobile: "19px",
    FontSize22Tablet: "22px",
    FontSize22Print: "15pt",
    FontSize26Mobile: "22px",
    FontSize26Tablet: "26px",
    FontSize26Print: "17pt",
    FontSize36Mobile: "27px",
    FontSize36Tablet: "36px",
    FontSize36Print: "20pt",
    FontSize48Mobile: "33px",
    FontSize48Tablet: "48px",
    FontSize48Print: "24pt",
    FontSizeBase: "16px",
    FontLineHeightBase: "24px"
  },
  // NHS Typography System
  headings: {
    xl: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
      lineHeight: "1.09",
      marginTop: "0",
      marginBottom: { mobile: "40px", tablet: "48px" }
    },
    l: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
      lineHeight: "1.11",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    m: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.15",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    s: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
      lineHeight: "1.18",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    xs: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.26",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    }
  },
  paragraphs: {
    body: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.47",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    bodyLarge: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.38",
      marginTop: "0",
      marginBottom: { mobile: "24px", tablet: "32px" }
    },
    bodySmall: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
      lineHeight: "1.5",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" }
    },
    ledeText: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.38",
      marginTop: "0",
      marginBottom: { mobile: "40px", tablet: "48px" }
    },
    ledeTextSmall: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.47",
      marginTop: "0",
      marginBottom: { mobile: "24px", tablet: "32px" }
    }
  }
}, oa = Tn(ra), Yi = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...ra, ...t };
  return /* @__PURE__ */ o.jsx(oa.Provider, { value: n, children: e });
}, hp = () => {
  const e = qe(oa);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Vi() {
  return `
	@font-face {
	  font-display: swap;
	  font-family: "Frutiger W01";
	  font-style: normal;
	  font-weight: 400;
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.eot");
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.eot?#iefix") format("embedded-opentype"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff2") format("woff2"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-55Roman.woff") format("woff");
	}
	
	@font-face {
	  font-display: swap;
	  font-family: "Frutiger W01";
	  font-style: normal;
	  font-weight: 600;
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.eot");
	  src: url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.eot?#iefix") format("embedded-opentype"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff2") format("woff2"),
		   url("https://assets.nhs.uk/fonts/FrutigerLTW01-65Bold.woff") format("woff");
	}
  `;
}
function Ki() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Vi(), document.head.appendChild(e);
}
const pp = ({ children: e, theme: t }) => (ae(() => {
  Ki();
}, []), /* @__PURE__ */ o.jsx(Yi, { theme: t, children: e })), mp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: a,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  ...d
}) => {
  const [p, g] = ne(!1), [b, k] = ne(!1), [m, C] = ne(i?.items?.length || 0), [F, N] = ne(!1), [P, T] = ne(!1), [R, M] = ne(!1), A = te(null), B = te(null), y = te(!1), w = te(null), c = te([]), j = te(null);
  ae(() => {
    typeof window > "u" || (M(!0), N(!0));
  }, []), ae(() => {
    if (!R || !i?.items?.length) return;
    c.current = i.items;
    const S = setTimeout(() => {
      A.current && B.current && Y();
    }, 100);
    return () => clearTimeout(S);
  }, [R, i?.items]);
  const K = n.href && !t.href || n.href && n.href === t.href, _ = K ? n.href : t.href, D = X(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), h = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), z = X(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Y = J(() => {
    if (!(typeof window > "u" || y.current) && !(!A.current || !B.current || !c.current.length)) {
      y.current = !0;
      try {
        const S = B.current, x = A.current, L = S.offsetWidth, H = x.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (H.length === 0 || L === 0) {
          y.current = !1;
          return;
        }
        const $ = window.innerWidth < 768, re = $ ? 16 : 32, q = re * 2, O = L - q, Q = Array.from(H).map((be) => be.offsetWidth), le = Q.reduce((be, Se) => be + Se, 0), ue = $ ? 80 : 100, we = j.current !== null && j.current !== $;
        if (j.current = $, console.log("Overflow check:", {
          containerWidth: L,
          availableContainerWidth: O,
          totalGutters: q,
          gutterSize: re,
          totalWidth: le,
          mobile: $,
          breakpointChanged: we,
          itemCount: Q.length,
          measurements: Q
        }), le <= O)
          k(!1), C(c.current.length);
        else {
          const be = O - ue;
          let Se = 0, Ce = 0;
          for (let Oe = 0; Oe < Q.length; Oe++) {
            const Ue = Ce + Q[Oe];
            if (Ue <= be)
              Ce = Ue, Se = Oe + 1;
            else
              break;
          }
          Se = Math.max(1, Se);
          const We = Se < Q.length;
          k(We), C(Se);
        }
        y.current = !1;
      } catch (S) {
        console.error("Overflow detection error:", S), k(!1), C(c.current.length), y.current = !1;
      }
    }
  }, []);
  ae(() => {
    if (typeof document > "u") return;
    const S = (x) => {
      x.key === "Escape" && p && g(!1);
    };
    if (p)
      return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [p]), ae(() => {
    if (typeof window > "u" || !R) return;
    const S = () => {
      p && (g(!1), T(!1)), w.current && clearTimeout(w.current), w.current = setTimeout(() => {
        c.current.length > 0 && Y();
      }, 250);
    };
    let x = null, L = null;
    return window.matchMedia && (x = window.matchMedia("(max-width: 767px)"), L = () => {
      console.log("Breakpoint changed:", x?.matches ? "mobile" : "desktop"), c.current.length > 0 && setTimeout(() => Y(), 50);
    }, x.addEventListener ? x.addEventListener("change", L) : x.addListener(L)), window.addEventListener("resize", S), () => {
      window.removeEventListener("resize", S), x && L && (x.removeEventListener ? x.removeEventListener("change", L) : x.removeListener(L)), w.current && clearTimeout(w.current);
    };
  }, [R, p, Y]), ae(() => {
    if (typeof document > "u") return;
    const S = (x) => {
      const L = x.target, H = A.current?.contains(L);
      p && !H && g(!1);
    };
    if (p)
      return document.addEventListener("mousedown", S), () => document.removeEventListener("mousedown", S);
  }, [p]);
  const Z = (S) => {
    S && (S.preventDefault(), S.stopPropagation());
    const x = !p;
    g(x), x ? setTimeout(() => {
      T(!0);
    }, 50) : T(!1);
  }, E = () => /* @__PURE__ */ o.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": t.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ o.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ o.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), U = () => t.src ? /* @__PURE__ */ o.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : E(), W = () => r ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ o.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ o.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, ee = (S, x) => S ? x ? /* @__PURE__ */ o.jsx("a", { className: "nhsuk-header__service-name", href: x, children: S }) : /* @__PURE__ */ o.jsx("span", { className: "nhsuk-header__service-name", children: S }) : null, V = (S) => {
    const x = S.icon ? /* @__PURE__ */ o.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ o.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, L = S.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text, H = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      x,
      L
    ] });
    return S.href ? /* @__PURE__ */ o.jsx("a", { className: "nhsuk-header__account-link", href: S.href, children: H }) : S.action ? /* @__PURE__ */ o.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: S.action,
        method: S.method || "post",
        children: /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: H
          }
        )
      }
    ) : H;
  }, v = () => /* @__PURE__ */ o.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ o.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), I = () => /* @__PURE__ */ o.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ o.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), G = (S) => {
    if (S.active || S.current) {
      const x = S.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text;
      return /* @__PURE__ */ o.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: x });
    }
    return S.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text;
  };
  return /* @__PURE__ */ o.jsxs(
    "header",
    {
      className: D,
      role: "banner",
      "data-module": "nhsuk-header",
      ...f,
      ...d,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: h, children: [
          /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ o.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              U(),
              W(),
              K && ee(n.text)
            ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              U(),
              W(),
              K && ee(n.text)
            ] }),
            n.text && !K && ee(n.text, n.href)
          ] }),
          a && /* @__PURE__ */ o.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ o.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: a.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ o.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: a.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: a.name || "q",
                    type: "search",
                    placeholder: a.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ o.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  v(),
                  /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: a.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          s && s.items && s.items.length > 0 && /* @__PURE__ */ o.jsx(
            "nav",
            {
              className: X("nhsuk-header__account", s.className),
              "aria-label": s.ariaLabel || "Account",
              children: /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-header__account-list", children: s.items.map((S, x) => S && /* @__PURE__ */ o.jsx(
                "li",
                {
                  className: X("nhsuk-header__account-item", S.className),
                  children: V(S)
                },
                x
              )) })
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ o.jsx(
          "nav",
          {
            className: z,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ o.jsx(
              "div",
              {
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !F && R,
                    "nhsuk-header__navigation-container--ssr": !R
                  },
                  l
                ),
                ref: B,
                children: /* @__PURE__ */ o.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: A, children: [
                  (R ? i.items.slice(0, m) : i.items).map((S, x) => /* @__PURE__ */ o.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": S.active || S.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !R && x >= 4
                          // Mark items that would be hidden on client
                        },
                        S.className
                      ),
                      ...S.attributes || {},
                      children: /* @__PURE__ */ o.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: S.href,
                          ...S.active || S.current ? {
                            "aria-current": S.current ? "page" : "true"
                          } : {},
                          children: G(S)
                        }
                      )
                    },
                    x
                  )),
                  R && b && m < i.items.length && /* @__PURE__ */ o.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ o.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: Z,
                          type: "button",
                          children: [
                            /* @__PURE__ */ o.jsx("span", { children: "More" }),
                            I()
                          ]
                        }
                      )
                    }
                  )
                ] })
              }
            )
          }
        ),
        R && i && i.items && i.items.length > 0 && p && P && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !P,
            children: /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(m).map((S, x) => /* @__PURE__ */ o.jsx(
              "li",
              {
                className: X(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": S.active || S.current
                  }
                ),
                children: /* @__PURE__ */ o.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: S.href,
                    ...S.active || S.current ? {
                      "aria-current": S.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      g(!1), T(!1);
                    },
                    children: G(S)
                  }
                )
              },
              `overflow-${m + x}`
            )) })
          }
        )
      ]
    }
  );
}, Gi = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: r,
  html: a,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: u,
  ...f
}) => {
  const d = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    n,
    !u && !r && !a ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), b = u || e || r || a, k = () => {
    if (!e) return null;
    const m = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ o.jsx("h1", { ...m, children: e });
      case 2:
        return /* @__PURE__ */ o.jsx("h2", { ...m, children: e });
      case 3:
        return /* @__PURE__ */ o.jsx("h3", { ...m, children: e });
      case 4:
        return /* @__PURE__ */ o.jsx("h4", { ...m, children: e });
      case 5:
        return /* @__PURE__ */ o.jsx("h5", { ...m, children: e });
      case 6:
        return /* @__PURE__ */ o.jsx("h6", { ...m, children: e });
      default:
        return /* @__PURE__ */ o.jsx("h1", { ...m, children: e });
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      ...f,
      children: [
        s && /* @__PURE__ */ o.jsx("div", { className: "nhsuk-hero__overlay", children: b && /* @__PURE__ */ o.jsx("div", { className: p, children: /* @__PURE__ */ o.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ o.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-hero-content", children: [
          k(),
          u || (a ? /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ o.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null),
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && b && /* @__PURE__ */ o.jsx("div", { className: p, children: /* @__PURE__ */ o.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ o.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          k(),
          u || (a ? /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ o.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Gi.displayName = "Hero";
const gp = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: r,
  metaLinks: a,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const u = (d, p = !1) => /* @__PURE__ */ o.jsx(
    "li",
    {
      className: X("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": p
      }),
      children: /* @__PURE__ */ o.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: d.URL,
          target: d.newWindow ? "_blank" : void 0,
          rel: d.newWindow ? "noopener noreferrer" : void 0,
          children: d.label
        }
      )
    },
    `${d.URL}-${d.label}`
  ), f = !!(n || r);
  return /* @__PURE__ */ o.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ o.jsxs("div", { className: X("nhsuk-width-container", i), children: [
      /* @__PURE__ */ o.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ o.jsx("div", { className: X("nhsuk-footer", e), children: f ? (
        // Multi-column layout
        /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => u(d)) }),
          n && n.length > 0 && /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-footer__list", children: n.map((d) => u(d)) }),
          r && r.length > 0 && /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => u(d)) }),
          a && a.length > 0 && /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: a.map((d) => u(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ o.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => u(d, !0)),
          (n || []).map((d) => u(d, !0)),
          (r || []).map((d) => u(d, !0)),
          (a || []).map((d) => u(d, !0))
        ] })
      ) }),
      !f && /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
    ] }),
    f && /* @__PURE__ */ o.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Ht(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function qi(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fr(e) {
  let t, n, r;
  e.length !== 2 ? (t = Ht, n = (l, u) => Ht(e(l), u), r = (l, u) => e(l) - u) : (t = e === Ht || e === qi ? e : Xi, n = e, r = e);
  function a(l, u, f = 0, d = l.length) {
    if (f < d) {
      if (t(u, u) !== 0) return d;
      do {
        const p = f + d >>> 1;
        n(l[p], u) < 0 ? f = p + 1 : d = p;
      } while (f < d);
    }
    return f;
  }
  function s(l, u, f = 0, d = l.length) {
    if (f < d) {
      if (t(u, u) !== 0) return d;
      do {
        const p = f + d >>> 1;
        n(l[p], u) <= 0 ? f = p + 1 : d = p;
      } while (f < d);
    }
    return f;
  }
  function i(l, u, f = 0, d = l.length) {
    const p = a(l, u, f, d - 1);
    return p > f && r(l[p - 1], u) > -r(l[p], u) ? p - 1 : p;
  }
  return { left: a, center: i, right: s };
}
function Xi() {
  return 0;
}
function Zi(e) {
  return e === null ? NaN : +e;
}
const Ji = Fr(Ht), Qi = Ji.right;
Fr(Zi).center;
const el = Math.sqrt(50), tl = Math.sqrt(10), nl = Math.sqrt(2);
function aa(e, t, n) {
  const r = (t - e) / Math.max(0, n), a = Math.floor(Math.log10(r)), s = r / Math.pow(10, a), i = s >= el ? 10 : s >= tl ? 5 : s >= nl ? 2 : 1;
  let l, u, f;
  return a < 0 ? (f = Math.pow(10, -a) / i, l = Math.round(e * f), u = Math.round(t * f), l / f < e && ++l, u / f > t && --u, f = -f) : (f = Math.pow(10, a) * i, l = Math.round(e / f), u = Math.round(t / f), l * f < e && ++l, u * f > t && --u), u < l && 0.5 <= n && n < 2 ? aa(e, t, n * 2) : [l, u, f];
}
function io(e, t, n) {
  return t = +t, e = +e, n = +n, aa(e, t, n)[2];
}
function lo(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, a = r ? io(t, e, n) : io(e, t, n);
  return (r ? -1 : 1) * (a < 0 ? 1 / -a : a);
}
function rl(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Dr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function sa(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Nt() {
}
var $t = 0.7, Ut = 1 / $t, ct = "\\s*([+-]?\\d+)\\s*", Ct = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", $e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ol = /^#([0-9a-f]{3,8})$/, al = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), sl = new RegExp(`^rgb\\(${$e},${$e},${$e}\\)$`), il = new RegExp(`^rgba\\(${ct},${ct},${ct},${Ct}\\)$`), ll = new RegExp(`^rgba\\(${$e},${$e},${$e},${Ct}\\)$`), cl = new RegExp(`^hsl\\(${Ct},${$e},${$e}\\)$`), ul = new RegExp(`^hsla\\(${Ct},${$e},${$e},${Ct}\\)$`), co = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Dr(Nt, _t, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: uo,
  // Deprecated! Use color.formatHex.
  formatHex: uo,
  formatHex8: dl,
  formatHsl: fl,
  formatRgb: fo,
  toString: fo
});
function uo() {
  return this.rgb().formatHex();
}
function dl() {
  return this.rgb().formatHex8();
}
function fl() {
  return ia(this).formatHsl();
}
function fo() {
  return this.rgb().formatRgb();
}
function _t(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ol.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ho(t) : n === 3 ? new ge(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = al.exec(e)) ? new ge(t[1], t[2], t[3], 1) : (t = sl.exec(e)) ? new ge(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = il.exec(e)) ? Bt(t[1], t[2], t[3], t[4]) : (t = ll.exec(e)) ? Bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cl.exec(e)) ? go(t[1], t[2] / 100, t[3] / 100, 1) : (t = ul.exec(e)) ? go(t[1], t[2] / 100, t[3] / 100, t[4]) : co.hasOwnProperty(e) ? ho(co[e]) : e === "transparent" ? new ge(NaN, NaN, NaN, 0) : null;
}
function ho(e) {
  return new ge(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bt(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ge(e, t, n, r);
}
function hl(e) {
  return e instanceof Nt || (e = _t(e)), e ? (e = e.rgb(), new ge(e.r, e.g, e.b, e.opacity)) : new ge();
}
function Gn(e, t, n, r) {
  return arguments.length === 1 ? hl(e) : new ge(e, t, n, r ?? 1);
}
function ge(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Dr(ge, Gn, sa(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $t : Math.pow($t, e), new ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ge(Je(this.r), Je(this.g), Je(this.b), Yt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: pl,
  formatRgb: mo,
  toString: mo
}));
function po() {
  return `#${Ze(this.r)}${Ze(this.g)}${Ze(this.b)}`;
}
function pl() {
  return `#${Ze(this.r)}${Ze(this.g)}${Ze(this.b)}${Ze((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mo() {
  const e = Yt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Je(this.r)}, ${Je(this.g)}, ${Je(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Je(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ze(e) {
  return e = Je(e), (e < 16 ? "0" : "") + e.toString(16);
}
function go(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new ke(e, t, n, r);
}
function ia(e) {
  if (e instanceof ke) return new ke(e.h, e.s, e.l, e.opacity);
  if (e instanceof Nt || (e = _t(e)), !e) return new ke();
  if (e instanceof ke) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, a = Math.min(t, n, r), s = Math.max(t, n, r), i = NaN, l = s - a, u = (s + a) / 2;
  return l ? (t === s ? i = (n - r) / l + (n < r) * 6 : n === s ? i = (r - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? s + a : 2 - s - a, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new ke(i, l, u, e.opacity);
}
function ml(e, t, n, r) {
  return arguments.length === 1 ? ia(e) : new ke(e, t, n, r ?? 1);
}
function ke(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Dr(ke, ml, sa(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new ke(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? $t : Math.pow($t, e), new ke(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, a = 2 * n - r;
    return new ge(
      Pn(e >= 240 ? e - 240 : e + 120, a, r),
      Pn(e, a, r),
      Pn(e < 120 ? e + 240 : e - 120, a, r),
      this.opacity
    );
  },
  clamp() {
    return new ke(bo(this.h), Lt(this.s), Lt(this.l), Yt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${bo(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function bo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Lt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Pn(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Pr = (e) => () => e;
function gl(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function bl(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function xl(e) {
  return (e = +e) == 1 ? la : function(t, n) {
    return n - t ? bl(t, n, e) : Pr(isNaN(t) ? n : t);
  };
}
function la(e, t) {
  var n = t - e;
  return n ? gl(e, n) : Pr(isNaN(e) ? t : e);
}
const xo = function e(t) {
  var n = xl(t);
  function r(a, s) {
    var i = n((a = Gn(a)).r, (s = Gn(s)).r), l = n(a.g, s.g), u = n(a.b, s.b), f = la(a.opacity, s.opacity);
    return function(d) {
      return a.r = i(d), a.g = l(d), a.b = u(d), a.opacity = f(d), a + "";
    };
  }
  return r.gamma = e, r;
}(1);
function yl(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), a;
  return function(s) {
    for (a = 0; a < n; ++a) r[a] = e[a] * (1 - s) + t[a] * s;
    return r;
  };
}
function vl(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Sl(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, a = new Array(r), s = new Array(n), i;
  for (i = 0; i < r; ++i) a[i] = Mr(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < r; ++i) s[i] = a[i](l);
    return s;
  };
}
function kl(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(r) {
    return n.setTime(e * (1 - r) + t * r), n;
  };
}
function Vt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function wl(e, t) {
  var n = {}, r = {}, a;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (a in t)
    a in e ? n[a] = Mr(e[a], t[a]) : r[a] = t[a];
  return function(s) {
    for (a in n) r[a] = n[a](s);
    return r;
  };
}
var qn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mn = new RegExp(qn.source, "g");
function Tl(e) {
  return function() {
    return e;
  };
}
function $l(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Cl(e, t) {
  var n = qn.lastIndex = Mn.lastIndex = 0, r, a, s, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = qn.exec(e)) && (a = Mn.exec(t)); )
    (s = a.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (r = r[0]) === (a = a[0]) ? l[i] ? l[i] += a : l[++i] = a : (l[++i] = null, u.push({ i, x: Vt(r, a) })), n = Mn.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? u[0] ? $l(u[0].x) : Tl(t) : (t = u.length, function(f) {
    for (var d = 0, p; d < t; ++d) l[(p = u[d]).i] = p.x(f);
    return l.join("");
  });
}
function Mr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Pr(t) : (n === "number" ? Vt : n === "string" ? (r = _t(t)) ? (t = r, xo) : Cl : t instanceof _t ? xo : t instanceof Date ? kl : vl(t) ? yl : Array.isArray(t) ? Sl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? wl : Vt)(e, t);
}
function _l(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Nl(e) {
  return function() {
    return e;
  };
}
function El(e) {
  return +e;
}
var yo = [0, 1];
function st(e) {
  return e;
}
function Xn(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Nl(isNaN(t) ? NaN : 0.5);
}
function jl(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function Fl(e, t, n) {
  var r = e[0], a = e[1], s = t[0], i = t[1];
  return a < r ? (r = Xn(a, r), s = n(i, s)) : (r = Xn(r, a), s = n(s, i)), function(l) {
    return s(r(l));
  };
}
function Dl(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, a = new Array(r), s = new Array(r), i = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < r; )
    a[i] = Xn(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = Qi(e, l, 1, r) - 1;
    return s[u](a[u](l));
  };
}
function Pl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ml() {
  var e = yo, t = yo, n = Mr, r, a, s, i = st, l, u, f;
  function d() {
    var g = Math.min(e.length, t.length);
    return i !== st && (i = jl(e[0], e[g - 1])), l = g > 2 ? Dl : Fl, u = f = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? s : (u || (u = l(e.map(r), t, n)))(r(i(g)));
  }
  return p.invert = function(g) {
    return i(a((f || (f = l(t, e.map(r), Vt)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (e = Array.from(g, El), d()) : e.slice();
  }, p.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, p.rangeRound = function(g) {
    return t = Array.from(g), n = _l, d();
  }, p.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : st, d()) : i !== st;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (s = g, p) : s;
  }, function(g, b) {
    return r = g, a = b, d();
  };
}
function Bl() {
  return Ml()(st, st);
}
function Ll(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, a = e[n], s = e[r], i;
  return s < a && (i = n, n = r, r = i, i = a, a = s, s = i), e[n] = t.floor(a), e[r] = t.ceil(s), e;
}
const Bn = /* @__PURE__ */ new Date(), Ln = /* @__PURE__ */ new Date();
function de(e, t, n, r) {
  function a(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return a.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), a.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), a.round = (s) => {
    const i = a(s), l = a.ceil(s);
    return s - i < l - s ? i : l;
  }, a.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), a.range = (s, i, l) => {
    const u = [];
    if (s = a.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return u;
    let f;
    do
      u.push(f = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (f < s && s < i);
    return u;
  }, a.filter = (s) => de((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (a.count = (s, i) => (Bn.setTime(+s), Ln.setTime(+i), e(Bn), e(Ln), Math.floor(n(Bn, Ln))), a.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? a.filter(r ? (i) => r(i) % s === 0 : (i) => a.count(0, i) % s === 0) : a)), a;
}
const Kt = de(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Kt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? de((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Kt);
Kt.range;
const Ie = 1e3, ve = Ie * 60, Re = ve * 60, He = Re * 24, Br = He * 7, vo = He * 30, In = He * 365, it = de((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCSeconds());
it.range;
const Lr = de((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie);
}, (e, t) => {
  e.setTime(+e + t * ve);
}, (e, t) => (t - e) / ve, (e) => e.getMinutes());
Lr.range;
const Il = de((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ve);
}, (e, t) => (t - e) / ve, (e) => e.getUTCMinutes());
Il.range;
const Ir = de((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie - e.getMinutes() * ve);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getHours());
Ir.range;
const Rl = de((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCHours());
Rl.range;
const Et = de(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ve) / He,
  (e) => e.getDate() - 1
);
Et.range;
const Rr = de((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / He, (e) => e.getUTCDate() - 1);
Rr.range;
const Hl = de((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / He, (e) => Math.floor(e / He));
Hl.range;
function nt(e) {
  return de((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ve) / Br);
}
const _n = nt(0), Gt = nt(1), Al = nt(2), zl = nt(3), ht = nt(4), Wl = nt(5), Ol = nt(6);
_n.range;
Gt.range;
Al.range;
zl.range;
ht.range;
Wl.range;
Ol.range;
function rt(e) {
  return de((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Br);
}
const ca = rt(0), qt = rt(1), Ul = rt(2), Yl = rt(3), pt = rt(4), Vl = rt(5), Kl = rt(6);
ca.range;
qt.range;
Ul.range;
Yl.range;
pt.range;
Vl.range;
Kl.range;
const Hr = de((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Hr.range;
const Gl = de((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Gl.range;
const Ae = de((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ae.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : de((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Ae.range;
const et = de((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
et.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : de((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
et.range;
function ql(e, t, n, r, a, s) {
  const i = [
    [it, 1, Ie],
    [it, 5, 5 * Ie],
    [it, 15, 15 * Ie],
    [it, 30, 30 * Ie],
    [s, 1, ve],
    [s, 5, 5 * ve],
    [s, 15, 15 * ve],
    [s, 30, 30 * ve],
    [a, 1, Re],
    [a, 3, 3 * Re],
    [a, 6, 6 * Re],
    [a, 12, 12 * Re],
    [r, 1, He],
    [r, 2, 2 * He],
    [n, 1, Br],
    [t, 1, vo],
    [t, 3, 3 * vo],
    [e, 1, In]
  ];
  function l(f, d, p) {
    const g = d < f;
    g && ([f, d] = [d, f]);
    const b = p && typeof p.range == "function" ? p : u(f, d, p), k = b ? b.range(f, +d + 1) : [];
    return g ? k.reverse() : k;
  }
  function u(f, d, p) {
    const g = Math.abs(d - f) / p, b = Fr(([, , C]) => C).right(i, g);
    if (b === i.length) return e.every(lo(f / In, d / In, p));
    if (b === 0) return Kt.every(Math.max(lo(f, d, p), 1));
    const [k, m] = i[g / i[b - 1][2] < i[b][2] / g ? b - 1 : b];
    return k.every(m);
  }
  return [l, u];
}
const [Xl, Zl] = ql(Ae, Hr, _n, Et, Ir, Lr);
function Rn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Hn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xt(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Jl(e) {
  var t = e.dateTime, n = e.date, r = e.time, a = e.periods, s = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, f = yt(a), d = vt(a), p = yt(s), g = vt(s), b = yt(i), k = vt(i), m = yt(l), C = vt(l), F = yt(u), N = vt(u), P = {
    a: z,
    A: Y,
    b: Z,
    B: E,
    c: null,
    d: Co,
    e: Co,
    f: Sc,
    g: Fc,
    G: Pc,
    H: xc,
    I: yc,
    j: vc,
    L: ua,
    m: kc,
    M: wc,
    p: U,
    q: W,
    Q: Eo,
    s: jo,
    S: Tc,
    u: $c,
    U: Cc,
    V: _c,
    w: Nc,
    W: Ec,
    x: null,
    X: null,
    y: jc,
    Y: Dc,
    Z: Mc,
    "%": No
  }, T = {
    a: ee,
    A: V,
    b: v,
    B: I,
    c: null,
    d: _o,
    e: _o,
    f: Rc,
    g: Gc,
    G: Xc,
    H: Bc,
    I: Lc,
    j: Ic,
    L: fa,
    m: Hc,
    M: Ac,
    p: G,
    q: S,
    Q: Eo,
    s: jo,
    S: zc,
    u: Wc,
    U: Oc,
    V: Uc,
    w: Yc,
    W: Vc,
    x: null,
    X: null,
    y: Kc,
    Y: qc,
    Z: Zc,
    "%": No
  }, R = {
    a: w,
    A: c,
    b: j,
    B: K,
    c: _,
    d: To,
    e: To,
    f: pc,
    g: wo,
    G: ko,
    H: $o,
    I: $o,
    j: uc,
    L: hc,
    m: cc,
    M: dc,
    p: y,
    q: lc,
    Q: gc,
    s: bc,
    S: fc,
    u: rc,
    U: oc,
    V: ac,
    w: nc,
    W: sc,
    x: D,
    X: h,
    y: wo,
    Y: ko,
    Z: ic,
    "%": mc
  };
  P.x = M(n, P), P.X = M(r, P), P.c = M(t, P), T.x = M(n, T), T.X = M(r, T), T.c = M(t, T);
  function M(x, L) {
    return function(H) {
      var $ = [], re = -1, q = 0, O = x.length, Q, le, ue;
      for (H instanceof Date || (H = /* @__PURE__ */ new Date(+H)); ++re < O; )
        x.charCodeAt(re) === 37 && ($.push(x.slice(q, re)), (le = So[Q = x.charAt(++re)]) != null ? Q = x.charAt(++re) : le = Q === "e" ? " " : "0", (ue = L[Q]) && (Q = ue(H, le)), $.push(Q), q = re + 1);
      return $.push(x.slice(q, re)), $.join("");
    };
  }
  function A(x, L) {
    return function(H) {
      var $ = xt(1900, void 0, 1), re = B($, x, H += "", 0), q, O;
      if (re != H.length) return null;
      if ("Q" in $) return new Date($.Q);
      if ("s" in $) return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (L && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53) return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (q = Hn(xt($.y, 0, 1)), O = q.getUTCDay(), q = O > 4 || O === 0 ? qt.ceil(q) : qt(q), q = Rr.offset(q, ($.V - 1) * 7), $.y = q.getUTCFullYear(), $.m = q.getUTCMonth(), $.d = q.getUTCDate() + ($.w + 6) % 7) : (q = Rn(xt($.y, 0, 1)), O = q.getDay(), q = O > 4 || O === 0 ? Gt.ceil(q) : Gt(q), q = Et.offset(q, ($.V - 1) * 7), $.y = q.getFullYear(), $.m = q.getMonth(), $.d = q.getDate() + ($.w + 6) % 7);
      } else ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), O = "Z" in $ ? Hn(xt($.y, 0, 1)).getUTCDay() : Rn(xt($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (O + 5) % 7 : $.w + $.U * 7 - (O + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, Hn($)) : Rn($);
    };
  }
  function B(x, L, H, $) {
    for (var re = 0, q = L.length, O = H.length, Q, le; re < q; ) {
      if ($ >= O) return -1;
      if (Q = L.charCodeAt(re++), Q === 37) {
        if (Q = L.charAt(re++), le = R[Q in So ? L.charAt(re++) : Q], !le || ($ = le(x, H, $)) < 0) return -1;
      } else if (Q != H.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function y(x, L, H) {
    var $ = f.exec(L.slice(H));
    return $ ? (x.p = d.get($[0].toLowerCase()), H + $[0].length) : -1;
  }
  function w(x, L, H) {
    var $ = b.exec(L.slice(H));
    return $ ? (x.w = k.get($[0].toLowerCase()), H + $[0].length) : -1;
  }
  function c(x, L, H) {
    var $ = p.exec(L.slice(H));
    return $ ? (x.w = g.get($[0].toLowerCase()), H + $[0].length) : -1;
  }
  function j(x, L, H) {
    var $ = F.exec(L.slice(H));
    return $ ? (x.m = N.get($[0].toLowerCase()), H + $[0].length) : -1;
  }
  function K(x, L, H) {
    var $ = m.exec(L.slice(H));
    return $ ? (x.m = C.get($[0].toLowerCase()), H + $[0].length) : -1;
  }
  function _(x, L, H) {
    return B(x, t, L, H);
  }
  function D(x, L, H) {
    return B(x, n, L, H);
  }
  function h(x, L, H) {
    return B(x, r, L, H);
  }
  function z(x) {
    return i[x.getDay()];
  }
  function Y(x) {
    return s[x.getDay()];
  }
  function Z(x) {
    return u[x.getMonth()];
  }
  function E(x) {
    return l[x.getMonth()];
  }
  function U(x) {
    return a[+(x.getHours() >= 12)];
  }
  function W(x) {
    return 1 + ~~(x.getMonth() / 3);
  }
  function ee(x) {
    return i[x.getUTCDay()];
  }
  function V(x) {
    return s[x.getUTCDay()];
  }
  function v(x) {
    return u[x.getUTCMonth()];
  }
  function I(x) {
    return l[x.getUTCMonth()];
  }
  function G(x) {
    return a[+(x.getUTCHours() >= 12)];
  }
  function S(x) {
    return 1 + ~~(x.getUTCMonth() / 3);
  }
  return {
    format: function(x) {
      var L = M(x += "", P);
      return L.toString = function() {
        return x;
      }, L;
    },
    parse: function(x) {
      var L = A(x += "", !1);
      return L.toString = function() {
        return x;
      }, L;
    },
    utcFormat: function(x) {
      var L = M(x += "", T);
      return L.toString = function() {
        return x;
      }, L;
    },
    utcParse: function(x) {
      var L = A(x += "", !0);
      return L.toString = function() {
        return x;
      }, L;
    }
  };
}
var So = { "-": "", _: " ", 0: "0" }, fe = /^\s*\d+/, Ql = /^%/, ec = /[\\^$*+?|[\]().{}]/g;
function oe(e, t, n) {
  var r = e < 0 ? "-" : "", a = (r ? -e : e) + "", s = a.length;
  return r + (s < n ? new Array(n - s + 1).join(t) + a : a);
}
function tc(e) {
  return e.replace(ec, "\\$&");
}
function yt(e) {
  return new RegExp("^(?:" + e.map(tc).join("|") + ")", "i");
}
function vt(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function nc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function rc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function oc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function ac(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function sc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function ko(e, t, n) {
  var r = fe.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function wo(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function ic(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function lc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function cc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function To(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function uc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function $o(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function dc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function fc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function hc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function pc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function mc(e, t, n) {
  var r = Ql.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function gc(e, t, n) {
  var r = fe.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function bc(e, t, n) {
  var r = fe.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Co(e, t) {
  return oe(e.getDate(), t, 2);
}
function xc(e, t) {
  return oe(e.getHours(), t, 2);
}
function yc(e, t) {
  return oe(e.getHours() % 12 || 12, t, 2);
}
function vc(e, t) {
  return oe(1 + Et.count(Ae(e), e), t, 3);
}
function ua(e, t) {
  return oe(e.getMilliseconds(), t, 3);
}
function Sc(e, t) {
  return ua(e, t) + "000";
}
function kc(e, t) {
  return oe(e.getMonth() + 1, t, 2);
}
function wc(e, t) {
  return oe(e.getMinutes(), t, 2);
}
function Tc(e, t) {
  return oe(e.getSeconds(), t, 2);
}
function $c(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Cc(e, t) {
  return oe(_n.count(Ae(e) - 1, e), t, 2);
}
function da(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function _c(e, t) {
  return e = da(e), oe(ht.count(Ae(e), e) + (Ae(e).getDay() === 4), t, 2);
}
function Nc(e) {
  return e.getDay();
}
function Ec(e, t) {
  return oe(Gt.count(Ae(e) - 1, e), t, 2);
}
function jc(e, t) {
  return oe(e.getFullYear() % 100, t, 2);
}
function Fc(e, t) {
  return e = da(e), oe(e.getFullYear() % 100, t, 2);
}
function Dc(e, t) {
  return oe(e.getFullYear() % 1e4, t, 4);
}
function Pc(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? ht(e) : ht.ceil(e), oe(e.getFullYear() % 1e4, t, 4);
}
function Mc(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + oe(t / 60 | 0, "0", 2) + oe(t % 60, "0", 2);
}
function _o(e, t) {
  return oe(e.getUTCDate(), t, 2);
}
function Bc(e, t) {
  return oe(e.getUTCHours(), t, 2);
}
function Lc(e, t) {
  return oe(e.getUTCHours() % 12 || 12, t, 2);
}
function Ic(e, t) {
  return oe(1 + Rr.count(et(e), e), t, 3);
}
function fa(e, t) {
  return oe(e.getUTCMilliseconds(), t, 3);
}
function Rc(e, t) {
  return fa(e, t) + "000";
}
function Hc(e, t) {
  return oe(e.getUTCMonth() + 1, t, 2);
}
function Ac(e, t) {
  return oe(e.getUTCMinutes(), t, 2);
}
function zc(e, t) {
  return oe(e.getUTCSeconds(), t, 2);
}
function Wc(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Oc(e, t) {
  return oe(ca.count(et(e) - 1, e), t, 2);
}
function ha(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? pt(e) : pt.ceil(e);
}
function Uc(e, t) {
  return e = ha(e), oe(pt.count(et(e), e) + (et(e).getUTCDay() === 4), t, 2);
}
function Yc(e) {
  return e.getUTCDay();
}
function Vc(e, t) {
  return oe(qt.count(et(e) - 1, e), t, 2);
}
function Kc(e, t) {
  return oe(e.getUTCFullYear() % 100, t, 2);
}
function Gc(e, t) {
  return e = ha(e), oe(e.getUTCFullYear() % 100, t, 2);
}
function qc(e, t) {
  return oe(e.getUTCFullYear() % 1e4, t, 4);
}
function Xc(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? pt(e) : pt.ceil(e), oe(e.getUTCFullYear() % 1e4, t, 4);
}
function Zc() {
  return "+0000";
}
function No() {
  return "%";
}
function Eo(e) {
  return +e;
}
function jo(e) {
  return Math.floor(+e / 1e3);
}
var ot, pa;
Jc({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Jc(e) {
  return ot = Jl(e), pa = ot.format, ot.parse, ot.utcFormat, ot.utcParse, ot;
}
function Qc(e) {
  return new Date(e);
}
function eu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ma(e, t, n, r, a, s, i, l, u, f) {
  var d = Bl(), p = d.invert, g = d.domain, b = f(".%L"), k = f(":%S"), m = f("%I:%M"), C = f("%I %p"), F = f("%a %d"), N = f("%b %d"), P = f("%B"), T = f("%Y");
  function R(M) {
    return (u(M) < M ? b : l(M) < M ? k : i(M) < M ? m : s(M) < M ? C : r(M) < M ? a(M) < M ? F : N : n(M) < M ? P : T)(M);
  }
  return d.invert = function(M) {
    return new Date(p(M));
  }, d.domain = function(M) {
    return arguments.length ? g(Array.from(M, eu)) : g().map(Qc);
  }, d.ticks = function(M) {
    var A = g();
    return e(A[0], A[A.length - 1], M ?? 10);
  }, d.tickFormat = function(M, A) {
    return A == null ? R : f(A);
  }, d.nice = function(M) {
    var A = g();
    return (!M || typeof M.range != "function") && (M = t(A[0], A[A.length - 1], M ?? 10)), M ? g(Ll(A, M)) : d;
  }, d.copy = function() {
    return Pl(d, ma(e, t, n, r, a, s, i, l, u, f));
  }, d;
}
function tu() {
  return rl.apply(ma(Xl, Zl, Ae, Hr, _n, Et, Ir, Lr, it, pa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function nu({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: r,
  isSelected: a = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const f = te(null), [d, p] = ne(!1), [g, b] = ne(!1), k = t(e.start), m = t(e.end), C = Math.max(m - k, 20), F = () => {
    if (e.color) return e.color;
    switch (e.priority) {
      case "high":
        return "#d5281b";
      // NHS Red
      case "medium":
        return "#005eb8";
      // NHS Blue  
      case "low":
        return "#007f3b";
      // NHS Green
      default:
        return "#005eb8";
    }
  }, N = e.progress ? C * e.progress / 100 : 0, P = () => {
    n?.(e);
  }, T = () => {
    r?.(e);
  }, R = (j) => {
    j.key === "Enter" ? (j.preventDefault(), P()) : j.key === " " && (j.preventDefault(), T());
  }, M = () => {
    p(!0);
  }, A = () => {
    p(!1);
  }, B = () => {
    b(!0), l?.();
  }, y = () => {
    b(!1);
  }, w = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (g || a) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    a && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), c = {
    "--task-left": `${k}px`,
    "--task-width": `${C}px`,
    "--task-color": F(),
    left: `${k}px`,
    width: `${C}px`,
    backgroundColor: F()
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: f,
      "data-task-index": s,
      className: w,
      style: c,
      onClick: P,
      onDoubleClick: T,
      onKeyDown: R,
      onMouseDown: M,
      onMouseUp: A,
      onFocus: B,
      onBlur: y,
      "aria-label": u || `${a ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ o.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${N}px` }
          }
        ),
        /* @__PURE__ */ o.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function ru({ viewStart: e, viewEnd: t, dateCount: n }) {
  const r = [];
  for (let b = e.getTime(); b <= t.getTime(); b += 864e5)
    r.push(new Date(b));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = ne(-1), u = te(null), f = (b) => {
    if (b.key === "ArrowLeft") {
      b.preventDefault();
      const k = Math.max(0, i === -1 ? 0 : i - 1);
      l(k), g(k);
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const k = Math.min(r.length - 1, i === -1 ? 0 : i + 1);
      l(k), g(k);
    } else if (b.key === "ArrowDown") {
      b.preventDefault();
      const k = document.querySelector(".gantt-row .timeline-container");
      k && k.focus();
    } else if (b.key === "Home")
      b.preventDefault(), l(0), g(0);
    else if (b.key === "End") {
      b.preventDefault();
      const k = r.length - 1;
      l(k), g(k);
    }
  }, d = (b) => {
    if (b.key === "ArrowDown") {
      b.preventDefault();
      const k = document.querySelector(".gantt-row .resource-label");
      k && k.focus();
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const k = u.current;
      k && k.focus();
    }
  }, p = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (b) => {
    const k = u.current?.querySelector(`[data-date-index="${b}"]`);
    k && k.focus();
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "gantt-header",
      role: "row",
      "aria-rowindex": 1,
      children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "header-resource",
            role: "columnheader",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": "Resource column header",
            onKeyDown: d,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: u,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: f,
            onFocus: p,
            children: r.map((b, k) => {
              const m = b.getTime() === s.getTime(), C = i === k;
              return /* @__PURE__ */ o.jsx(
                "div",
                {
                  "data-date-index": k,
                  className: `date-column ${m ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
                  role: "button",
                  "aria-label": `${b.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(k),
                  onKeyDown: f,
                  children: b.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                k
              );
            })
          }
        )
      ]
    }
  );
}
function ou({ resource: e, tasks: t, scale: n, onTaskClick: r, onTaskDoubleClick: a, rowIndex: s, dateCount: i }) {
  const [l, u] = ne(!1), [f, d] = ne(-1), p = te(null);
  ae(() => {
    l && f >= 0 && t.length > 0 && setTimeout(() => {
      p.current?.querySelector(`[data-task-index="${f}"]`)?.focus();
    }, 0);
  }, [l, f, t.length]);
  const g = (m) => {
    if (m.key === "ArrowLeft" && m.shiftKey) {
      m.preventDefault(), m.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (m.key === "ArrowRight" && m.shiftKey) {
      m.preventDefault(), m.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (m.key) {
        case "ArrowUp":
          m.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          m.preventDefault(), p.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (m.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const C = Math.max(0, f - 1);
        d(C), p.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const N = Math.min(t.length - 1, f + 1);
        d(N), p.current?.querySelector(`[data-task-index="${N}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), f >= 0 && r?.(t[f]);
        break;
      case " ":
        m.preventDefault(), f >= 0 && a?.(t[f]);
        break;
      case "Escape":
        m.preventDefault(), u(!1), d(-1), p.current?.focus();
        break;
    }
  }, b = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault(), p.current?.focus();
        break;
    }
  }, k = (m) => {
    l && d(m);
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": s + 2,
      children: [
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "resource-label",
            role: "gridcell",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": `Resource: ${e.label}`,
            onKeyDown: b,
            children: e.label
          }
        ),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: p,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: g,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((m, C) => /* @__PURE__ */ o.jsx(
              nu,
              {
                task: m,
                scale: n,
                onTaskClick: r,
                onTaskDoubleClick: a,
                isSelected: l && f === C,
                taskIndex: C,
                tabIndex: l && f === C ? 0 : -1,
                onFocus: () => k(C)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function bp({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: r,
  onTaskClick: a,
  onTaskDoubleClick: s
}) {
  const i = te(null), [l, u] = ne(800), f = se(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), d = se(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : r;
    const m = new Date(r);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [r]), p = se(() => Math.ceil((d.getTime() - f.getTime()) / 864e5) + 1, [f, d]);
  ae(() => {
    if (!i.current) return;
    const m = new ResizeObserver((C) => {
      const F = C[0];
      F && u(Math.max(F.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const g = se(
    () => tu().domain([f, d]).range([0, l]),
    [f, d, l]
  ), b = se(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const F = m.get(C.resourceId) || [];
      F.push(C), m.set(C.resourceId, F);
    }), m;
  }, [t]), k = (m) => {
    if (m.target === m.currentTarget)
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
          break;
        case "Home":
          m.preventDefault();
          const F = i.current?.querySelector(".header-resource");
          F && F.focus();
          break;
      }
  };
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: "gantt-chart",
      role: "grid",
      "aria-label": "Gantt Chart showing resource scheduling and task timelines",
      "aria-rowcount": e.length + 1,
      "aria-colcount": p + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: k,
      children: [
        /* @__PURE__ */ o.jsx(ru, { viewStart: f, viewEnd: d, dateCount: p }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (m) => {
              m.key === "ArrowLeft" && m.altKey ? (m.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : m.key === "ArrowRight" && m.altKey ? (m.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : m.key === "ArrowUp" && m.altKey ? (m.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : m.key === "ArrowDown" && m.altKey && (m.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((m, C) => /* @__PURE__ */ o.jsx(
              ou,
              {
                resource: m,
                tasks: b.get(m.id) || [],
                scale: g,
                onTaskClick: a,
                onTaskDoubleClick: s,
                rowIndex: C,
                dateCount: p
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
const xp = ({
  items: e = [],
  classes: t,
  labelText: n = "Breadcrumb",
  href: r,
  text: a,
  reverse: s = !1,
  attributes: i = {}
}) => {
  const l = () => r && a ? [{ href: r, text: a }] : e.filter((g) => g.href), u = () => {
    const g = l();
    if (g.length > 0) {
      const b = g[g.length - 1];
      return { href: b.href, text: b.text };
    }
    return { text: "Home" };
  }, f = l(), d = u(), p = X(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": s
    },
    t
  );
  return /* @__PURE__ */ o.jsxs("nav", { className: p, "aria-label": n, ...i, children: [
    /* @__PURE__ */ o.jsx("ol", { className: "nhsuk-breadcrumb__list", children: f.map((g, b) => /* @__PURE__ */ o.jsx("li", { className: "nhsuk-breadcrumb__item", children: /* @__PURE__ */ o.jsx(
      "a",
      {
        className: "nhsuk-breadcrumb__link",
        href: g.href,
        ...g.attributes || {},
        children: g.text
      }
    ) }, b)) }),
    d.href && /* @__PURE__ */ o.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ o.jsxs(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: d.href,
        ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
        children: [
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
          d.text
        ]
      }
    ) })
  ] });
}, yp = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: r = {}
}) => {
  const [a, s] = ne(!1);
  ae(() => {
    s(!0);
  }, []), ae(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (u) => {
      const f = u.target, d = f.getAttribute("href");
      if (d && d.startsWith("#")) {
        const p = document.querySelector(d);
        if (p) {
          p.hasAttribute("tabindex") || p.setAttribute("tabindex", "-1"), p.focus(), p.classList.add("nhsuk-skip-link-focused-element");
          const g = window.setTimeout(() => {
            p.classList.remove("nhsuk-skip-link-focused-element"), p.getAttribute("tabindex") === "-1" && p.removeAttribute("tabindex");
          }, 3e3);
          f.__nhsSkipLinkTimeout = g;
        }
      }
    };
    try {
      const u = document.querySelectorAll(".nhsuk-skip-link");
      return u.forEach((f) => {
        f.addEventListener("click", l);
      }), () => {
        try {
          u.forEach((f) => {
            f.removeEventListener("click", l);
            const d = f.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
          });
        } catch (f) {
          console.warn("SkipLink cleanup error:", f);
        }
      };
    } catch (u) {
      return console.warn("SkipLink initialization error:", u), () => {
      };
    }
  }, [a]);
  const i = X("nhsuk-skip-link", n);
  return /* @__PURE__ */ o.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": a ? "true" : "false",
      ...r,
      children: e
    }
  );
}, vp = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: r,
  classes: a,
  attributes: s = {}
}) => {
  const i = X("nhsuk-pagination", a);
  return /* @__PURE__ */ o.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...s,
      children: /* @__PURE__ */ o.jsxs("ul", { className: "nhsuk-list nhsuk-pagination__list", children: [
        e && t && /* @__PURE__ */ o.jsx("li", { className: "nhsuk-pagination-item--previous", children: /* @__PURE__ */ o.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: e, children: [
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-pagination__title", children: "Previous" }),
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-pagination__page", children: t }),
          /* @__PURE__ */ o.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-left",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ o.jsx("path", { d: "M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" })
            }
          )
        ] }) }),
        n && r && /* @__PURE__ */ o.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ o.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: n, children: [
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-pagination__page", children: r }),
          /* @__PURE__ */ o.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-right",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ o.jsx("path", { d: "M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" })
            }
          )
        ] }) })
      ] })
    }
  );
}, Sp = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: r = {}
}) => {
  const a = X("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ o.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...i.attributes || {},
      children: /* @__PURE__ */ o.jsx("span", { className: "nhsuk-contents-list__current", children: i.text })
    },
    l
  ) : /* @__PURE__ */ o.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      children: /* @__PURE__ */ o.jsx(
        "a",
        {
          className: "nhsuk-contents-list__link",
          href: i.href,
          ...i.attributes || {},
          children: i.text
        }
      )
    },
    l
  );
  return /* @__PURE__ */ o.jsxs(
    "nav",
    {
      className: a,
      role: "navigation",
      "aria-label": n,
      ...r,
      children: [
        /* @__PURE__ */ o.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ o.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, kp = ({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: r = 2,
  headingClasses: a,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: f,
  className: d,
  children: p,
  "data-testid": g,
  id: b,
  "aria-label": k,
  "aria-labelledby": m,
  "aria-describedby": C
}) => {
  const F = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d
  ].filter(Boolean).join(" "), N = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), P = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    a
  ].filter(Boolean).join(" "), T = () => {
    if (n)
      return /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const A = () => l && e !== "feature" ? /* @__PURE__ */ o.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ o.jsx(
      ft,
      {
        level: r,
        className: P,
        children: A()
      }
    );
  }, R = () => p || (i ? /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ o.jsx("p", { className: "nhsuk-card__description", children: s }) : null), M = () => e !== "primary" ? null : /* @__PURE__ */ o.jsxs(
    "svg",
    {
      className: "nhsuk-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "27",
      height: "27",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ o.jsx("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
        /* @__PURE__ */ o.jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
          /* @__PURE__ */ o.jsx("path", { d: "M15.438 13l-3.771 3.771" }),
          /* @__PURE__ */ o.jsx("path", { d: "M11.667 9.229L15.438 13" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: F,
      "data-testid": g,
      id: b,
      "aria-label": k,
      "aria-labelledby": m,
      "aria-describedby": C,
      children: [
        u && /* @__PURE__ */ o.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: f || ""
          }
        ),
        /* @__PURE__ */ o.jsxs("div", { className: N, children: [
          T(),
          R(),
          M()
        ] })
      ]
    }
  );
}, wp = ({
  className: e,
  children: t,
  "data-testid": n,
  id: r
}) => {
  const a = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "ul",
    {
      className: a,
      "data-testid": n,
      id: r,
      children: t
    }
  );
}, Tp = ({
  className: e,
  children: t,
  "data-testid": n
}) => {
  const r = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "li",
    {
      className: r,
      "data-testid": n,
      children: t
    }
  );
}, $p = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: r = 3,
  headingClasses: a,
  description: s,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": f,
  id: d,
  "aria-label": p,
  "aria-labelledby": g,
  "aria-describedby": b
}) => {
  const k = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    a
  ].filter(Boolean).join(" "), C = () => {
    if (n)
      return /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], P = /* @__PURE__ */ o.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ o.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        N,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ o.jsx(
      ft,
      {
        level: r,
        className: m,
        children: P
      }
    );
  }, F = () => u || (i ? /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ o.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: k,
      "data-testid": f,
      id: d,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-describedby": b,
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ o.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "nhsuk-care-card__content", children: F() })
      ]
    }
  );
}, au = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: r,
  headingLevel: a = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const f = X(
    "nhsuk-panel",
    t
  ), d = () => !n && !r && !l ? null : r ? /* @__PURE__ */ o.jsx(
    ft,
    {
      level: a,
      className: "nhsuk-panel__heading",
      html: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ o.jsx(
    ft,
    {
      level: a,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, p = () => l ? /* @__PURE__ */ o.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ o.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ o.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ o.jsxs("div", { className: f, id: e, ...u, children: [
    d(),
    p()
  ] });
}, Cp = ({
  text: e,
  html: t,
  children: n,
  className: r,
  ...a
}) => {
  const s = X("nhsuk-inset-text", r), i = () => n || (t ? /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ o.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ o.jsx("div", { className: s, ...a, children: i() });
}, _p = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...r
}) => {
  const a = X(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ o.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ o.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, f) => /* @__PURE__ */ o.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ o.jsxs(
        "a",
        {
          href: u.href,
          className: "nhsuk-link",
          ...u.attributes,
          children: [
            s(u),
            u.visuallyHiddenText && /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    f
  )) }) });
  return /* @__PURE__ */ o.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ o.jsx("dl", { className: a, ...r, children: e.map((l, u) => /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ o.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ o.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, Np = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: r,
  firstCellIsHeader: a = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: f,
  tableClasses: d,
  classes: p,
  attributes: g,
  "data-testid": b
}) => {
  const k = `nhsuk-table__caption ${r ? `nhsuk-table__caption--${r}` : ""}`.trim(), m = X(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), C = X(p), F = (T, R) => {
    const M = X("nhsuk-table__header", {
      [`nhsuk-table__header--${T.format}`]: T.format
    }, T.classes), A = {
      scope: "col",
      ...T.colspan && { colSpan: T.colspan },
      ...T.rowspan && { rowSpan: T.rowspan },
      ...s && { role: "columnheader" },
      ...T.attributes
    };
    return /* @__PURE__ */ o.jsx("th", { className: M, ...A, children: T.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text }, R);
  }, N = (T, R, M) => {
    const A = a && M, B = X(
      A ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${A ? "header" : "cell"}--${T.format}`]: T.format
      },
      T.classes
    ), y = {
      ...A && { scope: "row" },
      ...T.colspan && { colSpan: T.colspan },
      ...T.rowspan && { rowSpan: T.rowspan },
      ...s && {
        role: A ? "rowheader" : "cell",
        ...T.header && { "data-label": T.header }
      },
      ...T.attributes
    }, w = /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      s && T.header && /* @__PURE__ */ o.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        T.header,
        " "
      ] }),
      T.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text
    ] }), c = A ? "th" : "td";
    return /* @__PURE__ */ o.jsx(c, { className: B, ...y, children: w }, R);
  }, P = () => /* @__PURE__ */ o.jsxs(
    "table",
    {
      className: m,
      ...s && { role: "table" },
      ...g,
      ...b && { "data-testid": b },
      children: [
        n && /* @__PURE__ */ o.jsx("caption", { className: k, children: n }),
        t && t.length > 0 && /* @__PURE__ */ o.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ o.jsx("tr", { ...s && { role: "row" }, children: t.map((T, R) => F(T, R)) })
          }
        ),
        /* @__PURE__ */ o.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((T, R) => /* @__PURE__ */ o.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: T.map(
              (M, A) => N(M, A, A === 0)
            )
          },
          R
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ o.jsxs(au, { className: f, children: [
    i && /* @__PURE__ */ o.jsx(ft, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    P()
  ] }) : C ? /* @__PURE__ */ o.jsx("div", { className: C, children: P() }) : P();
}, Ep = tt(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: r,
  onTabFocus: a,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: f,
  "data-testid": d,
  ...p
}, g) => {
  const b = n !== void 0, [k, m] = ne(() => t || e[0]?.id || ""), C = b ? n : k, F = te(null), N = te(/* @__PURE__ */ new Map()), P = J((w) => {
    b || m(w), r?.(w);
  }, [b, r]), T = J((w) => {
    a?.(w), l && P(w);
  }, [a, l, P]), R = J((w, c) => {
    const j = e.filter((D) => !D.disabled).map((D) => D.id), K = j.indexOf(c);
    let _ = null;
    switch (w.key) {
      case "ArrowLeft":
        _ = K > 0 ? K - 1 : j.length - 1;
        break;
      case "ArrowRight":
        _ = K < j.length - 1 ? K + 1 : 0;
        break;
      case "Home":
        _ = 0;
        break;
      case "End":
        _ = j.length - 1;
        break;
      case "Escape":
        w.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (_ !== null) {
      w.preventDefault();
      const D = j[_], h = N.current.get(D);
      h && (h.focus(), T(D));
    }
  }, [e, T, i]), M = J((w, c) => {
    c ? N.current.set(w, c) : N.current.delete(w);
  }, []), A = J((w) => {
    const c = N.current.get(w);
    c && c.focus();
  }, []);
  Po(g, () => ({
    focusTab: A,
    getActiveTab: () => C,
    getTabListElement: () => F.current
  }), [A, C]);
  const B = J((w) => {
    const c = w.relatedTarget;
    F.current?.contains(c) || s?.();
  }, [s]), y = X("nhsuk-tabs", u);
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: y,
      id: f,
      "data-testid": d,
      ...p,
      children: [
        /* @__PURE__ */ o.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ o.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: F,
            children: /* @__PURE__ */ o.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: B,
                children: e.map((w) => {
                  const c = w.id === C, j = w.disabled, K = X("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": c,
                    "nhsuk-tabs__list-item--disabled": j
                  });
                  return /* @__PURE__ */ o.jsx("li", { className: K, children: /* @__PURE__ */ o.jsx(
                    "button",
                    {
                      ref: (_) => M(w.id, _),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": c,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: c ? 0 : -1,
                      disabled: j,
                      onClick: () => !j && P(w.id),
                      onKeyDown: (_) => !j && R(_, w.id),
                      onFocus: () => !j && T(w.id),
                      ...w.attributes,
                      children: w.label
                    }
                  ) }, w.id);
                })
              }
            )
          }
        ),
        e.map((w) => {
          const c = w.id === C;
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${w.id}-tab`,
              id: `${w.id}-panel`,
              hidden: !c,
              children: w.content
            },
            w.id
          );
        })
      ]
    }
  );
}), su = tt(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: r,
    open: a = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, f) => {
    const d = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ o.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ o.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : r ? g = /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n && (g = n), /* @__PURE__ */ o.jsxs(
      "details",
      {
        ref: f,
        id: i,
        className: d,
        open: a,
        ...u,
        children: [
          /* @__PURE__ */ o.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ o.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
su.displayName = "Details";
const iu = tt(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: r = !1,
    headingLevel: a = 3,
    className: s,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    s && u.push(s);
    const f = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ o.jsxs(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__cross",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: [
          /* @__PURE__ */ o.jsx(
            "path",
            {
              d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "path",
            {
              d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ o.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__tick",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: /* @__PURE__ */ o.jsx(
          "path",
          {
            strokeWidth: "4",
            strokeLinecap: "round",
            d: "M18.4 7.8l-8.5 8.4L5.6 12",
            stroke: "#007f3b"
          }
        )
      }
    ), p = (b) => t === "cross" && !r ? `do not ${b}` : b, g = () => /* @__PURE__ */ o.jsx(
      ft,
      {
        level: a,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        ref: l,
        className: u.join(" "),
        ...i,
        children: [
          g(),
          /* @__PURE__ */ o.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ o.jsx("ul", { className: f.join(" "), role: "list", children: n.map((b, k) => /* @__PURE__ */ o.jsxs("li", { children: [
            d(),
            p(b.item)
          ] }, k)) }) })
        ]
      }
    );
  }
);
iu.displayName = "DoDontList";
const lu = tt(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: r,
    open: a = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, f) => {
    const d = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ o.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ o.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : r ? g = /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n && (g = n), /* @__PURE__ */ o.jsxs(
      "details",
      {
        ref: f,
        id: i,
        className: d,
        open: a,
        ...u,
        children: [
          /* @__PURE__ */ o.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ o.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
lu.displayName = "Expander";
const cu = tt(
  ({ items: e, idPrefix: t = "task-list", className: n, ...r }, a) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const f = u + 1, d = `${t}-${f}-hint`, p = `${t}-${f}-status`, g = !!l.href, b = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), k = [
        l.hint && d,
        p
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ o.jsx(
        uu,
        {
          item: l,
          itemClasses: b,
          hasLink: g,
          hintId: d,
          statusId: p,
          ariaDescribedBy: k
        },
        u
      );
    };
    return /* @__PURE__ */ o.jsx(
      "ul",
      {
        ref: a,
        className: s,
        ...r,
        children: e.map(i)
      }
    );
  }
), uu = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: r,
  statusId: a,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const f = e.title.html ? /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ o.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": s,
        children: f
      }
    ) : /* @__PURE__ */ o.jsx("div", { className: e.title.classes || "", children: f });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ o.jsx(
    "div",
    {
      id: r,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ o.jsx("div", { id: r, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const f = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ o.jsx(_r, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ o.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ o.jsx("div", { className: f, id: a, children: d });
  };
  return /* @__PURE__ */ o.jsxs("li", { className: t, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
cu.displayName = "TaskList";
const jp = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: r,
  children: a,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), u = () => a || (r ? /* @__PURE__ */ o.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ o.jsx("p", { children: n }) : null), f = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: f,
      ...i,
      children: [
        Do(
          d,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
            e,
            /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ o.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        u()
      ]
    }
  );
}, Fp = ({
  src: e,
  alt: t,
  caption: n,
  sizes: r,
  srcset: a,
  className: s,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsxs(
    "figure",
    {
      className: l,
      ...i,
      children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src: e,
            alt: t,
            ...r && a ? { sizes: r, srcSet: a } : {}
          }
        ),
        n && /* @__PURE__ */ o.jsx(
          "figcaption",
          {
            className: "nhsuk-image__caption",
            dangerouslySetInnerHTML: { __html: n }
          }
        )
      ]
    }
  );
}, du = pe.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: r,
    selectedRowIndex: a,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: f,
    ariaDescribedby: d,
    className: p,
    tableClassName: g,
    bordered: b = !1,
    striped: k = !1,
    responsive: m = !1,
    tableType: C = "default"
  }, F) => {
    const N = te(null), P = te(null), T = te(null);
    pe.useImperativeHandle(F, () => N.current, []);
    const [R, M] = ne(0), [A, B] = ne(0), [y, w] = ne("headers"), [c, j] = ne("browse"), K = t.length, _ = e.length, D = se(() => !n || n.length === 0 ? e : [...e].sort((W, ee) => {
      for (const { key: V, direction: v } of n) {
        const I = W[V], G = ee[V];
        if (I == null && G == null) continue;
        if (I == null) return 1;
        if (G == null) return -1;
        let S = 0;
        if (typeof I == "number" && typeof G == "number" ? S = I - G : S = String(I).localeCompare(String(G)), S !== 0)
          return v === "asc" ? S : -S;
      }
      return 0;
    }), [e, n]), h = J((W, ee) => {
      setTimeout(() => {
        const V = N.current?.querySelector(
          `tbody tr:nth-child(${W + 1}) td:nth-child(${ee + 1})`
        );
        V && (V.focus(), typeof V.scrollIntoView == "function" && V.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), z = J((W) => {
      setTimeout(() => {
        const ee = N.current?.querySelector(`th:nth-child(${W + 1})`);
        ee && (ee.focus(), typeof ee.scrollIntoView == "function" && ee.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Y = J((W) => {
      r?.(W);
    }, [r]), Z = J((W) => {
      s?.(W);
    }, [s]), E = J((W) => {
      const { key: ee } = W;
      switch (ee) {
        case "Enter":
          if (W.preventDefault(), y === "headers" && c === "browse")
            j("navigate"), z(A);
          else if (y === "headers" && c === "navigate") {
            const V = t[A];
            V && Y(V.key);
          } else y === "cells" && c === "browse" ? (j("navigate"), h(R, A)) : y === "cells" && c === "navigate" && Z(R);
          break;
        case "Escape":
          W.preventDefault(), (y === "headers" && c === "navigate" || y === "cells" && c === "navigate") && j("browse");
          break;
        case "ArrowLeft":
          if (W.preventDefault(), c === "navigate" || c === "browse" && y === "headers") {
            if (y === "headers") {
              const V = Math.max(0, A - 1);
              B(V), z(V);
            } else if (y === "cells") {
              const V = Math.max(0, A - 1);
              B(V), h(R, V);
            }
          }
          break;
        case "ArrowRight":
          if (W.preventDefault(), c === "navigate" || c === "browse" && y === "headers") {
            if (y === "headers") {
              const V = Math.min(K - 1, A + 1);
              B(V), z(V);
            } else if (y === "cells") {
              const V = Math.min(K - 1, A + 1);
              B(V), h(R, V);
            }
          }
          break;
        case "ArrowUp":
          if (W.preventDefault(), y === "cells") {
            if (c === "browse") {
              const V = Math.max(0, R - 1);
              M(V), h(V, 0), B(0);
            } else if (c === "navigate")
              if (R > 0) {
                const V = R - 1;
                M(V), h(V, A);
              } else
                w("headers"), j("browse"), z(A);
          }
          break;
        case "ArrowDown":
          if (W.preventDefault(), y === "headers" && c === "browse")
            w("cells"), M(0), B(0), h(0, 0);
          else if (y === "cells") {
            const V = _ - 1;
            if (c === "browse") {
              const v = Math.min(V, R + 1);
              M(v), h(v, 0), B(0);
            } else if (c === "navigate" && R < V) {
              const v = R + 1;
              M(v), h(v, A);
            }
          }
          break;
        case "Home":
          W.preventDefault(), y === "headers" ? (B(0), z(0)) : y === "cells" && (W.ctrlKey ? (M(0), B(0), h(0, 0)) : (B(0), h(R, 0)));
          break;
        case "End":
          if (W.preventDefault(), y === "headers") {
            const V = K - 1;
            B(V), z(V);
          } else if (y === "cells")
            if (W.ctrlKey) {
              const V = _ - 1, v = K - 1;
              M(V), B(v), h(V, v);
            } else {
              const V = K - 1;
              B(V), h(R, V);
            }
          break;
        case " ":
          if (W.preventDefault(), y === "headers" && c === "navigate") {
            const V = t[A];
            V && Y(V.key);
          } else y === "cells" && c === "navigate" && Z(R);
          break;
      }
    }, [
      y,
      c,
      A,
      R,
      K,
      _,
      t,
      h,
      z,
      Y,
      Z
    ]);
    ae(() => {
      const W = N.current;
      if (W)
        return W.addEventListener("keydown", E), () => W.removeEventListener("keydown", E);
    }, [E]);
    const U = X(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": k,
        "nhsuk-table--compact": C === "compact"
      },
      p
    );
    return /* @__PURE__ */ o.jsxs(
      "table",
      {
        ref: N,
        className: U,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": f,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ o.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ o.jsx("tr", { ref: P, role: "row", children: t.map((W, ee) => {
            const V = n?.find((G) => G.key === W.key), v = !!V, I = y === "headers" && A === ee;
            return /* @__PURE__ */ o.jsx(
              "th",
              {
                className: X("sortable-header", {
                  "sortable-header--focused": I
                }),
                role: "columnheader",
                tabIndex: I ? 0 : -1,
                onClick: () => Y(W.key),
                onKeyDown: (G) => {
                  (G.key === "Enter" || G.key === " ") && (G.preventDefault(), Y(W.key));
                },
                "aria-sort": v ? V?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ o.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ o.jsx("span", { className: "header-label", children: W.label }),
                  v && /* @__PURE__ */ o.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ o.jsx("span", { className: "sort-priority", children: n.findIndex((G) => G.key === W.key) + 1 }),
                    /* @__PURE__ */ o.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: V?.direction === "asc" ? /* @__PURE__ */ o.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ o.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              W.key
            );
          }) }) }),
          /* @__PURE__ */ o.jsx("tbody", { ref: T, className: "nhsuk-table__body", role: "rowgroup", children: D.map((W, ee) => {
            const V = a === ee, v = y === "cells" && R === ee;
            return /* @__PURE__ */ o.jsx(
              "tr",
              {
                role: "row",
                className: X("data-row", {
                  "data-row--selected": V,
                  "data-row--focused": v
                }),
                "aria-selected": V,
                children: t.map((I, G) => {
                  const S = I.render ? I.render(W) : W[I.key], x = y === "cells" && R === ee && A === G, L = () => typeof S == "boolean" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                    /* @__PURE__ */ o.jsx("span", { "aria-hidden": "true", children: S ? "✓" : "✗" }),
                    /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: S ? "Yes" : "No" })
                  ] }) : String(S ?? "");
                  return /* @__PURE__ */ o.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: X("data-cell", {
                        "data-cell--focused": x
                      }),
                      tabIndex: x ? 0 : -1,
                      onClick: () => Z(ee),
                      children: L()
                    },
                    I.key
                  );
                })
              },
              ee
            );
          }) })
        ]
      }
    );
  }
);
du.displayName = "AriaDataGrid";
const fu = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: f = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const p = te(null), g = te(null), b = te(null), k = J((y, w) => {
    u || (g.current = w, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", w));
  }, [u]), m = J((y, w) => {
    u || g.current === w || (y.preventDefault(), y.dataTransfer.dropEffect = "move", b.current = w);
  }, [u]), C = J((y, w) => {
    if (u) return;
    y.preventDefault();
    const c = g.current;
    if (!c || c === w) return;
    const j = e.findIndex((_) => _.key === c), K = e.findIndex((_) => _.key === w);
    if (j !== -1 && K !== -1) {
      const _ = [...e], [D] = _.splice(j, 1);
      _.splice(K, 0, D), n(_);
    }
    g.current = null, b.current = null;
  }, [u, e, n]), F = J(() => {
    g.current = null, b.current = null;
  }, []), N = J((y) => {
    const w = t.find((c) => c.key === y);
    return w ? w.label : y;
  }, [t]), P = J((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), T = J((y) => {
    if (u) return;
    const w = e.map(
      (c) => c.key === y ? { ...c, direction: c.direction === "asc" ? "desc" : "asc" } : c
    );
    n(w);
  }, [e, n, u]), R = J((y) => {
    if (u) return;
    const w = e.filter((c) => c.key !== y);
    n(w);
  }, [e, n, u]), M = J(() => {
    u || n([]);
  }, [n, u]), A = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const y = e.map((w, c) => {
      const j = w.direction === "asc" ? "ascending" : "descending";
      return `${c + 1}. ${N(w.key)} (${j})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const w = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${w}`;
    }
  }, B = se(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), d && y.push(d), y.join(" ");
  }, [l, d]);
  return e.length === 0 ? /* @__PURE__ */ o.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: a
      }
    ),
    l && /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ o.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ o.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: A()
      }
    ),
    /* @__PURE__ */ o.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ o.jsx(
        "div",
        {
          ref: p,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": f,
          "aria-describedby": B,
          children: e.map((y, w) => /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (c) => k(c, y.key),
              onDragOver: (c) => m(c, y.key),
              onDrop: (c) => C(c, y.key),
              onDragEnd: F,
              onClick: () => T(y.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ o.jsx(
                _r,
                {
                  color: P(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(y.key),
                  disabled: u,
                  children: /* @__PURE__ */ o.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ o.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ o.jsx("span", { className: "sort-status-control__tag-label", children: N(y.key) }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (c) => {
                          c.stopPropagation(), T(y.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${N(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ o.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${y.direction}`, children: /* @__PURE__ */ o.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${y.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ o.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                          }
                        ) })
                      }
                    )
                  ] })
                }
              )
            },
            y.key
          ))
        }
      ),
      i && /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ o.jsx(
        Cr,
        {
          variant: "secondary",
          onClick: M,
          isDisabled: u,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ o.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function hu(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
    case "SET_TAB_ERROR":
      const r = [...e.tabErrors];
      return r[t.payload.tabIndex] = t.payload.error, { ...e, tabErrors: r };
    case "SET_SORT":
      return { ...e, sortConfig: t.payload };
    case "SET_SELECTED_ROWS":
      const a = [...e.selectedRows];
      return a[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: a };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), u = new Array(s).fill([]);
      for (let f = 0; f < Math.min(e.tabLoadingStates.length, s); f++)
        i[f] = e.tabLoadingStates[f], l[f] = e.tabErrors[f], u[f] = e.selectedRows[f];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: u
      };
    case "RESET_STATE":
      return {
        selectedIndex: 0,
        tabLoadingStates: new Array(e.tabLoadingStates.length).fill(!1),
        tabErrors: new Array(e.tabErrors.length).fill(null),
        sortConfig: [],
        selectedRows: new Array(e.selectedRows.length).fill([]),
        globalSelectedRowData: null,
        filters: void 0
      };
    default:
      return e;
  }
}
const Fo = tt(
  function(t, n) {
    const {
      dataConfig: r = {},
      tabPanels: a,
      selectedIndex: s,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: u,
      ariaDescription: f,
      className: d = "",
      disabled: p = !1,
      orientation: g = "horizontal",
      id: b,
      isLoading: k = !1,
      loadingComponent: m,
      error: C = null,
      errorComponent: F,
      "data-testid": N
    } = t, {
      dataComparator: P = (v, I) => JSON.stringify(v) === JSON.stringify(I),
      filterFunction: T = (v) => v,
      booleanRenderer: R = (v) => v ? "✓" : "✗"
    } = r || {}, M = s !== void 0, A = s ?? 0, [B, y] = ne({
      focusArea: "tabs",
      focusedTabIndex: A,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), w = se(() => ({
      selectedIndex: A,
      tabLoadingStates: new Array(a.length).fill(!1),
      tabErrors: new Array(a.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(a.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [A]), [c, j] = cs(hu, w);
    ae(() => {
      const v = c.tabLoadingStates.length, I = a.length;
      v !== I && j({ type: "ADJUST_ARRAYS", payload: { newLength: I } });
    }, [a.length]), ae(() => {
      M && j({ type: "SET_SELECTED_INDEX", payload: A });
    }, [A, M]), ae(() => {
      l && l(c.globalSelectedRowData);
    }, [c.globalSelectedRowData, l]);
    const K = J((v, I) => P(v, I), [P]), _ = J((v) => {
      v >= 0 && v < a.length && !a[v].disabled && (j({ type: "SET_SELECTED_INDEX", payload: v }), i?.(v));
    }, [a, i]), D = J((v, I) => {
      const { key: G } = v;
      switch (G) {
        case "ArrowLeft":
          v.preventDefault();
          const S = I > 0 ? I - 1 : a.length - 1;
          _(S), y((H) => ({ ...H, focusedTabIndex: S })), h.current[S]?.focus();
          break;
        case "ArrowRight":
          v.preventDefault();
          const x = I < a.length - 1 ? I + 1 : 0;
          _(x), y((H) => ({ ...H, focusedTabIndex: x })), h.current[x]?.focus();
          break;
        case "ArrowDown":
          v.preventDefault(), y((H) => ({
            ...H,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Z(0);
          break;
        case "Home":
          v.preventDefault(), _(0), y((H) => ({ ...H, focusedTabIndex: 0 })), h.current[0]?.focus();
          break;
        case "End":
          v.preventDefault();
          const L = a.length - 1;
          _(L), y((H) => ({ ...H, focusedTabIndex: L })), h.current[L]?.focus();
          break;
        case "Enter":
        case " ":
          v.preventDefault(), _(I);
          break;
      }
    }, [a.length, _]), h = te([]), z = te([]), Y = J((v, I) => {
      const G = c.sortConfig || [], S = G.find((H) => H.key === I);
      let x;
      S ? S.direction === "asc" ? x = G.map(
        (H) => H.key === I ? { ...H, direction: "desc" } : H
      ) : x = G.filter((H) => H.key !== I) : x = [...G, { key: I, direction: "asc" }], j({
        type: "SET_SORT",
        payload: x
      }), a[v].onSort?.(I);
    }, [c.sortConfig, a]), Z = J((v) => {
      setTimeout(() => {
        const I = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] th:nth-child(${v + 1})`
        );
        I && I.focus();
      }, 0);
    }, [c.selectedIndex]), E = J((v) => R(v), [R]), U = J((v, I) => {
      setTimeout(() => {
        const G = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] tbody tr:nth-child(${v + 1}) td:nth-child(${I + 1})`
        );
        G && G.focus();
      }, 0);
    }, [c.selectedIndex]), W = J((v, I) => {
      const { key: G } = v, S = a[c.selectedIndex], x = S?.columns.length || 0;
      switch (G) {
        case "ArrowLeft":
          v.preventDefault();
          const L = Math.max(0, I - 1);
          y((q) => ({ ...q, focusedHeaderIndex: L })), Z(L);
          break;
        case "ArrowRight":
          v.preventDefault();
          const H = Math.min(x - 1, I + 1);
          y((q) => ({ ...q, focusedHeaderIndex: H })), Z(H);
          break;
        case "ArrowUp":
          v.preventDefault(), y((q) => ({
            ...q,
            focusArea: "tabs",
            focusedTabIndex: c.selectedIndex
          })), h.current[c.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          v.preventDefault(), y((q) => ({
            ...q,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: I,
            isGridActive: !0
          })), U(0, I);
          break;
        case "Home":
          v.preventDefault(), y((q) => ({ ...q, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          v.preventDefault();
          const $ = x - 1;
          y((q) => ({ ...q, focusedHeaderIndex: $ })), Z($);
          break;
        case "Enter":
        case " ":
          v.preventDefault();
          const re = S?.columns[I]?.key;
          re && Y(c.selectedIndex, re);
          break;
      }
    }, [a, c.selectedIndex, Y, y, Z, U, h]), ee = J((v, I, G) => {
      const { key: S } = v, x = a[c.selectedIndex], L = x?.data.length || 0, H = x?.columns.length || 0;
      switch (S) {
        case "ArrowUp":
          if (v.preventDefault(), I === 0)
            y((O) => ({
              ...O,
              focusArea: "headers",
              focusedHeaderIndex: G,
              isGridActive: !1
            })), Z(G);
          else {
            const O = I - 1;
            y((Q) => ({ ...Q, focusedRowIndex: O })), U(O, G);
          }
          break;
        case "ArrowDown":
          v.preventDefault();
          const $ = Math.min(L - 1, I + 1);
          y((O) => ({ ...O, focusedRowIndex: $ })), U($, G);
          break;
        case "ArrowLeft":
          v.preventDefault();
          const re = Math.max(0, G - 1);
          y((O) => ({ ...O, focusedColumnIndex: re })), U(I, re);
          break;
        case "ArrowRight":
          v.preventDefault();
          const q = Math.min(H - 1, G + 1);
          y((O) => ({ ...O, focusedColumnIndex: q })), U(I, q);
          break;
        case "Home":
          v.preventDefault(), v.ctrlKey ? (y((O) => ({ ...O, focusedRowIndex: 0, focusedColumnIndex: 0 })), U(0, 0)) : (y((O) => ({ ...O, focusedColumnIndex: 0 })), U(I, 0));
          break;
        case "End":
          if (v.preventDefault(), v.ctrlKey) {
            const O = L - 1, Q = H - 1;
            y((le) => ({ ...le, focusedRowIndex: O, focusedColumnIndex: Q })), U(O, Q);
          } else {
            const O = H - 1;
            y((Q) => ({ ...Q, focusedColumnIndex: O })), U(I, O);
          }
          break;
        case "Enter":
        case " ":
          if (v.preventDefault(), x && x.data[I]) {
            const O = x.data.some((ue) => "ews_data" in ue) ? T(x.data, c.filters) : x.data, Q = c.sortConfig;
            let le = O;
            if (Q && Q.length > 0 && (le = [...O].sort((ue, we) => {
              for (const { key: be, direction: Se } of Q) {
                let Ce = ue[be], We = we[be];
                const Oe = x.columns.find((is) => is.key === be);
                if (Oe?.render && (Ce = Oe.render(ue), We = Oe.render(we)), Ce == null && We == null) continue;
                if (Ce == null) return Se === "asc" ? -1 : 1;
                if (We == null) return Se === "asc" ? 1 : -1;
                let Ue = 0;
                if (typeof Ce == "number" && typeof We == "number" ? Ue = Ce - We : Ue = String(Ce).localeCompare(String(We), void 0, { numeric: !0, sensitivity: "base" }), Ue !== 0)
                  return Se === "asc" ? Ue : -Ue;
              }
              return 0;
            })), le[I]) {
              const ue = le[I], be = c.globalSelectedRowData && K(c.globalSelectedRowData, ue) ? null : ue;
              j({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: be
              });
            }
          }
          break;
      }
    }, [a, c.selectedIndex, c.filters, c.sortConfig, T, K, j, y, Z, U]), V = J((v, I) => T(v, I), [T]);
    return Po(n, () => ({
      selectTab: (v) => {
        v >= 0 && v < a.length && (j({ type: "SET_SELECTED_INDEX", payload: v }), i?.(v));
      },
      refreshData: (v) => {
        console.log("Refreshing data for tab:", v ?? "all");
      },
      exportData: (v) => {
        const I = v ?? c.selectedIndex, G = a[I];
        return G ? G.data : [];
      },
      getSelectedRows: (v) => c.globalSelectedRowData ? [] : [],
      clearSelection: (v) => {
        j({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (v) => {
        j({ type: "SET_FILTERS", payload: v });
      }
    }), [c.selectedIndex, c.selectedRows, a, i]), k ? /* @__PURE__ */ o.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": N, children: m || /* @__PURE__ */ o.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ o.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ o.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": N, children: F || /* @__PURE__ */ o.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ o.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${d}`,
        id: b,
        "data-testid": N,
        children: [
          /* @__PURE__ */ o.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${b}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ o.jsx(
            fu,
            {
              sortConfig: c.sortConfig || [],
              columns: a.flatMap(
                (v) => v.columns.map((I) => ({ key: I.key, label: I.label }))
              ).filter(
                (v, I, G) => G.findIndex((S) => S.key === v.key) === I
                // Remove duplicates
              ),
              onSortChange: (v) => {
                j({ type: "SET_SORT", payload: v });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": `${f || ""} ${b ? `${b}-navigation-help` : ""}`.trim(),
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              children: a.map((v, I) => {
                const G = I === c.selectedIndex, S = v.disabled || p;
                return /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${v.id}`,
                    "aria-controls": `panel-${v.id}`,
                    "aria-selected": G,
                    "aria-disabled": S,
                    tabIndex: G ? 0 : -1,
                    ref: (x) => {
                      h.current[I] = x;
                    },
                    onClick: () => _(I),
                    onKeyDown: (x) => D(x, I),
                    disabled: S,
                    className: `
                  aria-tabs-datagrid__tab
                  ${G ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${S ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ o.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: v.label }),
                      c.tabLoadingStates[I] && /* @__PURE__ */ o.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      c.tabErrors[I] && /* @__PURE__ */ o.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  v.id
                );
              })
            }
          ),
          a.map((v, I) => {
            const G = I === c.selectedIndex;
            return /* @__PURE__ */ o.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${v.id}`,
                "aria-labelledby": `tab-${v.id}`,
                tabIndex: 0,
                hidden: !G,
                ref: (S) => {
                  z.current[I] = S;
                },
                className: `aria-tabs-datagrid__panel ${v.className || ""}`,
                "data-tab-panel": I,
                children: G && (() => {
                  const S = v.data.some((L) => "ews_data" in L) ? V(v.data, c.filters) : v.data, x = se(() => {
                    const L = c.sortConfig;
                    return !L || L.length === 0 ? S : [...S].sort((H, $) => {
                      for (const { key: re, direction: q } of L) {
                        let O = H[re], Q = $[re];
                        const le = v.columns.find((we) => we.key === re);
                        if (le?.render && (O = le.render(H), Q = le.render($)), O == null && Q == null) continue;
                        if (O == null) return 1;
                        if (Q == null) return -1;
                        let ue = 0;
                        if (typeof O == "number" && typeof Q == "number" ? ue = O - Q : typeof O == "boolean" && typeof Q == "boolean" ? ue = O === Q ? 0 : O ? 1 : -1 : ue = String(O).localeCompare(String(Q), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ue !== 0)
                          return q === "asc" ? ue : -ue;
                      }
                      return 0;
                    });
                  }, [S, c.sortConfig, v.columns]);
                  return /* @__PURE__ */ o.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": v.ariaLabel,
                      "aria-describedby": v.ariaDescription,
                      children: [
                        /* @__PURE__ */ o.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ o.jsx("tr", { role: "row", children: v.columns.map((L, H) => {
                          const $ = c.sortConfig?.find((O) => O.key === L.key), re = !!$, q = B.focusArea === "headers" && B.focusedHeaderIndex === H;
                          return /* @__PURE__ */ o.jsx(
                            "th",
                            {
                              className: `sortable-header ${q ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: q ? 0 : -1,
                              onClick: () => Y(I, L.key),
                              onKeyDown: (O) => W(O, H),
                              "aria-sort": re ? $?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ o.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ o.jsx("span", { className: "header-label", children: L.label }),
                                /* @__PURE__ */ o.jsxs("div", { className: `sort-indicator-container ${re ? `sort-indicator--${$?.direction}` : ""}`, children: [
                                  c.sortConfig && c.sortConfig.length > 0 && c.sortConfig.findIndex((O) => O.key === L.key) !== -1 && /* @__PURE__ */ o.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${c.sortConfig.findIndex((O) => O.key === L.key) + 1}`,
                                      "data-priority": c.sortConfig.findIndex((O) => O.key === L.key) + 1,
                                      title: `Sort priority: ${c.sortConfig.findIndex((O) => O.key === L.key) + 1}`,
                                      children: c.sortConfig.findIndex((O) => O.key === L.key) + 1
                                    }
                                  ),
                                  re && /* @__PURE__ */ o.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${$?.direction}`,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ o.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                    }
                                  )
                                ] })
                              ] })
                            },
                            L.key
                          );
                        }) }) }),
                        /* @__PURE__ */ o.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: x.map((L, H) => {
                          const $ = c.globalSelectedRowData && K(c.globalSelectedRowData, L), re = B.focusArea === "cells" && B.focusedRowIndex === H;
                          return /* @__PURE__ */ o.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${$ ? "data-row--selected" : ""} ${re ? "data-row--focused" : ""}`,
                              "aria-selected": $,
                              children: v.columns.map((q, O) => {
                                const Q = q.render ? q.render(L) : L[q.key], le = B.focusArea === "cells" && B.focusedRowIndex === H && B.focusedColumnIndex === O, ue = () => typeof Q == "boolean" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
                                  E(Q),
                                  /* @__PURE__ */ o.jsx("span", { className: "nhsuk-u-visually-hidden", children: Q ? "Yes" : "No" })
                                ] }) : String(Q ?? "");
                                return /* @__PURE__ */ o.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${le ? "data-cell--focused" : ""}`,
                                    tabIndex: le ? 0 : -1,
                                    onClick: () => {
                                      const be = c.globalSelectedRowData && K(c.globalSelectedRowData, L) ? null : L;
                                      j({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: be
                                      });
                                    },
                                    onKeyDown: (we) => ee(we, H, O),
                                    children: ue()
                                  },
                                  q.key
                                );
                              })
                            },
                            H
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              v.id
            );
          })
        ]
      }
    );
  }
);
function pu(e, t) {
  const [n, r] = ne("cards");
  return ae(() => {
    if (t) {
      r(t);
      return;
    }
    const a = () => {
      const s = window.innerWidth;
      s < e.mobile ? r("cards") : s < e.desktop ? r("hybrid") : r("table");
    };
    return a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a);
  }, [e, t]), n;
}
const Dp = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: r = {},
  ...a
}) => {
  const s = pu(e, t), {
    primaryField: i = a.tabPanels[0]?.columns[0]?.key,
    secondaryFields: l = a.tabPanels[0]?.columns.slice(1, 3).map((p) => p.key) || [],
    badgeFields: u = [],
    hiddenFields: f = [],
    cardTemplate: d
  } = n;
  return s === "cards" ? /* @__PURE__ */ o.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${a.className || ""}`, children: [
    /* @__PURE__ */ o.jsx("div", { role: "tablist", className: "aria-tabs-datagrid-adaptive__tabs", children: a.tabPanels.map((p, g) => /* @__PURE__ */ o.jsx(
      "button",
      {
        role: "tab",
        className: `aria-tabs-datagrid-adaptive__tab ${g === 0 ? "aria-tabs-datagrid-adaptive__tab--selected" : ""}`,
        children: p.label
      },
      p.id
    )) }),
    /* @__PURE__ */ o.jsx("div", { className: "aria-tabs-datagrid-adaptive__cards", role: "grid", children: a.tabPanels[0]?.data.map((p, g) => /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "aria-tabs-datagrid-adaptive__card",
        role: "gridcell",
        tabIndex: 0,
        children: d ? d(p, a.tabPanels[0].columns) : /* @__PURE__ */ o.jsx(
          mu,
          {
            row: p,
            columns: a.tabPanels[0].columns,
            primaryField: i,
            secondaryFields: l,
            badgeFields: u,
            hiddenFields: f
          }
        )
      },
      g
    )) })
  ] }) : s === "hybrid" ? /* @__PURE__ */ o.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${a.className || ""}`, children: /* @__PURE__ */ o.jsx(Fo, { ...a, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ o.jsx(Fo, { ...a });
}, mu = ({
  row: e,
  columns: t,
  primaryField: n,
  secondaryFields: r,
  badgeFields: a,
  hiddenFields: s
}) => {
  const i = t.find((u) => u.key === n), l = i?.render ? i.render(e) : e[n || ""];
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-header", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "aria-tabs-datagrid-adaptive__card-title", children: l }),
      a.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-badges", children: a.map((u) => {
        const f = t.find((p) => p.key === u), d = f?.render ? f.render(e) : e[u];
        return /* @__PURE__ */ o.jsx("span", { className: "nhsuk-tag aria-tabs-datagrid-adaptive__card-badge", children: d }, u);
      }) })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-body", children: r.map((u) => {
      const f = t.find((p) => p.key === u);
      if (!f || s.includes(u)) return null;
      const d = f.render ? f.render(e) : e[u];
      return /* @__PURE__ */ o.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-field", children: [
        /* @__PURE__ */ o.jsx("dt", { className: "aria-tabs-datagrid-adaptive__card-field-label", children: f.label }),
        /* @__PURE__ */ o.jsx("dd", { className: "aria-tabs-datagrid-adaptive__card-field-value", children: typeof d == "boolean" ? d ? "✓" : "✗" : String(d ?? "") })
      ] }, u);
    }) }),
    /* @__PURE__ */ o.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-actions", children: /* @__PURE__ */ o.jsx("button", { className: "nhsuk-button nhsuk-button--secondary", type: "button", children: "View Details" }) })
  ] });
}, It = {
  asc: "↑",
  desc: "↓"
}, gu = (e) => [...e].sort((t, n) => t.priority - n.priority);
function An(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function bu(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function xu(e, t) {
  const n = t.find((r) => r.id === e);
  return n ? n.priority > 0 : !1;
}
function yu(e, t) {
  const n = t.find((a) => a.id === e), r = bu(t);
  return n ? n.priority < r : !1;
}
const Pp = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: r = "No sorting applied",
  activeDescription: a,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const d = se(() => gu(e), [e]), p = J((N) => {
    if (l) return;
    const P = e.map(
      (T) => T.id === N ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    t(P);
  }, [e, t, l]), g = J((N) => {
    if (l) return;
    const P = e.findIndex((R) => R.id === N);
    if (P <= 0) return;
    const T = [...e];
    [T[P], T[P - 1]] = [T[P - 1], T[P]], t(An(T));
  }, [e, t, l]), b = J((N) => {
    if (l) return;
    const P = e.findIndex((R) => R.id === N);
    if (P >= e.length - 1 || P === -1) return;
    const T = [...e];
    [T[P], T[P + 1]] = [T[P + 1], T[P]], t(An(T));
  }, [e, t, l]), k = J((N) => {
    if (l) return;
    const P = e.filter((T) => T.id !== N);
    t(An(P));
  }, [e, t, l]), m = J(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return r;
    if (a)
      return a;
    const N = d.map((P, T) => {
      const R = P.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${P.label} (${R})`;
    });
    if (N.length === 1)
      return `Sorted by: ${N[0]}`;
    if (N.length === 2)
      return `Sorted by: ${N.join(" and ")}`;
    {
      const P = N.pop();
      return `Sorted by: ${N.join(", ")}, and ${P}`;
    }
  }, F = se(() => {
    const N = ["sort-description"];
    return i && N.push("sort-help"), f && N.push(f), N.join(" ");
  }, [i, f]);
  return e.length === 0 ? /* @__PURE__ */ o.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: C()
    }
  ) }) : /* @__PURE__ */ o.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ o.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: C()
      }
    ),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": F,
        children: [
          /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((N) => /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ o.jsx(
                _r,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => k(N.id),
                  disabled: l,
                  children: /* @__PURE__ */ o.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ o.jsx("span", { className: "sort-status-control__tag-priority", children: N.priority + 1 }),
                    /* @__PURE__ */ o.jsx("span", { className: "sort-status-control__tag-label", children: N.label }),
                    /* @__PURE__ */ o.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => p(N.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${N.label}. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: N.direction === "asc" ? It.asc : It.desc
                      }
                    ),
                    /* @__PURE__ */ o.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(N.id),
                          disabled: l || !xu(N.id, e),
                          "aria-label": `Move ${N.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ o.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(N.id),
                          disabled: l || !yu(N.id, e),
                          "aria-label": `Move ${N.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            N.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ o.jsx(
      Cr,
      {
        variant: "secondary",
        onClick: m,
        isDisabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ o.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ o.jsxs("small", { children: [
      "Click ",
      It.asc,
      "/",
      It.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, vu = "150ms", Su = "300ms", ku = "500ms", wu = "cubic-bezier(0.4, 0, 1, 1)", Tu = "cubic-bezier(0, 0, 0.2, 1)", $u = "cubic-bezier(0.4, 0, 0.2, 1)", Cu = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", _u = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Nu = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Eu = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", ju = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Fu = "1px", Du = "2px", Pu = "4px", Mu = "4px", Bu = "4px", Lu = "2px", Iu = "1px", Ru = "0px", Hu = "4px", Au = "8px", zu = "12px", ga = "#d8dde0", ba = "#4c6272", xa = "#d8dde0", ya = "#aeb7bd", va = "#d5281b", Sa = "#005eb8", ka = "#ffffff", wa = "#212b32", Ta = "#007f3b", $a = "#330072", Ca = "#7c2855", _a = "#d5281b", Na = "#ffeb3b", Ea = "#fff9c4", ja = "#ffb81c", Fa = "#ed8b00", Da = "#00a499", Pa = "#ae2573", Ma = "#4c6272", Ba = "#768692", La = "#aeb7bd", Ia = "#d8dde0", Ra = "#f0f4f5", Wu = "#212b32", Ou = "#4c6272", Uu = "#ffffff", Yu = "#212b32", Vu = "#005eb8", Ku = "#7c2855", Gu = "#003087", qu = "#330072", Xu = "#ffeb3b", Zu = "#212b32", Ju = "#d8dde0", Qu = "#ffffff33", ed = "#d5281b", td = "#4c6272", nd = "#ffffff", rd = "#007f3b", od = "#ffffff", ad = "#006530", sd = "#004021", id = "#004021", ld = "#00000000", cd = "#ffffff", ud = "#005eb8", dd = "#005eb8", fd = "#d9e5f2", hd = "#c7daf0", pd = "#005eb8", md = "#ffffff", gd = "#212b32", bd = "#d9dde0", xd = "#b3bcc2", yd = "#b3bcc2", vd = "#d5281b", Sd = "#aa2016", kd = "#6a140e", wd = "#6a140e", Td = "#005eb8", $d = "#004b93", Cd = "#002f5c", _d = "#002f5c", Nd = "8px", Ed = "16px", jd = "12px", Fd = "16px", Dd = "4px", Pd = "40px", Md = "4px", Bd = "40px", Ld = "12px", Id = "16px", Rd = "32px", Hd = "16px", Ad = "20px", zd = "28px", Wd = "9px", Od = "2px", Ud = "16px", Yd = "24px", Vd = "8px", Kd = "24px", Gd = "16px", qd = "4px", Xd = "4px", Zd = "4px", Jd = "8px", Qd = "4px", ef = "16px", tf = "#007f3b", nf = "#006530", rf = "#004021", of = "#d8dde0", af = "#ffffff", sf = "#768692", lf = "#00000000", cf = "#ffeb3b", uf = "#00000000", df = "#ffffff", ff = "#d9e5f2", hf = "#c7daf0", pf = "#005eb8", mf = "#005eb8", Ha = "8px", Aa = "16px", za = "12px", Wa = "16px", gf = "2px", bf = "4px", xf = "4px", yf = "600", vf = "#ffffff", Sf = "#d8dde0", kf = "#aeb7bd", wf = "#f0f4f5", Tf = "#212b32", $f = "#212b32", Cf = "#005eb8", Oa = "16px", Ua = "32px", Ya = "16px", _f = "1px", Nf = "4px", Ef = "none", jf = "0 2px 4px rgba(0, 0, 0, 0.1)", Ff = "#ffffff", Df = "#ffffff", Pf = "#d8dde0", Mf = "#ffffff", Bf = "#4c6272", Lf = "#ffeb3b", If = "#d5281b", Rf = "#aeb7bd", Hf = "#212b32", Af = "#4c6272", zf = "#768692", Wf = "#212b32", Of = "#ffffff", Uf = "600", Yf = "#d5281b", Vf = "600", Kf = "#4c6272", Va = "4px", Ka = "40px", Ga = "40px", qa = "12px", Gf = "2px", qf = "4px", Xf = "0px", Zf = "16px", Jf = "18px", Qf = "24px", eh = "32px", th = "34px", nh = "32px", rh = "40px", oh = "48px", ah = "5.4ex", sh = "7.2ex", ih = "9ex", lh = "10.8ex", ch = "20ex", uh = "38ex", dh = "56ex", fh = "44px", hh = "40px", ph = "1020px", mh = "100%", gh = "50%", bh = "33.333%", xh = "25%", yh = "20%", vh = "320px", Sh = "641px", kh = "1025px", wh = "1280px", Th = "960px", $h = "32px", Ch = "16px", _h = "#d5281b", Nh = "#d5281b", Eh = "#ffffff", jh = "#007f3b", Fh = "#007f3b", Dh = "#ffffff", Ph = "#ffeb3b", Mh = "#ffeb3b", Bh = "#212b32", Lh = "#005eb8", Ih = "#005eb8", Rh = "#ffffff", Hh = "#d8dde0", Ah = "#aeb7bd", zh = "#768692", Wh = "0 4px 0 #004021", Oh = "0 4px 0 #005eb8", Uh = "0 4px 0 #6a140e", Yh = "0 4px 0 #ffeb3b", Vh = "none", Kh = "0 2px 4px rgba(0, 0, 0, 0.1)", Gh = "4px", qh = "0px", Xh = "solid", Zh = "0 0 0 3px #ffeb3b", Jh = "0 0 0 3px #ffeb3b", Qh = "none", ep = "0 1px 3px rgba(0, 0, 0, 0.12)", tp = "0 2px 6px rgba(0, 0, 0, 0.16)", np = "0 4px 12px rgba(0, 0, 0, 0.20)", Xa = "0", Za = "4px", Ja = "8px", Qa = "16px", es = "24px", ts = "32px", ns = "40px", rs = "48px", os = "56px", as = "64px", Zn = "0", Jn = "0", Qn = "4px", er = "4px", tr = "8px", nr = "8px", rr = "8px", or = "16px", ar = "16px", sr = "24px", ir = "24px", lr = "32px", cr = "32px", ur = "40px", dr = "40px", fr = "48px", hr = "48px", pr = "56px", mr = "56px", gr = "64px", Xt = "Frutiger W01", Zt = "Arial, Helvetica, sans-serif", Jt = "sans-serif", Qt = "400", en = "600", tn = "400", nn = "12px", rn = "14px", on = "12pt", an = "14px", sn = "16px", ln = "12pt", cn = "16px", un = "19px", dn = "13pt", fn = "19px", hn = "22px", pn = "15pt", mn = "22px", gn = "26px", bn = "17pt", xn = "27px", yn = "36px", vn = "20pt", Sn = "33px", kn = "48px", wn = "24pt", br = "16px", xr = "24px", _e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ee = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, De = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Le = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: vu,
  AnimationDurationNormal: Su,
  AnimationDurationSlow: ku,
  AnimationEasingBounce: Cu,
  AnimationEasingEaseIn: wu,
  AnimationEasingEaseInOut: $u,
  AnimationEasingEaseOut: Tu,
  BorderColorCard: xa,
  BorderColorCardHover: ya,
  BorderColorDefault: ga,
  BorderColorError: va,
  BorderColorForm: ba,
  BorderRadiusLarge: zu,
  BorderRadiusMedium: Au,
  BorderRadiusNone: Ru,
  BorderRadiusSmall: Hu,
  BorderWidthCardBottom: Mu,
  BorderWidthDefault: Fu,
  BorderWidthFormElement: Du,
  BorderWidthFormElementError: Pu,
  BorderWidthPanel: Bu,
  BorderWidthTableCell: Iu,
  BorderWidthTableHeader: Lu,
  BreakpointDesktop: kh,
  BreakpointLargeDesktop: wh,
  BreakpointMobile: vh,
  BreakpointTablet: Sh,
  ButtonBorderRadius: bf,
  ButtonBorderWidth: gf,
  ButtonPrimaryBackgroundActive: rf,
  ButtonPrimaryBackgroundDefault: tf,
  ButtonPrimaryBackgroundDisabled: of,
  ButtonPrimaryBackgroundHover: nf,
  ButtonPrimaryBorderDefault: lf,
  ButtonPrimaryBorderFocus: cf,
  ButtonPrimaryTextDefault: af,
  ButtonPrimaryTextDisabled: sf,
  ButtonSecondaryBackgroundActive: hf,
  ButtonSecondaryBackgroundDefault: uf,
  ButtonSecondaryBackgroundHover: ff,
  ButtonSecondaryBackgroundSolid: df,
  ButtonSecondaryBorderDefault: mf,
  ButtonSecondaryTextDefault: pf,
  ButtonShadowSize: xf,
  ButtonSpacingPaddingHorizontalDesktop: Wa,
  ButtonSpacingPaddingHorizontalMobile: Aa,
  ButtonSpacingPaddingVerticalDesktop: za,
  ButtonSpacingPaddingVerticalMobile: Ha,
  ButtonTypographyWeight: yf,
  CardBackgroundDefault: vf,
  CardBorderBottom: wf,
  CardBorderDefault: Sf,
  CardBorderHover: kf,
  CardBorderWidthBottom: Nf,
  CardBorderWidthDefault: _f,
  CardShadowDefault: Ef,
  CardShadowHover: jf,
  CardSpacingHeadingMargin: Ya,
  CardSpacingPaddingDesktop: Ua,
  CardSpacingPaddingMobile: Oa,
  CardTextDescription: $f,
  CardTextHeading: Tf,
  CardTextLink: Cf,
  ColorBorderDefault: Ju,
  ColorBorderSecondary: Qu,
  ColorButtonLoginActive: Cd,
  ColorButtonLoginBackground: Td,
  ColorButtonLoginHover: $d,
  ColorButtonLoginShadow: _d,
  ColorButtonPrimaryActive: sd,
  ColorButtonPrimaryBackground: rd,
  ColorButtonPrimaryHover: ad,
  ColorButtonPrimaryShadow: id,
  ColorButtonPrimaryText: od,
  ColorButtonReverseActive: xd,
  ColorButtonReverseBackground: md,
  ColorButtonReverseHover: bd,
  ColorButtonReverseShadow: yd,
  ColorButtonReverseText: gd,
  ColorButtonSecondaryActive: hd,
  ColorButtonSecondaryBackground: ld,
  ColorButtonSecondaryBackgroundSolid: cd,
  ColorButtonSecondaryBorder: ud,
  ColorButtonSecondaryHover: fd,
  ColorButtonSecondaryShadow: pd,
  ColorButtonSecondaryText: dd,
  ColorButtonWarningActive: kd,
  ColorButtonWarningBackground: vd,
  ColorButtonWarningHover: Sd,
  ColorButtonWarningShadow: wd,
  ColorError: ed,
  ColorFocusBackground: Xu,
  ColorFocusText: Zu,
  ColorFormBackground: nd,
  ColorFormBorder: td,
  ColorGrey1: Ma,
  ColorGrey2: Ba,
  ColorGrey3: La,
  ColorGrey4: Ia,
  ColorGrey5: Ra,
  ColorLinkActive: Gu,
  ColorLinkDefault: Vu,
  ColorLinkHover: Ku,
  ColorLinkVisited: qu,
  ColorPrimaryBlack: wa,
  ColorPrimaryBlue: Sa,
  ColorPrimaryDarkPink: Ca,
  ColorPrimaryGreen: Ta,
  ColorPrimaryPurple: $a,
  ColorPrimaryRed: _a,
  ColorPrimaryWhite: ka,
  ColorPrimaryYellow: Na,
  ColorSecondaryAquaGreen: Da,
  ColorSecondaryOrange: Fa,
  ColorSecondaryPaleYellow: Ea,
  ColorSecondaryPink: Pa,
  ColorSecondaryWarmYellow: ja,
  ColorTextPrimary: Wu,
  ColorTextPrint: Yu,
  ColorTextReverse: Uu,
  ColorTextSecondary: Ou,
  ComponentBlur: Xd,
  ComponentBreadcrumbChevronMarginLeft: Wd,
  ComponentBreadcrumbChevronMarginRight: Od,
  ComponentBreadcrumbPaddingTopDesktop: Yd,
  ComponentBreadcrumbPaddingTopMobile: Ud,
  ComponentButtonPaddingDesktopHorizontal: Fd,
  ComponentButtonPaddingDesktopVertical: jd,
  ComponentButtonPaddingMobileHorizontal: Ed,
  ComponentButtonPaddingMobileVertical: Nd,
  ComponentButtonShadowSize: Dd,
  ComponentCardHeadingMargin: Hd,
  ComponentCardPaddingDesktop: Rd,
  ComponentCardPaddingMobile: Id,
  ComponentDetails: Jd,
  ComponentExpander: Qd,
  ComponentFormCheckboxLabelPadding: Ld,
  ComponentFormCheckboxSize: Bd,
  ComponentFormInputMinHeight: Pd,
  ComponentFormInputPadding: Md,
  ComponentLink: Zd,
  ComponentPagination: ef,
  ComponentPanelPaddingDesktop: zd,
  ComponentPanelPaddingMobile: Ad,
  ComponentSpread: qd,
  ComponentSummaryListCellPaddingHorizontal: Kd,
  ComponentSummaryListCellPaddingVertical: Vd,
  ComponentSummaryListRowMargin: Gd,
  ElevationHigh: np,
  ElevationLow: ep,
  ElevationMedium: tp,
  ElevationNone: Qh,
  FocusOutlineOffset: qh,
  FocusOutlineStyle: Xh,
  FocusOutlineWidth: Gh,
  FocusShadowButton: Jh,
  FocusShadowInput: Zh,
  FontFamilyBase: Xt,
  FontFamilyFallback: Zt,
  FontFamilyPrint: Jt,
  FontLineHeightBase: xr,
  FontSize14Mobile: nn,
  FontSize14Print: on,
  FontSize14Tablet: rn,
  FontSize16Mobile: an,
  FontSize16Print: ln,
  FontSize16Tablet: sn,
  FontSize19Mobile: cn,
  FontSize19Print: dn,
  FontSize19Tablet: un,
  FontSize22Mobile: fn,
  FontSize22Print: pn,
  FontSize22Tablet: hn,
  FontSize26Mobile: mn,
  FontSize26Print: bn,
  FontSize26Tablet: gn,
  FontSize36Mobile: xn,
  FontSize36Print: vn,
  FontSize36Tablet: yn,
  FontSize48Mobile: Sn,
  FontSize48Print: wn,
  FontSize48Tablet: kn,
  FontSizeBase: br,
  FontWeightBold: en,
  FontWeightLight: tn,
  FontWeightNormal: Qt,
  FormBorderRadius: Xf,
  FormBorderWidthDefault: Gf,
  FormBorderWidthError: qf,
  FormErrorTextDefault: Yf,
  FormErrorTypographyWeight: Vf,
  FormHintTextDefault: Kf,
  FormInputBackgroundDefault: Ff,
  FormInputBackgroundDisabled: Pf,
  FormInputBackgroundError: Mf,
  FormInputBackgroundFocus: Df,
  FormInputBorderDefault: Bf,
  FormInputBorderDisabled: Rf,
  FormInputBorderError: If,
  FormInputBorderFocus: Lf,
  FormInputTextDefault: Hf,
  FormInputTextDisabled: zf,
  FormInputTextPlaceholder: Af,
  FormLabelTextDefault: Wf,
  FormLabelTextRequired: Of,
  FormLabelTypographyWeight: Uf,
  FormSpacingCheckboxLabelPadding: qa,
  FormSpacingCheckboxSize: Ga,
  FormSpacingInputMinHeight: Ka,
  FormSpacingInputPadding: Va,
  GridGutter: $h,
  GridGutterHalf: Ch,
  GridPageWidth: Th,
  HeadingsNhsukHeadingL: Ne,
  HeadingsNhsukHeadingM: Ee,
  HeadingsNhsukHeadingS: je,
  HeadingsNhsukHeadingXl: _e,
  HeadingsNhsukHeadingXs: Fe,
  LayoutColumnActions: yh,
  LayoutColumnFull: mh,
  LayoutColumnHalf: gh,
  LayoutColumnQuarter: xh,
  LayoutColumnThird: bh,
  LayoutContainerMaxWidth: ph,
  ParagraphsBody: De,
  ParagraphsBodyLarge: Pe,
  ParagraphsBodySmall: Me,
  ParagraphsLedeText: Be,
  ParagraphsLedeTextSmall: Le,
  ShadowButtonDefault: Wh,
  ShadowButtonFocus: Yh,
  ShadowButtonSecondary: Oh,
  ShadowButtonWarning: Uh,
  ShadowCardDefault: Vh,
  ShadowCardHover: Kh,
  SizeButtonMinHeightDesktop: hh,
  SizeButtonMinHeightMobile: fh,
  SizeFormControlLarge: oh,
  SizeFormControlMedium: rh,
  SizeFormControlSmall: nh,
  SizeFormInputWidth2xl: uh,
  SizeFormInputWidth3xl: dh,
  SizeFormInputWidthLg: lh,
  SizeFormInputWidthMd: ih,
  SizeFormInputWidthSm: sh,
  SizeFormInputWidthXl: ch,
  SizeFormInputWidthXs: ah,
  SizeIconExtraLarge: eh,
  SizeIconLarge: Qf,
  SizeIconMedium: Jf,
  SizeIconNhsDefault: th,
  SizeIconSmall: Zf,
  Spacing0: Xa,
  Spacing1: Za,
  Spacing2: Ja,
  Spacing3: Qa,
  Spacing4: es,
  Spacing5: ts,
  Spacing6: ns,
  Spacing7: rs,
  Spacing8: os,
  Spacing9: as,
  SpacingResponsive0Mobile: Zn,
  SpacingResponsive0Tablet: Jn,
  SpacingResponsive1Mobile: Qn,
  SpacingResponsive1Tablet: er,
  SpacingResponsive2Mobile: tr,
  SpacingResponsive2Tablet: nr,
  SpacingResponsive3Mobile: rr,
  SpacingResponsive3Tablet: or,
  SpacingResponsive4Mobile: ar,
  SpacingResponsive4Tablet: sr,
  SpacingResponsive5Mobile: ir,
  SpacingResponsive5Tablet: lr,
  SpacingResponsive6Mobile: cr,
  SpacingResponsive6Tablet: ur,
  SpacingResponsive7Mobile: dr,
  SpacingResponsive7Tablet: fr,
  SpacingResponsive8Mobile: hr,
  SpacingResponsive8Tablet: pr,
  SpacingResponsive9Mobile: mr,
  SpacingResponsive9Tablet: gr,
  StateDisabledBackground: Hh,
  StateDisabledBorder: Ah,
  StateDisabledText: zh,
  StateErrorBackground: _h,
  StateErrorBorder: Nh,
  StateErrorText: Eh,
  StateInfoBackground: Lh,
  StateInfoBorder: Ih,
  StateInfoText: Rh,
  StateSuccessBackground: jh,
  StateSuccessBorder: Fh,
  StateSuccessText: Dh,
  StateWarningBackground: Ph,
  StateWarningBorder: Mh,
  StateWarningText: Bh,
  TransitionButtonDefault: _u,
  TransitionButtonShadow: Nu,
  TransitionCardHover: ju,
  TransitionInputFocus: Eu
}, Symbol.toStringTag, { value: "Module" })), Mp = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Bp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: _e.fontFamily,
      fontWeight: _e.fontWeight,
      fontSize: _e.fontSize.mobile,
      lineHeight: _e.lineHeight,
      marginTop: _e.marginTop,
      marginBottom: _e.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Lp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Ne.fontFamily,
      fontWeight: Ne.fontWeight,
      fontSize: Ne.fontSize.mobile,
      lineHeight: Ne.lineHeight,
      marginTop: Ne.marginTop,
      marginBottom: Ne.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ip = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Ee.fontFamily,
      fontWeight: Ee.fontWeight,
      fontSize: Ee.fontSize.mobile,
      lineHeight: Ee.lineHeight,
      marginTop: Ee.marginTop,
      marginBottom: Ee.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Rp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: je.fontFamily,
      fontWeight: je.fontWeight,
      fontSize: je.fontSize.mobile,
      lineHeight: je.lineHeight,
      marginTop: je.marginTop,
      marginBottom: je.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Hp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Fe.fontFamily,
      fontWeight: Fe.fontWeight,
      fontSize: Fe.fontSize.mobile,
      lineHeight: Fe.lineHeight,
      marginTop: Fe.marginTop,
      marginBottom: Fe.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ap = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: De.fontFamily,
      fontWeight: De.fontWeight,
      fontSize: De.fontSize.mobile,
      lineHeight: De.lineHeight,
      marginTop: De.marginTop,
      marginBottom: De.marginBottom.mobile,
      ...n
    },
    children: e
  }
), zp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Pe.fontFamily,
      fontWeight: Pe.fontWeight,
      fontSize: Pe.fontSize.mobile,
      lineHeight: Pe.lineHeight,
      marginTop: Pe.marginTop,
      marginBottom: Pe.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Wp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Me.fontFamily,
      fontWeight: Me.fontWeight,
      fontSize: Me.fontSize.mobile,
      lineHeight: Me.lineHeight,
      marginTop: Me.marginTop,
      marginBottom: Me.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Op = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Be.fontFamily,
      fontWeight: Be.fontWeight,
      fontSize: Be.fontSize.mobile,
      lineHeight: Be.lineHeight,
      marginTop: Be.marginTop,
      marginBottom: Be.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Up = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ o.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Le.fontFamily,
      fontWeight: Le.fontWeight,
      fontSize: Le.fontSize.mobile,
      lineHeight: Le.lineHeight,
      marginTop: Le.marginTop,
      marginBottom: Le.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Yp = () => se(() => rp, []), Vp = () => se(() => ({
  // Border colors
  BorderColorDefault: ga,
  BorderColorForm: ba,
  BorderColorCard: xa,
  BorderColorCardHover: ya,
  BorderColorError: va,
  // Primary colors
  ColorPrimaryBlue: Sa,
  ColorPrimaryWhite: ka,
  ColorPrimaryBlack: wa,
  ColorPrimaryGreen: Ta,
  ColorPrimaryPurple: $a,
  ColorPrimaryDarkPink: Ca,
  ColorPrimaryRed: _a,
  ColorPrimaryYellow: Na,
  // Secondary colors
  ColorSecondaryPaleYellow: Ea,
  ColorSecondaryWarmYellow: ja,
  ColorSecondaryOrange: Fa,
  ColorSecondaryAquaGreen: Da,
  ColorSecondaryPink: Pa,
  // Grey scale
  ColorGrey1: Ma,
  ColorGrey2: Ba,
  ColorGrey3: La,
  ColorGrey4: Ia,
  ColorGrey5: Ra
}), []), Kp = () => se(() => ({
  Spacing0: Xa,
  Spacing1: Za,
  Spacing2: Ja,
  Spacing3: Qa,
  Spacing4: es,
  Spacing5: ts,
  Spacing6: ns,
  Spacing7: rs,
  Spacing8: os,
  Spacing9: as
}), []), Gp = () => se(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: nn,
    Size16: an,
    Size19: cn,
    Size22: fn,
    Size26: mn,
    Size36: xn,
    Size48: Sn
  },
  Tablet: {
    Size14: rn,
    Size16: sn,
    Size19: un,
    Size22: hn,
    Size26: gn,
    Size36: yn,
    Size48: kn
  },
  Print: {
    Size14: on,
    Size16: ln,
    Size19: dn,
    Size22: pn,
    Size26: bn,
    Size36: vn,
    Size48: wn
  },
  Family: {
    Base: Xt,
    Fallback: Zt,
    Print: Jt
  },
  Weight: {
    Normal: Qt,
    Bold: en,
    Light: tn
  },
  Base: {
    Size: br,
    LineHeight: xr
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Xt,
  FontFamilyFallback: Zt,
  FontFamilyPrint: Jt,
  FontWeightNormal: Qt,
  FontWeightBold: en,
  FontWeightLight: tn,
  FontSize14Mobile: nn,
  FontSize14Tablet: rn,
  FontSize14Print: on,
  FontSize16Mobile: an,
  FontSize16Tablet: sn,
  FontSize16Print: ln,
  FontSize19Mobile: cn,
  FontSize19Tablet: un,
  FontSize19Print: dn,
  FontSize22Mobile: fn,
  FontSize22Tablet: hn,
  FontSize22Print: pn,
  FontSize26Mobile: mn,
  FontSize26Tablet: gn,
  FontSize26Print: bn,
  FontSize36Mobile: xn,
  FontSize36Tablet: yn,
  FontSize36Print: vn,
  FontSize48Mobile: Sn,
  FontSize48Tablet: kn,
  FontSize48Print: wn,
  FontSizeBase: br,
  FontLineHeightBase: xr
}), []), qp = () => se(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Zn,
    Size1: Qn,
    Size2: tr,
    Size3: rr,
    Size4: ar,
    Size5: ir,
    Size6: cr,
    Size7: dr,
    Size8: hr,
    Size9: mr
  },
  Tablet: {
    Size0: Jn,
    Size1: er,
    Size2: nr,
    Size3: or,
    Size4: sr,
    Size5: lr,
    Size6: ur,
    Size7: fr,
    Size8: pr,
    Size9: gr
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Zn,
  SpacingResponsive0Tablet: Jn,
  SpacingResponsive1Mobile: Qn,
  SpacingResponsive1Tablet: er,
  SpacingResponsive2Mobile: tr,
  SpacingResponsive2Tablet: nr,
  SpacingResponsive3Mobile: rr,
  SpacingResponsive3Tablet: or,
  SpacingResponsive4Mobile: ar,
  SpacingResponsive4Tablet: sr,
  SpacingResponsive5Mobile: ir,
  SpacingResponsive5Tablet: lr,
  SpacingResponsive6Mobile: cr,
  SpacingResponsive6Tablet: ur,
  SpacingResponsive7Mobile: dr,
  SpacingResponsive7Tablet: fr,
  SpacingResponsive8Mobile: hr,
  SpacingResponsive8Tablet: pr,
  SpacingResponsive9Mobile: mr,
  SpacingResponsive9Tablet: gr
}), []), Xp = () => se(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ha,
  ButtonSpacingPaddingHorizontalMobile: Aa,
  ButtonSpacingPaddingVerticalDesktop: za,
  ButtonSpacingPaddingHorizontalDesktop: Wa,
  // Card spacing	
  CardSpacingPaddingMobile: Oa,
  CardSpacingPaddingDesktop: Ua,
  CardSpacingHeadingMargin: Ya,
  // Form spacing
  FormSpacingInputPadding: Va,
  FormSpacingInputMinHeight: Ka,
  FormSpacingCheckboxSize: Ga,
  FormSpacingCheckboxLabelPadding: qa
}), []), Zp = () => se(() => ({
  xl: _e,
  l: Ne,
  m: Ee,
  s: je,
  xs: Fe
}), []), Jp = () => se(() => ({
  body: De,
  bodyLarge: Pe,
  bodySmall: Me,
  ledeText: Be,
  ledeTextSmall: Le
}), []), Qp = () => se(() => ({
  headings: {
    xl: _e,
    l: Ne,
    m: Ee,
    s: je,
    xs: Fe
  },
  paragraphs: {
    body: De,
    bodyLarge: Pe,
    bodySmall: Me,
    ledeText: Be,
    ledeTextSmall: Le
  },
  fonts: {
    family: {
      base: Xt,
      fallback: Zt,
      print: Jt
    },
    weight: {
      normal: Qt,
      bold: en,
      light: tn
    },
    sizes: {
      mobile: {
        size14: nn,
        size16: an,
        size19: cn,
        size22: fn,
        size26: mn,
        size36: xn,
        size48: Sn
      },
      tablet: {
        size14: rn,
        size16: sn,
        size19: un,
        size22: hn,
        size26: gn,
        size36: yn,
        size48: kn
      },
      print: {
        size14: on,
        size16: ln,
        size19: dn,
        size22: pn,
        size26: bn,
        size36: vn,
        size48: wn
      }
    }
  }
}), []), ss = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, me = {
  normal: {
    woff2: "FrutigerLTW01-55Roman.woff2",
    woff: "FrutigerLTW01-55Roman.woff",
    ttf: "FrutigerLTW01-55Roman.ttf",
    eot: "FrutigerLTW01-55Roman.eot"
  },
  bold: {
    woff2: "FrutigerLTW01-65Bold.woff2",
    woff: "FrutigerLTW01-65Bold.woff",
    ttf: "FrutigerLTW01-65Bold.ttf",
    eot: "FrutigerLTW01-65Bold.eot"
  }
};
function em(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...ss, ...e }, r = [];
  return n?.includes(400) && r.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${me.normal.eot}?#iefix") format("eot"),
       url("${t}${me.normal.woff2}") format("woff2"),
       url("${t}${me.normal.woff}") format("woff"),
       url("${t}${me.normal.ttf}") format("truetype");
  src: url("${t}${me.normal.eot}");
}`), n?.includes(600) && r.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${me.bold.eot}?#iefix") format("eot"),
       url("${t}${me.bold.woff2}") format("woff2"),
       url("${t}${me.bold.woff}") format("woff"),
       url("${t}${me.bold.ttf}") format("truetype");
  src: url("${t}${me.bold.eot}");
}`), r.join(`
`);
}
function tm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...ss, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${me.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${me.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${me.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${me.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((a) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = a.href, s.as = a.as, s.type = a.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const nm = '"Frutiger W01", Arial, Helvetica, sans-serif', rm = "Arial, Helvetica, sans-serif";
async function om() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  sp as ActionLink,
  vu as AnimationDurationFast,
  Su as AnimationDurationNormal,
  ku as AnimationDurationSlow,
  Cu as AnimationEasingBounce,
  wu as AnimationEasingEaseIn,
  $u as AnimationEasingEaseInOut,
  Tu as AnimationEasingEaseOut,
  du as AriaDataGrid,
  Fo as AriaTabsDataGrid,
  Dp as AriaTabsDataGridAdaptive,
  ip as BackLink,
  xa as BorderColorCard,
  ya as BorderColorCardHover,
  ga as BorderColorDefault,
  va as BorderColorError,
  ba as BorderColorForm,
  zu as BorderRadiusLarge,
  Au as BorderRadiusMedium,
  Ru as BorderRadiusNone,
  Hu as BorderRadiusSmall,
  Mu as BorderWidthCardBottom,
  Fu as BorderWidthDefault,
  Du as BorderWidthFormElement,
  Pu as BorderWidthFormElementError,
  Bu as BorderWidthPanel,
  Iu as BorderWidthTableCell,
  Lu as BorderWidthTableHeader,
  xp as Breadcrumb,
  kh as BreakpointDesktop,
  wh as BreakpointLargeDesktop,
  vh as BreakpointMobile,
  Sh as BreakpointTablet,
  Cr as Button,
  bf as ButtonBorderRadius,
  gf as ButtonBorderWidth,
  rf as ButtonPrimaryBackgroundActive,
  tf as ButtonPrimaryBackgroundDefault,
  of as ButtonPrimaryBackgroundDisabled,
  nf as ButtonPrimaryBackgroundHover,
  lf as ButtonPrimaryBorderDefault,
  cf as ButtonPrimaryBorderFocus,
  af as ButtonPrimaryTextDefault,
  sf as ButtonPrimaryTextDisabled,
  hf as ButtonSecondaryBackgroundActive,
  uf as ButtonSecondaryBackgroundDefault,
  ff as ButtonSecondaryBackgroundHover,
  df as ButtonSecondaryBackgroundSolid,
  mf as ButtonSecondaryBorderDefault,
  pf as ButtonSecondaryTextDefault,
  xf as ButtonShadowSize,
  Wa as ButtonSpacingPaddingHorizontalDesktop,
  Aa as ButtonSpacingPaddingHorizontalMobile,
  za as ButtonSpacingPaddingVerticalDesktop,
  Ha as ButtonSpacingPaddingVerticalMobile,
  yf as ButtonTypographyWeight,
  kp as Card,
  vf as CardBackgroundDefault,
  wf as CardBorderBottom,
  Sf as CardBorderDefault,
  kf as CardBorderHover,
  Nf as CardBorderWidthBottom,
  _f as CardBorderWidthDefault,
  wp as CardGroup,
  Tp as CardGroupItem,
  Ef as CardShadowDefault,
  jf as CardShadowHover,
  Ya as CardSpacingHeadingMargin,
  Ua as CardSpacingPaddingDesktop,
  Oa as CardSpacingPaddingMobile,
  $f as CardTextDescription,
  Tf as CardTextHeading,
  Cf as CardTextLink,
  $p as CareCard,
  lp as CharacterCount,
  Oi as Checkboxes,
  Ju as ColorBorderDefault,
  Qu as ColorBorderSecondary,
  Cd as ColorButtonLoginActive,
  Td as ColorButtonLoginBackground,
  $d as ColorButtonLoginHover,
  _d as ColorButtonLoginShadow,
  sd as ColorButtonPrimaryActive,
  rd as ColorButtonPrimaryBackground,
  ad as ColorButtonPrimaryHover,
  id as ColorButtonPrimaryShadow,
  od as ColorButtonPrimaryText,
  xd as ColorButtonReverseActive,
  md as ColorButtonReverseBackground,
  bd as ColorButtonReverseHover,
  yd as ColorButtonReverseShadow,
  gd as ColorButtonReverseText,
  hd as ColorButtonSecondaryActive,
  ld as ColorButtonSecondaryBackground,
  cd as ColorButtonSecondaryBackgroundSolid,
  ud as ColorButtonSecondaryBorder,
  fd as ColorButtonSecondaryHover,
  pd as ColorButtonSecondaryShadow,
  dd as ColorButtonSecondaryText,
  kd as ColorButtonWarningActive,
  vd as ColorButtonWarningBackground,
  Sd as ColorButtonWarningHover,
  wd as ColorButtonWarningShadow,
  ed as ColorError,
  Xu as ColorFocusBackground,
  Zu as ColorFocusText,
  nd as ColorFormBackground,
  td as ColorFormBorder,
  Ma as ColorGrey1,
  Ba as ColorGrey2,
  La as ColorGrey3,
  Ia as ColorGrey4,
  Ra as ColorGrey5,
  Gu as ColorLinkActive,
  Vu as ColorLinkDefault,
  Ku as ColorLinkHover,
  qu as ColorLinkVisited,
  wa as ColorPrimaryBlack,
  Sa as ColorPrimaryBlue,
  Ca as ColorPrimaryDarkPink,
  Ta as ColorPrimaryGreen,
  $a as ColorPrimaryPurple,
  _a as ColorPrimaryRed,
  ka as ColorPrimaryWhite,
  Na as ColorPrimaryYellow,
  Da as ColorSecondaryAquaGreen,
  Fa as ColorSecondaryOrange,
  Ea as ColorSecondaryPaleYellow,
  Pa as ColorSecondaryPink,
  ja as ColorSecondaryWarmYellow,
  Wu as ColorTextPrimary,
  Yu as ColorTextPrint,
  Uu as ColorTextReverse,
  Ou as ColorTextSecondary,
  Xd as ComponentBlur,
  Wd as ComponentBreadcrumbChevronMarginLeft,
  Od as ComponentBreadcrumbChevronMarginRight,
  Yd as ComponentBreadcrumbPaddingTopDesktop,
  Ud as ComponentBreadcrumbPaddingTopMobile,
  Fd as ComponentButtonPaddingDesktopHorizontal,
  jd as ComponentButtonPaddingDesktopVertical,
  Ed as ComponentButtonPaddingMobileHorizontal,
  Nd as ComponentButtonPaddingMobileVertical,
  Dd as ComponentButtonShadowSize,
  Hd as ComponentCardHeadingMargin,
  Rd as ComponentCardPaddingDesktop,
  Id as ComponentCardPaddingMobile,
  Jd as ComponentDetails,
  Qd as ComponentExpander,
  Ld as ComponentFormCheckboxLabelPadding,
  Bd as ComponentFormCheckboxSize,
  Pd as ComponentFormInputMinHeight,
  Md as ComponentFormInputPadding,
  Zd as ComponentLink,
  ef as ComponentPagination,
  zd as ComponentPanelPaddingDesktop,
  Ad as ComponentPanelPaddingMobile,
  qd as ComponentSpread,
  Kd as ComponentSummaryListCellPaddingHorizontal,
  Vd as ComponentSummaryListCellPaddingVertical,
  Gd as ComponentSummaryListRowMargin,
  Sp as ContentsList,
  ss as DEFAULT_FONT_CONFIG,
  fp as DateInput,
  su as Details,
  iu as DoDontList,
  np as ElevationHigh,
  ep as ElevationLow,
  tp as ElevationMedium,
  Qh as ElevationNone,
  so as ErrorMessage,
  dp as ErrorSummary,
  lu as Expander,
  me as FRUTIGER_FONT_FILES,
  jr as Fieldset,
  qh as FocusOutlineOffset,
  Xh as FocusOutlineStyle,
  Gh as FocusOutlineWidth,
  Jh as FocusShadowButton,
  Zh as FocusShadowInput,
  Xt as FontFamilyBase,
  Zt as FontFamilyFallback,
  Jt as FontFamilyPrint,
  xr as FontLineHeightBase,
  nn as FontSize14Mobile,
  on as FontSize14Print,
  rn as FontSize14Tablet,
  an as FontSize16Mobile,
  ln as FontSize16Print,
  sn as FontSize16Tablet,
  cn as FontSize19Mobile,
  dn as FontSize19Print,
  un as FontSize19Tablet,
  fn as FontSize22Mobile,
  pn as FontSize22Print,
  hn as FontSize22Tablet,
  mn as FontSize26Mobile,
  bn as FontSize26Print,
  gn as FontSize26Tablet,
  xn as FontSize36Mobile,
  vn as FontSize36Print,
  yn as FontSize36Tablet,
  Sn as FontSize48Mobile,
  wn as FontSize48Print,
  kn as FontSize48Tablet,
  br as FontSizeBase,
  en as FontWeightBold,
  tn as FontWeightLight,
  Qt as FontWeightNormal,
  gp as Footer,
  Xf as FormBorderRadius,
  Gf as FormBorderWidthDefault,
  qf as FormBorderWidthError,
  Yf as FormErrorTextDefault,
  Vf as FormErrorTypographyWeight,
  Kf as FormHintTextDefault,
  Ff as FormInputBackgroundDefault,
  Pf as FormInputBackgroundDisabled,
  Mf as FormInputBackgroundError,
  Df as FormInputBackgroundFocus,
  Bf as FormInputBorderDefault,
  Rf as FormInputBorderDisabled,
  If as FormInputBorderError,
  Lf as FormInputBorderFocus,
  Hf as FormInputTextDefault,
  zf as FormInputTextDisabled,
  Af as FormInputTextPlaceholder,
  Wf as FormLabelTextDefault,
  Of as FormLabelTextRequired,
  Uf as FormLabelTypographyWeight,
  qa as FormSpacingCheckboxLabelPadding,
  Ga as FormSpacingCheckboxSize,
  Ka as FormSpacingInputMinHeight,
  Va as FormSpacingInputPadding,
  bp as GanttChart,
  $h as GridGutter,
  Ch as GridGutterHalf,
  Th as GridPageWidth,
  mp as Header,
  ft as Heading,
  Ne as HeadingsNhsukHeadingL,
  Ee as HeadingsNhsukHeadingM,
  je as HeadingsNhsukHeadingS,
  _e as HeadingsNhsukHeadingXl,
  Fe as HeadingsNhsukHeadingXs,
  Gi as Hero,
  na as Hint,
  Fp as Images,
  Nr as Input,
  Cp as InsetText,
  Er as Label,
  yh as LayoutColumnActions,
  mh as LayoutColumnFull,
  gh as LayoutColumnHalf,
  xh as LayoutColumnQuarter,
  bh as LayoutColumnThird,
  ph as LayoutContainerMaxWidth,
  Ap as NHSBodyText,
  zp as NHSBodyTextLarge,
  Wp as NHSBodyTextSmall,
  Bp as NHSHeading1,
  Lp as NHSHeading2,
  Ip as NHSHeading3,
  Rp as NHSHeading4,
  Hp as NHSHeading5,
  Op as NHSLedeText,
  Up as NHSLedeTextSmall,
  pp as NHSThemeProvider,
  rm as NHS_FALLBACK_FONT_STACK,
  nm as NHS_FONT_STACK,
  vp as Pagination,
  au as Panel,
  De as ParagraphsBody,
  Pe as ParagraphsBodyLarge,
  Me as ParagraphsBodySmall,
  Be as ParagraphsLedeText,
  Le as ParagraphsLedeTextSmall,
  up as Radios,
  cp as Select,
  Wh as ShadowButtonDefault,
  Yh as ShadowButtonFocus,
  Oh as ShadowButtonSecondary,
  Uh as ShadowButtonWarning,
  Vh as ShadowCardDefault,
  Kh as ShadowCardHover,
  hh as SizeButtonMinHeightDesktop,
  fh as SizeButtonMinHeightMobile,
  oh as SizeFormControlLarge,
  rh as SizeFormControlMedium,
  nh as SizeFormControlSmall,
  uh as SizeFormInputWidth2xl,
  dh as SizeFormInputWidth3xl,
  lh as SizeFormInputWidthLg,
  ih as SizeFormInputWidthMd,
  sh as SizeFormInputWidthSm,
  ch as SizeFormInputWidthXl,
  ah as SizeFormInputWidthXs,
  eh as SizeIconExtraLarge,
  Qf as SizeIconLarge,
  Jf as SizeIconMedium,
  th as SizeIconNhsDefault,
  Zf as SizeIconSmall,
  yp as SkipLink,
  Pp as SortStatusControl,
  Xa as Spacing0,
  Za as Spacing1,
  Ja as Spacing2,
  Qa as Spacing3,
  es as Spacing4,
  ts as Spacing5,
  ns as Spacing6,
  rs as Spacing7,
  os as Spacing8,
  as as Spacing9,
  Zn as SpacingResponsive0Mobile,
  Jn as SpacingResponsive0Tablet,
  Qn as SpacingResponsive1Mobile,
  er as SpacingResponsive1Tablet,
  tr as SpacingResponsive2Mobile,
  nr as SpacingResponsive2Tablet,
  rr as SpacingResponsive3Mobile,
  or as SpacingResponsive3Tablet,
  ar as SpacingResponsive4Mobile,
  sr as SpacingResponsive4Tablet,
  ir as SpacingResponsive5Mobile,
  lr as SpacingResponsive5Tablet,
  cr as SpacingResponsive6Mobile,
  ur as SpacingResponsive6Tablet,
  dr as SpacingResponsive7Mobile,
  fr as SpacingResponsive7Tablet,
  hr as SpacingResponsive8Mobile,
  pr as SpacingResponsive8Tablet,
  mr as SpacingResponsive9Mobile,
  gr as SpacingResponsive9Tablet,
  Hh as StateDisabledBackground,
  Ah as StateDisabledBorder,
  zh as StateDisabledText,
  _h as StateErrorBackground,
  Nh as StateErrorBorder,
  Eh as StateErrorText,
  Lh as StateInfoBackground,
  Ih as StateInfoBorder,
  Rh as StateInfoText,
  jh as StateSuccessBackground,
  Fh as StateSuccessBorder,
  Dh as StateSuccessText,
  Ph as StateWarningBackground,
  Mh as StateWarningBorder,
  Bh as StateWarningText,
  _p as SummaryList,
  Np as Table,
  Ep as Tabs,
  _r as Tag,
  cu as TaskList,
  Ui as Textarea,
  _u as TransitionButtonDefault,
  Nu as TransitionButtonShadow,
  ju as TransitionCardHover,
  Eu as TransitionInputFocus,
  jp as WarningCallout,
  om as checkFrutigerLoaded,
  em as generateFrutigerFontFace,
  Mp as getResponsiveStyles,
  tm as preloadFrutigerFonts,
  Vp as useColors,
  Xp as useComponentSpacing,
  Zp as useNHSHeadings,
  Jp as useNHSParagraphs,
  hp as useNHSTheme,
  Qp as useNHSTypographySystem,
  qp as useResponsiveSpacing,
  Kp as useSpacing,
  Yp as useTokens,
  Gp as useTypography
};
//# sourceMappingURL=index.esm.js.map
