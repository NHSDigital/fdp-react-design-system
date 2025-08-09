import * as bo from "react";
import de, { useRef as te, useCallback as J, useState as ne, useContext as Ge, useEffect as se, useMemo as oe, forwardRef as Qe, createContext as Tn, createElement as Ba, useImperativeHandle as Ma, useReducer as xo } from "react";
import { flushSync as vo } from "react-dom";
function yo(e) {
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
var Or;
function ko() {
  if (Or) return gt;
  Or = 1;
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
var Ur;
function So() {
  return Ur || (Ur = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === $ ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case m:
          return "Fragment";
        case S:
          return "Profiler";
        case y:
          return "StrictMode";
        case R:
          return "Suspense";
        case M:
          return "SuspenseList";
        case v:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case k:
            return "Portal";
          case D:
            return (E.displayName || "Context") + ".Provider";
          case T:
            return (E._context.displayName || "Context") + ".Consumer";
          case w:
            var G = E.render;
            return E = E.displayName, E || (E = G.displayName || G.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case L:
            return G = E.displayName || null, G !== null ? G : e(E.type) || "Memo";
          case x:
            G = E._payload, E = E._init;
            try {
              return e(E(G));
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
        var G = !1;
      } catch {
        G = !0;
      }
      if (G) {
        G = console;
        var O = G.error, Q = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return O.call(
          G,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Q
        ), t(E);
      }
    }
    function r(E) {
      if (E === m) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === x)
        return "<...>";
      try {
        var G = e(E);
        return G ? "<" + G + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var E = c.A;
      return E === null ? null : E.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (N.call(E, "key")) {
        var G = Object.getOwnPropertyDescriptor(E, "key").get;
        if (G && G.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function l(E, G) {
      function O() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          G
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: O,
        configurable: !0
      });
    }
    function u() {
      var E = e(this.type);
      return h[E] || (h[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function f(E, G, O, Q, K, _, I, B) {
      return O = _.ref, E = {
        $$typeof: b,
        type: E,
        key: G,
        props: _,
        _owner: K
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(E, "ref", {
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
        value: B
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, G, O, Q, K, _, I, B) {
      var H = G.children;
      if (H !== void 0)
        if (Q)
          if (q(H)) {
            for (Q = 0; Q < H.length; Q++)
              p(H[Q]);
            Object.freeze && Object.freeze(H);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(H);
      if (N.call(G, "key")) {
        H = e(E);
        var j = Object.keys(G).filter(function(W) {
          return W !== "key";
        });
        Q = 0 < j.length ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}", Z[H + Q] || (j = 0 < j.length ? "{" + j.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Q,
          H,
          j,
          H
        ), Z[H + Q] = !0);
      }
      if (H = null, O !== void 0 && (n(O), H = "" + O), i(G) && (n(G.key), H = "" + G.key), "key" in G) {
        O = {};
        for (var A in G)
          A !== "key" && (O[A] = G[A]);
      } else O = G;
      return H && l(
        O,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), f(
        E,
        H,
        _,
        K,
        s(),
        O,
        I,
        B
      );
    }
    function p(E) {
      typeof E == "object" && E !== null && E.$$typeof === b && E._store && (E._store.validated = 1);
    }
    var g = de, b = Symbol.for("react.transitional.element"), k = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), D = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), v = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), c = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, q = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var P, h = {}, z = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), V = C(r(o)), Z = {};
    bt.Fragment = m, bt.jsx = function(E, G, O, Q, K) {
      var _ = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        E,
        G,
        O,
        !1,
        Q,
        K,
        _ ? Error("react-stack-top-frame") : z,
        _ ? C(r(E)) : V
      );
    }, bt.jsxs = function(E, G, O, Q, K) {
      var _ = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        E,
        G,
        O,
        !0,
        Q,
        K,
        _ ? Error("react-stack-top-frame") : z,
        _ ? C(r(E)) : V
      );
    };
  }()), bt;
}
var Yr;
function wo() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? Et.exports = ko() : Et.exports = So()), Et.exports;
}
var a = wo(), jn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Vr;
function _o() {
  return Vr || (Vr = 1, function(e) {
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
var To = _o();
const Y = /* @__PURE__ */ yo(To), _p = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: r,
  ...s
}) => {
  const o = Y(
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
}, $o = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: r = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const s = (o) => {
    const i = o.icon ? /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ a.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = o.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, u = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-account__link", href: o.href, children: u }) : o.action ? /* @__PURE__ */ a.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ a.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: u
          }
        )
      }
    ) : /* @__PURE__ */ a.jsx("span", { children: u });
  };
  return /* @__PURE__ */ a.jsx(
    "nav",
    {
      className: Y(
        "nhsuk-account",
        {
          "nhsuk-account--white": r === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-account__list", children: t.map((o, i) => o && /* @__PURE__ */ a.jsx(
        "li",
        {
          className: Y("nhsuk-account__item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
}, $n = typeof document < "u" ? de.useLayoutEffect : () => {
};
var En;
const Co = (En = de.useInsertionEffect) !== null && En !== void 0 ? En : $n;
function Ue(e) {
  const t = te(null);
  return Co(() => {
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
}, La = /* @__PURE__ */ de.createContext(At), No = /* @__PURE__ */ de.createContext(!1);
let jo = !!(typeof window < "u" && window.document && window.document.createElement), Fn = /* @__PURE__ */ new WeakMap();
function Eo(e = !1) {
  let t = Ge(La), n = te(null);
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
function Fo(e) {
  let t = Ge(La);
  t === At && !jo && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Eo(!!e), r = t === At && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Do(e) {
  let t = de.useId(), [n] = ne(Io()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${At.prefix}`;
  return e || `${r}-${t}`;
}
const Po = typeof de.useId == "function" ? Do : Fo;
function Bo() {
  return !1;
}
function Mo() {
  return !0;
}
function Lo(e) {
  return () => {
  };
}
function Io() {
  return typeof de.useSyncExternalStore == "function" ? de.useSyncExternalStore(Lo, Bo, Mo) : Ge(No);
}
let Ro = !!(typeof window < "u" && window.document && window.document.createElement), lt = /* @__PURE__ */ new Map(), kt;
typeof FinalizationRegistry < "u" && (kt = new FinalizationRegistry((e) => {
  lt.delete(e);
}));
function Gr(e) {
  let [t, n] = ne(e), r = te(null), s = Po(t), o = te(null);
  if (kt && kt.register(o, s), Ro) {
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
function Ho(e, t) {
  if (e === t) return e;
  let n = lt.get(e);
  if (n)
    return n.forEach((s) => s.current = t), t;
  let r = lt.get(t);
  return r ? (r.forEach((s) => s.current = e), e) : t;
}
function Ia(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const pe = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, ye = (e) => e && "window" in e && e.window === e ? e : pe(e).defaultView || window;
function Ao(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function zo(e) {
  return Ao(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Wo = !1;
function yr() {
  return Wo;
}
function ce(e, t) {
  if (!yr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : zo(n) ? n = n.host : n = n.parentNode;
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
function Ra(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Ra(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Oo() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Ra(e)) && (r && (r += " "), r += t);
  return r;
}
function Ve(...e) {
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
      90 ? t[s] = Ia(o, i) : (s === "className" || s === "UNSAFE_className") && typeof o == "string" && typeof i == "string" ? t[s] = Oo(o, i) : s === "id" && o && i ? t.id = Ho(o, i) : t[s] = i !== void 0 ? i : o;
    }
  }
  return t;
}
function Uo(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const r = e.map((s) => {
      const o = Kr(s, t);
      return n || (n = typeof o == "function"), o;
    });
    if (n) return () => {
      r.forEach((s, o) => {
        typeof s == "function" ? s() : Kr(e[o], null);
      });
    };
  };
}
function Kr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const Yo = /* @__PURE__ */ new Set([
  "id"
]), Vo = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Go = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), Ko = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), qr = /* @__PURE__ */ new Set([
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
]), qo = /^(data-.*)$/;
function Ha(e, t = {}) {
  let { labelable: n, isLink: r, global: s, events: o = s, propNames: i } = t, l = {};
  for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (Yo.has(u) || n && Vo.has(u) || r && Go.has(u) || s && Ko.has(u) || o && qr.has(u) || u.endsWith("Capture") && qr.has(u.slice(0, -7)) || i?.has(u) || qo.test(u)) && (l[u] = e[u]);
  return l;
}
function ut(e) {
  if (Xo()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Zo(e);
    e.focus(), Jo(t);
  }
}
let Ft = null;
function Xo() {
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
function Zo(e) {
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
function Jo(e) {
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
}), Qo = ze(function() {
  return kr(/^iPhone/i);
}), Aa = ze(function() {
  return kr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  dt() && navigator.maxTouchPoints > 1;
}), Sr = ze(function() {
  return Qo() || Aa();
});
ze(function() {
  return dt() || Sr();
});
const ei = ze(function() {
  return Cn(/AppleWebKit/i) && !ti();
}), ti = ze(function() {
  return Cn(/Chrome/i);
}), za = ze(function() {
  return Cn(/Android/i);
}), ni = ze(function() {
  return Cn(/Firefox/i);
});
function _t(e, t, n = !0) {
  var r, s;
  let { metaKey: o, ctrlKey: i, altKey: l, shiftKey: u } = t;
  ni() && (!((s = window.event) === null || s === void 0 || (r = s.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (dt() ? o = !0 : i = !0);
  let f = ei() && dt() && !Aa() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
let Ye = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Set();
function Xr() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let s = Ye.get(r.target);
    s || (s = /* @__PURE__ */ new Set(), Ye.set(r.target, s), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), s.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let s = Ye.get(r.target);
    if (s && (s.delete(r.propertyName), s.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ye.delete(r.target)), Ye.size === 0)) {
      for (let o of Wn) o();
      Wn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Xr() : document.addEventListener("DOMContentLoaded", Xr));
function ri() {
  for (const [e] of Ye)
    "isConnected" in e && !e.isConnected && Ye.delete(e);
}
function Wa(e) {
  requestAnimationFrame(() => {
    ri(), Ye.size === 0 ? e() : Wn.add(e);
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
function ai(e) {
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
function Oa(e, t) {
  $n(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function On(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : za() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function si(e) {
  return !za() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const oi = typeof Element < "u" && "checkVisibility" in Element.prototype;
function ii(e) {
  const t = ye(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, s = n !== "none" && r !== "hidden" && r !== "collapse";
  if (s) {
    const { getComputedStyle: o } = e.ownerDocument.defaultView;
    let { display: i, visibility: l } = o(e);
    s = i !== "none" && l !== "hidden" && l !== "collapse";
  }
  return s;
}
function li(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Ua(e, t) {
  return oi ? e.checkVisibility() : e.nodeName !== "#comment" && ii(e) && li(e, t) && (!e.parentElement || Ua(e.parentElement, e));
}
const Ya = [
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
], ci = Ya.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ya.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function ui(e) {
  return e.matches(ci) && Ua(e) && !di(e);
}
function di(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const fi = Symbol("default");
function hi(e) {
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
function pi(e, t) {
  let n = Ge(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = t || fi;
    if (!n.slots[r]) {
      let s = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`)), o = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${o} Valid slot names are ${s}.`);
    }
    return n.slots[r];
  }
  return n;
}
function mi(e, t, n) {
  let r = pi(n, e.slot) || {}, { ref: s, ...o } = r, i = ai(oe(() => Uo(t, s), [
    t,
    s
  ])), l = Ve(o, e);
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
const gi = /* @__PURE__ */ Tn(!1);
function bi(e) {
  let t = (n, r) => Ge(gi) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, Qe(t);
}
function _r(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Va(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Ga(e) {
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
  let n = Ue((r) => {
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
function Zr(e) {
  for (; e && !ui(e); ) e = e.parentElement;
  let t = ye(e), n = t.document.activeElement;
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
function Jr(e) {
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
      Wa(() => {
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
const Ka = de.createContext({
  register: () => {
  }
});
Ka.displayName = "PressResponderContext";
function xi(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function qa(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function vi(e, t) {
  var n = qa(e, t, "get");
  return xi(e, n);
}
function yi(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function ki(e, t, n) {
  yi(e, t), t.set(e, n);
}
function Si(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function Qr(e, t, n) {
  var r = qa(e, t, "set");
  return Si(e, r, n), n;
}
function wi(e) {
  let t = Ge(Ka);
  if (t) {
    let { register: n, ...r } = t;
    e = Ve(r, e), n();
  }
  return Oa(t, e.ref), e;
}
var Dt = /* @__PURE__ */ new WeakMap();
class Pt {
  continuePropagation() {
    Qr(this, Dt, !1);
  }
  get shouldStopPropagation() {
    return vi(this, Dt);
  }
  constructor(t, n, r, s) {
    ki(this, Dt, {
      writable: !0,
      value: void 0
    }), Qr(this, Dt, !0);
    var o;
    let i = (o = s?.target) !== null && o !== void 0 ? o : r.currentTarget;
    const l = i?.getBoundingClientRect();
    let u, f = 0, d, p = null;
    r.clientX != null && r.clientY != null && (d = r.clientX, p = r.clientY), l && (d != null && p != null ? (u = d - l.left, f = p - l.top) : (u = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = f;
  }
}
const ea = Symbol("linkClicked"), ta = "react-aria-pressable-style", na = "data-react-aria-pressable";
function _i(e) {
  let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: s, onPressUp: o, onClick: i, isDisabled: l, isPressed: u, preventFocusOnPress: f, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: g, ...b } = wi(e), [k, m] = ne(!1), y = te({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: S, removeAllGlobalListeners: T } = wr(), D = Ue((c, N) => {
    let q = y.current;
    if (l || q.didFirePressStart) return !1;
    let C = !0;
    if (q.isTriggeringEvent = !0, r) {
      let P = new Pt("pressstart", N, c);
      r(P), C = P.shouldStopPropagation;
    }
    return n && n(!0), q.isTriggeringEvent = !1, q.didFirePressStart = !0, m(!0), C;
  }), w = Ue((c, N, q = !0) => {
    let C = y.current;
    if (!C.didFirePressStart) return !1;
    C.didFirePressStart = !1, C.isTriggeringEvent = !0;
    let P = !0;
    if (s) {
      let h = new Pt("pressend", N, c);
      s(h), P = h.shouldStopPropagation;
    }
    if (n && n(!1), m(!1), t && q && !l) {
      let h = new Pt("press", N, c);
      t(h), P && (P = h.shouldStopPropagation);
    }
    return C.isTriggeringEvent = !1, P;
  }), R = Ue((c, N) => {
    let q = y.current;
    if (l) return !1;
    if (o) {
      q.isTriggeringEvent = !0;
      let C = new Pt("pressup", N, c);
      return o(C), q.isTriggeringEvent = !1, C.shouldStopPropagation;
    }
    return !0;
  }), M = Ue((c) => {
    let N = y.current;
    if (N.isPressed && N.target) {
      N.didFirePressStart && N.pointerType != null && w(Ke(N.target, c), N.pointerType, !1), N.isPressed = !1, N.isOverTarget = !1, N.activePointerId = null, N.pointerType = null, T(), p || Dn(N.target);
      for (let q of N.disposables) q();
      N.disposables = [];
    }
  }), L = Ue((c) => {
    d && M(c);
  }), x = Ue((c) => {
    i?.(c);
  }), v = Ue((c, N) => {
    if (i) {
      let q = new MouseEvent("click", c);
      Va(q, N), i(_r(q));
    }
  }), $ = oe(() => {
    let c = y.current, N = {
      onKeyDown(C) {
        if (Pn(C.nativeEvent, C.currentTarget) && ce(C.currentTarget, ie(C.nativeEvent))) {
          var P;
          sa(ie(C.nativeEvent), C.key) && C.preventDefault();
          let h = !0;
          if (!c.isPressed && !C.repeat) {
            c.target = C.currentTarget, c.isPressed = !0, c.pointerType = "keyboard", h = D(C, "keyboard");
            let z = C.currentTarget, V = (Z) => {
              Pn(Z, z) && !Z.repeat && ce(z, ie(Z)) && c.target && R(Ke(c.target, Z), "keyboard");
            };
            S(pe(C.currentTarget), "keyup", Ia(V, q), !0);
          }
          h && C.stopPropagation(), C.metaKey && dt() && ((P = c.metaKeyEvents) === null || P === void 0 || P.set(C.key, C.nativeEvent));
        } else C.key === "Meta" && (c.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(C) {
        if (!(C && !ce(C.currentTarget, ie(C.nativeEvent))) && C && C.button === 0 && !c.isTriggeringEvent && !_t.isOpening) {
          let P = !0;
          if (l && C.preventDefault(), !c.ignoreEmulatedMouseEvents && !c.isPressed && (c.pointerType === "virtual" || On(C.nativeEvent))) {
            let h = D(C, "virtual"), z = R(C, "virtual"), V = w(C, "virtual");
            x(C), P = h && z && V;
          } else if (c.isPressed && c.pointerType !== "keyboard") {
            let h = c.pointerType || C.nativeEvent.pointerType || "virtual", z = R(Ke(C.currentTarget, C), h), V = w(Ke(C.currentTarget, C), h, !0);
            P = z && V, c.isOverTarget = !1, x(C), M(C);
          }
          c.ignoreEmulatedMouseEvents = !1, P && C.stopPropagation();
        }
      }
    }, q = (C) => {
      var P;
      if (c.isPressed && c.target && Pn(C, c.target)) {
        var h;
        sa(ie(C), C.key) && C.preventDefault();
        let V = ie(C), Z = ce(c.target, ie(C));
        w(Ke(c.target, C), "keyboard", Z), Z && v(C, c.target), T(), C.key !== "Enter" && Tr(c.target) && ce(c.target, V) && !C[ea] && (C[ea] = !0, _t(c.target, C, !1)), c.isPressed = !1, (h = c.metaKeyEvents) === null || h === void 0 || h.delete(C.key);
      } else if (C.key === "Meta" && (!((P = c.metaKeyEvents) === null || P === void 0) && P.size)) {
        var z;
        let V = c.metaKeyEvents;
        c.metaKeyEvents = void 0;
        for (let Z of V.values()) (z = c.target) === null || z === void 0 || z.dispatchEvent(new KeyboardEvent("keyup", Z));
      }
    };
    if (typeof PointerEvent < "u") {
      N.onPointerDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (si(h.nativeEvent)) {
          c.pointerType = "virtual";
          return;
        }
        c.pointerType = h.pointerType;
        let z = !0;
        if (!c.isPressed) {
          c.isPressed = !0, c.isOverTarget = !0, c.activePointerId = h.pointerId, c.target = h.currentTarget, p || Jr(c.target), z = D(h, c.pointerType);
          let V = ie(h.nativeEvent);
          "releasePointerCapture" in V && V.releasePointerCapture(h.pointerId), S(pe(h.currentTarget), "pointerup", C, !1), S(pe(h.currentTarget), "pointercancel", P, !1);
        }
        z && h.stopPropagation();
      }, N.onMouseDown = (h) => {
        if (ce(h.currentTarget, ie(h.nativeEvent)) && h.button === 0) {
          if (f) {
            let z = Zr(h.target);
            z && c.disposables.push(z);
          }
          h.stopPropagation();
        }
      }, N.onPointerUp = (h) => {
        !ce(h.currentTarget, ie(h.nativeEvent)) || c.pointerType === "virtual" || h.button === 0 && !c.isPressed && R(h, c.pointerType || h.pointerType);
      }, N.onPointerEnter = (h) => {
        h.pointerId === c.activePointerId && c.target && !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, D(Ke(c.target, h), c.pointerType));
      }, N.onPointerLeave = (h) => {
        h.pointerId === c.activePointerId && c.target && c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, w(Ke(c.target, h), c.pointerType, !1), L(h));
      };
      let C = (h) => {
        if (h.pointerId === c.activePointerId && c.isPressed && h.button === 0 && c.target) {
          if (ce(c.target, ie(h)) && c.pointerType != null) {
            let z = !1, V = setTimeout(() => {
              c.isPressed && c.target instanceof HTMLElement && (z ? M(h) : (ut(c.target), c.target.click()));
            }, 80);
            S(h.currentTarget, "click", () => z = !0, !0), c.disposables.push(() => clearTimeout(V));
          } else M(h);
          c.isOverTarget = !1;
        }
      }, P = (h) => {
        M(h);
      };
      N.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && M(h);
      };
    } else if (process.env.NODE_ENV === "test") {
      N.onMouseDown = (h) => {
        if (h.button !== 0 || !ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (c.ignoreEmulatedMouseEvents) {
          h.stopPropagation();
          return;
        }
        if (c.isPressed = !0, c.isOverTarget = !0, c.target = h.currentTarget, c.pointerType = On(h.nativeEvent) ? "virtual" : "mouse", vo(() => D(h, c.pointerType)) && h.stopPropagation(), f) {
          let V = Zr(h.target);
          V && c.disposables.push(V);
        }
        S(pe(h.currentTarget), "mouseup", C, !1);
      }, N.onMouseEnter = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !0, z = D(h, c.pointerType)), z && h.stopPropagation();
      }, N.onMouseLeave = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !1, z = w(h, c.pointerType, !1), L(h)), z && h.stopPropagation();
      }, N.onMouseUp = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && !c.ignoreEmulatedMouseEvents && h.button === 0 && !c.isPressed && R(h, c.pointerType || "mouse");
      };
      let C = (h) => {
        if (h.button === 0) {
          if (c.ignoreEmulatedMouseEvents) {
            c.ignoreEmulatedMouseEvents = !1;
            return;
          }
          c.target && c.target.contains(h.target) && c.pointerType != null || M(h), c.isOverTarget = !1;
        }
      };
      N.onTouchStart = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        let z = Ti(h.nativeEvent);
        if (!z) return;
        c.activePointerId = z.identifier, c.ignoreEmulatedMouseEvents = !0, c.isOverTarget = !0, c.isPressed = !0, c.target = h.currentTarget, c.pointerType = "touch", p || Jr(c.target), D(Oe(c.target, h), c.pointerType) && h.stopPropagation(), S(ye(h.currentTarget), "scroll", P, !0);
      }, N.onTouchMove = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let z = ra(h.nativeEvent, c.activePointerId), V = !0;
        z && aa(z, h.currentTarget) ? !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, V = D(Oe(c.target, h), c.pointerType)) : c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, V = w(Oe(c.target, h), c.pointerType, !1), L(Oe(c.target, h))), V && h.stopPropagation();
      }, N.onTouchEnd = (h) => {
        if (!ce(h.currentTarget, ie(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let z = ra(h.nativeEvent, c.activePointerId), V = !0;
        z && aa(z, h.currentTarget) && c.pointerType != null ? (R(Oe(c.target, h), c.pointerType), V = w(Oe(c.target, h), c.pointerType), v(h.nativeEvent, c.target)) : c.isOverTarget && c.pointerType != null && (V = w(Oe(c.target, h), c.pointerType, !1)), V && h.stopPropagation(), c.isPressed = !1, c.activePointerId = null, c.isOverTarget = !1, c.ignoreEmulatedMouseEvents = !0, c.target && !p && Dn(c.target), T();
      }, N.onTouchCancel = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && (h.stopPropagation(), c.isPressed && M(Oe(c.target, h)));
      };
      let P = (h) => {
        c.isPressed && ce(ie(h), c.target) && M({
          currentTarget: c.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      N.onDragStart = (h) => {
        ce(h.currentTarget, ie(h.nativeEvent)) && M(h);
      };
    }
    return N;
  }, [
    S,
    l,
    f,
    T,
    p,
    M,
    L,
    w,
    D,
    R,
    x,
    v
  ]);
  return se(() => {
    if (!g || process.env.NODE_ENV === "test") return;
    const c = pe(g.current);
    if (!c || !c.head || c.getElementById(ta)) return;
    const N = c.createElement("style");
    N.id = ta, N.textContent = `
@layer {
  [${na}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), c.head.prepend(N);
  }, [
    g
  ]), se(() => {
    let c = y.current;
    return () => {
      var N;
      p || Dn((N = c.target) !== null && N !== void 0 ? N : void 0);
      for (let q of c.disposables) q();
      c.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: u || k,
    pressProps: Ve(b, $, {
      [na]: !0
    })
  };
}
function Tr(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Pn(e, t) {
  const { key: n, code: r } = e, s = t, o = s.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(s instanceof ye(s).HTMLInputElement && !Xa(s, n) || s instanceof ye(s).HTMLTextAreaElement || s.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && Tr(s)) && n !== "Enter");
}
function Ti(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function ra(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const s = n[r];
    if (s.identifier === t) return s;
  }
  return null;
}
function Oe(e, t) {
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
function Ke(e, t) {
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
function $i(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Ci(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function aa(e, t) {
  let n = t.getBoundingClientRect(), r = $i(e);
  return Ci(n, r);
}
function Ni(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !Tr(e);
}
function sa(e, t) {
  return e instanceof HTMLInputElement ? !Xa(e, t) : Ni(e);
}
const ji = /* @__PURE__ */ new Set([
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
function Xa(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : ji.has(e.type);
}
let pt = null, Yn = /* @__PURE__ */ new Set(), St = /* @__PURE__ */ new Map(), Ze = !1, Vn = !1;
const Ei = {
  Tab: !0,
  Escape: !0
};
function $r(e, t) {
  for (let n of Yn) n(e, t);
}
function Fi(e) {
  return !(e.metaKey || !dt() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Wt(e) {
  Ze = !0, Fi(e) && (pt = "keyboard", $r("keyboard", e));
}
function ve(e) {
  pt = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ze = !0, $r("pointer", e));
}
function Za(e) {
  On(e) && (Ze = !0, pt = "virtual");
}
function Ja(e) {
  e.target === window || e.target === document || zt || !e.isTrusted || (!Ze && !Vn && (pt = "virtual", $r("virtual", e)), Ze = !1, Vn = !1);
}
function Qa() {
  zt || (Ze = !1, Vn = !0);
}
function Gn(e) {
  if (typeof window > "u" || typeof document > "u" || St.get(ye(e))) return;
  const t = ye(e), n = pe(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ze = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Wt, !0), n.addEventListener("keyup", Wt, !0), n.addEventListener("click", Za, !0), t.addEventListener("focus", Ja, !0), t.addEventListener("blur", Qa, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", ve, !0), n.addEventListener("pointermove", ve, !0), n.addEventListener("pointerup", ve, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", ve, !0), n.addEventListener("mousemove", ve, !0), n.addEventListener("mouseup", ve, !0)), t.addEventListener("beforeunload", () => {
    es(e);
  }, {
    once: !0
  }), St.set(t, {
    focus: r
  });
}
const es = (e, t) => {
  const n = ye(e), r = pe(e);
  t && r.removeEventListener("DOMContentLoaded", t), St.has(n) && (n.HTMLElement.prototype.focus = St.get(n).focus, r.removeEventListener("keydown", Wt, !0), r.removeEventListener("keyup", Wt, !0), r.removeEventListener("click", Za, !0), n.removeEventListener("focus", Ja, !0), n.removeEventListener("blur", Qa, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", ve, !0), r.removeEventListener("pointermove", ve, !0), r.removeEventListener("pointerup", ve, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", ve, !0), r.removeEventListener("mousemove", ve, !0), r.removeEventListener("mouseup", ve, !0)), St.delete(n));
};
function Di(e) {
  const t = pe(e);
  let n;
  return t.readyState !== "loading" ? Gn(e) : (n = () => {
    Gn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => es(e, n);
}
typeof document < "u" && Di();
function ts() {
  return pt !== "pointer";
}
function Pi() {
  return pt;
}
const Bi = /* @__PURE__ */ new Set([
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
function Mi(e, t, n) {
  let r = pe(n?.target);
  const s = typeof window < "u" ? ye(n?.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? ye(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, i = typeof window < "u" ? ye(n?.target).HTMLElement : HTMLElement, l = typeof window < "u" ? ye(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof s && !Bi.has(r.activeElement.type) || r.activeElement instanceof o || r.activeElement instanceof i && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Ei[n.key]);
}
function Li(e, t, n) {
  Gn(), se(() => {
    let r = (s, o) => {
      Mi(!!n?.isTextInput, s, o) && e(ts());
    };
    return Yn.add(r), () => {
      Yn.delete(r);
    };
  }, t);
}
function Ii(e) {
  const t = pe(e), n = wt(t);
  if (Pi() === "virtual") {
    let r = n;
    Wa(() => {
      wt(t) === r && e.isConnected && ut(e);
    });
  } else ut(e);
}
function ns(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: s } = e;
  const o = J((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), s && s(!1), !0;
  }, [
    r,
    s
  ]), i = Ga(o), l = J((u) => {
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
function oa(e) {
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
function Ri(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: oa(e.onKeyDown),
      onKeyUp: oa(e.onKeyUp)
    }
  };
}
let Hi = /* @__PURE__ */ de.createContext(null);
function Ai(e) {
  let t = Ge(Hi) || {};
  Oa(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function zi(e, t) {
  let { focusProps: n } = ns(e), { keyboardProps: r } = Ri(e), s = Ve(n, r), o = Ai(t), i = e.isDisabled ? {} : o, l = te(e.autoFocus);
  se(() => {
    l.current && t.current && Ii(t.current), l.current = !1;
  }, [
    t
  ]);
  let u = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (u = void 0), {
    focusableProps: Ve({
      ...s,
      tabIndex: u
    }, i)
  };
}
function Wi(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: s } = e, o = te({
    isFocusWithin: !1
  }), { addGlobalListener: i, removeAllGlobalListeners: l } = wr(), u = J((p) => {
    p.currentTarget.contains(p.target) && o.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (o.current.isFocusWithin = !1, l(), n && n(p), s && s(!1));
  }, [
    n,
    s,
    o,
    l
  ]), f = Ga(u), d = J((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = pe(p.target), b = wt(g);
    if (!o.current.isFocusWithin && b === ie(p.nativeEvent)) {
      r && r(p), s && s(!0), o.current.isFocusWithin = !0, f(p);
      let k = p.currentTarget;
      i(g, "focus", (m) => {
        if (o.current.isFocusWithin && !ce(k, m.target)) {
          let y = new g.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          Va(y, k);
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
let Ot = !1, Bt = 0;
function Kn() {
  Ot = !0, setTimeout(() => {
    Ot = !1;
  }, 50);
}
function ia(e) {
  e.pointerType === "touch" && Kn();
}
function Oi() {
  if (!(typeof document > "u"))
    return Bt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", ia) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Kn)), Bt++, () => {
      Bt--, !(Bt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", ia) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Kn));
    };
}
function Ui(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: s } = e, [o, i] = ne(!1), l = te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(Oi, []);
  let { addGlobalListener: u, removeAllGlobalListeners: f } = wr(), { hoverProps: d, triggerHoverEnd: p } = oe(() => {
    let g = (m, y) => {
      if (l.pointerType = y, s || y === "touch" || l.isHovered || !m.currentTarget.contains(m.target)) return;
      l.isHovered = !0;
      let S = m.currentTarget;
      l.target = S, u(pe(m.target), "pointerover", (T) => {
        l.isHovered && l.target && !ce(l.target, T.target) && b(T, T.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: S,
        pointerType: y
      }), n && n(!0), i(!0);
    }, b = (m, y) => {
      let S = l.target;
      l.pointerType = "", l.target = null, !(y === "touch" || !l.isHovered || !S) && (l.isHovered = !1, f(), r && r({
        type: "hoverend",
        target: S,
        pointerType: y
      }), n && n(!1), i(!1));
    }, k = {};
    return typeof PointerEvent < "u" ? (k.onPointerEnter = (m) => {
      Ot && m.pointerType === "mouse" || g(m, m.pointerType);
    }, k.onPointerLeave = (m) => {
      !s && m.currentTarget.contains(m.target) && b(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (k.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, k.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !Ot && g(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, k.onMouseLeave = (m) => {
      !s && m.currentTarget.contains(m.target) && b(m, "mouse");
    }), {
      hoverProps: k,
      triggerHoverEnd: b
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
function Yi(e, t) {
  let { elementType: n = "button", isDisabled: r, onPress: s, onPressStart: o, onPressEnd: i, onPressUp: l, onPressChange: u, preventFocusOnPress: f, allowFocusWhenDisabled: d, onClick: p, href: g, target: b, rel: k, type: m = "button" } = e, y;
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
    target: n === "a" ? b : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? k : void 0
  };
  let { pressProps: S, isPressed: T } = _i({
    onPressStart: o,
    onPressEnd: i,
    onPressChange: u,
    onPress: s,
    onPressUp: l,
    onClick: p,
    isDisabled: r,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: D } = zi(e, t);
  d && (D.tabIndex = r ? -1 : D.tabIndex);
  let w = Ve(D, S, Ha(e, {
    labelable: !0
  }));
  return {
    isPressed: T,
    buttonProps: Ve(y, w, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function Vi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, s = te({
    isFocused: !1,
    isFocusVisible: t || ts()
  }), [o, i] = ne(!1), [l, u] = ne(() => s.current.isFocused && s.current.isFocusVisible), f = J(() => u(s.current.isFocused && s.current.isFocusVisible), []), d = J((b) => {
    s.current.isFocused = b, i(b), f();
  }, [
    f
  ]);
  Li((b) => {
    s.current.isFocusVisible = b, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = ns({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: g } = Wi({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: o,
    isFocusVisible: l,
    focusProps: r ? g : p
  };
}
const rs = 7e3;
let _e = null;
function la(e, t = "assertive", n = rs) {
  _e ? _e.announce(e, t, n) : (_e = new Gi(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? _e.announce(e, t, n) : setTimeout(() => {
    _e?.isAttached() && _e?.announce(e, t, n);
  }, 100));
}
class Gi {
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
  announce(t, n = "assertive", r = rs) {
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
const Ki = /* @__PURE__ */ Tn(null), qi = /* @__PURE__ */ Tn({}), Xi = /* @__PURE__ */ bi(function(t, n) {
  [t, n] = mi(t, n, qi), t = Zi(t);
  let r = t, { isPending: s } = r, { buttonProps: o, isPressed: i } = Yi(t, n), { focusProps: l, isFocused: u, isFocusVisible: f } = Vi(t), { hoverProps: d, isHovered: p } = Ui({
    ...t,
    isDisabled: t.isDisabled || s
  }), g = {
    isHovered: p,
    isPressed: (r.isPressed || i) && !s,
    isFocused: u,
    isFocusVisible: f,
    isDisabled: t.isDisabled || !1,
    isPending: s ?? !1
  }, b = hi({
    ...t,
    values: g,
    defaultClassName: "react-aria-Button"
  }), k = Gr(o.id), m = Gr(), y = o["aria-labelledby"];
  s && (y ? y = `${y} ${m}` : o["aria-label"] && (y = `${k} ${m}`));
  let S = te(s);
  se(() => {
    let D = {
      "aria-labelledby": y || k
    };
    (!S.current && u && s || S.current && u && !s) && la(D, "assertive"), S.current = s;
  }, [
    s,
    u,
    y,
    k
  ]);
  let T = Ha(t, {
    global: !0
  });
  return delete T.onClick, /* @__PURE__ */ de.createElement("button", {
    ...Ve(T, b, o, l, d),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: o.type === "submit" && s ? "button" : o.type,
    id: k,
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
  }, /* @__PURE__ */ de.createElement(Ki.Provider, {
    value: {
      id: m
    }
  }, b.children));
});
function Zi(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const { forwardRef: Ji } = bo, Cr = Ji(
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
      Xi,
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
const Qi = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: r,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = Y(
    "nhsuk-back-link",
    r
  ), u = Y(
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
  const d = Y(
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
  inputMode: b,
  autoComplete: k,
  maxLength: m,
  minLength: y,
  pattern: S,
  step: T,
  min: D,
  max: w,
  showValueLabels: R = !1,
  showCurrentValue: M = !1,
  valueLabels: L,
  onChange: x,
  onBlur: v,
  onFocus: $,
  onKeyDown: c,
  ...N
}) => {
  const [q, C] = ne(r || s || (n === "range" ? D || "0" : ""));
  se(() => {
    r !== void 0 && C(r);
  }, [r]);
  const P = (Z) => {
    C(Z.target.value), x?.(Z);
  }, h = n === "range", z = Y(
    "nhsuk-input",
    {
      "nhsuk-input--error": f,
      "nhsuk-input--range": h,
      [`nhsuk-input--width-${g}`]: g !== "full" && !h
    },
    p
  ), V = h ? /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    R && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ a.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || D || "0" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: z,
          id: e,
          name: t,
          type: n,
          value: q,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: u,
          "aria-describedby": d,
          inputMode: b,
          autoComplete: k,
          maxLength: m,
          minLength: y,
          pattern: S,
          step: T,
          min: D,
          max: w,
          onChange: P,
          onBlur: v,
          onFocus: $,
          onKeyDown: c,
          ...N
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || w || "100" })
    ] }),
    !R && /* @__PURE__ */ a.jsx(
      "input",
      {
        className: z,
        id: e,
        name: t,
        type: n,
        value: q,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: u,
        "aria-describedby": d,
        inputMode: b,
        autoComplete: k,
        maxLength: m,
        minLength: y,
        pattern: S,
        step: T,
        min: D,
        max: w,
        onChange: P,
        onBlur: v,
        onFocus: $,
        onKeyDown: c,
        ...N
      }
    ),
    M && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ a.jsx("strong", { children: q })
    ] }) })
  ] }) : null;
  return h ? V : /* @__PURE__ */ a.jsx(
    "input",
    {
      className: z,
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
      inputMode: b,
      autoComplete: k,
      maxLength: m,
      minLength: y,
      pattern: S,
      step: T,
      min: D,
      max: w,
      onChange: x,
      onBlur: v,
      onFocus: $,
      onKeyDown: c,
      ...N
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
  const i = Y(
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
  const o = Y(
    "nhsuk-fieldset",
    n
  ), i = Y(
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
}, el = ({
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
  ...b
}) => {
  const [k, m] = ne(
    e.filter((x) => x.checked).map((x) => x.value)
  ), y = n || t, S = i ? `${y}-hint` : void 0, T = l ? `${y}-error` : void 0, D = [S, T].filter(Boolean).join(" ") || void 0, w = (x, v) => {
    let $;
    v ? $ = [...k, x] : $ = k.filter((c) => c !== x), m($), d?.($);
  }, R = () => e.map((x, v) => {
    const $ = `${y}-${v + 1}`, c = `${$}-conditional`, N = k.includes(x.value), q = x.disabled || !1;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: $,
          name: t,
          type: "checkbox",
          value: x.value,
          checked: N,
          disabled: q,
          onChange: (C) => w(x.value, C.target.checked),
          "aria-describedby": x.hint ? `${$}-hint` : D,
          ...x.conditional && {
            "aria-controls": c,
            "aria-expanded": N ? "true" : "false"
          },
          ...x.attributes
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: $, children: x.text }),
      x.hint && /* @__PURE__ */ a.jsx("div", { id: `${$}-hint`, className: "nhsuk-checkboxes__hint", children: x.hint }),
      x.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Y("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !N
          }),
          id: c,
          children: typeof x.conditional == "object" && x.conditional !== null && "label" in x.conditional && "id" in x.conditional && "name" in x.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            x.conditional.label && /* @__PURE__ */ a.jsx(Er, { htmlFor: x.conditional.id, children: x.conditional.label }),
            /* @__PURE__ */ a.jsx(jr, { ...x.conditional })
          ] }) : x.conditional
        }
      )
    ] }, x.value);
  }), M = Y(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": f
    },
    u
  ), L = Y("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ a.jsx("div", { className: L, ...g, ...b, children: /* @__PURE__ */ a.jsxs(
    Fr,
    {
      legend: r ? {
        text: r,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: D,
      ...p,
      children: [
        i && /* @__PURE__ */ a.jsx("div", { id: S, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ a.jsxs("div", { id: T, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: M, children: R() })
      ]
    }
  ) });
};
el.displayName = "Checkboxes";
const tl = ({
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
  maxLength: b,
  minLength: k,
  wrap: m = "soft",
  resize: y = "vertical",
  autoComplete: S,
  spellCheck: T,
  onChange: D,
  onBlur: w,
  onFocus: R,
  onKeyDown: M,
  ...L
}) => {
  const x = Y(
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
      className: x,
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
      maxLength: b,
      minLength: k,
      wrap: m,
      autoComplete: S,
      spellCheck: T,
      onChange: D,
      onBlur: w,
      onFocus: R,
      onKeyDown: M,
      ...L
    }
  );
}, as = ({
  id: e,
  className: t,
  children: n,
  ...r
}) => {
  const s = Y("nhsuk-hint", t);
  return /* @__PURE__ */ a.jsx("div", { className: s, id: e, ...r, children: n });
}, Tp = ({
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
  const [g, b] = ne(o), [k, m] = ne(0), [y, S] = ne(!1), [T, D] = ne(!1), w = J(($) => n ? $.trim() === "" ? 0 : $.trim().split(/\s+/).length : $.length, [n]);
  se(() => {
    const $ = w(g), c = t || n || 0, N = c - $, q = Math.floor(c * (r / 100));
    m(N), S($ > c), D($ >= q || $ > c), f && f($, N);
  }, [g, t, n, r, w, f]);
  const R = ($) => {
    const c = $.target.value;
    b(c), d && d($);
  }, M = () => {
    const $ = t || n || 0, c = n ? "word" : "character", N = n ? "words" : "characters";
    if (!T)
      return `You can enter up to ${$} ${$ === 1 ? c : N}`;
    if (y) {
      const q = Math.abs(k);
      return `You have ${q} ${q === 1 ? c : N} too many`;
    } else
      return `You have ${k} ${k === 1 ? c : N} remaining`;
  }, L = Y(
    "nhsuk-character-count",
    l
  ), x = Y(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !T,
      "nhsuk-error-message": y
    },
    u?.classes
  ), v = Y(
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
          tl,
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
          as,
          {
            id: `${e}-info`,
            className: x,
            children: M()
          }
        )
      ]
    }
  );
}, $p = ({
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
  onChange: b,
  onBlur: k,
  onFocus: m,
  ...y
}) => {
  const S = Y(
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
      onChange: b,
      onBlur: k,
      onFocus: m,
      ...y,
      children: g.map((T, D) => /* @__PURE__ */ a.jsx(
        "option",
        {
          value: T.value,
          disabled: T.disabled,
          selected: T.selected,
          children: T.text
        },
        `${T.value}-${D}`
      ))
    }
  );
}, Cp = ({
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
  const [b, k] = ne(t || n || ""), m = Y(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": r,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), y = (S) => {
    const T = S.target.value;
    k(T), f && f(S);
  };
  return /* @__PURE__ */ a.jsx(Fr, { children: /* @__PURE__ */ a.jsx("div", { className: m, ...g, children: u.map((S, T) => {
    const D = `${e}-${T}`, w = S.conditional ? `${D}-conditional` : void 0, R = b === S.value;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: D,
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
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-radios__label", htmlFor: D, children: S.text }),
      S.hint && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-radios__hint", children: S.hint }),
      S.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Y("nhsuk-radios__conditional", {
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
}, ss = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: r,
  ...s
}) => {
  const o = Y(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), i = r ? { maxWidth: r } : void 0;
  return /* @__PURE__ */ a.jsx("div", { className: o, style: i, ...s, children: e });
}, Dr = ({
  children: e,
  className: t,
  ...n
}) => {
  const r = Y("nhsuk-grid-row", t);
  return /* @__PURE__ */ a.jsx("div", { className: r, ...n, children: e });
}, Pr = ({
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
  const f = Y(
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
}, nl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ a.jsx(ss, { className: t, ...n, children: /* @__PURE__ */ a.jsx(Dr, { children: e }) }), rl = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: r = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), f = Y(
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
}, al = ({
  children: e,
  className: t,
  ...n
}) => {
  const r = Y("nhsuk-list__item", t);
  return /* @__PURE__ */ a.jsx("li", { className: r, ...n, children: e });
}, sl = rl;
sl.Item = al;
const Np = ({
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
}, jp = {
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
}, Ep = ({
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
}, Fp = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Dp = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], os = ({
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
}, Re = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: s,
  size: o,
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
  })(o), d = Y(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), p = s || (r ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n), g = `h${f}`, b = i ? { ...l.style, marginBottom: i } : l.style;
  return Ba(
    g,
    { className: d, ...l, style: b },
    p
  );
}, ca = ({
  id: e,
  className: t,
  visuallyHiddenText: n = "Error:",
  children: r,
  ...s
}) => {
  const o = Y("nhsuk-error-message", t);
  return /* @__PURE__ */ a.jsxs("span", { className: o, id: e, ...s, children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n,
      " "
    ] }),
    r
  ] });
}, Pp = ({
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
  const f = Y(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, p = () => r ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n, g = (b) => {
    const k = b.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
    return b.href ? /* @__PURE__ */ a.jsx(
      "a",
      {
        href: b.href,
        ...b.attributes,
        children: k
      }
    ) : k;
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
          /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((b, k) => /* @__PURE__ */ a.jsx("li", { children: g(b) }, k)) })
        ] })
      ]
    }
  );
}, Bp = ({
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
  })), [g, b] = ne({}), k = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, m = (P, h) => {
    const z = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && k(h) ? 29 : z[P - 1];
  }, y = (P, h, z) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const V = parseInt(P, 10);
    if (V < 1 || V > 31) return "Day must be between 1 and 31";
    if (h && z) {
      const Z = parseInt(h, 10), E = parseInt(z, 10);
      if (!isNaN(Z) && !isNaN(E) && Z >= 1 && Z <= 12) {
        const G = m(Z, E);
        if (V > G)
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
          ][Z - 1]} ${E} only has ${G} days`;
      }
    }
  }, S = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const h = parseInt(P, 10);
    if (h < 1 || h > 12) return "Month must be between 1 and 12";
  }, T = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const h = parseInt(P, 10), z = (/* @__PURE__ */ new Date()).getFullYear();
    if (h < 1900 || h > z + 10)
      return `Year must be between 1900 and ${z + 10}`;
  }, D = (P, h, z) => {
    if (!P || !h || !z) return;
    const V = parseInt(P, 10), Z = parseInt(h, 10), E = parseInt(z, 10);
    if (isNaN(V) || isNaN(Z) || isNaN(E) || Z < 1 || Z > 12 || E < 1900) return;
    const G = m(Z, E);
    V < 1 || V > G;
  }, w = J((P, h) => {
    const z = {
      ...d,
      [P]: h
    };
    p(z), u && u(z);
  }, [d, u]), R = J((P) => {
    const h = d[P];
    let z;
    if (P === "day")
      z = y(h, d.month, d.year);
    else if (P === "month") {
      if (z = S(h), !z && d.day) {
        const V = y(d.day, h, d.year);
        b((Z) => ({
          ...Z,
          day: V
        }));
      }
    } else if (P === "year" && (z = T(h), !z && d.day && d.month)) {
      const V = y(d.day, d.month, h);
      b((Z) => ({
        ...Z,
        day: V
      }));
    }
    if (b((V) => ({
      ...V,
      [P]: z
    })), d.day && d.month && d.year) {
      const V = D(
        P === "day" ? h : d.day,
        P === "month" ? h : d.month,
        P === "year" ? h : d.year
      );
      V && b((Z) => ({
        ...Z,
        day: V
      }));
    }
  }, [d, y, S, T, D]), M = oe(() => [
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
  ], []), L = n || M;
  let x = o?.describedBy || "";
  const v = i ? `${e}-hint` : "", $ = l ? `${e}-error` : "";
  v && (x = x ? `${x} ${v}` : v), $ && (x = x ? `${x} ${$}` : $);
  const c = Object.values(g).some((P) => P), N = Y(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || c
    }
  ), q = Y(
    "nhsuk-date-input",
    t
  ), C = () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    i && /* @__PURE__ */ a.jsx(
      as,
      {
        id: v,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      ca,
      {
        id: $,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([P, h]) => h ? /* @__PURE__ */ a.jsxs(
        ca,
        {
          id: `${e}-${P}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            h
          ]
        },
        `${P}-error`
      ) : null
    ),
    /* @__PURE__ */ a.jsx("div", { className: q, id: e, "data-testid": "date-input", ...f, children: L.map((P) => {
      const h = P.id || `${e}-${P.name}`, z = r ? `${r}[${P.name}]` : P.name, V = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), Z = g[P.name], E = d[P.name] || "";
      let G = x;
      if (Z) {
        const O = `${e}-${P.name}-error`;
        G = G ? `${G} ${O}` : O;
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ a.jsx(
          Er,
          {
            htmlFor: h,
            className: "nhsuk-date-input__label",
            children: V
          }
        ),
        /* @__PURE__ */ a.jsx(
          jr,
          {
            id: h,
            name: z,
            value: E,
            className: Y("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": Z
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": G || void 0,
            hasError: !!Z,
            onChange: (O) => w(P.name, O.target.value),
            onBlur: () => R(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ a.jsx("div", { className: N, children: o ? /* @__PURE__ */ a.jsx(
    Fr,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: x || void 0,
      children: C()
    }
  ) : C() });
}, is = {
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
}, ls = Tn(is), ol = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...is, ...t };
  return /* @__PURE__ */ a.jsx(ls.Provider, { value: n, children: e });
}, Mp = () => {
  const e = Ge(ls);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function il() {
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
function ll() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = il(), document.head.appendChild(e);
}
const Lp = ({ children: e, theme: t }) => (se(() => {
  ll();
}, []), /* @__PURE__ */ a.jsx(ol, { theme: t, children: e })), cs = ({
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
  const [p, g] = ne(!1), [b, k] = ne(!1), [m, y] = ne(i?.items?.length || 0), [S, T] = ne(!1), [D, w] = ne(!1), [R, M] = ne(!1), L = te(null), x = te(null), v = te(!1), $ = te(null), c = te([]), N = te(null);
  se(() => {
    typeof window > "u" || (M(!0), T(!0));
  }, []), se(() => {
    if (!R || !i?.items?.length) return;
    c.current = i.items;
    const B = setTimeout(() => {
      L.current && x.current && V();
    }, 100);
    return () => clearTimeout(B);
  }, [R, i?.items]);
  const q = n.href && !t.href || n.href && n.href === t.href, C = q ? n.href : t.href, P = Y(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), h = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), z = Y(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), V = J(() => {
    if (!(typeof window > "u" || v.current) && !(!L.current || !x.current || !c.current.length)) {
      v.current = !0;
      try {
        const B = x.current, H = L.current, j = B.offsetWidth, A = H.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (A.length === 0 || j === 0) {
          v.current = !1;
          return;
        }
        const W = window.innerWidth < 768, F = W ? 16 : 32, re = F * 2, X = j - re, U = Array.from(A).map((ge) => ge.offsetWidth), ee = U.reduce((ge, me) => ge + me, 0), le = W ? 80 : 100, ue = N.current !== null && N.current !== W;
        if (N.current = W, console.log("Overflow check:", {
          containerWidth: j,
          availableContainerWidth: X,
          totalGutters: re,
          gutterSize: F,
          totalWidth: ee,
          mobile: W,
          breakpointChanged: ue,
          itemCount: U.length,
          measurements: U
        }), ee <= X)
          k(!1), y(c.current.length);
        else {
          const ge = X - le;
          let me = 0, nt = 0;
          for (let Se = 0; Se < U.length; Se++) {
            const rt = nt + U[Se];
            if (rt <= ge)
              nt = rt, me = Se + 1;
            else
              break;
          }
          me = Math.max(1, me);
          const We = me < U.length;
          k(We), y(me);
        }
        v.current = !1;
      } catch (B) {
        console.error("Overflow detection error:", B), k(!1), y(c.current.length), v.current = !1;
      }
    }
  }, []);
  se(() => {
    if (typeof document > "u") return;
    const B = (H) => {
      H.key === "Escape" && p && g(!1);
    };
    if (p)
      return document.addEventListener("keydown", B), () => document.removeEventListener("keydown", B);
  }, [p]), se(() => {
    if (typeof window > "u" || !R) return;
    const B = () => {
      p && (g(!1), w(!1)), $.current && clearTimeout($.current), $.current = setTimeout(() => {
        c.current.length > 0 && V();
      }, 250);
    };
    let H = null, j = null;
    return window.matchMedia && (H = window.matchMedia("(max-width: 767px)"), j = () => {
      console.log("Breakpoint changed:", H?.matches ? "mobile" : "desktop"), c.current.length > 0 && setTimeout(() => V(), 50);
    }, H.addEventListener ? H.addEventListener("change", j) : H.addListener(j)), window.addEventListener("resize", B), () => {
      window.removeEventListener("resize", B), H && j && (H.removeEventListener ? H.removeEventListener("change", j) : H.removeListener(j)), $.current && clearTimeout($.current);
    };
  }, [R, p, V]), se(() => {
    if (typeof document > "u") return;
    const B = (H) => {
      const j = H.target, A = L.current?.contains(j);
      p && !A && g(!1);
    };
    if (p)
      return document.addEventListener("mousedown", B), () => document.removeEventListener("mousedown", B);
  }, [p]);
  const Z = (B) => {
    B && (B.preventDefault(), B.stopPropagation());
    const H = !p;
    g(H), H ? setTimeout(() => {
      w(!0);
    }, 50) : w(!1);
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
  ), G = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : E(), O = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, Q = (B, H) => B ? H ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: H, children: B }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: B }) : null, K = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), _ = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), I = (B) => {
    if (B.active || B.current) {
      const H = B.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: B.html } }) : B.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H });
    }
    return B.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: B.html } }) : B.text;
  };
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: P,
      role: "banner",
      "data-module": "nhsuk-header",
      ...f,
      ...d,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: h, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            C ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: C, children: [
              G(),
              O(),
              q && Q(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              G(),
              O(),
              q && Q(n.text)
            ] }),
            n.text && !q && Q(n.text, n.href)
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
                  K(),
                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: s.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ a.jsx(
            $o,
            {
              ...o,
              variant: u === "white" ? "white" : "default"
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
                className: Y(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !S && R,
                    "nhsuk-header__navigation-container--ssr": !R
                  },
                  l
                ),
                ref: x,
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (R ? i.items.slice(0, m) : i.items).map((B, H) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: Y(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": B.active || B.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !R && H >= 4
                          // Mark items that would be hidden on client
                        },
                        B.className
                      ),
                      ...B.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: B.href,
                          ...B.active || B.current ? {
                            "aria-current": B.current ? "page" : "true"
                          } : {},
                          children: I(B)
                        }
                      )
                    },
                    H
                  )),
                  R && b && m < i.items.length && /* @__PURE__ */ a.jsx(
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
                            _()
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
        R && i && i.items && i.items.length > 0 && p && D && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !D,
            children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(m).map((B, H) => /* @__PURE__ */ a.jsx(
              "li",
              {
                className: Y(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": B.active || B.current
                  }
                ),
                children: /* @__PURE__ */ a.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: B.href,
                    ...B.active || B.current ? {
                      "aria-current": B.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      g(!1), w(!1);
                    },
                    children: I(B)
                  }
                )
              },
              `overflow-${m + H}`
            )) })
          }
        )
      ]
    }
  );
}, Ip = ({
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
  const p = n.href && !t.href || n.href && n.href === t.href, g = p ? n.href : t.href, b = Y(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), k = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), m = Y(
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
  ) : y(), T = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, D = (L, x) => L ? x ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: x, children: L }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: L }) : null, w = () => !i?.items || i.items.length === 0 ? null : i.items.map((L, x) => /* @__PURE__ */ a.jsx(
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
  )), R = () => !o?.items || o.items.length === 0 ? null : o.items.map((L, x) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-header__account-item", children: /* @__PURE__ */ a.jsx(
    "a",
    {
      className: "nhsuk-header__account-link",
      href: L.href,
      children: L.text
    }
  ) }, L.href || x)), M = () => s ? /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search-wrap", id: "wrap-search", children: /* @__PURE__ */ a.jsxs(
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
      className: b,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...f,
      ...d,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: k, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            g ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: g, children: [
              S(),
              T(),
              p && D(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              S(),
              T(),
              p && D(n.text)
            ] }),
            n.text && !p && D(n.text, n.href)
          ] }),
          (u === "organisation" || r) && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            r && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name", children: r.name }),
              r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: r.descriptor })
            ] }),
            M()
          ] }),
          u !== "organisation" && !r && M(),
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
}, Rp = ({
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
  const g = n.href && !t.href || n.href && n.href === t.href, b = g ? n.href : t.href, k = Y(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": u === "organisation" || r,
      "nhsuk-header--white": u === "white"
    },
    e
  ), m = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), y = Y(
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
  ), T = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : S(), D = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, w = (x, v) => x ? v ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: v, children: x }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: x }) : null, R = (x) => {
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
    ) : null, $ = x.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } }) : x.text, c = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      v,
      $
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
  }, M = () => /* @__PURE__ */ a.jsx(
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
      className: k,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...f,
      ...p,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: m, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            b ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: b, children: [
              T(),
              D(),
              g && w(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              T(),
              D(),
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
                  M(),
                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: s.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          o && o.items && o.items.length > 0 && /* @__PURE__ */ a.jsx(
            "nav",
            {
              className: Y("nhsuk-header__account", o.className),
              "aria-label": o.ariaLabel || "Account",
              children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__account-list", children: o.items.map((x, v) => x && /* @__PURE__ */ a.jsx(
                "li",
                {
                  className: Y("nhsuk-header__account-item", x.className),
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
            className: y,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: Y(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((x, v) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: Y(
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
                        className: Y(
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
}, cl = ({
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
  ].filter(Boolean).join(" "), b = u || e || r || s, k = () => {
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
        o && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-hero__overlay", children: b && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero-content", children: [
          k(),
          u || (s ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && b && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          k(),
          u || (s ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null)
        ] }) }) }) })
      ]
    }
  );
};
cl.displayName = "Hero";
const us = ({
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
      className: Y("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ a.jsxs("div", { className: Y("nhsuk-width-container", i), children: [
      /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ a.jsx("div", { className: Y("nhsuk-footer", e), children: f ? (
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
function ul(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Br(e) {
  let t, n, r;
  e.length !== 2 ? (t = Ht, n = (l, u) => Ht(e(l), u), r = (l, u) => e(l) - u) : (t = e === Ht || e === ul ? e : dl, n = e, r = e);
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
function dl() {
  return 0;
}
function fl(e) {
  return e === null ? NaN : +e;
}
const hl = Br(Ht), pl = hl.right;
Br(fl).center;
const ml = Math.sqrt(50), gl = Math.sqrt(10), bl = Math.sqrt(2);
function ds(e, t, n) {
  const r = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(r)), o = r / Math.pow(10, s), i = o >= ml ? 10 : o >= gl ? 5 : o >= bl ? 2 : 1;
  let l, u, f;
  return s < 0 ? (f = Math.pow(10, -s) / i, l = Math.round(e * f), u = Math.round(t * f), l / f < e && ++l, u / f > t && --u, f = -f) : (f = Math.pow(10, s) * i, l = Math.round(e / f), u = Math.round(t / f), l * f < e && ++l, u * f > t && --u), u < l && 0.5 <= n && n < 2 ? ds(e, t, n * 2) : [l, u, f];
}
function ua(e, t, n) {
  return t = +t, e = +e, n = +n, ds(e, t, n)[2];
}
function da(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, s = r ? ua(t, e, n) : ua(e, t, n);
  return (r ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function xl(e, t) {
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
function Mr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function fs(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Nt() {
}
var Tt = 0.7, Ut = 1 / Tt, ct = "\\s*([+-]?\\d+)\\s*", $t = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", vl = /^#([0-9a-f]{3,8})$/, yl = new RegExp(`^rgb\\(${ct},${ct},${ct}\\)$`), kl = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), Sl = new RegExp(`^rgba\\(${ct},${ct},${ct},${$t}\\)$`), wl = new RegExp(`^rgba\\(${Te},${Te},${Te},${$t}\\)$`), _l = new RegExp(`^hsl\\(${$t},${Te},${Te}\\)$`), Tl = new RegExp(`^hsla\\(${$t},${Te},${Te},${$t}\\)$`), fa = {
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
Mr(Nt, Ct, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: $l,
  formatHsl: Cl,
  formatRgb: pa,
  toString: pa
});
function ha() {
  return this.rgb().formatHex();
}
function $l() {
  return this.rgb().formatHex8();
}
function Cl() {
  return hs(this).formatHsl();
}
function pa() {
  return this.rgb().formatRgb();
}
function Ct(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = vl.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ma(t) : n === 3 ? new xe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Mt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Mt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = yl.exec(e)) ? new xe(t[1], t[2], t[3], 1) : (t = kl.exec(e)) ? new xe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Sl.exec(e)) ? Mt(t[1], t[2], t[3], t[4]) : (t = wl.exec(e)) ? Mt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = _l.exec(e)) ? xa(t[1], t[2] / 100, t[3] / 100, 1) : (t = Tl.exec(e)) ? xa(t[1], t[2] / 100, t[3] / 100, t[4]) : fa.hasOwnProperty(e) ? ma(fa[e]) : e === "transparent" ? new xe(NaN, NaN, NaN, 0) : null;
}
function ma(e) {
  return new xe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Mt(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new xe(e, t, n, r);
}
function Nl(e) {
  return e instanceof Nt || (e = Ct(e)), e ? (e = e.rgb(), new xe(e.r, e.g, e.b, e.opacity)) : new xe();
}
function qn(e, t, n, r) {
  return arguments.length === 1 ? Nl(e) : new xe(e, t, n, r ?? 1);
}
function xe(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Mr(xe, qn, fs(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new xe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tt : Math.pow(Tt, e), new xe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new xe(Xe(this.r), Xe(this.g), Xe(this.b), Yt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ga,
  // Deprecated! Use color.formatHex.
  formatHex: ga,
  formatHex8: jl,
  formatRgb: ba,
  toString: ba
}));
function ga() {
  return `#${qe(this.r)}${qe(this.g)}${qe(this.b)}`;
}
function jl() {
  return `#${qe(this.r)}${qe(this.g)}${qe(this.b)}${qe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ba() {
  const e = Yt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xe(this.r)}, ${Xe(this.g)}, ${Xe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Yt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qe(e) {
  return e = Xe(e), (e < 16 ? "0" : "") + e.toString(16);
}
function xa(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new we(e, t, n, r);
}
function hs(e) {
  if (e instanceof we) return new we(e.h, e.s, e.l, e.opacity);
  if (e instanceof Nt || (e = Ct(e)), !e) return new we();
  if (e instanceof we) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, s = Math.min(t, n, r), o = Math.max(t, n, r), i = NaN, l = o - s, u = (o + s) / 2;
  return l ? (t === o ? i = (n - r) / l + (n < r) * 6 : n === o ? i = (r - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? o + s : 2 - o - s, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new we(i, l, u, e.opacity);
}
function El(e, t, n, r) {
  return arguments.length === 1 ? hs(e) : new we(e, t, n, r ?? 1);
}
function we(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Mr(we, El, fs(Nt, {
  brighter(e) {
    return e = e == null ? Ut : Math.pow(Ut, e), new we(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Tt : Math.pow(Tt, e), new we(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - r;
    return new xe(
      Bn(e >= 240 ? e - 240 : e + 120, s, r),
      Bn(e, s, r),
      Bn(e < 120 ? e + 240 : e - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new we(va(this.h), Lt(this.s), Lt(this.l), Yt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Yt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${va(this.h)}, ${Lt(this.s) * 100}%, ${Lt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function va(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Lt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Bn(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Lr = (e) => () => e;
function Fl(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Dl(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Pl(e) {
  return (e = +e) == 1 ? ps : function(t, n) {
    return n - t ? Dl(t, n, e) : Lr(isNaN(t) ? n : t);
  };
}
function ps(e, t) {
  var n = t - e;
  return n ? Fl(e, n) : Lr(isNaN(e) ? t : e);
}
const ya = function e(t) {
  var n = Pl(t);
  function r(s, o) {
    var i = n((s = qn(s)).r, (o = qn(o)).r), l = n(s.g, o.g), u = n(s.b, o.b), f = ps(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = f(d), s + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Bl(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) r[s] = e[s] * (1 - o) + t[s] * o;
    return r;
  };
}
function Ml(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ll(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, s = new Array(r), o = new Array(n), i;
  for (i = 0; i < r; ++i) s[i] = Ir(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < r; ++i) o[i] = s[i](l);
    return o;
  };
}
function Il(e, t) {
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
function Rl(e, t) {
  var n = {}, r = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Ir(e[s], t[s]) : r[s] = t[s];
  return function(o) {
    for (s in n) r[s] = n[s](o);
    return r;
  };
}
var Xn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mn = new RegExp(Xn.source, "g");
function Hl(e) {
  return function() {
    return e;
  };
}
function Al(e) {
  return function(t) {
    return e(t) + "";
  };
}
function zl(e, t) {
  var n = Xn.lastIndex = Mn.lastIndex = 0, r, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = Xn.exec(e)) && (s = Mn.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (r = r[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: Vt(r, s) })), n = Mn.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? Al(u[0].x) : Hl(t) : (t = u.length, function(f) {
    for (var d = 0, p; d < t; ++d) l[(p = u[d]).i] = p.x(f);
    return l.join("");
  });
}
function Ir(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Lr(t) : (n === "number" ? Vt : n === "string" ? (r = Ct(t)) ? (t = r, ya) : zl : t instanceof Ct ? ya : t instanceof Date ? Il : Ml(t) ? Bl : Array.isArray(t) ? Ll : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Rl : Vt)(e, t);
}
function Wl(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Ol(e) {
  return function() {
    return e;
  };
}
function Ul(e) {
  return +e;
}
var ka = [0, 1];
function ot(e) {
  return e;
}
function Zn(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ol(isNaN(t) ? NaN : 0.5);
}
function Yl(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function Vl(e, t, n) {
  var r = e[0], s = e[1], o = t[0], i = t[1];
  return s < r ? (r = Zn(s, r), o = n(i, o)) : (r = Zn(r, s), o = n(o, i)), function(l) {
    return o(r(l));
  };
}
function Gl(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, s = new Array(r), o = new Array(r), i = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < r; )
    s[i] = Zn(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = pl(e, l, 1, r) - 1;
    return o[u](s[u](l));
  };
}
function Kl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ql() {
  var e = ka, t = ka, n = Ir, r, s, o, i = ot, l, u, f;
  function d() {
    var g = Math.min(e.length, t.length);
    return i !== ot && (i = Yl(e[0], e[g - 1])), l = g > 2 ? Gl : Vl, u = f = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? o : (u || (u = l(e.map(r), t, n)))(r(i(g)));
  }
  return p.invert = function(g) {
    return i(s((f || (f = l(t, e.map(r), Vt)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (e = Array.from(g, Ul), d()) : e.slice();
  }, p.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, p.rangeRound = function(g) {
    return t = Array.from(g), n = Wl, d();
  }, p.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : ot, d()) : i !== ot;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (o = g, p) : o;
  }, function(g, b) {
    return r = g, s = b, d();
  };
}
function Xl() {
  return ql()(ot, ot);
}
function Zl(e, t) {
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
const Le = 1e3, ke = Le * 60, Ie = ke * 60, He = Ie * 24, Rr = He * 7, Sa = He * 30, Rn = He * 365, it = fe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Le);
}, (e, t) => (t - e) / Le, (e) => e.getUTCSeconds());
it.range;
const Hr = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Le);
}, (e, t) => {
  e.setTime(+e + t * ke);
}, (e, t) => (t - e) / ke, (e) => e.getMinutes());
Hr.range;
const Jl = fe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ke);
}, (e, t) => (t - e) / ke, (e) => e.getUTCMinutes());
Jl.range;
const Ar = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Le - e.getMinutes() * ke);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getHours());
Ar.range;
const Ql = fe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCHours());
Ql.range;
const jt = fe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ke) / He,
  (e) => e.getDate() - 1
);
jt.range;
const zr = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / He, (e) => e.getUTCDate() - 1);
zr.range;
const ec = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / He, (e) => Math.floor(e / He));
ec.range;
function et(e) {
  return fe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ke) / Rr);
}
const Nn = et(0), Kt = et(1), tc = et(2), nc = et(3), ft = et(4), rc = et(5), ac = et(6);
Nn.range;
Kt.range;
tc.range;
nc.range;
ft.range;
rc.range;
ac.range;
function tt(e) {
  return fe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Rr);
}
const ms = tt(0), qt = tt(1), sc = tt(2), oc = tt(3), ht = tt(4), ic = tt(5), lc = tt(6);
ms.range;
qt.range;
sc.range;
oc.range;
ht.range;
ic.range;
lc.range;
const Wr = fe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Wr.range;
const cc = fe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
cc.range;
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
const Je = fe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Je.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
Je.range;
function uc(e, t, n, r, s, o) {
  const i = [
    [it, 1, Le],
    [it, 5, 5 * Le],
    [it, 15, 15 * Le],
    [it, 30, 30 * Le],
    [o, 1, ke],
    [o, 5, 5 * ke],
    [o, 15, 15 * ke],
    [o, 30, 30 * ke],
    [s, 1, Ie],
    [s, 3, 3 * Ie],
    [s, 6, 6 * Ie],
    [s, 12, 12 * Ie],
    [r, 1, He],
    [r, 2, 2 * He],
    [n, 1, Rr],
    [t, 1, Sa],
    [t, 3, 3 * Sa],
    [e, 1, Rn]
  ];
  function l(f, d, p) {
    const g = d < f;
    g && ([f, d] = [d, f]);
    const b = p && typeof p.range == "function" ? p : u(f, d, p), k = b ? b.range(f, +d + 1) : [];
    return g ? k.reverse() : k;
  }
  function u(f, d, p) {
    const g = Math.abs(d - f) / p, b = Br(([, , y]) => y).right(i, g);
    if (b === i.length) return e.every(da(f / Rn, d / Rn, p));
    if (b === 0) return Gt.every(Math.max(da(f, d, p), 1));
    const [k, m] = i[g / i[b - 1][2] < i[b][2] / g ? b - 1 : b];
    return k.every(m);
  }
  return [l, u];
}
const [dc, fc] = uc(Ae, Wr, Nn, jt, Ar, Hr);
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
function hc(e) {
  var t = e.dateTime, n = e.date, r = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, f = vt(s), d = yt(s), p = vt(o), g = yt(o), b = vt(i), k = yt(i), m = vt(l), y = yt(l), S = vt(u), T = yt(u), D = {
    a: z,
    A: V,
    b: Z,
    B: E,
    c: null,
    d: Na,
    e: Na,
    f: Lc,
    g: Vc,
    G: Kc,
    H: Pc,
    I: Bc,
    j: Mc,
    L: gs,
    m: Ic,
    M: Rc,
    p: G,
    q: O,
    Q: Fa,
    s: Da,
    S: Hc,
    u: Ac,
    U: zc,
    V: Wc,
    w: Oc,
    W: Uc,
    x: null,
    X: null,
    y: Yc,
    Y: Gc,
    Z: qc,
    "%": Ea
  }, w = {
    a: Q,
    A: K,
    b: _,
    B: I,
    c: null,
    d: ja,
    e: ja,
    f: Qc,
    g: cu,
    G: du,
    H: Xc,
    I: Zc,
    j: Jc,
    L: xs,
    m: eu,
    M: tu,
    p: B,
    q: H,
    Q: Fa,
    s: Da,
    S: nu,
    u: ru,
    U: au,
    V: su,
    w: ou,
    W: iu,
    x: null,
    X: null,
    y: lu,
    Y: uu,
    Z: fu,
    "%": Ea
  }, R = {
    a: $,
    A: c,
    b: N,
    B: q,
    c: C,
    d: $a,
    e: $a,
    f: jc,
    g: Ta,
    G: _a,
    H: Ca,
    I: Ca,
    j: Tc,
    L: Nc,
    m: _c,
    M: $c,
    p: v,
    q: wc,
    Q: Fc,
    s: Dc,
    S: Cc,
    u: xc,
    U: vc,
    V: yc,
    w: bc,
    W: kc,
    x: P,
    X: h,
    y: Ta,
    Y: _a,
    Z: Sc,
    "%": Ec
  };
  D.x = M(n, D), D.X = M(r, D), D.c = M(t, D), w.x = M(n, w), w.X = M(r, w), w.c = M(t, w);
  function M(j, A) {
    return function(W) {
      var F = [], re = -1, X = 0, U = j.length, ee, le, ue;
      for (W instanceof Date || (W = /* @__PURE__ */ new Date(+W)); ++re < U; )
        j.charCodeAt(re) === 37 && (F.push(j.slice(X, re)), (le = wa[ee = j.charAt(++re)]) != null ? ee = j.charAt(++re) : le = ee === "e" ? " " : "0", (ue = A[ee]) && (ee = ue(W, le)), F.push(ee), X = re + 1);
      return F.push(j.slice(X, re)), F.join("");
    };
  }
  function L(j, A) {
    return function(W) {
      var F = xt(1900, void 0, 1), re = x(F, j, W += "", 0), X, U;
      if (re != W.length) return null;
      if ("Q" in F) return new Date(F.Q);
      if ("s" in F) return new Date(F.s * 1e3 + ("L" in F ? F.L : 0));
      if (A && !("Z" in F) && (F.Z = 0), "p" in F && (F.H = F.H % 12 + F.p * 12), F.m === void 0 && (F.m = "q" in F ? F.q : 0), "V" in F) {
        if (F.V < 1 || F.V > 53) return null;
        "w" in F || (F.w = 1), "Z" in F ? (X = An(xt(F.y, 0, 1)), U = X.getUTCDay(), X = U > 4 || U === 0 ? qt.ceil(X) : qt(X), X = zr.offset(X, (F.V - 1) * 7), F.y = X.getUTCFullYear(), F.m = X.getUTCMonth(), F.d = X.getUTCDate() + (F.w + 6) % 7) : (X = Hn(xt(F.y, 0, 1)), U = X.getDay(), X = U > 4 || U === 0 ? Kt.ceil(X) : Kt(X), X = jt.offset(X, (F.V - 1) * 7), F.y = X.getFullYear(), F.m = X.getMonth(), F.d = X.getDate() + (F.w + 6) % 7);
      } else ("W" in F || "U" in F) && ("w" in F || (F.w = "u" in F ? F.u % 7 : "W" in F ? 1 : 0), U = "Z" in F ? An(xt(F.y, 0, 1)).getUTCDay() : Hn(xt(F.y, 0, 1)).getDay(), F.m = 0, F.d = "W" in F ? (F.w + 6) % 7 + F.W * 7 - (U + 5) % 7 : F.w + F.U * 7 - (U + 6) % 7);
      return "Z" in F ? (F.H += F.Z / 100 | 0, F.M += F.Z % 100, An(F)) : Hn(F);
    };
  }
  function x(j, A, W, F) {
    for (var re = 0, X = A.length, U = W.length, ee, le; re < X; ) {
      if (F >= U) return -1;
      if (ee = A.charCodeAt(re++), ee === 37) {
        if (ee = A.charAt(re++), le = R[ee in wa ? A.charAt(re++) : ee], !le || (F = le(j, W, F)) < 0) return -1;
      } else if (ee != W.charCodeAt(F++))
        return -1;
    }
    return F;
  }
  function v(j, A, W) {
    var F = f.exec(A.slice(W));
    return F ? (j.p = d.get(F[0].toLowerCase()), W + F[0].length) : -1;
  }
  function $(j, A, W) {
    var F = b.exec(A.slice(W));
    return F ? (j.w = k.get(F[0].toLowerCase()), W + F[0].length) : -1;
  }
  function c(j, A, W) {
    var F = p.exec(A.slice(W));
    return F ? (j.w = g.get(F[0].toLowerCase()), W + F[0].length) : -1;
  }
  function N(j, A, W) {
    var F = S.exec(A.slice(W));
    return F ? (j.m = T.get(F[0].toLowerCase()), W + F[0].length) : -1;
  }
  function q(j, A, W) {
    var F = m.exec(A.slice(W));
    return F ? (j.m = y.get(F[0].toLowerCase()), W + F[0].length) : -1;
  }
  function C(j, A, W) {
    return x(j, t, A, W);
  }
  function P(j, A, W) {
    return x(j, n, A, W);
  }
  function h(j, A, W) {
    return x(j, r, A, W);
  }
  function z(j) {
    return i[j.getDay()];
  }
  function V(j) {
    return o[j.getDay()];
  }
  function Z(j) {
    return u[j.getMonth()];
  }
  function E(j) {
    return l[j.getMonth()];
  }
  function G(j) {
    return s[+(j.getHours() >= 12)];
  }
  function O(j) {
    return 1 + ~~(j.getMonth() / 3);
  }
  function Q(j) {
    return i[j.getUTCDay()];
  }
  function K(j) {
    return o[j.getUTCDay()];
  }
  function _(j) {
    return u[j.getUTCMonth()];
  }
  function I(j) {
    return l[j.getUTCMonth()];
  }
  function B(j) {
    return s[+(j.getUTCHours() >= 12)];
  }
  function H(j) {
    return 1 + ~~(j.getUTCMonth() / 3);
  }
  return {
    format: function(j) {
      var A = M(j += "", D);
      return A.toString = function() {
        return j;
      }, A;
    },
    parse: function(j) {
      var A = L(j += "", !1);
      return A.toString = function() {
        return j;
      }, A;
    },
    utcFormat: function(j) {
      var A = M(j += "", w);
      return A.toString = function() {
        return j;
      }, A;
    },
    utcParse: function(j) {
      var A = L(j += "", !0);
      return A.toString = function() {
        return j;
      }, A;
    }
  };
}
var wa = { "-": "", _: " ", 0: "0" }, he = /^\s*\d+/, pc = /^%/, mc = /[\\^$*+?|[\]().{}]/g;
function ae(e, t, n) {
  var r = e < 0 ? "-" : "", s = (r ? -e : e) + "", o = s.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function gc(e) {
  return e.replace(mc, "\\$&");
}
function vt(e) {
  return new RegExp("^(?:" + e.map(gc).join("|") + ")", "i");
}
function yt(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function bc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function xc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function vc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function yc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function kc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function _a(e, t, n) {
  var r = he.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Ta(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Sc(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function wc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function _c(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function $a(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function Tc(e, t, n) {
  var r = he.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function Ca(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function $c(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Cc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function Nc(e, t, n) {
  var r = he.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function jc(e, t, n) {
  var r = he.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Ec(e, t, n) {
  var r = pc.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Fc(e, t, n) {
  var r = he.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Dc(e, t, n) {
  var r = he.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Na(e, t) {
  return ae(e.getDate(), t, 2);
}
function Pc(e, t) {
  return ae(e.getHours(), t, 2);
}
function Bc(e, t) {
  return ae(e.getHours() % 12 || 12, t, 2);
}
function Mc(e, t) {
  return ae(1 + jt.count(Ae(e), e), t, 3);
}
function gs(e, t) {
  return ae(e.getMilliseconds(), t, 3);
}
function Lc(e, t) {
  return gs(e, t) + "000";
}
function Ic(e, t) {
  return ae(e.getMonth() + 1, t, 2);
}
function Rc(e, t) {
  return ae(e.getMinutes(), t, 2);
}
function Hc(e, t) {
  return ae(e.getSeconds(), t, 2);
}
function Ac(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function zc(e, t) {
  return ae(Nn.count(Ae(e) - 1, e), t, 2);
}
function bs(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ft(e) : ft.ceil(e);
}
function Wc(e, t) {
  return e = bs(e), ae(ft.count(Ae(e), e) + (Ae(e).getDay() === 4), t, 2);
}
function Oc(e) {
  return e.getDay();
}
function Uc(e, t) {
  return ae(Kt.count(Ae(e) - 1, e), t, 2);
}
function Yc(e, t) {
  return ae(e.getFullYear() % 100, t, 2);
}
function Vc(e, t) {
  return e = bs(e), ae(e.getFullYear() % 100, t, 2);
}
function Gc(e, t) {
  return ae(e.getFullYear() % 1e4, t, 4);
}
function Kc(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? ft(e) : ft.ceil(e), ae(e.getFullYear() % 1e4, t, 4);
}
function qc(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2);
}
function ja(e, t) {
  return ae(e.getUTCDate(), t, 2);
}
function Xc(e, t) {
  return ae(e.getUTCHours(), t, 2);
}
function Zc(e, t) {
  return ae(e.getUTCHours() % 12 || 12, t, 2);
}
function Jc(e, t) {
  return ae(1 + zr.count(Je(e), e), t, 3);
}
function xs(e, t) {
  return ae(e.getUTCMilliseconds(), t, 3);
}
function Qc(e, t) {
  return xs(e, t) + "000";
}
function eu(e, t) {
  return ae(e.getUTCMonth() + 1, t, 2);
}
function tu(e, t) {
  return ae(e.getUTCMinutes(), t, 2);
}
function nu(e, t) {
  return ae(e.getUTCSeconds(), t, 2);
}
function ru(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function au(e, t) {
  return ae(ms.count(Je(e) - 1, e), t, 2);
}
function vs(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function su(e, t) {
  return e = vs(e), ae(ht.count(Je(e), e) + (Je(e).getUTCDay() === 4), t, 2);
}
function ou(e) {
  return e.getUTCDay();
}
function iu(e, t) {
  return ae(qt.count(Je(e) - 1, e), t, 2);
}
function lu(e, t) {
  return ae(e.getUTCFullYear() % 100, t, 2);
}
function cu(e, t) {
  return e = vs(e), ae(e.getUTCFullYear() % 100, t, 2);
}
function uu(e, t) {
  return ae(e.getUTCFullYear() % 1e4, t, 4);
}
function du(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? ht(e) : ht.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4);
}
function fu() {
  return "+0000";
}
function Ea() {
  return "%";
}
function Fa(e) {
  return +e;
}
function Da(e) {
  return Math.floor(+e / 1e3);
}
var at, ys;
hu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function hu(e) {
  return at = hc(e), ys = at.format, at.parse, at.utcFormat, at.utcParse, at;
}
function pu(e) {
  return new Date(e);
}
function mu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ks(e, t, n, r, s, o, i, l, u, f) {
  var d = Xl(), p = d.invert, g = d.domain, b = f(".%L"), k = f(":%S"), m = f("%I:%M"), y = f("%I %p"), S = f("%a %d"), T = f("%b %d"), D = f("%B"), w = f("%Y");
  function R(M) {
    return (u(M) < M ? b : l(M) < M ? k : i(M) < M ? m : o(M) < M ? y : r(M) < M ? s(M) < M ? S : T : n(M) < M ? D : w)(M);
  }
  return d.invert = function(M) {
    return new Date(p(M));
  }, d.domain = function(M) {
    return arguments.length ? g(Array.from(M, mu)) : g().map(pu);
  }, d.ticks = function(M) {
    var L = g();
    return e(L[0], L[L.length - 1], M ?? 10);
  }, d.tickFormat = function(M, L) {
    return L == null ? R : f(L);
  }, d.nice = function(M) {
    var L = g();
    return (!M || typeof M.range != "function") && (M = t(L[0], L[L.length - 1], M ?? 10)), M ? g(Zl(L, M)) : d;
  }, d.copy = function() {
    return Kl(d, ks(e, t, n, r, s, o, i, l, u, f));
  }, d;
}
function gu() {
  return xl.apply(ks(dc, fc, Ae, Wr, Nn, jt, Ar, Hr, it, ys).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function bu({
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
  const f = te(null), [d, p] = ne(!1), [g, b] = ne(!1), k = t(e.start), m = t(e.end), y = Math.max(m - k, 20), S = () => {
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
  }, T = e.progress ? y * e.progress / 100 : 0, D = () => {
    n?.(e);
  }, w = () => {
    r?.(e);
  }, R = (N) => {
    N.key === "Enter" ? (N.preventDefault(), D()) : N.key === " " && (N.preventDefault(), w());
  }, M = () => {
    p(!0);
  }, L = () => {
    p(!1);
  }, x = () => {
    b(!0), l?.();
  }, v = () => {
    b(!1);
  }, $ = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), c = {
    "--task-left": `${k}px`,
    "--task-width": `${y}px`,
    "--task-color": S(),
    left: `${k}px`,
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
      className: $,
      style: c,
      onClick: D,
      onDoubleClick: w,
      onKeyDown: R,
      onMouseDown: M,
      onMouseUp: L,
      onFocus: x,
      onBlur: v,
      "aria-label": u || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${T}px` }
          }
        ),
        /* @__PURE__ */ a.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function xu({ viewStart: e, viewEnd: t, dateCount: n }) {
  const r = [];
  for (let b = e.getTime(); b <= t.getTime(); b += 864e5)
    r.push(new Date(b));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
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
            children: r.map((b, k) => {
              const m = b.getTime() === o.getTime(), y = i === k;
              return /* @__PURE__ */ a.jsx(
                "div",
                {
                  "data-date-index": k,
                  className: `date-column ${m ? "today" : ""} ${y ? "focused" : ""}`,
                  tabIndex: y ? 0 : -1,
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
function vu({ resource: e, tasks: t, scale: n, onTaskClick: r, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
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
        const T = Math.min(t.length - 1, f + 1);
        d(T), p.current?.querySelector(`[data-task-index="${T}"]`)?.focus();
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
  }, b = (m) => {
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
  }, k = (m) => {
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
            onKeyDown: g,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((m, y) => /* @__PURE__ */ a.jsx(
              bu,
              {
                task: m,
                scale: n,
                onTaskClick: r,
                onTaskDoubleClick: s,
                isSelected: l && f === y,
                taskIndex: y,
                tabIndex: l && f === y ? 0 : -1,
                onFocus: () => k(y)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function Hp({
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
    () => gu().domain([f, d]).range([0, l]),
    [f, d, l]
  ), b = oe(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((y) => {
      const S = m.get(y.resourceId) || [];
      S.push(y), m.set(y.resourceId, S);
    }), m;
  }, [t]), k = (m) => {
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
      onKeyDown: k,
      children: [
        /* @__PURE__ */ a.jsx(xu, { viewStart: f, viewEnd: d, dateCount: p }),
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
              vu,
              {
                resource: m,
                tasks: b.get(m.id) || [],
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
) }), yu = ({
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
      const S = y.slice().reverse().find((T) => T.href && !T.active);
      if (S)
        return { href: S.href, text: S.text };
    }
    return { text: "Home" };
  }, p = f(), g = d(), b = Y(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), m = p && p.length > 1 ? r : void 0;
  return /* @__PURE__ */ a.jsxs(
    "nav",
    {
      className: b,
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
}, ku = yu;
ku.Item = Xt;
Xt.displayName = "BreadcrumbItem";
const Ss = ({
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
  const i = Y("nhsuk-skip-link", n);
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
}, Ap = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: r,
  classes: s,
  attributes: o = {}
}) => {
  const i = Y("nhsuk-pagination", s);
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
}, zp = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: r = {}
}) => {
  const s = Y("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ a.jsx(
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
}, Wp = ({
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
  id: b,
  "aria-label": k,
  "aria-labelledby": m,
  "aria-describedby": y
}) => {
  const S = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d
  ].filter(Boolean).join(" "), T = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), D = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), w = () => {
    if (n)
      return /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const L = () => l && e !== "feature" ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ a.jsx(
      Re,
      {
        level: r,
        className: D,
        children: L()
      }
    );
  }, R = () => p || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-card__description", children: o }) : null), M = () => e !== "primary" ? null : /* @__PURE__ */ a.jsxs(
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
      id: b,
      "aria-label": k,
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
        /* @__PURE__ */ a.jsxs("div", { className: T, children: [
          w(),
          R(),
          M()
        ] })
      ]
    }
  );
}, Op = ({
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
}, Up = ({
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
}, Yp = ({
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
  "aria-describedby": b
}) => {
  const k = [
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
    const T = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], D = /* @__PURE__ */ a.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        T,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ a.jsx(
      Re,
      {
        level: r,
        className: m,
        children: D
      }
    );
  }, S = () => u || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: k,
      "data-testid": f,
      id: d,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-describedby": b,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          y(),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "nhsuk-care-card__content", children: S() })
      ]
    }
  );
}, Su = ({
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
  const f = Y(
    "nhsuk-panel",
    t
  ), d = () => !n && !r && !l ? null : r ? /* @__PURE__ */ a.jsx(
    Re,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ a.jsx(
    Re,
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
}, Vp = ({
  text: e,
  html: t,
  children: n,
  className: r,
  ...s
}) => {
  const o = Y("nhsuk-inset-text", r), i = () => n || (t ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ a.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ a.jsx("div", { className: o, ...s, children: i() });
}, Gp = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...r
}) => {
  const s = Y(
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
}, Kp = ({
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
  "data-testid": b
}) => {
  const k = `nhsuk-table__caption ${r ? `nhsuk-table__caption--${r}` : ""}`.trim(), m = Y(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), y = Y(p), S = (w, R) => {
    const M = Y("nhsuk-table__header", {
      [`nhsuk-table__header--${w.format}`]: w.format
    }, w.classes), L = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...o && { role: "columnheader" },
      ...w.attributes
    };
    return /* @__PURE__ */ a.jsx("th", { className: M, ...L, children: w.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }, R);
  }, T = (w, R, M) => {
    const L = s && M, x = Y(
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
    }, $ = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      o && w.header && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        w.header,
        " "
      ] }),
      w.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text
    ] }), c = L ? "th" : "td";
    return /* @__PURE__ */ a.jsx(c, { className: x, ...v, children: $ }, R);
  }, D = () => /* @__PURE__ */ a.jsxs(
    "table",
    {
      className: m,
      ...o && { role: "table" },
      ...g,
      ...b && { "data-testid": b },
      children: [
        n && /* @__PURE__ */ a.jsx("caption", { className: k, children: n }),
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
              (M, L) => T(M, L, L === 0)
            )
          },
          R
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ a.jsxs(Su, { className: f, children: [
    i && /* @__PURE__ */ a.jsx(Re, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    D()
  ] }) : y ? /* @__PURE__ */ a.jsx("div", { className: y, children: D() }) : D();
}, qp = Qe(({
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
  const b = n !== void 0, [k, m] = ne(() => t || e[0]?.id || ""), y = b ? n : k, S = te(null), T = te(/* @__PURE__ */ new Map()), D = J(($) => {
    b || m($), r?.($);
  }, [b, r]), w = J(($) => {
    s?.($), l && D($);
  }, [s, l, D]), R = J(($, c) => {
    const N = e.filter((P) => !P.disabled).map((P) => P.id), q = N.indexOf(c);
    let C = null;
    switch ($.key) {
      case "ArrowLeft":
        C = q > 0 ? q - 1 : N.length - 1;
        break;
      case "ArrowRight":
        C = q < N.length - 1 ? q + 1 : 0;
        break;
      case "Home":
        C = 0;
        break;
      case "End":
        C = N.length - 1;
        break;
      case "Escape":
        $.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (C !== null) {
      $.preventDefault();
      const P = N[C], h = T.current.get(P);
      h && (h.focus(), w(P));
    }
  }, [e, w, i]), M = J(($, c) => {
    c ? T.current.set($, c) : T.current.delete($);
  }, []), L = J(($) => {
    const c = T.current.get($);
    c && c.focus();
  }, []);
  Ma(g, () => ({
    focusTab: L,
    getActiveTab: () => y,
    getTabListElement: () => S.current
  }), [L, y]);
  const x = J(($) => {
    const c = $.relatedTarget;
    S.current?.contains(c) || o?.();
  }, [o]), v = Y("nhsuk-tabs", u);
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
                onBlur: x,
                children: e.map(($) => {
                  const c = $.id === y, N = $.disabled, q = Y("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": c,
                    "nhsuk-tabs__list-item--disabled": N
                  });
                  return /* @__PURE__ */ a.jsx("li", { className: q, children: /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      ref: (C) => M($.id, C),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": c,
                      "aria-controls": `${$.id}-panel`,
                      id: `${$.id}-tab`,
                      tabIndex: c ? 0 : -1,
                      disabled: N,
                      onClick: () => !N && D($.id),
                      onKeyDown: (C) => !N && R(C, $.id),
                      onFocus: () => !N && w($.id),
                      ...$.attributes,
                      children: $.label
                    }
                  ) }, $.id);
                })
              }
            )
          }
        ),
        e.map(($) => {
          const c = $.id === y;
          return /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${$.id}-tab`,
              id: `${$.id}-panel`,
              hidden: !c,
              children: $.content
            },
            $.id
          );
        })
      ]
    }
  );
}), wu = Qe(
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
wu.displayName = "Details";
const _u = Qe(
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
    ), p = (b) => t === "cross" && !r ? `do not ${b}` : b, g = () => /* @__PURE__ */ a.jsx(
      Re,
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
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ a.jsx("ul", { className: f.join(" "), role: "list", children: n.map((b, k) => /* @__PURE__ */ a.jsxs("li", { children: [
            d(),
            p(b.item)
          ] }, k)) }) })
        ]
      }
    );
  }
);
_u.displayName = "DoDontList";
const Tu = Qe(
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
Tu.displayName = "Expander";
const $u = Qe(
  ({ items: e, idPrefix: t = "task-list", className: n, ...r }, s) => {
    const o = [
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
      return /* @__PURE__ */ a.jsx(
        Cu,
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
), Cu = ({
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
$u.displayName = "TaskList";
const Xp = ({
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
        Ba(
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
}, Zp = ({
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
}, Nu = ({
  title: e,
  value: t,
  subtitle: n,
  variant: r = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const u = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${r}`,
    o
  ].filter(Boolean).join(" "), f = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Re, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ a.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ a.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return s ? /* @__PURE__ */ a.jsx(
    "a",
    {
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: f
    }
  ) : /* @__PURE__ */ a.jsx(
    "div",
    {
      className: u,
      "aria-label": i,
      ...l,
      children: f
    }
  );
}, Jp = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const r = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx("div", { className: r, ...n, children: /* @__PURE__ */ a.jsx(nl, { children: e.map((s, o) => /* @__PURE__ */ a.jsx(
    Pr,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ a.jsx(Nu, { ...s })
    },
    o
  )) }) });
}, ju = de.forwardRef(
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
    bordered: b = !1,
    striped: k = !1,
    responsive: m = !1,
    tableType: y = "default"
  }, S) => {
    const T = te(null), D = te(null), w = te(null);
    de.useImperativeHandle(S, () => T.current, []);
    const [R, M] = ne(0), [L, x] = ne(0), [v, $] = ne("headers"), [c, N] = ne("browse"), q = t.length, C = e.length, P = oe(() => !n || n.length === 0 ? e : [...e].sort((O, Q) => {
      for (const { key: K, direction: _ } of n) {
        const I = O[K], B = Q[K];
        if (I == null && B == null) continue;
        if (I == null) return 1;
        if (B == null) return -1;
        let H = 0;
        if (typeof I == "number" && typeof B == "number" ? H = I - B : H = String(I).localeCompare(String(B)), H !== 0)
          return _ === "asc" ? H : -H;
      }
      return 0;
    }), [e, n]), h = J((O, Q) => {
      setTimeout(() => {
        const K = T.current?.querySelector(
          `tbody tr:nth-child(${O + 1}) td:nth-child(${Q + 1})`
        );
        K && (K.focus(), typeof K.scrollIntoView == "function" && K.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), z = J((O) => {
      setTimeout(() => {
        const Q = T.current?.querySelector(`th:nth-child(${O + 1})`);
        Q && (Q.focus(), typeof Q.scrollIntoView == "function" && Q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), V = J((O) => {
      r?.(O);
    }, [r]), Z = J((O) => {
      o?.(O);
    }, [o]), E = J((O) => {
      const { key: Q } = O;
      switch (Q) {
        case "Enter":
          if (O.preventDefault(), v === "headers" && c === "browse")
            N("navigate"), z(L);
          else if (v === "headers" && c === "navigate") {
            const K = t[L];
            K && V(K.key);
          } else v === "cells" && c === "browse" ? (N("navigate"), h(R, L)) : v === "cells" && c === "navigate" && Z(R);
          break;
        case "Escape":
          O.preventDefault(), (v === "headers" && c === "navigate" || v === "cells" && c === "navigate") && N("browse");
          break;
        case "ArrowLeft":
          if (O.preventDefault(), c === "navigate" || c === "browse" && v === "headers") {
            if (v === "headers") {
              const K = Math.max(0, L - 1);
              x(K), z(K);
            } else if (v === "cells") {
              const K = Math.max(0, L - 1);
              x(K), h(R, K);
            }
          }
          break;
        case "ArrowRight":
          if (O.preventDefault(), c === "navigate" || c === "browse" && v === "headers") {
            if (v === "headers") {
              const K = Math.min(q - 1, L + 1);
              x(K), z(K);
            } else if (v === "cells") {
              const K = Math.min(q - 1, L + 1);
              x(K), h(R, K);
            }
          }
          break;
        case "ArrowUp":
          if (O.preventDefault(), v === "cells") {
            if (c === "browse") {
              const K = Math.max(0, R - 1);
              M(K), h(K, 0), x(0);
            } else if (c === "navigate")
              if (R > 0) {
                const K = R - 1;
                M(K), h(K, L);
              } else
                $("headers"), N("browse"), z(L);
          }
          break;
        case "ArrowDown":
          if (O.preventDefault(), v === "headers" && c === "browse")
            $("cells"), M(0), x(0), h(0, 0);
          else if (v === "cells") {
            const K = C - 1;
            if (c === "browse") {
              const _ = Math.min(K, R + 1);
              M(_), h(_, 0), x(0);
            } else if (c === "navigate" && R < K) {
              const _ = R + 1;
              M(_), h(_, L);
            }
          }
          break;
        case "Home":
          O.preventDefault(), v === "headers" ? (x(0), z(0)) : v === "cells" && (O.ctrlKey ? (M(0), x(0), h(0, 0)) : (x(0), h(R, 0)));
          break;
        case "End":
          if (O.preventDefault(), v === "headers") {
            const K = q - 1;
            x(K), z(K);
          } else if (v === "cells")
            if (O.ctrlKey) {
              const K = C - 1, _ = q - 1;
              M(K), x(_), h(K, _);
            } else {
              const K = q - 1;
              x(K), h(R, K);
            }
          break;
        case " ":
          if (O.preventDefault(), v === "headers" && c === "navigate") {
            const K = t[L];
            K && V(K.key);
          } else v === "cells" && c === "navigate" && Z(R);
          break;
      }
    }, [
      v,
      c,
      L,
      R,
      q,
      C,
      t,
      h,
      z,
      V,
      Z
    ]);
    se(() => {
      const O = T.current;
      if (O)
        return O.addEventListener("keydown", E), () => O.removeEventListener("keydown", E);
    }, [E]);
    const G = Y(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": k,
        "nhsuk-table--compact": y === "compact"
      },
      p
    );
    return /* @__PURE__ */ a.jsxs(
      "table",
      {
        ref: T,
        className: G,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": f,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { ref: D, role: "row", children: t.map((O, Q) => {
            const K = n?.find((B) => B.key === O.key), _ = !!K, I = v === "headers" && L === Q;
            return /* @__PURE__ */ a.jsx(
              "th",
              {
                className: Y("sortable-header", {
                  "sortable-header--focused": I
                }),
                role: "columnheader",
                tabIndex: I ? 0 : -1,
                onClick: () => V(O.key),
                onKeyDown: (B) => {
                  (B.key === "Enter" || B.key === " ") && (B.preventDefault(), V(O.key));
                },
                "aria-sort": _ ? K?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ a.jsx("span", { className: "header-label", children: O.label }),
                  _ && /* @__PURE__ */ a.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ a.jsx("span", { className: "sort-priority", children: n.findIndex((B) => B.key === O.key) + 1 }),
                    /* @__PURE__ */ a.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: K?.direction === "asc" ? /* @__PURE__ */ a.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ a.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              O.key
            );
          }) }) }),
          /* @__PURE__ */ a.jsx("tbody", { ref: w, className: "nhsuk-table__body", role: "rowgroup", children: P.map((O, Q) => {
            const K = s === Q, _ = v === "cells" && R === Q;
            return /* @__PURE__ */ a.jsx(
              "tr",
              {
                role: "row",
                className: Y("data-row", {
                  "data-row--selected": K,
                  "data-row--focused": _
                }),
                "aria-selected": K,
                children: t.map((I, B) => {
                  const H = I.render ? I.render(O) : O[I.key], j = v === "cells" && R === Q && L === B, A = () => typeof H == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                    /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: H ? "✓" : "✗" }),
                    /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: H ? "Yes" : "No" })
                  ] }) : String(H ?? "");
                  return /* @__PURE__ */ a.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: Y("data-cell", {
                        "data-cell--focused": j
                      }),
                      tabIndex: j ? 0 : -1,
                      onClick: () => Z(Q),
                      children: A()
                    },
                    I.key
                  );
                })
              },
              Q
            );
          }) })
        ]
      }
    );
  }
);
ju.displayName = "AriaDataGrid";
const Eu = ({
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
  const p = te(null), g = te(null), b = te(null), k = J((v, $) => {
    u || (g.current = $, v.dataTransfer.effectAllowed = "move", v.dataTransfer.setData("text/plain", $));
  }, [u]), m = J((v, $) => {
    u || g.current === $ || (v.preventDefault(), v.dataTransfer.dropEffect = "move", b.current = $);
  }, [u]), y = J((v, $) => {
    if (u) return;
    v.preventDefault();
    const c = g.current;
    if (!c || c === $) return;
    const N = e.findIndex((C) => C.key === c), q = e.findIndex((C) => C.key === $);
    if (N !== -1 && q !== -1) {
      const C = [...e], [P] = C.splice(N, 1);
      C.splice(q, 0, P), n(C);
    }
    g.current = null, b.current = null;
  }, [u, e, n]), S = J(() => {
    g.current = null, b.current = null;
  }, []), T = J((v) => {
    const $ = t.find((c) => c.key === v);
    return $ ? $.label : v;
  }, [t]), D = J((v) => ["red", "orange", "blue", "aqua-green", "grey"][v] || "grey", []), w = J((v) => {
    if (u) return;
    const $ = e.map(
      (c) => c.key === v ? { ...c, direction: c.direction === "asc" ? "desc" : "asc" } : c
    );
    n($);
  }, [e, n, u]), R = J((v) => {
    if (u) return;
    const $ = e.filter((c) => c.key !== v);
    n($);
  }, [e, n, u]), M = J(() => {
    u || n([]);
  }, [n, u]), L = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const v = e.map(($, c) => {
      const N = $.direction === "asc" ? "ascending" : "descending";
      return `${c + 1}. ${T($.key)} (${N})`;
    });
    if (v.length === 1)
      return `Sorted by: ${v[0]}`;
    if (v.length === 2)
      return `Sorted by: ${v.join(" and ")}`;
    {
      const $ = v.pop();
      return `Sorted by: ${v.join(", ")}, and ${$}`;
    }
  }, x = oe(() => {
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
          "aria-describedby": x,
          children: e.map((v, $) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (c) => k(c, v.key),
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
                  color: D($),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(v.key),
                  disabled: u,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ a.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${$ + 1}`, children: $ + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: T(v.key) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (c) => {
                          c.stopPropagation(), w(v.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${T(v.key)}. Currently ${v.direction === "asc" ? "ascending" : "descending"}`,
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
          onClick: M,
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
function Fu(e, t) {
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
const Pa = Qe(
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
      id: b,
      isLoading: k = !1,
      loadingComponent: m,
      error: y = null,
      errorComponent: S,
      "data-testid": T
    } = t, {
      dataComparator: D = (_, I) => JSON.stringify(_) === JSON.stringify(I),
      filterFunction: w = (_) => _,
      booleanRenderer: R = (_) => _ ? "✓" : "✗"
    } = r || {}, M = o !== void 0, L = o ?? 0, [x, v] = ne({
      focusArea: "tabs",
      focusedTabIndex: L,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), $ = oe(() => ({
      selectedIndex: L,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [L]), [c, N] = xo(Fu, $);
    se(() => {
      const _ = c.tabLoadingStates.length, I = s.length;
      _ !== I && N({ type: "ADJUST_ARRAYS", payload: { newLength: I } });
    }, [s.length]), se(() => {
      M && N({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, M]), se(() => {
      l && l(c.globalSelectedRowData);
    }, [c.globalSelectedRowData, l]);
    const q = J((_, I) => D(_, I), [D]), C = J((_) => {
      _ >= 0 && _ < s.length && !s[_].disabled && (N({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
    }, [s, i]), P = J((_, I) => {
      const { key: B } = _;
      switch (B) {
        case "ArrowLeft":
          _.preventDefault();
          const H = I > 0 ? I - 1 : s.length - 1;
          C(H), v((W) => ({ ...W, focusedTabIndex: H })), h.current[H]?.focus();
          break;
        case "ArrowRight":
          _.preventDefault();
          const j = I < s.length - 1 ? I + 1 : 0;
          C(j), v((W) => ({ ...W, focusedTabIndex: j })), h.current[j]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), v((W) => ({
            ...W,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Z(0);
          break;
        case "Home":
          _.preventDefault(), C(0), v((W) => ({ ...W, focusedTabIndex: 0 })), h.current[0]?.focus();
          break;
        case "End":
          _.preventDefault();
          const A = s.length - 1;
          C(A), v((W) => ({ ...W, focusedTabIndex: A })), h.current[A]?.focus();
          break;
        case "Enter":
        case " ":
          _.preventDefault(), C(I);
          break;
      }
    }, [s.length, C]), h = te([]), z = te([]), V = J((_, I) => {
      const B = c.sortConfig || [], H = B.find((W) => W.key === I);
      let j;
      H ? H.direction === "asc" ? j = B.map(
        (W) => W.key === I ? { ...W, direction: "desc" } : W
      ) : j = B.filter((W) => W.key !== I) : j = [...B, { key: I, direction: "asc" }], N({
        type: "SET_SORT",
        payload: j
      }), s[_].onSort?.(I);
    }, [c.sortConfig, s]), Z = J((_) => {
      setTimeout(() => {
        const I = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] th:nth-child(${_ + 1})`
        );
        I && I.focus();
      }, 0);
    }, [c.selectedIndex]), E = J((_) => R(_), [R]), G = J((_, I) => {
      setTimeout(() => {
        const B = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] tbody tr:nth-child(${_ + 1}) td:nth-child(${I + 1})`
        );
        B && B.focus();
      }, 0);
    }, [c.selectedIndex]), O = J((_, I) => {
      const { key: B } = _, H = s[c.selectedIndex], j = H?.columns.length || 0;
      switch (B) {
        case "ArrowLeft":
          _.preventDefault();
          const A = Math.max(0, I - 1);
          v((X) => ({ ...X, focusedHeaderIndex: A })), Z(A);
          break;
        case "ArrowRight":
          _.preventDefault();
          const W = Math.min(j - 1, I + 1);
          v((X) => ({ ...X, focusedHeaderIndex: W })), Z(W);
          break;
        case "ArrowUp":
          _.preventDefault(), v((X) => ({
            ...X,
            focusArea: "tabs",
            focusedTabIndex: c.selectedIndex
          })), h.current[c.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), v((X) => ({
            ...X,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: I,
            isGridActive: !0
          })), G(0, I);
          break;
        case "Home":
          _.preventDefault(), v((X) => ({ ...X, focusedHeaderIndex: 0 })), Z(0);
          break;
        case "End":
          _.preventDefault();
          const F = j - 1;
          v((X) => ({ ...X, focusedHeaderIndex: F })), Z(F);
          break;
        case "Enter":
        case " ":
          _.preventDefault();
          const re = H?.columns[I]?.key;
          re && V(c.selectedIndex, re);
          break;
      }
    }, [s, c.selectedIndex, V, v, Z, G, h]), Q = J((_, I, B) => {
      const { key: H } = _, j = s[c.selectedIndex], A = j?.data.length || 0, W = j?.columns.length || 0;
      switch (H) {
        case "ArrowUp":
          if (_.preventDefault(), I === 0)
            v((U) => ({
              ...U,
              focusArea: "headers",
              focusedHeaderIndex: B,
              isGridActive: !1
            })), Z(B);
          else {
            const U = I - 1;
            v((ee) => ({ ...ee, focusedRowIndex: U })), G(U, B);
          }
          break;
        case "ArrowDown":
          _.preventDefault();
          const F = Math.min(A - 1, I + 1);
          v((U) => ({ ...U, focusedRowIndex: F })), G(F, B);
          break;
        case "ArrowLeft":
          _.preventDefault();
          const re = Math.max(0, B - 1);
          v((U) => ({ ...U, focusedColumnIndex: re })), G(I, re);
          break;
        case "ArrowRight":
          _.preventDefault();
          const X = Math.min(W - 1, B + 1);
          v((U) => ({ ...U, focusedColumnIndex: X })), G(I, X);
          break;
        case "Home":
          _.preventDefault(), _.ctrlKey ? (v((U) => ({ ...U, focusedRowIndex: 0, focusedColumnIndex: 0 })), G(0, 0)) : (v((U) => ({ ...U, focusedColumnIndex: 0 })), G(I, 0));
          break;
        case "End":
          if (_.preventDefault(), _.ctrlKey) {
            const U = A - 1, ee = W - 1;
            v((le) => ({ ...le, focusedRowIndex: U, focusedColumnIndex: ee })), G(U, ee);
          } else {
            const U = W - 1;
            v((ee) => ({ ...ee, focusedColumnIndex: U })), G(I, U);
          }
          break;
        case "Enter":
        case " ":
          if (_.preventDefault(), j && j.data[I]) {
            const U = j.data.some((ue) => "ews_data" in ue) ? w(j.data, c.filters) : j.data, ee = c.sortConfig;
            let le = U;
            if (ee && ee.length > 0 && (le = [...U].sort((ue, ge) => {
              for (const { key: me, direction: nt } of ee) {
                let We = ue[me], Se = ge[me];
                const rt = j.columns.find((go) => go.key === me);
                if (rt?.render && (We = rt.render(ue), Se = rt.render(ge)), We == null && Se == null) continue;
                if (We == null) return nt === "asc" ? -1 : 1;
                if (Se == null) return nt === "asc" ? 1 : -1;
                let mt = 0;
                if (typeof We == "number" && typeof Se == "number" ? mt = We - Se : mt = String(We).localeCompare(String(Se), void 0, { numeric: !0, sensitivity: "base" }), mt !== 0)
                  return nt === "asc" ? mt : -mt;
              }
              return 0;
            })), le[I]) {
              const ue = le[I], me = c.globalSelectedRowData && q(c.globalSelectedRowData, ue) ? null : ue;
              N({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: me
              });
            }
          }
          break;
      }
    }, [s, c.selectedIndex, c.filters, c.sortConfig, w, q, N, v, Z, G]), K = J((_, I) => w(_, I), [w]);
    return Ma(n, () => ({
      selectTab: (_) => {
        _ >= 0 && _ < s.length && (N({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
      },
      refreshData: (_) => {
        console.log("Refreshing data for tab:", _ ?? "all");
      },
      exportData: (_) => {
        const I = _ ?? c.selectedIndex, B = s[I];
        return B ? B.data : [];
      },
      getSelectedRows: (_) => c.globalSelectedRowData ? [] : [],
      clearSelection: (_) => {
        N({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (_) => {
        N({ type: "SET_FILTERS", payload: _ });
      }
    }), [c.selectedIndex, c.selectedRows, s, i]), k ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": T, children: m || /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : y ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": T, children: S || /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ a.jsx("p", { children: y })
    ] }) }) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${d}`,
        id: b,
        "data-testid": T,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${b}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ a.jsx(
            Eu,
            {
              sortConfig: c.sortConfig || [],
              columns: s.flatMap(
                (_) => _.columns.map((I) => ({ key: I.key, label: I.label }))
              ).filter(
                (_, I, B) => B.findIndex((H) => H.key === _.key) === I
                // Remove duplicates
              ),
              onSortChange: (_) => {
                N({ type: "SET_SORT", payload: _ });
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
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((_, I) => {
                const B = I === c.selectedIndex, H = _.disabled || p;
                return /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${_.id}`,
                    "aria-controls": `panel-${_.id}`,
                    "aria-selected": B,
                    "aria-disabled": H,
                    tabIndex: B ? 0 : -1,
                    ref: (j) => {
                      h.current[I] = j;
                    },
                    onClick: () => C(I),
                    onKeyDown: (j) => P(j, I),
                    disabled: H,
                    className: `
                  aria-tabs-datagrid__tab
                  ${B ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${H ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: _.label }),
                      c.tabLoadingStates[I] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      c.tabErrors[I] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  _.id
                );
              })
            }
          ),
          s.map((_, I) => {
            const B = I === c.selectedIndex;
            return /* @__PURE__ */ a.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${_.id}`,
                "aria-labelledby": `tab-${_.id}`,
                tabIndex: 0,
                hidden: !B,
                ref: (H) => {
                  z.current[I] = H;
                },
                className: `aria-tabs-datagrid__panel ${_.className || ""}`,
                "data-tab-panel": I,
                children: B && (() => {
                  const H = _.data.some((A) => "ews_data" in A) ? K(_.data, c.filters) : _.data, j = oe(() => {
                    const A = c.sortConfig;
                    return !A || A.length === 0 ? H : [...H].sort((W, F) => {
                      for (const { key: re, direction: X } of A) {
                        let U = W[re], ee = F[re];
                        const le = _.columns.find((ge) => ge.key === re);
                        if (le?.render && (U = le.render(W), ee = le.render(F)), U == null && ee == null) continue;
                        if (U == null) return 1;
                        if (ee == null) return -1;
                        let ue = 0;
                        if (typeof U == "number" && typeof ee == "number" ? ue = U - ee : typeof U == "boolean" && typeof ee == "boolean" ? ue = U === ee ? 0 : U ? 1 : -1 : ue = String(U).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ue !== 0)
                          return X === "asc" ? ue : -ue;
                      }
                      return 0;
                    });
                  }, [H, c.sortConfig, _.columns]);
                  return /* @__PURE__ */ a.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": _.ariaLabel,
                      "aria-describedby": _.ariaDescription,
                      children: [
                        /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { role: "row", children: _.columns.map((A, W) => {
                          const F = c.sortConfig?.find((U) => U.key === A.key), re = !!F, X = x.focusArea === "headers" && x.focusedHeaderIndex === W;
                          return /* @__PURE__ */ a.jsx(
                            "th",
                            {
                              className: `sortable-header ${X ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: X ? 0 : -1,
                              onClick: () => V(I, A.key),
                              onKeyDown: (U) => O(U, W),
                              "aria-sort": re ? F?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ a.jsx("span", { className: "header-label", children: A.label }),
                                /* @__PURE__ */ a.jsxs("div", { className: `sort-indicator-container ${re ? `sort-indicator--${F?.direction}` : ""}`, children: [
                                  c.sortConfig && c.sortConfig.length > 0 && c.sortConfig.findIndex((U) => U.key === A.key) !== -1 && /* @__PURE__ */ a.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${c.sortConfig.findIndex((U) => U.key === A.key) + 1}`,
                                      "data-priority": c.sortConfig.findIndex((U) => U.key === A.key) + 1,
                                      title: `Sort priority: ${c.sortConfig.findIndex((U) => U.key === A.key) + 1}`,
                                      children: c.sortConfig.findIndex((U) => U.key === A.key) + 1
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
                            A.key
                          );
                        }) }) }),
                        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: j.map((A, W) => {
                          const F = c.globalSelectedRowData && q(c.globalSelectedRowData, A), re = x.focusArea === "cells" && x.focusedRowIndex === W;
                          return /* @__PURE__ */ a.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${F ? "data-row--selected" : ""} ${re ? "data-row--focused" : ""}`,
                              "aria-selected": F,
                              children: _.columns.map((X, U) => {
                                const ee = X.render ? X.render(A) : A[X.key], le = x.focusArea === "cells" && x.focusedRowIndex === W && x.focusedColumnIndex === U, ue = () => typeof ee == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                                  E(ee),
                                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ a.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${le ? "data-cell--focused" : ""}`,
                                    tabIndex: le ? 0 : -1,
                                    onClick: () => {
                                      const me = c.globalSelectedRowData && q(c.globalSelectedRowData, A) ? null : A;
                                      N({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: me
                                      });
                                    },
                                    onKeyDown: (ge) => Q(ge, W, U),
                                    children: ue()
                                  },
                                  X.key
                                );
                              })
                            },
                            W
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
function Du(e, t) {
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
const Qp = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: r = {},
  ...s
}) => {
  const o = Du(e, t), {
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
          Pu,
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
  ] }) : o === "hybrid" ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${s.className || ""}`, children: /* @__PURE__ */ a.jsx(Pa, { ...s, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ a.jsx(Pa, { ...s });
}, Pu = ({
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
}, Bu = (e) => [...e].sort((t, n) => t.priority - n.priority);
function zn(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Mu(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Lu(e, t) {
  const n = t.find((r) => r.id === e);
  return n ? n.priority > 0 : !1;
}
function Iu(e, t) {
  const n = t.find((s) => s.id === e), r = Mu(t);
  return n ? n.priority < r : !1;
}
const em = ({
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
  const d = oe(() => Bu(e), [e]), p = J((T) => {
    if (l) return;
    const D = e.map(
      (w) => w.id === T ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    t(D);
  }, [e, t, l]), g = J((T) => {
    if (l) return;
    const D = e.findIndex((R) => R.id === T);
    if (D <= 0) return;
    const w = [...e];
    [w[D], w[D - 1]] = [w[D - 1], w[D]], t(zn(w));
  }, [e, t, l]), b = J((T) => {
    if (l) return;
    const D = e.findIndex((R) => R.id === T);
    if (D >= e.length - 1 || D === -1) return;
    const w = [...e];
    [w[D], w[D + 1]] = [w[D + 1], w[D]], t(zn(w));
  }, [e, t, l]), k = J((T) => {
    if (l) return;
    const D = e.filter((w) => w.id !== T);
    t(zn(D));
  }, [e, t, l]), m = J(() => {
    l || t([]);
  }, [t, l]), y = () => {
    if (e.length === 0)
      return r;
    if (s)
      return s;
    const T = d.map((D, w) => {
      const R = D.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${D.label} (${R})`;
    });
    if (T.length === 1)
      return `Sorted by: ${T[0]}`;
    if (T.length === 2)
      return `Sorted by: ${T.join(" and ")}`;
    {
      const D = T.pop();
      return `Sorted by: ${T.join(", ")}, and ${D}`;
    }
  }, S = oe(() => {
    const T = ["sort-description"];
    return i && T.push("sort-help"), f && T.push(f), T.join(" ");
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
          d.map((T) => /* @__PURE__ */ a.jsx(
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
                  onClose: () => k(T.id),
                  disabled: l,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-priority", children: T.priority + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: T.label }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => p(T.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${T.label}. Currently ${T.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: T.direction === "asc" ? It.asc : It.desc
                      }
                    ),
                    /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(T.id),
                          disabled: l || !Lu(T.id, e),
                          "aria-label": `Move ${T.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => b(T.id),
                          disabled: l || !Iu(T.id, e),
                          "aria-label": `Move ${T.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            T.id
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
}, ws = (e) => /* @__PURE__ */ a.jsx(ss, { ...e }), tm = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: r = "two-thirds",
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: u,
  navigation: f,
  search: d,
  account: p,
  organisation: g,
  logo: b,
  className: k,
  ...m
}) => {
  const y = {
    service: u,
    navigation: f,
    search: d,
    account: p,
    organisation: g,
    logo: b,
    ...i
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Ss, { ...o }),
    /* @__PURE__ */ a.jsx(cs, { ...y }),
    /* @__PURE__ */ a.jsx(ws, { className: k, ...m, children: /* @__PURE__ */ a.jsx(os, { size: s, children: /* @__PURE__ */ a.jsx(Dr, { children: /* @__PURE__ */ a.jsxs(Pr, { width: r, children: [
      t && /* @__PURE__ */ a.jsx(Re, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ a.jsx(us, { ...l })
  ] });
}, nm = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: r = "two-thirds",
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: u,
  serviceName: f,
  serviceHref: d,
  logo: p,
  className: g,
  ...b
}) => {
  const k = {
    service: {
      text: f,
      href: d
    },
    logo: p,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(Ss, { ...o }),
    /* @__PURE__ */ a.jsx(cs, { ...k }),
    /* @__PURE__ */ a.jsxs(ws, { className: g, ...b, children: [
      u && /* @__PURE__ */ a.jsx(Qi, { ...u }),
      /* @__PURE__ */ a.jsx(os, { size: s, children: /* @__PURE__ */ a.jsx(Dr, { children: /* @__PURE__ */ a.jsxs(Pr, { width: r, children: [
        t && /* @__PURE__ */ a.jsx(Re, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(us, { ...l })
  ] });
}, Ru = "150ms", Hu = "300ms", Au = "500ms", zu = "cubic-bezier(0.4, 0, 1, 1)", Wu = "cubic-bezier(0, 0, 0.2, 1)", Ou = "cubic-bezier(0.4, 0, 0.2, 1)", Uu = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Yu = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Vu = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Gu = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ku = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", qu = "1px", Xu = "2px", Zu = "4px", Ju = "4px", Qu = "4px", ed = "2px", td = "1px", nd = "0px", rd = "4px", ad = "8px", sd = "12px", _s = "#d8dde0", Ts = "#4c6272", $s = "#d8dde0", Cs = "#aeb7bd", Ns = "#d5281b", js = "#005eb8", Es = "#ffffff", Fs = "#212b32", Ds = "#007f3b", Ps = "#330072", Bs = "#7c2855", Ms = "#d5281b", Ls = "#ffeb3b", Is = "#fff9c4", Rs = "#ffb81c", Hs = "#ed8b00", As = "#00a499", zs = "#ae2573", Ws = "#4c6272", Os = "#768692", Us = "#aeb7bd", Ys = "#d8dde0", Vs = "#f0f4f5", od = "#212b32", id = "#4c6272", ld = "#ffffff", cd = "#212b32", ud = "#005eb8", dd = "#7c2855", fd = "#003087", hd = "#330072", pd = "#ffeb3b", md = "#212b32", gd = "#d8dde0", bd = "#ffffff33", xd = "#d5281b", vd = "#4c6272", yd = "#ffffff", kd = "#007f3b", Sd = "#ffffff", wd = "#006530", _d = "#004021", Td = "#004021", $d = "#00000000", Cd = "#ffffff", Nd = "#005eb8", jd = "#005eb8", Ed = "#d9e5f2", Fd = "#c7daf0", Dd = "#005eb8", Pd = "#ffffff", Bd = "#212b32", Md = "#d9dde0", Ld = "#b3bcc2", Id = "#b3bcc2", Rd = "#d5281b", Hd = "#aa2016", Ad = "#6a140e", zd = "#6a140e", Wd = "#005eb8", Od = "#004b93", Ud = "#002f5c", Yd = "#002f5c", Vd = "8px", Gd = "16px", Kd = "12px", qd = "16px", Xd = "4px", Zd = "40px", Jd = "4px", Qd = "40px", ef = "12px", tf = "16px", nf = "32px", rf = "16px", af = "20px", sf = "28px", of = "9px", lf = "2px", cf = "16px", uf = "24px", df = "8px", ff = "24px", hf = "16px", pf = "4px", mf = "4px", gf = "4px", bf = "8px", xf = "4px", vf = "16px", yf = "#007f3b", kf = "#006530", Sf = "#004021", wf = "#d8dde0", _f = "#ffffff", Tf = "#768692", $f = "#00000000", Cf = "#ffeb3b", Nf = "#00000000", jf = "#ffffff", Ef = "#d9e5f2", Ff = "#c7daf0", Df = "#005eb8", Pf = "#005eb8", Gs = "8px", Ks = "16px", qs = "12px", Xs = "16px", Bf = "2px", Mf = "4px", Lf = "4px", If = "600", Rf = "#ffffff", Hf = "#d8dde0", Af = "#aeb7bd", zf = "#f0f4f5", Wf = "#212b32", Of = "#212b32", Uf = "#005eb8", Zs = "16px", Js = "32px", Qs = "16px", Yf = "1px", Vf = "4px", Gf = "none", Kf = "0 2px 4px rgba(0, 0, 0, 0.1)", qf = "#ffffff", Xf = "#ffffff", Zf = "#d8dde0", Jf = "#ffffff", Qf = "#4c6272", eh = "#ffeb3b", th = "#d5281b", nh = "#aeb7bd", rh = "#212b32", ah = "#4c6272", sh = "#768692", oh = "#212b32", ih = "#ffffff", lh = "600", ch = "#d5281b", uh = "600", dh = "#4c6272", eo = "4px", to = "40px", no = "40px", ro = "12px", fh = "2px", hh = "4px", ph = "0px", mh = "16px", gh = "18px", bh = "24px", xh = "32px", vh = "34px", yh = "32px", kh = "40px", Sh = "48px", wh = "5.4ex", _h = "7.2ex", Th = "9ex", $h = "10.8ex", Ch = "20ex", Nh = "38ex", jh = "56ex", Eh = "44px", Fh = "40px", Dh = "1020px", Ph = "100%", Bh = "50%", Mh = "33.333%", Lh = "25%", Ih = "20%", Rh = "320px", Hh = "641px", Ah = "1025px", zh = "1280px", Wh = "960px", Oh = "32px", Uh = "16px", Yh = "#d5281b", Vh = "#d5281b", Gh = "#ffffff", Kh = "#007f3b", qh = "#007f3b", Xh = "#ffffff", Zh = "#ffeb3b", Jh = "#ffeb3b", Qh = "#212b32", ep = "#005eb8", tp = "#005eb8", np = "#ffffff", rp = "#d8dde0", ap = "#aeb7bd", sp = "#768692", op = "0 4px 0 #004021", ip = "0 4px 0 #005eb8", lp = "0 4px 0 #6a140e", cp = "0 4px 0 #ffeb3b", up = "none", dp = "0 2px 4px rgba(0, 0, 0, 0.1)", fp = "4px", hp = "0px", pp = "solid", mp = "0 0 0 3px #ffeb3b", gp = "0 0 0 3px #ffeb3b", bp = "none", xp = "0 1px 3px rgba(0, 0, 0, 0.12)", vp = "0 2px 6px rgba(0, 0, 0, 0.16)", yp = "0 4px 12px rgba(0, 0, 0, 0.20)", ao = "0", so = "4px", oo = "8px", io = "16px", lo = "24px", co = "32px", uo = "40px", fo = "48px", ho = "56px", po = "64px", Jn = "0", Qn = "0", er = "4px", tr = "4px", nr = "8px", rr = "8px", ar = "8px", sr = "16px", or = "16px", ir = "24px", lr = "24px", cr = "32px", ur = "32px", dr = "40px", fr = "40px", hr = "48px", pr = "48px", mr = "56px", gr = "56px", br = "64px", Zt = "Frutiger W01", Jt = "Arial, Helvetica, sans-serif", Qt = "sans-serif", en = "400", tn = "600", nn = "400", rn = "12px", an = "14px", sn = "12pt", on = "14px", ln = "16px", cn = "12pt", un = "16px", dn = "19px", fn = "13pt", hn = "19px", pn = "22px", mn = "15pt", gn = "22px", bn = "26px", xn = "17pt", vn = "27px", yn = "36px", kn = "20pt", Sn = "33px", wn = "48px", _n = "24pt", xr = "16px", vr = "24px", $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ne = {
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
}, Ee = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, De = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Pe = {
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
}, Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, kp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Ru,
  AnimationDurationNormal: Hu,
  AnimationDurationSlow: Au,
  AnimationEasingBounce: Uu,
  AnimationEasingEaseIn: zu,
  AnimationEasingEaseInOut: Ou,
  AnimationEasingEaseOut: Wu,
  BorderColorCard: $s,
  BorderColorCardHover: Cs,
  BorderColorDefault: _s,
  BorderColorError: Ns,
  BorderColorForm: Ts,
  BorderRadiusLarge: sd,
  BorderRadiusMedium: ad,
  BorderRadiusNone: nd,
  BorderRadiusSmall: rd,
  BorderWidthCardBottom: Ju,
  BorderWidthDefault: qu,
  BorderWidthFormElement: Xu,
  BorderWidthFormElementError: Zu,
  BorderWidthPanel: Qu,
  BorderWidthTableCell: td,
  BorderWidthTableHeader: ed,
  BreakpointDesktop: Ah,
  BreakpointLargeDesktop: zh,
  BreakpointMobile: Rh,
  BreakpointTablet: Hh,
  ButtonBorderRadius: Mf,
  ButtonBorderWidth: Bf,
  ButtonPrimaryBackgroundActive: Sf,
  ButtonPrimaryBackgroundDefault: yf,
  ButtonPrimaryBackgroundDisabled: wf,
  ButtonPrimaryBackgroundHover: kf,
  ButtonPrimaryBorderDefault: $f,
  ButtonPrimaryBorderFocus: Cf,
  ButtonPrimaryTextDefault: _f,
  ButtonPrimaryTextDisabled: Tf,
  ButtonSecondaryBackgroundActive: Ff,
  ButtonSecondaryBackgroundDefault: Nf,
  ButtonSecondaryBackgroundHover: Ef,
  ButtonSecondaryBackgroundSolid: jf,
  ButtonSecondaryBorderDefault: Pf,
  ButtonSecondaryTextDefault: Df,
  ButtonShadowSize: Lf,
  ButtonSpacingPaddingHorizontalDesktop: Xs,
  ButtonSpacingPaddingHorizontalMobile: Ks,
  ButtonSpacingPaddingVerticalDesktop: qs,
  ButtonSpacingPaddingVerticalMobile: Gs,
  ButtonTypographyWeight: If,
  CardBackgroundDefault: Rf,
  CardBorderBottom: zf,
  CardBorderDefault: Hf,
  CardBorderHover: Af,
  CardBorderWidthBottom: Vf,
  CardBorderWidthDefault: Yf,
  CardShadowDefault: Gf,
  CardShadowHover: Kf,
  CardSpacingHeadingMargin: Qs,
  CardSpacingPaddingDesktop: Js,
  CardSpacingPaddingMobile: Zs,
  CardTextDescription: Of,
  CardTextHeading: Wf,
  CardTextLink: Uf,
  ColorBorderDefault: gd,
  ColorBorderSecondary: bd,
  ColorButtonLoginActive: Ud,
  ColorButtonLoginBackground: Wd,
  ColorButtonLoginHover: Od,
  ColorButtonLoginShadow: Yd,
  ColorButtonPrimaryActive: _d,
  ColorButtonPrimaryBackground: kd,
  ColorButtonPrimaryHover: wd,
  ColorButtonPrimaryShadow: Td,
  ColorButtonPrimaryText: Sd,
  ColorButtonReverseActive: Ld,
  ColorButtonReverseBackground: Pd,
  ColorButtonReverseHover: Md,
  ColorButtonReverseShadow: Id,
  ColorButtonReverseText: Bd,
  ColorButtonSecondaryActive: Fd,
  ColorButtonSecondaryBackground: $d,
  ColorButtonSecondaryBackgroundSolid: Cd,
  ColorButtonSecondaryBorder: Nd,
  ColorButtonSecondaryHover: Ed,
  ColorButtonSecondaryShadow: Dd,
  ColorButtonSecondaryText: jd,
  ColorButtonWarningActive: Ad,
  ColorButtonWarningBackground: Rd,
  ColorButtonWarningHover: Hd,
  ColorButtonWarningShadow: zd,
  ColorError: xd,
  ColorFocusBackground: pd,
  ColorFocusText: md,
  ColorFormBackground: yd,
  ColorFormBorder: vd,
  ColorGrey1: Ws,
  ColorGrey2: Os,
  ColorGrey3: Us,
  ColorGrey4: Ys,
  ColorGrey5: Vs,
  ColorLinkActive: fd,
  ColorLinkDefault: ud,
  ColorLinkHover: dd,
  ColorLinkVisited: hd,
  ColorPrimaryBlack: Fs,
  ColorPrimaryBlue: js,
  ColorPrimaryDarkPink: Bs,
  ColorPrimaryGreen: Ds,
  ColorPrimaryPurple: Ps,
  ColorPrimaryRed: Ms,
  ColorPrimaryWhite: Es,
  ColorPrimaryYellow: Ls,
  ColorSecondaryAquaGreen: As,
  ColorSecondaryOrange: Hs,
  ColorSecondaryPaleYellow: Is,
  ColorSecondaryPink: zs,
  ColorSecondaryWarmYellow: Rs,
  ColorTextPrimary: od,
  ColorTextPrint: cd,
  ColorTextReverse: ld,
  ColorTextSecondary: id,
  ComponentBlur: mf,
  ComponentBreadcrumbChevronMarginLeft: of,
  ComponentBreadcrumbChevronMarginRight: lf,
  ComponentBreadcrumbPaddingTopDesktop: uf,
  ComponentBreadcrumbPaddingTopMobile: cf,
  ComponentButtonPaddingDesktopHorizontal: qd,
  ComponentButtonPaddingDesktopVertical: Kd,
  ComponentButtonPaddingMobileHorizontal: Gd,
  ComponentButtonPaddingMobileVertical: Vd,
  ComponentButtonShadowSize: Xd,
  ComponentCardHeadingMargin: rf,
  ComponentCardPaddingDesktop: nf,
  ComponentCardPaddingMobile: tf,
  ComponentDetails: bf,
  ComponentExpander: xf,
  ComponentFormCheckboxLabelPadding: ef,
  ComponentFormCheckboxSize: Qd,
  ComponentFormInputMinHeight: Zd,
  ComponentFormInputPadding: Jd,
  ComponentLink: gf,
  ComponentPagination: vf,
  ComponentPanelPaddingDesktop: sf,
  ComponentPanelPaddingMobile: af,
  ComponentSpread: pf,
  ComponentSummaryListCellPaddingHorizontal: ff,
  ComponentSummaryListCellPaddingVertical: df,
  ComponentSummaryListRowMargin: hf,
  ElevationHigh: yp,
  ElevationLow: xp,
  ElevationMedium: vp,
  ElevationNone: bp,
  FocusOutlineOffset: hp,
  FocusOutlineStyle: pp,
  FocusOutlineWidth: fp,
  FocusShadowButton: gp,
  FocusShadowInput: mp,
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
  FormBorderRadius: ph,
  FormBorderWidthDefault: fh,
  FormBorderWidthError: hh,
  FormErrorTextDefault: ch,
  FormErrorTypographyWeight: uh,
  FormHintTextDefault: dh,
  FormInputBackgroundDefault: qf,
  FormInputBackgroundDisabled: Zf,
  FormInputBackgroundError: Jf,
  FormInputBackgroundFocus: Xf,
  FormInputBorderDefault: Qf,
  FormInputBorderDisabled: nh,
  FormInputBorderError: th,
  FormInputBorderFocus: eh,
  FormInputTextDefault: rh,
  FormInputTextDisabled: sh,
  FormInputTextPlaceholder: ah,
  FormLabelTextDefault: oh,
  FormLabelTextRequired: ih,
  FormLabelTypographyWeight: lh,
  FormSpacingCheckboxLabelPadding: ro,
  FormSpacingCheckboxSize: no,
  FormSpacingInputMinHeight: to,
  FormSpacingInputPadding: eo,
  GridGutter: Oh,
  GridGutterHalf: Uh,
  GridPageWidth: Wh,
  HeadingsNhsukHeadingL: Ce,
  HeadingsNhsukHeadingM: Ne,
  HeadingsNhsukHeadingS: je,
  HeadingsNhsukHeadingXl: $e,
  HeadingsNhsukHeadingXs: Ee,
  LayoutColumnActions: Ih,
  LayoutColumnFull: Ph,
  LayoutColumnHalf: Bh,
  LayoutColumnQuarter: Lh,
  LayoutColumnThird: Mh,
  LayoutContainerMaxWidth: Dh,
  ParagraphsBody: Fe,
  ParagraphsBodyLarge: De,
  ParagraphsBodySmall: Pe,
  ParagraphsLedeText: Be,
  ParagraphsLedeTextSmall: Me,
  ShadowButtonDefault: op,
  ShadowButtonFocus: cp,
  ShadowButtonSecondary: ip,
  ShadowButtonWarning: lp,
  ShadowCardDefault: up,
  ShadowCardHover: dp,
  SizeButtonMinHeightDesktop: Fh,
  SizeButtonMinHeightMobile: Eh,
  SizeFormControlLarge: Sh,
  SizeFormControlMedium: kh,
  SizeFormControlSmall: yh,
  SizeFormInputWidth2xl: Nh,
  SizeFormInputWidth3xl: jh,
  SizeFormInputWidthLg: $h,
  SizeFormInputWidthMd: Th,
  SizeFormInputWidthSm: _h,
  SizeFormInputWidthXl: Ch,
  SizeFormInputWidthXs: wh,
  SizeIconExtraLarge: xh,
  SizeIconLarge: bh,
  SizeIconMedium: gh,
  SizeIconNhsDefault: vh,
  SizeIconSmall: mh,
  Spacing0: ao,
  Spacing1: so,
  Spacing2: oo,
  Spacing3: io,
  Spacing4: lo,
  Spacing5: co,
  Spacing6: uo,
  Spacing7: fo,
  Spacing8: ho,
  Spacing9: po,
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
  StateDisabledBackground: rp,
  StateDisabledBorder: ap,
  StateDisabledText: sp,
  StateErrorBackground: Yh,
  StateErrorBorder: Vh,
  StateErrorText: Gh,
  StateInfoBackground: ep,
  StateInfoBorder: tp,
  StateInfoText: np,
  StateSuccessBackground: Kh,
  StateSuccessBorder: qh,
  StateSuccessText: Xh,
  StateWarningBackground: Zh,
  StateWarningBorder: Jh,
  StateWarningText: Qh,
  TransitionButtonDefault: Yu,
  TransitionButtonShadow: Vu,
  TransitionCardHover: Ku,
  TransitionInputFocus: Gu
}, Symbol.toStringTag, { value: "Module" })), rm = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), am = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: $e.fontFamily,
      fontWeight: $e.fontWeight,
      fontSize: $e.fontSize.mobile,
      lineHeight: $e.lineHeight,
      marginTop: $e.marginTop,
      marginBottom: $e.marginBottom.mobile,
      ...n
    },
    children: e
  }
), sm = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h2",
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
), om = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h3",
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
), im = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
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
), lm = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "h5",
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
), cm = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ a.jsx(
  "p",
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
), um = ({
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
), dm = ({
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
), fm = ({
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
), hm = ({
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
), pm = () => oe(() => kp, []), mm = () => oe(() => ({
  // Border colors
  BorderColorDefault: _s,
  BorderColorForm: Ts,
  BorderColorCard: $s,
  BorderColorCardHover: Cs,
  BorderColorError: Ns,
  // Primary colors
  ColorPrimaryBlue: js,
  ColorPrimaryWhite: Es,
  ColorPrimaryBlack: Fs,
  ColorPrimaryGreen: Ds,
  ColorPrimaryPurple: Ps,
  ColorPrimaryDarkPink: Bs,
  ColorPrimaryRed: Ms,
  ColorPrimaryYellow: Ls,
  // Secondary colors
  ColorSecondaryPaleYellow: Is,
  ColorSecondaryWarmYellow: Rs,
  ColorSecondaryOrange: Hs,
  ColorSecondaryAquaGreen: As,
  ColorSecondaryPink: zs,
  // Grey scale
  ColorGrey1: Ws,
  ColorGrey2: Os,
  ColorGrey3: Us,
  ColorGrey4: Ys,
  ColorGrey5: Vs
}), []), gm = () => oe(() => ({
  Spacing0: ao,
  Spacing1: so,
  Spacing2: oo,
  Spacing3: io,
  Spacing4: lo,
  Spacing5: co,
  Spacing6: uo,
  Spacing7: fo,
  Spacing8: ho,
  Spacing9: po
}), []), bm = () => oe(() => ({
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
}), []), xm = () => oe(() => ({
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
}), []), vm = () => oe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Gs,
  ButtonSpacingPaddingHorizontalMobile: Ks,
  ButtonSpacingPaddingVerticalDesktop: qs,
  ButtonSpacingPaddingHorizontalDesktop: Xs,
  // Card spacing	
  CardSpacingPaddingMobile: Zs,
  CardSpacingPaddingDesktop: Js,
  CardSpacingHeadingMargin: Qs,
  // Form spacing
  FormSpacingInputPadding: eo,
  FormSpacingInputMinHeight: to,
  FormSpacingCheckboxSize: no,
  FormSpacingCheckboxLabelPadding: ro
}), []), ym = () => oe(() => ({
  xl: $e,
  l: Ce,
  m: Ne,
  s: je,
  xs: Ee
}), []), km = () => oe(() => ({
  body: Fe,
  bodyLarge: De,
  bodySmall: Pe,
  ledeText: Be,
  ledeTextSmall: Me
}), []), Sm = () => oe(() => ({
  headings: {
    xl: $e,
    l: Ce,
    m: Ne,
    s: je,
    xs: Ee
  },
  paragraphs: {
    body: Fe,
    bodyLarge: De,
    bodySmall: Pe,
    ledeText: Be,
    ledeTextSmall: Me
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
}), []), mo = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, be = {
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
function wm(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...mo, ...e }, r = [];
  return n?.includes(400) && r.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${be.normal.eot}?#iefix") format("eot"),
       url("${t}${be.normal.woff2}") format("woff2"),
       url("${t}${be.normal.woff}") format("woff"),
       url("${t}${be.normal.ttf}") format("truetype");
  src: url("${t}${be.normal.eot}");
}`), n?.includes(600) && r.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${be.bold.eot}?#iefix") format("eot"),
       url("${t}${be.bold.woff2}") format("woff2"),
       url("${t}${be.bold.woff}") format("woff"),
       url("${t}${be.bold.ttf}") format("truetype");
  src: url("${t}${be.bold.eot}");
}`), r.join(`
`);
}
function _m(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...mo, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${be.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${be.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${be.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${be.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const Tm = '"Frutiger W01", Arial, Helvetica, sans-serif', $m = "Arial, Helvetica, sans-serif";
async function Cm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  $o as Account,
  _p as ActionLink,
  Ru as AnimationDurationFast,
  Hu as AnimationDurationNormal,
  Au as AnimationDurationSlow,
  Uu as AnimationEasingBounce,
  zu as AnimationEasingEaseIn,
  Ou as AnimationEasingEaseInOut,
  Wu as AnimationEasingEaseOut,
  ju as AriaDataGrid,
  Pa as AriaTabsDataGrid,
  Qp as AriaTabsDataGridAdaptive,
  Qi as BackLink,
  $s as BorderColorCard,
  Cs as BorderColorCardHover,
  _s as BorderColorDefault,
  Ns as BorderColorError,
  Ts as BorderColorForm,
  sd as BorderRadiusLarge,
  ad as BorderRadiusMedium,
  nd as BorderRadiusNone,
  rd as BorderRadiusSmall,
  Ju as BorderWidthCardBottom,
  qu as BorderWidthDefault,
  Xu as BorderWidthFormElement,
  Zu as BorderWidthFormElementError,
  Qu as BorderWidthPanel,
  td as BorderWidthTableCell,
  ed as BorderWidthTableHeader,
  ku as Breadcrumb,
  Ah as BreakpointDesktop,
  zh as BreakpointLargeDesktop,
  Rh as BreakpointMobile,
  Hh as BreakpointTablet,
  Cr as Button,
  Mf as ButtonBorderRadius,
  Bf as ButtonBorderWidth,
  Sf as ButtonPrimaryBackgroundActive,
  yf as ButtonPrimaryBackgroundDefault,
  wf as ButtonPrimaryBackgroundDisabled,
  kf as ButtonPrimaryBackgroundHover,
  $f as ButtonPrimaryBorderDefault,
  Cf as ButtonPrimaryBorderFocus,
  _f as ButtonPrimaryTextDefault,
  Tf as ButtonPrimaryTextDisabled,
  Ff as ButtonSecondaryBackgroundActive,
  Nf as ButtonSecondaryBackgroundDefault,
  Ef as ButtonSecondaryBackgroundHover,
  jf as ButtonSecondaryBackgroundSolid,
  Pf as ButtonSecondaryBorderDefault,
  Df as ButtonSecondaryTextDefault,
  Lf as ButtonShadowSize,
  Xs as ButtonSpacingPaddingHorizontalDesktop,
  Ks as ButtonSpacingPaddingHorizontalMobile,
  qs as ButtonSpacingPaddingVerticalDesktop,
  Gs as ButtonSpacingPaddingVerticalMobile,
  If as ButtonTypographyWeight,
  Wp as Card,
  Rf as CardBackgroundDefault,
  zf as CardBorderBottom,
  Hf as CardBorderDefault,
  Af as CardBorderHover,
  Vf as CardBorderWidthBottom,
  Yf as CardBorderWidthDefault,
  Op as CardGroup,
  Up as CardGroupItem,
  Gf as CardShadowDefault,
  Kf as CardShadowHover,
  Qs as CardSpacingHeadingMargin,
  Js as CardSpacingPaddingDesktop,
  Zs as CardSpacingPaddingMobile,
  Of as CardTextDescription,
  Wf as CardTextHeading,
  Uf as CardTextLink,
  Yp as CareCard,
  Tp as CharacterCount,
  el as Checkboxes,
  gd as ColorBorderDefault,
  bd as ColorBorderSecondary,
  Ud as ColorButtonLoginActive,
  Wd as ColorButtonLoginBackground,
  Od as ColorButtonLoginHover,
  Yd as ColorButtonLoginShadow,
  _d as ColorButtonPrimaryActive,
  kd as ColorButtonPrimaryBackground,
  wd as ColorButtonPrimaryHover,
  Td as ColorButtonPrimaryShadow,
  Sd as ColorButtonPrimaryText,
  Ld as ColorButtonReverseActive,
  Pd as ColorButtonReverseBackground,
  Md as ColorButtonReverseHover,
  Id as ColorButtonReverseShadow,
  Bd as ColorButtonReverseText,
  Fd as ColorButtonSecondaryActive,
  $d as ColorButtonSecondaryBackground,
  Cd as ColorButtonSecondaryBackgroundSolid,
  Nd as ColorButtonSecondaryBorder,
  Ed as ColorButtonSecondaryHover,
  Dd as ColorButtonSecondaryShadow,
  jd as ColorButtonSecondaryText,
  Ad as ColorButtonWarningActive,
  Rd as ColorButtonWarningBackground,
  Hd as ColorButtonWarningHover,
  zd as ColorButtonWarningShadow,
  xd as ColorError,
  pd as ColorFocusBackground,
  md as ColorFocusText,
  yd as ColorFormBackground,
  vd as ColorFormBorder,
  Ws as ColorGrey1,
  Os as ColorGrey2,
  Us as ColorGrey3,
  Ys as ColorGrey4,
  Vs as ColorGrey5,
  fd as ColorLinkActive,
  ud as ColorLinkDefault,
  dd as ColorLinkHover,
  hd as ColorLinkVisited,
  Fs as ColorPrimaryBlack,
  js as ColorPrimaryBlue,
  Bs as ColorPrimaryDarkPink,
  Ds as ColorPrimaryGreen,
  Ps as ColorPrimaryPurple,
  Ms as ColorPrimaryRed,
  Es as ColorPrimaryWhite,
  Ls as ColorPrimaryYellow,
  As as ColorSecondaryAquaGreen,
  Hs as ColorSecondaryOrange,
  Is as ColorSecondaryPaleYellow,
  zs as ColorSecondaryPink,
  Rs as ColorSecondaryWarmYellow,
  od as ColorTextPrimary,
  cd as ColorTextPrint,
  ld as ColorTextReverse,
  id as ColorTextSecondary,
  Pr as Column,
  mf as ComponentBlur,
  of as ComponentBreadcrumbChevronMarginLeft,
  lf as ComponentBreadcrumbChevronMarginRight,
  uf as ComponentBreadcrumbPaddingTopDesktop,
  cf as ComponentBreadcrumbPaddingTopMobile,
  qd as ComponentButtonPaddingDesktopHorizontal,
  Kd as ComponentButtonPaddingDesktopVertical,
  Gd as ComponentButtonPaddingMobileHorizontal,
  Vd as ComponentButtonPaddingMobileVertical,
  Xd as ComponentButtonShadowSize,
  rf as ComponentCardHeadingMargin,
  nf as ComponentCardPaddingDesktop,
  tf as ComponentCardPaddingMobile,
  bf as ComponentDetails,
  xf as ComponentExpander,
  ef as ComponentFormCheckboxLabelPadding,
  Qd as ComponentFormCheckboxSize,
  Zd as ComponentFormInputMinHeight,
  Jd as ComponentFormInputPadding,
  gf as ComponentLink,
  vf as ComponentPagination,
  sf as ComponentPanelPaddingDesktop,
  af as ComponentPanelPaddingMobile,
  pf as ComponentSpread,
  ff as ComponentSummaryListCellPaddingHorizontal,
  df as ComponentSummaryListCellPaddingVertical,
  hf as ComponentSummaryListRowMargin,
  ss as Container,
  zp as ContentsList,
  mo as DEFAULT_FONT_CONFIG,
  Jp as DashboardSummaryGrid,
  Bp as DateInput,
  wu as Details,
  _u as DoDontList,
  yp as ElevationHigh,
  xp as ElevationLow,
  vp as ElevationMedium,
  bp as ElevationNone,
  ca as ErrorMessage,
  Pp as ErrorSummary,
  Tu as Expander,
  be as FRUTIGER_FONT_FILES,
  Fr as Fieldset,
  hp as FocusOutlineOffset,
  pp as FocusOutlineStyle,
  fp as FocusOutlineWidth,
  gp as FocusShadowButton,
  mp as FocusShadowInput,
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
  us as Footer,
  ph as FormBorderRadius,
  fh as FormBorderWidthDefault,
  hh as FormBorderWidthError,
  ch as FormErrorTextDefault,
  uh as FormErrorTypographyWeight,
  dh as FormHintTextDefault,
  qf as FormInputBackgroundDefault,
  Zf as FormInputBackgroundDisabled,
  Jf as FormInputBackgroundError,
  Xf as FormInputBackgroundFocus,
  Qf as FormInputBorderDefault,
  nh as FormInputBorderDisabled,
  th as FormInputBorderError,
  eh as FormInputBorderFocus,
  rh as FormInputTextDefault,
  sh as FormInputTextDisabled,
  ah as FormInputTextPlaceholder,
  oh as FormLabelTextDefault,
  ih as FormLabelTextRequired,
  lh as FormLabelTypographyWeight,
  ro as FormSpacingCheckboxLabelPadding,
  no as FormSpacingCheckboxSize,
  to as FormSpacingInputMinHeight,
  eo as FormSpacingInputPadding,
  Hp as GanttChart,
  nl as Grid,
  Oh as GridGutter,
  Uh as GridGutterHalf,
  Wh as GridPageWidth,
  cs as Header,
  Ip as HeaderSSR,
  Rp as HeaderStatic,
  Re as Heading,
  Ce as HeadingsNhsukHeadingL,
  Ne as HeadingsNhsukHeadingM,
  je as HeadingsNhsukHeadingS,
  $e as HeadingsNhsukHeadingXl,
  Ee as HeadingsNhsukHeadingXs,
  cl as Hero,
  as as Hint,
  Zp as Images,
  jr as Input,
  Vp as InsetText,
  Er as Label,
  Ih as LayoutColumnActions,
  Ph as LayoutColumnFull,
  Bh as LayoutColumnHalf,
  Lh as LayoutColumnQuarter,
  Mh as LayoutColumnThird,
  Dh as LayoutContainerMaxWidth,
  sl as List,
  os as MainWrapper,
  cm as NHSBodyText,
  um as NHSBodyTextLarge,
  dm as NHSBodyTextSmall,
  am as NHSHeading1,
  sm as NHSHeading2,
  om as NHSHeading3,
  im as NHSHeading4,
  lm as NHSHeading5,
  fm as NHSLedeText,
  hm as NHSLedeTextSmall,
  Lp as NHSThemeProvider,
  $m as NHS_FALLBACK_FONT_STACK,
  Tm as NHS_FONT_STACK,
  tm as PageTemplate,
  Ap as Pagination,
  Su as Panel,
  Fe as ParagraphsBody,
  De as ParagraphsBodyLarge,
  Pe as ParagraphsBodySmall,
  Be as ParagraphsLedeText,
  Me as ParagraphsLedeTextSmall,
  Cp as Radios,
  Dr as Row,
  $p as Select,
  op as ShadowButtonDefault,
  cp as ShadowButtonFocus,
  ip as ShadowButtonSecondary,
  lp as ShadowButtonWarning,
  up as ShadowCardDefault,
  dp as ShadowCardHover,
  Fh as SizeButtonMinHeightDesktop,
  Eh as SizeButtonMinHeightMobile,
  Sh as SizeFormControlLarge,
  kh as SizeFormControlMedium,
  yh as SizeFormControlSmall,
  Nh as SizeFormInputWidth2xl,
  jh as SizeFormInputWidth3xl,
  $h as SizeFormInputWidthLg,
  Th as SizeFormInputWidthMd,
  _h as SizeFormInputWidthSm,
  Ch as SizeFormInputWidthXl,
  wh as SizeFormInputWidthXs,
  xh as SizeIconExtraLarge,
  bh as SizeIconLarge,
  gh as SizeIconMedium,
  vh as SizeIconNhsDefault,
  mh as SizeIconSmall,
  Ss as SkipLink,
  em as SortStatusControl,
  ao as Spacing0,
  so as Spacing1,
  oo as Spacing2,
  io as Spacing3,
  lo as Spacing4,
  co as Spacing5,
  uo as Spacing6,
  fo as Spacing7,
  ho as Spacing8,
  po as Spacing9,
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
  Np as SpacingUtilities,
  rp as StateDisabledBackground,
  ap as StateDisabledBorder,
  sp as StateDisabledText,
  Yh as StateErrorBackground,
  Vh as StateErrorBorder,
  Gh as StateErrorText,
  ep as StateInfoBackground,
  tp as StateInfoBorder,
  np as StateInfoText,
  Kh as StateSuccessBackground,
  qh as StateSuccessBorder,
  Xh as StateSuccessText,
  Zh as StateWarningBackground,
  Jh as StateWarningBorder,
  Qh as StateWarningText,
  Nu as SummaryCard,
  Gp as SummaryList,
  Kp as Table,
  qp as Tabs,
  Nr as Tag,
  $u as TaskList,
  tl as Textarea,
  nm as TransactionalPageTemplate,
  Yu as TransitionButtonDefault,
  Vu as TransitionButtonShadow,
  Ku as TransitionCardHover,
  Gu as TransitionInputFocus,
  Dp as WIDTH_FRACTIONS,
  Xp as WarningCallout,
  ws as WidthContainer,
  Ep as WidthUtilities,
  Cm as checkFrutigerLoaded,
  wm as generateFrutigerFontFace,
  rm as getResponsiveStyles,
  jp as getSpacingClass,
  Fp as getWidthClass,
  _m as preloadFrutigerFonts,
  mm as useColors,
  vm as useComponentSpacing,
  ym as useNHSHeadings,
  km as useNHSParagraphs,
  Mp as useNHSTheme,
  Sm as useNHSTypographySystem,
  xm as useResponsiveSpacing,
  gm as useSpacing,
  pm as useTokens,
  bm as useTypography
};
//# sourceMappingURL=index.esm.js.map
