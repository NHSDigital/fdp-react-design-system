import * as fe from "react";
import Fe, { useState as pe, useEffect as ye, useCallback as ee, createElement as da, useRef as xe, useMemo as _e, useContext as Ks, createContext as Zs, forwardRef as ft, useImperativeHandle as ua, useReducer as ha } from "react";
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bt = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function Xs() {
  if (Nr) return bt;
  Nr = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, o, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), o.key !== void 0 && (i = "" + o.key), "key" in o) {
      s = {};
      for (var l in o)
        l !== "key" && (s[l] = o[l]);
    } else s = o;
    return o = s.ref, {
      $$typeof: e,
      type: a,
      key: i,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return bt.Fragment = t, bt.jsx = r, bt.jsxs = r, bt;
}
var xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function Qs() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === T ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case g:
          return "Fragment";
        case H:
          return "Profiler";
        case v:
          return "StrictMode";
        case P:
          return "Suspense";
        case b:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case B:
            return "Portal";
          case E:
            return (S.displayName || "Context") + ".Provider";
          case R:
            return (S._context.displayName || "Context") + ".Consumer";
          case w:
            var q = S.render;
            return S = S.displayName, S || (S = q.displayName || q.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case A:
            return q = S.displayName || null, q !== null ? q : e(S.type) || "Memo";
          case F:
            q = S._payload, S = S._init;
            try {
              return e(S(q));
            } catch {
            }
        }
      return null;
    }
    function t(S) {
      return "" + S;
    }
    function r(S) {
      try {
        t(S);
        var q = !1;
      } catch {
        q = !0;
      }
      if (q) {
        q = console;
        var M = q.error, U = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return M.call(
          q,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          U
        ), t(S);
      }
    }
    function a(S) {
      if (S === g) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === F)
        return "<...>";
      try {
        var q = e(S);
        return q ? "<" + q + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var S = x.A;
      return S === null ? null : S.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(S) {
      if (j.call(S, "key")) {
        var q = Object.getOwnPropertyDescriptor(S, "key").get;
        if (q && q.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function l(S, q) {
      function M() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          q
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: M,
        configurable: !0
      });
    }
    function c() {
      var S = e(this.type);
      return Q[S] || (Q[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function u(S, q, M, U, K, ce, h, C) {
      return M = ce.ref, S = {
        $$typeof: _,
        type: S,
        key: q,
        props: ce,
        _owner: K
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: h
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function d(S, q, M, U, K, ce, h, C) {
      var L = q.children;
      if (L !== void 0)
        if (U)
          if (O(L)) {
            for (U = 0; U < L.length; U++)
              m(L[U]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(L);
      if (j.call(q, "key")) {
        L = e(S);
        var I = Object.keys(q).filter(function(V) {
          return V !== "key";
        });
        U = 0 < I.length ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}", le[L + U] || (I = 0 < I.length ? "{" + I.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          U,
          L,
          I,
          L
        ), le[L + U] = !0);
      }
      if (L = null, M !== void 0 && (r(M), L = "" + M), i(q) && (r(q.key), L = "" + q.key), "key" in q) {
        M = {};
        for (var W in q)
          W !== "key" && (M[W] = q[W]);
      } else M = q;
      return L && l(
        M,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), u(
        S,
        L,
        ce,
        K,
        o(),
        M,
        h,
        C
      );
    }
    function m(S) {
      typeof S == "object" && S !== null && S.$$typeof === _ && S._store && (S._store.validated = 1);
    }
    var p = Fe, _ = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), E = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), x = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, O = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var z, Q = {}, ne = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), ie = oe(a(s)), le = {};
    xt.Fragment = g, xt.jsx = function(S, q, M, U, K) {
      var ce = 1e4 > x.recentlyCreatedOwnerStacks++;
      return d(
        S,
        q,
        M,
        !1,
        U,
        K,
        ce ? Error("react-stack-top-frame") : ne,
        ce ? oe(a(S)) : ie
      );
    }, xt.jsxs = function(S, q, M, U, K) {
      var ce = 1e4 > x.recentlyCreatedOwnerStacks++;
      return d(
        S,
        q,
        M,
        !0,
        U,
        K,
        ce ? Error("react-stack-top-frame") : ne,
        ce ? oe(a(S)) : ie
      );
    };
  })()), xt;
}
var Dr;
function eo() {
  return Dr || (Dr = 1, process.env.NODE_ENV === "production" ? Bt.exports = Xs() : Bt.exports = Qs()), Bt.exports;
}
var n = eo(), Sn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Br;
function to() {
  return Br || (Br = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var s = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (s = o(s, a(l)));
        }
        return s;
      }
      function a(s) {
        if (typeof s == "string" || typeof s == "number")
          return s;
        if (typeof s != "object")
          return "";
        if (Array.isArray(s))
          return r.apply(null, s);
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
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Sn)), Sn.exports;
}
var no = to();
const X = /* @__PURE__ */ Js(no), uf = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = X(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ n.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: r ? "_blank" : void 0,
      rel: r ? "noopener noreferrer" : void 0,
      ...o,
      children: [
        /* @__PURE__ */ n.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ n.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ n.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-action-link__text", children: e })
      ]
    }
  ) });
}, lr = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: r,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const o = (s) => {
    const i = s.icon ? /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": s.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: c }) : s.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ n.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: c
          }
        )
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: c });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: X(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map((s, i) => s && /* @__PURE__ */ n.jsx(
        "li",
        {
          className: X("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: ro, useCallback: et, useState: Cn } = fe;
function ao(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = Cn(!1), [m, p] = Cn(!1), [_, B] = Cn(!1), g = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), v = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", H = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ..._ && { "data-focused": "true" },
    ...v && { "data-disabled": "true" }
  }, R = et(() => !v && d(!0), [v]), E = et(() => d(!1), []), w = et(() => !v && p(!0), [v]), P = et(() => {
    p(!1), d(!1);
  }, []), b = et(() => B(!0), []), A = et(() => B(!1), []), F = et((L) => {
    L.key === " " && ("href" in c || L.currentTarget.getAttribute("role") === "button") && (L.preventDefault(), L.currentTarget.click());
  }, [c]), k = et((L) => {
    if (l) {
      const I = L.currentTarget;
      if (I.getAttribute("data-processing") === "true") {
        L.preventDefault();
        return;
      }
      I.setAttribute("data-processing", "true"), setTimeout(() => {
        I.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const { id: L, style: I, title: W, ["aria-label"]: V, ["aria-describedby"]: N, ["aria-labelledby"]: de, tabIndex: ae, ...re } = c, G = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: G.href,
        target: G.target,
        rel: G.rel,
        className: g,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...H,
        ...l && { "data-prevent-double-click": "true" },
        ...re,
        onKeyDown: (f) => {
          G.onKeyDown?.(f), F(f);
        },
        onClick: (f) => {
          G.onClick?.(f), k(f);
        },
        onMouseDown: (f) => {
          G.onMouseDown?.(f), R();
        },
        onMouseUp: (f) => {
          G.onMouseUp?.(f), E();
        },
        onMouseEnter: (f) => {
          G.onMouseEnter?.(f), w();
        },
        onMouseLeave: (f) => {
          G.onMouseLeave?.(f), P();
        },
        onFocus: (f) => {
          G.onFocus?.(f), b();
        },
        onBlur: (f) => {
          G.onBlur?.(f), A();
        },
        "aria-disabled": G["aria-disabled"],
        ...G["aria-disabled"] === "true" && { tabIndex: -1 },
        id: L,
        style: I,
        title: W,
        "aria-label": V,
        "aria-describedby": N,
        "aria-labelledby": de,
        tabIndex: ae,
        children: r
      }
    );
  }
  const { id: T, style: x, title: j, ["aria-label"]: O, ["aria-describedby"]: oe, ["aria-labelledby"]: z, tabIndex: Q, name: ne, value: ie, form: le, formAction: S, formEncType: q, formMethod: M, formNoValidate: U, formTarget: K, autoFocus: ce, ...h } = c, C = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: C.type || "button",
      disabled: C.disabled,
      className: g,
      "data-module": "nhs-button",
      ...H,
      ...l && { "data-prevent-double-click": "true" },
      ...C.disabled && { "aria-disabled": "true" },
      ...h,
      onKeyDown: (L) => {
        C.onKeyDown?.(L), F(L);
      },
      onClick: (L) => {
        C.onClick?.(L), k(L);
      },
      onMouseDown: (L) => {
        C.onMouseDown?.(L), R();
      },
      onMouseUp: (L) => {
        C.onMouseUp?.(L), E();
      },
      onMouseEnter: (L) => {
        C.onMouseEnter?.(L), w();
      },
      onMouseLeave: (L) => {
        C.onMouseLeave?.(L), P();
      },
      onFocus: (L) => {
        C.onFocus?.(L), b();
      },
      onBlur: (L) => {
        C.onBlur?.(L), A();
      },
      id: T,
      style: x,
      title: j,
      "aria-label": O,
      "aria-describedby": oe,
      "aria-labelledby": z,
      tabIndex: Q,
      name: ne,
      value: ie,
      form: le,
      formAction: S,
      formEncType: q,
      formMethod: M,
      formNoValidate: U,
      formTarget: K,
      autoFocus: ce,
      children: r
    }
  );
}
const De = ro(ao);
De.displayName = "Button";
const Ln = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = X(
    "nhsuk-back-link",
    a
  ), c = X(
    "nhsuk-back-link__link"
  ), u = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ n.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx(
    "button",
    {
      className: c,
      onClick: s,
      type: "button",
      ...i,
      children: u()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: c,
      href: r,
      ...i,
      children: u()
    }
  ) });
}, qe = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...u
}) => {
  const d = X(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    c
  ), m = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: m,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, so = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: u,
  onChange: d,
  onBlur: m,
  onFocus: p,
  attributes: _,
  ...B
}) => {
  const [g, v] = pe(a), H = r !== void 0, R = H ? r : g;
  ye(() => {
    H || v(a);
  }, [a, H]);
  const E = (F) => {
    const k = F.target.checked;
    H || v(k), d?.(k, F);
  }, w = i ? `${e}-hint` : void 0, P = l ? `${e}-error` : void 0, b = [w, P].filter(Boolean).join(" ") || void 0, A = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: A, ...B, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: R,
        disabled: o,
        onChange: E,
        onBlur: m,
        onFocus: p,
        "aria-describedby": b,
        ..._
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: w, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: P, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
so.displayName = "Checkbox";
const cr = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: u = !1,
  describedBy: d,
  className: m,
  width: p = "full",
  inputMode: _,
  autoComplete: B,
  maxLength: g,
  minLength: v,
  pattern: H,
  step: R,
  min: E,
  max: w,
  showValueLabels: P = !1,
  showCurrentValue: b = !1,
  valueLabels: A,
  onChange: F,
  onBlur: k,
  onFocus: T,
  onKeyDown: x,
  ...j
}) => {
  const [O, oe] = pe(a || o || (r === "range" ? E || "0" : ""));
  ye(() => {
    a !== void 0 && oe(a);
  }, [a]);
  const z = (q) => {
    const M = q.target;
    oe(M.value), ("type" in q && q.nativeEvent || q.type === "keydown") && F?.(q);
  }, Q = r === "range", ne = X(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": Q,
      [`nhsuk-input--width-${p}`]: p !== "full" && !Q
    },
    m
  ), ie = a !== void 0, le = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": d,
    inputMode: _,
    autoComplete: B,
    maxLength: g,
    minLength: v,
    pattern: H,
    step: R,
    min: E,
    max: w,
    onChange: z,
    onBlur: k,
    onFocus: T,
    onKeyDown: (q) => {
      if (Q && /[0-9]/.test(q.key)) {
        const M = (O?.toString() || "") + q.key;
        q.target.value = M, z(q);
      }
      x?.(q);
    },
    ...j
  }, S = Q ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    P && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: A?.min || E || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: ne,
          value: ie ? a : O,
          ...!ie && o !== void 0 ? { defaultValue: o } : {},
          ...le
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: A?.max || w || "100" })
    ] }),
    !P && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: ne,
        value: ie ? a : O,
        ...!ie && o !== void 0 ? { defaultValue: o } : {},
        ...le
      }
    ),
    b && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      A?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: O })
    ] }) })
  ] }) : null;
  return Q ? S : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: ne,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": d,
      inputMode: _,
      autoComplete: B,
      maxLength: g,
      minLength: v,
      pattern: H,
      step: R,
      min: E,
      max: w,
      onChange: F,
      onBlur: k,
      onFocus: T,
      onKeyDown: x,
      ...j
    }
  );
}, dr = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = X(
    "nhsuk-label",
    {
      [`nhsuk-label--${a}`]: a !== "m"
    },
    t
  ), l = r ? "h1" : "label";
  return /* @__PURE__ */ n.jsx(
    l,
    {
      className: i,
      htmlFor: r ? void 0 : e,
      ...s,
      children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o
    }
  );
}, ur = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = X(
    "nhsuk-fieldset",
    r
  ), i = X(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const c = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: c }) : c;
  };
  return /* @__PURE__ */ n.jsxs(
    "fieldset",
    {
      className: s,
      "aria-describedby": a,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, oo = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: u = !1,
  onChange: d,
  fieldsetAttributes: m,
  attributes: p,
  ..._
}) => {
  const [B, g] = pe(
    e.filter((F) => F.checked).map((F) => F.value)
  ), v = r || t, H = i ? `${v}-hint` : void 0, R = l ? `${v}-error` : void 0, E = [H, R].filter(Boolean).join(" ") || void 0, w = (F, k) => {
    let T;
    k ? T = [...B, F] : T = B.filter((x) => x !== F), g(T), d?.(T);
  }, P = () => e.map((F, k) => {
    const T = `${v}-${k + 1}`, x = `${T}-conditional`, j = B.includes(F.value), O = F.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: T,
          name: t,
          type: "checkbox",
          value: F.value,
          checked: j,
          disabled: O,
          onChange: (oe) => w(F.value, oe.target.checked),
          "aria-describedby": F.hint ? `${T}-hint` : E,
          ...F.conditional && {
            "aria-controls": x,
            "aria-expanded": j ? "true" : "false"
          },
          ...F.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: T, children: F.text }),
      F.hint && /* @__PURE__ */ n.jsx("div", { id: `${T}-hint`, className: "nhsuk-checkboxes__hint", children: F.hint }),
      F.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: X("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !j
          }),
          id: x,
          children: typeof F.conditional == "object" && F.conditional !== null && "label" in F.conditional && "id" in F.conditional && "name" in F.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            F.conditional.label && /* @__PURE__ */ n.jsx(dr, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ n.jsx(cr, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }), b = X(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), A = X("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: A, ...p, ..._, children: /* @__PURE__ */ n.jsxs(
    ur,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: E,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: H, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: b, children: P() })
      ]
    }
  ) });
};
oo.displayName = "Checkboxes";
const io = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: u,
  className: d,
  rows: m = 5,
  cols: p,
  maxLength: _,
  minLength: B,
  wrap: g = "soft",
  resize: v = "vertical",
  autoComplete: H,
  spellCheck: R,
  onChange: E,
  onBlur: w,
  onFocus: P,
  onKeyDown: b,
  ...A
}) => {
  const F = X(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${v}`]: v !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: F,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": u,
      rows: m,
      cols: p,
      maxLength: _,
      minLength: B,
      wrap: g,
      autoComplete: H,
      spellCheck: R,
      onChange: E,
      onBlur: w,
      onFocus: P,
      onKeyDown: b,
      ...A
    }
  );
}, fa = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = X("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, hf = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: c,
  onCountChange: u,
  onChange: d,
  ...m
}) => {
  const [p, _] = pe(s), [B, g] = pe(0), [v, H] = pe(!1), [R, E] = pe(!1), w = ee((T) => r ? T.trim() === "" ? 0 : T.trim().split(/\s+/).length : T.length, [r]);
  ye(() => {
    const T = w(p), x = t || r || 0, j = x - T, O = Math.floor(x * (a / 100));
    g(j), H(T > x), E(T >= O || T > x), u && u(T, j);
  }, [p, t, r, a, w, u]);
  const P = (T) => {
    const x = T.target.value;
    _(x), d && d(T);
  }, b = () => {
    const T = t || r || 0, x = r ? "word" : "character", j = r ? "words" : "characters";
    if (!R)
      return `You can enter up to ${T} ${T === 1 ? x : j}`;
    if (v) {
      const O = Math.abs(B);
      return `You have ${O} ${O === 1 ? x : j} too many`;
    } else
      return `You have ${B} ${B === 1 ? x : j} remaining`;
  }, A = X(
    "nhsuk-character-count",
    l
  ), F = X(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !R,
      "nhsuk-error-message": v
    },
    c?.classes
  ), k = X(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": v
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: A,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          io,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: k,
            onChange: P,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          fa,
          {
            id: `${e}-info`,
            className: F,
            children: b()
          }
        )
      ]
    }
  );
}, lo = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: o,
  ...s
}) => {
  const i = X(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      selected: r,
      ...s,
      children: o
    }
  );
}, co = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  disabled: o = !1,
  required: s = !1,
  hasError: i = !1,
  describedBy: l,
  className: c,
  multiple: u = !1,
  size: d,
  autoComplete: m,
  options: p,
  children: _,
  onChange: B,
  onBlur: g,
  onFocus: v,
  ...H
}) => {
  const R = X(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), E = () => p ? p.map((w, P) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: w.value,
      disabled: w.disabled,
      selected: w.selected,
      children: w.text
    },
    `${w.value}-${P}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: R,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: o,
      required: s,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: m,
      onChange: B,
      onBlur: g,
      onFocus: v,
      ...H,
      children: _ || E()
    }
  );
}, ma = co;
ma.Option = lo;
const ff = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: o,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: c,
  onChange: u,
  onBlur: d,
  onFocus: m,
  ...p
}) => {
  const [_, B] = pe(t || r || ""), g = X(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), v = (H) => {
    const R = H.target.value;
    B(R), u && u(H);
  };
  return /* @__PURE__ */ n.jsx(ur, { children: /* @__PURE__ */ n.jsx("div", { className: g, ...p, children: c.map((H, R) => {
    const E = `${e}-${R}`, w = H.conditional ? `${E}-conditional` : void 0, P = _ === H.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: E,
          name: e,
          type: "radio",
          value: H.value,
          disabled: H.disabled,
          checked: P,
          "aria-describedby": o,
          onChange: v,
          onBlur: d,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: E, children: H.text }),
      H.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: H.hint }),
      H.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: X("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !P
          }),
          id: w,
          children: typeof H.conditional == "object" && H.conditional !== null && "label" in H.conditional && "id" in H.conditional && "name" in H.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            H.conditional.label && /* @__PURE__ */ n.jsx(dr, { htmlFor: H.conditional.id, children: H.conditional.label }),
            /* @__PURE__ */ n.jsx(cr, { ...H.conditional })
          ] }) : H.conditional
        }
      )
    ] }, H.value);
  }) }) });
}, pa = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = X(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, Et = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, ga = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  ...c
}) => {
  const u = X(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: r,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${o}-desktop`]: o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: u, ...c, children: e });
}, mf = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Fe.Children.toArray(e)[0], s = Fe.isValidElement(o) && (o.type === Et || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(pa, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(Et, { children: e }) });
}, uo = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = X(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": a,
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    o
  );
  return /* @__PURE__ */ n.jsx(c, { className: u, role: s, ...l, children: e });
}, ho = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = X("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, fo = uo;
fo.Item = ho;
const pf = ({
  debug: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  if (!r)
    return null;
  const o = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...a, children: r });
}, gf = {
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
}, bf = ({
  debug: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  if (!r)
    return null;
  const o = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: o, ...a, children: r });
}, xf = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, yf = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ba = ({
  as: e = "main",
  size: t = "default",
  className: r,
  children: a,
  ...o
}) => {
  const s = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(e, { className: s, ...o, children: a });
}, Ke = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const u = e ?? ((B) => {
    switch (B) {
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
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, _ = i ? { ...l.style, marginBottom: i } : l.style;
  return da(
    p,
    { className: d, ...l, style: _ },
    m
  );
}, Fr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = X("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, _f = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = xe(null);
  ye(() => {
    c.current && c.current.focus();
  }, []);
  const u = X(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (_) => {
    const B = _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
    return _.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: _.href,
        ..._.attributes,
        children: B
      }
    ) : B;
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: c,
      className: u,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("p", { children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("p", { children: m() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((_, B) => /* @__PURE__ */ n.jsx("li", { children: p(_) }, B)) })
        ] })
      ]
    }
  );
}, vf = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...u
}) => {
  const [d, m] = pe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, _] = pe({}), B = (z) => z % 4 === 0 && z % 100 !== 0 || z % 400 === 0, g = (z, Q) => {
    const ne = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return z === 2 && B(Q) ? 29 : ne[z - 1];
  }, v = (z, Q, ne) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Day must be a number";
    const ie = parseInt(z, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (Q && ne) {
      const le = parseInt(Q, 10), S = parseInt(ne, 10);
      if (!isNaN(le) && !isNaN(S) && le >= 1 && le <= 12) {
        const q = g(le, S);
        if (ie > q)
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
          ][le - 1]} ${S} only has ${q} days`;
      }
    }
  }, H = (z) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Month must be a number";
    const Q = parseInt(z, 10);
    if (Q < 1 || Q > 12) return "Month must be between 1 and 12";
  }, R = (z) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Year must be a number";
    const Q = parseInt(z, 10), ne = (/* @__PURE__ */ new Date()).getFullYear();
    if (Q < 1900 || Q > ne + 10)
      return `Year must be between 1900 and ${ne + 10}`;
  }, E = (z, Q, ne) => {
    if (!z || !Q || !ne) return;
    const ie = parseInt(z, 10), le = parseInt(Q, 10), S = parseInt(ne, 10);
    if (isNaN(ie) || isNaN(le) || isNaN(S) || le < 1 || le > 12 || S < 1900) return;
    const q = g(le, S);
    ie < 1 || ie > q;
  }, w = ee((z, Q) => {
    const ne = {
      ...d,
      [z]: Q
    };
    m(ne), c && c(ne);
  }, [d, c]), P = ee((z) => {
    const Q = d[z];
    let ne;
    if (z === "day")
      ne = v(Q, d.month, d.year);
    else if (z === "month") {
      if (ne = H(Q), !ne && d.day) {
        const ie = v(d.day, Q, d.year);
        _((le) => ({
          ...le,
          day: ie
        }));
      }
    } else if (z === "year" && (ne = R(Q), !ne && d.day && d.month)) {
      const ie = v(d.day, d.month, Q);
      _((le) => ({
        ...le,
        day: ie
      }));
    }
    if (_((ie) => ({
      ...ie,
      [z]: ne
    })), d.day && d.month && d.year) {
      const ie = E(
        z === "day" ? Q : d.day,
        z === "month" ? Q : d.month,
        z === "year" ? Q : d.year
      );
      ie && _((le) => ({
        ...le,
        day: ie
      }));
    }
  }, [d, v, H, R, E]), b = _e(() => [
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
  ], []), A = r || b;
  let F = s?.describedBy || "";
  const k = i ? `${e}-hint` : "", T = l ? `${e}-error` : "";
  k && (F = F ? `${F} ${k}` : k), T && (F = F ? `${F} ${T}` : T);
  const x = Object.values(p).some((z) => z), j = X(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || x
    }
  ), O = X(
    "nhsuk-date-input",
    t
  ), oe = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      fa,
      {
        id: k,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Fr,
      {
        id: T,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([z, Q]) => Q ? /* @__PURE__ */ n.jsxs(
        Fr,
        {
          id: `${e}-${z}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            Q
          ]
        },
        `${z}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: O, id: e, "data-testid": "date-input", ...u, children: A.map((z) => {
      const Q = z.id || `${e}-${z.name}`, ne = a ? `${a}[${z.name}]` : z.name, ie = z.label || z.name.charAt(0).toUpperCase() + z.name.slice(1), le = p[z.name], S = d[z.name] || "";
      let q = F;
      if (le) {
        const M = `${e}-${z.name}-error`;
        q = q ? `${q} ${M}` : M;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          dr,
          {
            htmlFor: Q,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ n.jsx(
          cr,
          {
            id: Q,
            name: ne,
            value: S,
            className: X("nhsuk-date-input__input", z.classes, {
              "nhsuk-input--error": le
            }),
            inputMode: z.inputmode,
            autoComplete: z.autocomplete,
            pattern: z.pattern,
            "aria-describedby": q || void 0,
            hasError: !!le,
            onChange: (M) => w(z.name, M.target.value),
            onBlur: () => P(z.name)
          }
        )
      ] }, z.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: j, children: s ? /* @__PURE__ */ n.jsx(
    ur,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: F || void 0,
      children: oe()
    }
  ) : oe() });
}, xa = {
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
}, ya = Zs(xa), mo = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...xa, ...t };
  return /* @__PURE__ */ n.jsx(ya.Provider, { value: r, children: e });
}, kf = () => {
  const e = Ks(ya);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function po() {
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
function go() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = po(), document.head.appendChild(e);
}
const wf = ({ children: e, theme: t }) => (ye(() => {
  go();
}, []), /* @__PURE__ */ n.jsx(mo, { theme: t, children: e })), _a = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: u = !1,
  callbacks: d = {},
  isLoading: m = !1,
  showResults: p = !1,
  results: _ = [],
  formAttributes: B = {},
  inputAttributes: g = {},
  buttonAttributes: v = {},
  preventDefaultSubmit: H = !1,
  debounceMs: R = 300,
  minQueryLength: E = 1
}) => {
  const [w, P] = pe(""), [b, A] = pe(!1), F = xe(void 0), k = xe(null), T = xe(null), x = e === "controlled" && o !== void 0, j = x ? o : w, O = ee((U) => {
    F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      d.onChange && U.length >= E && d.onChange(U);
    }, R);
  }, [d.onChange, R, E]), oe = ee((U) => {
    const K = U.target.value;
    x || P(K), e !== "form" && O(K);
  }, [x, e, O]), z = ee((U) => {
    const K = j.trim(), ce = {
      query: K,
      timestamp: Date.now(),
      formData: new FormData(U.currentTarget)
    };
    e === "controlled" || e === "hybrid" && H ? (U.preventDefault(), d.onSearch && K.length >= E && d.onSearch(ce)) : e === "hybrid" && d.onSearch && K.length >= E && d.onSearch(ce);
  }, [e, j, d.onSearch, H, E]), Q = ee(() => {
    A(!0), d.onFocus?.();
  }, [d.onFocus]), ne = ee(() => {
    A(!1), d.onBlur?.();
  }, [d.onBlur]), ie = ee(() => {
    x || P(""), d.onClear?.(), T.current?.focus();
  }, [x, d.onClear]);
  ye(() => () => {
    F.current && clearTimeout(F.current);
  }, []);
  const le = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: X("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), S = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsxs(
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
            /* @__PURE__ */ n.jsx(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ n.jsx(
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
  ), q = () => !j || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), M = () => !p || !_.length || !b ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: _.map((U) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: U.href ? /* @__PURE__ */ n.jsxs("a", { href: U.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: U.title }),
    U.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: U.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: U.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: U.title }),
        U.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: U.description })
      ]
    }
  ) }, U.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: X("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": b,
    "nhsuk-header__search--has-results": p && _.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: k,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: z,
        ...B,
        children: [
          /* @__PURE__ */ n.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: i
            }
          ),
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ n.jsx(
              "input",
              {
                ref: T,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: j,
                onChange: oe,
                onFocus: Q,
                onBlur: ne,
                disabled: u || m,
                "aria-expanded": p && _.length > 0,
                "aria-haspopup": "listbox",
                ...g
              }
            ),
            q()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && j.length < E,
              ...v,
              children: [
                m ? S() : le(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    M()
  ] });
}, va = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const [m, p] = pe(!1), [_, B] = pe(!1), [g, v] = pe(i?.items?.length || 0), [H, R] = pe(!1), [E, w] = pe(!1), [P, b] = pe(!1), A = xe(null), F = xe(null), k = xe(!1), T = xe(null), x = xe([]), j = xe(null);
  ye(() => {
    typeof window > "u" || (b(!0), R(!0));
  }, []), ye(() => {
    if (!P || !i?.items?.length) return;
    x.current = i.items;
    const h = setTimeout(() => {
      A.current && F.current && ie();
    }, 100);
    return () => clearTimeout(h);
  }, [P, i?.items]);
  const O = r.href && !t.href || r.href && r.href === t.href, oe = O ? r.href : t.href, z = X(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), Q = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), ne = X(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ie = ee(() => {
    if (!(typeof window > "u" || k.current) && !(!A.current || !F.current || !x.current.length)) {
      k.current = !0;
      try {
        const h = F.current, C = A.current, L = h.offsetWidth, I = C.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (I.length === 0 || L === 0) {
          k.current = !1;
          return;
        }
        const W = window.innerWidth < 768, V = W ? 16 : 32, N = V * 2, de = L - N, ae = Array.from(I).map((y) => y.offsetWidth), re = ae.reduce((y, D) => y + D, 0), G = W ? 80 : 100, f = j.current !== null && j.current !== W;
        if (j.current = W, console.log("Overflow check:", {
          containerWidth: L,
          availableContainerWidth: de,
          totalGutters: N,
          gutterSize: V,
          totalWidth: re,
          mobile: W,
          breakpointChanged: f,
          itemCount: ae.length,
          measurements: ae
        }), re <= de)
          B(!1), v(x.current.length);
        else {
          const y = de - G;
          let D = 0, $ = 0;
          for (let Z = 0; Z < ae.length; Z++) {
            const te = $ + ae[Z];
            if (te <= y)
              $ = te, D = Z + 1;
            else
              break;
          }
          D = Math.max(1, D);
          const Y = D < ae.length;
          B(Y), v(D);
        }
        k.current = !1;
      } catch (h) {
        console.error("Overflow detection error:", h), B(!1), v(x.current.length), k.current = !1;
      }
    }
  }, []);
  ye(() => {
    if (typeof document > "u") return;
    const h = (C) => {
      C.key === "Escape" && m && p(!1);
    };
    if (m)
      return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, [m]), ye(() => {
    if (typeof window > "u" || !P) return;
    const h = () => {
      m && (p(!1), w(!1)), T.current && clearTimeout(T.current), T.current = setTimeout(() => {
        x.current.length > 0 && ie();
      }, 250);
    };
    let C = null, L = null;
    return window.matchMedia && (C = window.matchMedia("(max-width: 767px)"), L = () => {
      x.current.length > 0 && setTimeout(() => ie(), 50);
    }, C.addEventListener ? C.addEventListener("change", L) : C.addListener(L)), window.addEventListener("resize", h), () => {
      window.removeEventListener("resize", h), C && L && (C.removeEventListener ? C.removeEventListener("change", L) : C.removeListener(L)), T.current && clearTimeout(T.current);
    };
  }, [P, m, ie]), ye(() => {
    if (typeof document > "u") return;
    const h = (C) => {
      const L = C.target, I = A.current?.contains(L);
      m && !I && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, [m]);
  const le = (h) => {
    h && (h.preventDefault(), h.stopPropagation());
    const C = !m;
    p(C), C ? setTimeout(() => {
      w(!0);
    }, 50) : w(!1);
  }, S = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), q = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : S(), M = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, U = (h, C) => h ? C ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: C, children: h }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, K = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), ce = (h) => {
    if (h.active || h.current) {
      const C = h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: C });
    }
    return h.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: z,
      role: "banner",
      "data-module": "nhsuk-header",
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: Q, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            oe ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: oe, children: [
              q(),
              M(),
              O && U(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              q(),
              M(),
              O && U(r.text)
            ] }),
            r.text && !O && U(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(_a, { ...o }),
          /* @__PURE__ */ n.jsx(
            lr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: ne,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !H && P,
                    "nhsuk-header__navigation-container--ssr": !P
                  },
                  l
                ),
                ref: F,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: A, children: [
                  (P ? i.items.slice(0, g) : i.items).map((h, C) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": h.active || h.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !P && C >= 4
                          // Mark items that would be hidden on client
                        },
                        h.className
                      ),
                      ...h.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: h.href,
                          ...h.active || h.current ? {
                            "aria-current": h.current ? "page" : "true"
                          } : {},
                          children: ce(h)
                        }
                      )
                    },
                    C
                  )),
                  P && _ && g < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: le,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            K()
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
        P && i && i.items && i.items.length > 0 && m && E && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !E,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((h, C) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: X(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": h.active || h.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: h.href,
                    ...h.active || h.current ? {
                      "aria-current": h.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      p(!1), w(!1);
                    },
                    children: ce(h)
                  }
                )
              },
              `overflow-${g + C}`
            )) })
          }
        )
      ]
    }
  );
}, Sf = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, _ = X(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), B = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = X(
    "nhsuk-header__navigation",
    i?.className
  ), v = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), H = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS",
      role: "img",
      "aria-label": t.ariaLabel || "NHS"
    }
  ) : v(), R = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, E = (b, A) => b ? A ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: A, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, w = () => !i?.items || i.items.length === 0 ? null : i.items.map((b, A) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: b.href,
          ...b.attributes || {},
          children: b.text
        }
      )
    },
    b.href || A
  )), P = () => o ? /* @__PURE__ */ n.jsx(_a, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: _,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: B, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              H(),
              R(),
              m && E(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              H(),
              R(),
              m && E(r.text)
            ] }),
            r.text && !m && E(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            P()
          ] }),
          c !== "organisation" && !a && P(),
          /* @__PURE__ */ n.jsx(
            lr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: g,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx(
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
}, Cf = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const p = r.href && !t.href || r.href && r.href === t.href, _ = p ? r.href : t.href, B = X(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), g = X(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), v = X(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), H = () => /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), R = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : H(), E = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, w = (b, A) => b ? A ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: A, children: b }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: b }) : null, P = (b) => {
    if (b.active || b.current) {
      const A = b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: A });
    }
    return b.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: B,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              R(),
              E(),
              p && w(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              R(),
              E(),
              p && w(r.text)
            ] }),
            r.text && !p && w(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            lr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: v,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: X(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((b, A) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: X(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": b.active || b.current
                        },
                        b.className
                      ),
                      ...b.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: b.href,
                          ...b.active || b.current ? {
                            "aria-current": b.current ? "page" : "true"
                          } : {},
                          children: P(b)
                        }
                      )
                    },
                    A
                  )),
                  i.items.length > d && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ n.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
                    /* @__PURE__ */ n.jsxs("summary", { className: "nhsuk-header__navigation-summary", children: [
                      /* @__PURE__ */ n.jsx("span", { children: "More" }),
                      /* @__PURE__ */ n.jsx(
                        "svg",
                        {
                          className: "nhsuk-icon nhsuk-icon__chevron-down",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((b, A) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: X(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": b.active || b.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: b.href,
                            ...b.active || b.current ? {
                              "aria-current": b.current ? "page" : "true"
                            } : {},
                            children: P(b)
                          }
                        )
                      },
                      `overflow-${d + A}`
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
}, bo = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...u
}) => {
  const d = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), _ = c || e || a || o, B = () => {
    if (!e) return null;
    const g = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...g, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...g, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...g, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...g, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...g, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...g, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...g, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
bo.displayName = "Hero";
const ka = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (d, m = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: X("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": m
      }),
      children: /* @__PURE__ */ n.jsx(
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
  ), u = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs("div", { className: X("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: X("nhsuk-footer", e), children: u ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => c(d)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => c(d)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((d) => c(d)) }),
          o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((d) => c(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => c(d, !0)),
          (r || []).map((d) => c(d, !0)),
          (a || []).map((d) => c(d, !0)),
          (o || []).map((d) => c(d, !0))
        ] })
      ) }),
      !u && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
    ] }),
    u && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Lt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xo(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function hr(e) {
  let t, r, a;
  e.length !== 2 ? (t = Lt, r = (l, c) => Lt(e(l), c), a = (l, c) => e(l) - c) : (t = e === Lt || e === xo ? e : yo, r = e, a = e);
  function o(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) < 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) <= 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function i(l, c, u = 0, d = l.length) {
    const m = o(l, c, u, d - 1);
    return m > u && a(l[m - 1], c) > -a(l[m], c) ? m - 1 : m;
  }
  return { left: o, center: i, right: s };
}
function yo() {
  return 0;
}
function _o(e) {
  return e === null ? NaN : +e;
}
const vo = hr(Lt), ko = vo.right;
hr(_o).center;
const wo = Math.sqrt(50), So = Math.sqrt(10), Co = Math.sqrt(2);
function wa(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= wo ? 10 : s >= So ? 5 : s >= Co ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? wa(e, t, r * 2) : [l, c, u];
}
function Ir(e, t, r) {
  return t = +t, e = +e, r = +r, wa(e, t, r)[2];
}
function Rr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Ir(t, e, r) : Ir(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function jo(e, t) {
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
function fr(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Sa(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Ct() {
}
var kt = 0.7, Mt = 1 / kt, dt = "\\s*([+-]?\\d+)\\s*", wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", No = /^#([0-9a-f]{3,8})$/, To = new RegExp(`^rgb\\(${dt},${dt},${dt}\\)$`), Do = new RegExp(`^rgb\\(${Le},${Le},${Le}\\)$`), Bo = new RegExp(`^rgba\\(${dt},${dt},${dt},${wt}\\)$`), Fo = new RegExp(`^rgba\\(${Le},${Le},${Le},${wt}\\)$`), Io = new RegExp(`^hsl\\(${wt},${Le},${Le}\\)$`), Ro = new RegExp(`^hsla\\(${wt},${Le},${Le},${wt}\\)$`), Lr = {
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
fr(Ct, St, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Er,
  // Deprecated! Use color.formatHex.
  formatHex: Er,
  formatHex8: Lo,
  formatHsl: Eo,
  formatRgb: Mr,
  toString: Mr
});
function Er() {
  return this.rgb().formatHex();
}
function Lo() {
  return this.rgb().formatHex8();
}
function Eo() {
  return Ca(this).formatHsl();
}
function Mr() {
  return this.rgb().formatRgb();
}
function St(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = No.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? $r(t) : r === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ft(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ft(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = To.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = Do.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Bo.exec(e)) ? Ft(t[1], t[2], t[3], t[4]) : (t = Fo.exec(e)) ? Ft(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Io.exec(e)) ? Pr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ro.exec(e)) ? Pr(t[1], t[2] / 100, t[3] / 100, t[4]) : Lr.hasOwnProperty(e) ? $r(Lr[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function $r(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ft(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Te(e, t, r, a);
}
function Mo(e) {
  return e instanceof Ct || (e = St(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function En(e, t, r, a) {
  return arguments.length === 1 ? Mo(e) : new Te(e, t, r, a ?? 1);
}
function Te(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
fr(Te, En, Sa(Ct, {
  brighter(e) {
    return e = e == null ? Mt : Math.pow(Mt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kt : Math.pow(kt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(nt(this.r), nt(this.g), nt(this.b), $t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ar,
  // Deprecated! Use color.formatHex.
  formatHex: Ar,
  formatHex8: $o,
  formatRgb: Hr,
  toString: Hr
}));
function Ar() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}`;
}
function $o() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}${tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Hr() {
  const e = $t(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $t(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tt(e) {
  return e = nt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Pr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ie(e, t, r, a);
}
function Ca(e) {
  if (e instanceof Ie) return new Ie(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ct || (e = St(e)), !e) return new Ie();
  if (e instanceof Ie) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Ie(i, l, c, e.opacity);
}
function Ao(e, t, r, a) {
  return arguments.length === 1 ? Ca(e) : new Ie(e, t, r, a ?? 1);
}
function Ie(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
fr(Ie, Ao, Sa(Ct, {
  brighter(e) {
    return e = e == null ? Mt : Math.pow(Mt, e), new Ie(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kt : Math.pow(kt, e), new Ie(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Te(
      jn(e >= 240 ? e - 240 : e + 120, o, a),
      jn(e, o, a),
      jn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ie(zr(this.h), It(this.s), It(this.l), $t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $t(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${zr(this.h)}, ${It(this.s) * 100}%, ${It(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function zr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function It(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function jn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const mr = (e) => () => e;
function Ho(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Po(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function zo(e) {
  return (e = +e) == 1 ? ja : function(t, r) {
    return r - t ? Po(t, r, e) : mr(isNaN(t) ? r : t);
  };
}
function ja(e, t) {
  var r = t - e;
  return r ? Ho(e, r) : mr(isNaN(e) ? t : e);
}
const Wr = (function e(t) {
  var r = zo(t);
  function a(o, s) {
    var i = r((o = En(o)).r, (s = En(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = ja(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Wo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Oo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Uo(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = pr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Go(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function At(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Vo(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = pr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Mn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nn = new RegExp(Mn.source, "g");
function Yo(e) {
  return function() {
    return e;
  };
}
function qo(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ko(e, t) {
  var r = Mn.lastIndex = Nn.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Mn.exec(e)) && (o = Nn.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: At(a, o) })), r = Nn.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? qo(c[0].x) : Yo(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
    return l.join("");
  });
}
function pr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? mr(t) : (r === "number" ? At : r === "string" ? (a = St(t)) ? (t = a, Wr) : Ko : t instanceof St ? Wr : t instanceof Date ? Go : Oo(t) ? Wo : Array.isArray(t) ? Uo : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Vo : At)(e, t);
}
function Zo(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Jo(e) {
  return function() {
    return e;
  };
}
function Xo(e) {
  return +e;
}
var Or = [0, 1];
function lt(e) {
  return e;
}
function $n(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Jo(isNaN(t) ? NaN : 0.5);
}
function Qo(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function ei(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = $n(o, a), s = r(i, s)) : (a = $n(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function ti(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = $n(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = ko(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function ni(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ri() {
  var e = Or, t = Or, r = pr, a, o, s, i = lt, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== lt && (i = Qo(e[0], e[p - 1])), l = p > 2 ? ti : ei, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(o((u || (u = l(t, e.map(a), At)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Xo), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = Zo, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : lt, d()) : i !== lt;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (s = p, m) : s;
  }, function(p, _) {
    return a = p, o = _, d();
  };
}
function ai() {
  return ri()(lt, lt);
}
function si(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Tn = /* @__PURE__ */ new Date(), Dn = /* @__PURE__ */ new Date();
function Se(e, t, r, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (u < s && s < i);
    return c;
  }, o.filter = (s) => Se((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (Tn.setTime(+s), Dn.setTime(+i), e(Tn), e(Dn), Math.floor(r(Tn, Dn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Ht = Se(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ht.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Se((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ht);
Ht.range;
const Ve = 1e3, Be = Ve * 60, Ye = Be * 60, Ze = Ye * 24, gr = Ze * 7, Ur = Ze * 30, Bn = Ze * 365, ct = Se((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ve);
}, (e, t) => (t - e) / Ve, (e) => e.getUTCSeconds());
ct.range;
const br = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ve);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getMinutes());
br.range;
const oi = Se((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Be);
}, (e, t) => (t - e) / Be, (e) => e.getUTCMinutes());
oi.range;
const xr = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ve - e.getMinutes() * Be);
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getHours());
xr.range;
const ii = Se((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getUTCHours());
ii.range;
const jt = Se(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Be) / Ze,
  (e) => e.getDate() - 1
);
jt.range;
const yr = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ze, (e) => e.getUTCDate() - 1);
yr.range;
const li = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ze, (e) => Math.floor(e / Ze));
li.range;
function at(e) {
  return Se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Be) / gr);
}
const bn = at(0), Pt = at(1), ci = at(2), di = at(3), ut = at(4), ui = at(5), hi = at(6);
bn.range;
Pt.range;
ci.range;
di.range;
ut.range;
ui.range;
hi.range;
function st(e) {
  return Se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / gr);
}
const Na = st(0), zt = st(1), fi = st(2), mi = st(3), ht = st(4), pi = st(5), gi = st(6);
Na.range;
zt.range;
fi.range;
mi.range;
ht.range;
pi.range;
gi.range;
const _r = Se((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
_r.range;
const bi = Se((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
bi.range;
const Je = Se((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Je.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Je.range;
const rt = Se((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
rt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
rt.range;
function xi(e, t, r, a, o, s) {
  const i = [
    [ct, 1, Ve],
    [ct, 5, 5 * Ve],
    [ct, 15, 15 * Ve],
    [ct, 30, 30 * Ve],
    [s, 1, Be],
    [s, 5, 5 * Be],
    [s, 15, 15 * Be],
    [s, 30, 30 * Be],
    [o, 1, Ye],
    [o, 3, 3 * Ye],
    [o, 6, 6 * Ye],
    [o, 12, 12 * Ye],
    [a, 1, Ze],
    [a, 2, 2 * Ze],
    [r, 1, gr],
    [t, 1, Ur],
    [t, 3, 3 * Ur],
    [e, 1, Bn]
  ];
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const _ = m && typeof m.range == "function" ? m : c(u, d, m), B = _ ? _.range(u, +d + 1) : [];
    return p ? B.reverse() : B;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, _ = hr(([, , v]) => v).right(i, p);
    if (_ === i.length) return e.every(Rr(u / Bn, d / Bn, m));
    if (_ === 0) return Ht.every(Math.max(Rr(u, d, m), 1));
    const [B, g] = i[p / i[_ - 1][2] < i[_][2] / p ? _ - 1 : _];
    return B.every(g);
  }
  return [l, c];
}
const [yi, _i] = xi(Je, _r, bn, jt, xr, br);
function Fn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function In(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function yt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function vi(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = _t(o), d = vt(o), m = _t(s), p = vt(s), _ = _t(i), B = vt(i), g = _t(l), v = vt(l), H = _t(c), R = vt(c), E = {
    a: ne,
    A: ie,
    b: le,
    B: S,
    c: null,
    d: Zr,
    e: Zr,
    f: Ui,
    g: el,
    G: nl,
    H: zi,
    I: Wi,
    j: Oi,
    L: Ta,
    m: Gi,
    M: Vi,
    p: q,
    q: M,
    Q: Qr,
    s: ea,
    S: Yi,
    u: qi,
    U: Ki,
    V: Zi,
    w: Ji,
    W: Xi,
    x: null,
    X: null,
    y: Qi,
    Y: tl,
    Z: rl,
    "%": Xr
  }, w = {
    a: U,
    A: K,
    b: ce,
    B: h,
    c: null,
    d: Jr,
    e: Jr,
    f: il,
    g: bl,
    G: yl,
    H: al,
    I: sl,
    j: ol,
    L: Ba,
    m: ll,
    M: cl,
    p: C,
    q: L,
    Q: Qr,
    s: ea,
    S: dl,
    u: ul,
    U: hl,
    V: fl,
    w: ml,
    W: pl,
    x: null,
    X: null,
    y: gl,
    Y: xl,
    Z: _l,
    "%": Xr
  }, P = {
    a: T,
    A: x,
    b: j,
    B: O,
    c: oe,
    d: qr,
    e: qr,
    f: $i,
    g: Yr,
    G: Vr,
    H: Kr,
    I: Kr,
    j: Ri,
    L: Mi,
    m: Ii,
    M: Li,
    p: k,
    q: Fi,
    Q: Hi,
    s: Pi,
    S: Ei,
    u: ji,
    U: Ni,
    V: Ti,
    w: Ci,
    W: Di,
    x: z,
    X: Q,
    y: Yr,
    Y: Vr,
    Z: Bi,
    "%": Ai
  };
  E.x = b(r, E), E.X = b(a, E), E.c = b(t, E), w.x = b(r, w), w.X = b(a, w), w.c = b(t, w);
  function b(I, W) {
    return function(V) {
      var N = [], de = -1, ae = 0, re = I.length, G, f, y;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++de < re; )
        I.charCodeAt(de) === 37 && (N.push(I.slice(ae, de)), (f = Gr[G = I.charAt(++de)]) != null ? G = I.charAt(++de) : f = G === "e" ? " " : "0", (y = W[G]) && (G = y(V, f)), N.push(G), ae = de + 1);
      return N.push(I.slice(ae, de)), N.join("");
    };
  }
  function A(I, W) {
    return function(V) {
      var N = yt(1900, void 0, 1), de = F(N, I, V += "", 0), ae, re;
      if (de != V.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (W && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (ae = In(yt(N.y, 0, 1)), re = ae.getUTCDay(), ae = re > 4 || re === 0 ? zt.ceil(ae) : zt(ae), ae = yr.offset(ae, (N.V - 1) * 7), N.y = ae.getUTCFullYear(), N.m = ae.getUTCMonth(), N.d = ae.getUTCDate() + (N.w + 6) % 7) : (ae = Fn(yt(N.y, 0, 1)), re = ae.getDay(), ae = re > 4 || re === 0 ? Pt.ceil(ae) : Pt(ae), ae = jt.offset(ae, (N.V - 1) * 7), N.y = ae.getFullYear(), N.m = ae.getMonth(), N.d = ae.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), re = "Z" in N ? In(yt(N.y, 0, 1)).getUTCDay() : Fn(yt(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (re + 5) % 7 : N.w + N.U * 7 - (re + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, In(N)) : Fn(N);
    };
  }
  function F(I, W, V, N) {
    for (var de = 0, ae = W.length, re = V.length, G, f; de < ae; ) {
      if (N >= re) return -1;
      if (G = W.charCodeAt(de++), G === 37) {
        if (G = W.charAt(de++), f = P[G in Gr ? W.charAt(de++) : G], !f || (N = f(I, V, N)) < 0) return -1;
      } else if (G != V.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function k(I, W, V) {
    var N = u.exec(W.slice(V));
    return N ? (I.p = d.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function T(I, W, V) {
    var N = _.exec(W.slice(V));
    return N ? (I.w = B.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function x(I, W, V) {
    var N = m.exec(W.slice(V));
    return N ? (I.w = p.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function j(I, W, V) {
    var N = H.exec(W.slice(V));
    return N ? (I.m = R.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function O(I, W, V) {
    var N = g.exec(W.slice(V));
    return N ? (I.m = v.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function oe(I, W, V) {
    return F(I, t, W, V);
  }
  function z(I, W, V) {
    return F(I, r, W, V);
  }
  function Q(I, W, V) {
    return F(I, a, W, V);
  }
  function ne(I) {
    return i[I.getDay()];
  }
  function ie(I) {
    return s[I.getDay()];
  }
  function le(I) {
    return c[I.getMonth()];
  }
  function S(I) {
    return l[I.getMonth()];
  }
  function q(I) {
    return o[+(I.getHours() >= 12)];
  }
  function M(I) {
    return 1 + ~~(I.getMonth() / 3);
  }
  function U(I) {
    return i[I.getUTCDay()];
  }
  function K(I) {
    return s[I.getUTCDay()];
  }
  function ce(I) {
    return c[I.getUTCMonth()];
  }
  function h(I) {
    return l[I.getUTCMonth()];
  }
  function C(I) {
    return o[+(I.getUTCHours() >= 12)];
  }
  function L(I) {
    return 1 + ~~(I.getUTCMonth() / 3);
  }
  return {
    format: function(I) {
      var W = b(I += "", E);
      return W.toString = function() {
        return I;
      }, W;
    },
    parse: function(I) {
      var W = A(I += "", !1);
      return W.toString = function() {
        return I;
      }, W;
    },
    utcFormat: function(I) {
      var W = b(I += "", w);
      return W.toString = function() {
        return I;
      }, W;
    },
    utcParse: function(I) {
      var W = A(I += "", !0);
      return W.toString = function() {
        return I;
      }, W;
    }
  };
}
var Gr = { "-": "", _: " ", 0: "0" }, Ce = /^\s*\d+/, ki = /^%/, wi = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Si(e) {
  return e.replace(wi, "\\$&");
}
function _t(e) {
  return new RegExp("^(?:" + e.map(Si).join("|") + ")", "i");
}
function vt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Ci(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function ji(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ni(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Ti(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Di(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function Vr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function Yr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Bi(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Fi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Ii(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function qr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Ri(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Kr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Li(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Ei(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Mi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function $i(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Ai(e, t, r) {
  var a = ki.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Hi(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Pi(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Zr(e, t) {
  return ge(e.getDate(), t, 2);
}
function zi(e, t) {
  return ge(e.getHours(), t, 2);
}
function Wi(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function Oi(e, t) {
  return ge(1 + jt.count(Je(e), e), t, 3);
}
function Ta(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function Ui(e, t) {
  return Ta(e, t) + "000";
}
function Gi(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function Vi(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function Yi(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function qi(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Ki(e, t) {
  return ge(bn.count(Je(e) - 1, e), t, 2);
}
function Da(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ut(e) : ut.ceil(e);
}
function Zi(e, t) {
  return e = Da(e), ge(ut.count(Je(e), e) + (Je(e).getDay() === 4), t, 2);
}
function Ji(e) {
  return e.getDay();
}
function Xi(e, t) {
  return ge(Pt.count(Je(e) - 1, e), t, 2);
}
function Qi(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function el(e, t) {
  return e = Da(e), ge(e.getFullYear() % 100, t, 2);
}
function tl(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function nl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? ut(e) : ut.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function rl(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function Jr(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function al(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function sl(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function ol(e, t) {
  return ge(1 + yr.count(rt(e), e), t, 3);
}
function Ba(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function il(e, t) {
  return Ba(e, t) + "000";
}
function ll(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function cl(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function dl(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function ul(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function hl(e, t) {
  return ge(Na.count(rt(e) - 1, e), t, 2);
}
function Fa(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function fl(e, t) {
  return e = Fa(e), ge(ht.count(rt(e), e) + (rt(e).getUTCDay() === 4), t, 2);
}
function ml(e) {
  return e.getUTCDay();
}
function pl(e, t) {
  return ge(zt.count(rt(e) - 1, e), t, 2);
}
function gl(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function bl(e, t) {
  return e = Fa(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function xl(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function yl(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ht(e) : ht.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function _l() {
  return "+0000";
}
function Xr() {
  return "%";
}
function Qr(e) {
  return +e;
}
function ea(e) {
  return Math.floor(+e / 1e3);
}
var ot, Ia;
vl({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function vl(e) {
  return ot = vi(e), Ia = ot.format, ot.parse, ot.utcFormat, ot.utcParse, ot;
}
function kl(e) {
  return new Date(e);
}
function wl(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ra(e, t, r, a, o, s, i, l, c, u) {
  var d = ai(), m = d.invert, p = d.domain, _ = u(".%L"), B = u(":%S"), g = u("%I:%M"), v = u("%I %p"), H = u("%a %d"), R = u("%b %d"), E = u("%B"), w = u("%Y");
  function P(b) {
    return (c(b) < b ? _ : l(b) < b ? B : i(b) < b ? g : s(b) < b ? v : a(b) < b ? o(b) < b ? H : R : r(b) < b ? E : w)(b);
  }
  return d.invert = function(b) {
    return new Date(m(b));
  }, d.domain = function(b) {
    return arguments.length ? p(Array.from(b, wl)) : p().map(kl);
  }, d.ticks = function(b) {
    var A = p();
    return e(A[0], A[A.length - 1], b ?? 10);
  }, d.tickFormat = function(b, A) {
    return A == null ? P : u(A);
  }, d.nice = function(b) {
    var A = p();
    return (!b || typeof b.range != "function") && (b = t(A[0], A[A.length - 1], b ?? 10)), b ? p(si(A, b)) : d;
  }, d.copy = function() {
    return ni(d, Ra(e, t, r, a, o, s, i, l, c, u));
  }, d;
}
function Sl() {
  return jo.apply(Ra(yi, _i, Je, _r, bn, jt, xr, br, ct, Ia).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Cl({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const u = xe(null), [d, m] = pe(!1), [p, _] = pe(!1), B = t(e.start), g = t(e.end), v = Math.max(g - B, 20), H = () => {
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
  }, R = e.progress ? v * e.progress / 100 : 0, E = () => {
    r?.(e);
  }, w = () => {
    a?.(e);
  }, P = (j) => {
    j.key === "Enter" ? (j.preventDefault(), E()) : j.key === " " && (j.preventDefault(), w());
  }, b = () => {
    m(!0);
  }, A = () => {
    m(!1);
  }, F = () => {
    _(!0), l?.();
  }, k = () => {
    _(!1);
  }, T = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (p || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), x = {
    "--task-left": `${B}px`,
    "--task-width": `${v}px`,
    "--task-color": H(),
    left: `${B}px`,
    width: `${v}px`,
    backgroundColor: H()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": s,
      className: T,
      style: x,
      onClick: E,
      onDoubleClick: w,
      onKeyDown: P,
      onMouseDown: b,
      onMouseUp: A,
      onFocus: F,
      onBlur: k,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${R}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function jl({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let _ = e.getTime(); _ <= t.getTime(); _ += 864e5)
    a.push(new Date(_));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = pe(-1), c = xe(null), u = (_) => {
    if (_.key === "ArrowLeft") {
      _.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), p(B);
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), p(B);
    } else if (_.key === "ArrowDown") {
      _.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (_.key === "Home")
      _.preventDefault(), l(0), p(0);
    else if (_.key === "End") {
      _.preventDefault();
      const B = a.length - 1;
      l(B), p(B);
    }
  }, d = (_) => {
    if (_.key === "ArrowDown") {
      _.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const B = c.current;
      B && B.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (_) => {
    const B = c.current?.querySelector(`[data-date-index="${_}"]`);
    B && B.focus();
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "gantt-header",
      role: "row",
      "aria-rowindex": 1,
      children: [
        /* @__PURE__ */ n.jsx(
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
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: u,
            onFocus: m,
            children: a.map((_, B) => {
              const g = _.getTime() === s.getTime(), v = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${g ? "today" : ""} ${v ? "focused" : ""}`,
                  tabIndex: v ? 0 : -1,
                  role: "button",
                  "aria-label": `${_.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: u,
                  children: _.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                B
              );
            })
          }
        )
      ]
    }
  );
}
function Nl({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = pe(!1), [u, d] = pe(-1), m = xe(null);
  ye(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const p = (g) => {
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
          g.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const v = Math.max(0, u - 1);
        d(v), m.current?.querySelector(`[data-task-index="${v}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const R = Math.min(t.length - 1, u + 1);
        d(R), m.current?.querySelector(`[data-task-index="${R}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        g.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        g.preventDefault(), c(!1), d(-1), m.current?.focus();
        break;
    }
  }, _ = (g) => {
    switch (g.key) {
      case "ArrowUp":
        g.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        g.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault(), m.current?.focus();
        break;
    }
  }, B = (g) => {
    l && d(g);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": s + 2,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "resource-label",
            role: "gridcell",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": `Resource: ${e.label}`,
            onKeyDown: _,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: m,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: p,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((g, v) => /* @__PURE__ */ n.jsx(
              Cl,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && u === v,
                taskIndex: v,
                tabIndex: l && u === v ? 0 : -1,
                onFocus: () => B(v)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function jf({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = xe(null), [l, c] = pe(800), u = _e(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), d = _e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), m = _e(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  ye(() => {
    if (!i.current) return;
    const g = new ResizeObserver((v) => {
      const H = v[0];
      H && c(Math.max(H.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const p = _e(
    () => Sl().domain([u, d]).range([0, l]),
    [u, d, l]
  ), _ = _e(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((v) => {
      const H = g.get(v.resourceId) || [];
      H.push(v), g.set(v.resourceId, H);
    }), g;
  }, [t]), B = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const v = i.current?.querySelector(".gantt-row .resource-label");
          v && v.focus();
          break;
        case "Home":
          g.preventDefault();
          const H = i.current?.querySelector(".header-resource");
          H && H.focus();
          break;
      }
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "gantt-chart",
      role: "grid",
      "aria-label": "Gantt Chart showing resource scheduling and task timelines",
      "aria-rowcount": e.length + 1,
      "aria-colcount": m + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: B,
      children: [
        /* @__PURE__ */ n.jsx(jl, { viewStart: u, viewEnd: d, dateCount: m }),
        /* @__PURE__ */ n.jsx(
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
            children: e.map((g, v) => /* @__PURE__ */ n.jsx(
              Nl,
              {
                resource: g,
                tasks: _.get(g.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: v,
                dateCount: m
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
const Wt = ({
  children: e,
  href: t,
  active: r = !1,
  attributes: a = {}
}) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", children: r ? /* @__PURE__ */ n.jsx(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...a,
    children: e
  }
) : /* @__PURE__ */ n.jsx(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...a,
    children: e
  }
) }), Tl = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? Fe.Children.toArray(t).filter(
    (v) => Fe.isValidElement(v) && (v.type === Wt || v.type?.displayName === "BreadcrumbItem")
  ).map((v) => ({
    text: typeof v.props.children == "string" ? v.props.children : String(v.props.children),
    href: v.props.href,
    active: v.props.active,
    attributes: v.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const g = u();
    if (g && g.length > 0) {
      const v = g.slice().reverse().find((H) => H.href && !H.active);
      if (v)
        return { href: v.href, text: v.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), _ = X(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), B = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: _,
      "aria-label": B,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Fe.Children.map(t, (g, v) => Fe.isValidElement(g) && (g.type === Wt || g.type?.displayName === "BreadcrumbItem") ? Fe.cloneElement(g, { key: v }) : null)
        ) : (
          // Render from items array
          m?.filter((g) => g.active || !!g.href).map((g, v) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...g.attributes || {},
              children: g.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: g.href,
              role: "link",
              ...g.attributes || {},
              children: g.text
            }
          ) }, v))
        ) }),
        p.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: p.href,
            role: "link",
            "aria-label": `Back to ${p.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              p.text
            ]
          }
        ) })
      ]
    }
  );
}, Dl = Tl;
Dl.Item = Wt;
Wt.displayName = "BreadcrumbItem";
const La = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = pe(!1);
  ye(() => {
    s(!0);
  }, []), ye(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (c) => {
      const u = c.target, d = u.getAttribute("href");
      if (d && d.startsWith("#")) {
        const m = document.querySelector(d);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          u.__nhsSkipLinkTimeout = p;
        }
      }
    };
    try {
      const c = document.querySelectorAll(".nhsuk-skip-link");
      return c.forEach((u) => {
        u.addEventListener("click", l);
      }), () => {
        try {
          c.forEach((u) => {
            u.removeEventListener("click", l);
            const d = u.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
          });
        } catch (u) {
          console.warn("SkipLink cleanup error:", u);
        }
      };
    } catch (c) {
      return console.warn("SkipLink initialization error:", c), () => {
      };
    }
  }, [o]);
  const i = X("nhsuk-skip-link", r);
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": o ? "true" : "false",
      ...a,
      children: e
    }
  );
}, Nf = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = X("nhsuk-pagination", o);
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...s,
      children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-list nhsuk-pagination__list", children: [
        e && t && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-pagination-item--previous", children: /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: e, children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-pagination__title", children: "Previous" }),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-pagination__page", children: t }),
          /* @__PURE__ */ n.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-left",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ n.jsx("path", { d: "M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" })
            }
          )
        ] }) }),
        r && a && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: r, children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-pagination__page", children: a }),
          /* @__PURE__ */ n.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-right",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ n.jsx("path", { d: "M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" })
            }
          )
        ] }) })
      ] })
    }
  );
}, Tf = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = X("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...i.attributes || {},
      children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-contents-list__current", children: i.text })
    },
    l
  ) : /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      children: /* @__PURE__ */ n.jsx(
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
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: o,
      role: "navigation",
      "aria-label": r,
      ...a,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, Ea = Fe.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: u,
  ...d
}, m) => {
  const p = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), B = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ke,
      {
        level: a,
        className: B,
        children: R()
      }
    );
  }, v = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, H = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "27",
      height: "27",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ n.jsx("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
        /* @__PURE__ */ n.jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
          /* @__PURE__ */ n.jsx("path", { d: "M15.438 13l-3.771 3.771" }),
          /* @__PURE__ */ n.jsx("path", { d: "M11.667 9.229L15.438 13" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ...d,
      className: p,
      ref: m,
      children: [
        c && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: u || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          g(),
          v(),
          H()
        ] })
      ]
    }
  );
});
Ea.displayName = "Card";
const Df = ({
  className: e,
  children: t,
  "data-testid": r,
  id: a
}) => {
  const o = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: o,
      "data-testid": r,
      id: a,
      children: t
    }
  );
}, Bf = ({
  className: e,
  children: t,
  "data-testid": r
}) => {
  const a = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "li",
    {
      className: a,
      "data-testid": r,
      children: t
    }
  );
}, Ff = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": u,
  id: d,
  "aria-label": m,
  "aria-labelledby": p,
  "aria-describedby": _
}) => {
  const B = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), v = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], E = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        R,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ke,
      {
        level: a,
        className: g,
        children: E
      }
    );
  }, H = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: B,
      "data-testid": u,
      id: d,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          v(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: H() })
      ]
    }
  );
}, Bl = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const u = X(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Ke,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ke,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, m = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    m()
  ] });
}, If = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = X("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Rf = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = X(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, u) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: c.href,
          className: "nhsuk-link",
          ...c.attributes,
          children: [
            s(c),
            c.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    u
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Lf = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: u,
  tableClasses: d,
  classes: m,
  attributes: p,
  "data-testid": _
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = X(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), v = X(m), H = (w, P) => {
    const b = X("nhsuk-table__header", {
      [`nhsuk-table__header--${w.format}`]: w.format
    }, w.classes), A = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && { role: "columnheader" },
      ...w.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: b, ...A, children: w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }, P);
  }, R = (w, P, b) => {
    const A = o && b, F = X(
      A ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${A ? "header" : "cell"}--${w.format}`]: w.format
      },
      w.classes
    ), k = {
      ...A && { scope: "row" },
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && {
        role: A ? "rowheader" : "cell",
        ...w.header && { "data-label": w.header }
      },
      ...w.attributes
    }, T = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && w.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        w.header,
        " "
      ] }),
      w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text
    ] }), x = A ? "th" : "td";
    return /* @__PURE__ */ n.jsx(x, { className: F, ...k, children: T }, P);
  }, E = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...p,
      ..._ && { "data-testid": _ },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((w, P) => H(w, P)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((w, P) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: w.map(
              (b, A) => R(b, A, A === 0)
            )
          },
          P
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Bl, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ke, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    E()
  ] }) : v ? /* @__PURE__ */ n.jsx("div", { className: v, children: E() }) : E();
}, Ef = ft(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: u,
  "data-testid": d,
  ...m
}, p) => {
  const _ = r !== void 0, [B, g] = pe(() => t || e[0]?.id || ""), v = _ ? r : B, H = xe(null), R = xe(/* @__PURE__ */ new Map()), E = ee((T) => {
    _ || g(T), a?.(T);
  }, [_, a]), w = ee((T) => {
    o?.(T), l && E(T);
  }, [o, l, E]), P = ee((T, x) => {
    const j = e.filter((z) => !z.disabled).map((z) => z.id), O = j.indexOf(x);
    let oe = null;
    switch (T.key) {
      case "ArrowLeft":
        oe = O > 0 ? O - 1 : j.length - 1;
        break;
      case "ArrowRight":
        oe = O < j.length - 1 ? O + 1 : 0;
        break;
      case "Home":
        oe = 0;
        break;
      case "End":
        oe = j.length - 1;
        break;
      case "Escape":
        T.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (oe !== null) {
      T.preventDefault();
      const z = j[oe], Q = R.current.get(z);
      Q && (Q.focus(), w(z));
    }
  }, [e, w, i]), b = ee((T, x) => {
    x ? R.current.set(T, x) : R.current.delete(T);
  }, []), A = ee((T) => {
    const x = R.current.get(T);
    x && x.focus();
  }, []);
  ua(p, () => ({
    focusTab: A,
    getActiveTab: () => v,
    getTabListElement: () => H.current
  }), [A, v]);
  const F = ee((T) => {
    const x = T.relatedTarget;
    H.current?.contains(x) || s?.();
  }, [s]), k = X("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: k,
      id: u,
      "data-testid": d,
      ...m,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: H,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: F,
                children: e.map((T) => {
                  const x = T.id === v, j = T.disabled, O = X("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": x,
                    "nhsuk-tabs__list-item--disabled": j
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: O, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (oe) => b(T.id, oe),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": x,
                      "aria-controls": `${T.id}-panel`,
                      id: `${T.id}-tab`,
                      tabIndex: x ? 0 : -1,
                      disabled: j,
                      onClick: () => !j && E(T.id),
                      onKeyDown: (oe) => !j && P(oe, T.id),
                      onFocus: () => !j && w(T.id),
                      ...T.attributes,
                      children: T.label
                    }
                  ) }, T.id);
                })
              }
            )
          }
        ),
        e.map((T) => {
          const x = T.id === v;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${T.id}-tab`,
              id: `${T.id}-panel`,
              hidden: !x,
              children: T.content
            },
            T.id
          );
        })
      ]
    }
  );
}), Fl = ft(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, u) => {
    const d = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let p;
    return l ? p = l : a ? p = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (p = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: u,
        id: i,
        className: d,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Fl.displayName = "Details";
const Il = ft(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    s && c.push(s);
    const u = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__cross",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: [
          /* @__PURE__ */ n.jsx(
            "path",
            {
              d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "path",
            {
              d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__tick",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: /* @__PURE__ */ n.jsx(
          "path",
          {
            strokeWidth: "4",
            strokeLinecap: "round",
            d: "M18.4 7.8l-8.5 8.4L5.6 12",
            stroke: "#007f3b"
          }
        )
      }
    ), m = (_) => t === "cross" && !a ? `do not ${_}` : _, p = () => /* @__PURE__ */ n.jsx(
      Ke,
      {
        level: o,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        ref: l,
        className: c.join(" "),
        ...i,
        children: [
          p(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((_, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            m(_.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
Il.displayName = "DoDontList";
const Rl = ft(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, u) => {
    const d = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), m = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let p;
    return l ? p = l : a ? p = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (p = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: u,
        id: i,
        className: d,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Rl.displayName = "Expander";
const Ll = ft(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, _ = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        El,
        {
          item: l,
          itemClasses: _,
          hasLink: p,
          hintId: d,
          statusId: m,
          ariaDescribedBy: B
        },
        c
      );
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: o,
        className: s,
        ...a,
        children: e.map(i)
      }
    );
  }
), El = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const u = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": s,
        children: u
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: u });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const u = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(qe, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Ll.displayName = "TaskList";
const Mf = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), u = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: u,
      ...i,
      children: [
        da(
          d,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            e,
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        c()
      ]
    }
  );
}, $f = ({
  src: e,
  alt: t,
  caption: r,
  sizes: a,
  srcset: o,
  className: s,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      className: l,
      ...i,
      children: [
        /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src: e,
            alt: t,
            ...a && o ? { sizes: a, srcSet: o } : {}
          }
        ),
        r && /* @__PURE__ */ n.jsx(
          "figcaption",
          {
            className: "nhsuk-image__caption",
            dangerouslySetInnerHTML: { __html: r }
          }
        )
      ]
    }
  );
}, Ml = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ke, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return o ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: u
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: u
    }
  );
}, Af = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx("div", { className: "nhs-fdp-grid", children: /* @__PURE__ */ n.jsx("div", { className: "nhs-fdp-grid__row", children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhs-fdp-grid__column nhs-fdp-grid__column--one-half nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(Ml, { ...o })
    },
    s
  )) }) }) });
}, $l = Fe.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: u,
    ariaDescribedby: d,
    className: m,
    tableClassName: p,
    bordered: _ = !1,
    striped: B = !1,
    responsive: g = !1,
    tableType: v = "default"
  }, H) => {
    const R = xe(null), E = xe(null), w = xe(null);
    Fe.useImperativeHandle(H, () => R.current, []);
    const [P, b] = pe(0), [A, F] = pe(0), [k, T] = pe("headers"), [x, j] = pe("browse"), O = t.length, oe = e.length, z = _e(() => !r || r.length === 0 ? e : [...e].sort((M, U) => {
      for (const { key: K, direction: ce } of r) {
        const h = M[K], C = U[K];
        if (h == null && C == null) continue;
        if (h == null) return 1;
        if (C == null) return -1;
        let L = 0;
        if (typeof h == "number" && typeof C == "number" ? L = h - C : L = String(h).localeCompare(String(C)), L !== 0)
          return ce === "asc" ? L : -L;
      }
      return 0;
    }), [e, r]), Q = ee((M, U) => {
      setTimeout(() => {
        const K = R.current?.querySelector(
          `tbody tr:nth-child(${M + 1}) td:nth-child(${U + 1})`
        );
        K && (K.focus(), typeof K.scrollIntoView == "function" && K.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = ee((M) => {
      setTimeout(() => {
        const U = R.current?.querySelector(`th:nth-child(${M + 1})`);
        U && (U.focus(), typeof U.scrollIntoView == "function" && U.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = ee((M) => {
      a?.(M);
    }, [a]), le = ee((M) => {
      s?.(M);
    }, [s]), S = ee((M) => {
      const { key: U } = M;
      switch (U) {
        case "Enter":
          if (M.preventDefault(), k === "headers" && x === "browse")
            j("navigate"), ne(A);
          else if (k === "headers" && x === "navigate") {
            const K = t[A];
            K && ie(K.key);
          } else k === "cells" && x === "browse" ? (j("navigate"), Q(P, A)) : k === "cells" && x === "navigate" && le(P);
          break;
        case "Escape":
          M.preventDefault(), (k === "headers" && x === "navigate" || k === "cells" && x === "navigate") && j("browse");
          break;
        case "ArrowLeft":
          if (M.preventDefault(), x === "navigate" || x === "browse" && k === "headers") {
            if (k === "headers") {
              const K = Math.max(0, A - 1);
              F(K), ne(K);
            } else if (k === "cells") {
              const K = Math.max(0, A - 1);
              F(K), Q(P, K);
            }
          }
          break;
        case "ArrowRight":
          if (M.preventDefault(), x === "navigate" || x === "browse" && k === "headers") {
            if (k === "headers") {
              const K = Math.min(O - 1, A + 1);
              F(K), ne(K);
            } else if (k === "cells") {
              const K = Math.min(O - 1, A + 1);
              F(K), Q(P, K);
            }
          }
          break;
        case "ArrowUp":
          if (M.preventDefault(), k === "cells") {
            if (x === "browse") {
              const K = Math.max(0, P - 1);
              b(K), Q(K, 0), F(0);
            } else if (x === "navigate")
              if (P > 0) {
                const K = P - 1;
                b(K), Q(K, A);
              } else
                T("headers"), j("browse"), ne(A);
          }
          break;
        case "ArrowDown":
          if (M.preventDefault(), k === "headers" && x === "browse")
            T("cells"), b(0), F(0), Q(0, 0);
          else if (k === "cells") {
            const K = oe - 1;
            if (x === "browse") {
              const ce = Math.min(K, P + 1);
              b(ce), Q(ce, 0), F(0);
            } else if (x === "navigate" && P < K) {
              const ce = P + 1;
              b(ce), Q(ce, A);
            }
          }
          break;
        case "Home":
          M.preventDefault(), k === "headers" ? (F(0), ne(0)) : k === "cells" && (M.ctrlKey ? (b(0), F(0), Q(0, 0)) : (F(0), Q(P, 0)));
          break;
        case "End":
          if (M.preventDefault(), k === "headers") {
            const K = O - 1;
            F(K), ne(K);
          } else if (k === "cells")
            if (M.ctrlKey) {
              const K = oe - 1, ce = O - 1;
              b(K), F(ce), Q(K, ce);
            } else {
              const K = O - 1;
              F(K), Q(P, K);
            }
          break;
        case " ":
          if (M.preventDefault(), k === "headers" && x === "navigate") {
            const K = t[A];
            K && ie(K.key);
          } else k === "cells" && x === "navigate" && le(P);
          break;
      }
    }, [
      k,
      x,
      A,
      P,
      O,
      oe,
      t,
      Q,
      ne,
      ie,
      le
    ]);
    ye(() => {
      const M = R.current;
      if (M)
        return M.addEventListener("keydown", S), () => M.removeEventListener("keydown", S);
    }, [S]);
    const q = X(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": _,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": v === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: R,
        className: q,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: E, role: "row", children: t.map((M, U) => {
            const K = r?.find((C) => C.key === M.key), ce = !!K, h = k === "headers" && A === U;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: X("sortable-header", {
                  "sortable-header--focused": h
                }),
                role: "columnheader",
                tabIndex: h ? 0 : -1,
                onClick: () => ie(M.key),
                onKeyDown: (C) => {
                  (C.key === "Enter" || C.key === " ") && (C.preventDefault(), ie(M.key));
                },
                "aria-sort": ce ? K?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: M.label }),
                  ce && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((C) => C.key === M.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: K?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              M.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: w, className: "nhsuk-table__body", role: "rowgroup", children: z.map((M, U) => {
            const K = o === U, ce = k === "cells" && P === U;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: X("data-row", {
                  "data-row--selected": K,
                  "data-row--focused": ce
                }),
                "aria-selected": K,
                children: t.map((h, C) => {
                  const L = h.tableRenderer ? h.tableRenderer(M) : h.render ? h.render(M) : M[h.key], I = k === "cells" && P === U && A === C, W = () => typeof L == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: L ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: L ? "Yes" : "No" })
                  ] }) : String(L ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: X("data-cell", {
                        "data-cell--focused": I
                      }),
                      tabIndex: I ? 0 : -1,
                      onClick: () => le(U),
                      children: W()
                    },
                    h.key
                  );
                })
              },
              U
            );
          }) })
        ]
      }
    );
  }
);
$l.displayName = "AriaDataGrid";
const Ma = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const m = xe(null), p = xe(null), _ = xe(null), B = ee((k, T) => {
    c || (p.current = T, k.dataTransfer.effectAllowed = "move", k.dataTransfer.setData("text/plain", T));
  }, [c]), g = ee((k, T) => {
    c || p.current === T || (k.preventDefault(), k.dataTransfer.dropEffect = "move", _.current = T);
  }, [c]), v = ee((k, T) => {
    if (c) return;
    k.preventDefault();
    const x = p.current;
    if (!x || x === T) return;
    const j = e.findIndex((oe) => oe.key === x), O = e.findIndex((oe) => oe.key === T);
    if (j !== -1 && O !== -1) {
      const oe = [...e], [z] = oe.splice(j, 1);
      oe.splice(O, 0, z), r(oe);
    }
    p.current = null, _.current = null;
  }, [c, e, r]), H = ee(() => {
    p.current = null, _.current = null;
  }, []), R = ee((k) => {
    const T = t.find((x) => x.key === k);
    return T ? T.label : k;
  }, [t]), E = ee((k) => ["red", "orange", "blue", "aqua-green", "grey"][k] || "grey", []), w = ee((k) => {
    if (c) return;
    const T = e.map(
      (x) => x.key === k ? { ...x, direction: x.direction === "asc" ? "desc" : "asc" } : x
    );
    r(T);
  }, [e, r, c]), P = ee((k) => {
    if (c) return;
    const T = e.filter((x) => x.key !== k);
    r(T);
  }, [e, r, c]), b = ee(() => {
    c || r([]);
  }, [r, c]), A = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const k = e.map((T, x) => {
      const j = T.direction === "asc" ? "ascending" : "descending";
      return `${x + 1}. ${R(T.key)} (${j})`;
    });
    if (k.length === 1)
      return `Sorted by: ${k[0]}`;
    if (k.length === 2)
      return `Sorted by: ${k.join(" and ")}`;
    {
      const T = k.pop();
      return `Sorted by: ${k.join(", ")}, and ${T}`;
    }
  }, F = _e(() => {
    const k = ["sort-description"];
    return l && k.push("sort-help"), d && k.push(d), k.join(" ");
  }, [l, d]);
  return e.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: o
      }
    ),
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: A()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: m,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": u,
          "aria-describedby": F,
          children: e.map((k, T) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (x) => B(x, k.key),
              onDragOver: (x) => g(x, k.key),
              onDrop: (x) => v(x, k.key),
              onDragEnd: H,
              onClick: () => w(k.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": k.key,
              children: /* @__PURE__ */ n.jsx(
                qe,
                {
                  color: E(T),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => P(k.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${T + 1}`, children: T + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R(k.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (x) => {
                          x.stopPropagation(), w(k.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${R(k.key)}. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${k.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${k.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                          }
                        ) })
                      }
                    )
                  ] })
                }
              )
            },
            k.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        De,
        {
          variant: "secondary",
          onClick: b,
          disabled: c,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Al(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const r = [...e.tabLoadingStates];
      return r[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: r };
    case "SET_TAB_ERROR":
      const a = [...e.tabErrors];
      return a[t.payload.tabIndex] = t.payload.error, { ...e, tabErrors: a };
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), c = new Array(s).fill([]);
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, s); u++)
        i[u] = e.tabLoadingStates[u], l[u] = e.tabErrors[u], c[u] = e.selectedRows[u];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: c
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
const An = ft(
  function(t, r) {
    const {
      dataConfig: a = {},
      tabPanels: o,
      selectedIndex: s,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: c,
      ariaDescription: u,
      className: d = "",
      disabled: m = !1,
      orientation: p = "horizontal",
      id: _,
      isLoading: B = !1,
      loadingComponent: g,
      error: v = null,
      errorComponent: H,
      "data-testid": R
    } = t, {
      dataComparator: E = (h, C) => JSON.stringify(h) === JSON.stringify(C),
      filterFunction: w = (h) => h,
      booleanRenderer: P = (h) => h ? "✓" : "✗"
    } = a || {}, b = s !== void 0, A = s ?? 0, [F, k] = pe({
      focusArea: "tabs",
      focusedTabIndex: A,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), T = _e(() => ({
      selectedIndex: A,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [A]), [x, j] = ha(Al, T);
    ye(() => {
      const h = x.tabLoadingStates.length, C = o.length;
      h !== C && j({ type: "ADJUST_ARRAYS", payload: { newLength: C } });
    }, [o.length]), ye(() => {
      b && j({ type: "SET_SELECTED_INDEX", payload: A });
    }, [A, b]), ye(() => {
      k((h) => ({
        ...h,
        focusArea: "tabs",
        focusedTabIndex: x.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [x.selectedIndex]), ye(() => {
      l && l(x.globalSelectedRowData);
    }, [x.globalSelectedRowData, l]);
    const O = ee((h, C) => E(h, C), [E]), oe = ee((h) => {
      h >= 0 && h < o.length && !o[h].disabled && (j({ type: "SET_SELECTED_INDEX", payload: h }), k((C) => ({
        ...C,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    }, [o, i]), z = ee((h) => {
      setTimeout(() => {
        const C = ne.current[h], L = C?.parentElement;
        if (C && L) {
          const I = C.offsetLeft, W = C.offsetWidth, V = L.clientWidth, N = I - V / 2 + W / 2;
          try {
            L.scrollTo({
              left: Math.max(0, N),
              behavior: "smooth"
            });
          } catch {
            C.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else
          console.log("Missing elements for scroll:", { tabElement: C, tabListElement: L });
      }, 50);
    }, []), Q = ee((h, C) => {
      const { key: L } = h;
      switch (L) {
        case "ArrowLeft":
          h.preventDefault();
          const I = C > 0 ? C - 1 : o.length - 1;
          oe(I), z(I), ne.current[I]?.focus();
          break;
        case "ArrowRight":
          h.preventDefault();
          const W = C < o.length - 1 ? C + 1 : 0;
          oe(W), z(W), ne.current[W]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), k((N) => ({
            ...N,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), oe(0), z(0), ne.current[0]?.focus();
          break;
        case "End":
          h.preventDefault();
          const V = o.length - 1;
          oe(V), z(V), ne.current[V]?.focus();
          break;
        case "Enter":
        case " ":
          h.preventDefault(), oe(C);
          break;
      }
    }, [o.length, oe, z]), ne = xe([]), ie = xe([]), le = ee((h, C) => {
      const L = x.sortConfig || [], I = L.find((N) => N.key === C);
      let W;
      I ? I.direction === "asc" ? W = L.map(
        (N) => N.key === C ? { ...N, direction: "desc" } : N
      ) : W = L.filter((N) => N.key !== C) : W = [...L, { key: C, direction: "asc" }], j({
        type: "SET_SORT",
        payload: W
      }), o[h].onSort?.(C);
    }, [x.sortConfig, o]), S = ee((h) => {
      setTimeout(() => {
        const C = document.querySelector(
          `[data-tab-panel="${x.selectedIndex}"] th:nth-child(${h + 1})`
        );
        C && C.focus();
      }, 0);
    }, [x.selectedIndex]), q = ee((h) => P(h), [P]), M = ee((h, C) => {
      setTimeout(() => {
        const L = document.querySelector(
          `[data-tab-panel="${x.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${C + 1})`
        );
        L && L.focus();
      }, 0);
    }, [x.selectedIndex]);
    ye(() => {
      F.isGridActive && (F.focusArea === "headers" ? setTimeout(() => {
        S(F.focusedHeaderIndex);
      }, 0) : F.focusArea === "cells" && setTimeout(() => {
        M(F.focusedRowIndex, F.focusedColumnIndex);
      }, 0));
    }, [F.focusArea, F.isGridActive, F.focusedHeaderIndex, F.focusedRowIndex, F.focusedColumnIndex, S, M]), ye(() => {
      z(x.selectedIndex);
    }, [x.selectedIndex, z]);
    const U = ee((h, C) => {
      const { key: L } = h, I = o[x.selectedIndex], W = I?.columns.length || 0;
      switch (L) {
        case "ArrowLeft":
          h.preventDefault();
          const V = Math.max(0, C - 1);
          k((re) => ({ ...re, focusedHeaderIndex: V })), S(V);
          break;
        case "ArrowRight":
          h.preventDefault();
          const N = Math.min(W - 1, C + 1);
          k((re) => ({ ...re, focusedHeaderIndex: N })), S(N);
          break;
        case "ArrowUp":
          h.preventDefault(), k((re) => ({
            ...re,
            focusArea: "tabs",
            focusedTabIndex: x.selectedIndex
          })), z(x.selectedIndex), ne.current[x.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), k((re) => ({
            ...re,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: C,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), k((re) => ({ ...re, focusedHeaderIndex: 0 })), S(0);
          break;
        case "End":
          h.preventDefault();
          const de = W - 1;
          k((re) => ({ ...re, focusedHeaderIndex: de })), S(de);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const ae = I?.columns[C]?.key;
          ae && le(x.selectedIndex, ae);
          break;
      }
    }, [o, x.selectedIndex, le, k, S, M, ne]), K = ee((h, C, L) => {
      const { key: I } = h, W = o[x.selectedIndex], V = W?.data.length || 0, N = W?.columns.length || 0;
      switch (I) {
        case "ArrowUp":
          if (h.preventDefault(), C === 0)
            k((G) => ({
              ...G,
              focusArea: "headers",
              focusedHeaderIndex: L,
              isGridActive: !1
            })), S(L);
          else {
            const G = C - 1;
            k((f) => ({ ...f, focusedRowIndex: G })), M(G, L);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const de = Math.min(V - 1, C + 1);
          k((G) => ({ ...G, focusedRowIndex: de })), M(de, L);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const ae = Math.max(0, L - 1);
          k((G) => ({ ...G, focusedColumnIndex: ae })), M(C, ae);
          break;
        case "ArrowRight":
          h.preventDefault();
          const re = Math.min(N - 1, L + 1);
          k((G) => ({ ...G, focusedColumnIndex: re })), M(C, re);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (k((G) => ({ ...G, focusedRowIndex: 0, focusedColumnIndex: 0 })), M(0, 0)) : (k((G) => ({ ...G, focusedColumnIndex: 0 })), M(C, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const G = V - 1, f = N - 1;
            k((y) => ({ ...y, focusedRowIndex: G, focusedColumnIndex: f })), M(G, f);
          } else {
            const G = N - 1;
            k((f) => ({ ...f, focusedColumnIndex: G })), M(C, G);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), W && W.data[C]) {
            const G = W.data.some((D) => "ews_data" in D) ? w(W.data, x.filters) : W.data, f = x.sortConfig;
            let y = G;
            if (f && f.length > 0 && (y = [...G].sort((D, $) => {
              for (const { key: Y, direction: Z } of f) {
                let te = D[Y], se = $[Y];
                const J = W.columns.find((je) => je.key === Y);
                if (J?.tableRenderer ? (te = J.tableRenderer(D), se = J.tableRenderer($)) : J?.render && (te = J.render(D), se = J.render($)), te == null && se == null) continue;
                if (te == null) return Z === "asc" ? -1 : 1;
                if (se == null) return Z === "asc" ? 1 : -1;
                let he = 0;
                if (typeof te == "number" && typeof se == "number" ? he = te - se : he = String(te).localeCompare(String(se), void 0, { numeric: !0, sensitivity: "base" }), he !== 0)
                  return Z === "asc" ? he : -he;
              }
              return 0;
            })), y[C]) {
              const D = y[C], Y = x.globalSelectedRowData && O(x.globalSelectedRowData, D) ? null : D;
              j({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Y
              });
            }
          }
          break;
      }
    }, [o, x.selectedIndex, x.filters, x.sortConfig, w, O, j, k, S, M]), ce = ee((h, C) => w(h, C), [w]);
    return ua(r, () => ({
      selectTab: (h) => {
        h >= 0 && h < o.length && (j({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const C = h ?? x.selectedIndex, L = o[C];
        return L ? L.data : [];
      },
      getSelectedRows: (h) => x.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        j({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        j({ type: "SET_FILTERS", payload: h });
      }
    }), [x.selectedIndex, x.selectedRows, o, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": R, children: g || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : v ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": R, children: H || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: v })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: _,
        "data-testid": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${_}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Ma,
            {
              sortConfig: x.sortConfig || [],
              columns: o.flatMap(
                (h) => h.columns.map((C) => ({ key: C.key, label: C.label }))
              ).filter(
                (h, C, L) => L.findIndex((I) => I.key === h.key) === C
                // Remove duplicates
              ),
              onSortChange: (h) => {
                j({ type: "SET_SORT", payload: h });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${_ ? `${_}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((h, C) => {
                const L = C === x.selectedIndex, I = h.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": L,
                    "aria-disabled": I,
                    tabIndex: L ? 0 : -1,
                    ref: (W) => {
                      ne.current[C] = W;
                    },
                    onClick: () => oe(C),
                    onKeyDown: (W) => Q(W, C),
                    disabled: I,
                    className: [
                      "aria-tabs-datagrid__tab",
                      L ? "aria-tabs-datagrid__tab--selected" : "",
                      I ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      x.tabLoadingStates[C] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      x.tabErrors[C] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          o.map((h, C) => {
            const L = C === x.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${h.id}`,
                "aria-labelledby": `tab-${h.id}`,
                tabIndex: 0,
                hidden: !L,
                ref: (I) => {
                  ie.current[C] = I;
                },
                className: `aria-tabs-datagrid__panel ${h.className || ""}`,
                "data-tab-panel": C,
                children: L && (() => {
                  const I = h.data.some((V) => "ews_data" in V) ? ce(h.data, x.filters) : h.data, W = _e(() => {
                    const V = x.sortConfig;
                    return !V || V.length === 0 ? I : [...I].sort((N, de) => {
                      for (const { key: ae, direction: re } of V) {
                        let G = N[ae], f = de[ae];
                        const y = h.columns.find(($) => $.key === ae);
                        if (y?.tableRenderer ? (G = y.tableRenderer(N), f = y.tableRenderer(de)) : y?.render && (G = y.render(N), f = y.render(de)), G == null && f == null) continue;
                        if (G == null) return 1;
                        if (f == null) return -1;
                        let D = 0;
                        if (typeof G == "number" && typeof f == "number" ? D = G - f : typeof G == "boolean" && typeof f == "boolean" ? D = G === f ? 0 : G ? 1 : -1 : D = String(G).localeCompare(String(f), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), D !== 0)
                          return re === "asc" ? D : -D;
                      }
                      return 0;
                    });
                  }, [I, x.sortConfig, h.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": h.ariaLabel,
                      "aria-describedby": h.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((V, N) => {
                          const de = x.sortConfig?.find((G) => G.key === V.key), ae = !!de, re = F.focusArea === "headers" && F.focusedHeaderIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${re ? "sortable-header--focused" : ""} ${ae ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: re ? 0 : -1,
                              onClick: () => le(C, V.key),
                              onKeyDown: (G) => U(G, N),
                              "aria-sort": ae ? de?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: V.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${ae ? `sort-indicator--${de?.direction}` : ""}`, children: [
                                  x.sortConfig && x.sortConfig.length > 0 && x.sortConfig.findIndex((G) => G.key === V.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${x.sortConfig.findIndex((G) => G.key === V.key) + 1}`,
                                      "data-priority": x.sortConfig.findIndex((G) => G.key === V.key) + 1,
                                      title: `Sort priority: ${x.sortConfig.findIndex((G) => G.key === V.key) + 1}`,
                                      children: x.sortConfig.findIndex((G) => G.key === V.key) + 1
                                    }
                                  ),
                                  ae && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${de?.direction}`,
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      "aria-hidden": "true",
                                      focusable: "false",
                                      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                    }
                                  )
                                ] })
                              ] })
                            },
                            V.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: W.map((V, N) => {
                          const de = x.globalSelectedRowData && O(x.globalSelectedRowData, V), ae = F.focusArea === "cells" && F.focusedRowIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${de ? "data-row--selected" : ""} ${ae ? "data-row--focused" : ""}`,
                              "aria-selected": de,
                              children: h.columns.map((re, G) => {
                                const f = re.tableRenderer ? re.tableRenderer(V) : re.render ? re.render(V) : V[re.key], y = F.focusArea === "cells" && F.focusedRowIndex === N && F.focusedColumnIndex === G, D = () => typeof f == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  q(f),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Yes" : "No" })
                                ] }) : String(f ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${y ? "data-cell--focused" : ""}`,
                                    tabIndex: y ? 0 : -1,
                                    onClick: () => {
                                      const Y = x.globalSelectedRowData && O(x.globalSelectedRowData, V) ? null : V;
                                      j({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: Y
                                      });
                                    },
                                    onKeyDown: ($) => K($, N, G),
                                    children: D()
                                  },
                                  re.key
                                );
                              })
                            },
                            N
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              h.id
            );
          })
        ]
      }
    );
  }
), Rt = {
  asc: "↑",
  desc: "↓"
}, Hl = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Rn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Pl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function zl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Wl(e, t) {
  const r = t.find((o) => o.id === e), a = Pl(t);
  return r ? r.priority < a : !1;
}
const Hf = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const d = _e(() => Hl(e), [e]), m = ee((R) => {
    if (l) return;
    const E = e.map(
      (w) => w.id === R ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    t(E);
  }, [e, t, l]), p = ee((R) => {
    if (l) return;
    const E = e.findIndex((P) => P.id === R);
    if (E <= 0) return;
    const w = [...e];
    [w[E], w[E - 1]] = [w[E - 1], w[E]], t(Rn(w));
  }, [e, t, l]), _ = ee((R) => {
    if (l) return;
    const E = e.findIndex((P) => P.id === R);
    if (E >= e.length - 1 || E === -1) return;
    const w = [...e];
    [w[E], w[E + 1]] = [w[E + 1], w[E]], t(Rn(w));
  }, [e, t, l]), B = ee((R) => {
    if (l) return;
    const E = e.filter((w) => w.id !== R);
    t(Rn(E));
  }, [e, t, l]), g = ee(() => {
    l || t([]);
  }, [t, l]), v = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const R = d.map((E, w) => {
      const P = E.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${E.label} (${P})`;
    });
    if (R.length === 1)
      return `Sorted by: ${R[0]}`;
    if (R.length === 2)
      return `Sorted by: ${R.join(" and ")}`;
    {
      const E = R.pop();
      return `Sorted by: ${R.join(", ")}, and ${E}`;
    }
  }, H = _e(() => {
    const R = ["sort-description"];
    return i && R.push("sort-help"), u && R.push(u), R.join(" ");
  }, [i, u]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: v()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: v()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": H,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((R) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                qe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(R.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: R.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(R.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${R.label}. Currently ${R.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: R.direction === "asc" ? Rt.asc : Rt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(R.id),
                          disabled: l || !zl(R.id, e),
                          "aria-label": `Move ${R.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => _(R.id),
                          disabled: l || !Wl(R.id, e),
                          "aria-label": `Move ${R.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            R.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "secondary",
        onClick: g,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Rt.asc,
      "/",
      Rt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, vr = (e, t) => t.map((r) => ({
  id: r.id,
  label: r.label,
  data: r.filter ? r.filter(e) : e,
  columns: r.columns.map((a) => ({
    key: a.key,
    label: a.label,
    render: a.render
  })),
  sortConfig: r.sortConfig,
  ariaLabel: r.ariaLabel || `${r.label} Data Grid`,
  ariaDescription: r.ariaDescription || `Data grid showing ${r.label.toLowerCase()}`,
  className: r.className,
  disabled: r.disabled
})), Hn = [
  {
    value: !0,
    icon: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__tick", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ n.jsx("path", { strokeWidth: "4", strokeLinecap: "round", d: "M18.4 7.8l-8.5 8.4L5.6 12", stroke: "#007f3b" }) })
  },
  {
    value: !1,
    icon: /* @__PURE__ */ n.jsxs("svg", { className: "nhsuk-icon nhsuk-icon__cross", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ n.jsx("path", { d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z", fill: "#d5281b" }),
      /* @__PURE__ */ n.jsx("path", { d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z", fill: "#d5281b" })
    ] })
  }
], Ol = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Ul = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Gl = (e) => {
  if (typeof e == "boolean") {
    const r = Hn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Hn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Vl = (e) => `${e.name}-${e.bed_name}`, Yl = () => ({
  overview: [
    { key: "name", label: "Patient Name" },
    { key: "age", label: "Age" },
    { key: "ward_name", label: "Ward" },
    { key: "bed_name", label: "Bed" },
    { key: "ews_score", label: "EWS Score" },
    { key: "speciality", label: "Specialty" },
    { key: "consultant", label: "Consultant" }
  ],
  vitals: [
    { key: "name", label: "Patient Name" },
    { key: "ews_score", label: "EWS Score" },
    { key: "respiratory_rate_bpm", label: "Respiratory Rate", render: (e) => e.ews_data.respiratory_rate_bpm },
    { key: "sp02", label: "SpO2 %", render: (e) => e.ews_data.sp02 },
    { key: "temperature", label: "Temperature °C", render: (e) => e.ews_data.temperature },
    { key: "systolic_bp", label: "Systolic BP", render: (e) => e.ews_data.systolic_bp },
    { key: "heart_rate", label: "Heart Rate", render: (e) => e.ews_data.heart_rate },
    { key: "avpu", label: "AVPU", render: (e) => e.ews_data.avpu.toUpperCase() }
  ],
  discharge: [
    { key: "name", label: "Patient Name" },
    { key: "anticipated_discharge_date", label: "Anticipated Discharge", render: (e) => new Date(e.anticipated_discharge_date).toLocaleDateString() },
    { key: "early_discharge_notification", label: "Discharge Status" },
    { key: "medically_optimised", label: "Medically Optimised" },
    { key: "criteria_to_reside", label: "Criteria to Reside" },
    { key: "fast_track", label: "Fast Track" },
    { key: "transport_status", label: "Transport Status" },
    { key: "pathway", label: "Pathway" }
  ],
  logistics: [
    { key: "name", label: "Patient Name" },
    { key: "ward_name", label: "Ward" },
    { key: "room_name", label: "Room" },
    { key: "bed_name", label: "Bed" },
    { key: "bed_type", label: "Bed Type" },
    { key: "transport_booking", label: "Transport Booked" },
    { key: "transport_mobility", label: "Transport Type" },
    { key: "district_nurse_referral", label: "District Nurse" },
    { key: "equipment", label: "Equipment" }
  ]
}), Pf = (e) => {
  const t = Yl();
  return [
    {
      id: "overview",
      label: "Patient Overview",
      data: e,
      columns: t.overview,
      ariaLabel: "Patient Overview Data Grid",
      ariaDescription: "Overview of all patients with basic information"
    },
    {
      id: "vitals",
      label: "Vital Signs & EWS",
      data: e,
      columns: t.vitals,
      sortConfig: [
        { key: "ews_score", direction: "desc" },
        { key: "name", direction: "asc" },
        { key: "ward_name", direction: "asc" }
      ],
      ariaLabel: "Patient Vital Signs Data Grid",
      ariaDescription: "Patient vital signs and Early Warning Scores"
    },
    {
      id: "discharge",
      label: "Discharge Planning",
      data: e.filter((r) => r.anticipated_discharge_date),
      columns: t.discharge,
      sortConfig: [
        { key: "anticipated_discharge_date", direction: "asc" },
        { key: "discharge_status", direction: "desc" }
      ],
      ariaLabel: "Discharge Planning Data Grid",
      ariaDescription: "Patient discharge planning and status information"
    },
    {
      id: "logistics",
      label: "Bed Management",
      data: e,
      columns: t.logistics,
      sortConfig: [{ key: "ward_name", direction: "asc" }],
      ariaLabel: "Bed Management Data Grid",
      ariaDescription: "Patient location and logistics information"
    }
  ];
}, ql = {
  dataComparator: Ol,
  filterFunction: Ul,
  booleanRenderer: Gl,
  getDataId: Vl
};
function ta(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = r, m = t.find((E) => E.key === a), p = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", _ = () => o.filter((w) => !i.includes(w) && e[w]).slice(0, 3).map((w) => {
    const P = t.find((k) => k.key === w), b = e[w], A = u[w] ? u[w](b, e) : P?.cardRenderer ? P.cardRenderer(e) : P?.render ? P.render(e) : b;
    return `${P?.label || w}: ${A}`;
  }).join(" • "), B = () => s.length === 0 ? null : s.filter((E) => e[E.fieldKey] !== void 0).map((E) => {
    const w = e[E.fieldKey], P = E.render ? E.render(w, e) : w;
    return `<span class="nhsuk-tag ${Kl(E, w)}">${P}</span>`;
  }).join(""), g = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", v = B(), H = _(), R = v ? `${H}${v ? `<div class="adaptive-card__badges">${v}</div>` : ""}` : H;
  return {
    variant: g(),
    heading: String(p),
    descriptionHtml: R,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${p}`
  };
}
function Kl(e, t) {
  const r = e.className || "adaptive-card__badge";
  if (e.fieldKey === "ews_score" || e.fieldKey.includes("score")) {
    const a = Number(t);
    return a >= 7 ? `${r} nhsuk-tag--red` : a >= 3 ? `${r} nhsuk-tag--yellow` : `${r} nhsuk-tag--green`;
  }
  if (e.fieldKey === "priority") {
    const a = String(t).toLowerCase();
    if (a === "high") return `${r} nhsuk-tag--red`;
    if (a === "medium") return `${r} nhsuk-tag--yellow`;
    if (a === "low") return `${r} nhsuk-tag--green`;
  }
  if (e.fieldKey === "status") {
    const a = String(t).toLowerCase();
    if (a === "urgent" || a === "critical") return `${r} nhsuk-tag--red`;
    if (a === "pending" || a === "warning") return `${r} nhsuk-tag--yellow`;
    if (a === "completed" || a === "success") return `${r} nhsuk-tag--green`;
  }
  switch (e.color) {
    case "primary":
      return `${r} nhsuk-tag--blue`;
    case "secondary":
      return `${r} nhsuk-tag--grey`;
    case "success":
      return `${r} nhsuk-tag--green`;
    case "warning":
      return `${r} nhsuk-tag--yellow`;
    case "danger":
      return `${r} nhsuk-tag--red`;
    default:
      return r;
  }
}
const Zl = {
  primaryField: "name",
  secondaryFields: ["id", "description", "status"],
  badges: [
    {
      fieldKey: "priority",
      render: (e) => e.charAt(0).toUpperCase() + e.slice(1),
      className: "adaptive-card__priority-badge"
    },
    {
      fieldKey: "status",
      render: (e) => e.charAt(0).toUpperCase() + e.slice(1),
      className: "adaptive-card__status-badge"
    }
  ],
  hiddenFields: [],
  getPriority: (e) => e.priority || "medium",
  getStatus: (e) => e.status || "active",
  getVariant: (e) => e.priority === "high" ? "primary" : "default",
  fieldRenderers: {},
  classPrefix: "adaptive-card--generic"
}, $a = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, u = e.bed_name, d = e.ews_score, m = e.speciality, p = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${u}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: d !== void 0 && /* @__PURE__ */ n.jsxs(
            qe,
            {
              color: Xl(za(d)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                d
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: p })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Aa = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        qe,
        {
          color: Ql(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        qe,
        {
          color: "grey",
          className: "healthcare-card__duration",
          children: [
            e.duration || "30",
            " min"
          ]
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ n.jsx("dt", { children: "Patient" }),
      /* @__PURE__ */ n.jsx("dd", { children: e.patient_name })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
      /* @__PURE__ */ n.jsx("dd", { children: e.consultant })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ n.jsx("dt", { children: "Location" }),
      /* @__PURE__ */ n.jsx("dd", { children: e.location })
    ] })
  ] }) }),
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Ha = ({
  data: e,
  onAction: t
}) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--medication healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__medication-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__medication-name", children: e.medication }),
      /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__dose", children: [
        e.dose,
        " • ",
        e.frequency
      ] })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        qe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        qe,
        {
          color: "red",
          className: "healthcare-card__warning",
          children: [
            "Due: ",
            new Date(e.next_due).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
          ]
        }
      )
    ] })
  ] }),
  /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ n.jsx("dt", { children: "Patient" }),
      /* @__PURE__ */ n.jsx("dd", { children: e.patient_name })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ n.jsx("dt", { children: "Prescriber" }),
      /* @__PURE__ */ n.jsx("dd", { children: e.prescriber })
    ] }),
    e.allergies && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
      /* @__PURE__ */ n.jsx("dt", { children: "Allergies" }),
      /* @__PURE__ */ n.jsx("dd", { children: e.allergies })
    ] })
  ] }) }),
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Pa = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, u = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, m = e.ews_data?.avpu;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${o}, EWS Score ${s}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: o }),
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Jl(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            qe,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                m.toUpperCase()
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-grid", children: [
          i !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Respiratory Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              i,
              " bpm"
            ] })
          ] }),
          l !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "SpO2" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              l,
              "%"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "°C"
            ] })
          ] }),
          u !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: u })
          ] }),
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function za(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Jl(e) {
  return za(e);
}
function Xl(e) {
  switch (e) {
    case "critical":
      return "red";
    case "high":
      return "orange";
    case "medium":
      return "yellow";
    case "low":
      return "grey";
    default:
      return "grey";
  }
}
function Ql(e) {
  switch (e.toLowerCase()) {
    case "active":
      return "blue";
    case "pending":
      return "orange";
    case "completed":
      return "green";
    case "cancelled":
      return "grey";
    default:
      return "blue";
  }
}
const ec = [
  {
    fieldKey: "ews_score",
    render: (e) => `EWS: ${e}`,
    className: "adaptive-card__ews-badge",
    color: "default"
    // Will be overridden by custom logic
  },
  {
    fieldKey: "priority",
    render: (e) => e.charAt(0).toUpperCase() + e.slice(1),
    className: "adaptive-card__priority-badge"
  },
  {
    fieldKey: "status",
    render: (e) => e.charAt(0).toUpperCase() + e.slice(1),
    className: "adaptive-card__status-badge"
  }
], Wa = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", tc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, nc = (e) => Wa(e) === "high" || e.status === "urgent" ? "primary" : "default", rc = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, ac = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: ec,
  hiddenFields: [],
  getPriority: Wa,
  getStatus: tc,
  getVariant: nc,
  fieldRenderers: rc,
  classPrefix: "adaptive-card--healthcare"
}, sc = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      $a,
      {
        data: e,
        columns: t,
        priority: a,
        status: s,
        onSelect: (i) => console.log("Patient selected:", i),
        onAction: (i, l) => console.log("Patient action:", i, l)
      }
    );
  },
  appointment: (e, t, r) => {
    const a = r.getStatus?.(e) || "pending", o = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ n.jsx(
      Aa,
      {
        data: e,
        columns: t,
        status: o,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, i) => console.log("Appointment action:", s, i)
      }
    );
  },
  medication: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      Ha,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Medication selected:", o),
        onAction: (o, s) => console.log("Medication action:", o, s)
      }
    );
  },
  vitals: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      Pa,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, oc = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, na = {
  name: "healthcare",
  defaultCardConfig: ac,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: sc,
  fieldTypes: oc
};
function ra(e) {
  return {
    primaryField: e?.primaryField || "name",
    secondaryFields: e?.secondaryFields || [],
    badges: e?.badgeFields?.map((t) => ({
      fieldKey: t,
      className: "adaptive-card__badge"
    })) || [],
    hiddenFields: e?.hiddenFields || [],
    cardTemplate: e?.cardTemplate ? (t, r, a) => e.cardTemplate(t, r) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function aa(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function ic(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const r = [...e.tabLoadingStates];
      return r[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: r };
    case "SET_TAB_ERROR":
      const a = [...e.tabErrors];
      return a[t.payload.tabIndex] = t.payload.error, { ...e, tabErrors: a };
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), c = new Array(s).fill([]);
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, s); u++)
        i[u] = e.tabLoadingStates[u], l[u] = e.tabErrors[u], c[u] = e.selectedRows[u];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: c
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
function lc(e, t) {
  const [r, a] = pe("cards");
  return ye(() => {
    if (t) {
      a(t);
      return;
    }
    const o = () => {
      const s = window.innerWidth;
      s < e.mobile ? a("cards") : s < e.desktop ? a("hybrid") : a("table");
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [e, t]), r;
}
function cc(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function dc(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...Zl, ...r };
  if (a && a.cardTemplates) {
    const s = cc(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), ta(e, t, o);
}
const zf = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  // Standard AriaTabsDataGrid props
  tabPanels: s,
  dataConfig: i,
  selectedIndex: l,
  onTabChange: c,
  ariaLabel: u = "Data grid",
  ariaDescription: d,
  orientation: m = "horizontal",
  id: p,
  disabled: _ = !1,
  className: B,
  ...g
}) => {
  const v = lc(e, t), H = l !== void 0, R = l ?? 0, E = _e(() => {
    if (s.some(
      (y) => y.data && y.data.length > 0 && aa(y.data)
    )) {
      const y = ra(r);
      return {
        ...na.defaultCardConfig,
        ...y
      };
    } else
      return ra(r);
  }, [r, s]), w = _e(() => s.some(
    (y) => y.data && y.data.length > 0 && aa(y.data)
  ) ? na : void 0, [s]), P = _e(() => ({
    selectedIndex: R,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [R, s.length]), [b, A] = ha(ic, P), F = xe([]), k = xe([]), T = xe([]), x = xe(null), [j, O] = pe({
    focusArea: "tabs",
    focusedTabIndex: 0,
    focusedCardIndex: 0,
    selectedCardIndex: -1,
    isGridActive: !1,
    focusedCardElementIndex: 0,
    cardElements: [],
    isCardNavigationActive: !1,
    gridColumns: 1,
    gridRows: 1,
    cardSortConfig: null,
    focusedSortControlIndex: 0,
    isSortControlsActive: !1
  }), oe = ee((f) => {
    if (!f.current)
      return { columns: 1, rows: 0 };
    const y = f.current, D = y.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (D.length === 0)
      return { columns: 1, rows: 0 };
    const $ = y.offsetWidth, Z = D[0].offsetWidth, te = Math.floor($ / Z) || 1, se = Math.ceil(D.length / te);
    return { columns: te, rows: se };
  }, []), z = ee((f, y) => ({
    row: Math.floor(f / y),
    col: f % y
  }), []), Q = ee((f, y, D) => f * D + y, []), ne = ee((f, y, D, $) => {
    const { row: Y, col: Z } = z(f, $);
    let te = Y, se = Z;
    switch (y) {
      case "up":
        te = Math.max(0, Y - 1);
        break;
      case "down":
        te = Math.min(Math.floor((D - 1) / $), Y + 1);
        break;
      case "left":
        se = Math.max(0, Z - 1);
        break;
      case "right":
        se = Math.min($ - 1, Z + 1);
        break;
    }
    const J = Q(te, se, $);
    return Math.min(J, D - 1);
  }, [z, Q]);
  ye(() => {
    j.isCardNavigationActive && j.focusedCardElementIndex >= 0 && j.cardElements.length > 0 && setTimeout(() => {
      const f = j.cardElements[j.focusedCardElementIndex];
      f && (f.element.focus(), f.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [j.isCardNavigationActive, j.focusedCardElementIndex, j.cardElements.length]), ye(() => {
    const f = () => {
      if (v === "cards" && x.current) {
        const { columns: $, rows: Y } = oe(x);
        O((Z) => ({
          ...Z,
          gridColumns: $,
          gridRows: Y
        }));
      }
    }, y = setTimeout(f, 200), D = () => {
      setTimeout(f, 100);
    };
    return window.addEventListener("resize", D), () => {
      clearTimeout(y), window.removeEventListener("resize", D);
    };
  }, [v, s, oe]), ye(() => {
    const f = b.tabLoadingStates.length, y = s.length;
    f !== y && A({ type: "ADJUST_ARRAYS", payload: { newLength: y } });
  }, [s.length, b.tabLoadingStates.length]), ye(() => {
    H && l !== b.selectedIndex && A({ type: "SET_SELECTED_INDEX", payload: l });
  }, [H, l, b.selectedIndex]);
  const ie = ee((f) => {
    f >= 0 && f < s.length && !s[f].disabled && (A({ type: "SET_SELECTED_INDEX", payload: f }), c?.(f));
  }, [s, c]), le = ee((f) => {
    console.log("Card selected:", f), A({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: f
    });
  }, []), S = ee((f) => {
    const y = k.current[f];
    y && (y.focus(), y.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), q = ee((f) => {
    const y = k.current[f];
    if (!y) return [];
    const D = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), $ = y.querySelectorAll(D);
    return Array.from($).map((Y, Z) => ({
      id: Y.id || `card-${f}-element-${Z}`,
      element: Y,
      label: Y.getAttribute("aria-label") || Y.textContent?.trim() || Y.getAttribute("title") || `Element ${Z + 1}`,
      type: Y.tagName.toLowerCase() === "button" ? "button" : Y.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(Y.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), M = xe(null), U = ee((f) => {
    const y = M.current;
    if (!y) return;
    const D = document.createElement("div");
    D.setAttribute("aria-live", "polite"), D.setAttribute("aria-atomic", "true"), D.className = "sr-only", D.textContent = f, y.appendChild(D), setTimeout(() => {
      y.contains(D) && y.removeChild(D);
    }, 1e3);
  }, []), K = ee((f) => {
    const y = f.filter(($) => $.sortable !== !1), D = [
      { value: "", label: "Sort by..." }
    ];
    return y.forEach(($) => {
      const Y = $.label || $.key;
      $.key === "name" ? D.push(
        { value: `${$.key}-asc`, label: `${Y} (A-Z)` },
        { value: `${$.key}-desc`, label: `${Y} (Z-A)` }
      ) : $.key === "ews_score" || $.key.includes("score") ? D.push(
        { value: `${$.key}-desc`, label: `${Y} (High-Low)` },
        { value: `${$.key}-asc`, label: `${Y} (Low-High)` }
      ) : $.key === "age" || $.key.includes("date") || $.key.includes("time") ? D.push(
        { value: `${$.key}-desc`, label: `${Y} (Oldest-Youngest)` },
        { value: `${$.key}-asc`, label: `${Y} (Youngest-Oldest)` }
      ) : D.push(
        { value: `${$.key}-asc`, label: `${Y} (A-Z)` },
        { value: `${$.key}-desc`, label: `${Y} (Z-A)` }
      );
    }), D;
  }, []), ce = ee((f, y) => y ? [...f].sort((D, $) => {
    const Y = D[y.key], Z = $[y.key];
    if (Y == null && Z == null) return 0;
    if (Y == null) return 1;
    if (Z == null) return -1;
    const te = Number(Y), se = Number(Z);
    if (!isNaN(te) && !isNaN(se))
      return y.direction === "asc" ? te - se : se - te;
    const J = String(Y).toLowerCase(), he = String(Z).toLowerCase(), je = J.localeCompare(he);
    return y.direction === "asc" ? je : -je;
  }) : f, []), h = ee((f) => {
    if (!f) {
      O((J) => ({ ...J, cardSortConfig: null })), U("Card sorting cleared");
      return;
    }
    const [y, D] = f.split("-"), $ = { key: y, direction: D };
    O((J) => ({ ...J, cardSortConfig: $ }));
    const te = s[b.selectedIndex]?.columns.find((J) => J.key === y)?.label || y;
    U(`Cards sorted by ${te} in ${D === "asc" ? "ascending" : "descending"} order`);
  }, [s, b.selectedIndex, U]), C = ee((f) => {
    const $ = s[b.selectedIndex]?.columns.find((Z) => Z.key === f.key)?.label || f.key, Y = f.direction === "asc" ? "ascending" : "descending";
    return `${$} (${Y})`;
  }, [s, b.selectedIndex]), L = ee((f) => {
    const y = s[b.selectedIndex];
    if (o) {
      const D = b.sortConfig;
      return !D || D.length === 0 ? f : [...f].sort(($, Y) => {
        for (const { key: Z, direction: te } of D) {
          let se = $[Z], J = Y[Z];
          const he = y?.columns.find((Ee) => Ee.key === Z);
          if (he?.cardRenderer ? (se = he.cardRenderer($), J = he.cardRenderer(Y)) : he?.render && (se = he.render($), J = he.render(Y)), se == null && J == null) continue;
          if (se == null) return te === "asc" ? -1 : 1;
          if (J == null) return te === "asc" ? 1 : -1;
          const je = Number(se), ve = Number(J);
          if (!isNaN(je) && !isNaN(ve)) {
            const Ee = je - ve;
            if (Ee !== 0) return te === "asc" ? Ee : -Ee;
            continue;
          }
          const we = String(se).toLowerCase(), mt = String(J).toLowerCase(), Nt = we.localeCompare(mt);
          if (Nt !== 0) return te === "asc" ? Nt : -Nt;
        }
        return 0;
      });
    } else
      return ce(f, j.cardSortConfig);
  }, [o, b.sortConfig, j.cardSortConfig, ce, s, b.selectedIndex]), I = ee((f, y) => {
    const D = q(f), $ = D[y];
    if ($) {
      $.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const Y = `Focused on ${$.label}, ${$.type} ${y + 1} of ${D.length} within card`;
      U(Y);
    }
  }, [q, U]), W = ee((f) => {
    F.current[f]?.focus();
  }, []), V = ee(() => {
    const f = T.current[0];
    if (!f) return [];
    const y = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), D = f.querySelectorAll(y);
    return Array.from(D);
  }, []), N = ee((f) => {
    if (f === 0) {
      const y = T.current[0];
      if (y) {
        y.focus();
        const $ = `Sort controls region with ${V().length} interactive elements. Press Enter or Space to navigate between controls.`;
        U($);
      }
    } else {
      const y = V(), D = f - 1, $ = y[D];
      if ($) {
        $.focus();
        const Y = $.tagName.toLowerCase() === "select", Z = $.tagName.toLowerCase() === "button", te = Y ? "dropdown" : Z ? "button" : "control", se = Y ? ". Use Space key to open dropdown" : "", J = `${te} ${D + 1} of ${y.length}${se}`;
        U(J);
      }
    }
  }, [V, U]), de = ee((f, y) => {
    const { key: D } = f, $ = s[b.selectedIndex], Y = $?.data.length || 0;
    if (D === "ArrowLeft" && f.shiftKey) {
      f.preventDefault(), f.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (D === "ArrowRight" && f.shiftKey) {
      f.preventDefault(), f.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!j.isCardNavigationActive) {
      switch (D) {
        case "ArrowUp":
          if (f.preventDefault(), y === 0)
            O((J) => ({ ...J, focusArea: "tabs" })), W(b.selectedIndex);
          else {
            const J = ne(y, "up", Y, j.gridColumns);
            J !== y && (O((he) => ({ ...he, focusedCardIndex: J })), S(J), U(`Moved to card ${J + 1} of ${Y}`));
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const Z = ne(y, "down", Y, j.gridColumns);
          Z !== y && (O((J) => ({ ...J, focusedCardIndex: Z })), S(Z), U(`Moved to card ${Z + 1} of ${Y}`));
          break;
        case "ArrowLeft":
          f.preventDefault();
          const te = ne(y, "left", Y, j.gridColumns);
          te !== y ? (O((J) => ({ ...J, focusedCardIndex: te })), S(te), U(`Moved to card ${te + 1} of ${Y}`)) : b.selectedIndex > 0 && (A({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex - 1 }), O((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => W(b.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          f.preventDefault();
          const se = ne(y, "right", Y, j.gridColumns);
          se !== y ? (O((J) => ({ ...J, focusedCardIndex: se })), S(se), U(`Moved to card ${se + 1} of ${Y}`)) : b.selectedIndex < s.length - 1 && (A({ type: "SET_SELECTED_INDEX", payload: b.selectedIndex + 1 }), O((J) => ({ ...J, focusArea: "tabs" })), setTimeout(() => W(b.selectedIndex + 1), 0));
          break;
        case "Enter":
          if ($?.data[y]) {
            f.preventDefault(), O((he) => ({
              ...he,
              selectedCardIndex: y
            }));
            const J = q(y);
            J.length > 0 ? (O((he) => ({
              ...he,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: J,
              selectedCardIndex: y
              // Ensure selection is maintained
            })), U(`Card ${y + 1} selected and navigation activated. ${J.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : U(`Card ${y + 1} selected.`);
          }
          break;
        case " ":
          if ($?.data[y]) {
            f.preventDefault(), O((he) => ({
              ...he,
              selectedCardIndex: he.selectedCardIndex === y ? -1 : y
            }));
            const J = j.selectedCardIndex === y;
            U(`Card ${y + 1} ${J ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (D) {
      case "ArrowUp":
      case "ArrowLeft":
        f.preventDefault();
        const Z = Math.max(0, j.focusedCardElementIndex - 1);
        O((he) => ({ ...he, focusedCardElementIndex: Z })), I(y, Z);
        break;
      case "ArrowDown":
      case "ArrowRight":
        f.preventDefault();
        const te = Math.min(j.cardElements.length - 1, j.focusedCardElementIndex + 1);
        O((he) => ({ ...he, focusedCardElementIndex: te })), I(y, te);
        break;
      case "Enter":
        f.preventDefault();
        const se = j.cardElements[j.focusedCardElementIndex];
        se && (se.element.click(), U(`Activated ${se.label}`));
        break;
      case " ":
        f.preventDefault();
        const J = j.cardElements[j.focusedCardElementIndex];
        if (J) {
          const he = new MouseEvent("dblclick", { bubbles: !0 });
          J.element.dispatchEvent(he), U(`Double-clicked ${J.label}`);
        }
        break;
      case "Escape":
        f.preventDefault(), O((he) => ({
          ...he,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => S(y), 0), U("Exited card navigation, returned to card level");
        break;
      case "Home":
        f.preventDefault(), j.cardElements.length > 0 && (O((he) => ({ ...he, focusedCardElementIndex: 0 })), I(y, 0));
        break;
      case "End":
        if (f.preventDefault(), j.cardElements.length > 0) {
          const he = j.cardElements.length - 1;
          O((je) => ({ ...je, focusedCardElementIndex: he })), I(y, he);
        }
        break;
    }
  }, [j, b.selectedIndex, s, le, S, W, O, q, I, U]), ae = ee((f) => {
    const y = F.current[f], D = y?.parentElement;
    if (!y || !D) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const $ = y.getBoundingClientRect(), Y = D.getBoundingClientRect();
    $.left >= Y.left && $.right <= Y.right || (console.log("Tab not visible, scrolling into view (mobile)"), y.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), re = ee((f, y) => {
    if (v !== "cards")
      return;
    const { key: D } = f;
    switch (D) {
      case "ArrowLeft":
        f.preventDefault();
        const $ = y > 0 ? y - 1 : s.length - 1;
        ie($), O((se) => ({ ...se, focusedTabIndex: $ })), F.current[$]?.focus(), ae($);
        break;
      case "ArrowRight":
        f.preventDefault();
        const Y = y < s.length - 1 ? y + 1 : 0;
        ie(Y), O((se) => ({ ...se, focusedTabIndex: Y })), F.current[Y]?.focus(), ae(Y);
        break;
      case "ArrowDown":
        f.preventDefault();
        const Z = s[b.selectedIndex];
        Z && Z.columns && Z.columns.length > 0 ? (O((se) => ({
          ...se,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), N(0)) : (O((se) => ({
          ...se,
          focusArea: "cards",
          focusedCardIndex: 0
        })), S(0));
        break;
      case "Home":
        f.preventDefault(), ie(0), O((se) => ({ ...se, focusedTabIndex: 0 })), F.current[0]?.focus(), ae(0);
        break;
      case "End":
        f.preventDefault();
        const te = s.length - 1;
        ie(te), O((se) => ({ ...se, focusedTabIndex: te })), F.current[te]?.focus(), ae(te);
        break;
      case "Enter":
      case " ":
        f.preventDefault(), ie(y);
        break;
    }
  }, [s.length, ie, v, S, O, ae]), G = ee((f, y) => {
    if (v !== "cards")
      return;
    const { key: D } = f, $ = s[b.selectedIndex];
    if (y === 0 && !j.isSortControlsActive) {
      switch (D) {
        case "ArrowUp":
          f.preventDefault(), O((Z) => ({
            ...Z,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W(b.selectedIndex);
          break;
        case "ArrowDown":
          f.preventDefault(), $?.data && $.data.length > 0 && (O((Z) => ({
            ...Z,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), S(0));
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const Y = V();
          if (Y.length > 0) {
            O((te) => ({
              ...te,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), N(1);
            const Z = `Entered sort controls navigation mode. ${Y.length} controls available. Use arrow keys to navigate between controls.`;
            U(Z);
          }
          break;
        case "Escape":
          f.preventDefault(), O((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(b.selectedIndex);
          break;
      }
      return;
    }
    if (j.isSortControlsActive) {
      const Z = V().length;
      switch (D) {
        case "ArrowLeft":
          f.preventDefault();
          const te = j.focusedSortControlIndex > 1 ? j.focusedSortControlIndex - 1 : Z;
          O((J) => ({ ...J, focusedSortControlIndex: te })), N(te);
          break;
        case "ArrowRight":
          f.preventDefault();
          const se = j.focusedSortControlIndex < Z ? j.focusedSortControlIndex + 1 : 1;
          O((J) => ({ ...J, focusedSortControlIndex: se })), N(se);
          break;
        case "ArrowDown":
          if (f.preventDefault(), j.isSortControlsActive) {
            const J = j.focusedSortControlIndex < Z ? j.focusedSortControlIndex + 1 : 1;
            O((he) => ({ ...he, focusedSortControlIndex: J })), N(J);
          } else
            $?.data && $.data.length > 0 && (O((J) => ({
              ...J,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), S(0));
          break;
        case "ArrowUp":
          f.preventDefault(), O((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), N(0);
          break;
        case "Escape":
          f.preventDefault(), O((J) => ({
            ...J,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(b.selectedIndex);
          break;
      }
    }
  }, [v, s, b.selectedIndex, j.isSortControlsActive, j.focusedSortControlIndex, N, W, S, O, U]);
  if (v === "cards") {
    const f = s[b.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": u,
          "aria-describedby": `${d || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((y, D) => {
            const $ = D === b.selectedIndex, Y = y.disabled || _;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${y.id}`,
                "aria-controls": `panel-${y.id}`,
                "aria-selected": $,
                "aria-disabled": Y,
                tabIndex: $ ? 0 : -1,
                ref: (Z) => {
                  F.current[D] = Z;
                },
                onClick: () => ie(D),
                onKeyDown: (Z) => re(Z, D),
                disabled: Y,
                className: [
                  "aria-tabs-datagrid__tab",
                  $ ? "aria-tabs-datagrid__tab--selected" : "",
                  Y ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: y.label }),
                  b.tabLoadingStates[D] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  b.tabErrors[D] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              y.id
            );
          })
        }
      ),
      f && f.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Ma,
          {
            sortConfig: b.sortConfig || [],
            columns: f.columns.map((y) => ({ key: y.key, label: y.label })),
            onSortChange: (y) => {
              A({ type: "SET_SORT", payload: y });
            },
            ariaLabel: "Card view sort configuration",
            className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
          }
        )
      ) : (
        /* Simple card sorting */
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid-adaptive__sort-controls",
            role: "region",
            "aria-label": "Sort controls",
            tabIndex: j.focusArea === "sort-controls" ? 0 : -1,
            ref: (y) => {
              T.current[0] = y;
            },
            onKeyDown: (y) => G(y, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${f.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  ma,
                  {
                    id: `card-sort-${f.id}`,
                    name: `card-sort-${f.id}`,
                    value: j.cardSortConfig ? `${j.cardSortConfig.key}-${j.cardSortConfig.direction}` : "",
                    onChange: (y) => h(y.target.value),
                    className: "sort-select",
                    children: K(f.columns).map((y) => /* @__PURE__ */ n.jsx("option", { value: y.value, children: y.label }, y.value))
                  }
                )
              ] }),
              j.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  C(j.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  De,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => h(""),
                    "aria-label": "Clear card sorting",
                    className: "sort-clear-button",
                    children: "Clear"
                  }
                )
              ] })
            ] })
          }
        )
      ) }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: x,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${f?.label || "Data"} cards in ${j.gridRows} rows and ${j.gridColumns} columns`,
          "aria-rowcount": j.gridRows,
          "aria-colcount": j.gridColumns,
          id: `panel-${f?.id}`,
          "aria-labelledby": `tab-${f?.id}`,
          children: L(f?.data || []).map((y, D) => {
            const $ = j.selectedCardIndex === D, Y = j.focusedCardIndex === D && j.focusArea === "cards", Z = j.focusedCardIndex === D && j.focusArea === "card" && j.isCardNavigationActive, te = D === 0 && j.focusArea !== "cards", se = Y || te, J = z(D, j.gridColumns);
            if (r.cardTemplate) {
              const ve = r.cardTemplate(y, f.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (we) => {
                    k.current[D] = we;
                  },
                  className: [
                    "aria-tabs-datagrid-adaptive__card-wrapper",
                    $ ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                    Y ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                    Z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                  ].filter(Boolean).join(" "),
                  role: "gridcell",
                  "aria-rowindex": J.row + 1,
                  "aria-colindex": J.col + 1,
                  "aria-selected": $,
                  "aria-expanded": Z,
                  "aria-description": Z ? `Card navigation active. ${j.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: se ? 0 : -1,
                  onClick: () => {
                    O((we) => ({
                      ...we,
                      selectedCardIndex: we.selectedCardIndex === D ? -1 : D
                    })), le(y);
                  },
                  onKeyDown: (we) => de(we, D),
                  onFocus: () => {
                    O((we) => we.focusedCardIndex !== D || we.focusArea !== "cards" ? {
                      ...we,
                      focusedCardIndex: D,
                      focusArea: "cards"
                    } : we);
                  },
                  children: ve
                },
                `card-${D}`
              );
            }
            const he = dc(y, f.columns, E, w), je = [
              he.className || "",
              $ ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              Y ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Z ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: [
                  "aria-tabs-datagrid-adaptive__card-wrapper",
                  Z ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                ].filter(Boolean).join(" "),
                role: "gridcell",
                "aria-rowindex": J.row + 1,
                "aria-colindex": J.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  Ea,
                  {
                    ...he,
                    ref: (ve) => {
                      k.current[D] = ve;
                    },
                    className: je,
                    "aria-selected": $,
                    "aria-expanded": Z,
                    "aria-label": `${he["aria-label"] || he.heading}. ${Z ? `Card navigation active with ${j.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: se ? 0 : -1,
                    onClick: () => {
                      O((ve) => ({
                        ...ve,
                        selectedCardIndex: ve.selectedCardIndex === D ? -1 : D
                      })), le(y);
                    },
                    onKeyDown: (ve) => de(ve, D),
                    onFocus: () => {
                      j.isCardNavigationActive || O((ve) => ve.focusedCardIndex !== D || ve.focusArea !== "cards" ? {
                        ...ve,
                        focusedCardIndex: D,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : ve);
                    }
                  }
                )
              },
              `card-${D}`
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: M,
          className: "aria-tabs-datagrid-adaptive__announcements",
          "aria-hidden": "true",
          style: {
            position: "fixed",
            top: "-1px",
            left: "-1px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            border: 0,
            padding: 0,
            margin: 0
          }
        }
      )
    ] });
  }
  return v === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${B || ""}`, children: /* @__PURE__ */ n.jsx(
    An,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: _,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...g
    }
  ) }) : /* @__PURE__ */ n.jsx(
    An,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: _,
      selectedIndex: l,
      onTabChange: c,
      ...g
    }
  );
}, Oa = (e) => {
  const t = Hn.find((r) => r.value === e);
  return t ? t.icon : null;
}, uc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Oa(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, hc = (e) => vr(e, [
  {
    id: "all-products",
    label: "All Products",
    columns: [
      { key: "name", label: "Product Name" },
      {
        key: "price",
        label: "Price",
        render: (r) => r.discountedPrice ? `$${r.price.toFixed(2)} → $${r.discountedPrice.toFixed(2)}` : `$${r.price.toFixed(2)}`
      },
      { key: "inStock", label: "Availability" },
      { key: "category", label: "Category" },
      {
        key: "rating",
        label: "Rating",
        render: (r) => `${r.rating}/5 (${r.reviews} reviews)`
      }
    ],
    ariaLabel: "All Products Grid",
    ariaDescription: "Complete product catalog with pricing and availability"
  },
  {
    id: "on-sale",
    label: "On Sale",
    columns: [
      { key: "name", label: "Product Name" },
      {
        key: "price",
        label: "Original Price",
        render: (r) => `$${r.price.toFixed(2)}`
      },
      {
        key: "discountedPrice",
        label: "Sale Price",
        render: (r) => `$${r.discountedPrice?.toFixed(2) || "N/A"}`
      },
      {
        key: "discount",
        label: "Discount",
        render: (r) => r.discountedPrice ? `${((r.price - r.discountedPrice) / r.price * 100).toFixed(0)}% OFF` : "N/A"
      }
    ],
    filter: (r) => r.filter((a) => a.discountedPrice !== void 0),
    ariaLabel: "Sale Products Grid",
    ariaDescription: "Products currently on sale with discounted pricing"
  },
  {
    id: "high-rated",
    label: "Top Rated",
    columns: [
      { key: "name", label: "Product Name" },
      { key: "rating", label: "Rating" },
      { key: "reviews", label: "Reviews" },
      { key: "category", label: "Category" }
    ],
    filter: (r) => r.filter((a) => a.rating >= 4),
    sortConfig: [{ key: "rating", direction: "desc" }],
    ariaLabel: "Top Rated Products Grid",
    ariaDescription: "Highest rated products with 4+ star ratings"
  }
]), fc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.dateRange) {
      const [a, o] = t.dateRange;
      if (r.date < a || r.date > o) return !1;
    }
    if (t.amountRange) {
      const [a, o] = t.amountRange;
      if (Math.abs(r.amount) < a || Math.abs(r.amount) > o) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(r.type) || t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.pending !== void 0 && r.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => Oa(e),
  getDataId: (e) => `financial-${e.id}`
}, mc = (e) => vr(e, [
  {
    id: "all-transactions",
    label: "All Transactions",
    columns: [
      {
        key: "date",
        label: "Date",
        render: (r) => r.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (r) => `${r.type === "credit" ? "+" : "-"}$${Math.abs(r.amount).toFixed(2)}`
      },
      { key: "category", label: "Category" },
      { key: "pending", label: "Status" }
    ],
    sortConfig: [{ key: "date", direction: "desc" }],
    ariaLabel: "All Transactions Grid",
    ariaDescription: "Complete transaction history with amounts and categories"
  },
  {
    id: "credits",
    label: "Credits",
    columns: [
      {
        key: "date",
        label: "Date",
        render: (r) => r.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (r) => `+$${r.amount.toFixed(2)}`
      },
      { key: "category", label: "Category" }
    ],
    filter: (r) => r.filter((a) => a.type === "credit"),
    ariaLabel: "Credit Transactions Grid",
    ariaDescription: "Incoming payments and credits only"
  },
  {
    id: "debits",
    label: "Debits",
    columns: [
      {
        key: "date",
        label: "Date",
        render: (r) => r.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (r) => `-$${Math.abs(r.amount).toFixed(2)}`
      },
      { key: "category", label: "Category" }
    ],
    filter: (r) => r.filter((a) => a.type === "debit"),
    ariaLabel: "Debit Transactions Grid",
    ariaDescription: "Outgoing payments and charges only"
  },
  {
    id: "pending",
    label: "Pending",
    columns: [
      {
        key: "date",
        label: "Date",
        render: (r) => r.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (r) => `${r.type === "credit" ? "+" : "-"}$${Math.abs(r.amount).toFixed(2)}`
      },
      { key: "type", label: "Type" }
    ],
    filter: (r) => r.filter((a) => a.pending),
    ariaLabel: "Pending Transactions Grid",
    ariaDescription: "Transactions awaiting processing"
  }
]), pc = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: uc,
    createTabs: hc
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: fc,
    createTabs: mc
  }
}, sa = (e, t) => {
  const r = pc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Ua = [
  {
    name: "Sarah Johnson",
    age: 34,
    ews_data: {
      respiratory_rate_bpm: 16,
      sp02: 98,
      temperature: 36.8,
      systolic_bp: 140,
      heart_rate: 82,
      avpu: "alert"
    },
    ews_score: 3,
    ward_name: "Cardiology",
    room_name: "Room A",
    bed_name: "A-1",
    bed_type: "bed",
    admin_note: "Hypertension monitoring",
    pathway: "Standard",
    speciality: "Cardiology",
    consultant: "Dr. Smith",
    local_authority: "NHS Trust",
    early_discharge_notification: "not_required",
    needs_based_assessment: !1,
    medically_optimised: !0,
    criteria_to_reside: !0,
    date_medically_optimised: "2024-01-15",
    anticipated_discharge_date: "2024-01-18",
    dru_suitability: !1,
    optica_planned_discharge_date: "2024-01-18",
    optica_date_confirmed: "2024-01-16",
    dsum: null,
    medications_tta: "None required",
    transport_booking: !1,
    transport_status: "Pending",
    transport_date: "",
    transport_mobility: "Independent",
    fast_track: !1,
    initial_therapy_contact: "",
    equipment: "None",
    district_nurse_referral: !1
  },
  {
    name: "Michael Chen",
    age: 67,
    ews_data: {
      respiratory_rate_bpm: 20,
      sp02: 94,
      temperature: 37.2,
      systolic_bp: 160,
      heart_rate: 95,
      avpu: "alert"
    },
    ews_score: 7,
    ward_name: "Surgery",
    room_name: "Room B",
    bed_name: "B-3",
    bed_type: "bed",
    admin_note: "Post-operative monitoring",
    pathway: "Surgical",
    speciality: "General Surgery",
    consultant: "Dr. Johnson",
    local_authority: "NHS Trust",
    early_discharge_notification: "due",
    needs_based_assessment: !0,
    medically_optimised: !1,
    criteria_to_reside: !0,
    date_medically_optimised: "2024-01-17",
    anticipated_discharge_date: "2024-01-20",
    dru_suitability: !0,
    optica_planned_discharge_date: "2024-01-20",
    optica_date_confirmed: "2024-01-16",
    dsum: "Complex discharge",
    medications_tta: "Pain management",
    transport_booking: !0,
    transport_status: "In Progress",
    transport_date: "2024-01-20",
    transport_mobility: "Wheelchair",
    fast_track: !1,
    initial_therapy_contact: "2024-01-17",
    equipment: "Walking frame",
    district_nurse_referral: !0
  },
  {
    name: "Emma Thompson",
    age: 28,
    ews_data: {
      respiratory_rate_bpm: 24,
      sp02: 90,
      temperature: 38.5,
      systolic_bp: 110,
      heart_rate: 105,
      avpu: "alert"
    },
    ews_score: 5,
    ward_name: "Respiratory",
    room_name: "Room C",
    bed_name: "C-2",
    bed_type: "bed",
    admin_note: "Pneumonia treatment",
    pathway: "Respiratory",
    speciality: "Respiratory Medicine",
    consultant: "Dr. Williams",
    local_authority: "NHS Trust",
    early_discharge_notification: "overdue",
    needs_based_assessment: !0,
    medically_optimised: !1,
    criteria_to_reside: !1,
    date_medically_optimised: "",
    anticipated_discharge_date: "2024-01-22",
    dru_suitability: !1,
    optica_planned_discharge_date: "2024-01-22",
    optica_date_confirmed: "",
    dsum: null,
    medications_tta: "Antibiotics",
    transport_booking: !1,
    transport_status: "Pending",
    transport_date: "",
    transport_mobility: "Independent",
    fast_track: !0,
    initial_therapy_contact: "",
    equipment: "Oxygen",
    district_nurse_referral: !1
  }
], gc = [
  {
    id: "appt-001",
    appointment_time: "2024-01-18T09:00:00Z",
    patient_name: "Sarah Johnson",
    appointment_type: "Cardiology Consultation",
    consultant: "Dr. Smith",
    location: "Clinic Room 3",
    duration: 30,
    status: "pending"
  },
  {
    id: "appt-002",
    appointment_time: "2024-01-18T10:30:00Z",
    patient_name: "Michael Davis",
    appointment_type: "Post-op Follow-up",
    consultant: "Dr. Johnson",
    location: "Surgery Ward",
    duration: 15,
    status: "active"
  },
  {
    id: "appt-003",
    appointment_time: "2024-01-18T14:00:00Z",
    patient_name: "Emma Thompson",
    appointment_type: "Respiratory Assessment",
    consultant: "Dr. Wilson",
    location: "Emergency Department",
    duration: 45,
    status: "pending"
  }
], bc = [
  {
    id: "med-001",
    medication: "Amlodipine",
    dose: "5mg",
    frequency: "Once daily",
    route: "Oral",
    next_due: "2024-01-18T08:00:00Z",
    prescriber: "Dr. Smith",
    patient_name: "Sarah Johnson",
    allergies: null,
    priority: "medium"
  },
  {
    id: "med-002",
    medication: "Morphine",
    dose: "10mg",
    frequency: "Every 4 hours",
    route: "IV",
    next_due: "2024-01-18T10:00:00Z",
    prescriber: "Dr. Johnson",
    patient_name: "Michael Davis",
    allergies: "Codeine allergy",
    priority: "high"
  },
  {
    id: "med-003",
    medication: "Salbutamol",
    dose: "2 puffs",
    frequency: "As needed",
    route: "Inhaled",
    next_due: "2024-01-18T12:00:00Z",
    prescriber: "Dr. Wilson",
    patient_name: "Emma Thompson",
    allergies: null,
    priority: "high"
  }
], xc = [
  {
    id: "vitals-001",
    patient_name: "Sarah Johnson",
    recorded_time: "2024-01-18T07:30:00Z",
    temperature: 36.8,
    blood_pressure: "140/90",
    heart_rate: 82,
    respiratory_rate: 16,
    oxygen_saturation: 98,
    ews_score: 3,
    priority: "medium"
  },
  {
    id: "vitals-002",
    patient_name: "Michael Davis",
    recorded_time: "2024-01-18T08:15:00Z",
    temperature: 37.2,
    blood_pressure: "130/85",
    heart_rate: 98,
    respiratory_rate: 20,
    oxygen_saturation: 95,
    ews_score: 7,
    priority: "high"
  },
  {
    id: "vitals-003",
    patient_name: "Emma Thompson",
    recorded_time: "2024-01-18T09:00:00Z",
    temperature: 38.5,
    blood_pressure: "110/70",
    heart_rate: 105,
    respiratory_rate: 24,
    oxygen_saturation: 90,
    ews_score: 9,
    priority: "high"
  }
], oa = [
  {
    id: "PROD001",
    name: "Wireless Headphones",
    price: 199.99,
    discountedPrice: 149.99,
    inStock: !0,
    category: "Electronics",
    rating: 4.5,
    reviews: 1247,
    tags: ["wireless", "bluetooth", "premium"]
  },
  {
    id: "PROD002",
    name: "Running Shoes",
    price: 129.99,
    inStock: !0,
    category: "Sports",
    rating: 4.8,
    reviews: 892,
    tags: ["running", "athletic", "comfortable"]
  },
  {
    id: "PROD003",
    name: "Coffee Maker",
    price: 89.99,
    discountedPrice: 59.99,
    inStock: !1,
    category: "Kitchen",
    rating: 4.2,
    reviews: 456,
    tags: ["kitchen", "coffee", "appliance"]
  },
  {
    id: "PROD004",
    name: "Smartphone Case",
    price: 24.99,
    inStock: !0,
    category: "Accessories",
    rating: 4,
    reviews: 234,
    tags: ["protection", "mobile", "durable"]
  }
], ia = [
  {
    id: "TXN001",
    date: /* @__PURE__ */ new Date("2024-01-15"),
    amount: 2500,
    type: "credit",
    category: "Salary",
    description: "Monthly salary payment",
    accountId: "ACC001",
    pending: !1,
    recurring: !0
  },
  {
    id: "TXN002",
    date: /* @__PURE__ */ new Date("2024-01-14"),
    amount: 89.5,
    type: "debit",
    category: "Groceries",
    description: "Supermarket shopping",
    accountId: "ACC001",
    pending: !1,
    recurring: !1
  },
  {
    id: "TXN003",
    date: /* @__PURE__ */ new Date("2024-01-16"),
    amount: 1200,
    type: "debit",
    category: "Rent",
    description: "Monthly rent payment",
    accountId: "ACC001",
    pending: !0,
    recurring: !0
  },
  {
    id: "TXN004",
    date: /* @__PURE__ */ new Date("2024-01-13"),
    amount: 150,
    type: "credit",
    category: "Refund",
    description: "Product return refund",
    accountId: "ACC001",
    pending: !1,
    recurring: !1
  }
], la = [
  {
    id: "LEAD001",
    companyName: "Tech Solutions Inc",
    contactPerson: "John Smith",
    email: "john@techsolutions.com",
    status: "qualified",
    value: 5e4,
    lastContact: /* @__PURE__ */ new Date("2024-01-15"),
    source: "Website",
    isHotLead: !0
  },
  {
    id: "LEAD002",
    companyName: "Global Industries",
    contactPerson: "Maria Garcia",
    email: "maria@globalind.com",
    status: "contacted",
    value: 25e3,
    lastContact: /* @__PURE__ */ new Date("2024-01-14"),
    source: "Referral",
    isHotLead: !1
  },
  {
    id: "LEAD003",
    companyName: "StartupXYZ",
    contactPerson: "Alex Johnson",
    email: "alex@startupxyz.com",
    status: "new",
    value: 15e3,
    lastContact: /* @__PURE__ */ new Date("2024-01-16"),
    source: "Cold Call",
    isHotLead: !0
  }
], yc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, _c = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ua,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      $a,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected patient:", r),
        onAction: (r, a) => console.log("Patient action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  },
  {
    id: "appointments",
    label: "Appointments",
    data: gc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Aa,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected appointment:", r),
        onAction: (r, a) => console.log("Appointment action:", r, a),
        status: e.status
      }
    )
  },
  {
    id: "medications",
    label: "Medications",
    data: bc,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ha,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected medication:", r),
        onAction: (r, a) => console.log("Medication action:", r, a),
        priority: e.priority
      }
    )
  },
  {
    id: "vitals",
    label: "Vital Signs",
    data: xc,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Pa,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], vc = () => {
  const [e, t] = pe("healthcare"), r = _e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: ql,
      tabPanels: _c(),
      data: Ua
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...sa("ecommerce", oa),
      data: oa
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...sa("financial", ia),
      data: ia
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: yc,
      tabPanels: vr(la, [
        {
          id: "all-leads",
          label: "All Leads",
          columns: [
            { key: "companyName", label: "Company" },
            { key: "contactPerson", label: "Contact" },
            { key: "status", label: "Status" },
            {
              key: "value",
              label: "Value",
              render: (o) => `$${o.value.toLocaleString()}`
            },
            { key: "isHotLead", label: "Priority" }
          ],
          ariaLabel: "All Sales Leads Grid",
          ariaDescription: "Complete sales pipeline with lead information"
        },
        {
          id: "hot-leads",
          label: "Hot Leads",
          columns: [
            { key: "companyName", label: "Company" },
            { key: "contactPerson", label: "Contact" },
            {
              key: "value",
              label: "Value",
              render: (o) => `$${o.value.toLocaleString()}`
            },
            {
              key: "lastContact",
              label: "Last Contact",
              render: (o) => o.lastContact.toLocaleDateString()
            }
          ],
          filter: (o) => o.filter((s) => s.isHotLead),
          sortConfig: [{ key: "value", direction: "desc" }],
          ariaLabel: "Hot Leads Grid",
          ariaDescription: "High-priority leads requiring immediate attention"
        },
        {
          id: "pipeline",
          label: "Active Pipeline",
          columns: [
            { key: "companyName", label: "Company" },
            { key: "status", label: "Status" },
            {
              key: "value",
              label: "Value",
              render: (o) => `$${o.value.toLocaleString()}`
            },
            { key: "source", label: "Source" }
          ],
          filter: (o) => o.filter(
            (s) => ["contacted", "qualified"].includes(s.status)
          ),
          ariaLabel: "Active Pipeline Grid",
          ariaDescription: "Leads currently in the sales pipeline"
        }
      ]),
      data: la
    }
  }), []), a = r[e];
  return /* @__PURE__ */ n.jsxs("div", { style: { padding: "2rem", maxWidth: "1200px", margin: "0 auto" }, children: [
    /* @__PURE__ */ n.jsxs("div", { style: { marginBottom: "2rem" }, children: [
      /* @__PURE__ */ n.jsx("h1", { style: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#1f2937"
      }, children: "AriaTabsDataGrid - Comprehensive Demo" }),
      /* @__PURE__ */ n.jsx("p", { style: {
        fontSize: "1.1rem",
        color: "#6b7280",
        marginBottom: "2rem",
        lineHeight: "1.6"
      }, children: "This demo showcases the component's versatility across different domains: healthcare, e-commerce, financial services, and custom business applications. Each configuration demonstrates domain-specific data operations, custom renderers, and specialized filtering logic." }),
      /* @__PURE__ */ n.jsx("div", { style: {
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap"
      }, children: Object.keys(r).map((o) => /* @__PURE__ */ n.jsx(
        De,
        {
          variant: e === o ? "primary" : "secondary",
          onClick: () => t(o),
          style: {
            textTransform: "capitalize"
          },
          children: o
        },
        o
      )) }),
      /* @__PURE__ */ n.jsxs("div", { style: {
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        marginBottom: "2rem"
      }, children: [
        /* @__PURE__ */ n.jsx("h2", { style: {
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#1e293b"
        }, children: a.title }),
        /* @__PURE__ */ n.jsx("p", { style: {
          color: "#64748b",
          marginBottom: "1rem"
        }, children: a.description }),
        /* @__PURE__ */ n.jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          fontSize: "0.9rem"
        }, children: [
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "Data Records:" }),
            " ",
            a.data.length
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "Tab Panels:" }),
            " ",
            a.tabPanels.length
          ] }),
          /* @__PURE__ */ n.jsxs("div", { children: [
            /* @__PURE__ */ n.jsx("strong", { children: "Features:" }),
            " ",
            [
              "Row Selection",
              "Custom Filtering",
              "Domain-Specific Renderers",
              "Keyboard Navigation",
              "ARIA Compliance"
            ].join(", ")
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(
      An,
      {
        dataConfig: a.dataConfig,
        tabPanels: a.tabPanels,
        ariaLabel: `${a.title} Data Grid`,
        ariaDescription: `Interactive data grid for ${a.description.toLowerCase()}`
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { style: {
      marginTop: "3rem",
      padding: "1.5rem",
      backgroundColor: "#f1f5f9",
      borderRadius: "0.5rem",
      border: "1px solid #cbd5e1"
    }, children: [
      /* @__PURE__ */ n.jsx("h3", { style: {
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "1rem",
        color: "#334155"
      }, children: "Implementation Details" }),
      /* @__PURE__ */ n.jsxs("div", { style: { display: "grid", gap: "1rem", fontSize: "0.9rem" }, children: [
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "Current Mode:" }),
          " ",
          e,
          " configuration"
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "Data Operations:" }),
          " Custom comparator, filter function, and boolean renderer"
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "Architecture:" }),
          " Generic core with domain-specific plugins and factory helpers"
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "State Management:" }),
          " Global row selection with data-object persistence"
        ] }),
        /* @__PURE__ */ n.jsxs("div", { children: [
          /* @__PURE__ */ n.jsx("strong", { children: "Accessibility:" }),
          " Full ARIA support with dynamic labels and descriptions"
        ] })
      ] })
    ] })
  ] });
}, Wf = vc, Ga = (e) => /* @__PURE__ */ n.jsx(pa, { ...e }), Of = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: u,
  search: d,
  account: m,
  organisation: p,
  logo: _,
  className: B,
  ...g
}) => {
  const v = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: _,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(La, { ...s }),
    /* @__PURE__ */ n.jsx(va, { ...v }),
    /* @__PURE__ */ n.jsx(Ga, { className: B, ...g, children: /* @__PURE__ */ n.jsx(ba, { size: o, children: /* @__PURE__ */ n.jsx(Et, { children: /* @__PURE__ */ n.jsxs(ga, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ke, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(ka, { ...l })
  ] });
}, Uf = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: u,
  serviceHref: d,
  logo: m,
  className: p,
  ..._
}) => {
  const B = {
    service: {
      text: u,
      href: d
    },
    logo: m,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(La, { ...s }),
    /* @__PURE__ */ n.jsx(va, { ...B }),
    /* @__PURE__ */ n.jsxs(Ga, { className: p, ..._, children: [
      c && /* @__PURE__ */ n.jsx(Ln, { ...c }),
      /* @__PURE__ */ n.jsx(ba, { size: o, children: /* @__PURE__ */ n.jsx(Et, { children: /* @__PURE__ */ n.jsxs(ga, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ke, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(ka, { ...l })
  ] });
}, Va = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = X("nhsuk-back-link", a), c = X("nhsuk-back-link__link"), u = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
    t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e,
    /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" })
      }
    )
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx("button", { className: c, type: "button", onClick: s, ...i, children: u() }) : /* @__PURE__ */ n.jsx("a", { className: c, href: r, ...i, children: u() }) });
};
Va.displayName = "ForwardLink";
const it = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ca() {
  return typeof window > "u" ? it.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ya() {
  const [e, t] = fe.useState(ca());
  fe.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ca());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = fe.useCallback((s) => e >= it[s], [e]), a = fe.useCallback((s) => e < it[s], [e]), o = fe.useCallback((s, i) => e >= it[s] && e < it[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: it
  };
}
function Gf(e) {
  const { width: t, values: r } = Ya();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function kc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = fe.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = fe.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return fe.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(r, String(o)) : c.delete(r), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const wc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), Sc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function Cc(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: u = !0,
    backLabel: d = "Back",
    nextLabel: m = "Next",
    isLoading: p = !1,
    emptyState: _,
    a11y: B,
    className: g,
    getId: v = (ue) => ue.id,
    orientation: H = "vertical",
    autoEnableThirdColumn: R = !0,
    onDrillChange: E,
    navigationInstructions: w = "Use arrow keys to navigate, Enter to open.",
    initialFocus: P = "first",
    skipFocusOnSelect: b = !1,
    skipAnnouncements: A = !1,
    onFocusChange: F,
    syncUrl: k = !1,
    urlParamSelected: T = "nsv",
    urlParamDrill: x = "nsvDrill",
    urlSyncDebounceMs: j = 0,
    lazySecondary: O = !1,
    navFooter: oe,
    collapsibleNav: z = !1,
    navInitiallyCollapsed: Q = !1,
    onNavCollapseChange: ne,
    collapseToggleLabelShow: ie = "Show navigation",
    collapseToggleLabelHide: le = "Hide navigation",
    collapseToggleIconShow: S,
    collapseToggleIconHide: q,
    persistNavCollapsed: M,
    navCollapsedStorageKey: U = "nsvCollapsed",
    navCollapsedUrlParam: K = "nsvCollapsed",
    autoContentHeader: ce,
    contentHeaderLevel: h = 2,
    renderContentHeader: C,
    contentSubheader: L,
    secondarySubheader: I
  } = e, { up: W } = Ya(), [V, N] = fe.useState(!1);
  fe.useEffect(() => {
    N(!0);
  }, []);
  const de = V && W("medium"), ae = V && W("xlarge");
  let re;
  c ? re = c : de ? re = "two-column" : re = "list", !c && R && l && ae && (re = "three-column");
  const G = kc({
    enabled: k,
    paramSelected: T,
    paramDrill: x
  }), [f, y] = fe.useState(
    () => G.selectedId !== void 0 ? G.selectedId : a
  ), D = r !== void 0 ? r : f, $ = t.find((ue) => v(ue) === D), Y = fe.useRef(null), Z = fe.useRef(null), te = !!$ && (re === "list" || re === "cards"), se = fe.useMemo(() => ce === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ce === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ce === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ce.mobile !== void 0 ? ce.mobile : !0,
    tablet: ce.tablet || !1,
    desktop: ce.desktop || !1
  }, [ce]), J = V && W("medium") && !W("xlarge"), he = V && W("xlarge"), je = !!l, ve = re === "three-column", [we, mt] = fe.useState(!1);
  fe.useEffect(() => {
    ve && we && mt(!1);
  }, [ve, we]);
  const Ee = !!$ && (te && se.mobile || !te && J && se.tablet || !te && he && se.desktop) || je && !ve, Hs = `h${h}`, xn = $ ? fe.createElement(Hs, { style: { marginLeft: te ? 32 : 0, marginRight: te ? 32 : 0 } }, $.label) : null, kr = te ? "mobile" : J ? "tablet" : "desktop", Ps = je && !ve && !we, yn = te && se.mobile ? /* @__PURE__ */ n.jsx(
    Ln,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => pt(void 0, void 0)
    }
  ) : void 0, _n = Ps ? /* @__PURE__ */ n.jsx(
    Va,
    {
      element: "button",
      text: m,
      onClick: () => {
        mt(!0);
      }
    }
  ) : void 0, wr = !ve && we ? /* @__PURE__ */ n.jsx(
    Ln,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => mt(!1)
    }
  ) : void 0, zs = fe.useMemo(() => {
    if (!Ee || !$) return null;
    if (C) return C({
      item: $,
      detailActive: te,
      context: kr,
      backLink: yn,
      defaultHeading: xn
    });
    const ue = $ && L ? typeof L == "function" ? L($) : L : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
        wr || yn,
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: [
          xn,
          ue && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ue })
        ] })
      ] }),
      _n && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: _n })
    ] });
  }, [Ee, $, C, te, kr, yn, wr, xn, _n, L]);
  fe.useEffect(() => {
    if (!k) return;
    const ue = re === "three-column";
    let ke = !1;
    const me = () => {
      ke || (G.selectedId !== D && G.setSelectedId(D), G.drilledIn !== ue && G.setDrilledIn(ue));
    };
    if (j && j > 0) {
      const be = setTimeout(me, j);
      return () => {
        ke = !0, clearTimeout(be);
      };
    } else
      me();
  }, [k, G, D, re, j]), fe.useEffect(() => {
    if (!k) return;
    const ue = () => {
      const ke = new URLSearchParams(window.location.search), me = ke.get(T);
      ke.get(x), y(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", ue), () => window.removeEventListener("popstate", ue);
  }, [k, T, x, c, l]);
  const Sr = fe.useRef(0), pt = fe.useCallback((ue, ke) => {
    r === void 0 && y(ue), o?.(ue, ke);
  }, [r, o]);
  fe.useEffect(() => {
    if (!b && te && Z.current) {
      const ue = setTimeout(() => Z.current?.focus(), 30);
      return () => clearTimeout(ue);
    }
  }, [te, D, b]);
  const gt = fe.useRef(null), [Xe, Tt] = fe.useState(() => P === "first" ? 0 : -1);
  fe.useEffect(() => {
    if (!gt.current) return;
    const ue = Array.from(gt.current.querySelectorAll("button[data-nav-item]"));
    if (ue.forEach((ke, me) => ke.tabIndex = (Xe === -1 ? me === 0 && P === "first" : me === Xe) ? 0 : -1), Xe >= 0) {
      ue[Xe]?.focus();
      const me = t[Xe];
      F?.(me ? v(me) : void 0, me, Xe);
    }
  }, [Xe, t, P, F, v]);
  const Ws = (ue) => {
    const ke = H === "vertical" ? "ArrowDown" : "ArrowRight", me = H === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ue.key === ke)
      ue.preventDefault(), Tt((be) => Math.min(t.length - 1, be + 1));
    else if (ue.key === me)
      ue.preventDefault(), Tt((be) => Math.max(0, be - 1));
    else if (ue.key === "Home")
      ue.preventDefault(), Tt(0);
    else if (ue.key === "End")
      ue.preventDefault(), Tt(t.length - 1);
    else if (ue.key === "Enter" || ue.key === " ") {
      ue.preventDefault();
      const be = t[Xe];
      be && !be.disabled && pt(v(be), be);
    }
  }, Os = fe.useMemo(() => {
    if (M && (M === "url" || M === "both") && typeof window < "u") {
      const ke = new URLSearchParams(window.location.search).get(K);
      if (ke === "1") return !0;
      if (ke === "0") return !1;
    }
    if (M && (M === "localStorage" || M === "both") && typeof window < "u")
      try {
        const ue = window.localStorage.getItem(U);
        if (ue === "1") return !0;
        if (ue === "0") return !1;
      } catch {
      }
    return Q;
  }, [M, Q, U, K]), [Re, Us] = fe.useState(Os);
  fe.useEffect(() => {
    ne?.(Re);
  }, [Re, ne]);
  const Gs = fe.useCallback(() => {
    de && z && Us((ue) => !ue);
  }, [de, z]);
  fe.useEffect(() => {
    if (M && !(typeof window > "u")) {
      if (M === "localStorage" || M === "both")
        try {
          window.localStorage.setItem(U, Re ? "1" : "0");
        } catch {
        }
      if (M === "url" || M === "both") {
        const ue = new URLSearchParams(window.location.search);
        ue.set(K, Re ? "1" : "0");
        const ke = `${window.location.pathname}?${ue.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ke);
      }
    }
  }, [Re, M, U, K]);
  const Vs = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    te ? "nhs-navigation-split-view--detail-active" : "",
    re === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    z && de && Re ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), vn = fe.useRef(null);
  fe.useEffect(() => {
    if (!A && vn.current) {
      const ue = $ ? `Selected ${$.label}` : "Selection cleared";
      vn.current.textContent = ue;
    }
  }, [$, A]), fe.useEffect(() => {
    !te && D == null && gt.current && gt.current.querySelectorAll("button[data-nav-item]")[Sr.current]?.focus();
  }, [te, D]);
  const Qe = re === "three-column", [kn, Ys] = fe.useState(!1);
  fe.useEffect(() => {
    Qe && !kn && Ys(!0);
  }, [Qe, kn]);
  const Cr = fe.useRef(Qe);
  fe.useEffect(() => {
    Cr.current !== Qe && (E?.(Qe), Cr.current = Qe);
  }, [Qe, E]);
  const qs = () => {
    if (re === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": D ? String(D) : void 0, children: [
        t.map((me) => {
          const be = v(me), Dt = be === D;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": Dt, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(be),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": Dt || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && pt(be, me),
              children: [
                me.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: me.icon }),
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: me.label }),
                me.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: me.description }),
                s?.(me),
                me.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: me.badge })
              ]
            }
          ) }, be);
        }),
        t.length === 0 && !p && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: _ || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const ue = "nsv-nav-instructions", ke = fe.useMemo(() => {
      const me = ({ item: be, idx: Dt, selected: wn }) => {
        const jr = v(be);
        return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", role: "option", "aria-selected": wn, children: /* @__PURE__ */ n.jsxs(
          "button",
          {
            id: String(jr),
            "data-nav-item": !0,
            type: "button",
            className: "nhs-navigation-split-view__item-button",
            "data-selected": wn || void 0,
            "data-disabled": be.disabled || void 0,
            disabled: be.disabled,
            "aria-current": wn ? "true" : void 0,
            onClick: () => {
              be.disabled || (Sr.current = Dt, pt(jr, be));
            },
            children: [
              be.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: be.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: be.label }),
                be.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: be.description }),
                s?.(be)
              ] }),
              be.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: be.badge })
            ]
          }
        ) });
      };
      return fe.memo(me);
    }, [v, pt, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: gt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ws,
          role: "listbox",
          "aria-describedby": ue,
          "aria-activedescendant": D ? String(D) : void 0,
          children: [
            t.map((me, be) => /* @__PURE__ */ n.jsx(ke, { item: me, idx: be, selected: v(me) === D }, v(me))),
            t.length === 0 && !p && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: _ || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: ue, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: w })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: Y,
      className: Vs,
      "aria-label": B?.rootLabel,
      "data-layout": re,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": te || void 0, style: { transform: te ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": B?.navigationLabel || "Items",
              "data-collapsed": Re || void 0,
              children: [
                z && de && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Gs,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": Re ? ie : le,
                    title: Re ? ie : le,
                    children: Re ? S || /* @__PURE__ */ n.jsx(Sc, {}) : q || /* @__PURE__ */ n.jsx(wc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: qs() }),
                oe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: oe })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: Z,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": B?.contentLabel || "Content",
              "data-has-selection": !!$ || void 0,
              tabIndex: -1,
              children: [
                Ee && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: zs }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: we && !ve ? l?.($) : i($) })
              ]
            }
          ),
          re === "three-column" && (!O || kn) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": B?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                $ && I && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof I == "function" ? I($) : I }),
                /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.($) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: vn, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: Qe ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
Cc.displayName = "NavigationSplitView";
const jc = "150ms", Nc = "300ms", Tc = "500ms", Dc = "cubic-bezier(0.4, 0, 1, 1)", Bc = "cubic-bezier(0, 0, 0.2, 1)", Fc = "cubic-bezier(0.4, 0, 0.2, 1)", Ic = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Rc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Lc = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ec = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Mc = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", $c = "1px", Ac = "2px", Hc = "4px", Pc = "4px", zc = "4px", Wc = "2px", Oc = "1px", Uc = "0px", Gc = "4px", Vc = "8px", Yc = "12px", qa = "#d8dde0", Ka = "#4c6272", Za = "#d8dde0", Ja = "#aeb7bd", Xa = "#d5281b", Qa = "#005eb8", es = "#ffffff", ts = "#212b32", ns = "#007f3b", rs = "#330072", as = "#7c2855", ss = "#d5281b", os = "#ffeb3b", is = "#fff9c4", ls = "#ffb81c", cs = "#ed8b00", ds = "#00a499", us = "#ae2573", hs = "#4c6272", fs = "#768692", ms = "#aeb7bd", ps = "#d8dde0", gs = "#f0f4f5", qc = "#212b32", Kc = "#4c6272", Zc = "#ffffff", Jc = "#212b32", Xc = "#005eb8", Qc = "#7c2855", ed = "#003087", td = "#330072", nd = "#ffeb3b", rd = "#212b32", ad = "#d8dde0", sd = "#ffffff33", od = "#d5281b", id = "#4c6272", ld = "#ffffff", cd = "#007f3b", dd = "#ffffff", ud = "#006530", hd = "#004021", fd = "#004021", md = "#00000000", pd = "#ffffff", gd = "#005eb8", bd = "#005eb8", xd = "#d9e5f2", yd = "#c7daf0", _d = "#005eb8", vd = "#ffffff", kd = "#212b32", wd = "#d9dde0", Sd = "#b3bcc2", Cd = "#b3bcc2", jd = "#d5281b", Nd = "#aa2016", Td = "#6a140e", Dd = "#6a140e", Bd = "#005eb8", Fd = "#004b93", Id = "#002f5c", Rd = "#002f5c", Ld = "8px", Ed = "16px", Md = "12px", $d = "16px", Ad = "4px", Hd = "40px", Pd = "4px", zd = "40px", Wd = "12px", Od = "16px", Ud = "32px", Gd = "16px", Vd = "20px", Yd = "28px", qd = "9px", Kd = "2px", Zd = "16px", Jd = "24px", Xd = "8px", Qd = "24px", eu = "16px", tu = "4px", nu = "4px", ru = "4px", au = "8px", su = "4px", ou = "16px", iu = "#007f3b", lu = "#006530", cu = "#004021", du = "#d8dde0", uu = "#ffffff", hu = "#768692", fu = "#00000000", mu = "#ffeb3b", pu = "#00000000", gu = "#ffffff", bu = "#d9e5f2", xu = "#c7daf0", yu = "#005eb8", _u = "#005eb8", bs = "8px", xs = "16px", ys = "12px", _s = "16px", vu = "2px", ku = "4px", wu = "4px", Su = "600", Cu = "#ffffff", ju = "#d8dde0", Nu = "#aeb7bd", Tu = "#f0f4f5", Du = "#212b32", Bu = "#212b32", Fu = "#005eb8", vs = "16px", ks = "32px", ws = "16px", Iu = "1px", Ru = "4px", Lu = "none", Eu = "0 2px 4px rgba(0, 0, 0, 0.1)", Mu = "#ffffff", $u = "#ffffff", Au = "#d8dde0", Hu = "#ffffff", Pu = "#4c6272", zu = "#ffeb3b", Wu = "#d5281b", Ou = "#aeb7bd", Uu = "#212b32", Gu = "#4c6272", Vu = "#768692", Yu = "#212b32", qu = "#ffffff", Ku = "600", Zu = "#d5281b", Ju = "600", Xu = "#4c6272", Ss = "4px", Cs = "40px", js = "40px", Ns = "12px", Qu = "2px", eh = "4px", th = "0px", nh = "16px", rh = "18px", ah = "24px", sh = "32px", oh = "34px", ih = "32px", lh = "40px", ch = "48px", dh = "5.4ex", uh = "7.2ex", hh = "9ex", fh = "10.8ex", mh = "20ex", ph = "38ex", gh = "56ex", bh = "44px", xh = "40px", yh = "1020px", _h = "100%", vh = "50%", kh = "33.333%", wh = "25%", Sh = "20%", Ch = "320px", jh = "641px", Nh = "1025px", Th = "1280px", Dh = "960px", Bh = "32px", Fh = "16px", Ih = "#d5281b", Rh = "#d5281b", Lh = "#ffffff", Eh = "#007f3b", Mh = "#007f3b", $h = "#ffffff", Ah = "#ffeb3b", Hh = "#ffeb3b", Ph = "#212b32", zh = "#005eb8", Wh = "#005eb8", Oh = "#ffffff", Uh = "#d8dde0", Gh = "#aeb7bd", Vh = "#768692", Yh = "0 4px 0 #004021", qh = "0 4px 0 #005eb8", Kh = "0 4px 0 #6a140e", Zh = "0 4px 0 #ffeb3b", Jh = "none", Xh = "0 2px 4px rgba(0, 0, 0, 0.1)", Qh = "4px", ef = "0px", tf = "solid", nf = "0 0 0 3px #ffeb3b", rf = "0 0 0 3px #ffeb3b", af = "none", sf = "0 1px 3px rgba(0, 0, 0, 0.12)", of = "0 2px 6px rgba(0, 0, 0, 0.16)", lf = "0 4px 12px rgba(0, 0, 0, 0.20)", Ts = "0", Ds = "4px", Bs = "8px", Fs = "16px", Is = "24px", Rs = "32px", Ls = "40px", Es = "48px", Ms = "56px", $s = "64px", Pn = "0", zn = "0", Wn = "4px", On = "4px", Un = "8px", Gn = "8px", Vn = "8px", Yn = "16px", qn = "16px", Kn = "24px", Zn = "24px", Jn = "32px", Xn = "32px", Qn = "40px", er = "40px", tr = "48px", nr = "48px", rr = "56px", ar = "56px", sr = "64px", Ot = "Frutiger W01", Ut = "Arial, Helvetica, sans-serif", Gt = "sans-serif", Vt = "400", Yt = "600", qt = "400", Kt = "12px", Zt = "14px", Jt = "12pt", Xt = "14px", Qt = "16px", en = "12pt", tn = "16px", nn = "19px", rn = "13pt", an = "19px", sn = "22px", on = "15pt", ln = "22px", cn = "26px", dn = "17pt", un = "27px", hn = "36px", fn = "20pt", mn = "33px", pn = "48px", gn = "24pt", or = "16px", ir = "24px", Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, He = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ue = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ge = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: jc,
  AnimationDurationNormal: Nc,
  AnimationDurationSlow: Tc,
  AnimationEasingBounce: Ic,
  AnimationEasingEaseIn: Dc,
  AnimationEasingEaseInOut: Fc,
  AnimationEasingEaseOut: Bc,
  BorderColorCard: Za,
  BorderColorCardHover: Ja,
  BorderColorDefault: qa,
  BorderColorError: Xa,
  BorderColorForm: Ka,
  BorderRadiusLarge: Yc,
  BorderRadiusMedium: Vc,
  BorderRadiusNone: Uc,
  BorderRadiusSmall: Gc,
  BorderWidthCardBottom: Pc,
  BorderWidthDefault: $c,
  BorderWidthFormElement: Ac,
  BorderWidthFormElementError: Hc,
  BorderWidthPanel: zc,
  BorderWidthTableCell: Oc,
  BorderWidthTableHeader: Wc,
  BreakpointDesktop: Nh,
  BreakpointLargeDesktop: Th,
  BreakpointMobile: Ch,
  BreakpointTablet: jh,
  ButtonBorderRadius: ku,
  ButtonBorderWidth: vu,
  ButtonPrimaryBackgroundActive: cu,
  ButtonPrimaryBackgroundDefault: iu,
  ButtonPrimaryBackgroundDisabled: du,
  ButtonPrimaryBackgroundHover: lu,
  ButtonPrimaryBorderDefault: fu,
  ButtonPrimaryBorderFocus: mu,
  ButtonPrimaryTextDefault: uu,
  ButtonPrimaryTextDisabled: hu,
  ButtonSecondaryBackgroundActive: xu,
  ButtonSecondaryBackgroundDefault: pu,
  ButtonSecondaryBackgroundHover: bu,
  ButtonSecondaryBackgroundSolid: gu,
  ButtonSecondaryBorderDefault: _u,
  ButtonSecondaryTextDefault: yu,
  ButtonShadowSize: wu,
  ButtonSpacingPaddingHorizontalDesktop: _s,
  ButtonSpacingPaddingHorizontalMobile: xs,
  ButtonSpacingPaddingVerticalDesktop: ys,
  ButtonSpacingPaddingVerticalMobile: bs,
  ButtonTypographyWeight: Su,
  CardBackgroundDefault: Cu,
  CardBorderBottom: Tu,
  CardBorderDefault: ju,
  CardBorderHover: Nu,
  CardBorderWidthBottom: Ru,
  CardBorderWidthDefault: Iu,
  CardShadowDefault: Lu,
  CardShadowHover: Eu,
  CardSpacingHeadingMargin: ws,
  CardSpacingPaddingDesktop: ks,
  CardSpacingPaddingMobile: vs,
  CardTextDescription: Bu,
  CardTextHeading: Du,
  CardTextLink: Fu,
  ColorBorderDefault: ad,
  ColorBorderSecondary: sd,
  ColorButtonLoginActive: Id,
  ColorButtonLoginBackground: Bd,
  ColorButtonLoginHover: Fd,
  ColorButtonLoginShadow: Rd,
  ColorButtonPrimaryActive: hd,
  ColorButtonPrimaryBackground: cd,
  ColorButtonPrimaryHover: ud,
  ColorButtonPrimaryShadow: fd,
  ColorButtonPrimaryText: dd,
  ColorButtonReverseActive: Sd,
  ColorButtonReverseBackground: vd,
  ColorButtonReverseHover: wd,
  ColorButtonReverseShadow: Cd,
  ColorButtonReverseText: kd,
  ColorButtonSecondaryActive: yd,
  ColorButtonSecondaryBackground: md,
  ColorButtonSecondaryBackgroundSolid: pd,
  ColorButtonSecondaryBorder: gd,
  ColorButtonSecondaryHover: xd,
  ColorButtonSecondaryShadow: _d,
  ColorButtonSecondaryText: bd,
  ColorButtonWarningActive: Td,
  ColorButtonWarningBackground: jd,
  ColorButtonWarningHover: Nd,
  ColorButtonWarningShadow: Dd,
  ColorError: od,
  ColorFocusBackground: nd,
  ColorFocusText: rd,
  ColorFormBackground: ld,
  ColorFormBorder: id,
  ColorGrey1: hs,
  ColorGrey2: fs,
  ColorGrey3: ms,
  ColorGrey4: ps,
  ColorGrey5: gs,
  ColorLinkActive: ed,
  ColorLinkDefault: Xc,
  ColorLinkHover: Qc,
  ColorLinkVisited: td,
  ColorPrimaryBlack: ts,
  ColorPrimaryBlue: Qa,
  ColorPrimaryDarkPink: as,
  ColorPrimaryGreen: ns,
  ColorPrimaryPurple: rs,
  ColorPrimaryRed: ss,
  ColorPrimaryWhite: es,
  ColorPrimaryYellow: os,
  ColorSecondaryAquaGreen: ds,
  ColorSecondaryOrange: cs,
  ColorSecondaryPaleYellow: is,
  ColorSecondaryPink: us,
  ColorSecondaryWarmYellow: ls,
  ColorTextPrimary: qc,
  ColorTextPrint: Jc,
  ColorTextReverse: Zc,
  ColorTextSecondary: Kc,
  ComponentBlur: nu,
  ComponentBreadcrumbChevronMarginLeft: qd,
  ComponentBreadcrumbChevronMarginRight: Kd,
  ComponentBreadcrumbPaddingTopDesktop: Jd,
  ComponentBreadcrumbPaddingTopMobile: Zd,
  ComponentButtonPaddingDesktopHorizontal: $d,
  ComponentButtonPaddingDesktopVertical: Md,
  ComponentButtonPaddingMobileHorizontal: Ed,
  ComponentButtonPaddingMobileVertical: Ld,
  ComponentButtonShadowSize: Ad,
  ComponentCardHeadingMargin: Gd,
  ComponentCardPaddingDesktop: Ud,
  ComponentCardPaddingMobile: Od,
  ComponentDetails: au,
  ComponentExpander: su,
  ComponentFormCheckboxLabelPadding: Wd,
  ComponentFormCheckboxSize: zd,
  ComponentFormInputMinHeight: Hd,
  ComponentFormInputPadding: Pd,
  ComponentLink: ru,
  ComponentPagination: ou,
  ComponentPanelPaddingDesktop: Yd,
  ComponentPanelPaddingMobile: Vd,
  ComponentSpread: tu,
  ComponentSummaryListCellPaddingHorizontal: Qd,
  ComponentSummaryListCellPaddingVertical: Xd,
  ComponentSummaryListRowMargin: eu,
  ElevationHigh: lf,
  ElevationLow: sf,
  ElevationMedium: of,
  ElevationNone: af,
  FocusOutlineOffset: ef,
  FocusOutlineStyle: tf,
  FocusOutlineWidth: Qh,
  FocusShadowButton: rf,
  FocusShadowInput: nf,
  FontFamilyBase: Ot,
  FontFamilyFallback: Ut,
  FontFamilyPrint: Gt,
  FontLineHeightBase: ir,
  FontSize14Mobile: Kt,
  FontSize14Print: Jt,
  FontSize14Tablet: Zt,
  FontSize16Mobile: Xt,
  FontSize16Print: en,
  FontSize16Tablet: Qt,
  FontSize19Mobile: tn,
  FontSize19Print: rn,
  FontSize19Tablet: nn,
  FontSize22Mobile: an,
  FontSize22Print: on,
  FontSize22Tablet: sn,
  FontSize26Mobile: ln,
  FontSize26Print: dn,
  FontSize26Tablet: cn,
  FontSize36Mobile: un,
  FontSize36Print: fn,
  FontSize36Tablet: hn,
  FontSize48Mobile: mn,
  FontSize48Print: gn,
  FontSize48Tablet: pn,
  FontSizeBase: or,
  FontWeightBold: Yt,
  FontWeightLight: qt,
  FontWeightNormal: Vt,
  FormBorderRadius: th,
  FormBorderWidthDefault: Qu,
  FormBorderWidthError: eh,
  FormErrorTextDefault: Zu,
  FormErrorTypographyWeight: Ju,
  FormHintTextDefault: Xu,
  FormInputBackgroundDefault: Mu,
  FormInputBackgroundDisabled: Au,
  FormInputBackgroundError: Hu,
  FormInputBackgroundFocus: $u,
  FormInputBorderDefault: Pu,
  FormInputBorderDisabled: Ou,
  FormInputBorderError: Wu,
  FormInputBorderFocus: zu,
  FormInputTextDefault: Uu,
  FormInputTextDisabled: Vu,
  FormInputTextPlaceholder: Gu,
  FormLabelTextDefault: Yu,
  FormLabelTextRequired: qu,
  FormLabelTypographyWeight: Ku,
  FormSpacingCheckboxLabelPadding: Ns,
  FormSpacingCheckboxSize: js,
  FormSpacingInputMinHeight: Cs,
  FormSpacingInputPadding: Ss,
  GridGutter: Bh,
  GridGutterHalf: Fh,
  GridPageWidth: Dh,
  HeadingsNhsukHeadingL: $e,
  HeadingsNhsukHeadingM: Ae,
  HeadingsNhsukHeadingS: He,
  HeadingsNhsukHeadingXl: Me,
  HeadingsNhsukHeadingXs: Pe,
  LayoutColumnActions: Sh,
  LayoutColumnFull: _h,
  LayoutColumnHalf: vh,
  LayoutColumnQuarter: wh,
  LayoutColumnThird: kh,
  LayoutContainerMaxWidth: yh,
  ParagraphsBody: ze,
  ParagraphsBodyLarge: We,
  ParagraphsBodySmall: Oe,
  ParagraphsLedeText: Ue,
  ParagraphsLedeTextSmall: Ge,
  ShadowButtonDefault: Yh,
  ShadowButtonFocus: Zh,
  ShadowButtonSecondary: qh,
  ShadowButtonWarning: Kh,
  ShadowCardDefault: Jh,
  ShadowCardHover: Xh,
  SizeButtonMinHeightDesktop: xh,
  SizeButtonMinHeightMobile: bh,
  SizeFormControlLarge: ch,
  SizeFormControlMedium: lh,
  SizeFormControlSmall: ih,
  SizeFormInputWidth2xl: ph,
  SizeFormInputWidth3xl: gh,
  SizeFormInputWidthLg: fh,
  SizeFormInputWidthMd: hh,
  SizeFormInputWidthSm: uh,
  SizeFormInputWidthXl: mh,
  SizeFormInputWidthXs: dh,
  SizeIconExtraLarge: sh,
  SizeIconLarge: ah,
  SizeIconMedium: rh,
  SizeIconNhsDefault: oh,
  SizeIconSmall: nh,
  Spacing0: Ts,
  Spacing1: Ds,
  Spacing2: Bs,
  Spacing3: Fs,
  Spacing4: Is,
  Spacing5: Rs,
  Spacing6: Ls,
  Spacing7: Es,
  Spacing8: Ms,
  Spacing9: $s,
  SpacingResponsive0Mobile: Pn,
  SpacingResponsive0Tablet: zn,
  SpacingResponsive1Mobile: Wn,
  SpacingResponsive1Tablet: On,
  SpacingResponsive2Mobile: Un,
  SpacingResponsive2Tablet: Gn,
  SpacingResponsive3Mobile: Vn,
  SpacingResponsive3Tablet: Yn,
  SpacingResponsive4Mobile: qn,
  SpacingResponsive4Tablet: Kn,
  SpacingResponsive5Mobile: Zn,
  SpacingResponsive5Tablet: Jn,
  SpacingResponsive6Mobile: Xn,
  SpacingResponsive6Tablet: Qn,
  SpacingResponsive7Mobile: er,
  SpacingResponsive7Tablet: tr,
  SpacingResponsive8Mobile: nr,
  SpacingResponsive8Tablet: rr,
  SpacingResponsive9Mobile: ar,
  SpacingResponsive9Tablet: sr,
  StateDisabledBackground: Uh,
  StateDisabledBorder: Gh,
  StateDisabledText: Vh,
  StateErrorBackground: Ih,
  StateErrorBorder: Rh,
  StateErrorText: Lh,
  StateInfoBackground: zh,
  StateInfoBorder: Wh,
  StateInfoText: Oh,
  StateSuccessBackground: Eh,
  StateSuccessBorder: Mh,
  StateSuccessText: $h,
  StateWarningBackground: Ah,
  StateWarningBorder: Hh,
  StateWarningText: Ph,
  TransitionButtonDefault: Rc,
  TransitionButtonShadow: Lc,
  TransitionCardHover: Mc,
  TransitionInputFocus: Ec
}, Symbol.toStringTag, { value: "Module" })), Vf = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Yf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Me.fontFamily,
      fontWeight: Me.fontWeight,
      fontSize: Me.fontSize.mobile,
      lineHeight: Me.lineHeight,
      marginTop: Me.marginTop,
      marginBottom: Me.marginBottom.mobile,
      ...r
    },
    children: e
  }
), qf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: $e.fontFamily,
      fontWeight: $e.fontWeight,
      fontSize: $e.fontSize.mobile,
      lineHeight: $e.lineHeight,
      marginTop: $e.marginTop,
      marginBottom: $e.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Kf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Ae.fontFamily,
      fontWeight: Ae.fontWeight,
      fontSize: Ae.fontSize.mobile,
      lineHeight: Ae.lineHeight,
      marginTop: Ae.marginTop,
      marginBottom: Ae.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Zf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: He.fontFamily,
      fontWeight: He.fontWeight,
      fontSize: He.fontSize.mobile,
      lineHeight: He.lineHeight,
      marginTop: He.marginTop,
      marginBottom: He.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Jf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Pe.fontFamily,
      fontWeight: Pe.fontWeight,
      fontSize: Pe.fontSize.mobile,
      lineHeight: Pe.lineHeight,
      marginTop: Pe.marginTop,
      marginBottom: Pe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Xf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ze.fontFamily,
      fontWeight: ze.fontWeight,
      fontSize: ze.fontSize.mobile,
      lineHeight: ze.lineHeight,
      marginTop: ze.marginTop,
      marginBottom: ze.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Qf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: We.fontFamily,
      fontWeight: We.fontWeight,
      fontSize: We.fontSize.mobile,
      lineHeight: We.lineHeight,
      marginTop: We.marginTop,
      marginBottom: We.marginBottom.mobile,
      ...r
    },
    children: e
  }
), em = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Oe.fontFamily,
      fontWeight: Oe.fontWeight,
      fontSize: Oe.fontSize.mobile,
      lineHeight: Oe.lineHeight,
      marginTop: Oe.marginTop,
      marginBottom: Oe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), tm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ue.fontFamily,
      fontWeight: Ue.fontWeight,
      fontSize: Ue.fontSize.mobile,
      lineHeight: Ue.lineHeight,
      marginTop: Ue.marginTop,
      marginBottom: Ue.marginBottom.mobile,
      ...r
    },
    children: e
  }
), nm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ge.fontFamily,
      fontWeight: Ge.fontWeight,
      fontSize: Ge.fontSize.mobile,
      lineHeight: Ge.lineHeight,
      marginTop: Ge.marginTop,
      marginBottom: Ge.marginBottom.mobile,
      ...r
    },
    children: e
  }
), rm = () => _e(() => cf, []), am = () => _e(() => ({
  // Border colors
  BorderColorDefault: qa,
  BorderColorForm: Ka,
  BorderColorCard: Za,
  BorderColorCardHover: Ja,
  BorderColorError: Xa,
  // Primary colors
  ColorPrimaryBlue: Qa,
  ColorPrimaryWhite: es,
  ColorPrimaryBlack: ts,
  ColorPrimaryGreen: ns,
  ColorPrimaryPurple: rs,
  ColorPrimaryDarkPink: as,
  ColorPrimaryRed: ss,
  ColorPrimaryYellow: os,
  // Secondary colors
  ColorSecondaryPaleYellow: is,
  ColorSecondaryWarmYellow: ls,
  ColorSecondaryOrange: cs,
  ColorSecondaryAquaGreen: ds,
  ColorSecondaryPink: us,
  // Grey scale
  ColorGrey1: hs,
  ColorGrey2: fs,
  ColorGrey3: ms,
  ColorGrey4: ps,
  ColorGrey5: gs
}), []), sm = () => _e(() => ({
  Spacing0: Ts,
  Spacing1: Ds,
  Spacing2: Bs,
  Spacing3: Fs,
  Spacing4: Is,
  Spacing5: Rs,
  Spacing6: Ls,
  Spacing7: Es,
  Spacing8: Ms,
  Spacing9: $s
}), []), om = () => _e(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Kt,
    Size16: Xt,
    Size19: tn,
    Size22: an,
    Size26: ln,
    Size36: un,
    Size48: mn
  },
  Tablet: {
    Size14: Zt,
    Size16: Qt,
    Size19: nn,
    Size22: sn,
    Size26: cn,
    Size36: hn,
    Size48: pn
  },
  Print: {
    Size14: Jt,
    Size16: en,
    Size19: rn,
    Size22: on,
    Size26: dn,
    Size36: fn,
    Size48: gn
  },
  Family: {
    Base: Ot,
    Fallback: Ut,
    Print: Gt
  },
  Weight: {
    Normal: Vt,
    Bold: Yt,
    Light: qt
  },
  Base: {
    Size: or,
    LineHeight: ir
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Ot,
  FontFamilyFallback: Ut,
  FontFamilyPrint: Gt,
  FontWeightNormal: Vt,
  FontWeightBold: Yt,
  FontWeightLight: qt,
  FontSize14Mobile: Kt,
  FontSize14Tablet: Zt,
  FontSize14Print: Jt,
  FontSize16Mobile: Xt,
  FontSize16Tablet: Qt,
  FontSize16Print: en,
  FontSize19Mobile: tn,
  FontSize19Tablet: nn,
  FontSize19Print: rn,
  FontSize22Mobile: an,
  FontSize22Tablet: sn,
  FontSize22Print: on,
  FontSize26Mobile: ln,
  FontSize26Tablet: cn,
  FontSize26Print: dn,
  FontSize36Mobile: un,
  FontSize36Tablet: hn,
  FontSize36Print: fn,
  FontSize48Mobile: mn,
  FontSize48Tablet: pn,
  FontSize48Print: gn,
  FontSizeBase: or,
  FontLineHeightBase: ir
}), []), im = () => _e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Pn,
    Size1: Wn,
    Size2: Un,
    Size3: Vn,
    Size4: qn,
    Size5: Zn,
    Size6: Xn,
    Size7: er,
    Size8: nr,
    Size9: ar
  },
  Tablet: {
    Size0: zn,
    Size1: On,
    Size2: Gn,
    Size3: Yn,
    Size4: Kn,
    Size5: Jn,
    Size6: Qn,
    Size7: tr,
    Size8: rr,
    Size9: sr
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Pn,
  SpacingResponsive0Tablet: zn,
  SpacingResponsive1Mobile: Wn,
  SpacingResponsive1Tablet: On,
  SpacingResponsive2Mobile: Un,
  SpacingResponsive2Tablet: Gn,
  SpacingResponsive3Mobile: Vn,
  SpacingResponsive3Tablet: Yn,
  SpacingResponsive4Mobile: qn,
  SpacingResponsive4Tablet: Kn,
  SpacingResponsive5Mobile: Zn,
  SpacingResponsive5Tablet: Jn,
  SpacingResponsive6Mobile: Xn,
  SpacingResponsive6Tablet: Qn,
  SpacingResponsive7Mobile: er,
  SpacingResponsive7Tablet: tr,
  SpacingResponsive8Mobile: nr,
  SpacingResponsive8Tablet: rr,
  SpacingResponsive9Mobile: ar,
  SpacingResponsive9Tablet: sr
}), []), lm = () => _e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: bs,
  ButtonSpacingPaddingHorizontalMobile: xs,
  ButtonSpacingPaddingVerticalDesktop: ys,
  ButtonSpacingPaddingHorizontalDesktop: _s,
  // Card spacing	
  CardSpacingPaddingMobile: vs,
  CardSpacingPaddingDesktop: ks,
  CardSpacingHeadingMargin: ws,
  // Form spacing
  FormSpacingInputPadding: Ss,
  FormSpacingInputMinHeight: Cs,
  FormSpacingCheckboxSize: js,
  FormSpacingCheckboxLabelPadding: Ns
}), []), cm = () => _e(() => ({
  xl: Me,
  l: $e,
  m: Ae,
  s: He,
  xs: Pe
}), []), dm = () => _e(() => ({
  body: ze,
  bodyLarge: We,
  bodySmall: Oe,
  ledeText: Ue,
  ledeTextSmall: Ge
}), []), um = () => _e(() => ({
  headings: {
    xl: Me,
    l: $e,
    m: Ae,
    s: He,
    xs: Pe
  },
  paragraphs: {
    body: ze,
    bodyLarge: We,
    bodySmall: Oe,
    ledeText: Ue,
    ledeTextSmall: Ge
  },
  fonts: {
    family: {
      base: Ot,
      fallback: Ut,
      print: Gt
    },
    weight: {
      normal: Vt,
      bold: Yt,
      light: qt
    },
    sizes: {
      mobile: {
        size14: Kt,
        size16: Xt,
        size19: tn,
        size22: an,
        size26: ln,
        size36: un,
        size48: mn
      },
      tablet: {
        size14: Zt,
        size16: Qt,
        size19: nn,
        size22: sn,
        size26: cn,
        size36: hn,
        size48: pn
      },
      print: {
        size14: Jt,
        size16: en,
        size19: rn,
        size22: on,
        size26: dn,
        size36: fn,
        size48: gn
      }
    }
  }
}), []);
function hm(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = fe.useState(t), s = fe.useCallback(() => o("three-column"), []), i = fe.useCallback(() => o((c) => c === "three-column" ? r : c), [r]), l = fe.useCallback(() => o((c) => c === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const As = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, Ne = {
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
function fm(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...As, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Ne.normal.eot}?#iefix") format("eot"),
       url("${t}${Ne.normal.woff2}") format("woff2"),
       url("${t}${Ne.normal.woff}") format("woff"),
       url("${t}${Ne.normal.ttf}") format("truetype");
  src: url("${t}${Ne.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Ne.bold.eot}?#iefix") format("eot"),
       url("${t}${Ne.bold.woff2}") format("woff2"),
       url("${t}${Ne.bold.woff}") format("woff"),
       url("${t}${Ne.bold.ttf}") format("truetype");
  src: url("${t}${Ne.bold.eot}");
}`), a.join(`
`);
}
function mm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...As, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${Ne.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ne.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${Ne.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ne.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const pm = '"Frutiger W01", Arial, Helvetica, sans-serif', gm = "Arial, Helvetica, sans-serif";
async function bm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  lr as Account,
  uf as ActionLink,
  zf as AdaptiveDataGrid,
  jc as AnimationDurationFast,
  Nc as AnimationDurationNormal,
  Tc as AnimationDurationSlow,
  Ic as AnimationEasingBounce,
  Dc as AnimationEasingEaseIn,
  Fc as AnimationEasingEaseInOut,
  Bc as AnimationEasingEaseOut,
  Aa as AppointmentCard,
  $l as AriaDataGrid,
  An as AriaTabsDataGrid,
  zf as AriaTabsDataGridAdaptive,
  Ln as BackLink,
  Za as BorderColorCard,
  Ja as BorderColorCardHover,
  qa as BorderColorDefault,
  Xa as BorderColorError,
  Ka as BorderColorForm,
  Yc as BorderRadiusLarge,
  Vc as BorderRadiusMedium,
  Uc as BorderRadiusNone,
  Gc as BorderRadiusSmall,
  Pc as BorderWidthCardBottom,
  $c as BorderWidthDefault,
  Ac as BorderWidthFormElement,
  Hc as BorderWidthFormElementError,
  zc as BorderWidthPanel,
  Oc as BorderWidthTableCell,
  Wc as BorderWidthTableHeader,
  Dl as Breadcrumb,
  Nh as BreakpointDesktop,
  Th as BreakpointLargeDesktop,
  Ch as BreakpointMobile,
  jh as BreakpointTablet,
  De as Button,
  ku as ButtonBorderRadius,
  vu as ButtonBorderWidth,
  cu as ButtonPrimaryBackgroundActive,
  iu as ButtonPrimaryBackgroundDefault,
  du as ButtonPrimaryBackgroundDisabled,
  lu as ButtonPrimaryBackgroundHover,
  fu as ButtonPrimaryBorderDefault,
  mu as ButtonPrimaryBorderFocus,
  uu as ButtonPrimaryTextDefault,
  hu as ButtonPrimaryTextDisabled,
  xu as ButtonSecondaryBackgroundActive,
  pu as ButtonSecondaryBackgroundDefault,
  bu as ButtonSecondaryBackgroundHover,
  gu as ButtonSecondaryBackgroundSolid,
  _u as ButtonSecondaryBorderDefault,
  yu as ButtonSecondaryTextDefault,
  wu as ButtonShadowSize,
  _s as ButtonSpacingPaddingHorizontalDesktop,
  xs as ButtonSpacingPaddingHorizontalMobile,
  ys as ButtonSpacingPaddingVerticalDesktop,
  bs as ButtonSpacingPaddingVerticalMobile,
  Su as ButtonTypographyWeight,
  Ea as Card,
  Cu as CardBackgroundDefault,
  Tu as CardBorderBottom,
  ju as CardBorderDefault,
  Nu as CardBorderHover,
  Ru as CardBorderWidthBottom,
  Iu as CardBorderWidthDefault,
  Df as CardGroup,
  Bf as CardGroupItem,
  Lu as CardShadowDefault,
  Eu as CardShadowHover,
  ws as CardSpacingHeadingMargin,
  ks as CardSpacingPaddingDesktop,
  vs as CardSpacingPaddingMobile,
  Bu as CardTextDescription,
  Du as CardTextHeading,
  Fu as CardTextLink,
  Ff as CareCard,
  hf as CharacterCount,
  so as Checkbox,
  oo as Checkboxes,
  ad as ColorBorderDefault,
  sd as ColorBorderSecondary,
  Id as ColorButtonLoginActive,
  Bd as ColorButtonLoginBackground,
  Fd as ColorButtonLoginHover,
  Rd as ColorButtonLoginShadow,
  hd as ColorButtonPrimaryActive,
  cd as ColorButtonPrimaryBackground,
  ud as ColorButtonPrimaryHover,
  fd as ColorButtonPrimaryShadow,
  dd as ColorButtonPrimaryText,
  Sd as ColorButtonReverseActive,
  vd as ColorButtonReverseBackground,
  wd as ColorButtonReverseHover,
  Cd as ColorButtonReverseShadow,
  kd as ColorButtonReverseText,
  yd as ColorButtonSecondaryActive,
  md as ColorButtonSecondaryBackground,
  pd as ColorButtonSecondaryBackgroundSolid,
  gd as ColorButtonSecondaryBorder,
  xd as ColorButtonSecondaryHover,
  _d as ColorButtonSecondaryShadow,
  bd as ColorButtonSecondaryText,
  Td as ColorButtonWarningActive,
  jd as ColorButtonWarningBackground,
  Nd as ColorButtonWarningHover,
  Dd as ColorButtonWarningShadow,
  od as ColorError,
  nd as ColorFocusBackground,
  rd as ColorFocusText,
  ld as ColorFormBackground,
  id as ColorFormBorder,
  hs as ColorGrey1,
  fs as ColorGrey2,
  ms as ColorGrey3,
  ps as ColorGrey4,
  gs as ColorGrey5,
  ed as ColorLinkActive,
  Xc as ColorLinkDefault,
  Qc as ColorLinkHover,
  td as ColorLinkVisited,
  ts as ColorPrimaryBlack,
  Qa as ColorPrimaryBlue,
  as as ColorPrimaryDarkPink,
  ns as ColorPrimaryGreen,
  rs as ColorPrimaryPurple,
  ss as ColorPrimaryRed,
  es as ColorPrimaryWhite,
  os as ColorPrimaryYellow,
  ds as ColorSecondaryAquaGreen,
  cs as ColorSecondaryOrange,
  is as ColorSecondaryPaleYellow,
  us as ColorSecondaryPink,
  ls as ColorSecondaryWarmYellow,
  qc as ColorTextPrimary,
  Jc as ColorTextPrint,
  Zc as ColorTextReverse,
  Kc as ColorTextSecondary,
  ga as Column,
  nu as ComponentBlur,
  qd as ComponentBreadcrumbChevronMarginLeft,
  Kd as ComponentBreadcrumbChevronMarginRight,
  Jd as ComponentBreadcrumbPaddingTopDesktop,
  Zd as ComponentBreadcrumbPaddingTopMobile,
  $d as ComponentButtonPaddingDesktopHorizontal,
  Md as ComponentButtonPaddingDesktopVertical,
  Ed as ComponentButtonPaddingMobileHorizontal,
  Ld as ComponentButtonPaddingMobileVertical,
  Ad as ComponentButtonShadowSize,
  Gd as ComponentCardHeadingMargin,
  Ud as ComponentCardPaddingDesktop,
  Od as ComponentCardPaddingMobile,
  au as ComponentDetails,
  su as ComponentExpander,
  Wd as ComponentFormCheckboxLabelPadding,
  zd as ComponentFormCheckboxSize,
  Hd as ComponentFormInputMinHeight,
  Pd as ComponentFormInputPadding,
  ru as ComponentLink,
  ou as ComponentPagination,
  Yd as ComponentPanelPaddingDesktop,
  Vd as ComponentPanelPaddingMobile,
  tu as ComponentSpread,
  Qd as ComponentSummaryListCellPaddingHorizontal,
  Xd as ComponentSummaryListCellPaddingVertical,
  eu as ComponentSummaryListRowMargin,
  pa as Container,
  Tf as ContentsList,
  As as DEFAULT_FONT_CONFIG,
  Af as DashboardSummaryGrid,
  vf as DateInput,
  Fl as Details,
  Il as DoDontList,
  lf as ElevationHigh,
  sf as ElevationLow,
  of as ElevationMedium,
  af as ElevationNone,
  Fr as ErrorMessage,
  _f as ErrorSummary,
  Rl as Expander,
  Ne as FRUTIGER_FONT_FILES,
  ur as Fieldset,
  ef as FocusOutlineOffset,
  tf as FocusOutlineStyle,
  Qh as FocusOutlineWidth,
  rf as FocusShadowButton,
  nf as FocusShadowInput,
  Ot as FontFamilyBase,
  Ut as FontFamilyFallback,
  Gt as FontFamilyPrint,
  ir as FontLineHeightBase,
  Kt as FontSize14Mobile,
  Jt as FontSize14Print,
  Zt as FontSize14Tablet,
  Xt as FontSize16Mobile,
  en as FontSize16Print,
  Qt as FontSize16Tablet,
  tn as FontSize19Mobile,
  rn as FontSize19Print,
  nn as FontSize19Tablet,
  an as FontSize22Mobile,
  on as FontSize22Print,
  sn as FontSize22Tablet,
  ln as FontSize26Mobile,
  dn as FontSize26Print,
  cn as FontSize26Tablet,
  un as FontSize36Mobile,
  fn as FontSize36Print,
  hn as FontSize36Tablet,
  mn as FontSize48Mobile,
  gn as FontSize48Print,
  pn as FontSize48Tablet,
  or as FontSizeBase,
  Yt as FontWeightBold,
  qt as FontWeightLight,
  Vt as FontWeightNormal,
  ka as Footer,
  th as FormBorderRadius,
  Qu as FormBorderWidthDefault,
  eh as FormBorderWidthError,
  Zu as FormErrorTextDefault,
  Ju as FormErrorTypographyWeight,
  Xu as FormHintTextDefault,
  Mu as FormInputBackgroundDefault,
  Au as FormInputBackgroundDisabled,
  Hu as FormInputBackgroundError,
  $u as FormInputBackgroundFocus,
  Pu as FormInputBorderDefault,
  Ou as FormInputBorderDisabled,
  Wu as FormInputBorderError,
  zu as FormInputBorderFocus,
  Uu as FormInputTextDefault,
  Vu as FormInputTextDisabled,
  Gu as FormInputTextPlaceholder,
  Yu as FormLabelTextDefault,
  qu as FormLabelTextRequired,
  Ku as FormLabelTypographyWeight,
  Ns as FormSpacingCheckboxLabelPadding,
  js as FormSpacingCheckboxSize,
  Cs as FormSpacingInputMinHeight,
  Ss as FormSpacingInputPadding,
  jf as GanttChart,
  mf as Grid,
  Bh as GridGutter,
  Fh as GridGutterHalf,
  Dh as GridPageWidth,
  va as Header,
  Sf as HeaderSSR,
  _a as HeaderSearch,
  Cf as HeaderStatic,
  Ke as Heading,
  $e as HeadingsNhsukHeadingL,
  Ae as HeadingsNhsukHeadingM,
  He as HeadingsNhsukHeadingS,
  Me as HeadingsNhsukHeadingXl,
  Pe as HeadingsNhsukHeadingXs,
  bo as Hero,
  fa as Hint,
  $f as Images,
  cr as Input,
  If as InsetText,
  dr as Label,
  Sh as LayoutColumnActions,
  _h as LayoutColumnFull,
  vh as LayoutColumnHalf,
  wh as LayoutColumnQuarter,
  kh as LayoutColumnThird,
  yh as LayoutContainerMaxWidth,
  fo as List,
  ba as MainWrapper,
  Ha as MedicationCard,
  Xf as NHSBodyText,
  Qf as NHSBodyTextLarge,
  em as NHSBodyTextSmall,
  Yf as NHSHeading1,
  qf as NHSHeading2,
  Kf as NHSHeading3,
  Zf as NHSHeading4,
  Jf as NHSHeading5,
  tm as NHSLedeText,
  nm as NHSLedeTextSmall,
  wf as NHSThemeProvider,
  gm as NHS_FALLBACK_FONT_STACK,
  pm as NHS_FONT_STACK,
  Cc as NavigationSplitView,
  Of as PageTemplate,
  Nf as Pagination,
  Bl as Panel,
  ze as ParagraphsBody,
  We as ParagraphsBodyLarge,
  Oe as ParagraphsBodySmall,
  Ue as ParagraphsLedeText,
  Ge as ParagraphsLedeTextSmall,
  $a as PatientCard,
  ff as Radios,
  zf as ResponsiveDataGrid,
  Wf as ResponsiveDataGridDemo,
  Et as Row,
  ma as Select,
  lo as SelectOption,
  Yh as ShadowButtonDefault,
  Zh as ShadowButtonFocus,
  qh as ShadowButtonSecondary,
  Kh as ShadowButtonWarning,
  Jh as ShadowCardDefault,
  Xh as ShadowCardHover,
  xh as SizeButtonMinHeightDesktop,
  bh as SizeButtonMinHeightMobile,
  ch as SizeFormControlLarge,
  lh as SizeFormControlMedium,
  ih as SizeFormControlSmall,
  ph as SizeFormInputWidth2xl,
  gh as SizeFormInputWidth3xl,
  fh as SizeFormInputWidthLg,
  hh as SizeFormInputWidthMd,
  uh as SizeFormInputWidthSm,
  mh as SizeFormInputWidthXl,
  dh as SizeFormInputWidthXs,
  sh as SizeIconExtraLarge,
  ah as SizeIconLarge,
  rh as SizeIconMedium,
  oh as SizeIconNhsDefault,
  nh as SizeIconSmall,
  La as SkipLink,
  Hf as SortStatusControl,
  Ts as Spacing0,
  Ds as Spacing1,
  Bs as Spacing2,
  Fs as Spacing3,
  Is as Spacing4,
  Rs as Spacing5,
  Ls as Spacing6,
  Es as Spacing7,
  Ms as Spacing8,
  $s as Spacing9,
  Pn as SpacingResponsive0Mobile,
  zn as SpacingResponsive0Tablet,
  Wn as SpacingResponsive1Mobile,
  On as SpacingResponsive1Tablet,
  Un as SpacingResponsive2Mobile,
  Gn as SpacingResponsive2Tablet,
  Vn as SpacingResponsive3Mobile,
  Yn as SpacingResponsive3Tablet,
  qn as SpacingResponsive4Mobile,
  Kn as SpacingResponsive4Tablet,
  Zn as SpacingResponsive5Mobile,
  Jn as SpacingResponsive5Tablet,
  Xn as SpacingResponsive6Mobile,
  Qn as SpacingResponsive6Tablet,
  er as SpacingResponsive7Mobile,
  tr as SpacingResponsive7Tablet,
  nr as SpacingResponsive8Mobile,
  rr as SpacingResponsive8Tablet,
  ar as SpacingResponsive9Mobile,
  sr as SpacingResponsive9Tablet,
  pf as SpacingUtilities,
  Uh as StateDisabledBackground,
  Gh as StateDisabledBorder,
  Vh as StateDisabledText,
  Ih as StateErrorBackground,
  Rh as StateErrorBorder,
  Lh as StateErrorText,
  zh as StateInfoBackground,
  Wh as StateInfoBorder,
  Oh as StateInfoText,
  Eh as StateSuccessBackground,
  Mh as StateSuccessBorder,
  $h as StateSuccessText,
  Ah as StateWarningBackground,
  Hh as StateWarningBorder,
  Ph as StateWarningText,
  Ml as SummaryCard,
  Rf as SummaryList,
  Lf as Table,
  Ef as Tabs,
  qe as Tag,
  Ll as TaskList,
  io as Textarea,
  Uf as TransactionalPageTemplate,
  Rc as TransitionButtonDefault,
  Lc as TransitionButtonShadow,
  Mc as TransitionCardHover,
  Ec as TransitionInputFocus,
  Pa as VitalsCard,
  yf as WIDTH_FRACTIONS,
  Mf as WarningCallout,
  Ga as WidthContainer,
  bf as WidthUtilities,
  bm as checkFrutigerLoaded,
  vr as createGenericTabsConfig,
  Pf as createTCHTabsConfig,
  fm as generateFrutigerFontFace,
  Vf as getResponsiveStyles,
  gf as getSpacingClass,
  xf as getWidthClass,
  mm as preloadFrutigerFonts,
  ql as tchDataConfig,
  am as useColors,
  lm as useComponentSpacing,
  cm as useNHSHeadings,
  dm as useNHSParagraphs,
  kf as useNHSTheme,
  um as useNHSTypographySystem,
  hm as useNavigationSplitDrill,
  kc as useNavigationSplitUrlSync,
  Ya as useNhsFdpBreakpoints,
  im as useResponsiveSpacing,
  Gf as useResponsiveValue,
  sm as useSpacing,
  rm as useTokens,
  om as useTypography
};
//# sourceMappingURL=index.esm.js.map
