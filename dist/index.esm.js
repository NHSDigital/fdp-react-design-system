import * as Ka from "react";
import be, { useState as ne, useEffect as se, useCallback as q, createElement as Dr, useRef as ae, useMemo as ie, createContext as Za, useContext as Ja, forwardRef as Ze, useImperativeHandle as Br, useReducer as Fr } from "react";
function Xa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ct = { exports: {} }, Qe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function Qa() {
  if (Jn) return Qe;
  Jn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(a, s, o) {
    var i = null;
    if (o !== void 0 && (i = "" + o), s.key !== void 0 && (i = "" + s.key), "key" in s) {
      o = {};
      for (var l in s)
        l !== "key" && (o[l] = s[l]);
    } else o = s;
    return s = o.ref, {
      $$typeof: e,
      type: a,
      key: i,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return Qe.Fragment = t, Qe.jsx = r, Qe.jsxs = r, Qe;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function es() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(M) {
      if (M == null) return null;
      if (typeof M == "function")
        return M.$$typeof === _ ? null : M.displayName || M.name || null;
      if (typeof M == "string") return M;
      switch (M) {
        case b:
          return "Fragment";
        case D:
          return "Profiler";
        case C:
          return "StrictMode";
        case P:
          return "Suspense";
        case T:
          return "SuspenseList";
        case x:
          return "Activity";
      }
      if (typeof M == "object")
        switch (typeof M.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), M.$$typeof) {
          case R:
            return "Portal";
          case I:
            return (M.displayName || "Context") + ".Provider";
          case B:
            return (M._context.displayName || "Context") + ".Consumer";
          case j:
            var G = M.render;
            return M = M.displayName, M || (M = G.displayName || G.name || "", M = M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef"), M;
          case $:
            return G = M.displayName || null, G !== null ? G : e(M.type) || "Memo";
          case y:
            G = M._payload, M = M._init;
            try {
              return e(M(G));
            } catch {
            }
        }
      return null;
    }
    function t(M) {
      return "" + M;
    }
    function r(M) {
      try {
        t(M);
        var G = !1;
      } catch {
        G = !0;
      }
      if (G) {
        G = console;
        var U = G.error, w = typeof Symbol == "function" && Symbol.toStringTag && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return U.call(
          G,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), t(M);
      }
    }
    function a(M) {
      if (M === b) return "<>";
      if (typeof M == "object" && M !== null && M.$$typeof === y)
        return "<...>";
      try {
        var G = e(M);
        return G ? "<" + G + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var M = h.A;
      return M === null ? null : M.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(M) {
      if (H.call(M, "key")) {
        var G = Object.getOwnPropertyDescriptor(M, "key").get;
        if (G && G.isReactWarning) return !1;
      }
      return M.key !== void 0;
    }
    function l(M, G) {
      function U() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          G
        ));
      }
      U.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: U,
        configurable: !0
      });
    }
    function c() {
      var M = e(this.type);
      return O[M] || (O[M] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), M = this.props.ref, M !== void 0 ? M : null;
    }
    function u(M, G, U, w, k, f, g, F) {
      return U = f.ref, M = {
        $$typeof: v,
        type: M,
        key: G,
        props: f,
        _owner: k
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(M, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(M, "ref", { enumerable: !1, value: null }), M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(M, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(M, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.defineProperty(M, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    }
    function d(M, G, U, w, k, f, g, F) {
      var L = G.children;
      if (L !== void 0)
        if (w)
          if (X(L)) {
            for (w = 0; w < L.length; w++)
              m(L[w]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(L);
      if (H.call(G, "key")) {
        L = e(M);
        var N = Object.keys(G).filter(function(E) {
          return E !== "key";
        });
        w = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", J[L + w] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          L,
          N,
          L
        ), J[L + w] = !0);
      }
      if (L = null, U !== void 0 && (r(U), L = "" + U), i(G) && (r(G.key), L = "" + G.key), "key" in G) {
        U = {};
        for (var A in G)
          A !== "key" && (U[A] = G[A]);
      } else U = G;
      return L && l(
        U,
        typeof M == "function" ? M.displayName || M.name || "Unknown" : M
      ), u(
        M,
        L,
        f,
        k,
        s(),
        U,
        g,
        F
      );
    }
    function m(M) {
      typeof M == "object" && M !== null && M.$$typeof === v && M._store && (M._store.validated = 1);
    }
    var p = be, v = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), B = Symbol.for("react.consumer"), I = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, X = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(M) {
        return M();
      }
    };
    var z, O = {}, Q = p.react_stack_bottom_frame.bind(
      p,
      o
    )(), Z = K(a(o)), J = {};
    et.Fragment = b, et.jsx = function(M, G, U, w, k) {
      var f = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        M,
        G,
        U,
        !1,
        w,
        k,
        f ? Error("react-stack-top-frame") : Q,
        f ? K(a(M)) : Z
      );
    }, et.jsxs = function(M, G, U, w, k) {
      var f = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        M,
        G,
        U,
        !0,
        w,
        k,
        f ? Error("react-stack-top-frame") : Q,
        f ? K(a(M)) : Z
      );
    };
  }()), et;
}
var Qn;
function ts() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? ct.exports = Qa() : ct.exports = es()), ct.exports;
}
var n = ts(), Jt = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var er;
function ns() {
  return er || (er = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var o = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (o = s(o, a(l)));
        }
        return o;
      }
      function a(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return r.apply(null, o);
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
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Jt)), Jt.exports;
}
var rs = ns();
const V = /* @__PURE__ */ Xa(rs), lh = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = V(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ n.jsxs(
    "a",
    {
      className: o,
      href: t,
      target: r ? "_blank" : void 0,
      rel: r ? "noopener noreferrer" : void 0,
      ...s,
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
}, En = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: r,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const s = (o) => {
    const i = o.icon ? /* @__PURE__ */ n.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = o.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link", href: o.href, children: c }) : o.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
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
      className: V(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map((o, i) => o && /* @__PURE__ */ n.jsx(
        "li",
        {
          className: V("nhsuk-account__item", o.className),
          children: s(o)
        },
        i
      )) })
    }
  );
}, { forwardRef: as, useCallback: Ae, useState: Xt } = Ka;
function ss(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: s = "default",
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = Xt(!1), [m, p] = Xt(!1), [v, R] = Xt(!1), b = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    o ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), C = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", D = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...C && { "data-disabled": "true" }
  }, B = Ae(() => !C && d(!0), [C]), I = Ae(() => d(!1), []), j = Ae(() => !C && p(!0), [C]), P = Ae(() => {
    p(!1), d(!1);
  }, []), T = Ae(() => R(!0), []), $ = Ae(() => R(!1), []), y = Ae((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), x = Ae((h) => {
    if (l) {
      const H = h.currentTarget;
      if (H.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      H.setAttribute("data-processing", "true"), setTimeout(() => {
        H.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in c && c.href) {
    const h = c;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: h.href,
        target: h.target,
        rel: h.rel,
        className: b,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...D,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (H) => {
          h.onKeyDown?.(H), y(H);
        },
        onClick: (H) => {
          h.onClick?.(H), x(H);
        },
        onMouseDown: (H) => {
          h.onMouseDown?.(H), B();
        },
        onMouseUp: (H) => {
          h.onMouseUp?.(H), I();
        },
        onMouseEnter: (H) => {
          h.onMouseEnter?.(H), j();
        },
        onMouseLeave: (H) => {
          h.onMouseLeave?.(H), P();
        },
        onFocus: (H) => {
          h.onFocus?.(H), T();
        },
        onBlur: (H) => {
          h.onBlur?.(H), $();
        },
        "aria-disabled": h["aria-disabled"],
        ...h["aria-disabled"] === "true" && { tabIndex: -1 },
        id: h.id,
        style: h.style,
        title: h.title,
        "aria-label": h["aria-label"],
        "aria-describedby": h["aria-describedby"],
        "aria-labelledby": h["aria-labelledby"],
        tabIndex: h.tabIndex,
        children: r
      }
    );
  }
  const _ = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: _.type || "button",
      disabled: _.disabled,
      className: b,
      "data-module": "nhs-button",
      ...D,
      ...l && { "data-prevent-double-click": "true" },
      ..._.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        _.onKeyDown?.(h), y(h);
      },
      onClick: (h) => {
        _.onClick?.(h), x(h);
      },
      onMouseDown: (h) => {
        _.onMouseDown?.(h), B();
      },
      onMouseUp: (h) => {
        _.onMouseUp?.(h), I();
      },
      onMouseEnter: (h) => {
        _.onMouseEnter?.(h), j();
      },
      onMouseLeave: (h) => {
        _.onMouseLeave?.(h), P();
      },
      onFocus: (h) => {
        _.onFocus?.(h), T();
      },
      onBlur: (h) => {
        _.onBlur?.(h), $();
      },
      id: _.id,
      style: _.style,
      title: _.title,
      "aria-label": _["aria-label"],
      "aria-describedby": _["aria-describedby"],
      "aria-labelledby": _["aria-labelledby"],
      tabIndex: _.tabIndex,
      name: _.name,
      value: _.value,
      form: _.form,
      formAction: _.formAction,
      formEncType: _.formEncType,
      formMethod: _.formMethod,
      formNoValidate: _.formNoValidate,
      formTarget: _.formTarget,
      autoFocus: _.autoFocus,
      children: r
    }
  );
}
const me = as(ss);
me.displayName = "Button";
const os = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = V(
    "nhsuk-back-link",
    a
  ), c = V(
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ n.jsx(
    "button",
    {
      className: c,
      onClick: o,
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
}, Me = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...u
}) => {
  const d = V(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": s,
      "nhsuk-tag--closable": o,
      "nhsuk-tag--disabled": l
    },
    c
  ), m = (p) => {
    p.preventDefault(), p.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d, ...u, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
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
}, is = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: u,
  onChange: d,
  onBlur: m,
  onFocus: p,
  attributes: v,
  ...R
}) => {
  const [b, C] = ne(a), D = r !== void 0, B = D ? r : b;
  se(() => {
    D || C(a);
  }, [a, D]);
  const I = (y) => {
    const x = y.target.checked;
    D || C(x), d?.(x, y);
  }, j = i ? `${e}-hint` : void 0, P = l ? `${e}-error` : void 0, T = [j, P].filter(Boolean).join(" ") || void 0, $ = V(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: $, ...R, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: B,
        disabled: s,
        onChange: I,
        onBlur: m,
        onFocus: p,
        "aria-describedby": T,
        ...v
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: j, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: P, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
is.displayName = "Checkbox";
const Ln = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: u = !1,
  describedBy: d,
  className: m,
  width: p = "full",
  inputMode: v,
  autoComplete: R,
  maxLength: b,
  minLength: C,
  pattern: D,
  step: B,
  min: I,
  max: j,
  showValueLabels: P = !1,
  showCurrentValue: T = !1,
  valueLabels: $,
  onChange: y,
  onBlur: x,
  onFocus: _,
  onKeyDown: h,
  ...H
}) => {
  const [X, K] = ne(a || s || (r === "range" ? I || "0" : ""));
  se(() => {
    a !== void 0 && K(a);
  }, [a]);
  const z = (J) => {
    K(J.target.value), y?.(J);
  }, O = r === "range", Q = V(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": O,
      [`nhsuk-input--width-${p}`]: p !== "full" && !O
    },
    m
  ), Z = O ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    P && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: $?.min || I || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: Q,
          id: e,
          name: t,
          type: r,
          value: X,
          defaultValue: s,
          placeholder: o,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: v,
          autoComplete: R,
          maxLength: b,
          minLength: C,
          pattern: D,
          step: B,
          min: I,
          max: j,
          onChange: z,
          onBlur: x,
          onFocus: _,
          onKeyDown: h,
          ...H
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: $?.max || j || "100" })
    ] }),
    !P && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: Q,
        id: e,
        name: t,
        type: r,
        value: X,
        defaultValue: s,
        placeholder: o,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: v,
        autoComplete: R,
        maxLength: b,
        minLength: C,
        pattern: D,
        step: B,
        min: I,
        max: j,
        onChange: z,
        onBlur: x,
        onFocus: _,
        onKeyDown: h,
        ...H
      }
    ),
    T && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      $?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: X })
    ] }) })
  ] }) : null;
  return O ? Z : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: Q,
      id: e,
      name: t,
      type: r,
      value: a,
      defaultValue: s,
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": d,
      inputMode: v,
      autoComplete: R,
      maxLength: b,
      minLength: C,
      pattern: D,
      step: B,
      min: I,
      max: j,
      onChange: y,
      onBlur: x,
      onFocus: _,
      onKeyDown: h,
      ...H
    }
  );
}, $n = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = V(
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
      ...o,
      children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s
    }
  );
}, An = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = V(
    "nhsuk-fieldset",
    r
  ), i = V(
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
      className: o,
      "aria-describedby": a,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: i, children: l() }),
        e
      ]
    }
  );
}, ls = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: u = !1,
  onChange: d,
  fieldsetAttributes: m,
  attributes: p,
  ...v
}) => {
  const [R, b] = ne(
    e.filter((y) => y.checked).map((y) => y.value)
  ), C = r || t, D = i ? `${C}-hint` : void 0, B = l ? `${C}-error` : void 0, I = [D, B].filter(Boolean).join(" ") || void 0, j = (y, x) => {
    let _;
    x ? _ = [...R, y] : _ = R.filter((h) => h !== y), b(_), d?.(_);
  }, P = () => e.map((y, x) => {
    const _ = `${C}-${x + 1}`, h = `${_}-conditional`, H = R.includes(y.value), X = y.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: _,
          name: t,
          type: "checkbox",
          value: y.value,
          checked: H,
          disabled: X,
          onChange: (K) => j(y.value, K.target.checked),
          "aria-describedby": y.hint ? `${_}-hint` : I,
          ...y.conditional && {
            "aria-controls": h,
            "aria-expanded": H ? "true" : "false"
          },
          ...y.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: _, children: y.text }),
      y.hint && /* @__PURE__ */ n.jsx("div", { id: `${_}-hint`, className: "nhsuk-checkboxes__hint", children: y.hint }),
      y.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: V("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !H
          }),
          id: h,
          children: typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            y.conditional.label && /* @__PURE__ */ n.jsx($n, { htmlFor: y.conditional.id, children: y.conditional.label }),
            /* @__PURE__ */ n.jsx(Ln, { ...y.conditional })
          ] }) : y.conditional
        }
      )
    ] }, y.value);
  }), T = V(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), $ = V("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: $, ...p, ...v, children: /* @__PURE__ */ n.jsxs(
    An,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: I,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: B, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: T, children: P() })
      ]
    }
  ) });
};
ls.displayName = "Checkboxes";
const cs = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: u,
  className: d,
  rows: m = 5,
  cols: p,
  maxLength: v,
  minLength: R,
  wrap: b = "soft",
  resize: C = "vertical",
  autoComplete: D,
  spellCheck: B,
  onChange: I,
  onBlur: j,
  onFocus: P,
  onKeyDown: T,
  ...$
}) => {
  const y = V(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${C}`]: C !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: y,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": u,
      rows: m,
      cols: p,
      maxLength: v,
      minLength: R,
      wrap: b,
      autoComplete: D,
      spellCheck: B,
      onChange: I,
      onBlur: j,
      onFocus: P,
      onKeyDown: T,
      ...$
    }
  );
}, Rr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = V("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, id: e, ...a, children: r });
}, ch = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: s,
  value: o = "",
  rows: i,
  className: l,
  countMessage: c,
  onCountChange: u,
  onChange: d,
  ...m
}) => {
  const [p, v] = ne(o), [R, b] = ne(0), [C, D] = ne(!1), [B, I] = ne(!1), j = q((_) => r ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [r]);
  se(() => {
    const _ = j(p), h = t || r || 0, H = h - _, X = Math.floor(h * (a / 100));
    b(H), D(_ > h), I(_ >= X || _ > h), u && u(_, H);
  }, [p, t, r, a, j, u]);
  const P = (_) => {
    const h = _.target.value;
    v(h), d && d(_);
  }, T = () => {
    const _ = t || r || 0, h = r ? "word" : "character", H = r ? "words" : "characters";
    if (!B)
      return `You can enter up to ${_} ${_ === 1 ? h : H}`;
    if (C) {
      const X = Math.abs(R);
      return `You have ${X} ${X === 1 ? h : H} too many`;
    } else
      return `You have ${R} ${R === 1 ? h : H} remaining`;
  }, $ = V(
    "nhsuk-character-count",
    l
  ), y = V(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !B,
      "nhsuk-error-message": C
    },
    c?.classes
  ), x = V(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: $,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          cs,
          {
            id: e,
            name: s,
            value: p,
            rows: i,
            className: x,
            onChange: P,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Rr,
          {
            id: `${e}-info`,
            className: y,
            children: T()
          }
        )
      ]
    }
  );
}, ds = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: s,
  ...o
}) => {
  const i = V(
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
      ...o,
      children: s
    }
  );
}, us = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  disabled: s = !1,
  required: o = !1,
  hasError: i = !1,
  describedBy: l,
  className: c,
  multiple: u = !1,
  size: d,
  autoComplete: m,
  options: p,
  children: v,
  onChange: R,
  onBlur: b,
  onFocus: C,
  ...D
}) => {
  const B = V(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), I = () => p ? p.map((j, P) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: j.value,
      disabled: j.disabled,
      selected: j.selected,
      children: j.text
    },
    `${j.value}-${P}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: B,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      disabled: s,
      required: o,
      "aria-describedby": l,
      multiple: u,
      size: d,
      autoComplete: m,
      onChange: R,
      onBlur: b,
      onFocus: C,
      ...D,
      children: v || I()
    }
  );
}, hs = us;
hs.Option = ds;
const dh = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: s,
  className: o,
  size: i = "normal",
  inline: l = !1,
  options: c,
  onChange: u,
  onBlur: d,
  onFocus: m,
  ...p
}) => {
  const [v, R] = ne(t || r || ""), b = V(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    o
  ), C = (D) => {
    const B = D.target.value;
    R(B), u && u(D);
  };
  return /* @__PURE__ */ n.jsx(An, { children: /* @__PURE__ */ n.jsx("div", { className: b, ...p, children: c.map((D, B) => {
    const I = `${e}-${B}`, j = D.conditional ? `${I}-conditional` : void 0, P = v === D.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: I,
          name: e,
          type: "radio",
          value: D.value,
          disabled: D.disabled,
          checked: P,
          "aria-describedby": s,
          onChange: C,
          onBlur: d,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: I, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: V("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !P
          }),
          id: j,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx($n, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(Ln, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }) }) });
}, Ir = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...s
}) => {
  const o = V(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: o, style: i, ...s, children: e });
}, mt = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = V("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, Hn = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  ...c
}) => {
  const u = V(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: r,
      [`nhsuk-u-${a}-tablet`]: a,
      [`nhsuk-u-${s}-desktop`]: s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: u, ...c, children: e });
}, fs = ({
  children: e,
  className: t,
  ...r
}) => {
  const s = be.Children.toArray(e)[0], o = be.isValidElement(s) && (s.type === mt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Ir, { className: t, ...r, children: o ? e : /* @__PURE__ */ n.jsx(mt, { children: e }) });
}, ms = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = V(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": a,
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    s
  );
  return /* @__PURE__ */ n.jsx(c, { className: u, role: o, ...l, children: e });
}, ps = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = V("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, gs = ms;
gs.Item = ps;
const uh = ({
  debug: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  if (!r)
    return null;
  const s = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: s, ...a, children: r });
}, hh = {
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
}, fh = ({
  debug: e = !1,
  className: t,
  children: r,
  ...a
}) => {
  if (!r)
    return null;
  const s = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: s, ...a, children: r });
}, mh = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ph = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Mr = ({
  as: e = "main",
  size: t = "default",
  className: r,
  children: a,
  ...s
}) => {
  const o = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(e, { className: o, ...s, children: a });
}, Ee = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: s,
  size: o,
  marginBottom: i,
  ...l
}) => {
  const u = e ?? ((R) => {
    switch (R) {
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
  })(o), d = V(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${o}`]: o
    },
    t
  ), m = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, v = i ? { ...l.style, marginBottom: i } : l.style;
  return Dr(
    p,
    { className: d, ...l, style: v },
    m
  );
}, tr = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...s
}) => {
  const o = V("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: o, id: e, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, gh = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const c = ae(null);
  se(() => {
    c.current && c.current.focus();
  }, []);
  const u = V(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (v) => {
    const R = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
    return v.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: v.href,
        ...v.attributes,
        children: R
      }
    ) : R;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((v, R) => /* @__PURE__ */ n.jsx("li", { children: p(v) }, R)) })
        ] })
      ]
    }
  );
}, bh = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...u
}) => {
  const [d, m] = ne(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [p, v] = ne({}), R = (z) => z % 4 === 0 && z % 100 !== 0 || z % 400 === 0, b = (z, O) => {
    const Q = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return z === 2 && R(O) ? 29 : Q[z - 1];
  }, C = (z, O, Q) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Day must be a number";
    const Z = parseInt(z, 10);
    if (Z < 1 || Z > 31) return "Day must be between 1 and 31";
    if (O && Q) {
      const J = parseInt(O, 10), M = parseInt(Q, 10);
      if (!isNaN(J) && !isNaN(M) && J >= 1 && J <= 12) {
        const G = b(J, M);
        if (Z > G)
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
          ][J - 1]} ${M} only has ${G} days`;
      }
    }
  }, D = (z) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Month must be a number";
    const O = parseInt(z, 10);
    if (O < 1 || O > 12) return "Month must be between 1 and 12";
  }, B = (z) => {
    if (!z) return;
    if (!/^\d+$/.test(z)) return "Year must be a number";
    const O = parseInt(z, 10), Q = (/* @__PURE__ */ new Date()).getFullYear();
    if (O < 1900 || O > Q + 10)
      return `Year must be between 1900 and ${Q + 10}`;
  }, I = (z, O, Q) => {
    if (!z || !O || !Q) return;
    const Z = parseInt(z, 10), J = parseInt(O, 10), M = parseInt(Q, 10);
    if (isNaN(Z) || isNaN(J) || isNaN(M) || J < 1 || J > 12 || M < 1900) return;
    const G = b(J, M);
    Z < 1 || Z > G;
  }, j = q((z, O) => {
    const Q = {
      ...d,
      [z]: O
    };
    m(Q), c && c(Q);
  }, [d, c]), P = q((z) => {
    const O = d[z];
    let Q;
    if (z === "day")
      Q = C(O, d.month, d.year);
    else if (z === "month") {
      if (Q = D(O), !Q && d.day) {
        const Z = C(d.day, O, d.year);
        v((J) => ({
          ...J,
          day: Z
        }));
      }
    } else if (z === "year" && (Q = B(O), !Q && d.day && d.month)) {
      const Z = C(d.day, d.month, O);
      v((J) => ({
        ...J,
        day: Z
      }));
    }
    if (v((Z) => ({
      ...Z,
      [z]: Q
    })), d.day && d.month && d.year) {
      const Z = I(
        z === "day" ? O : d.day,
        z === "month" ? O : d.month,
        z === "year" ? O : d.year
      );
      Z && v((J) => ({
        ...J,
        day: Z
      }));
    }
  }, [d, C, D, B, I]), T = ie(() => [
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
  ], []), $ = r || T;
  let y = o?.describedBy || "";
  const x = i ? `${e}-hint` : "", _ = l ? `${e}-error` : "";
  x && (y = y ? `${y} ${x}` : x), _ && (y = y ? `${y} ${_}` : _);
  const h = Object.values(p).some((z) => z), H = V(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), X = V(
    "nhsuk-date-input",
    t
  ), K = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Rr,
      {
        id: x,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      tr,
      {
        id: _,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([z, O]) => O ? /* @__PURE__ */ n.jsxs(
        tr,
        {
          id: `${e}-${z}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            O
          ]
        },
        `${z}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: X, id: e, "data-testid": "date-input", ...u, children: $.map((z) => {
      const O = z.id || `${e}-${z.name}`, Q = a ? `${a}[${z.name}]` : z.name, Z = z.label || z.name.charAt(0).toUpperCase() + z.name.slice(1), J = p[z.name], M = d[z.name] || "";
      let G = y;
      if (J) {
        const U = `${e}-${z.name}-error`;
        G = G ? `${G} ${U}` : U;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          $n,
          {
            htmlFor: O,
            className: "nhsuk-date-input__label",
            children: Z
          }
        ),
        /* @__PURE__ */ n.jsx(
          Ln,
          {
            id: O,
            name: Q,
            value: M,
            className: V("nhsuk-date-input__input", z.classes, {
              "nhsuk-input--error": J
            }),
            inputMode: z.inputmode,
            autoComplete: z.autocomplete,
            pattern: z.pattern,
            "aria-describedby": G || void 0,
            hasError: !!J,
            onChange: (U) => j(z.name, U.target.value),
            onBlur: () => P(z.name)
          }
        )
      ] }, z.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: H, children: o ? /* @__PURE__ */ n.jsx(
    An,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: y || void 0,
      children: K()
    }
  ) : K() });
}, Er = {
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
}, Lr = Za(Er), bs = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Er, ...t };
  return /* @__PURE__ */ n.jsx(Lr.Provider, { value: r, children: e });
}, xh = () => {
  const e = Ja(Lr);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function xs() {
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
function ys() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = xs(), document.head.appendChild(e);
}
const yh = ({ children: e, theme: t }) => (se(() => {
  ys();
}, []), /* @__PURE__ */ n.jsx(bs, { theme: t, children: e })), $r = ({
  mode: e = "form",
  action: t = "https://www.nhs.uk/search/",
  method: r = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: u = !1,
  callbacks: d = {},
  isLoading: m = !1,
  showResults: p = !1,
  results: v = [],
  formAttributes: R = {},
  inputAttributes: b = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: D = !1,
  debounceMs: B = 300,
  minQueryLength: I = 1
}) => {
  const [j, P] = ne(""), [T, $] = ne(!1), y = ae(void 0), x = ae(null), _ = ae(null), h = e === "controlled" && s !== void 0, H = h ? s : j, X = q((w) => {
    y.current && clearTimeout(y.current), y.current = setTimeout(() => {
      d.onChange && w.length >= I && d.onChange(w);
    }, B);
  }, [d.onChange, B, I]), K = q((w) => {
    const k = w.target.value;
    h || P(k), e !== "form" && X(k);
  }, [h, e, X]), z = q((w) => {
    const k = H.trim(), f = {
      query: k,
      timestamp: Date.now(),
      formData: new FormData(w.currentTarget)
    };
    e === "controlled" || e === "hybrid" && D ? (w.preventDefault(), d.onSearch && k.length >= I && d.onSearch(f)) : e === "hybrid" && d.onSearch && k.length >= I && d.onSearch(f);
  }, [e, H, d.onSearch, D, I]), O = q(() => {
    $(!0), d.onFocus?.();
  }, [d.onFocus]), Q = q(() => {
    $(!1), d.onBlur?.();
  }, [d.onBlur]), Z = q(() => {
    h || P(""), d.onClear?.(), _.current?.focus();
  }, [h, d.onClear]);
  se(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const J = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: V("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), M = () => /* @__PURE__ */ n.jsx(
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
  ), G = () => !H || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Z,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), U = () => !p || !v.length || !T ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((w) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: w.href ? /* @__PURE__ */ n.jsxs("a", { href: w.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: w.title }),
    w.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: w.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: w.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: w.title }),
        w.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: w.description })
      ]
    }
  ) }, w.id)) });
  return /* @__PURE__ */ n.jsxs("search", { className: V("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": T,
    "nhsuk-header__search--has-results": p && v.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: x,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: z,
        ...R,
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
                ref: _,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: H,
                onChange: K,
                onFocus: O,
                onBlur: Q,
                disabled: u || m,
                "aria-expanded": p && v.length > 0,
                "aria-haspopup": "listbox",
                ...b
              }
            ),
            G()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && H.length < I,
              ...C,
              children: [
                m ? M() : J(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    U()
  ] });
}, Ar = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const [m, p] = ne(!1), [v, R] = ne(!1), [b, C] = ne(i?.items?.length || 0), [D, B] = ne(!1), [I, j] = ne(!1), [P, T] = ne(!1), $ = ae(null), y = ae(null), x = ae(!1), _ = ae(null), h = ae([]), H = ae(null);
  se(() => {
    typeof window > "u" || (T(!0), B(!0));
  }, []), se(() => {
    if (!P || !i?.items?.length) return;
    h.current = i.items;
    const g = setTimeout(() => {
      $.current && y.current && Z();
    }, 100);
    return () => clearTimeout(g);
  }, [P, i?.items]);
  const X = r.href && !t.href || r.href && r.href === t.href, K = X ? r.href : t.href, z = V(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), O = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), Q = V(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), Z = q(() => {
    if (!(typeof window > "u" || x.current) && !(!$.current || !y.current || !h.current.length)) {
      x.current = !0;
      try {
        const g = y.current, F = $.current, L = g.offsetWidth, N = F.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (N.length === 0 || L === 0) {
          x.current = !1;
          return;
        }
        const A = window.innerWidth < 768, E = A ? 16 : 32, S = E * 2, te = L - S, Y = Array.from(N).map((oe) => oe.offsetWidth), W = Y.reduce((oe, ue) => oe + ue, 0), ee = A ? 80 : 100, le = H.current !== null && H.current !== A;
        if (H.current = A, console.log("Overflow check:", {
          containerWidth: L,
          availableContainerWidth: te,
          totalGutters: S,
          gutterSize: E,
          totalWidth: W,
          mobile: A,
          breakpointChanged: le,
          itemCount: Y.length,
          measurements: Y
        }), W <= te)
          R(!1), C(h.current.length);
        else {
          const oe = te - ee;
          let ue = 0, ye = 0;
          for (let ge = 0; ge < Y.length; ge++) {
            const ke = ye + Y[ge];
            if (ke <= oe)
              ye = ke, ue = ge + 1;
            else
              break;
          }
          ue = Math.max(1, ue);
          const Je = ue < Y.length;
          R(Je), C(ue);
        }
        x.current = !1;
      } catch (g) {
        console.error("Overflow detection error:", g), R(!1), C(h.current.length), x.current = !1;
      }
    }
  }, []);
  se(() => {
    if (typeof document > "u") return;
    const g = (F) => {
      F.key === "Escape" && m && p(!1);
    };
    if (m)
      return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [m]), se(() => {
    if (typeof window > "u" || !P) return;
    const g = () => {
      m && (p(!1), j(!1)), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        h.current.length > 0 && Z();
      }, 250);
    };
    let F = null, L = null;
    return window.matchMedia && (F = window.matchMedia("(max-width: 767px)"), L = () => {
      console.log("Breakpoint changed:", F?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => Z(), 50);
    }, F.addEventListener ? F.addEventListener("change", L) : F.addListener(L)), window.addEventListener("resize", g), () => {
      window.removeEventListener("resize", g), F && L && (F.removeEventListener ? F.removeEventListener("change", L) : F.removeListener(L)), _.current && clearTimeout(_.current);
    };
  }, [P, m, Z]), se(() => {
    if (typeof document > "u") return;
    const g = (F) => {
      const L = F.target, N = $.current?.contains(L);
      m && !N && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", g), () => document.removeEventListener("mousedown", g);
  }, [m]);
  const J = (g) => {
    g && (g.preventDefault(), g.stopPropagation());
    const F = !m;
    p(F), F ? setTimeout(() => {
      j(!0);
    }, 50) : j(!1);
  }, M = () => /* @__PURE__ */ n.jsxs(
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
  ), G = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : M(), U = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, w = (g, F) => g ? F ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: F, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, k = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), f = (g) => {
    if (g.active || g.current) {
      const F = g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: F });
    }
    return g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
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
        /* @__PURE__ */ n.jsxs("div", { className: O, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            K ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: K, children: [
              G(),
              U(),
              X && w(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              G(),
              U(),
              X && w(r.text)
            ] }),
            r.text && !X && w(r.text, r.href)
          ] }),
          s && /* @__PURE__ */ n.jsx($r, { ...s }),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: Q,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: V(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !D && P,
                    "nhsuk-header__navigation-container--ssr": !P
                  },
                  l
                ),
                ref: y,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: $, children: [
                  (P ? i.items.slice(0, b) : i.items).map((g, F) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: V(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": g.active || g.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !P && F >= 4
                          // Mark items that would be hidden on client
                        },
                        g.className
                      ),
                      ...g.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: g.href,
                          ...g.active || g.current ? {
                            "aria-current": g.current ? "page" : "true"
                          } : {},
                          children: f(g)
                        }
                      )
                    },
                    F
                  )),
                  P && v && b < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: J,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            k()
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
        P && i && i.items && i.items.length > 0 && m && I && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !I,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(b).map((g, F) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: V(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": g.active || g.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: g.href,
                    ...g.active || g.current ? {
                      "aria-current": g.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      p(!1), j(!1);
                    },
                    children: f(g)
                  }
                )
              },
              `overflow-${b + F}`
            )) })
          }
        )
      ]
    }
  );
}, _h = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  ...d
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, v = V(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), R = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), b = V(
    "nhsuk-header__navigation",
    i?.className
  ), C = () => /* @__PURE__ */ n.jsxs(
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
  ), D = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : C(), B = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, I = (T, $) => T ? $ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: $, children: T }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: T }) : null, j = () => !i?.items || i.items.length === 0 ? null : i.items.map((T, $) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: T.href,
          ...T.attributes || {},
          children: T.text
        }
      )
    },
    T.href || $
  )), P = () => s ? /* @__PURE__ */ n.jsx($r, { ...s }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: v,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: R, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              D(),
              B(),
              m && I(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              D(),
              B(),
              m && I(r.text)
            ] }),
            r.text && !m && I(r.text, r.href)
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
            En,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: b,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: j()
              }
            ) })
          }
        )
      ]
    }
  );
}, kh = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: u = {},
  maxVisibleItems: d = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const p = r.href && !t.href || r.href && r.href === t.href, v = p ? r.href : t.href, R = V(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), b = V(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), C = V(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), D = () => /* @__PURE__ */ n.jsxs(
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
  ), B = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : D(), I = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, j = (T, $) => T ? $ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: $, children: T }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: T }) : null, P = (T) => {
    if (T.active || T.current) {
      const $ = T.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: $ });
    }
    return T.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: T.html } }) : T.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: R,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: b, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            v ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: v, children: [
              B(),
              I(),
              p && j(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              B(),
              I(),
              p && j(r.text)
            ] }),
            r.text && !p && j(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            En,
            {
              ...o,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: C,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: V(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((T, $) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: V(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": T.active || T.current
                        },
                        T.className
                      ),
                      ...T.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: T.href,
                          ...T.active || T.current ? {
                            "aria-current": T.current ? "page" : "true"
                          } : {},
                          children: P(T)
                        }
                      )
                    },
                    $
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((T, $) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: V(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": T.active || T.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: T.href,
                            ...T.active || T.current ? {
                              "aria-current": T.current ? "page" : "true"
                            } : {},
                            children: P(T)
                          }
                        )
                      },
                      `overflow-${d + $}`
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
}, _s = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...u
}) => {
  const d = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-hero__heading",
    r,
    !c && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), v = c || e || a || s, R = () => {
    if (!e) return null;
    const b = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...b, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...b, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...b, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...b, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...b, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...b, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...b, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...u,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          R(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && v && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          R(),
          c || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
_s.displayName = "Hero";
const Hr = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {}
}) => {
  const c = (d, m = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: V("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ n.jsxs("div", { className: V("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: V("nhsuk-footer", e), children: u ? (
        // Multi-column layout
        /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((d) => c(d)) }),
          r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((d) => c(d)) }),
          a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((d) => c(d)) }),
          s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((d) => c(d)) })
        ] })
      ) : (
        // Single column layout (default)
        /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
          t.map((d) => c(d, !0)),
          (r || []).map((d) => c(d, !0)),
          (a || []).map((d) => c(d, !0)),
          (s || []).map((d) => c(d, !0))
        ] })
      ) }),
      !u && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
    ] }),
    u && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function ft(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function ks(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Pn(e) {
  let t, r, a;
  e.length !== 2 ? (t = ft, r = (l, c) => ft(e(l), c), a = (l, c) => e(l) - c) : (t = e === ft || e === ks ? e : vs, r = e, a = e);
  function s(l, c, u = 0, d = l.length) {
    if (u < d) {
      if (t(c, c) !== 0) return d;
      do {
        const m = u + d >>> 1;
        r(l[m], c) < 0 ? u = m + 1 : d = m;
      } while (u < d);
    }
    return u;
  }
  function o(l, c, u = 0, d = l.length) {
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
    const m = s(l, c, u, d - 1);
    return m > u && a(l[m - 1], c) > -a(l[m], c) ? m - 1 : m;
  }
  return { left: s, center: i, right: o };
}
function vs() {
  return 0;
}
function ws(e) {
  return e === null ? NaN : +e;
}
const Ss = Pn(ft), Cs = Ss.right;
Pn(ws).center;
const js = Math.sqrt(50), Ns = Math.sqrt(10), Ts = Math.sqrt(2);
function Pr(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= js ? 10 : o >= Ns ? 5 : o >= Ts ? 2 : 1;
  let l, c, u;
  return s < 0 ? (u = Math.pow(10, -s) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, s) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? Pr(e, t, r * 2) : [l, c, u];
}
function nr(e, t, r) {
  return t = +t, e = +e, r = +r, Pr(e, t, r)[2];
}
function rr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? nr(t, e, r) : nr(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function Ds(e, t) {
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
function zn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function zr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function it() {
}
var at = 0.7, pt = 1 / at, Ve = "\\s*([+-]?\\d+)\\s*", st = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", _e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Bs = /^#([0-9a-f]{3,8})$/, Fs = new RegExp(`^rgb\\(${Ve},${Ve},${Ve}\\)$`), Rs = new RegExp(`^rgb\\(${_e},${_e},${_e}\\)$`), Is = new RegExp(`^rgba\\(${Ve},${Ve},${Ve},${st}\\)$`), Ms = new RegExp(`^rgba\\(${_e},${_e},${_e},${st}\\)$`), Es = new RegExp(`^hsl\\(${st},${_e},${_e}\\)$`), Ls = new RegExp(`^hsla\\(${st},${_e},${_e},${st}\\)$`), ar = {
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
zn(it, ot, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sr,
  // Deprecated! Use color.formatHex.
  formatHex: sr,
  formatHex8: $s,
  formatHsl: As,
  formatRgb: or,
  toString: or
});
function sr() {
  return this.rgb().formatHex();
}
function $s() {
  return this.rgb().formatHex8();
}
function As() {
  return Wr(this).formatHsl();
}
function or() {
  return this.rgb().formatRgb();
}
function ot(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Bs.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ir(t) : r === 3 ? new fe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? dt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? dt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Fs.exec(e)) ? new fe(t[1], t[2], t[3], 1) : (t = Rs.exec(e)) ? new fe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Is.exec(e)) ? dt(t[1], t[2], t[3], t[4]) : (t = Ms.exec(e)) ? dt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Es.exec(e)) ? dr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Ls.exec(e)) ? dr(t[1], t[2] / 100, t[3] / 100, t[4]) : ar.hasOwnProperty(e) ? ir(ar[e]) : e === "transparent" ? new fe(NaN, NaN, NaN, 0) : null;
}
function ir(e) {
  return new fe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function dt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new fe(e, t, r, a);
}
function Hs(e) {
  return e instanceof it || (e = ot(e)), e ? (e = e.rgb(), new fe(e.r, e.g, e.b, e.opacity)) : new fe();
}
function ln(e, t, r, a) {
  return arguments.length === 1 ? Hs(e) : new fe(e, t, r, a ?? 1);
}
function fe(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
zn(fe, ln, zr(it, {
  brighter(e) {
    return e = e == null ? pt : Math.pow(pt, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? at : Math.pow(at, e), new fe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new fe(Pe(this.r), Pe(this.g), Pe(this.b), gt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: lr,
  // Deprecated! Use color.formatHex.
  formatHex: lr,
  formatHex8: Ps,
  formatRgb: cr,
  toString: cr
}));
function lr() {
  return `#${He(this.r)}${He(this.g)}${He(this.b)}`;
}
function Ps() {
  return `#${He(this.r)}${He(this.g)}${He(this.b)}${He((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function cr() {
  const e = gt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Pe(this.r)}, ${Pe(this.g)}, ${Pe(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function gt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Pe(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function He(e) {
  return e = Pe(e), (e < 16 ? "0" : "") + e.toString(16);
}
function dr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new xe(e, t, r, a);
}
function Wr(e) {
  if (e instanceof xe) return new xe(e.h, e.s, e.l, e.opacity);
  if (e instanceof it || (e = ot(e)), !e) return new xe();
  if (e instanceof xe) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, c = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? o + s : 2 - o - s, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new xe(i, l, c, e.opacity);
}
function zs(e, t, r, a) {
  return arguments.length === 1 ? Wr(e) : new xe(e, t, r, a ?? 1);
}
function xe(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
zn(xe, zs, zr(it, {
  brighter(e) {
    return e = e == null ? pt : Math.pow(pt, e), new xe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? at : Math.pow(at, e), new xe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new fe(
      Qt(e >= 240 ? e - 240 : e + 120, s, a),
      Qt(e, s, a),
      Qt(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new xe(ur(this.h), ut(this.s), ut(this.l), gt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = gt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ur(this.h)}, ${ut(this.s) * 100}%, ${ut(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ur(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ut(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qt(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Wn = (e) => () => e;
function Ws(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Os(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Us(e) {
  return (e = +e) == 1 ? Or : function(t, r) {
    return r - t ? Os(t, r, e) : Wn(isNaN(t) ? r : t);
  };
}
function Or(e, t) {
  var r = t - e;
  return r ? Ws(e, r) : Wn(isNaN(e) ? t : e);
}
const hr = function e(t) {
  var r = Us(t);
  function a(s, o) {
    var i = r((s = ln(s)).r, (o = ln(o)).r), l = r(s.g, o.g), c = r(s.b, o.b), u = Or(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = c(d), s.opacity = u(d), s + "";
    };
  }
  return a.gamma = e, a;
}(1);
function Gs(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function Ys(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Vs(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = On(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function qs(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function bt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Ks(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = On(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var cn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, en = new RegExp(cn.source, "g");
function Zs(e) {
  return function() {
    return e;
  };
}
function Js(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Xs(e, t) {
  var r = cn.lastIndex = en.lastIndex = 0, a, s, o, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = cn.exec(e)) && (s = en.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, c.push({ i, x: bt(a, s) })), r = en.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? c[0] ? Js(c[0].x) : Zs(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
    return l.join("");
  });
}
function On(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Wn(t) : (r === "number" ? bt : r === "string" ? (a = ot(t)) ? (t = a, hr) : Xs : t instanceof ot ? hr : t instanceof Date ? qs : Ys(t) ? Gs : Array.isArray(t) ? Vs : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Ks : bt)(e, t);
}
function Qs(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function eo(e) {
  return function() {
    return e;
  };
}
function to(e) {
  return +e;
}
var fr = [0, 1];
function Ge(e) {
  return e;
}
function dn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : eo(isNaN(t) ? NaN : 0.5);
}
function no(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function ro(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = dn(s, a), o = r(i, o)) : (a = dn(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function ao(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = dn(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = Cs(e, l, 1, a) - 1;
    return o[c](s[c](l));
  };
}
function so(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function oo() {
  var e = fr, t = fr, r = On, a, s, o, i = Ge, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== Ge && (i = no(e[0], e[p - 1])), l = p > 2 ? ao : ro, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? o : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(s((u || (u = l(t, e.map(a), bt)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, to), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = Qs, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : Ge, d()) : i !== Ge;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (o = p, m) : o;
  }, function(p, v) {
    return a = p, s = v, d();
  };
}
function io() {
  return oo()(Ge, Ge);
}
function lo(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const tn = /* @__PURE__ */ new Date(), nn = /* @__PURE__ */ new Date();
function ce(e, t, r, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const c = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return c;
    let u;
    do
      c.push(u = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (u < o && o < i);
    return c;
  }, s.filter = (o) => ce((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (tn.setTime(+o), nn.setTime(+i), e(tn), e(nn), Math.floor(r(tn, nn))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const xt = ce(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
xt.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ce((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : xt);
xt.range;
const Re = 1e3, pe = Re * 60, Ie = pe * 60, Le = Ie * 24, Un = Le * 7, mr = Le * 30, rn = Le * 365, Ye = ce((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Re);
}, (e, t) => (t - e) / Re, (e) => e.getUTCSeconds());
Ye.range;
const Gn = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re);
}, (e, t) => {
  e.setTime(+e + t * pe);
}, (e, t) => (t - e) / pe, (e) => e.getMinutes());
Gn.range;
const co = ce((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * pe);
}, (e, t) => (t - e) / pe, (e) => e.getUTCMinutes());
co.range;
const Yn = ce((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Re - e.getMinutes() * pe);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getHours());
Yn.range;
const uo = ce((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ie);
}, (e, t) => (t - e) / Ie, (e) => e.getUTCHours());
uo.range;
const lt = ce(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * pe) / Le,
  (e) => e.getDate() - 1
);
lt.range;
const Vn = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Le, (e) => e.getUTCDate() - 1);
Vn.range;
const ho = ce((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Le, (e) => Math.floor(e / Le));
ho.range;
function We(e) {
  return ce((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * pe) / Un);
}
const Kt = We(0), yt = We(1), fo = We(2), mo = We(3), qe = We(4), po = We(5), go = We(6);
Kt.range;
yt.range;
fo.range;
mo.range;
qe.range;
po.range;
go.range;
function Oe(e) {
  return ce((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Un);
}
const Ur = Oe(0), _t = Oe(1), bo = Oe(2), xo = Oe(3), Ke = Oe(4), yo = Oe(5), _o = Oe(6);
Ur.range;
_t.range;
bo.range;
xo.range;
Ke.range;
yo.range;
_o.range;
const qn = ce((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
qn.range;
const ko = ce((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
ko.range;
const $e = ce((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
$e.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
$e.range;
const ze = ce((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
ze.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ce((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
ze.range;
function vo(e, t, r, a, s, o) {
  const i = [
    [Ye, 1, Re],
    [Ye, 5, 5 * Re],
    [Ye, 15, 15 * Re],
    [Ye, 30, 30 * Re],
    [o, 1, pe],
    [o, 5, 5 * pe],
    [o, 15, 15 * pe],
    [o, 30, 30 * pe],
    [s, 1, Ie],
    [s, 3, 3 * Ie],
    [s, 6, 6 * Ie],
    [s, 12, 12 * Ie],
    [a, 1, Le],
    [a, 2, 2 * Le],
    [r, 1, Un],
    [t, 1, mr],
    [t, 3, 3 * mr],
    [e, 1, rn]
  ];
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const v = m && typeof m.range == "function" ? m : c(u, d, m), R = v ? v.range(u, +d + 1) : [];
    return p ? R.reverse() : R;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, v = Pn(([, , C]) => C).right(i, p);
    if (v === i.length) return e.every(rr(u / rn, d / rn, m));
    if (v === 0) return xt.every(Math.max(rr(u, d, m), 1));
    const [R, b] = i[p / i[v - 1][2] < i[v][2] / p ? v - 1 : v];
    return R.every(b);
  }
  return [l, c];
}
const [wo, So] = vo($e, qn, Kt, lt, Yn, Gn);
function an(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function sn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function tt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Co(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = nt(s), d = rt(s), m = nt(o), p = rt(o), v = nt(i), R = rt(i), b = nt(l), C = rt(l), D = nt(c), B = rt(c), I = {
    a: Q,
    A: Z,
    b: J,
    B: M,
    c: null,
    d: _r,
    e: _r,
    f: qo,
    g: ai,
    G: oi,
    H: Go,
    I: Yo,
    j: Vo,
    L: Gr,
    m: Ko,
    M: Zo,
    p: G,
    q: U,
    Q: wr,
    s: Sr,
    S: Jo,
    u: Xo,
    U: Qo,
    V: ei,
    w: ti,
    W: ni,
    x: null,
    X: null,
    y: ri,
    Y: si,
    Z: ii,
    "%": vr
  }, j = {
    a: w,
    A: k,
    b: f,
    B: g,
    c: null,
    d: kr,
    e: kr,
    f: ui,
    g: ki,
    G: wi,
    H: li,
    I: ci,
    j: di,
    L: Vr,
    m: hi,
    M: fi,
    p: F,
    q: L,
    Q: wr,
    s: Sr,
    S: mi,
    u: pi,
    U: gi,
    V: bi,
    w: xi,
    W: yi,
    x: null,
    X: null,
    y: _i,
    Y: vi,
    Z: Si,
    "%": vr
  }, P = {
    a: _,
    A: h,
    b: H,
    B: X,
    c: K,
    d: xr,
    e: xr,
    f: zo,
    g: br,
    G: gr,
    H: yr,
    I: yr,
    j: $o,
    L: Po,
    m: Lo,
    M: Ao,
    p: x,
    q: Eo,
    Q: Oo,
    s: Uo,
    S: Ho,
    u: Bo,
    U: Fo,
    V: Ro,
    w: Do,
    W: Io,
    x: z,
    X: O,
    y: br,
    Y: gr,
    Z: Mo,
    "%": Wo
  };
  I.x = T(r, I), I.X = T(a, I), I.c = T(t, I), j.x = T(r, j), j.X = T(a, j), j.c = T(t, j);
  function T(N, A) {
    return function(E) {
      var S = [], te = -1, Y = 0, W = N.length, ee, le, oe;
      for (E instanceof Date || (E = /* @__PURE__ */ new Date(+E)); ++te < W; )
        N.charCodeAt(te) === 37 && (S.push(N.slice(Y, te)), (le = pr[ee = N.charAt(++te)]) != null ? ee = N.charAt(++te) : le = ee === "e" ? " " : "0", (oe = A[ee]) && (ee = oe(E, le)), S.push(ee), Y = te + 1);
      return S.push(N.slice(Y, te)), S.join("");
    };
  }
  function $(N, A) {
    return function(E) {
      var S = tt(1900, void 0, 1), te = y(S, N, E += "", 0), Y, W;
      if (te != E.length) return null;
      if ("Q" in S) return new Date(S.Q);
      if ("s" in S) return new Date(S.s * 1e3 + ("L" in S ? S.L : 0));
      if (A && !("Z" in S) && (S.Z = 0), "p" in S && (S.H = S.H % 12 + S.p * 12), S.m === void 0 && (S.m = "q" in S ? S.q : 0), "V" in S) {
        if (S.V < 1 || S.V > 53) return null;
        "w" in S || (S.w = 1), "Z" in S ? (Y = sn(tt(S.y, 0, 1)), W = Y.getUTCDay(), Y = W > 4 || W === 0 ? _t.ceil(Y) : _t(Y), Y = Vn.offset(Y, (S.V - 1) * 7), S.y = Y.getUTCFullYear(), S.m = Y.getUTCMonth(), S.d = Y.getUTCDate() + (S.w + 6) % 7) : (Y = an(tt(S.y, 0, 1)), W = Y.getDay(), Y = W > 4 || W === 0 ? yt.ceil(Y) : yt(Y), Y = lt.offset(Y, (S.V - 1) * 7), S.y = Y.getFullYear(), S.m = Y.getMonth(), S.d = Y.getDate() + (S.w + 6) % 7);
      } else ("W" in S || "U" in S) && ("w" in S || (S.w = "u" in S ? S.u % 7 : "W" in S ? 1 : 0), W = "Z" in S ? sn(tt(S.y, 0, 1)).getUTCDay() : an(tt(S.y, 0, 1)).getDay(), S.m = 0, S.d = "W" in S ? (S.w + 6) % 7 + S.W * 7 - (W + 5) % 7 : S.w + S.U * 7 - (W + 6) % 7);
      return "Z" in S ? (S.H += S.Z / 100 | 0, S.M += S.Z % 100, sn(S)) : an(S);
    };
  }
  function y(N, A, E, S) {
    for (var te = 0, Y = A.length, W = E.length, ee, le; te < Y; ) {
      if (S >= W) return -1;
      if (ee = A.charCodeAt(te++), ee === 37) {
        if (ee = A.charAt(te++), le = P[ee in pr ? A.charAt(te++) : ee], !le || (S = le(N, E, S)) < 0) return -1;
      } else if (ee != E.charCodeAt(S++))
        return -1;
    }
    return S;
  }
  function x(N, A, E) {
    var S = u.exec(A.slice(E));
    return S ? (N.p = d.get(S[0].toLowerCase()), E + S[0].length) : -1;
  }
  function _(N, A, E) {
    var S = v.exec(A.slice(E));
    return S ? (N.w = R.get(S[0].toLowerCase()), E + S[0].length) : -1;
  }
  function h(N, A, E) {
    var S = m.exec(A.slice(E));
    return S ? (N.w = p.get(S[0].toLowerCase()), E + S[0].length) : -1;
  }
  function H(N, A, E) {
    var S = D.exec(A.slice(E));
    return S ? (N.m = B.get(S[0].toLowerCase()), E + S[0].length) : -1;
  }
  function X(N, A, E) {
    var S = b.exec(A.slice(E));
    return S ? (N.m = C.get(S[0].toLowerCase()), E + S[0].length) : -1;
  }
  function K(N, A, E) {
    return y(N, t, A, E);
  }
  function z(N, A, E) {
    return y(N, r, A, E);
  }
  function O(N, A, E) {
    return y(N, a, A, E);
  }
  function Q(N) {
    return i[N.getDay()];
  }
  function Z(N) {
    return o[N.getDay()];
  }
  function J(N) {
    return c[N.getMonth()];
  }
  function M(N) {
    return l[N.getMonth()];
  }
  function G(N) {
    return s[+(N.getHours() >= 12)];
  }
  function U(N) {
    return 1 + ~~(N.getMonth() / 3);
  }
  function w(N) {
    return i[N.getUTCDay()];
  }
  function k(N) {
    return o[N.getUTCDay()];
  }
  function f(N) {
    return c[N.getUTCMonth()];
  }
  function g(N) {
    return l[N.getUTCMonth()];
  }
  function F(N) {
    return s[+(N.getUTCHours() >= 12)];
  }
  function L(N) {
    return 1 + ~~(N.getUTCMonth() / 3);
  }
  return {
    format: function(N) {
      var A = T(N += "", I);
      return A.toString = function() {
        return N;
      }, A;
    },
    parse: function(N) {
      var A = $(N += "", !1);
      return A.toString = function() {
        return N;
      }, A;
    },
    utcFormat: function(N) {
      var A = T(N += "", j);
      return A.toString = function() {
        return N;
      }, A;
    },
    utcParse: function(N) {
      var A = $(N += "", !0);
      return A.toString = function() {
        return N;
      }, A;
    }
  };
}
var pr = { "-": "", _: " ", 0: "0" }, de = /^\s*\d+/, jo = /^%/, No = /[\\^$*+?|[\]().{}]/g;
function re(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function To(e) {
  return e.replace(No, "\\$&");
}
function nt(e) {
  return new RegExp("^(?:" + e.map(To).join("|") + ")", "i");
}
function rt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Do(e, t, r) {
  var a = de.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Bo(e, t, r) {
  var a = de.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Fo(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Ro(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Io(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function gr(e, t, r) {
  var a = de.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function br(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Mo(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Eo(e, t, r) {
  var a = de.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Lo(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function xr(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function $o(e, t, r) {
  var a = de.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function yr(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Ao(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Ho(e, t, r) {
  var a = de.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Po(e, t, r) {
  var a = de.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function zo(e, t, r) {
  var a = de.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Wo(e, t, r) {
  var a = jo.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Oo(e, t, r) {
  var a = de.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Uo(e, t, r) {
  var a = de.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function _r(e, t) {
  return re(e.getDate(), t, 2);
}
function Go(e, t) {
  return re(e.getHours(), t, 2);
}
function Yo(e, t) {
  return re(e.getHours() % 12 || 12, t, 2);
}
function Vo(e, t) {
  return re(1 + lt.count($e(e), e), t, 3);
}
function Gr(e, t) {
  return re(e.getMilliseconds(), t, 3);
}
function qo(e, t) {
  return Gr(e, t) + "000";
}
function Ko(e, t) {
  return re(e.getMonth() + 1, t, 2);
}
function Zo(e, t) {
  return re(e.getMinutes(), t, 2);
}
function Jo(e, t) {
  return re(e.getSeconds(), t, 2);
}
function Xo(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Qo(e, t) {
  return re(Kt.count($e(e) - 1, e), t, 2);
}
function Yr(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? qe(e) : qe.ceil(e);
}
function ei(e, t) {
  return e = Yr(e), re(qe.count($e(e), e) + ($e(e).getDay() === 4), t, 2);
}
function ti(e) {
  return e.getDay();
}
function ni(e, t) {
  return re(yt.count($e(e) - 1, e), t, 2);
}
function ri(e, t) {
  return re(e.getFullYear() % 100, t, 2);
}
function ai(e, t) {
  return e = Yr(e), re(e.getFullYear() % 100, t, 2);
}
function si(e, t) {
  return re(e.getFullYear() % 1e4, t, 4);
}
function oi(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? qe(e) : qe.ceil(e), re(e.getFullYear() % 1e4, t, 4);
}
function ii(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + re(t / 60 | 0, "0", 2) + re(t % 60, "0", 2);
}
function kr(e, t) {
  return re(e.getUTCDate(), t, 2);
}
function li(e, t) {
  return re(e.getUTCHours(), t, 2);
}
function ci(e, t) {
  return re(e.getUTCHours() % 12 || 12, t, 2);
}
function di(e, t) {
  return re(1 + Vn.count(ze(e), e), t, 3);
}
function Vr(e, t) {
  return re(e.getUTCMilliseconds(), t, 3);
}
function ui(e, t) {
  return Vr(e, t) + "000";
}
function hi(e, t) {
  return re(e.getUTCMonth() + 1, t, 2);
}
function fi(e, t) {
  return re(e.getUTCMinutes(), t, 2);
}
function mi(e, t) {
  return re(e.getUTCSeconds(), t, 2);
}
function pi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function gi(e, t) {
  return re(Ur.count(ze(e) - 1, e), t, 2);
}
function qr(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ke(e) : Ke.ceil(e);
}
function bi(e, t) {
  return e = qr(e), re(Ke.count(ze(e), e) + (ze(e).getUTCDay() === 4), t, 2);
}
function xi(e) {
  return e.getUTCDay();
}
function yi(e, t) {
  return re(_t.count(ze(e) - 1, e), t, 2);
}
function _i(e, t) {
  return re(e.getUTCFullYear() % 100, t, 2);
}
function ki(e, t) {
  return e = qr(e), re(e.getUTCFullYear() % 100, t, 2);
}
function vi(e, t) {
  return re(e.getUTCFullYear() % 1e4, t, 4);
}
function wi(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ke(e) : Ke.ceil(e), re(e.getUTCFullYear() % 1e4, t, 4);
}
function Si() {
  return "+0000";
}
function vr() {
  return "%";
}
function wr(e) {
  return +e;
}
function Sr(e) {
  return Math.floor(+e / 1e3);
}
var Ue, Kr;
Ci({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Ci(e) {
  return Ue = Co(e), Kr = Ue.format, Ue.parse, Ue.utcFormat, Ue.utcParse, Ue;
}
function ji(e) {
  return new Date(e);
}
function Ni(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Zr(e, t, r, a, s, o, i, l, c, u) {
  var d = io(), m = d.invert, p = d.domain, v = u(".%L"), R = u(":%S"), b = u("%I:%M"), C = u("%I %p"), D = u("%a %d"), B = u("%b %d"), I = u("%B"), j = u("%Y");
  function P(T) {
    return (c(T) < T ? v : l(T) < T ? R : i(T) < T ? b : o(T) < T ? C : a(T) < T ? s(T) < T ? D : B : r(T) < T ? I : j)(T);
  }
  return d.invert = function(T) {
    return new Date(m(T));
  }, d.domain = function(T) {
    return arguments.length ? p(Array.from(T, Ni)) : p().map(ji);
  }, d.ticks = function(T) {
    var $ = p();
    return e($[0], $[$.length - 1], T ?? 10);
  }, d.tickFormat = function(T, $) {
    return $ == null ? P : u($);
  }, d.nice = function(T) {
    var $ = p();
    return (!T || typeof T.range != "function") && (T = t($[0], $[$.length - 1], T ?? 10)), T ? p(lo($, T)) : d;
  }, d.copy = function() {
    return so(d, Zr(e, t, r, a, s, o, i, l, c, u));
  }, d;
}
function Ti() {
  return Ds.apply(Zr(wo, So, $e, qn, Kt, lt, Yn, Gn, Ye, Kr).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Di({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const u = ae(null), [d, m] = ne(!1), [p, v] = ne(!1), R = t(e.start), b = t(e.end), C = Math.max(b - R, 20), D = () => {
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
  }, B = e.progress ? C * e.progress / 100 : 0, I = () => {
    r?.(e);
  }, j = () => {
    a?.(e);
  }, P = (H) => {
    H.key === "Enter" ? (H.preventDefault(), I()) : H.key === " " && (H.preventDefault(), j());
  }, T = () => {
    m(!0);
  }, $ = () => {
    m(!1);
  }, y = () => {
    v(!0), l?.();
  }, x = () => {
    v(!1);
  }, _ = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (p || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), h = {
    "--task-left": `${R}px`,
    "--task-width": `${C}px`,
    "--task-color": D(),
    left: `${R}px`,
    width: `${C}px`,
    backgroundColor: D()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": o,
      className: _,
      style: h,
      onClick: I,
      onDoubleClick: j,
      onKeyDown: P,
      onMouseDown: T,
      onMouseUp: $,
      onFocus: y,
      onBlur: x,
      "aria-label": c || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${B}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Bi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let v = e.getTime(); v <= t.getTime(); v += 864e5)
    a.push(new Date(v));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = ne(-1), c = ae(null), u = (v) => {
    if (v.key === "ArrowLeft") {
      v.preventDefault();
      const R = Math.max(0, i === -1 ? 0 : i - 1);
      l(R), p(R);
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const R = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(R), p(R);
    } else if (v.key === "ArrowDown") {
      v.preventDefault();
      const R = document.querySelector(".gantt-row .timeline-container");
      R && R.focus();
    } else if (v.key === "Home")
      v.preventDefault(), l(0), p(0);
    else if (v.key === "End") {
      v.preventDefault();
      const R = a.length - 1;
      l(R), p(R);
    }
  }, d = (v) => {
    if (v.key === "ArrowDown") {
      v.preventDefault();
      const R = document.querySelector(".gantt-row .resource-label");
      R && R.focus();
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const R = c.current;
      R && R.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (v) => {
    const R = c.current?.querySelector(`[data-date-index="${v}"]`);
    R && R.focus();
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
            children: a.map((v, R) => {
              const b = v.getTime() === o.getTime(), C = i === R;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": R,
                  className: `date-column ${b ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
                  role: "button",
                  "aria-label": `${v.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${b ? " (Today)" : ""}`,
                  onFocus: () => l(R),
                  onKeyDown: u,
                  children: v.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                R
              );
            })
          }
        )
      ]
    }
  );
}
function Fi({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, c] = ne(!1), [u, d] = ne(-1), m = ae(null);
  se(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const p = (b) => {
    if (b.key === "ArrowLeft" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (b.key === "ArrowRight" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (b.key) {
        case "ArrowUp":
          b.preventDefault(), o === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          b.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          b.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (b.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (b.key) {
      case "ArrowLeft":
        b.preventDefault();
        const C = Math.max(0, u - 1);
        d(C), m.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        b.preventDefault();
        const B = Math.min(t.length - 1, u + 1);
        d(B), m.current?.querySelector(`[data-task-index="${B}"]`)?.focus();
        break;
      case "Enter":
        b.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        b.preventDefault(), u >= 0 && s?.(t[u]);
        break;
      case "Escape":
        b.preventDefault(), c(!1), d(-1), m.current?.focus();
        break;
    }
  }, v = (b) => {
    switch (b.key) {
      case "ArrowUp":
        b.preventDefault(), o === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        b.preventDefault(), document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        b.preventDefault(), m.current?.focus();
        break;
    }
  }, R = (b) => {
    l && d(b);
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": o + 2,
      children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "resource-label",
            role: "gridcell",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": `Resource: ${e.label}`,
            onKeyDown: v,
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
            children: t.map((b, C) => /* @__PURE__ */ n.jsx(
              Di,
              {
                task: b,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && u === C,
                taskIndex: C,
                tabIndex: l && u === C ? 0 : -1,
                onFocus: () => R(C)
              },
              b.id
            ))
          }
        )
      ]
    }
  );
}
function vh({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = ae(null), [l, c] = ne(800), u = ie(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const b = new Date(r);
    return isNaN(b.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : b;
  }, [r]), d = ie(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const b = new Date(a);
    return isNaN(b.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : b;
  }, [a]), m = ie(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  se(() => {
    if (!i.current) return;
    const b = new ResizeObserver((C) => {
      const D = C[0];
      D && c(Math.max(D.contentRect.width - 220, 400));
    });
    return b.observe(i.current), () => b.disconnect();
  }, []);
  const p = ie(
    () => Ti().domain([u, d]).range([0, l]),
    [u, d, l]
  ), v = ie(() => {
    const b = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const D = b.get(C.resourceId) || [];
      D.push(C), b.set(C.resourceId, D);
    }), b;
  }, [t]), R = (b) => {
    if (b.target === b.currentTarget)
      switch (b.key) {
        case "ArrowDown":
          b.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
          break;
        case "Home":
          b.preventDefault();
          const D = i.current?.querySelector(".header-resource");
          D && D.focus();
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
      onKeyDown: R,
      children: [
        /* @__PURE__ */ n.jsx(Bi, { viewStart: u, viewEnd: d, dateCount: m }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (b) => {
              b.key === "ArrowLeft" && b.altKey ? (b.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : b.key === "ArrowRight" && b.altKey ? (b.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : b.key === "ArrowUp" && b.altKey ? (b.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : b.key === "ArrowDown" && b.altKey && (b.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((b, C) => /* @__PURE__ */ n.jsx(
              Fi,
              {
                resource: b,
                tasks: v.get(b.id) || [],
                scale: p,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: C,
                dateCount: m
              },
              b.id
            ))
          }
        )
      ]
    }
  );
}
const kt = ({
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
) }), Ri = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? be.Children.toArray(t).filter(
    (D) => be.isValidElement(D) && (D.type === kt || D.type?.displayName === "BreadcrumbItem")
  ).map((D) => ({
    text: typeof D.props.children == "string" ? D.props.children : String(D.props.children),
    href: D.props.href,
    active: D.props.active,
    attributes: D.props.attributes
  })) : [], u = () => t ? c() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const C = u();
    if (C && C.length > 0) {
      const D = C.slice().reverse().find((B) => B.href && !B.active);
      if (D)
        return { href: D.href, text: D.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), v = V(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), b = m && m.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: v,
      "aria-label": b,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          be.Children.map(t, (C, D) => be.isValidElement(C) && (C.type === kt || C.type?.displayName === "BreadcrumbItem") ? be.cloneElement(C, { key: D }) : null)
        ) : (
          // Render from items array
          m?.map((C, D) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: C.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...C.attributes || {},
              children: C.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: C.href,
              role: "link",
              ...C.attributes || {},
              children: C.text
            }
          ) }, D))
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
}, Ii = Ri;
Ii.Item = kt;
kt.displayName = "BreadcrumbItem";
const Jr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = ne(!1);
  se(() => {
    o(!0);
  }, []), se(() => {
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
  }, [s]);
  const i = V("nhsuk-skip-link", r);
  return /* @__PURE__ */ n.jsx(
    "a",
    {
      className: i,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": s ? "true" : "false",
      ...a,
      children: e
    }
  );
}, wh = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = V("nhsuk-pagination", s);
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...o,
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
}, Sh = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = V("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
      className: s,
      role: "navigation",
      "aria-label": r,
      ...a,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => o(i, l)) })
      ]
    }
  );
}, Xr = be.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
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
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), R = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), b = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const B = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: a,
        className: R,
        children: B()
      }
    );
  }, C = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, D = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          b(),
          C(),
          D()
        ] })
      ]
    }
  );
});
Xr.displayName = "Card";
const Ch = ({
  className: e,
  children: t,
  "data-testid": r,
  id: a
}) => {
  const s = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx(
    "ul",
    {
      className: s,
      "data-testid": r,
      id: a,
      children: t
    }
  );
}, jh = ({
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
}, Nh = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": u,
  id: d,
  "aria-label": m,
  "aria-labelledby": p,
  "aria-describedby": v
}) => {
  const R = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), b = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), C = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const B = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        B,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: a,
        className: b,
        children: I
      }
    );
  }, D = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: R,
      "data-testid": u,
      id: d,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: D() })
      ]
    }
  );
}, Mi = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const u = V(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Ee,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ee,
    {
      level: s,
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
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: u, id: e, ...c, children: [
    d(),
    m()
  ] });
}, Th = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = V("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Dh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = V(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, u) => /* @__PURE__ */ n.jsx(
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
            o(c),
            c.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    u
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...a, children: e.map((l, c) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Bh = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: u,
  tableClasses: d,
  classes: m,
  attributes: p,
  "data-testid": v
}) => {
  const R = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), b = V(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), C = V(m), D = (j, P) => {
    const T = V("nhsuk-table__header", {
      [`nhsuk-table__header--${j.format}`]: j.format
    }, j.classes), $ = {
      scope: "col",
      ...j.colspan && { colSpan: j.colspan },
      ...j.rowspan && { rowSpan: j.rowspan },
      ...o && { role: "columnheader" },
      ...j.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: T, ...$, children: j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text }, P);
  }, B = (j, P, T) => {
    const $ = s && T, y = V(
      $ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${$ ? "header" : "cell"}--${j.format}`]: j.format
      },
      j.classes
    ), x = {
      ...$ && { scope: "row" },
      ...j.colspan && { colSpan: j.colspan },
      ...j.rowspan && { rowSpan: j.rowspan },
      ...o && {
        role: $ ? "rowheader" : "cell",
        ...j.header && { "data-label": j.header }
      },
      ...j.attributes
    }, _ = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && j.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        j.header,
        " "
      ] }),
      j.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: j.html } }) : j.text
    ] }), h = $ ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: y, ...x, children: _ }, P);
  }, I = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: b,
      ...o && { role: "table" },
      ...p,
      ...v && { "data-testid": v },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: R, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: t.map((j, P) => D(j, P)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((j, P) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: j.map(
              (T, $) => B(T, $, $ === 0)
            )
          },
          P
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Mi, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ee, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    I()
  ] }) : C ? /* @__PURE__ */ n.jsx("div", { className: C, children: I() }) : I();
}, Fh = Ze(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: u,
  "data-testid": d,
  ...m
}, p) => {
  const v = r !== void 0, [R, b] = ne(() => t || e[0]?.id || ""), C = v ? r : R, D = ae(null), B = ae(/* @__PURE__ */ new Map()), I = q((_) => {
    v || b(_), a?.(_);
  }, [v, a]), j = q((_) => {
    s?.(_), l && I(_);
  }, [s, l, I]), P = q((_, h) => {
    const H = e.filter((z) => !z.disabled).map((z) => z.id), X = H.indexOf(h);
    let K = null;
    switch (_.key) {
      case "ArrowLeft":
        K = X > 0 ? X - 1 : H.length - 1;
        break;
      case "ArrowRight":
        K = X < H.length - 1 ? X + 1 : 0;
        break;
      case "Home":
        K = 0;
        break;
      case "End":
        K = H.length - 1;
        break;
      case "Escape":
        _.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (K !== null) {
      _.preventDefault();
      const z = H[K], O = B.current.get(z);
      O && (O.focus(), j(z));
    }
  }, [e, j, i]), T = q((_, h) => {
    h ? B.current.set(_, h) : B.current.delete(_);
  }, []), $ = q((_) => {
    const h = B.current.get(_);
    h && h.focus();
  }, []);
  Br(p, () => ({
    focusTab: $,
    getActiveTab: () => C,
    getTabListElement: () => D.current
  }), [$, C]);
  const y = q((_) => {
    const h = _.relatedTarget;
    D.current?.contains(h) || o?.();
  }, [o]), x = V("nhsuk-tabs", c);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: x,
      id: u,
      "data-testid": d,
      ...m,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: D,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: y,
                children: e.map((_) => {
                  const h = _.id === C, H = _.disabled, X = V("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": H
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: X, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (K) => T(_.id, K),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${_.id}-panel`,
                      id: `${_.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: H,
                      onClick: () => !H && I(_.id),
                      onKeyDown: (K) => !H && P(K, _.id),
                      onFocus: () => !H && j(_.id),
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
          const h = _.id === C;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${_.id}-tab`,
              id: `${_.id}-panel`,
              hidden: !h,
              children: _.content
            },
            _.id
          );
        })
      ]
    }
  );
}), Ei = Ze(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, u) => {
    const d = [
      "nhsuk-details",
      o
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
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
Ei.displayName = "Details";
const Li = Ze(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    o && c.push(o);
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
    ), m = (v) => t === "cross" && !a ? `do not ${v}` : v, p = () => /* @__PURE__ */ n.jsx(
      Ee,
      {
        level: s,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((v, R) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            m(v.item)
          ] }, R)) }) })
        ]
      }
    );
  }
);
Li.displayName = "DoDontList";
const $i = Ze(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...c
  }, u) => {
    const d = [
      "nhsuk-expander",
      o
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
        open: s,
        ...c,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: m }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: p })
        ]
      }
    );
  }
);
$i.displayName = "Expander";
const Ai = Ze(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, v = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), R = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Hi,
        {
          item: l,
          itemClasses: v,
          hasLink: p,
          hintId: d,
          statusId: m,
          ariaDescribedBy: R
        },
        c
      );
    };
    return /* @__PURE__ */ n.jsx(
      "ul",
      {
        ref: s,
        className: o,
        ...a,
        children: e.map(i)
      }
    );
  }
), Hi = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
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
        "aria-describedby": o,
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(Me, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: s, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Ai.displayName = "TaskList";
const Rh = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), c = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), u = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: u,
      ...i,
      children: [
        Dr(
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
}, Ih = ({
  src: e,
  alt: t,
  caption: r,
  sizes: a,
  srcset: s,
  className: o,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    o
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
            ...a && s ? { sizes: a, srcSet: s } : {}
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
}, Pi = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const c = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ee, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return s ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: s,
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
}, Mh = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(fs, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    Hn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(Pi, { ...s })
    },
    o
  )) }) });
}, zi = be.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: c,
    ariaLabelledby: u,
    ariaDescribedby: d,
    className: m,
    tableClassName: p,
    bordered: v = !1,
    striped: R = !1,
    responsive: b = !1,
    tableType: C = "default"
  }, D) => {
    const B = ae(null), I = ae(null), j = ae(null);
    be.useImperativeHandle(D, () => B.current, []);
    const [P, T] = ne(0), [$, y] = ne(0), [x, _] = ne("headers"), [h, H] = ne("browse"), X = t.length, K = e.length, z = ie(() => !r || r.length === 0 ? e : [...e].sort((U, w) => {
      for (const { key: k, direction: f } of r) {
        const g = U[k], F = w[k];
        if (g == null && F == null) continue;
        if (g == null) return 1;
        if (F == null) return -1;
        let L = 0;
        if (typeof g == "number" && typeof F == "number" ? L = g - F : L = String(g).localeCompare(String(F)), L !== 0)
          return f === "asc" ? L : -L;
      }
      return 0;
    }), [e, r]), O = q((U, w) => {
      setTimeout(() => {
        const k = B.current?.querySelector(
          `tbody tr:nth-child(${U + 1}) td:nth-child(${w + 1})`
        );
        k && (k.focus(), typeof k.scrollIntoView == "function" && k.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = q((U) => {
      setTimeout(() => {
        const w = B.current?.querySelector(`th:nth-child(${U + 1})`);
        w && (w.focus(), typeof w.scrollIntoView == "function" && w.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Z = q((U) => {
      a?.(U);
    }, [a]), J = q((U) => {
      o?.(U);
    }, [o]), M = q((U) => {
      const { key: w } = U;
      switch (w) {
        case "Enter":
          if (U.preventDefault(), x === "headers" && h === "browse")
            H("navigate"), Q($);
          else if (x === "headers" && h === "navigate") {
            const k = t[$];
            k && Z(k.key);
          } else x === "cells" && h === "browse" ? (H("navigate"), O(P, $)) : x === "cells" && h === "navigate" && J(P);
          break;
        case "Escape":
          U.preventDefault(), (x === "headers" && h === "navigate" || x === "cells" && h === "navigate") && H("browse");
          break;
        case "ArrowLeft":
          if (U.preventDefault(), h === "navigate" || h === "browse" && x === "headers") {
            if (x === "headers") {
              const k = Math.max(0, $ - 1);
              y(k), Q(k);
            } else if (x === "cells") {
              const k = Math.max(0, $ - 1);
              y(k), O(P, k);
            }
          }
          break;
        case "ArrowRight":
          if (U.preventDefault(), h === "navigate" || h === "browse" && x === "headers") {
            if (x === "headers") {
              const k = Math.min(X - 1, $ + 1);
              y(k), Q(k);
            } else if (x === "cells") {
              const k = Math.min(X - 1, $ + 1);
              y(k), O(P, k);
            }
          }
          break;
        case "ArrowUp":
          if (U.preventDefault(), x === "cells") {
            if (h === "browse") {
              const k = Math.max(0, P - 1);
              T(k), O(k, 0), y(0);
            } else if (h === "navigate")
              if (P > 0) {
                const k = P - 1;
                T(k), O(k, $);
              } else
                _("headers"), H("browse"), Q($);
          }
          break;
        case "ArrowDown":
          if (U.preventDefault(), x === "headers" && h === "browse")
            _("cells"), T(0), y(0), O(0, 0);
          else if (x === "cells") {
            const k = K - 1;
            if (h === "browse") {
              const f = Math.min(k, P + 1);
              T(f), O(f, 0), y(0);
            } else if (h === "navigate" && P < k) {
              const f = P + 1;
              T(f), O(f, $);
            }
          }
          break;
        case "Home":
          U.preventDefault(), x === "headers" ? (y(0), Q(0)) : x === "cells" && (U.ctrlKey ? (T(0), y(0), O(0, 0)) : (y(0), O(P, 0)));
          break;
        case "End":
          if (U.preventDefault(), x === "headers") {
            const k = X - 1;
            y(k), Q(k);
          } else if (x === "cells")
            if (U.ctrlKey) {
              const k = K - 1, f = X - 1;
              T(k), y(f), O(k, f);
            } else {
              const k = X - 1;
              y(k), O(P, k);
            }
          break;
        case " ":
          if (U.preventDefault(), x === "headers" && h === "navigate") {
            const k = t[$];
            k && Z(k.key);
          } else x === "cells" && h === "navigate" && J(P);
          break;
      }
    }, [
      x,
      h,
      $,
      P,
      X,
      K,
      t,
      O,
      Q,
      Z,
      J
    ]);
    se(() => {
      const U = B.current;
      if (U)
        return U.addEventListener("keydown", M), () => U.removeEventListener("keydown", M);
    }, [M]);
    const G = V(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": b,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": R,
        "nhsuk-table--compact": C === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: B,
        className: G,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: I, role: "row", children: t.map((U, w) => {
            const k = r?.find((F) => F.key === U.key), f = !!k, g = x === "headers" && $ === w;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: V("sortable-header", {
                  "sortable-header--focused": g
                }),
                role: "columnheader",
                tabIndex: g ? 0 : -1,
                onClick: () => Z(U.key),
                onKeyDown: (F) => {
                  (F.key === "Enter" || F.key === " ") && (F.preventDefault(), Z(U.key));
                },
                "aria-sort": f ? k?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: U.label }),
                  f && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((F) => F.key === U.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: k?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              U.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: j, className: "nhsuk-table__body", role: "rowgroup", children: z.map((U, w) => {
            const k = s === w, f = x === "cells" && P === w;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: V("data-row", {
                  "data-row--selected": k,
                  "data-row--focused": f
                }),
                "aria-selected": k,
                children: t.map((g, F) => {
                  const L = g.render ? g.render(U) : U[g.key], N = x === "cells" && P === w && $ === F, A = () => typeof L == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: L ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: L ? "Yes" : "No" })
                  ] }) : String(L ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: V("data-cell", {
                        "data-cell--focused": N
                      }),
                      tabIndex: N ? 0 : -1,
                      onClick: () => J(w),
                      children: A()
                    },
                    g.key
                  );
                })
              },
              w
            );
          }) })
        ]
      }
    );
  }
);
zi.displayName = "AriaDataGrid";
const Wi = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const m = ae(null), p = ae(null), v = ae(null), R = q((x, _) => {
    c || (p.current = _, x.dataTransfer.effectAllowed = "move", x.dataTransfer.setData("text/plain", _));
  }, [c]), b = q((x, _) => {
    c || p.current === _ || (x.preventDefault(), x.dataTransfer.dropEffect = "move", v.current = _);
  }, [c]), C = q((x, _) => {
    if (c) return;
    x.preventDefault();
    const h = p.current;
    if (!h || h === _) return;
    const H = e.findIndex((K) => K.key === h), X = e.findIndex((K) => K.key === _);
    if (H !== -1 && X !== -1) {
      const K = [...e], [z] = K.splice(H, 1);
      K.splice(X, 0, z), r(K);
    }
    p.current = null, v.current = null;
  }, [c, e, r]), D = q(() => {
    p.current = null, v.current = null;
  }, []), B = q((x) => {
    const _ = t.find((h) => h.key === x);
    return _ ? _.label : x;
  }, [t]), I = q((x) => ["red", "orange", "blue", "aqua-green", "grey"][x] || "grey", []), j = q((x) => {
    if (c) return;
    const _ = e.map(
      (h) => h.key === x ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(_);
  }, [e, r, c]), P = q((x) => {
    if (c) return;
    const _ = e.filter((h) => h.key !== x);
    r(_);
  }, [e, r, c]), T = q(() => {
    c || r([]);
  }, [r, c]), $ = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const x = e.map((_, h) => {
      const H = _.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${B(_.key)} (${H})`;
    });
    if (x.length === 1)
      return `Sorted by: ${x[0]}`;
    if (x.length === 2)
      return `Sorted by: ${x.join(" and ")}`;
    {
      const _ = x.pop();
      return `Sorted by: ${x.join(", ")}, and ${_}`;
    }
  }, y = ie(() => {
    const x = ["sort-description"];
    return l && x.push("sort-help"), d && x.push(d), x.join(" ");
  }, [l, d]);
  return e.length === 0 ? /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: s
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
        children: $()
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
          "aria-describedby": y,
          children: e.map((x, _) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => R(h, x.key),
              onDragOver: (h) => b(h, x.key),
              onDrop: (h) => C(h, x.key),
              onDragEnd: D,
              onClick: () => j(x.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": x.key,
              children: /* @__PURE__ */ n.jsx(
                Me,
                {
                  color: I(_),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => P(x.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${_ + 1}`, children: _ + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: B(x.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), j(x.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${B(x.key)}. Currently ${x.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${x.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${x.direction}`,
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
            x.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        me,
        {
          variant: "secondary",
          onClick: T,
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
function Oi(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, o); u++)
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
const un = Ze(
  function(t, r) {
    const {
      dataConfig: a = {},
      tabPanels: s,
      selectedIndex: o,
      onTabChange: i,
      onGlobalRowSelectionChange: l,
      ariaLabel: c,
      ariaDescription: u,
      className: d = "",
      disabled: m = !1,
      orientation: p = "horizontal",
      id: v,
      isLoading: R = !1,
      loadingComponent: b,
      error: C = null,
      errorComponent: D,
      "data-testid": B
    } = t, {
      dataComparator: I = (f, g) => JSON.stringify(f) === JSON.stringify(g),
      filterFunction: j = (f) => f,
      booleanRenderer: P = (f) => f ? "✓" : "✗"
    } = a || {}, T = o !== void 0, $ = o ?? 0, [y, x] = ne({
      focusArea: "tabs",
      focusedTabIndex: $,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), _ = ie(() => ({
      selectedIndex: $,
      tabLoadingStates: new Array(s.length).fill(!1),
      tabErrors: new Array(s.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(s.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [$]), [h, H] = Fr(Oi, _);
    se(() => {
      const f = h.tabLoadingStates.length, g = s.length;
      f !== g && H({ type: "ADJUST_ARRAYS", payload: { newLength: g } });
    }, [s.length]), se(() => {
      T && H({ type: "SET_SELECTED_INDEX", payload: $ });
    }, [$, T]), se(() => {
      x((f) => ({
        ...f,
        focusArea: "tabs",
        focusedTabIndex: h.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [h.selectedIndex]), se(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const X = q((f, g) => I(f, g), [I]), K = q((f) => {
      f >= 0 && f < s.length && !s[f].disabled && (H({ type: "SET_SELECTED_INDEX", payload: f }), i?.(f));
    }, [s, i]), z = q((f, g) => {
      const { key: F } = f;
      switch (F) {
        case "ArrowLeft":
          f.preventDefault();
          const L = g > 0 ? g - 1 : s.length - 1;
          K(L), x((E) => ({ ...E, focusedTabIndex: L })), O.current[L]?.focus();
          break;
        case "ArrowRight":
          f.preventDefault();
          const N = g < s.length - 1 ? g + 1 : 0;
          K(N), x((E) => ({ ...E, focusedTabIndex: N })), O.current[N]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), x((E) => ({
            ...E,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), K(0), x((E) => ({ ...E, focusedTabIndex: 0 })), O.current[0]?.focus();
          break;
        case "End":
          f.preventDefault();
          const A = s.length - 1;
          K(A), x((E) => ({ ...E, focusedTabIndex: A })), O.current[A]?.focus();
          break;
        case "Enter":
        case " ":
          f.preventDefault(), K(g);
          break;
      }
    }, [s.length, K]), O = ae([]), Q = ae([]), Z = q((f, g) => {
      const F = h.sortConfig || [], L = F.find((E) => E.key === g);
      let N;
      L ? L.direction === "asc" ? N = F.map(
        (E) => E.key === g ? { ...E, direction: "desc" } : E
      ) : N = F.filter((E) => E.key !== g) : N = [...F, { key: g, direction: "asc" }], H({
        type: "SET_SORT",
        payload: N
      }), s[f].onSort?.(g);
    }, [h.sortConfig, s]), J = q((f) => {
      setTimeout(() => {
        const g = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${f + 1})`
        );
        g && g.focus();
      }, 0);
    }, [h.selectedIndex]), M = q((f) => P(f), [P]), G = q((f, g) => {
      setTimeout(() => {
        const F = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${f + 1}) td:nth-child(${g + 1})`
        );
        F && F.focus();
      }, 0);
    }, [h.selectedIndex]);
    se(() => {
      y.isGridActive && (y.focusArea === "headers" ? setTimeout(() => {
        J(y.focusedHeaderIndex);
      }, 0) : y.focusArea === "cells" && setTimeout(() => {
        G(y.focusedRowIndex, y.focusedColumnIndex);
      }, 0));
    }, [y.focusArea, y.isGridActive, y.focusedHeaderIndex, y.focusedRowIndex, y.focusedColumnIndex, J, G]);
    const U = q((f, g) => {
      const { key: F } = f, L = s[h.selectedIndex], N = L?.columns.length || 0;
      switch (F) {
        case "ArrowLeft":
          f.preventDefault();
          const A = Math.max(0, g - 1);
          x((Y) => ({ ...Y, focusedHeaderIndex: A })), J(A);
          break;
        case "ArrowRight":
          f.preventDefault();
          const E = Math.min(N - 1, g + 1);
          x((Y) => ({ ...Y, focusedHeaderIndex: E })), J(E);
          break;
        case "ArrowUp":
          f.preventDefault(), x((Y) => ({
            ...Y,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), O.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), x((Y) => ({
            ...Y,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: g,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), x((Y) => ({ ...Y, focusedHeaderIndex: 0 })), J(0);
          break;
        case "End":
          f.preventDefault();
          const S = N - 1;
          x((Y) => ({ ...Y, focusedHeaderIndex: S })), J(S);
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const te = L?.columns[g]?.key;
          te && Z(h.selectedIndex, te);
          break;
      }
    }, [s, h.selectedIndex, Z, x, J, G, O]), w = q((f, g, F) => {
      const { key: L } = f, N = s[h.selectedIndex], A = N?.data.length || 0, E = N?.columns.length || 0;
      switch (L) {
        case "ArrowUp":
          if (f.preventDefault(), g === 0)
            x((W) => ({
              ...W,
              focusArea: "headers",
              focusedHeaderIndex: F,
              isGridActive: !1
            })), J(F);
          else {
            const W = g - 1;
            x((ee) => ({ ...ee, focusedRowIndex: W })), G(W, F);
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const S = Math.min(A - 1, g + 1);
          x((W) => ({ ...W, focusedRowIndex: S })), G(S, F);
          break;
        case "ArrowLeft":
          f.preventDefault();
          const te = Math.max(0, F - 1);
          x((W) => ({ ...W, focusedColumnIndex: te })), G(g, te);
          break;
        case "ArrowRight":
          f.preventDefault();
          const Y = Math.min(E - 1, F + 1);
          x((W) => ({ ...W, focusedColumnIndex: Y })), G(g, Y);
          break;
        case "Home":
          f.preventDefault(), f.ctrlKey ? (x((W) => ({ ...W, focusedRowIndex: 0, focusedColumnIndex: 0 })), G(0, 0)) : (x((W) => ({ ...W, focusedColumnIndex: 0 })), G(g, 0));
          break;
        case "End":
          if (f.preventDefault(), f.ctrlKey) {
            const W = A - 1, ee = E - 1;
            x((le) => ({ ...le, focusedRowIndex: W, focusedColumnIndex: ee })), G(W, ee);
          } else {
            const W = E - 1;
            x((ee) => ({ ...ee, focusedColumnIndex: W })), G(g, W);
          }
          break;
        case "Enter":
        case " ":
          if (f.preventDefault(), N && N.data[g]) {
            const W = N.data.some((oe) => "ews_data" in oe) ? j(N.data, h.filters) : N.data, ee = h.sortConfig;
            let le = W;
            if (ee && ee.length > 0 && (le = [...W].sort((oe, ue) => {
              for (const { key: ye, direction: Je } of ee) {
                let ge = oe[ye], ke = ue[ye];
                const Zt = N.columns.find((qa) => qa.key === ye);
                if (Zt?.render && (ge = Zt.render(oe), ke = Zt.render(ue)), ge == null && ke == null) continue;
                if (ge == null) return Je === "asc" ? -1 : 1;
                if (ke == null) return Je === "asc" ? 1 : -1;
                let Xe = 0;
                if (typeof ge == "number" && typeof ke == "number" ? Xe = ge - ke : Xe = String(ge).localeCompare(String(ke), void 0, { numeric: !0, sensitivity: "base" }), Xe !== 0)
                  return Je === "asc" ? Xe : -Xe;
              }
              return 0;
            })), le[g]) {
              const oe = le[g], ye = h.globalSelectedRowData && X(h.globalSelectedRowData, oe) ? null : oe;
              H({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: ye
              });
            }
          }
          break;
      }
    }, [s, h.selectedIndex, h.filters, h.sortConfig, j, X, H, x, J, G]), k = q((f, g) => j(f, g), [j]);
    return Br(r, () => ({
      selectTab: (f) => {
        f >= 0 && f < s.length && (H({ type: "SET_SELECTED_INDEX", payload: f }), i?.(f));
      },
      refreshData: (f) => {
        console.log("Refreshing data for tab:", f ?? "all");
      },
      exportData: (f) => {
        const g = f ?? h.selectedIndex, F = s[g];
        return F ? F.data : [];
      },
      getSelectedRows: (f) => h.globalSelectedRowData ? [] : [],
      clearSelection: (f) => {
        H({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (f) => {
        H({ type: "SET_FILTERS", payload: f });
      }
    }), [h.selectedIndex, h.selectedRows, s, i]), R ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": B, children: b || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": B, children: D || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: v,
        "data-testid": B,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${v}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Wi,
            {
              sortConfig: h.sortConfig || [],
              columns: s.flatMap(
                (f) => f.columns.map((g) => ({ key: g.key, label: g.label }))
              ).filter(
                (f, g, F) => F.findIndex((L) => L.key === f.key) === g
                // Remove duplicates
              ),
              onSortChange: (f) => {
                H({ type: "SET_SORT", payload: f });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${v ? `${v}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: s.map((f, g) => {
                const F = g === h.selectedIndex, L = f.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${f.id}`,
                    "aria-controls": `panel-${f.id}`,
                    "aria-selected": F,
                    "aria-disabled": L,
                    tabIndex: F ? 0 : -1,
                    ref: (N) => {
                      O.current[g] = N;
                    },
                    onClick: () => K(g),
                    onKeyDown: (N) => z(N, g),
                    disabled: L,
                    className: `
                  aria-tabs-datagrid__tab
                  ${F ? "aria-tabs-datagrid__tab--selected" : ""}
                  ${L ? "aria-tabs-datagrid__tab--disabled" : ""}
                `.trim(),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: f.label }),
                      h.tabLoadingStates[g] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      h.tabErrors[g] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  f.id
                );
              })
            }
          ),
          s.map((f, g) => {
            const F = g === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${f.id}`,
                "aria-labelledby": `tab-${f.id}`,
                tabIndex: 0,
                hidden: !F,
                ref: (L) => {
                  Q.current[g] = L;
                },
                className: `aria-tabs-datagrid__panel ${f.className || ""}`,
                "data-tab-panel": g,
                children: F && (() => {
                  const L = f.data.some((A) => "ews_data" in A) ? k(f.data, h.filters) : f.data, N = ie(() => {
                    const A = h.sortConfig;
                    return !A || A.length === 0 ? L : [...L].sort((E, S) => {
                      for (const { key: te, direction: Y } of A) {
                        let W = E[te], ee = S[te];
                        const le = f.columns.find((ue) => ue.key === te);
                        if (le?.render && (W = le.render(E), ee = le.render(S)), W == null && ee == null) continue;
                        if (W == null) return 1;
                        if (ee == null) return -1;
                        let oe = 0;
                        if (typeof W == "number" && typeof ee == "number" ? oe = W - ee : typeof W == "boolean" && typeof ee == "boolean" ? oe = W === ee ? 0 : W ? 1 : -1 : oe = String(W).localeCompare(String(ee), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), oe !== 0)
                          return Y === "asc" ? oe : -oe;
                      }
                      return 0;
                    });
                  }, [L, h.sortConfig, f.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": f.ariaLabel,
                      "aria-describedby": f.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: f.columns.map((A, E) => {
                          const S = h.sortConfig?.find((W) => W.key === A.key), te = !!S, Y = y.focusArea === "headers" && y.focusedHeaderIndex === E;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${Y ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: Y ? 0 : -1,
                              onClick: () => Z(g, A.key),
                              onKeyDown: (W) => U(W, E),
                              "aria-sort": te ? S?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: A.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${te ? `sort-indicator--${S?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((W) => W.key === A.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((W) => W.key === A.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((W) => W.key === A.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((W) => W.key === A.key) + 1}`,
                                      children: h.sortConfig.findIndex((W) => W.key === A.key) + 1
                                    }
                                  ),
                                  te && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${S?.direction}`,
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
                            A.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: N.map((A, E) => {
                          const S = h.globalSelectedRowData && X(h.globalSelectedRowData, A), te = y.focusArea === "cells" && y.focusedRowIndex === E;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${S ? "data-row--selected" : ""} ${te ? "data-row--focused" : ""}`,
                              "aria-selected": S,
                              children: f.columns.map((Y, W) => {
                                const ee = Y.render ? Y.render(A) : A[Y.key], le = y.focusArea === "cells" && y.focusedRowIndex === E && y.focusedColumnIndex === W, oe = () => typeof ee == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  M(ee),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ee ? "Yes" : "No" })
                                ] }) : String(ee ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${le ? "data-cell--focused" : ""}`,
                                    tabIndex: le ? 0 : -1,
                                    onClick: () => {
                                      const ye = h.globalSelectedRowData && X(h.globalSelectedRowData, A) ? null : A;
                                      H({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: ye
                                      });
                                    },
                                    onKeyDown: (ue) => w(ue, E, W),
                                    children: oe()
                                  },
                                  Y.key
                                );
                              })
                            },
                            E
                          );
                        }) })
                      ]
                    }
                  );
                })()
              },
              f.id
            );
          })
        ]
      }
    );
  }
), ht = {
  asc: "↑",
  desc: "↓"
}, Ui = (e) => [...e].sort((t, r) => t.priority - r.priority);
function on(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Gi(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Yi(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Vi(e, t) {
  const r = t.find((s) => s.id === e), a = Gi(t);
  return r ? r.priority < a : !1;
}
const Eh = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const d = ie(() => Ui(e), [e]), m = q((B) => {
    if (l) return;
    const I = e.map(
      (j) => j.id === B ? { ...j, direction: j.direction === "asc" ? "desc" : "asc" } : j
    );
    t(I);
  }, [e, t, l]), p = q((B) => {
    if (l) return;
    const I = e.findIndex((P) => P.id === B);
    if (I <= 0) return;
    const j = [...e];
    [j[I], j[I - 1]] = [j[I - 1], j[I]], t(on(j));
  }, [e, t, l]), v = q((B) => {
    if (l) return;
    const I = e.findIndex((P) => P.id === B);
    if (I >= e.length - 1 || I === -1) return;
    const j = [...e];
    [j[I], j[I + 1]] = [j[I + 1], j[I]], t(on(j));
  }, [e, t, l]), R = q((B) => {
    if (l) return;
    const I = e.filter((j) => j.id !== B);
    t(on(I));
  }, [e, t, l]), b = q(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const B = d.map((I, j) => {
      const P = I.direction === "asc" ? "ascending" : "descending";
      return `${j + 1}. ${I.label} (${P})`;
    });
    if (B.length === 1)
      return `Sorted by: ${B[0]}`;
    if (B.length === 2)
      return `Sorted by: ${B.join(" and ")}`;
    {
      const I = B.pop();
      return `Sorted by: ${B.join(", ")}, and ${I}`;
    }
  }, D = ie(() => {
    const B = ["sort-description"];
    return i && B.push("sort-help"), u && B.push(u), B.join(" ");
  }, [i, u]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: C()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: C()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((B) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Me,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(B.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: B.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: B.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(B.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${B.label}. Currently ${B.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: B.direction === "asc" ? ht.asc : ht.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(B.id),
                          disabled: l || !Yi(B.id, e),
                          "aria-label": `Move ${B.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => v(B.id),
                          disabled: l || !Vi(B.id, e),
                          "aria-label": `Move ${B.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            B.id
          ))
        ]
      }
    ),
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      me,
      {
        variant: "secondary",
        onClick: b,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      ht.asc,
      "/",
      ht.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Kn = (e, t) => t.map((r) => ({
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
})), hn = [
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
], qi = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Ki = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Zi = (e) => {
  if (typeof e == "boolean") {
    const r = hn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = hn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Ji = (e) => `${e.name}-${e.bed_name}`, Xi = () => ({
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
}), Lh = (e) => {
  const t = Xi();
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
}, Qi = {
  dataComparator: qi,
  filterFunction: Ki,
  booleanRenderer: Zi,
  getDataId: Ji
};
function el(e, t) {
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
      const s = [...e.selectedRows];
      return s[t.payload.tabIndex] = t.payload.rowIndices, { ...e, selectedRows: s };
    case "SET_GLOBAL_SELECTED_ROW_DATA":
      return { ...e, globalSelectedRowData: t.payload };
    case "SET_FILTERS":
      return { ...e, filters: t.payload };
    case "ADJUST_ARRAYS":
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), c = new Array(o).fill([]);
      for (let u = 0; u < Math.min(e.tabLoadingStates.length, o); u++)
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
function tl(e, t) {
  const [r, a] = ne("cards");
  return se(() => {
    if (t) {
      a(t);
      return;
    }
    const s = () => {
      const o = window.innerWidth;
      o < e.mobile ? a("cards") : o < e.desktop ? a("hybrid") : a("table");
    };
    return s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, [e, t]), r;
}
function nl(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badgeFields: o = [],
    hiddenFields: i = []
  } = r, l = t.find((b) => b.key === a), c = l?.render ? l.render(e) : e[a || "name"] || "Untitled", u = () => s.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const D = t.find((j) => j.key === C), B = D?.render ? D.render(e) : e[C];
    return `${D?.label || C}: ${B}`;
  }).join(" • "), d = () => o.length === 0 ? null : o.filter((b) => e[b] !== void 0).map((b) => {
    const C = t.find((B) => B.key === b), D = C?.render ? C.render(e) : e[b];
    if (b === "ews_score") {
      const B = Number(D);
      return `<span class="nhsuk-tag nhsuk-tag--${B >= 7 ? "high" : B >= 3 ? "medium" : "low"} adaptive-card__ews-badge">EWS: ${D}</span>`;
    }
    return `<span class="nhsuk-tag adaptive-card__badge">${D}</span>`;
  }).join(""), m = () => e.ews_score && Number(e.ews_score) >= 7 || e.priority === "high" || e.status === "urgent" ? "primary" : "default", p = d(), v = u(), R = p ? `${v}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : v;
  return {
    variant: m(),
    heading: String(c),
    descriptionHtml: R,
    className: "adaptive-card adaptive-card--healthcare",
    "aria-label": `Healthcare record for ${c}`
  };
}
const $h = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  // Standard AriaTabsDataGrid props
  tabPanels: s,
  dataConfig: o,
  selectedIndex: i,
  onTabChange: l,
  ariaLabel: c = "Data grid",
  ariaDescription: u,
  orientation: d = "horizontal",
  id: m,
  disabled: p = !1,
  className: v,
  ...R
}) => {
  const b = tl(e, t), C = i !== void 0, D = i ?? 0, B = ie(() => ({
    selectedIndex: D,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [D, s.length]), [I, j] = Fr(el, B), P = ae([]), T = ae([]), $ = ae(null), [y, x] = ne({
    focusArea: "tabs",
    focusedTabIndex: 0,
    focusedCardIndex: 0,
    selectedCardIndex: -1,
    isGridActive: !1,
    focusedCardElementIndex: 0,
    cardElements: [],
    isCardNavigationActive: !1,
    gridColumns: 1,
    gridRows: 1
  }), _ = q((w) => {
    if (!w.current)
      return { columns: 1, rows: 0 };
    const k = w.current, f = k.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (f.length === 0)
      return { columns: 1, rows: 0 };
    const g = k.offsetWidth, L = f[0].offsetWidth, N = Math.floor(g / L) || 1, A = Math.ceil(f.length / N);
    return { columns: N, rows: A };
  }, []), h = q((w, k) => ({
    row: Math.floor(w / k),
    col: w % k
  }), []), H = q((w, k, f) => w * f + k, []), X = q((w, k, f, g) => {
    const { row: F, col: L } = h(w, g);
    let N = F, A = L;
    switch (k) {
      case "up":
        N = Math.max(0, F - 1);
        break;
      case "down":
        N = Math.min(Math.floor((f - 1) / g), F + 1);
        break;
      case "left":
        A = Math.max(0, L - 1);
        break;
      case "right":
        A = Math.min(g - 1, L + 1);
        break;
    }
    const E = H(N, A, g);
    return Math.min(E, f - 1);
  }, [h, H]);
  se(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const w = y.cardElements[y.focusedCardElementIndex];
      w && (w.element.focus(), w.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), se(() => {
    const w = () => {
      if (b === "cards" && $.current) {
        const { columns: g, rows: F } = _($);
        x((L) => ({
          ...L,
          gridColumns: g,
          gridRows: F
        }));
      }
    }, k = setTimeout(w, 200), f = () => {
      setTimeout(w, 100);
    };
    return window.addEventListener("resize", f), () => {
      clearTimeout(k), window.removeEventListener("resize", f);
    };
  }, [b, s, _]), se(() => {
    const w = I.tabLoadingStates.length, k = s.length;
    w !== k && j({ type: "ADJUST_ARRAYS", payload: { newLength: k } });
  }, [s.length, I.tabLoadingStates.length]), se(() => {
    C && i !== I.selectedIndex && j({ type: "SET_SELECTED_INDEX", payload: i });
  }, [C, i, I.selectedIndex]);
  const K = q((w) => {
    w >= 0 && w < s.length && !s[w].disabled && (j({ type: "SET_SELECTED_INDEX", payload: w }), l?.(w));
  }, [s, l]), z = q((w) => {
    console.log("Card selected:", w), j({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: w
    });
  }, []), O = q((w) => {
    const k = T.current[w];
    k && (k.focus(), k.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Q = q((w) => {
    const k = T.current[w];
    if (!k) return [];
    const f = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), g = k.querySelectorAll(f);
    return Array.from(g).map((F, L) => ({
      id: F.id || `card-${w}-element-${L}`,
      element: F,
      label: F.getAttribute("aria-label") || F.textContent?.trim() || F.getAttribute("title") || `Element ${L + 1}`,
      type: F.tagName.toLowerCase() === "button" ? "button" : F.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(F.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), Z = q((w) => {
    const k = document.createElement("div");
    k.setAttribute("aria-live", "polite"), k.setAttribute("aria-atomic", "true"), k.className = "sr-only", k.textContent = w, document.body.appendChild(k), setTimeout(() => {
      document.body.removeChild(k);
    }, 1e3);
  }, []), J = q((w, k) => {
    const f = Q(w), g = f[k];
    if (g) {
      g.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const F = `Focused on ${g.label}, ${g.type} ${k + 1} of ${f.length} within card`;
      Z(F);
    }
  }, [Q, Z]), M = q((w) => {
    P.current[w]?.focus();
  }, []), G = q((w, k) => {
    const { key: f } = w, g = s[I.selectedIndex], F = g?.data.length || 0;
    if (f === "ArrowLeft" && w.shiftKey) {
      w.preventDefault(), w.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (f === "ArrowRight" && w.shiftKey) {
      w.preventDefault(), w.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (f) {
        case "ArrowUp":
          if (w.preventDefault(), k === 0)
            x((E) => ({ ...E, focusArea: "tabs" })), M(I.selectedIndex);
          else {
            const E = X(k, "up", F, y.gridColumns);
            E !== k && (x((S) => ({ ...S, focusedCardIndex: E })), O(E), Z(`Moved to card ${E + 1} of ${F}`));
          }
          break;
        case "ArrowDown":
          w.preventDefault();
          const L = X(k, "down", F, y.gridColumns);
          L !== k && (x((E) => ({ ...E, focusedCardIndex: L })), O(L), Z(`Moved to card ${L + 1} of ${F}`));
          break;
        case "ArrowLeft":
          w.preventDefault();
          const N = X(k, "left", F, y.gridColumns);
          N !== k ? (x((E) => ({ ...E, focusedCardIndex: N })), O(N), Z(`Moved to card ${N + 1} of ${F}`)) : I.selectedIndex > 0 && (j({ type: "SET_SELECTED_INDEX", payload: I.selectedIndex - 1 }), x((E) => ({ ...E, focusArea: "tabs" })), setTimeout(() => M(I.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          w.preventDefault();
          const A = X(k, "right", F, y.gridColumns);
          A !== k ? (x((E) => ({ ...E, focusedCardIndex: A })), O(A), Z(`Moved to card ${A + 1} of ${F}`)) : I.selectedIndex < s.length - 1 && (j({ type: "SET_SELECTED_INDEX", payload: I.selectedIndex + 1 }), x((E) => ({ ...E, focusArea: "tabs" })), setTimeout(() => M(I.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (g?.data[k]) {
            w.preventDefault(), x((S) => ({
              ...S,
              selectedCardIndex: k
            }));
            const E = Q(k);
            E.length > 0 ? (x((S) => ({
              ...S,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: E,
              selectedCardIndex: k
              // Ensure selection is maintained
            })), Z(`Card ${k + 1} selected and navigation activated. ${E.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : Z(`Card ${k + 1} selected.`);
          }
          break;
        case " ":
          if (g?.data[k]) {
            w.preventDefault(), x((S) => ({
              ...S,
              selectedCardIndex: S.selectedCardIndex === k ? -1 : k
            }));
            const E = y.selectedCardIndex === k;
            Z(`Card ${k + 1} ${E ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (f) {
      case "ArrowUp":
      case "ArrowLeft":
        w.preventDefault();
        const L = Math.max(0, y.focusedCardElementIndex - 1);
        x((S) => ({ ...S, focusedCardElementIndex: L })), J(k, L);
        break;
      case "ArrowDown":
      case "ArrowRight":
        w.preventDefault();
        const N = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        x((S) => ({ ...S, focusedCardElementIndex: N })), J(k, N);
        break;
      case "Enter":
        w.preventDefault();
        const A = y.cardElements[y.focusedCardElementIndex];
        A && (A.element.click(), Z(`Activated ${A.label}`));
        break;
      case " ":
        w.preventDefault();
        const E = y.cardElements[y.focusedCardElementIndex];
        if (E) {
          const S = new MouseEvent("dblclick", { bubbles: !0 });
          E.element.dispatchEvent(S), Z(`Double-clicked ${E.label}`);
        }
        break;
      case "Escape":
        w.preventDefault(), x((S) => ({
          ...S,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => O(k), 0), Z("Exited card navigation, returned to card level");
        break;
      case "Home":
        w.preventDefault(), y.cardElements.length > 0 && (x((S) => ({ ...S, focusedCardElementIndex: 0 })), J(k, 0));
        break;
      case "End":
        if (w.preventDefault(), y.cardElements.length > 0) {
          const S = y.cardElements.length - 1;
          x((te) => ({ ...te, focusedCardElementIndex: S })), J(k, S);
        }
        break;
    }
  }, [y, I.selectedIndex, s, z, O, M, x, Q, J, Z]), U = q((w, k) => {
    if (b !== "cards")
      return;
    const { key: f } = w;
    switch (f) {
      case "ArrowLeft":
        w.preventDefault();
        const g = k > 0 ? k - 1 : s.length - 1;
        K(g), x((N) => ({ ...N, focusedTabIndex: g })), P.current[g]?.focus();
        break;
      case "ArrowRight":
        w.preventDefault();
        const F = k < s.length - 1 ? k + 1 : 0;
        K(F), x((N) => ({ ...N, focusedTabIndex: F })), P.current[F]?.focus();
        break;
      case "ArrowDown":
        w.preventDefault(), x((N) => ({
          ...N,
          focusArea: "cards",
          focusedCardIndex: 0
        })), O(0);
        break;
      case "Home":
        w.preventDefault(), K(0), x((N) => ({ ...N, focusedTabIndex: 0 })), P.current[0]?.focus();
        break;
      case "End":
        w.preventDefault();
        const L = s.length - 1;
        K(L), x((N) => ({ ...N, focusedTabIndex: L })), P.current[L]?.focus();
        break;
      case "Enter":
      case " ":
        w.preventDefault(), K(k);
        break;
    }
  }, [s.length, K, b, O, x]);
  if (b === "cards") {
    const w = s[I.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${v || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": c,
          "aria-describedby": `${u || ""} ${m ? `${m}-navigation-help` : ""}`.trim(),
          "aria-orientation": d,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((k, f) => {
            const g = f === I.selectedIndex, F = k.disabled || p;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${k.id}`,
                "aria-controls": `panel-${k.id}`,
                "aria-selected": g,
                "aria-disabled": F,
                tabIndex: g ? 0 : -1,
                ref: (L) => {
                  P.current[f] = L;
                },
                onClick: () => K(f),
                onKeyDown: (L) => U(L, f),
                disabled: F,
                className: `
				  aria-tabs-datagrid__tab
				  ${g ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${F ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: k.label }),
                  I.tabLoadingStates[f] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  I.tabErrors[f] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              k.id
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: $,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${w?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${w?.id}`,
          "aria-labelledby": `tab-${w?.id}`,
          children: w?.data.map((k, f) => {
            const g = y.selectedCardIndex === f, F = y.focusedCardIndex === f && y.focusArea === "cards", L = y.focusedCardIndex === f && y.focusArea === "card" && y.isCardNavigationActive, N = f === 0 && y.focusArea !== "cards", A = F || N, E = h(f, y.gridColumns);
            if (r.cardTemplate) {
              const Y = r.cardTemplate(k, w.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (W) => {
                    T.current[f] = W;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${g ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${L ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": E.row + 1,
                  "aria-colindex": E.col + 1,
                  "aria-selected": g,
                  "aria-expanded": L,
                  "aria-description": L ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: A ? 0 : -1,
                  onClick: () => {
                    x((W) => ({
                      ...W,
                      selectedCardIndex: W.selectedCardIndex === f ? -1 : f
                    })), z(k);
                  },
                  onKeyDown: (W) => G(W, f),
                  onFocus: () => {
                    x((W) => W.focusedCardIndex !== f || W.focusArea !== "cards" ? {
                      ...W,
                      focusedCardIndex: f,
                      focusArea: "cards"
                    } : W);
                  },
                  children: Y
                },
                `card-${f}`
              );
            }
            const S = nl(k, w.columns, r), te = `
			  ${S.className}
			  ${g ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${F ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${L ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${L ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": E.row + 1,
                "aria-colindex": E.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  Xr,
                  {
                    ...S,
                    ref: (Y) => {
                      T.current[f] = Y;
                    },
                    className: te,
                    "aria-selected": g,
                    "aria-expanded": L,
                    "aria-label": `${S["aria-label"] || S.heading}. ${L ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: A ? 0 : -1,
                    onClick: () => {
                      x((Y) => ({
                        ...Y,
                        selectedCardIndex: Y.selectedCardIndex === f ? -1 : f
                      })), z(k);
                    },
                    onKeyDown: (Y) => G(Y, f),
                    onFocus: () => {
                      y.isCardNavigationActive || x((Y) => Y.focusedCardIndex !== f || Y.focusArea !== "cards" ? {
                        ...Y,
                        focusedCardIndex: f,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : Y);
                    }
                  }
                )
              },
              `card-${f}`
            );
          })
        }
      )
    ] });
  }
  return b === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${v || ""}`, children: /* @__PURE__ */ n.jsx(
    un,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: m,
      disabled: p,
      selectedIndex: i,
      onTabChange: l,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...R
    }
  ) }) : /* @__PURE__ */ n.jsx(
    un,
    {
      tabPanels: s,
      dataConfig: o,
      ariaLabel: c,
      ariaDescription: u,
      orientation: d,
      id: m,
      disabled: p,
      selectedIndex: i,
      onTabChange: l,
      ...R
    }
  );
}, rl = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.nhs_number || e.nhsNumber || e.patient_id, l = e.name || e.patient_name || `${e.first_name || ""} ${e.last_name || ""}`.trim(), c = e.dob || e.date_of_birth || e.birth_date, u = e.ward || e.location || e.current_ward, d = e.condition || e.diagnosis || e.primary_condition, m = e.alert_level || e.ews_score || e.priority_level;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${l}, NHS number ${i}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: l }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__nhs-number", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "NHS:" }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: i })
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            m && /* @__PURE__ */ n.jsxs(
              Me,
              {
                color: ll(Qr(m)),
                className: "healthcare-card__alert",
                children: [
                  "EWS: ",
                  m
                ]
              }
            ),
            s === "high" && /* @__PURE__ */ n.jsx(
              Me,
              {
                color: dl(s),
                className: "healthcare-card__priority",
                children: "High Priority"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "DOB" }),
            /* @__PURE__ */ n.jsxs("dd", { children: [
              ul(c),
              " (",
              hl(c),
              "y)"
            ] })
          ] }),
          u && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] }),
          d && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Condition" }),
            /* @__PURE__ */ n.jsx("dd", { children: d })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, al = ({
  data: e,
  onSelect: t,
  onAction: r,
  status: a = "pending"
}) => {
  const s = e.appointment_time || e.time || e.scheduled_time, o = e.patient_name || e.name, i = e.appointment_type || e.type || e.service, l = e.consultant || e.doctor || e.practitioner, c = e.room || e.location || e.clinic, u = e.duration || e.estimated_duration;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--appointment healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: Zn(s) }),
            /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: i })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            /* @__PURE__ */ n.jsx(
              Me,
              {
                color: cl(a),
                className: "healthcare-card__status",
                children: a.charAt(0).toUpperCase() + a.slice(1)
              }
            ),
            u && /* @__PURE__ */ n.jsxs(
              Me,
              {
                color: "blue",
                className: "healthcare-card__duration",
                children: [
                  u,
                  " min"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Patient" }),
            /* @__PURE__ */ n.jsx("dd", { children: o })
          ] }),
          l && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: l })
          ] }),
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Location" }),
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (d) => {
                d.stopPropagation(), r?.("reschedule", e);
              },
              children: "Reschedule"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (d) => {
                d.stopPropagation(), r?.("check-in", e);
              },
              children: "Check In"
            }
          )
        ] })
      ]
    }
  );
}, sl = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.medication || e.drug_name || e.name, o = e.dose || e.dosage || e.amount, i = e.frequency || e.schedule, l = e.route || e.administration_route, c = e.next_due || e.next_administration, u = e.prescriber || e.doctor, d = e.allergies || e.contraindications;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--medication healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__medication-info", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__medication-name", children: s }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__dose", children: [
              o,
              " - ",
              i
            ] })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
            l && /* @__PURE__ */ n.jsx(
              Me,
              {
                color: "blue",
                className: "healthcare-card__route",
                children: l
              }
            ),
            d && /* @__PURE__ */ n.jsx(
              Me,
              {
                color: "red",
                className: "healthcare-card__warning",
                children: "⚠️ Allergies"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Next Due" }),
            /* @__PURE__ */ n.jsx("dd", { children: Zn(c) })
          ] }),
          u && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Prescriber" }),
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), r?.("view-history", e);
              },
              children: "History"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), r?.("administer", e);
              },
              children: "Administer"
            }
          )
        ] })
      ]
    }
  );
}, ol = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.temperature || e.temp, o = e.blood_pressure || e.bp || `${e.systolic}/${e.diastolic}`, i = e.heart_rate || e.pulse || e.hr, l = e.respiratory_rate || e.resp_rate || e.rr, c = e.oxygen_saturation || e.spo2 || e.o2_sat, u = e.ews_score || e.news_score || e.alert_score, d = e.recorded_time || e.timestamp || e.time;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__header", children: /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__timestamp", children: Zn(d) }),
          u && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${il(u)}`, children: [
            "EWS: ",
            u
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-grid", children: [
          s && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temp" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              s,
              "°C"
            ] })
          ] }),
          o && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: o })
          ] }),
          i && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "HR" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              i,
              " bpm"
            ] })
          ] }),
          l && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "RR" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: l })
          ] }),
          c && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "SpO₂" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "%"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (m) => {
                m.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            me,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (m) => {
                m.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function Qr(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function il(e) {
  return Qr(e);
}
function ll(e) {
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
function cl(e) {
  switch (e) {
    case "active":
      return "green";
    case "pending":
      return "orange";
    case "completed":
      return "aqua-green";
    case "cancelled":
      return "grey";
    default:
      return "default";
  }
}
function dl(e) {
  switch (e) {
    case "high":
      return "red";
    case "medium":
      return "orange";
    case "low":
      return "grey";
    default:
      return "default";
  }
}
function ul(e) {
  try {
    return new Date(e).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  } catch {
    return e;
  }
}
function Zn(e) {
  try {
    return new Date(e).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return e;
  }
}
function hl(e) {
  try {
    const t = new Date(e), r = /* @__PURE__ */ new Date();
    let a = r.getFullYear() - t.getFullYear();
    const s = r.getMonth() - t.getMonth();
    return (s < 0 || s === 0 && r.getDate() < t.getDate()) && a--, a;
  } catch {
    return 0;
  }
}
const ea = (e) => {
  const t = hn.find((r) => r.value === e);
  return t ? t.icon : null;
}, fl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ea(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, ml = (e) => Kn(e, [
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
]), pl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.dateRange) {
      const [a, s] = t.dateRange;
      if (r.date < a || r.date > s) return !1;
    }
    if (t.amountRange) {
      const [a, s] = t.amountRange;
      if (Math.abs(r.amount) < a || Math.abs(r.amount) > s) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(r.type) || t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.pending !== void 0 && r.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => ea(e),
  getDataId: (e) => `financial-${e.id}`
}, gl = (e) => Kn(e, [
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
]), bl = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: fl,
    createTabs: ml
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: pl,
    createTabs: gl
  }
}, Cr = (e, t) => {
  const r = bl[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, ta = [
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
], xl = [
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
], yl = [
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
], _l = [
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
], jr = [
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
], Nr = [
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
], Tr = [
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
], kl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, vl = () => [
  {
    id: "patients",
    label: "Patients",
    data: ta,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      rl,
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
    data: xl,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      al,
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
    data: yl,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      sl,
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
    data: _l,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ol,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], wl = () => {
  const [e, t] = ne("healthcare"), r = ie(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Qi,
      tabPanels: vl(),
      data: ta
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Cr("ecommerce", jr),
      data: jr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Cr("financial", Nr),
      data: Nr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: kl,
      tabPanels: Kn(Tr, [
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
              render: (s) => `$${s.value.toLocaleString()}`
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
              render: (s) => `$${s.value.toLocaleString()}`
            },
            {
              key: "lastContact",
              label: "Last Contact",
              render: (s) => s.lastContact.toLocaleDateString()
            }
          ],
          filter: (s) => s.filter((o) => o.isHotLead),
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
              render: (s) => `$${s.value.toLocaleString()}`
            },
            { key: "source", label: "Source" }
          ],
          filter: (s) => s.filter(
            (o) => ["contacted", "qualified"].includes(o.status)
          ),
          ariaLabel: "Active Pipeline Grid",
          ariaDescription: "Leads currently in the sales pipeline"
        }
      ]),
      data: Tr
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
      }, children: Object.keys(r).map((s) => /* @__PURE__ */ n.jsx(
        me,
        {
          variant: e === s ? "primary" : "secondary",
          onClick: () => t(s),
          style: {
            textTransform: "capitalize"
          },
          children: s
        },
        s
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
      un,
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
}, Ah = wl, na = (e) => /* @__PURE__ */ n.jsx(Ir, { ...e }), Hh = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: u,
  search: d,
  account: m,
  organisation: p,
  logo: v,
  className: R,
  ...b
}) => {
  const C = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Jr, { ...o }),
    /* @__PURE__ */ n.jsx(Ar, { ...C }),
    /* @__PURE__ */ n.jsx(na, { className: R, ...b, children: /* @__PURE__ */ n.jsx(Mr, { size: s, children: /* @__PURE__ */ n.jsx(mt, { children: /* @__PURE__ */ n.jsxs(Hn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ee, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Hr, { ...l })
  ] });
}, Ph = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: u,
  serviceHref: d,
  logo: m,
  className: p,
  ...v
}) => {
  const R = {
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
    /* @__PURE__ */ n.jsx(Jr, { ...o }),
    /* @__PURE__ */ n.jsx(Ar, { ...R }),
    /* @__PURE__ */ n.jsxs(na, { className: p, ...v, children: [
      c && /* @__PURE__ */ n.jsx(os, { ...c }),
      /* @__PURE__ */ n.jsx(Mr, { size: s, children: /* @__PURE__ */ n.jsx(mt, { children: /* @__PURE__ */ n.jsxs(Hn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ee, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Hr, { ...l })
  ] });
}, Sl = "150ms", Cl = "300ms", jl = "500ms", Nl = "cubic-bezier(0.4, 0, 1, 1)", Tl = "cubic-bezier(0, 0, 0.2, 1)", Dl = "cubic-bezier(0.4, 0, 0.2, 1)", Bl = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Fl = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Rl = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Il = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Ml = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", El = "1px", Ll = "2px", $l = "4px", Al = "4px", Hl = "4px", Pl = "2px", zl = "1px", Wl = "0px", Ol = "4px", Ul = "8px", Gl = "12px", ra = "#d8dde0", aa = "#4c6272", sa = "#d8dde0", oa = "#aeb7bd", ia = "#d5281b", la = "#005eb8", ca = "#ffffff", da = "#212b32", ua = "#007f3b", ha = "#330072", fa = "#7c2855", ma = "#d5281b", pa = "#ffeb3b", ga = "#fff9c4", ba = "#ffb81c", xa = "#ed8b00", ya = "#00a499", _a = "#ae2573", ka = "#4c6272", va = "#768692", wa = "#aeb7bd", Sa = "#d8dde0", Ca = "#f0f4f5", Yl = "#212b32", Vl = "#4c6272", ql = "#ffffff", Kl = "#212b32", Zl = "#005eb8", Jl = "#7c2855", Xl = "#003087", Ql = "#330072", ec = "#ffeb3b", tc = "#212b32", nc = "#d8dde0", rc = "#ffffff33", ac = "#d5281b", sc = "#4c6272", oc = "#ffffff", ic = "#007f3b", lc = "#ffffff", cc = "#006530", dc = "#004021", uc = "#004021", hc = "#00000000", fc = "#ffffff", mc = "#005eb8", pc = "#005eb8", gc = "#d9e5f2", bc = "#c7daf0", xc = "#005eb8", yc = "#ffffff", _c = "#212b32", kc = "#d9dde0", vc = "#b3bcc2", wc = "#b3bcc2", Sc = "#d5281b", Cc = "#aa2016", jc = "#6a140e", Nc = "#6a140e", Tc = "#005eb8", Dc = "#004b93", Bc = "#002f5c", Fc = "#002f5c", Rc = "8px", Ic = "16px", Mc = "12px", Ec = "16px", Lc = "4px", $c = "40px", Ac = "4px", Hc = "40px", Pc = "12px", zc = "16px", Wc = "32px", Oc = "16px", Uc = "20px", Gc = "28px", Yc = "9px", Vc = "2px", qc = "16px", Kc = "24px", Zc = "8px", Jc = "24px", Xc = "16px", Qc = "4px", ed = "4px", td = "4px", nd = "8px", rd = "4px", ad = "16px", sd = "#007f3b", od = "#006530", id = "#004021", ld = "#d8dde0", cd = "#ffffff", dd = "#768692", ud = "#00000000", hd = "#ffeb3b", fd = "#00000000", md = "#ffffff", pd = "#d9e5f2", gd = "#c7daf0", bd = "#005eb8", xd = "#005eb8", ja = "8px", Na = "16px", Ta = "12px", Da = "16px", yd = "2px", _d = "4px", kd = "4px", vd = "600", wd = "#ffffff", Sd = "#d8dde0", Cd = "#aeb7bd", jd = "#f0f4f5", Nd = "#212b32", Td = "#212b32", Dd = "#005eb8", Ba = "16px", Fa = "32px", Ra = "16px", Bd = "1px", Fd = "4px", Rd = "none", Id = "0 2px 4px rgba(0, 0, 0, 0.1)", Md = "#ffffff", Ed = "#ffffff", Ld = "#d8dde0", $d = "#ffffff", Ad = "#4c6272", Hd = "#ffeb3b", Pd = "#d5281b", zd = "#aeb7bd", Wd = "#212b32", Od = "#4c6272", Ud = "#768692", Gd = "#212b32", Yd = "#ffffff", Vd = "600", qd = "#d5281b", Kd = "600", Zd = "#4c6272", Ia = "4px", Ma = "40px", Ea = "40px", La = "12px", Jd = "2px", Xd = "4px", Qd = "0px", eu = "16px", tu = "18px", nu = "24px", ru = "32px", au = "34px", su = "32px", ou = "40px", iu = "48px", lu = "5.4ex", cu = "7.2ex", du = "9ex", uu = "10.8ex", hu = "20ex", fu = "38ex", mu = "56ex", pu = "44px", gu = "40px", bu = "1020px", xu = "100%", yu = "50%", _u = "33.333%", ku = "25%", vu = "20%", wu = "320px", Su = "641px", Cu = "1025px", ju = "1280px", Nu = "960px", Tu = "32px", Du = "16px", Bu = "#d5281b", Fu = "#d5281b", Ru = "#ffffff", Iu = "#007f3b", Mu = "#007f3b", Eu = "#ffffff", Lu = "#ffeb3b", $u = "#ffeb3b", Au = "#212b32", Hu = "#005eb8", Pu = "#005eb8", zu = "#ffffff", Wu = "#d8dde0", Ou = "#aeb7bd", Uu = "#768692", Gu = "0 4px 0 #004021", Yu = "0 4px 0 #005eb8", Vu = "0 4px 0 #6a140e", qu = "0 4px 0 #ffeb3b", Ku = "none", Zu = "0 2px 4px rgba(0, 0, 0, 0.1)", Ju = "4px", Xu = "0px", Qu = "solid", eh = "0 0 0 3px #ffeb3b", th = "0 0 0 3px #ffeb3b", nh = "none", rh = "0 1px 3px rgba(0, 0, 0, 0.12)", ah = "0 2px 6px rgba(0, 0, 0, 0.16)", sh = "0 4px 12px rgba(0, 0, 0, 0.20)", $a = "0", Aa = "4px", Ha = "8px", Pa = "16px", za = "24px", Wa = "32px", Oa = "40px", Ua = "48px", Ga = "56px", Ya = "64px", fn = "0", mn = "0", pn = "4px", gn = "4px", bn = "8px", xn = "8px", yn = "8px", _n = "16px", kn = "16px", vn = "24px", wn = "24px", Sn = "32px", Cn = "32px", jn = "40px", Nn = "40px", Tn = "48px", Dn = "48px", Bn = "56px", Fn = "56px", Rn = "64px", vt = "Frutiger W01", wt = "Arial, Helvetica, sans-serif", St = "sans-serif", Ct = "400", jt = "600", Nt = "400", Tt = "12px", Dt = "14px", Bt = "12pt", Ft = "14px", Rt = "16px", It = "12pt", Mt = "16px", Et = "19px", Lt = "13pt", $t = "19px", At = "22px", Ht = "15pt", Pt = "22px", zt = "26px", Wt = "17pt", Ot = "27px", Ut = "36px", Gt = "20pt", Yt = "33px", Vt = "48px", qt = "24pt", In = "16px", Mn = "24px", ve = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, we = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Se = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ce = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, je = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ne = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Te = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, De = {
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
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, oh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Sl,
  AnimationDurationNormal: Cl,
  AnimationDurationSlow: jl,
  AnimationEasingBounce: Bl,
  AnimationEasingEaseIn: Nl,
  AnimationEasingEaseInOut: Dl,
  AnimationEasingEaseOut: Tl,
  BorderColorCard: sa,
  BorderColorCardHover: oa,
  BorderColorDefault: ra,
  BorderColorError: ia,
  BorderColorForm: aa,
  BorderRadiusLarge: Gl,
  BorderRadiusMedium: Ul,
  BorderRadiusNone: Wl,
  BorderRadiusSmall: Ol,
  BorderWidthCardBottom: Al,
  BorderWidthDefault: El,
  BorderWidthFormElement: Ll,
  BorderWidthFormElementError: $l,
  BorderWidthPanel: Hl,
  BorderWidthTableCell: zl,
  BorderWidthTableHeader: Pl,
  BreakpointDesktop: Cu,
  BreakpointLargeDesktop: ju,
  BreakpointMobile: wu,
  BreakpointTablet: Su,
  ButtonBorderRadius: _d,
  ButtonBorderWidth: yd,
  ButtonPrimaryBackgroundActive: id,
  ButtonPrimaryBackgroundDefault: sd,
  ButtonPrimaryBackgroundDisabled: ld,
  ButtonPrimaryBackgroundHover: od,
  ButtonPrimaryBorderDefault: ud,
  ButtonPrimaryBorderFocus: hd,
  ButtonPrimaryTextDefault: cd,
  ButtonPrimaryTextDisabled: dd,
  ButtonSecondaryBackgroundActive: gd,
  ButtonSecondaryBackgroundDefault: fd,
  ButtonSecondaryBackgroundHover: pd,
  ButtonSecondaryBackgroundSolid: md,
  ButtonSecondaryBorderDefault: xd,
  ButtonSecondaryTextDefault: bd,
  ButtonShadowSize: kd,
  ButtonSpacingPaddingHorizontalDesktop: Da,
  ButtonSpacingPaddingHorizontalMobile: Na,
  ButtonSpacingPaddingVerticalDesktop: Ta,
  ButtonSpacingPaddingVerticalMobile: ja,
  ButtonTypographyWeight: vd,
  CardBackgroundDefault: wd,
  CardBorderBottom: jd,
  CardBorderDefault: Sd,
  CardBorderHover: Cd,
  CardBorderWidthBottom: Fd,
  CardBorderWidthDefault: Bd,
  CardShadowDefault: Rd,
  CardShadowHover: Id,
  CardSpacingHeadingMargin: Ra,
  CardSpacingPaddingDesktop: Fa,
  CardSpacingPaddingMobile: Ba,
  CardTextDescription: Td,
  CardTextHeading: Nd,
  CardTextLink: Dd,
  ColorBorderDefault: nc,
  ColorBorderSecondary: rc,
  ColorButtonLoginActive: Bc,
  ColorButtonLoginBackground: Tc,
  ColorButtonLoginHover: Dc,
  ColorButtonLoginShadow: Fc,
  ColorButtonPrimaryActive: dc,
  ColorButtonPrimaryBackground: ic,
  ColorButtonPrimaryHover: cc,
  ColorButtonPrimaryShadow: uc,
  ColorButtonPrimaryText: lc,
  ColorButtonReverseActive: vc,
  ColorButtonReverseBackground: yc,
  ColorButtonReverseHover: kc,
  ColorButtonReverseShadow: wc,
  ColorButtonReverseText: _c,
  ColorButtonSecondaryActive: bc,
  ColorButtonSecondaryBackground: hc,
  ColorButtonSecondaryBackgroundSolid: fc,
  ColorButtonSecondaryBorder: mc,
  ColorButtonSecondaryHover: gc,
  ColorButtonSecondaryShadow: xc,
  ColorButtonSecondaryText: pc,
  ColorButtonWarningActive: jc,
  ColorButtonWarningBackground: Sc,
  ColorButtonWarningHover: Cc,
  ColorButtonWarningShadow: Nc,
  ColorError: ac,
  ColorFocusBackground: ec,
  ColorFocusText: tc,
  ColorFormBackground: oc,
  ColorFormBorder: sc,
  ColorGrey1: ka,
  ColorGrey2: va,
  ColorGrey3: wa,
  ColorGrey4: Sa,
  ColorGrey5: Ca,
  ColorLinkActive: Xl,
  ColorLinkDefault: Zl,
  ColorLinkHover: Jl,
  ColorLinkVisited: Ql,
  ColorPrimaryBlack: da,
  ColorPrimaryBlue: la,
  ColorPrimaryDarkPink: fa,
  ColorPrimaryGreen: ua,
  ColorPrimaryPurple: ha,
  ColorPrimaryRed: ma,
  ColorPrimaryWhite: ca,
  ColorPrimaryYellow: pa,
  ColorSecondaryAquaGreen: ya,
  ColorSecondaryOrange: xa,
  ColorSecondaryPaleYellow: ga,
  ColorSecondaryPink: _a,
  ColorSecondaryWarmYellow: ba,
  ColorTextPrimary: Yl,
  ColorTextPrint: Kl,
  ColorTextReverse: ql,
  ColorTextSecondary: Vl,
  ComponentBlur: ed,
  ComponentBreadcrumbChevronMarginLeft: Yc,
  ComponentBreadcrumbChevronMarginRight: Vc,
  ComponentBreadcrumbPaddingTopDesktop: Kc,
  ComponentBreadcrumbPaddingTopMobile: qc,
  ComponentButtonPaddingDesktopHorizontal: Ec,
  ComponentButtonPaddingDesktopVertical: Mc,
  ComponentButtonPaddingMobileHorizontal: Ic,
  ComponentButtonPaddingMobileVertical: Rc,
  ComponentButtonShadowSize: Lc,
  ComponentCardHeadingMargin: Oc,
  ComponentCardPaddingDesktop: Wc,
  ComponentCardPaddingMobile: zc,
  ComponentDetails: nd,
  ComponentExpander: rd,
  ComponentFormCheckboxLabelPadding: Pc,
  ComponentFormCheckboxSize: Hc,
  ComponentFormInputMinHeight: $c,
  ComponentFormInputPadding: Ac,
  ComponentLink: td,
  ComponentPagination: ad,
  ComponentPanelPaddingDesktop: Gc,
  ComponentPanelPaddingMobile: Uc,
  ComponentSpread: Qc,
  ComponentSummaryListCellPaddingHorizontal: Jc,
  ComponentSummaryListCellPaddingVertical: Zc,
  ComponentSummaryListRowMargin: Xc,
  ElevationHigh: sh,
  ElevationLow: rh,
  ElevationMedium: ah,
  ElevationNone: nh,
  FocusOutlineOffset: Xu,
  FocusOutlineStyle: Qu,
  FocusOutlineWidth: Ju,
  FocusShadowButton: th,
  FocusShadowInput: eh,
  FontFamilyBase: vt,
  FontFamilyFallback: wt,
  FontFamilyPrint: St,
  FontLineHeightBase: Mn,
  FontSize14Mobile: Tt,
  FontSize14Print: Bt,
  FontSize14Tablet: Dt,
  FontSize16Mobile: Ft,
  FontSize16Print: It,
  FontSize16Tablet: Rt,
  FontSize19Mobile: Mt,
  FontSize19Print: Lt,
  FontSize19Tablet: Et,
  FontSize22Mobile: $t,
  FontSize22Print: Ht,
  FontSize22Tablet: At,
  FontSize26Mobile: Pt,
  FontSize26Print: Wt,
  FontSize26Tablet: zt,
  FontSize36Mobile: Ot,
  FontSize36Print: Gt,
  FontSize36Tablet: Ut,
  FontSize48Mobile: Yt,
  FontSize48Print: qt,
  FontSize48Tablet: Vt,
  FontSizeBase: In,
  FontWeightBold: jt,
  FontWeightLight: Nt,
  FontWeightNormal: Ct,
  FormBorderRadius: Qd,
  FormBorderWidthDefault: Jd,
  FormBorderWidthError: Xd,
  FormErrorTextDefault: qd,
  FormErrorTypographyWeight: Kd,
  FormHintTextDefault: Zd,
  FormInputBackgroundDefault: Md,
  FormInputBackgroundDisabled: Ld,
  FormInputBackgroundError: $d,
  FormInputBackgroundFocus: Ed,
  FormInputBorderDefault: Ad,
  FormInputBorderDisabled: zd,
  FormInputBorderError: Pd,
  FormInputBorderFocus: Hd,
  FormInputTextDefault: Wd,
  FormInputTextDisabled: Ud,
  FormInputTextPlaceholder: Od,
  FormLabelTextDefault: Gd,
  FormLabelTextRequired: Yd,
  FormLabelTypographyWeight: Vd,
  FormSpacingCheckboxLabelPadding: La,
  FormSpacingCheckboxSize: Ea,
  FormSpacingInputMinHeight: Ma,
  FormSpacingInputPadding: Ia,
  GridGutter: Tu,
  GridGutterHalf: Du,
  GridPageWidth: Nu,
  HeadingsNhsukHeadingL: we,
  HeadingsNhsukHeadingM: Se,
  HeadingsNhsukHeadingS: Ce,
  HeadingsNhsukHeadingXl: ve,
  HeadingsNhsukHeadingXs: je,
  LayoutColumnActions: vu,
  LayoutColumnFull: xu,
  LayoutColumnHalf: yu,
  LayoutColumnQuarter: ku,
  LayoutColumnThird: _u,
  LayoutContainerMaxWidth: bu,
  ParagraphsBody: Ne,
  ParagraphsBodyLarge: Te,
  ParagraphsBodySmall: De,
  ParagraphsLedeText: Be,
  ParagraphsLedeTextSmall: Fe,
  ShadowButtonDefault: Gu,
  ShadowButtonFocus: qu,
  ShadowButtonSecondary: Yu,
  ShadowButtonWarning: Vu,
  ShadowCardDefault: Ku,
  ShadowCardHover: Zu,
  SizeButtonMinHeightDesktop: gu,
  SizeButtonMinHeightMobile: pu,
  SizeFormControlLarge: iu,
  SizeFormControlMedium: ou,
  SizeFormControlSmall: su,
  SizeFormInputWidth2xl: fu,
  SizeFormInputWidth3xl: mu,
  SizeFormInputWidthLg: uu,
  SizeFormInputWidthMd: du,
  SizeFormInputWidthSm: cu,
  SizeFormInputWidthXl: hu,
  SizeFormInputWidthXs: lu,
  SizeIconExtraLarge: ru,
  SizeIconLarge: nu,
  SizeIconMedium: tu,
  SizeIconNhsDefault: au,
  SizeIconSmall: eu,
  Spacing0: $a,
  Spacing1: Aa,
  Spacing2: Ha,
  Spacing3: Pa,
  Spacing4: za,
  Spacing5: Wa,
  Spacing6: Oa,
  Spacing7: Ua,
  Spacing8: Ga,
  Spacing9: Ya,
  SpacingResponsive0Mobile: fn,
  SpacingResponsive0Tablet: mn,
  SpacingResponsive1Mobile: pn,
  SpacingResponsive1Tablet: gn,
  SpacingResponsive2Mobile: bn,
  SpacingResponsive2Tablet: xn,
  SpacingResponsive3Mobile: yn,
  SpacingResponsive3Tablet: _n,
  SpacingResponsive4Mobile: kn,
  SpacingResponsive4Tablet: vn,
  SpacingResponsive5Mobile: wn,
  SpacingResponsive5Tablet: Sn,
  SpacingResponsive6Mobile: Cn,
  SpacingResponsive6Tablet: jn,
  SpacingResponsive7Mobile: Nn,
  SpacingResponsive7Tablet: Tn,
  SpacingResponsive8Mobile: Dn,
  SpacingResponsive8Tablet: Bn,
  SpacingResponsive9Mobile: Fn,
  SpacingResponsive9Tablet: Rn,
  StateDisabledBackground: Wu,
  StateDisabledBorder: Ou,
  StateDisabledText: Uu,
  StateErrorBackground: Bu,
  StateErrorBorder: Fu,
  StateErrorText: Ru,
  StateInfoBackground: Hu,
  StateInfoBorder: Pu,
  StateInfoText: zu,
  StateSuccessBackground: Iu,
  StateSuccessBorder: Mu,
  StateSuccessText: Eu,
  StateWarningBackground: Lu,
  StateWarningBorder: $u,
  StateWarningText: Au,
  TransitionButtonDefault: Fl,
  TransitionButtonShadow: Rl,
  TransitionCardHover: Ml,
  TransitionInputFocus: Il
}, Symbol.toStringTag, { value: "Module" })), zh = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Wh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: ve.fontFamily,
      fontWeight: ve.fontWeight,
      fontSize: ve.fontSize.mobile,
      lineHeight: ve.lineHeight,
      marginTop: ve.marginTop,
      marginBottom: ve.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Oh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: we.fontFamily,
      fontWeight: we.fontWeight,
      fontSize: we.fontSize.mobile,
      lineHeight: we.lineHeight,
      marginTop: we.marginTop,
      marginBottom: we.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Uh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Se.fontFamily,
      fontWeight: Se.fontWeight,
      fontSize: Se.fontSize.mobile,
      lineHeight: Se.lineHeight,
      marginTop: Se.marginTop,
      marginBottom: Se.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Gh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Ce.fontFamily,
      fontWeight: Ce.fontWeight,
      fontSize: Ce.fontSize.mobile,
      lineHeight: Ce.lineHeight,
      marginTop: Ce.marginTop,
      marginBottom: Ce.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Yh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: je.fontFamily,
      fontWeight: je.fontWeight,
      fontSize: je.fontSize.mobile,
      lineHeight: je.lineHeight,
      marginTop: je.marginTop,
      marginBottom: je.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Vh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ne.fontFamily,
      fontWeight: Ne.fontWeight,
      fontSize: Ne.fontSize.mobile,
      lineHeight: Ne.lineHeight,
      marginTop: Ne.marginTop,
      marginBottom: Ne.marginBottom.mobile,
      ...r
    },
    children: e
  }
), qh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Te.fontFamily,
      fontWeight: Te.fontWeight,
      fontSize: Te.fontSize.mobile,
      lineHeight: Te.lineHeight,
      marginTop: Te.marginTop,
      marginBottom: Te.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Kh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Zh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Jh = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
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
      ...r
    },
    children: e
  }
), Xh = () => ie(() => oh, []), Qh = () => ie(() => ({
  // Border colors
  BorderColorDefault: ra,
  BorderColorForm: aa,
  BorderColorCard: sa,
  BorderColorCardHover: oa,
  BorderColorError: ia,
  // Primary colors
  ColorPrimaryBlue: la,
  ColorPrimaryWhite: ca,
  ColorPrimaryBlack: da,
  ColorPrimaryGreen: ua,
  ColorPrimaryPurple: ha,
  ColorPrimaryDarkPink: fa,
  ColorPrimaryRed: ma,
  ColorPrimaryYellow: pa,
  // Secondary colors
  ColorSecondaryPaleYellow: ga,
  ColorSecondaryWarmYellow: ba,
  ColorSecondaryOrange: xa,
  ColorSecondaryAquaGreen: ya,
  ColorSecondaryPink: _a,
  // Grey scale
  ColorGrey1: ka,
  ColorGrey2: va,
  ColorGrey3: wa,
  ColorGrey4: Sa,
  ColorGrey5: Ca
}), []), ef = () => ie(() => ({
  Spacing0: $a,
  Spacing1: Aa,
  Spacing2: Ha,
  Spacing3: Pa,
  Spacing4: za,
  Spacing5: Wa,
  Spacing6: Oa,
  Spacing7: Ua,
  Spacing8: Ga,
  Spacing9: Ya
}), []), tf = () => ie(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Tt,
    Size16: Ft,
    Size19: Mt,
    Size22: $t,
    Size26: Pt,
    Size36: Ot,
    Size48: Yt
  },
  Tablet: {
    Size14: Dt,
    Size16: Rt,
    Size19: Et,
    Size22: At,
    Size26: zt,
    Size36: Ut,
    Size48: Vt
  },
  Print: {
    Size14: Bt,
    Size16: It,
    Size19: Lt,
    Size22: Ht,
    Size26: Wt,
    Size36: Gt,
    Size48: qt
  },
  Family: {
    Base: vt,
    Fallback: wt,
    Print: St
  },
  Weight: {
    Normal: Ct,
    Bold: jt,
    Light: Nt
  },
  Base: {
    Size: In,
    LineHeight: Mn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: vt,
  FontFamilyFallback: wt,
  FontFamilyPrint: St,
  FontWeightNormal: Ct,
  FontWeightBold: jt,
  FontWeightLight: Nt,
  FontSize14Mobile: Tt,
  FontSize14Tablet: Dt,
  FontSize14Print: Bt,
  FontSize16Mobile: Ft,
  FontSize16Tablet: Rt,
  FontSize16Print: It,
  FontSize19Mobile: Mt,
  FontSize19Tablet: Et,
  FontSize19Print: Lt,
  FontSize22Mobile: $t,
  FontSize22Tablet: At,
  FontSize22Print: Ht,
  FontSize26Mobile: Pt,
  FontSize26Tablet: zt,
  FontSize26Print: Wt,
  FontSize36Mobile: Ot,
  FontSize36Tablet: Ut,
  FontSize36Print: Gt,
  FontSize48Mobile: Yt,
  FontSize48Tablet: Vt,
  FontSize48Print: qt,
  FontSizeBase: In,
  FontLineHeightBase: Mn
}), []), nf = () => ie(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: fn,
    Size1: pn,
    Size2: bn,
    Size3: yn,
    Size4: kn,
    Size5: wn,
    Size6: Cn,
    Size7: Nn,
    Size8: Dn,
    Size9: Fn
  },
  Tablet: {
    Size0: mn,
    Size1: gn,
    Size2: xn,
    Size3: _n,
    Size4: vn,
    Size5: Sn,
    Size6: jn,
    Size7: Tn,
    Size8: Bn,
    Size9: Rn
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: fn,
  SpacingResponsive0Tablet: mn,
  SpacingResponsive1Mobile: pn,
  SpacingResponsive1Tablet: gn,
  SpacingResponsive2Mobile: bn,
  SpacingResponsive2Tablet: xn,
  SpacingResponsive3Mobile: yn,
  SpacingResponsive3Tablet: _n,
  SpacingResponsive4Mobile: kn,
  SpacingResponsive4Tablet: vn,
  SpacingResponsive5Mobile: wn,
  SpacingResponsive5Tablet: Sn,
  SpacingResponsive6Mobile: Cn,
  SpacingResponsive6Tablet: jn,
  SpacingResponsive7Mobile: Nn,
  SpacingResponsive7Tablet: Tn,
  SpacingResponsive8Mobile: Dn,
  SpacingResponsive8Tablet: Bn,
  SpacingResponsive9Mobile: Fn,
  SpacingResponsive9Tablet: Rn
}), []), rf = () => ie(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: ja,
  ButtonSpacingPaddingHorizontalMobile: Na,
  ButtonSpacingPaddingVerticalDesktop: Ta,
  ButtonSpacingPaddingHorizontalDesktop: Da,
  // Card spacing	
  CardSpacingPaddingMobile: Ba,
  CardSpacingPaddingDesktop: Fa,
  CardSpacingHeadingMargin: Ra,
  // Form spacing
  FormSpacingInputPadding: Ia,
  FormSpacingInputMinHeight: Ma,
  FormSpacingCheckboxSize: Ea,
  FormSpacingCheckboxLabelPadding: La
}), []), af = () => ie(() => ({
  xl: ve,
  l: we,
  m: Se,
  s: Ce,
  xs: je
}), []), sf = () => ie(() => ({
  body: Ne,
  bodyLarge: Te,
  bodySmall: De,
  ledeText: Be,
  ledeTextSmall: Fe
}), []), of = () => ie(() => ({
  headings: {
    xl: ve,
    l: we,
    m: Se,
    s: Ce,
    xs: je
  },
  paragraphs: {
    body: Ne,
    bodyLarge: Te,
    bodySmall: De,
    ledeText: Be,
    ledeTextSmall: Fe
  },
  fonts: {
    family: {
      base: vt,
      fallback: wt,
      print: St
    },
    weight: {
      normal: Ct,
      bold: jt,
      light: Nt
    },
    sizes: {
      mobile: {
        size14: Tt,
        size16: Ft,
        size19: Mt,
        size22: $t,
        size26: Pt,
        size36: Ot,
        size48: Yt
      },
      tablet: {
        size14: Dt,
        size16: Rt,
        size19: Et,
        size22: At,
        size26: zt,
        size36: Ut,
        size48: Vt
      },
      print: {
        size14: Bt,
        size16: It,
        size19: Lt,
        size22: Ht,
        size26: Wt,
        size36: Gt,
        size48: qt
      }
    }
  }
}), []), Va = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, he = {
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
function lf(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Va, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${he.normal.eot}?#iefix") format("eot"),
       url("${t}${he.normal.woff2}") format("woff2"),
       url("${t}${he.normal.woff}") format("woff"),
       url("${t}${he.normal.ttf}") format("truetype");
  src: url("${t}${he.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${he.bold.eot}?#iefix") format("eot"),
       url("${t}${he.bold.woff2}") format("woff2"),
       url("${t}${he.bold.woff}") format("woff"),
       url("${t}${he.bold.ttf}") format("truetype");
  src: url("${t}${he.bold.eot}");
}`), a.join(`
`);
}
function cf(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Va, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${he.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${he.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${he.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${he.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const df = '"Frutiger W01", Arial, Helvetica, sans-serif', uf = "Arial, Helvetica, sans-serif";
async function hf() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  En as Account,
  lh as ActionLink,
  $h as AdaptiveDataGrid,
  Sl as AnimationDurationFast,
  Cl as AnimationDurationNormal,
  jl as AnimationDurationSlow,
  Bl as AnimationEasingBounce,
  Nl as AnimationEasingEaseIn,
  Dl as AnimationEasingEaseInOut,
  Tl as AnimationEasingEaseOut,
  al as AppointmentCard,
  zi as AriaDataGrid,
  un as AriaTabsDataGrid,
  $h as AriaTabsDataGridAdaptive,
  os as BackLink,
  sa as BorderColorCard,
  oa as BorderColorCardHover,
  ra as BorderColorDefault,
  ia as BorderColorError,
  aa as BorderColorForm,
  Gl as BorderRadiusLarge,
  Ul as BorderRadiusMedium,
  Wl as BorderRadiusNone,
  Ol as BorderRadiusSmall,
  Al as BorderWidthCardBottom,
  El as BorderWidthDefault,
  Ll as BorderWidthFormElement,
  $l as BorderWidthFormElementError,
  Hl as BorderWidthPanel,
  zl as BorderWidthTableCell,
  Pl as BorderWidthTableHeader,
  Ii as Breadcrumb,
  Cu as BreakpointDesktop,
  ju as BreakpointLargeDesktop,
  wu as BreakpointMobile,
  Su as BreakpointTablet,
  me as Button,
  _d as ButtonBorderRadius,
  yd as ButtonBorderWidth,
  id as ButtonPrimaryBackgroundActive,
  sd as ButtonPrimaryBackgroundDefault,
  ld as ButtonPrimaryBackgroundDisabled,
  od as ButtonPrimaryBackgroundHover,
  ud as ButtonPrimaryBorderDefault,
  hd as ButtonPrimaryBorderFocus,
  cd as ButtonPrimaryTextDefault,
  dd as ButtonPrimaryTextDisabled,
  gd as ButtonSecondaryBackgroundActive,
  fd as ButtonSecondaryBackgroundDefault,
  pd as ButtonSecondaryBackgroundHover,
  md as ButtonSecondaryBackgroundSolid,
  xd as ButtonSecondaryBorderDefault,
  bd as ButtonSecondaryTextDefault,
  kd as ButtonShadowSize,
  Da as ButtonSpacingPaddingHorizontalDesktop,
  Na as ButtonSpacingPaddingHorizontalMobile,
  Ta as ButtonSpacingPaddingVerticalDesktop,
  ja as ButtonSpacingPaddingVerticalMobile,
  vd as ButtonTypographyWeight,
  Xr as Card,
  wd as CardBackgroundDefault,
  jd as CardBorderBottom,
  Sd as CardBorderDefault,
  Cd as CardBorderHover,
  Fd as CardBorderWidthBottom,
  Bd as CardBorderWidthDefault,
  Ch as CardGroup,
  jh as CardGroupItem,
  Rd as CardShadowDefault,
  Id as CardShadowHover,
  Ra as CardSpacingHeadingMargin,
  Fa as CardSpacingPaddingDesktop,
  Ba as CardSpacingPaddingMobile,
  Td as CardTextDescription,
  Nd as CardTextHeading,
  Dd as CardTextLink,
  Nh as CareCard,
  ch as CharacterCount,
  is as Checkbox,
  ls as Checkboxes,
  nc as ColorBorderDefault,
  rc as ColorBorderSecondary,
  Bc as ColorButtonLoginActive,
  Tc as ColorButtonLoginBackground,
  Dc as ColorButtonLoginHover,
  Fc as ColorButtonLoginShadow,
  dc as ColorButtonPrimaryActive,
  ic as ColorButtonPrimaryBackground,
  cc as ColorButtonPrimaryHover,
  uc as ColorButtonPrimaryShadow,
  lc as ColorButtonPrimaryText,
  vc as ColorButtonReverseActive,
  yc as ColorButtonReverseBackground,
  kc as ColorButtonReverseHover,
  wc as ColorButtonReverseShadow,
  _c as ColorButtonReverseText,
  bc as ColorButtonSecondaryActive,
  hc as ColorButtonSecondaryBackground,
  fc as ColorButtonSecondaryBackgroundSolid,
  mc as ColorButtonSecondaryBorder,
  gc as ColorButtonSecondaryHover,
  xc as ColorButtonSecondaryShadow,
  pc as ColorButtonSecondaryText,
  jc as ColorButtonWarningActive,
  Sc as ColorButtonWarningBackground,
  Cc as ColorButtonWarningHover,
  Nc as ColorButtonWarningShadow,
  ac as ColorError,
  ec as ColorFocusBackground,
  tc as ColorFocusText,
  oc as ColorFormBackground,
  sc as ColorFormBorder,
  ka as ColorGrey1,
  va as ColorGrey2,
  wa as ColorGrey3,
  Sa as ColorGrey4,
  Ca as ColorGrey5,
  Xl as ColorLinkActive,
  Zl as ColorLinkDefault,
  Jl as ColorLinkHover,
  Ql as ColorLinkVisited,
  da as ColorPrimaryBlack,
  la as ColorPrimaryBlue,
  fa as ColorPrimaryDarkPink,
  ua as ColorPrimaryGreen,
  ha as ColorPrimaryPurple,
  ma as ColorPrimaryRed,
  ca as ColorPrimaryWhite,
  pa as ColorPrimaryYellow,
  ya as ColorSecondaryAquaGreen,
  xa as ColorSecondaryOrange,
  ga as ColorSecondaryPaleYellow,
  _a as ColorSecondaryPink,
  ba as ColorSecondaryWarmYellow,
  Yl as ColorTextPrimary,
  Kl as ColorTextPrint,
  ql as ColorTextReverse,
  Vl as ColorTextSecondary,
  Hn as Column,
  ed as ComponentBlur,
  Yc as ComponentBreadcrumbChevronMarginLeft,
  Vc as ComponentBreadcrumbChevronMarginRight,
  Kc as ComponentBreadcrumbPaddingTopDesktop,
  qc as ComponentBreadcrumbPaddingTopMobile,
  Ec as ComponentButtonPaddingDesktopHorizontal,
  Mc as ComponentButtonPaddingDesktopVertical,
  Ic as ComponentButtonPaddingMobileHorizontal,
  Rc as ComponentButtonPaddingMobileVertical,
  Lc as ComponentButtonShadowSize,
  Oc as ComponentCardHeadingMargin,
  Wc as ComponentCardPaddingDesktop,
  zc as ComponentCardPaddingMobile,
  nd as ComponentDetails,
  rd as ComponentExpander,
  Pc as ComponentFormCheckboxLabelPadding,
  Hc as ComponentFormCheckboxSize,
  $c as ComponentFormInputMinHeight,
  Ac as ComponentFormInputPadding,
  td as ComponentLink,
  ad as ComponentPagination,
  Gc as ComponentPanelPaddingDesktop,
  Uc as ComponentPanelPaddingMobile,
  Qc as ComponentSpread,
  Jc as ComponentSummaryListCellPaddingHorizontal,
  Zc as ComponentSummaryListCellPaddingVertical,
  Xc as ComponentSummaryListRowMargin,
  Ir as Container,
  Sh as ContentsList,
  Va as DEFAULT_FONT_CONFIG,
  Mh as DashboardSummaryGrid,
  bh as DateInput,
  Ei as Details,
  Li as DoDontList,
  sh as ElevationHigh,
  rh as ElevationLow,
  ah as ElevationMedium,
  nh as ElevationNone,
  tr as ErrorMessage,
  gh as ErrorSummary,
  $i as Expander,
  he as FRUTIGER_FONT_FILES,
  An as Fieldset,
  Xu as FocusOutlineOffset,
  Qu as FocusOutlineStyle,
  Ju as FocusOutlineWidth,
  th as FocusShadowButton,
  eh as FocusShadowInput,
  vt as FontFamilyBase,
  wt as FontFamilyFallback,
  St as FontFamilyPrint,
  Mn as FontLineHeightBase,
  Tt as FontSize14Mobile,
  Bt as FontSize14Print,
  Dt as FontSize14Tablet,
  Ft as FontSize16Mobile,
  It as FontSize16Print,
  Rt as FontSize16Tablet,
  Mt as FontSize19Mobile,
  Lt as FontSize19Print,
  Et as FontSize19Tablet,
  $t as FontSize22Mobile,
  Ht as FontSize22Print,
  At as FontSize22Tablet,
  Pt as FontSize26Mobile,
  Wt as FontSize26Print,
  zt as FontSize26Tablet,
  Ot as FontSize36Mobile,
  Gt as FontSize36Print,
  Ut as FontSize36Tablet,
  Yt as FontSize48Mobile,
  qt as FontSize48Print,
  Vt as FontSize48Tablet,
  In as FontSizeBase,
  jt as FontWeightBold,
  Nt as FontWeightLight,
  Ct as FontWeightNormal,
  Hr as Footer,
  Qd as FormBorderRadius,
  Jd as FormBorderWidthDefault,
  Xd as FormBorderWidthError,
  qd as FormErrorTextDefault,
  Kd as FormErrorTypographyWeight,
  Zd as FormHintTextDefault,
  Md as FormInputBackgroundDefault,
  Ld as FormInputBackgroundDisabled,
  $d as FormInputBackgroundError,
  Ed as FormInputBackgroundFocus,
  Ad as FormInputBorderDefault,
  zd as FormInputBorderDisabled,
  Pd as FormInputBorderError,
  Hd as FormInputBorderFocus,
  Wd as FormInputTextDefault,
  Ud as FormInputTextDisabled,
  Od as FormInputTextPlaceholder,
  Gd as FormLabelTextDefault,
  Yd as FormLabelTextRequired,
  Vd as FormLabelTypographyWeight,
  La as FormSpacingCheckboxLabelPadding,
  Ea as FormSpacingCheckboxSize,
  Ma as FormSpacingInputMinHeight,
  Ia as FormSpacingInputPadding,
  vh as GanttChart,
  fs as Grid,
  Tu as GridGutter,
  Du as GridGutterHalf,
  Nu as GridPageWidth,
  Ar as Header,
  _h as HeaderSSR,
  $r as HeaderSearch,
  kh as HeaderStatic,
  Ee as Heading,
  we as HeadingsNhsukHeadingL,
  Se as HeadingsNhsukHeadingM,
  Ce as HeadingsNhsukHeadingS,
  ve as HeadingsNhsukHeadingXl,
  je as HeadingsNhsukHeadingXs,
  _s as Hero,
  Rr as Hint,
  Ih as Images,
  Ln as Input,
  Th as InsetText,
  $n as Label,
  vu as LayoutColumnActions,
  xu as LayoutColumnFull,
  yu as LayoutColumnHalf,
  ku as LayoutColumnQuarter,
  _u as LayoutColumnThird,
  bu as LayoutContainerMaxWidth,
  gs as List,
  Mr as MainWrapper,
  sl as MedicationCard,
  Vh as NHSBodyText,
  qh as NHSBodyTextLarge,
  Kh as NHSBodyTextSmall,
  Wh as NHSHeading1,
  Oh as NHSHeading2,
  Uh as NHSHeading3,
  Gh as NHSHeading4,
  Yh as NHSHeading5,
  Zh as NHSLedeText,
  Jh as NHSLedeTextSmall,
  yh as NHSThemeProvider,
  uf as NHS_FALLBACK_FONT_STACK,
  df as NHS_FONT_STACK,
  Hh as PageTemplate,
  wh as Pagination,
  Mi as Panel,
  Ne as ParagraphsBody,
  Te as ParagraphsBodyLarge,
  De as ParagraphsBodySmall,
  Be as ParagraphsLedeText,
  Fe as ParagraphsLedeTextSmall,
  rl as PatientCard,
  dh as Radios,
  $h as ResponsiveDataGrid,
  Ah as ResponsiveDataGridDemo,
  mt as Row,
  hs as Select,
  ds as SelectOption,
  Gu as ShadowButtonDefault,
  qu as ShadowButtonFocus,
  Yu as ShadowButtonSecondary,
  Vu as ShadowButtonWarning,
  Ku as ShadowCardDefault,
  Zu as ShadowCardHover,
  gu as SizeButtonMinHeightDesktop,
  pu as SizeButtonMinHeightMobile,
  iu as SizeFormControlLarge,
  ou as SizeFormControlMedium,
  su as SizeFormControlSmall,
  fu as SizeFormInputWidth2xl,
  mu as SizeFormInputWidth3xl,
  uu as SizeFormInputWidthLg,
  du as SizeFormInputWidthMd,
  cu as SizeFormInputWidthSm,
  hu as SizeFormInputWidthXl,
  lu as SizeFormInputWidthXs,
  ru as SizeIconExtraLarge,
  nu as SizeIconLarge,
  tu as SizeIconMedium,
  au as SizeIconNhsDefault,
  eu as SizeIconSmall,
  Jr as SkipLink,
  Eh as SortStatusControl,
  $a as Spacing0,
  Aa as Spacing1,
  Ha as Spacing2,
  Pa as Spacing3,
  za as Spacing4,
  Wa as Spacing5,
  Oa as Spacing6,
  Ua as Spacing7,
  Ga as Spacing8,
  Ya as Spacing9,
  fn as SpacingResponsive0Mobile,
  mn as SpacingResponsive0Tablet,
  pn as SpacingResponsive1Mobile,
  gn as SpacingResponsive1Tablet,
  bn as SpacingResponsive2Mobile,
  xn as SpacingResponsive2Tablet,
  yn as SpacingResponsive3Mobile,
  _n as SpacingResponsive3Tablet,
  kn as SpacingResponsive4Mobile,
  vn as SpacingResponsive4Tablet,
  wn as SpacingResponsive5Mobile,
  Sn as SpacingResponsive5Tablet,
  Cn as SpacingResponsive6Mobile,
  jn as SpacingResponsive6Tablet,
  Nn as SpacingResponsive7Mobile,
  Tn as SpacingResponsive7Tablet,
  Dn as SpacingResponsive8Mobile,
  Bn as SpacingResponsive8Tablet,
  Fn as SpacingResponsive9Mobile,
  Rn as SpacingResponsive9Tablet,
  uh as SpacingUtilities,
  Wu as StateDisabledBackground,
  Ou as StateDisabledBorder,
  Uu as StateDisabledText,
  Bu as StateErrorBackground,
  Fu as StateErrorBorder,
  Ru as StateErrorText,
  Hu as StateInfoBackground,
  Pu as StateInfoBorder,
  zu as StateInfoText,
  Iu as StateSuccessBackground,
  Mu as StateSuccessBorder,
  Eu as StateSuccessText,
  Lu as StateWarningBackground,
  $u as StateWarningBorder,
  Au as StateWarningText,
  Pi as SummaryCard,
  Dh as SummaryList,
  Bh as Table,
  Fh as Tabs,
  Me as Tag,
  Ai as TaskList,
  cs as Textarea,
  Ph as TransactionalPageTemplate,
  Fl as TransitionButtonDefault,
  Rl as TransitionButtonShadow,
  Ml as TransitionCardHover,
  Il as TransitionInputFocus,
  ol as VitalsCard,
  ph as WIDTH_FRACTIONS,
  Rh as WarningCallout,
  na as WidthContainer,
  fh as WidthUtilities,
  hf as checkFrutigerLoaded,
  Kn as createGenericTabsConfig,
  Lh as createTCHTabsConfig,
  lf as generateFrutigerFontFace,
  zh as getResponsiveStyles,
  hh as getSpacingClass,
  mh as getWidthClass,
  cf as preloadFrutigerFonts,
  Qi as tchDataConfig,
  Qh as useColors,
  rf as useComponentSpacing,
  af as useNHSHeadings,
  sf as useNHSParagraphs,
  xh as useNHSTheme,
  of as useNHSTypographySystem,
  nf as useResponsiveSpacing,
  ef as useSpacing,
  Xh as useTokens,
  tf as useTypography
};
//# sourceMappingURL=index.esm.js.map
