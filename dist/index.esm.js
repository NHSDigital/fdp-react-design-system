import * as vo from "react";
import de, { useRef as te, useCallback as J, useState as ne, useContext as Ge, useEffect as se, useMemo as oe, forwardRef as Qe, createContext as _n, createElement as La, useImperativeHandle as Ia, useReducer as yo } from "react";
import { flushSync as ko } from "react-dom";
function So(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jt = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vr;
function wo() {
  if (Vr) return mt;
  Vr = 1;
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
  return mt.Fragment = t, mt.jsx = n, mt.jsxs = n, mt;
}
var gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function _o() {
  return Yr || (Yr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(F) {
      if (F == null) return null;
      if (typeof F == "function")
        return F.$$typeof === C ? null : F.displayName || F.name || null;
      if (typeof F == "string") return F;
      switch (F) {
        case m:
          return "Fragment";
        case k:
          return "Profiler";
        case x:
          return "StrictMode";
        case I:
          return "Suspense";
        case v:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof F == "object")
        switch (typeof F.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), F.$$typeof) {
          case S:
            return "Portal";
          case E:
            return (F.displayName || "Context") + ".Provider";
          case $:
            return (F._context.displayName || "Context") + ".Consumer";
          case T:
            var V = F.render;
            return F = F.displayName, F || (F = V.displayName || V.name || "", F = F !== "" ? "ForwardRef(" + F + ")" : "ForwardRef"), F;
          case L:
            return V = F.displayName || null, V !== null ? V : e(F.type) || "Memo";
          case M:
            V = F._payload, F = F._init;
            try {
              return e(F(V));
            } catch {
            }
        }
      return null;
    }
    function t(F) {
      return "" + F;
    }
    function n(F) {
      try {
        t(F);
        var V = !1;
      } catch {
        V = !0;
      }
      if (V) {
        V = console;
        var z = V.error, X = typeof Symbol == "function" && Symbol.toStringTag && F[Symbol.toStringTag] || F.constructor.name || "Object";
        return z.call(
          V,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(F);
      }
    }
    function r(F) {
      if (F === m) return "<>";
      if (typeof F == "object" && F !== null && F.$$typeof === M)
        return "<...>";
      try {
        var V = e(F);
        return V ? "<" + V + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var F = c.A;
      return F === null ? null : F.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(F) {
      if (N.call(F, "key")) {
        var V = Object.getOwnPropertyDescriptor(F, "key").get;
        if (V && V.isReactWarning) return !1;
      }
      return F.key !== void 0;
    }
    function l(F, V) {
      function z() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          V
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(F, "key", {
        get: z,
        configurable: !0
      });
    }
    function u() {
      var F = e(this.type);
      return h[F] || (h[F] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), F = this.props.ref, F !== void 0 ? F : null;
    }
    function f(F, V, z, X, O, _, y, H) {
      return z = _.ref, F = {
        $$typeof: b,
        type: F,
        key: V,
        props: _,
        _owner: O
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(F, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(F, "ref", { enumerable: !1, value: null }), F._store = {}, Object.defineProperty(F._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(F, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(F, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.defineProperty(F, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(F.props), Object.freeze(F)), F;
    }
    function d(F, V, z, X, O, _, y, H) {
      var K = V.children;
      if (K !== void 0)
        if (X)
          if (q(K)) {
            for (X = 0; X < K.length; X++)
              p(K[X]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(K);
      if (N.call(V, "key")) {
        K = e(F);
        var B = Object.keys(V).filter(function(W) {
          return W !== "key";
        });
        X = 0 < B.length ? "{key: someKey, " + B.join(": ..., ") + ": ...}" : "{key: someKey}", Q[K + X] || (B = 0 < B.length ? "{" + B.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          K,
          B,
          K
        ), Q[K + X] = !0);
      }
      if (K = null, z !== void 0 && (n(z), K = "" + z), i(V) && (n(V.key), K = "" + V.key), "key" in V) {
        z = {};
        for (var A in V)
          A !== "key" && (z[A] = V[A]);
      } else z = V;
      return K && l(
        z,
        typeof F == "function" ? F.displayName || F.name || "Unknown" : F
      ), f(
        F,
        K,
        _,
        O,
        s(),
        z,
        y,
        H
      );
    }
    function p(F) {
      typeof F == "object" && F !== null && F.$$typeof === b && F._store && (F._store.validated = 1);
    }
    var g = de, b = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), E = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), c = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, q = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(F) {
        return F();
      }
    };
    var P, h = {}, R = g.react_stack_bottom_frame.bind(
      g,
      o
    )(), U = j(r(o)), Q = {};
    gt.Fragment = m, gt.jsx = function(F, V, z, X, O) {
      var _ = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        F,
        V,
        z,
        !1,
        X,
        O,
        _ ? Error("react-stack-top-frame") : R,
        _ ? j(r(F)) : U
      );
    }, gt.jsxs = function(F, V, z, X, O) {
      var _ = 1e4 > c.recentlyCreatedOwnerStacks++;
      return d(
        F,
        V,
        z,
        !0,
        X,
        O,
        _ ? Error("react-stack-top-frame") : R,
        _ ? j(r(F)) : U
      );
    };
  }()), gt;
}
var Gr;
function To() {
  return Gr || (Gr = 1, process.env.NODE_ENV === "production" ? jt.exports = wo() : jt.exports = _o()), jt.exports;
}
var a = To(), jn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Kr;
function $o() {
  return Kr || (Kr = 1, function(e) {
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
var Co = $o();
const Y = /* @__PURE__ */ So(Co), Tp = ({
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
}, yr = ({
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
}, Tn = typeof document < "u" ? de.useLayoutEffect : () => {
};
var En;
const No = (En = de.useInsertionEffect) !== null && En !== void 0 ? En : Tn;
function Ue(e) {
  const t = te(null);
  return No(() => {
    t.current = e;
  }, [
    e
  ]), J((...n) => {
    const r = t.current;
    return r?.(...n);
  }, []);
}
const Ht = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, Ra = /* @__PURE__ */ de.createContext(Ht), jo = /* @__PURE__ */ de.createContext(!1);
let Eo = !!(typeof window < "u" && window.document && window.document.createElement), Fn = /* @__PURE__ */ new WeakMap();
function Fo(e = !1) {
  let t = Ge(Ra), n = te(null);
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
function Do(e) {
  let t = Ge(Ra);
  t === Ht && !Eo && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = Fo(!!e), r = t === Ht && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function Po(e) {
  let t = de.useId(), [n] = ne(Ro()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Ht.prefix}`;
  return e || `${r}-${t}`;
}
const Bo = typeof de.useId == "function" ? Po : Do;
function Mo() {
  return !1;
}
function Lo() {
  return !0;
}
function Io(e) {
  return () => {
  };
}
function Ro() {
  return typeof de.useSyncExternalStore == "function" ? de.useSyncExternalStore(Io, Mo, Lo) : Ge(jo);
}
let Ho = !!(typeof window < "u" && window.document && window.document.createElement), ot = /* @__PURE__ */ new Map(), yt;
typeof FinalizationRegistry < "u" && (yt = new FinalizationRegistry((e) => {
  ot.delete(e);
}));
function qr(e) {
  let [t, n] = ne(e), r = te(null), s = Bo(t), o = te(null);
  if (yt && yt.register(o, s), Ho) {
    const i = ot.get(s);
    i && !i.includes(r) ? i.push(r) : ot.set(s, [
      r
    ]);
  }
  return Tn(() => {
    let i = s;
    return () => {
      yt && yt.unregister(o), ot.delete(i);
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
function Ao(e, t) {
  if (e === t) return e;
  let n = ot.get(e);
  if (n)
    return n.forEach((s) => s.current = t), t;
  let r = ot.get(t);
  return r ? (r.forEach((s) => s.current = e), e) : t;
}
function Ha(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const me = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, ve = (e) => e && "window" in e && e.window === e ? e : me(e).defaultView || window;
function zo(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Wo(e) {
  return zo(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Oo = !1;
function kr() {
  return Oo;
}
function ue(e, t) {
  if (!kr()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Wo(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const St = (e = document) => {
  var t;
  if (!kr()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function le(e) {
  return kr() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Aa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (n = Aa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Uo() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++) (e = arguments[n]) && (t = Aa(e)) && (r && (r += " "), r += t);
  return r;
}
function Ye(...e) {
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
      90 ? t[s] = Ha(o, i) : (s === "className" || s === "UNSAFE_className") && typeof o == "string" && typeof i == "string" ? t[s] = Uo(o, i) : s === "id" && o && i ? t.id = Ao(o, i) : t[s] = i !== void 0 ? i : o;
    }
  }
  return t;
}
function Vo(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const r = e.map((s) => {
      const o = Xr(s, t);
      return n || (n = typeof o == "function"), o;
    });
    if (n) return () => {
      r.forEach((s, o) => {
        typeof s == "function" ? s() : Xr(e[o], null);
      });
    };
  };
}
function Xr(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const Yo = /* @__PURE__ */ new Set([
  "id"
]), Go = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), Ko = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), qo = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), Zr = /* @__PURE__ */ new Set([
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
]), Xo = /^(data-.*)$/;
function za(e, t = {}) {
  let { labelable: n, isLink: r, global: s, events: o = s, propNames: i } = t, l = {};
  for (const u in e) Object.prototype.hasOwnProperty.call(e, u) && (Yo.has(u) || n && Go.has(u) || r && Ko.has(u) || s && qo.has(u) || o && Zr.has(u) || u.endsWith("Capture") && Zr.has(u.slice(0, -7)) || i?.has(u) || Xo.test(u)) && (l[u] = e[u]);
  return l;
}
function lt(e) {
  if (Zo()) e.focus({
    preventScroll: !0
  });
  else {
    let t = Jo(e);
    e.focus(), Qo(t);
  }
}
let Et = null;
function Zo() {
  if (Et == null) {
    Et = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Et = !0, !0;
        }
      });
    } catch {
    }
  }
  return Et;
}
function Jo(e) {
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
function Qo(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function $n(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function Sr(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function We(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const ct = We(function() {
  return Sr(/^Mac/i);
}), ei = We(function() {
  return Sr(/^iPhone/i);
}), Wa = We(function() {
  return Sr(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  ct() && navigator.maxTouchPoints > 1;
}), wr = We(function() {
  return ei() || Wa();
});
We(function() {
  return ct() || wr();
});
const ti = We(function() {
  return $n(/AppleWebKit/i) && !ni();
}), ni = We(function() {
  return $n(/Chrome/i);
}), Oa = We(function() {
  return $n(/Android/i);
}), ri = We(function() {
  return $n(/Firefox/i);
});
function wt(e, t, n = !0) {
  var r, s;
  let { metaKey: o, ctrlKey: i, altKey: l, shiftKey: u } = t;
  ri() && (!((s = window.event) === null || s === void 0 || (r = s.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (ct() ? o = !0 : i = !0);
  let f = ti() && ct() && !Wa() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
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
  wt.isOpening = n, lt(e), e.dispatchEvent(f), wt.isOpening = !1;
}
wt.isOpening = !1;
let Ve = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Set();
function Jr() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let s = Ve.get(r.target);
    s || (s = /* @__PURE__ */ new Set(), Ve.set(r.target, s), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), s.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let s = Ve.get(r.target);
    if (s && (s.delete(r.propertyName), s.size === 0 && (r.target.removeEventListener("transitioncancel", n), Ve.delete(r.target)), Ve.size === 0)) {
      for (let o of Wn) o();
      Wn.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? Jr() : document.addEventListener("DOMContentLoaded", Jr));
function ai() {
  for (const [e] of Ve)
    "isConnected" in e && !e.isConnected && Ve.delete(e);
}
function Ua(e) {
  requestAnimationFrame(() => {
    ai(), Ve.size === 0 ? e() : Wn.add(e);
  });
}
function _r() {
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
function si(e) {
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
function Va(e, t) {
  Tn(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function On(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Oa() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function oi(e) {
  return !Oa() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const ii = typeof Element < "u" && "checkVisibility" in Element.prototype;
function li(e) {
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
function ci(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Ya(e, t) {
  return ii ? e.checkVisibility() : e.nodeName !== "#comment" && li(e) && ci(e, t) && (!e.parentElement || Ya(e.parentElement, e));
}
const Ga = [
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
], ui = Ga.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
Ga.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function di(e) {
  return e.matches(ui) && Ya(e) && !fi(e);
}
function fi(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const hi = Symbol("default");
function pi(e) {
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
function mi(e, t) {
  let n = Ge(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = t || hi;
    if (!n.slots[r]) {
      let s = new Intl.ListFormat().format(Object.keys(n.slots).map((i) => `"${i}"`)), o = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${o} Valid slot names are ${s}.`);
    }
    return n.slots[r];
  }
  return n;
}
function gi(e, t, n) {
  let r = mi(n, e.slot) || {}, { ref: s, ...o } = r, i = si(oe(() => Vo(t, s), [
    t,
    s
  ])), l = Ye(o, e);
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
const bi = /* @__PURE__ */ _n(!1);
function xi(e) {
  let t = (n, r) => Ge(bi) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, Qe(t);
}
function Tr(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ka(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function qa(e) {
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
  let n = Ue((r) => {
    e?.(r);
  });
  return J((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let s = r.target, o = (i) => {
        if (t.current.isFocused = !1, s.disabled) {
          let l = Tr(i);
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
let At = !1;
function Qr(e) {
  for (; e && !di(e); ) e = e.parentElement;
  let t = ve(e), n = t.document.activeElement;
  if (!n || n === e) return;
  At = !0;
  let r = !1, s = (d) => {
    (d.target === n || r) && d.stopImmediatePropagation();
  }, o = (d) => {
    (d.target === n || r) && (d.stopImmediatePropagation(), !e && !r && (r = !0, lt(n), u()));
  }, i = (d) => {
    (d.target === e || r) && d.stopImmediatePropagation();
  }, l = (d) => {
    (d.target === e || r) && (d.stopImmediatePropagation(), r || (r = !0, lt(n), u()));
  };
  t.addEventListener("blur", s, !0), t.addEventListener("focusout", o, !0), t.addEventListener("focusin", l, !0), t.addEventListener("focus", i, !0);
  let u = () => {
    cancelAnimationFrame(f), t.removeEventListener("blur", s, !0), t.removeEventListener("focusout", o, !0), t.removeEventListener("focusin", l, !0), t.removeEventListener("focus", i, !0), At = !1, r = !1;
  }, f = requestAnimationFrame(u);
  return u;
}
let rt = "default", Un = "", It = /* @__PURE__ */ new WeakMap();
function ea(e) {
  if (wr()) {
    if (rt === "default") {
      const t = me(e);
      Un = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    rt = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    It.set(e, e.style[t]), e.style[t] = "none";
  }
}
function Dn(e) {
  if (wr()) {
    if (rt !== "disabled") return;
    rt = "restoring", setTimeout(() => {
      Ua(() => {
        if (rt === "restoring") {
          const t = me(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Un || ""), Un = "", rt = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && It.has(e)) {
    let t = It.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), It.delete(e);
  }
}
const Xa = de.createContext({
  register: () => {
  }
});
Xa.displayName = "PressResponderContext";
function vi(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function Za(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function yi(e, t) {
  var n = Za(e, t, "get");
  return vi(e, n);
}
function ki(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function Si(e, t, n) {
  ki(e, t), t.set(e, n);
}
function wi(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function ta(e, t, n) {
  var r = Za(e, t, "set");
  return wi(e, r, n), n;
}
function _i(e) {
  let t = Ge(Xa);
  if (t) {
    let { register: n, ...r } = t;
    e = Ye(r, e), n();
  }
  return Va(t, e.ref), e;
}
var Ft = /* @__PURE__ */ new WeakMap();
class Dt {
  continuePropagation() {
    ta(this, Ft, !1);
  }
  get shouldStopPropagation() {
    return yi(this, Ft);
  }
  constructor(t, n, r, s) {
    Si(this, Ft, {
      writable: !0,
      value: void 0
    }), ta(this, Ft, !0);
    var o;
    let i = (o = s?.target) !== null && o !== void 0 ? o : r.currentTarget;
    const l = i?.getBoundingClientRect();
    let u, f = 0, d, p = null;
    r.clientX != null && r.clientY != null && (d = r.clientX, p = r.clientY), l && (d != null && p != null ? (u = d - l.left, f = p - l.top) : (u = l.width / 2, f = l.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = f;
  }
}
const na = Symbol("linkClicked"), ra = "react-aria-pressable-style", aa = "data-react-aria-pressable";
function Ti(e) {
  let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: s, onPressUp: o, onClick: i, isDisabled: l, isPressed: u, preventFocusOnPress: f, shouldCancelOnPointerExit: d, allowTextSelectionOnPress: p, ref: g, ...b } = _i(e), [S, m] = ne(!1), x = te({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: k, removeAllGlobalListeners: $ } = _r(), E = Ue((c, N) => {
    let q = x.current;
    if (l || q.didFirePressStart) return !1;
    let j = !0;
    if (q.isTriggeringEvent = !0, r) {
      let P = new Dt("pressstart", N, c);
      r(P), j = P.shouldStopPropagation;
    }
    return n && n(!0), q.isTriggeringEvent = !1, q.didFirePressStart = !0, m(!0), j;
  }), T = Ue((c, N, q = !0) => {
    let j = x.current;
    if (!j.didFirePressStart) return !1;
    j.didFirePressStart = !1, j.isTriggeringEvent = !0;
    let P = !0;
    if (s) {
      let h = new Dt("pressend", N, c);
      s(h), P = h.shouldStopPropagation;
    }
    if (n && n(!1), m(!1), t && q && !l) {
      let h = new Dt("press", N, c);
      t(h), P && (P = h.shouldStopPropagation);
    }
    return j.isTriggeringEvent = !1, P;
  }), I = Ue((c, N) => {
    let q = x.current;
    if (l) return !1;
    if (o) {
      q.isTriggeringEvent = !0;
      let j = new Dt("pressup", N, c);
      return o(j), q.isTriggeringEvent = !1, j.shouldStopPropagation;
    }
    return !0;
  }), v = Ue((c) => {
    let N = x.current;
    if (N.isPressed && N.target) {
      N.didFirePressStart && N.pointerType != null && T(Ke(N.target, c), N.pointerType, !1), N.isPressed = !1, N.isOverTarget = !1, N.activePointerId = null, N.pointerType = null, $(), p || Dn(N.target);
      for (let q of N.disposables) q();
      N.disposables = [];
    }
  }), L = Ue((c) => {
    d && v(c);
  }), M = Ue((c) => {
    i?.(c);
  }), w = Ue((c, N) => {
    if (i) {
      let q = new MouseEvent("click", c);
      Ka(q, N), i(Tr(q));
    }
  }), C = oe(() => {
    let c = x.current, N = {
      onKeyDown(j) {
        if (Pn(j.nativeEvent, j.currentTarget) && ue(j.currentTarget, le(j.nativeEvent))) {
          var P;
          ia(le(j.nativeEvent), j.key) && j.preventDefault();
          let h = !0;
          if (!c.isPressed && !j.repeat) {
            c.target = j.currentTarget, c.isPressed = !0, c.pointerType = "keyboard", h = E(j, "keyboard");
            let R = j.currentTarget, U = (Q) => {
              Pn(Q, R) && !Q.repeat && ue(R, le(Q)) && c.target && I(Ke(c.target, Q), "keyboard");
            };
            k(me(j.currentTarget), "keyup", Ha(U, q), !0);
          }
          h && j.stopPropagation(), j.metaKey && ct() && ((P = c.metaKeyEvents) === null || P === void 0 || P.set(j.key, j.nativeEvent));
        } else j.key === "Meta" && (c.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(j) {
        if (!(j && !ue(j.currentTarget, le(j.nativeEvent))) && j && j.button === 0 && !c.isTriggeringEvent && !wt.isOpening) {
          let P = !0;
          if (l && j.preventDefault(), !c.ignoreEmulatedMouseEvents && !c.isPressed && (c.pointerType === "virtual" || On(j.nativeEvent))) {
            let h = E(j, "virtual"), R = I(j, "virtual"), U = T(j, "virtual");
            M(j), P = h && R && U;
          } else if (c.isPressed && c.pointerType !== "keyboard") {
            let h = c.pointerType || j.nativeEvent.pointerType || "virtual", R = I(Ke(j.currentTarget, j), h), U = T(Ke(j.currentTarget, j), h, !0);
            P = R && U, c.isOverTarget = !1, M(j), v(j);
          }
          c.ignoreEmulatedMouseEvents = !1, P && j.stopPropagation();
        }
      }
    }, q = (j) => {
      var P;
      if (c.isPressed && c.target && Pn(j, c.target)) {
        var h;
        ia(le(j), j.key) && j.preventDefault();
        let U = le(j), Q = ue(c.target, le(j));
        T(Ke(c.target, j), "keyboard", Q), Q && w(j, c.target), $(), j.key !== "Enter" && $r(c.target) && ue(c.target, U) && !j[na] && (j[na] = !0, wt(c.target, j, !1)), c.isPressed = !1, (h = c.metaKeyEvents) === null || h === void 0 || h.delete(j.key);
      } else if (j.key === "Meta" && (!((P = c.metaKeyEvents) === null || P === void 0) && P.size)) {
        var R;
        let U = c.metaKeyEvents;
        c.metaKeyEvents = void 0;
        for (let Q of U.values()) (R = c.target) === null || R === void 0 || R.dispatchEvent(new KeyboardEvent("keyup", Q));
      }
    };
    if (typeof PointerEvent < "u") {
      N.onPointerDown = (h) => {
        if (h.button !== 0 || !ue(h.currentTarget, le(h.nativeEvent))) return;
        if (oi(h.nativeEvent)) {
          c.pointerType = "virtual";
          return;
        }
        c.pointerType = h.pointerType;
        let R = !0;
        if (!c.isPressed) {
          c.isPressed = !0, c.isOverTarget = !0, c.activePointerId = h.pointerId, c.target = h.currentTarget, p || ea(c.target), R = E(h, c.pointerType);
          let U = le(h.nativeEvent);
          "releasePointerCapture" in U && U.releasePointerCapture(h.pointerId), k(me(h.currentTarget), "pointerup", j, !1), k(me(h.currentTarget), "pointercancel", P, !1);
        }
        R && h.stopPropagation();
      }, N.onMouseDown = (h) => {
        if (ue(h.currentTarget, le(h.nativeEvent)) && h.button === 0) {
          if (f) {
            let R = Qr(h.target);
            R && c.disposables.push(R);
          }
          h.stopPropagation();
        }
      }, N.onPointerUp = (h) => {
        !ue(h.currentTarget, le(h.nativeEvent)) || c.pointerType === "virtual" || h.button === 0 && !c.isPressed && I(h, c.pointerType || h.pointerType);
      }, N.onPointerEnter = (h) => {
        h.pointerId === c.activePointerId && c.target && !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, E(Ke(c.target, h), c.pointerType));
      }, N.onPointerLeave = (h) => {
        h.pointerId === c.activePointerId && c.target && c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, T(Ke(c.target, h), c.pointerType, !1), L(h));
      };
      let j = (h) => {
        if (h.pointerId === c.activePointerId && c.isPressed && h.button === 0 && c.target) {
          if (ue(c.target, le(h)) && c.pointerType != null) {
            let R = !1, U = setTimeout(() => {
              c.isPressed && c.target instanceof HTMLElement && (R ? v(h) : (lt(c.target), c.target.click()));
            }, 80);
            k(h.currentTarget, "click", () => R = !0, !0), c.disposables.push(() => clearTimeout(U));
          } else v(h);
          c.isOverTarget = !1;
        }
      }, P = (h) => {
        v(h);
      };
      N.onDragStart = (h) => {
        ue(h.currentTarget, le(h.nativeEvent)) && v(h);
      };
    } else if (process.env.NODE_ENV === "test") {
      N.onMouseDown = (h) => {
        if (h.button !== 0 || !ue(h.currentTarget, le(h.nativeEvent))) return;
        if (c.ignoreEmulatedMouseEvents) {
          h.stopPropagation();
          return;
        }
        if (c.isPressed = !0, c.isOverTarget = !0, c.target = h.currentTarget, c.pointerType = On(h.nativeEvent) ? "virtual" : "mouse", ko(() => E(h, c.pointerType)) && h.stopPropagation(), f) {
          let U = Qr(h.target);
          U && c.disposables.push(U);
        }
        k(me(h.currentTarget), "mouseup", j, !1);
      }, N.onMouseEnter = (h) => {
        if (!ue(h.currentTarget, le(h.nativeEvent))) return;
        let R = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !0, R = E(h, c.pointerType)), R && h.stopPropagation();
      }, N.onMouseLeave = (h) => {
        if (!ue(h.currentTarget, le(h.nativeEvent))) return;
        let R = !0;
        c.isPressed && !c.ignoreEmulatedMouseEvents && c.pointerType != null && (c.isOverTarget = !1, R = T(h, c.pointerType, !1), L(h)), R && h.stopPropagation();
      }, N.onMouseUp = (h) => {
        ue(h.currentTarget, le(h.nativeEvent)) && !c.ignoreEmulatedMouseEvents && h.button === 0 && !c.isPressed && I(h, c.pointerType || "mouse");
      };
      let j = (h) => {
        if (h.button === 0) {
          if (c.ignoreEmulatedMouseEvents) {
            c.ignoreEmulatedMouseEvents = !1;
            return;
          }
          c.target && c.target.contains(h.target) && c.pointerType != null || v(h), c.isOverTarget = !1;
        }
      };
      N.onTouchStart = (h) => {
        if (!ue(h.currentTarget, le(h.nativeEvent))) return;
        let R = $i(h.nativeEvent);
        if (!R) return;
        c.activePointerId = R.identifier, c.ignoreEmulatedMouseEvents = !0, c.isOverTarget = !0, c.isPressed = !0, c.target = h.currentTarget, c.pointerType = "touch", p || ea(c.target), E(Oe(c.target, h), c.pointerType) && h.stopPropagation(), k(ve(h.currentTarget), "scroll", P, !0);
      }, N.onTouchMove = (h) => {
        if (!ue(h.currentTarget, le(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let R = sa(h.nativeEvent, c.activePointerId), U = !0;
        R && oa(R, h.currentTarget) ? !c.isOverTarget && c.pointerType != null && (c.isOverTarget = !0, U = E(Oe(c.target, h), c.pointerType)) : c.isOverTarget && c.pointerType != null && (c.isOverTarget = !1, U = T(Oe(c.target, h), c.pointerType, !1), L(Oe(c.target, h))), U && h.stopPropagation();
      }, N.onTouchEnd = (h) => {
        if (!ue(h.currentTarget, le(h.nativeEvent))) return;
        if (!c.isPressed) {
          h.stopPropagation();
          return;
        }
        let R = sa(h.nativeEvent, c.activePointerId), U = !0;
        R && oa(R, h.currentTarget) && c.pointerType != null ? (I(Oe(c.target, h), c.pointerType), U = T(Oe(c.target, h), c.pointerType), w(h.nativeEvent, c.target)) : c.isOverTarget && c.pointerType != null && (U = T(Oe(c.target, h), c.pointerType, !1)), U && h.stopPropagation(), c.isPressed = !1, c.activePointerId = null, c.isOverTarget = !1, c.ignoreEmulatedMouseEvents = !0, c.target && !p && Dn(c.target), $();
      }, N.onTouchCancel = (h) => {
        ue(h.currentTarget, le(h.nativeEvent)) && (h.stopPropagation(), c.isPressed && v(Oe(c.target, h)));
      };
      let P = (h) => {
        c.isPressed && ue(le(h), c.target) && v({
          currentTarget: c.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      N.onDragStart = (h) => {
        ue(h.currentTarget, le(h.nativeEvent)) && v(h);
      };
    }
    return N;
  }, [
    k,
    l,
    f,
    $,
    p,
    v,
    L,
    T,
    E,
    I,
    M,
    w
  ]);
  return se(() => {
    if (!g || process.env.NODE_ENV === "test") return;
    const c = me(g.current);
    if (!c || !c.head || c.getElementById(ra)) return;
    const N = c.createElement("style");
    N.id = ra, N.textContent = `
@layer {
  [${aa}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), c.head.prepend(N);
  }, [
    g
  ]), se(() => {
    let c = x.current;
    return () => {
      var N;
      p || Dn((N = c.target) !== null && N !== void 0 ? N : void 0);
      for (let q of c.disposables) q();
      c.disposables = [];
    };
  }, [
    p
  ]), {
    isPressed: u || S,
    pressProps: Ye(b, C, {
      [aa]: !0
    })
  };
}
function $r(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Pn(e, t) {
  const { key: n, code: r } = e, s = t, o = s.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(s instanceof ve(s).HTMLInputElement && !Ja(s, n) || s instanceof ve(s).HTMLTextAreaElement || s.isContentEditable) && // Links should only trigger with Enter key
  !((o === "link" || !o && $r(s)) && n !== "Enter");
}
function $i(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function sa(e, t) {
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
function Ci(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function Ni(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function oa(e, t) {
  let n = t.getBoundingClientRect(), r = Ci(e);
  return Ni(n, r);
}
function ji(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !$r(e);
}
function ia(e, t) {
  return e instanceof HTMLInputElement ? !Ja(e, t) : ji(e);
}
const Ei = /* @__PURE__ */ new Set([
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
function Ja(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : Ei.has(e.type);
}
let ft = null, Vn = /* @__PURE__ */ new Set(), kt = /* @__PURE__ */ new Map(), Ze = !1, Yn = !1;
const Fi = {
  Tab: !0,
  Escape: !0
};
function Cr(e, t) {
  for (let n of Vn) n(e, t);
}
function Di(e) {
  return !(e.metaKey || !ct() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function zt(e) {
  Ze = !0, Di(e) && (ft = "keyboard", Cr("keyboard", e));
}
function xe(e) {
  ft = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (Ze = !0, Cr("pointer", e));
}
function Qa(e) {
  On(e) && (Ze = !0, ft = "virtual");
}
function es(e) {
  e.target === window || e.target === document || At || !e.isTrusted || (!Ze && !Yn && (ft = "virtual", Cr("virtual", e)), Ze = !1, Yn = !1);
}
function ts() {
  At || (Ze = !1, Yn = !0);
}
function Gn(e) {
  if (typeof window > "u" || typeof document > "u" || kt.get(ve(e))) return;
  const t = ve(e), n = me(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    Ze = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", zt, !0), n.addEventListener("keyup", zt, !0), n.addEventListener("click", Qa, !0), t.addEventListener("focus", es, !0), t.addEventListener("blur", ts, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", xe, !0), n.addEventListener("pointermove", xe, !0), n.addEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", xe, !0), n.addEventListener("mousemove", xe, !0), n.addEventListener("mouseup", xe, !0)), t.addEventListener("beforeunload", () => {
    ns(e);
  }, {
    once: !0
  }), kt.set(t, {
    focus: r
  });
}
const ns = (e, t) => {
  const n = ve(e), r = me(e);
  t && r.removeEventListener("DOMContentLoaded", t), kt.has(n) && (n.HTMLElement.prototype.focus = kt.get(n).focus, r.removeEventListener("keydown", zt, !0), r.removeEventListener("keyup", zt, !0), r.removeEventListener("click", Qa, !0), n.removeEventListener("focus", es, !0), n.removeEventListener("blur", ts, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", xe, !0), r.removeEventListener("pointermove", xe, !0), r.removeEventListener("pointerup", xe, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", xe, !0), r.removeEventListener("mousemove", xe, !0), r.removeEventListener("mouseup", xe, !0)), kt.delete(n));
};
function Pi(e) {
  const t = me(e);
  let n;
  return t.readyState !== "loading" ? Gn(e) : (n = () => {
    Gn(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => ns(e, n);
}
typeof document < "u" && Pi();
function rs() {
  return ft !== "pointer";
}
function Bi() {
  return ft;
}
const Mi = /* @__PURE__ */ new Set([
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
function Li(e, t, n) {
  let r = me(n?.target);
  const s = typeof window < "u" ? ve(n?.target).HTMLInputElement : HTMLInputElement, o = typeof window < "u" ? ve(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, i = typeof window < "u" ? ve(n?.target).HTMLElement : HTMLElement, l = typeof window < "u" ? ve(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof s && !Mi.has(r.activeElement.type) || r.activeElement instanceof o || r.activeElement instanceof i && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof l && !Fi[n.key]);
}
function Ii(e, t, n) {
  Gn(), se(() => {
    let r = (s, o) => {
      Li(!!n?.isTextInput, s, o) && e(rs());
    };
    return Vn.add(r), () => {
      Vn.delete(r);
    };
  }, t);
}
function Ri(e) {
  const t = me(e), n = St(t);
  if (Bi() === "virtual") {
    let r = n;
    Ua(() => {
      St(t) === r && e.isConnected && lt(e);
    });
  } else lt(e);
}
function as(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: s } = e;
  const o = J((u) => {
    if (u.target === u.currentTarget)
      return r && r(u), s && s(!1), !0;
  }, [
    r,
    s
  ]), i = qa(o), l = J((u) => {
    const f = me(u.target), d = f ? St(f) : St();
    u.target === u.currentTarget && d === le(u.nativeEvent) && (n && n(u), s && s(!0), i(u));
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
function la(e) {
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
function Hi(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: la(e.onKeyDown),
      onKeyUp: la(e.onKeyUp)
    }
  };
}
let Ai = /* @__PURE__ */ de.createContext(null);
function zi(e) {
  let t = Ge(Ai) || {};
  Va(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function Wi(e, t) {
  let { focusProps: n } = as(e), { keyboardProps: r } = Hi(e), s = Ye(n, r), o = zi(t), i = e.isDisabled ? {} : o, l = te(e.autoFocus);
  se(() => {
    l.current && t.current && Ri(t.current), l.current = !1;
  }, [
    t
  ]);
  let u = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (u = void 0), {
    focusableProps: Ye({
      ...s,
      tabIndex: u
    }, i)
  };
}
function Oi(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: s } = e, o = te({
    isFocusWithin: !1
  }), { addGlobalListener: i, removeAllGlobalListeners: l } = _r(), u = J((p) => {
    p.currentTarget.contains(p.target) && o.current.isFocusWithin && !p.currentTarget.contains(p.relatedTarget) && (o.current.isFocusWithin = !1, l(), n && n(p), s && s(!1));
  }, [
    n,
    s,
    o,
    l
  ]), f = qa(u), d = J((p) => {
    if (!p.currentTarget.contains(p.target)) return;
    const g = me(p.target), b = St(g);
    if (!o.current.isFocusWithin && b === le(p.nativeEvent)) {
      r && r(p), s && s(!0), o.current.isFocusWithin = !0, f(p);
      let S = p.currentTarget;
      i(g, "focus", (m) => {
        if (o.current.isFocusWithin && !ue(S, m.target)) {
          let x = new g.defaultView.FocusEvent("blur", {
            relatedTarget: m.target
          });
          Ka(x, S);
          let k = Tr(x);
          u(k);
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
let Wt = !1, Pt = 0;
function Kn() {
  Wt = !0, setTimeout(() => {
    Wt = !1;
  }, 50);
}
function ca(e) {
  e.pointerType === "touch" && Kn();
}
function Ui() {
  if (!(typeof document > "u"))
    return Pt === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", ca) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Kn)), Pt++, () => {
      Pt--, !(Pt > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", ca) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Kn));
    };
}
function Vi(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: s } = e, [o, i] = ne(!1), l = te({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(Ui, []);
  let { addGlobalListener: u, removeAllGlobalListeners: f } = _r(), { hoverProps: d, triggerHoverEnd: p } = oe(() => {
    let g = (m, x) => {
      if (l.pointerType = x, s || x === "touch" || l.isHovered || !m.currentTarget.contains(m.target)) return;
      l.isHovered = !0;
      let k = m.currentTarget;
      l.target = k, u(me(m.target), "pointerover", ($) => {
        l.isHovered && l.target && !ue(l.target, $.target) && b($, $.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: k,
        pointerType: x
      }), n && n(!0), i(!0);
    }, b = (m, x) => {
      let k = l.target;
      l.pointerType = "", l.target = null, !(x === "touch" || !l.isHovered || !k) && (l.isHovered = !1, f(), r && r({
        type: "hoverend",
        target: k,
        pointerType: x
      }), n && n(!1), i(!1));
    }, S = {};
    return typeof PointerEvent < "u" ? (S.onPointerEnter = (m) => {
      Wt && m.pointerType === "mouse" || g(m, m.pointerType);
    }, S.onPointerLeave = (m) => {
      !s && m.currentTarget.contains(m.target) && b(m, m.pointerType);
    }) : process.env.NODE_ENV === "test" && (S.onTouchStart = () => {
      l.ignoreEmulatedMouseEvents = !0;
    }, S.onMouseEnter = (m) => {
      !l.ignoreEmulatedMouseEvents && !Wt && g(m, "mouse"), l.ignoreEmulatedMouseEvents = !1;
    }, S.onMouseLeave = (m) => {
      !s && m.currentTarget.contains(m.target) && b(m, "mouse");
    }), {
      hoverProps: S,
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
  let { elementType: n = "button", isDisabled: r, onPress: s, onPressStart: o, onPressEnd: i, onPressUp: l, onPressChange: u, preventFocusOnPress: f, allowFocusWhenDisabled: d, onClick: p, href: g, target: b, rel: S, type: m = "button" } = e, x;
  n === "button" ? x = {
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
  } : x = {
    role: "button",
    href: n === "a" && !r ? g : void 0,
    target: n === "a" ? b : void 0,
    type: n === "input" ? m : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? S : void 0
  };
  let { pressProps: k, isPressed: $ } = Ti({
    onPressStart: o,
    onPressEnd: i,
    onPressChange: u,
    onPress: s,
    onPressUp: l,
    onClick: p,
    isDisabled: r,
    preventFocusOnPress: f,
    ref: t
  }), { focusableProps: E } = Wi(e, t);
  d && (E.tabIndex = r ? -1 : E.tabIndex);
  let T = Ye(E, k, za(e, {
    labelable: !0
  }));
  return {
    isPressed: $,
    buttonProps: Ye(x, T, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function Gi(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, s = te({
    isFocused: !1,
    isFocusVisible: t || rs()
  }), [o, i] = ne(!1), [l, u] = ne(() => s.current.isFocused && s.current.isFocusVisible), f = J(() => u(s.current.isFocused && s.current.isFocusVisible), []), d = J((b) => {
    s.current.isFocused = b, i(b), f();
  }, [
    f
  ]);
  Ii((b) => {
    s.current.isFocusVisible = b, f();
  }, [], {
    isTextInput: n
  });
  let { focusProps: p } = as({
    isDisabled: r,
    onFocusChange: d
  }), { focusWithinProps: g } = Oi({
    isDisabled: !r,
    onFocusWithinChange: d
  });
  return {
    isFocused: o,
    isFocusVisible: l,
    focusProps: r ? g : p
  };
}
const ss = 7e3;
let _e = null;
function ua(e, t = "assertive", n = ss) {
  _e ? _e.announce(e, t, n) : (_e = new Ki(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? _e.announce(e, t, n) : setTimeout(() => {
    _e?.isAttached() && _e?.announce(e, t, n);
  }, 100));
}
class Ki {
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
  announce(t, n = "assertive", r = ss) {
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
const qi = /* @__PURE__ */ _n(null), Xi = /* @__PURE__ */ _n({}), Zi = /* @__PURE__ */ xi(function(t, n) {
  [t, n] = gi(t, n, Xi), t = Ji(t);
  let r = t, { isPending: s } = r, { buttonProps: o, isPressed: i } = Yi(t, n), { focusProps: l, isFocused: u, isFocusVisible: f } = Gi(t), { hoverProps: d, isHovered: p } = Vi({
    ...t,
    isDisabled: t.isDisabled || s
  }), g = {
    isHovered: p,
    isPressed: (r.isPressed || i) && !s,
    isFocused: u,
    isFocusVisible: f,
    isDisabled: t.isDisabled || !1,
    isPending: s ?? !1
  }, b = pi({
    ...t,
    values: g,
    defaultClassName: "react-aria-Button"
  }), S = qr(o.id), m = qr(), x = o["aria-labelledby"];
  s && (x ? x = `${x} ${m}` : o["aria-label"] && (x = `${S} ${m}`));
  let k = te(s);
  se(() => {
    let E = {
      "aria-labelledby": x || S
    };
    (!k.current && u && s || k.current && u && !s) && ua(E, "assertive"), k.current = s;
  }, [
    s,
    u,
    x,
    S
  ]);
  let $ = za(t, {
    global: !0
  });
  return delete $.onClick, /* @__PURE__ */ de.createElement("button", {
    ...Ye($, b, o, l, d),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: o.type === "submit" && s ? "button" : o.type,
    id: S,
    ref: n,
    "aria-labelledby": x,
    slot: t.slot || void 0,
    "aria-disabled": s ? "true" : o["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": g.isPressed || void 0,
    "data-hovered": p || void 0,
    "data-focused": u || void 0,
    "data-pending": s || void 0,
    "data-focus-visible": f || void 0
  }, /* @__PURE__ */ de.createElement(qi.Provider, {
    value: {
      id: m
    }
  }, b.children));
});
function Ji(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const { forwardRef: Qi } = vo, Nr = Qi(
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
      Zi,
      {
        ref: i,
        className: l,
        ...o,
        children: e
      }
    );
  }
);
Nr.displayName = "Button";
const el = ({
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
}, jr = ({
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
}, Er = ({
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
  autoComplete: S,
  maxLength: m,
  minLength: x,
  pattern: k,
  step: $,
  min: E,
  max: T,
  showValueLabels: I = !1,
  showCurrentValue: v = !1,
  valueLabels: L,
  onChange: M,
  onBlur: w,
  onFocus: C,
  onKeyDown: c,
  ...N
}) => {
  const [q, j] = ne(r || s || (n === "range" ? E || "0" : ""));
  se(() => {
    r !== void 0 && j(r);
  }, [r]);
  const P = (Q) => {
    j(Q.target.value), M?.(Q);
  }, h = n === "range", R = Y(
    "nhsuk-input",
    {
      "nhsuk-input--error": f,
      "nhsuk-input--range": h,
      [`nhsuk-input--width-${g}`]: g !== "full" && !h
    },
    p
  ), U = h ? /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    I && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ a.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || E || "0" }),
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: R,
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
          autoComplete: S,
          maxLength: m,
          minLength: x,
          pattern: k,
          step: $,
          min: E,
          max: T,
          onChange: P,
          onBlur: w,
          onFocus: C,
          onKeyDown: c,
          ...N
        }
      ),
      /* @__PURE__ */ a.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || T || "100" })
    ] }),
    !I && /* @__PURE__ */ a.jsx(
      "input",
      {
        className: R,
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
        autoComplete: S,
        maxLength: m,
        minLength: x,
        pattern: k,
        step: $,
        min: E,
        max: T,
        onChange: P,
        onBlur: w,
        onFocus: C,
        onKeyDown: c,
        ...N
      }
    ),
    v && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ a.jsx("strong", { children: q })
    ] }) })
  ] }) : null;
  return h ? U : /* @__PURE__ */ a.jsx(
    "input",
    {
      className: R,
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
      autoComplete: S,
      maxLength: m,
      minLength: x,
      pattern: k,
      step: $,
      min: E,
      max: T,
      onChange: M,
      onBlur: w,
      onFocus: C,
      onKeyDown: c,
      ...N
    }
  );
}, Fr = ({
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
}, Dr = ({
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
}, tl = ({
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
  const [S, m] = ne(
    e.filter((M) => M.checked).map((M) => M.value)
  ), x = n || t, k = i ? `${x}-hint` : void 0, $ = l ? `${x}-error` : void 0, E = [k, $].filter(Boolean).join(" ") || void 0, T = (M, w) => {
    let C;
    w ? C = [...S, M] : C = S.filter((c) => c !== M), m(C), d?.(C);
  }, I = () => e.map((M, w) => {
    const C = `${x}-${w + 1}`, c = `${C}-conditional`, N = S.includes(M.value), q = M.disabled || !1;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: C,
          name: t,
          type: "checkbox",
          value: M.value,
          checked: N,
          disabled: q,
          onChange: (j) => T(M.value, j.target.checked),
          "aria-describedby": M.hint ? `${C}-hint` : E,
          ...M.conditional && {
            "aria-controls": c,
            "aria-expanded": N ? "true" : "false"
          },
          ...M.attributes
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: C, children: M.text }),
      M.hint && /* @__PURE__ */ a.jsx("div", { id: `${C}-hint`, className: "nhsuk-checkboxes__hint", children: M.hint }),
      M.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Y("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !N
          }),
          id: c,
          children: typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            M.conditional.label && /* @__PURE__ */ a.jsx(Fr, { htmlFor: M.conditional.id, children: M.conditional.label }),
            /* @__PURE__ */ a.jsx(Er, { ...M.conditional })
          ] }) : M.conditional
        }
      )
    ] }, M.value);
  }), v = Y(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": f
    },
    u
  ), L = Y("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ a.jsx("div", { className: L, ...g, ...b, children: /* @__PURE__ */ a.jsxs(
    Dr,
    {
      legend: r ? {
        text: r,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: E,
      ...p,
      children: [
        i && /* @__PURE__ */ a.jsx("div", { id: k, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ a.jsxs("div", { id: $, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: v, children: I() })
      ]
    }
  ) });
};
tl.displayName = "Checkboxes";
const nl = ({
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
  minLength: S,
  wrap: m = "soft",
  resize: x = "vertical",
  autoComplete: k,
  spellCheck: $,
  onChange: E,
  onBlur: T,
  onFocus: I,
  onKeyDown: v,
  ...L
}) => {
  const M = Y(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": u,
      [`nhsuk-textarea--resize-${x}`]: x !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ a.jsx(
    "textarea",
    {
      className: M,
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
      minLength: S,
      wrap: m,
      autoComplete: k,
      spellCheck: $,
      onChange: E,
      onBlur: T,
      onFocus: I,
      onKeyDown: v,
      ...L
    }
  );
}, os = ({
  id: e,
  className: t,
  children: n,
  ...r
}) => {
  const s = Y("nhsuk-hint", t);
  return /* @__PURE__ */ a.jsx("div", { className: s, id: e, ...r, children: n });
}, $p = ({
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
  const [g, b] = ne(o), [S, m] = ne(0), [x, k] = ne(!1), [$, E] = ne(!1), T = J((C) => n ? C.trim() === "" ? 0 : C.trim().split(/\s+/).length : C.length, [n]);
  se(() => {
    const C = T(g), c = t || n || 0, N = c - C, q = Math.floor(c * (r / 100));
    m(N), k(C > c), E(C >= q || C > c), f && f(C, N);
  }, [g, t, n, r, T, f]);
  const I = (C) => {
    const c = C.target.value;
    b(c), d && d(C);
  }, v = () => {
    const C = t || n || 0, c = n ? "word" : "character", N = n ? "words" : "characters";
    if (!$)
      return `You can enter up to ${C} ${C === 1 ? c : N}`;
    if (x) {
      const q = Math.abs(S);
      return `You have ${q} ${q === 1 ? c : N} too many`;
    } else
      return `You have ${S} ${S === 1 ? c : N} remaining`;
  }, L = Y(
    "nhsuk-character-count",
    l
  ), M = Y(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !$,
      "nhsuk-error-message": x
    },
    u?.classes
  ), w = Y(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": x
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
          nl,
          {
            id: e,
            name: s,
            value: g,
            rows: i,
            className: w,
            onChange: I,
            "aria-describedby": `${e}-info`,
            ...p
          }
        ),
        /* @__PURE__ */ a.jsx(
          os,
          {
            id: `${e}-info`,
            className: M,
            children: v()
          }
        )
      ]
    }
  );
}, Cp = ({
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
  onBlur: S,
  onFocus: m,
  ...x
}) => {
  const k = Y(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    u
  );
  return /* @__PURE__ */ a.jsx(
    "select",
    {
      className: k,
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
      onBlur: S,
      onFocus: m,
      ...x,
      children: g.map(($, E) => /* @__PURE__ */ a.jsx(
        "option",
        {
          value: $.value,
          disabled: $.disabled,
          selected: $.selected,
          children: $.text
        },
        `${$.value}-${E}`
      ))
    }
  );
}, Np = ({
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
  const [b, S] = ne(t || n || ""), m = Y(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": r,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), x = (k) => {
    const $ = k.target.value;
    S($), f && f(k);
  };
  return /* @__PURE__ */ a.jsx(Dr, { children: /* @__PURE__ */ a.jsx("div", { className: m, ...g, children: u.map((k, $) => {
    const E = `${e}-${$}`, T = k.conditional ? `${E}-conditional` : void 0, I = b === k.value;
    return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ a.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: E,
          name: e,
          type: "radio",
          value: k.value,
          disabled: k.disabled,
          checked: I,
          "aria-describedby": s,
          onChange: x,
          onBlur: d,
          onFocus: p
        }
      ),
      /* @__PURE__ */ a.jsx("label", { className: "nhsuk-radios__label", htmlFor: E, children: k.text }),
      k.hint && /* @__PURE__ */ a.jsx("div", { className: "nhsuk-radios__hint", children: k.hint }),
      k.conditional && /* @__PURE__ */ a.jsx(
        "div",
        {
          className: Y("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !I
          }),
          id: T,
          children: typeof k.conditional == "object" && k.conditional !== null && "label" in k.conditional && "id" in k.conditional && "name" in k.conditional ? /* @__PURE__ */ a.jsxs("div", { style: { marginTop: "16px" }, children: [
            k.conditional.label && /* @__PURE__ */ a.jsx(Fr, { htmlFor: k.conditional.id, children: k.conditional.label }),
            /* @__PURE__ */ a.jsx(Er, { ...k.conditional })
          ] }) : k.conditional
        }
      )
    ] }, k.value);
  }) }) });
}, is = ({
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
}, Pr = ({
  children: e,
  className: t,
  ...n
}) => {
  const r = Y("nhsuk-grid-row", t);
  return /* @__PURE__ */ a.jsx("div", { className: r, ...n, children: e });
}, Br = ({
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
}, rl = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ a.jsx(is, { className: t, ...n, children: /* @__PURE__ */ a.jsx(Pr, { children: e }) }), al = ({
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
}, sl = ({
  children: e,
  className: t,
  ...n
}) => {
  const r = Y("nhsuk-list__item", t);
  return /* @__PURE__ */ a.jsx("li", { className: r, ...n, children: e });
}, ol = al;
ol.Item = sl;
const jp = ({
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
}, Ep = {
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
}, Fp = ({
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
}, Dp = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Pp = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ls = ({
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
}, He = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const f = e ?? ((S) => {
    switch (S) {
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
  return La(
    g,
    { className: d, ...l, style: b },
    p
  );
}, da = ({
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
}, Bp = ({
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
    const S = b.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
    return b.href ? /* @__PURE__ */ a.jsx(
      "a",
      {
        href: b.href,
        ...b.attributes,
        children: S
      }
    ) : S;
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
          /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((b, S) => /* @__PURE__ */ a.jsx("li", { children: g(b) }, S)) })
        ] })
      ]
    }
  );
}, Mp = ({
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
  })), [g, b] = ne({}), S = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, m = (P, h) => {
    const R = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && S(h) ? 29 : R[P - 1];
  }, x = (P, h, R) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const U = parseInt(P, 10);
    if (U < 1 || U > 31) return "Day must be between 1 and 31";
    if (h && R) {
      const Q = parseInt(h, 10), F = parseInt(R, 10);
      if (!isNaN(Q) && !isNaN(F) && Q >= 1 && Q <= 12) {
        const V = m(Q, F);
        if (U > V)
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
          ][Q - 1]} ${F} only has ${V} days`;
      }
    }
  }, k = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const h = parseInt(P, 10);
    if (h < 1 || h > 12) return "Month must be between 1 and 12";
  }, $ = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const h = parseInt(P, 10), R = (/* @__PURE__ */ new Date()).getFullYear();
    if (h < 1900 || h > R + 10)
      return `Year must be between 1900 and ${R + 10}`;
  }, E = (P, h, R) => {
    if (!P || !h || !R) return;
    const U = parseInt(P, 10), Q = parseInt(h, 10), F = parseInt(R, 10);
    if (isNaN(U) || isNaN(Q) || isNaN(F) || Q < 1 || Q > 12 || F < 1900) return;
    const V = m(Q, F);
    U < 1 || U > V;
  }, T = J((P, h) => {
    const R = {
      ...d,
      [P]: h
    };
    p(R), u && u(R);
  }, [d, u]), I = J((P) => {
    const h = d[P];
    let R;
    if (P === "day")
      R = x(h, d.month, d.year);
    else if (P === "month") {
      if (R = k(h), !R && d.day) {
        const U = x(d.day, h, d.year);
        b((Q) => ({
          ...Q,
          day: U
        }));
      }
    } else if (P === "year" && (R = $(h), !R && d.day && d.month)) {
      const U = x(d.day, d.month, h);
      b((Q) => ({
        ...Q,
        day: U
      }));
    }
    if (b((U) => ({
      ...U,
      [P]: R
    })), d.day && d.month && d.year) {
      const U = E(
        P === "day" ? h : d.day,
        P === "month" ? h : d.month,
        P === "year" ? h : d.year
      );
      U && b((Q) => ({
        ...Q,
        day: U
      }));
    }
  }, [d, x, k, $, E]), v = oe(() => [
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
  ], []), L = n || v;
  let M = o?.describedBy || "";
  const w = i ? `${e}-hint` : "", C = l ? `${e}-error` : "";
  w && (M = M ? `${M} ${w}` : w), C && (M = M ? `${M} ${C}` : C);
  const c = Object.values(g).some((P) => P), N = Y(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || c
    }
  ), q = Y(
    "nhsuk-date-input",
    t
  ), j = () => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    i && /* @__PURE__ */ a.jsx(
      os,
      {
        id: w,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      da,
      {
        id: C,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([P, h]) => h ? /* @__PURE__ */ a.jsxs(
        da,
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
      const h = P.id || `${e}-${P.name}`, R = r ? `${r}[${P.name}]` : P.name, U = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), Q = g[P.name], F = d[P.name] || "";
      let V = M;
      if (Q) {
        const z = `${e}-${P.name}-error`;
        V = V ? `${V} ${z}` : z;
      }
      return /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ a.jsx(
          Fr,
          {
            htmlFor: h,
            className: "nhsuk-date-input__label",
            children: U
          }
        ),
        /* @__PURE__ */ a.jsx(
          Er,
          {
            id: h,
            name: R,
            value: F,
            className: Y("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": Q
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": V || void 0,
            hasError: !!Q,
            onChange: (z) => T(P.name, z.target.value),
            onBlur: () => I(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ a.jsx("div", { className: N, children: o ? /* @__PURE__ */ a.jsx(
    Dr,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: M || void 0,
      children: j()
    }
  ) : j() });
}, cs = {
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
}, us = _n(cs), il = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...cs, ...t };
  return /* @__PURE__ */ a.jsx(us.Provider, { value: n, children: e });
}, Lp = () => {
  const e = Ge(us);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function ll() {
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
function cl() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = ll(), document.head.appendChild(e);
}
const Ip = ({ children: e, theme: t }) => (se(() => {
  cl();
}, []), /* @__PURE__ */ a.jsx(il, { theme: t, children: e })), Mr = ({
  mode: e = "form",
  action: t = "https://www.nhs.uk/search/",
  method: n = "get",
  name: r = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: u,
  disabled: f = !1,
  callbacks: d = {},
  isLoading: p = !1,
  showResults: g = !1,
  results: b = [],
  formAttributes: S = {},
  inputAttributes: m = {},
  buttonAttributes: x = {},
  preventDefaultSubmit: k = !1,
  debounceMs: $ = 300,
  minQueryLength: E = 1
}) => {
  const [T, I] = ne(""), [v, L] = ne(!1), M = te(void 0), w = te(null), C = te(null), c = e === "controlled" && s !== void 0, N = c ? s : T, q = J((X) => {
    M.current && clearTimeout(M.current), M.current = setTimeout(() => {
      d.onChange && X.length >= E && d.onChange(X);
    }, $);
  }, [d.onChange, $, E]), j = J((X) => {
    const O = X.target.value;
    c || I(O), e !== "form" && q(O);
  }, [c, e, q]), P = J((X) => {
    const O = N.trim(), _ = {
      query: O,
      timestamp: Date.now(),
      formData: new FormData(X.currentTarget)
    };
    e === "controlled" || e === "hybrid" && k ? (X.preventDefault(), d.onSearch && O.length >= E && d.onSearch(_)) : e === "hybrid" && d.onSearch && O.length >= E && d.onSearch(_);
  }, [e, N, d.onSearch, k, E]), h = J(() => {
    L(!0), d.onFocus?.();
  }, [d.onFocus]), R = J(() => {
    L(!1), d.onBlur?.();
  }, [d.onBlur]), U = J(() => {
    c || I(""), d.onClear?.(), C.current?.focus();
  }, [c, d.onClear]);
  se(() => () => {
    M.current && clearTimeout(M.current);
  }, []);
  const Q = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: Y("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": p
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), F = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsxs(
        "circle",
        {
          cx: "12",
          cy: "12",
          r: "10",
          stroke: "currentColor",
          strokeWidth: "2",
          fill: "none",
          strokeLinecap: "round",
          strokeDasharray: "31.416",
          strokeDashoffset: "31.416",
          children: [
            /* @__PURE__ */ a.jsx(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ a.jsx(
              "animate",
              {
                attributeName: "stroke-dashoffset",
                dur: "2s",
                values: "0;-15.708;-31.416",
                repeatCount: "indefinite"
              }
            )
          ]
        }
      )
    }
  ), V = () => !N || e === "form" ? null : /* @__PURE__ */ a.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: U,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ a.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ a.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), z = () => !g || !b.length || !v ? null : /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: b.map((X) => /* @__PURE__ */ a.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: X.href ? /* @__PURE__ */ a.jsxs("a", { href: X.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__search-result-title", children: X.title }),
    X.description && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__search-result-description", children: X.description })
  ] }) : /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: X.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__search-result-title", children: X.title }),
        X.description && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__search-result-description", children: X.description })
      ]
    }
  ) }, X.id)) });
  return /* @__PURE__ */ a.jsxs("search", { className: Y("nhsuk-header__search", u, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": p,
    "nhsuk-header__search--focused": v,
    "nhsuk-header__search--has-results": g && b.length > 0
  }), children: [
    /* @__PURE__ */ a.jsxs(
      "form",
      {
        ref: w,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        onSubmit: P,
        ...S,
        children: [
          /* @__PURE__ */ a.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: i
            }
          ),
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ a.jsx(
              "input",
              {
                ref: C,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? r : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: N,
                onChange: j,
                onFocus: h,
                onBlur: R,
                disabled: f || p,
                "aria-expanded": g && b.length > 0,
                "aria-haspopup": "listbox",
                ...m
              }
            ),
            V()
          ] }),
          /* @__PURE__ */ a.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: f || p || e !== "form" && N.length < E,
              ...x,
              children: [
                p ? F() : Q(),
                /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: p ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    z()
  ] });
}, ds = ({
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
  const [p, g] = ne(!1), [b, S] = ne(!1), [m, x] = ne(i?.items?.length || 0), [k, $] = ne(!1), [E, T] = ne(!1), [I, v] = ne(!1), L = te(null), M = te(null), w = te(!1), C = te(null), c = te([]), N = te(null);
  se(() => {
    typeof window > "u" || (v(!0), $(!0));
  }, []), se(() => {
    if (!I || !i?.items?.length) return;
    c.current = i.items;
    const y = setTimeout(() => {
      L.current && M.current && U();
    }, 100);
    return () => clearTimeout(y);
  }, [I, i?.items]);
  const q = n.href && !t.href || n.href && n.href === t.href, j = q ? n.href : t.href, P = Y(
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
  ), R = Y(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), U = J(() => {
    if (!(typeof window > "u" || w.current) && !(!L.current || !M.current || !c.current.length)) {
      w.current = !0;
      try {
        const y = M.current, H = L.current, K = y.offsetWidth, B = H.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (B.length === 0 || K === 0) {
          w.current = !1;
          return;
        }
        const A = window.innerWidth < 768, W = A ? 16 : 32, D = W * 2, re = K - D, Z = Array.from(B).map((ie) => ie.offsetWidth), G = Z.reduce((ie, pe) => ie + pe, 0), ee = A ? 80 : 100, ce = N.current !== null && N.current !== A;
        if (N.current = A, console.log("Overflow check:", {
          containerWidth: K,
          availableContainerWidth: re,
          totalGutters: D,
          gutterSize: W,
          totalWidth: G,
          mobile: A,
          breakpointChanged: ce,
          itemCount: Z.length,
          measurements: Z
        }), G <= re)
          S(!1), x(c.current.length);
        else {
          const ie = re - ee;
          let pe = 0, we = 0;
          for (let ke = 0; ke < Z.length; ke++) {
            const $e = we + Z[ke];
            if ($e <= ie)
              we = $e, pe = ke + 1;
            else
              break;
          }
          pe = Math.max(1, pe);
          const ht = pe < Z.length;
          S(ht), x(pe);
        }
        w.current = !1;
      } catch (y) {
        console.error("Overflow detection error:", y), S(!1), x(c.current.length), w.current = !1;
      }
    }
  }, []);
  se(() => {
    if (typeof document > "u") return;
    const y = (H) => {
      H.key === "Escape" && p && g(!1);
    };
    if (p)
      return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [p]), se(() => {
    if (typeof window > "u" || !I) return;
    const y = () => {
      p && (g(!1), T(!1)), C.current && clearTimeout(C.current), C.current = setTimeout(() => {
        c.current.length > 0 && U();
      }, 250);
    };
    let H = null, K = null;
    return window.matchMedia && (H = window.matchMedia("(max-width: 767px)"), K = () => {
      console.log("Breakpoint changed:", H?.matches ? "mobile" : "desktop"), c.current.length > 0 && setTimeout(() => U(), 50);
    }, H.addEventListener ? H.addEventListener("change", K) : H.addListener(K)), window.addEventListener("resize", y), () => {
      window.removeEventListener("resize", y), H && K && (H.removeEventListener ? H.removeEventListener("change", K) : H.removeListener(K)), C.current && clearTimeout(C.current);
    };
  }, [I, p, U]), se(() => {
    if (typeof document > "u") return;
    const y = (H) => {
      const K = H.target, B = L.current?.contains(K);
      p && !B && g(!1);
    };
    if (p)
      return document.addEventListener("mousedown", y), () => document.removeEventListener("mousedown", y);
  }, [p]);
  const Q = (y) => {
    y && (y.preventDefault(), y.stopPropagation());
    const H = !p;
    g(H), H ? setTimeout(() => {
      T(!0);
    }, 50) : T(!1);
  }, F = () => /* @__PURE__ */ a.jsxs(
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
  ) : F(), z = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, X = (y, H) => y ? H ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: H, children: y }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: y }) : null, O = () => /* @__PURE__ */ a.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ a.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), _ = (y) => {
    if (y.active || y.current) {
      const H = y.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H });
    }
    return y.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text;
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
            j ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: j, children: [
              V(),
              z(),
              q && X(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              V(),
              z(),
              q && X(n.text)
            ] }),
            n.text && !q && X(n.text, n.href)
          ] }),
          s && /* @__PURE__ */ a.jsx(Mr, { ...s }),
          /* @__PURE__ */ a.jsx(
            yr,
            {
              ...o,
              variant: u === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: R,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ a.jsx(
              "div",
              {
                className: Y(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !k && I,
                    "nhsuk-header__navigation-container--ssr": !I
                  },
                  l
                ),
                ref: M,
                children: /* @__PURE__ */ a.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (I ? i.items.slice(0, m) : i.items).map((y, H) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: Y(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": y.active || y.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !I && H >= 4
                          // Mark items that would be hidden on client
                        },
                        y.className
                      ),
                      ...y.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: y.href,
                          ...y.active || y.current ? {
                            "aria-current": y.current ? "page" : "true"
                          } : {},
                          children: _(y)
                        }
                      )
                    },
                    H
                  )),
                  I && b && m < i.items.length && /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ a.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: Q,
                          type: "button",
                          children: [
                            /* @__PURE__ */ a.jsx("span", { children: "More" }),
                            O()
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
        I && i && i.items && i.items.length > 0 && p && E && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !E,
            children: /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(m).map((y, H) => /* @__PURE__ */ a.jsx(
              "li",
              {
                className: Y(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": y.active || y.current
                  }
                ),
                children: /* @__PURE__ */ a.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: y.href,
                    ...y.active || y.current ? {
                      "aria-current": y.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      g(!1), T(!1);
                    },
                    children: _(y)
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
  ), S = Y(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), m = Y(
    "nhsuk-header__navigation",
    i?.className
  ), x = () => /* @__PURE__ */ a.jsxs(
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
  ), k = () => t.src ? /* @__PURE__ */ a.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : x(), $ = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, E = (v, L) => v ? L ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: L, children: v }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, T = () => !i?.items || i.items.length === 0 ? null : i.items.map((v, L) => /* @__PURE__ */ a.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ a.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: v.href,
          ...v.attributes || {},
          children: v.text
        }
      )
    },
    v.href || L
  )), I = () => s ? /* @__PURE__ */ a.jsx(Mr, { ...s }) : null;
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
        /* @__PURE__ */ a.jsxs("div", { className: S, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            g ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: g, children: [
              k(),
              $(),
              p && E(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              k(),
              $(),
              p && E(n.text)
            ] }),
            n.text && !p && E(n.text, n.href)
          ] }),
          (u === "organisation" || r) && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            r && /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name", children: r.name }),
              r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: r.descriptor })
            ] }),
            I()
          ] }),
          u !== "organisation" && !r && I(),
          /* @__PURE__ */ a.jsx(
            yr,
            {
              ...o,
              variant: u === "white" ? "white" : "default"
            }
          )
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
                children: T()
              }
            ) })
          }
        )
      ]
    }
  );
}, Hp = ({
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
  const g = n.href && !t.href || n.href && n.href === t.href, b = g ? n.href : t.href, S = Y(
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
  ), x = Y(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), k = () => /* @__PURE__ */ a.jsxs(
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
  ) : k(), E = () => r ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, T = (v, L) => v ? L ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-header__service-name", href: L, children: v }) : /* @__PURE__ */ a.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, I = (v) => {
    if (v.active || v.current) {
      const L = v.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
      return /* @__PURE__ */ a.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: L });
    }
    return v.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
  };
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: S,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...f,
      ...p,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: m, children: [
          /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-header__service", children: [
            b ? /* @__PURE__ */ a.jsxs("a", { className: "nhsuk-header__service-logo", href: b, children: [
              $(),
              E(),
              g && T(n.text)
            ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
              $(),
              E(),
              g && T(n.text)
            ] }),
            n.text && !g && T(n.text, n.href)
          ] }),
          s && /* @__PURE__ */ a.jsx(Mr, { ...s }),
          /* @__PURE__ */ a.jsx(
            yr,
            {
              ...o,
              variant: u === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ a.jsx(
          "nav",
          {
            className: x,
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
                  i.items.slice(0, d).map((v, L) => /* @__PURE__ */ a.jsx(
                    "li",
                    {
                      className: Y(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": v.active || v.current
                        },
                        v.className
                      ),
                      ...v.attributes || {},
                      children: /* @__PURE__ */ a.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: v.href,
                          ...v.active || v.current ? {
                            "aria-current": v.current ? "page" : "true"
                          } : {},
                          children: I(v)
                        }
                      )
                    },
                    L
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
                    /* @__PURE__ */ a.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((v, L) => /* @__PURE__ */ a.jsx(
                      "li",
                      {
                        className: Y(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": v.active || v.current
                          }
                        ),
                        children: /* @__PURE__ */ a.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: v.href,
                            ...v.active || v.current ? {
                              "aria-current": v.current ? "page" : "true"
                            } : {},
                            children: I(v)
                          }
                        )
                      },
                      `overflow-${d + L}`
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
}, ul = ({
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
  ].filter(Boolean).join(" "), b = u || e || r || s, S = () => {
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
          S(),
          u || (s ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && b && /* @__PURE__ */ a.jsx("div", { className: p, children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          S(),
          u || (s ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : r ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: r }) : null)
        ] }) }) }) })
      ]
    }
  );
};
ul.displayName = "Hero";
const fs = ({
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
function Rt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function dl(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Lr(e) {
  let t, n, r;
  e.length !== 2 ? (t = Rt, n = (l, u) => Rt(e(l), u), r = (l, u) => e(l) - u) : (t = e === Rt || e === dl ? e : fl, n = e, r = e);
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
function fl() {
  return 0;
}
function hl(e) {
  return e === null ? NaN : +e;
}
const pl = Lr(Rt), ml = pl.right;
Lr(hl).center;
const gl = Math.sqrt(50), bl = Math.sqrt(10), xl = Math.sqrt(2);
function hs(e, t, n) {
  const r = (t - e) / Math.max(0, n), s = Math.floor(Math.log10(r)), o = r / Math.pow(10, s), i = o >= gl ? 10 : o >= bl ? 5 : o >= xl ? 2 : 1;
  let l, u, f;
  return s < 0 ? (f = Math.pow(10, -s) / i, l = Math.round(e * f), u = Math.round(t * f), l / f < e && ++l, u / f > t && --u, f = -f) : (f = Math.pow(10, s) * i, l = Math.round(e / f), u = Math.round(t / f), l * f < e && ++l, u * f > t && --u), u < l && 0.5 <= n && n < 2 ? hs(e, t, n * 2) : [l, u, f];
}
function fa(e, t, n) {
  return t = +t, e = +e, n = +n, hs(e, t, n)[2];
}
function ha(e, t, n) {
  t = +t, e = +e, n = +n;
  const r = t < e, s = r ? fa(t, e, n) : fa(e, t, n);
  return (r ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function vl(e, t) {
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
function Ir(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function ps(e, t) {
  var n = Object.create(e.prototype);
  for (var r in t) n[r] = t[r];
  return n;
}
function Ct() {
}
var _t = 0.7, Ot = 1 / _t, it = "\\s*([+-]?\\d+)\\s*", Tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", yl = /^#([0-9a-f]{3,8})$/, kl = new RegExp(`^rgb\\(${it},${it},${it}\\)$`), Sl = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), wl = new RegExp(`^rgba\\(${it},${it},${it},${Tt}\\)$`), _l = new RegExp(`^rgba\\(${Te},${Te},${Te},${Tt}\\)$`), Tl = new RegExp(`^hsl\\(${Tt},${Te},${Te}\\)$`), $l = new RegExp(`^hsla\\(${Tt},${Te},${Te},${Tt}\\)$`), pa = {
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
Ir(Ct, $t, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ma,
  // Deprecated! Use color.formatHex.
  formatHex: ma,
  formatHex8: Cl,
  formatHsl: Nl,
  formatRgb: ga,
  toString: ga
});
function ma() {
  return this.rgb().formatHex();
}
function Cl() {
  return this.rgb().formatHex8();
}
function Nl() {
  return ms(this).formatHsl();
}
function ga() {
  return this.rgb().formatRgb();
}
function $t(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = yl.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ba(t) : n === 3 ? new be(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Bt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Bt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = kl.exec(e)) ? new be(t[1], t[2], t[3], 1) : (t = Sl.exec(e)) ? new be(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = wl.exec(e)) ? Bt(t[1], t[2], t[3], t[4]) : (t = _l.exec(e)) ? Bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Tl.exec(e)) ? ya(t[1], t[2] / 100, t[3] / 100, 1) : (t = $l.exec(e)) ? ya(t[1], t[2] / 100, t[3] / 100, t[4]) : pa.hasOwnProperty(e) ? ba(pa[e]) : e === "transparent" ? new be(NaN, NaN, NaN, 0) : null;
}
function ba(e) {
  return new be(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Bt(e, t, n, r) {
  return r <= 0 && (e = t = n = NaN), new be(e, t, n, r);
}
function jl(e) {
  return e instanceof Ct || (e = $t(e)), e ? (e = e.rgb(), new be(e.r, e.g, e.b, e.opacity)) : new be();
}
function qn(e, t, n, r) {
  return arguments.length === 1 ? jl(e) : new be(e, t, n, r ?? 1);
}
function be(e, t, n, r) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
Ir(be, qn, ps(Ct, {
  brighter(e) {
    return e = e == null ? Ot : Math.pow(Ot, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _t : Math.pow(_t, e), new be(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new be(Xe(this.r), Xe(this.g), Xe(this.b), Ut(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: xa,
  // Deprecated! Use color.formatHex.
  formatHex: xa,
  formatHex8: El,
  formatRgb: va,
  toString: va
}));
function xa() {
  return `#${qe(this.r)}${qe(this.g)}${qe(this.b)}`;
}
function El() {
  return `#${qe(this.r)}${qe(this.g)}${qe(this.b)}${qe((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function va() {
  const e = Ut(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xe(this.r)}, ${Xe(this.g)}, ${Xe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ut(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function qe(e) {
  return e = Xe(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ya(e, t, n, r) {
  return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Se(e, t, n, r);
}
function ms(e) {
  if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ct || (e = $t(e)), !e) return new Se();
  if (e instanceof Se) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, r = e.b / 255, s = Math.min(t, n, r), o = Math.max(t, n, r), i = NaN, l = o - s, u = (o + s) / 2;
  return l ? (t === o ? i = (n - r) / l + (n < r) * 6 : n === o ? i = (r - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? o + s : 2 - o - s, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new Se(i, l, u, e.opacity);
}
function Fl(e, t, n, r) {
  return arguments.length === 1 ? ms(e) : new Se(e, t, n, r ?? 1);
}
function Se(e, t, n, r) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
Ir(Se, Fl, ps(Ct, {
  brighter(e) {
    return e = e == null ? Ot : Math.pow(Ot, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? _t : Math.pow(_t, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * t, s = 2 * n - r;
    return new be(
      Bn(e >= 240 ? e - 240 : e + 120, s, r),
      Bn(e, s, r),
      Bn(e < 120 ? e + 240 : e - 120, s, r),
      this.opacity
    );
  },
  clamp() {
    return new Se(ka(this.h), Mt(this.s), Mt(this.l), Ut(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ut(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ka(this.h)}, ${Mt(this.s) * 100}%, ${Mt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ka(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Mt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Bn(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Rr = (e) => () => e;
function Dl(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Pl(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(r) {
    return Math.pow(e + r * t, n);
  };
}
function Bl(e) {
  return (e = +e) == 1 ? gs : function(t, n) {
    return n - t ? Pl(t, n, e) : Rr(isNaN(t) ? n : t);
  };
}
function gs(e, t) {
  var n = t - e;
  return n ? Dl(e, n) : Rr(isNaN(e) ? t : e);
}
const Sa = function e(t) {
  var n = Bl(t);
  function r(s, o) {
    var i = n((s = qn(s)).r, (o = qn(o)).r), l = n(s.g, o.g), u = n(s.b, o.b), f = gs(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = f(d), s + "";
    };
  }
  return r.gamma = e, r;
}(1);
function Ml(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), s;
  return function(o) {
    for (s = 0; s < n; ++s) r[s] = e[s] * (1 - o) + t[s] * o;
    return r;
  };
}
function Ll(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Il(e, t) {
  var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, s = new Array(r), o = new Array(n), i;
  for (i = 0; i < r; ++i) s[i] = Hr(e[i], t[i]);
  for (; i < n; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < r; ++i) o[i] = s[i](l);
    return o;
  };
}
function Rl(e, t) {
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
function Hl(e, t) {
  var n = {}, r = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? n[s] = Hr(e[s], t[s]) : r[s] = t[s];
  return function(o) {
    for (s in n) r[s] = n[s](o);
    return r;
  };
}
var Xn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Mn = new RegExp(Xn.source, "g");
function Al(e) {
  return function() {
    return e;
  };
}
function zl(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Wl(e, t) {
  var n = Xn.lastIndex = Mn.lastIndex = 0, r, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (r = Xn.exec(e)) && (s = Mn.exec(t)); )
    (o = s.index) > n && (o = t.slice(n, o), l[i] ? l[i] += o : l[++i] = o), (r = r[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: Vt(r, s) })), n = Mn.lastIndex;
  return n < t.length && (o = t.slice(n), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? zl(u[0].x) : Al(t) : (t = u.length, function(f) {
    for (var d = 0, p; d < t; ++d) l[(p = u[d]).i] = p.x(f);
    return l.join("");
  });
}
function Hr(e, t) {
  var n = typeof t, r;
  return t == null || n === "boolean" ? Rr(t) : (n === "number" ? Vt : n === "string" ? (r = $t(t)) ? (t = r, Sa) : Wl : t instanceof $t ? Sa : t instanceof Date ? Rl : Ll(t) ? Ml : Array.isArray(t) ? Il : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Hl : Vt)(e, t);
}
function Ol(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Ul(e) {
  return function() {
    return e;
  };
}
function Vl(e) {
  return +e;
}
var wa = [0, 1];
function at(e) {
  return e;
}
function Zn(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ul(isNaN(t) ? NaN : 0.5);
}
function Yl(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(r) {
    return Math.max(e, Math.min(t, r));
  };
}
function Gl(e, t, n) {
  var r = e[0], s = e[1], o = t[0], i = t[1];
  return s < r ? (r = Zn(s, r), o = n(i, o)) : (r = Zn(r, s), o = n(o, i)), function(l) {
    return o(r(l));
  };
}
function Kl(e, t, n) {
  var r = Math.min(e.length, t.length) - 1, s = new Array(r), o = new Array(r), i = -1;
  for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < r; )
    s[i] = Zn(e[i], e[i + 1]), o[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = ml(e, l, 1, r) - 1;
    return o[u](s[u](l));
  };
}
function ql(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Xl() {
  var e = wa, t = wa, n = Hr, r, s, o, i = at, l, u, f;
  function d() {
    var g = Math.min(e.length, t.length);
    return i !== at && (i = Yl(e[0], e[g - 1])), l = g > 2 ? Kl : Gl, u = f = null, p;
  }
  function p(g) {
    return g == null || isNaN(g = +g) ? o : (u || (u = l(e.map(r), t, n)))(r(i(g)));
  }
  return p.invert = function(g) {
    return i(s((f || (f = l(t, e.map(r), Vt)))(g)));
  }, p.domain = function(g) {
    return arguments.length ? (e = Array.from(g, Vl), d()) : e.slice();
  }, p.range = function(g) {
    return arguments.length ? (t = Array.from(g), d()) : t.slice();
  }, p.rangeRound = function(g) {
    return t = Array.from(g), n = Ol, d();
  }, p.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : at, d()) : i !== at;
  }, p.interpolate = function(g) {
    return arguments.length ? (n = g, d()) : n;
  }, p.unknown = function(g) {
    return arguments.length ? (o = g, p) : o;
  }, function(g, b) {
    return r = g, s = b, d();
  };
}
function Zl() {
  return Xl()(at, at);
}
function Jl(e, t) {
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
const Yt = fe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Yt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? fe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Yt);
Yt.range;
const Ie = 1e3, ye = Ie * 60, Re = ye * 60, Ae = Re * 24, Ar = Ae * 7, _a = Ae * 30, Rn = Ae * 365, st = fe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCSeconds());
st.range;
const zr = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie);
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getMinutes());
zr.range;
const Ql = fe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ye);
}, (e, t) => (t - e) / ye, (e) => e.getUTCMinutes());
Ql.range;
const Wr = fe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ie - e.getMinutes() * ye);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getHours());
Wr.range;
const ec = fe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCHours());
ec.range;
const Nt = fe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ye) / Ae,
  (e) => e.getDate() - 1
);
Nt.range;
const Or = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ae, (e) => e.getUTCDate() - 1);
Or.range;
const tc = fe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ae, (e) => Math.floor(e / Ae));
tc.range;
function et(e) {
  return fe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ye) / Ar);
}
const Cn = et(0), Gt = et(1), nc = et(2), rc = et(3), ut = et(4), ac = et(5), sc = et(6);
Cn.range;
Gt.range;
nc.range;
rc.range;
ut.range;
ac.range;
sc.range;
function tt(e) {
  return fe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Ar);
}
const bs = tt(0), Kt = tt(1), oc = tt(2), ic = tt(3), dt = tt(4), lc = tt(5), cc = tt(6);
bs.range;
Kt.range;
oc.range;
ic.range;
dt.range;
lc.range;
cc.range;
const Ur = fe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Ur.range;
const uc = fe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
uc.range;
const ze = fe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
ze.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : fe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
ze.range;
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
function dc(e, t, n, r, s, o) {
  const i = [
    [st, 1, Ie],
    [st, 5, 5 * Ie],
    [st, 15, 15 * Ie],
    [st, 30, 30 * Ie],
    [o, 1, ye],
    [o, 5, 5 * ye],
    [o, 15, 15 * ye],
    [o, 30, 30 * ye],
    [s, 1, Re],
    [s, 3, 3 * Re],
    [s, 6, 6 * Re],
    [s, 12, 12 * Re],
    [r, 1, Ae],
    [r, 2, 2 * Ae],
    [n, 1, Ar],
    [t, 1, _a],
    [t, 3, 3 * _a],
    [e, 1, Rn]
  ];
  function l(f, d, p) {
    const g = d < f;
    g && ([f, d] = [d, f]);
    const b = p && typeof p.range == "function" ? p : u(f, d, p), S = b ? b.range(f, +d + 1) : [];
    return g ? S.reverse() : S;
  }
  function u(f, d, p) {
    const g = Math.abs(d - f) / p, b = Lr(([, , x]) => x).right(i, g);
    if (b === i.length) return e.every(ha(f / Rn, d / Rn, p));
    if (b === 0) return Yt.every(Math.max(ha(f, d, p), 1));
    const [S, m] = i[g / i[b - 1][2] < i[b][2] / g ? b - 1 : b];
    return S.every(m);
  }
  return [l, u];
}
const [fc, hc] = dc(ze, Ur, Cn, Nt, Wr, zr);
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
function bt(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function pc(e) {
  var t = e.dateTime, n = e.date, r = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, f = xt(s), d = vt(s), p = xt(o), g = vt(o), b = xt(i), S = vt(i), m = xt(l), x = vt(l), k = xt(u), $ = vt(u), E = {
    a: R,
    A: U,
    b: Q,
    B: F,
    c: null,
    d: Ea,
    e: Ea,
    f: Ic,
    g: Gc,
    G: qc,
    H: Bc,
    I: Mc,
    j: Lc,
    L: xs,
    m: Rc,
    M: Hc,
    p: V,
    q: z,
    Q: Pa,
    s: Ba,
    S: Ac,
    u: zc,
    U: Wc,
    V: Oc,
    w: Uc,
    W: Vc,
    x: null,
    X: null,
    y: Yc,
    Y: Kc,
    Z: Xc,
    "%": Da
  }, T = {
    a: X,
    A: O,
    b: _,
    B: y,
    c: null,
    d: Fa,
    e: Fa,
    f: eu,
    g: uu,
    G: fu,
    H: Zc,
    I: Jc,
    j: Qc,
    L: ys,
    m: tu,
    M: nu,
    p: H,
    q: K,
    Q: Pa,
    s: Ba,
    S: ru,
    u: au,
    U: su,
    V: ou,
    w: iu,
    W: lu,
    x: null,
    X: null,
    y: cu,
    Y: du,
    Z: hu,
    "%": Da
  }, I = {
    a: C,
    A: c,
    b: N,
    B: q,
    c: j,
    d: Na,
    e: Na,
    f: Ec,
    g: Ca,
    G: $a,
    H: ja,
    I: ja,
    j: $c,
    L: jc,
    m: Tc,
    M: Cc,
    p: w,
    q: _c,
    Q: Dc,
    s: Pc,
    S: Nc,
    u: vc,
    U: yc,
    V: kc,
    w: xc,
    W: Sc,
    x: P,
    X: h,
    y: Ca,
    Y: $a,
    Z: wc,
    "%": Fc
  };
  E.x = v(n, E), E.X = v(r, E), E.c = v(t, E), T.x = v(n, T), T.X = v(r, T), T.c = v(t, T);
  function v(B, A) {
    return function(W) {
      var D = [], re = -1, Z = 0, G = B.length, ee, ce, ie;
      for (W instanceof Date || (W = /* @__PURE__ */ new Date(+W)); ++re < G; )
        B.charCodeAt(re) === 37 && (D.push(B.slice(Z, re)), (ce = Ta[ee = B.charAt(++re)]) != null ? ee = B.charAt(++re) : ce = ee === "e" ? " " : "0", (ie = A[ee]) && (ee = ie(W, ce)), D.push(ee), Z = re + 1);
      return D.push(B.slice(Z, re)), D.join("");
    };
  }
  function L(B, A) {
    return function(W) {
      var D = bt(1900, void 0, 1), re = M(D, B, W += "", 0), Z, G;
      if (re != W.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (A && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (Z = An(bt(D.y, 0, 1)), G = Z.getUTCDay(), Z = G > 4 || G === 0 ? Kt.ceil(Z) : Kt(Z), Z = Or.offset(Z, (D.V - 1) * 7), D.y = Z.getUTCFullYear(), D.m = Z.getUTCMonth(), D.d = Z.getUTCDate() + (D.w + 6) % 7) : (Z = Hn(bt(D.y, 0, 1)), G = Z.getDay(), Z = G > 4 || G === 0 ? Gt.ceil(Z) : Gt(Z), Z = Nt.offset(Z, (D.V - 1) * 7), D.y = Z.getFullYear(), D.m = Z.getMonth(), D.d = Z.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), G = "Z" in D ? An(bt(D.y, 0, 1)).getUTCDay() : Hn(bt(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (G + 5) % 7 : D.w + D.U * 7 - (G + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, An(D)) : Hn(D);
    };
  }
  function M(B, A, W, D) {
    for (var re = 0, Z = A.length, G = W.length, ee, ce; re < Z; ) {
      if (D >= G) return -1;
      if (ee = A.charCodeAt(re++), ee === 37) {
        if (ee = A.charAt(re++), ce = I[ee in Ta ? A.charAt(re++) : ee], !ce || (D = ce(B, W, D)) < 0) return -1;
      } else if (ee != W.charCodeAt(D++))
        return -1;
    }
    return D;
  }
  function w(B, A, W) {
    var D = f.exec(A.slice(W));
    return D ? (B.p = d.get(D[0].toLowerCase()), W + D[0].length) : -1;
  }
  function C(B, A, W) {
    var D = b.exec(A.slice(W));
    return D ? (B.w = S.get(D[0].toLowerCase()), W + D[0].length) : -1;
  }
  function c(B, A, W) {
    var D = p.exec(A.slice(W));
    return D ? (B.w = g.get(D[0].toLowerCase()), W + D[0].length) : -1;
  }
  function N(B, A, W) {
    var D = k.exec(A.slice(W));
    return D ? (B.m = $.get(D[0].toLowerCase()), W + D[0].length) : -1;
  }
  function q(B, A, W) {
    var D = m.exec(A.slice(W));
    return D ? (B.m = x.get(D[0].toLowerCase()), W + D[0].length) : -1;
  }
  function j(B, A, W) {
    return M(B, t, A, W);
  }
  function P(B, A, W) {
    return M(B, n, A, W);
  }
  function h(B, A, W) {
    return M(B, r, A, W);
  }
  function R(B) {
    return i[B.getDay()];
  }
  function U(B) {
    return o[B.getDay()];
  }
  function Q(B) {
    return u[B.getMonth()];
  }
  function F(B) {
    return l[B.getMonth()];
  }
  function V(B) {
    return s[+(B.getHours() >= 12)];
  }
  function z(B) {
    return 1 + ~~(B.getMonth() / 3);
  }
  function X(B) {
    return i[B.getUTCDay()];
  }
  function O(B) {
    return o[B.getUTCDay()];
  }
  function _(B) {
    return u[B.getUTCMonth()];
  }
  function y(B) {
    return l[B.getUTCMonth()];
  }
  function H(B) {
    return s[+(B.getUTCHours() >= 12)];
  }
  function K(B) {
    return 1 + ~~(B.getUTCMonth() / 3);
  }
  return {
    format: function(B) {
      var A = v(B += "", E);
      return A.toString = function() {
        return B;
      }, A;
    },
    parse: function(B) {
      var A = L(B += "", !1);
      return A.toString = function() {
        return B;
      }, A;
    },
    utcFormat: function(B) {
      var A = v(B += "", T);
      return A.toString = function() {
        return B;
      }, A;
    },
    utcParse: function(B) {
      var A = L(B += "", !0);
      return A.toString = function() {
        return B;
      }, A;
    }
  };
}
var Ta = { "-": "", _: " ", 0: "0" }, he = /^\s*\d+/, mc = /^%/, gc = /[\\^$*+?|[\]().{}]/g;
function ae(e, t, n) {
  var r = e < 0 ? "-" : "", s = (r ? -e : e) + "", o = s.length;
  return r + (o < n ? new Array(n - o + 1).join(t) + s : s);
}
function bc(e) {
  return e.replace(gc, "\\$&");
}
function xt(e) {
  return new RegExp("^(?:" + e.map(bc).join("|") + ")", "i");
}
function vt(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function xc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.w = +r[0], n + r[0].length) : -1;
}
function vc(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.u = +r[0], n + r[0].length) : -1;
}
function yc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.U = +r[0], n + r[0].length) : -1;
}
function kc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.V = +r[0], n + r[0].length) : -1;
}
function Sc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.W = +r[0], n + r[0].length) : -1;
}
function $a(e, t, n) {
  var r = he.exec(t.slice(n, n + 4));
  return r ? (e.y = +r[0], n + r[0].length) : -1;
}
function Ca(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function wc(e, t, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return r ? (e.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function _c(e, t, n) {
  var r = he.exec(t.slice(n, n + 1));
  return r ? (e.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Tc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.m = r[0] - 1, n + r[0].length) : -1;
}
function Na(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.d = +r[0], n + r[0].length) : -1;
}
function $c(e, t, n) {
  var r = he.exec(t.slice(n, n + 3));
  return r ? (e.m = 0, e.d = +r[0], n + r[0].length) : -1;
}
function ja(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.H = +r[0], n + r[0].length) : -1;
}
function Cc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.M = +r[0], n + r[0].length) : -1;
}
function Nc(e, t, n) {
  var r = he.exec(t.slice(n, n + 2));
  return r ? (e.S = +r[0], n + r[0].length) : -1;
}
function jc(e, t, n) {
  var r = he.exec(t.slice(n, n + 3));
  return r ? (e.L = +r[0], n + r[0].length) : -1;
}
function Ec(e, t, n) {
  var r = he.exec(t.slice(n, n + 6));
  return r ? (e.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Fc(e, t, n) {
  var r = mc.exec(t.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Dc(e, t, n) {
  var r = he.exec(t.slice(n));
  return r ? (e.Q = +r[0], n + r[0].length) : -1;
}
function Pc(e, t, n) {
  var r = he.exec(t.slice(n));
  return r ? (e.s = +r[0], n + r[0].length) : -1;
}
function Ea(e, t) {
  return ae(e.getDate(), t, 2);
}
function Bc(e, t) {
  return ae(e.getHours(), t, 2);
}
function Mc(e, t) {
  return ae(e.getHours() % 12 || 12, t, 2);
}
function Lc(e, t) {
  return ae(1 + Nt.count(ze(e), e), t, 3);
}
function xs(e, t) {
  return ae(e.getMilliseconds(), t, 3);
}
function Ic(e, t) {
  return xs(e, t) + "000";
}
function Rc(e, t) {
  return ae(e.getMonth() + 1, t, 2);
}
function Hc(e, t) {
  return ae(e.getMinutes(), t, 2);
}
function Ac(e, t) {
  return ae(e.getSeconds(), t, 2);
}
function zc(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Wc(e, t) {
  return ae(Cn.count(ze(e) - 1, e), t, 2);
}
function vs(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ut(e) : ut.ceil(e);
}
function Oc(e, t) {
  return e = vs(e), ae(ut.count(ze(e), e) + (ze(e).getDay() === 4), t, 2);
}
function Uc(e) {
  return e.getDay();
}
function Vc(e, t) {
  return ae(Gt.count(ze(e) - 1, e), t, 2);
}
function Yc(e, t) {
  return ae(e.getFullYear() % 100, t, 2);
}
function Gc(e, t) {
  return e = vs(e), ae(e.getFullYear() % 100, t, 2);
}
function Kc(e, t) {
  return ae(e.getFullYear() % 1e4, t, 4);
}
function qc(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? ut(e) : ut.ceil(e), ae(e.getFullYear() % 1e4, t, 4);
}
function Xc(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ae(t / 60 | 0, "0", 2) + ae(t % 60, "0", 2);
}
function Fa(e, t) {
  return ae(e.getUTCDate(), t, 2);
}
function Zc(e, t) {
  return ae(e.getUTCHours(), t, 2);
}
function Jc(e, t) {
  return ae(e.getUTCHours() % 12 || 12, t, 2);
}
function Qc(e, t) {
  return ae(1 + Or.count(Je(e), e), t, 3);
}
function ys(e, t) {
  return ae(e.getUTCMilliseconds(), t, 3);
}
function eu(e, t) {
  return ys(e, t) + "000";
}
function tu(e, t) {
  return ae(e.getUTCMonth() + 1, t, 2);
}
function nu(e, t) {
  return ae(e.getUTCMinutes(), t, 2);
}
function ru(e, t) {
  return ae(e.getUTCSeconds(), t, 2);
}
function au(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function su(e, t) {
  return ae(bs.count(Je(e) - 1, e), t, 2);
}
function ks(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? dt(e) : dt.ceil(e);
}
function ou(e, t) {
  return e = ks(e), ae(dt.count(Je(e), e) + (Je(e).getUTCDay() === 4), t, 2);
}
function iu(e) {
  return e.getUTCDay();
}
function lu(e, t) {
  return ae(Kt.count(Je(e) - 1, e), t, 2);
}
function cu(e, t) {
  return ae(e.getUTCFullYear() % 100, t, 2);
}
function uu(e, t) {
  return e = ks(e), ae(e.getUTCFullYear() % 100, t, 2);
}
function du(e, t) {
  return ae(e.getUTCFullYear() % 1e4, t, 4);
}
function fu(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? dt(e) : dt.ceil(e), ae(e.getUTCFullYear() % 1e4, t, 4);
}
function hu() {
  return "+0000";
}
function Da() {
  return "%";
}
function Pa(e) {
  return +e;
}
function Ba(e) {
  return Math.floor(+e / 1e3);
}
var nt, Ss;
pu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function pu(e) {
  return nt = pc(e), Ss = nt.format, nt.parse, nt.utcFormat, nt.utcParse, nt;
}
function mu(e) {
  return new Date(e);
}
function gu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ws(e, t, n, r, s, o, i, l, u, f) {
  var d = Zl(), p = d.invert, g = d.domain, b = f(".%L"), S = f(":%S"), m = f("%I:%M"), x = f("%I %p"), k = f("%a %d"), $ = f("%b %d"), E = f("%B"), T = f("%Y");
  function I(v) {
    return (u(v) < v ? b : l(v) < v ? S : i(v) < v ? m : o(v) < v ? x : r(v) < v ? s(v) < v ? k : $ : n(v) < v ? E : T)(v);
  }
  return d.invert = function(v) {
    return new Date(p(v));
  }, d.domain = function(v) {
    return arguments.length ? g(Array.from(v, gu)) : g().map(mu);
  }, d.ticks = function(v) {
    var L = g();
    return e(L[0], L[L.length - 1], v ?? 10);
  }, d.tickFormat = function(v, L) {
    return L == null ? I : f(L);
  }, d.nice = function(v) {
    var L = g();
    return (!v || typeof v.range != "function") && (v = t(L[0], L[L.length - 1], v ?? 10)), v ? g(Jl(L, v)) : d;
  }, d.copy = function() {
    return ql(d, ws(e, t, n, r, s, o, i, l, u, f));
  }, d;
}
function bu() {
  return vl.apply(ws(fc, hc, ze, Ur, Cn, Nt, Wr, zr, st, Ss).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function xu({
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
  const f = te(null), [d, p] = ne(!1), [g, b] = ne(!1), S = t(e.start), m = t(e.end), x = Math.max(m - S, 20), k = () => {
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
  }, $ = e.progress ? x * e.progress / 100 : 0, E = () => {
    n?.(e);
  }, T = () => {
    r?.(e);
  }, I = (N) => {
    N.key === "Enter" ? (N.preventDefault(), E()) : N.key === " " && (N.preventDefault(), T());
  }, v = () => {
    p(!0);
  }, L = () => {
    p(!1);
  }, M = () => {
    b(!0), l?.();
  }, w = () => {
    b(!1);
  }, C = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (g || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), c = {
    "--task-left": `${S}px`,
    "--task-width": `${x}px`,
    "--task-color": k(),
    left: `${S}px`,
    width: `${x}px`,
    backgroundColor: k()
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
      onClick: E,
      onDoubleClick: T,
      onKeyDown: I,
      onMouseDown: v,
      onMouseUp: L,
      onFocus: M,
      onBlur: w,
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
function vu({ viewStart: e, viewEnd: t, dateCount: n }) {
  const r = [];
  for (let b = e.getTime(); b <= t.getTime(); b += 864e5)
    r.push(new Date(b));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = ne(-1), u = te(null), f = (b) => {
    if (b.key === "ArrowLeft") {
      b.preventDefault();
      const S = Math.max(0, i === -1 ? 0 : i - 1);
      l(S), g(S);
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const S = Math.min(r.length - 1, i === -1 ? 0 : i + 1);
      l(S), g(S);
    } else if (b.key === "ArrowDown") {
      b.preventDefault();
      const S = document.querySelector(".gantt-row .timeline-container");
      S && S.focus();
    } else if (b.key === "Home")
      b.preventDefault(), l(0), g(0);
    else if (b.key === "End") {
      b.preventDefault();
      const S = r.length - 1;
      l(S), g(S);
    }
  }, d = (b) => {
    if (b.key === "ArrowDown") {
      b.preventDefault();
      const S = document.querySelector(".gantt-row .resource-label");
      S && S.focus();
    } else if (b.key === "ArrowRight") {
      b.preventDefault();
      const S = u.current;
      S && S.focus();
    }
  }, p = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (b) => {
    const S = u.current?.querySelector(`[data-date-index="${b}"]`);
    S && S.focus();
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
            children: r.map((b, S) => {
              const m = b.getTime() === o.getTime(), x = i === S;
              return /* @__PURE__ */ a.jsx(
                "div",
                {
                  "data-date-index": S,
                  className: `date-column ${m ? "today" : ""} ${x ? "focused" : ""}`,
                  tabIndex: x ? 0 : -1,
                  role: "button",
                  "aria-label": `${b.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(S),
                  onKeyDown: f,
                  children: b.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                S
              );
            })
          }
        )
      ]
    }
  );
}
function yu({ resource: e, tasks: t, scale: n, onTaskClick: r, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
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
        const x = Math.max(0, f - 1);
        d(x), p.current?.querySelector(`[data-task-index="${x}"]`)?.focus();
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
  }, S = (m) => {
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
            children: t.map((m, x) => /* @__PURE__ */ a.jsx(
              xu,
              {
                task: m,
                scale: n,
                onTaskClick: r,
                onTaskDoubleClick: s,
                isSelected: l && f === x,
                taskIndex: x,
                tabIndex: l && f === x ? 0 : -1,
                onFocus: () => S(x)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function Ap({
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
    const m = new ResizeObserver((x) => {
      const k = x[0];
      k && u(Math.max(k.contentRect.width - 220, 400));
    });
    return m.observe(i.current), () => m.disconnect();
  }, []);
  const g = oe(
    () => bu().domain([f, d]).range([0, l]),
    [f, d, l]
  ), b = oe(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((x) => {
      const k = m.get(x.resourceId) || [];
      k.push(x), m.set(x.resourceId, k);
    }), m;
  }, [t]), S = (m) => {
    if (m.target === m.currentTarget)
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault();
          const x = i.current?.querySelector(".gantt-row .resource-label");
          x && x.focus();
          break;
        case "Home":
          m.preventDefault();
          const k = i.current?.querySelector(".header-resource");
          k && k.focus();
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
      onKeyDown: S,
      children: [
        /* @__PURE__ */ a.jsx(vu, { viewStart: f, viewEnd: d, dateCount: p }),
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
            children: e.map((m, x) => /* @__PURE__ */ a.jsx(
              yu,
              {
                resource: m,
                tasks: b.get(m.id) || [],
                scale: g,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: x,
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
const qt = ({
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
) }), ku = ({
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
    (k) => de.isValidElement(k) && (k.type === qt || k.type?.displayName === "BreadcrumbItem")
  ).map((k) => ({
    text: typeof k.props.children == "string" ? k.props.children : String(k.props.children),
    href: k.props.href,
    active: k.props.active,
    attributes: k.props.attributes
  })) : [], f = () => t ? u() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const x = f();
    if (x && x.length > 0) {
      const k = x.slice().reverse().find(($) => $.href && !$.active);
      if (k)
        return { href: k.href, text: k.text };
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
          de.Children.map(t, (x, k) => de.isValidElement(x) && (x.type === qt || x.type?.displayName === "BreadcrumbItem") ? de.cloneElement(x, { key: k }) : null)
        ) : (
          // Render from items array
          p?.map((x, k) => /* @__PURE__ */ a.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: x.active ? /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...x.attributes || {},
              children: x.text
            }
          ) : /* @__PURE__ */ a.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: x.href,
              role: "link",
              ...x.attributes || {},
              children: x.text
            }
          ) }, k))
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
}, Su = ku;
Su.Item = qt;
qt.displayName = "BreadcrumbItem";
const _s = ({
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
}, zp = ({
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
}, Wp = ({
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
}, Op = ({
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
  "aria-label": S,
  "aria-labelledby": m,
  "aria-describedby": x
}) => {
  const k = [
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
  ].filter(Boolean).join(" "), E = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), T = () => {
    if (n)
      return /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const L = () => l && e !== "feature" ? /* @__PURE__ */ a.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ a.jsx(
      He,
      {
        level: r,
        className: E,
        children: L()
      }
    );
  }, I = () => p || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-card__description", children: o }) : null), v = () => e !== "primary" ? null : /* @__PURE__ */ a.jsxs(
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
      className: k,
      "data-testid": g,
      id: b,
      "aria-label": S,
      "aria-labelledby": m,
      "aria-describedby": x,
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
          T(),
          I(),
          v()
        ] })
      ]
    }
  );
}, Up = ({
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
}, Vp = ({
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
  const S = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), x = () => {
    if (n)
      return /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const $ = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], E = /* @__PURE__ */ a.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        $,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ a.jsx(
      He,
      {
        level: r,
        className: m,
        children: E
      }
    );
  }, k = () => u || (i ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ a.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: S,
      "data-testid": f,
      id: d,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-describedby": b,
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          x(),
          /* @__PURE__ */ a.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ a.jsx("div", { className: "nhsuk-care-card__content", children: k() })
      ]
    }
  );
}, wu = ({
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
    He,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ a.jsx(
    He,
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
}, Gp = ({
  text: e,
  html: t,
  children: n,
  className: r,
  ...s
}) => {
  const o = Y("nhsuk-inset-text", r), i = () => n || (t ? /* @__PURE__ */ a.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ a.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ a.jsx("div", { className: o, ...s, children: i() });
}, Kp = ({
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
}, qp = ({
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
  const S = `nhsuk-table__caption ${r ? `nhsuk-table__caption--${r}` : ""}`.trim(), m = Y(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), x = Y(p), k = (T, I) => {
    const v = Y("nhsuk-table__header", {
      [`nhsuk-table__header--${T.format}`]: T.format
    }, T.classes), L = {
      scope: "col",
      ...T.colspan && { colSpan: T.colspan },
      ...T.rowspan && { rowSpan: T.rowspan },
      ...o && { role: "columnheader" },
      ...T.attributes
    };
    return /* @__PURE__ */ a.jsx("th", { className: v, ...L, children: T.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text }, I);
  }, $ = (T, I, v) => {
    const L = s && v, M = Y(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${T.format}`]: T.format
      },
      T.classes
    ), w = {
      ...L && { scope: "row" },
      ...T.colspan && { colSpan: T.colspan },
      ...T.rowspan && { rowSpan: T.rowspan },
      ...o && {
        role: L ? "rowheader" : "cell",
        ...T.header && { "data-label": T.header }
      },
      ...T.attributes
    }, C = /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      o && T.header && /* @__PURE__ */ a.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        T.header,
        " "
      ] }),
      T.html ? /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text
    ] }), c = L ? "th" : "td";
    return /* @__PURE__ */ a.jsx(c, { className: M, ...w, children: C }, I);
  }, E = () => /* @__PURE__ */ a.jsxs(
    "table",
    {
      className: m,
      ...o && { role: "table" },
      ...g,
      ...b && { "data-testid": b },
      children: [
        n && /* @__PURE__ */ a.jsx("caption", { className: S, children: n }),
        t && t.length > 0 && /* @__PURE__ */ a.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ a.jsx("tr", { ...o && { role: "row" }, children: t.map((T, I) => k(T, I)) })
          }
        ),
        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((T, I) => /* @__PURE__ */ a.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: T.map(
              (v, L) => $(v, L, L === 0)
            )
          },
          I
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ a.jsxs(wu, { className: f, children: [
    i && /* @__PURE__ */ a.jsx(He, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    E()
  ] }) : x ? /* @__PURE__ */ a.jsx("div", { className: x, children: E() }) : E();
}, Xp = Qe(({
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
  const b = n !== void 0, [S, m] = ne(() => t || e[0]?.id || ""), x = b ? n : S, k = te(null), $ = te(/* @__PURE__ */ new Map()), E = J((C) => {
    b || m(C), r?.(C);
  }, [b, r]), T = J((C) => {
    s?.(C), l && E(C);
  }, [s, l, E]), I = J((C, c) => {
    const N = e.filter((P) => !P.disabled).map((P) => P.id), q = N.indexOf(c);
    let j = null;
    switch (C.key) {
      case "ArrowLeft":
        j = q > 0 ? q - 1 : N.length - 1;
        break;
      case "ArrowRight":
        j = q < N.length - 1 ? q + 1 : 0;
        break;
      case "Home":
        j = 0;
        break;
      case "End":
        j = N.length - 1;
        break;
      case "Escape":
        C.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (j !== null) {
      C.preventDefault();
      const P = N[j], h = $.current.get(P);
      h && (h.focus(), T(P));
    }
  }, [e, T, i]), v = J((C, c) => {
    c ? $.current.set(C, c) : $.current.delete(C);
  }, []), L = J((C) => {
    const c = $.current.get(C);
    c && c.focus();
  }, []);
  Ia(g, () => ({
    focusTab: L,
    getActiveTab: () => x,
    getTabListElement: () => k.current
  }), [L, x]);
  const M = J((C) => {
    const c = C.relatedTarget;
    k.current?.contains(c) || o?.();
  }, [o]), w = Y("nhsuk-tabs", u);
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: w,
      id: f,
      "data-testid": d,
      ...p,
      children: [
        /* @__PURE__ */ a.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ a.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: k,
            children: /* @__PURE__ */ a.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: M,
                children: e.map((C) => {
                  const c = C.id === x, N = C.disabled, q = Y("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": c,
                    "nhsuk-tabs__list-item--disabled": N
                  });
                  return /* @__PURE__ */ a.jsx("li", { className: q, children: /* @__PURE__ */ a.jsx(
                    "button",
                    {
                      ref: (j) => v(C.id, j),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": c,
                      "aria-controls": `${C.id}-panel`,
                      id: `${C.id}-tab`,
                      tabIndex: c ? 0 : -1,
                      disabled: N,
                      onClick: () => !N && E(C.id),
                      onKeyDown: (j) => !N && I(j, C.id),
                      onFocus: () => !N && T(C.id),
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
          const c = C.id === x;
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
}), _u = Qe(
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
_u.displayName = "Details";
const Tu = Qe(
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
      He,
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
          /* @__PURE__ */ a.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ a.jsx("ul", { className: f.join(" "), role: "list", children: n.map((b, S) => /* @__PURE__ */ a.jsxs("li", { children: [
            d(),
            p(b.item)
          ] }, S)) }) })
        ]
      }
    );
  }
);
Tu.displayName = "DoDontList";
const $u = Qe(
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
$u.displayName = "Expander";
const Cu = Qe(
  ({ items: e, idPrefix: t = "task-list", className: n, ...r }, s) => {
    const o = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const f = u + 1, d = `${t}-${f}-hint`, p = `${t}-${f}-status`, g = !!l.href, b = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), S = [
        l.hint && d,
        p
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ a.jsx(
        Nu,
        {
          item: l,
          itemClasses: b,
          hasLink: g,
          hintId: d,
          statusId: p,
          ariaDescribedBy: S
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
), Nu = ({
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
    return e.status.tag ? d = /* @__PURE__ */ a.jsx(jr, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ a.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ a.jsx("div", { className: f, id: s, children: d });
  };
  return /* @__PURE__ */ a.jsxs("li", { className: t, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
Cu.displayName = "TaskList";
const Zp = ({
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
        La(
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
}, Jp = ({
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
}, ju = ({
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
    /* @__PURE__ */ a.jsx(He, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Qp = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const r = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a.jsx("div", { className: r, ...n, children: /* @__PURE__ */ a.jsx(rl, { children: e.map((s, o) => /* @__PURE__ */ a.jsx(
    Br,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ a.jsx(ju, { ...s })
    },
    o
  )) }) });
}, Eu = de.forwardRef(
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
    striped: S = !1,
    responsive: m = !1,
    tableType: x = "default"
  }, k) => {
    const $ = te(null), E = te(null), T = te(null);
    de.useImperativeHandle(k, () => $.current, []);
    const [I, v] = ne(0), [L, M] = ne(0), [w, C] = ne("headers"), [c, N] = ne("browse"), q = t.length, j = e.length, P = oe(() => !n || n.length === 0 ? e : [...e].sort((z, X) => {
      for (const { key: O, direction: _ } of n) {
        const y = z[O], H = X[O];
        if (y == null && H == null) continue;
        if (y == null) return 1;
        if (H == null) return -1;
        let K = 0;
        if (typeof y == "number" && typeof H == "number" ? K = y - H : K = String(y).localeCompare(String(H)), K !== 0)
          return _ === "asc" ? K : -K;
      }
      return 0;
    }), [e, n]), h = J((z, X) => {
      setTimeout(() => {
        const O = $.current?.querySelector(
          `tbody tr:nth-child(${z + 1}) td:nth-child(${X + 1})`
        );
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), R = J((z) => {
      setTimeout(() => {
        const X = $.current?.querySelector(`th:nth-child(${z + 1})`);
        X && (X.focus(), typeof X.scrollIntoView == "function" && X.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), U = J((z) => {
      r?.(z);
    }, [r]), Q = J((z) => {
      o?.(z);
    }, [o]), F = J((z) => {
      const { key: X } = z;
      switch (X) {
        case "Enter":
          if (z.preventDefault(), w === "headers" && c === "browse")
            N("navigate"), R(L);
          else if (w === "headers" && c === "navigate") {
            const O = t[L];
            O && U(O.key);
          } else w === "cells" && c === "browse" ? (N("navigate"), h(I, L)) : w === "cells" && c === "navigate" && Q(I);
          break;
        case "Escape":
          z.preventDefault(), (w === "headers" && c === "navigate" || w === "cells" && c === "navigate") && N("browse");
          break;
        case "ArrowLeft":
          if (z.preventDefault(), c === "navigate" || c === "browse" && w === "headers") {
            if (w === "headers") {
              const O = Math.max(0, L - 1);
              M(O), R(O);
            } else if (w === "cells") {
              const O = Math.max(0, L - 1);
              M(O), h(I, O);
            }
          }
          break;
        case "ArrowRight":
          if (z.preventDefault(), c === "navigate" || c === "browse" && w === "headers") {
            if (w === "headers") {
              const O = Math.min(q - 1, L + 1);
              M(O), R(O);
            } else if (w === "cells") {
              const O = Math.min(q - 1, L + 1);
              M(O), h(I, O);
            }
          }
          break;
        case "ArrowUp":
          if (z.preventDefault(), w === "cells") {
            if (c === "browse") {
              const O = Math.max(0, I - 1);
              v(O), h(O, 0), M(0);
            } else if (c === "navigate")
              if (I > 0) {
                const O = I - 1;
                v(O), h(O, L);
              } else
                C("headers"), N("browse"), R(L);
          }
          break;
        case "ArrowDown":
          if (z.preventDefault(), w === "headers" && c === "browse")
            C("cells"), v(0), M(0), h(0, 0);
          else if (w === "cells") {
            const O = j - 1;
            if (c === "browse") {
              const _ = Math.min(O, I + 1);
              v(_), h(_, 0), M(0);
            } else if (c === "navigate" && I < O) {
              const _ = I + 1;
              v(_), h(_, L);
            }
          }
          break;
        case "Home":
          z.preventDefault(), w === "headers" ? (M(0), R(0)) : w === "cells" && (z.ctrlKey ? (v(0), M(0), h(0, 0)) : (M(0), h(I, 0)));
          break;
        case "End":
          if (z.preventDefault(), w === "headers") {
            const O = q - 1;
            M(O), R(O);
          } else if (w === "cells")
            if (z.ctrlKey) {
              const O = j - 1, _ = q - 1;
              v(O), M(_), h(O, _);
            } else {
              const O = q - 1;
              M(O), h(I, O);
            }
          break;
        case " ":
          if (z.preventDefault(), w === "headers" && c === "navigate") {
            const O = t[L];
            O && U(O.key);
          } else w === "cells" && c === "navigate" && Q(I);
          break;
      }
    }, [
      w,
      c,
      L,
      I,
      q,
      j,
      t,
      h,
      R,
      U,
      Q
    ]);
    se(() => {
      const z = $.current;
      if (z)
        return z.addEventListener("keydown", F), () => z.removeEventListener("keydown", F);
    }, [F]);
    const V = Y(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": b,
        "nhsuk-table--striped": S,
        "nhsuk-table--compact": x === "compact"
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
          /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { ref: E, role: "row", children: t.map((z, X) => {
            const O = n?.find((H) => H.key === z.key), _ = !!O, y = w === "headers" && L === X;
            return /* @__PURE__ */ a.jsx(
              "th",
              {
                className: Y("sortable-header", {
                  "sortable-header--focused": y
                }),
                role: "columnheader",
                tabIndex: y ? 0 : -1,
                onClick: () => U(z.key),
                onKeyDown: (H) => {
                  (H.key === "Enter" || H.key === " ") && (H.preventDefault(), U(z.key));
                },
                "aria-sort": _ ? O?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ a.jsx("span", { className: "header-label", children: z.label }),
                  _ && /* @__PURE__ */ a.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ a.jsx("span", { className: "sort-priority", children: n.findIndex((H) => H.key === z.key) + 1 }),
                    /* @__PURE__ */ a.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: O?.direction === "asc" ? /* @__PURE__ */ a.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ a.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              z.key
            );
          }) }) }),
          /* @__PURE__ */ a.jsx("tbody", { ref: T, className: "nhsuk-table__body", role: "rowgroup", children: P.map((z, X) => {
            const O = s === X, _ = w === "cells" && I === X;
            return /* @__PURE__ */ a.jsx(
              "tr",
              {
                role: "row",
                className: Y("data-row", {
                  "data-row--selected": O,
                  "data-row--focused": _
                }),
                "aria-selected": O,
                children: t.map((y, H) => {
                  const K = y.render ? y.render(z) : z[y.key], B = w === "cells" && I === X && L === H, A = () => typeof K == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                    /* @__PURE__ */ a.jsx("span", { "aria-hidden": "true", children: K ? "✓" : "✗" }),
                    /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: K ? "Yes" : "No" })
                  ] }) : String(K ?? "");
                  return /* @__PURE__ */ a.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: Y("data-cell", {
                        "data-cell--focused": B
                      }),
                      tabIndex: B ? 0 : -1,
                      onClick: () => Q(X),
                      children: A()
                    },
                    y.key
                  );
                })
              },
              X
            );
          }) })
        ]
      }
    );
  }
);
Eu.displayName = "AriaDataGrid";
const Fu = ({
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
  const p = te(null), g = te(null), b = te(null), S = J((w, C) => {
    u || (g.current = C, w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", C));
  }, [u]), m = J((w, C) => {
    u || g.current === C || (w.preventDefault(), w.dataTransfer.dropEffect = "move", b.current = C);
  }, [u]), x = J((w, C) => {
    if (u) return;
    w.preventDefault();
    const c = g.current;
    if (!c || c === C) return;
    const N = e.findIndex((j) => j.key === c), q = e.findIndex((j) => j.key === C);
    if (N !== -1 && q !== -1) {
      const j = [...e], [P] = j.splice(N, 1);
      j.splice(q, 0, P), n(j);
    }
    g.current = null, b.current = null;
  }, [u, e, n]), k = J(() => {
    g.current = null, b.current = null;
  }, []), $ = J((w) => {
    const C = t.find((c) => c.key === w);
    return C ? C.label : w;
  }, [t]), E = J((w) => ["red", "orange", "blue", "aqua-green", "grey"][w] || "grey", []), T = J((w) => {
    if (u) return;
    const C = e.map(
      (c) => c.key === w ? { ...c, direction: c.direction === "asc" ? "desc" : "asc" } : c
    );
    n(C);
  }, [e, n, u]), I = J((w) => {
    if (u) return;
    const C = e.filter((c) => c.key !== w);
    n(C);
  }, [e, n, u]), v = J(() => {
    u || n([]);
  }, [n, u]), L = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const w = e.map((C, c) => {
      const N = C.direction === "asc" ? "ascending" : "descending";
      return `${c + 1}. ${$(C.key)} (${N})`;
    });
    if (w.length === 1)
      return `Sorted by: ${w[0]}`;
    if (w.length === 2)
      return `Sorted by: ${w.join(" and ")}`;
    {
      const C = w.pop();
      return `Sorted by: ${w.join(", ")}, and ${C}`;
    }
  }, M = oe(() => {
    const w = ["sort-description"];
    return l && w.push("sort-help"), d && w.push(d), w.join(" ");
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
          "aria-describedby": M,
          children: e.map((w, C) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (c) => S(c, w.key),
              onDragOver: (c) => m(c, w.key),
              onDrop: (c) => x(c, w.key),
              onDragEnd: k,
              onClick: () => T(w.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": w.key,
              children: /* @__PURE__ */ a.jsx(
                jr,
                {
                  color: E(C),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => I(w.key),
                  disabled: u,
                  children: /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ a.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${C + 1}`, children: C + 1 }),
                    /* @__PURE__ */ a.jsx("span", { className: "sort-status-control__tag-label", children: $(w.key) }),
                    /* @__PURE__ */ a.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (c) => {
                          c.stopPropagation(), T(w.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${$(w.key)}. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ a.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${w.direction}`, children: /* @__PURE__ */ a.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${w.direction}`,
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
            w.key
          ))
        }
      ),
      i && /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ a.jsx(
        Nr,
        {
          variant: "secondary",
          onClick: v,
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
function Du(e, t) {
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
const Ma = Qe(
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
      isLoading: S = !1,
      loadingComponent: m,
      error: x = null,
      errorComponent: k,
      "data-testid": $
    } = t, {
      dataComparator: E = (_, y) => JSON.stringify(_) === JSON.stringify(y),
      filterFunction: T = (_) => _,
      booleanRenderer: I = (_) => _ ? "✓" : "✗"
    } = r || {}, v = o !== void 0, L = o ?? 0, [M, w] = ne({
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
    }), [L]), [c, N] = yo(Du, C);
    se(() => {
      const _ = c.tabLoadingStates.length, y = s.length;
      _ !== y && N({ type: "ADJUST_ARRAYS", payload: { newLength: y } });
    }, [s.length]), se(() => {
      v && N({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, v]), se(() => {
      l && l(c.globalSelectedRowData);
    }, [c.globalSelectedRowData, l]);
    const q = J((_, y) => E(_, y), [E]), j = J((_) => {
      _ >= 0 && _ < s.length && !s[_].disabled && (N({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
    }, [s, i]), P = J((_, y) => {
      const { key: H } = _;
      switch (H) {
        case "ArrowLeft":
          _.preventDefault();
          const K = y > 0 ? y - 1 : s.length - 1;
          j(K), w((W) => ({ ...W, focusedTabIndex: K })), h.current[K]?.focus();
          break;
        case "ArrowRight":
          _.preventDefault();
          const B = y < s.length - 1 ? y + 1 : 0;
          j(B), w((W) => ({ ...W, focusedTabIndex: B })), h.current[B]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), w((W) => ({
            ...W,
            focusArea: "headers",
            focusedHeaderIndex: 0
          })), Q(0);
          break;
        case "Home":
          _.preventDefault(), j(0), w((W) => ({ ...W, focusedTabIndex: 0 })), h.current[0]?.focus();
          break;
        case "End":
          _.preventDefault();
          const A = s.length - 1;
          j(A), w((W) => ({ ...W, focusedTabIndex: A })), h.current[A]?.focus();
          break;
        case "Enter":
        case " ":
          _.preventDefault(), j(y);
          break;
      }
    }, [s.length, j]), h = te([]), R = te([]), U = J((_, y) => {
      const H = c.sortConfig || [], K = H.find((W) => W.key === y);
      let B;
      K ? K.direction === "asc" ? B = H.map(
        (W) => W.key === y ? { ...W, direction: "desc" } : W
      ) : B = H.filter((W) => W.key !== y) : B = [...H, { key: y, direction: "asc" }], N({
        type: "SET_SORT",
        payload: B
      }), s[_].onSort?.(y);
    }, [c.sortConfig, s]), Q = J((_) => {
      setTimeout(() => {
        const y = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] th:nth-child(${_ + 1})`
        );
        y && y.focus();
      }, 0);
    }, [c.selectedIndex]), F = J((_) => I(_), [I]), V = J((_, y) => {
      setTimeout(() => {
        const H = document.querySelector(
          `[data-tab-panel="${c.selectedIndex}"] tbody tr:nth-child(${_ + 1}) td:nth-child(${y + 1})`
        );
        H && H.focus();
      }, 0);
    }, [c.selectedIndex]), z = J((_, y) => {
      const { key: H } = _, K = s[c.selectedIndex], B = K?.columns.length || 0;
      switch (H) {
        case "ArrowLeft":
          _.preventDefault();
          const A = Math.max(0, y - 1);
          w((Z) => ({ ...Z, focusedHeaderIndex: A })), Q(A);
          break;
        case "ArrowRight":
          _.preventDefault();
          const W = Math.min(B - 1, y + 1);
          w((Z) => ({ ...Z, focusedHeaderIndex: W })), Q(W);
          break;
        case "ArrowUp":
          _.preventDefault(), w((Z) => ({
            ...Z,
            focusArea: "tabs",
            focusedTabIndex: c.selectedIndex
          })), h.current[c.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          _.preventDefault(), w((Z) => ({
            ...Z,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: y,
            isGridActive: !0
          })), V(0, y);
          break;
        case "Home":
          _.preventDefault(), w((Z) => ({ ...Z, focusedHeaderIndex: 0 })), Q(0);
          break;
        case "End":
          _.preventDefault();
          const D = B - 1;
          w((Z) => ({ ...Z, focusedHeaderIndex: D })), Q(D);
          break;
        case "Enter":
        case " ":
          _.preventDefault();
          const re = K?.columns[y]?.key;
          re && U(c.selectedIndex, re);
          break;
      }
    }, [s, c.selectedIndex, U, w, Q, V, h]), X = J((_, y, H) => {
      const { key: K } = _, B = s[c.selectedIndex], A = B?.data.length || 0, W = B?.columns.length || 0;
      switch (K) {
        case "ArrowUp":
          if (_.preventDefault(), y === 0)
            w((G) => ({
              ...G,
              focusArea: "headers",
              focusedHeaderIndex: H,
              isGridActive: !1
            })), Q(H);
          else {
            const G = y - 1;
            w((ee) => ({ ...ee, focusedRowIndex: G })), V(G, H);
          }
          break;
        case "ArrowDown":
          _.preventDefault();
          const D = Math.min(A - 1, y + 1);
          w((G) => ({ ...G, focusedRowIndex: D })), V(D, H);
          break;
        case "ArrowLeft":
          _.preventDefault();
          const re = Math.max(0, H - 1);
          w((G) => ({ ...G, focusedColumnIndex: re })), V(y, re);
          break;
        case "ArrowRight":
          _.preventDefault();
          const Z = Math.min(W - 1, H + 1);
          w((G) => ({ ...G, focusedColumnIndex: Z })), V(y, Z);
          break;
        case "Home":
          _.preventDefault(), _.ctrlKey ? (w((G) => ({ ...G, focusedRowIndex: 0, focusedColumnIndex: 0 })), V(0, 0)) : (w((G) => ({ ...G, focusedColumnIndex: 0 })), V(y, 0));
          break;
        case "End":
          if (_.preventDefault(), _.ctrlKey) {
            const G = A - 1, ee = W - 1;
            w((ce) => ({ ...ce, focusedRowIndex: G, focusedColumnIndex: ee })), V(G, ee);
          } else {
            const G = W - 1;
            w((ee) => ({ ...ee, focusedColumnIndex: G })), V(y, G);
          }
          break;
        case "Enter":
        case " ":
          if (_.preventDefault(), B && B.data[y]) {
            const G = B.data.some((ie) => "ews_data" in ie) ? T(B.data, c.filters) : B.data, ee = c.sortConfig;
            let ce = G;
            if (ee && ee.length > 0 && (ce = [...G].sort((ie, pe) => {
              for (const { key: we, direction: ht } of ee) {
                let ke = ie[we], $e = pe[we];
                const Nn = B.columns.find((xo) => xo.key === we);
                if (Nn?.render && (ke = Nn.render(ie), $e = Nn.render(pe)), ke == null && $e == null) continue;
                if (ke == null) return ht === "asc" ? -1 : 1;
                if ($e == null) return ht === "asc" ? 1 : -1;
                let pt = 0;
                if (typeof ke == "number" && typeof $e == "number" ? pt = ke - $e : pt = String(ke).localeCompare(String($e), void 0, { numeric: !0, sensitivity: "base" }), pt !== 0)
                  return ht === "asc" ? pt : -pt;
              }
              return 0;
            })), ce[y]) {
              const ie = ce[y], we = c.globalSelectedRowData && q(c.globalSelectedRowData, ie) ? null : ie;
              N({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: we
              });
            }
          }
          break;
      }
    }, [s, c.selectedIndex, c.filters, c.sortConfig, T, q, N, w, Q, V]), O = J((_, y) => T(_, y), [T]);
    return Ia(n, () => ({
      selectTab: (_) => {
        _ >= 0 && _ < s.length && (N({ type: "SET_SELECTED_INDEX", payload: _ }), i?.(_));
      },
      refreshData: (_) => {
        console.log("Refreshing data for tab:", _ ?? "all");
      },
      exportData: (_) => {
        const y = _ ?? c.selectedIndex, H = s[y];
        return H ? H.data : [];
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
    }), [c.selectedIndex, c.selectedRows, s, i]), S ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": $, children: m || /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ a.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : x ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": $, children: k || /* @__PURE__ */ a.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ a.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ a.jsx("p", { children: x })
    ] }) }) : /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${d}`,
        id: b,
        "data-testid": $,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${b}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ a.jsx(
            Fu,
            {
              sortConfig: c.sortConfig || [],
              columns: s.flatMap(
                (_) => _.columns.map((y) => ({ key: y.key, label: y.label }))
              ).filter(
                (_, y, H) => H.findIndex((K) => K.key === _.key) === y
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
              children: s.map((_, y) => {
                const H = y === c.selectedIndex, K = _.disabled || p;
                return /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${_.id}`,
                    "aria-controls": `panel-${_.id}`,
                    "aria-selected": H,
                    "aria-disabled": K,
                    tabIndex: H ? 0 : -1,
                    ref: (B) => {
                      h.current[y] = B;
                    },
                    onClick: () => j(y),
                    onKeyDown: (B) => P(B, y),
                    disabled: K,
                    className: `
                  aria-tabs-datagrid__tab
                  ${H ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${K ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: _.label }),
                      c.tabLoadingStates[y] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      c.tabErrors[y] && /* @__PURE__ */ a.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  _.id
                );
              })
            }
          ),
          s.map((_, y) => {
            const H = y === c.selectedIndex;
            return /* @__PURE__ */ a.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${_.id}`,
                "aria-labelledby": `tab-${_.id}`,
                tabIndex: 0,
                hidden: !H,
                ref: (K) => {
                  R.current[y] = K;
                },
                className: `aria-tabs-datagrid__panel ${_.className || ""}`,
                "data-tab-panel": y,
                children: H && (() => {
                  const K = _.data.some((A) => "ews_data" in A) ? O(_.data, c.filters) : _.data, B = oe(() => {
                    const A = c.sortConfig;
                    return !A || A.length === 0 ? K : [...K].sort((W, D) => {
                      for (const { key: re, direction: Z } of A) {
                        let G = W[re], ee = D[re];
                        const ce = _.columns.find((pe) => pe.key === re);
                        if (ce?.render && (G = ce.render(W), ee = ce.render(D)), G == null && ee == null) continue;
                        if (G == null) return 1;
                        if (ee == null) return -1;
                        let ie = 0;
                        if (typeof G == "number" && typeof ee == "number" ? ie = G - ee : typeof G == "boolean" && typeof ee == "boolean" ? ie = G === ee ? 0 : G ? 1 : -1 : ie = String(G).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), ie !== 0)
                          return Z === "asc" ? ie : -ie;
                      }
                      return 0;
                    });
                  }, [K, c.sortConfig, _.columns]);
                  return /* @__PURE__ */ a.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": _.ariaLabel,
                      "aria-describedby": _.ariaDescription,
                      children: [
                        /* @__PURE__ */ a.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ a.jsx("tr", { role: "row", children: _.columns.map((A, W) => {
                          const D = c.sortConfig?.find((G) => G.key === A.key), re = !!D, Z = M.focusArea === "headers" && M.focusedHeaderIndex === W;
                          return /* @__PURE__ */ a.jsx(
                            "th",
                            {
                              className: `sortable-header ${Z ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: Z ? 0 : -1,
                              onClick: () => U(y, A.key),
                              onKeyDown: (G) => z(G, W),
                              "aria-sort": re ? D?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ a.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ a.jsx("span", { className: "header-label", children: A.label }),
                                /* @__PURE__ */ a.jsxs("div", { className: `sort-indicator-container ${re ? `sort-indicator--${D?.direction}` : ""}`, children: [
                                  c.sortConfig && c.sortConfig.length > 0 && c.sortConfig.findIndex((G) => G.key === A.key) !== -1 && /* @__PURE__ */ a.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${c.sortConfig.findIndex((G) => G.key === A.key) + 1}`,
                                      "data-priority": c.sortConfig.findIndex((G) => G.key === A.key) + 1,
                                      title: `Sort priority: ${c.sortConfig.findIndex((G) => G.key === A.key) + 1}`,
                                      children: c.sortConfig.findIndex((G) => G.key === A.key) + 1
                                    }
                                  ),
                                  re && /* @__PURE__ */ a.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${D?.direction}`,
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
                        /* @__PURE__ */ a.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: B.map((A, W) => {
                          const D = c.globalSelectedRowData && q(c.globalSelectedRowData, A), re = M.focusArea === "cells" && M.focusedRowIndex === W;
                          return /* @__PURE__ */ a.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${D ? "data-row--selected" : ""} ${re ? "data-row--focused" : ""}`,
                              "aria-selected": D,
                              children: _.columns.map((Z, G) => {
                                const ee = Z.render ? Z.render(A) : A[Z.key], ce = M.focusArea === "cells" && M.focusedRowIndex === W && M.focusedColumnIndex === G, ie = () => typeof ee == "boolean" ? /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
                                  F(ee),
                                  /* @__PURE__ */ a.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ a.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${ce ? "data-cell--focused" : ""}`,
                                    tabIndex: ce ? 0 : -1,
                                    onClick: () => {
                                      const we = c.globalSelectedRowData && q(c.globalSelectedRowData, A) ? null : A;
                                      N({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: we
                                      });
                                    },
                                    onKeyDown: (pe) => X(pe, W, G),
                                    children: ie()
                                  },
                                  Z.key
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
function Pu(e, t) {
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
const em = ({
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: r = {},
  ...s
}) => {
  const o = Pu(e, t), {
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
          Bu,
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
  ] }) : o === "hybrid" ? /* @__PURE__ */ a.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${s.className || ""}`, children: /* @__PURE__ */ a.jsx(Ma, { ...s, className: "aria-tabs-datagrid-adaptive__table--hybrid" }) }) : /* @__PURE__ */ a.jsx(Ma, { ...s });
}, Bu = ({
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
}, Lt = {
  asc: "↑",
  desc: "↓"
}, Mu = (e) => [...e].sort((t, n) => t.priority - n.priority);
function zn(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Lu(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Iu(e, t) {
  const n = t.find((r) => r.id === e);
  return n ? n.priority > 0 : !1;
}
function Ru(e, t) {
  const n = t.find((s) => s.id === e), r = Lu(t);
  return n ? n.priority < r : !1;
}
const tm = ({
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
  const d = oe(() => Mu(e), [e]), p = J(($) => {
    if (l) return;
    const E = e.map(
      (T) => T.id === $ ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    t(E);
  }, [e, t, l]), g = J(($) => {
    if (l) return;
    const E = e.findIndex((I) => I.id === $);
    if (E <= 0) return;
    const T = [...e];
    [T[E], T[E - 1]] = [T[E - 1], T[E]], t(zn(T));
  }, [e, t, l]), b = J(($) => {
    if (l) return;
    const E = e.findIndex((I) => I.id === $);
    if (E >= e.length - 1 || E === -1) return;
    const T = [...e];
    [T[E], T[E + 1]] = [T[E + 1], T[E]], t(zn(T));
  }, [e, t, l]), S = J(($) => {
    if (l) return;
    const E = e.filter((T) => T.id !== $);
    t(zn(E));
  }, [e, t, l]), m = J(() => {
    l || t([]);
  }, [t, l]), x = () => {
    if (e.length === 0)
      return r;
    if (s)
      return s;
    const $ = d.map((E, T) => {
      const I = E.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${E.label} (${I})`;
    });
    if ($.length === 1)
      return `Sorted by: ${$[0]}`;
    if ($.length === 2)
      return `Sorted by: ${$.join(" and ")}`;
    {
      const E = $.pop();
      return `Sorted by: ${$.join(", ")}, and ${E}`;
    }
  }, k = oe(() => {
    const $ = ["sort-description"];
    return i && $.push("sort-help"), f && $.push(f), $.join(" ");
  }, [i, f]);
  return e.length === 0 ? /* @__PURE__ */ a.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: x()
    }
  ) }) : /* @__PURE__ */ a.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ a.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: x()
      }
    ),
    /* @__PURE__ */ a.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": k,
        children: [
          /* @__PURE__ */ a.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map(($) => /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ a.jsx(
                jr,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => S($.id),
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
                        children: $.direction === "asc" ? Lt.asc : Lt.desc
                      }
                    ),
                    /* @__PURE__ */ a.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ a.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g($.id),
                          disabled: l || !Iu($.id, e),
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
                          onClick: () => b($.id),
                          disabled: l || !Ru($.id, e),
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
      Nr,
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
      Lt.asc,
      "/",
      Lt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Ts = (e) => /* @__PURE__ */ a.jsx(is, { ...e }), nm = ({
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
  className: S,
  ...m
}) => {
  const x = {
    service: u,
    navigation: f,
    search: d,
    account: p,
    organisation: g,
    logo: b,
    ...i
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx(_s, { ...o }),
    /* @__PURE__ */ a.jsx(ds, { ...x }),
    /* @__PURE__ */ a.jsx(Ts, { className: S, ...m, children: /* @__PURE__ */ a.jsx(ls, { size: s, children: /* @__PURE__ */ a.jsx(Pr, { children: /* @__PURE__ */ a.jsxs(Br, { width: r, children: [
      t && /* @__PURE__ */ a.jsx(He, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ a.jsx(fs, { ...l })
  ] });
}, rm = ({
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
  const S = {
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
    /* @__PURE__ */ a.jsx(_s, { ...o }),
    /* @__PURE__ */ a.jsx(ds, { ...S }),
    /* @__PURE__ */ a.jsxs(Ts, { className: g, ...b, children: [
      u && /* @__PURE__ */ a.jsx(el, { ...u }),
      /* @__PURE__ */ a.jsx(ls, { size: s, children: /* @__PURE__ */ a.jsx(Pr, { children: /* @__PURE__ */ a.jsxs(Br, { width: r, children: [
        t && /* @__PURE__ */ a.jsx(He, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ a.jsx(fs, { ...l })
  ] });
}, Hu = "150ms", Au = "300ms", zu = "500ms", Wu = "cubic-bezier(0.4, 0, 1, 1)", Ou = "cubic-bezier(0, 0, 0.2, 1)", Uu = "cubic-bezier(0.4, 0, 0.2, 1)", Vu = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Yu = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Gu = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ku = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", qu = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Xu = "1px", Zu = "2px", Ju = "4px", Qu = "4px", ed = "4px", td = "2px", nd = "1px", rd = "0px", ad = "4px", sd = "8px", od = "12px", $s = "#d8dde0", Cs = "#4c6272", Ns = "#d8dde0", js = "#aeb7bd", Es = "#d5281b", Fs = "#005eb8", Ds = "#ffffff", Ps = "#212b32", Bs = "#007f3b", Ms = "#330072", Ls = "#7c2855", Is = "#d5281b", Rs = "#ffeb3b", Hs = "#fff9c4", As = "#ffb81c", zs = "#ed8b00", Ws = "#00a499", Os = "#ae2573", Us = "#4c6272", Vs = "#768692", Ys = "#aeb7bd", Gs = "#d8dde0", Ks = "#f0f4f5", id = "#212b32", ld = "#4c6272", cd = "#ffffff", ud = "#212b32", dd = "#005eb8", fd = "#7c2855", hd = "#003087", pd = "#330072", md = "#ffeb3b", gd = "#212b32", bd = "#d8dde0", xd = "#ffffff33", vd = "#d5281b", yd = "#4c6272", kd = "#ffffff", Sd = "#007f3b", wd = "#ffffff", _d = "#006530", Td = "#004021", $d = "#004021", Cd = "#00000000", Nd = "#ffffff", jd = "#005eb8", Ed = "#005eb8", Fd = "#d9e5f2", Dd = "#c7daf0", Pd = "#005eb8", Bd = "#ffffff", Md = "#212b32", Ld = "#d9dde0", Id = "#b3bcc2", Rd = "#b3bcc2", Hd = "#d5281b", Ad = "#aa2016", zd = "#6a140e", Wd = "#6a140e", Od = "#005eb8", Ud = "#004b93", Vd = "#002f5c", Yd = "#002f5c", Gd = "8px", Kd = "16px", qd = "12px", Xd = "16px", Zd = "4px", Jd = "40px", Qd = "4px", ef = "40px", tf = "12px", nf = "16px", rf = "32px", af = "16px", sf = "20px", of = "28px", lf = "9px", cf = "2px", uf = "16px", df = "24px", ff = "8px", hf = "24px", pf = "16px", mf = "4px", gf = "4px", bf = "4px", xf = "8px", vf = "4px", yf = "16px", kf = "#007f3b", Sf = "#006530", wf = "#004021", _f = "#d8dde0", Tf = "#ffffff", $f = "#768692", Cf = "#00000000", Nf = "#ffeb3b", jf = "#00000000", Ef = "#ffffff", Ff = "#d9e5f2", Df = "#c7daf0", Pf = "#005eb8", Bf = "#005eb8", qs = "8px", Xs = "16px", Zs = "12px", Js = "16px", Mf = "2px", Lf = "4px", If = "4px", Rf = "600", Hf = "#ffffff", Af = "#d8dde0", zf = "#aeb7bd", Wf = "#f0f4f5", Of = "#212b32", Uf = "#212b32", Vf = "#005eb8", Qs = "16px", eo = "32px", to = "16px", Yf = "1px", Gf = "4px", Kf = "none", qf = "0 2px 4px rgba(0, 0, 0, 0.1)", Xf = "#ffffff", Zf = "#ffffff", Jf = "#d8dde0", Qf = "#ffffff", eh = "#4c6272", th = "#ffeb3b", nh = "#d5281b", rh = "#aeb7bd", ah = "#212b32", sh = "#4c6272", oh = "#768692", ih = "#212b32", lh = "#ffffff", ch = "600", uh = "#d5281b", dh = "600", fh = "#4c6272", no = "4px", ro = "40px", ao = "40px", so = "12px", hh = "2px", ph = "4px", mh = "0px", gh = "16px", bh = "18px", xh = "24px", vh = "32px", yh = "34px", kh = "32px", Sh = "40px", wh = "48px", _h = "5.4ex", Th = "7.2ex", $h = "9ex", Ch = "10.8ex", Nh = "20ex", jh = "38ex", Eh = "56ex", Fh = "44px", Dh = "40px", Ph = "1020px", Bh = "100%", Mh = "50%", Lh = "33.333%", Ih = "25%", Rh = "20%", Hh = "320px", Ah = "641px", zh = "1025px", Wh = "1280px", Oh = "960px", Uh = "32px", Vh = "16px", Yh = "#d5281b", Gh = "#d5281b", Kh = "#ffffff", qh = "#007f3b", Xh = "#007f3b", Zh = "#ffffff", Jh = "#ffeb3b", Qh = "#ffeb3b", ep = "#212b32", tp = "#005eb8", np = "#005eb8", rp = "#ffffff", ap = "#d8dde0", sp = "#aeb7bd", op = "#768692", ip = "0 4px 0 #004021", lp = "0 4px 0 #005eb8", cp = "0 4px 0 #6a140e", up = "0 4px 0 #ffeb3b", dp = "none", fp = "0 2px 4px rgba(0, 0, 0, 0.1)", hp = "4px", pp = "0px", mp = "solid", gp = "0 0 0 3px #ffeb3b", bp = "0 0 0 3px #ffeb3b", xp = "none", vp = "0 1px 3px rgba(0, 0, 0, 0.12)", yp = "0 2px 6px rgba(0, 0, 0, 0.16)", kp = "0 4px 12px rgba(0, 0, 0, 0.20)", oo = "0", io = "4px", lo = "8px", co = "16px", uo = "24px", fo = "32px", ho = "40px", po = "48px", mo = "56px", go = "64px", Jn = "0", Qn = "0", er = "4px", tr = "4px", nr = "8px", rr = "8px", ar = "8px", sr = "16px", or = "16px", ir = "24px", lr = "24px", cr = "32px", ur = "32px", dr = "40px", fr = "40px", hr = "48px", pr = "48px", mr = "56px", gr = "56px", br = "64px", Xt = "Frutiger W01", Zt = "Arial, Helvetica, sans-serif", Jt = "sans-serif", Qt = "400", en = "600", tn = "400", nn = "12px", rn = "14px", an = "12pt", sn = "14px", on = "16px", ln = "12pt", cn = "16px", un = "19px", dn = "13pt", fn = "19px", hn = "22px", pn = "15pt", mn = "22px", gn = "26px", bn = "17pt", xn = "27px", vn = "36px", yn = "20pt", kn = "33px", Sn = "48px", wn = "24pt", xr = "16px", vr = "24px", Ce = {
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
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Me = {
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
}, Sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Hu,
  AnimationDurationNormal: Au,
  AnimationDurationSlow: zu,
  AnimationEasingBounce: Vu,
  AnimationEasingEaseIn: Wu,
  AnimationEasingEaseInOut: Uu,
  AnimationEasingEaseOut: Ou,
  BorderColorCard: Ns,
  BorderColorCardHover: js,
  BorderColorDefault: $s,
  BorderColorError: Es,
  BorderColorForm: Cs,
  BorderRadiusLarge: od,
  BorderRadiusMedium: sd,
  BorderRadiusNone: rd,
  BorderRadiusSmall: ad,
  BorderWidthCardBottom: Qu,
  BorderWidthDefault: Xu,
  BorderWidthFormElement: Zu,
  BorderWidthFormElementError: Ju,
  BorderWidthPanel: ed,
  BorderWidthTableCell: nd,
  BorderWidthTableHeader: td,
  BreakpointDesktop: zh,
  BreakpointLargeDesktop: Wh,
  BreakpointMobile: Hh,
  BreakpointTablet: Ah,
  ButtonBorderRadius: Lf,
  ButtonBorderWidth: Mf,
  ButtonPrimaryBackgroundActive: wf,
  ButtonPrimaryBackgroundDefault: kf,
  ButtonPrimaryBackgroundDisabled: _f,
  ButtonPrimaryBackgroundHover: Sf,
  ButtonPrimaryBorderDefault: Cf,
  ButtonPrimaryBorderFocus: Nf,
  ButtonPrimaryTextDefault: Tf,
  ButtonPrimaryTextDisabled: $f,
  ButtonSecondaryBackgroundActive: Df,
  ButtonSecondaryBackgroundDefault: jf,
  ButtonSecondaryBackgroundHover: Ff,
  ButtonSecondaryBackgroundSolid: Ef,
  ButtonSecondaryBorderDefault: Bf,
  ButtonSecondaryTextDefault: Pf,
  ButtonShadowSize: If,
  ButtonSpacingPaddingHorizontalDesktop: Js,
  ButtonSpacingPaddingHorizontalMobile: Xs,
  ButtonSpacingPaddingVerticalDesktop: Zs,
  ButtonSpacingPaddingVerticalMobile: qs,
  ButtonTypographyWeight: Rf,
  CardBackgroundDefault: Hf,
  CardBorderBottom: Wf,
  CardBorderDefault: Af,
  CardBorderHover: zf,
  CardBorderWidthBottom: Gf,
  CardBorderWidthDefault: Yf,
  CardShadowDefault: Kf,
  CardShadowHover: qf,
  CardSpacingHeadingMargin: to,
  CardSpacingPaddingDesktop: eo,
  CardSpacingPaddingMobile: Qs,
  CardTextDescription: Uf,
  CardTextHeading: Of,
  CardTextLink: Vf,
  ColorBorderDefault: bd,
  ColorBorderSecondary: xd,
  ColorButtonLoginActive: Vd,
  ColorButtonLoginBackground: Od,
  ColorButtonLoginHover: Ud,
  ColorButtonLoginShadow: Yd,
  ColorButtonPrimaryActive: Td,
  ColorButtonPrimaryBackground: Sd,
  ColorButtonPrimaryHover: _d,
  ColorButtonPrimaryShadow: $d,
  ColorButtonPrimaryText: wd,
  ColorButtonReverseActive: Id,
  ColorButtonReverseBackground: Bd,
  ColorButtonReverseHover: Ld,
  ColorButtonReverseShadow: Rd,
  ColorButtonReverseText: Md,
  ColorButtonSecondaryActive: Dd,
  ColorButtonSecondaryBackground: Cd,
  ColorButtonSecondaryBackgroundSolid: Nd,
  ColorButtonSecondaryBorder: jd,
  ColorButtonSecondaryHover: Fd,
  ColorButtonSecondaryShadow: Pd,
  ColorButtonSecondaryText: Ed,
  ColorButtonWarningActive: zd,
  ColorButtonWarningBackground: Hd,
  ColorButtonWarningHover: Ad,
  ColorButtonWarningShadow: Wd,
  ColorError: vd,
  ColorFocusBackground: md,
  ColorFocusText: gd,
  ColorFormBackground: kd,
  ColorFormBorder: yd,
  ColorGrey1: Us,
  ColorGrey2: Vs,
  ColorGrey3: Ys,
  ColorGrey4: Gs,
  ColorGrey5: Ks,
  ColorLinkActive: hd,
  ColorLinkDefault: dd,
  ColorLinkHover: fd,
  ColorLinkVisited: pd,
  ColorPrimaryBlack: Ps,
  ColorPrimaryBlue: Fs,
  ColorPrimaryDarkPink: Ls,
  ColorPrimaryGreen: Bs,
  ColorPrimaryPurple: Ms,
  ColorPrimaryRed: Is,
  ColorPrimaryWhite: Ds,
  ColorPrimaryYellow: Rs,
  ColorSecondaryAquaGreen: Ws,
  ColorSecondaryOrange: zs,
  ColorSecondaryPaleYellow: Hs,
  ColorSecondaryPink: Os,
  ColorSecondaryWarmYellow: As,
  ColorTextPrimary: id,
  ColorTextPrint: ud,
  ColorTextReverse: cd,
  ColorTextSecondary: ld,
  ComponentBlur: gf,
  ComponentBreadcrumbChevronMarginLeft: lf,
  ComponentBreadcrumbChevronMarginRight: cf,
  ComponentBreadcrumbPaddingTopDesktop: df,
  ComponentBreadcrumbPaddingTopMobile: uf,
  ComponentButtonPaddingDesktopHorizontal: Xd,
  ComponentButtonPaddingDesktopVertical: qd,
  ComponentButtonPaddingMobileHorizontal: Kd,
  ComponentButtonPaddingMobileVertical: Gd,
  ComponentButtonShadowSize: Zd,
  ComponentCardHeadingMargin: af,
  ComponentCardPaddingDesktop: rf,
  ComponentCardPaddingMobile: nf,
  ComponentDetails: xf,
  ComponentExpander: vf,
  ComponentFormCheckboxLabelPadding: tf,
  ComponentFormCheckboxSize: ef,
  ComponentFormInputMinHeight: Jd,
  ComponentFormInputPadding: Qd,
  ComponentLink: bf,
  ComponentPagination: yf,
  ComponentPanelPaddingDesktop: of,
  ComponentPanelPaddingMobile: sf,
  ComponentSpread: mf,
  ComponentSummaryListCellPaddingHorizontal: hf,
  ComponentSummaryListCellPaddingVertical: ff,
  ComponentSummaryListRowMargin: pf,
  ElevationHigh: kp,
  ElevationLow: vp,
  ElevationMedium: yp,
  ElevationNone: xp,
  FocusOutlineOffset: pp,
  FocusOutlineStyle: mp,
  FocusOutlineWidth: hp,
  FocusShadowButton: bp,
  FocusShadowInput: gp,
  FontFamilyBase: Xt,
  FontFamilyFallback: Zt,
  FontFamilyPrint: Jt,
  FontLineHeightBase: vr,
  FontSize14Mobile: nn,
  FontSize14Print: an,
  FontSize14Tablet: rn,
  FontSize16Mobile: sn,
  FontSize16Print: ln,
  FontSize16Tablet: on,
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
  FontSizeBase: xr,
  FontWeightBold: en,
  FontWeightLight: tn,
  FontWeightNormal: Qt,
  FormBorderRadius: mh,
  FormBorderWidthDefault: hh,
  FormBorderWidthError: ph,
  FormErrorTextDefault: uh,
  FormErrorTypographyWeight: dh,
  FormHintTextDefault: fh,
  FormInputBackgroundDefault: Xf,
  FormInputBackgroundDisabled: Jf,
  FormInputBackgroundError: Qf,
  FormInputBackgroundFocus: Zf,
  FormInputBorderDefault: eh,
  FormInputBorderDisabled: rh,
  FormInputBorderError: nh,
  FormInputBorderFocus: th,
  FormInputTextDefault: ah,
  FormInputTextDisabled: oh,
  FormInputTextPlaceholder: sh,
  FormLabelTextDefault: ih,
  FormLabelTextRequired: lh,
  FormLabelTypographyWeight: ch,
  FormSpacingCheckboxLabelPadding: so,
  FormSpacingCheckboxSize: ao,
  FormSpacingInputMinHeight: ro,
  FormSpacingInputPadding: no,
  GridGutter: Uh,
  GridGutterHalf: Vh,
  GridPageWidth: Oh,
  HeadingsNhsukHeadingL: Ne,
  HeadingsNhsukHeadingM: je,
  HeadingsNhsukHeadingS: Ee,
  HeadingsNhsukHeadingXl: Ce,
  HeadingsNhsukHeadingXs: Fe,
  LayoutColumnActions: Rh,
  LayoutColumnFull: Bh,
  LayoutColumnHalf: Mh,
  LayoutColumnQuarter: Ih,
  LayoutColumnThird: Lh,
  LayoutContainerMaxWidth: Ph,
  ParagraphsBody: De,
  ParagraphsBodyLarge: Pe,
  ParagraphsBodySmall: Be,
  ParagraphsLedeText: Me,
  ParagraphsLedeTextSmall: Le,
  ShadowButtonDefault: ip,
  ShadowButtonFocus: up,
  ShadowButtonSecondary: lp,
  ShadowButtonWarning: cp,
  ShadowCardDefault: dp,
  ShadowCardHover: fp,
  SizeButtonMinHeightDesktop: Dh,
  SizeButtonMinHeightMobile: Fh,
  SizeFormControlLarge: wh,
  SizeFormControlMedium: Sh,
  SizeFormControlSmall: kh,
  SizeFormInputWidth2xl: jh,
  SizeFormInputWidth3xl: Eh,
  SizeFormInputWidthLg: Ch,
  SizeFormInputWidthMd: $h,
  SizeFormInputWidthSm: Th,
  SizeFormInputWidthXl: Nh,
  SizeFormInputWidthXs: _h,
  SizeIconExtraLarge: vh,
  SizeIconLarge: xh,
  SizeIconMedium: bh,
  SizeIconNhsDefault: yh,
  SizeIconSmall: gh,
  Spacing0: oo,
  Spacing1: io,
  Spacing2: lo,
  Spacing3: co,
  Spacing4: uo,
  Spacing5: fo,
  Spacing6: ho,
  Spacing7: po,
  Spacing8: mo,
  Spacing9: go,
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
  StateDisabledBackground: ap,
  StateDisabledBorder: sp,
  StateDisabledText: op,
  StateErrorBackground: Yh,
  StateErrorBorder: Gh,
  StateErrorText: Kh,
  StateInfoBackground: tp,
  StateInfoBorder: np,
  StateInfoText: rp,
  StateSuccessBackground: qh,
  StateSuccessBorder: Xh,
  StateSuccessText: Zh,
  StateWarningBackground: Jh,
  StateWarningBorder: Qh,
  StateWarningText: ep,
  TransitionButtonDefault: Yu,
  TransitionButtonShadow: Gu,
  TransitionCardHover: qu,
  TransitionInputFocus: Ku
}, Symbol.toStringTag, { value: "Module" })), am = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), sm = ({
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
), om = ({
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
), im = ({
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
), lm = ({
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
), cm = ({
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
), pm = ({
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
), mm = () => oe(() => Sp, []), gm = () => oe(() => ({
  // Border colors
  BorderColorDefault: $s,
  BorderColorForm: Cs,
  BorderColorCard: Ns,
  BorderColorCardHover: js,
  BorderColorError: Es,
  // Primary colors
  ColorPrimaryBlue: Fs,
  ColorPrimaryWhite: Ds,
  ColorPrimaryBlack: Ps,
  ColorPrimaryGreen: Bs,
  ColorPrimaryPurple: Ms,
  ColorPrimaryDarkPink: Ls,
  ColorPrimaryRed: Is,
  ColorPrimaryYellow: Rs,
  // Secondary colors
  ColorSecondaryPaleYellow: Hs,
  ColorSecondaryWarmYellow: As,
  ColorSecondaryOrange: zs,
  ColorSecondaryAquaGreen: Ws,
  ColorSecondaryPink: Os,
  // Grey scale
  ColorGrey1: Us,
  ColorGrey2: Vs,
  ColorGrey3: Ys,
  ColorGrey4: Gs,
  ColorGrey5: Ks
}), []), bm = () => oe(() => ({
  Spacing0: oo,
  Spacing1: io,
  Spacing2: lo,
  Spacing3: co,
  Spacing4: uo,
  Spacing5: fo,
  Spacing6: ho,
  Spacing7: po,
  Spacing8: mo,
  Spacing9: go
}), []), xm = () => oe(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: nn,
    Size16: sn,
    Size19: cn,
    Size22: fn,
    Size26: mn,
    Size36: xn,
    Size48: kn
  },
  Tablet: {
    Size14: rn,
    Size16: on,
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
    Size: xr,
    LineHeight: vr
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
  FontSize16Mobile: sn,
  FontSize16Tablet: on,
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
  FontSizeBase: xr,
  FontLineHeightBase: vr
}), []), vm = () => oe(() => ({
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
}), []), ym = () => oe(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: qs,
  ButtonSpacingPaddingHorizontalMobile: Xs,
  ButtonSpacingPaddingVerticalDesktop: Zs,
  ButtonSpacingPaddingHorizontalDesktop: Js,
  // Card spacing	
  CardSpacingPaddingMobile: Qs,
  CardSpacingPaddingDesktop: eo,
  CardSpacingHeadingMargin: to,
  // Form spacing
  FormSpacingInputPadding: no,
  FormSpacingInputMinHeight: ro,
  FormSpacingCheckboxSize: ao,
  FormSpacingCheckboxLabelPadding: so
}), []), km = () => oe(() => ({
  xl: Ce,
  l: Ne,
  m: je,
  s: Ee,
  xs: Fe
}), []), Sm = () => oe(() => ({
  body: De,
  bodyLarge: Pe,
  bodySmall: Be,
  ledeText: Me,
  ledeTextSmall: Le
}), []), wm = () => oe(() => ({
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
    bodySmall: Be,
    ledeText: Me,
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
        size16: sn,
        size19: cn,
        size22: fn,
        size26: mn,
        size36: xn,
        size48: kn
      },
      tablet: {
        size14: rn,
        size16: on,
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
}), []), bo = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, ge = {
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
function _m(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...bo, ...e }, r = [];
  return n?.includes(400) && r.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${ge.normal.eot}?#iefix") format("eot"),
       url("${t}${ge.normal.woff2}") format("woff2"),
       url("${t}${ge.normal.woff}") format("woff"),
       url("${t}${ge.normal.ttf}") format("truetype");
  src: url("${t}${ge.normal.eot}");
}`), n?.includes(600) && r.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${ge.bold.eot}?#iefix") format("eot"),
       url("${t}${ge.bold.woff2}") format("woff2"),
       url("${t}${ge.bold.woff}") format("woff"),
       url("${t}${ge.bold.ttf}") format("truetype");
  src: url("${t}${ge.bold.eot}");
}`), r.join(`
`);
}
function Tm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...bo, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${ge.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${ge.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${ge.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${ge.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const $m = '"Frutiger W01", Arial, Helvetica, sans-serif', Cm = "Arial, Helvetica, sans-serif";
async function Nm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  yr as Account,
  Tp as ActionLink,
  Hu as AnimationDurationFast,
  Au as AnimationDurationNormal,
  zu as AnimationDurationSlow,
  Vu as AnimationEasingBounce,
  Wu as AnimationEasingEaseIn,
  Uu as AnimationEasingEaseInOut,
  Ou as AnimationEasingEaseOut,
  Eu as AriaDataGrid,
  Ma as AriaTabsDataGrid,
  em as AriaTabsDataGridAdaptive,
  el as BackLink,
  Ns as BorderColorCard,
  js as BorderColorCardHover,
  $s as BorderColorDefault,
  Es as BorderColorError,
  Cs as BorderColorForm,
  od as BorderRadiusLarge,
  sd as BorderRadiusMedium,
  rd as BorderRadiusNone,
  ad as BorderRadiusSmall,
  Qu as BorderWidthCardBottom,
  Xu as BorderWidthDefault,
  Zu as BorderWidthFormElement,
  Ju as BorderWidthFormElementError,
  ed as BorderWidthPanel,
  nd as BorderWidthTableCell,
  td as BorderWidthTableHeader,
  Su as Breadcrumb,
  zh as BreakpointDesktop,
  Wh as BreakpointLargeDesktop,
  Hh as BreakpointMobile,
  Ah as BreakpointTablet,
  Nr as Button,
  Lf as ButtonBorderRadius,
  Mf as ButtonBorderWidth,
  wf as ButtonPrimaryBackgroundActive,
  kf as ButtonPrimaryBackgroundDefault,
  _f as ButtonPrimaryBackgroundDisabled,
  Sf as ButtonPrimaryBackgroundHover,
  Cf as ButtonPrimaryBorderDefault,
  Nf as ButtonPrimaryBorderFocus,
  Tf as ButtonPrimaryTextDefault,
  $f as ButtonPrimaryTextDisabled,
  Df as ButtonSecondaryBackgroundActive,
  jf as ButtonSecondaryBackgroundDefault,
  Ff as ButtonSecondaryBackgroundHover,
  Ef as ButtonSecondaryBackgroundSolid,
  Bf as ButtonSecondaryBorderDefault,
  Pf as ButtonSecondaryTextDefault,
  If as ButtonShadowSize,
  Js as ButtonSpacingPaddingHorizontalDesktop,
  Xs as ButtonSpacingPaddingHorizontalMobile,
  Zs as ButtonSpacingPaddingVerticalDesktop,
  qs as ButtonSpacingPaddingVerticalMobile,
  Rf as ButtonTypographyWeight,
  Op as Card,
  Hf as CardBackgroundDefault,
  Wf as CardBorderBottom,
  Af as CardBorderDefault,
  zf as CardBorderHover,
  Gf as CardBorderWidthBottom,
  Yf as CardBorderWidthDefault,
  Up as CardGroup,
  Vp as CardGroupItem,
  Kf as CardShadowDefault,
  qf as CardShadowHover,
  to as CardSpacingHeadingMargin,
  eo as CardSpacingPaddingDesktop,
  Qs as CardSpacingPaddingMobile,
  Uf as CardTextDescription,
  Of as CardTextHeading,
  Vf as CardTextLink,
  Yp as CareCard,
  $p as CharacterCount,
  tl as Checkboxes,
  bd as ColorBorderDefault,
  xd as ColorBorderSecondary,
  Vd as ColorButtonLoginActive,
  Od as ColorButtonLoginBackground,
  Ud as ColorButtonLoginHover,
  Yd as ColorButtonLoginShadow,
  Td as ColorButtonPrimaryActive,
  Sd as ColorButtonPrimaryBackground,
  _d as ColorButtonPrimaryHover,
  $d as ColorButtonPrimaryShadow,
  wd as ColorButtonPrimaryText,
  Id as ColorButtonReverseActive,
  Bd as ColorButtonReverseBackground,
  Ld as ColorButtonReverseHover,
  Rd as ColorButtonReverseShadow,
  Md as ColorButtonReverseText,
  Dd as ColorButtonSecondaryActive,
  Cd as ColorButtonSecondaryBackground,
  Nd as ColorButtonSecondaryBackgroundSolid,
  jd as ColorButtonSecondaryBorder,
  Fd as ColorButtonSecondaryHover,
  Pd as ColorButtonSecondaryShadow,
  Ed as ColorButtonSecondaryText,
  zd as ColorButtonWarningActive,
  Hd as ColorButtonWarningBackground,
  Ad as ColorButtonWarningHover,
  Wd as ColorButtonWarningShadow,
  vd as ColorError,
  md as ColorFocusBackground,
  gd as ColorFocusText,
  kd as ColorFormBackground,
  yd as ColorFormBorder,
  Us as ColorGrey1,
  Vs as ColorGrey2,
  Ys as ColorGrey3,
  Gs as ColorGrey4,
  Ks as ColorGrey5,
  hd as ColorLinkActive,
  dd as ColorLinkDefault,
  fd as ColorLinkHover,
  pd as ColorLinkVisited,
  Ps as ColorPrimaryBlack,
  Fs as ColorPrimaryBlue,
  Ls as ColorPrimaryDarkPink,
  Bs as ColorPrimaryGreen,
  Ms as ColorPrimaryPurple,
  Is as ColorPrimaryRed,
  Ds as ColorPrimaryWhite,
  Rs as ColorPrimaryYellow,
  Ws as ColorSecondaryAquaGreen,
  zs as ColorSecondaryOrange,
  Hs as ColorSecondaryPaleYellow,
  Os as ColorSecondaryPink,
  As as ColorSecondaryWarmYellow,
  id as ColorTextPrimary,
  ud as ColorTextPrint,
  cd as ColorTextReverse,
  ld as ColorTextSecondary,
  Br as Column,
  gf as ComponentBlur,
  lf as ComponentBreadcrumbChevronMarginLeft,
  cf as ComponentBreadcrumbChevronMarginRight,
  df as ComponentBreadcrumbPaddingTopDesktop,
  uf as ComponentBreadcrumbPaddingTopMobile,
  Xd as ComponentButtonPaddingDesktopHorizontal,
  qd as ComponentButtonPaddingDesktopVertical,
  Kd as ComponentButtonPaddingMobileHorizontal,
  Gd as ComponentButtonPaddingMobileVertical,
  Zd as ComponentButtonShadowSize,
  af as ComponentCardHeadingMargin,
  rf as ComponentCardPaddingDesktop,
  nf as ComponentCardPaddingMobile,
  xf as ComponentDetails,
  vf as ComponentExpander,
  tf as ComponentFormCheckboxLabelPadding,
  ef as ComponentFormCheckboxSize,
  Jd as ComponentFormInputMinHeight,
  Qd as ComponentFormInputPadding,
  bf as ComponentLink,
  yf as ComponentPagination,
  of as ComponentPanelPaddingDesktop,
  sf as ComponentPanelPaddingMobile,
  mf as ComponentSpread,
  hf as ComponentSummaryListCellPaddingHorizontal,
  ff as ComponentSummaryListCellPaddingVertical,
  pf as ComponentSummaryListRowMargin,
  is as Container,
  Wp as ContentsList,
  bo as DEFAULT_FONT_CONFIG,
  Qp as DashboardSummaryGrid,
  Mp as DateInput,
  _u as Details,
  Tu as DoDontList,
  kp as ElevationHigh,
  vp as ElevationLow,
  yp as ElevationMedium,
  xp as ElevationNone,
  da as ErrorMessage,
  Bp as ErrorSummary,
  $u as Expander,
  ge as FRUTIGER_FONT_FILES,
  Dr as Fieldset,
  pp as FocusOutlineOffset,
  mp as FocusOutlineStyle,
  hp as FocusOutlineWidth,
  bp as FocusShadowButton,
  gp as FocusShadowInput,
  Xt as FontFamilyBase,
  Zt as FontFamilyFallback,
  Jt as FontFamilyPrint,
  vr as FontLineHeightBase,
  nn as FontSize14Mobile,
  an as FontSize14Print,
  rn as FontSize14Tablet,
  sn as FontSize16Mobile,
  ln as FontSize16Print,
  on as FontSize16Tablet,
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
  xr as FontSizeBase,
  en as FontWeightBold,
  tn as FontWeightLight,
  Qt as FontWeightNormal,
  fs as Footer,
  mh as FormBorderRadius,
  hh as FormBorderWidthDefault,
  ph as FormBorderWidthError,
  uh as FormErrorTextDefault,
  dh as FormErrorTypographyWeight,
  fh as FormHintTextDefault,
  Xf as FormInputBackgroundDefault,
  Jf as FormInputBackgroundDisabled,
  Qf as FormInputBackgroundError,
  Zf as FormInputBackgroundFocus,
  eh as FormInputBorderDefault,
  rh as FormInputBorderDisabled,
  nh as FormInputBorderError,
  th as FormInputBorderFocus,
  ah as FormInputTextDefault,
  oh as FormInputTextDisabled,
  sh as FormInputTextPlaceholder,
  ih as FormLabelTextDefault,
  lh as FormLabelTextRequired,
  ch as FormLabelTypographyWeight,
  so as FormSpacingCheckboxLabelPadding,
  ao as FormSpacingCheckboxSize,
  ro as FormSpacingInputMinHeight,
  no as FormSpacingInputPadding,
  Ap as GanttChart,
  rl as Grid,
  Uh as GridGutter,
  Vh as GridGutterHalf,
  Oh as GridPageWidth,
  ds as Header,
  Rp as HeaderSSR,
  Mr as HeaderSearch,
  Hp as HeaderStatic,
  He as Heading,
  Ne as HeadingsNhsukHeadingL,
  je as HeadingsNhsukHeadingM,
  Ee as HeadingsNhsukHeadingS,
  Ce as HeadingsNhsukHeadingXl,
  Fe as HeadingsNhsukHeadingXs,
  ul as Hero,
  os as Hint,
  Jp as Images,
  Er as Input,
  Gp as InsetText,
  Fr as Label,
  Rh as LayoutColumnActions,
  Bh as LayoutColumnFull,
  Mh as LayoutColumnHalf,
  Ih as LayoutColumnQuarter,
  Lh as LayoutColumnThird,
  Ph as LayoutContainerMaxWidth,
  ol as List,
  ls as MainWrapper,
  um as NHSBodyText,
  dm as NHSBodyTextLarge,
  fm as NHSBodyTextSmall,
  sm as NHSHeading1,
  om as NHSHeading2,
  im as NHSHeading3,
  lm as NHSHeading4,
  cm as NHSHeading5,
  hm as NHSLedeText,
  pm as NHSLedeTextSmall,
  Ip as NHSThemeProvider,
  Cm as NHS_FALLBACK_FONT_STACK,
  $m as NHS_FONT_STACK,
  nm as PageTemplate,
  zp as Pagination,
  wu as Panel,
  De as ParagraphsBody,
  Pe as ParagraphsBodyLarge,
  Be as ParagraphsBodySmall,
  Me as ParagraphsLedeText,
  Le as ParagraphsLedeTextSmall,
  Np as Radios,
  Pr as Row,
  Cp as Select,
  ip as ShadowButtonDefault,
  up as ShadowButtonFocus,
  lp as ShadowButtonSecondary,
  cp as ShadowButtonWarning,
  dp as ShadowCardDefault,
  fp as ShadowCardHover,
  Dh as SizeButtonMinHeightDesktop,
  Fh as SizeButtonMinHeightMobile,
  wh as SizeFormControlLarge,
  Sh as SizeFormControlMedium,
  kh as SizeFormControlSmall,
  jh as SizeFormInputWidth2xl,
  Eh as SizeFormInputWidth3xl,
  Ch as SizeFormInputWidthLg,
  $h as SizeFormInputWidthMd,
  Th as SizeFormInputWidthSm,
  Nh as SizeFormInputWidthXl,
  _h as SizeFormInputWidthXs,
  vh as SizeIconExtraLarge,
  xh as SizeIconLarge,
  bh as SizeIconMedium,
  yh as SizeIconNhsDefault,
  gh as SizeIconSmall,
  _s as SkipLink,
  tm as SortStatusControl,
  oo as Spacing0,
  io as Spacing1,
  lo as Spacing2,
  co as Spacing3,
  uo as Spacing4,
  fo as Spacing5,
  ho as Spacing6,
  po as Spacing7,
  mo as Spacing8,
  go as Spacing9,
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
  jp as SpacingUtilities,
  ap as StateDisabledBackground,
  sp as StateDisabledBorder,
  op as StateDisabledText,
  Yh as StateErrorBackground,
  Gh as StateErrorBorder,
  Kh as StateErrorText,
  tp as StateInfoBackground,
  np as StateInfoBorder,
  rp as StateInfoText,
  qh as StateSuccessBackground,
  Xh as StateSuccessBorder,
  Zh as StateSuccessText,
  Jh as StateWarningBackground,
  Qh as StateWarningBorder,
  ep as StateWarningText,
  ju as SummaryCard,
  Kp as SummaryList,
  qp as Table,
  Xp as Tabs,
  jr as Tag,
  Cu as TaskList,
  nl as Textarea,
  rm as TransactionalPageTemplate,
  Yu as TransitionButtonDefault,
  Gu as TransitionButtonShadow,
  qu as TransitionCardHover,
  Ku as TransitionInputFocus,
  Pp as WIDTH_FRACTIONS,
  Zp as WarningCallout,
  Ts as WidthContainer,
  Fp as WidthUtilities,
  Nm as checkFrutigerLoaded,
  _m as generateFrutigerFontFace,
  am as getResponsiveStyles,
  Ep as getSpacingClass,
  Dp as getWidthClass,
  Tm as preloadFrutigerFonts,
  gm as useColors,
  ym as useComponentSpacing,
  km as useNHSHeadings,
  Sm as useNHSParagraphs,
  Lp as useNHSTheme,
  wm as useNHSTypographySystem,
  vm as useResponsiveSpacing,
  bm as useSpacing,
  mm as useTokens,
  xm as useTypography
};
//# sourceMappingURL=index.esm.js.map
