import A, { useRef as O, useCallback as G, useState as xe, useContext as pe, useEffect as X, useMemo as N, forwardRef as kn, createContext as gt } from "react";
import { flushSync as Yo } from "react-dom";
function Xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
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
var un;
function qo() {
  if (un) return Ce;
  un = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(o, r, a) {
    var l = null;
    if (a !== void 0 && (l = "" + a), r.key !== void 0 && (l = "" + r.key), "key" in r) {
      a = {};
      for (var c in r)
        c !== "key" && (a[c] = r[c]);
    } else a = r;
    return r = a.ref, {
      $$typeof: e,
      type: o,
      key: l,
      ref: r !== void 0 ? r : null,
      props: a
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
var dn;
function Jo() {
  return dn || (dn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === ht ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case S:
          return "Fragment";
        case P:
          return "Profiler";
        case y:
          return "StrictMode";
        case q:
          return "Suspense";
        case _:
          return "SuspenseList";
        case Ee:
          return "Activity";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case k:
            return "Portal";
          case L:
            return (u.displayName || "Context") + ".Provider";
          case D:
            return (u._context.displayName || "Context") + ".Consumer";
          case R:
            var h = u.render;
            return u = u.displayName, u || (u = h.displayName || h.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case me:
            return h = u.displayName || null, h !== null ? h : e(u.type) || "Memo";
          case ve:
            h = u._payload, u = u._init;
            try {
              return e(u(h));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function n(u) {
      try {
        t(u);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var E = h.error, M = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return E.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(u);
      }
    }
    function o(u) {
      if (u === S) return "<>";
      if (typeof u == "object" && u !== null && u.$$typeof === ve)
        return "<...>";
      try {
        var h = e(u);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function r() {
      var u = i.A;
      return u === null ? null : u.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function l(u) {
      if (b.call(u, "key")) {
        var h = Object.getOwnPropertyDescriptor(u, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function c(u, h) {
      function E() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: E,
        configurable: !0
      });
    }
    function d() {
      var u = e(this.type);
      return s[u] || (s[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function g(u, h, E, M, le, U, St, yt) {
      return E = U.ref, u = {
        $$typeof: B,
        type: u,
        key: h,
        props: U,
        _owner: le
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(u, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: St
      }), Object.defineProperty(u, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: yt
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function p(u, h, E, M, le, U, St, yt) {
      var H = h.children;
      if (H !== void 0)
        if (M)
          if (z(H)) {
            for (M = 0; M < H.length; M++)
              m(H[M]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(H);
      if (b.call(h, "key")) {
        H = e(u);
        var he = Object.keys(h).filter(function(Uo) {
          return Uo !== "key";
        });
        M = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", j[H + M] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          H,
          he,
          H
        ), j[H + M] = !0);
      }
      if (H = null, E !== void 0 && (n(E), H = "" + E), l(h) && (n(h.key), H = "" + h.key), "key" in h) {
        E = {};
        for (var xt in h)
          xt !== "key" && (E[xt] = h[xt]);
      } else E = h;
      return H && c(
        E,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), g(
        u,
        H,
        U,
        le,
        r(),
        E,
        St,
        yt
      );
    }
    function m(u) {
      typeof u == "object" && u !== null && u.$$typeof === B && u._store && (u._store.validated = 1);
    }
    var C = A, B = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), L = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), q = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), me = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), ht = Symbol.for("react.client.reference"), i = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, z = Array.isArray, f = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(u) {
        return u();
      }
    };
    var $, s = {}, v = C["react-stack-bottom-frame"].bind(
      C,
      a
    )(), x = f(o(a)), j = {};
    Fe.Fragment = S, Fe.jsx = function(u, h, E, M, le) {
      var U = 1e4 > i.recentlyCreatedOwnerStacks++;
      return p(
        u,
        h,
        E,
        !1,
        M,
        le,
        U ? Error("react-stack-top-frame") : v,
        U ? f(o(u)) : x
      );
    }, Fe.jsxs = function(u, h, E, M, le) {
      var U = 1e4 > i.recentlyCreatedOwnerStacks++;
      return p(
        u,
        h,
        E,
        !0,
        M,
        le,
        U ? Error("react-stack-top-frame") : v,
        U ? f(o(u)) : x
      );
    };
  }()), Fe;
}
var fn;
function Qo() {
  return fn || (fn = 1, process.env.NODE_ENV === "production" ? Le.exports = qo() : Le.exports = Jo()), Le.exports;
}
var w = Qo();
const mt = typeof document < "u" ? A.useLayoutEffect : () => {
};
var $t;
const Zo = ($t = A.useInsertionEffect) !== null && $t !== void 0 ? $t : mt;
function ue(e) {
  const t = O(null);
  return Zo(() => {
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
}, zn = /* @__PURE__ */ A.createContext(Ie), er = /* @__PURE__ */ A.createContext(!1);
let tr = !!(typeof window < "u" && window.document && window.document.createElement), Tt = /* @__PURE__ */ new WeakMap();
function nr(e = !1) {
  let t = pe(zn), n = O(null);
  if (n.current === null && !e) {
    var o, r;
    let a = (r = A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || r === void 0 || (o = r.ReactCurrentOwner) === null || o === void 0 ? void 0 : o.current;
    if (a) {
      let l = Tt.get(a);
      l == null ? Tt.set(a, {
        id: t.current,
        state: a.memoizedState
      }) : a.memoizedState !== l.state && (t.current = l.id, Tt.delete(a));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function or(e) {
  let t = pe(zn);
  t === Ie && !tr && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = nr(!!e), o = t === Ie && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${o}-${n}`;
}
function rr(e) {
  let t = A.useId(), [n] = xe(cr()), o = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Ie.prefix}`;
  return e || `${o}-${t}`;
}
const ir = typeof A.useId == "function" ? rr : or;
function ar() {
  return !1;
}
function sr() {
  return !0;
}
function lr(e) {
  return () => {
  };
}
function cr() {
  return typeof A.useSyncExternalStore == "function" ? A.useSyncExternalStore(lr, ar, sr) : pe(er);
}
let ur = !!(typeof window < "u" && window.document && window.document.createElement), ye = /* @__PURE__ */ new Map(), Be;
typeof FinalizationRegistry < "u" && (Be = new FinalizationRegistry((e) => {
  ye.delete(e);
}));
function pn(e) {
  let [t, n] = xe(e), o = O(null), r = ir(t), a = O(null);
  if (Be && Be.register(a, r), ur) {
    const l = ye.get(r);
    l && !l.includes(o) ? l.push(o) : ye.set(r, [
      o
    ]);
  }
  return mt(() => {
    let l = r;
    return () => {
      Be && Be.unregister(a), ye.delete(l);
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
function dr(e, t) {
  if (e === t) return e;
  let n = ye.get(e);
  if (n)
    return n.forEach((r) => r.current = t), t;
  let o = ye.get(t);
  return o ? (o.forEach((r) => r.current = e), e) : t;
}
function Ln(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const W = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, V = (e) => e && "window" in e && e.window === e ? e : W(e).defaultView || window;
function fr(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function pr(e) {
  return fr(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let br = !1;
function nn() {
  return br;
}
function F(e, t) {
  if (!nn()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : pr(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const ke = (e = document) => {
  var t;
  if (!nn()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function T(e) {
  return nn() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Mn(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = Mn(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function gr() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = Mn(e)) && (o && (o += " "), o += t);
  return o;
}
function fe(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let o = e[n];
    for (let r in o) {
      let a = t[r], l = o[r];
      typeof a == "function" && typeof l == "function" && // This is a lot faster than a regex.
      r[0] === "o" && r[1] === "n" && r.charCodeAt(2) >= /* 'A' */
      65 && r.charCodeAt(2) <= /* 'Z' */
      90 ? t[r] = Ln(a, l) : (r === "className" || r === "UNSAFE_className") && typeof a == "string" && typeof l == "string" ? t[r] = gr(a, l) : r === "id" && a && l ? t.id = dr(a, l) : t[r] = l !== void 0 ? l : a;
    }
  }
  return t;
}
function mr(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const o = e.map((r) => {
      const a = bn(r, t);
      return n || (n = typeof a == "function"), a;
    });
    if (n) return () => {
      o.forEach((r, a) => {
        typeof r == "function" ? r() : bn(e[a], null);
      });
    };
  };
}
function bn(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const vr = /* @__PURE__ */ new Set([
  "id"
]), hr = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Sr = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), yr = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), gn = /* @__PURE__ */ new Set([
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
]), xr = /^(data-.*)$/;
function Hn(e, t = {}) {
  let { labelable: n, isLink: o, global: r, events: a = r, propNames: l } = t, c = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (vr.has(d) || n && hr.has(d) || o && Sr.has(d) || r && yr.has(d) || a && gn.has(d) || d.endsWith("Capture") && gn.has(d.slice(0, -7)) || l?.has(d) || xr.test(d)) && (c[d] = e[d]);
  return c;
}
function $e(e) {
  if ($r()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Tr(e);
    e.focus(), Pr(t);
  }
}
let Me = null;
function $r() {
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
function Tr(e) {
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
function Pr(e) {
  for (let { element: t, scrollTop: n, scrollLeft: o } of e)
    t.scrollTop = n, t.scrollLeft = o;
}
function vt(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((o) => e.test(o.brand)) || e.test(window.navigator.userAgent);
}
function on(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function se(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Te = se(function() {
  return on(/^Mac/i);
}), Er = se(function() {
  return on(/^iPhone/i);
}), Wn = se(function() {
  return on(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Te() && navigator.maxTouchPoints > 1;
}), rn = se(function() {
  return Er() || Wn();
});
se(function() {
  return Te() || rn();
});
const Cr = se(function() {
  return vt(/AppleWebKit/i) && !Fr();
}), Fr = se(function() {
  return vt(/Chrome/i);
}), Dn = se(function() {
  return vt(/Android/i);
}), Br = se(function() {
  return vt(/Firefox/i);
});
function ze(e, t, n = !0) {
  var o, r;
  let { metaKey: a, ctrlKey: l, altKey: c, shiftKey: d } = t;
  Br() && (!((r = window.event) === null || r === void 0 || (o = r.type) === null || o === void 0) && o.startsWith("key")) && e.target === "_blank" && (Te() ? a = !0 : l = !0);
  let g = Cr() && Te() && !Wn() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: a,
    ctrlKey: l,
    altKey: c,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: a,
    ctrlKey: l,
    altKey: c,
    shiftKey: d,
    bubbles: !0,
    cancelable: !0
  });
  ze.isOpening = n, $e(e), e.dispatchEvent(g), ze.isOpening = !1;
}
ze.isOpening = !1;
let de = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Set();
function mn() {
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
      for (let a of Ft) a();
      Ft.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? mn() : document.addEventListener("DOMContentLoaded", mn));
function wr() {
  for (const [e] of de)
    "isConnected" in e && !e.isConnected && de.delete(e);
}
function Rn(e) {
  requestAnimationFrame(() => {
    wr(), de.size === 0 ? e() : Ft.add(e);
  });
}
function an() {
  let e = O(/* @__PURE__ */ new Map()), t = G((r, a, l, c) => {
    let d = c?.once ? (...g) => {
      e.current.delete(l), l(...g);
    } : l;
    e.current.set(l, {
      type: a,
      eventTarget: r,
      fn: d,
      options: c
    }), r.addEventListener(a, d, c);
  }, []), n = G((r, a, l, c) => {
    var d;
    let g = ((d = e.current.get(l)) === null || d === void 0 ? void 0 : d.fn) || l;
    r.removeEventListener(a, g, c), e.current.delete(l);
  }, []), o = G(() => {
    e.current.forEach((r, a) => {
      n(r.eventTarget, r.type, a, r.options);
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
function kr(e) {
  const t = O(null), n = O(void 0), o = G((r) => {
    if (typeof e == "function") {
      const a = e, l = a(r);
      return () => {
        typeof l == "function" ? l() : a(null);
      };
    } else if (e)
      return e.current = r, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return N(() => ({
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
function In(e, t) {
  mt(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Bt(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Dn() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function zr(e) {
  return !Dn() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const Lr = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Mr(e) {
  const t = V(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: o } = e.style, r = n !== "none" && o !== "hidden" && o !== "collapse";
  if (r) {
    const { getComputedStyle: a } = e.ownerDocument.defaultView;
    let { display: l, visibility: c } = a(e);
    r = l !== "none" && c !== "hidden" && c !== "collapse";
  }
  return r;
}
function Hr(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function An(e, t) {
  return Lr ? e.checkVisibility() : e.nodeName !== "#comment" && Mr(e) && Hr(e, t) && (!e.parentElement || An(e.parentElement, e));
}
const On = [
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
], Wr = On.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
On.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function Dr(e) {
  return e.matches(Wr) && An(e) && !Rr(e);
}
function Rr(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const Ir = Symbol("default");
function Ar(e) {
  let { className: t, style: n, children: o, defaultClassName: r, defaultChildren: a, defaultStyle: l, values: c } = e;
  return N(() => {
    let d, g, p;
    return typeof t == "function" ? d = t({
      ...c,
      defaultClassName: r
    }) : d = t, typeof n == "function" ? g = n({
      ...c,
      defaultStyle: l || {}
    }) : g = n, typeof o == "function" ? p = o({
      ...c,
      defaultChildren: a
    }) : o == null ? p = a : p = o, {
      className: d ?? r,
      style: g || l ? {
        ...l,
        ...g
      } : void 0,
      children: p ?? a,
      "data-rac": ""
    };
  }, [
    t,
    n,
    o,
    r,
    a,
    l,
    c
  ]);
}
function Or(e, t) {
  let n = pe(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let o = t || Ir;
    if (!n.slots[o]) {
      let r = new Intl.ListFormat().format(Object.keys(n.slots).map((l) => `"${l}"`)), a = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${a} Valid slot names are ${r}.`);
    }
    return n.slots[o];
  }
  return n;
}
function Nr(e, t, n) {
  let o = Or(n, e.slot) || {}, { ref: r, ...a } = o, l = kr(N(() => mr(t, r), [
    t,
    r
  ])), c = fe(a, e);
  return "style" in a && a.style && "style" in e && e.style && (typeof a.style == "function" || typeof e.style == "function" ? c.style = (d) => {
    let g = typeof a.style == "function" ? a.style(d) : a.style, p = {
      ...d.defaultStyle,
      ...g
    }, m = typeof e.style == "function" ? e.style({
      ...d,
      defaultStyle: p
    }) : e.style;
    return {
      ...p,
      ...m
    };
  } : c.style = {
    ...a.style,
    ...e.style
  }), [
    c,
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
const _r = /* @__PURE__ */ gt(!1);
function jr(e) {
  let t = (n, o) => pe(_r) ? null : e(n, o);
  return t.displayName = e.displayName || e.name, kn(t);
}
function sn(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Nn(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function _n(e) {
  let t = O({
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
      let r = o.target, a = (l) => {
        if (t.current.isFocused = !1, r.disabled) {
          let c = sn(l);
          n(c);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      r.addEventListener("focusout", a, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && r.disabled) {
          var l;
          (l = t.current.observer) === null || l === void 0 || l.disconnect();
          let c = r === document.activeElement ? null : document.activeElement;
          r.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: c
          })), r.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: c
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
function vn(e) {
  for (; e && !Dr(e); ) e = e.parentElement;
  let t = V(e), n = t.document.activeElement;
  if (!n || n === e) return;
  Ae = !0;
  let o = !1, r = (p) => {
    (p.target === n || o) && p.stopImmediatePropagation();
  }, a = (p) => {
    (p.target === n || o) && (p.stopImmediatePropagation(), !e && !o && (o = !0, $e(n), d()));
  }, l = (p) => {
    (p.target === e || o) && p.stopImmediatePropagation();
  }, c = (p) => {
    (p.target === e || o) && (p.stopImmediatePropagation(), o || (o = !0, $e(n), d()));
  };
  t.addEventListener("blur", r, !0), t.addEventListener("focusout", a, !0), t.addEventListener("focusin", c, !0), t.addEventListener("focus", l, !0);
  let d = () => {
    cancelAnimationFrame(g), t.removeEventListener("blur", r, !0), t.removeEventListener("focusout", a, !0), t.removeEventListener("focusin", c, !0), t.removeEventListener("focus", l, !0), Ae = !1, o = !1;
  }, g = requestAnimationFrame(d);
  return d;
}
let Se = "default", wt = "", Re = /* @__PURE__ */ new WeakMap();
function hn(e) {
  if (rn()) {
    if (Se === "default") {
      const t = W(e);
      wt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    Se = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Re.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Pt(e) {
  if (rn()) {
    if (Se !== "disabled") return;
    Se = "restoring", setTimeout(() => {
      Rn(() => {
        if (Se === "restoring") {
          const t = W(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = wt || ""), wt = "", Se = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Re.has(e)) {
    let t = Re.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Re.delete(e);
  }
}
const jn = A.createContext({
  register: () => {
  }
});
jn.displayName = "PressResponderContext";
function Kr(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Kn(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function Vr(e, t) {
  var n = Kn(e, t, "get");
  return Kr(e, n);
}
function Gr(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Ur(e, t, n) {
  Gr(e, t), t.set(e, n);
}
function Yr(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Sn(e, t, n) {
  var o = Kn(e, t, "set");
  return Yr(e, o, n), n;
}
function Xr(e) {
  let t = pe(jn);
  if (t) {
    let { register: n, ...o } = t;
    e = fe(o, e), n();
  }
  return In(t, e.ref), e;
}
var He = /* @__PURE__ */ new WeakMap();
class We {
  continuePropagation() {
    Sn(this, He, !1);
  }
  get shouldStopPropagation() {
    return Vr(this, He);
  }
  constructor(t, n, o, r) {
    Ur(this, He, {
      writable: !0,
      value: void 0
    }), Sn(this, He, !0);
    var a;
    let l = (a = r?.target) !== null && a !== void 0 ? a : o.currentTarget;
    const c = l?.getBoundingClientRect();
    let d, g = 0, p, m = null;
    o.clientX != null && o.clientY != null && (p = o.clientX, m = o.clientY), c && (p != null && m != null ? (d = p - c.left, g = m - c.top) : (d = c.width / 2, g = c.height / 2)), this.type = t, this.pointerType = n, this.target = o.currentTarget, this.shiftKey = o.shiftKey, this.metaKey = o.metaKey, this.ctrlKey = o.ctrlKey, this.altKey = o.altKey, this.x = d, this.y = g;
  }
}
const yn = Symbol("linkClicked"), xn = "react-aria-pressable-style", $n = "data-react-aria-pressable";
function qr(e) {
  let { onPress: t, onPressChange: n, onPressStart: o, onPressEnd: r, onPressUp: a, onClick: l, isDisabled: c, isPressed: d, preventFocusOnPress: g, shouldCancelOnPointerExit: p, allowTextSelectionOnPress: m, ref: C, ...B } = Xr(e), [k, S] = xe(!1), y = O({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: P, removeAllGlobalListeners: D } = an(), L = ue((i, b) => {
    let z = y.current;
    if (c || z.didFirePressStart) return !1;
    let f = !0;
    if (z.isTriggeringEvent = !0, o) {
      let $ = new We("pressstart", b, i);
      o($), f = $.shouldStopPropagation;
    }
    return n && n(!0), z.isTriggeringEvent = !1, z.didFirePressStart = !0, S(!0), f;
  }), R = ue((i, b, z = !0) => {
    let f = y.current;
    if (!f.didFirePressStart) return !1;
    f.didFirePressStart = !1, f.isTriggeringEvent = !0;
    let $ = !0;
    if (r) {
      let s = new We("pressend", b, i);
      r(s), $ = s.shouldStopPropagation;
    }
    if (n && n(!1), S(!1), t && z && !c) {
      let s = new We("press", b, i);
      t(s), $ && ($ = s.shouldStopPropagation);
    }
    return f.isTriggeringEvent = !1, $;
  }), q = ue((i, b) => {
    let z = y.current;
    if (c) return !1;
    if (a) {
      z.isTriggeringEvent = !0;
      let f = new We("pressup", b, i);
      return a(f), z.isTriggeringEvent = !1, f.shouldStopPropagation;
    }
    return !0;
  }), _ = ue((i) => {
    let b = y.current;
    if (b.isPressed && b.target) {
      b.didFirePressStart && b.pointerType != null && R(be(b.target, i), b.pointerType, !1), b.isPressed = !1, b.isOverTarget = !1, b.activePointerId = null, b.pointerType = null, D(), m || Pt(b.target);
      for (let z of b.disposables) z();
      b.disposables = [];
    }
  }), me = ue((i) => {
    p && _(i);
  }), ve = ue((i) => {
    l?.(i);
  }), Ee = ue((i, b) => {
    if (l) {
      let z = new MouseEvent("click", i);
      Nn(z, b), l(sn(z));
    }
  }), ht = N(() => {
    let i = y.current, b = {
      onKeyDown(f) {
        if (Et(f.nativeEvent, f.currentTarget) && F(f.currentTarget, T(f.nativeEvent))) {
          var $;
          En(T(f.nativeEvent), f.key) && f.preventDefault();
          let s = !0;
          if (!i.isPressed && !f.repeat) {
            i.target = f.currentTarget, i.isPressed = !0, i.pointerType = "keyboard", s = L(f, "keyboard");
            let v = f.currentTarget, x = (j) => {
              Et(j, v) && !j.repeat && F(v, T(j)) && i.target && q(be(i.target, j), "keyboard");
            };
            P(W(f.currentTarget), "keyup", Ln(x, z), !0);
          }
          s && f.stopPropagation(), f.metaKey && Te() && (($ = i.metaKeyEvents) === null || $ === void 0 || $.set(f.key, f.nativeEvent));
        } else f.key === "Meta" && (i.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(f) {
        if (!(f && !F(f.currentTarget, T(f.nativeEvent))) && f && f.button === 0 && !i.isTriggeringEvent && !ze.isOpening) {
          let $ = !0;
          if (c && f.preventDefault(), !i.ignoreEmulatedMouseEvents && !i.isPressed && (i.pointerType === "virtual" || Bt(f.nativeEvent))) {
            let s = L(f, "virtual"), v = q(f, "virtual"), x = R(f, "virtual");
            ve(f), $ = s && v && x;
          } else if (i.isPressed && i.pointerType !== "keyboard") {
            let s = i.pointerType || f.nativeEvent.pointerType || "virtual", v = q(be(f.currentTarget, f), s), x = R(be(f.currentTarget, f), s, !0);
            $ = v && x, i.isOverTarget = !1, ve(f), _(f);
          }
          i.ignoreEmulatedMouseEvents = !1, $ && f.stopPropagation();
        }
      }
    }, z = (f) => {
      var $;
      if (i.isPressed && i.target && Et(f, i.target)) {
        var s;
        En(T(f), f.key) && f.preventDefault();
        let x = T(f), j = F(i.target, T(f));
        R(be(i.target, f), "keyboard", j), j && Ee(f, i.target), D(), f.key !== "Enter" && ln(i.target) && F(i.target, x) && !f[yn] && (f[yn] = !0, ze(i.target, f, !1)), i.isPressed = !1, (s = i.metaKeyEvents) === null || s === void 0 || s.delete(f.key);
      } else if (f.key === "Meta" && (!(($ = i.metaKeyEvents) === null || $ === void 0) && $.size)) {
        var v;
        let x = i.metaKeyEvents;
        i.metaKeyEvents = void 0;
        for (let j of x.values()) (v = i.target) === null || v === void 0 || v.dispatchEvent(new KeyboardEvent("keyup", j));
      }
    };
    if (typeof PointerEvent < "u") {
      b.onPointerDown = (s) => {
        if (s.button !== 0 || !F(s.currentTarget, T(s.nativeEvent))) return;
        if (zr(s.nativeEvent)) {
          i.pointerType = "virtual";
          return;
        }
        i.pointerType = s.pointerType;
        let v = !0;
        if (!i.isPressed) {
          i.isPressed = !0, i.isOverTarget = !0, i.activePointerId = s.pointerId, i.target = s.currentTarget, m || hn(i.target), v = L(s, i.pointerType);
          let x = T(s.nativeEvent);
          "releasePointerCapture" in x && x.releasePointerCapture(s.pointerId), P(W(s.currentTarget), "pointerup", f, !1), P(W(s.currentTarget), "pointercancel", $, !1);
        }
        v && s.stopPropagation();
      }, b.onMouseDown = (s) => {
        if (F(s.currentTarget, T(s.nativeEvent)) && s.button === 0) {
          if (g) {
            let v = vn(s.target);
            v && i.disposables.push(v);
          }
          s.stopPropagation();
        }
      }, b.onPointerUp = (s) => {
        !F(s.currentTarget, T(s.nativeEvent)) || i.pointerType === "virtual" || s.button === 0 && !i.isPressed && q(s, i.pointerType || s.pointerType);
      }, b.onPointerEnter = (s) => {
        s.pointerId === i.activePointerId && i.target && !i.isOverTarget && i.pointerType != null && (i.isOverTarget = !0, L(be(i.target, s), i.pointerType));
      }, b.onPointerLeave = (s) => {
        s.pointerId === i.activePointerId && i.target && i.isOverTarget && i.pointerType != null && (i.isOverTarget = !1, R(be(i.target, s), i.pointerType, !1), me(s));
      };
      let f = (s) => {
        if (s.pointerId === i.activePointerId && i.isPressed && s.button === 0 && i.target) {
          if (F(i.target, T(s)) && i.pointerType != null) {
            let v = !1, x = setTimeout(() => {
              i.isPressed && i.target instanceof HTMLElement && (v ? _(s) : ($e(i.target), i.target.click()));
            }, 80);
            P(s.currentTarget, "click", () => v = !0, !0), i.disposables.push(() => clearTimeout(x));
          } else _(s);
          i.isOverTarget = !1;
        }
      }, $ = (s) => {
        _(s);
      };
      b.onDragStart = (s) => {
        F(s.currentTarget, T(s.nativeEvent)) && _(s);
      };
    } else if (process.env.NODE_ENV === "test") {
      b.onMouseDown = (s) => {
        if (s.button !== 0 || !F(s.currentTarget, T(s.nativeEvent))) return;
        if (i.ignoreEmulatedMouseEvents) {
          s.stopPropagation();
          return;
        }
        if (i.isPressed = !0, i.isOverTarget = !0, i.target = s.currentTarget, i.pointerType = Bt(s.nativeEvent) ? "virtual" : "mouse", Yo(() => L(s, i.pointerType)) && s.stopPropagation(), g) {
          let x = vn(s.target);
          x && i.disposables.push(x);
        }
        P(W(s.currentTarget), "mouseup", f, !1);
      }, b.onMouseEnter = (s) => {
        if (!F(s.currentTarget, T(s.nativeEvent))) return;
        let v = !0;
        i.isPressed && !i.ignoreEmulatedMouseEvents && i.pointerType != null && (i.isOverTarget = !0, v = L(s, i.pointerType)), v && s.stopPropagation();
      }, b.onMouseLeave = (s) => {
        if (!F(s.currentTarget, T(s.nativeEvent))) return;
        let v = !0;
        i.isPressed && !i.ignoreEmulatedMouseEvents && i.pointerType != null && (i.isOverTarget = !1, v = R(s, i.pointerType, !1), me(s)), v && s.stopPropagation();
      }, b.onMouseUp = (s) => {
        F(s.currentTarget, T(s.nativeEvent)) && !i.ignoreEmulatedMouseEvents && s.button === 0 && !i.isPressed && q(s, i.pointerType || "mouse");
      };
      let f = (s) => {
        if (s.button === 0) {
          if (i.ignoreEmulatedMouseEvents) {
            i.ignoreEmulatedMouseEvents = !1;
            return;
          }
          i.target && i.target.contains(s.target) && i.pointerType != null || _(s), i.isOverTarget = !1;
        }
      };
      b.onTouchStart = (s) => {
        if (!F(s.currentTarget, T(s.nativeEvent))) return;
        let v = Jr(s.nativeEvent);
        if (!v) return;
        i.activePointerId = v.identifier, i.ignoreEmulatedMouseEvents = !0, i.isOverTarget = !0, i.isPressed = !0, i.target = s.currentTarget, i.pointerType = "touch", m || hn(i.target), L(ce(i.target, s), i.pointerType) && s.stopPropagation(), P(V(s.currentTarget), "scroll", $, !0);
      }, b.onTouchMove = (s) => {
        if (!F(s.currentTarget, T(s.nativeEvent))) return;
        if (!i.isPressed) {
          s.stopPropagation();
          return;
        }
        let v = Tn(s.nativeEvent, i.activePointerId), x = !0;
        v && Pn(v, s.currentTarget) ? !i.isOverTarget && i.pointerType != null && (i.isOverTarget = !0, x = L(ce(i.target, s), i.pointerType)) : i.isOverTarget && i.pointerType != null && (i.isOverTarget = !1, x = R(ce(i.target, s), i.pointerType, !1), me(ce(i.target, s))), x && s.stopPropagation();
      }, b.onTouchEnd = (s) => {
        if (!F(s.currentTarget, T(s.nativeEvent))) return;
        if (!i.isPressed) {
          s.stopPropagation();
          return;
        }
        let v = Tn(s.nativeEvent, i.activePointerId), x = !0;
        v && Pn(v, s.currentTarget) && i.pointerType != null ? (q(ce(i.target, s), i.pointerType), x = R(ce(i.target, s), i.pointerType), Ee(s.nativeEvent, i.target)) : i.isOverTarget && i.pointerType != null && (x = R(ce(i.target, s), i.pointerType, !1)), x && s.stopPropagation(), i.isPressed = !1, i.activePointerId = null, i.isOverTarget = !1, i.ignoreEmulatedMouseEvents = !0, i.target && !m && Pt(i.target), D();
      }, b.onTouchCancel = (s) => {
        F(s.currentTarget, T(s.nativeEvent)) && (s.stopPropagation(), i.isPressed && _(ce(i.target, s)));
      };
      let $ = (s) => {
        i.isPressed && F(T(s), i.target) && _({
          currentTarget: i.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      b.onDragStart = (s) => {
        F(s.currentTarget, T(s.nativeEvent)) && _(s);
      };
    }
    return b;
  }, [
    P,
    c,
    g,
    D,
    m,
    _,
    me,
    R,
    L,
    q,
    ve,
    Ee
  ]);
  return X(() => {
    if (!C || process.env.NODE_ENV === "test") return;
    const i = W(C.current);
    if (!i || !i.head || i.getElementById(xn)) return;
    const b = i.createElement("style");
    b.id = xn, b.textContent = `
@layer {
  [${$n}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), i.head.prepend(b);
  }, [
    C
  ]), X(() => {
    let i = y.current;
    return () => {
      var b;
      m || Pt((b = i.target) !== null && b !== void 0 ? b : void 0);
      for (let z of i.disposables) z();
      i.disposables = [];
    };
  }, [
    m
  ]), {
    isPressed: d || k,
    pressProps: fe(B, ht, {
      [$n]: !0
    })
  };
}
function ln(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Et(e, t) {
  const { key: n, code: o } = e, r = t, a = r.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || o === "Space") && !(r instanceof V(r).HTMLInputElement && !Vn(r, n) || r instanceof V(r).HTMLTextAreaElement || r.isContentEditable) && // Links should only trigger with Enter key
  !((a === "link" || !a && ln(r)) && n !== "Enter");
}
function Jr(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function Tn(e, t) {
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
function Qr(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Zr(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function Pn(e, t) {
  let n = t.getBoundingClientRect(), o = Qr(e);
  return Zr(n, o);
}
function ei(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !ln(e);
}
function En(e, t) {
  return e instanceof HTMLInputElement ? !Vn(e, t) : ei(e);
}
const ti = /* @__PURE__ */ new Set([
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
function Vn(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : ti.has(e.type);
}
let Pe = null, kt = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map(), ge = !1, zt = !1;
const ni = {
  Tab: !0,
  Escape: !0
};
function cn(e, t) {
  for (let n of kt) n(e, t);
}
function oi(e) {
  return !(e.metaKey || !Te() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Oe(e) {
  ge = !0, oi(e) && (Pe = "keyboard", cn("keyboard", e));
}
function K(e) {
  Pe = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (ge = !0, cn("pointer", e));
}
function Gn(e) {
  Bt(e) && (ge = !0, Pe = "virtual");
}
function Un(e) {
  e.target === window || e.target === document || Ae || !e.isTrusted || (!ge && !zt && (Pe = "virtual", cn("virtual", e)), ge = !1, zt = !1);
}
function Yn() {
  Ae || (ge = !1, zt = !0);
}
function Lt(e) {
  if (typeof window > "u" || typeof document > "u" || we.get(V(e))) return;
  const t = V(e), n = W(e);
  let o = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    ge = !0, o.apply(this, arguments);
  }, n.addEventListener("keydown", Oe, !0), n.addEventListener("keyup", Oe, !0), n.addEventListener("click", Gn, !0), t.addEventListener("focus", Un, !0), t.addEventListener("blur", Yn, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", K, !0), n.addEventListener("pointermove", K, !0), n.addEventListener("pointerup", K, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", K, !0), n.addEventListener("mousemove", K, !0), n.addEventListener("mouseup", K, !0)), t.addEventListener("beforeunload", () => {
    Xn(e);
  }, {
    once: !0
  }), we.set(t, {
    focus: o
  });
}
const Xn = (e, t) => {
  const n = V(e), o = W(e);
  t && o.removeEventListener("DOMContentLoaded", t), we.has(n) && (n.HTMLElement.prototype.focus = we.get(n).focus, o.removeEventListener("keydown", Oe, !0), o.removeEventListener("keyup", Oe, !0), o.removeEventListener("click", Gn, !0), n.removeEventListener("focus", Un, !0), n.removeEventListener("blur", Yn, !1), typeof PointerEvent < "u" ? (o.removeEventListener("pointerdown", K, !0), o.removeEventListener("pointermove", K, !0), o.removeEventListener("pointerup", K, !0)) : process.env.NODE_ENV === "test" && (o.removeEventListener("mousedown", K, !0), o.removeEventListener("mousemove", K, !0), o.removeEventListener("mouseup", K, !0)), we.delete(n));
};
function ri(e) {
  const t = W(e);
  let n;
  return t.readyState !== "loading" ? Lt(e) : (n = () => {
    Lt(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Xn(e, n);
}
typeof document < "u" && ri();
function qn() {
  return Pe !== "pointer";
}
function ii() {
  return Pe;
}
const ai = /* @__PURE__ */ new Set([
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
function si(e, t, n) {
  let o = W(n?.target);
  const r = typeof window < "u" ? V(n?.target).HTMLInputElement : HTMLInputElement, a = typeof window < "u" ? V(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, l = typeof window < "u" ? V(n?.target).HTMLElement : HTMLElement, c = typeof window < "u" ? V(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || o.activeElement instanceof r && !ai.has(o.activeElement.type) || o.activeElement instanceof a || o.activeElement instanceof l && o.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof c && !ni[n.key]);
}
function li(e, t, n) {
  Lt(), X(() => {
    let o = (r, a) => {
      si(!!n?.isTextInput, r, a) && e(qn());
    };
    return kt.add(o), () => {
      kt.delete(o);
    };
  }, t);
}
function ci(e) {
  const t = W(e), n = ke(t);
  if (ii() === "virtual") {
    let o = n;
    Rn(() => {
      ke(t) === o && e.isConnected && $e(e);
    });
  } else $e(e);
}
function Jn(e) {
  let { isDisabled: t, onFocus: n, onBlur: o, onFocusChange: r } = e;
  const a = G((d) => {
    if (d.target === d.currentTarget)
      return o && o(d), r && r(!1), !0;
  }, [
    o,
    r
  ]), l = _n(a), c = G((d) => {
    const g = W(d.target), p = g ? ke(g) : ke();
    d.target === d.currentTarget && p === T(d.nativeEvent) && (n && n(d), r && r(!0), l(d));
  }, [
    r,
    n,
    l
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || r || o) ? c : void 0,
      onBlur: !t && (o || r) ? a : void 0
    }
  };
}
function Cn(e) {
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
function ui(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: Cn(e.onKeyDown),
      onKeyUp: Cn(e.onKeyUp)
    }
  };
}
let di = /* @__PURE__ */ A.createContext(null);
function fi(e) {
  let t = pe(di) || {};
  In(t, e);
  let { ref: n, ...o } = t;
  return o;
}
function pi(e, t) {
  let { focusProps: n } = Jn(e), { keyboardProps: o } = ui(e), r = fe(n, o), a = fi(t), l = e.isDisabled ? {} : a, c = O(e.autoFocus);
  X(() => {
    c.current && t.current && ci(t.current), c.current = !1;
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
function bi(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: o, onFocusWithinChange: r } = e, a = O({
    isFocusWithin: !1
  }), { addGlobalListener: l, removeAllGlobalListeners: c } = an(), d = G((m) => {
    m.currentTarget.contains(m.target) && a.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (a.current.isFocusWithin = !1, c(), n && n(m), r && r(!1));
  }, [
    n,
    r,
    a,
    c
  ]), g = _n(d), p = G((m) => {
    if (!m.currentTarget.contains(m.target)) return;
    const C = W(m.target), B = ke(C);
    if (!a.current.isFocusWithin && B === T(m.nativeEvent)) {
      o && o(m), r && r(!0), a.current.isFocusWithin = !0, g(m);
      let k = m.currentTarget;
      l(C, "focus", (S) => {
        if (a.current.isFocusWithin && !F(k, S.target)) {
          let y = new C.defaultView.FocusEvent("blur", {
            relatedTarget: S.target
          });
          Nn(y, k);
          let P = sn(y);
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
      onFocus: p,
      onBlur: d
    }
  };
}
let Ne = !1, De = 0;
function Mt() {
  Ne = !0, setTimeout(() => {
    Ne = !1;
  }, 50);
}
function Fn(e) {
  e.pointerType === "touch" && Mt();
}
function gi() {
  if (!(typeof document > "u"))
    return De === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", Fn) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Mt)), De++, () => {
      De--, !(De > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", Fn) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Mt));
    };
}
function mi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: o, isDisabled: r } = e, [a, l] = xe(!1), c = O({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  X(gi, []);
  let { addGlobalListener: d, removeAllGlobalListeners: g } = an(), { hoverProps: p, triggerHoverEnd: m } = N(() => {
    let C = (S, y) => {
      if (c.pointerType = y, r || y === "touch" || c.isHovered || !S.currentTarget.contains(S.target)) return;
      c.isHovered = !0;
      let P = S.currentTarget;
      c.target = P, d(W(S.target), "pointerover", (D) => {
        c.isHovered && c.target && !F(c.target, D.target) && B(D, D.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: P,
        pointerType: y
      }), n && n(!0), l(!0);
    }, B = (S, y) => {
      let P = c.target;
      c.pointerType = "", c.target = null, !(y === "touch" || !c.isHovered || !P) && (c.isHovered = !1, g(), o && o({
        type: "hoverend",
        target: P,
        pointerType: y
      }), n && n(!1), l(!1));
    }, k = {};
    return typeof PointerEvent < "u" ? (k.onPointerEnter = (S) => {
      Ne && S.pointerType === "mouse" || C(S, S.pointerType);
    }, k.onPointerLeave = (S) => {
      !r && S.currentTarget.contains(S.target) && B(S, S.pointerType);
    }) : process.env.NODE_ENV === "test" && (k.onTouchStart = () => {
      c.ignoreEmulatedMouseEvents = !0;
    }, k.onMouseEnter = (S) => {
      !c.ignoreEmulatedMouseEvents && !Ne && C(S, "mouse"), c.ignoreEmulatedMouseEvents = !1;
    }, k.onMouseLeave = (S) => {
      !r && S.currentTarget.contains(S.target) && B(S, "mouse");
    }), {
      hoverProps: k,
      triggerHoverEnd: B
    };
  }, [
    t,
    n,
    o,
    r,
    c,
    d,
    g
  ]);
  return X(() => {
    r && m({
      currentTarget: c.target
    }, c.pointerType);
  }, [
    r
  ]), {
    hoverProps: p,
    isHovered: a
  };
}
function vi(e, t) {
  let { elementType: n = "button", isDisabled: o, onPress: r, onPressStart: a, onPressEnd: l, onPressUp: c, onPressChange: d, preventFocusOnPress: g, allowFocusWhenDisabled: p, onClick: m, href: C, target: B, rel: k, type: S = "button" } = e, y;
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
    rel: n === "a" ? k : void 0
  };
  let { pressProps: P, isPressed: D } = qr({
    onPressStart: a,
    onPressEnd: l,
    onPressChange: d,
    onPress: r,
    onPressUp: c,
    onClick: m,
    isDisabled: o,
    preventFocusOnPress: g,
    ref: t
  }), { focusableProps: L } = pi(e, t);
  p && (L.tabIndex = o ? -1 : L.tabIndex);
  let R = fe(L, P, Hn(e, {
    labelable: !0
  }));
  return {
    isPressed: D,
    buttonProps: fe(y, R, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function hi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: o } = e, r = O({
    isFocused: !1,
    isFocusVisible: t || qn()
  }), [a, l] = xe(!1), [c, d] = xe(() => r.current.isFocused && r.current.isFocusVisible), g = G(() => d(r.current.isFocused && r.current.isFocusVisible), []), p = G((B) => {
    r.current.isFocused = B, l(B), g();
  }, [
    g
  ]);
  li((B) => {
    r.current.isFocusVisible = B, g();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = Jn({
    isDisabled: o,
    onFocusChange: p
  }), { focusWithinProps: C } = bi({
    isDisabled: !o,
    onFocusWithinChange: p
  });
  return {
    isFocused: a,
    isFocusVisible: c,
    focusProps: o ? C : m
  };
}
const Qn = 7e3;
let Y = null;
function Bn(e, t = "assertive", n = Qn) {
  Y ? Y.announce(e, t, n) : (Y = new Si(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Y.announce(e, t, n) : setTimeout(() => {
    Y?.isAttached() && Y?.announce(e, t, n);
  }, 100));
}
class Si {
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
  announce(t, n = "assertive", o = Qn) {
    var r, a;
    if (!this.node) return;
    let l = document.createElement("div");
    typeof t == "object" ? (l.setAttribute("role", "img"), l.setAttribute("aria-labelledby", t["aria-labelledby"])) : l.textContent = t, n === "assertive" ? (r = this.assertiveLog) === null || r === void 0 || r.appendChild(l) : (a = this.politeLog) === null || a === void 0 || a.appendChild(l), t !== "" && setTimeout(() => {
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
const yi = /* @__PURE__ */ gt(null), xi = /* @__PURE__ */ gt({}), $i = /* @__PURE__ */ jr(function(t, n) {
  [t, n] = Nr(t, n, xi), t = Ti(t);
  let o = t, { isPending: r } = o, { buttonProps: a, isPressed: l } = vi(t, n), { focusProps: c, isFocused: d, isFocusVisible: g } = hi(t), { hoverProps: p, isHovered: m } = mi({
    ...t,
    isDisabled: t.isDisabled || r
  }), C = {
    isHovered: m,
    isPressed: (o.isPressed || l) && !r,
    isFocused: d,
    isFocusVisible: g,
    isDisabled: t.isDisabled || !1,
    isPending: r ?? !1
  }, B = Ar({
    ...t,
    values: C,
    defaultClassName: "react-aria-Button"
  }), k = pn(a.id), S = pn(), y = a["aria-labelledby"];
  r && (y ? y = `${y} ${S}` : a["aria-label"] && (y = `${k} ${S}`));
  let P = O(r);
  X(() => {
    let L = {
      "aria-labelledby": y || k
    };
    (!P.current && d && r || P.current && d && !r) && Bn(L, "assertive"), P.current = r;
  }, [
    r,
    d,
    y,
    k
  ]);
  let D = Hn(t, {
    global: !0
  });
  return delete D.onClick, /* @__PURE__ */ A.createElement("button", {
    ...fe(D, B, a, c, p),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: a.type === "submit" && r ? "button" : a.type,
    id: k,
    ref: n,
    "aria-labelledby": y,
    slot: t.slot || void 0,
    "aria-disabled": r ? "true" : a["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": C.isPressed || void 0,
    "data-hovered": m || void 0,
    "data-focused": d || void 0,
    "data-pending": r || void 0,
    "data-focus-visible": g || void 0
  }, /* @__PURE__ */ A.createElement(yi.Provider, {
    value: {
      id: S
    }
  }, B.children));
});
function Ti(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const Pi = kn(
  ({
    children: e,
    variant: t = "primary",
    size: n = "default",
    fullWidth: o = !1,
    className: r = "",
    ...a
  }, l) => {
    const c = [
      "nhs-aria-button",
      `nhs-aria-button--${t}`,
      n !== "default" ? `nhs-aria-button--${n}` : "",
      o ? "nhs-aria-button--full-width" : "",
      r
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ w.jsx(
      $i,
      {
        ref: l,
        className: c,
        ...a,
        children: e
      }
    );
  }
);
Pi.displayName = "Button";
var Ct = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var wn;
function Ei() {
  return wn || (wn = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", l = 0; l < arguments.length; l++) {
          var c = arguments[l];
          c && (a = r(a, o(c)));
        }
        return a;
      }
      function o(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var l = "";
        for (var c in a)
          t.call(a, c) && a[c] && (l = r(l, c));
        return l;
      }
      function r(a, l) {
        return l ? a ? a + " " + l : a + l : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(Ct)), Ct.exports;
}
var Ci = Ei();
const Fi = /* @__PURE__ */ Xo(Ci), mc = ({
  items: e = [],
  classes: t,
  labelText: n = "Breadcrumb",
  href: o,
  text: r,
  reverse: a = !1,
  attributes: l = {}
}) => {
  const d = (() => {
    if (o && r)
      return { href: o, text: r };
    if (e.length > 0) {
      const p = e[e.length - 1];
      return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  })(), g = Fi(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": a
    },
    t
  );
  return /* @__PURE__ */ w.jsxs("nav", { className: g, "aria-label": n, ...l, children: [
    /* @__PURE__ */ w.jsx("ol", { className: "nhsuk-breadcrumb__list", children: e.map((p, m) => p.href ? /* @__PURE__ */ w.jsx("li", { className: "nhsuk-breadcrumb__item", children: /* @__PURE__ */ w.jsx(
      "a",
      {
        className: "nhsuk-breadcrumb__link",
        href: p.href,
        ...p.attributes || {},
        children: p.text
      }
    ) }, m) : /* @__PURE__ */ w.jsx("li", { className: "nhsuk-breadcrumb__item", children: p.text }, m)) }),
    d.href && /* @__PURE__ */ w.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ w.jsxs(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: d.href,
        ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
        children: [
          /* @__PURE__ */ w.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
          d.text
        ]
      }
    ) })
  ] });
}, Zn = {
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
}, eo = gt(Zn), Bi = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Zn, ...t };
  return /* @__PURE__ */ w.jsx(eo.Provider, { value: n, children: e });
}, vc = () => {
  const e = pe(eo);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function wi() {
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
function ki() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = wi(), document.head.appendChild(e);
}
const hc = ({ children: e, theme: t }) => (X(() => {
  ki();
}, []), /* @__PURE__ */ w.jsx(Bi, { theme: t, children: e })), zi = "150ms", Li = "300ms", Mi = "500ms", Hi = "cubic-bezier(0.4, 0, 1, 1)", Wi = "cubic-bezier(0, 0, 0.2, 1)", Di = "cubic-bezier(0.4, 0, 0.2, 1)", Ri = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Ii = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ai = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Oi = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ni = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", _i = "1px", ji = "2px", Ki = "4px", Vi = "4px", Gi = "4px", Ui = "2px", Yi = "1px", Xi = "0px", qi = "4px", Ji = "8px", Qi = "12px", to = "#d8dde0", no = "#4c6272", oo = "#d8dde0", ro = "#aeb7bd", io = "#d5281b", ao = "#005eb8", so = "#ffffff", lo = "#212b32", co = "#007f3b", uo = "#330072", fo = "#7c2855", po = "#d5281b", bo = "#ffeb3b", go = "#fff9c4", mo = "#ffb81c", vo = "#ed8b00", ho = "#00a499", So = "#ae2573", yo = "#4c6272", xo = "#768692", $o = "#aeb7bd", To = "#d8dde0", Po = "#f0f4f5", Zi = "#212b32", ea = "#4c6272", ta = "#ffffff", na = "#212b32", oa = "#005eb8", ra = "#7c2855", ia = "#003087", aa = "#330072", sa = "#ffeb3b", la = "#212b32", ca = "#d8dde0", ua = "#ffffff33", da = "#d5281b", fa = "#4c6272", pa = "#ffffff", ba = "#007f3b", ga = "#ffffff", ma = "#006530", va = "#004021", ha = "#004021", Sa = "#00000000", ya = "#ffffff", xa = "#005eb8", $a = "#005eb8", Ta = "#d9e5f2", Pa = "#c7daf0", Ea = "#005eb8", Ca = "#ffffff", Fa = "#212b32", Ba = "#d9dde0", wa = "#b3bcc2", ka = "#b3bcc2", za = "#d5281b", La = "#aa2016", Ma = "#6a140e", Ha = "#6a140e", Wa = "#005eb8", Da = "#004b93", Ra = "#002f5c", Ia = "#002f5c", Aa = "8px", Oa = "16px", Na = "12px", _a = "16px", ja = "4px", Ka = "40px", Va = "4px", Ga = "40px", Ua = "12px", Ya = "16px", Xa = "32px", qa = "16px", Ja = "20px", Qa = "28px", Za = "9px", es = "2px", ts = "16px", ns = "24px", os = "8px", rs = "24px", is = "16px", as = "4px", ss = "4px", ls = "4px", cs = "8px", us = "4px", ds = "16px", fs = "#007f3b", ps = "#006530", bs = "#004021", gs = "#d8dde0", ms = "#ffffff", vs = "#768692", hs = "#00000000", Ss = "#ffeb3b", ys = "#00000000", xs = "#ffffff", $s = "#d9e5f2", Ts = "#c7daf0", Ps = "#005eb8", Es = "#005eb8", Eo = "8px", Co = "16px", Fo = "12px", Bo = "16px", Cs = "2px", Fs = "4px", Bs = "4px", ws = "600", ks = "#ffffff", zs = "#d8dde0", Ls = "#aeb7bd", Ms = "#f0f4f5", Hs = "#212b32", Ws = "#212b32", Ds = "#005eb8", wo = "16px", ko = "32px", zo = "16px", Rs = "1px", Is = "4px", As = "none", Os = "0 2px 4px rgba(0, 0, 0, 0.1)", Ns = "#ffffff", _s = "#ffffff", js = "#d8dde0", Ks = "#ffffff", Vs = "#4c6272", Gs = "#ffeb3b", Us = "#d5281b", Ys = "#aeb7bd", Xs = "#212b32", qs = "#4c6272", Js = "#768692", Qs = "#212b32", Zs = "#ffffff", el = "600", tl = "#d5281b", nl = "600", ol = "#4c6272", Lo = "4px", Mo = "40px", Ho = "40px", Wo = "12px", rl = "2px", il = "4px", al = "0px", sl = "16px", ll = "18px", cl = "24px", ul = "32px", dl = "34px", fl = "32px", pl = "40px", bl = "48px", gl = "5.4ex", ml = "7.2ex", vl = "9ex", hl = "10.8ex", Sl = "20ex", yl = "38ex", xl = "56ex", $l = "44px", Tl = "40px", Pl = "1020px", El = "100%", Cl = "50%", Fl = "33.333%", Bl = "25%", wl = "20%", kl = "320px", zl = "641px", Ll = "1025px", Ml = "1280px", Hl = "960px", Wl = "32px", Dl = "16px", Rl = "#d5281b", Il = "#d5281b", Al = "#ffffff", Ol = "#007f3b", Nl = "#007f3b", _l = "#ffffff", jl = "#ffeb3b", Kl = "#ffeb3b", Vl = "#212b32", Gl = "#005eb8", Ul = "#005eb8", Yl = "#ffffff", Xl = "#d8dde0", ql = "#aeb7bd", Jl = "#768692", Ql = "0 4px 0 #004021", Zl = "0 4px 0 #005eb8", ec = "0 4px 0 #6a140e", tc = "0 4px 0 #ffeb3b", nc = "none", oc = "0 2px 4px rgba(0, 0, 0, 0.1)", rc = "4px", ic = "0px", ac = "solid", sc = "0 0 0 3px #ffeb3b", lc = "0 0 0 3px #ffeb3b", cc = "none", uc = "0 1px 3px rgba(0, 0, 0, 0.12)", dc = "0 2px 6px rgba(0, 0, 0, 0.16)", fc = "0 4px 12px rgba(0, 0, 0, 0.20)", Do = "0", Ro = "4px", Io = "8px", Ao = "16px", Oo = "24px", No = "32px", _o = "40px", jo = "48px", Ko = "56px", Vo = "64px", Ht = "0", Wt = "0", Dt = "4px", Rt = "4px", It = "8px", At = "8px", Ot = "8px", Nt = "16px", _t = "16px", jt = "24px", Kt = "24px", Vt = "32px", Gt = "32px", Ut = "40px", Yt = "40px", Xt = "48px", qt = "48px", Jt = "56px", Qt = "56px", Zt = "64px", _e = "Frutiger W01", je = "Arial, Helvetica, sans-serif", Ke = "sans-serif", Ve = "400", Ge = "600", Ue = "400", Ye = "12px", Xe = "14px", qe = "12pt", Je = "14px", Qe = "16px", Ze = "12pt", et = "16px", tt = "19px", nt = "13pt", ot = "19px", rt = "22px", it = "15pt", at = "22px", st = "26px", lt = "17pt", ct = "27px", ut = "36px", dt = "20pt", ft = "33px", pt = "48px", bt = "24pt", en = "16px", tn = "24px", J = {
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
}, pc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: zi,
  AnimationDurationNormal: Li,
  AnimationDurationSlow: Mi,
  AnimationEasingBounce: Ri,
  AnimationEasingEaseIn: Hi,
  AnimationEasingEaseInOut: Di,
  AnimationEasingEaseOut: Wi,
  BorderColorCard: oo,
  BorderColorCardHover: ro,
  BorderColorDefault: to,
  BorderColorError: io,
  BorderColorForm: no,
  BorderRadiusLarge: Qi,
  BorderRadiusMedium: Ji,
  BorderRadiusNone: Xi,
  BorderRadiusSmall: qi,
  BorderWidthCardBottom: Vi,
  BorderWidthDefault: _i,
  BorderWidthFormElement: ji,
  BorderWidthFormElementError: Ki,
  BorderWidthPanel: Gi,
  BorderWidthTableCell: Yi,
  BorderWidthTableHeader: Ui,
  BreakpointDesktop: Ll,
  BreakpointLargeDesktop: Ml,
  BreakpointMobile: kl,
  BreakpointTablet: zl,
  ButtonBorderRadius: Fs,
  ButtonBorderWidth: Cs,
  ButtonPrimaryBackgroundActive: bs,
  ButtonPrimaryBackgroundDefault: fs,
  ButtonPrimaryBackgroundDisabled: gs,
  ButtonPrimaryBackgroundHover: ps,
  ButtonPrimaryBorderDefault: hs,
  ButtonPrimaryBorderFocus: Ss,
  ButtonPrimaryTextDefault: ms,
  ButtonPrimaryTextDisabled: vs,
  ButtonSecondaryBackgroundActive: Ts,
  ButtonSecondaryBackgroundDefault: ys,
  ButtonSecondaryBackgroundHover: $s,
  ButtonSecondaryBackgroundSolid: xs,
  ButtonSecondaryBorderDefault: Es,
  ButtonSecondaryTextDefault: Ps,
  ButtonShadowSize: Bs,
  ButtonSpacingPaddingHorizontalDesktop: Bo,
  ButtonSpacingPaddingHorizontalMobile: Co,
  ButtonSpacingPaddingVerticalDesktop: Fo,
  ButtonSpacingPaddingVerticalMobile: Eo,
  ButtonTypographyWeight: ws,
  CardBackgroundDefault: ks,
  CardBorderBottom: Ms,
  CardBorderDefault: zs,
  CardBorderHover: Ls,
  CardBorderWidthBottom: Is,
  CardBorderWidthDefault: Rs,
  CardShadowDefault: As,
  CardShadowHover: Os,
  CardSpacingHeadingMargin: zo,
  CardSpacingPaddingDesktop: ko,
  CardSpacingPaddingMobile: wo,
  CardTextDescription: Ws,
  CardTextHeading: Hs,
  CardTextLink: Ds,
  ColorBorderDefault: ca,
  ColorBorderSecondary: ua,
  ColorButtonLoginActive: Ra,
  ColorButtonLoginBackground: Wa,
  ColorButtonLoginHover: Da,
  ColorButtonLoginShadow: Ia,
  ColorButtonPrimaryActive: va,
  ColorButtonPrimaryBackground: ba,
  ColorButtonPrimaryHover: ma,
  ColorButtonPrimaryShadow: ha,
  ColorButtonPrimaryText: ga,
  ColorButtonReverseActive: wa,
  ColorButtonReverseBackground: Ca,
  ColorButtonReverseHover: Ba,
  ColorButtonReverseShadow: ka,
  ColorButtonReverseText: Fa,
  ColorButtonSecondaryActive: Pa,
  ColorButtonSecondaryBackground: Sa,
  ColorButtonSecondaryBackgroundSolid: ya,
  ColorButtonSecondaryBorder: xa,
  ColorButtonSecondaryHover: Ta,
  ColorButtonSecondaryShadow: Ea,
  ColorButtonSecondaryText: $a,
  ColorButtonWarningActive: Ma,
  ColorButtonWarningBackground: za,
  ColorButtonWarningHover: La,
  ColorButtonWarningShadow: Ha,
  ColorError: da,
  ColorFocusBackground: sa,
  ColorFocusText: la,
  ColorFormBackground: pa,
  ColorFormBorder: fa,
  ColorGrey1: yo,
  ColorGrey2: xo,
  ColorGrey3: $o,
  ColorGrey4: To,
  ColorGrey5: Po,
  ColorLinkActive: ia,
  ColorLinkDefault: oa,
  ColorLinkHover: ra,
  ColorLinkVisited: aa,
  ColorPrimaryBlack: lo,
  ColorPrimaryBlue: ao,
  ColorPrimaryDarkPink: fo,
  ColorPrimaryGreen: co,
  ColorPrimaryPurple: uo,
  ColorPrimaryRed: po,
  ColorPrimaryWhite: so,
  ColorPrimaryYellow: bo,
  ColorSecondaryAquaGreen: ho,
  ColorSecondaryOrange: vo,
  ColorSecondaryPaleYellow: go,
  ColorSecondaryPink: So,
  ColorSecondaryWarmYellow: mo,
  ColorTextPrimary: Zi,
  ColorTextPrint: na,
  ColorTextReverse: ta,
  ColorTextSecondary: ea,
  ComponentBlur: ss,
  ComponentBreadcrumbChevronMarginLeft: Za,
  ComponentBreadcrumbChevronMarginRight: es,
  ComponentBreadcrumbPaddingTopDesktop: ns,
  ComponentBreadcrumbPaddingTopMobile: ts,
  ComponentButtonPaddingDesktopHorizontal: _a,
  ComponentButtonPaddingDesktopVertical: Na,
  ComponentButtonPaddingMobileHorizontal: Oa,
  ComponentButtonPaddingMobileVertical: Aa,
  ComponentButtonShadowSize: ja,
  ComponentCardHeadingMargin: qa,
  ComponentCardPaddingDesktop: Xa,
  ComponentCardPaddingMobile: Ya,
  ComponentDetails: cs,
  ComponentExpander: us,
  ComponentFormCheckboxLabelPadding: Ua,
  ComponentFormCheckboxSize: Ga,
  ComponentFormInputMinHeight: Ka,
  ComponentFormInputPadding: Va,
  ComponentLink: ls,
  ComponentPagination: ds,
  ComponentPanelPaddingDesktop: Qa,
  ComponentPanelPaddingMobile: Ja,
  ComponentSpread: as,
  ComponentSummaryListCellPaddingHorizontal: rs,
  ComponentSummaryListCellPaddingVertical: os,
  ComponentSummaryListRowMargin: is,
  ElevationHigh: fc,
  ElevationLow: uc,
  ElevationMedium: dc,
  ElevationNone: cc,
  FocusOutlineOffset: ic,
  FocusOutlineStyle: ac,
  FocusOutlineWidth: rc,
  FocusShadowButton: lc,
  FocusShadowInput: sc,
  FontFamilyBase: _e,
  FontFamilyFallback: je,
  FontFamilyPrint: Ke,
  FontLineHeightBase: tn,
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
  FontSizeBase: en,
  FontWeightBold: Ge,
  FontWeightLight: Ue,
  FontWeightNormal: Ve,
  FormBorderRadius: al,
  FormBorderWidthDefault: rl,
  FormBorderWidthError: il,
  FormErrorTextDefault: tl,
  FormErrorTypographyWeight: nl,
  FormHintTextDefault: ol,
  FormInputBackgroundDefault: Ns,
  FormInputBackgroundDisabled: js,
  FormInputBackgroundError: Ks,
  FormInputBackgroundFocus: _s,
  FormInputBorderDefault: Vs,
  FormInputBorderDisabled: Ys,
  FormInputBorderError: Us,
  FormInputBorderFocus: Gs,
  FormInputTextDefault: Xs,
  FormInputTextDisabled: Js,
  FormInputTextPlaceholder: qs,
  FormLabelTextDefault: Qs,
  FormLabelTextRequired: Zs,
  FormLabelTypographyWeight: el,
  FormSpacingCheckboxLabelPadding: Wo,
  FormSpacingCheckboxSize: Ho,
  FormSpacingInputMinHeight: Mo,
  FormSpacingInputPadding: Lo,
  GridGutter: Wl,
  GridGutterHalf: Dl,
  GridPageWidth: Hl,
  HeadingsNhsukHeadingL: Q,
  HeadingsNhsukHeadingM: Z,
  HeadingsNhsukHeadingS: ee,
  HeadingsNhsukHeadingXl: J,
  HeadingsNhsukHeadingXs: te,
  LayoutColumnActions: wl,
  LayoutColumnFull: El,
  LayoutColumnHalf: Cl,
  LayoutColumnQuarter: Bl,
  LayoutColumnThird: Fl,
  LayoutContainerMaxWidth: Pl,
  ParagraphsBody: ne,
  ParagraphsBodyLarge: oe,
  ParagraphsBodySmall: re,
  ParagraphsLedeText: ie,
  ParagraphsLedeTextSmall: ae,
  ShadowButtonDefault: Ql,
  ShadowButtonFocus: tc,
  ShadowButtonSecondary: Zl,
  ShadowButtonWarning: ec,
  ShadowCardDefault: nc,
  ShadowCardHover: oc,
  SizeButtonMinHeightDesktop: Tl,
  SizeButtonMinHeightMobile: $l,
  SizeFormControlLarge: bl,
  SizeFormControlMedium: pl,
  SizeFormControlSmall: fl,
  SizeFormInputWidth2xl: yl,
  SizeFormInputWidth3xl: xl,
  SizeFormInputWidthLg: hl,
  SizeFormInputWidthMd: vl,
  SizeFormInputWidthSm: ml,
  SizeFormInputWidthXl: Sl,
  SizeFormInputWidthXs: gl,
  SizeIconExtraLarge: ul,
  SizeIconLarge: cl,
  SizeIconMedium: ll,
  SizeIconNhsDefault: dl,
  SizeIconSmall: sl,
  Spacing0: Do,
  Spacing1: Ro,
  Spacing2: Io,
  Spacing3: Ao,
  Spacing4: Oo,
  Spacing5: No,
  Spacing6: _o,
  Spacing7: jo,
  Spacing8: Ko,
  Spacing9: Vo,
  SpacingResponsive0Mobile: Ht,
  SpacingResponsive0Tablet: Wt,
  SpacingResponsive1Mobile: Dt,
  SpacingResponsive1Tablet: Rt,
  SpacingResponsive2Mobile: It,
  SpacingResponsive2Tablet: At,
  SpacingResponsive3Mobile: Ot,
  SpacingResponsive3Tablet: Nt,
  SpacingResponsive4Mobile: _t,
  SpacingResponsive4Tablet: jt,
  SpacingResponsive5Mobile: Kt,
  SpacingResponsive5Tablet: Vt,
  SpacingResponsive6Mobile: Gt,
  SpacingResponsive6Tablet: Ut,
  SpacingResponsive7Mobile: Yt,
  SpacingResponsive7Tablet: Xt,
  SpacingResponsive8Mobile: qt,
  SpacingResponsive8Tablet: Jt,
  SpacingResponsive9Mobile: Qt,
  SpacingResponsive9Tablet: Zt,
  StateDisabledBackground: Xl,
  StateDisabledBorder: ql,
  StateDisabledText: Jl,
  StateErrorBackground: Rl,
  StateErrorBorder: Il,
  StateErrorText: Al,
  StateInfoBackground: Gl,
  StateInfoBorder: Ul,
  StateInfoText: Yl,
  StateSuccessBackground: Ol,
  StateSuccessBorder: Nl,
  StateSuccessText: _l,
  StateWarningBackground: jl,
  StateWarningBorder: Kl,
  StateWarningText: Vl,
  TransitionButtonDefault: Ii,
  TransitionButtonShadow: Ai,
  TransitionCardHover: Ni,
  TransitionInputFocus: Oi
}, Symbol.toStringTag, { value: "Module" })), Sc = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), yc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), xc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), $c = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), Tc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), Pc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), Ec = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), Cc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), Fc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), Bc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), wc = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ w.jsx(
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
), kc = () => N(() => pc, []), zc = () => N(() => ({
  // Border colors
  BorderColorDefault: to,
  BorderColorForm: no,
  BorderColorCard: oo,
  BorderColorCardHover: ro,
  BorderColorError: io,
  // Primary colors
  ColorPrimaryBlue: ao,
  ColorPrimaryWhite: so,
  ColorPrimaryBlack: lo,
  ColorPrimaryGreen: co,
  ColorPrimaryPurple: uo,
  ColorPrimaryDarkPink: fo,
  ColorPrimaryRed: po,
  ColorPrimaryYellow: bo,
  // Secondary colors
  ColorSecondaryPaleYellow: go,
  ColorSecondaryWarmYellow: mo,
  ColorSecondaryOrange: vo,
  ColorSecondaryAquaGreen: ho,
  ColorSecondaryPink: So,
  // Grey scale
  ColorGrey1: yo,
  ColorGrey2: xo,
  ColorGrey3: $o,
  ColorGrey4: To,
  ColorGrey5: Po
}), []), Lc = () => N(() => ({
  Spacing0: Do,
  Spacing1: Ro,
  Spacing2: Io,
  Spacing3: Ao,
  Spacing4: Oo,
  Spacing5: No,
  Spacing6: _o,
  Spacing7: jo,
  Spacing8: Ko,
  Spacing9: Vo
}), []), Mc = () => N(() => ({
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
    Size: en,
    LineHeight: tn
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
  FontSizeBase: en,
  FontLineHeightBase: tn
}), []), Hc = () => N(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
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
  Tablet: {
    Size0: Wt,
    Size1: Rt,
    Size2: At,
    Size3: Nt,
    Size4: jt,
    Size5: Vt,
    Size6: Ut,
    Size7: Xt,
    Size8: Jt,
    Size9: Zt
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ht,
  SpacingResponsive0Tablet: Wt,
  SpacingResponsive1Mobile: Dt,
  SpacingResponsive1Tablet: Rt,
  SpacingResponsive2Mobile: It,
  SpacingResponsive2Tablet: At,
  SpacingResponsive3Mobile: Ot,
  SpacingResponsive3Tablet: Nt,
  SpacingResponsive4Mobile: _t,
  SpacingResponsive4Tablet: jt,
  SpacingResponsive5Mobile: Kt,
  SpacingResponsive5Tablet: Vt,
  SpacingResponsive6Mobile: Gt,
  SpacingResponsive6Tablet: Ut,
  SpacingResponsive7Mobile: Yt,
  SpacingResponsive7Tablet: Xt,
  SpacingResponsive8Mobile: qt,
  SpacingResponsive8Tablet: Jt,
  SpacingResponsive9Mobile: Qt,
  SpacingResponsive9Tablet: Zt
}), []), Wc = () => N(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Eo,
  ButtonSpacingPaddingHorizontalMobile: Co,
  ButtonSpacingPaddingVerticalDesktop: Fo,
  ButtonSpacingPaddingHorizontalDesktop: Bo,
  // Card spacing	
  CardSpacingPaddingMobile: wo,
  CardSpacingPaddingDesktop: ko,
  CardSpacingHeadingMargin: zo,
  // Form spacing
  FormSpacingInputPadding: Lo,
  FormSpacingInputMinHeight: Mo,
  FormSpacingCheckboxSize: Ho,
  FormSpacingCheckboxLabelPadding: Wo
}), []), Dc = () => N(() => ({
  xl: J,
  l: Q,
  m: Z,
  s: ee,
  xs: te
}), []), Rc = () => N(() => ({
  body: ne,
  bodyLarge: oe,
  bodySmall: re,
  ledeText: ie,
  ledeTextSmall: ae
}), []), Ic = () => N(() => ({
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
}), []), Go = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, I = {
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
function Ac(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Go, ...e }, o = [];
  return n?.includes(400) && o.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${I.normal.eot}?#iefix") format("eot"),
       url("${t}${I.normal.woff2}") format("woff2"),
       url("${t}${I.normal.woff}") format("woff"),
       url("${t}${I.normal.ttf}") format("truetype");
  src: url("${t}${I.normal.eot}");
}`), n?.includes(600) && o.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${I.bold.eot}?#iefix") format("eot"),
       url("${t}${I.bold.woff2}") format("woff2"),
       url("${t}${I.bold.woff}") format("woff"),
       url("${t}${I.bold.ttf}") format("truetype");
  src: url("${t}${I.bold.eot}");
}`), o.join(`
`);
}
function Oc(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Go, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${I.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${I.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${I.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${I.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((r) => {
    const a = document.createElement("link");
    a.rel = "preload", a.href = r.href, a.as = r.as, a.type = r.type, a.crossOrigin = "anonymous", document.head.appendChild(a);
  });
}
const Nc = '"Frutiger W01", Arial, Helvetica, sans-serif', _c = "Arial, Helvetica, sans-serif";
async function jc() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  zi as AnimationDurationFast,
  Li as AnimationDurationNormal,
  Mi as AnimationDurationSlow,
  Ri as AnimationEasingBounce,
  Hi as AnimationEasingEaseIn,
  Di as AnimationEasingEaseInOut,
  Wi as AnimationEasingEaseOut,
  oo as BorderColorCard,
  ro as BorderColorCardHover,
  to as BorderColorDefault,
  io as BorderColorError,
  no as BorderColorForm,
  Qi as BorderRadiusLarge,
  Ji as BorderRadiusMedium,
  Xi as BorderRadiusNone,
  qi as BorderRadiusSmall,
  Vi as BorderWidthCardBottom,
  _i as BorderWidthDefault,
  ji as BorderWidthFormElement,
  Ki as BorderWidthFormElementError,
  Gi as BorderWidthPanel,
  Yi as BorderWidthTableCell,
  Ui as BorderWidthTableHeader,
  mc as Breadcrumb,
  Ll as BreakpointDesktop,
  Ml as BreakpointLargeDesktop,
  kl as BreakpointMobile,
  zl as BreakpointTablet,
  Pi as Button,
  Fs as ButtonBorderRadius,
  Cs as ButtonBorderWidth,
  bs as ButtonPrimaryBackgroundActive,
  fs as ButtonPrimaryBackgroundDefault,
  gs as ButtonPrimaryBackgroundDisabled,
  ps as ButtonPrimaryBackgroundHover,
  hs as ButtonPrimaryBorderDefault,
  Ss as ButtonPrimaryBorderFocus,
  ms as ButtonPrimaryTextDefault,
  vs as ButtonPrimaryTextDisabled,
  Ts as ButtonSecondaryBackgroundActive,
  ys as ButtonSecondaryBackgroundDefault,
  $s as ButtonSecondaryBackgroundHover,
  xs as ButtonSecondaryBackgroundSolid,
  Es as ButtonSecondaryBorderDefault,
  Ps as ButtonSecondaryTextDefault,
  Bs as ButtonShadowSize,
  Bo as ButtonSpacingPaddingHorizontalDesktop,
  Co as ButtonSpacingPaddingHorizontalMobile,
  Fo as ButtonSpacingPaddingVerticalDesktop,
  Eo as ButtonSpacingPaddingVerticalMobile,
  ws as ButtonTypographyWeight,
  ks as CardBackgroundDefault,
  Ms as CardBorderBottom,
  zs as CardBorderDefault,
  Ls as CardBorderHover,
  Is as CardBorderWidthBottom,
  Rs as CardBorderWidthDefault,
  As as CardShadowDefault,
  Os as CardShadowHover,
  zo as CardSpacingHeadingMargin,
  ko as CardSpacingPaddingDesktop,
  wo as CardSpacingPaddingMobile,
  Ws as CardTextDescription,
  Hs as CardTextHeading,
  Ds as CardTextLink,
  ca as ColorBorderDefault,
  ua as ColorBorderSecondary,
  Ra as ColorButtonLoginActive,
  Wa as ColorButtonLoginBackground,
  Da as ColorButtonLoginHover,
  Ia as ColorButtonLoginShadow,
  va as ColorButtonPrimaryActive,
  ba as ColorButtonPrimaryBackground,
  ma as ColorButtonPrimaryHover,
  ha as ColorButtonPrimaryShadow,
  ga as ColorButtonPrimaryText,
  wa as ColorButtonReverseActive,
  Ca as ColorButtonReverseBackground,
  Ba as ColorButtonReverseHover,
  ka as ColorButtonReverseShadow,
  Fa as ColorButtonReverseText,
  Pa as ColorButtonSecondaryActive,
  Sa as ColorButtonSecondaryBackground,
  ya as ColorButtonSecondaryBackgroundSolid,
  xa as ColorButtonSecondaryBorder,
  Ta as ColorButtonSecondaryHover,
  Ea as ColorButtonSecondaryShadow,
  $a as ColorButtonSecondaryText,
  Ma as ColorButtonWarningActive,
  za as ColorButtonWarningBackground,
  La as ColorButtonWarningHover,
  Ha as ColorButtonWarningShadow,
  da as ColorError,
  sa as ColorFocusBackground,
  la as ColorFocusText,
  pa as ColorFormBackground,
  fa as ColorFormBorder,
  yo as ColorGrey1,
  xo as ColorGrey2,
  $o as ColorGrey3,
  To as ColorGrey4,
  Po as ColorGrey5,
  ia as ColorLinkActive,
  oa as ColorLinkDefault,
  ra as ColorLinkHover,
  aa as ColorLinkVisited,
  lo as ColorPrimaryBlack,
  ao as ColorPrimaryBlue,
  fo as ColorPrimaryDarkPink,
  co as ColorPrimaryGreen,
  uo as ColorPrimaryPurple,
  po as ColorPrimaryRed,
  so as ColorPrimaryWhite,
  bo as ColorPrimaryYellow,
  ho as ColorSecondaryAquaGreen,
  vo as ColorSecondaryOrange,
  go as ColorSecondaryPaleYellow,
  So as ColorSecondaryPink,
  mo as ColorSecondaryWarmYellow,
  Zi as ColorTextPrimary,
  na as ColorTextPrint,
  ta as ColorTextReverse,
  ea as ColorTextSecondary,
  ss as ComponentBlur,
  Za as ComponentBreadcrumbChevronMarginLeft,
  es as ComponentBreadcrumbChevronMarginRight,
  ns as ComponentBreadcrumbPaddingTopDesktop,
  ts as ComponentBreadcrumbPaddingTopMobile,
  _a as ComponentButtonPaddingDesktopHorizontal,
  Na as ComponentButtonPaddingDesktopVertical,
  Oa as ComponentButtonPaddingMobileHorizontal,
  Aa as ComponentButtonPaddingMobileVertical,
  ja as ComponentButtonShadowSize,
  qa as ComponentCardHeadingMargin,
  Xa as ComponentCardPaddingDesktop,
  Ya as ComponentCardPaddingMobile,
  cs as ComponentDetails,
  us as ComponentExpander,
  Ua as ComponentFormCheckboxLabelPadding,
  Ga as ComponentFormCheckboxSize,
  Ka as ComponentFormInputMinHeight,
  Va as ComponentFormInputPadding,
  ls as ComponentLink,
  ds as ComponentPagination,
  Qa as ComponentPanelPaddingDesktop,
  Ja as ComponentPanelPaddingMobile,
  as as ComponentSpread,
  rs as ComponentSummaryListCellPaddingHorizontal,
  os as ComponentSummaryListCellPaddingVertical,
  is as ComponentSummaryListRowMargin,
  Go as DEFAULT_FONT_CONFIG,
  fc as ElevationHigh,
  uc as ElevationLow,
  dc as ElevationMedium,
  cc as ElevationNone,
  I as FRUTIGER_FONT_FILES,
  ic as FocusOutlineOffset,
  ac as FocusOutlineStyle,
  rc as FocusOutlineWidth,
  lc as FocusShadowButton,
  sc as FocusShadowInput,
  _e as FontFamilyBase,
  je as FontFamilyFallback,
  Ke as FontFamilyPrint,
  tn as FontLineHeightBase,
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
  en as FontSizeBase,
  Ge as FontWeightBold,
  Ue as FontWeightLight,
  Ve as FontWeightNormal,
  al as FormBorderRadius,
  rl as FormBorderWidthDefault,
  il as FormBorderWidthError,
  tl as FormErrorTextDefault,
  nl as FormErrorTypographyWeight,
  ol as FormHintTextDefault,
  Ns as FormInputBackgroundDefault,
  js as FormInputBackgroundDisabled,
  Ks as FormInputBackgroundError,
  _s as FormInputBackgroundFocus,
  Vs as FormInputBorderDefault,
  Ys as FormInputBorderDisabled,
  Us as FormInputBorderError,
  Gs as FormInputBorderFocus,
  Xs as FormInputTextDefault,
  Js as FormInputTextDisabled,
  qs as FormInputTextPlaceholder,
  Qs as FormLabelTextDefault,
  Zs as FormLabelTextRequired,
  el as FormLabelTypographyWeight,
  Wo as FormSpacingCheckboxLabelPadding,
  Ho as FormSpacingCheckboxSize,
  Mo as FormSpacingInputMinHeight,
  Lo as FormSpacingInputPadding,
  Wl as GridGutter,
  Dl as GridGutterHalf,
  Hl as GridPageWidth,
  Q as HeadingsNhsukHeadingL,
  Z as HeadingsNhsukHeadingM,
  ee as HeadingsNhsukHeadingS,
  J as HeadingsNhsukHeadingXl,
  te as HeadingsNhsukHeadingXs,
  wl as LayoutColumnActions,
  El as LayoutColumnFull,
  Cl as LayoutColumnHalf,
  Bl as LayoutColumnQuarter,
  Fl as LayoutColumnThird,
  Pl as LayoutContainerMaxWidth,
  Ec as NHSBodyText,
  Cc as NHSBodyTextLarge,
  Fc as NHSBodyTextSmall,
  yc as NHSHeading1,
  xc as NHSHeading2,
  $c as NHSHeading3,
  Tc as NHSHeading4,
  Pc as NHSHeading5,
  Bc as NHSLedeText,
  wc as NHSLedeTextSmall,
  hc as NHSThemeProvider,
  _c as NHS_FALLBACK_FONT_STACK,
  Nc as NHS_FONT_STACK,
  ne as ParagraphsBody,
  oe as ParagraphsBodyLarge,
  re as ParagraphsBodySmall,
  ie as ParagraphsLedeText,
  ae as ParagraphsLedeTextSmall,
  Ql as ShadowButtonDefault,
  tc as ShadowButtonFocus,
  Zl as ShadowButtonSecondary,
  ec as ShadowButtonWarning,
  nc as ShadowCardDefault,
  oc as ShadowCardHover,
  Tl as SizeButtonMinHeightDesktop,
  $l as SizeButtonMinHeightMobile,
  bl as SizeFormControlLarge,
  pl as SizeFormControlMedium,
  fl as SizeFormControlSmall,
  yl as SizeFormInputWidth2xl,
  xl as SizeFormInputWidth3xl,
  hl as SizeFormInputWidthLg,
  vl as SizeFormInputWidthMd,
  ml as SizeFormInputWidthSm,
  Sl as SizeFormInputWidthXl,
  gl as SizeFormInputWidthXs,
  ul as SizeIconExtraLarge,
  cl as SizeIconLarge,
  ll as SizeIconMedium,
  dl as SizeIconNhsDefault,
  sl as SizeIconSmall,
  Do as Spacing0,
  Ro as Spacing1,
  Io as Spacing2,
  Ao as Spacing3,
  Oo as Spacing4,
  No as Spacing5,
  _o as Spacing6,
  jo as Spacing7,
  Ko as Spacing8,
  Vo as Spacing9,
  Ht as SpacingResponsive0Mobile,
  Wt as SpacingResponsive0Tablet,
  Dt as SpacingResponsive1Mobile,
  Rt as SpacingResponsive1Tablet,
  It as SpacingResponsive2Mobile,
  At as SpacingResponsive2Tablet,
  Ot as SpacingResponsive3Mobile,
  Nt as SpacingResponsive3Tablet,
  _t as SpacingResponsive4Mobile,
  jt as SpacingResponsive4Tablet,
  Kt as SpacingResponsive5Mobile,
  Vt as SpacingResponsive5Tablet,
  Gt as SpacingResponsive6Mobile,
  Ut as SpacingResponsive6Tablet,
  Yt as SpacingResponsive7Mobile,
  Xt as SpacingResponsive7Tablet,
  qt as SpacingResponsive8Mobile,
  Jt as SpacingResponsive8Tablet,
  Qt as SpacingResponsive9Mobile,
  Zt as SpacingResponsive9Tablet,
  Xl as StateDisabledBackground,
  ql as StateDisabledBorder,
  Jl as StateDisabledText,
  Rl as StateErrorBackground,
  Il as StateErrorBorder,
  Al as StateErrorText,
  Gl as StateInfoBackground,
  Ul as StateInfoBorder,
  Yl as StateInfoText,
  Ol as StateSuccessBackground,
  Nl as StateSuccessBorder,
  _l as StateSuccessText,
  jl as StateWarningBackground,
  Kl as StateWarningBorder,
  Vl as StateWarningText,
  Ii as TransitionButtonDefault,
  Ai as TransitionButtonShadow,
  Ni as TransitionCardHover,
  Oi as TransitionInputFocus,
  jc as checkFrutigerLoaded,
  Ac as generateFrutigerFontFace,
  Sc as getResponsiveStyles,
  Oc as preloadFrutigerFonts,
  zc as useColors,
  Wc as useComponentSpacing,
  Dc as useNHSHeadings,
  Rc as useNHSParagraphs,
  vc as useNHSTheme,
  Ic as useNHSTypographySystem,
  Hc as useResponsiveSpacing,
  Lc as useSpacing,
  kc as useTokens,
  Mc as useTypography
};
//# sourceMappingURL=index.esm.js.map
