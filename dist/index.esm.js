import I, { useRef as A, useCallback as G, useState as xe, useContext as pe, useEffect as X, useMemo as O, forwardRef as Bn, createContext as gt } from "react";
import { flushSync as Go } from "react-dom";
var Le = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cn;
function Uo() {
  if (cn) return Ce;
  cn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, r, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), r.key !== void 0 && (l = "" + r.key), "key" in r) {
      s = {};
      for (var u in r)
        u !== "key" && (s[u] = r[u]);
    } else s = r;
    return r = s.ref, {
      $$typeof: e,
      type: o,
      key: l,
      ref: r !== void 0 ? r : null,
      props: s
    };
  }
  return Ce.Fragment = t, Ce.jsx = n, Ce.jsxs = n, Ce;
}
var Fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Yo() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === ht ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case S:
          return "Fragment";
        case P:
          return "Profiler";
        case y:
          return "StrictMode";
        case q:
          return "Suspense";
        case N:
          return "SuspenseList";
        case Ee:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case w:
            return "Portal";
          case z:
            return (c.displayName || "Context") + ".Provider";
          case W:
            return (c._context.displayName || "Context") + ".Consumer";
          case D:
            var h = c.render;
            return c = c.displayName, c || (c = h.displayName || h.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case me:
            return h = c.displayName || null, h !== null ? h : e(c.type) || "Memo";
          case ve:
            h = c._payload, c = c._init;
            try {
              return e(c(h));
            } catch {
            }
        }
      return null;
    }
    function t(c) {
      return "" + c;
    }
    function n(c) {
      try {
        t(c);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var E = h.error, L = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return E.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(c);
      }
    }
    function o(c) {
      if (c === S) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === ve)
        return "<...>";
      try {
        var h = e(c);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var c = i.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(c) {
      if (p.call(c, "key")) {
        var h = Object.getOwnPropertyDescriptor(c, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function u(c, h) {
      function E() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: E,
        configurable: !0
      });
    }
    function d() {
      var c = e(this.type);
      return a[c] || (a[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function g(c, h, E, L, le, U, St, yt) {
      return E = U.ref, c = {
        $$typeof: B,
        type: c,
        key: h,
        props: U,
        _owner: le
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: St
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: yt
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function b(c, h, E, L, le, U, St, yt) {
      var M = h.children;
      if (M !== void 0)
        if (L)
          if (k(M)) {
            for (L = 0; L < M.length; L++)
              m(M[L]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(M);
      if (p.call(h, "key")) {
        M = e(c);
        var he = Object.keys(h).filter(function(Vo) {
          return Vo !== "key";
        });
        L = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", j[M + L] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          M,
          he,
          M
        ), j[M + L] = !0);
      }
      if (M = null, E !== void 0 && (n(E), M = "" + E), l(h) && (n(h.key), M = "" + h.key), "key" in h) {
        E = {};
        for (var xt in h)
          xt !== "key" && (E[xt] = h[xt]);
      } else E = h;
      return M && u(
        E,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), g(
        c,
        M,
        U,
        le,
        r(),
        E,
        St,
        yt
      );
    }
    function m(c) {
      typeof c == "object" && c !== null && c.$$typeof === B && c._store && (c._store.validated = 1);
    }
    var C = I, B = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), z = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), me = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), ht = Symbol.for("react.client.reference"), i = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = Object.prototype.hasOwnProperty, k = Array.isArray, f = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(c) {
        return c();
      }
    };
    var $, a = {}, v = C["react-stack-bottom-frame"].bind(
      C,
      s
    )(), x = f(o(s)), j = {};
    Fe.Fragment = S, Fe.jsx = function(c, h, E, L, le) {
      var U = 1e4 > i.recentlyCreatedOwnerStacks++;
      return b(
        c,
        h,
        E,
        !1,
        L,
        le,
        U ? Error("react-stack-top-frame") : v,
        U ? f(o(c)) : x
      );
    }, Fe.jsxs = function(c, h, E, L, le) {
      var U = 1e4 > i.recentlyCreatedOwnerStacks++;
      return b(
        c,
        h,
        E,
        !0,
        L,
        le,
        U ? Error("react-stack-top-frame") : v,
        U ? f(o(c)) : x
      );
    };
  }()), Fe;
}
var dn;
function Xo() {
  return dn || (dn = 1, process.env.NODE_ENV === "production" ? Le.exports = Uo() : Le.exports = Yo()), Le.exports;
}
var _ = Xo();
const mt = typeof document < "u" ? I.useLayoutEffect : () => {
};
var $t;
const qo = ($t = I.useInsertionEffect) !== null && $t !== void 0 ? $t : mt;
function ue(e) {
  const t = A(null);
  return qo(() => {
    t.current = e;
  }, [
    e
  ]), G((...n) => {
    const o = t.current;
    return o?.(...n);
  }, []);
}
const Ie = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, wn = /* @__PURE__ */ I.createContext(Ie), Jo = /* @__PURE__ */ I.createContext(!1);
let Qo = !!(typeof window < "u" && window.document && window.document.createElement), Tt = /* @__PURE__ */ new WeakMap();
function Zo(e = !1) {
  let t = pe(wn), n = A(null);
  if (n.current === null && !e) {
    var o, r;
    let s = (r = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || r === void 0 || (o = r.ReactCurrentOwner) === null || o === void 0 ? void 0 : o.current;
    if (s) {
      let l = Tt.get(s);
      l == null ? Tt.set(s, {
        id: t.current,
        state: s.memoizedState
      }) : s.memoizedState !== l.state && (t.current = l.id, Tt.delete(s));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function er(e) {
  let t = pe(wn);
  t === Ie && !Qo && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Zo(!!e), o = t === Ie && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${o}-${n}`;
}
function tr(e) {
  let t = I.useId(), [n] = xe(ar()), o = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Ie.prefix}`;
  return e || `${o}-${t}`;
}
const nr = typeof I.useId == "function" ? tr : er;
function or() {
  return !1;
}
function rr() {
  return !0;
}
function ir(e) {
  return () => {
  };
}
function ar() {
  return typeof I.useSyncExternalStore == "function" ? I.useSyncExternalStore(ir, or, rr) : pe(Jo);
}
let sr = !!(typeof window < "u" && window.document && window.document.createElement), ye = /* @__PURE__ */ new Map(), Be;
typeof FinalizationRegistry < "u" && (Be = new FinalizationRegistry((e) => {
  ye.delete(e);
}));
function fn(e) {
  let [t, n] = xe(e), o = A(null), r = nr(t), s = A(null);
  if (Be && Be.register(s, r), sr) {
    const l = ye.get(r);
    l && !l.includes(o) ? l.push(o) : ye.set(r, [
      o
    ]);
  }
  return mt(() => {
    let l = r;
    return () => {
      Be && Be.unregister(s), ye.delete(l);
    };
  }, [
    r
  ]), X(() => {
    let l = o.current;
    return l && n(l), () => {
      l && (o.current = null);
    };
  }), r;
}
function lr(e, t) {
  if (e === t) return e;
  let n = ye.get(e);
  if (n)
    return n.forEach((r) => r.current = t), t;
  let o = ye.get(t);
  return o ? (o.forEach((r) => r.current = e), e) : t;
}
function kn(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const H = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, V = (e) => e && "window" in e && e.window === e ? e : H(e).defaultView || window;
function cr(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function ur(e) {
  return cr(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let dr = !1;
function tn() {
  return dr;
}
function F(e, t) {
  if (!tn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : ur(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const ke = (e = document) => {
  var t;
  if (!tn()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function T(e) {
  return tn() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function zn(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = zn(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function fr() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = zn(e)) && (o && (o += " "), o += t);
  return o;
}
function fe(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let o = e[n];
    for (let r in o) {
      let s = t[r], l = o[r];
      typeof s == "function" && typeof l == "function" && // This is a lot faster than a regex.
      r[0] === "o" && r[1] === "n" && r.charCodeAt(2) >= /* 'A' */
      65 && r.charCodeAt(2) <= /* 'Z' */
      90 ? t[r] = kn(s, l) : (r === "className" || r === "UNSAFE_className") && typeof s == "string" && typeof l == "string" ? t[r] = fr(s, l) : r === "id" && s && l ? t.id = lr(s, l) : t[r] = l !== void 0 ? l : s;
    }
  }
  return t;
}
function pr(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = pn(r, t);
      return n || (n = typeof s == "function"), s;
    });
    if (n) return () => {
      o.forEach((r, s) => {
        typeof r == "function" ? r() : pn(e[s], null);
      });
    };
  };
}
function pn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const br = /* @__PURE__ */ new Set([
  "id"
]), gr = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), mr = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), vr = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), bn = /* @__PURE__ */ new Set([
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
]), hr = /^(data-.*)$/;
function Ln(e, t = {}) {
  let { labelable: n, isLink: o, global: r, events: s = r, propNames: l } = t, u = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (br.has(d) || n && gr.has(d) || o && mr.has(d) || r && vr.has(d) || s && bn.has(d) || d.endsWith("Capture") && bn.has(d.slice(0, -7)) || l?.has(d) || hr.test(d)) && (u[d] = e[d]);
  return u;
}
function $e(e) {
  if (Sr()) e.focus({
    preventScroll: !0
  });
  else {
    let t = yr(e);
    e.focus(), xr(t);
  }
}
let Me = null;
function Sr() {
  if (Me == null) {
    Me = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Me = !0, !0;
        }
      });
    } catch {
    }
  }
  return Me;
}
function yr(e) {
  let t = e.parentNode, n = [], o = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== o; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return o instanceof HTMLElement && n.push({
    element: o,
    scrollTop: o.scrollTop,
    scrollLeft: o.scrollLeft
  }), n;
}
function xr(e) {
  for (let { element: t, scrollTop: n, scrollLeft: o } of e)
    t.scrollTop = n, t.scrollLeft = o;
}
function vt(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((o) => e.test(o.brand)) || e.test(window.navigator.userAgent);
}
function nn(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function se(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Te = se(function() {
  return nn(/^Mac/i);
}), $r = se(function() {
  return nn(/^iPhone/i);
}), Mn = se(function() {
  return nn(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Te() && navigator.maxTouchPoints > 1;
}), on = se(function() {
  return $r() || Mn();
});
se(function() {
  return Te() || on();
});
const Tr = se(function() {
  return vt(/AppleWebKit/i) && !Pr();
}), Pr = se(function() {
  return vt(/Chrome/i);
}), Hn = se(function() {
  return vt(/Android/i);
}), Er = se(function() {
  return vt(/Firefox/i);
});
function ze(e, t, n = !0) {
  var o, r;
  let { metaKey: s, ctrlKey: l, altKey: u, shiftKey: d } = t;
  Er() && (!((r = window.event) === null || r === void 0 || (o = r.type) === null || o === void 0) && o.startsWith("key")) && e.target === "_blank" && (Te() ? s = !0 : l = !0);
  let g = Tr() && Te() && !Mn() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: s,
    ctrlKey: l,
    altKey: u,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: s,
    ctrlKey: l,
    altKey: u,
    shiftKey: d,
    bubbles: !0,
    cancelable: !0
  });
  ze.isOpening = n, $e(e), e.dispatchEvent(g), ze.isOpening = !1;
}
ze.isOpening = !1;
let de = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Set();
function gn() {
  if (typeof window > "u") return;
  function e(o) {
    return "propertyName" in o;
  }
  let t = (o) => {
    if (!e(o) || !o.target) return;
    let r = de.get(o.target);
    r || (r = /* @__PURE__ */ new Set(), de.set(o.target, r), o.target.addEventListener("transitioncancel", n, {
      once: !0
    })), r.add(o.propertyName);
  }, n = (o) => {
    if (!e(o) || !o.target) return;
    let r = de.get(o.target);
    if (r && (r.delete(o.propertyName), r.size === 0 && (o.target.removeEventListener("transitioncancel", n), de.delete(o.target)), de.size === 0)) {
      for (let s of Ct) s();
      Ct.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? gn() : document.addEventListener("DOMContentLoaded", gn));
function Cr() {
  for (const [e] of de)
    "isConnected" in e && !e.isConnected && de.delete(e);
}
function Wn(e) {
  requestAnimationFrame(() => {
    Cr(), de.size === 0 ? e() : Ct.add(e);
  });
}
function rn() {
  let e = A(/* @__PURE__ */ new Map()), t = G((r, s, l, u) => {
    let d = u?.once ? (...g) => {
      e.current.delete(l), l(...g);
    } : l;
    e.current.set(l, {
      type: s,
      eventTarget: r,
      fn: d,
      options: u
    }), r.addEventListener(s, d, u);
  }, []), n = G((r, s, l, u) => {
    var d;
    let g = ((d = e.current.get(l)) === null || d === void 0 ? void 0 : d.fn) || l;
    r.removeEventListener(s, g, u), e.current.delete(l);
  }, []), o = G(() => {
    e.current.forEach((r, s) => {
      n(r.eventTarget, r.type, s, r.options);
    });
  }, [
    n
  ]);
  return X(() => o, [
    o
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: o
  };
}
function Fr(e) {
  const t = A(null), n = A(void 0), o = G((r) => {
    if (typeof e == "function") {
      const s = e, l = s(r);
      return () => {
        typeof l == "function" ? l() : s(null);
      };
    } else if (e)
      return e.current = r, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return O(() => ({
    get current() {
      return t.current;
    },
    set current(r) {
      t.current = r, n.current && (n.current(), n.current = void 0), r != null && (n.current = o(r));
    }
  }), [
    o
  ]);
}
function Dn(e, t) {
  mt(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Ft(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Hn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Br(e) {
  return !Hn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const wr = typeof Element < "u" && "checkVisibility" in Element.prototype;
function kr(e) {
  const t = V(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: o } = e.style, r = n !== "none" && o !== "hidden" && o !== "collapse";
  if (r) {
    const { getComputedStyle: s } = e.ownerDocument.defaultView;
    let { display: l, visibility: u } = s(e);
    r = l !== "none" && u !== "hidden" && u !== "collapse";
  }
  return r;
}
function zr(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Rn(e, t) {
  return wr ? e.checkVisibility() : e.nodeName !== "#comment" && kr(e) && zr(e, t) && (!e.parentElement || Rn(e.parentElement, e));
}
const In = [
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
], Lr = In.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
In.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function Mr(e) {
  return e.matches(Lr) && Rn(e) && !Hr(e);
}
function Hr(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const Wr = Symbol("default");
function Dr(e) {
  let { className: t, style: n, children: o, defaultClassName: r, defaultChildren: s, defaultStyle: l, values: u } = e;
  return O(() => {
    let d, g, b;
    return typeof t == "function" ? d = t({
      ...u,
      defaultClassName: r
    }) : d = t, typeof n == "function" ? g = n({
      ...u,
      defaultStyle: l || {}
    }) : g = n, typeof o == "function" ? b = o({
      ...u,
      defaultChildren: s
    }) : o == null ? b = s : b = o, {
      className: d ?? r,
      style: g || l ? {
        ...l,
        ...g
      } : void 0,
      children: b ?? s,
      "data-rac": ""
    };
  }, [
    t,
    n,
    o,
    r,
    s,
    l,
    u
  ]);
}
function Rr(e, t) {
  let n = pe(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let o = t || Wr;
    if (!n.slots[o]) {
      let r = new Intl.ListFormat().format(Object.keys(n.slots).map((l) => `"${l}"`)), s = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${s} Valid slot names are ${r}.`);
    }
    return n.slots[o];
  }
  return n;
}
function Ir(e, t, n) {
  let o = Rr(n, e.slot) || {}, { ref: r, ...s } = o, l = Fr(O(() => pr(t, r), [
    t,
    r
  ])), u = fe(s, e);
  return "style" in s && s.style && "style" in e && e.style && (typeof s.style == "function" || typeof e.style == "function" ? u.style = (d) => {
    let g = typeof s.style == "function" ? s.style(d) : s.style, b = {
      ...d.defaultStyle,
      ...g
    }, m = typeof e.style == "function" ? e.style({
      ...d,
      defaultStyle: b
    }) : e.style;
    return {
      ...b,
      ...m
    };
  } : u.style = {
    ...s.style,
    ...e.style
  }), [
    u,
    l
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
const Ar = /* @__PURE__ */ gt(!1);
function Or(e) {
  let t = (n, o) => pe(Ar) ? null : e(n, o);
  return t.displayName = e.displayName || e.name, Bn(t);
}
function an(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function An(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function On(e) {
  let t = A({
    isFocused: !1,
    observer: null
  });
  mt(() => {
    const o = t.current;
    return () => {
      o.observer && (o.observer.disconnect(), o.observer = null);
    };
  }, []);
  let n = ue((o) => {
    e?.(o);
  });
  return G((o) => {
    if (o.target instanceof HTMLButtonElement || o.target instanceof HTMLInputElement || o.target instanceof HTMLTextAreaElement || o.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let r = o.target, s = (l) => {
        if (t.current.isFocused = !1, r.disabled) {
          let u = an(l);
          n(u);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      r.addEventListener("focusout", s, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && r.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let u = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: u
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: u
          }));
        }
      }), t.current.observer.observe(r, {
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
let Ae = !1;
function mn(e) {
  for (; e && !Mr(e); ) e = e.parentElement;
  let t = V(e), n = t.document.activeElement;
  if (!n || n === e) return;
  Ae = !0;
  let o = !1, r = (b) => {
    (b.target === n || o) && b.stopImmediatePropagation();
  }, s = (b) => {
    (b.target === n || o) && (b.stopImmediatePropagation(), !e && !o && (o = !0, $e(n), d()));
  }, l = (b) => {
    (b.target === e || o) && b.stopImmediatePropagation();
  }, u = (b) => {
    (b.target === e || o) && (b.stopImmediatePropagation(), o || (o = !0, $e(n), d()));
  };
  t.addEventListener("blur", r, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", u, !0), t.addEventListener("focus", l, !0);
  let d = () => {
    cancelAnimationFrame(g), t.removeEventListener("blur", r, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", u, !0), t.removeEventListener("focus", l, !0), Ae = !1, o = !1;
  }, g = requestAnimationFrame(d);
  return d;
}
let Se = "default", Bt = "", Re = /* @__PURE__ */ new WeakMap();
function vn(e) {
  if (on()) {
    if (Se === "default") {
      const t = H(e);
      Bt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Se = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Re.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Pt(e) {
  if (on()) {
    if (Se !== "disabled") return;
    Se = "restoring", setTimeout(() => {
      Wn(() => {
        if (Se === "restoring") {
          const t = H(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Bt || ""), Bt = "", Se = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Re.has(e)) {
    let t = Re.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Re.delete(e);
  }
}
const Nn = I.createContext({
  register: () => {
  }
});
Nn.displayName = "PressResponderContext";
function Nr(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function _n(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function _r(e, t) {
  var n = _n(e, t, "get");
  return Nr(e, n);
}
function jr(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Kr(e, t, n) {
  jr(e, t), t.set(e, n);
}
function Vr(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function hn(e, t, n) {
  var o = _n(e, t, "set");
  return Vr(e, o, n), n;
}
function Gr(e) {
  let t = pe(Nn);
  if (t) {
    let { register: n, ...o } = t;
    e = fe(o, e), n();
  }
  return Dn(t, e.ref), e;
}
var He = /* @__PURE__ */ new WeakMap();
class We {
  continuePropagation() {
    hn(this, He, !1);
  }
  get shouldStopPropagation() {
    return _r(this, He);
  }
  constructor(t, n, o, r) {
    Kr(this, He, {
      writable: !0,
      value: void 0
    }), hn(this, He, !0);
    var s;
    let l = (s = r?.target) !== null && s !== void 0 ? s : o.currentTarget;
    const u = l?.getBoundingClientRect();
    let d, g = 0, b, m = null;
    o.clientX != null && o.clientY != null && (b = o.clientX, m = o.clientY), u && (b != null && m != null ? (d = b - u.left, g = m - u.top) : (d = u.width / 2, g = u.height / 2)), this.type = t, this.pointerType = n, this.target = o.currentTarget, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.x = d, this.y = g;
  }
}
const Sn = Symbol("linkClicked"), yn = "react-aria-pressable-style", xn = "data-react-aria-pressable";
function Ur(e) {
  let { onPress: t, onPressChange: n, onPressStart: o, onPressEnd: r, onPressUp: s, onClick: l, isDisabled: u, isPressed: d, preventFocusOnPress: g, shouldCancelOnPointerExit: b, allowTextSelectionOnPress: m, ref: C, ...B } = Gr(e), [w, S] = xe(!1), y = A({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: P, removeAllGlobalListeners: W } = rn(), z = ue((i, p) => {
    let k = y.current;
    if (u || k.didFirePressStart) return !1;
    let f = !0;
    if (k.isTriggeringEvent = !0, o) {
      let $ = new We("pressstart", p, i);
      o($), f = $.shouldStopPropagation;
    }
    return n && n(!0), k.isTriggeringEvent = !1, k.didFirePressStart = !0, S(!0), f;
  }), D = ue((i, p, k = !0) => {
    let f = y.current;
    if (!f.didFirePressStart) return !1;
    f.didFirePressStart = !1, f.isTriggeringEvent = !0;
    let $ = !0;
    if (r) {
      let a = new We("pressend", p, i);
      r(a), $ = a.shouldStopPropagation;
    }
    if (n && n(!1), S(!1), t && k && !u) {
      let a = new We("press", p, i);
      t(a), $ && ($ = a.shouldStopPropagation);
    }
    return f.isTriggeringEvent = !1, $;
  }), q = ue((i, p) => {
    let k = y.current;
    if (u) return !1;
    if (s) {
      k.isTriggeringEvent = !0;
      let f = new We("pressup", p, i);
      return s(f), k.isTriggeringEvent = !1, f.shouldStopPropagation;
    }
    return !0;
  }), N = ue((i) => {
    let p = y.current;
    if (p.isPressed && p.target) {
      p.didFirePressStart && p.pointerType != null && D(be(p.target, i), p.pointerType, !1), p.isPressed = !1, p.isOverTarget = !1, p.activePointerId = null, p.pointerType = null, W(), m || Pt(p.target);
      for (let k of p.disposables) k();
      p.disposables = [];
    }
  }), me = ue((i) => {
    b && N(i);
  }), ve = ue((i) => {
    l?.(i);
  }), Ee = ue((i, p) => {
    if (l) {
      let k = new MouseEvent("click", i);
      An(k, p), l(an(k));
    }
  }), ht = O(() => {
    let i = y.current, p = {
      onKeyDown(f) {
        if (Et(f.nativeEvent, f.currentTarget) && F(f.currentTarget, T(f.nativeEvent))) {
          var $;
          Pn(T(f.nativeEvent), f.key) && f.preventDefault();
          let a = !0;
          if (!i.isPressed && !f.repeat) {
            i.target = f.currentTarget, i.isPressed = !0, i.pointerType = "keyboard", a = z(f, "keyboard");
            let v = f.currentTarget, x = (j) => {
              Et(j, v) && !j.repeat && F(v, T(j)) && i.target && q(be(i.target, j), "keyboard");
            };
            P(H(f.currentTarget), "keyup", kn(x, k), !0);
          }
          a && f.stopPropagation(), f.metaKey && Te() && (($ = i.metaKeyEvents) === null || $ === void 0 || $.set(f.key, f.nativeEvent));
        } else f.key === "Meta" && (i.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(f) {
        if (!(f && !F(f.currentTarget, T(f.nativeEvent))) && f && f.button === 0 && !i.isTriggeringEvent && !ze.isOpening) {
          let $ = !0;
          if (u && f.preventDefault(), !i.ignoreEmulatedMouseEvents && !i.isPressed && (i.pointerType === "virtual" || Ft(f.nativeEvent))) {
            let a = z(f, "virtual"), v = q(f, "virtual"), x = D(f, "virtual");
            ve(f), $ = a && v && x;
          } else if (i.isPressed && i.pointerType !== "keyboard") {
            let a = i.pointerType || f.nativeEvent.pointerType || "virtual", v = q(be(f.currentTarget, f), a), x = D(be(f.currentTarget, f), a, !0);
            $ = v && x, i.isOverTarget = !1, ve(f), N(f);
          }
          i.ignoreEmulatedMouseEvents = !1, $ && f.stopPropagation();
        }
      }
    }, k = (f) => {
      var $;
      if (i.isPressed && i.target && Et(f, i.target)) {
        var a;
        Pn(T(f), f.key) && f.preventDefault();
        let x = T(f), j = F(i.target, T(f));
        D(be(i.target, f), "keyboard", j), j && Ee(f, i.target), W(), f.key !== "Enter" && sn(i.target) && F(i.target, x) && !f[Sn] && (f[Sn] = !0, ze(i.target, f, !1)), i.isPressed = !1, (a = i.metaKeyEvents) === null || a === void 0 || a.delete(f.key);
      } else if (f.key === "Meta" && (!(($ = i.metaKeyEvents) === null || $ === void 0) && $.size)) {
        var v;
        let x = i.metaKeyEvents;
        i.metaKeyEvents = void 0;
        for (let j of x.values()) (v = i.target) === null || v === void 0 || v.dispatchEvent(new KeyboardEvent("keyup", j));
      }
    };
    if (typeof PointerEvent < "u") {
      p.onPointerDown = (a) => {
        if (a.button !== 0 || !F(a.currentTarget, T(a.nativeEvent))) return;
        if (Br(a.nativeEvent)) {
          i.pointerType = "virtual";
          return;
        }
        i.pointerType = a.pointerType;
        let v = !0;
        if (!i.isPressed) {
          i.isPressed = !0, i.isOverTarget = !0, i.activePointerId = a.pointerId, i.target = a.currentTarget, m || vn(i.target), v = z(a, i.pointerType);
          let x = T(a.nativeEvent);
          "releasePointerCapture" in x && x.releasePointerCapture(a.pointerId), P(H(a.currentTarget), "pointerup", f, !1), P(H(a.currentTarget), "pointercancel", $, !1);
        }
        v && a.stopPropagation();
      }, p.onMouseDown = (a) => {
        if (F(a.currentTarget, T(a.nativeEvent)) && a.button === 0) {
          if (g) {
            let v = mn(a.target);
            v && i.disposables.push(v);
          }
          a.stopPropagation();
        }
      }, p.onPointerUp = (a) => {
        !F(a.currentTarget, T(a.nativeEvent)) || i.pointerType === "virtual" || a.button === 0 && !i.isPressed && q(a, i.pointerType || a.pointerType);
      }, p.onPointerEnter = (a) => {
        a.pointerId === i.activePointerId && i.target && !i.isOverTarget && i.pointerType != null && (i.isOverTarget = !0, z(be(i.target, a), i.pointerType));
      }, p.onPointerLeave = (a) => {
        a.pointerId === i.activePointerId && i.target && i.isOverTarget && i.pointerType != null && (i.isOverTarget = !1, D(be(i.target, a), i.pointerType, !1), me(a));
      };
      let f = (a) => {
        if (a.pointerId === i.activePointerId && i.isPressed && a.button === 0 && i.target) {
          if (F(i.target, T(a)) && i.pointerType != null) {
            let v = !1, x = setTimeout(() => {
              i.isPressed && i.target instanceof HTMLElement && (v ? N(a) : ($e(i.target), i.target.click()));
            }, 80);
            P(a.currentTarget, "click", () => v = !0, !0), i.disposables.push(() => clearTimeout(x));
          } else N(a);
          i.isOverTarget = !1;
        }
      }, $ = (a) => {
        N(a);
      };
      p.onDragStart = (a) => {
        F(a.currentTarget, T(a.nativeEvent)) && N(a);
      };
    } else if (process.env.NODE_ENV === "test") {
      p.onMouseDown = (a) => {
        if (a.button !== 0 || !F(a.currentTarget, T(a.nativeEvent))) return;
        if (i.ignoreEmulatedMouseEvents) {
          a.stopPropagation();
          return;
        }
        if (i.isPressed = !0, i.isOverTarget = !0, i.target = a.currentTarget, i.pointerType = Ft(a.nativeEvent) ? "virtual" : "mouse", Go(() => z(a, i.pointerType)) && a.stopPropagation(), g) {
          let x = mn(a.target);
          x && i.disposables.push(x);
        }
        P(H(a.currentTarget), "mouseup", f, !1);
      }, p.onMouseEnter = (a) => {
        if (!F(a.currentTarget, T(a.nativeEvent))) return;
        let v = !0;
        i.isPressed && !i.ignoreEmulatedMouseEvents && i.pointerType != null && (i.isOverTarget = !0, v = z(a, i.pointerType)), v && a.stopPropagation();
      }, p.onMouseLeave = (a) => {
        if (!F(a.currentTarget, T(a.nativeEvent))) return;
        let v = !0;
        i.isPressed && !i.ignoreEmulatedMouseEvents && i.pointerType != null && (i.isOverTarget = !1, v = D(a, i.pointerType, !1), me(a)), v && a.stopPropagation();
      }, p.onMouseUp = (a) => {
        F(a.currentTarget, T(a.nativeEvent)) && !i.ignoreEmulatedMouseEvents && a.button === 0 && !i.isPressed && q(a, i.pointerType || "mouse");
      };
      let f = (a) => {
        if (a.button === 0) {
          if (i.ignoreEmulatedMouseEvents) {
            i.ignoreEmulatedMouseEvents = !1;
            return;
          }
          i.target && i.target.contains(a.target) && i.pointerType != null || N(a), i.isOverTarget = !1;
        }
      };
      p.onTouchStart = (a) => {
        if (!F(a.currentTarget, T(a.nativeEvent))) return;
        let v = Yr(a.nativeEvent);
        if (!v) return;
        i.activePointerId = v.identifier, i.ignoreEmulatedMouseEvents = !0, i.isOverTarget = !0, i.isPressed = !0, i.target = a.currentTarget, i.pointerType = "touch", m || vn(i.target), z(ce(i.target, a), i.pointerType) && a.stopPropagation(), P(V(a.currentTarget), "scroll", $, !0);
      }, p.onTouchMove = (a) => {
        if (!F(a.currentTarget, T(a.nativeEvent))) return;
        if (!i.isPressed) {
          a.stopPropagation();
          return;
        }
        let v = $n(a.nativeEvent, i.activePointerId), x = !0;
        v && Tn(v, a.currentTarget) ? !i.isOverTarget && i.pointerType != null && (i.isOverTarget = !0, x = z(ce(i.target, a), i.pointerType)) : i.isOverTarget && i.pointerType != null && (i.isOverTarget = !1, x = D(ce(i.target, a), i.pointerType, !1), me(ce(i.target, a))), x && a.stopPropagation();
      }, p.onTouchEnd = (a) => {
        if (!F(a.currentTarget, T(a.nativeEvent))) return;
        if (!i.isPressed) {
          a.stopPropagation();
          return;
        }
        let v = $n(a.nativeEvent, i.activePointerId), x = !0;
        v && Tn(v, a.currentTarget) && i.pointerType != null ? (q(ce(i.target, a), i.pointerType), x = D(ce(i.target, a), i.pointerType), Ee(a.nativeEvent, i.target)) : i.isOverTarget && i.pointerType != null && (x = D(ce(i.target, a), i.pointerType, !1)), x && a.stopPropagation(), i.isPressed = !1, i.activePointerId = null, i.isOverTarget = !1, i.ignoreEmulatedMouseEvents = !0, i.target && !m && Pt(i.target), W();
      }, p.onTouchCancel = (a) => {
        F(a.currentTarget, T(a.nativeEvent)) && (a.stopPropagation(), i.isPressed && N(ce(i.target, a)));
      };
      let $ = (a) => {
        i.isPressed && F(T(a), i.target) && N({
          currentTarget: i.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      p.onDragStart = (a) => {
        F(a.currentTarget, T(a.nativeEvent)) && N(a);
      };
    }
    return p;
  }, [
    P,
    u,
    g,
    W,
    m,
    N,
    me,
    D,
    z,
    q,
    ve,
    Ee
  ]);
  return X(() => {
    if (!C || process.env.NODE_ENV === "test") return;
    const i = H(C.current);
    if (!i || !i.head || i.getElementById(yn)) return;
    const p = i.createElement("style");
    p.id = yn, p.textContent = `
@layer {
  [${xn}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), i.head.prepend(p);
  }, [
    C
  ]), X(() => {
    let i = y.current;
    return () => {
      var p;
      m || Pt((p = i.target) !== null && p !== void 0 ? p : void 0);
      for (let k of i.disposables) k();
      i.disposables = [];
    };
  }, [
    m
  ]), {
    isPressed: d || w,
    pressProps: fe(B, ht, {
      [xn]: !0
    })
  };
}
function sn(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Et(e, t) {
  const { key: n, code: o } = e, r = t, s = r.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || o === "Space") && !(r instanceof V(r).HTMLInputElement && !jn(r, n) || r instanceof V(r).HTMLTextAreaElement || r.isContentEditable) && // Links should only trigger with Enter key
  !((s === "link" || !s && sn(r)) && n !== "Enter");
}
function Yr(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function $n(e, t) {
  const n = e.changedTouches;
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    if (r.identifier === t) return r;
  }
  return null;
}
function ce(e, t) {
  let n = 0, o = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (n = t.targetTouches[0].clientX, o = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: o
  };
}
function be(e, t) {
  let n = t.clientX, o = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: o
  };
}
function Xr(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function qr(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Tn(e, t) {
  let n = t.getBoundingClientRect(), o = Xr(e);
  return qr(n, o);
}
function Jr(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !sn(e);
}
function Pn(e, t) {
  return e instanceof HTMLInputElement ? !jn(e, t) : Jr(e);
}
const Qr = /* @__PURE__ */ new Set([
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
function jn(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Qr.has(e.type);
}
let Pe = null, wt = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map(), ge = !1, kt = !1;
const Zr = {
  Tab: !0,
  Escape: !0
};
function ln(e, t) {
  for (let n of wt) n(e, t);
}
function ei(e) {
  return !(e.metaKey || !Te() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Oe(e) {
  ge = !0, ei(e) && (Pe = "keyboard", ln("keyboard", e));
}
function K(e) {
  Pe = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (ge = !0, ln("pointer", e));
}
function Kn(e) {
  Ft(e) && (ge = !0, Pe = "virtual");
}
function Vn(e) {
  e.target === window || e.target === document || Ae || !e.isTrusted || (!ge && !kt && (Pe = "virtual", ln("virtual", e)), ge = !1, kt = !1);
}
function Gn() {
  Ae || (ge = !1, kt = !0);
}
function zt(e) {
  if (typeof window > "u" || typeof document > "u" || we.get(V(e))) return;
  const t = V(e), n = H(e);
  let o = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    ge = !0, o.apply(this, arguments);
  }, n.addEventListener("keydown", Oe, !0), n.addEventListener("keyup", Oe, !0), n.addEventListener("click", Kn, !0), t.addEventListener("focus", Vn, !0), t.addEventListener("blur", Gn, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", K, !0), n.addEventListener("pointermove", K, !0), n.addEventListener("pointerup", K, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", K, !0), n.addEventListener("mousemove", K, !0), n.addEventListener("mouseup", K, !0)), t.addEventListener("beforeunload", () => {
    Un(e);
  }, {
    once: !0
  }), we.set(t, {
    focus: o
  });
}
const Un = (e, t) => {
  const n = V(e), o = H(e);
  t && o.removeEventListener("DOMContentLoaded", t), we.has(n) && (n.HTMLElement.prototype.focus = we.get(n).focus, o.removeEventListener("keydown", Oe, !0), o.removeEventListener("keyup", Oe, !0), o.removeEventListener("click", Kn, !0), n.removeEventListener("focus", Vn, !0), n.removeEventListener("blur", Gn, !1), typeof PointerEvent < "u" ? (o.removeEventListener("pointerdown", K, !0), o.removeEventListener("pointermove", K, !0), o.removeEventListener("pointerup", K, !0)) : process.env.NODE_ENV === "test" && (o.removeEventListener("mousedown", K, !0), o.removeEventListener("mousemove", K, !0), o.removeEventListener("mouseup", K, !0)), we.delete(n));
};
function ti(e) {
  const t = H(e);
  let n;
  return t.readyState !== "loading" ? zt(e) : (n = () => {
    zt(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Un(e, n);
}
typeof document < "u" && ti();
function Yn() {
  return Pe !== "pointer";
}
function ni() {
  return Pe;
}
const oi = /* @__PURE__ */ new Set([
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
function ri(e, t, n) {
  let o = H(n?.target);
  const r = typeof window < "u" ? V(n?.target).HTMLInputElement : HTMLInputElement, s = typeof window < "u" ? V(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? V(n?.target).HTMLElement : HTMLElement, u = typeof window < "u" ? V(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || o.activeElement instanceof r && !oi.has(o.activeElement.type) || o.activeElement instanceof s || o.activeElement instanceof l && o.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof u && !Zr[n.key]);
}
function ii(e, t, n) {
  zt(), X(() => {
    let o = (r, s) => {
      ri(!!n?.isTextInput, r, s) && e(Yn());
    };
    return wt.add(o), () => {
      wt.delete(o);
    };
  }, t);
}
function ai(e) {
  const t = H(e), n = ke(t);
  if (ni() === "virtual") {
    let o = n;
    Wn(() => {
      ke(t) === o && e.isConnected && $e(e);
    });
  } else $e(e);
}
function Xn(e) {
  let { isDisabled: t, onFocus: n, onBlur: o, onFocusChange: r } = e;
  const s = G((d) => {
    if (d.target === d.currentTarget)
      return o && o(d), r && r(!1), !0;
  }, [
    o,
    r
  ]), l = On(s), u = G((d) => {
    const g = H(d.target), b = g ? ke(g) : ke();
    d.target === d.currentTarget && b === T(d.nativeEvent) && (n && n(d), r && r(!0), l(d));
  }, [
    r,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || r || o) ? u : void 0,
      onBlur: !t && (o || r) ? s : void 0
    }
  };
}
function En(e) {
  if (!e) return;
  let t = !0;
  return (n) => {
    let o = {
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
    e(o), t && n.stopPropagation();
  };
}
function si(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: En(e.onKeyDown),
      onKeyUp: En(e.onKeyUp)
    }
  };
}
let li = /* @__PURE__ */ I.createContext(null);
function ci(e) {
  let t = pe(li) || {};
  Dn(t, e);
  let { ref: n, ...o } = t;
  return o;
}
function ui(e, t) {
  let { focusProps: n } = Xn(e), { keyboardProps: o } = si(e), r = fe(n, o), s = ci(t), l = e.isDisabled ? {} : s, u = A(e.autoFocus);
  X(() => {
    u.current && t.current && ai(t.current), u.current = !1;
  }, [
    t
  ]);
  let d = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (d = void 0), {
    focusableProps: fe({
      ...r,
      tabIndex: d
    }, l)
  };
}
function di(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: o, onFocusWithinChange: r } = e, s = A({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: u } = rn(), d = G((m) => {
    m.currentTarget.contains(m.target) && s.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (s.current.isFocusWithin = !1, u(), n && n(m), r && r(!1));
  }, [
    n,
    r,
    s,
    u
  ]), g = On(d), b = G((m) => {
    if (!m.currentTarget.contains(m.target)) return;
    const C = H(m.target), B = ke(C);
    if (!s.current.isFocusWithin && B === T(m.nativeEvent)) {
      o && o(m), r && r(!0), s.current.isFocusWithin = !0, g(m);
      let w = m.currentTarget;
      l(C, "focus", (S) => {
        if (s.current.isFocusWithin && !F(w, S.target)) {
          let y = new C.defaultView.FocusEvent("blur", {
            relatedTarget: S.target
          });
          An(y, w);
          let P = an(y);
          d(P);
        }
      }, {
        capture: !0
      });
    }
  }, [
    o,
    r,
    g,
    l,
    d
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: b,
      onBlur: d
    }
  };
}
let Ne = !1, De = 0;
function Lt() {
  Ne = !0, setTimeout(() => {
    Ne = !1;
  }, 50);
}
function Cn(e) {
  e.pointerType === "touch" && Lt();
}
function fi() {
  if (!(typeof document > "u"))
    return De === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", Cn) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Lt)), De++, () => {
      De--, !(De > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Cn) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Lt));
    };
}
function pi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: o, isDisabled: r } = e, [s, l] = xe(!1), u = A({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  X(fi, []);
  let { addGlobalListener: d, removeAllGlobalListeners: g } = rn(), { hoverProps: b, triggerHoverEnd: m } = O(() => {
    let C = (S, y) => {
      if (u.pointerType = y, r || y === "touch" || u.isHovered || !S.currentTarget.contains(S.target)) return;
      u.isHovered = !0;
      let P = S.currentTarget;
      u.target = P, d(H(S.target), "pointerover", (W) => {
        u.isHovered && u.target && !F(u.target, W.target) && B(W, W.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: P,
        pointerType: y
      }), n && n(!0), l(!0);
    }, B = (S, y) => {
      let P = u.target;
      u.pointerType = "", u.target = null, !(y === "touch" || !u.isHovered || !P) && (u.isHovered = !1, g(), o && o({
        type: "hoverend",
        target: P,
        pointerType: y
      }), n && n(!1), l(!1));
    }, w = {};
    return typeof PointerEvent < "u" ? (w.onPointerEnter = (S) => {
      Ne && S.pointerType === "mouse" || C(S, S.pointerType);
    }, w.onPointerLeave = (S) => {
      !r && S.currentTarget.contains(S.target) && B(S, S.pointerType);
    }) : process.env.NODE_ENV === "test" && (w.onTouchStart = () => {
      u.ignoreEmulatedMouseEvents = !0;
    }, w.onMouseEnter = (S) => {
      !u.ignoreEmulatedMouseEvents && !Ne && C(S, "mouse"), u.ignoreEmulatedMouseEvents = !1;
    }, w.onMouseLeave = (S) => {
      !r && S.currentTarget.contains(S.target) && B(S, "mouse");
    }), {
      hoverProps: w,
      triggerHoverEnd: B
    };
  }, [
    t,
    n,
    o,
    r,
    u,
    d,
    g
  ]);
  return X(() => {
    r && m({
      currentTarget: u.target
    }, u.pointerType);
  }, [
    r
  ]), {
    hoverProps: b,
    isHovered: s
  };
}
function bi(e, t) {
  let { elementType: n = "button", isDisabled: o, onPress: r, onPressStart: s, onPressEnd: l, onPressUp: u, onPressChange: d, preventFocusOnPress: g, allowFocusWhenDisabled: b, onClick: m, href: C, target: B, rel: w, type: S = "button" } = e, y;
  n === "button" ? y = {
    type: S,
    disabled: o,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : y = {
    role: "button",
    href: n === "a" && !o ? C : void 0,
    target: n === "a" ? B : void 0,
    type: n === "input" ? S : void 0,
    disabled: n === "input" ? o : void 0,
    "aria-disabled": !o || n === "input" ? void 0 : o,
    rel: n === "a" ? w : void 0
  };
  let { pressProps: P, isPressed: W } = Ur({
    onPressStart: s,
    onPressEnd: l,
    onPressChange: d,
    onPress: r,
    onPressUp: u,
    onClick: m,
    isDisabled: o,
    preventFocusOnPress: g,
    ref: t
  }), { focusableProps: z } = ui(e, t);
  b && (z.tabIndex = o ? -1 : z.tabIndex);
  let D = fe(z, P, Ln(e, {
    labelable: !0
  }));
  return {
    isPressed: W,
    buttonProps: fe(y, D, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function gi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: o } = e, r = A({
    isFocused: !1,
    isFocusVisible: t || Yn()
  }), [s, l] = xe(!1), [u, d] = xe(() => r.current.isFocused && r.current.isFocusVisible), g = G(() => d(r.current.isFocused && r.current.isFocusVisible), []), b = G((B) => {
    r.current.isFocused = B, l(B), g();
  }, [
    g
  ]);
  ii((B) => {
    r.current.isFocusVisible = B, g();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = Xn({
    isDisabled: o,
    onFocusChange: b
  }), { focusWithinProps: C } = di({
    isDisabled: !o,
    onFocusWithinChange: b
  });
  return {
    isFocused: s,
    isFocusVisible: u,
    focusProps: o ? C : m
  };
}
const qn = 7e3;
let Y = null;
function Fn(e, t = "assertive", n = qn) {
  Y ? Y.announce(e, t, n) : (Y = new mi(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Y.announce(e, t, n) : setTimeout(() => {
    Y?.isAttached() && Y?.announce(e, t, n);
  }, 100));
}
class mi {
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
  announce(t, n = "assertive", o = qn) {
    var r, s;
    if (!this.node) return;
    let l = document.createElement("div");
    typeof t == "object" ? (l.setAttribute("role", "img"), l.setAttribute("aria-labelledby", t["aria-labelledby"])) : l.textContent = t, n === "assertive" ? (r = this.assertiveLog) === null || r === void 0 || r.appendChild(l) : (s = this.politeLog) === null || s === void 0 || s.appendChild(l), t !== "" && setTimeout(() => {
      l.remove();
    }, o);
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
const vi = /* @__PURE__ */ gt(null), hi = /* @__PURE__ */ gt({}), Si = /* @__PURE__ */ Or(function(t, n) {
  [t, n] = Ir(t, n, hi), t = yi(t);
  let o = t, { isPending: r } = o, { buttonProps: s, isPressed: l } = bi(t, n), { focusProps: u, isFocused: d, isFocusVisible: g } = gi(t), { hoverProps: b, isHovered: m } = pi({
    ...t,
    isDisabled: t.isDisabled || r
  }), C = {
    isHovered: m,
    isPressed: (o.isPressed || l) && !r,
    isFocused: d,
    isFocusVisible: g,
    isDisabled: t.isDisabled || !1,
    isPending: r ?? !1
  }, B = Dr({
    ...t,
    values: C,
    defaultClassName: "react-aria-Button"
  }), w = fn(s.id), S = fn(), y = s["aria-labelledby"];
  r && (y ? y = `${y} ${S}` : s["aria-label"] && (y = `${w} ${S}`));
  let P = A(r);
  X(() => {
    let z = {
      "aria-labelledby": y || w
    };
    (!P.current && d && r || P.current && d && !r) && Fn(z, "assertive"), P.current = r;
  }, [
    r,
    d,
    y,
    w
  ]);
  let W = Ln(t, {
    global: !0
  });
  return delete W.onClick, /* @__PURE__ */ I.createElement("button", {
    ...fe(W, B, s, u, b),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: s.type === "submit" && r ? "button" : s.type,
    id: w,
    ref: n,
    "aria-labelledby": y,
    slot: t.slot || void 0,
    "aria-disabled": r ? "true" : s["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": C.isPressed || void 0,
    "data-hovered": m || void 0,
    "data-focused": d || void 0,
    "data-pending": r || void 0,
    "data-focus-visible": g || void 0
  }, /* @__PURE__ */ I.createElement(vi.Provider, {
    value: {
      id: S
    }
  }, B.children));
});
function yi(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const xi = Bn(
  ({
    children: e,
    variant: t = "primary",
    size: n = "default",
    fullWidth: o = !1,
    className: r = "",
    ...s
  }, l) => {
    const u = [
      "nhs-aria-button",
      `nhs-aria-button--${t}`,
      n !== "default" ? `nhs-aria-button--${n}` : "",
      o ? "nhs-aria-button--full-width" : "",
      r
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _.jsx(
      Si,
      {
        ref: l,
        className: u,
        ...s,
        children: e
      }
    );
  }
);
xi.displayName = "Button";
const Jn = {
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
}, Qn = gt(Jn), $i = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Jn, ...t };
  return /* @__PURE__ */ _.jsx(Qn.Provider, { value: n, children: e });
}, uc = () => {
  const e = pe(Qn);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Ti() {
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
function Pi() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Ti(), document.head.appendChild(e);
}
const dc = ({ children: e, theme: t }) => (X(() => {
  Pi();
}, []), /* @__PURE__ */ _.jsx($i, { theme: t, children: e })), Ei = "150ms", Ci = "300ms", Fi = "500ms", Bi = "cubic-bezier(0.4, 0, 1, 1)", wi = "cubic-bezier(0, 0, 0.2, 1)", ki = "cubic-bezier(0.4, 0, 0.2, 1)", zi = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Li = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Mi = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Hi = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Wi = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Di = "1px", Ri = "2px", Ii = "4px", Ai = "4px", Oi = "4px", Ni = "2px", _i = "1px", ji = "0px", Ki = "4px", Vi = "8px", Gi = "12px", Zn = "#d8dde0", eo = "#4c6272", to = "#d8dde0", no = "#aeb7bd", oo = "#d5281b", ro = "#005eb8", io = "#ffffff", ao = "#212b32", so = "#007f3b", lo = "#330072", co = "#7c2855", uo = "#d5281b", fo = "#ffeb3b", po = "#fff9c4", bo = "#ffb81c", go = "#ed8b00", mo = "#00a499", vo = "#ae2573", ho = "#4c6272", So = "#768692", yo = "#aeb7bd", xo = "#d8dde0", $o = "#f0f4f5", Ui = "#212b32", Yi = "#4c6272", Xi = "#ffffff", qi = "#212b32", Ji = "#005eb8", Qi = "#7c2855", Zi = "#003087", ea = "#330072", ta = "#ffeb3b", na = "#212b32", oa = "#d8dde0", ra = "#ffffff33", ia = "#d5281b", aa = "#4c6272", sa = "#ffffff", la = "#007f3b", ca = "#ffffff", ua = "#006530", da = "#004021", fa = "#004021", pa = "#00000000", ba = "#ffffff", ga = "#005eb8", ma = "#005eb8", va = "#d9e5f2", ha = "#c7daf0", Sa = "#005eb8", ya = "#ffffff", xa = "#212b32", $a = "#d9dde0", Ta = "#b3bcc2", Pa = "#b3bcc2", Ea = "#d5281b", Ca = "#aa2016", Fa = "#6a140e", Ba = "#6a140e", wa = "#005eb8", ka = "#004b93", za = "#002f5c", La = "#002f5c", Ma = "8px", Ha = "16px", Wa = "12px", Da = "16px", Ra = "4px", Ia = "40px", Aa = "4px", Oa = "40px", Na = "12px", _a = "16px", ja = "32px", Ka = "16px", Va = "20px", Ga = "28px", Ua = "9px", Ya = "2px", Xa = "16px", qa = "24px", Ja = "8px", Qa = "24px", Za = "16px", es = "4px", ts = "4px", ns = "4px", os = "8px", rs = "4px", is = "16px", as = "#007f3b", ss = "#006530", ls = "#004021", cs = "#d8dde0", us = "#ffffff", ds = "#768692", fs = "#00000000", ps = "#ffeb3b", bs = "#00000000", gs = "#ffffff", ms = "#d9e5f2", vs = "#c7daf0", hs = "#005eb8", Ss = "#005eb8", To = "8px", Po = "16px", Eo = "12px", Co = "16px", ys = "2px", xs = "4px", $s = "4px", Ts = "600", Ps = "#ffffff", Es = "#d8dde0", Cs = "#aeb7bd", Fs = "#f0f4f5", Bs = "#212b32", ws = "#212b32", ks = "#005eb8", Fo = "16px", Bo = "32px", wo = "16px", zs = "1px", Ls = "4px", Ms = "none", Hs = "0 2px 4px rgba(0, 0, 0, 0.1)", Ws = "#ffffff", Ds = "#ffffff", Rs = "#d8dde0", Is = "#ffffff", As = "#4c6272", Os = "#ffeb3b", Ns = "#d5281b", _s = "#aeb7bd", js = "#212b32", Ks = "#4c6272", Vs = "#768692", Gs = "#212b32", Us = "#ffffff", Ys = "600", Xs = "#d5281b", qs = "600", Js = "#4c6272", ko = "4px", zo = "40px", Lo = "40px", Mo = "12px", Qs = "2px", Zs = "4px", el = "0px", tl = "16px", nl = "18px", ol = "24px", rl = "32px", il = "34px", al = "32px", sl = "40px", ll = "48px", cl = "5.4ex", ul = "7.2ex", dl = "9ex", fl = "10.8ex", pl = "20ex", bl = "38ex", gl = "56ex", ml = "44px", vl = "40px", hl = "1020px", Sl = "100%", yl = "50%", xl = "33.333%", $l = "25%", Tl = "20%", Pl = "320px", El = "641px", Cl = "1025px", Fl = "1280px", Bl = "960px", wl = "32px", kl = "16px", zl = "#d5281b", Ll = "#d5281b", Ml = "#ffffff", Hl = "#007f3b", Wl = "#007f3b", Dl = "#ffffff", Rl = "#ffeb3b", Il = "#ffeb3b", Al = "#212b32", Ol = "#005eb8", Nl = "#005eb8", _l = "#ffffff", jl = "#d8dde0", Kl = "#aeb7bd", Vl = "#768692", Gl = "0 4px 0 #004021", Ul = "0 4px 0 #005eb8", Yl = "0 4px 0 #6a140e", Xl = "0 4px 0 #ffeb3b", ql = "none", Jl = "0 2px 4px rgba(0, 0, 0, 0.1)", Ql = "4px", Zl = "0px", ec = "solid", tc = "0 0 0 3px #ffeb3b", nc = "0 0 0 3px #ffeb3b", oc = "none", rc = "0 1px 3px rgba(0, 0, 0, 0.12)", ic = "0 2px 6px rgba(0, 0, 0, 0.16)", ac = "0 4px 12px rgba(0, 0, 0, 0.20)", Ho = "0", Wo = "4px", Do = "8px", Ro = "16px", Io = "24px", Ao = "32px", Oo = "40px", No = "48px", _o = "56px", jo = "64px", Mt = "0", Ht = "0", Wt = "4px", Dt = "4px", Rt = "8px", It = "8px", At = "8px", Ot = "16px", Nt = "16px", _t = "24px", jt = "24px", Kt = "32px", Vt = "32px", Gt = "40px", Ut = "40px", Yt = "48px", Xt = "48px", qt = "56px", Jt = "56px", Qt = "64px", _e = "Frutiger W01", je = "Arial, Helvetica, sans-serif", Ke = "sans-serif", Ve = "400", Ge = "600", Ue = "400", Ye = "12px", Xe = "14px", qe = "12pt", Je = "14px", Qe = "16px", Ze = "12pt", et = "16px", tt = "19px", nt = "13pt", ot = "19px", rt = "22px", it = "15pt", at = "22px", st = "26px", lt = "17pt", ct = "27px", ut = "36px", dt = "20pt", ft = "33px", pt = "48px", bt = "24pt", Zt = "16px", en = "24px", J = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Q = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Z = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ee = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, te = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, re = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ie = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, sc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Ei,
  AnimationDurationNormal: Ci,
  AnimationDurationSlow: Fi,
  AnimationEasingBounce: zi,
  AnimationEasingEaseIn: Bi,
  AnimationEasingEaseInOut: ki,
  AnimationEasingEaseOut: wi,
  BorderColorCard: to,
  BorderColorCardHover: no,
  BorderColorDefault: Zn,
  BorderColorError: oo,
  BorderColorForm: eo,
  BorderRadiusLarge: Gi,
  BorderRadiusMedium: Vi,
  BorderRadiusNone: ji,
  BorderRadiusSmall: Ki,
  BorderWidthCardBottom: Ai,
  BorderWidthDefault: Di,
  BorderWidthFormElement: Ri,
  BorderWidthFormElementError: Ii,
  BorderWidthPanel: Oi,
  BorderWidthTableCell: _i,
  BorderWidthTableHeader: Ni,
  BreakpointDesktop: Cl,
  BreakpointLargeDesktop: Fl,
  BreakpointMobile: Pl,
  BreakpointTablet: El,
  ButtonBorderRadius: xs,
  ButtonBorderWidth: ys,
  ButtonPrimaryBackgroundActive: ls,
  ButtonPrimaryBackgroundDefault: as,
  ButtonPrimaryBackgroundDisabled: cs,
  ButtonPrimaryBackgroundHover: ss,
  ButtonPrimaryBorderDefault: fs,
  ButtonPrimaryBorderFocus: ps,
  ButtonPrimaryTextDefault: us,
  ButtonPrimaryTextDisabled: ds,
  ButtonSecondaryBackgroundActive: vs,
  ButtonSecondaryBackgroundDefault: bs,
  ButtonSecondaryBackgroundHover: ms,
  ButtonSecondaryBackgroundSolid: gs,
  ButtonSecondaryBorderDefault: Ss,
  ButtonSecondaryTextDefault: hs,
  ButtonShadowSize: $s,
  ButtonSpacingPaddingHorizontalDesktop: Co,
  ButtonSpacingPaddingHorizontalMobile: Po,
  ButtonSpacingPaddingVerticalDesktop: Eo,
  ButtonSpacingPaddingVerticalMobile: To,
  ButtonTypographyWeight: Ts,
  CardBackgroundDefault: Ps,
  CardBorderBottom: Fs,
  CardBorderDefault: Es,
  CardBorderHover: Cs,
  CardBorderWidthBottom: Ls,
  CardBorderWidthDefault: zs,
  CardShadowDefault: Ms,
  CardShadowHover: Hs,
  CardSpacingHeadingMargin: wo,
  CardSpacingPaddingDesktop: Bo,
  CardSpacingPaddingMobile: Fo,
  CardTextDescription: ws,
  CardTextHeading: Bs,
  CardTextLink: ks,
  ColorBorderDefault: oa,
  ColorBorderSecondary: ra,
  ColorButtonLoginActive: za,
  ColorButtonLoginBackground: wa,
  ColorButtonLoginHover: ka,
  ColorButtonLoginShadow: La,
  ColorButtonPrimaryActive: da,
  ColorButtonPrimaryBackground: la,
  ColorButtonPrimaryHover: ua,
  ColorButtonPrimaryShadow: fa,
  ColorButtonPrimaryText: ca,
  ColorButtonReverseActive: Ta,
  ColorButtonReverseBackground: ya,
  ColorButtonReverseHover: $a,
  ColorButtonReverseShadow: Pa,
  ColorButtonReverseText: xa,
  ColorButtonSecondaryActive: ha,
  ColorButtonSecondaryBackground: pa,
  ColorButtonSecondaryBackgroundSolid: ba,
  ColorButtonSecondaryBorder: ga,
  ColorButtonSecondaryHover: va,
  ColorButtonSecondaryShadow: Sa,
  ColorButtonSecondaryText: ma,
  ColorButtonWarningActive: Fa,
  ColorButtonWarningBackground: Ea,
  ColorButtonWarningHover: Ca,
  ColorButtonWarningShadow: Ba,
  ColorError: ia,
  ColorFocusBackground: ta,
  ColorFocusText: na,
  ColorFormBackground: sa,
  ColorFormBorder: aa,
  ColorGrey1: ho,
  ColorGrey2: So,
  ColorGrey3: yo,
  ColorGrey4: xo,
  ColorGrey5: $o,
  ColorLinkActive: Zi,
  ColorLinkDefault: Ji,
  ColorLinkHover: Qi,
  ColorLinkVisited: ea,
  ColorPrimaryBlack: ao,
  ColorPrimaryBlue: ro,
  ColorPrimaryDarkPink: co,
  ColorPrimaryGreen: so,
  ColorPrimaryPurple: lo,
  ColorPrimaryRed: uo,
  ColorPrimaryWhite: io,
  ColorPrimaryYellow: fo,
  ColorSecondaryAquaGreen: mo,
  ColorSecondaryOrange: go,
  ColorSecondaryPaleYellow: po,
  ColorSecondaryPink: vo,
  ColorSecondaryWarmYellow: bo,
  ColorTextPrimary: Ui,
  ColorTextPrint: qi,
  ColorTextReverse: Xi,
  ColorTextSecondary: Yi,
  ComponentBlur: ts,
  ComponentBreadcrumbChevronMarginLeft: Ua,
  ComponentBreadcrumbChevronMarginRight: Ya,
  ComponentBreadcrumbPaddingTopDesktop: qa,
  ComponentBreadcrumbPaddingTopMobile: Xa,
  ComponentButtonPaddingDesktopHorizontal: Da,
  ComponentButtonPaddingDesktopVertical: Wa,
  ComponentButtonPaddingMobileHorizontal: Ha,
  ComponentButtonPaddingMobileVertical: Ma,
  ComponentButtonShadowSize: Ra,
  ComponentCardHeadingMargin: Ka,
  ComponentCardPaddingDesktop: ja,
  ComponentCardPaddingMobile: _a,
  ComponentDetails: os,
  ComponentExpander: rs,
  ComponentFormCheckboxLabelPadding: Na,
  ComponentFormCheckboxSize: Oa,
  ComponentFormInputMinHeight: Ia,
  ComponentFormInputPadding: Aa,
  ComponentLink: ns,
  ComponentPagination: is,
  ComponentPanelPaddingDesktop: Ga,
  ComponentPanelPaddingMobile: Va,
  ComponentSpread: es,
  ComponentSummaryListCellPaddingHorizontal: Qa,
  ComponentSummaryListCellPaddingVertical: Ja,
  ComponentSummaryListRowMargin: Za,
  ElevationHigh: ac,
  ElevationLow: rc,
  ElevationMedium: ic,
  ElevationNone: oc,
  FocusOutlineOffset: Zl,
  FocusOutlineStyle: ec,
  FocusOutlineWidth: Ql,
  FocusShadowButton: nc,
  FocusShadowInput: tc,
  FontFamilyBase: _e,
  FontFamilyFallback: je,
  FontFamilyPrint: Ke,
  FontLineHeightBase: en,
  FontSize14Mobile: Ye,
  FontSize14Print: qe,
  FontSize14Tablet: Xe,
  FontSize16Mobile: Je,
  FontSize16Print: Ze,
  FontSize16Tablet: Qe,
  FontSize19Mobile: et,
  FontSize19Print: nt,
  FontSize19Tablet: tt,
  FontSize22Mobile: ot,
  FontSize22Print: it,
  FontSize22Tablet: rt,
  FontSize26Mobile: at,
  FontSize26Print: lt,
  FontSize26Tablet: st,
  FontSize36Mobile: ct,
  FontSize36Print: dt,
  FontSize36Tablet: ut,
  FontSize48Mobile: ft,
  FontSize48Print: bt,
  FontSize48Tablet: pt,
  FontSizeBase: Zt,
  FontWeightBold: Ge,
  FontWeightLight: Ue,
  FontWeightNormal: Ve,
  FormBorderRadius: el,
  FormBorderWidthDefault: Qs,
  FormBorderWidthError: Zs,
  FormErrorTextDefault: Xs,
  FormErrorTypographyWeight: qs,
  FormHintTextDefault: Js,
  FormInputBackgroundDefault: Ws,
  FormInputBackgroundDisabled: Rs,
  FormInputBackgroundError: Is,
  FormInputBackgroundFocus: Ds,
  FormInputBorderDefault: As,
  FormInputBorderDisabled: _s,
  FormInputBorderError: Ns,
  FormInputBorderFocus: Os,
  FormInputTextDefault: js,
  FormInputTextDisabled: Vs,
  FormInputTextPlaceholder: Ks,
  FormLabelTextDefault: Gs,
  FormLabelTextRequired: Us,
  FormLabelTypographyWeight: Ys,
  FormSpacingCheckboxLabelPadding: Mo,
  FormSpacingCheckboxSize: Lo,
  FormSpacingInputMinHeight: zo,
  FormSpacingInputPadding: ko,
  GridGutter: wl,
  GridGutterHalf: kl,
  GridPageWidth: Bl,
  HeadingsNhsukHeadingL: Q,
  HeadingsNhsukHeadingM: Z,
  HeadingsNhsukHeadingS: ee,
  HeadingsNhsukHeadingXl: J,
  HeadingsNhsukHeadingXs: te,
  LayoutColumnActions: Tl,
  LayoutColumnFull: Sl,
  LayoutColumnHalf: yl,
  LayoutColumnQuarter: $l,
  LayoutColumnThird: xl,
  LayoutContainerMaxWidth: hl,
  ParagraphsBody: ne,
  ParagraphsBodyLarge: oe,
  ParagraphsBodySmall: re,
  ParagraphsLedeText: ie,
  ParagraphsLedeTextSmall: ae,
  ShadowButtonDefault: Gl,
  ShadowButtonFocus: Xl,
  ShadowButtonSecondary: Ul,
  ShadowButtonWarning: Yl,
  ShadowCardDefault: ql,
  ShadowCardHover: Jl,
  SizeButtonMinHeightDesktop: vl,
  SizeButtonMinHeightMobile: ml,
  SizeFormControlLarge: ll,
  SizeFormControlMedium: sl,
  SizeFormControlSmall: al,
  SizeFormInputWidth2xl: bl,
  SizeFormInputWidth3xl: gl,
  SizeFormInputWidthLg: fl,
  SizeFormInputWidthMd: dl,
  SizeFormInputWidthSm: ul,
  SizeFormInputWidthXl: pl,
  SizeFormInputWidthXs: cl,
  SizeIconExtraLarge: rl,
  SizeIconLarge: ol,
  SizeIconMedium: nl,
  SizeIconNhsDefault: il,
  SizeIconSmall: tl,
  Spacing0: Ho,
  Spacing1: Wo,
  Spacing2: Do,
  Spacing3: Ro,
  Spacing4: Io,
  Spacing5: Ao,
  Spacing6: Oo,
  Spacing7: No,
  Spacing8: _o,
  Spacing9: jo,
  SpacingResponsive0Mobile: Mt,
  SpacingResponsive0Tablet: Ht,
  SpacingResponsive1Mobile: Wt,
  SpacingResponsive1Tablet: Dt,
  SpacingResponsive2Mobile: Rt,
  SpacingResponsive2Tablet: It,
  SpacingResponsive3Mobile: At,
  SpacingResponsive3Tablet: Ot,
  SpacingResponsive4Mobile: Nt,
  SpacingResponsive4Tablet: _t,
  SpacingResponsive5Mobile: jt,
  SpacingResponsive5Tablet: Kt,
  SpacingResponsive6Mobile: Vt,
  SpacingResponsive6Tablet: Gt,
  SpacingResponsive7Mobile: Ut,
  SpacingResponsive7Tablet: Yt,
  SpacingResponsive8Mobile: Xt,
  SpacingResponsive8Tablet: qt,
  SpacingResponsive9Mobile: Jt,
  SpacingResponsive9Tablet: Qt,
  StateDisabledBackground: jl,
  StateDisabledBorder: Kl,
  StateDisabledText: Vl,
  StateErrorBackground: zl,
  StateErrorBorder: Ll,
  StateErrorText: Ml,
  StateInfoBackground: Ol,
  StateInfoBorder: Nl,
  StateInfoText: _l,
  StateSuccessBackground: Hl,
  StateSuccessBorder: Wl,
  StateSuccessText: Dl,
  StateWarningBackground: Rl,
  StateWarningBorder: Il,
  StateWarningText: Al,
  TransitionButtonDefault: Li,
  TransitionButtonShadow: Mi,
  TransitionCardHover: Wi,
  TransitionInputFocus: Hi
}, Symbol.toStringTag, { value: "Module" })), fc = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), pc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: J.fontFamily,
      fontWeight: J.fontWeight,
      fontSize: J.fontSize.mobile,
      lineHeight: J.lineHeight,
      marginTop: J.marginTop,
      marginBottom: J.marginBottom.mobile,
      ...n
    },
    children: e
  }
), bc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Q.fontFamily,
      fontWeight: Q.fontWeight,
      fontSize: Q.fontSize.mobile,
      lineHeight: Q.lineHeight,
      marginTop: Q.marginTop,
      marginBottom: Q.marginBottom.mobile,
      ...n
    },
    children: e
  }
), gc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Z.fontFamily,
      fontWeight: Z.fontWeight,
      fontSize: Z.fontSize.mobile,
      lineHeight: Z.lineHeight,
      marginTop: Z.marginTop,
      marginBottom: Z.marginBottom.mobile,
      ...n
    },
    children: e
  }
), mc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: ee.fontFamily,
      fontWeight: ee.fontWeight,
      fontSize: ee.fontSize.mobile,
      lineHeight: ee.lineHeight,
      marginTop: ee.marginTop,
      marginBottom: ee.marginBottom.mobile,
      ...n
    },
    children: e
  }
), vc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: te.fontFamily,
      fontWeight: te.fontWeight,
      fontSize: te.fontSize.mobile,
      lineHeight: te.lineHeight,
      marginTop: te.marginTop,
      marginBottom: te.marginBottom.mobile,
      ...n
    },
    children: e
  }
), hc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ne.fontFamily,
      fontWeight: ne.fontWeight,
      fontSize: ne.fontSize.mobile,
      lineHeight: ne.lineHeight,
      marginTop: ne.marginTop,
      marginBottom: ne.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Sc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: oe.fontFamily,
      fontWeight: oe.fontWeight,
      fontSize: oe.fontSize.mobile,
      lineHeight: oe.lineHeight,
      marginTop: oe.marginTop,
      marginBottom: oe.marginBottom.mobile,
      ...n
    },
    children: e
  }
), yc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: re.fontFamily,
      fontWeight: re.fontWeight,
      fontSize: re.fontSize.mobile,
      lineHeight: re.lineHeight,
      marginTop: re.marginTop,
      marginBottom: re.marginBottom.mobile,
      ...n
    },
    children: e
  }
), xc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ie.fontFamily,
      fontWeight: ie.fontWeight,
      fontSize: ie.fontSize.mobile,
      lineHeight: ie.lineHeight,
      marginTop: ie.marginTop,
      marginBottom: ie.marginBottom.mobile,
      ...n
    },
    children: e
  }
), $c = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ _.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ae.fontFamily,
      fontWeight: ae.fontWeight,
      fontSize: ae.fontSize.mobile,
      lineHeight: ae.lineHeight,
      marginTop: ae.marginTop,
      marginBottom: ae.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Tc = () => O(() => sc, []), Pc = () => O(() => ({
  // Border colors
  BorderColorDefault: Zn,
  BorderColorForm: eo,
  BorderColorCard: to,
  BorderColorCardHover: no,
  BorderColorError: oo,
  // Primary colors
  ColorPrimaryBlue: ro,
  ColorPrimaryWhite: io,
  ColorPrimaryBlack: ao,
  ColorPrimaryGreen: so,
  ColorPrimaryPurple: lo,
  ColorPrimaryDarkPink: co,
  ColorPrimaryRed: uo,
  ColorPrimaryYellow: fo,
  // Secondary colors
  ColorSecondaryPaleYellow: po,
  ColorSecondaryWarmYellow: bo,
  ColorSecondaryOrange: go,
  ColorSecondaryAquaGreen: mo,
  ColorSecondaryPink: vo,
  // Grey scale
  ColorGrey1: ho,
  ColorGrey2: So,
  ColorGrey3: yo,
  ColorGrey4: xo,
  ColorGrey5: $o
}), []), Ec = () => O(() => ({
  Spacing0: Ho,
  Spacing1: Wo,
  Spacing2: Do,
  Spacing3: Ro,
  Spacing4: Io,
  Spacing5: Ao,
  Spacing6: Oo,
  Spacing7: No,
  Spacing8: _o,
  Spacing9: jo
}), []), Cc = () => O(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Ye,
    Size16: Je,
    Size19: et,
    Size22: ot,
    Size26: at,
    Size36: ct,
    Size48: ft
  },
  Tablet: {
    Size14: Xe,
    Size16: Qe,
    Size19: tt,
    Size22: rt,
    Size26: st,
    Size36: ut,
    Size48: pt
  },
  Print: {
    Size14: qe,
    Size16: Ze,
    Size19: nt,
    Size22: it,
    Size26: lt,
    Size36: dt,
    Size48: bt
  },
  Family: {
    Base: _e,
    Fallback: je,
    Print: Ke
  },
  Weight: {
    Normal: Ve,
    Bold: Ge,
    Light: Ue
  },
  Base: {
    Size: Zt,
    LineHeight: en
  },
  // Backward compatibility - individual exports
  FontFamilyBase: _e,
  FontFamilyFallback: je,
  FontFamilyPrint: Ke,
  FontWeightNormal: Ve,
  FontWeightBold: Ge,
  FontWeightLight: Ue,
  FontSize14Mobile: Ye,
  FontSize14Tablet: Xe,
  FontSize14Print: qe,
  FontSize16Mobile: Je,
  FontSize16Tablet: Qe,
  FontSize16Print: Ze,
  FontSize19Mobile: et,
  FontSize19Tablet: tt,
  FontSize19Print: nt,
  FontSize22Mobile: ot,
  FontSize22Tablet: rt,
  FontSize22Print: it,
  FontSize26Mobile: at,
  FontSize26Tablet: st,
  FontSize26Print: lt,
  FontSize36Mobile: ct,
  FontSize36Tablet: ut,
  FontSize36Print: dt,
  FontSize48Mobile: ft,
  FontSize48Tablet: pt,
  FontSize48Print: bt,
  FontSizeBase: Zt,
  FontLineHeightBase: en
}), []), Fc = () => O(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Mt,
    Size1: Wt,
    Size2: Rt,
    Size3: At,
    Size4: Nt,
    Size5: jt,
    Size6: Vt,
    Size7: Ut,
    Size8: Xt,
    Size9: Jt
  },
  Tablet: {
    Size0: Ht,
    Size1: Dt,
    Size2: It,
    Size3: Ot,
    Size4: _t,
    Size5: Kt,
    Size6: Gt,
    Size7: Yt,
    Size8: qt,
    Size9: Qt
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Mt,
  SpacingResponsive0Tablet: Ht,
  SpacingResponsive1Mobile: Wt,
  SpacingResponsive1Tablet: Dt,
  SpacingResponsive2Mobile: Rt,
  SpacingResponsive2Tablet: It,
  SpacingResponsive3Mobile: At,
  SpacingResponsive3Tablet: Ot,
  SpacingResponsive4Mobile: Nt,
  SpacingResponsive4Tablet: _t,
  SpacingResponsive5Mobile: jt,
  SpacingResponsive5Tablet: Kt,
  SpacingResponsive6Mobile: Vt,
  SpacingResponsive6Tablet: Gt,
  SpacingResponsive7Mobile: Ut,
  SpacingResponsive7Tablet: Yt,
  SpacingResponsive8Mobile: Xt,
  SpacingResponsive8Tablet: qt,
  SpacingResponsive9Mobile: Jt,
  SpacingResponsive9Tablet: Qt
}), []), Bc = () => O(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: To,
  ButtonSpacingPaddingHorizontalMobile: Po,
  ButtonSpacingPaddingVerticalDesktop: Eo,
  ButtonSpacingPaddingHorizontalDesktop: Co,
  // Card spacing	
  CardSpacingPaddingMobile: Fo,
  CardSpacingPaddingDesktop: Bo,
  CardSpacingHeadingMargin: wo,
  // Form spacing
  FormSpacingInputPadding: ko,
  FormSpacingInputMinHeight: zo,
  FormSpacingCheckboxSize: Lo,
  FormSpacingCheckboxLabelPadding: Mo
}), []), wc = () => O(() => ({
  xl: J,
  l: Q,
  m: Z,
  s: ee,
  xs: te
}), []), kc = () => O(() => ({
  body: ne,
  bodyLarge: oe,
  bodySmall: re,
  ledeText: ie,
  ledeTextSmall: ae
}), []), zc = () => O(() => ({
  headings: {
    xl: J,
    l: Q,
    m: Z,
    s: ee,
    xs: te
  },
  paragraphs: {
    body: ne,
    bodyLarge: oe,
    bodySmall: re,
    ledeText: ie,
    ledeTextSmall: ae
  },
  fonts: {
    family: {
      base: _e,
      fallback: je,
      print: Ke
    },
    weight: {
      normal: Ve,
      bold: Ge,
      light: Ue
    },
    sizes: {
      mobile: {
        size14: Ye,
        size16: Je,
        size19: et,
        size22: ot,
        size26: at,
        size36: ct,
        size48: ft
      },
      tablet: {
        size14: Xe,
        size16: Qe,
        size19: tt,
        size22: rt,
        size26: st,
        size36: ut,
        size48: pt
      },
      print: {
        size14: qe,
        size16: Ze,
        size19: nt,
        size22: it,
        size26: lt,
        size36: dt,
        size48: bt
      }
    }
  }
}), []), Ko = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, R = {
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
function Lc(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Ko, ...e }, o = [];
  return n?.includes(400) && o.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${R.normal.eot}?#iefix") format("eot"),
       url("${t}${R.normal.woff2}") format("woff2"),
       url("${t}${R.normal.woff}") format("woff"),
       url("${t}${R.normal.ttf}") format("truetype");
  src: url("${t}${R.normal.eot}");
}`), n?.includes(600) && o.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${R.bold.eot}?#iefix") format("eot"),
       url("${t}${R.bold.woff2}") format("woff2"),
       url("${t}${R.bold.woff}") format("woff"),
       url("${t}${R.bold.ttf}") format("truetype");
  src: url("${t}${R.bold.eot}");
}`), o.join(`
`);
}
function Mc(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Ko, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${R.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${R.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${R.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${R.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((r) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = r.href, s.as = r.as, s.type = r.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Hc = '"Frutiger W01", Arial, Helvetica, sans-serif', Wc = "Arial, Helvetica, sans-serif";
async function Dc() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Ei as AnimationDurationFast,
  Ci as AnimationDurationNormal,
  Fi as AnimationDurationSlow,
  zi as AnimationEasingBounce,
  Bi as AnimationEasingEaseIn,
  ki as AnimationEasingEaseInOut,
  wi as AnimationEasingEaseOut,
  to as BorderColorCard,
  no as BorderColorCardHover,
  Zn as BorderColorDefault,
  oo as BorderColorError,
  eo as BorderColorForm,
  Gi as BorderRadiusLarge,
  Vi as BorderRadiusMedium,
  ji as BorderRadiusNone,
  Ki as BorderRadiusSmall,
  Ai as BorderWidthCardBottom,
  Di as BorderWidthDefault,
  Ri as BorderWidthFormElement,
  Ii as BorderWidthFormElementError,
  Oi as BorderWidthPanel,
  _i as BorderWidthTableCell,
  Ni as BorderWidthTableHeader,
  Cl as BreakpointDesktop,
  Fl as BreakpointLargeDesktop,
  Pl as BreakpointMobile,
  El as BreakpointTablet,
  xi as Button,
  xs as ButtonBorderRadius,
  ys as ButtonBorderWidth,
  ls as ButtonPrimaryBackgroundActive,
  as as ButtonPrimaryBackgroundDefault,
  cs as ButtonPrimaryBackgroundDisabled,
  ss as ButtonPrimaryBackgroundHover,
  fs as ButtonPrimaryBorderDefault,
  ps as ButtonPrimaryBorderFocus,
  us as ButtonPrimaryTextDefault,
  ds as ButtonPrimaryTextDisabled,
  vs as ButtonSecondaryBackgroundActive,
  bs as ButtonSecondaryBackgroundDefault,
  ms as ButtonSecondaryBackgroundHover,
  gs as ButtonSecondaryBackgroundSolid,
  Ss as ButtonSecondaryBorderDefault,
  hs as ButtonSecondaryTextDefault,
  $s as ButtonShadowSize,
  Co as ButtonSpacingPaddingHorizontalDesktop,
  Po as ButtonSpacingPaddingHorizontalMobile,
  Eo as ButtonSpacingPaddingVerticalDesktop,
  To as ButtonSpacingPaddingVerticalMobile,
  Ts as ButtonTypographyWeight,
  Ps as CardBackgroundDefault,
  Fs as CardBorderBottom,
  Es as CardBorderDefault,
  Cs as CardBorderHover,
  Ls as CardBorderWidthBottom,
  zs as CardBorderWidthDefault,
  Ms as CardShadowDefault,
  Hs as CardShadowHover,
  wo as CardSpacingHeadingMargin,
  Bo as CardSpacingPaddingDesktop,
  Fo as CardSpacingPaddingMobile,
  ws as CardTextDescription,
  Bs as CardTextHeading,
  ks as CardTextLink,
  oa as ColorBorderDefault,
  ra as ColorBorderSecondary,
  za as ColorButtonLoginActive,
  wa as ColorButtonLoginBackground,
  ka as ColorButtonLoginHover,
  La as ColorButtonLoginShadow,
  da as ColorButtonPrimaryActive,
  la as ColorButtonPrimaryBackground,
  ua as ColorButtonPrimaryHover,
  fa as ColorButtonPrimaryShadow,
  ca as ColorButtonPrimaryText,
  Ta as ColorButtonReverseActive,
  ya as ColorButtonReverseBackground,
  $a as ColorButtonReverseHover,
  Pa as ColorButtonReverseShadow,
  xa as ColorButtonReverseText,
  ha as ColorButtonSecondaryActive,
  pa as ColorButtonSecondaryBackground,
  ba as ColorButtonSecondaryBackgroundSolid,
  ga as ColorButtonSecondaryBorder,
  va as ColorButtonSecondaryHover,
  Sa as ColorButtonSecondaryShadow,
  ma as ColorButtonSecondaryText,
  Fa as ColorButtonWarningActive,
  Ea as ColorButtonWarningBackground,
  Ca as ColorButtonWarningHover,
  Ba as ColorButtonWarningShadow,
  ia as ColorError,
  ta as ColorFocusBackground,
  na as ColorFocusText,
  sa as ColorFormBackground,
  aa as ColorFormBorder,
  ho as ColorGrey1,
  So as ColorGrey2,
  yo as ColorGrey3,
  xo as ColorGrey4,
  $o as ColorGrey5,
  Zi as ColorLinkActive,
  Ji as ColorLinkDefault,
  Qi as ColorLinkHover,
  ea as ColorLinkVisited,
  ao as ColorPrimaryBlack,
  ro as ColorPrimaryBlue,
  co as ColorPrimaryDarkPink,
  so as ColorPrimaryGreen,
  lo as ColorPrimaryPurple,
  uo as ColorPrimaryRed,
  io as ColorPrimaryWhite,
  fo as ColorPrimaryYellow,
  mo as ColorSecondaryAquaGreen,
  go as ColorSecondaryOrange,
  po as ColorSecondaryPaleYellow,
  vo as ColorSecondaryPink,
  bo as ColorSecondaryWarmYellow,
  Ui as ColorTextPrimary,
  qi as ColorTextPrint,
  Xi as ColorTextReverse,
  Yi as ColorTextSecondary,
  ts as ComponentBlur,
  Ua as ComponentBreadcrumbChevronMarginLeft,
  Ya as ComponentBreadcrumbChevronMarginRight,
  qa as ComponentBreadcrumbPaddingTopDesktop,
  Xa as ComponentBreadcrumbPaddingTopMobile,
  Da as ComponentButtonPaddingDesktopHorizontal,
  Wa as ComponentButtonPaddingDesktopVertical,
  Ha as ComponentButtonPaddingMobileHorizontal,
  Ma as ComponentButtonPaddingMobileVertical,
  Ra as ComponentButtonShadowSize,
  Ka as ComponentCardHeadingMargin,
  ja as ComponentCardPaddingDesktop,
  _a as ComponentCardPaddingMobile,
  os as ComponentDetails,
  rs as ComponentExpander,
  Na as ComponentFormCheckboxLabelPadding,
  Oa as ComponentFormCheckboxSize,
  Ia as ComponentFormInputMinHeight,
  Aa as ComponentFormInputPadding,
  ns as ComponentLink,
  is as ComponentPagination,
  Ga as ComponentPanelPaddingDesktop,
  Va as ComponentPanelPaddingMobile,
  es as ComponentSpread,
  Qa as ComponentSummaryListCellPaddingHorizontal,
  Ja as ComponentSummaryListCellPaddingVertical,
  Za as ComponentSummaryListRowMargin,
  Ko as DEFAULT_FONT_CONFIG,
  ac as ElevationHigh,
  rc as ElevationLow,
  ic as ElevationMedium,
  oc as ElevationNone,
  R as FRUTIGER_FONT_FILES,
  Zl as FocusOutlineOffset,
  ec as FocusOutlineStyle,
  Ql as FocusOutlineWidth,
  nc as FocusShadowButton,
  tc as FocusShadowInput,
  _e as FontFamilyBase,
  je as FontFamilyFallback,
  Ke as FontFamilyPrint,
  en as FontLineHeightBase,
  Ye as FontSize14Mobile,
  qe as FontSize14Print,
  Xe as FontSize14Tablet,
  Je as FontSize16Mobile,
  Ze as FontSize16Print,
  Qe as FontSize16Tablet,
  et as FontSize19Mobile,
  nt as FontSize19Print,
  tt as FontSize19Tablet,
  ot as FontSize22Mobile,
  it as FontSize22Print,
  rt as FontSize22Tablet,
  at as FontSize26Mobile,
  lt as FontSize26Print,
  st as FontSize26Tablet,
  ct as FontSize36Mobile,
  dt as FontSize36Print,
  ut as FontSize36Tablet,
  ft as FontSize48Mobile,
  bt as FontSize48Print,
  pt as FontSize48Tablet,
  Zt as FontSizeBase,
  Ge as FontWeightBold,
  Ue as FontWeightLight,
  Ve as FontWeightNormal,
  el as FormBorderRadius,
  Qs as FormBorderWidthDefault,
  Zs as FormBorderWidthError,
  Xs as FormErrorTextDefault,
  qs as FormErrorTypographyWeight,
  Js as FormHintTextDefault,
  Ws as FormInputBackgroundDefault,
  Rs as FormInputBackgroundDisabled,
  Is as FormInputBackgroundError,
  Ds as FormInputBackgroundFocus,
  As as FormInputBorderDefault,
  _s as FormInputBorderDisabled,
  Ns as FormInputBorderError,
  Os as FormInputBorderFocus,
  js as FormInputTextDefault,
  Vs as FormInputTextDisabled,
  Ks as FormInputTextPlaceholder,
  Gs as FormLabelTextDefault,
  Us as FormLabelTextRequired,
  Ys as FormLabelTypographyWeight,
  Mo as FormSpacingCheckboxLabelPadding,
  Lo as FormSpacingCheckboxSize,
  zo as FormSpacingInputMinHeight,
  ko as FormSpacingInputPadding,
  wl as GridGutter,
  kl as GridGutterHalf,
  Bl as GridPageWidth,
  Q as HeadingsNhsukHeadingL,
  Z as HeadingsNhsukHeadingM,
  ee as HeadingsNhsukHeadingS,
  J as HeadingsNhsukHeadingXl,
  te as HeadingsNhsukHeadingXs,
  Tl as LayoutColumnActions,
  Sl as LayoutColumnFull,
  yl as LayoutColumnHalf,
  $l as LayoutColumnQuarter,
  xl as LayoutColumnThird,
  hl as LayoutContainerMaxWidth,
  hc as NHSBodyText,
  Sc as NHSBodyTextLarge,
  yc as NHSBodyTextSmall,
  pc as NHSHeading1,
  bc as NHSHeading2,
  gc as NHSHeading3,
  mc as NHSHeading4,
  vc as NHSHeading5,
  xc as NHSLedeText,
  $c as NHSLedeTextSmall,
  dc as NHSThemeProvider,
  Wc as NHS_FALLBACK_FONT_STACK,
  Hc as NHS_FONT_STACK,
  ne as ParagraphsBody,
  oe as ParagraphsBodyLarge,
  re as ParagraphsBodySmall,
  ie as ParagraphsLedeText,
  ae as ParagraphsLedeTextSmall,
  Gl as ShadowButtonDefault,
  Xl as ShadowButtonFocus,
  Ul as ShadowButtonSecondary,
  Yl as ShadowButtonWarning,
  ql as ShadowCardDefault,
  Jl as ShadowCardHover,
  vl as SizeButtonMinHeightDesktop,
  ml as SizeButtonMinHeightMobile,
  ll as SizeFormControlLarge,
  sl as SizeFormControlMedium,
  al as SizeFormControlSmall,
  bl as SizeFormInputWidth2xl,
  gl as SizeFormInputWidth3xl,
  fl as SizeFormInputWidthLg,
  dl as SizeFormInputWidthMd,
  ul as SizeFormInputWidthSm,
  pl as SizeFormInputWidthXl,
  cl as SizeFormInputWidthXs,
  rl as SizeIconExtraLarge,
  ol as SizeIconLarge,
  nl as SizeIconMedium,
  il as SizeIconNhsDefault,
  tl as SizeIconSmall,
  Ho as Spacing0,
  Wo as Spacing1,
  Do as Spacing2,
  Ro as Spacing3,
  Io as Spacing4,
  Ao as Spacing5,
  Oo as Spacing6,
  No as Spacing7,
  _o as Spacing8,
  jo as Spacing9,
  Mt as SpacingResponsive0Mobile,
  Ht as SpacingResponsive0Tablet,
  Wt as SpacingResponsive1Mobile,
  Dt as SpacingResponsive1Tablet,
  Rt as SpacingResponsive2Mobile,
  It as SpacingResponsive2Tablet,
  At as SpacingResponsive3Mobile,
  Ot as SpacingResponsive3Tablet,
  Nt as SpacingResponsive4Mobile,
  _t as SpacingResponsive4Tablet,
  jt as SpacingResponsive5Mobile,
  Kt as SpacingResponsive5Tablet,
  Vt as SpacingResponsive6Mobile,
  Gt as SpacingResponsive6Tablet,
  Ut as SpacingResponsive7Mobile,
  Yt as SpacingResponsive7Tablet,
  Xt as SpacingResponsive8Mobile,
  qt as SpacingResponsive8Tablet,
  Jt as SpacingResponsive9Mobile,
  Qt as SpacingResponsive9Tablet,
  jl as StateDisabledBackground,
  Kl as StateDisabledBorder,
  Vl as StateDisabledText,
  zl as StateErrorBackground,
  Ll as StateErrorBorder,
  Ml as StateErrorText,
  Ol as StateInfoBackground,
  Nl as StateInfoBorder,
  _l as StateInfoText,
  Hl as StateSuccessBackground,
  Wl as StateSuccessBorder,
  Dl as StateSuccessText,
  Rl as StateWarningBackground,
  Il as StateWarningBorder,
  Al as StateWarningText,
  Li as TransitionButtonDefault,
  Mi as TransitionButtonShadow,
  Wi as TransitionCardHover,
  Hi as TransitionInputFocus,
  Dc as checkFrutigerLoaded,
  Lc as generateFrutigerFontFace,
  fc as getResponsiveStyles,
  Mc as preloadFrutigerFonts,
  Pc as useColors,
  Bc as useComponentSpacing,
  wc as useNHSHeadings,
  kc as useNHSParagraphs,
  uc as useNHSTheme,
  zc as useNHSTypographySystem,
  Fc as useResponsiveSpacing,
  Ec as useSpacing,
  Tc as useTokens,
  Cc as useTypography
};
//# sourceMappingURL=index.esm.js.map
