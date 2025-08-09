import * as lo from "react";
import de, { useRef as te, useCallback as J, useState as ne, useContext as qe, useEffect as se, useMemo as oe, forwardRef as tt, createContext as Tn, createElement as Da, useImperativeHandle as Pa, useReducer as co } from "react";
import { flushSync as uo } from "react-dom";
function fo(e) {
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
var zr;
function ho() {
  if (zr) return gt;
  zr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var l in s)
        l !== "key" && (o[l] = s[l]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: r,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
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
var Wr;
function po() {
  return Wr || (Wr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(D) {
      if (D == null) return null;
      if (typeof D == "function")
        return D.$$typeof === C ? null : D.displayName || D.name || null;
      if (typeof D == "string") return D;
      switch (D) {
        case m:
          return "Fragment";
        case S:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case B:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof D == "object")
        switch (typeof D.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), D.$$typeof) {
          case T:
            return "Portal";
          case P:
            return (D.displayName || "Context") + ".Provider";
          case $:
            return (D._context.displayName || "Context") + ".Consumer";
          case w:
            var V = D.render;
            return D = D.displayName, D || (D = V.displayName || V.name || "", D = D !== "" ? "ForwardRef(" + D + ")" : "ForwardRef"), D;
          case L:
            return V = D.displayName || null, V !== null ? V : e(D.type) || "Memo";
          case b:
            V = D._payload, D = D._init;
            try {
              return e(D(V));
            } catch {
            }
        }
      return null;
    }
    function t(D) {
      return "" + D;
    }
    function n(D) {
      try {
        t(D);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var W = V.error, ee = typeof Symbol == "function" && Symbol.toStringTag && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return W.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ee
        ), t(D);
      }
    }
    function r(D) {
      if (D === m) return "<>";
      if (typeof D == "object" && D !== null && D.$$typeof === b)
        return "<...>";
      try {
        var V = e(D);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var D = c.A;
      return D === null ? null : D.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(D) {
      if (E.call(D, "key")) {
        var V = Object.getOwnPropertyDescriptor(D, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return D.key !== void 0;
    }
    function l(D, V) {
      function W() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      W.isReactWarning = !0, Object.defineProperty(D, "key", {
        get: W,
        configurable: !0
      });
    }
    function u() {
      var D = e(this.type);
      return h[D] || (h[D] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), D = this.props.ref, D !== void 0 ? D : null;
    }
    function f(D, V, W, ee, G, _, H, q) {
      return W = _.ref, D = {
        $$typeof: x,
        type: D,
        key: V,
        props: _,
        _owner: G
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(D, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(D, "ref", { enumerable: !1, value: null }), D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(D, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(D, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(D, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    }
    function d(D, V, W, ee, G, _, H, q) {
      var N = V.children;
      if (N !== void 0)
        if (ee)
          if (K(N)) {
            for (ee = 0; ee < N.length; ee++)
              p(N[ee]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(N);
      if (E.call(V, "key")) {
        N = e(D);
        var k = Object.keys(V).filter(function(z) {
          return z !== "key";
        });
        ee = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", X[N + ee] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ee,
          N,
          k,
          N
        ), X[N + ee] = !0);
      }
      if (N = null, W !== void 0 && (n(W), N = "" + W), i(V) && (n(V.key), N = "" + V.key), "key" in V) {
        W = {};
        for (var I in V)
          I !== "key" && (W[I] = V[I]);
      } else W = V;
      return N && l(
        W,
        typeof D == "function" ? D.displayName || D.name || "Unknown" : D
      ), f(
        D,
        N,
        _,
        G,
        s(),
        W,
        H,
        q
      );
    }
    function p(D) {
      typeof D == "object" && D !== null && D.$$typeof === x && D._store && (D._store.validated = 1);
    }
    var g = de, x = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), P = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), c = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, E = Object.prototype.hasOwnProperty, K = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(D) {
        return D();
      }
    };
    var M, h = {}, A = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), Y = j(r(o)), X = {};
    bt.Fragment = m, bt.jsx = function(D, V, W, ee, G) {
      var _ = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        D,
        V,
        W,
        !1,
        ee,
        G,
        _ ? Error("react-stack-top-frame") : A,
        _ ? j(r(D)) : Y
      );
    }, bt.jsxs = function(D, V, W, ee, G) {
      var _ = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        D,
        V,
        W,
        !0,
        ee,
        G,
        _ ? Error("react-stack-top-frame") : A,
        _ ? j(r(D)) : Y
      );
    };
  }()), bt;
}
var Or;
function mo() {
  return Or || (Or = 1, process.env.NODE_ENV === "production" ? Et.exports = ho() : Et.exports = po()), Et.exports;
}
var a = mo(), jn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ur;
function go() {
  return Ur || (Ur = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (o = s(o, r(l)));
        }
        return o;
      }
      function r(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return n.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var i = "";
        for (var l in o)
          t.call(o, l) && o[l] && (i = s(i, l));
        return i;
      }
      function s(o, i) {
        return i ? o ? o + " " + i : o + i : o;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  }(jn)), jn.exports;
}
var bo = go();
const O = /* @__PURE__ */ fo(bo), pp = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: r,
  ...s
}) => {
  const o = O(
    "nhsuk-action-link__link",
    r
  );
  return /* @__PURE__ */ a.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ a.jsxs(
    "a",
    {
      className: o,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...s,
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
}, $n = typeof document < "u" ? de.useLayoutEffect : () => {
};
var En;
const xo = (En = de.useInsertionEffect) !== null && En !== void 0 ? En : $n;
function Ve(e) {
  const t = te(null);
  return xo(() => {
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
}, Ma = /* @__PURE__ */ de.createContext(At), vo = /* @__PURE__ */ de.createContext(!1);
let yo = !!(typeof window < "u" && window.document && window.document.createElement), Fn = /* @__PURE__ */ new WeakMap();
function ko(e = !1) {
  let t = qe(Ma), n = te(null);
  if (n.current === null && !e) {
    var r, s;
    let o = (s = de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || s === void 0 || (r = s.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (o) {
      let i = Fn.get(o);
      i == null ? Fn.set(o, {
        id: t.current,
        state: o.memoizedState
      }) : o.memoizedState !== i.state && (t.current = i.id, Fn.delete(o));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function So(e) {
  let t = qe(Ma);
  t === At && !yo && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = ko(!!e), r = t === At && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function wo(e) {
  let t = de.useId(), [n] = ne(No()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${At.prefix}`;
  return e || `${r}-${t}`;
}
const _o = typeof de.useId == "function" ? wo : So;
function To() {
  return !1;
}
function $o() {
  return !0;
}
function Co(e) {
  return () => {
  };
}
function No() {
  return typeof de.useSyncExternalStore == "function" ? de.useSyncExternalStore(Co, To, $o) : qe(vo);
}
let jo = !!(typeof window < "u" && window.document && window.document.createElement), lt = /* @__PURE__ */ new Map(), kt;
typeof FinalizationRegistry < "u" && (kt = new FinalizationRegistry((e) => {
  lt.delete(e);
}));
function Yr(e) {
  let [t, n] = ne(e), r = te(null), s = _o(t), o = te(null);
  if (kt && kt.register(o, s), jo) {
    const i = lt.get(s);
    i && !i.includes(r) ? i.push(r) : lt.set(s, [
      r
    ]);
  }
  return $n(() => {
    let i = s;
    return () => {
      kt && kt.unregister(o), lt.delete(i);
    };
  }, [
    s
  ]), se(() => {
    let i = r.current;
    return i && n(i), () => {
      i && (r.current = null);
    };
  }), s;
}
function Eo(e, t) {
  if (e === t) return e;
  let n = lt.get(e);
  if (n)
    return n.forEach((s) => s.current = t), t;
  let r = lt.get(t);
  return r ? (r.forEach((s) => s.current = e), e) : t;
}
function Ba(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const pe = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, ve = (e) => e && "window" in e && e.window === e ? e : pe(e).defaultView || window;
function Fo(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Do(e) {
  return Fo(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Po = !1;
function yr() {
  return Po;
}
function ce(e, t) {
  if (!yr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Do(n) ? n = n.host : n = n.parentNode;
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
function La(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = La(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Mo() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = La(e)) && (r && (r += " "), r += t);
  return r;
}
function Ke(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let s in r) {
      let o = t[s], i = r[s];
      typeof o == "function" && typeof i == "function" && // This is a lot faster than a regex.
      s[0] === "o" && s[1] === "n" && s.charCodeAt(2) >= /* 'A' */
      65 && s.charCodeAt(2) <= /* 'Z' */
      90 ? t[s] = Ba(o, i) : (s === "className" || s === "UNSAFE_className") && typeof o == "string" && typeof i == "string" ? t[s] = Mo(o, i) : s === "id" && o && i ? t.id = Eo(o, i) : t[s] = i !== void 0 ? i : o;
    }
  }
  return t;
}
function Bo(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const r = e.map((s) => {
      const o = Vr(s, t);
      return n || (n = typeof o == "function"), o;
    });
    if (n) return () => {
      r.forEach((s, o) => {
        typeof s == "function" ? s() : Vr(e[o], null);
      });
    };
  };
}
function Vr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const Lo = /* @__PURE__ */ new Set([
  "id"
]), Io = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Ro = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Ho = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), Gr = /* @__PURE__ */ new Set([
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
]), Ao = /^(data-.*)$/;
function Ia(e, t = {}) {
  let { labelable: n, isLink: r, global: s, events: o = s, propNames: i } = t, l = {};
  for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (Lo.has(u) || n && Io.has(u) || r && Ro.has(u) || s && Ho.has(u) || o && Gr.has(u) || u.endsWith("Capture") && Gr.has(u.slice(0, -7)) || i?.has(u) || Ao.test(u)) && (l[u] = e[u]);
  return l;
}
function ut(e) {
  if (zo()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Wo(e);
    e.focus(), Oo(t);
  }
}
let Ft = null;
function zo() {
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
function Wo(e) {
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
function Oo(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Cn(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function kr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function ze(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const dt = ze(function() {
  return kr(/^Mac/i);
}), Uo = ze(function() {
  return kr(/^iPhone/i);
}), Ra = ze(function() {
  return kr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  dt() && navigator.maxTouchPoints > 1;
}), Sr = ze(function() {
  return Uo() || Ra();
});
ze(function() {
  return dt() || Sr();
});
const Yo = ze(function() {
  return Cn(/AppleWebKit/i) && !Vo();
}), Vo = ze(function() {
  return Cn(/Chrome/i);
}), Ha = ze(function() {
  return Cn(/Android/i);
}), Go = ze(function() {
  return Cn(/Firefox/i);
});
function _t(e, t, n = !0) {
  var r, s;
  let { metaKey: o, ctrlKey: i, altKey: l, shiftKey: u } = t;
  Go() && (!((s = window.event) === null || s === void 0 || (r = s.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (dt() ? o = !0 : i = !0);
  let f = Yo() && dt() && !Ra() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: o,
    ctrlKey: i,
    altKey: l,
    shiftKey: u
  }) : new MouseEvent("click", {
    metaKey: o,
    ctrlKey: i,
    altKey: l,
    shiftKey: u,
    bubbles: !0,
    cancelable: !0
  });
  _t.isOpening = n, ut(e), e.dispatchEvent(f), _t.isOpening = !1;
}
_t.isOpening = !1;
let Ge = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Set();
function Kr() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let s = Ge.get(r.target);
    s || (s = /* @__PURE__ */ new Set(), Ge.set(r.target, s), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), s.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let s = Ge.get(r.target);
    if (s && (s.delete(r.propertyName), s.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ge.delete(r.target)), Ge.size === 0)) {
      for (let o of Wn) o();
      Wn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Kr() : document.addEventListener("DOMContentLoaded", Kr));
function Ko() {
  for (const [e] of Ge)
    "isConnected" in e && !e.isConnected && Ge.delete(e);
}
function Aa(e) {
  requestAnimationFrame(() => {
    Ko(), Ge.size === 0 ? e() : Wn.add(e);
  });
}
function wr() {
  let e = te(/* @__PURE__ */ new Map()), t = J((s, o, i, l) => {
    let u = l?.once ? (...f) => {
      e.current.delete(i), i(...f);
    } : i;
    e.current.set(i, {
      type: o,
      eventTarget: s,
      fn: u,
      options: l
    }), s.addEventListener(o, u, l);
  }, []), n = J((s, o, i, l) => {
    var u;
    let f = ((u = e.current.get(i)) === null || u === void 0 ? void 0 : u.fn) || i;
    s.removeEventListener(o, f, l), e.current.delete(i);
  }, []), r = J(() => {
    e.current.forEach((s, o) => {
      n(s.eventTarget, s.type, o, s.options);
    });
  }, [
    n
  ]);
  return se(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function qo(e) {
  const t = te(null), n = te(void 0), r = J((s) => {
    if (typeof e == "function") {
      const o = e, i = o(s);
      return () => {
        typeof i == "function" ? i() : o(null);
      };
    } else if (e)
      return e.current = s, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return oe(() => ({
    get current() {
      return t.current;
    },
    set current(s) {
      t.current = s, n.current && (n.current(), n.current = void 0), s != null && (n.current = r(s));
    }
  }), [
    r
  ]);
}
function za(e, t) {
  $n(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function On(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Ha() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Xo(e) {
  return !Ha() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const Zo = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Jo(e) {
  const t = ve(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, s = n !== "none" && r !== "hidden" && r !== "collapse";
  if (s) {
    const { getComputedStyle: o } = e.ownerDocument.defaultView;
    let { display: i, visibility: l } = o(e);
    s = i !== "none" && l !== "hidden" && l !== "collapse";
  }
  return s;
}
function Qo(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Wa(e, t) {
  return Zo ? e.checkVisibility() : e.nodeName !== "#comment" && Jo(e) && Qo(e, t) && (!e.parentElement || Wa(e.parentElement, e));
}
const Oa = [
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
], ei = Oa.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Oa.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function ti(e) {
  return e.matches(ei) && Wa(e) && !ni(e);
}
function ni(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const ri = Symbol("default");
function ai(e) {
  let { className: t, style: n, children: r, defaultClassName: s, defaultChildren: o, defaultStyle: i, values: l } = e;
  return oe(() => {
    let u, f, d;
    return typeof t == "function" ? u = t({
      ...l,
      defaultClassName: s
    }) : u = t, typeof n == "function" ? f = n({
      ...l,
      defaultStyle: i || {}
    }) : f = n, typeof r == "function" ? d = r({
      ...l,
      defaultChildren: o
    }) : r == null ? d = o : d = r, {
      className: u ?? s,
      style: f || i ? {
        ...i,
        ...f
      } : void 0,
      children: d ?? o,
      "data-rac": ""
    };
  }, [
    t,
    n,
    r,
    s,
    o,
    i,
    l
  ]);
}
function si(e, t) {
  let n = qe(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = t || ri;
    if (!n.slots[r]) {
      let s = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`)), o = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${o} Valid slot names are ${s}.`);
    }
    return n.slots[r];
  }
  return n;
}
function oi(e, t, n) {
  let r = si(n, e.slot) || {}, { ref: s, ...o } = r, i = qo(oe(() => Bo(t, s), [
    t,
    s
  ])), l = Ke(o, e);
  return "style" in o && o.style && "style" in e && e.style && (typeof o.style == "function" || typeof e.style == "function" ? l.style = (u) => {
    let f = typeof o.style == "function" ? o.style(u) : o.style, d = {
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
    ...o.style,
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
const ii = /* @__PURE__ */ Tn(!1);
function li(e) {
  let t = (n, r) => qe(ii) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, tt(t);
}
function _r(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ua(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Ya(e) {
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
      let s = r.target, o = (i) => {
        if (t.current.isFocused = !1, s.disabled) {
          let l = _r(i);
          n(l);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      s.addEventListener("focusout", o, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && s.disabled) {
          var i;
          (i = t.current.observer) === null || i === void 0 || i.disconnect();
          let l = s === document.activeElement ? null : document.activeElement;
          s.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: l
          })), s.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: l
          }));
        }
      }), t.current.observer.observe(s, {
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
function qr(e) {
  for (; e && !ti(e); ) e = e.parentElement;
  let t = ve(e), n = t.document.activeElement;
  if (!n || n === e) return;
  zt = !0;
  let r = !1, s = (d) => {
    (d.target === n || r) && d.stopImmediatePropagation();
  }, o = (d) => {
    (d.target === n || r) && (d.stopImmediatePropagation(), !e && !r && (r = !0, ut(n), u()));
  }, i = (d) => {
    (d.target === e || r) && d.stopImmediatePropagation();
  }, l = (d) => {
    (d.target === e || r) && (d.stopImmediatePropagation(), r || (r = !0, ut(n), u()));
  };
  t.addEventListener("blur", s, !0), t.addEventListener("focusout", o, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", i, !0);
  let u = () => {
    cancelAnimationFrame(f), t.removeEventListener("blur", s, !0), t.removeEventListener("focusout", o, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", i, !0), zt = !1, r = !1;
  }, f = requestAnimationFrame(u);
  return u;
}
let st = "default", Un = "", Rt = /* @__PURE__ */ new WeakMap();
function Xr(e) {
  if (Sr()) {
    if (st === "default") {
      const t = pe(e);
      Un = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    st = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Rt.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Dn(e) {
  if (Sr()) {
    if (st !== "disabled") return;
    st = "restoring", setTimeout(() => {
      Aa(() => {
        if (st === "restoring") {
          const t = pe(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Un || ""), Un = "", st = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Rt.has(e)) {
    let t = Rt.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Rt.delete(e);
  }
}
const Va = de.createContext({
  register: () => {
  }
});
Va.displayName = "PressResponderContext";
function ci(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Ga(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function ui(e, t) {
  var n = Ga(e, t, "get");
  return ci(e, n);
}
function di(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function fi(e, t, n) {
  di(e, t), t.set(e, n);
}
function hi(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Zr(e, t, n) {
  var r = Ga(e, t, "set");
  return hi(e, r, n), n;
}
function pi(e) {
  let t = qe(Va);
  if (t) {
    let { register: n, ...r } = t;
    e = Ke(r, e), n();
  }
  return za(t, e.ref), e;
}
var Dt = /* @__PURE__ */ new WeakMap();
class Pt {
  continuePropagation() {
    Zr(this, Dt, !1);
  }
  get shouldStopPropagation() {
    return ui(this, Dt);
  }
  constructor(t, n, r, s) {
    fi(this, Dt, {
      writable: !0,
      value: void 0
    }), Zr(this, Dt, !0);
    var o;
    let i = (o = s?.target) !== null && o !== void 0 ? o : r.currentTarget;
    const l = i?.getBoundingClientRect();
    let u, f = 0, d, p = null;
    r.clientX != null && r.clientY != null && (d = r.clientX, p = r.clientY), l && (d != null && p != null ? (u = d - l.left, f = p - l.top) : (u = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = f;
  }
}
const Jr = Symbol("linkClicked"), Qr = "react-aria-pressable-style", ea = "data-react-aria-pressable";
function mi(e) {
  let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: s, onPressUp: o, onClick: i, isDisabled: l, isPressed: u, preventFocusOnPress: f, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: g, ...x } = pi(e), [T, m] = ne(!1), y = te({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: S, removeAllGlobalListeners: $ } = wr(), P = Ve((c, E) => {
    let K = y.current;
    if (l || K.didFirePressStart) return !1;
    let j = !0;
    if (K.isTriggeringEvent = !0, r) {
      let M = new Pt("pressstart", E, c);
      r(M), j = M.shouldStopPropagation;
    }
    return n && n(!0), K.isTriggeringEvent = !1, K.didFirePressStart = !0, m(!0), j;
  }), w = Ve((c, E, K = !0) => {
    let j = y.current;
    if (!j.didFirePressStart) return !1;
    j.didFirePressStart = !1, j.isTriggeringEvent = !0;
    let M = !0;
    if (s) {
      let h = new Pt("pressend", E, c);
      s(h), M = h.shouldStopPropagation;
    }
    if (n && n(!1), m(!1), t && K && !l) {
      let h = new Pt("press", E, c);
      t(h), M && (M = h.shouldStopPropagation);
    }
    return j.isTriggeringEvent = !1, M;
  }), R = Ve((c, E) => {
    let K = y.current;
    if (l) return !1;
    if (o) {
      K.isTriggeringEvent = !0;
      let j = new Pt("pressup", E, c);
      return o(j), K.isTriggeringEvent = !1, j.shouldStopPropagation;
    }
    return !0;
  }), B = Ve((c) => {
    let E = y.current;
    if (E.isPressed && E.target) {
      E.didFirePressStart && E.pointerType != null && w(Xe(E.target, c), E.pointerType, !1), E.isPressed = !1, E.isOverTarget = !1, E.activePointerId = null, E.pointerType = null, $(), p || Dn(E.target);
      for (let K of E.disposables) K();
      E.disposables = [];
    }
  }), L = Ve((c) => {
    d && B(c);
  }), b = Ve((c) => {
    i?.(c);
  }), v = Ve((c, E) => {
    if (i) {
      let K = new MouseEvent("click", c);
      Ua(K, E), i(_r(K));
    }
  }), C = oe(() => {
    let c = y.current, E = {
      onKeyDown(j) {
        if (Pn(j.nativeEvent, j.currentTarget) && ce(j.currentTarget, ie(j.nativeEvent))) {
          var M;
          ra(ie(j.nativeEvent), j.key) && j.preventDefault();
          let h = !0;
          if (!c.isPressed && !j.repeat) {
            c.target = j.currentTarget, c.isPressed = !0, c.pointerType = "keyboard", h = P(j, "keyboard");
            let A = j.currentTarget, Y = (X) => {
              Pn(X, A) && !X.repeat && ce(A, ie(X)) && c.target && R(Xe(c.target, X), "keyboard");
            };
            S(pe(j.currentTarget), "keyup", Ba(Y, K), !0);
          }
          h && j.stopPropagation(), j.metaKey && dt() && ((M = c.metaKeyEvents) === null || M === void 0 || M.set(j.key, j.nativeEvent));
        } else j.key === "Meta" && (c.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(j) {
        if (!(j && !ce(j.currentTarget, ie(j.nativeEvent))) && j && j.button === 0 && !c.isTriggeringEvent && !_t.isOpening) {
          let M = !0;
          if (l && j.preventDefault(), !c.ignoreEmulatedMouseEvents && !c.isPressed && (c.pointerType === "virtual" || On(j.nativeEvent))) {
            let h = P(j, "virtual"), A = R(j, "virtual"), Y = w(j, "virtual");
            b(j), M = h && A && Y;
          } else if (c.isPressed && c.pointerType !== "keyboard") {
            let h = c.pointerType || j.nativeEvent.pointerType || "virtual", A = R(Xe(j.currentTarget, j), h), Y = w(Xe(j.currentTarget, j), h, !0);
            M = A && Y, c.isOverTarget = !1, b(j), B(j);
          }
          c.ignoreEmulatedMouseEvents = !1, M && j.stopPropagation();
        }
      }
    }, K = (j) => {
      var M;
      if (c.isPressed && c.target && Pn(j, c.target)) {
        var h;
        ra(ie(j), j.key) && j.preventDefault();
        let Y = ie(j), X = ce(c.target, ie(j));
        w(Xe(c.target, j), "keyboard", X), X && v(j, c.target), $(), j.key !== "Enter" && Tr(c.target) && ce(c.target, Y) && !j[Jr] && (j[Jr] = !0, _t(c.target, j, !1)), c.isPressed = !1, (h = c.metaKeyEvents) === null || h === void 0 || h.delete(j.key);
      } else if (j.key === "Meta" && (!((M = c.metaKeyEvents) === null || M === void 0) && M.size)) {
        var A;
        let Y = c.metaKeyEvents;
        c.metaKeyEvents = void 0;
        for (let X of Y.values()) (A = c.target) === null || A === void 0 || A.dispatchEvent(new KeyboardEvent("keyup", X));
      }
    };
    if (typeof PointerEvent < "u") {
      E.onPointerDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (Xo(h.nativeEvent)) {
          c.pointerType = "virtual";
          return;
        }
        c.pointerType = h.pointerType;
        let A = !0;
        if (!c.isPressed) {
          c.isPressed = !0, c.isOverTarget = !0, c.activePointerId = h.pointerId, c.target = h.currentTarget, p || Xr(c.target), A = P(h, c.pointerType);
          let Y = ie(h.nativeEvent);
          "releasePointerCapture" in Y && Y.releasePointerCapture(h.pointerId), S(pe(h.currentTarget), "pointerup", j, !1), S(pe(h.currentTarget), "pointercancel", M, !1);
        }
        A && h.stopPropagation();
      }, E.onMouseDown = (h) => {
        if (ce(h.currentTarget, ie(h.nativeEvent)) && h.button === 0) {
          if (f) {
            let A = qr(h.target);
            A && c.disposables.push(A);
          }
          h.stopPropagation();
        }
      }, E.onPointerUp = (h) => {
        !ce(h.currentTarget, ie(h.nativeEvent)) || c.pointerType === "virtual" || h.button === 0 && !c.isPressed && R(h, c.pointerType || h.pointerType);
      }, E.onPointerEnter = (h) => {
        h.pointerId === c.activePointerId && c.target && !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, P(Xe(c.target, h), c.pointerType));
      }, E.onPointerLeave = (h) => {
        h.pointerId === c.activePointerId && c.target && c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, w(Xe(c.target, h), c.pointerType, !1), L(h));
      };
      let j = (h) => {
        if (h.pointerId === c.activePointerId && c.isPressed && h.button === 0 && c.target) {
          if (ce(c.target, ie(h)) && c.pointerType != null) {
            let A = !1, Y = setTimeout(() => {
              c.isPressed && c.target instanceof HTMLElement && (A ? B(h) : (ut(c.target), c.target.click()));
            }, 80);
            S(h.currentTarget, "click", () => A = !0, !0), c.disposables.push(() => clearTimeout(Y));
          } else B(h);
          c.isOverTarget = !1;
        }
      }, M = (h) => {
        B(h);
      };
      E.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && B(h);
      };
    } else if (process.env.NODE_ENV === "test") {
      E.onMouseDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (c.ignoreEmulatedMouseEvents) {
          h.stopPropagation();
          return;
        }
        if (c.isPressed = !0, c.isOverTarget = !0, c.target = h.currentTarget, c.pointerType = On(h.nativeEvent) ? "virtual" : "mouse", uo(() => P(h, c.pointerType)) && h.stopPropagation(), f) {
          let Y = qr(h.target);
          Y && c.disposables.push(Y);
        }
        S(pe(h.currentTarget), "mouseup", j, !1);
      }, E.onMouseEnter = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let A = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !0, A = P(h, c.pointerType)), A && h.stopPropagation();
      }, E.onMouseLeave = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let A = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !1, A = w(h, c.pointerType, !1), L(h)), A && h.stopPropagation();
      }, E.onMouseUp = (h) => {
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
      E.onTouchStart = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let A = gi(h.nativeEvent);
        if (!A) return;
        c.activePointerId = A.identifier, c.ignoreEmulatedMouseEvents = !0, c.isOverTarget = !0, c.isPressed = !0, c.target = h.currentTarget, c.pointerType = "touch", p || Xr(c.target), P(Ye(c.target, h), c.pointerType) && h.stopPropagation(), S(ve(h.currentTarget), "scroll", M, !0);
      }, E.onTouchMove = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let A = ta(h.nativeEvent, c.activePointerId), Y = !0;
        A && na(A, h.currentTarget) ? !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, Y = P(Ye(c.target, h), c.pointerType)) : c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, Y = w(Ye(c.target, h), c.pointerType, !1), L(Ye(c.target, h))), Y && h.stopPropagation();
      }, E.onTouchEnd = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let A = ta(h.nativeEvent, c.activePointerId), Y = !0;
        A && na(A, h.currentTarget) && c.pointerType != null ? (R(Ye(c.target, h), c.pointerType), Y = w(Ye(c.target, h), c.pointerType), v(h.nativeEvent, c.target)) : c.isOverTarget && c.pointerType != null && (Y = w(Ye(c.target, h), c.pointerType, !1)), Y && h.stopPropagation(), c.isPressed = !1, c.activePointerId = null, c.isOverTarget = !1, c.ignoreEmulatedMouseEvents = !0, c.target && !p && Dn(c.target), $();
      }, E.onTouchCancel = (h) => {
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
      E.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && B(h);
      };
    }
    return E;
  }, [
    S,
    l,
    f,
    $,
    p,
    B,
    L,
    w,
    P,
    R,
    b,
    v
  ]);
  return se(() => {
    if (!g || process.env.NODE_ENV === "test") return;
    const c = pe(g.current);
    if (!c || !c.head || c.getElementById(Qr)) return;
    const E = c.createElement("style");
    E.id = Qr, E.textContent = `
@layer {
  [${ea}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), c.head.prepend(E);
  }, [
    g
  ]), se(() => {
    let c = y.current;
    return () => {
      var E;
      p || Dn((E = c.target) !== null && E !== void 0 ? E : void 0);
      for (let K of c.disposables) K();
      c.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: u || T,
    pressProps: Ke(x, C, {
      [ea]: !0
    })
  };
}
function Tr(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Pn(e, t) {
  const { key: n, code: r } = e, s = t, o = s.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(s instanceof ve(s).HTMLInputElement && !Ka(s, n) || s instanceof ve(s).HTMLTextAreaElement || s.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && Tr(s)) && n !== "Enter");
}
function gi(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function ta(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (s.identifier === t) return s;
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
function bi(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function xi(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function na(e, t) {
  let n = t.getBoundingClientRect(), r = bi(e);
  return xi(n, r);
}
function vi(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Tr(e);
}
function ra(e, t) {
  return e instanceof HTMLInputElement ? !Ka(e, t) : vi(e);
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
function Ka(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : yi.has(e.type);
}
let mt = null, Yn = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map(), Qe = !1, Vn = !1;
const ki = {
  Tab: !0,
  Escape: !0
};
function $r(e, t) {
  for (let n of Yn) n(e, t);
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
function qa(e) {
  On(e) && (Qe = !0, mt = "virtual");
}
function Xa(e) {
  e.target === window || e.target === document || zt || !e.isTrusted || (!Qe && !Vn && (mt = "virtual", $r("virtual", e)), Qe = !1, Vn = !1);
}
function Za() {
  zt || (Qe = !1, Vn = !0);
}
function Gn(e) {
  if (typeof window > "u" || typeof document > "u" || St.get(ve(e))) return;
  const t = ve(e), n = pe(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Qe = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Wt, !0), n.addEventListener("keyup", Wt, !0), n.addEventListener("click", qa, !0), t.addEventListener("focus", Xa, !0), t.addEventListener("blur", Za, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", xe, !0), n.addEventListener("pointermove", xe, !0), n.addEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", xe, !0), n.addEventListener("mousemove", xe, !0), n.addEventListener("mouseup", xe, !0)), t.addEventListener("beforeunload", () => {
    Ja(e);
  }, {
    once: !0
  }), St.set(t, {
    focus: r
  });
}
const Ja = (e, t) => {
  const n = ve(e), r = pe(e);
  t && r.removeEventListener("DOMContentLoaded", t), St.has(n) && (n.HTMLElement.prototype.focus = St.get(n).focus, r.removeEventListener("keydown", Wt, !0), r.removeEventListener("keyup", Wt, !0), r.removeEventListener("click", qa, !0), n.removeEventListener("focus", Xa, !0), n.removeEventListener("blur", Za, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", xe, !0), r.removeEventListener("pointermove", xe, !0), r.removeEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", xe, !0), r.removeEventListener("mousemove", xe, !0), r.removeEventListener("mouseup", xe, !0)), St.delete(n));
};
function wi(e) {
  const t = pe(e);
  let n;
  return t.readyState !== "loading" ? Gn(e) : (n = () => {
    Gn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Ja(e, n);
}
typeof document < "u" && wi();
function Qa() {
  return mt !== "pointer";
}
function _i() {
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
  let r = pe(n?.target);
  const s = typeof window < "u" ? ve(n?.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? ve(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, i = typeof window < "u" ? ve(n?.target).HTMLElement : HTMLElement, l = typeof window < "u" ? ve(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof s && !Ti.has(r.activeElement.type) || r.activeElement instanceof o || r.activeElement instanceof i && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !ki[n.key]);
}
function Ci(e, t, n) {
  Gn(), se(() => {
    let r = (s, o) => {
      $i(!!n?.isTextInput, s, o) && e(Qa());
    };
    return Yn.add(r), () => {
      Yn.delete(r);
    };
  }, t);
}
function Ni(e) {
  const t = pe(e), n = wt(t);
  if (_i() === "virtual") {
    let r = n;
    Aa(() => {
      wt(t) === r && e.isConnected && ut(e);
    });
  } else ut(e);
}
function es(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: s } = e;
  const o = J((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), s && s(!1), !0;
  }, [
    r,
    s
  ]), i = Ya(o), l = J((u) => {
    const f = pe(u.target), d = f ? wt(f) : wt();
    u.target === u.currentTarget && d === ie(u.nativeEvent) && (n && n(u), s && s(!0), i(u));
  }, [
    s,
    n,
    i
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || s || r) ? l : void 0,
      onBlur: !t && (r || s) ? o : void 0
    }
  };
}
function aa(e) {
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
function ji(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: aa(e.onKeyDown),
      onKeyUp: aa(e.onKeyUp)
    }
  };
}
let Ei = /* @__PURE__ */ de.createContext(null);
function Fi(e) {
  let t = qe(Ei) || {};
  za(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Di(e, t) {
  let { focusProps: n } = es(e), { keyboardProps: r } = ji(e), s = Ke(n, r), o = Fi(t), i = e.isDisabled ? {} : o, l = te(e.autoFocus);
  se(() => {
    l.current && t.current && Ni(t.current), l.current = !1;
  }, [
    t
  ]);
  let u = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (u = void 0), {
    focusableProps: Ke({
      ...s,
      tabIndex: u
    }, i)
  };
}
function Pi(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: s } = e, o = te({
    isFocusWithin: !1
  }), { addGlobalListener: i, removeAllGlobalListeners: l } = wr(), u = J((p) => {
    p.currentTarget.contains(p.target) && o.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (o.current.isFocusWithin = !1, l(), n && n(p), s && s(!1));
  }, [
    n,
    s,
    o,
    l
  ]), f = Ya(u), d = J((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = pe(p.target), x = wt(g);
    if (!o.current.isFocusWithin && x === ie(p.nativeEvent)) {
      r && r(p), s && s(!0), o.current.isFocusWithin = !0, f(p);
      let T = p.currentTarget;
      i(g, "focus", (m) => {
        if (o.current.isFocusWithin && !ce(T, m.target)) {
          let y = new g.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          Ua(y, T);
          let S = _r(y);
          u(S);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    s,
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
function sa(e) {
  e.pointerType === "touch" && Kn();
}
function Mi() {
  if (!(typeof document > "u"))
    return Mt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", sa) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Kn)), Mt++, () => {
      Mt--, !(Mt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", sa) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Kn));
    };
}
function Bi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: s } = e, [o, i] = ne(!1), l = te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(Mi, []);
  let { addGlobalListener: u, removeAllGlobalListeners: f } = wr(), { hoverProps: d, triggerHoverEnd: p } = oe(() => {
    let g = (m, y) => {
      if (l.pointerType = y, s || y === "touch" || l.isHovered || !m.currentTarget.contains(m.target)) return;
      l.isHovered = !0;
      let S = m.currentTarget;
      l.target = S, u(pe(m.target), "pointerover", ($) => {
        l.isHovered && l.target && !ce(l.target, $.target) && x($, $.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: S,
        pointerType: y
      }), n && n(!0), i(!0);
    }, x = (m, y) => {
      let S = l.target;
      l.pointerType = "", l.target = null, !(y === "touch" || !l.isHovered || !S) && (l.isHovered = !1, f(), r && r({
        type: "hoverend",
        target: S,
        pointerType: y
      }), n && n(!1), i(!1));
    }, T = {};
    return typeof PointerEvent < "u" ? (T.onPointerEnter = (m) => {
      Ot && m.pointerType === "mouse" || g(m, m.pointerType);
    }, T.onPointerLeave = (m) => {
      !s && m.currentTarget.contains(m.target) && x(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (T.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, T.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !Ot && g(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, T.onMouseLeave = (m) => {
      !s && m.currentTarget.contains(m.target) && x(m, "mouse");
    }), {
      hoverProps: T,
      triggerHoverEnd: x
    };
  }, [
    t,
    n,
    r,
    s,
    l,
    u,
    f
  ]);
  return se(() => {
    s && p({
      currentTarget: l.target
    }, l.pointerType);
  }, [
    s
  ]), {
    hoverProps: d,
    isHovered: o
  };
}
function Li(e, t) {
  let { elementType: n = "button", isDisabled: r, onPress: s, onPressStart: o, onPressEnd: i, onPressUp: l, onPressChange: u, preventFocusOnPress: f, allowFocusWhenDisabled: d, onClick: p, href: g, target: x, rel: T, type: m = "button" } = e, y;
  n === "button" ? y = {
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
  } : y = {
    role: "button",
    href: n === "a" && !r ? g : void 0,
    target: n === "a" ? x : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? T : void 0
  };
  let { pressProps: S, isPressed: $ } = mi({
    onPressStart: o,
    onPressEnd: i,
    onPressChange: u,
    onPress: s,
    onPressUp: l,
    onClick: p,
    isDisabled: r,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: P } = Di(e, t);
  d && (P.tabIndex = r ? -1 : P.tabIndex);
  let w = Ke(P, S, Ia(e, {
    labelable: !0
  }));
  return {
    isPressed: $,
    buttonProps: Ke(y, w, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function Ii(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, s = te({
    isFocused: !1,
    isFocusVisible: t || Qa()
  }), [o, i] = ne(!1), [l, u] = ne(() => s.current.isFocused && s.current.isFocusVisible), f = J(() => u(s.current.isFocused && s.current.isFocusVisible), []), d = J((x) => {
    s.current.isFocused = x, i(x), f();
  }, [
    f
  ]);
  Ci((x) => {
    s.current.isFocusVisible = x, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = es({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: g } = Pi({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: o,
    isFocusVisible: l,
    focusProps: r ? g : p
  };
}
const ts = 7e3;
let _e = null;
function oa(e, t = "assertive", n = ts) {
  _e ? _e.announce(e, t, n) : (_e = new Ri(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? _e.announce(e, t, n) : setTimeout(() => {
    _e?.isAttached() && _e?.announce(e, t, n);
  }, 100));
}
class Ri {
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
  announce(t, n = "assertive", r = ts) {
    var s, o;
    if (!this.node) return;
    let i = document.createElement("div");
    typeof t == "object" ? (i.setAttribute("role", "img"), i.setAttribute("aria-labelledby", t["aria-labelledby"])) : i.textContent = t, n === "assertive" ? (s = this.assertiveLog) === null || s === void 0 || s.appendChild(i) : (o = this.politeLog) === null || o === void 0 || o.appendChild(i), t !== "" && setTimeout(() => {
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
const Hi = /* @__PURE__ */ Tn(null), Ai = /* @__PURE__ */ Tn({}), zi = /* @__PURE__ */ li(function(t, n) {
  [t, n] = oi(t, n, Ai), t = Wi(t);
  let r = t, { isPending: s } = r, { buttonProps: o, isPressed: i } = Li(t, n), { focusProps: l, isFocused: u, isFocusVisible: f } = Ii(t), { hoverProps: d, isHovered: p } = Bi({
    ...t,
    isDisabled: t.isDisabled || s
  }), g = {
    isHovered: p,
    isPressed: (r.isPressed || i) && !s,
    isFocused: u,
    isFocusVisible: f,
    isDisabled: t.isDisabled || !1,
    isPending: s ?? !1
  }, x = ai({
    ...t,
    values: g,
    defaultClassName: "react-aria-Button"
  }), T = Yr(o.id), m = Yr(), y = o["aria-labelledby"];
  s && (y ? y = `${y} ${m}` : o["aria-label"] && (y = `${T} ${m}`));
  let S = te(s);
  se(() => {
    let P = {
      "aria-labelledby": y || T
    };
    (!S.current && u && s || S.current && u && !s) && oa(P, "assertive"), S.current = s;
  }, [
    s,
    u,
    y,
    T
  ]);
  let $ = Ia(t, {
    global: !0
  });
  return delete $.onClick, /* @__PURE__ */ de.createElement("button", {
    ...Ke($, x, o, l, d),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: o.type === "submit" && s ? "button" : o.type,
    id: T,
    ref: n,
    "aria-labelledby": y,
    slot: t.slot || void 0,
    "aria-disabled": s ? "true" : o["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": g.isPressed || void 0,
    "data-hovered": p || void 0,
    "data-focused": u || void 0,
    "data-pending": s || void 0,
    "data-focus-visible": f || void 0
  }, /* @__PURE__ */ de.createElement(Hi.Provider, {
    value: {
      id: m
    }
  }, x.children));
});
function Wi(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const { forwardRef: Oi } = lo, Cr = Oi(
  ({
    children: e,
    variant: t = "primary",
    size: n = "default",
    fullWidth: r = !1,
    className: s = "",
    ...o
  }, i) => {
    const l = [
      "nhs-aria-button",
      `nhs-aria-button--${t}`,
      n !== "default" ? `nhs-aria-button--${n}` : "",
      r ? "nhs-aria-button--full-width" : "",
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ a.jsx(
      zi,
      {
        ref: i,
        className: l,
        ...o,
        children: e
      }
    );
  }
);
Cr.displayName = "Button";
const mp = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: r,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = O(
    "nhsuk-back-link",
    r
  ), u = O(
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
  return /* @__PURE__ */ a.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ a.jsx(
    "button",
    {
      className: u,
      onClick: o,
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
}, Nr = ({
  text: e,
  html: t,
  children: n,
  color: r = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...f
}) => {
  const d = O(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${r}`]: r !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    u
  ), p = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ a.jsxs("strong", { className: d, ...f, children: [
    n || (t ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ a.jsx(
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
}, jr = ({
  id: e,
  name: t,
  type: n = "text",
  value: r,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: f = !1,
  describedBy: d,
  className: p,
  width: g = "full",
  inputMode: x,
  autoComplete: T,
  maxLength: m,
  minLength: y,
  pattern: S,
  step: $,
  min: P,
  max: w,
  showValueLabels: R = !1,
  showCurrentValue: B = !1,
  valueLabels: L,
  onChange: b,
  onBlur: v,
  onFocus: C,
  onKeyDown: c,
  ...E
}) => {
  const [K, j] = ne(r || s || (n === "range" ? P || "0" : ""));
  se(() => {
    r !== void 0 && j(r);
  }, [r]);
  const M = (X) => {
    j(X.target.value), b?.(X);
  }, h = n === "range", A = O(
    "nhsuk-input",
    {
      "nhsuk-input--error": f,
      "nhsuk-input--range": h,
      [`nhsuk-input--width-${g}`]: g !== "full" && !h
    },
    p
  ), Y = h ? /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    R && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ a.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || P || "0" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: A,
          id: e,
          name: t,
          type: n,
          value: K,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: u,
          "aria-describedby": d,
          inputMode: x,
          autoComplete: T,
          maxLength: m,
          minLength: y,
          pattern: S,
          step: $,
          min: P,
          max: w,
          onChange: M,
          onBlur: v,
          onFocus: C,
          onKeyDown: c,
          ...E
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || w || "100" })
    ] }),
    !R && /* @__PURE__ */ a.jsx(
      "input",
      {
        className: A,
        id: e,
        name: t,
        type: n,
        value: K,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: u,
        "aria-describedby": d,
        inputMode: x,
        autoComplete: T,
        maxLength: m,
        minLength: y,
        pattern: S,
        step: $,
        min: P,
        max: w,
        onChange: M,
        onBlur: v,
        onFocus: C,
        onKeyDown: c,
        ...E
      }
    ),
    B && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ a.jsx("strong", { children: K })
    ] }) })
  ] }) : null;
  return h ? Y : /* @__PURE__ */ a.jsx(
    "input",
    {
      className: A,
      id: e,
      name: t,
      type: n,
      value: r,
      defaultValue: s,
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: x,
      autoComplete: T,
      maxLength: m,
      minLength: y,
      pattern: S,
      step: $,
      min: P,
      max: w,
      onChange: b,
      onBlur: v,
      onFocus: C,
      onKeyDown: c,
      ...E
    }
  );
}, Er = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: r = "m",
  children: s,
  ...o
}) => {
  const i = O(
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
      ...o,
      children: n ? /* @__PURE__ */ a.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s
    }
  );
}, Fr = ({
  children: e,
  legend: t,
  className: n,
  describedBy: r,
  ...s
}) => {
  const o = O(
    "nhsuk-fieldset",
    n
  ), i = O(
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
      className: o,
      "aria-describedby": r,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ a.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, Ui = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: r,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: f = !1,
  onChange: d,
  fieldsetAttributes: p,
  attributes: g,
  ...x
}) => {
  const [T, m] = ne(
    e.filter((b) => b.checked).map((b) => b.value)
  ), y = n || t, S = i ? `${y}-hint` : void 0, $ = l ? `${y}-error` : void 0, P = [S, $].filter(Boolean).join(" ") || void 0, w = (b, v) => {
    let C;
    v ? C = [...T, b] : C = T.filter((c) => c !== b), m(C), d?.(C);
  }, R = () => e.map((b, v) => {
    const C = `${y}-${v + 1}`, c = `${C}-conditional`, E = T.includes(b.value), K = b.disabled || !1;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: C,
          name: t,
          type: "checkbox",
          value: b.value,
          checked: E,
          disabled: K,
          onChange: (j) => w(b.value, j.target.checked),
          "aria-describedby": b.hint ? `${C}-hint` : P,
          ...b.conditional && {
            "aria-controls": c,
            "aria-expanded": E ? "true" : "false"
          },
          ...b.attributes
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: C, children: b.text }),
      b.hint && /* @__PURE__ */ a.jsx("div", { id: `${C}-hint`, className: "nhsuk-checkboxes__hint", children: b.hint }),
      b.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: O("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !E
          }),
          id: c,
          children: typeof b.conditional == "object" && b.conditional !== null && "label" in b.conditional && "id" in b.conditional && "name" in b.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            b.conditional.label && /* @__PURE__ */ a.jsx(Er, { htmlFor: b.conditional.id, children: b.conditional.label }),
            /* @__PURE__ */ a.jsx(jr, { ...b.conditional })
          ] }) : b.conditional
        }
      )
    ] }, b.value);
  }), B = O(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": f
    },
    u
  ), L = O("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ a.jsx("div", { className: L, ...g, ...x, children: /* @__PURE__ */ a.jsxs(
    Fr,
    {
      legend: r ? {
        text: r,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: P,
      ...p,
      children: [
        i && /* @__PURE__ */ a.jsx("div", { id: S, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ a.jsxs("div", { id: $, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: B, children: R() })
      ]
    }
  ) });
};
Ui.displayName = "Checkboxes";
const Yi = ({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: f,
  className: d,
  rows: p = 5,
  cols: g,
  maxLength: x,
  minLength: T,
  wrap: m = "soft",
  resize: y = "vertical",
  autoComplete: S,
  spellCheck: $,
  onChange: P,
  onBlur: w,
  onFocus: R,
  onKeyDown: B,
  ...L
}) => {
  const b = O(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": u,
      [`nhsuk-textarea--resize-${y}`]: y !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ a.jsx(
    "textarea",
    {
      className: b,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": f,
      rows: p,
      cols: g,
      maxLength: x,
      minLength: T,
      wrap: m,
      autoComplete: S,
      spellCheck: $,
      onChange: P,
      onBlur: w,
      onFocus: R,
      onKeyDown: B,
      ...L
    }
  );
}, ns = ({
  id: e,
  className: t,
  children: n,
  ...r
}) => {
  const s = O("nhsuk-hint", t);
  return /* @__PURE__ */ a.jsx("div", { className: s, id: e, ...r, children: n });
}, gp = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: r = 75,
  name: s,
  value: o = "",
  rows: i,
  className: l,
  countMessage: u,
  onCountChange: f,
  onChange: d,
  ...p
}) => {
  const [g, x] = ne(o), [T, m] = ne(0), [y, S] = ne(!1), [$, P] = ne(!1), w = J((C) => n ? C.trim() === "" ? 0 : C.trim().split(/\s+/).length : C.length, [n]);
  se(() => {
    const C = w(g), c = t || n || 0, E = c - C, K = Math.floor(c * (r / 100));
    m(E), S(C > c), P(C >= K || C > c), f && f(C, E);
  }, [g, t, n, r, w, f]);
  const R = (C) => {
    const c = C.target.value;
    x(c), d && d(C);
  }, B = () => {
    const C = t || n || 0, c = n ? "word" : "character", E = n ? "words" : "characters";
    if (!$)
      return `You can enter up to ${C} ${C === 1 ? c : E}`;
    if (y) {
      const K = Math.abs(T);
      return `You have ${K} ${K === 1 ? c : E} too many`;
    } else
      return `You have ${T} ${T === 1 ? c : E} remaining`;
  }, L = O(
    "nhsuk-character-count",
    l
  ), b = O(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !$,
      "nhsuk-error-message": y
    },
    u?.classes
  ), v = O(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": y
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
          Yi,
          {
            id: e,
            name: s,
            value: g,
            rows: i,
            className: v,
            onChange: R,
            "aria-describedby": `${e}-info`,
            ...p
          }
        ),
        /* @__PURE__ */ a.jsx(
          ns,
          {
            id: `${e}-info`,
            className: b,
            children: B()
          }
        )
      ]
    }
  );
}, bp = ({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  disabled: s = !1,
  required: o = !1,
  hasError: i = !1,
  describedBy: l,
  className: u,
  multiple: f = !1,
  size: d,
  autoComplete: p,
  options: g,
  onChange: x,
  onBlur: T,
  onFocus: m,
  ...y
}) => {
  const S = O(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    u
  );
  return /* @__PURE__ */ a.jsx(
    "select",
    {
      className: S,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: f,
      size: d,
      autoComplete: p,
      onChange: x,
      onBlur: T,
      onFocus: m,
      ...y,
      children: g.map(($, P) => /* @__PURE__ */ a.jsx(
        "option",
        {
          value: $.value,
          disabled: $.disabled,
          selected: $.selected,
          children: $.text
        },
        `${$.value}-${P}`
      ))
    }
  );
}, xp = ({
  name: e,
  value: t,
  defaultValue: n,
  hasError: r = !1,
  describedBy: s,
  className: o,
  size: i = "normal",
  inline: l = !1,
  options: u,
  onChange: f,
  onBlur: d,
  onFocus: p,
  ...g
}) => {
  const [x, T] = ne(t || n || ""), m = O(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": r,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), y = (S) => {
    const $ = S.target.value;
    T($), f && f(S);
  };
  return /* @__PURE__ */ a.jsx(Fr, { children: /* @__PURE__ */ a.jsx("div", { className: m, ...g, children: u.map((S, $) => {
    const P = `${e}-${$}`, w = S.conditional ? `${P}-conditional` : void 0, R = x === S.value;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: P,
          name: e,
          type: "radio",
          value: S.value,
          disabled: S.disabled,
          checked: R,
          "aria-describedby": s,
          onChange: y,
          onBlur: d,
          onFocus: p
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-radios__label", htmlFor: P, children: S.text }),
      S.hint && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-radios__hint", children: S.hint }),
      S.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: O("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !R
          }),
          id: w,
          children: typeof S.conditional == "object" && S.conditional !== null && "label" in S.conditional && "id" in S.conditional && "name" in S.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            S.conditional.label && /* @__PURE__ */ a.jsx(Er, { htmlFor: S.conditional.id, children: S.conditional.label }),
            /* @__PURE__ */ a.jsx(jr, { ...S.conditional })
          ] }) : S.conditional
        }
      )
    ] }, S.value);
  }) }) });
}, Vi = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: r,
  ...s
}) => {
  const o = O(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), i = r ? { maxWidth: r } : void 0;
  return /* @__PURE__ */ a.jsx("div", { className: o, style: i, ...s, children: e });
}, Gi = ({
  children: e,
  className: t,
  ...n
}) => {
  const r = O("nhsuk-grid-row", t);
  return /* @__PURE__ */ a.jsx("div", { className: r, ...n, children: e });
}, vp = ({
  children: e,
  width: t = "full",
  mobileWidth: n,
  tabletWidth: r,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  ...u
}) => {
  const f = O(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: n,
      [`nhsuk-u-${r}-tablet`]: r,
      [`nhsuk-u-${s}-desktop`]: s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7
    },
    i
  );
  return /* @__PURE__ */ a.jsx("div", { className: f, ...u, children: e });
}, yp = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ a.jsx(Vi, { className: t, ...n, children: /* @__PURE__ */ a.jsx(Gi, { children: e }) }), Ki = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: r = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), f = O(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": r,
      [`nhsuk-list--${n}`]: n !== "medium"
    },
    s
  );
  return /* @__PURE__ */ a.jsx(u, { className: f, role: o, ...l, children: e });
}, qi = ({
  children: e,
  className: t,
  ...n
}) => {
  const r = O("nhsuk-list__item", t);
  return /* @__PURE__ */ a.jsx("li", { className: r, ...n, children: e });
}, Xi = Ki;
Xi.Item = qi;
const kp = ({
  debug: e = !1,
  className: t,
  children: n,
  ...r
}) => {
  if (!n)
    return null;
  const s = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx("div", { className: s, ...r, children: n });
}, Sp = {
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
}, wp = ({
  debug: e = !1,
  className: t,
  children: n,
  ...r
}) => {
  if (!n)
    return null;
  const s = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx("div", { className: s, ...r, children: n });
}, _p = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Tp = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], $p = ({
  as: e = "main",
  size: t = "default",
  className: n,
  children: r,
  ...s
}) => {
  const o = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(e, { className: o, ...s, children: r });
}, ft = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const f = e ?? ((T) => {
    switch (T) {
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
  })(o), d = O(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), p = s || (r ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n), g = `h${f}`, x = i ? { ...l.style, marginBottom: i } : l.style;
  return Da(
    g,
    { className: d, ...l, style: x },
    p
  );
}, ia = ({
  id: e,
  className: t,
  visuallyHiddenText: n = "Error:",
  children: r,
  ...s
}) => {
  const o = O("nhsuk-error-message", t);
  return /* @__PURE__ */ a.jsxs("span", { className: o, id: e, ...s, children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n,
      " "
    ] }),
    r
  ] });
}, Cp = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: r,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const u = te(null);
  se(() => {
    u.current && u.current.focus();
  }, []);
  const f = O(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, p = () => r ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n, g = (x) => {
    const T = x.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text;
    return x.href ? /* @__PURE__ */ a.jsx(
      "a",
      {
        href: x.href,
        ...x.attributes,
        children: T
      }
    ) : T;
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
          /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((x, T) => /* @__PURE__ */ a.jsx("li", { children: g(x) }, T)) })
        ] })
      ]
    }
  );
}, Np = ({
  id: e,
  className: t,
  items: n,
  namePrefix: r,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...f
}) => {
  const [d, p] = ne(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [g, x] = ne({}), T = (M) => M % 4 === 0 && M % 100 !== 0 || M % 400 === 0, m = (M, h) => {
    const A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return M === 2 && T(h) ? 29 : A[M - 1];
  }, y = (M, h, A) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Day must be a number";
    const Y = parseInt(M, 10);
    if (Y < 1 || Y > 31) return "Day must be between 1 and 31";
    if (h && A) {
      const X = parseInt(h, 10), D = parseInt(A, 10);
      if (!isNaN(X) && !isNaN(D) && X >= 1 && X <= 12) {
        const V = m(X, D);
        if (Y > V)
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
          ][X - 1]} ${D} only has ${V} days`;
      }
    }
  }, S = (M) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Month must be a number";
    const h = parseInt(M, 10);
    if (h < 1 || h > 12) return "Month must be between 1 and 12";
  }, $ = (M) => {
    if (!M) return;
    if (!/^\d+$/.test(M)) return "Year must be a number";
    const h = parseInt(M, 10), A = (/* @__PURE__ */ new Date()).getFullYear();
    if (h < 1900 || h > A + 10)
      return `Year must be between 1900 and ${A + 10}`;
  }, P = (M, h, A) => {
    if (!M || !h || !A) return;
    const Y = parseInt(M, 10), X = parseInt(h, 10), D = parseInt(A, 10);
    if (isNaN(Y) || isNaN(X) || isNaN(D) || X < 1 || X > 12 || D < 1900) return;
    const V = m(X, D);
    Y < 1 || Y > V;
  }, w = J((M, h) => {
    const A = {
      ...d,
      [M]: h
    };
    p(A), u && u(A);
  }, [d, u]), R = J((M) => {
    const h = d[M];
    let A;
    if (M === "day")
      A = y(h, d.month, d.year);
    else if (M === "month") {
      if (A = S(h), !A && d.day) {
        const Y = y(d.day, h, d.year);
        x((X) => ({
          ...X,
          day: Y
        }));
      }
    } else if (M === "year" && (A = $(h), !A && d.day && d.month)) {
      const Y = y(d.day, d.month, h);
      x((X) => ({
        ...X,
        day: Y
      }));
    }
    if (x((Y) => ({
      ...Y,
      [M]: A
    })), d.day && d.month && d.year) {
      const Y = P(
        M === "day" ? h : d.day,
        M === "month" ? h : d.month,
        M === "year" ? h : d.year
      );
      Y && x((X) => ({
        ...X,
        day: Y
      }));
    }
  }, [d, y, S, $, P]), B = oe(() => [
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
  let b = o?.describedBy || "";
  const v = i ? `${e}-hint` : "", C = l ? `${e}-error` : "";
  v && (b = b ? `${b} ${v}` : v), C && (b = b ? `${b} ${C}` : C);
  const c = Object.values(g).some((M) => M), E = O(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || c
    }
  ), K = O(
    "nhsuk-date-input",
    t
  ), j = () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    i && /* @__PURE__ */ a.jsx(
      ns,
      {
        id: v,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      ia,
      {
        id: C,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([M, h]) => h ? /* @__PURE__ */ a.jsxs(
        ia,
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
    /* @__PURE__ */ a.jsx("div", { className: K, id: e, "data-testid": "date-input", ...f, children: L.map((M) => {
      const h = M.id || `${e}-${M.name}`, A = r ? `${r}[${M.name}]` : M.name, Y = M.label || M.name.charAt(0).toUpperCase() + M.name.slice(1), X = g[M.name], D = d[M.name] || "";
      let V = b;
      if (X) {
        const W = `${e}-${M.name}-error`;
        V = V ? `${V} ${W}` : W;
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ a.jsx(
          Er,
          {
            htmlFor: h,
            className: "nhsuk-date-input__label",
            children: Y
          }
        ),
        /* @__PURE__ */ a.jsx(
          jr,
          {
            id: h,
            name: A,
            value: D,
            className: O("nhsuk-date-input__input", M.classes, {
              "nhsuk-input--error": X
            }),
            inputMode: M.inputmode,
            autoComplete: M.autocomplete,
            pattern: M.pattern,
            "aria-describedby": V || void 0,
            hasError: !!X,
            onChange: (W) => w(M.name, W.target.value),
            onBlur: () => R(M.name)
          }
        )
      ] }, M.name);
    }) })
  ] });
  return /* @__PURE__ */ a.jsx("div", { className: E, children: o ? /* @__PURE__ */ a.jsx(
    Fr,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: b || void 0,
      children: j()
    }
  ) : j() });
}, rs = {
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
}, as = Tn(rs), Zi = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...rs, ...t };
  return /* @__PURE__ */ a.jsx(as.Provider, { value: n, children: e });
}, jp = () => {
  const e = qe(as);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Ji() {
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
function Qi() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Ji(), document.head.appendChild(e);
}
const Ep = ({ children: e, theme: t }) => (se(() => {
  Qi();
}, []), /* @__PURE__ */ a.jsx(Zi, { theme: t, children: e })), Fp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  ...d
}) => {
  const [p, g] = ne(!1), [x, T] = ne(!1), [m, y] = ne(i?.items?.length || 0), [S, $] = ne(!1), [P, w] = ne(!1), [R, B] = ne(!1), L = te(null), b = te(null), v = te(!1), C = te(null), c = te([]), E = te(null);
  se(() => {
    typeof window > "u" || (B(!0), $(!0));
  }, []), se(() => {
    if (!R || !i?.items?.length) return;
    c.current = i.items;
    const N = setTimeout(() => {
      L.current && b.current && Y();
    }, 100);
    return () => clearTimeout(N);
  }, [R, i?.items]);
  const K = n.href && !t.href || n.href && n.href === t.href, j = K ? n.href : t.href, M = O(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), h = O(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), A = O(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Y = J(() => {
    if (!(typeof window > "u" || v.current) && !(!L.current || !b.current || !c.current.length)) {
      v.current = !0;
      try {
        const N = b.current, k = L.current, I = N.offsetWidth, z = k.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (z.length === 0 || I === 0) {
          v.current = !1;
          return;
        }
        const F = window.innerWidth < 768, re = F ? 16 : 32, Z = re * 2, U = I - Z, Q = Array.from(z).map((be) => be.offsetWidth), le = Q.reduce((be, ke) => be + ke, 0), ue = F ? 80 : 100, we = E.current !== null && E.current !== F;
        if (E.current = F, console.log("Overflow check:", {
          containerWidth: I,
          availableContainerWidth: U,
          totalGutters: Z,
          gutterSize: re,
          totalWidth: le,
          mobile: F,
          breakpointChanged: we,
          itemCount: Q.length,
          measurements: Q
        }), le <= U)
          T(!1), y(c.current.length);
        else {
          const be = U - ue;
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
          T(We), y(ke);
        }
        v.current = !1;
      } catch (N) {
        console.error("Overflow detection error:", N), T(!1), y(c.current.length), v.current = !1;
      }
    }
  }, []);
  se(() => {
    if (typeof document > "u") return;
    const N = (k) => {
      k.key === "Escape" && p && g(!1);
    };
    if (p)
      return document.addEventListener("keydown", N), () => document.removeEventListener("keydown", N);
  }, [p]), se(() => {
    if (typeof window > "u" || !R) return;
    const N = () => {
      p && (g(!1), w(!1)), C.current && clearTimeout(C.current), C.current = setTimeout(() => {
        c.current.length > 0 && Y();
      }, 250);
    };
    let k = null, I = null;
    return window.matchMedia && (k = window.matchMedia("(max-width: 767px)"), I = () => {
      console.log("Breakpoint changed:", k?.matches ? "mobile" : "desktop"), c.current.length > 0 && setTimeout(() => Y(), 50);
    }, k.addEventListener ? k.addEventListener("change", I) : k.addListener(I)), window.addEventListener("resize", N), () => {
      window.removeEventListener("resize", N), k && I && (k.removeEventListener ? k.removeEventListener("change", I) : k.removeListener(I)), C.current && clearTimeout(C.current);
    };
  }, [R, p, Y]), se(() => {
    if (typeof document > "u") return;
    const N = (k) => {
      const I = k.target, z = L.current?.contains(I);
      p && !z && g(!1);
    };
    if (p)
      return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [p]);
  const X = (N) => {
    N && (N.preventDefault(), N.stopPropagation());
    const k = !p;
    g(k), k ? setTimeout(() => {
      w(!0);
    }, 50) : w(!1);
  }, D = () => /* @__PURE__ */ a.jsxs(
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
  ), V = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : D(), W = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, ee = (N, k) => N ? k ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: k, children: N }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, G = (N) => {
    const k = N.icon ? /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ a.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, I = N.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text, z = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      k,
      I
    ] });
    return N.href ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__account-link", href: N.href, children: z }) : N.action ? /* @__PURE__ */ a.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: N.action,
        method: N.method || "post",
        children: /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: z
          }
        )
      }
    ) : z;
  }, _ = () => /* @__PURE__ */ a.jsx(
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
  ), q = (N) => {
    if (N.active || N.current) {
      const k = N.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: k });
    }
    return N.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text;
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
              V(),
              W(),
              K && ee(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              V(),
              W(),
              K && ee(n.text)
            ] }),
            n.text && !K && ee(n.text, n.href)
          ] }),
          s && /* @__PURE__ */ a.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: s.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ a.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: s.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: s.name || "q",
                    type: "search",
                    placeholder: s.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ a.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  _(),
                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: s.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          o && o.items && o.items.length > 0 && /* @__PURE__ */ a.jsx(
            "nav",
            {
              className: O("nhsuk-header__account", o.className),
              "aria-label": o.ariaLabel || "Account",
              children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: o.items.map((N, k) => N && /* @__PURE__ */ a.jsx(
                "li",
                {
                  className: O("nhsuk-header__account-item", N.className),
                  children: G(N)
                },
                k
              )) })
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: A,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: O(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !S && R,
                    "nhsuk-header__navigation-container--ssr": !R
                  },
                  l
                ),
                ref: b,
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (R ? i.items.slice(0, m) : i.items).map((N, k) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: O(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": N.active || N.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !R && k >= 4
                          // Mark items that would be hidden on client
                        },
                        N.className
                      ),
                      ...N.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: N.href,
                          ...N.active || N.current ? {
                            "aria-current": N.current ? "page" : "true"
                          } : {},
                          children: q(N)
                        }
                      )
                    },
                    k
                  )),
                  R && x && m < i.items.length && /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ a.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: X,
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
            children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(m).map((N, k) => /* @__PURE__ */ a.jsx(
              "li",
              {
                className: O(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": N.active || N.current
                  }
                ),
                children: /* @__PURE__ */ a.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: N.href,
                    ...N.active || N.current ? {
                      "aria-current": N.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      g(!1), w(!1);
                    },
                    children: q(N)
                  }
                )
              },
              `overflow-${m + k}`
            )) })
          }
        )
      ]
    }
  );
}, Dp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  ...d
}) => {
  const p = n.href && !t.href || n.href && n.href === t.href, g = p ? n.href : t.href, x = O(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), T = O(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), m = O(
    "nhsuk-header__navigation",
    i?.className
  ), y = () => /* @__PURE__ */ a.jsxs(
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
  ), S = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : y(), $ = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, P = (L, b) => L ? b ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: b, children: L }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: L }) : null, w = () => !i?.items || i.items.length === 0 ? null : i.items.map((L, b) => /* @__PURE__ */ a.jsx(
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
    L.href || b
  )), R = () => !o?.items || o.items.length === 0 ? null : o.items.map((L, b) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-header__account-item", children: /* @__PURE__ */ a.jsx(
    "a",
    {
      className: "nhsuk-header__account-link",
      href: L.href,
      children: L.text
    }
  ) }, L.href || b)), B = () => s ? /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search-wrap", id: "wrap-search", children: /* @__PURE__ */ a.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      role: "search",
      action: s.action || "/search",
      method: "get",
      children: [
        /* @__PURE__ */ a.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: s.visuallyHiddenLabel || "Search the NHS website" }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            className: "nhsuk-header__search-input nhsuk-input",
            id: "search-field",
            name: s.name || "q",
            type: "search",
            placeholder: s.placeholder || "Search",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ a.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
          /* @__PURE__ */ a.jsx("svg", { className: "nhsuk-icon nhsuk-icon__search", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ a.jsx("path", { d: "m19.71 18.29-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" }) }),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: s.visuallyHiddenButton || "Search" })
        ] })
      ]
    }
  ) }) }) : null;
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: x,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...f,
      ...d,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: T, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            g ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: g, children: [
              S(),
              $(),
              p && P(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              S(),
              $(),
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
          o && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__account", children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: R() }) })
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: m,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ a.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: w()
              }
            ) })
          }
        )
      ]
    }
  );
}, Pp = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: f = {},
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...p
}) => {
  const g = n.href && !t.href || n.href && n.href === t.href, x = g ? n.href : t.href, T = O(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), m = O(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), y = O(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), S = () => /* @__PURE__ */ a.jsxs(
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
  ), $ = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : S(), P = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, w = (b, v) => b ? v ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: v, children: b }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, R = (b) => {
    const v = b.icon ? /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ a.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, C = b.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text, c = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      v,
      C
    ] });
    return b.href ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__account-link", href: b.href, children: c }) : b.action ? /* @__PURE__ */ a.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: b.action,
        method: b.method || "post",
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
  ), L = (b) => {
    if (b.active || b.current) {
      const v = b.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: v });
    }
    return b.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: T,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...f,
      ...p,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: m, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              $(),
              P(),
              g && w(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              $(),
              P(),
              g && w(n.text)
            ] }),
            n.text && !g && w(n.text, n.href)
          ] }),
          s && /* @__PURE__ */ a.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: s.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ a.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: s.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ a.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: s.name || "q",
                    type: "search",
                    placeholder: s.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ a.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  B(),
                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: s.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          o && o.items && o.items.length > 0 && /* @__PURE__ */ a.jsx(
            "nav",
            {
              className: O("nhsuk-header__account", o.className),
              "aria-label": o.ariaLabel || "Account",
              children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: o.items.map((b, v) => b && /* @__PURE__ */ a.jsx(
                "li",
                {
                  className: O("nhsuk-header__account-item", b.className),
                  children: R(b)
                },
                v
              )) })
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: y,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: O(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((b, v) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: O(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current
                        },
                        b.className
                      ),
                      ...b.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: b.href,
                          ...b.active || b.current ? {
                            "aria-current": b.current ? "page" : "true"
                          } : {},
                          children: L(b)
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
                    /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((b, v) => /* @__PURE__ */ a.jsx(
                      "li",
                      {
                        className: O(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": b.active || b.current
                          }
                        ),
                        children: /* @__PURE__ */ a.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: b.href,
                            ...b.active || b.current ? {
                              "aria-current": b.current ? "page" : "true"
                            } : {},
                            children: L(b)
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
}, el = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: r,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: u,
  ...f
}) => {
  const d = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    n,
    !u && !r && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), x = u || e || r || s, T = () => {
    if (!e) return null;
    const m = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ a.jsx("h1", { ...m, children: e });
      case 2:
        return /* @__PURE__ */ a.jsx("h2", { ...m, children: e });
      case 3:
        return /* @__PURE__ */ a.jsx("h3", { ...m, children: e });
      case 4:
        return /* @__PURE__ */ a.jsx("h4", { ...m, children: e });
      case 5:
        return /* @__PURE__ */ a.jsx("h5", { ...m, children: e });
      case 6:
        return /* @__PURE__ */ a.jsx("h6", { ...m, children: e });
      default:
        return /* @__PURE__ */ a.jsx("h1", { ...m, children: e });
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...f,
      children: [
        o && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-hero__overlay", children: x && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero-content", children: [
          T(),
          u || (s ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && x && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          T(),
          u || (s ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null)
        ] }) }) }) })
      ]
    }
  );
};
el.displayName = "Hero";
const Mp = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: r,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const u = (d, p = !1) => /* @__PURE__ */ a.jsx(
    "li",
    {
      className: O("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ a.jsxs("div", { className: O("nhsuk-width-container", i), children: [
      /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ a.jsx("div", { className: O("nhsuk-footer", e), children: f ? (
        // Multi-column layout
        /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => u(d)) }),
          n && n.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list", children: n.map((d) => u(d)) }),
          r && r.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => u(d)) }),
          s && s.length > 0 && /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((d) => u(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => u(d, !0)),
          (n || []).map((d) => u(d, !0)),
          (r || []).map((d) => u(d, !0)),
          (s || []).map((d) => u(d, !0))
        ] })
      ) }),
      !f && /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
    ] }),
    f && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function Ht(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tl(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Dr(e) {
  let t, n, r;
  e.length !== 2 ? (t = Ht, n = (l, u) => Ht(e(l), u), r = (l, u) => e(l) - u) : (t = e === Ht || e === tl ? e : nl, n = e, r = e);
  function s(l, u, f = 0, d = l.length) {
    if (f < d) {
      if (t(u, u) !== 0) return d;
      do {
        const p = f + d >>> 1;
        n(l[p], u) < 0 ? f = p + 1 : d = p;
      } while (f < d);
    }
    return f;
  }
  function o(l, u, f = 0, d = l.length) {
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
    const p = s(l, u, f, d - 1);
    return p > f && r(l[p - 1], u) > -r(l[p], u) ? p - 1 : p;
  }
  return { left: s, center: i, right: o };
}
function nl() {
  return 0;
}
function rl(e) {
  return e === null ? NaN : +e;
}
const al = Dr(Ht), sl = al.right;
Dr(rl).center;
const ol = Math.sqrt(50), il = Math.sqrt(10), ll = Math.sqrt(2);
function ss(e, t, n) {
  const r = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(r)), o = r / Math.pow(10, s), i = o >= ol ? 10 : o >= il ? 5 : o >= ll ? 2 : 1;
  let l, u, f;
  return s < 0 ? (f = Math.pow(10, -s) / i, l = Math.round(e * f), u = Math.round(t * f), l / f < e && ++l, u / f > t && --u, f = -f) : (f = Math.pow(10, s) * i, l = Math.round(e / f), u = Math.round(t / f), l * f < e && ++l, u * f > t && --u), u < l && 0.5 <= n && n < 2 ? ss(e, t, n * 2) : [l, u, f];
}
function la(e, t, n) {
  return t = +t, e = +e, n = +n, ss(e, t, n)[2];
}
function ca(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, s = r ? la(t, e, n) : la(e, t, n);
  return (r ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function cl(e, t) {
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
function Pr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function os(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Nt() {
}
var Tt = 0.7, Ut = 1 / Tt, ct = "\\s*([+-]?\\d+)\\s*", $t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ul = /^#([0-9a-f]{3,8})$/, dl = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), fl = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), hl = new RegExp(`^rgba\\(${ct},${ct},${ct},${$t}\\)$`), pl = new RegExp(`^rgba\\(${Te},${Te},${Te},${$t}\\)$`), ml = new RegExp(`^hsl\\(${$t},${Te},${Te}\\)$`), gl = new RegExp(`^hsla\\(${$t},${Te},${Te},${$t}\\)$`), ua = {
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
Pr(Nt, Ct, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: da,
  // Deprecated! Use color.formatHex.
  formatHex: da,
  formatHex8: bl,
  formatHsl: xl,
  formatRgb: fa,
  toString: fa
});
function da() {
  return this.rgb().formatHex();
}
function bl() {
  return this.rgb().formatHex8();
}
function xl() {
  return is(this).formatHsl();
}
function fa() {
  return this.rgb().formatRgb();
}
function Ct(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ul.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ha(t) : n === 3 ? new ge(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = dl.exec(e)) ? new ge(t[1], t[2], t[3], 1) : (t = fl.exec(e)) ? new ge(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = hl.exec(e)) ? Bt(t[1], t[2], t[3], t[4]) : (t = pl.exec(e)) ? Bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ml.exec(e)) ? ga(t[1], t[2] / 100, t[3] / 100, 1) : (t = gl.exec(e)) ? ga(t[1], t[2] / 100, t[3] / 100, t[4]) : ua.hasOwnProperty(e) ? ha(ua[e]) : e === "transparent" ? new ge(NaN, NaN, NaN, 0) : null;
}
function ha(e) {
  return new ge(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bt(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new ge(e, t, n, r);
}
function vl(e) {
  return e instanceof Nt || (e = Ct(e)), e ? (e = e.rgb(), new ge(e.r, e.g, e.b, e.opacity)) : new ge();
}
function qn(e, t, n, r) {
  return arguments.length === 1 ? vl(e) : new ge(e, t, n, r ?? 1);
}
function ge(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Pr(ge, qn, os(Nt, {
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
  hex: pa,
  // Deprecated! Use color.formatHex.
  formatHex: pa,
  formatHex8: yl,
  formatRgb: ma,
  toString: ma
}));
function pa() {
  return `#${Ze(this.r)}${Ze(this.g)}${Ze(this.b)}`;
}
function yl() {
  return `#${Ze(this.r)}${Ze(this.g)}${Ze(this.b)}${Ze((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ma() {
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
function ga(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Se(e, t, n, r);
}
function is(e) {
  if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
  if (e instanceof Nt || (e = Ct(e)), !e) return new Se();
  if (e instanceof Se) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, s = Math.min(t, n, r), o = Math.max(t, n, r), i = NaN, l = o - s, u = (o + s) / 2;
  return l ? (t === o ? i = (n - r) / l + (n < r) * 6 : n === o ? i = (r - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? o + s : 2 - o - s, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new Se(i, l, u, e.opacity);
}
function kl(e, t, n, r) {
  return arguments.length === 1 ? is(e) : new Se(e, t, n, r ?? 1);
}
function Se(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Pr(Se, kl, os(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tt : Math.pow(Tt, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - r;
    return new ge(
      Mn(e >= 240 ? e - 240 : e + 120, s, r),
      Mn(e, s, r),
      Mn(e < 120 ? e + 240 : e - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new Se(ba(this.h), Lt(this.s), Lt(this.l), Yt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ba(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ba(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Lt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Mn(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Mr = (e) => () => e;
function Sl(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function wl(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function _l(e) {
  return (e = +e) == 1 ? ls : function(t, n) {
    return n - t ? wl(t, n, e) : Mr(isNaN(t) ? n : t);
  };
}
function ls(e, t) {
  var n = t - e;
  return n ? Sl(e, n) : Mr(isNaN(e) ? t : e);
}
const xa = function e(t) {
  var n = _l(t);
  function r(s, o) {
    var i = n((s = qn(s)).r, (o = qn(o)).r), l = n(s.g, o.g), u = n(s.b, o.b), f = ls(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = f(d), s + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Tl(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) r[s] = e[s] * (1 - o) + t[s] * o;
    return r;
  };
}
function $l(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Cl(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, s = new Array(r), o = new Array(n), i;
  for (i = 0; i < r; ++i) s[i] = Br(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < r; ++i) o[i] = s[i](l);
    return o;
  };
}
function Nl(e, t) {
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
function jl(e, t) {
  var n = {}, r = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Br(e[s], t[s]) : r[s] = t[s];
  return function(o) {
    for (s in n) r[s] = n[s](o);
    return r;
  };
}
var Xn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Bn = new RegExp(Xn.source, "g");
function El(e) {
  return function() {
    return e;
  };
}
function Fl(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Dl(e, t) {
  var n = Xn.lastIndex = Bn.lastIndex = 0, r, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = Xn.exec(e)) && (s = Bn.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (r = r[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: Vt(r, s) })), n = Bn.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? Fl(u[0].x) : El(t) : (t = u.length, function(f) {
    for (var d = 0, p; d < t; ++d) l[(p = u[d]).i] = p.x(f);
    return l.join("");
  });
}
function Br(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Mr(t) : (n === "number" ? Vt : n === "string" ? (r = Ct(t)) ? (t = r, xa) : Dl : t instanceof Ct ? xa : t instanceof Date ? Nl : $l(t) ? Tl : Array.isArray(t) ? Cl : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? jl : Vt)(e, t);
}
function Pl(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Ml(e) {
  return function() {
    return e;
  };
}
function Bl(e) {
  return +e;
}
var va = [0, 1];
function ot(e) {
  return e;
}
function Zn(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ml(isNaN(t) ? NaN : 0.5);
}
function Ll(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function Il(e, t, n) {
  var r = e[0], s = e[1], o = t[0], i = t[1];
  return s < r ? (r = Zn(s, r), o = n(i, o)) : (r = Zn(r, s), o = n(o, i)), function(l) {
    return o(r(l));
  };
}
function Rl(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, s = new Array(r), o = new Array(r), i = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < r; )
    s[i] = Zn(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = sl(e, l, 1, r) - 1;
    return o[u](s[u](l));
  };
}
function Hl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Al() {
  var e = va, t = va, n = Br, r, s, o, i = ot, l, u, f;
  function d() {
    var g = Math.min(e.length, t.length);
    return i !== ot && (i = Ll(e[0], e[g - 1])), l = g > 2 ? Rl : Il, u = f = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? o : (u || (u = l(e.map(r), t, n)))(r(i(g)));
  }
  return p.invert = function(g) {
    return i(s((f || (f = l(t, e.map(r), Vt)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (e = Array.from(g, Bl), d()) : e.slice();
  }, p.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, p.rangeRound = function(g) {
    return t = Array.from(g), n = Pl, d();
  }, p.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : ot, d()) : i !== ot;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (o = g, p) : o;
  }, function(g, x) {
    return r = g, s = x, d();
  };
}
function zl() {
  return Al()(ot, ot);
}
function Wl(e, t) {
  e = e.slice();
  var n = 0, r = e.length - 1, s = e[n], o = e[r], i;
  return o < s && (i = n, n = r, r = i, i = s, s = o, o = i), e[n] = t.floor(s), e[r] = t.ceil(o), e;
}
const Ln = /* @__PURE__ */ new Date(), In = /* @__PURE__ */ new Date();
function fe(e, t, n, r) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const u = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return u;
    let f;
    do
      u.push(f = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (f < o && o < i);
    return u;
  }, s.filter = (o) => fe((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), n && (s.count = (o, i) => (Ln.setTime(+o), In.setTime(+i), e(Ln), e(In), Math.floor(n(Ln, In))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(r ? (i) => r(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const Gt = fe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Gt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? fe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Gt);
Gt.range;
const Ie = 1e3, ye = Ie * 60, Re = ye * 60, He = Re * 24, Lr = He * 7, ya = He * 30, Rn = He * 365, it = fe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCSeconds());
it.range;
const Ir = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie);
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getMinutes());
Ir.range;
const Ol = fe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getUTCMinutes());
Ol.range;
const Rr = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie - e.getMinutes() * ye);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getHours());
Rr.range;
const Ul = fe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCHours());
Ul.range;
const jt = fe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ye) / He,
  (e) => e.getDate() - 1
);
jt.range;
const Hr = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / He, (e) => e.getUTCDate() - 1);
Hr.range;
const Yl = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / He, (e) => Math.floor(e / He));
Yl.range;
function nt(e) {
  return fe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ye) / Lr);
}
const Nn = nt(0), Kt = nt(1), Vl = nt(2), Gl = nt(3), ht = nt(4), Kl = nt(5), ql = nt(6);
Nn.range;
Kt.range;
Vl.range;
Gl.range;
ht.range;
Kl.range;
ql.range;
function rt(e) {
  return fe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Lr);
}
const cs = rt(0), qt = rt(1), Xl = rt(2), Zl = rt(3), pt = rt(4), Jl = rt(5), Ql = rt(6);
cs.range;
qt.range;
Xl.range;
Zl.range;
pt.range;
Jl.range;
Ql.range;
const Ar = fe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ar.range;
const ec = fe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ec.range;
const Ae = fe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ae.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Ae.range;
const et = fe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
et.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
et.range;
function tc(e, t, n, r, s, o) {
  const i = [
    [it, 1, Ie],
    [it, 5, 5 * Ie],
    [it, 15, 15 * Ie],
    [it, 30, 30 * Ie],
    [o, 1, ye],
    [o, 5, 5 * ye],
    [o, 15, 15 * ye],
    [o, 30, 30 * ye],
    [s, 1, Re],
    [s, 3, 3 * Re],
    [s, 6, 6 * Re],
    [s, 12, 12 * Re],
    [r, 1, He],
    [r, 2, 2 * He],
    [n, 1, Lr],
    [t, 1, ya],
    [t, 3, 3 * ya],
    [e, 1, Rn]
  ];
  function l(f, d, p) {
    const g = d < f;
    g && ([f, d] = [d, f]);
    const x = p && typeof p.range == "function" ? p : u(f, d, p), T = x ? x.range(f, +d + 1) : [];
    return g ? T.reverse() : T;
  }
  function u(f, d, p) {
    const g = Math.abs(d - f) / p, x = Dr(([, , y]) => y).right(i, g);
    if (x === i.length) return e.every(ca(f / Rn, d / Rn, p));
    if (x === 0) return Gt.every(Math.max(ca(f, d, p), 1));
    const [T, m] = i[g / i[x - 1][2] < i[x][2] / g ? x - 1 : x];
    return T.every(m);
  }
  return [l, u];
}
const [nc, rc] = tc(Ae, Ar, Nn, jt, Rr, Ir);
function Hn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function An(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xt(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function ac(e) {
  var t = e.dateTime, n = e.date, r = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, f = vt(s), d = yt(s), p = vt(o), g = yt(o), x = vt(i), T = yt(i), m = vt(l), y = yt(l), S = vt(u), $ = yt(u), P = {
    a: A,
    A: Y,
    b: X,
    B: D,
    c: null,
    d: $a,
    e: $a,
    f: Cc,
    g: Ic,
    G: Hc,
    H: _c,
    I: Tc,
    j: $c,
    L: us,
    m: Nc,
    M: jc,
    p: V,
    q: W,
    Q: ja,
    s: Ea,
    S: Ec,
    u: Fc,
    U: Dc,
    V: Pc,
    w: Mc,
    W: Bc,
    x: null,
    X: null,
    y: Lc,
    Y: Rc,
    Z: Ac,
    "%": Na
  }, w = {
    a: ee,
    A: G,
    b: _,
    B: H,
    c: null,
    d: Ca,
    e: Ca,
    f: Uc,
    g: eu,
    G: nu,
    H: zc,
    I: Wc,
    j: Oc,
    L: fs,
    m: Yc,
    M: Vc,
    p: q,
    q: N,
    Q: ja,
    s: Ea,
    S: Gc,
    u: Kc,
    U: qc,
    V: Xc,
    w: Zc,
    W: Jc,
    x: null,
    X: null,
    y: Qc,
    Y: tu,
    Z: ru,
    "%": Na
  }, R = {
    a: C,
    A: c,
    b: E,
    B: K,
    c: j,
    d: _a,
    e: _a,
    f: yc,
    g: wa,
    G: Sa,
    H: Ta,
    I: Ta,
    j: gc,
    L: vc,
    m: mc,
    M: bc,
    p: v,
    q: pc,
    Q: Sc,
    s: wc,
    S: xc,
    u: cc,
    U: uc,
    V: dc,
    w: lc,
    W: fc,
    x: M,
    X: h,
    y: wa,
    Y: Sa,
    Z: hc,
    "%": kc
  };
  P.x = B(n, P), P.X = B(r, P), P.c = B(t, P), w.x = B(n, w), w.X = B(r, w), w.c = B(t, w);
  function B(k, I) {
    return function(z) {
      var F = [], re = -1, Z = 0, U = k.length, Q, le, ue;
      for (z instanceof Date || (z = /* @__PURE__ */ new Date(+z)); ++re < U; )
        k.charCodeAt(re) === 37 && (F.push(k.slice(Z, re)), (le = ka[Q = k.charAt(++re)]) != null ? Q = k.charAt(++re) : le = Q === "e" ? " " : "0", (ue = I[Q]) && (Q = ue(z, le)), F.push(Q), Z = re + 1);
      return F.push(k.slice(Z, re)), F.join("");
    };
  }
  function L(k, I) {
    return function(z) {
      var F = xt(1900, void 0, 1), re = b(F, k, z += "", 0), Z, U;
      if (re != z.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (I && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1), "Z" in F ? (Z = An(xt(F.y, 0, 1)), U = Z.getUTCDay(), Z = U > 4 || U === 0 ? qt.ceil(Z) : qt(Z), Z = Hr.offset(Z, (F.V - 1) * 7), F.y = Z.getUTCFullYear(), F.m = Z.getUTCMonth(), F.d = Z.getUTCDate() + (F.w + 6) % 7) : (Z = Hn(xt(F.y, 0, 1)), U = Z.getDay(), Z = U > 4 || U === 0 ? Kt.ceil(Z) : Kt(Z), Z = jt.offset(Z, (F.V - 1) * 7), F.y = Z.getFullYear(), F.m = Z.getMonth(), F.d = Z.getDate() + (F.w + 6) % 7);
      } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), U = "Z" in F ? An(xt(F.y, 0, 1)).getUTCDay() : Hn(xt(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (U + 5) % 7 : F.w + F.U * 7 - (U + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, An(F)) : Hn(F);
    };
  }
  function b(k, I, z, F) {
    for (var re = 0, Z = I.length, U = z.length, Q, le; re < Z; ) {
      if (F >= U) return -1;
      if (Q = I.charCodeAt(re++), Q === 37) {
        if (Q = I.charAt(re++), le = R[Q in ka ? I.charAt(re++) : Q], !le || (F = le(k, z, F)) < 0) return -1;
      } else if (Q != z.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function v(k, I, z) {
    var F = f.exec(I.slice(z));
    return F ? (k.p = d.get(F[0].toLowerCase()), z + F[0].length) : -1;
  }
  function C(k, I, z) {
    var F = x.exec(I.slice(z));
    return F ? (k.w = T.get(F[0].toLowerCase()), z + F[0].length) : -1;
  }
  function c(k, I, z) {
    var F = p.exec(I.slice(z));
    return F ? (k.w = g.get(F[0].toLowerCase()), z + F[0].length) : -1;
  }
  function E(k, I, z) {
    var F = S.exec(I.slice(z));
    return F ? (k.m = $.get(F[0].toLowerCase()), z + F[0].length) : -1;
  }
  function K(k, I, z) {
    var F = m.exec(I.slice(z));
    return F ? (k.m = y.get(F[0].toLowerCase()), z + F[0].length) : -1;
  }
  function j(k, I, z) {
    return b(k, t, I, z);
  }
  function M(k, I, z) {
    return b(k, n, I, z);
  }
  function h(k, I, z) {
    return b(k, r, I, z);
  }
  function A(k) {
    return i[k.getDay()];
  }
  function Y(k) {
    return o[k.getDay()];
  }
  function X(k) {
    return u[k.getMonth()];
  }
  function D(k) {
    return l[k.getMonth()];
  }
  function V(k) {
    return s[+(k.getHours() >= 12)];
  }
  function W(k) {
    return 1 + ~~(k.getMonth() / 3);
  }
  function ee(k) {
    return i[k.getUTCDay()];
  }
  function G(k) {
    return o[k.getUTCDay()];
  }
  function _(k) {
    return u[k.getUTCMonth()];
  }
  function H(k) {
    return l[k.getUTCMonth()];
  }
  function q(k) {
    return s[+(k.getUTCHours() >= 12)];
  }
  function N(k) {
    return 1 + ~~(k.getUTCMonth() / 3);
  }
  return {
    format: function(k) {
      var I = B(k += "", P);
      return I.toString = function() {
        return k;
      }, I;
    },
    parse: function(k) {
      var I = L(k += "", !1);
      return I.toString = function() {
        return k;
      }, I;
    },
    utcFormat: function(k) {
      var I = B(k += "", w);
      return I.toString = function() {
        return k;
      }, I;
    },
    utcParse: function(k) {
      var I = L(k += "", !0);
      return I.toString = function() {
        return k;
      }, I;
    }
  };
}
var ka = { "-": "", _: " ", 0: "0" }, he = /^\s*\d+/, sc = /^%/, oc = /[\\^$*+?|[\]().{}]/g;
function ae(e, t, n) {
  var r = e < 0 ? "-" : "", s = (r ? -e : e) + "", o = s.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function ic(e) {
  return e.replace(oc, "\\$&");
}
function vt(e) {
  return new RegExp("^(?:" + e.map(ic).join("|") + ")", "i");
}
function yt(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function lc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function cc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function uc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function dc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function fc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function Sa(e, t, n) {
  var r = he.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function wa(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function hc(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function pc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function mc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function _a(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function gc(e, t, n) {
  var r = he.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Ta(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function bc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function xc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function vc(e, t, n) {
  var r = he.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function yc(e, t, n) {
  var r = he.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function kc(e, t, n) {
  var r = sc.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Sc(e, t, n) {
  var r = he.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function wc(e, t, n) {
  var r = he.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function $a(e, t) {
  return ae(e.getDate(), t, 2);
}
function _c(e, t) {
  return ae(e.getHours(), t, 2);
}
function Tc(e, t) {
  return ae(e.getHours() % 12 || 12, t, 2);
}
function $c(e, t) {
  return ae(1 + jt.count(Ae(e), e), t, 3);
}
function us(e, t) {
  return ae(e.getMilliseconds(), t, 3);
}
function Cc(e, t) {
  return us(e, t) + "000";
}
function Nc(e, t) {
  return ae(e.getMonth() + 1, t, 2);
}
function jc(e, t) {
  return ae(e.getMinutes(), t, 2);
}
function Ec(e, t) {
  return ae(e.getSeconds(), t, 2);
}
function Fc(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Dc(e, t) {
  return ae(Nn.count(Ae(e) - 1, e), t, 2);
}
function ds(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function Pc(e, t) {
  return e = ds(e), ae(ht.count(Ae(e), e) + (Ae(e).getDay() === 4), t, 2);
}
function Mc(e) {
  return e.getDay();
}
function Bc(e, t) {
  return ae(Kt.count(Ae(e) - 1, e), t, 2);
}
function Lc(e, t) {
  return ae(e.getFullYear() % 100, t, 2);
}
function Ic(e, t) {
  return e = ds(e), ae(e.getFullYear() % 100, t, 2);
}
function Rc(e, t) {
  return ae(e.getFullYear() % 1e4, t, 4);
}
function Hc(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? ht(e) : ht.ceil(e), ae(e.getFullYear() % 1e4, t, 4);
}
function Ac(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2);
}
function Ca(e, t) {
  return ae(e.getUTCDate(), t, 2);
}
function zc(e, t) {
  return ae(e.getUTCHours(), t, 2);
}
function Wc(e, t) {
  return ae(e.getUTCHours() % 12 || 12, t, 2);
}
function Oc(e, t) {
  return ae(1 + Hr.count(et(e), e), t, 3);
}
function fs(e, t) {
  return ae(e.getUTCMilliseconds(), t, 3);
}
function Uc(e, t) {
  return fs(e, t) + "000";
}
function Yc(e, t) {
  return ae(e.getUTCMonth() + 1, t, 2);
}
function Vc(e, t) {
  return ae(e.getUTCMinutes(), t, 2);
}
function Gc(e, t) {
  return ae(e.getUTCSeconds(), t, 2);
}
function Kc(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function qc(e, t) {
  return ae(cs.count(et(e) - 1, e), t, 2);
}
function hs(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? pt(e) : pt.ceil(e);
}
function Xc(e, t) {
  return e = hs(e), ae(pt.count(et(e), e) + (et(e).getUTCDay() === 4), t, 2);
}
function Zc(e) {
  return e.getUTCDay();
}
function Jc(e, t) {
  return ae(qt.count(et(e) - 1, e), t, 2);
}
function Qc(e, t) {
  return ae(e.getUTCFullYear() % 100, t, 2);
}
function eu(e, t) {
  return e = hs(e), ae(e.getUTCFullYear() % 100, t, 2);
}
function tu(e, t) {
  return ae(e.getUTCFullYear() % 1e4, t, 4);
}
function nu(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? pt(e) : pt.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4);
}
function ru() {
  return "+0000";
}
function Na() {
  return "%";
}
function ja(e) {
  return +e;
}
function Ea(e) {
  return Math.floor(+e / 1e3);
}
var at, ps;
au({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function au(e) {
  return at = ac(e), ps = at.format, at.parse, at.utcFormat, at.utcParse, at;
}
function su(e) {
  return new Date(e);
}
function ou(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ms(e, t, n, r, s, o, i, l, u, f) {
  var d = zl(), p = d.invert, g = d.domain, x = f(".%L"), T = f(":%S"), m = f("%I:%M"), y = f("%I %p"), S = f("%a %d"), $ = f("%b %d"), P = f("%B"), w = f("%Y");
  function R(B) {
    return (u(B) < B ? x : l(B) < B ? T : i(B) < B ? m : o(B) < B ? y : r(B) < B ? s(B) < B ? S : $ : n(B) < B ? P : w)(B);
  }
  return d.invert = function(B) {
    return new Date(p(B));
  }, d.domain = function(B) {
    return arguments.length ? g(Array.from(B, ou)) : g().map(su);
  }, d.ticks = function(B) {
    var L = g();
    return e(L[0], L[L.length - 1], B ?? 10);
  }, d.tickFormat = function(B, L) {
    return L == null ? R : f(L);
  }, d.nice = function(B) {
    var L = g();
    return (!B || typeof B.range != "function") && (B = t(L[0], L[L.length - 1], B ?? 10)), B ? g(Wl(L, B)) : d;
  }, d.copy = function() {
    return Hl(d, ms(e, t, n, r, s, o, i, l, u, f));
  }, d;
}
function iu() {
  return cl.apply(ms(nc, rc, Ae, Ar, Nn, jt, Rr, Ir, it, ps).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function lu({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: r,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const f = te(null), [d, p] = ne(!1), [g, x] = ne(!1), T = t(e.start), m = t(e.end), y = Math.max(m - T, 20), S = () => {
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
  }, $ = e.progress ? y * e.progress / 100 : 0, P = () => {
    n?.(e);
  }, w = () => {
    r?.(e);
  }, R = (E) => {
    E.key === "Enter" ? (E.preventDefault(), P()) : E.key === " " && (E.preventDefault(), w());
  }, B = () => {
    p(!0);
  }, L = () => {
    p(!1);
  }, b = () => {
    x(!0), l?.();
  }, v = () => {
    x(!1);
  }, C = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), c = {
    "--task-left": `${T}px`,
    "--task-width": `${y}px`,
    "--task-color": S(),
    left: `${T}px`,
    width: `${y}px`,
    backgroundColor: S()
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: f,
      "data-task-index": o,
      className: C,
      style: c,
      onClick: P,
      onDoubleClick: w,
      onKeyDown: R,
      onMouseDown: B,
      onMouseUp: L,
      onFocus: b,
      onBlur: v,
      "aria-label": u || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${$}px` }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function cu({ viewStart: e, viewEnd: t, dateCount: n }) {
  const r = [];
  for (let x = e.getTime(); x <= t.getTime(); x += 864e5)
    r.push(new Date(x));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = ne(-1), u = te(null), f = (x) => {
    if (x.key === "ArrowLeft") {
      x.preventDefault();
      const T = Math.max(0, i === -1 ? 0 : i - 1);
      l(T), g(T);
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const T = Math.min(r.length - 1, i === -1 ? 0 : i + 1);
      l(T), g(T);
    } else if (x.key === "ArrowDown") {
      x.preventDefault();
      const T = document.querySelector(".gantt-row .timeline-container");
      T && T.focus();
    } else if (x.key === "Home")
      x.preventDefault(), l(0), g(0);
    else if (x.key === "End") {
      x.preventDefault();
      const T = r.length - 1;
      l(T), g(T);
    }
  }, d = (x) => {
    if (x.key === "ArrowDown") {
      x.preventDefault();
      const T = document.querySelector(".gantt-row .resource-label");
      T && T.focus();
    } else if (x.key === "ArrowRight") {
      x.preventDefault();
      const T = u.current;
      T && T.focus();
    }
  }, p = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (x) => {
    const T = u.current?.querySelector(`[data-date-index="${x}"]`);
    T && T.focus();
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
            children: r.map((x, T) => {
              const m = x.getTime() === o.getTime(), y = i === T;
              return /* @__PURE__ */ a.jsx(
                "div",
                {
                  "data-date-index": T,
                  className: `date-column ${m ? "today" : ""} ${y ? "focused" : ""}`,
                  tabIndex: y ? 0 : -1,
                  role: "button",
                  "aria-label": `${x.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(T),
                  onKeyDown: f,
                  children: x.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                T
              );
            })
          }
        )
      ]
    }
  );
}
function uu({ resource: e, tasks: t, scale: n, onTaskClick: r, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, u] = ne(!1), [f, d] = ne(-1), p = te(null);
  se(() => {
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
          m.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
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
        const y = Math.max(0, f - 1);
        d(y), p.current?.querySelector(`[data-task-index="${y}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const $ = Math.min(t.length - 1, f + 1);
        d($), p.current?.querySelector(`[data-task-index="${$}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), f >= 0 && r?.(t[f]);
        break;
      case " ":
        m.preventDefault(), f >= 0 && s?.(t[f]);
        break;
      case "Escape":
        m.preventDefault(), u(!1), d(-1), p.current?.focus();
        break;
    }
  }, x = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault(), p.current?.focus();
        break;
    }
  }, T = (m) => {
    l && d(m);
  };
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": o + 2,
      children: [
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "resource-label",
            role: "gridcell",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": `Resource: ${e.label}`,
            onKeyDown: x,
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
            onKeyDown: g,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((m, y) => /* @__PURE__ */ a.jsx(
              lu,
              {
                task: m,
                scale: n,
                onTaskClick: r,
                onTaskDoubleClick: s,
                isSelected: l && f === y,
                taskIndex: y,
                tabIndex: l && f === y ? 0 : -1,
                onFocus: () => T(y)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function Bp({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: r,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = te(null), [l, u] = ne(800), f = oe(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), d = oe(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : r;
    const m = new Date(r);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [r]), p = oe(() => Math.ceil((d.getTime() - f.getTime()) / 864e5) + 1, [f, d]);
  se(() => {
    if (!i.current) return;
    const m = new ResizeObserver((y) => {
      const S = y[0];
      S && u(Math.max(S.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const g = oe(
    () => iu().domain([f, d]).range([0, l]),
    [f, d, l]
  ), x = oe(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((y) => {
      const S = m.get(y.resourceId) || [];
      S.push(y), m.set(y.resourceId, S);
    }), m;
  }, [t]), T = (m) => {
    if (m.target === m.currentTarget)
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault();
          const y = i.current?.querySelector(".gantt-row .resource-label");
          y && y.focus();
          break;
        case "Home":
          m.preventDefault();
          const S = i.current?.querySelector(".header-resource");
          S && S.focus();
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
      onKeyDown: T,
      children: [
        /* @__PURE__ */ a.jsx(cu, { viewStart: f, viewEnd: d, dateCount: p }),
        /* @__PURE__ */ a.jsx(
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
            children: e.map((m, y) => /* @__PURE__ */ a.jsx(
              uu,
              {
                resource: m,
                tasks: x.get(m.id) || [],
                scale: g,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: y,
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
const Xt = ({
  children: e,
  href: t,
  active: n = !1,
  attributes: r = {}
}) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-breadcrumb__item", children: n ? /* @__PURE__ */ a.jsx(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...r,
    children: e
  }
) : /* @__PURE__ */ a.jsx(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...r,
    children: e
  }
) }), du = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: r = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? de.Children.toArray(t).filter(
    (S) => de.isValidElement(S) && (S.type === Xt || S.type?.displayName === "BreadcrumbItem")
  ).map((S) => ({
    text: typeof S.props.children == "string" ? S.props.children : String(S.props.children),
    href: S.props.href,
    active: S.props.active,
    attributes: S.props.attributes
  })) : [], f = () => t ? u() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const y = f();
    if (y && y.length > 0) {
      const S = y.slice().reverse().find(($) => $.href && !$.active);
      if (S)
        return { href: S.href, text: S.text };
    }
    return { text: "Home" };
  }, p = f(), g = d(), x = O(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), m = p && p.length > 1 ? r : void 0;
  return /* @__PURE__ */ a.jsxs(
    "nav",
    {
      className: x,
      "aria-label": m,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ a.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          de.Children.map(t, (y, S) => de.isValidElement(y) && (y.type === Xt || y.type?.displayName === "BreadcrumbItem") ? de.cloneElement(y, { key: S }) : null)
        ) : (
          // Render from items array
          p?.map((y, S) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: y.active ? /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...y.attributes || {},
              children: y.text
            }
          ) : /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: y.href,
              role: "link",
              ...y.attributes || {},
              children: y.text
            }
          ) }, S))
        ) }),
        g.href && /* @__PURE__ */ a.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ a.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: g.href,
            role: "link",
            "aria-label": `Back to ${g.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              g.text
            ]
          }
        ) })
      ]
    }
  );
}, fu = du;
fu.Item = Xt;
Xt.displayName = "BreadcrumbItem";
const Lp = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: r = {}
}) => {
  const [s, o] = ne(!1);
  se(() => {
    o(!0);
  }, []), se(() => {
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
  }, [s]);
  const i = O("nhsuk-skip-link", n);
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": s ? "true" : "false",
      ...r,
      children: e
    }
  );
}, Ip = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: r,
  classes: s,
  attributes: o = {}
}) => {
  const i = O("nhsuk-pagination", s);
  return /* @__PURE__ */ a.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...o,
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
}, Rp = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: r = {}
}) => {
  const s = O("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ a.jsx(
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
      className: s,
      role: "navigation",
      "aria-label": n,
      ...r,
      children: [
        /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ a.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => o(i, l)) })
      ]
    }
  );
}, Hp = ({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: r = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: f,
  className: d,
  children: p,
  "data-testid": g,
  id: x,
  "aria-label": T,
  "aria-labelledby": m,
  "aria-describedby": y
}) => {
  const S = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d
  ].filter(Boolean).join(" "), $ = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), P = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), w = () => {
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
  }, R = () => p || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-card__description", children: o }) : null), B = () => e !== "primary" ? null : /* @__PURE__ */ a.jsxs(
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
      className: S,
      "data-testid": g,
      id: x,
      "aria-label": T,
      "aria-labelledby": m,
      "aria-describedby": y,
      children: [
        u && /* @__PURE__ */ a.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: f || ""
          }
        ),
        /* @__PURE__ */ a.jsxs("div", { className: $, children: [
          w(),
          R(),
          B()
        ] })
      ]
    }
  );
}, Ap = ({
  className: e,
  children: t,
  "data-testid": n,
  id: r
}) => {
  const s = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx(
    "ul",
    {
      className: s,
      "data-testid": n,
      id: r,
      children: t
    }
  );
}, zp = ({
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
}, Wp = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: r = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": f,
  id: d,
  "aria-label": p,
  "aria-labelledby": g,
  "aria-describedby": x
}) => {
  const T = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), y = () => {
    if (n)
      return /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const $ = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], P = /* @__PURE__ */ a.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        $,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ a.jsx(
      ft,
      {
        level: r,
        className: m,
        children: P
      }
    );
  }, S = () => u || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: T,
      "data-testid": f,
      id: d,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-describedby": x,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          y(),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "nhsuk-care-card__content", children: S() })
      ]
    }
  );
}, hu = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: r,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const f = O(
    "nhsuk-panel",
    t
  ), d = () => !n && !r && !l ? null : r ? /* @__PURE__ */ a.jsx(
    ft,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ a.jsx(
    ft,
    {
      level: s,
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
  ) : o ? /* @__PURE__ */ a.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ a.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ a.jsxs("div", { className: f, id: e, ...u, children: [
    d(),
    p()
  ] });
}, Op = ({
  text: e,
  html: t,
  children: n,
  className: r,
  ...s
}) => {
  const o = O("nhsuk-inset-text", r), i = () => n || (t ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ a.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ a.jsx("div", { className: o, ...s, children: i() });
}, Up = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...r
}) => {
  const s = O(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ a.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, f) => /* @__PURE__ */ a.jsx(
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
            o(u),
            u.visuallyHiddenText && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    f
  )) }) });
  return /* @__PURE__ */ a.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ a.jsx("dl", { className: s, ...r, children: e.map((l, u) => /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ a.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ a.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, Yp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: r,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: f,
  tableClasses: d,
  classes: p,
  attributes: g,
  "data-testid": x
}) => {
  const T = `nhsuk-table__caption ${r ? `nhsuk-table__caption--${r}` : ""}`.trim(), m = O(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), y = O(p), S = (w, R) => {
    const B = O("nhsuk-table__header", {
      [`nhsuk-table__header--${w.format}`]: w.format
    }, w.classes), L = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...o && { role: "columnheader" },
      ...w.attributes
    };
    return /* @__PURE__ */ a.jsx("th", { className: B, ...L, children: w.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }, R);
  }, $ = (w, R, B) => {
    const L = s && B, b = O(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${w.format}`]: w.format
      },
      w.classes
    ), v = {
      ...L && { scope: "row" },
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...o && {
        role: L ? "rowheader" : "cell",
        ...w.header && { "data-label": w.header }
      },
      ...w.attributes
    }, C = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      o && w.header && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        w.header,
        " "
      ] }),
      w.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text
    ] }), c = L ? "th" : "td";
    return /* @__PURE__ */ a.jsx(c, { className: b, ...v, children: C }, R);
  }, P = () => /* @__PURE__ */ a.jsxs(
    "table",
    {
      className: m,
      ...o && { role: "table" },
      ...g,
      ...x && { "data-testid": x },
      children: [
        n && /* @__PURE__ */ a.jsx("caption", { className: T, children: n }),
        t && t.length > 0 && /* @__PURE__ */ a.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ a.jsx("tr", { ...o && { role: "row" }, children: t.map((w, R) => S(w, R)) })
          }
        ),
        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((w, R) => /* @__PURE__ */ a.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: w.map(
              (B, L) => $(B, L, L === 0)
            )
          },
          R
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ a.jsxs(hu, { className: f, children: [
    i && /* @__PURE__ */ a.jsx(ft, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    P()
  ] }) : y ? /* @__PURE__ */ a.jsx("div", { className: y, children: P() }) : P();
}, Vp = tt(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: r,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: f,
  "data-testid": d,
  ...p
}, g) => {
  const x = n !== void 0, [T, m] = ne(() => t || e[0]?.id || ""), y = x ? n : T, S = te(null), $ = te(/* @__PURE__ */ new Map()), P = J((C) => {
    x || m(C), r?.(C);
  }, [x, r]), w = J((C) => {
    s?.(C), l && P(C);
  }, [s, l, P]), R = J((C, c) => {
    const E = e.filter((M) => !M.disabled).map((M) => M.id), K = E.indexOf(c);
    let j = null;
    switch (C.key) {
      case "ArrowLeft":
        j = K > 0 ? K - 1 : E.length - 1;
        break;
      case "ArrowRight":
        j = K < E.length - 1 ? K + 1 : 0;
        break;
      case "Home":
        j = 0;
        break;
      case "End":
        j = E.length - 1;
        break;
      case "Escape":
        C.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (j !== null) {
      C.preventDefault();
      const M = E[j], h = $.current.get(M);
      h && (h.focus(), w(M));
    }
  }, [e, w, i]), B = J((C, c) => {
    c ? $.current.set(C, c) : $.current.delete(C);
  }, []), L = J((C) => {
    const c = $.current.get(C);
    c && c.focus();
  }, []);
  Pa(g, () => ({
    focusTab: L,
    getActiveTab: () => y,
    getTabListElement: () => S.current
  }), [L, y]);
  const b = J((C) => {
    const c = C.relatedTarget;
    S.current?.contains(c) || o?.();
  }, [o]), v = O("nhsuk-tabs", u);
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
            ref: S,
            children: /* @__PURE__ */ a.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: b,
                children: e.map((C) => {
                  const c = C.id === y, E = C.disabled, K = O("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": c,
                    "nhsuk-tabs__list-item--disabled": E
                  });
                  return /* @__PURE__ */ a.jsx("li", { className: K, children: /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      ref: (j) => B(C.id, j),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": c,
                      "aria-controls": `${C.id}-panel`,
                      id: `${C.id}-tab`,
                      tabIndex: c ? 0 : -1,
                      disabled: E,
                      onClick: () => !E && P(C.id),
                      onKeyDown: (j) => !E && R(j, C.id),
                      onFocus: () => !E && w(C.id),
                      ...C.attributes,
                      children: C.label
                    }
                  ) }, C.id);
                })
              }
            )
          }
        ),
        e.map((C) => {
          const c = C.id === y;
          return /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${C.id}-tab`,
              id: `${C.id}-panel`,
              hidden: !c,
              children: C.content
            },
            C.id
          );
        })
      ]
    }
  );
}), pu = tt(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: r,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...u
  }, f) => {
    const d = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ a.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : r ? g = /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n && (g = n), /* @__PURE__ */ a.jsxs(
      "details",
      {
        ref: f,
        id: i,
        className: d,
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ a.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
pu.displayName = "Details";
const mu = tt(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: r = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    o && u.push(o);
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
    ), p = (x) => t === "cross" && !r ? `do not ${x}` : x, g = () => /* @__PURE__ */ a.jsx(
      ft,
      {
        level: s,
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
          g(),
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ a.jsx("ul", { className: f.join(" "), role: "list", children: n.map((x, T) => /* @__PURE__ */ a.jsxs("li", { children: [
            d(),
            p(x.item)
          ] }, T)) }) })
        ]
      }
    );
  }
);
mu.displayName = "DoDontList";
const gu = tt(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: r,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...u
  }, f) => {
    const d = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ a.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : r ? g = /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n && (g = n), /* @__PURE__ */ a.jsxs(
      "details",
      {
        ref: f,
        id: i,
        className: d,
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ a.jsx("summary", { className: "nhsuk-details__summary", children: p }),
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
gu.displayName = "Expander";
const bu = tt(
  ({ items: e, idPrefix: t = "task-list", className: n, ...r }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const f = u + 1, d = `${t}-${f}-hint`, p = `${t}-${f}-status`, g = !!l.href, x = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), T = [
        l.hint && d,
        p
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ a.jsx(
        xu,
        {
          item: l,
          itemClasses: x,
          hasLink: g,
          hintId: d,
          statusId: p,
          ariaDescribedBy: T
        },
        u
      );
    };
    return /* @__PURE__ */ a.jsx(
      "ul",
      {
        ref: s,
        className: o,
        ...r,
        children: e.map(i)
      }
    );
  }
), xu = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: r,
  statusId: s,
  ariaDescribedBy: o
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
        "aria-describedby": o,
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
    return e.status.tag ? d = /* @__PURE__ */ a.jsx(Nr, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ a.jsx("div", { className: f, id: s, children: d });
  };
  return /* @__PURE__ */ a.jsxs("li", { className: t, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
bu.displayName = "TaskList";
const Gp = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: r,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), u = () => s || (r ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ a.jsx("p", { children: n }) : null), f = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: f,
      ...i,
      children: [
        Da(
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
}, Kp = ({
  src: e,
  alt: t,
  caption: n,
  sizes: r,
  srcset: s,
  className: o,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    o
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
            ...r && s ? { sizes: r, srcSet: s } : {}
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
}, vu = de.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: r,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: f,
    ariaDescribedby: d,
    className: p,
    tableClassName: g,
    bordered: x = !1,
    striped: T = !1,
    responsive: m = !1,
    tableType: y = "default"
  }, S) => {
    const $ = te(null), P = te(null), w = te(null);
    de.useImperativeHandle(S, () => $.current, []);
    const [R, B] = ne(0), [L, b] = ne(0), [v, C] = ne("headers"), [c, E] = ne("browse"), K = t.length, j = e.length, M = oe(() => !n || n.length === 0 ? e : [...e].sort((W, ee) => {
      for (const { key: G, direction: _ } of n) {
        const H = W[G], q = ee[G];
        if (H == null && q == null) continue;
        if (H == null) return 1;
        if (q == null) return -1;
        let N = 0;
        if (typeof H == "number" && typeof q == "number" ? N = H - q : N = String(H).localeCompare(String(q)), N !== 0)
          return _ === "asc" ? N : -N;
      }
      return 0;
    }), [e, n]), h = J((W, ee) => {
      setTimeout(() => {
        const G = $.current?.querySelector(
          `tbody tr:nth-child(${W + 1}) td:nth-child(${ee + 1})`
        );
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), A = J((W) => {
      setTimeout(() => {
        const ee = $.current?.querySelector(`th:nth-child(${W + 1})`);
        ee && (ee.focus(), typeof ee.scrollIntoView == "function" && ee.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Y = J((W) => {
      r?.(W);
    }, [r]), X = J((W) => {
      o?.(W);
    }, [o]), D = J((W) => {
      const { key: ee } = W;
      switch (ee) {
        case "Enter":
          if (W.preventDefault(), v === "headers" && c === "browse")
            E("navigate"), A(L);
          else if (v === "headers" && c === "navigate") {
            const G = t[L];
            G && Y(G.key);
          } else v === "cells" && c === "browse" ? (E("navigate"), h(R, L)) : v === "cells" && c === "navigate" && X(R);
          break;
        case "Escape":
          W.preventDefault(), (v === "headers" && c === "navigate" || v === "cells" && c === "navigate") && E("browse");
          break;
        case "ArrowLeft":
          if (W.preventDefault(), c === "navigate" || c === "browse" && v === "headers") {
            if (v === "headers") {
              const G = Math.max(0, L - 1);
              b(G), A(G);
            } else if (v === "cells") {
              const G = Math.max(0, L - 1);
              b(G), h(R, G);
            }
          }
          break;
        case "ArrowRight":
          if (W.preventDefault(), c === "navigate" || c === "browse" && v === "headers") {
            if (v === "headers") {
              const G = Math.min(K - 1, L + 1);
              b(G), A(G);
            } else if (v === "cells") {
              const G = Math.min(K - 1, L + 1);
              b(G), h(R, G);
            }
          }
          break;
        case "ArrowUp":
          if (W.preventDefault(), v === "cells") {
            if (c === "browse") {
              const G = Math.max(0, R - 1);
              B(G), h(G, 0), b(0);
            } else if (c === "navigate")
              if (R > 0) {
                const G = R - 1;
                B(G), h(G, L);
              } else
                C("headers"), E("browse"), A(L);
          }
          break;
        case "ArrowDown":
          if (W.preventDefault(), v === "headers" && c === "browse")
            C("cells"), B(0), b(0), h(0, 0);
          else if (v === "cells") {
            const G = j - 1;
            if (c === "browse") {
              const _ = Math.min(G, R + 1);
              B(_), h(_, 0), b(0);
            } else if (c === "navigate" && R < G) {
              const _ = R + 1;
              B(_), h(_, L);
            }
          }
          break;
        case "Home":
          W.preventDefault(), v === "headers" ? (b(0), A(0)) : v === "cells" && (W.ctrlKey ? (B(0), b(0), h(0, 0)) : (b(0), h(R, 0)));
          break;
        case "End":
          if (W.preventDefault(), v === "headers") {
            const G = K - 1;
            b(G), A(G);
          } else if (v === "cells")
            if (W.ctrlKey) {
              const G = j - 1, _ = K - 1;
              B(G), b(_), h(G, _);
            } else {
              const G = K - 1;
              b(G), h(R, G);
            }
          break;
        case " ":
          if (W.preventDefault(), v === "headers" && c === "navigate") {
            const G = t[L];
            G && Y(G.key);
          } else v === "cells" && c === "navigate" && X(R);
          break;
      }
    }, [
      v,
      c,
      L,
      R,
      K,
      j,
      t,
      h,
      A,
      Y,
      X
    ]);
    se(() => {
      const W = $.current;
      if (W)
        return W.addEventListener("keydown", D), () => W.removeEventListener("keydown", D);
    }, [D]);
    const V = O(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": T,
        "nhsuk-table--compact": y === "compact"
      },
      p
    );
    return /* @__PURE__ */ a.jsxs(
      "table",
      {
        ref: $,
        className: V,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": f,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { ref: P, role: "row", children: t.map((W, ee) => {
            const G = n?.find((q) => q.key === W.key), _ = !!G, H = v === "headers" && L === ee;
            return /* @__PURE__ */ a.jsx(
              "th",
              {
                className: O("sortable-header", {
                  "sortable-header--focused": H
                }),
                role: "columnheader",
                tabIndex: H ? 0 : -1,
                onClick: () => Y(W.key),
                onKeyDown: (q) => {
                  (q.key === "Enter" || q.key === " ") && (q.preventDefault(), Y(W.key));
                },
                "aria-sort": _ ? G?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ a.jsx("span", { className: "header-label", children: W.label }),
                  _ && /* @__PURE__ */ a.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ a.jsx("span", { className: "sort-priority", children: n.findIndex((q) => q.key === W.key) + 1 }),
                    /* @__PURE__ */ a.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: G?.direction === "asc" ? /* @__PURE__ */ a.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ a.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              W.key
            );
          }) }) }),
          /* @__PURE__ */ a.jsx("tbody", { ref: w, className: "nhsuk-table__body", role: "rowgroup", children: M.map((W, ee) => {
            const G = s === ee, _ = v === "cells" && R === ee;
            return /* @__PURE__ */ a.jsx(
              "tr",
              {
                role: "row",
                className: O("data-row", {
                  "data-row--selected": G,
                  "data-row--focused": _
                }),
                "aria-selected": G,
                children: t.map((H, q) => {
                  const N = H.render ? H.render(W) : W[H.key], k = v === "cells" && R === ee && L === q, I = () => typeof N == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                    /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: N ? "✓" : "✗" }),
                    /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: N ? "Yes" : "No" })
                  ] }) : String(N ?? "");
                  return /* @__PURE__ */ a.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: O("data-cell", {
                        "data-cell--focused": k
                      }),
                      tabIndex: k ? 0 : -1,
                      onClick: () => X(ee),
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
vu.displayName = "AriaDataGrid";
const yu = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: r = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: f = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const p = te(null), g = te(null), x = te(null), T = J((v, C) => {
    u || (g.current = C, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", C));
  }, [u]), m = J((v, C) => {
    u || g.current === C || (v.preventDefault(), v.dataTransfer.dropEffect = "move", x.current = C);
  }, [u]), y = J((v, C) => {
    if (u) return;
    v.preventDefault();
    const c = g.current;
    if (!c || c === C) return;
    const E = e.findIndex((j) => j.key === c), K = e.findIndex((j) => j.key === C);
    if (E !== -1 && K !== -1) {
      const j = [...e], [M] = j.splice(E, 1);
      j.splice(K, 0, M), n(j);
    }
    g.current = null, x.current = null;
  }, [u, e, n]), S = J(() => {
    g.current = null, x.current = null;
  }, []), $ = J((v) => {
    const C = t.find((c) => c.key === v);
    return C ? C.label : v;
  }, [t]), P = J((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), w = J((v) => {
    if (u) return;
    const C = e.map(
      (c) => c.key === v ? { ...c, direction: c.direction === "asc" ? "desc" : "asc" } : c
    );
    n(C);
  }, [e, n, u]), R = J((v) => {
    if (u) return;
    const C = e.filter((c) => c.key !== v);
    n(C);
  }, [e, n, u]), B = J(() => {
    u || n([]);
  }, [n, u]), L = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const v = e.map((C, c) => {
      const E = C.direction === "asc" ? "ascending" : "descending";
      return `${c + 1}. ${$(C.key)} (${E})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const C = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${C}`;
    }
  }, b = oe(() => {
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
        children: s
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
          "aria-describedby": b,
          children: e.map((v, C) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (c) => T(c, v.key),
              onDragOver: (c) => m(c, v.key),
              onDrop: (c) => y(c, v.key),
              onDragEnd: S,
              onClick: () => w(v.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": v.key,
              children: /* @__PURE__ */ a.jsx(
                Nr,
                {
                  color: P(C),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(v.key),
                  disabled: u,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ a.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${C + 1}`, children: C + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: $(v.key) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (c) => {
                          c.stopPropagation(), w(v.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${$(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
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
        Cr,
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
function ku(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), u = new Array(o).fill([]);
      for (let f = 0; f < Math.min(e.tabLoadingStates.length, o); f++)
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
const Fa = tt(
  function(t, n) {
    const {
      dataConfig: r = {},
      tabPanels: s,
      selectedIndex: o,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: u,
      ariaDescription: f,
      className: d = "",
      disabled: p = !1,
      orientation: g = "horizontal",
      id: x,
      isLoading: T = !1,
      loadingComponent: m,
      error: y = null,
      errorComponent: S,
      "data-testid": $
    } = t, {
      dataComparator: P = (_, H) => JSON.stringify(_) === JSON.stringify(H),
      filterFunction: w = (_) => _,
      booleanRenderer: R = (_) => _ ? "✓" : "✗"
    } = r || {}, B = o !== void 0, L = o ?? 0, [b, v] = ne({
      focusArea: "tabs",
      focusedTabIndex: L,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), C = oe(() => ({
      selectedIndex: L,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [L]), [c, E] = co(ku, C);
    se(() => {
      const _ = c.tabLoadingStates.length, H = s.length;
      _ !== H && E({ type: "ADJUST_ARRAYS", payload: { newLength: H } });
    }, [s.length]), se(() => {
      B && E({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, B]), se(() => {
      l && l(c.globalSelectedRowData);
    }, [c.globalSelectedRowData, l]);
    const K = J((_, H) => P(_, H), [P]), j = J((_) => {
      _ >= 0 && _ < s.length && !s[_].disabled && (E({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
    }, [s, i]), M = J((_, H) => {
      const { key: q } = _;
      switch (q) {
        case "ArrowLeft":
          _.preventDefault();
          const N = H > 0 ? H - 1 : s.length - 1;
          j(N), v((z) => ({ ...z, focusedTabIndex: N })), h.current[N]?.focus();
          break;
        case "ArrowRight":
          _.preventDefault();
          const k = H < s.length - 1 ? H + 1 : 0;
          j(k), v((z) => ({ ...z, focusedTabIndex: k })), h.current[k]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), v((z) => ({
            ...z,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), X(0);
          break;
        case "Home":
          _.preventDefault(), j(0), v((z) => ({ ...z, focusedTabIndex: 0 })), h.current[0]?.focus();
          break;
        case "End":
          _.preventDefault();
          const I = s.length - 1;
          j(I), v((z) => ({ ...z, focusedTabIndex: I })), h.current[I]?.focus();
          break;
        case "Enter":
        case " ":
          _.preventDefault(), j(H);
          break;
      }
    }, [s.length, j]), h = te([]), A = te([]), Y = J((_, H) => {
      const q = c.sortConfig || [], N = q.find((z) => z.key === H);
      let k;
      N ? N.direction === "asc" ? k = q.map(
        (z) => z.key === H ? { ...z, direction: "desc" } : z
      ) : k = q.filter((z) => z.key !== H) : k = [...q, { key: H, direction: "asc" }], E({
        type: "SET_SORT",
        payload: k
      }), s[_].onSort?.(H);
    }, [c.sortConfig, s]), X = J((_) => {
      setTimeout(() => {
        const H = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] th:nth-child(${_ + 1})`
        );
        H && H.focus();
      }, 0);
    }, [c.selectedIndex]), D = J((_) => R(_), [R]), V = J((_, H) => {
      setTimeout(() => {
        const q = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] tbody tr:nth-child(${_ + 1}) td:nth-child(${H + 1})`
        );
        q && q.focus();
      }, 0);
    }, [c.selectedIndex]), W = J((_, H) => {
      const { key: q } = _, N = s[c.selectedIndex], k = N?.columns.length || 0;
      switch (q) {
        case "ArrowLeft":
          _.preventDefault();
          const I = Math.max(0, H - 1);
          v((Z) => ({ ...Z, focusedHeaderIndex: I })), X(I);
          break;
        case "ArrowRight":
          _.preventDefault();
          const z = Math.min(k - 1, H + 1);
          v((Z) => ({ ...Z, focusedHeaderIndex: z })), X(z);
          break;
        case "ArrowUp":
          _.preventDefault(), v((Z) => ({
            ...Z,
            focusArea: "tabs",
            focusedTabIndex: c.selectedIndex
          })), h.current[c.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), v((Z) => ({
            ...Z,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: H,
            isGridActive: !0
          })), V(0, H);
          break;
        case "Home":
          _.preventDefault(), v((Z) => ({ ...Z, focusedHeaderIndex: 0 })), X(0);
          break;
        case "End":
          _.preventDefault();
          const F = k - 1;
          v((Z) => ({ ...Z, focusedHeaderIndex: F })), X(F);
          break;
        case "Enter":
        case " ":
          _.preventDefault();
          const re = N?.columns[H]?.key;
          re && Y(c.selectedIndex, re);
          break;
      }
    }, [s, c.selectedIndex, Y, v, X, V, h]), ee = J((_, H, q) => {
      const { key: N } = _, k = s[c.selectedIndex], I = k?.data.length || 0, z = k?.columns.length || 0;
      switch (N) {
        case "ArrowUp":
          if (_.preventDefault(), H === 0)
            v((U) => ({
              ...U,
              focusArea: "headers",
              focusedHeaderIndex: q,
              isGridActive: !1
            })), X(q);
          else {
            const U = H - 1;
            v((Q) => ({ ...Q, focusedRowIndex: U })), V(U, q);
          }
          break;
        case "ArrowDown":
          _.preventDefault();
          const F = Math.min(I - 1, H + 1);
          v((U) => ({ ...U, focusedRowIndex: F })), V(F, q);
          break;
        case "ArrowLeft":
          _.preventDefault();
          const re = Math.max(0, q - 1);
          v((U) => ({ ...U, focusedColumnIndex: re })), V(H, re);
          break;
        case "ArrowRight":
          _.preventDefault();
          const Z = Math.min(z - 1, q + 1);
          v((U) => ({ ...U, focusedColumnIndex: Z })), V(H, Z);
          break;
        case "Home":
          _.preventDefault(), _.ctrlKey ? (v((U) => ({ ...U, focusedRowIndex: 0, focusedColumnIndex: 0 })), V(0, 0)) : (v((U) => ({ ...U, focusedColumnIndex: 0 })), V(H, 0));
          break;
        case "End":
          if (_.preventDefault(), _.ctrlKey) {
            const U = I - 1, Q = z - 1;
            v((le) => ({ ...le, focusedRowIndex: U, focusedColumnIndex: Q })), V(U, Q);
          } else {
            const U = z - 1;
            v((Q) => ({ ...Q, focusedColumnIndex: U })), V(H, U);
          }
          break;
        case "Enter":
        case " ":
          if (_.preventDefault(), k && k.data[H]) {
            const U = k.data.some((ue) => "ews_data" in ue) ? w(k.data, c.filters) : k.data, Q = c.sortConfig;
            let le = U;
            if (Q && Q.length > 0 && (le = [...U].sort((ue, we) => {
              for (const { key: be, direction: ke } of Q) {
                let $e = ue[be], We = we[be];
                const Oe = k.columns.find((io) => io.key === be);
                if (Oe?.render && ($e = Oe.render(ue), We = Oe.render(we)), $e == null && We == null) continue;
                if ($e == null) return ke === "asc" ? -1 : 1;
                if (We == null) return ke === "asc" ? 1 : -1;
                let Ue = 0;
                if (typeof $e == "number" && typeof We == "number" ? Ue = $e - We : Ue = String($e).localeCompare(String(We), void 0, { numeric: !0, sensitivity: "base" }), Ue !== 0)
                  return ke === "asc" ? Ue : -Ue;
              }
              return 0;
            })), le[H]) {
              const ue = le[H], be = c.globalSelectedRowData && K(c.globalSelectedRowData, ue) ? null : ue;
              E({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: be
              });
            }
          }
          break;
      }
    }, [s, c.selectedIndex, c.filters, c.sortConfig, w, K, E, v, X, V]), G = J((_, H) => w(_, H), [w]);
    return Pa(n, () => ({
      selectTab: (_) => {
        _ >= 0 && _ < s.length && (E({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
      },
      refreshData: (_) => {
        console.log("Refreshing data for tab:", _ ?? "all");
      },
      exportData: (_) => {
        const H = _ ?? c.selectedIndex, q = s[H];
        return q ? q.data : [];
      },
      getSelectedRows: (_) => c.globalSelectedRowData ? [] : [],
      clearSelection: (_) => {
        E({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (_) => {
        E({ type: "SET_FILTERS", payload: _ });
      }
    }), [c.selectedIndex, c.selectedRows, s, i]), T ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": $, children: m || /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : y ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": $, children: S || /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ a.jsx("p", { children: y })
    ] }) }) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${d}`,
        id: x,
        "data-testid": $,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${x}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ a.jsx(
            yu,
            {
              sortConfig: c.sortConfig || [],
              columns: s.flatMap(
                (_) => _.columns.map((H) => ({ key: H.key, label: H.label }))
              ).filter(
                (_, H, q) => q.findIndex((N) => N.key === _.key) === H
                // Remove duplicates
              ),
              onSortChange: (_) => {
                E({ type: "SET_SORT", payload: _ });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": `${f || ""} ${x ? `${x}-navigation-help` : ""}`.trim(),
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((_, H) => {
                const q = H === c.selectedIndex, N = _.disabled || p;
                return /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${_.id}`,
                    "aria-controls": `panel-${_.id}`,
                    "aria-selected": q,
                    "aria-disabled": N,
                    tabIndex: q ? 0 : -1,
                    ref: (k) => {
                      h.current[H] = k;
                    },
                    onClick: () => j(H),
                    onKeyDown: (k) => M(k, H),
                    disabled: N,
                    className: `
                  aria-tabs-datagrid__tab
                  ${q ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${N ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: _.label }),
                      c.tabLoadingStates[H] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      c.tabErrors[H] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  _.id
                );
              })
            }
          ),
          s.map((_, H) => {
            const q = H === c.selectedIndex;
            return /* @__PURE__ */ a.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${_.id}`,
                "aria-labelledby": `tab-${_.id}`,
                tabIndex: 0,
                hidden: !q,
                ref: (N) => {
                  A.current[H] = N;
                },
                className: `aria-tabs-datagrid__panel ${_.className || ""}`,
                "data-tab-panel": H,
                children: q && (() => {
                  const N = _.data.some((I) => "ews_data" in I) ? G(_.data, c.filters) : _.data, k = oe(() => {
                    const I = c.sortConfig;
                    return !I || I.length === 0 ? N : [...N].sort((z, F) => {
                      for (const { key: re, direction: Z } of I) {
                        let U = z[re], Q = F[re];
                        const le = _.columns.find((we) => we.key === re);
                        if (le?.render && (U = le.render(z), Q = le.render(F)), U == null && Q == null) continue;
                        if (U == null) return 1;
                        if (Q == null) return -1;
                        let ue = 0;
                        if (typeof U == "number" && typeof Q == "number" ? ue = U - Q : typeof U == "boolean" && typeof Q == "boolean" ? ue = U === Q ? 0 : U ? 1 : -1 : ue = String(U).localeCompare(String(Q), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ue !== 0)
                          return Z === "asc" ? ue : -ue;
                      }
                      return 0;
                    });
                  }, [N, c.sortConfig, _.columns]);
                  return /* @__PURE__ */ a.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": _.ariaLabel,
                      "aria-describedby": _.ariaDescription,
                      children: [
                        /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { role: "row", children: _.columns.map((I, z) => {
                          const F = c.sortConfig?.find((U) => U.key === I.key), re = !!F, Z = b.focusArea === "headers" && b.focusedHeaderIndex === z;
                          return /* @__PURE__ */ a.jsx(
                            "th",
                            {
                              className: `sortable-header ${Z ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: Z ? 0 : -1,
                              onClick: () => Y(H, I.key),
                              onKeyDown: (U) => W(U, z),
                              "aria-sort": re ? F?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ a.jsx("span", { className: "header-label", children: I.label }),
                                /* @__PURE__ */ a.jsxs("div", { className: `sort-indicator-container ${re ? `sort-indicator--${F?.direction}` : ""}`, children: [
                                  c.sortConfig && c.sortConfig.length > 0 && c.sortConfig.findIndex((U) => U.key === I.key) !== -1 && /* @__PURE__ */ a.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${c.sortConfig.findIndex((U) => U.key === I.key) + 1}`,
                                      "data-priority": c.sortConfig.findIndex((U) => U.key === I.key) + 1,
                                      title: `Sort priority: ${c.sortConfig.findIndex((U) => U.key === I.key) + 1}`,
                                      children: c.sortConfig.findIndex((U) => U.key === I.key) + 1
                                    }
                                  ),
                                  re && /* @__PURE__ */ a.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${F?.direction}`,
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
                        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: k.map((I, z) => {
                          const F = c.globalSelectedRowData && K(c.globalSelectedRowData, I), re = b.focusArea === "cells" && b.focusedRowIndex === z;
                          return /* @__PURE__ */ a.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${F ? "data-row--selected" : ""} ${re ? "data-row--focused" : ""}`,
                              "aria-selected": F,
                              children: _.columns.map((Z, U) => {
                                const Q = Z.render ? Z.render(I) : I[Z.key], le = b.focusArea === "cells" && b.focusedRowIndex === z && b.focusedColumnIndex === U, ue = () => typeof Q == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                                  D(Q),
                                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: Q ? "Yes" : "No" })
                                ] }) : String(Q ?? "");
                                return /* @__PURE__ */ a.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${le ? "data-cell--focused" : ""}`,
                                    tabIndex: le ? 0 : -1,
                                    onClick: () => {
                                      const be = c.globalSelectedRowData && K(c.globalSelectedRowData, I) ? null : I;
                                      E({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: be
                                      });
                                    },
                                    onKeyDown: (we) => ee(we, z, U),
                                    children: ue()
                                  },
                                  Z.key
                                );
                              })
                            },
                            z
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              _.id
            );
          })
        ]
      }
    );
  }
);
function Su(e, t) {
  const [n, r] = ne("cards");
  return se(() => {
    if (t) {
      r(t);
      return;
    }
    const s = () => {
      const o = window.innerWidth;
      o < e.mobile ? r("cards") : o < e.desktop ? r("hybrid") : r("table");
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [e, t]), n;
}
const qp = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: r = {},
  ...s
}) => {
  const o = Su(e, t), {
    primaryField: i = s.tabPanels[0]?.columns[0]?.key,
    secondaryFields: l = s.tabPanels[0]?.columns.slice(1, 3).map((p) => p.key) || [],
    badgeFields: u = [],
    hiddenFields: f = [],
    cardTemplate: d
  } = n;
  return o === "cards" ? /* @__PURE__ */ a.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${s.className || ""}`, children: [
    /* @__PURE__ */ a.jsx("div", { role: "tablist", className: "aria-tabs-datagrid-adaptive__tabs", children: s.tabPanels.map((p, g) => /* @__PURE__ */ a.jsx(
      "button",
      {
        role: "tab",
        className: `aria-tabs-datagrid-adaptive__tab ${g === 0 ? "aria-tabs-datagrid-adaptive__tab--selected" : ""}`,
        children: p.label
      },
      p.id
    )) }),
    /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__cards", role: "grid", children: s.tabPanels[0]?.data.map((p, g) => /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "aria-tabs-datagrid-adaptive__card",
        role: "gridcell",
        tabIndex: 0,
        children: d ? d(p, s.tabPanels[0].columns) : /* @__PURE__ */ a.jsx(
          wu,
          {
            row: p,
            columns: s.tabPanels[0].columns,
            primaryField: i,
            secondaryFields: l,
            badgeFields: u,
            hiddenFields: f
          }
        )
      },
      g
    )) })
  ] }) : o === "hybrid" ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${s.className || ""}`, children: /* @__PURE__ */ a.jsx(Fa, { ...s, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ a.jsx(Fa, { ...s });
}, wu = ({
  row: e,
  columns: t,
  primaryField: n,
  secondaryFields: r,
  badgeFields: s,
  hiddenFields: o
}) => {
  const i = t.find((u) => u.key === n), l = i?.render ? i.render(e) : e[n || ""];
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid-adaptive__card-header", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "aria-tabs-datagrid-adaptive__card-title", children: l }),
      s.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-badges", children: s.map((u) => {
        const f = t.find((p) => p.key === u), d = f?.render ? f.render(e) : e[u];
        return /* @__PURE__ */ a.jsx("span", { className: "nhsuk-tag aria-tabs-datagrid-adaptive__card-badge", children: d }, u);
      }) })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid-adaptive__card-body", children: r.map((u) => {
      const f = t.find((p) => p.key === u);
      if (!f || o.includes(u)) return null;
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
}, _u = (e) => [...e].sort((t, n) => t.priority - n.priority);
function zn(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Tu(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function $u(e, t) {
  const n = t.find((r) => r.id === e);
  return n ? n.priority > 0 : !1;
}
function Cu(e, t) {
  const n = t.find((s) => s.id === e), r = Tu(t);
  return n ? n.priority < r : !1;
}
const Xp = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: r = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const d = oe(() => _u(e), [e]), p = J(($) => {
    if (l) return;
    const P = e.map(
      (w) => w.id === $ ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    t(P);
  }, [e, t, l]), g = J(($) => {
    if (l) return;
    const P = e.findIndex((R) => R.id === $);
    if (P <= 0) return;
    const w = [...e];
    [w[P], w[P - 1]] = [w[P - 1], w[P]], t(zn(w));
  }, [e, t, l]), x = J(($) => {
    if (l) return;
    const P = e.findIndex((R) => R.id === $);
    if (P >= e.length - 1 || P === -1) return;
    const w = [...e];
    [w[P], w[P + 1]] = [w[P + 1], w[P]], t(zn(w));
  }, [e, t, l]), T = J(($) => {
    if (l) return;
    const P = e.filter((w) => w.id !== $);
    t(zn(P));
  }, [e, t, l]), m = J(() => {
    l || t([]);
  }, [t, l]), y = () => {
    if (e.length === 0)
      return r;
    if (s)
      return s;
    const $ = d.map((P, w) => {
      const R = P.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${P.label} (${R})`;
    });
    if ($.length === 1)
      return `Sorted by: ${$[0]}`;
    if ($.length === 2)
      return `Sorted by: ${$.join(" and ")}`;
    {
      const P = $.pop();
      return `Sorted by: ${$.join(", ")}, and ${P}`;
    }
  }, S = oe(() => {
    const $ = ["sort-description"];
    return i && $.push("sort-help"), f && $.push(f), $.join(" ");
  }, [i, f]);
  return e.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: y()
    }
  ) }) : /* @__PURE__ */ a.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: y()
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": S,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map(($) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ a.jsx(
                Nr,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => T($.id),
                  disabled: l,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-priority", children: $.priority + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: $.label }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => p($.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${$.label}. Currently ${$.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: $.direction === "asc" ? It.asc : It.desc
                      }
                    ),
                    /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g($.id),
                          disabled: l || !$u($.id, e),
                          "aria-label": `Move ${$.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => x($.id),
                          disabled: l || !Cu($.id, e),
                          "aria-label": `Move ${$.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            $.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ a.jsx(
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
    i && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ a.jsxs("small", { children: [
      "Click ",
      It.asc,
      "/",
      It.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Nu = "150ms", ju = "300ms", Eu = "500ms", Fu = "cubic-bezier(0.4, 0, 1, 1)", Du = "cubic-bezier(0, 0, 0.2, 1)", Pu = "cubic-bezier(0.4, 0, 0.2, 1)", Mu = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Bu = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Lu = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Iu = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ru = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Hu = "1px", Au = "2px", zu = "4px", Wu = "4px", Ou = "4px", Uu = "2px", Yu = "1px", Vu = "0px", Gu = "4px", Ku = "8px", qu = "12px", gs = "#d8dde0", bs = "#4c6272", xs = "#d8dde0", vs = "#aeb7bd", ys = "#d5281b", ks = "#005eb8", Ss = "#ffffff", ws = "#212b32", _s = "#007f3b", Ts = "#330072", $s = "#7c2855", Cs = "#d5281b", Ns = "#ffeb3b", js = "#fff9c4", Es = "#ffb81c", Fs = "#ed8b00", Ds = "#00a499", Ps = "#ae2573", Ms = "#4c6272", Bs = "#768692", Ls = "#aeb7bd", Is = "#d8dde0", Rs = "#f0f4f5", Xu = "#212b32", Zu = "#4c6272", Ju = "#ffffff", Qu = "#212b32", ed = "#005eb8", td = "#7c2855", nd = "#003087", rd = "#330072", ad = "#ffeb3b", sd = "#212b32", od = "#d8dde0", id = "#ffffff33", ld = "#d5281b", cd = "#4c6272", ud = "#ffffff", dd = "#007f3b", fd = "#ffffff", hd = "#006530", pd = "#004021", md = "#004021", gd = "#00000000", bd = "#ffffff", xd = "#005eb8", vd = "#005eb8", yd = "#d9e5f2", kd = "#c7daf0", Sd = "#005eb8", wd = "#ffffff", _d = "#212b32", Td = "#d9dde0", $d = "#b3bcc2", Cd = "#b3bcc2", Nd = "#d5281b", jd = "#aa2016", Ed = "#6a140e", Fd = "#6a140e", Dd = "#005eb8", Pd = "#004b93", Md = "#002f5c", Bd = "#002f5c", Ld = "8px", Id = "16px", Rd = "12px", Hd = "16px", Ad = "4px", zd = "40px", Wd = "4px", Od = "40px", Ud = "12px", Yd = "16px", Vd = "32px", Gd = "16px", Kd = "20px", qd = "28px", Xd = "9px", Zd = "2px", Jd = "16px", Qd = "24px", ef = "8px", tf = "24px", nf = "16px", rf = "4px", af = "4px", sf = "4px", of = "8px", lf = "4px", cf = "16px", uf = "#007f3b", df = "#006530", ff = "#004021", hf = "#d8dde0", pf = "#ffffff", mf = "#768692", gf = "#00000000", bf = "#ffeb3b", xf = "#00000000", vf = "#ffffff", yf = "#d9e5f2", kf = "#c7daf0", Sf = "#005eb8", wf = "#005eb8", Hs = "8px", As = "16px", zs = "12px", Ws = "16px", _f = "2px", Tf = "4px", $f = "4px", Cf = "600", Nf = "#ffffff", jf = "#d8dde0", Ef = "#aeb7bd", Ff = "#f0f4f5", Df = "#212b32", Pf = "#212b32", Mf = "#005eb8", Os = "16px", Us = "32px", Ys = "16px", Bf = "1px", Lf = "4px", If = "none", Rf = "0 2px 4px rgba(0, 0, 0, 0.1)", Hf = "#ffffff", Af = "#ffffff", zf = "#d8dde0", Wf = "#ffffff", Of = "#4c6272", Uf = "#ffeb3b", Yf = "#d5281b", Vf = "#aeb7bd", Gf = "#212b32", Kf = "#4c6272", qf = "#768692", Xf = "#212b32", Zf = "#ffffff", Jf = "600", Qf = "#d5281b", eh = "600", th = "#4c6272", Vs = "4px", Gs = "40px", Ks = "40px", qs = "12px", nh = "2px", rh = "4px", ah = "0px", sh = "16px", oh = "18px", ih = "24px", lh = "32px", ch = "34px", uh = "32px", dh = "40px", fh = "48px", hh = "5.4ex", ph = "7.2ex", mh = "9ex", gh = "10.8ex", bh = "20ex", xh = "38ex", vh = "56ex", yh = "44px", kh = "40px", Sh = "1020px", wh = "100%", _h = "50%", Th = "33.333%", $h = "25%", Ch = "20%", Nh = "320px", jh = "641px", Eh = "1025px", Fh = "1280px", Dh = "960px", Ph = "32px", Mh = "16px", Bh = "#d5281b", Lh = "#d5281b", Ih = "#ffffff", Rh = "#007f3b", Hh = "#007f3b", Ah = "#ffffff", zh = "#ffeb3b", Wh = "#ffeb3b", Oh = "#212b32", Uh = "#005eb8", Yh = "#005eb8", Vh = "#ffffff", Gh = "#d8dde0", Kh = "#aeb7bd", qh = "#768692", Xh = "0 4px 0 #004021", Zh = "0 4px 0 #005eb8", Jh = "0 4px 0 #6a140e", Qh = "0 4px 0 #ffeb3b", ep = "none", tp = "0 2px 4px rgba(0, 0, 0, 0.1)", np = "4px", rp = "0px", ap = "solid", sp = "0 0 0 3px #ffeb3b", op = "0 0 0 3px #ffeb3b", ip = "none", lp = "0 1px 3px rgba(0, 0, 0, 0.12)", cp = "0 2px 6px rgba(0, 0, 0, 0.16)", up = "0 4px 12px rgba(0, 0, 0, 0.20)", Xs = "0", Zs = "4px", Js = "8px", Qs = "16px", eo = "24px", to = "32px", no = "40px", ro = "48px", ao = "56px", so = "64px", Jn = "0", Qn = "0", er = "4px", tr = "4px", nr = "8px", rr = "8px", ar = "8px", sr = "16px", or = "16px", ir = "24px", lr = "24px", cr = "32px", ur = "32px", dr = "40px", fr = "40px", hr = "48px", pr = "48px", mr = "56px", gr = "56px", br = "64px", Zt = "Frutiger W01", Jt = "Arial, Helvetica, sans-serif", Qt = "sans-serif", en = "400", tn = "600", nn = "400", rn = "12px", an = "14px", sn = "12pt", on = "14px", ln = "16px", cn = "12pt", un = "16px", dn = "19px", fn = "13pt", hn = "19px", pn = "22px", mn = "15pt", gn = "22px", bn = "26px", xn = "17pt", vn = "27px", yn = "36px", kn = "20pt", Sn = "33px", wn = "48px", _n = "24pt", xr = "16px", vr = "24px", Ce = {
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
}, dp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Nu,
  AnimationDurationNormal: ju,
  AnimationDurationSlow: Eu,
  AnimationEasingBounce: Mu,
  AnimationEasingEaseIn: Fu,
  AnimationEasingEaseInOut: Pu,
  AnimationEasingEaseOut: Du,
  BorderColorCard: xs,
  BorderColorCardHover: vs,
  BorderColorDefault: gs,
  BorderColorError: ys,
  BorderColorForm: bs,
  BorderRadiusLarge: qu,
  BorderRadiusMedium: Ku,
  BorderRadiusNone: Vu,
  BorderRadiusSmall: Gu,
  BorderWidthCardBottom: Wu,
  BorderWidthDefault: Hu,
  BorderWidthFormElement: Au,
  BorderWidthFormElementError: zu,
  BorderWidthPanel: Ou,
  BorderWidthTableCell: Yu,
  BorderWidthTableHeader: Uu,
  BreakpointDesktop: Eh,
  BreakpointLargeDesktop: Fh,
  BreakpointMobile: Nh,
  BreakpointTablet: jh,
  ButtonBorderRadius: Tf,
  ButtonBorderWidth: _f,
  ButtonPrimaryBackgroundActive: ff,
  ButtonPrimaryBackgroundDefault: uf,
  ButtonPrimaryBackgroundDisabled: hf,
  ButtonPrimaryBackgroundHover: df,
  ButtonPrimaryBorderDefault: gf,
  ButtonPrimaryBorderFocus: bf,
  ButtonPrimaryTextDefault: pf,
  ButtonPrimaryTextDisabled: mf,
  ButtonSecondaryBackgroundActive: kf,
  ButtonSecondaryBackgroundDefault: xf,
  ButtonSecondaryBackgroundHover: yf,
  ButtonSecondaryBackgroundSolid: vf,
  ButtonSecondaryBorderDefault: wf,
  ButtonSecondaryTextDefault: Sf,
  ButtonShadowSize: $f,
  ButtonSpacingPaddingHorizontalDesktop: Ws,
  ButtonSpacingPaddingHorizontalMobile: As,
  ButtonSpacingPaddingVerticalDesktop: zs,
  ButtonSpacingPaddingVerticalMobile: Hs,
  ButtonTypographyWeight: Cf,
  CardBackgroundDefault: Nf,
  CardBorderBottom: Ff,
  CardBorderDefault: jf,
  CardBorderHover: Ef,
  CardBorderWidthBottom: Lf,
  CardBorderWidthDefault: Bf,
  CardShadowDefault: If,
  CardShadowHover: Rf,
  CardSpacingHeadingMargin: Ys,
  CardSpacingPaddingDesktop: Us,
  CardSpacingPaddingMobile: Os,
  CardTextDescription: Pf,
  CardTextHeading: Df,
  CardTextLink: Mf,
  ColorBorderDefault: od,
  ColorBorderSecondary: id,
  ColorButtonLoginActive: Md,
  ColorButtonLoginBackground: Dd,
  ColorButtonLoginHover: Pd,
  ColorButtonLoginShadow: Bd,
  ColorButtonPrimaryActive: pd,
  ColorButtonPrimaryBackground: dd,
  ColorButtonPrimaryHover: hd,
  ColorButtonPrimaryShadow: md,
  ColorButtonPrimaryText: fd,
  ColorButtonReverseActive: $d,
  ColorButtonReverseBackground: wd,
  ColorButtonReverseHover: Td,
  ColorButtonReverseShadow: Cd,
  ColorButtonReverseText: _d,
  ColorButtonSecondaryActive: kd,
  ColorButtonSecondaryBackground: gd,
  ColorButtonSecondaryBackgroundSolid: bd,
  ColorButtonSecondaryBorder: xd,
  ColorButtonSecondaryHover: yd,
  ColorButtonSecondaryShadow: Sd,
  ColorButtonSecondaryText: vd,
  ColorButtonWarningActive: Ed,
  ColorButtonWarningBackground: Nd,
  ColorButtonWarningHover: jd,
  ColorButtonWarningShadow: Fd,
  ColorError: ld,
  ColorFocusBackground: ad,
  ColorFocusText: sd,
  ColorFormBackground: ud,
  ColorFormBorder: cd,
  ColorGrey1: Ms,
  ColorGrey2: Bs,
  ColorGrey3: Ls,
  ColorGrey4: Is,
  ColorGrey5: Rs,
  ColorLinkActive: nd,
  ColorLinkDefault: ed,
  ColorLinkHover: td,
  ColorLinkVisited: rd,
  ColorPrimaryBlack: ws,
  ColorPrimaryBlue: ks,
  ColorPrimaryDarkPink: $s,
  ColorPrimaryGreen: _s,
  ColorPrimaryPurple: Ts,
  ColorPrimaryRed: Cs,
  ColorPrimaryWhite: Ss,
  ColorPrimaryYellow: Ns,
  ColorSecondaryAquaGreen: Ds,
  ColorSecondaryOrange: Fs,
  ColorSecondaryPaleYellow: js,
  ColorSecondaryPink: Ps,
  ColorSecondaryWarmYellow: Es,
  ColorTextPrimary: Xu,
  ColorTextPrint: Qu,
  ColorTextReverse: Ju,
  ColorTextSecondary: Zu,
  ComponentBlur: af,
  ComponentBreadcrumbChevronMarginLeft: Xd,
  ComponentBreadcrumbChevronMarginRight: Zd,
  ComponentBreadcrumbPaddingTopDesktop: Qd,
  ComponentBreadcrumbPaddingTopMobile: Jd,
  ComponentButtonPaddingDesktopHorizontal: Hd,
  ComponentButtonPaddingDesktopVertical: Rd,
  ComponentButtonPaddingMobileHorizontal: Id,
  ComponentButtonPaddingMobileVertical: Ld,
  ComponentButtonShadowSize: Ad,
  ComponentCardHeadingMargin: Gd,
  ComponentCardPaddingDesktop: Vd,
  ComponentCardPaddingMobile: Yd,
  ComponentDetails: of,
  ComponentExpander: lf,
  ComponentFormCheckboxLabelPadding: Ud,
  ComponentFormCheckboxSize: Od,
  ComponentFormInputMinHeight: zd,
  ComponentFormInputPadding: Wd,
  ComponentLink: sf,
  ComponentPagination: cf,
  ComponentPanelPaddingDesktop: qd,
  ComponentPanelPaddingMobile: Kd,
  ComponentSpread: rf,
  ComponentSummaryListCellPaddingHorizontal: tf,
  ComponentSummaryListCellPaddingVertical: ef,
  ComponentSummaryListRowMargin: nf,
  ElevationHigh: up,
  ElevationLow: lp,
  ElevationMedium: cp,
  ElevationNone: ip,
  FocusOutlineOffset: rp,
  FocusOutlineStyle: ap,
  FocusOutlineWidth: np,
  FocusShadowButton: op,
  FocusShadowInput: sp,
  FontFamilyBase: Zt,
  FontFamilyFallback: Jt,
  FontFamilyPrint: Qt,
  FontLineHeightBase: vr,
  FontSize14Mobile: rn,
  FontSize14Print: sn,
  FontSize14Tablet: an,
  FontSize16Mobile: on,
  FontSize16Print: cn,
  FontSize16Tablet: ln,
  FontSize19Mobile: un,
  FontSize19Print: fn,
  FontSize19Tablet: dn,
  FontSize22Mobile: hn,
  FontSize22Print: mn,
  FontSize22Tablet: pn,
  FontSize26Mobile: gn,
  FontSize26Print: xn,
  FontSize26Tablet: bn,
  FontSize36Mobile: vn,
  FontSize36Print: kn,
  FontSize36Tablet: yn,
  FontSize48Mobile: Sn,
  FontSize48Print: _n,
  FontSize48Tablet: wn,
  FontSizeBase: xr,
  FontWeightBold: tn,
  FontWeightLight: nn,
  FontWeightNormal: en,
  FormBorderRadius: ah,
  FormBorderWidthDefault: nh,
  FormBorderWidthError: rh,
  FormErrorTextDefault: Qf,
  FormErrorTypographyWeight: eh,
  FormHintTextDefault: th,
  FormInputBackgroundDefault: Hf,
  FormInputBackgroundDisabled: zf,
  FormInputBackgroundError: Wf,
  FormInputBackgroundFocus: Af,
  FormInputBorderDefault: Of,
  FormInputBorderDisabled: Vf,
  FormInputBorderError: Yf,
  FormInputBorderFocus: Uf,
  FormInputTextDefault: Gf,
  FormInputTextDisabled: qf,
  FormInputTextPlaceholder: Kf,
  FormLabelTextDefault: Xf,
  FormLabelTextRequired: Zf,
  FormLabelTypographyWeight: Jf,
  FormSpacingCheckboxLabelPadding: qs,
  FormSpacingCheckboxSize: Ks,
  FormSpacingInputMinHeight: Gs,
  FormSpacingInputPadding: Vs,
  GridGutter: Ph,
  GridGutterHalf: Mh,
  GridPageWidth: Dh,
  HeadingsNhsukHeadingL: Ne,
  HeadingsNhsukHeadingM: je,
  HeadingsNhsukHeadingS: Ee,
  HeadingsNhsukHeadingXl: Ce,
  HeadingsNhsukHeadingXs: Fe,
  LayoutColumnActions: Ch,
  LayoutColumnFull: wh,
  LayoutColumnHalf: _h,
  LayoutColumnQuarter: $h,
  LayoutColumnThird: Th,
  LayoutContainerMaxWidth: Sh,
  ParagraphsBody: De,
  ParagraphsBodyLarge: Pe,
  ParagraphsBodySmall: Me,
  ParagraphsLedeText: Be,
  ParagraphsLedeTextSmall: Le,
  ShadowButtonDefault: Xh,
  ShadowButtonFocus: Qh,
  ShadowButtonSecondary: Zh,
  ShadowButtonWarning: Jh,
  ShadowCardDefault: ep,
  ShadowCardHover: tp,
  SizeButtonMinHeightDesktop: kh,
  SizeButtonMinHeightMobile: yh,
  SizeFormControlLarge: fh,
  SizeFormControlMedium: dh,
  SizeFormControlSmall: uh,
  SizeFormInputWidth2xl: xh,
  SizeFormInputWidth3xl: vh,
  SizeFormInputWidthLg: gh,
  SizeFormInputWidthMd: mh,
  SizeFormInputWidthSm: ph,
  SizeFormInputWidthXl: bh,
  SizeFormInputWidthXs: hh,
  SizeIconExtraLarge: lh,
  SizeIconLarge: ih,
  SizeIconMedium: oh,
  SizeIconNhsDefault: ch,
  SizeIconSmall: sh,
  Spacing0: Xs,
  Spacing1: Zs,
  Spacing2: Js,
  Spacing3: Qs,
  Spacing4: eo,
  Spacing5: to,
  Spacing6: no,
  Spacing7: ro,
  Spacing8: ao,
  Spacing9: so,
  SpacingResponsive0Mobile: Jn,
  SpacingResponsive0Tablet: Qn,
  SpacingResponsive1Mobile: er,
  SpacingResponsive1Tablet: tr,
  SpacingResponsive2Mobile: nr,
  SpacingResponsive2Tablet: rr,
  SpacingResponsive3Mobile: ar,
  SpacingResponsive3Tablet: sr,
  SpacingResponsive4Mobile: or,
  SpacingResponsive4Tablet: ir,
  SpacingResponsive5Mobile: lr,
  SpacingResponsive5Tablet: cr,
  SpacingResponsive6Mobile: ur,
  SpacingResponsive6Tablet: dr,
  SpacingResponsive7Mobile: fr,
  SpacingResponsive7Tablet: hr,
  SpacingResponsive8Mobile: pr,
  SpacingResponsive8Tablet: mr,
  SpacingResponsive9Mobile: gr,
  SpacingResponsive9Tablet: br,
  StateDisabledBackground: Gh,
  StateDisabledBorder: Kh,
  StateDisabledText: qh,
  StateErrorBackground: Bh,
  StateErrorBorder: Lh,
  StateErrorText: Ih,
  StateInfoBackground: Uh,
  StateInfoBorder: Yh,
  StateInfoText: Vh,
  StateSuccessBackground: Rh,
  StateSuccessBorder: Hh,
  StateSuccessText: Ah,
  StateWarningBackground: zh,
  StateWarningBorder: Wh,
  StateWarningText: Oh,
  TransitionButtonDefault: Bu,
  TransitionButtonShadow: Lu,
  TransitionCardHover: Ru,
  TransitionInputFocus: Iu
}, Symbol.toStringTag, { value: "Module" })), Zp = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Jp = ({
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
), Qp = ({
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
), em = ({
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
), tm = ({
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
), nm = ({
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
), rm = ({
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
), am = ({
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
), sm = ({
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
), om = ({
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
), im = ({
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
), lm = () => oe(() => dp, []), cm = () => oe(() => ({
  // Border colors
  BorderColorDefault: gs,
  BorderColorForm: bs,
  BorderColorCard: xs,
  BorderColorCardHover: vs,
  BorderColorError: ys,
  // Primary colors
  ColorPrimaryBlue: ks,
  ColorPrimaryWhite: Ss,
  ColorPrimaryBlack: ws,
  ColorPrimaryGreen: _s,
  ColorPrimaryPurple: Ts,
  ColorPrimaryDarkPink: $s,
  ColorPrimaryRed: Cs,
  ColorPrimaryYellow: Ns,
  // Secondary colors
  ColorSecondaryPaleYellow: js,
  ColorSecondaryWarmYellow: Es,
  ColorSecondaryOrange: Fs,
  ColorSecondaryAquaGreen: Ds,
  ColorSecondaryPink: Ps,
  // Grey scale
  ColorGrey1: Ms,
  ColorGrey2: Bs,
  ColorGrey3: Ls,
  ColorGrey4: Is,
  ColorGrey5: Rs
}), []), um = () => oe(() => ({
  Spacing0: Xs,
  Spacing1: Zs,
  Spacing2: Js,
  Spacing3: Qs,
  Spacing4: eo,
  Spacing5: to,
  Spacing6: no,
  Spacing7: ro,
  Spacing8: ao,
  Spacing9: so
}), []), dm = () => oe(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: rn,
    Size16: on,
    Size19: un,
    Size22: hn,
    Size26: gn,
    Size36: vn,
    Size48: Sn
  },
  Tablet: {
    Size14: an,
    Size16: ln,
    Size19: dn,
    Size22: pn,
    Size26: bn,
    Size36: yn,
    Size48: wn
  },
  Print: {
    Size14: sn,
    Size16: cn,
    Size19: fn,
    Size22: mn,
    Size26: xn,
    Size36: kn,
    Size48: _n
  },
  Family: {
    Base: Zt,
    Fallback: Jt,
    Print: Qt
  },
  Weight: {
    Normal: en,
    Bold: tn,
    Light: nn
  },
  Base: {
    Size: xr,
    LineHeight: vr
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Zt,
  FontFamilyFallback: Jt,
  FontFamilyPrint: Qt,
  FontWeightNormal: en,
  FontWeightBold: tn,
  FontWeightLight: nn,
  FontSize14Mobile: rn,
  FontSize14Tablet: an,
  FontSize14Print: sn,
  FontSize16Mobile: on,
  FontSize16Tablet: ln,
  FontSize16Print: cn,
  FontSize19Mobile: un,
  FontSize19Tablet: dn,
  FontSize19Print: fn,
  FontSize22Mobile: hn,
  FontSize22Tablet: pn,
  FontSize22Print: mn,
  FontSize26Mobile: gn,
  FontSize26Tablet: bn,
  FontSize26Print: xn,
  FontSize36Mobile: vn,
  FontSize36Tablet: yn,
  FontSize36Print: kn,
  FontSize48Mobile: Sn,
  FontSize48Tablet: wn,
  FontSize48Print: _n,
  FontSizeBase: xr,
  FontLineHeightBase: vr
}), []), fm = () => oe(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Jn,
    Size1: er,
    Size2: nr,
    Size3: ar,
    Size4: or,
    Size5: lr,
    Size6: ur,
    Size7: fr,
    Size8: pr,
    Size9: gr
  },
  Tablet: {
    Size0: Qn,
    Size1: tr,
    Size2: rr,
    Size3: sr,
    Size4: ir,
    Size5: cr,
    Size6: dr,
    Size7: hr,
    Size8: mr,
    Size9: br
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Jn,
  SpacingResponsive0Tablet: Qn,
  SpacingResponsive1Mobile: er,
  SpacingResponsive1Tablet: tr,
  SpacingResponsive2Mobile: nr,
  SpacingResponsive2Tablet: rr,
  SpacingResponsive3Mobile: ar,
  SpacingResponsive3Tablet: sr,
  SpacingResponsive4Mobile: or,
  SpacingResponsive4Tablet: ir,
  SpacingResponsive5Mobile: lr,
  SpacingResponsive5Tablet: cr,
  SpacingResponsive6Mobile: ur,
  SpacingResponsive6Tablet: dr,
  SpacingResponsive7Mobile: fr,
  SpacingResponsive7Tablet: hr,
  SpacingResponsive8Mobile: pr,
  SpacingResponsive8Tablet: mr,
  SpacingResponsive9Mobile: gr,
  SpacingResponsive9Tablet: br
}), []), hm = () => oe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Hs,
  ButtonSpacingPaddingHorizontalMobile: As,
  ButtonSpacingPaddingVerticalDesktop: zs,
  ButtonSpacingPaddingHorizontalDesktop: Ws,
  // Card spacing	
  CardSpacingPaddingMobile: Os,
  CardSpacingPaddingDesktop: Us,
  CardSpacingHeadingMargin: Ys,
  // Form spacing
  FormSpacingInputPadding: Vs,
  FormSpacingInputMinHeight: Gs,
  FormSpacingCheckboxSize: Ks,
  FormSpacingCheckboxLabelPadding: qs
}), []), pm = () => oe(() => ({
  xl: Ce,
  l: Ne,
  m: je,
  s: Ee,
  xs: Fe
}), []), mm = () => oe(() => ({
  body: De,
  bodyLarge: Pe,
  bodySmall: Me,
  ledeText: Be,
  ledeTextSmall: Le
}), []), gm = () => oe(() => ({
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
      base: Zt,
      fallback: Jt,
      print: Qt
    },
    weight: {
      normal: en,
      bold: tn,
      light: nn
    },
    sizes: {
      mobile: {
        size14: rn,
        size16: on,
        size19: un,
        size22: hn,
        size26: gn,
        size36: vn,
        size48: Sn
      },
      tablet: {
        size14: an,
        size16: ln,
        size19: dn,
        size22: pn,
        size26: bn,
        size36: yn,
        size48: wn
      },
      print: {
        size14: sn,
        size16: cn,
        size19: fn,
        size22: mn,
        size26: xn,
        size36: kn,
        size48: _n
      }
    }
  }
}), []), oo = {
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
function bm(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...oo, ...e }, r = [];
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
function xm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...oo, ...e };
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
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const vm = '"Frutiger W01", Arial, Helvetica, sans-serif', ym = "Arial, Helvetica, sans-serif";
async function km() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  pp as ActionLink,
  Nu as AnimationDurationFast,
  ju as AnimationDurationNormal,
  Eu as AnimationDurationSlow,
  Mu as AnimationEasingBounce,
  Fu as AnimationEasingEaseIn,
  Pu as AnimationEasingEaseInOut,
  Du as AnimationEasingEaseOut,
  vu as AriaDataGrid,
  Fa as AriaTabsDataGrid,
  qp as AriaTabsDataGridAdaptive,
  mp as BackLink,
  xs as BorderColorCard,
  vs as BorderColorCardHover,
  gs as BorderColorDefault,
  ys as BorderColorError,
  bs as BorderColorForm,
  qu as BorderRadiusLarge,
  Ku as BorderRadiusMedium,
  Vu as BorderRadiusNone,
  Gu as BorderRadiusSmall,
  Wu as BorderWidthCardBottom,
  Hu as BorderWidthDefault,
  Au as BorderWidthFormElement,
  zu as BorderWidthFormElementError,
  Ou as BorderWidthPanel,
  Yu as BorderWidthTableCell,
  Uu as BorderWidthTableHeader,
  fu as Breadcrumb,
  Eh as BreakpointDesktop,
  Fh as BreakpointLargeDesktop,
  Nh as BreakpointMobile,
  jh as BreakpointTablet,
  Cr as Button,
  Tf as ButtonBorderRadius,
  _f as ButtonBorderWidth,
  ff as ButtonPrimaryBackgroundActive,
  uf as ButtonPrimaryBackgroundDefault,
  hf as ButtonPrimaryBackgroundDisabled,
  df as ButtonPrimaryBackgroundHover,
  gf as ButtonPrimaryBorderDefault,
  bf as ButtonPrimaryBorderFocus,
  pf as ButtonPrimaryTextDefault,
  mf as ButtonPrimaryTextDisabled,
  kf as ButtonSecondaryBackgroundActive,
  xf as ButtonSecondaryBackgroundDefault,
  yf as ButtonSecondaryBackgroundHover,
  vf as ButtonSecondaryBackgroundSolid,
  wf as ButtonSecondaryBorderDefault,
  Sf as ButtonSecondaryTextDefault,
  $f as ButtonShadowSize,
  Ws as ButtonSpacingPaddingHorizontalDesktop,
  As as ButtonSpacingPaddingHorizontalMobile,
  zs as ButtonSpacingPaddingVerticalDesktop,
  Hs as ButtonSpacingPaddingVerticalMobile,
  Cf as ButtonTypographyWeight,
  Hp as Card,
  Nf as CardBackgroundDefault,
  Ff as CardBorderBottom,
  jf as CardBorderDefault,
  Ef as CardBorderHover,
  Lf as CardBorderWidthBottom,
  Bf as CardBorderWidthDefault,
  Ap as CardGroup,
  zp as CardGroupItem,
  If as CardShadowDefault,
  Rf as CardShadowHover,
  Ys as CardSpacingHeadingMargin,
  Us as CardSpacingPaddingDesktop,
  Os as CardSpacingPaddingMobile,
  Pf as CardTextDescription,
  Df as CardTextHeading,
  Mf as CardTextLink,
  Wp as CareCard,
  gp as CharacterCount,
  Ui as Checkboxes,
  od as ColorBorderDefault,
  id as ColorBorderSecondary,
  Md as ColorButtonLoginActive,
  Dd as ColorButtonLoginBackground,
  Pd as ColorButtonLoginHover,
  Bd as ColorButtonLoginShadow,
  pd as ColorButtonPrimaryActive,
  dd as ColorButtonPrimaryBackground,
  hd as ColorButtonPrimaryHover,
  md as ColorButtonPrimaryShadow,
  fd as ColorButtonPrimaryText,
  $d as ColorButtonReverseActive,
  wd as ColorButtonReverseBackground,
  Td as ColorButtonReverseHover,
  Cd as ColorButtonReverseShadow,
  _d as ColorButtonReverseText,
  kd as ColorButtonSecondaryActive,
  gd as ColorButtonSecondaryBackground,
  bd as ColorButtonSecondaryBackgroundSolid,
  xd as ColorButtonSecondaryBorder,
  yd as ColorButtonSecondaryHover,
  Sd as ColorButtonSecondaryShadow,
  vd as ColorButtonSecondaryText,
  Ed as ColorButtonWarningActive,
  Nd as ColorButtonWarningBackground,
  jd as ColorButtonWarningHover,
  Fd as ColorButtonWarningShadow,
  ld as ColorError,
  ad as ColorFocusBackground,
  sd as ColorFocusText,
  ud as ColorFormBackground,
  cd as ColorFormBorder,
  Ms as ColorGrey1,
  Bs as ColorGrey2,
  Ls as ColorGrey3,
  Is as ColorGrey4,
  Rs as ColorGrey5,
  nd as ColorLinkActive,
  ed as ColorLinkDefault,
  td as ColorLinkHover,
  rd as ColorLinkVisited,
  ws as ColorPrimaryBlack,
  ks as ColorPrimaryBlue,
  $s as ColorPrimaryDarkPink,
  _s as ColorPrimaryGreen,
  Ts as ColorPrimaryPurple,
  Cs as ColorPrimaryRed,
  Ss as ColorPrimaryWhite,
  Ns as ColorPrimaryYellow,
  Ds as ColorSecondaryAquaGreen,
  Fs as ColorSecondaryOrange,
  js as ColorSecondaryPaleYellow,
  Ps as ColorSecondaryPink,
  Es as ColorSecondaryWarmYellow,
  Xu as ColorTextPrimary,
  Qu as ColorTextPrint,
  Ju as ColorTextReverse,
  Zu as ColorTextSecondary,
  vp as Column,
  af as ComponentBlur,
  Xd as ComponentBreadcrumbChevronMarginLeft,
  Zd as ComponentBreadcrumbChevronMarginRight,
  Qd as ComponentBreadcrumbPaddingTopDesktop,
  Jd as ComponentBreadcrumbPaddingTopMobile,
  Hd as ComponentButtonPaddingDesktopHorizontal,
  Rd as ComponentButtonPaddingDesktopVertical,
  Id as ComponentButtonPaddingMobileHorizontal,
  Ld as ComponentButtonPaddingMobileVertical,
  Ad as ComponentButtonShadowSize,
  Gd as ComponentCardHeadingMargin,
  Vd as ComponentCardPaddingDesktop,
  Yd as ComponentCardPaddingMobile,
  of as ComponentDetails,
  lf as ComponentExpander,
  Ud as ComponentFormCheckboxLabelPadding,
  Od as ComponentFormCheckboxSize,
  zd as ComponentFormInputMinHeight,
  Wd as ComponentFormInputPadding,
  sf as ComponentLink,
  cf as ComponentPagination,
  qd as ComponentPanelPaddingDesktop,
  Kd as ComponentPanelPaddingMobile,
  rf as ComponentSpread,
  tf as ComponentSummaryListCellPaddingHorizontal,
  ef as ComponentSummaryListCellPaddingVertical,
  nf as ComponentSummaryListRowMargin,
  Vi as Container,
  Rp as ContentsList,
  oo as DEFAULT_FONT_CONFIG,
  Np as DateInput,
  pu as Details,
  mu as DoDontList,
  up as ElevationHigh,
  lp as ElevationLow,
  cp as ElevationMedium,
  ip as ElevationNone,
  ia as ErrorMessage,
  Cp as ErrorSummary,
  gu as Expander,
  me as FRUTIGER_FONT_FILES,
  Fr as Fieldset,
  rp as FocusOutlineOffset,
  ap as FocusOutlineStyle,
  np as FocusOutlineWidth,
  op as FocusShadowButton,
  sp as FocusShadowInput,
  Zt as FontFamilyBase,
  Jt as FontFamilyFallback,
  Qt as FontFamilyPrint,
  vr as FontLineHeightBase,
  rn as FontSize14Mobile,
  sn as FontSize14Print,
  an as FontSize14Tablet,
  on as FontSize16Mobile,
  cn as FontSize16Print,
  ln as FontSize16Tablet,
  un as FontSize19Mobile,
  fn as FontSize19Print,
  dn as FontSize19Tablet,
  hn as FontSize22Mobile,
  mn as FontSize22Print,
  pn as FontSize22Tablet,
  gn as FontSize26Mobile,
  xn as FontSize26Print,
  bn as FontSize26Tablet,
  vn as FontSize36Mobile,
  kn as FontSize36Print,
  yn as FontSize36Tablet,
  Sn as FontSize48Mobile,
  _n as FontSize48Print,
  wn as FontSize48Tablet,
  xr as FontSizeBase,
  tn as FontWeightBold,
  nn as FontWeightLight,
  en as FontWeightNormal,
  Mp as Footer,
  ah as FormBorderRadius,
  nh as FormBorderWidthDefault,
  rh as FormBorderWidthError,
  Qf as FormErrorTextDefault,
  eh as FormErrorTypographyWeight,
  th as FormHintTextDefault,
  Hf as FormInputBackgroundDefault,
  zf as FormInputBackgroundDisabled,
  Wf as FormInputBackgroundError,
  Af as FormInputBackgroundFocus,
  Of as FormInputBorderDefault,
  Vf as FormInputBorderDisabled,
  Yf as FormInputBorderError,
  Uf as FormInputBorderFocus,
  Gf as FormInputTextDefault,
  qf as FormInputTextDisabled,
  Kf as FormInputTextPlaceholder,
  Xf as FormLabelTextDefault,
  Zf as FormLabelTextRequired,
  Jf as FormLabelTypographyWeight,
  qs as FormSpacingCheckboxLabelPadding,
  Ks as FormSpacingCheckboxSize,
  Gs as FormSpacingInputMinHeight,
  Vs as FormSpacingInputPadding,
  Bp as GanttChart,
  yp as Grid,
  Ph as GridGutter,
  Mh as GridGutterHalf,
  Dh as GridPageWidth,
  Fp as Header,
  Dp as HeaderSSR,
  Pp as HeaderStatic,
  ft as Heading,
  Ne as HeadingsNhsukHeadingL,
  je as HeadingsNhsukHeadingM,
  Ee as HeadingsNhsukHeadingS,
  Ce as HeadingsNhsukHeadingXl,
  Fe as HeadingsNhsukHeadingXs,
  el as Hero,
  ns as Hint,
  Kp as Images,
  jr as Input,
  Op as InsetText,
  Er as Label,
  Ch as LayoutColumnActions,
  wh as LayoutColumnFull,
  _h as LayoutColumnHalf,
  $h as LayoutColumnQuarter,
  Th as LayoutColumnThird,
  Sh as LayoutContainerMaxWidth,
  Xi as List,
  $p as MainWrapper,
  rm as NHSBodyText,
  am as NHSBodyTextLarge,
  sm as NHSBodyTextSmall,
  Jp as NHSHeading1,
  Qp as NHSHeading2,
  em as NHSHeading3,
  tm as NHSHeading4,
  nm as NHSHeading5,
  om as NHSLedeText,
  im as NHSLedeTextSmall,
  Ep as NHSThemeProvider,
  ym as NHS_FALLBACK_FONT_STACK,
  vm as NHS_FONT_STACK,
  Ip as Pagination,
  hu as Panel,
  De as ParagraphsBody,
  Pe as ParagraphsBodyLarge,
  Me as ParagraphsBodySmall,
  Be as ParagraphsLedeText,
  Le as ParagraphsLedeTextSmall,
  xp as Radios,
  Gi as Row,
  bp as Select,
  Xh as ShadowButtonDefault,
  Qh as ShadowButtonFocus,
  Zh as ShadowButtonSecondary,
  Jh as ShadowButtonWarning,
  ep as ShadowCardDefault,
  tp as ShadowCardHover,
  kh as SizeButtonMinHeightDesktop,
  yh as SizeButtonMinHeightMobile,
  fh as SizeFormControlLarge,
  dh as SizeFormControlMedium,
  uh as SizeFormControlSmall,
  xh as SizeFormInputWidth2xl,
  vh as SizeFormInputWidth3xl,
  gh as SizeFormInputWidthLg,
  mh as SizeFormInputWidthMd,
  ph as SizeFormInputWidthSm,
  bh as SizeFormInputWidthXl,
  hh as SizeFormInputWidthXs,
  lh as SizeIconExtraLarge,
  ih as SizeIconLarge,
  oh as SizeIconMedium,
  ch as SizeIconNhsDefault,
  sh as SizeIconSmall,
  Lp as SkipLink,
  Xp as SortStatusControl,
  Xs as Spacing0,
  Zs as Spacing1,
  Js as Spacing2,
  Qs as Spacing3,
  eo as Spacing4,
  to as Spacing5,
  no as Spacing6,
  ro as Spacing7,
  ao as Spacing8,
  so as Spacing9,
  Jn as SpacingResponsive0Mobile,
  Qn as SpacingResponsive0Tablet,
  er as SpacingResponsive1Mobile,
  tr as SpacingResponsive1Tablet,
  nr as SpacingResponsive2Mobile,
  rr as SpacingResponsive2Tablet,
  ar as SpacingResponsive3Mobile,
  sr as SpacingResponsive3Tablet,
  or as SpacingResponsive4Mobile,
  ir as SpacingResponsive4Tablet,
  lr as SpacingResponsive5Mobile,
  cr as SpacingResponsive5Tablet,
  ur as SpacingResponsive6Mobile,
  dr as SpacingResponsive6Tablet,
  fr as SpacingResponsive7Mobile,
  hr as SpacingResponsive7Tablet,
  pr as SpacingResponsive8Mobile,
  mr as SpacingResponsive8Tablet,
  gr as SpacingResponsive9Mobile,
  br as SpacingResponsive9Tablet,
  kp as SpacingUtilities,
  Gh as StateDisabledBackground,
  Kh as StateDisabledBorder,
  qh as StateDisabledText,
  Bh as StateErrorBackground,
  Lh as StateErrorBorder,
  Ih as StateErrorText,
  Uh as StateInfoBackground,
  Yh as StateInfoBorder,
  Vh as StateInfoText,
  Rh as StateSuccessBackground,
  Hh as StateSuccessBorder,
  Ah as StateSuccessText,
  zh as StateWarningBackground,
  Wh as StateWarningBorder,
  Oh as StateWarningText,
  Up as SummaryList,
  Yp as Table,
  Vp as Tabs,
  Nr as Tag,
  bu as TaskList,
  Yi as Textarea,
  Bu as TransitionButtonDefault,
  Lu as TransitionButtonShadow,
  Ru as TransitionCardHover,
  Iu as TransitionInputFocus,
  Tp as WIDTH_FRACTIONS,
  Gp as WarningCallout,
  wp as WidthUtilities,
  km as checkFrutigerLoaded,
  bm as generateFrutigerFontFace,
  Zp as getResponsiveStyles,
  Sp as getSpacingClass,
  _p as getWidthClass,
  xm as preloadFrutigerFonts,
  cm as useColors,
  hm as useComponentSpacing,
  pm as useNHSHeadings,
  mm as useNHSParagraphs,
  jp as useNHSTheme,
  gm as useNHSTypographySystem,
  fm as useResponsiveSpacing,
  um as useSpacing,
  lm as useTokens,
  dm as useTypography
};
//# sourceMappingURL=index.esm.js.map
