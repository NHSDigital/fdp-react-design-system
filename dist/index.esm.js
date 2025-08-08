import * as ls from "react";
import pe, { useRef as te, useCallback as J, useState as ne, useContext as qe, useEffect as oe, useMemo as se, forwardRef as tt, createContext as _n, createElement as Fa, useImperativeHandle as Da, useReducer as cs } from "react";
import { flushSync as us } from "react-dom";
function ds(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Et = { exports: {} }, gt = {};
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
  function n(r, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var l in o)
        l !== "key" && (s[l] = o[l]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: o !== void 0 ? o : null,
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
        return E.$$typeof === _ ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case g:
          return "Fragment";
        case D:
          return "Profiler";
        case $:
          return "StrictMode";
        case R:
          return "Suspense";
        case B:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case w:
            return "Portal";
          case P:
            return (E.displayName || "Context") + ".Provider";
          case C:
            return (E._context.displayName || "Context") + ".Consumer";
          case S:
            var U = E.render;
            return E = E.displayName, E || (E = U.displayName || U.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case L:
            return U = E.displayName || null, U !== null ? U : e(E.type) || "Memo";
          case x:
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
      if (E === g) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === x)
        return "<...>";
      try {
        var U = e(E);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var E = c.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (F.call(E, "key")) {
        var U = Object.getOwnPropertyDescriptor(E, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function l(E, U) {
      function W() {
        M || (M = !0, console.error(
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
    function f(E, U, W, ee, V, k, H, q) {
      return W = k.ref, E = {
        $$typeof: b,
        type: E,
        key: U,
        props: k,
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
        value: H
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, U, W, ee, V, k, H, q) {
      var T = U.children;
      if (T !== void 0)
        if (ee)
          if (G(T)) {
            for (ee = 0; ee < T.length; ee++)
              p(T[ee]);
            Object.freeze && Object.freeze(T);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(T);
      if (F.call(U, "key")) {
        T = e(E);
        var y = Object.keys(U).filter(function(A) {
          return A !== "key";
        });
        ee = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", Z[T + ee] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          T,
          y,
          T
        ), Z[T + ee] = !0);
      }
      if (T = null, W !== void 0 && (n(W), T = "" + W), i(U) && (n(U.key), T = "" + U.key), "key" in U) {
        W = {};
        for (var I in U)
          I !== "key" && (W[I] = U[I]);
      } else W = U;
      return T && l(
        W,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), f(
        E,
        T,
        k,
        V,
        o(),
        W,
        H,
        q
      );
    }
    function p(E) {
      typeof E == "object" && E !== null && E.$$typeof === b && E._store && (E._store.validated = 1);
    }
    var m = pe, b = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), P = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), c = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, G = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var M, h = {}, z = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), Y = j(r(s)), Z = {};
    bt.Fragment = g, bt.jsx = function(E, U, W, ee, V) {
      var k = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        E,
        U,
        W,
        !1,
        ee,
        V,
        k ? Error("react-stack-top-frame") : z,
        k ? j(r(E)) : Y
      );
    }, bt.jsxs = function(E, U, W, ee, V) {
      var k = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        E,
        U,
        W,
        !0,
        ee,
        V,
        k ? Error("react-stack-top-frame") : z,
        k ? j(r(E)) : Y
      );
    };
  }()), bt;
}
var Wr;
function ps() {
  return Wr || (Wr = 1, process.env.NODE_ENV === "production" ? Et.exports = fs() : Et.exports = hs()), Et.exports;
}
var a = ps(), Nn = { exports: {} };
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
          l && (s = o(s, r(l)));
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
          t.call(s, l) && s[l] && (i = o(i, l));
        return i;
      }
      function o(s, i) {
        return i ? s ? s + " " + i : s + i : s;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Nn)), Nn.exports;
}
var gs = ms();
const K = /* @__PURE__ */ ds(gs), sp = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: r,
  ...o
}) => {
  const s = K(
    "nhsuk-action-link__link",
    r
  );
  return /* @__PURE__ */ a.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ a.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...o,
      children: [
        /* @__PURE__ */ a.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ a.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ a.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "nhsuk-action-link__text", children: e })
      ]
    }
  ) });
}, Tn = typeof document < "u" ? pe.useLayoutEffect : () => {
};
var jn;
const bs = (jn = pe.useInsertionEffect) !== null && jn !== void 0 ? jn : Tn;
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
}, Pa = /* @__PURE__ */ pe.createContext(At), xs = /* @__PURE__ */ pe.createContext(!1);
let vs = !!(typeof window < "u" && window.document && window.document.createElement), En = /* @__PURE__ */ new WeakMap();
function ys(e = !1) {
  let t = qe(Pa), n = te(null);
  if (n.current === null && !e) {
    var r, o;
    let s = (o = pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || o === void 0 || (r = o.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (s) {
      let i = En.get(s);
      i == null ? En.set(s, {
        id: t.current,
        state: s.memoizedState
      }) : s.memoizedState !== i.state && (t.current = i.id, En.delete(s));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function ks(e) {
  let t = qe(Pa);
  t === At && !vs && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = ys(!!e), r = t === At && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Ss(e) {
  let t = pe.useId(), [n] = ne(Cs()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${At.prefix}`;
  return e || `${r}-${t}`;
}
const ws = typeof pe.useId == "function" ? Ss : ks;
function _s() {
  return !1;
}
function Ts() {
  return !0;
}
function $s(e) {
  return () => {
  };
}
function Cs() {
  return typeof pe.useSyncExternalStore == "function" ? pe.useSyncExternalStore($s, _s, Ts) : qe(xs);
}
let Ns = !!(typeof window < "u" && window.document && window.document.createElement), lt = /* @__PURE__ */ new Map(), kt;
typeof FinalizationRegistry < "u" && (kt = new FinalizationRegistry((e) => {
  lt.delete(e);
}));
function Ur(e) {
  let [t, n] = ne(e), r = te(null), o = ws(t), s = te(null);
  if (kt && kt.register(s, o), Ns) {
    const i = lt.get(o);
    i && !i.includes(r) ? i.push(r) : lt.set(o, [
      r
    ]);
  }
  return Tn(() => {
    let i = o;
    return () => {
      kt && kt.unregister(s), lt.delete(i);
    };
  }, [
    o
  ]), oe(() => {
    let i = r.current;
    return i && n(i), () => {
      i && (r.current = null);
    };
  }), o;
}
function js(e, t) {
  if (e === t) return e;
  let n = lt.get(e);
  if (n)
    return n.forEach((o) => o.current = t), t;
  let r = lt.get(t);
  return r ? (r.forEach((o) => o.current = e), e) : t;
}
function Ma(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const he = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, ve = (e) => e && "window" in e && e.window === e ? e : he(e).defaultView || window;
function Es(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Fs(e) {
  return Es(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Ds = !1;
function vr() {
  return Ds;
}
function ce(e, t) {
  if (!vr()) return t && e ? e.contains(t) : !1;
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
  if (!vr()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function ie(e) {
  return vr() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Ba(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ba(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ps() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ba(e)) && (r && (r += " "), r += t);
  return r;
}
function Ge(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let o in r) {
      let s = t[o], i = r[o];
      typeof s == "function" && typeof i == "function" && // This is a lot faster than a regex.
      o[0] === "o" && o[1] === "n" && o.charCodeAt(2) >= /* 'A' */
      65 && o.charCodeAt(2) <= /* 'Z' */
      90 ? t[o] = Ma(s, i) : (o === "className" || o === "UNSAFE_className") && typeof s == "string" && typeof i == "string" ? t[o] = Ps(s, i) : o === "id" && s && i ? t.id = js(s, i) : t[o] = i !== void 0 ? i : s;
    }
  }
  return t;
}
function Ms(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const r = e.map((o) => {
      const s = Yr(o, t);
      return n || (n = typeof s == "function"), s;
    });
    if (n) return () => {
      r.forEach((o, s) => {
        typeof o == "function" ? o() : Yr(e[s], null);
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
]), Hs = /* @__PURE__ */ new Set([
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
]), Rs = /^(data-.*)$/;
function La(e, t = {}) {
  let { labelable: n, isLink: r, global: o, events: s = o, propNames: i } = t, l = {};
  for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (Bs.has(u) || n && Ls.has(u) || r && Is.has(u) || o && Hs.has(u) || s && Vr.has(u) || u.endsWith("Capture") && Vr.has(u.slice(0, -7)) || i?.has(u) || Rs.test(u)) && (l[u] = e[u]);
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
function $n(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function yr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ze(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const dt = ze(function() {
  return yr(/^Mac/i);
}), Os = ze(function() {
  return yr(/^iPhone/i);
}), Ia = ze(function() {
  return yr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  dt() && navigator.maxTouchPoints > 1;
}), kr = ze(function() {
  return Os() || Ia();
});
ze(function() {
  return dt() || kr();
});
const Us = ze(function() {
  return $n(/AppleWebKit/i) && !Ys();
}), Ys = ze(function() {
  return $n(/Chrome/i);
}), Ha = ze(function() {
  return $n(/Android/i);
}), Vs = ze(function() {
  return $n(/Firefox/i);
});
function _t(e, t, n = !0) {
  var r, o;
  let { metaKey: s, ctrlKey: i, altKey: l, shiftKey: u } = t;
  Vs() && (!((o = window.event) === null || o === void 0 || (r = o.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (dt() ? s = !0 : i = !0);
  let f = Us() && dt() && !Ia() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
  _t.isOpening = n, ut(e), e.dispatchEvent(f), _t.isOpening = !1;
}
_t.isOpening = !1;
let Ke = /* @__PURE__ */ new Map(), zn = /* @__PURE__ */ new Set();
function Kr() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let o = Ke.get(r.target);
    o || (o = /* @__PURE__ */ new Set(), Ke.set(r.target, o), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), o.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let o = Ke.get(r.target);
    if (o && (o.delete(r.propertyName), o.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ke.delete(r.target)), Ke.size === 0)) {
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
function Ra(e) {
  requestAnimationFrame(() => {
    Ks(), Ke.size === 0 ? e() : zn.add(e);
  });
}
function Sr() {
  let e = te(/* @__PURE__ */ new Map()), t = J((o, s, i, l) => {
    let u = l?.once ? (...f) => {
      e.current.delete(i), i(...f);
    } : i;
    e.current.set(i, {
      type: s,
      eventTarget: o,
      fn: u,
      options: l
    }), o.addEventListener(s, u, l);
  }, []), n = J((o, s, i, l) => {
    var u;
    let f = ((u = e.current.get(i)) === null || u === void 0 ? void 0 : u.fn) || i;
    o.removeEventListener(s, f, l), e.current.delete(i);
  }, []), r = J(() => {
    e.current.forEach((o, s) => {
      n(o.eventTarget, o.type, s, o.options);
    });
  }, [
    n
  ]);
  return oe(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Gs(e) {
  const t = te(null), n = te(void 0), r = J((o) => {
    if (typeof e == "function") {
      const s = e, i = s(o);
      return () => {
        typeof i == "function" ? i() : s(null);
      };
    } else if (e)
      return e.current = o, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return se(() => ({
    get current() {
      return t.current;
    },
    set current(o) {
      t.current = o, n.current && (n.current(), n.current = void 0), o != null && (n.current = r(o));
    }
  }), [
    r
  ]);
}
function Aa(e, t) {
  Tn(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Wn(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ha() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function qs(e) {
  return !Ha() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const Xs = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Zs(e) {
  const t = ve(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, o = n !== "none" && r !== "hidden" && r !== "collapse";
  if (o) {
    const { getComputedStyle: s } = e.ownerDocument.defaultView;
    let { display: i, visibility: l } = s(e);
    o = i !== "none" && l !== "hidden" && l !== "collapse";
  }
  return o;
}
function Js(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function za(e, t) {
  return Xs ? e.checkVisibility() : e.nodeName !== "#comment" && Zs(e) && Js(e, t) && (!e.parentElement || za(e.parentElement, e));
}
const Wa = [
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
], Qs = Wa.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Wa.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function ei(e) {
  return e.matches(Qs) && za(e) && !ti(e);
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
  let { className: t, style: n, children: r, defaultClassName: o, defaultChildren: s, defaultStyle: i, values: l } = e;
  return se(() => {
    let u, f, d;
    return typeof t == "function" ? u = t({
      ...l,
      defaultClassName: o
    }) : u = t, typeof n == "function" ? f = n({
      ...l,
      defaultStyle: i || {}
    }) : f = n, typeof r == "function" ? d = r({
      ...l,
      defaultChildren: s
    }) : r == null ? d = s : d = r, {
      className: u ?? o,
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
    o,
    s,
    i,
    l
  ]);
}
function ai(e, t) {
  let n = qe(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = t || ni;
    if (!n.slots[r]) {
      let o = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`)), s = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${s} Valid slot names are ${o}.`);
    }
    return n.slots[r];
  }
  return n;
}
function oi(e, t, n) {
  let r = ai(n, e.slot) || {}, { ref: o, ...s } = r, i = Gs(se(() => Ms(t, o), [
    t,
    o
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
const si = /* @__PURE__ */ _n(!1);
function ii(e) {
  let t = (n, r) => qe(si) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, tt(t);
}
function wr(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Oa(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Ua(e) {
  let t = te({
    isFocused: !1,
    observer: null
  });
  Tn(() => {
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
      let o = r.target, s = (i) => {
        if (t.current.isFocused = !1, o.disabled) {
          let l = wr(i);
          n(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      o.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && o.disabled) {
          var i;
          (i = t.current.observer) === null || i === void 0 || i.disconnect();
          let l = o === document.activeElement ? null : document.activeElement;
          o.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), o.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(o, {
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
  let t = ve(e), n = t.document.activeElement;
  if (!n || n === e) return;
  zt = !0;
  let r = !1, o = (d) => {
    (d.target === n || r) && d.stopImmediatePropagation();
  }, s = (d) => {
    (d.target === n || r) && (d.stopImmediatePropagation(), !e && !r && (r = !0, ut(n), u()));
  }, i = (d) => {
    (d.target === e || r) && d.stopImmediatePropagation();
  }, l = (d) => {
    (d.target === e || r) && (d.stopImmediatePropagation(), r || (r = !0, ut(n), u()));
  };
  t.addEventListener("blur", o, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", i, !0);
  let u = () => {
    cancelAnimationFrame(f), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", i, !0), zt = !1, r = !1;
  }, f = requestAnimationFrame(u);
  return u;
}
let ot = "default", On = "", Ht = /* @__PURE__ */ new WeakMap();
function qr(e) {
  if (kr()) {
    if (ot === "default") {
      const t = he(e);
      On = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    ot = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Ht.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Fn(e) {
  if (kr()) {
    if (ot !== "disabled") return;
    ot = "restoring", setTimeout(() => {
      Ra(() => {
        if (ot === "restoring") {
          const t = he(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = On || ""), On = "", ot = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Ht.has(e)) {
    let t = Ht.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Ht.delete(e);
  }
}
const Ya = pe.createContext({
  register: () => {
  }
});
Ya.displayName = "PressResponderContext";
function li(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Va(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function ci(e, t) {
  var n = Va(e, t, "get");
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
  var r = Va(e, t, "set");
  return fi(e, r, n), n;
}
function hi(e) {
  let t = qe(Ya);
  if (t) {
    let { register: n, ...r } = t;
    e = Ge(r, e), n();
  }
  return Aa(t, e.ref), e;
}
var Dt = /* @__PURE__ */ new WeakMap();
class Pt {
  continuePropagation() {
    Xr(this, Dt, !1);
  }
  get shouldStopPropagation() {
    return ci(this, Dt);
  }
  constructor(t, n, r, o) {
    di(this, Dt, {
      writable: !0,
      value: void 0
    }), Xr(this, Dt, !0);
    var s;
    let i = (s = o?.target) !== null && s !== void 0 ? s : r.currentTarget;
    const l = i?.getBoundingClientRect();
    let u, f = 0, d, p = null;
    r.clientX != null && r.clientY != null && (d = r.clientX, p = r.clientY), l && (d != null && p != null ? (u = d - l.left, f = p - l.top) : (u = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = f;
  }
}
const Zr = Symbol("linkClicked"), Jr = "react-aria-pressable-style", Qr = "data-react-aria-pressable";
function pi(e) {
  let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: o, onPressUp: s, onClick: i, isDisabled: l, isPressed: u, preventFocusOnPress: f, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: m, ...b } = hi(e), [w, g] = ne(!1), $ = te({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: D, removeAllGlobalListeners: C } = Sr(), P = Ve((c, F) => {
    let G = $.current;
    if (l || G.didFirePressStart) return !1;
    let j = !0;
    if (G.isTriggeringEvent = !0, r) {
      let M = new Pt("pressstart", F, c);
      r(M), j = M.shouldStopPropagation;
    }
    return n && n(!0), G.isTriggeringEvent = !1, G.didFirePressStart = !0, g(!0), j;
  }), S = Ve((c, F, G = !0) => {
    let j = $.current;
    if (!j.didFirePressStart) return !1;
    j.didFirePressStart = !1, j.isTriggeringEvent = !0;
    let M = !0;
    if (o) {
      let h = new Pt("pressend", F, c);
      o(h), M = h.shouldStopPropagation;
    }
    if (n && n(!1), g(!1), t && G && !l) {
      let h = new Pt("press", F, c);
      t(h), M && (M = h.shouldStopPropagation);
    }
    return j.isTriggeringEvent = !1, M;
  }), R = Ve((c, F) => {
    let G = $.current;
    if (l) return !1;
    if (s) {
      G.isTriggeringEvent = !0;
      let j = new Pt("pressup", F, c);
      return s(j), G.isTriggeringEvent = !1, j.shouldStopPropagation;
    }
    return !0;
  }), B = Ve((c) => {
    let F = $.current;
    if (F.isPressed && F.target) {
      F.didFirePressStart && F.pointerType != null && S(Xe(F.target, c), F.pointerType, !1), F.isPressed = !1, F.isOverTarget = !1, F.activePointerId = null, F.pointerType = null, C(), p || Fn(F.target);
      for (let G of F.disposables) G();
      F.disposables = [];
    }
  }), L = Ve((c) => {
    d && B(c);
  }), x = Ve((c) => {
    i?.(c);
  }), v = Ve((c, F) => {
    if (i) {
      let G = new MouseEvent("click", c);
      Oa(G, F), i(wr(G));
    }
  }), _ = se(() => {
    let c = $.current, F = {
      onKeyDown(j) {
        if (Dn(j.nativeEvent, j.currentTarget) && ce(j.currentTarget, ie(j.nativeEvent))) {
          var M;
          na(ie(j.nativeEvent), j.key) && j.preventDefault();
          let h = !0;
          if (!c.isPressed && !j.repeat) {
            c.target = j.currentTarget, c.isPressed = !0, c.pointerType = "keyboard", h = P(j, "keyboard");
            let z = j.currentTarget, Y = (Z) => {
              Dn(Z, z) && !Z.repeat && ce(z, ie(Z)) && c.target && R(Xe(c.target, Z), "keyboard");
            };
            D(he(j.currentTarget), "keyup", Ma(Y, G), !0);
          }
          h && j.stopPropagation(), j.metaKey && dt() && ((M = c.metaKeyEvents) === null || M === void 0 || M.set(j.key, j.nativeEvent));
        } else j.key === "Meta" && (c.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(j) {
        if (!(j && !ce(j.currentTarget, ie(j.nativeEvent))) && j && j.button === 0 && !c.isTriggeringEvent && !_t.isOpening) {
          let M = !0;
          if (l && j.preventDefault(), !c.ignoreEmulatedMouseEvents && !c.isPressed && (c.pointerType === "virtual" || Wn(j.nativeEvent))) {
            let h = P(j, "virtual"), z = R(j, "virtual"), Y = S(j, "virtual");
            x(j), M = h && z && Y;
          } else if (c.isPressed && c.pointerType !== "keyboard") {
            let h = c.pointerType || j.nativeEvent.pointerType || "virtual", z = R(Xe(j.currentTarget, j), h), Y = S(Xe(j.currentTarget, j), h, !0);
            M = z && Y, c.isOverTarget = !1, x(j), B(j);
          }
          c.ignoreEmulatedMouseEvents = !1, M && j.stopPropagation();
        }
      }
    }, G = (j) => {
      var M;
      if (c.isPressed && c.target && Dn(j, c.target)) {
        var h;
        na(ie(j), j.key) && j.preventDefault();
        let Y = ie(j), Z = ce(c.target, ie(j));
        S(Xe(c.target, j), "keyboard", Z), Z && v(j, c.target), C(), j.key !== "Enter" && _r(c.target) && ce(c.target, Y) && !j[Zr] && (j[Zr] = !0, _t(c.target, j, !1)), c.isPressed = !1, (h = c.metaKeyEvents) === null || h === void 0 || h.delete(j.key);
      } else if (j.key === "Meta" && (!((M = c.metaKeyEvents) === null || M === void 0) && M.size)) {
        var z;
        let Y = c.metaKeyEvents;
        c.metaKeyEvents = void 0;
        for (let Z of Y.values()) (z = c.target) === null || z === void 0 || z.dispatchEvent(new KeyboardEvent("keyup", Z));
      }
    };
    if (typeof PointerEvent < "u") {
      F.onPointerDown = (h) => {
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
          "releasePointerCapture" in Y && Y.releasePointerCapture(h.pointerId), D(he(h.currentTarget), "pointerup", j, !1), D(he(h.currentTarget), "pointercancel", M, !1);
        }
        z && h.stopPropagation();
      }, F.onMouseDown = (h) => {
        if (ce(h.currentTarget, ie(h.nativeEvent)) && h.button === 0) {
          if (f) {
            let z = Gr(h.target);
            z && c.disposables.push(z);
          }
          h.stopPropagation();
        }
      }, F.onPointerUp = (h) => {
        !ce(h.currentTarget, ie(h.nativeEvent)) || c.pointerType === "virtual" || h.button === 0 && !c.isPressed && R(h, c.pointerType || h.pointerType);
      }, F.onPointerEnter = (h) => {
        h.pointerId === c.activePointerId && c.target && !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, P(Xe(c.target, h), c.pointerType));
      }, F.onPointerLeave = (h) => {
        h.pointerId === c.activePointerId && c.target && c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, S(Xe(c.target, h), c.pointerType, !1), L(h));
      };
      let j = (h) => {
        if (h.pointerId === c.activePointerId && c.isPressed && h.button === 0 && c.target) {
          if (ce(c.target, ie(h)) && c.pointerType != null) {
            let z = !1, Y = setTimeout(() => {
              c.isPressed && c.target instanceof HTMLElement && (z ? B(h) : (ut(c.target), c.target.click()));
            }, 80);
            D(h.currentTarget, "click", () => z = !0, !0), c.disposables.push(() => clearTimeout(Y));
          } else B(h);
          c.isOverTarget = !1;
        }
      }, M = (h) => {
        B(h);
      };
      F.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && B(h);
      };
    } else if (process.env.NODE_ENV === "test") {
      F.onMouseDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (c.ignoreEmulatedMouseEvents) {
          h.stopPropagation();
          return;
        }
        if (c.isPressed = !0, c.isOverTarget = !0, c.target = h.currentTarget, c.pointerType = Wn(h.nativeEvent) ? "virtual" : "mouse", us(() => P(h, c.pointerType)) && h.stopPropagation(), f) {
          let Y = Gr(h.target);
          Y && c.disposables.push(Y);
        }
        D(he(h.currentTarget), "mouseup", j, !1);
      }, F.onMouseEnter = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !0, z = P(h, c.pointerType)), z && h.stopPropagation();
      }, F.onMouseLeave = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !1, z = S(h, c.pointerType, !1), L(h)), z && h.stopPropagation();
      }, F.onMouseUp = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && !c.ignoreEmulatedMouseEvents && h.button === 0 && !c.isPressed && R(h, c.pointerType || "mouse");
      };
      let j = (h) => {
        if (h.button === 0) {
          if (c.ignoreEmulatedMouseEvents) {
            c.ignoreEmulatedMouseEvents = !1;
            return;
          }
          c.target && c.target.contains(h.target) && c.pointerType != null || B(h), c.isOverTarget = !1;
        }
      };
      F.onTouchStart = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = mi(h.nativeEvent);
        if (!z) return;
        c.activePointerId = z.identifier, c.ignoreEmulatedMouseEvents = !0, c.isOverTarget = !0, c.isPressed = !0, c.target = h.currentTarget, c.pointerType = "touch", p || qr(c.target), P(Ye(c.target, h), c.pointerType) && h.stopPropagation(), D(ve(h.currentTarget), "scroll", M, !0);
      }, F.onTouchMove = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let z = ea(h.nativeEvent, c.activePointerId), Y = !0;
        z && ta(z, h.currentTarget) ? !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, Y = P(Ye(c.target, h), c.pointerType)) : c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, Y = S(Ye(c.target, h), c.pointerType, !1), L(Ye(c.target, h))), Y && h.stopPropagation();
      }, F.onTouchEnd = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let z = ea(h.nativeEvent, c.activePointerId), Y = !0;
        z && ta(z, h.currentTarget) && c.pointerType != null ? (R(Ye(c.target, h), c.pointerType), Y = S(Ye(c.target, h), c.pointerType), v(h.nativeEvent, c.target)) : c.isOverTarget && c.pointerType != null && (Y = S(Ye(c.target, h), c.pointerType, !1)), Y && h.stopPropagation(), c.isPressed = !1, c.activePointerId = null, c.isOverTarget = !1, c.ignoreEmulatedMouseEvents = !0, c.target && !p && Fn(c.target), C();
      }, F.onTouchCancel = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && (h.stopPropagation(), c.isPressed && B(Ye(c.target, h)));
      };
      let M = (h) => {
        c.isPressed && ce(ie(h), c.target) && B({
          currentTarget: c.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      F.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && B(h);
      };
    }
    return F;
  }, [
    D,
    l,
    f,
    C,
    p,
    B,
    L,
    S,
    P,
    R,
    x,
    v
  ]);
  return oe(() => {
    if (!m || process.env.NODE_ENV === "test") return;
    const c = he(m.current);
    if (!c || !c.head || c.getElementById(Jr)) return;
    const F = c.createElement("style");
    F.id = Jr, F.textContent = `
@layer {
  [${Qr}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), c.head.prepend(F);
  }, [
    m
  ]), oe(() => {
    let c = $.current;
    return () => {
      var F;
      p || Fn((F = c.target) !== null && F !== void 0 ? F : void 0);
      for (let G of c.disposables) G();
      c.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: u || w,
    pressProps: Ge(b, _, {
      [Qr]: !0
    })
  };
}
function _r(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Dn(e, t) {
  const { key: n, code: r } = e, o = t, s = o.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(o instanceof ve(o).HTMLInputElement && !Ka(o, n) || o instanceof ve(o).HTMLTextAreaElement || o.isContentEditable) && // Links should only trigger with Enter key
  !((s === "link" || !s && _r(o)) && n !== "Enter");
}
function mi(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function ea(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const o = n[r];
    if (o.identifier === t) return o;
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
function ta(e, t) {
  let n = t.getBoundingClientRect(), r = gi(e);
  return bi(n, r);
}
function xi(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !_r(e);
}
function na(e, t) {
  return e instanceof HTMLInputElement ? !Ka(e, t) : xi(e);
}
const vi = /* @__PURE__ */ new Set([
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
function Ka(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : vi.has(e.type);
}
let mt = null, Un = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map(), Qe = !1, Yn = !1;
const yi = {
  Tab: !0,
  Escape: !0
};
function Tr(e, t) {
  for (let n of Un) n(e, t);
}
function ki(e) {
  return !(e.metaKey || !dt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Wt(e) {
  Qe = !0, ki(e) && (mt = "keyboard", Tr("keyboard", e));
}
function xe(e) {
  mt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Qe = !0, Tr("pointer", e));
}
function Ga(e) {
  Wn(e) && (Qe = !0, mt = "virtual");
}
function qa(e) {
  e.target === window || e.target === document || zt || !e.isTrusted || (!Qe && !Yn && (mt = "virtual", Tr("virtual", e)), Qe = !1, Yn = !1);
}
function Xa() {
  zt || (Qe = !1, Yn = !0);
}
function Vn(e) {
  if (typeof window > "u" || typeof document > "u" || St.get(ve(e))) return;
  const t = ve(e), n = he(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Qe = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Wt, !0), n.addEventListener("keyup", Wt, !0), n.addEventListener("click", Ga, !0), t.addEventListener("focus", qa, !0), t.addEventListener("blur", Xa, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", xe, !0), n.addEventListener("pointermove", xe, !0), n.addEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", xe, !0), n.addEventListener("mousemove", xe, !0), n.addEventListener("mouseup", xe, !0)), t.addEventListener("beforeunload", () => {
    Za(e);
  }, {
    once: !0
  }), St.set(t, {
    focus: r
  });
}
const Za = (e, t) => {
  const n = ve(e), r = he(e);
  t && r.removeEventListener("DOMContentLoaded", t), St.has(n) && (n.HTMLElement.prototype.focus = St.get(n).focus, r.removeEventListener("keydown", Wt, !0), r.removeEventListener("keyup", Wt, !0), r.removeEventListener("click", Ga, !0), n.removeEventListener("focus", qa, !0), n.removeEventListener("blur", Xa, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", xe, !0), r.removeEventListener("pointermove", xe, !0), r.removeEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", xe, !0), r.removeEventListener("mousemove", xe, !0), r.removeEventListener("mouseup", xe, !0)), St.delete(n));
};
function Si(e) {
  const t = he(e);
  let n;
  return t.readyState !== "loading" ? Vn(e) : (n = () => {
    Vn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Za(e, n);
}
typeof document < "u" && Si();
function Ja() {
  return mt !== "pointer";
}
function wi() {
  return mt;
}
const _i = /* @__PURE__ */ new Set([
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
function Ti(e, t, n) {
  let r = he(n?.target);
  const o = typeof window < "u" ? ve(n?.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? ve(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, i = typeof window < "u" ? ve(n?.target).HTMLElement : HTMLElement, l = typeof window < "u" ? ve(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof o && !_i.has(r.activeElement.type) || r.activeElement instanceof s || r.activeElement instanceof i && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !yi[n.key]);
}
function $i(e, t, n) {
  Vn(), oe(() => {
    let r = (o, s) => {
      Ti(!!n?.isTextInput, o, s) && e(Ja());
    };
    return Un.add(r), () => {
      Un.delete(r);
    };
  }, t);
}
function Ci(e) {
  const t = he(e), n = wt(t);
  if (wi() === "virtual") {
    let r = n;
    Ra(() => {
      wt(t) === r && e.isConnected && ut(e);
    });
  } else ut(e);
}
function Qa(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e;
  const s = J((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), o && o(!1), !0;
  }, [
    r,
    o
  ]), i = Ua(s), l = J((u) => {
    const f = he(u.target), d = f ? wt(f) : wt();
    u.target === u.currentTarget && d === ie(u.nativeEvent) && (n && n(u), o && o(!0), i(u));
  }, [
    o,
    n,
    i
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || o || r) ? l : void 0,
      onBlur: !t && (r || o) ? s : void 0
    }
  };
}
function ra(e) {
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
      onKeyDown: ra(e.onKeyDown),
      onKeyUp: ra(e.onKeyUp)
    }
  };
}
let ji = /* @__PURE__ */ pe.createContext(null);
function Ei(e) {
  let t = qe(ji) || {};
  Aa(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Fi(e, t) {
  let { focusProps: n } = Qa(e), { keyboardProps: r } = Ni(e), o = Ge(n, r), s = Ei(t), i = e.isDisabled ? {} : s, l = te(e.autoFocus);
  oe(() => {
    l.current && t.current && Ci(t.current), l.current = !1;
  }, [
    t
  ]);
  let u = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (u = void 0), {
    focusableProps: Ge({
      ...o,
      tabIndex: u
    }, i)
  };
}
function Di(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: o } = e, s = te({
    isFocusWithin: !1
  }), { addGlobalListener: i, removeAllGlobalListeners: l } = Sr(), u = J((p) => {
    p.currentTarget.contains(p.target) && s.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (s.current.isFocusWithin = !1, l(), n && n(p), o && o(!1));
  }, [
    n,
    o,
    s,
    l
  ]), f = Ua(u), d = J((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const m = he(p.target), b = wt(m);
    if (!s.current.isFocusWithin && b === ie(p.nativeEvent)) {
      r && r(p), o && o(!0), s.current.isFocusWithin = !0, f(p);
      let w = p.currentTarget;
      i(m, "focus", (g) => {
        if (s.current.isFocusWithin && !ce(w, g.target)) {
          let $ = new m.defaultView.FocusEvent("blur", {
            relatedTarget: g.target
          });
          Oa($, w);
          let D = wr($);
          u(D);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    o,
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
function aa(e) {
  e.pointerType === "touch" && Kn();
}
function Pi() {
  if (!(typeof document > "u"))
    return Mt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", aa) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Kn)), Mt++, () => {
      Mt--, !(Mt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", aa) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Kn));
    };
}
function Mi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: o } = e, [s, i] = ne(!1), l = te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  oe(Pi, []);
  let { addGlobalListener: u, removeAllGlobalListeners: f } = Sr(), { hoverProps: d, triggerHoverEnd: p } = se(() => {
    let m = (g, $) => {
      if (l.pointerType = $, o || $ === "touch" || l.isHovered || !g.currentTarget.contains(g.target)) return;
      l.isHovered = !0;
      let D = g.currentTarget;
      l.target = D, u(he(g.target), "pointerover", (C) => {
        l.isHovered && l.target && !ce(l.target, C.target) && b(C, C.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: D,
        pointerType: $
      }), n && n(!0), i(!0);
    }, b = (g, $) => {
      let D = l.target;
      l.pointerType = "", l.target = null, !($ === "touch" || !l.isHovered || !D) && (l.isHovered = !1, f(), r && r({
        type: "hoverend",
        target: D,
        pointerType: $
      }), n && n(!1), i(!1));
    }, w = {};
    return typeof PointerEvent < "u" ? (w.onPointerEnter = (g) => {
      Ot && g.pointerType === "mouse" || m(g, g.pointerType);
    }, w.onPointerLeave = (g) => {
      !o && g.currentTarget.contains(g.target) && b(g, g.pointerType);
    }) : process.env.NODE_ENV === "test" && (w.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, w.onMouseEnter = (g) => {
      !l.ignoreEmulatedMouseEvents && !Ot && m(g, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, w.onMouseLeave = (g) => {
      !o && g.currentTarget.contains(g.target) && b(g, "mouse");
    }), {
      hoverProps: w,
      triggerHoverEnd: b
    };
  }, [
    t,
    n,
    r,
    o,
    l,
    u,
    f
  ]);
  return oe(() => {
    o && p({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    o
  ]), {
    hoverProps: d,
    isHovered: s
  };
}
function Bi(e, t) {
  let { elementType: n = "button", isDisabled: r, onPress: o, onPressStart: s, onPressEnd: i, onPressUp: l, onPressChange: u, preventFocusOnPress: f, allowFocusWhenDisabled: d, onClick: p, href: m, target: b, rel: w, type: g = "button" } = e, $;
  n === "button" ? $ = {
    type: g,
    disabled: r,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : $ = {
    role: "button",
    href: n === "a" && !r ? m : void 0,
    target: n === "a" ? b : void 0,
    type: n === "input" ? g : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? w : void 0
  };
  let { pressProps: D, isPressed: C } = pi({
    onPressStart: s,
    onPressEnd: i,
    onPressChange: u,
    onPress: o,
    onPressUp: l,
    onClick: p,
    isDisabled: r,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: P } = Fi(e, t);
  d && (P.tabIndex = r ? -1 : P.tabIndex);
  let S = Ge(P, D, La(e, {
    labelable: !0
  }));
  return {
    isPressed: C,
    buttonProps: Ge($, S, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function Li(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, o = te({
    isFocused: !1,
    isFocusVisible: t || Ja()
  }), [s, i] = ne(!1), [l, u] = ne(() => o.current.isFocused && o.current.isFocusVisible), f = J(() => u(o.current.isFocused && o.current.isFocusVisible), []), d = J((b) => {
    o.current.isFocused = b, i(b), f();
  }, [
    f
  ]);
  $i((b) => {
    o.current.isFocusVisible = b, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = Qa({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: m } = Di({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: s,
    isFocusVisible: l,
    focusProps: r ? m : p
  };
}
const eo = 7e3;
let _e = null;
function oa(e, t = "assertive", n = eo) {
  _e ? _e.announce(e, t, n) : (_e = new Ii(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? _e.announce(e, t, n) : setTimeout(() => {
    _e?.isAttached() && _e?.announce(e, t, n);
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
  announce(t, n = "assertive", r = eo) {
    var o, s;
    if (!this.node) return;
    let i = document.createElement("div");
    typeof t == "object" ? (i.setAttribute("role", "img"), i.setAttribute("aria-labelledby", t["aria-labelledby"])) : i.textContent = t, n === "assertive" ? (o = this.assertiveLog) === null || o === void 0 || o.appendChild(i) : (s = this.politeLog) === null || s === void 0 || s.appendChild(i), t !== "" && setTimeout(() => {
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
const Hi = /* @__PURE__ */ _n(null), Ri = /* @__PURE__ */ _n({}), Ai = /* @__PURE__ */ ii(function(t, n) {
  [t, n] = oi(t, n, Ri), t = zi(t);
  let r = t, { isPending: o } = r, { buttonProps: s, isPressed: i } = Bi(t, n), { focusProps: l, isFocused: u, isFocusVisible: f } = Li(t), { hoverProps: d, isHovered: p } = Mi({
    ...t,
    isDisabled: t.isDisabled || o
  }), m = {
    isHovered: p,
    isPressed: (r.isPressed || i) && !o,
    isFocused: u,
    isFocusVisible: f,
    isDisabled: t.isDisabled || !1,
    isPending: o ?? !1
  }, b = ri({
    ...t,
    values: m,
    defaultClassName: "react-aria-Button"
  }), w = Ur(s.id), g = Ur(), $ = s["aria-labelledby"];
  o && ($ ? $ = `${$} ${g}` : s["aria-label"] && ($ = `${w} ${g}`));
  let D = te(o);
  oe(() => {
    let P = {
      "aria-labelledby": $ || w
    };
    (!D.current && u && o || D.current && u && !o) && oa(P, "assertive"), D.current = o;
  }, [
    o,
    u,
    $,
    w
  ]);
  let C = La(t, {
    global: !0
  });
  return delete C.onClick, /* @__PURE__ */ pe.createElement("button", {
    ...Ge(C, b, s, l, d),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: s.type === "submit" && o ? "button" : s.type,
    id: w,
    ref: n,
    "aria-labelledby": $,
    slot: t.slot || void 0,
    "aria-disabled": o ? "true" : s["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": m.isPressed || void 0,
    "data-hovered": p || void 0,
    "data-focused": u || void 0,
    "data-pending": o || void 0,
    "data-focus-visible": f || void 0
  }, /* @__PURE__ */ pe.createElement(Hi.Provider, {
    value: {
      id: g
    }
  }, b.children));
});
function zi(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const { forwardRef: Wi } = ls, $r = Wi(
  ({
    children: e,
    variant: t = "primary",
    size: n = "default",
    fullWidth: r = !1,
    className: o = "",
    ...s
  }, i) => {
    const l = [
      "nhs-aria-button",
      `nhs-aria-button--${t}`,
      n !== "default" ? `nhs-aria-button--${n}` : "",
      r ? "nhs-aria-button--full-width" : "",
      o
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ a.jsx(
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
$r.displayName = "Button";
const ip = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: r,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = K(
    "nhsuk-back-link",
    r
  ), u = K(
    "nhsuk-back-link__link"
  ), f = () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ a.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    t ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e
  ] });
  return /* @__PURE__ */ a.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ a.jsx(
    "button",
    {
      className: u,
      onClick: s,
      type: "button",
      ...i,
      children: f()
    }
  ) : /* @__PURE__ */ a.jsx(
    "a",
    {
      className: u,
      href: n,
      ...i,
      children: f()
    }
  ) });
}, Cr = ({
  text: e,
  html: t,
  children: n,
  color: r = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...f
}) => {
  const d = K(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${r}`]: r !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    u
  ), p = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ a.jsxs("strong", { className: d, ...f, children: [
    n || (t ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ a.jsx(
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
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: f = !1,
  describedBy: d,
  className: p,
  width: m = "full",
  inputMode: b,
  autoComplete: w,
  maxLength: g,
  minLength: $,
  pattern: D,
  step: C,
  min: P,
  max: S,
  onChange: R,
  onBlur: B,
  onFocus: L,
  onKeyDown: x,
  ...v
}) => {
  const _ = K(
    "nhsuk-input",
    {
      "nhsuk-input--error": f,
      [`nhsuk-input--width-${m}`]: m !== "full"
    },
    p
  );
  return /* @__PURE__ */ a.jsx(
    "input",
    {
      className: _,
      id: e,
      name: t,
      type: n,
      value: r,
      defaultValue: o,
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: b,
      autoComplete: w,
      maxLength: g,
      minLength: $,
      pattern: D,
      step: C,
      min: P,
      max: S,
      onChange: R,
      onBlur: B,
      onFocus: L,
      onKeyDown: x,
      ...v
    }
  );
}, jr = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: r = "m",
  children: o,
  ...s
}) => {
  const i = K(
    "nhsuk-label",
    {
      [`nhsuk-label--${r}`]: r !== "m"
    },
    t
  ), l = n ? "h1" : "label";
  return /* @__PURE__ */ a.jsx(
    l,
    {
      className: i,
      htmlFor: n ? void 0 : e,
      ...s,
      children: n ? /* @__PURE__ */ a.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o
    }
  );
}, Er = ({
  children: e,
  legend: t,
  className: n,
  describedBy: r,
  ...o
}) => {
  const s = K(
    "nhsuk-fieldset",
    n
  ), i = K(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const u = t?.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ a.jsx("h1", { className: "nhsuk-fieldset__heading", children: u }) : u;
  };
  return /* @__PURE__ */ a.jsxs(
    "fieldset",
    {
      className: s,
      "aria-describedby": r,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ a.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, Oi = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: r,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: f = !1,
  onChange: d,
  fieldsetAttributes: p,
  attributes: m,
  ...b
}) => {
  const [w, g] = ne(
    e.filter((x) => x.checked).map((x) => x.value)
  ), $ = n || t, D = i ? `${$}-hint` : void 0, C = l ? `${$}-error` : void 0, P = [D, C].filter(Boolean).join(" ") || void 0, S = (x, v) => {
    let _;
    v ? _ = [...w, x] : _ = w.filter((c) => c !== x), g(_), d?.(_);
  }, R = () => e.map((x, v) => {
    const _ = `${$}-${v + 1}`, c = `${_}-conditional`, F = w.includes(x.value), G = x.disabled || !1;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: _,
          name: t,
          type: "checkbox",
          value: x.value,
          checked: F,
          disabled: G,
          onChange: (j) => S(x.value, j.target.checked),
          "aria-describedby": x.hint ? `${_}-hint` : P,
          ...x.conditional && {
            "aria-controls": c,
            "aria-expanded": F ? "true" : "false"
          },
          ...x.attributes
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: _, children: x.text }),
      x.hint && /* @__PURE__ */ a.jsx("div", { id: `${_}-hint`, className: "nhsuk-checkboxes__hint", children: x.hint }),
      x.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: K("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !F
          }),
          id: c,
          children: typeof x.conditional == "object" && x.conditional !== null && "label" in x.conditional && "id" in x.conditional && "name" in x.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            x.conditional.label && /* @__PURE__ */ a.jsx(jr, { htmlFor: x.conditional.id, children: x.conditional.label }),
            /* @__PURE__ */ a.jsx(Nr, { ...x.conditional })
          ] }) : x.conditional
        }
      )
    ] }, x.value);
  }), B = K(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": f
    },
    u
  ), L = K("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ a.jsx("div", { className: L, ...m, ...b, children: /* @__PURE__ */ a.jsxs(
    Er,
    {
      legend: r ? {
        text: r,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: P,
      ...p,
      children: [
        i && /* @__PURE__ */ a.jsx("div", { id: D, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ a.jsxs("div", { id: C, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: B, children: R() })
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
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: f,
  className: d,
  rows: p = 5,
  cols: m,
  maxLength: b,
  minLength: w,
  wrap: g = "soft",
  resize: $ = "vertical",
  autoComplete: D,
  spellCheck: C,
  onChange: P,
  onBlur: S,
  onFocus: R,
  onKeyDown: B,
  ...L
}) => {
  const x = K(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": u,
      [`nhsuk-textarea--resize-${$}`]: $ !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ a.jsx(
    "textarea",
    {
      className: x,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": f,
      rows: p,
      cols: m,
      maxLength: b,
      minLength: w,
      wrap: g,
      autoComplete: D,
      spellCheck: C,
      onChange: P,
      onBlur: S,
      onFocus: R,
      onKeyDown: B,
      ...L
    }
  );
}, to = ({
  id: e,
  className: t,
  children: n,
  ...r
}) => {
  const o = K("nhsuk-hint", t);
  return /* @__PURE__ */ a.jsx("div", { className: o, id: e, ...r, children: n });
}, lp = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: r = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: u,
  onCountChange: f,
  onChange: d,
  ...p
}) => {
  const [m, b] = ne(s), [w, g] = ne(0), [$, D] = ne(!1), [C, P] = ne(!1), S = J((_) => n ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [n]);
  oe(() => {
    const _ = S(m), c = t || n || 0, F = c - _, G = Math.floor(c * (r / 100));
    g(F), D(_ > c), P(_ >= G || _ > c), f && f(_, F);
  }, [m, t, n, r, S, f]);
  const R = (_) => {
    const c = _.target.value;
    b(c), d && d(_);
  }, B = () => {
    const _ = t || n || 0, c = n ? "word" : "character", F = n ? "words" : "characters";
    if (!C)
      return `You can enter up to ${_} ${_ === 1 ? c : F}`;
    if ($) {
      const G = Math.abs(w);
      return `You have ${G} ${G === 1 ? c : F} too many`;
    } else
      return `You have ${w} ${w === 1 ? c : F} remaining`;
  }, L = K(
    "nhsuk-character-count",
    l
  ), x = K(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !C,
      "nhsuk-error-message": $
    },
    u?.classes
  ), v = K(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": $
    }
  );
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: L,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": r,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ a.jsx(
          Ui,
          {
            id: e,
            name: o,
            value: m,
            rows: i,
            className: v,
            onChange: R,
            "aria-describedby": `${e}-info`,
            ...p
          }
        ),
        /* @__PURE__ */ a.jsx(
          to,
          {
            id: `${e}-info`,
            className: x,
            children: B()
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
  disabled: o = !1,
  required: s = !1,
  hasError: i = !1,
  describedBy: l,
  className: u,
  multiple: f = !1,
  size: d,
  autoComplete: p,
  options: m,
  onChange: b,
  onBlur: w,
  onFocus: g,
  ...$
}) => {
  const D = K(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    u
  );
  return /* @__PURE__ */ a.jsx(
    "select",
    {
      className: D,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      disabled: o,
      required: s,
      "aria-describedby": l,
      multiple: f,
      size: d,
      autoComplete: p,
      onChange: b,
      onBlur: w,
      onFocus: g,
      ...$,
      children: m.map((C, P) => /* @__PURE__ */ a.jsx(
        "option",
        {
          value: C.value,
          disabled: C.disabled,
          selected: C.selected,
          children: C.text
        },
        `${C.value}-${P}`
      ))
    }
  );
}, up = ({
  name: e,
  value: t,
  defaultValue: n,
  hasError: r = !1,
  describedBy: o,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: u,
  onChange: f,
  onBlur: d,
  onFocus: p,
  ...m
}) => {
  const [b, w] = ne(t || n || ""), g = K(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": r,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), $ = (D) => {
    const C = D.target.value;
    w(C), f && f(D);
  };
  return /* @__PURE__ */ a.jsx(Er, { children: /* @__PURE__ */ a.jsx("div", { className: g, ...m, children: u.map((D, C) => {
    const P = `${e}-${C}`, S = D.conditional ? `${P}-conditional` : void 0, R = b === D.value;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: P,
          name: e,
          type: "radio",
          value: D.value,
          disabled: D.disabled,
          checked: R,
          "aria-describedby": o,
          onChange: $,
          onBlur: d,
          onFocus: p
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-radios__label", htmlFor: P, children: D.text }),
      D.hint && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-radios__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: K("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !R
          }),
          id: S,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ a.jsx(jr, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ a.jsx(Nr, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }) }) });
}, ft = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const f = e ?? ((w) => {
    switch (w) {
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
  })(s), d = K(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), p = o || (r ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n), m = `h${f}`, b = i ? { ...l.style, marginBottom: i } : l.style;
  return Fa(
    m,
    { className: d, ...l, style: b },
    p
  );
}, sa = ({
  id: e,
  className: t,
  visuallyHiddenText: n = "Error:",
  children: r,
  ...o
}) => {
  const s = K("nhsuk-error-message", t);
  return /* @__PURE__ */ a.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
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
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const u = te(null);
  oe(() => {
    u.current && u.current.focus();
  }, []);
  const f = K(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, p = () => r ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n, m = (b) => {
    const w = b.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
    return b.href ? /* @__PURE__ */ a.jsx(
      "a",
      {
        href: b.href,
        ...b.attributes,
        children: w
      }
    ) : w;
  };
  return /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ a.jsx("p", { children: i }),
          !i && (n || r) && /* @__PURE__ */ a.jsx("p", { children: p() }),
          /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((b, w) => /* @__PURE__ */ a.jsx("li", { children: m(b) }, w)) })
        ] })
      ]
    }
  );
}, fp = ({
  id: e,
  className: t,
  items: n,
  namePrefix: r,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...f
}) => {
  const [d, p] = ne(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, b] = ne({}), w = (M) => M % 4 === 0 && M % 100 !== 0 || M % 400 === 0, g = (M, h) => {
    const z = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return M === 2 && w(h) ? 29 : z[M - 1];
  }, $ = (M, h, z) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Day must be a number";
    const Y = parseInt(M, 10);
    if (Y < 1 || Y > 31) return "Day must be between 1 and 31";
    if (h && z) {
      const Z = parseInt(h, 10), E = parseInt(z, 10);
      if (!isNaN(Z) && !isNaN(E) && Z >= 1 && Z <= 12) {
        const U = g(Z, E);
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
  }, D = (M) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Month must be a number";
    const h = parseInt(M, 10);
    if (h < 1 || h > 12) return "Month must be between 1 and 12";
  }, C = (M) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Year must be a number";
    const h = parseInt(M, 10), z = (/* @__PURE__ */ new Date()).getFullYear();
    if (h < 1900 || h > z + 10)
      return `Year must be between 1900 and ${z + 10}`;
  }, P = (M, h, z) => {
    if (!M || !h || !z) return;
    const Y = parseInt(M, 10), Z = parseInt(h, 10), E = parseInt(z, 10);
    if (isNaN(Y) || isNaN(Z) || isNaN(E) || Z < 1 || Z > 12 || E < 1900) return;
    const U = g(Z, E);
    Y < 1 || Y > U;
  }, S = J((M, h) => {
    const z = {
      ...d,
      [M]: h
    };
    p(z), u && u(z);
  }, [d, u]), R = J((M) => {
    const h = d[M];
    let z;
    if (M === "day")
      z = $(h, d.month, d.year);
    else if (M === "month") {
      if (z = D(h), !z && d.day) {
        const Y = $(d.day, h, d.year);
        b((Z) => ({
          ...Z,
          day: Y
        }));
      }
    } else if (M === "year" && (z = C(h), !z && d.day && d.month)) {
      const Y = $(d.day, d.month, h);
      b((Z) => ({
        ...Z,
        day: Y
      }));
    }
    if (b((Y) => ({
      ...Y,
      [M]: z
    })), d.day && d.month && d.year) {
      const Y = P(
        M === "day" ? h : d.day,
        M === "month" ? h : d.month,
        M === "year" ? h : d.year
      );
      Y && b((Z) => ({
        ...Z,
        day: Y
      }));
    }
  }, [d, $, D, C, P]), B = se(() => [
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
  ], []), L = n || B;
  let x = s?.describedBy || "";
  const v = i ? `${e}-hint` : "", _ = l ? `${e}-error` : "";
  v && (x = x ? `${x} ${v}` : v), _ && (x = x ? `${x} ${_}` : _);
  const c = Object.values(m).some((M) => M), F = K(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || c
    }
  ), G = K(
    "nhsuk-date-input",
    t
  ), j = () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    i && /* @__PURE__ */ a.jsx(
      to,
      {
        id: v,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      sa,
      {
        id: _,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([M, h]) => h ? /* @__PURE__ */ a.jsxs(
        sa,
        {
          id: `${e}-${M}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            h
          ]
        },
        `${M}-error`
      ) : null
    ),
    /* @__PURE__ */ a.jsx("div", { className: G, id: e, "data-testid": "date-input", ...f, children: L.map((M) => {
      const h = M.id || `${e}-${M.name}`, z = r ? `${r}[${M.name}]` : M.name, Y = M.label || M.name.charAt(0).toUpperCase() + M.name.slice(1), Z = m[M.name], E = d[M.name] || "";
      let U = x;
      if (Z) {
        const W = `${e}-${M.name}-error`;
        U = U ? `${U} ${W}` : W;
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ a.jsx(
          jr,
          {
            htmlFor: h,
            className: "nhsuk-date-input__label",
            children: Y
          }
        ),
        /* @__PURE__ */ a.jsx(
          Nr,
          {
            id: h,
            name: z,
            value: E,
            className: K("nhsuk-date-input__input", M.classes, {
              "nhsuk-input--error": Z
            }),
            inputMode: M.inputmode,
            autoComplete: M.autocomplete,
            pattern: M.pattern,
            "aria-describedby": U || void 0,
            hasError: !!Z,
            onChange: (W) => S(M.name, W.target.value),
            onBlur: () => R(M.name)
          }
        )
      ] }, M.name);
    }) })
  ] });
  return /* @__PURE__ */ a.jsx("div", { className: F, children: s ? /* @__PURE__ */ a.jsx(
    Er,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: x || void 0,
      children: j()
    }
  ) : j() });
}, no = {
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
}, ro = _n(no), Yi = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...no, ...t };
  return /* @__PURE__ */ a.jsx(ro.Provider, { value: n, children: e });
}, hp = () => {
  const e = qe(ro);
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
const pp = ({ children: e, theme: t }) => (oe(() => {
  Ki();
}, []), /* @__PURE__ */ a.jsx(Yi, { theme: t, children: e })), mp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  ...d
}) => {
  const [p, m] = ne(!1), [b, w] = ne(!1), [g, $] = ne(i?.items?.length || 0), [D, C] = ne(!1), [P, S] = ne(!1), [R, B] = ne(!1), L = te(null), x = te(null), v = te(!1), _ = te(null), c = te([]), F = te(null);
  oe(() => {
    typeof window > "u" || (B(!0), C(!0));
  }, []), oe(() => {
    if (!R || !i?.items?.length) return;
    c.current = i.items;
    const T = setTimeout(() => {
      L.current && x.current && Y();
    }, 100);
    return () => clearTimeout(T);
  }, [R, i?.items]);
  const G = n.href && !t.href || n.href && n.href === t.href, j = G ? n.href : t.href, M = K(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), h = K(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), z = K(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Y = J(() => {
    if (!(typeof window > "u" || v.current) && !(!L.current || !x.current || !c.current.length)) {
      v.current = !0;
      try {
        const T = x.current, y = L.current, I = T.offsetWidth, A = y.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (A.length === 0 || I === 0) {
          v.current = !1;
          return;
        }
        const N = window.innerWidth < 768, re = N ? 16 : 32, X = re * 2, O = I - X, Q = Array.from(A).map((be) => be.offsetWidth), le = Q.reduce((be, ke) => be + ke, 0), ue = N ? 80 : 100, we = F.current !== null && F.current !== N;
        if (F.current = N, console.log("Overflow check:", {
          containerWidth: I,
          availableContainerWidth: O,
          totalGutters: X,
          gutterSize: re,
          totalWidth: le,
          mobile: N,
          breakpointChanged: we,
          itemCount: Q.length,
          measurements: Q
        }), le <= O)
          w(!1), $(c.current.length);
        else {
          const be = O - ue;
          let ke = 0, $e = 0;
          for (let Oe = 0; Oe < Q.length; Oe++) {
            const Ue = $e + Q[Oe];
            if (Ue <= be)
              $e = Ue, ke = Oe + 1;
            else
              break;
          }
          ke = Math.max(1, ke);
          const We = ke < Q.length;
          w(We), $(ke);
        }
        v.current = !1;
      } catch (T) {
        console.error("Overflow detection error:", T), w(!1), $(c.current.length), v.current = !1;
      }
    }
  }, []);
  oe(() => {
    if (typeof document > "u") return;
    const T = (y) => {
      y.key === "Escape" && p && m(!1);
    };
    if (p)
      return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [p]), oe(() => {
    if (typeof window > "u" || !R) return;
    const T = () => {
      p && (m(!1), S(!1)), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        c.current.length > 0 && Y();
      }, 250);
    };
    let y = null, I = null;
    return window.matchMedia && (y = window.matchMedia("(max-width: 767px)"), I = () => {
      console.log("Breakpoint changed:", y?.matches ? "mobile" : "desktop"), c.current.length > 0 && setTimeout(() => Y(), 50);
    }, y.addEventListener ? y.addEventListener("change", I) : y.addListener(I)), window.addEventListener("resize", T), () => {
      window.removeEventListener("resize", T), y && I && (y.removeEventListener ? y.removeEventListener("change", I) : y.removeListener(I)), _.current && clearTimeout(_.current);
    };
  }, [R, p, Y]), oe(() => {
    if (typeof document > "u") return;
    const T = (y) => {
      const I = y.target, A = L.current?.contains(I);
      p && !A && m(!1);
    };
    if (p)
      return document.addEventListener("mousedown", T), () => document.removeEventListener("mousedown", T);
  }, [p]);
  const Z = (T) => {
    T && (T.preventDefault(), T.stopPropagation());
    const y = !p;
    m(y), y ? setTimeout(() => {
      S(!0);
    }, 50) : S(!1);
  }, E = () => /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ a.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), U = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : E(), W = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, ee = (T, y) => T ? y ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: y, children: T }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: T }) : null, V = (T) => {
    const y = T.icon ? /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ a.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, I = T.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text, A = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      y,
      I
    ] });
    return T.href ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__account-link", href: T.href, children: A }) : T.action ? /* @__PURE__ */ a.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: T.action,
        method: T.method || "post",
        children: /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: A
          }
        )
      }
    ) : A;
  }, k = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), H = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), q = (T) => {
    if (T.active || T.current) {
      const y = T.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: y });
    }
    return T.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text;
  };
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: M,
      role: "banner",
      "data-module": "nhsuk-header",
      ...f,
      ...d,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: h, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            j ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: j, children: [
              U(),
              W(),
              G && ee(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              U(),
              W(),
              G && ee(n.text)
            ] }),
            n.text && !G && ee(n.text, n.href)
          ] }),
          o && /* @__PURE__ */ a.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: o.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ a.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: o.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: o.name || "q",
                    type: "search",
                    placeholder: o.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ a.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  k(),
                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: o.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          s && s.items && s.items.length > 0 && /* @__PURE__ */ a.jsx(
            "nav",
            {
              className: K("nhsuk-header__account", s.className),
              "aria-label": s.ariaLabel || "Account",
              children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: s.items.map((T, y) => T && /* @__PURE__ */ a.jsx(
                "li",
                {
                  className: K("nhsuk-header__account-item", T.className),
                  children: V(T)
                },
                y
              )) })
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: z,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: K(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !D && R,
                    "nhsuk-header__navigation-container--ssr": !R
                  },
                  l
                ),
                ref: x,
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (R ? i.items.slice(0, g) : i.items).map((T, y) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: K(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": T.active || T.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !R && y >= 4
                          // Mark items that would be hidden on client
                        },
                        T.className
                      ),
                      ...T.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: T.href,
                          ...T.active || T.current ? {
                            "aria-current": T.current ? "page" : "true"
                          } : {},
                          children: q(T)
                        }
                      )
                    },
                    y
                  )),
                  R && b && g < i.items.length && /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ a.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: Z,
                          type: "button",
                          children: [
                            /* @__PURE__ */ a.jsx("span", { children: "More" }),
                            H()
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
        R && i && i.items && i.items.length > 0 && p && P && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !P,
            children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((T, y) => /* @__PURE__ */ a.jsx(
              "li",
              {
                className: K(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": T.active || T.current
                  }
                ),
                children: /* @__PURE__ */ a.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: T.href,
                    ...T.active || T.current ? {
                      "aria-current": T.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      m(!1), S(!1);
                    },
                    children: q(T)
                  }
                )
              },
              `overflow-${g + y}`
            )) })
          }
        )
      ]
    }
  );
}, gp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  ...d
}) => {
  const p = n.href && !t.href || n.href && n.href === t.href, m = p ? n.href : t.href, b = K(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), w = K(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = K(
    "nhsuk-header__navigation",
    i?.className
  ), $ = () => /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ a.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), D = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : $(), C = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, P = (L, x) => L ? x ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: x, children: L }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: L }) : null, S = () => !i?.items || i.items.length === 0 ? null : i.items.map((L, x) => /* @__PURE__ */ a.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ a.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: L.href,
          ...L.attributes || {},
          children: L.text
        }
      )
    },
    L.href || x
  )), R = () => !s?.items || s.items.length === 0 ? null : s.items.map((L, x) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-header__account-item", children: /* @__PURE__ */ a.jsx(
    "a",
    {
      className: "nhsuk-header__account-link",
      href: L.href,
      children: L.text
    }
  ) }, L.href || x)), B = () => o ? /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search-wrap", id: "wrap-search", children: /* @__PURE__ */ a.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      role: "search",
      action: o.action || "/search",
      method: "get",
      children: [
        /* @__PURE__ */ a.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: o.visuallyHiddenLabel || "Search the NHS website" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: "nhsuk-header__search-input nhsuk-input",
            id: "search-field",
            name: o.name || "q",
            type: "search",
            placeholder: o.placeholder || "Search",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ a.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
          /* @__PURE__ */ a.jsx("svg", { className: "nhsuk-icon nhsuk-icon__search", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ a.jsx("path", { d: "m19.71 18.29-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" }) }),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: o.visuallyHiddenButton || "Search" })
        ] })
      ]
    }
  ) }) }) : null;
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: b,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...f,
      ...d,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: w, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            m ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: m, children: [
              D(),
              C(),
              p && P(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              D(),
              C(),
              p && P(n.text)
            ] }),
            n.text && !p && P(n.text, n.href)
          ] }),
          (u === "organisation" || r) && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            r && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name", children: r.name }),
              r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: r.descriptor })
            ] }),
            B()
          ] }),
          u !== "organisation" && !r && B(),
          s && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__account", children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: R() }) })
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: g,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ a.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: S()
              }
            ) })
          }
        )
      ]
    }
  );
}, bp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...p
}) => {
  const m = n.href && !t.href || n.href && n.href === t.href, b = m ? n.href : t.href, w = K(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), g = K(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), $ = K(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), D = () => /* @__PURE__ */ a.jsxs(
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
        /* @__PURE__ */ a.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ a.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), C = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : D(), P = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, S = (x, v) => x ? v ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: v, children: x }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: x }) : null, R = (x) => {
    const v = x.icon ? /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ a.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, _ = x.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text, c = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      v,
      _
    ] });
    return x.href ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__account-link", href: x.href, children: c }) : x.action ? /* @__PURE__ */ a.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: x.action,
        method: x.method || "post",
        children: /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: c
          }
        )
      }
    ) : c;
  }, B = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), L = (x) => {
    if (x.active || x.current) {
      const v = x.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: v });
    }
    return x.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
  };
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: w,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...f,
      ...p,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: g, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            b ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: b, children: [
              C(),
              P(),
              m && S(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              C(),
              P(),
              m && S(n.text)
            ] }),
            n.text && !m && S(n.text, n.href)
          ] }),
          o && /* @__PURE__ */ a.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: o.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ a.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: o.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: o.name || "q",
                    type: "search",
                    placeholder: o.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ a.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  B(),
                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: o.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          s && s.items && s.items.length > 0 && /* @__PURE__ */ a.jsx(
            "nav",
            {
              className: K("nhsuk-header__account", s.className),
              "aria-label": s.ariaLabel || "Account",
              children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: s.items.map((x, v) => x && /* @__PURE__ */ a.jsx(
                "li",
                {
                  className: K("nhsuk-header__account-item", x.className),
                  children: R(x)
                },
                v
              )) })
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: $,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: K(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((x, v) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: K(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": x.active || x.current
                        },
                        x.className
                      ),
                      ...x.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: x.href,
                          ...x.active || x.current ? {
                            "aria-current": x.current ? "page" : "true"
                          } : {},
                          children: L(x)
                        }
                      )
                    },
                    v
                  )),
                  i.items.length > d && /* @__PURE__ */ a.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ a.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
                    /* @__PURE__ */ a.jsxs("summary", { className: "nhsuk-header__navigation-summary", children: [
                      /* @__PURE__ */ a.jsx("span", { children: "More" }),
                      /* @__PURE__ */ a.jsx(
                        "svg",
                        {
                          className: "nhsuk-icon nhsuk-icon__chevron-down",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ a.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((x, v) => /* @__PURE__ */ a.jsx(
                      "li",
                      {
                        className: K(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": x.active || x.current
                          }
                        ),
                        children: /* @__PURE__ */ a.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: x.href,
                            ...x.active || x.current ? {
                              "aria-current": x.current ? "page" : "true"
                            } : {},
                            children: L(x)
                          }
                        )
                      },
                      `overflow-${d + v}`
                    )) })
                  ] }) })
                ] })
              }
            )
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
  html: o,
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
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    n,
    !u && !r && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), b = u || e || r || o, w = () => {
    if (!e) return null;
    const g = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ a.jsx("h1", { ...g, children: e });
      case 2:
        return /* @__PURE__ */ a.jsx("h2", { ...g, children: e });
      case 3:
        return /* @__PURE__ */ a.jsx("h3", { ...g, children: e });
      case 4:
        return /* @__PURE__ */ a.jsx("h4", { ...g, children: e });
      case 5:
        return /* @__PURE__ */ a.jsx("h5", { ...g, children: e });
      case 6:
        return /* @__PURE__ */ a.jsx("h6", { ...g, children: e });
      default:
        return /* @__PURE__ */ a.jsx("h1", { ...g, children: e });
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...f,
      children: [
        s && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-hero__overlay", children: b && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero-content", children: [
          w(),
          u || (o ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && b && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          w(),
          u || (o ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Gi.displayName = "Hero";
const xp = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: r,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const u = (d, p = !1) => /* @__PURE__ */ a.jsx(
    "li",
    {
      className: K("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": p
      }),
      children: /* @__PURE__ */ a.jsx(
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
  return /* @__PURE__ */ a.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ a.jsxs("div", { className: K("nhsuk-width-container", i), children: [
      /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ a.jsx("div", { className: K("nhsuk-footer", e), children: f ? (
        // Multi-column layout
        /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => u(d)) }),
          n && n.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list", children: n.map((d) => u(d)) }),
          r && r.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => u(d)) }),
          o && o.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((d) => u(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => u(d, !0)),
          (n || []).map((d) => u(d, !0)),
          (r || []).map((d) => u(d, !0)),
          (o || []).map((d) => u(d, !0))
        ] })
      ) }),
      !f && /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Rt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function qi(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fr(e) {
  let t, n, r;
  e.length !== 2 ? (t = Rt, n = (l, u) => Rt(e(l), u), r = (l, u) => e(l) - u) : (t = e === Rt || e === qi ? e : Xi, n = e, r = e);
  function o(l, u, f = 0, d = l.length) {
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
    const p = o(l, u, f, d - 1);
    return p > f && r(l[p - 1], u) > -r(l[p], u) ? p - 1 : p;
  }
  return { left: o, center: i, right: s };
}
function Xi() {
  return 0;
}
function Zi(e) {
  return e === null ? NaN : +e;
}
const Ji = Fr(Rt), Qi = Ji.right;
Fr(Zi).center;
const el = Math.sqrt(50), tl = Math.sqrt(10), nl = Math.sqrt(2);
function ao(e, t, n) {
  const r = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(r)), s = r / Math.pow(10, o), i = s >= el ? 10 : s >= tl ? 5 : s >= nl ? 2 : 1;
  let l, u, f;
  return o < 0 ? (f = Math.pow(10, -o) / i, l = Math.round(e * f), u = Math.round(t * f), l / f < e && ++l, u / f > t && --u, f = -f) : (f = Math.pow(10, o) * i, l = Math.round(e / f), u = Math.round(t / f), l * f < e && ++l, u * f > t && --u), u < l && 0.5 <= n && n < 2 ? ao(e, t, n * 2) : [l, u, f];
}
function ia(e, t, n) {
  return t = +t, e = +e, n = +n, ao(e, t, n)[2];
}
function la(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, o = r ? ia(t, e, n) : ia(e, t, n);
  return (r ? -1 : 1) * (o < 0 ? 1 / -o : o);
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
function oo(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Nt() {
}
var Tt = 0.7, Ut = 1 / Tt, ct = "\\s*([+-]?\\d+)\\s*", $t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", al = /^#([0-9a-f]{3,8})$/, ol = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), sl = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), il = new RegExp(`^rgba\\(${ct},${ct},${ct},${$t}\\)$`), ll = new RegExp(`^rgba\\(${Te},${Te},${Te},${$t}\\)$`), cl = new RegExp(`^hsl\\(${$t},${Te},${Te}\\)$`), ul = new RegExp(`^hsla\\(${$t},${Te},${Te},${$t}\\)$`), ca = {
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
Dr(Nt, Ct, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ua,
  // Deprecated! Use color.formatHex.
  formatHex: ua,
  formatHex8: dl,
  formatHsl: fl,
  formatRgb: da,
  toString: da
});
function ua() {
  return this.rgb().formatHex();
}
function dl() {
  return this.rgb().formatHex8();
}
function fl() {
  return so(this).formatHsl();
}
function da() {
  return this.rgb().formatRgb();
}
function Ct(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = al.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? fa(t) : n === 3 ? new ge(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ol.exec(e)) ? new ge(t[1], t[2], t[3], 1) : (t = sl.exec(e)) ? new ge(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = il.exec(e)) ? Bt(t[1], t[2], t[3], t[4]) : (t = ll.exec(e)) ? Bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = cl.exec(e)) ? ma(t[1], t[2] / 100, t[3] / 100, 1) : (t = ul.exec(e)) ? ma(t[1], t[2] / 100, t[3] / 100, t[4]) : ca.hasOwnProperty(e) ? fa(ca[e]) : e === "transparent" ? new ge(NaN, NaN, NaN, 0) : null;
}
function fa(e) {
  return new ge(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bt(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ge(e, t, n, r);
}
function hl(e) {
  return e instanceof Nt || (e = Ct(e)), e ? (e = e.rgb(), new ge(e.r, e.g, e.b, e.opacity)) : new ge();
}
function Gn(e, t, n, r) {
  return arguments.length === 1 ? hl(e) : new ge(e, t, n, r ?? 1);
}
function ge(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Dr(ge, Gn, oo(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new ge(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tt : Math.pow(Tt, e), new ge(this.r * e, this.g * e, this.b * e, this.opacity);
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
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: pl,
  formatRgb: pa,
  toString: pa
}));
function ha() {
  return `#${Ze(this.r)}${Ze(this.g)}${Ze(this.b)}`;
}
function pl() {
  return `#${Ze(this.r)}${Ze(this.g)}${Ze(this.b)}${Ze((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function pa() {
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
function ma(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Se(e, t, n, r);
}
function so(e) {
  if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
  if (e instanceof Nt || (e = Ct(e)), !e) return new Se();
  if (e instanceof Se) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, o = Math.min(t, n, r), s = Math.max(t, n, r), i = NaN, l = s - o, u = (s + o) / 2;
  return l ? (t === s ? i = (n - r) / l + (n < r) * 6 : n === s ? i = (r - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? s + o : 2 - s - o, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new Se(i, l, u, e.opacity);
}
function ml(e, t, n, r) {
  return arguments.length === 1 ? so(e) : new Se(e, t, n, r ?? 1);
}
function Se(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Dr(Se, ml, oo(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tt : Math.pow(Tt, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - r;
    return new ge(
      Pn(e >= 240 ? e - 240 : e + 120, o, r),
      Pn(e, o, r),
      Pn(e < 120 ? e + 240 : e - 120, o, r),
      this.opacity
    );
  },
  clamp() {
    return new Se(ga(this.h), Lt(this.s), Lt(this.l), Yt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ga(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ga(e) {
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
  return (e = +e) == 1 ? io : function(t, n) {
    return n - t ? bl(t, n, e) : Pr(isNaN(t) ? n : t);
  };
}
function io(e, t) {
  var n = t - e;
  return n ? gl(e, n) : Pr(isNaN(e) ? t : e);
}
const ba = function e(t) {
  var n = xl(t);
  function r(o, s) {
    var i = n((o = Gn(o)).r, (s = Gn(s)).r), l = n(o.g, s.g), u = n(o.b, s.b), f = io(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = u(d), o.opacity = f(d), o + "";
    };
  }
  return r.gamma = e, r;
}(1);
function vl(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) r[o] = e[o] * (1 - s) + t[o] * s;
    return r;
  };
}
function yl(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function kl(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, o = new Array(r), s = new Array(n), i;
  for (i = 0; i < r; ++i) o[i] = Mr(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < r; ++i) s[i] = o[i](l);
    return s;
  };
}
function Sl(e, t) {
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
  var n = {}, r = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Mr(e[o], t[o]) : r[o] = t[o];
  return function(s) {
    for (o in n) r[o] = n[o](s);
    return r;
  };
}
var qn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mn = new RegExp(qn.source, "g");
function _l(e) {
  return function() {
    return e;
  };
}
function Tl(e) {
  return function(t) {
    return e(t) + "";
  };
}
function $l(e, t) {
  var n = qn.lastIndex = Mn.lastIndex = 0, r, o, s, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = qn.exec(e)) && (o = Mn.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (r = r[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, u.push({ i, x: Vt(r, o) })), n = Mn.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? u[0] ? Tl(u[0].x) : _l(t) : (t = u.length, function(f) {
    for (var d = 0, p; d < t; ++d) l[(p = u[d]).i] = p.x(f);
    return l.join("");
  });
}
function Mr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Pr(t) : (n === "number" ? Vt : n === "string" ? (r = Ct(t)) ? (t = r, ba) : $l : t instanceof Ct ? ba : t instanceof Date ? Sl : yl(t) ? vl : Array.isArray(t) ? kl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? wl : Vt)(e, t);
}
function Cl(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Nl(e) {
  return function() {
    return e;
  };
}
function jl(e) {
  return +e;
}
var xa = [0, 1];
function st(e) {
  return e;
}
function Xn(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Nl(isNaN(t) ? NaN : 0.5);
}
function El(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function Fl(e, t, n) {
  var r = e[0], o = e[1], s = t[0], i = t[1];
  return o < r ? (r = Xn(o, r), s = n(i, s)) : (r = Xn(r, o), s = n(s, i)), function(l) {
    return s(r(l));
  };
}
function Dl(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, o = new Array(r), s = new Array(r), i = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < r; )
    o[i] = Xn(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = Qi(e, l, 1, r) - 1;
    return s[u](o[u](l));
  };
}
function Pl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ml() {
  var e = xa, t = xa, n = Mr, r, o, s, i = st, l, u, f;
  function d() {
    var m = Math.min(e.length, t.length);
    return i !== st && (i = El(e[0], e[m - 1])), l = m > 2 ? Dl : Fl, u = f = null, p;
  }
  function p(m) {
    return m == null || isNaN(m = +m) ? s : (u || (u = l(e.map(r), t, n)))(r(i(m)));
  }
  return p.invert = function(m) {
    return i(o((f || (f = l(t, e.map(r), Vt)))(m)));
  }, p.domain = function(m) {
    return arguments.length ? (e = Array.from(m, jl), d()) : e.slice();
  }, p.range = function(m) {
    return arguments.length ? (t = Array.from(m), d()) : t.slice();
  }, p.rangeRound = function(m) {
    return t = Array.from(m), n = Cl, d();
  }, p.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : st, d()) : i !== st;
  }, p.interpolate = function(m) {
    return arguments.length ? (n = m, d()) : n;
  }, p.unknown = function(m) {
    return arguments.length ? (s = m, p) : s;
  }, function(m, b) {
    return r = m, o = b, d();
  };
}
function Bl() {
  return Ml()(st, st);
}
function Ll(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, o = e[n], s = e[r], i;
  return s < o && (i = n, n = r, r = i, i = o, o = s, s = i), e[n] = t.floor(o), e[r] = t.ceil(s), e;
}
const Bn = /* @__PURE__ */ new Date(), Ln = /* @__PURE__ */ new Date();
function de(e, t, n, r) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const u = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return u;
    let f;
    do
      u.push(f = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (f < s && s < i);
    return u;
  }, o.filter = (s) => de((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (Bn.setTime(+s), Ln.setTime(+i), e(Bn), e(Ln), Math.floor(n(Bn, Ln))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(r ? (i) => r(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
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
const Ie = 1e3, ye = Ie * 60, He = ye * 60, Re = He * 24, Br = Re * 7, va = Re * 30, In = Re * 365, it = de((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCSeconds());
it.range;
const Lr = de((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie);
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getMinutes());
Lr.range;
const Il = de((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getUTCMinutes());
Il.range;
const Ir = de((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie - e.getMinutes() * ye);
}, (e, t) => {
  e.setTime(+e + t * He);
}, (e, t) => (t - e) / He, (e) => e.getHours());
Ir.range;
const Hl = de((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * He);
}, (e, t) => (t - e) / He, (e) => e.getUTCHours());
Hl.range;
const jt = de(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ye) / Re,
  (e) => e.getDate() - 1
);
jt.range;
const Hr = de((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Re, (e) => e.getUTCDate() - 1);
Hr.range;
const Rl = de((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Re, (e) => Math.floor(e / Re));
Rl.range;
function nt(e) {
  return de((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ye) / Br);
}
const Cn = nt(0), Gt = nt(1), Al = nt(2), zl = nt(3), ht = nt(4), Wl = nt(5), Ol = nt(6);
Cn.range;
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
const lo = rt(0), qt = rt(1), Ul = rt(2), Yl = rt(3), pt = rt(4), Vl = rt(5), Kl = rt(6);
lo.range;
qt.range;
Ul.range;
Yl.range;
pt.range;
Vl.range;
Kl.range;
const Rr = de((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Rr.range;
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
function ql(e, t, n, r, o, s) {
  const i = [
    [it, 1, Ie],
    [it, 5, 5 * Ie],
    [it, 15, 15 * Ie],
    [it, 30, 30 * Ie],
    [s, 1, ye],
    [s, 5, 5 * ye],
    [s, 15, 15 * ye],
    [s, 30, 30 * ye],
    [o, 1, He],
    [o, 3, 3 * He],
    [o, 6, 6 * He],
    [o, 12, 12 * He],
    [r, 1, Re],
    [r, 2, 2 * Re],
    [n, 1, Br],
    [t, 1, va],
    [t, 3, 3 * va],
    [e, 1, In]
  ];
  function l(f, d, p) {
    const m = d < f;
    m && ([f, d] = [d, f]);
    const b = p && typeof p.range == "function" ? p : u(f, d, p), w = b ? b.range(f, +d + 1) : [];
    return m ? w.reverse() : w;
  }
  function u(f, d, p) {
    const m = Math.abs(d - f) / p, b = Fr(([, , $]) => $).right(i, m);
    if (b === i.length) return e.every(la(f / In, d / In, p));
    if (b === 0) return Kt.every(Math.max(la(f, d, p), 1));
    const [w, g] = i[m / i[b - 1][2] < i[b][2] / m ? b - 1 : b];
    return w.every(g);
  }
  return [l, u];
}
const [Xl, Zl] = ql(Ae, Rr, Cn, jt, Ir, Lr);
function Hn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Rn(e) {
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
  var t = e.dateTime, n = e.date, r = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, f = vt(o), d = yt(o), p = vt(s), m = yt(s), b = vt(i), w = yt(i), g = vt(l), $ = yt(l), D = vt(u), C = yt(u), P = {
    a: z,
    A: Y,
    b: Z,
    B: E,
    c: null,
    d: Ta,
    e: Ta,
    f: kc,
    g: Fc,
    G: Pc,
    H: xc,
    I: vc,
    j: yc,
    L: co,
    m: Sc,
    M: wc,
    p: U,
    q: W,
    Q: Na,
    s: ja,
    S: _c,
    u: Tc,
    U: $c,
    V: Cc,
    w: Nc,
    W: jc,
    x: null,
    X: null,
    y: Ec,
    Y: Dc,
    Z: Mc,
    "%": Ca
  }, S = {
    a: ee,
    A: V,
    b: k,
    B: H,
    c: null,
    d: $a,
    e: $a,
    f: Hc,
    g: Gc,
    G: Xc,
    H: Bc,
    I: Lc,
    j: Ic,
    L: fo,
    m: Rc,
    M: Ac,
    p: q,
    q: T,
    Q: Na,
    s: ja,
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
    "%": Ca
  }, R = {
    a: _,
    A: c,
    b: F,
    B: G,
    c: j,
    d: wa,
    e: wa,
    f: pc,
    g: Sa,
    G: ka,
    H: _a,
    I: _a,
    j: uc,
    L: hc,
    m: cc,
    M: dc,
    p: v,
    q: lc,
    Q: gc,
    s: bc,
    S: fc,
    u: rc,
    U: ac,
    V: oc,
    w: nc,
    W: sc,
    x: M,
    X: h,
    y: Sa,
    Y: ka,
    Z: ic,
    "%": mc
  };
  P.x = B(n, P), P.X = B(r, P), P.c = B(t, P), S.x = B(n, S), S.X = B(r, S), S.c = B(t, S);
  function B(y, I) {
    return function(A) {
      var N = [], re = -1, X = 0, O = y.length, Q, le, ue;
      for (A instanceof Date || (A = /* @__PURE__ */ new Date(+A)); ++re < O; )
        y.charCodeAt(re) === 37 && (N.push(y.slice(X, re)), (le = ya[Q = y.charAt(++re)]) != null ? Q = y.charAt(++re) : le = Q === "e" ? " " : "0", (ue = I[Q]) && (Q = ue(A, le)), N.push(Q), X = re + 1);
      return N.push(y.slice(X, re)), N.join("");
    };
  }
  function L(y, I) {
    return function(A) {
      var N = xt(1900, void 0, 1), re = x(N, y, A += "", 0), X, O;
      if (re != A.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (I && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (X = Rn(xt(N.y, 0, 1)), O = X.getUTCDay(), X = O > 4 || O === 0 ? qt.ceil(X) : qt(X), X = Hr.offset(X, (N.V - 1) * 7), N.y = X.getUTCFullYear(), N.m = X.getUTCMonth(), N.d = X.getUTCDate() + (N.w + 6) % 7) : (X = Hn(xt(N.y, 0, 1)), O = X.getDay(), X = O > 4 || O === 0 ? Gt.ceil(X) : Gt(X), X = jt.offset(X, (N.V - 1) * 7), N.y = X.getFullYear(), N.m = X.getMonth(), N.d = X.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), O = "Z" in N ? Rn(xt(N.y, 0, 1)).getUTCDay() : Hn(xt(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (O + 5) % 7 : N.w + N.U * 7 - (O + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, Rn(N)) : Hn(N);
    };
  }
  function x(y, I, A, N) {
    for (var re = 0, X = I.length, O = A.length, Q, le; re < X; ) {
      if (N >= O) return -1;
      if (Q = I.charCodeAt(re++), Q === 37) {
        if (Q = I.charAt(re++), le = R[Q in ya ? I.charAt(re++) : Q], !le || (N = le(y, A, N)) < 0) return -1;
      } else if (Q != A.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function v(y, I, A) {
    var N = f.exec(I.slice(A));
    return N ? (y.p = d.get(N[0].toLowerCase()), A + N[0].length) : -1;
  }
  function _(y, I, A) {
    var N = b.exec(I.slice(A));
    return N ? (y.w = w.get(N[0].toLowerCase()), A + N[0].length) : -1;
  }
  function c(y, I, A) {
    var N = p.exec(I.slice(A));
    return N ? (y.w = m.get(N[0].toLowerCase()), A + N[0].length) : -1;
  }
  function F(y, I, A) {
    var N = D.exec(I.slice(A));
    return N ? (y.m = C.get(N[0].toLowerCase()), A + N[0].length) : -1;
  }
  function G(y, I, A) {
    var N = g.exec(I.slice(A));
    return N ? (y.m = $.get(N[0].toLowerCase()), A + N[0].length) : -1;
  }
  function j(y, I, A) {
    return x(y, t, I, A);
  }
  function M(y, I, A) {
    return x(y, n, I, A);
  }
  function h(y, I, A) {
    return x(y, r, I, A);
  }
  function z(y) {
    return i[y.getDay()];
  }
  function Y(y) {
    return s[y.getDay()];
  }
  function Z(y) {
    return u[y.getMonth()];
  }
  function E(y) {
    return l[y.getMonth()];
  }
  function U(y) {
    return o[+(y.getHours() >= 12)];
  }
  function W(y) {
    return 1 + ~~(y.getMonth() / 3);
  }
  function ee(y) {
    return i[y.getUTCDay()];
  }
  function V(y) {
    return s[y.getUTCDay()];
  }
  function k(y) {
    return u[y.getUTCMonth()];
  }
  function H(y) {
    return l[y.getUTCMonth()];
  }
  function q(y) {
    return o[+(y.getUTCHours() >= 12)];
  }
  function T(y) {
    return 1 + ~~(y.getUTCMonth() / 3);
  }
  return {
    format: function(y) {
      var I = B(y += "", P);
      return I.toString = function() {
        return y;
      }, I;
    },
    parse: function(y) {
      var I = L(y += "", !1);
      return I.toString = function() {
        return y;
      }, I;
    },
    utcFormat: function(y) {
      var I = B(y += "", S);
      return I.toString = function() {
        return y;
      }, I;
    },
    utcParse: function(y) {
      var I = L(y += "", !0);
      return I.toString = function() {
        return y;
      }, I;
    }
  };
}
var ya = { "-": "", _: " ", 0: "0" }, fe = /^\s*\d+/, Ql = /^%/, ec = /[\\^$*+?|[\]().{}]/g;
function ae(e, t, n) {
  var r = e < 0 ? "-" : "", o = (r ? -e : e) + "", s = o.length;
  return r + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function tc(e) {
  return e.replace(ec, "\\$&");
}
function vt(e) {
  return new RegExp("^(?:" + e.map(tc).join("|") + ")", "i");
}
function yt(e) {
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
function ac(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function oc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function sc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function ka(e, t, n) {
  var r = fe.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Sa(e, t, n) {
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
function wa(e, t, n) {
  var r = fe.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function uc(e, t, n) {
  var r = fe.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function _a(e, t, n) {
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
function Ta(e, t) {
  return ae(e.getDate(), t, 2);
}
function xc(e, t) {
  return ae(e.getHours(), t, 2);
}
function vc(e, t) {
  return ae(e.getHours() % 12 || 12, t, 2);
}
function yc(e, t) {
  return ae(1 + jt.count(Ae(e), e), t, 3);
}
function co(e, t) {
  return ae(e.getMilliseconds(), t, 3);
}
function kc(e, t) {
  return co(e, t) + "000";
}
function Sc(e, t) {
  return ae(e.getMonth() + 1, t, 2);
}
function wc(e, t) {
  return ae(e.getMinutes(), t, 2);
}
function _c(e, t) {
  return ae(e.getSeconds(), t, 2);
}
function Tc(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $c(e, t) {
  return ae(Cn.count(Ae(e) - 1, e), t, 2);
}
function uo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function Cc(e, t) {
  return e = uo(e), ae(ht.count(Ae(e), e) + (Ae(e).getDay() === 4), t, 2);
}
function Nc(e) {
  return e.getDay();
}
function jc(e, t) {
  return ae(Gt.count(Ae(e) - 1, e), t, 2);
}
function Ec(e, t) {
  return ae(e.getFullYear() % 100, t, 2);
}
function Fc(e, t) {
  return e = uo(e), ae(e.getFullYear() % 100, t, 2);
}
function Dc(e, t) {
  return ae(e.getFullYear() % 1e4, t, 4);
}
function Pc(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? ht(e) : ht.ceil(e), ae(e.getFullYear() % 1e4, t, 4);
}
function Mc(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2);
}
function $a(e, t) {
  return ae(e.getUTCDate(), t, 2);
}
function Bc(e, t) {
  return ae(e.getUTCHours(), t, 2);
}
function Lc(e, t) {
  return ae(e.getUTCHours() % 12 || 12, t, 2);
}
function Ic(e, t) {
  return ae(1 + Hr.count(et(e), e), t, 3);
}
function fo(e, t) {
  return ae(e.getUTCMilliseconds(), t, 3);
}
function Hc(e, t) {
  return fo(e, t) + "000";
}
function Rc(e, t) {
  return ae(e.getUTCMonth() + 1, t, 2);
}
function Ac(e, t) {
  return ae(e.getUTCMinutes(), t, 2);
}
function zc(e, t) {
  return ae(e.getUTCSeconds(), t, 2);
}
function Wc(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Oc(e, t) {
  return ae(lo.count(et(e) - 1, e), t, 2);
}
function ho(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? pt(e) : pt.ceil(e);
}
function Uc(e, t) {
  return e = ho(e), ae(pt.count(et(e), e) + (et(e).getUTCDay() === 4), t, 2);
}
function Yc(e) {
  return e.getUTCDay();
}
function Vc(e, t) {
  return ae(qt.count(et(e) - 1, e), t, 2);
}
function Kc(e, t) {
  return ae(e.getUTCFullYear() % 100, t, 2);
}
function Gc(e, t) {
  return e = ho(e), ae(e.getUTCFullYear() % 100, t, 2);
}
function qc(e, t) {
  return ae(e.getUTCFullYear() % 1e4, t, 4);
}
function Xc(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? pt(e) : pt.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4);
}
function Zc() {
  return "+0000";
}
function Ca() {
  return "%";
}
function Na(e) {
  return +e;
}
function ja(e) {
  return Math.floor(+e / 1e3);
}
var at, po;
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
  return at = Jl(e), po = at.format, at.parse, at.utcFormat, at.utcParse, at;
}
function Qc(e) {
  return new Date(e);
}
function eu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function mo(e, t, n, r, o, s, i, l, u, f) {
  var d = Bl(), p = d.invert, m = d.domain, b = f(".%L"), w = f(":%S"), g = f("%I:%M"), $ = f("%I %p"), D = f("%a %d"), C = f("%b %d"), P = f("%B"), S = f("%Y");
  function R(B) {
    return (u(B) < B ? b : l(B) < B ? w : i(B) < B ? g : s(B) < B ? $ : r(B) < B ? o(B) < B ? D : C : n(B) < B ? P : S)(B);
  }
  return d.invert = function(B) {
    return new Date(p(B));
  }, d.domain = function(B) {
    return arguments.length ? m(Array.from(B, eu)) : m().map(Qc);
  }, d.ticks = function(B) {
    var L = m();
    return e(L[0], L[L.length - 1], B ?? 10);
  }, d.tickFormat = function(B, L) {
    return L == null ? R : f(L);
  }, d.nice = function(B) {
    var L = m();
    return (!B || typeof B.range != "function") && (B = t(L[0], L[L.length - 1], B ?? 10)), B ? m(Ll(L, B)) : d;
  }, d.copy = function() {
    return Pl(d, mo(e, t, n, r, o, s, i, l, u, f));
  }, d;
}
function tu() {
  return rl.apply(mo(Xl, Zl, Ae, Rr, Cn, jt, Ir, Lr, it, po).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function nu({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: r,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const f = te(null), [d, p] = ne(!1), [m, b] = ne(!1), w = t(e.start), g = t(e.end), $ = Math.max(g - w, 20), D = () => {
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
  }, C = e.progress ? $ * e.progress / 100 : 0, P = () => {
    n?.(e);
  }, S = () => {
    r?.(e);
  }, R = (F) => {
    F.key === "Enter" ? (F.preventDefault(), P()) : F.key === " " && (F.preventDefault(), S());
  }, B = () => {
    p(!0);
  }, L = () => {
    p(!1);
  }, x = () => {
    b(!0), l?.();
  }, v = () => {
    b(!1);
  }, _ = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), c = {
    "--task-left": `${w}px`,
    "--task-width": `${$}px`,
    "--task-color": D(),
    left: `${w}px`,
    width: `${$}px`,
    backgroundColor: D()
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: f,
      "data-task-index": s,
      className: _,
      style: c,
      onClick: P,
      onDoubleClick: S,
      onKeyDown: R,
      onMouseDown: B,
      onMouseUp: L,
      onFocus: x,
      onBlur: v,
      "aria-label": u || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${C}px` }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
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
      const w = Math.max(0, i === -1 ? 0 : i - 1);
      l(w), m(w);
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const w = Math.min(r.length - 1, i === -1 ? 0 : i + 1);
      l(w), m(w);
    } else if (b.key === "ArrowDown") {
      b.preventDefault();
      const w = document.querySelector(".gantt-row .timeline-container");
      w && w.focus();
    } else if (b.key === "Home")
      b.preventDefault(), l(0), m(0);
    else if (b.key === "End") {
      b.preventDefault();
      const w = r.length - 1;
      l(w), m(w);
    }
  }, d = (b) => {
    if (b.key === "ArrowDown") {
      b.preventDefault();
      const w = document.querySelector(".gantt-row .resource-label");
      w && w.focus();
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const w = u.current;
      w && w.focus();
    }
  }, p = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (b) => {
    const w = u.current?.querySelector(`[data-date-index="${b}"]`);
    w && w.focus();
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "gantt-header",
      role: "row",
      "aria-rowindex": 1,
      children: [
        /* @__PURE__ */ a.jsx(
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
        /* @__PURE__ */ a.jsx(
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
            children: r.map((b, w) => {
              const g = b.getTime() === s.getTime(), $ = i === w;
              return /* @__PURE__ */ a.jsx(
                "div",
                {
                  "data-date-index": w,
                  className: `date-column ${g ? "today" : ""} ${$ ? "focused" : ""}`,
                  tabIndex: $ ? 0 : -1,
                  role: "button",
                  "aria-label": `${b.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(w),
                  onKeyDown: f,
                  children: b.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                w
              );
            })
          }
        )
      ]
    }
  );
}
function au({ resource: e, tasks: t, scale: n, onTaskClick: r, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, u] = ne(!1), [f, d] = ne(-1), p = te(null);
  oe(() => {
    l && f >= 0 && t.length > 0 && setTimeout(() => {
      p.current?.querySelector(`[data-task-index="${f}"]`)?.focus();
    }, 0);
  }, [l, f, t.length]);
  const m = (g) => {
    if (g.key === "ArrowLeft" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (g.key === "ArrowRight" && g.shiftKey) {
      g.preventDefault(), g.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (g.key) {
        case "ArrowUp":
          g.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          g.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          g.preventDefault(), p.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const $ = Math.max(0, f - 1);
        d($), p.current?.querySelector(`[data-task-index="${$}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const C = Math.min(t.length - 1, f + 1);
        d(C), p.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), f >= 0 && r?.(t[f]);
        break;
      case " ":
        g.preventDefault(), f >= 0 && o?.(t[f]);
        break;
      case "Escape":
        g.preventDefault(), u(!1), d(-1), p.current?.focus();
        break;
    }
  }, b = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), p.current?.focus();
        break;
    }
  }, w = (g) => {
    l && d(g);
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": s + 2,
      children: [
        /* @__PURE__ */ a.jsx(
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
        /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: p,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: m,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((g, $) => /* @__PURE__ */ a.jsx(
              nu,
              {
                task: g,
                scale: n,
                onTaskClick: r,
                onTaskDoubleClick: o,
                isSelected: l && f === $,
                taskIndex: $,
                tabIndex: l && f === $ ? 0 : -1,
                onFocus: () => w($)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function vp({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: r,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = te(null), [l, u] = ne(800), f = se(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const g = new Date(n);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [n]), d = se(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [r]), p = se(() => Math.ceil((d.getTime() - f.getTime()) / 864e5) + 1, [f, d]);
  oe(() => {
    if (!i.current) return;
    const g = new ResizeObserver(($) => {
      const D = $[0];
      D && u(Math.max(D.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = se(
    () => tu().domain([f, d]).range([0, l]),
    [f, d, l]
  ), b = se(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach(($) => {
      const D = g.get($.resourceId) || [];
      D.push($), g.set($.resourceId, D);
    }), g;
  }, [t]), w = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const $ = i.current?.querySelector(".gantt-row .resource-label");
          $ && $.focus();
          break;
        case "Home":
          g.preventDefault();
          const D = i.current?.querySelector(".header-resource");
          D && D.focus();
          break;
      }
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "gantt-chart",
      role: "grid",
      "aria-label": "Gantt Chart showing resource scheduling and task timelines",
      "aria-rowcount": e.length + 1,
      "aria-colcount": p + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: w,
      children: [
        /* @__PURE__ */ a.jsx(ru, { viewStart: f, viewEnd: d, dateCount: p }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (g) => {
              g.key === "ArrowLeft" && g.altKey ? (g.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : g.key === "ArrowRight" && g.altKey ? (g.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : g.key === "ArrowUp" && g.altKey ? (g.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : g.key === "ArrowDown" && g.altKey && (g.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((g, $) => /* @__PURE__ */ a.jsx(
              au,
              {
                resource: g,
                tasks: b.get(g.id) || [],
                scale: m,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: $,
                dateCount: p
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
const yp = ({
  items: e = [],
  classes: t,
  labelText: n = "Breadcrumb",
  href: r,
  text: o,
  reverse: s = !1,
  attributes: i = {}
}) => {
  const l = () => r && o ? [{ href: r, text: o }] : e.filter((m) => m.href), u = () => {
    const m = l();
    if (m.length > 0) {
      const b = m[m.length - 1];
      return { href: b.href, text: b.text };
    }
    return { text: "Home" };
  }, f = l(), d = u(), p = K(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": s
    },
    t
  );
  return /* @__PURE__ */ a.jsxs("nav", { className: p, "aria-label": n, ...i, children: [
    /* @__PURE__ */ a.jsx("ol", { className: "nhsuk-breadcrumb__list", children: f.map((m, b) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-breadcrumb__item", children: /* @__PURE__ */ a.jsx(
      "a",
      {
        className: "nhsuk-breadcrumb__link",
        href: m.href,
        ...m.attributes || {},
        children: m.text
      }
    ) }, b)) }),
    d.href && /* @__PURE__ */ a.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ a.jsxs(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: d.href,
        ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
        children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
          d.text
        ]
      }
    ) })
  ] });
}, kp = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: r = {}
}) => {
  const [o, s] = ne(!1);
  oe(() => {
    s(!0);
  }, []), oe(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (u) => {
      const f = u.target, d = f.getAttribute("href");
      if (d && d.startsWith("#")) {
        const p = document.querySelector(d);
        if (p) {
          p.hasAttribute("tabindex") || p.setAttribute("tabindex", "-1"), p.focus(), p.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            p.classList.remove("nhsuk-skip-link-focused-element"), p.getAttribute("tabindex") === "-1" && p.removeAttribute("tabindex");
          }, 3e3);
          f.__nhsSkipLinkTimeout = m;
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
  }, [o]);
  const i = K("nhsuk-skip-link", n);
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": o ? "true" : "false",
      ...r,
      children: e
    }
  );
}, Sp = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: r,
  classes: o,
  attributes: s = {}
}) => {
  const i = K("nhsuk-pagination", o);
  return /* @__PURE__ */ a.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...s,
      children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-list nhsuk-pagination__list", children: [
        e && t && /* @__PURE__ */ a.jsx("li", { className: "nhsuk-pagination-item--previous", children: /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: e, children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-pagination__title", children: "Previous" }),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-pagination__page", children: t }),
          /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-left",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ a.jsx("path", { d: "M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" })
            }
          )
        ] }) }),
        n && r && /* @__PURE__ */ a.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: n, children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-pagination__page", children: r }),
          /* @__PURE__ */ a.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-right",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ a.jsx("path", { d: "M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" })
            }
          )
        ] }) })
      ] })
    }
  );
}, wp = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: r = {}
}) => {
  const o = K("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ a.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...i.attributes || {},
      children: /* @__PURE__ */ a.jsx("span", { className: "nhsuk-contents-list__current", children: i.text })
    },
    l
  ) : /* @__PURE__ */ a.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      children: /* @__PURE__ */ a.jsx(
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
  return /* @__PURE__ */ a.jsxs(
    "nav",
    {
      className: o,
      role: "navigation",
      "aria-label": n,
      ...r,
      children: [
        /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ a.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, _p = ({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: r = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: f,
  className: d,
  children: p,
  "data-testid": m,
  id: b,
  "aria-label": w,
  "aria-labelledby": g,
  "aria-describedby": $
}) => {
  const D = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), P = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), S = () => {
    if (n)
      return /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const L = () => l && e !== "feature" ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ a.jsx(
      ft,
      {
        level: r,
        className: P,
        children: L()
      }
    );
  }, R = () => p || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-card__description", children: s }) : null), B = () => e !== "primary" ? null : /* @__PURE__ */ a.jsxs(
    "svg",
    {
      className: "nhsuk-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "27",
      height: "27",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ a.jsx("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
        /* @__PURE__ */ a.jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
          /* @__PURE__ */ a.jsx("path", { d: "M15.438 13l-3.771 3.771" }),
          /* @__PURE__ */ a.jsx("path", { d: "M11.667 9.229L15.438 13" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: D,
      "data-testid": m,
      id: b,
      "aria-label": w,
      "aria-labelledby": g,
      "aria-describedby": $,
      children: [
        u && /* @__PURE__ */ a.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: f || ""
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: C, children: [
          S(),
          R(),
          B()
        ] })
      ]
    }
  );
}, Tp = ({
  className: e,
  children: t,
  "data-testid": n,
  id: r
}) => {
  const o = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    "ul",
    {
      className: o,
      "data-testid": n,
      id: r,
      children: t
    }
  );
}, $p = ({
  className: e,
  children: t,
  "data-testid": n
}) => {
  const r = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    "li",
    {
      className: r,
      "data-testid": n,
      children: t
    }
  );
}, Cp = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: r = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": f,
  id: d,
  "aria-label": p,
  "aria-labelledby": m,
  "aria-describedby": b
}) => {
  const w = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), $ = () => {
    if (n)
      return /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const C = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], P = /* @__PURE__ */ a.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        C,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ a.jsx(
      ft,
      {
        level: r,
        className: g,
        children: P
      }
    );
  }, D = () => u || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: w,
      "data-testid": f,
      id: d,
      "aria-label": p,
      "aria-labelledby": m,
      "aria-describedby": b,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          $(),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "nhsuk-care-card__content", children: D() })
      ]
    }
  );
}, ou = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: r,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const f = K(
    "nhsuk-panel",
    t
  ), d = () => !n && !r && !l ? null : r ? /* @__PURE__ */ a.jsx(
    ft,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ a.jsx(
    ft,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, p = () => l ? /* @__PURE__ */ a.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ a.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ a.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: f, id: e, ...u, children: [
    d(),
    p()
  ] });
}, Np = ({
  text: e,
  html: t,
  children: n,
  className: r,
  ...o
}) => {
  const s = K("nhsuk-inset-text", r), i = () => n || (t ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ a.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ a.jsx("div", { className: s, ...o, children: i() });
}, jp = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...r
}) => {
  const o = K(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ a.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, f) => /* @__PURE__ */ a.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ a.jsxs(
        "a",
        {
          href: u.href,
          className: "nhsuk-link",
          ...u.attributes,
          children: [
            s(u),
            u.visuallyHiddenText && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    f
  )) }) });
  return /* @__PURE__ */ a.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ a.jsx("dl", { className: o, ...r, children: e.map((l, u) => /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ a.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ a.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, Ep = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: r,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: f,
  tableClasses: d,
  classes: p,
  attributes: m,
  "data-testid": b
}) => {
  const w = `nhsuk-table__caption ${r ? `nhsuk-table__caption--${r}` : ""}`.trim(), g = K(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), $ = K(p), D = (S, R) => {
    const B = K("nhsuk-table__header", {
      [`nhsuk-table__header--${S.format}`]: S.format
    }, S.classes), L = {
      scope: "col",
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && { role: "columnheader" },
      ...S.attributes
    };
    return /* @__PURE__ */ a.jsx("th", { className: B, ...L, children: S.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text }, R);
  }, C = (S, R, B) => {
    const L = o && B, x = K(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${S.format}`]: S.format
      },
      S.classes
    ), v = {
      ...L && { scope: "row" },
      ...S.colspan && { colSpan: S.colspan },
      ...S.rowspan && { rowSpan: S.rowspan },
      ...s && {
        role: L ? "rowheader" : "cell",
        ...S.header && { "data-label": S.header }
      },
      ...S.attributes
    }, _ = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      s && S.header && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        S.header,
        " "
      ] }),
      S.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: S.html } }) : S.text
    ] }), c = L ? "th" : "td";
    return /* @__PURE__ */ a.jsx(c, { className: x, ...v, children: _ }, R);
  }, P = () => /* @__PURE__ */ a.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...m,
      ...b && { "data-testid": b },
      children: [
        n && /* @__PURE__ */ a.jsx("caption", { className: w, children: n }),
        t && t.length > 0 && /* @__PURE__ */ a.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ a.jsx("tr", { ...s && { role: "row" }, children: t.map((S, R) => D(S, R)) })
          }
        ),
        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((S, R) => /* @__PURE__ */ a.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: S.map(
              (B, L) => C(B, L, L === 0)
            )
          },
          R
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ a.jsxs(ou, { className: f, children: [
    i && /* @__PURE__ */ a.jsx(ft, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    P()
  ] }) : $ ? /* @__PURE__ */ a.jsx("div", { className: $, children: P() }) : P();
}, Fp = tt(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: r,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: f,
  "data-testid": d,
  ...p
}, m) => {
  const b = n !== void 0, [w, g] = ne(() => t || e[0]?.id || ""), $ = b ? n : w, D = te(null), C = te(/* @__PURE__ */ new Map()), P = J((_) => {
    b || g(_), r?.(_);
  }, [b, r]), S = J((_) => {
    o?.(_), l && P(_);
  }, [o, l, P]), R = J((_, c) => {
    const F = e.filter((M) => !M.disabled).map((M) => M.id), G = F.indexOf(c);
    let j = null;
    switch (_.key) {
      case "ArrowLeft":
        j = G > 0 ? G - 1 : F.length - 1;
        break;
      case "ArrowRight":
        j = G < F.length - 1 ? G + 1 : 0;
        break;
      case "Home":
        j = 0;
        break;
      case "End":
        j = F.length - 1;
        break;
      case "Escape":
        _.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (j !== null) {
      _.preventDefault();
      const M = F[j], h = C.current.get(M);
      h && (h.focus(), S(M));
    }
  }, [e, S, i]), B = J((_, c) => {
    c ? C.current.set(_, c) : C.current.delete(_);
  }, []), L = J((_) => {
    const c = C.current.get(_);
    c && c.focus();
  }, []);
  Da(m, () => ({
    focusTab: L,
    getActiveTab: () => $,
    getTabListElement: () => D.current
  }), [L, $]);
  const x = J((_) => {
    const c = _.relatedTarget;
    D.current?.contains(c) || s?.();
  }, [s]), v = K("nhsuk-tabs", u);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: v,
      id: f,
      "data-testid": d,
      ...p,
      children: [
        /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: D,
            children: /* @__PURE__ */ a.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: x,
                children: e.map((_) => {
                  const c = _.id === $, F = _.disabled, G = K("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": c,
                    "nhsuk-tabs__list-item--disabled": F
                  });
                  return /* @__PURE__ */ a.jsx("li", { className: G, children: /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      ref: (j) => B(_.id, j),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": c,
                      "aria-controls": `${_.id}-panel`,
                      id: `${_.id}-tab`,
                      tabIndex: c ? 0 : -1,
                      disabled: F,
                      onClick: () => !F && P(_.id),
                      onKeyDown: (j) => !F && R(j, _.id),
                      onFocus: () => !F && S(_.id),
                      ..._.attributes,
                      children: _.label
                    }
                  ) }, _.id);
                })
              }
            )
          }
        ),
        e.map((_) => {
          const c = _.id === $;
          return /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${_.id}-tab`,
              id: `${_.id}-panel`,
              hidden: !c,
              children: _.content
            },
            _.id
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
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, f) => {
    const d = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ a.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : r ? m = /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n && (m = n), /* @__PURE__ */ a.jsxs(
      "details",
      {
        ref: f,
        id: i,
        className: d,
        open: o,
        ...u,
        children: [
          /* @__PURE__ */ a.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-details__text", children: m })
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
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    s && u.push(s);
    const f = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ a.jsxs(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__cross",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: [
          /* @__PURE__ */ a.jsx(
            "path",
            {
              d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "path",
            {
              d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__tick",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: /* @__PURE__ */ a.jsx(
          "path",
          {
            strokeWidth: "4",
            strokeLinecap: "round",
            d: "M18.4 7.8l-8.5 8.4L5.6 12",
            stroke: "#007f3b"
          }
        )
      }
    ), p = (b) => t === "cross" && !r ? `do not ${b}` : b, m = () => /* @__PURE__ */ a.jsx(
      ft,
      {
        level: o,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ a.jsxs(
      "div",
      {
        ref: l,
        className: u.join(" "),
        ...i,
        children: [
          m(),
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ a.jsx("ul", { className: f.join(" "), role: "list", children: n.map((b, w) => /* @__PURE__ */ a.jsxs("li", { children: [
            d(),
            p(b.item)
          ] }, w)) }) })
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
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, f) => {
    const d = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ a.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : r ? m = /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n && (m = n), /* @__PURE__ */ a.jsxs(
      "details",
      {
        ref: f,
        id: i,
        className: d,
        open: o,
        ...u,
        children: [
          /* @__PURE__ */ a.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
lu.displayName = "Expander";
const cu = tt(
  ({ items: e, idPrefix: t = "task-list", className: n, ...r }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const f = u + 1, d = `${t}-${f}-hint`, p = `${t}-${f}-status`, m = !!l.href, b = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), w = [
        l.hint && d,
        p
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ a.jsx(
        uu,
        {
          item: l,
          itemClasses: b,
          hasLink: m,
          hintId: d,
          statusId: p,
          ariaDescribedBy: w
        },
        u
      );
    };
    return /* @__PURE__ */ a.jsx(
      "ul",
      {
        ref: o,
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
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const f = e.title.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ a.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": s,
        children: f
      }
    ) : /* @__PURE__ */ a.jsx("div", { className: e.title.classes || "", children: f });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ a.jsx(
    "div",
    {
      id: r,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ a.jsx("div", { id: r, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const f = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ a.jsx(Cr, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ a.jsx("div", { className: f, id: o, children: d });
  };
  return /* @__PURE__ */ a.jsxs("li", { className: t, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
cu.displayName = "TaskList";
const Dp = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: r,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), u = () => o || (r ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ a.jsx("p", { children: n }) : null), f = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: f,
      ...i,
      children: [
        Fa(
          d,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
            e,
            /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ a.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        u()
      ]
    }
  );
}, Pp = ({
  src: e,
  alt: t,
  caption: n,
  sizes: r,
  srcset: o,
  className: s,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsxs(
    "figure",
    {
      className: l,
      ...i,
      children: [
        /* @__PURE__ */ a.jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src: e,
            alt: t,
            ...r && o ? { sizes: r, srcSet: o } : {}
          }
        ),
        n && /* @__PURE__ */ a.jsx(
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
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: f,
    ariaDescribedby: d,
    className: p,
    tableClassName: m,
    bordered: b = !1,
    striped: w = !1,
    responsive: g = !1,
    tableType: $ = "default"
  }, D) => {
    const C = te(null), P = te(null), S = te(null);
    pe.useImperativeHandle(D, () => C.current, []);
    const [R, B] = ne(0), [L, x] = ne(0), [v, _] = ne("headers"), [c, F] = ne("browse"), G = t.length, j = e.length, M = se(() => !n || n.length === 0 ? e : [...e].sort((W, ee) => {
      for (const { key: V, direction: k } of n) {
        const H = W[V], q = ee[V];
        if (H == null && q == null) continue;
        if (H == null) return 1;
        if (q == null) return -1;
        let T = 0;
        if (typeof H == "number" && typeof q == "number" ? T = H - q : T = String(H).localeCompare(String(q)), T !== 0)
          return k === "asc" ? T : -T;
      }
      return 0;
    }), [e, n]), h = J((W, ee) => {
      setTimeout(() => {
        const V = C.current?.querySelector(
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
        const ee = C.current?.querySelector(`th:nth-child(${W + 1})`);
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
          if (W.preventDefault(), v === "headers" && c === "browse")
            F("navigate"), z(L);
          else if (v === "headers" && c === "navigate") {
            const V = t[L];
            V && Y(V.key);
          } else v === "cells" && c === "browse" ? (F("navigate"), h(R, L)) : v === "cells" && c === "navigate" && Z(R);
          break;
        case "Escape":
          W.preventDefault(), (v === "headers" && c === "navigate" || v === "cells" && c === "navigate") && F("browse");
          break;
        case "ArrowLeft":
          if (W.preventDefault(), c === "navigate" || c === "browse" && v === "headers") {
            if (v === "headers") {
              const V = Math.max(0, L - 1);
              x(V), z(V);
            } else if (v === "cells") {
              const V = Math.max(0, L - 1);
              x(V), h(R, V);
            }
          }
          break;
        case "ArrowRight":
          if (W.preventDefault(), c === "navigate" || c === "browse" && v === "headers") {
            if (v === "headers") {
              const V = Math.min(G - 1, L + 1);
              x(V), z(V);
            } else if (v === "cells") {
              const V = Math.min(G - 1, L + 1);
              x(V), h(R, V);
            }
          }
          break;
        case "ArrowUp":
          if (W.preventDefault(), v === "cells") {
            if (c === "browse") {
              const V = Math.max(0, R - 1);
              B(V), h(V, 0), x(0);
            } else if (c === "navigate")
              if (R > 0) {
                const V = R - 1;
                B(V), h(V, L);
              } else
                _("headers"), F("browse"), z(L);
          }
          break;
        case "ArrowDown":
          if (W.preventDefault(), v === "headers" && c === "browse")
            _("cells"), B(0), x(0), h(0, 0);
          else if (v === "cells") {
            const V = j - 1;
            if (c === "browse") {
              const k = Math.min(V, R + 1);
              B(k), h(k, 0), x(0);
            } else if (c === "navigate" && R < V) {
              const k = R + 1;
              B(k), h(k, L);
            }
          }
          break;
        case "Home":
          W.preventDefault(), v === "headers" ? (x(0), z(0)) : v === "cells" && (W.ctrlKey ? (B(0), x(0), h(0, 0)) : (x(0), h(R, 0)));
          break;
        case "End":
          if (W.preventDefault(), v === "headers") {
            const V = G - 1;
            x(V), z(V);
          } else if (v === "cells")
            if (W.ctrlKey) {
              const V = j - 1, k = G - 1;
              B(V), x(k), h(V, k);
            } else {
              const V = G - 1;
              x(V), h(R, V);
            }
          break;
        case " ":
          if (W.preventDefault(), v === "headers" && c === "navigate") {
            const V = t[L];
            V && Y(V.key);
          } else v === "cells" && c === "navigate" && Z(R);
          break;
      }
    }, [
      v,
      c,
      L,
      R,
      G,
      j,
      t,
      h,
      z,
      Y,
      Z
    ]);
    oe(() => {
      const W = C.current;
      if (W)
        return W.addEventListener("keydown", E), () => W.removeEventListener("keydown", E);
    }, [E]);
    const U = K(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": w,
        "nhsuk-table--compact": $ === "compact"
      },
      p
    );
    return /* @__PURE__ */ a.jsxs(
      "table",
      {
        ref: C,
        className: U,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": f,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { ref: P, role: "row", children: t.map((W, ee) => {
            const V = n?.find((q) => q.key === W.key), k = !!V, H = v === "headers" && L === ee;
            return /* @__PURE__ */ a.jsx(
              "th",
              {
                className: K("sortable-header", {
                  "sortable-header--focused": H
                }),
                role: "columnheader",
                tabIndex: H ? 0 : -1,
                onClick: () => Y(W.key),
                onKeyDown: (q) => {
                  (q.key === "Enter" || q.key === " ") && (q.preventDefault(), Y(W.key));
                },
                "aria-sort": k ? V?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ a.jsx("span", { className: "header-label", children: W.label }),
                  k && /* @__PURE__ */ a.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ a.jsx("span", { className: "sort-priority", children: n.findIndex((q) => q.key === W.key) + 1 }),
                    /* @__PURE__ */ a.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: V?.direction === "asc" ? /* @__PURE__ */ a.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ a.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              W.key
            );
          }) }) }),
          /* @__PURE__ */ a.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: M.map((W, ee) => {
            const V = o === ee, k = v === "cells" && R === ee;
            return /* @__PURE__ */ a.jsx(
              "tr",
              {
                role: "row",
                className: K("data-row", {
                  "data-row--selected": V,
                  "data-row--focused": k
                }),
                "aria-selected": V,
                children: t.map((H, q) => {
                  const T = H.render ? H.render(W) : W[H.key], y = v === "cells" && R === ee && L === q, I = () => typeof T == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                    /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: T ? "✓" : "✗" }),
                    /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: T ? "Yes" : "No" })
                  ] }) : String(T ?? "");
                  return /* @__PURE__ */ a.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: K("data-cell", {
                        "data-cell--focused": y
                      }),
                      tabIndex: y ? 0 : -1,
                      onClick: () => Z(ee),
                      children: I()
                    },
                    H.key
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
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: f = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const p = te(null), m = te(null), b = te(null), w = J((v, _) => {
    u || (m.current = _, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", _));
  }, [u]), g = J((v, _) => {
    u || m.current === _ || (v.preventDefault(), v.dataTransfer.dropEffect = "move", b.current = _);
  }, [u]), $ = J((v, _) => {
    if (u) return;
    v.preventDefault();
    const c = m.current;
    if (!c || c === _) return;
    const F = e.findIndex((j) => j.key === c), G = e.findIndex((j) => j.key === _);
    if (F !== -1 && G !== -1) {
      const j = [...e], [M] = j.splice(F, 1);
      j.splice(G, 0, M), n(j);
    }
    m.current = null, b.current = null;
  }, [u, e, n]), D = J(() => {
    m.current = null, b.current = null;
  }, []), C = J((v) => {
    const _ = t.find((c) => c.key === v);
    return _ ? _.label : v;
  }, [t]), P = J((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), S = J((v) => {
    if (u) return;
    const _ = e.map(
      (c) => c.key === v ? { ...c, direction: c.direction === "asc" ? "desc" : "asc" } : c
    );
    n(_);
  }, [e, n, u]), R = J((v) => {
    if (u) return;
    const _ = e.filter((c) => c.key !== v);
    n(_);
  }, [e, n, u]), B = J(() => {
    u || n([]);
  }, [n, u]), L = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const v = e.map((_, c) => {
      const F = _.direction === "asc" ? "ascending" : "descending";
      return `${c + 1}. ${C(_.key)} (${F})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const _ = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${_}`;
    }
  }, x = se(() => {
    const v = ["sort-description"];
    return l && v.push("sort-help"), d && v.push(d), v.join(" ");
  }, [l, d]);
  return e.length === 0 ? /* @__PURE__ */ a.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: o
      }
    ),
    l && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ a.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ a.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: L()
      }
    ),
    /* @__PURE__ */ a.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ a.jsx(
        "div",
        {
          ref: p,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": f,
          "aria-describedby": x,
          children: e.map((v, _) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (c) => w(c, v.key),
              onDragOver: (c) => g(c, v.key),
              onDrop: (c) => $(c, v.key),
              onDragEnd: D,
              onClick: () => S(v.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": v.key,
              children: /* @__PURE__ */ a.jsx(
                Cr,
                {
                  color: P(_),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(v.key),
                  disabled: u,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ a.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${_ + 1}`, children: _ + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: C(v.key) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (c) => {
                          c.stopPropagation(), S(v.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${C(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ a.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${v.direction}`, children: /* @__PURE__ */ a.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${v.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ a.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                          }
                        ) })
                      }
                    )
                  ] })
                }
              )
            },
            v.key
          ))
        }
      ),
      i && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ a.jsx(
        $r,
        {
          variant: "secondary",
          onClick: B,
          isDisabled: u,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ a.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
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
      const o = [...e.selectedRows];
      return o[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: o };
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
const Ea = tt(
  function(t, n) {
    const {
      dataConfig: r = {},
      tabPanels: o,
      selectedIndex: s,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: u,
      ariaDescription: f,
      className: d = "",
      disabled: p = !1,
      orientation: m = "horizontal",
      id: b,
      isLoading: w = !1,
      loadingComponent: g,
      error: $ = null,
      errorComponent: D,
      "data-testid": C
    } = t, {
      dataComparator: P = (k, H) => JSON.stringify(k) === JSON.stringify(H),
      filterFunction: S = (k) => k,
      booleanRenderer: R = (k) => k ? "✓" : "✗"
    } = r || {}, B = s !== void 0, L = s ?? 0, [x, v] = ne({
      focusArea: "tabs",
      focusedTabIndex: L,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), _ = se(() => ({
      selectedIndex: L,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [L]), [c, F] = cs(hu, _);
    oe(() => {
      const k = c.tabLoadingStates.length, H = o.length;
      k !== H && F({ type: "ADJUST_ARRAYS", payload: { newLength: H } });
    }, [o.length]), oe(() => {
      B && F({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, B]), oe(() => {
      l && l(c.globalSelectedRowData);
    }, [c.globalSelectedRowData, l]);
    const G = J((k, H) => P(k, H), [P]), j = J((k) => {
      k >= 0 && k < o.length && !o[k].disabled && (F({ type: "SET_SELECTED_INDEX", payload: k }), i?.(k));
    }, [o, i]), M = J((k, H) => {
      const { key: q } = k;
      switch (q) {
        case "ArrowLeft":
          k.preventDefault();
          const T = H > 0 ? H - 1 : o.length - 1;
          j(T), v((A) => ({ ...A, focusedTabIndex: T })), h.current[T]?.focus();
          break;
        case "ArrowRight":
          k.preventDefault();
          const y = H < o.length - 1 ? H + 1 : 0;
          j(y), v((A) => ({ ...A, focusedTabIndex: y })), h.current[y]?.focus();
          break;
        case "ArrowDown":
          k.preventDefault(), v((A) => ({
            ...A,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Z(0);
          break;
        case "Home":
          k.preventDefault(), j(0), v((A) => ({ ...A, focusedTabIndex: 0 })), h.current[0]?.focus();
          break;
        case "End":
          k.preventDefault();
          const I = o.length - 1;
          j(I), v((A) => ({ ...A, focusedTabIndex: I })), h.current[I]?.focus();
          break;
        case "Enter":
        case " ":
          k.preventDefault(), j(H);
          break;
      }
    }, [o.length, j]), h = te([]), z = te([]), Y = J((k, H) => {
      const q = c.sortConfig || [], T = q.find((A) => A.key === H);
      let y;
      T ? T.direction === "asc" ? y = q.map(
        (A) => A.key === H ? { ...A, direction: "desc" } : A
      ) : y = q.filter((A) => A.key !== H) : y = [...q, { key: H, direction: "asc" }], F({
        type: "SET_SORT",
        payload: y
      }), o[k].onSort?.(H);
    }, [c.sortConfig, o]), Z = J((k) => {
      setTimeout(() => {
        const H = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] th:nth-child(${k + 1})`
        );
        H && H.focus();
      }, 0);
    }, [c.selectedIndex]), E = J((k) => R(k), [R]), U = J((k, H) => {
      setTimeout(() => {
        const q = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] tbody tr:nth-child(${k + 1}) td:nth-child(${H + 1})`
        );
        q && q.focus();
      }, 0);
    }, [c.selectedIndex]), W = J((k, H) => {
      const { key: q } = k, T = o[c.selectedIndex], y = T?.columns.length || 0;
      switch (q) {
        case "ArrowLeft":
          k.preventDefault();
          const I = Math.max(0, H - 1);
          v((X) => ({ ...X, focusedHeaderIndex: I })), Z(I);
          break;
        case "ArrowRight":
          k.preventDefault();
          const A = Math.min(y - 1, H + 1);
          v((X) => ({ ...X, focusedHeaderIndex: A })), Z(A);
          break;
        case "ArrowUp":
          k.preventDefault(), v((X) => ({
            ...X,
            focusArea: "tabs",
            focusedTabIndex: c.selectedIndex
          })), h.current[c.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          k.preventDefault(), v((X) => ({
            ...X,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: H,
            isGridActive: !0
          })), U(0, H);
          break;
        case "Home":
          k.preventDefault(), v((X) => ({ ...X, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          k.preventDefault();
          const N = y - 1;
          v((X) => ({ ...X, focusedHeaderIndex: N })), Z(N);
          break;
        case "Enter":
        case " ":
          k.preventDefault();
          const re = T?.columns[H]?.key;
          re && Y(c.selectedIndex, re);
          break;
      }
    }, [o, c.selectedIndex, Y, v, Z, U, h]), ee = J((k, H, q) => {
      const { key: T } = k, y = o[c.selectedIndex], I = y?.data.length || 0, A = y?.columns.length || 0;
      switch (T) {
        case "ArrowUp":
          if (k.preventDefault(), H === 0)
            v((O) => ({
              ...O,
              focusArea: "headers",
              focusedHeaderIndex: q,
              isGridActive: !1
            })), Z(q);
          else {
            const O = H - 1;
            v((Q) => ({ ...Q, focusedRowIndex: O })), U(O, q);
          }
          break;
        case "ArrowDown":
          k.preventDefault();
          const N = Math.min(I - 1, H + 1);
          v((O) => ({ ...O, focusedRowIndex: N })), U(N, q);
          break;
        case "ArrowLeft":
          k.preventDefault();
          const re = Math.max(0, q - 1);
          v((O) => ({ ...O, focusedColumnIndex: re })), U(H, re);
          break;
        case "ArrowRight":
          k.preventDefault();
          const X = Math.min(A - 1, q + 1);
          v((O) => ({ ...O, focusedColumnIndex: X })), U(H, X);
          break;
        case "Home":
          k.preventDefault(), k.ctrlKey ? (v((O) => ({ ...O, focusedRowIndex: 0, focusedColumnIndex: 0 })), U(0, 0)) : (v((O) => ({ ...O, focusedColumnIndex: 0 })), U(H, 0));
          break;
        case "End":
          if (k.preventDefault(), k.ctrlKey) {
            const O = I - 1, Q = A - 1;
            v((le) => ({ ...le, focusedRowIndex: O, focusedColumnIndex: Q })), U(O, Q);
          } else {
            const O = A - 1;
            v((Q) => ({ ...Q, focusedColumnIndex: O })), U(H, O);
          }
          break;
        case "Enter":
        case " ":
          if (k.preventDefault(), y && y.data[H]) {
            const O = y.data.some((ue) => "ews_data" in ue) ? S(y.data, c.filters) : y.data, Q = c.sortConfig;
            let le = O;
            if (Q && Q.length > 0 && (le = [...O].sort((ue, we) => {
              for (const { key: be, direction: ke } of Q) {
                let $e = ue[be], We = we[be];
                const Oe = y.columns.find((is) => is.key === be);
                if (Oe?.render && ($e = Oe.render(ue), We = Oe.render(we)), $e == null && We == null) continue;
                if ($e == null) return ke === "asc" ? -1 : 1;
                if (We == null) return ke === "asc" ? 1 : -1;
                let Ue = 0;
                if (typeof $e == "number" && typeof We == "number" ? Ue = $e - We : Ue = String($e).localeCompare(String(We), void 0, { numeric: !0, sensitivity: "base" }), Ue !== 0)
                  return ke === "asc" ? Ue : -Ue;
              }
              return 0;
            })), le[H]) {
              const ue = le[H], be = c.globalSelectedRowData && G(c.globalSelectedRowData, ue) ? null : ue;
              F({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: be
              });
            }
          }
          break;
      }
    }, [o, c.selectedIndex, c.filters, c.sortConfig, S, G, F, v, Z, U]), V = J((k, H) => S(k, H), [S]);
    return Da(n, () => ({
      selectTab: (k) => {
        k >= 0 && k < o.length && (F({ type: "SET_SELECTED_INDEX", payload: k }), i?.(k));
      },
      refreshData: (k) => {
        console.log("Refreshing data for tab:", k ?? "all");
      },
      exportData: (k) => {
        const H = k ?? c.selectedIndex, q = o[H];
        return q ? q.data : [];
      },
      getSelectedRows: (k) => c.globalSelectedRowData ? [] : [],
      clearSelection: (k) => {
        F({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (k) => {
        F({ type: "SET_FILTERS", payload: k });
      }
    }), [c.selectedIndex, c.selectedRows, o, i]), w ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": C, children: g || /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : $ ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": C, children: D || /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ a.jsx("p", { children: $ })
    ] }) }) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${d}`,
        id: b,
        "data-testid": C,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${b}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ a.jsx(
            fu,
            {
              sortConfig: c.sortConfig || [],
              columns: o.flatMap(
                (k) => k.columns.map((H) => ({ key: H.key, label: H.label }))
              ).filter(
                (k, H, q) => q.findIndex((T) => T.key === k.key) === H
                // Remove duplicates
              ),
              onSortChange: (k) => {
                F({ type: "SET_SORT", payload: k });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": `${f || ""} ${b ? `${b}-navigation-help` : ""}`.trim(),
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((k, H) => {
                const q = H === c.selectedIndex, T = k.disabled || p;
                return /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${k.id}`,
                    "aria-controls": `panel-${k.id}`,
                    "aria-selected": q,
                    "aria-disabled": T,
                    tabIndex: q ? 0 : -1,
                    ref: (y) => {
                      h.current[H] = y;
                    },
                    onClick: () => j(H),
                    onKeyDown: (y) => M(y, H),
                    disabled: T,
                    className: `
                  aria-tabs-datagrid__tab
                  ${q ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${T ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: k.label }),
                      c.tabLoadingStates[H] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      c.tabErrors[H] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  k.id
                );
              })
            }
          ),
          o.map((k, H) => {
            const q = H === c.selectedIndex;
            return /* @__PURE__ */ a.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${k.id}`,
                "aria-labelledby": `tab-${k.id}`,
                tabIndex: 0,
                hidden: !q,
                ref: (T) => {
                  z.current[H] = T;
                },
                className: `aria-tabs-datagrid__panel ${k.className || ""}`,
                "data-tab-panel": H,
                children: q && (() => {
                  const T = k.data.some((I) => "ews_data" in I) ? V(k.data, c.filters) : k.data, y = se(() => {
                    const I = c.sortConfig;
                    return !I || I.length === 0 ? T : [...T].sort((A, N) => {
                      for (const { key: re, direction: X } of I) {
                        let O = A[re], Q = N[re];
                        const le = k.columns.find((we) => we.key === re);
                        if (le?.render && (O = le.render(A), Q = le.render(N)), O == null && Q == null) continue;
                        if (O == null) return 1;
                        if (Q == null) return -1;
                        let ue = 0;
                        if (typeof O == "number" && typeof Q == "number" ? ue = O - Q : typeof O == "boolean" && typeof Q == "boolean" ? ue = O === Q ? 0 : O ? 1 : -1 : ue = String(O).localeCompare(String(Q), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ue !== 0)
                          return X === "asc" ? ue : -ue;
                      }
                      return 0;
                    });
                  }, [T, c.sortConfig, k.columns]);
                  return /* @__PURE__ */ a.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": k.ariaLabel,
                      "aria-describedby": k.ariaDescription,
                      children: [
                        /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { role: "row", children: k.columns.map((I, A) => {
                          const N = c.sortConfig?.find((O) => O.key === I.key), re = !!N, X = x.focusArea === "headers" && x.focusedHeaderIndex === A;
                          return /* @__PURE__ */ a.jsx(
                            "th",
                            {
                              className: `sortable-header ${X ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: X ? 0 : -1,
                              onClick: () => Y(H, I.key),
                              onKeyDown: (O) => W(O, A),
                              "aria-sort": re ? N?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ a.jsx("span", { className: "header-label", children: I.label }),
                                /* @__PURE__ */ a.jsxs("div", { className: `sort-indicator-container ${re ? `sort-indicator--${N?.direction}` : ""}`, children: [
                                  c.sortConfig && c.sortConfig.length > 0 && c.sortConfig.findIndex((O) => O.key === I.key) !== -1 && /* @__PURE__ */ a.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${c.sortConfig.findIndex((O) => O.key === I.key) + 1}`,
                                      "data-priority": c.sortConfig.findIndex((O) => O.key === I.key) + 1,
                                      title: `Sort priority: ${c.sortConfig.findIndex((O) => O.key === I.key) + 1}`,
                                      children: c.sortConfig.findIndex((O) => O.key === I.key) + 1
                                    }
                                  ),
                                  re && /* @__PURE__ */ a.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${N?.direction}`,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ a.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                    }
                                  )
                                ] })
                              ] })
                            },
                            I.key
                          );
                        }) }) }),
                        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: y.map((I, A) => {
                          const N = c.globalSelectedRowData && G(c.globalSelectedRowData, I), re = x.focusArea === "cells" && x.focusedRowIndex === A;
                          return /* @__PURE__ */ a.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${N ? "data-row--selected" : ""} ${re ? "data-row--focused" : ""}`,
                              "aria-selected": N,
                              children: k.columns.map((X, O) => {
                                const Q = X.render ? X.render(I) : I[X.key], le = x.focusArea === "cells" && x.focusedRowIndex === A && x.focusedColumnIndex === O, ue = () => typeof Q == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                                  E(Q),
                                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: Q ? "Yes" : "No" })
                                ] }) : String(Q ?? "");
                                return /* @__PURE__ */ a.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${le ? "data-cell--focused" : ""}`,
                                    tabIndex: le ? 0 : -1,
                                    onClick: () => {
                                      const be = c.globalSelectedRowData && G(c.globalSelectedRowData, I) ? null : I;
                                      F({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: be
                                      });
                                    },
                                    onKeyDown: (we) => ee(we, A, O),
                                    children: ue()
                                  },
                                  X.key
                                );
                              })
                            },
                            A
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              k.id
            );
          })
        ]
      }
    );
  }
);
function pu(e, t) {
  const [n, r] = ne("cards");
  return oe(() => {
    if (t) {
      r(t);
      return;
    }
    const o = () => {
      const s = window.innerWidth;
      s < e.mobile ? r("cards") : s < e.desktop ? r("hybrid") : r("table");
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [e, t]), n;
}
const Mp = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: r = {},
  ...o
}) => {
  const s = pu(e, t), {
    primaryField: i = o.tabPanels[0]?.columns[0]?.key,
    secondaryFields: l = o.tabPanels[0]?.columns.slice(1, 3).map((p) => p.key) || [],
    badgeFields: u = [],
    hiddenFields: f = [],
    cardTemplate: d
  } = n;
  return s === "cards" ? /* @__PURE__ */ a.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${o.className || ""}`, children: [
    /* @__PURE__ */ a.jsx("div", { role: "tablist", className: "aria-tabs-datagrid-adaptive__tabs", children: o.tabPanels.map((p, m) => /* @__PURE__ */ a.jsx(
      "button",
      {
        role: "tab",
        className: `aria-tabs-datagrid-adaptive__tab ${m === 0 ? "aria-tabs-datagrid-adaptive__tab--selected" : ""}`,
        children: p.label
      },
      p.id
    )) }),
    /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__cards", role: "grid", children: o.tabPanels[0]?.data.map((p, m) => /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "aria-tabs-datagrid-adaptive__card",
        role: "gridcell",
        tabIndex: 0,
        children: d ? d(p, o.tabPanels[0].columns) : /* @__PURE__ */ a.jsx(
          mu,
          {
            row: p,
            columns: o.tabPanels[0].columns,
            primaryField: i,
            secondaryFields: l,
            badgeFields: u,
            hiddenFields: f
          }
        )
      },
      m
    )) })
  ] }) : s === "hybrid" ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${o.className || ""}`, children: /* @__PURE__ */ a.jsx(Ea, { ...o, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ a.jsx(Ea, { ...o });
}, mu = ({
  row: e,
  columns: t,
  primaryField: n,
  secondaryFields: r,
  badgeFields: o,
  hiddenFields: s
}) => {
  const i = t.find((u) => u.key === n), l = i?.render ? i.render(e) : e[n || ""];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-header", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "aria-tabs-datagrid-adaptive__card-title", children: l }),
      o.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-badges", children: o.map((u) => {
        const f = t.find((p) => p.key === u), d = f?.render ? f.render(e) : e[u];
        return /* @__PURE__ */ a.jsx("span", { className: "nhsuk-tag aria-tabs-datagrid-adaptive__card-badge", children: d }, u);
      }) })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-body", children: r.map((u) => {
      const f = t.find((p) => p.key === u);
      if (!f || s.includes(u)) return null;
      const d = f.render ? f.render(e) : e[u];
      return /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-field", children: [
        /* @__PURE__ */ a.jsx("dt", { className: "aria-tabs-datagrid-adaptive__card-field-label", children: f.label }),
        /* @__PURE__ */ a.jsx("dd", { className: "aria-tabs-datagrid-adaptive__card-field-value", children: typeof d == "boolean" ? d ? "✓" : "✗" : String(d ?? "") })
      ] }, u);
    }) }),
    /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-actions", children: /* @__PURE__ */ a.jsx("button", { className: "nhsuk-button nhsuk-button--secondary", type: "button", children: "View Details" }) })
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
function vu(e, t) {
  const n = t.find((o) => o.id === e), r = bu(t);
  return n ? n.priority < r : !1;
}
const Bp = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: r = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const d = se(() => gu(e), [e]), p = J((C) => {
    if (l) return;
    const P = e.map(
      (S) => S.id === C ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(P);
  }, [e, t, l]), m = J((C) => {
    if (l) return;
    const P = e.findIndex((R) => R.id === C);
    if (P <= 0) return;
    const S = [...e];
    [S[P], S[P - 1]] = [S[P - 1], S[P]], t(An(S));
  }, [e, t, l]), b = J((C) => {
    if (l) return;
    const P = e.findIndex((R) => R.id === C);
    if (P >= e.length - 1 || P === -1) return;
    const S = [...e];
    [S[P], S[P + 1]] = [S[P + 1], S[P]], t(An(S));
  }, [e, t, l]), w = J((C) => {
    if (l) return;
    const P = e.filter((S) => S.id !== C);
    t(An(P));
  }, [e, t, l]), g = J(() => {
    l || t([]);
  }, [t, l]), $ = () => {
    if (e.length === 0)
      return r;
    if (o)
      return o;
    const C = d.map((P, S) => {
      const R = P.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${P.label} (${R})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const P = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${P}`;
    }
  }, D = se(() => {
    const C = ["sort-description"];
    return i && C.push("sort-help"), f && C.push(f), C.join(" ");
  }, [i, f]);
  return e.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: $()
    }
  ) }) : /* @__PURE__ */ a.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: $()
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": D,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((C) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ a.jsx(
                Cr,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => w(C.id),
                  disabled: l,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-priority", children: C.priority + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: C.label }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => p(C.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${C.label}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: C.direction === "asc" ? It.asc : It.desc
                      }
                    ),
                    /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(C.id),
                          disabled: l || !xu(C.id, e),
                          "aria-label": `Move ${C.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(C.id),
                          disabled: l || !vu(C.id, e),
                          "aria-label": `Move ${C.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            C.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ a.jsx(
      $r,
      {
        variant: "secondary",
        onClick: g,
        isDisabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ a.jsxs("small", { children: [
      "Click ",
      It.asc,
      "/",
      It.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, yu = "150ms", ku = "300ms", Su = "500ms", wu = "cubic-bezier(0.4, 0, 1, 1)", _u = "cubic-bezier(0, 0, 0.2, 1)", Tu = "cubic-bezier(0.4, 0, 0.2, 1)", $u = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Cu = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Nu = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", ju = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Eu = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Fu = "1px", Du = "2px", Pu = "4px", Mu = "4px", Bu = "4px", Lu = "2px", Iu = "1px", Hu = "0px", Ru = "4px", Au = "8px", zu = "12px", go = "#d8dde0", bo = "#4c6272", xo = "#d8dde0", vo = "#aeb7bd", yo = "#d5281b", ko = "#005eb8", So = "#ffffff", wo = "#212b32", _o = "#007f3b", To = "#330072", $o = "#7c2855", Co = "#d5281b", No = "#ffeb3b", jo = "#fff9c4", Eo = "#ffb81c", Fo = "#ed8b00", Do = "#00a499", Po = "#ae2573", Mo = "#4c6272", Bo = "#768692", Lo = "#aeb7bd", Io = "#d8dde0", Ho = "#f0f4f5", Wu = "#212b32", Ou = "#4c6272", Uu = "#ffffff", Yu = "#212b32", Vu = "#005eb8", Ku = "#7c2855", Gu = "#003087", qu = "#330072", Xu = "#ffeb3b", Zu = "#212b32", Ju = "#d8dde0", Qu = "#ffffff33", ed = "#d5281b", td = "#4c6272", nd = "#ffffff", rd = "#007f3b", ad = "#ffffff", od = "#006530", sd = "#004021", id = "#004021", ld = "#00000000", cd = "#ffffff", ud = "#005eb8", dd = "#005eb8", fd = "#d9e5f2", hd = "#c7daf0", pd = "#005eb8", md = "#ffffff", gd = "#212b32", bd = "#d9dde0", xd = "#b3bcc2", vd = "#b3bcc2", yd = "#d5281b", kd = "#aa2016", Sd = "#6a140e", wd = "#6a140e", _d = "#005eb8", Td = "#004b93", $d = "#002f5c", Cd = "#002f5c", Nd = "8px", jd = "16px", Ed = "12px", Fd = "16px", Dd = "4px", Pd = "40px", Md = "4px", Bd = "40px", Ld = "12px", Id = "16px", Hd = "32px", Rd = "16px", Ad = "20px", zd = "28px", Wd = "9px", Od = "2px", Ud = "16px", Yd = "24px", Vd = "8px", Kd = "24px", Gd = "16px", qd = "4px", Xd = "4px", Zd = "4px", Jd = "8px", Qd = "4px", ef = "16px", tf = "#007f3b", nf = "#006530", rf = "#004021", af = "#d8dde0", of = "#ffffff", sf = "#768692", lf = "#00000000", cf = "#ffeb3b", uf = "#00000000", df = "#ffffff", ff = "#d9e5f2", hf = "#c7daf0", pf = "#005eb8", mf = "#005eb8", Ro = "8px", Ao = "16px", zo = "12px", Wo = "16px", gf = "2px", bf = "4px", xf = "4px", vf = "600", yf = "#ffffff", kf = "#d8dde0", Sf = "#aeb7bd", wf = "#f0f4f5", _f = "#212b32", Tf = "#212b32", $f = "#005eb8", Oo = "16px", Uo = "32px", Yo = "16px", Cf = "1px", Nf = "4px", jf = "none", Ef = "0 2px 4px rgba(0, 0, 0, 0.1)", Ff = "#ffffff", Df = "#ffffff", Pf = "#d8dde0", Mf = "#ffffff", Bf = "#4c6272", Lf = "#ffeb3b", If = "#d5281b", Hf = "#aeb7bd", Rf = "#212b32", Af = "#4c6272", zf = "#768692", Wf = "#212b32", Of = "#ffffff", Uf = "600", Yf = "#d5281b", Vf = "600", Kf = "#4c6272", Vo = "4px", Ko = "40px", Go = "40px", qo = "12px", Gf = "2px", qf = "4px", Xf = "0px", Zf = "16px", Jf = "18px", Qf = "24px", eh = "32px", th = "34px", nh = "32px", rh = "40px", ah = "48px", oh = "5.4ex", sh = "7.2ex", ih = "9ex", lh = "10.8ex", ch = "20ex", uh = "38ex", dh = "56ex", fh = "44px", hh = "40px", ph = "1020px", mh = "100%", gh = "50%", bh = "33.333%", xh = "25%", vh = "20%", yh = "320px", kh = "641px", Sh = "1025px", wh = "1280px", _h = "960px", Th = "32px", $h = "16px", Ch = "#d5281b", Nh = "#d5281b", jh = "#ffffff", Eh = "#007f3b", Fh = "#007f3b", Dh = "#ffffff", Ph = "#ffeb3b", Mh = "#ffeb3b", Bh = "#212b32", Lh = "#005eb8", Ih = "#005eb8", Hh = "#ffffff", Rh = "#d8dde0", Ah = "#aeb7bd", zh = "#768692", Wh = "0 4px 0 #004021", Oh = "0 4px 0 #005eb8", Uh = "0 4px 0 #6a140e", Yh = "0 4px 0 #ffeb3b", Vh = "none", Kh = "0 2px 4px rgba(0, 0, 0, 0.1)", Gh = "4px", qh = "0px", Xh = "solid", Zh = "0 0 0 3px #ffeb3b", Jh = "0 0 0 3px #ffeb3b", Qh = "none", ep = "0 1px 3px rgba(0, 0, 0, 0.12)", tp = "0 2px 6px rgba(0, 0, 0, 0.16)", np = "0 4px 12px rgba(0, 0, 0, 0.20)", Xo = "0", Zo = "4px", Jo = "8px", Qo = "16px", es = "24px", ts = "32px", ns = "40px", rs = "48px", as = "56px", os = "64px", Zn = "0", Jn = "0", Qn = "4px", er = "4px", tr = "8px", nr = "8px", rr = "8px", ar = "16px", or = "16px", sr = "24px", ir = "24px", lr = "32px", cr = "32px", ur = "40px", dr = "40px", fr = "48px", hr = "48px", pr = "56px", mr = "56px", gr = "64px", Xt = "Frutiger W01", Zt = "Arial, Helvetica, sans-serif", Jt = "sans-serif", Qt = "400", en = "600", tn = "400", nn = "12px", rn = "14px", an = "12pt", on = "14px", sn = "16px", ln = "12pt", cn = "16px", un = "19px", dn = "13pt", fn = "19px", hn = "22px", pn = "15pt", mn = "22px", gn = "26px", bn = "17pt", xn = "27px", vn = "36px", yn = "20pt", kn = "33px", Sn = "48px", wn = "24pt", br = "16px", xr = "24px", Ce = {
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
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ee = {
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
  AnimationDurationFast: yu,
  AnimationDurationNormal: ku,
  AnimationDurationSlow: Su,
  AnimationEasingBounce: $u,
  AnimationEasingEaseIn: wu,
  AnimationEasingEaseInOut: Tu,
  AnimationEasingEaseOut: _u,
  BorderColorCard: xo,
  BorderColorCardHover: vo,
  BorderColorDefault: go,
  BorderColorError: yo,
  BorderColorForm: bo,
  BorderRadiusLarge: zu,
  BorderRadiusMedium: Au,
  BorderRadiusNone: Hu,
  BorderRadiusSmall: Ru,
  BorderWidthCardBottom: Mu,
  BorderWidthDefault: Fu,
  BorderWidthFormElement: Du,
  BorderWidthFormElementError: Pu,
  BorderWidthPanel: Bu,
  BorderWidthTableCell: Iu,
  BorderWidthTableHeader: Lu,
  BreakpointDesktop: Sh,
  BreakpointLargeDesktop: wh,
  BreakpointMobile: yh,
  BreakpointTablet: kh,
  ButtonBorderRadius: bf,
  ButtonBorderWidth: gf,
  ButtonPrimaryBackgroundActive: rf,
  ButtonPrimaryBackgroundDefault: tf,
  ButtonPrimaryBackgroundDisabled: af,
  ButtonPrimaryBackgroundHover: nf,
  ButtonPrimaryBorderDefault: lf,
  ButtonPrimaryBorderFocus: cf,
  ButtonPrimaryTextDefault: of,
  ButtonPrimaryTextDisabled: sf,
  ButtonSecondaryBackgroundActive: hf,
  ButtonSecondaryBackgroundDefault: uf,
  ButtonSecondaryBackgroundHover: ff,
  ButtonSecondaryBackgroundSolid: df,
  ButtonSecondaryBorderDefault: mf,
  ButtonSecondaryTextDefault: pf,
  ButtonShadowSize: xf,
  ButtonSpacingPaddingHorizontalDesktop: Wo,
  ButtonSpacingPaddingHorizontalMobile: Ao,
  ButtonSpacingPaddingVerticalDesktop: zo,
  ButtonSpacingPaddingVerticalMobile: Ro,
  ButtonTypographyWeight: vf,
  CardBackgroundDefault: yf,
  CardBorderBottom: wf,
  CardBorderDefault: kf,
  CardBorderHover: Sf,
  CardBorderWidthBottom: Nf,
  CardBorderWidthDefault: Cf,
  CardShadowDefault: jf,
  CardShadowHover: Ef,
  CardSpacingHeadingMargin: Yo,
  CardSpacingPaddingDesktop: Uo,
  CardSpacingPaddingMobile: Oo,
  CardTextDescription: Tf,
  CardTextHeading: _f,
  CardTextLink: $f,
  ColorBorderDefault: Ju,
  ColorBorderSecondary: Qu,
  ColorButtonLoginActive: $d,
  ColorButtonLoginBackground: _d,
  ColorButtonLoginHover: Td,
  ColorButtonLoginShadow: Cd,
  ColorButtonPrimaryActive: sd,
  ColorButtonPrimaryBackground: rd,
  ColorButtonPrimaryHover: od,
  ColorButtonPrimaryShadow: id,
  ColorButtonPrimaryText: ad,
  ColorButtonReverseActive: xd,
  ColorButtonReverseBackground: md,
  ColorButtonReverseHover: bd,
  ColorButtonReverseShadow: vd,
  ColorButtonReverseText: gd,
  ColorButtonSecondaryActive: hd,
  ColorButtonSecondaryBackground: ld,
  ColorButtonSecondaryBackgroundSolid: cd,
  ColorButtonSecondaryBorder: ud,
  ColorButtonSecondaryHover: fd,
  ColorButtonSecondaryShadow: pd,
  ColorButtonSecondaryText: dd,
  ColorButtonWarningActive: Sd,
  ColorButtonWarningBackground: yd,
  ColorButtonWarningHover: kd,
  ColorButtonWarningShadow: wd,
  ColorError: ed,
  ColorFocusBackground: Xu,
  ColorFocusText: Zu,
  ColorFormBackground: nd,
  ColorFormBorder: td,
  ColorGrey1: Mo,
  ColorGrey2: Bo,
  ColorGrey3: Lo,
  ColorGrey4: Io,
  ColorGrey5: Ho,
  ColorLinkActive: Gu,
  ColorLinkDefault: Vu,
  ColorLinkHover: Ku,
  ColorLinkVisited: qu,
  ColorPrimaryBlack: wo,
  ColorPrimaryBlue: ko,
  ColorPrimaryDarkPink: $o,
  ColorPrimaryGreen: _o,
  ColorPrimaryPurple: To,
  ColorPrimaryRed: Co,
  ColorPrimaryWhite: So,
  ColorPrimaryYellow: No,
  ColorSecondaryAquaGreen: Do,
  ColorSecondaryOrange: Fo,
  ColorSecondaryPaleYellow: jo,
  ColorSecondaryPink: Po,
  ColorSecondaryWarmYellow: Eo,
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
  ComponentButtonPaddingDesktopVertical: Ed,
  ComponentButtonPaddingMobileHorizontal: jd,
  ComponentButtonPaddingMobileVertical: Nd,
  ComponentButtonShadowSize: Dd,
  ComponentCardHeadingMargin: Rd,
  ComponentCardPaddingDesktop: Hd,
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
  FontSize14Print: an,
  FontSize14Tablet: rn,
  FontSize16Mobile: on,
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
  FontSize36Print: yn,
  FontSize36Tablet: vn,
  FontSize48Mobile: kn,
  FontSize48Print: wn,
  FontSize48Tablet: Sn,
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
  FormInputBorderDisabled: Hf,
  FormInputBorderError: If,
  FormInputBorderFocus: Lf,
  FormInputTextDefault: Rf,
  FormInputTextDisabled: zf,
  FormInputTextPlaceholder: Af,
  FormLabelTextDefault: Wf,
  FormLabelTextRequired: Of,
  FormLabelTypographyWeight: Uf,
  FormSpacingCheckboxLabelPadding: qo,
  FormSpacingCheckboxSize: Go,
  FormSpacingInputMinHeight: Ko,
  FormSpacingInputPadding: Vo,
  GridGutter: Th,
  GridGutterHalf: $h,
  GridPageWidth: _h,
  HeadingsNhsukHeadingL: Ne,
  HeadingsNhsukHeadingM: je,
  HeadingsNhsukHeadingS: Ee,
  HeadingsNhsukHeadingXl: Ce,
  HeadingsNhsukHeadingXs: Fe,
  LayoutColumnActions: vh,
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
  SizeFormControlLarge: ah,
  SizeFormControlMedium: rh,
  SizeFormControlSmall: nh,
  SizeFormInputWidth2xl: uh,
  SizeFormInputWidth3xl: dh,
  SizeFormInputWidthLg: lh,
  SizeFormInputWidthMd: ih,
  SizeFormInputWidthSm: sh,
  SizeFormInputWidthXl: ch,
  SizeFormInputWidthXs: oh,
  SizeIconExtraLarge: eh,
  SizeIconLarge: Qf,
  SizeIconMedium: Jf,
  SizeIconNhsDefault: th,
  SizeIconSmall: Zf,
  Spacing0: Xo,
  Spacing1: Zo,
  Spacing2: Jo,
  Spacing3: Qo,
  Spacing4: es,
  Spacing5: ts,
  Spacing6: ns,
  Spacing7: rs,
  Spacing8: as,
  Spacing9: os,
  SpacingResponsive0Mobile: Zn,
  SpacingResponsive0Tablet: Jn,
  SpacingResponsive1Mobile: Qn,
  SpacingResponsive1Tablet: er,
  SpacingResponsive2Mobile: tr,
  SpacingResponsive2Tablet: nr,
  SpacingResponsive3Mobile: rr,
  SpacingResponsive3Tablet: ar,
  SpacingResponsive4Mobile: or,
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
  StateDisabledBackground: Rh,
  StateDisabledBorder: Ah,
  StateDisabledText: zh,
  StateErrorBackground: Ch,
  StateErrorBorder: Nh,
  StateErrorText: jh,
  StateInfoBackground: Lh,
  StateInfoBorder: Ih,
  StateInfoText: Hh,
  StateSuccessBackground: Eh,
  StateSuccessBorder: Fh,
  StateSuccessText: Dh,
  StateWarningBackground: Ph,
  StateWarningBorder: Mh,
  StateWarningText: Bh,
  TransitionButtonDefault: Cu,
  TransitionButtonShadow: Nu,
  TransitionCardHover: Eu,
  TransitionInputFocus: ju
}, Symbol.toStringTag, { value: "Module" })), Lp = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Ip = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Ce.fontFamily,
      fontWeight: Ce.fontWeight,
      fontSize: Ce.fontSize.mobile,
      lineHeight: Ce.lineHeight,
      marginTop: Ce.marginTop,
      marginBottom: Ce.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Hp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Rp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h3",
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
), Ap = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h4",
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
), zp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Wp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Op = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Up = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Yp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Vp = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), Kp = () => se(() => rp, []), Gp = () => se(() => ({
  // Border colors
  BorderColorDefault: go,
  BorderColorForm: bo,
  BorderColorCard: xo,
  BorderColorCardHover: vo,
  BorderColorError: yo,
  // Primary colors
  ColorPrimaryBlue: ko,
  ColorPrimaryWhite: So,
  ColorPrimaryBlack: wo,
  ColorPrimaryGreen: _o,
  ColorPrimaryPurple: To,
  ColorPrimaryDarkPink: $o,
  ColorPrimaryRed: Co,
  ColorPrimaryYellow: No,
  // Secondary colors
  ColorSecondaryPaleYellow: jo,
  ColorSecondaryWarmYellow: Eo,
  ColorSecondaryOrange: Fo,
  ColorSecondaryAquaGreen: Do,
  ColorSecondaryPink: Po,
  // Grey scale
  ColorGrey1: Mo,
  ColorGrey2: Bo,
  ColorGrey3: Lo,
  ColorGrey4: Io,
  ColorGrey5: Ho
}), []), qp = () => se(() => ({
  Spacing0: Xo,
  Spacing1: Zo,
  Spacing2: Jo,
  Spacing3: Qo,
  Spacing4: es,
  Spacing5: ts,
  Spacing6: ns,
  Spacing7: rs,
  Spacing8: as,
  Spacing9: os
}), []), Xp = () => se(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: nn,
    Size16: on,
    Size19: cn,
    Size22: fn,
    Size26: mn,
    Size36: xn,
    Size48: kn
  },
  Tablet: {
    Size14: rn,
    Size16: sn,
    Size19: un,
    Size22: hn,
    Size26: gn,
    Size36: vn,
    Size48: Sn
  },
  Print: {
    Size14: an,
    Size16: ln,
    Size19: dn,
    Size22: pn,
    Size26: bn,
    Size36: yn,
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
  FontSize14Print: an,
  FontSize16Mobile: on,
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
  FontSize36Tablet: vn,
  FontSize36Print: yn,
  FontSize48Mobile: kn,
  FontSize48Tablet: Sn,
  FontSize48Print: wn,
  FontSizeBase: br,
  FontLineHeightBase: xr
}), []), Zp = () => se(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Zn,
    Size1: Qn,
    Size2: tr,
    Size3: rr,
    Size4: or,
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
    Size3: ar,
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
  SpacingResponsive3Tablet: ar,
  SpacingResponsive4Mobile: or,
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
}), []), Jp = () => se(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ro,
  ButtonSpacingPaddingHorizontalMobile: Ao,
  ButtonSpacingPaddingVerticalDesktop: zo,
  ButtonSpacingPaddingHorizontalDesktop: Wo,
  // Card spacing	
  CardSpacingPaddingMobile: Oo,
  CardSpacingPaddingDesktop: Uo,
  CardSpacingHeadingMargin: Yo,
  // Form spacing
  FormSpacingInputPadding: Vo,
  FormSpacingInputMinHeight: Ko,
  FormSpacingCheckboxSize: Go,
  FormSpacingCheckboxLabelPadding: qo
}), []), Qp = () => se(() => ({
  xl: Ce,
  l: Ne,
  m: je,
  s: Ee,
  xs: Fe
}), []), em = () => se(() => ({
  body: De,
  bodyLarge: Pe,
  bodySmall: Me,
  ledeText: Be,
  ledeTextSmall: Le
}), []), tm = () => se(() => ({
  headings: {
    xl: Ce,
    l: Ne,
    m: je,
    s: Ee,
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
        size16: on,
        size19: cn,
        size22: fn,
        size26: mn,
        size36: xn,
        size48: kn
      },
      tablet: {
        size14: rn,
        size16: sn,
        size19: un,
        size22: hn,
        size26: gn,
        size36: vn,
        size48: Sn
      },
      print: {
        size14: an,
        size16: ln,
        size19: dn,
        size22: pn,
        size26: bn,
        size36: yn,
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
function nm(e = {}) {
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
function rm(e = {}) {
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
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const am = '"Frutiger W01", Arial, Helvetica, sans-serif', om = "Arial, Helvetica, sans-serif";
async function sm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  sp as ActionLink,
  yu as AnimationDurationFast,
  ku as AnimationDurationNormal,
  Su as AnimationDurationSlow,
  $u as AnimationEasingBounce,
  wu as AnimationEasingEaseIn,
  Tu as AnimationEasingEaseInOut,
  _u as AnimationEasingEaseOut,
  du as AriaDataGrid,
  Ea as AriaTabsDataGrid,
  Mp as AriaTabsDataGridAdaptive,
  ip as BackLink,
  xo as BorderColorCard,
  vo as BorderColorCardHover,
  go as BorderColorDefault,
  yo as BorderColorError,
  bo as BorderColorForm,
  zu as BorderRadiusLarge,
  Au as BorderRadiusMedium,
  Hu as BorderRadiusNone,
  Ru as BorderRadiusSmall,
  Mu as BorderWidthCardBottom,
  Fu as BorderWidthDefault,
  Du as BorderWidthFormElement,
  Pu as BorderWidthFormElementError,
  Bu as BorderWidthPanel,
  Iu as BorderWidthTableCell,
  Lu as BorderWidthTableHeader,
  yp as Breadcrumb,
  Sh as BreakpointDesktop,
  wh as BreakpointLargeDesktop,
  yh as BreakpointMobile,
  kh as BreakpointTablet,
  $r as Button,
  bf as ButtonBorderRadius,
  gf as ButtonBorderWidth,
  rf as ButtonPrimaryBackgroundActive,
  tf as ButtonPrimaryBackgroundDefault,
  af as ButtonPrimaryBackgroundDisabled,
  nf as ButtonPrimaryBackgroundHover,
  lf as ButtonPrimaryBorderDefault,
  cf as ButtonPrimaryBorderFocus,
  of as ButtonPrimaryTextDefault,
  sf as ButtonPrimaryTextDisabled,
  hf as ButtonSecondaryBackgroundActive,
  uf as ButtonSecondaryBackgroundDefault,
  ff as ButtonSecondaryBackgroundHover,
  df as ButtonSecondaryBackgroundSolid,
  mf as ButtonSecondaryBorderDefault,
  pf as ButtonSecondaryTextDefault,
  xf as ButtonShadowSize,
  Wo as ButtonSpacingPaddingHorizontalDesktop,
  Ao as ButtonSpacingPaddingHorizontalMobile,
  zo as ButtonSpacingPaddingVerticalDesktop,
  Ro as ButtonSpacingPaddingVerticalMobile,
  vf as ButtonTypographyWeight,
  _p as Card,
  yf as CardBackgroundDefault,
  wf as CardBorderBottom,
  kf as CardBorderDefault,
  Sf as CardBorderHover,
  Nf as CardBorderWidthBottom,
  Cf as CardBorderWidthDefault,
  Tp as CardGroup,
  $p as CardGroupItem,
  jf as CardShadowDefault,
  Ef as CardShadowHover,
  Yo as CardSpacingHeadingMargin,
  Uo as CardSpacingPaddingDesktop,
  Oo as CardSpacingPaddingMobile,
  Tf as CardTextDescription,
  _f as CardTextHeading,
  $f as CardTextLink,
  Cp as CareCard,
  lp as CharacterCount,
  Oi as Checkboxes,
  Ju as ColorBorderDefault,
  Qu as ColorBorderSecondary,
  $d as ColorButtonLoginActive,
  _d as ColorButtonLoginBackground,
  Td as ColorButtonLoginHover,
  Cd as ColorButtonLoginShadow,
  sd as ColorButtonPrimaryActive,
  rd as ColorButtonPrimaryBackground,
  od as ColorButtonPrimaryHover,
  id as ColorButtonPrimaryShadow,
  ad as ColorButtonPrimaryText,
  xd as ColorButtonReverseActive,
  md as ColorButtonReverseBackground,
  bd as ColorButtonReverseHover,
  vd as ColorButtonReverseShadow,
  gd as ColorButtonReverseText,
  hd as ColorButtonSecondaryActive,
  ld as ColorButtonSecondaryBackground,
  cd as ColorButtonSecondaryBackgroundSolid,
  ud as ColorButtonSecondaryBorder,
  fd as ColorButtonSecondaryHover,
  pd as ColorButtonSecondaryShadow,
  dd as ColorButtonSecondaryText,
  Sd as ColorButtonWarningActive,
  yd as ColorButtonWarningBackground,
  kd as ColorButtonWarningHover,
  wd as ColorButtonWarningShadow,
  ed as ColorError,
  Xu as ColorFocusBackground,
  Zu as ColorFocusText,
  nd as ColorFormBackground,
  td as ColorFormBorder,
  Mo as ColorGrey1,
  Bo as ColorGrey2,
  Lo as ColorGrey3,
  Io as ColorGrey4,
  Ho as ColorGrey5,
  Gu as ColorLinkActive,
  Vu as ColorLinkDefault,
  Ku as ColorLinkHover,
  qu as ColorLinkVisited,
  wo as ColorPrimaryBlack,
  ko as ColorPrimaryBlue,
  $o as ColorPrimaryDarkPink,
  _o as ColorPrimaryGreen,
  To as ColorPrimaryPurple,
  Co as ColorPrimaryRed,
  So as ColorPrimaryWhite,
  No as ColorPrimaryYellow,
  Do as ColorSecondaryAquaGreen,
  Fo as ColorSecondaryOrange,
  jo as ColorSecondaryPaleYellow,
  Po as ColorSecondaryPink,
  Eo as ColorSecondaryWarmYellow,
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
  Ed as ComponentButtonPaddingDesktopVertical,
  jd as ComponentButtonPaddingMobileHorizontal,
  Nd as ComponentButtonPaddingMobileVertical,
  Dd as ComponentButtonShadowSize,
  Rd as ComponentCardHeadingMargin,
  Hd as ComponentCardPaddingDesktop,
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
  wp as ContentsList,
  ss as DEFAULT_FONT_CONFIG,
  fp as DateInput,
  su as Details,
  iu as DoDontList,
  np as ElevationHigh,
  ep as ElevationLow,
  tp as ElevationMedium,
  Qh as ElevationNone,
  sa as ErrorMessage,
  dp as ErrorSummary,
  lu as Expander,
  me as FRUTIGER_FONT_FILES,
  Er as Fieldset,
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
  an as FontSize14Print,
  rn as FontSize14Tablet,
  on as FontSize16Mobile,
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
  yn as FontSize36Print,
  vn as FontSize36Tablet,
  kn as FontSize48Mobile,
  wn as FontSize48Print,
  Sn as FontSize48Tablet,
  br as FontSizeBase,
  en as FontWeightBold,
  tn as FontWeightLight,
  Qt as FontWeightNormal,
  xp as Footer,
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
  Hf as FormInputBorderDisabled,
  If as FormInputBorderError,
  Lf as FormInputBorderFocus,
  Rf as FormInputTextDefault,
  zf as FormInputTextDisabled,
  Af as FormInputTextPlaceholder,
  Wf as FormLabelTextDefault,
  Of as FormLabelTextRequired,
  Uf as FormLabelTypographyWeight,
  qo as FormSpacingCheckboxLabelPadding,
  Go as FormSpacingCheckboxSize,
  Ko as FormSpacingInputMinHeight,
  Vo as FormSpacingInputPadding,
  vp as GanttChart,
  Th as GridGutter,
  $h as GridGutterHalf,
  _h as GridPageWidth,
  mp as Header,
  gp as HeaderSSR,
  bp as HeaderStatic,
  ft as Heading,
  Ne as HeadingsNhsukHeadingL,
  je as HeadingsNhsukHeadingM,
  Ee as HeadingsNhsukHeadingS,
  Ce as HeadingsNhsukHeadingXl,
  Fe as HeadingsNhsukHeadingXs,
  Gi as Hero,
  to as Hint,
  Pp as Images,
  Nr as Input,
  Np as InsetText,
  jr as Label,
  vh as LayoutColumnActions,
  mh as LayoutColumnFull,
  gh as LayoutColumnHalf,
  xh as LayoutColumnQuarter,
  bh as LayoutColumnThird,
  ph as LayoutContainerMaxWidth,
  Wp as NHSBodyText,
  Op as NHSBodyTextLarge,
  Up as NHSBodyTextSmall,
  Ip as NHSHeading1,
  Hp as NHSHeading2,
  Rp as NHSHeading3,
  Ap as NHSHeading4,
  zp as NHSHeading5,
  Yp as NHSLedeText,
  Vp as NHSLedeTextSmall,
  pp as NHSThemeProvider,
  om as NHS_FALLBACK_FONT_STACK,
  am as NHS_FONT_STACK,
  Sp as Pagination,
  ou as Panel,
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
  ah as SizeFormControlLarge,
  rh as SizeFormControlMedium,
  nh as SizeFormControlSmall,
  uh as SizeFormInputWidth2xl,
  dh as SizeFormInputWidth3xl,
  lh as SizeFormInputWidthLg,
  ih as SizeFormInputWidthMd,
  sh as SizeFormInputWidthSm,
  ch as SizeFormInputWidthXl,
  oh as SizeFormInputWidthXs,
  eh as SizeIconExtraLarge,
  Qf as SizeIconLarge,
  Jf as SizeIconMedium,
  th as SizeIconNhsDefault,
  Zf as SizeIconSmall,
  kp as SkipLink,
  Bp as SortStatusControl,
  Xo as Spacing0,
  Zo as Spacing1,
  Jo as Spacing2,
  Qo as Spacing3,
  es as Spacing4,
  ts as Spacing5,
  ns as Spacing6,
  rs as Spacing7,
  as as Spacing8,
  os as Spacing9,
  Zn as SpacingResponsive0Mobile,
  Jn as SpacingResponsive0Tablet,
  Qn as SpacingResponsive1Mobile,
  er as SpacingResponsive1Tablet,
  tr as SpacingResponsive2Mobile,
  nr as SpacingResponsive2Tablet,
  rr as SpacingResponsive3Mobile,
  ar as SpacingResponsive3Tablet,
  or as SpacingResponsive4Mobile,
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
  Rh as StateDisabledBackground,
  Ah as StateDisabledBorder,
  zh as StateDisabledText,
  Ch as StateErrorBackground,
  Nh as StateErrorBorder,
  jh as StateErrorText,
  Lh as StateInfoBackground,
  Ih as StateInfoBorder,
  Hh as StateInfoText,
  Eh as StateSuccessBackground,
  Fh as StateSuccessBorder,
  Dh as StateSuccessText,
  Ph as StateWarningBackground,
  Mh as StateWarningBorder,
  Bh as StateWarningText,
  jp as SummaryList,
  Ep as Table,
  Fp as Tabs,
  Cr as Tag,
  cu as TaskList,
  Ui as Textarea,
  Cu as TransitionButtonDefault,
  Nu as TransitionButtonShadow,
  Eu as TransitionCardHover,
  ju as TransitionInputFocus,
  Dp as WarningCallout,
  sm as checkFrutigerLoaded,
  nm as generateFrutigerFontFace,
  Lp as getResponsiveStyles,
  rm as preloadFrutigerFonts,
  Gp as useColors,
  Jp as useComponentSpacing,
  Qp as useNHSHeadings,
  em as useNHSParagraphs,
  hp as useNHSTheme,
  tm as useNHSTypographySystem,
  Zp as useResponsiveSpacing,
  qp as useSpacing,
  Kp as useTokens,
  Xp as useTypography
};
//# sourceMappingURL=index.esm.js.map
