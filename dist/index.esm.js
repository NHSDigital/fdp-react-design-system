import * as K from "react";
import tt, { useState as Oe, useEffect as nt, useCallback as fe, useRef as Ze, createElement as Yi, useMemo as Re, useContext as Zi, createContext as qi, forwardRef as On, useImperativeHandle as Ji, useId as tr, useReducer as Xi, memo as wd } from "react";
import { createPortal as _d } from "react-dom";
function Sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} }, Un = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function kd() {
  if (Is) return Un;
  Is = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, o, s) {
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
  return Un.Fragment = t, Un.jsx = n, Un.jsxs = n, Un;
}
var Wn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ds;
function Nd() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === w ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case m:
          return "Fragment";
        case S:
          return "Profiler";
        case g:
          return "StrictMode";
        case b:
          return "Suspense";
        case v:
          return "SuspenseList";
        case y:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case x:
            return "Portal";
          case j:
            return (B.displayName || "Context") + ".Provider";
          case I:
            return (B._context.displayName || "Context") + ".Consumer";
          case k:
            var J = B.render;
            return B = B.displayName, B || (B = J.displayName || J.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case C:
            return J = B.displayName || null, J !== null ? J : e(B.type) || "Memo";
          case _:
            J = B._payload, B = B._init;
            try {
              return e(B(J));
            } catch {
            }
        }
      return null;
    }
    function t(B) {
      return "" + B;
    }
    function n(B) {
      try {
        t(B);
        var J = !1;
      } catch {
        J = !0;
      }
      if (J) {
        J = console;
        var F = J.error, $ = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return F.call(
          J,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          $
        ), t(B);
      }
    }
    function a(B) {
      if (B === m) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === _)
        return "<...>";
      try {
        var J = e(B);
        return J ? "<" + J + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var B = E.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (T.call(B, "key")) {
        var J = Object.getOwnPropertyDescriptor(B, "key").get;
        if (J && J.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, J) {
      function F() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          J
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: F,
        configurable: !0
      });
    }
    function c() {
      var B = e(this.type);
      return D[B] || (D[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function d(B, J, F, $, q, A, z, P) {
      return F = A.ref, B = {
        $$typeof: p,
        type: B,
        key: J,
        props: A,
        _owner: q
      }, (F !== void 0 ? F : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(B, "ref", { enumerable: !1, value: null }), B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(B, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(B, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, J, F, $, q, A, z, P) {
      var V = J.children;
      if (V !== void 0)
        if ($)
          if (L(V)) {
            for ($ = 0; $ < V.length; $++)
              f(V[$]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(V);
      if (T.call(J, "key")) {
        V = e(B);
        var G = Object.keys(J).filter(function(de) {
          return de !== "key";
        });
        $ = 0 < G.length ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}", Q[V + $] || (G = 0 < G.length ? "{" + G.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          $,
          V,
          G,
          V
        ), Q[V + $] = !0);
      }
      if (V = null, F !== void 0 && (n(F), V = "" + F), i(J) && (n(J.key), V = "" + J.key), "key" in J) {
        F = {};
        for (var ee in J)
          ee !== "key" && (F[ee] = J[ee]);
      } else F = J;
      return V && l(
        F,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), d(
        B,
        V,
        A,
        q,
        o(),
        F,
        z,
        P
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === p && B._store && (B._store.validated = 1);
    }
    var h = tt, p = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), j = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), y = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), E = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = Object.prototype.hasOwnProperty, L = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var N, D = {}, R = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), Z = M(a(s)), Q = {};
    Wn.Fragment = m, Wn.jsx = function(B, J, F, $, q) {
      var A = 1e4 > E.recentlyCreatedOwnerStacks++;
      return u(
        B,
        J,
        F,
        !1,
        $,
        q,
        A ? Error("react-stack-top-frame") : R,
        A ? M(a(B)) : Z
      );
    }, Wn.jsxs = function(B, J, F, $, q) {
      var A = 1e4 > E.recentlyCreatedOwnerStacks++;
      return u(
        B,
        J,
        F,
        !0,
        $,
        q,
        A ? Error("react-stack-top-frame") : R,
        A ? M(a(B)) : Z
      );
    };
  })()), Wn;
}
var Ts;
function Cd() {
  return Ts || (Ts = 1, process.env.NODE_ENV === "production" ? _r.exports = kd() : _r.exports = Nd()), _r.exports;
}
var r = Cd(), Oa = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ls;
function jd() {
  return Ls || (Ls = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
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
  })(Oa)), Oa.exports;
}
var Md = jd();
const ke = /* @__PURE__ */ Sd(Md), Vv = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = ke(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ r.jsxs(
    "a",
    {
      className: s,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...o,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ r.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ r.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-action-link__text", children: e })
      ]
    }
  ) });
}, Ki = ({
  ariaLabel: e = "Account",
  items: t = [],
  className: n,
  variant: a = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const o = (s) => {
    const i = s.icon ? /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": s.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ r.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = s.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: s.href,
        children: c
      }
    ) : s.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: c })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: c });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: ke(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (s, i) => s && /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ke(
              "nhsuk-account__item nhsuk-header__account-item",
              s.className
            ),
            children: o(s)
          },
          i
        )
      ) })
    }
  );
};
var Qi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Qi || {}), el = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(el || {});
function Id(e) {
  const t = e.variant || "primary", n = e.size || "default", a = !!e.fullWidth, o = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    n !== "default" ? `nhs-aria-button--${n}` : "",
    a ? "nhs-aria-button--full-width" : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.href ? "a" : "button",
    classes: o,
    data: { module: "nhs-button" },
    attrs: e.href ? { href: e.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!e.preventDoubleClick
  };
}
const { forwardRef: Dd, useCallback: an, useState: Ua } = K;
function Td(e, t) {
  const {
    children: n,
    variant: a = Qi.Primary,
    size: o = el.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Ua(!1), [f, h] = Ua(!1), [p, x] = Ua(!1), m = Id({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), g = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", S = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...g && { "data-disabled": "true" }
  }, I = an(
    () => !g && u(!0),
    [g]
  ), j = an(() => u(!1), []), k = an(
    () => !g && h(!0),
    [g]
  ), b = an(() => {
    h(!1), u(!1);
  }, []), v = an(() => x(!0), []), C = an(() => x(!1), []), _ = an(
    (V) => {
      V.key === " " && ("href" in c || V.currentTarget.getAttribute("role") === "button") && (V.preventDefault(), V.currentTarget.click());
    },
    [c]
  ), y = an(
    (V) => {
      if (l) {
        const G = V.currentTarget;
        if (G.getAttribute("data-processing") === "true") {
          V.preventDefault();
          return;
        }
        G.setAttribute("data-processing", "true"), setTimeout(() => {
          G.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: V,
      style: G,
      title: ee,
      ["aria-label"]: de,
      ["aria-describedby"]: Y,
      ["aria-labelledby"]: ae,
      tabIndex: le,
      ...be
    } = c, pe = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: pe.href,
        target: pe.target,
        rel: pe.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...S,
        ...l && { "data-prevent-double-click": "true" },
        ...be,
        onKeyDown: (Ie) => {
          pe.onKeyDown?.(Ie), _(Ie);
        },
        onClick: (Ie) => {
          pe.onClick?.(Ie), y(Ie);
        },
        onMouseDown: (Ie) => {
          pe.onMouseDown?.(Ie), I();
        },
        onMouseUp: (Ie) => {
          pe.onMouseUp?.(Ie), j();
        },
        onMouseEnter: (Ie) => {
          pe.onMouseEnter?.(Ie), k();
        },
        onMouseLeave: (Ie) => {
          pe.onMouseLeave?.(Ie), b();
        },
        onFocus: (Ie) => {
          pe.onFocus?.(Ie), v();
        },
        onBlur: (Ie) => {
          pe.onBlur?.(Ie), C();
        },
        "aria-disabled": pe["aria-disabled"],
        ...pe["aria-disabled"] === "true" && { tabIndex: -1 },
        id: V,
        style: G,
        title: ee,
        "aria-label": de,
        "aria-describedby": Y,
        "aria-labelledby": ae,
        tabIndex: le,
        children: n
      }
    );
  }
  const {
    id: w,
    style: E,
    title: T,
    ["aria-label"]: L,
    ["aria-describedby"]: M,
    ["aria-labelledby"]: N,
    tabIndex: D,
    name: R,
    value: Z,
    form: Q,
    formAction: B,
    formEncType: J,
    formMethod: F,
    formNoValidate: $,
    formTarget: q,
    autoFocus: A,
    ...z
  } = c, P = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: P.type || "button",
      disabled: P.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...S,
      ...l && { "data-prevent-double-click": "true" },
      ...P.disabled && { "aria-disabled": "true" },
      ...z,
      onKeyDown: (V) => {
        P.onKeyDown?.(V), _(V);
      },
      onClick: (V) => {
        P.onClick?.(V), y(V);
      },
      onMouseDown: (V) => {
        P.onMouseDown?.(V), I();
      },
      onMouseUp: (V) => {
        P.onMouseUp?.(V), j();
      },
      onMouseEnter: (V) => {
        P.onMouseEnter?.(V), k();
      },
      onMouseLeave: (V) => {
        P.onMouseLeave?.(V), b();
      },
      onFocus: (V) => {
        P.onFocus?.(V), v();
      },
      onBlur: (V) => {
        P.onBlur?.(V), C();
      },
      id: w,
      style: E,
      title: T,
      "aria-label": L,
      "aria-describedby": M,
      "aria-labelledby": N,
      tabIndex: D,
      name: R,
      value: Z,
      form: Q,
      formAction: B,
      formEncType: J,
      formMethod: F,
      formNoValidate: $,
      formTarget: q,
      autoFocus: A,
      children: n
    }
  );
}
const xt = Dd(Td);
xt.displayName = "Button";
const nr = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ke(
    "nhsuk-back-link",
    a
  ), c = ke(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ r.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx(
    "button",
    {
      className: c,
      onClick: s,
      type: "button",
      ...i,
      children: d()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: c,
      href: n,
      ...i,
      children: d()
    }
  ) });
};
function Ld(e) {
  const { color: t = "default", noBorder: n, closable: a, disabled: o, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    n ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!o };
}
const st = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = Ld({ color: a, noBorder: o, closable: s, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...d, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: f,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, Ad = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: d,
  onChange: u,
  onBlur: f,
  onFocus: h,
  attributes: p,
  ...x
}) => {
  const [m, g] = Oe(a), S = n !== void 0, I = S ? n : m;
  nt(() => {
    S || g(a);
  }, [a, S]);
  const j = (_) => {
    const y = _.target.checked;
    S || g(y), u?.(y, _);
  }, k = i ? `${e}-hint` : void 0, b = l ? `${e}-error` : void 0, v = [k, b].filter(Boolean).join(" ") || void 0, C = ke(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: C, ...x, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: I,
        disabled: o,
        onChange: j,
        onBlur: f,
        onFocus: h,
        "aria-describedby": v,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ r.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: b, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Ad.displayName = "Checkbox";
function tl(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Qo = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: c = !1,
  hasError: d = !1,
  describedBy: u,
  className: f,
  width: h = "full",
  inputMode: p,
  autoComplete: x,
  maxLength: m,
  minLength: g,
  pattern: S,
  step: I,
  min: j,
  max: k,
  showValueLabels: b = !1,
  showCurrentValue: v = !1,
  valueLabels: C,
  onChange: _,
  onBlur: y,
  onFocus: w,
  onKeyDown: E,
  ...T
}) => {
  const [L, M] = Oe(a || o || (n === "range" ? j || "0" : ""));
  nt(() => {
    a !== void 0 && M(a);
  }, [a]);
  const N = (q) => {
    const A = q.target;
    M(A.value), ("type" in q && q.nativeEvent || q.type === "keydown") && _?.(q);
  }, { classes: D, isRange: R } = tl({ type: n, hasError: d, width: h, className: f }), Z = a !== void 0, Q = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: x,
    maxLength: m,
    minLength: g,
    pattern: S,
    step: I,
    min: j,
    max: k,
    onChange: N,
    onBlur: y,
    onFocus: w,
    onKeyDown: (q) => {
      if (R && /[0-9]/.test(q.key)) {
        const A = (L?.toString() || "") + q.key;
        q.target.value = A, N(q);
      }
      E?.(q);
    },
    ...T
  }, B = !Z && o !== void 0 ? { defaultValue: o } : {}, J = Z ? { value: a } : {}, F = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      ...J,
      ...B,
      "data-current-value": L,
      ...Q
    }
  ), $ = R ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    b && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: C?.min || j || "0" }),
      F(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: C?.max || k || "100" })
    ] }),
    !b && F(),
    v && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      C?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: L })
    ] }) })
  ] }) : null;
  return R ? $ : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: D,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: x,
      maxLength: m,
      minLength: g,
      pattern: S,
      step: I,
      min: j,
      max: k,
      onChange: _,
      onBlur: y,
      onFocus: w,
      onKeyDown: E,
      ...T
    }
  );
};
function $d(e) {
  const t = e.size || "m", n = [
    "nhsuk-label",
    t !== "m" ? `nhsuk-label--${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.isPageHeading ? "h1" : "label",
    classes: n,
    size: t,
    htmlFor: e.isPageHeading ? void 0 : e.htmlFor,
    isPageHeading: !!e.isPageHeading
  };
}
const es = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = $d({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function Ed(e) {
  const t = ["nhsuk-fieldset", e.className || ""].filter(Boolean).join(" "), n = e.legend ? [
    "nhsuk-fieldset__legend",
    e.legend.size ? `nhsuk-fieldset__legend--${e.legend.size}` : "",
    e.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: t,
    legendClasses: n,
    legendIsPageHeading: !!e.legend?.isPageHeading,
    describedBy: e.describedBy
  };
}
const ts = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = Ed({
    className: n,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return s.legendIsPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: s.fieldsetClasses,
      "aria-describedby": s.describedBy,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: s.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function Fd(e) {
  const t = [
    "nhsuk-checkboxes",
    e.small ? "nhsuk-checkboxes--small" : "",
    e.className || ""
  ].filter(Boolean).join(" "), n = [
    "nhsuk-form-group",
    e.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: t, formGroupClasses: n };
}
const Pd = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: c = "",
  small: d = !1,
  onChange: u,
  fieldsetAttributes: f,
  attributes: h,
  ...p
}) => {
  const [x, m] = Oe(
    e.filter((_) => _.checked).map((_) => _.value)
  ), g = n || t, S = i ? `${g}-hint` : void 0, I = l ? `${g}-error` : void 0, j = [S, I].filter(Boolean).join(" ") || void 0, k = (_, y) => {
    let w;
    y ? w = [...x, _] : w = x.filter((E) => E !== _), m(w), u?.(w);
  }, b = () => e.map((_, y) => {
    const w = `${g}-${y + 1}`, E = `${w}-conditional`, T = x.includes(_.value), L = _.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: _.value,
          checked: T,
          disabled: L,
          onChange: (M) => k(_.value, M.target.checked),
          "aria-describedby": _.hint ? `${w}-hint` : j,
          ..._.conditional && {
            "aria-controls": E,
            "aria-expanded": T ? "true" : "false"
          },
          ..._.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: _.text }),
      _.hint && /* @__PURE__ */ r.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: _.hint }),
      _.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ke("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !T
          }),
          id: E,
          children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            _.conditional.label && /* @__PURE__ */ r.jsx(es, { htmlFor: _.conditional.id, children: _.conditional.label }),
            /* @__PURE__ */ r.jsx(Qo, { ..._.conditional })
          ] }) : _.conditional
        }
      )
    ] }, _.value);
  }), { classes: v, formGroupClasses: C } = Fd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: C, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    ts,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: j,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: S, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: I, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: v, children: b() })
      ]
    }
  ) });
};
Pd.displayName = "Checkboxes";
function Rd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Bd = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: c = !1,
  describedBy: d,
  className: u,
  rows: f = 5,
  cols: h,
  maxLength: p,
  minLength: x,
  wrap: m = "soft",
  resize: g = "vertical",
  autoComplete: S,
  spellCheck: I,
  onChange: j,
  onBlur: k,
  onFocus: b,
  onKeyDown: v,
  ...C
}) => {
  const { classes: _, describedBy: y } = Rd({ hasError: c, resize: g, className: u, describedBy: d });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: _,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": y,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: x,
      wrap: m,
      autoComplete: S,
      spellCheck: I,
      onChange: j,
      onBlur: k,
      onFocus: b,
      onKeyDown: v,
      ...C
    }
  );
};
function Hd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const nl = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = Hd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Yv = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = s ?? i ?? "", [x, m] = Oe(p), [g, S] = Oe(0), [I, j] = Oe(!1), [k, b] = Oe(!1), v = fe((T) => n ? T.trim() === "" ? 0 : T.trim().split(/\s+/).length : T.length, [n]);
  nt(() => {
    const T = v(x), L = t || n || 0, M = L - T, N = Math.floor(L * (a / 100));
    S(M), j(T > L), b(T >= N || T > L), u && u(T, M);
  }, [x, t, n, a, v, u]);
  const C = (T) => {
    const L = T.target.value;
    m(L), f && f(T);
  }, _ = () => {
    const T = t || n || 0, L = n ? "word" : "character", M = n ? "words" : "characters";
    if (!k)
      return `You can enter up to ${T} ${T === 1 ? L : M}`;
    if (I) {
      const N = Math.abs(g);
      return `You have ${N} ${N === 1 ? L : M} too many`;
    } else
      return `You have ${g} ${g === 1 ? L : M} remaining`;
  }, y = ke(
    "nhsuk-character-count",
    c
  ), w = ke(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !k,
      "nhsuk-error-message": I
    },
    d?.classes
  ), E = ke(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": I
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          Bd,
          {
            id: e,
            name: o,
            value: s !== void 0 ? x : void 0,
            defaultValue: s === void 0 ? i ?? x : void 0,
            rows: l,
            className: E,
            onChange: C,
            "aria-describedby": `${e}-info`,
            "aria-invalid": I || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          nl,
          {
            id: `${e}-info`,
            className: w,
            role: "status",
            "aria-live": "polite",
            children: _()
          }
        )
      ]
    }
  );
};
function zd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Od = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ke(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ r.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...s,
      children: o
    }
  );
}, Ud = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: f,
  autoComplete: h,
  options: p,
  children: x,
  onChange: m,
  onBlur: g,
  onFocus: S,
  ...I
}) => {
  const { classes: j } = zd({ hasError: l, className: d }), k = () => p ? p.map((v, C) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: v.value,
      disabled: v.disabled,
      "data-initial-selected": v.selected || void 0,
      children: v.text
    },
    `${v.value}-${C}`
  )) : null, b = o === void 0 && a === void 0 && p ? p.find((v) => v.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: j,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : b,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: g,
      onFocus: S,
      ...I,
      children: x || k()
    }
  );
}, Ar = Ud;
Ar.Option = Od;
function Wd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function rl(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: c,
  InputComponent: d
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: h,
    ...p
  } = e, {
    name: x,
    hasError: m = !1,
    describedBy: g,
    className: S,
    size: I = "normal",
    inline: j = !1,
    options: k,
    ...b
  } = p, { classes: v, describedBy: C } = Wd({ hasError: m, size: I, inline: j, className: S, describedBy: g });
  return /* @__PURE__ */ r.jsx(ts, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: v,
      ...b,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: k.map((_, y) => {
        const w = `${x}-${y}`, E = _.conditional ? `${w}-conditional` : void 0, T = n === _.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: w,
              name: x,
              type: "radio",
              value: _.value,
              disabled: _.disabled,
              ...t === "client" ? {
                checked: T,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (L) => {
                  L && c && (c.current[y] = L);
                }
              } : {
                defaultChecked: T,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": C
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: w, children: _.text }),
          _.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: _.hint }),
          _.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ke("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !T
              }),
              id: E,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof _.conditional == "object" && _.conditional !== null && "label" in _.conditional && "id" in _.conditional && "name" in _.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                _.conditional.label && /* @__PURE__ */ r.jsx(
                  es,
                  {
                    htmlFor: _.conditional.id,
                    children: _.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  d,
                  {
                    ..._.conditional
                  }
                )
              ] }) : _.conditional
            }
          )
        ] }, _.value);
      })
    }
  ) });
}
const Zv = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Oe(e || t || ""), c = Ze([]), d = Ze(i), u = (p) => {
    const x = p.target.value;
    x !== d.current && (d.current = x, l(x), n?.(p));
  }, f = (p) => {
    o?.(p);
  }, h = fe((p) => {
    const { key: x } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(x)) return;
    p.preventDefault();
    const m = c.current.filter((j) => j && !j.disabled), g = m.indexOf(p.currentTarget);
    if (g === -1) return;
    let S = g;
    ["ArrowDown", "ArrowRight"].includes(x) ? S = (g + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(x) && (S = (g - 1 + m.length) % m.length);
    const I = m[S];
    I && (I.focus(), I.checked || I.click());
  }, []);
  return rl(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: c,
      InputComponent: Qo
    }
  );
};
function Gd(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: d = !1,
    hasError: u = !1,
    describedBy: f,
    className: h,
    width: p = "full",
    inputMode: x,
    autoComplete: m,
    maxLength: g,
    minLength: S,
    pattern: I,
    step: j,
    min: k,
    max: b,
    showValueLabels: v = !1,
    showCurrentValue: C = !1,
    valueLabels: _,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: w,
    onFocus: E,
    onKeyDown: T,
    ...L
  } = e, { classes: M, isRange: N } = tl({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), D = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: x,
    autoComplete: m,
    maxLength: g,
    minLength: S,
    pattern: I,
    step: j,
    min: k,
    max: b,
    ...L
  };
  if (N) {
    const R = o ?? s ?? (typeof k < "u" ? String(k) : "0"), Z = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: M,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": R,
        ...D
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      v ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: _?.min || k || "0" }),
        Z,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: _?.max || b || "100" })
      ] }) : Z,
      C && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        _?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: R })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: M,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...D
    }
  );
}
const qv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return rl(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Gd
    }
  );
};
var bn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(bn || {}), Vd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Vd || {}), Yd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Yd || {}), Zd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Zd || {});
const al = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ke(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, ln = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: o,
  ...s
}) => {
  const i = ke(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...s, children: e });
}, rr = ({
  children: e,
  width: t = bn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: c,
  align: d,
  ...u
}) => {
  const f = ke(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${a}-tablet`]: !!a,
      [`nhsuk-u-${o}-desktop`]: !!o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, co = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...o
}) => {
  const s = tt.Children.toArray(e), i = s[0], l = tt.isValidElement(i) && (i.type === ln || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (l)
    d = s.map((u, f) => {
      if (!tt.isValidElement(u)) return u;
      const h = u, p = h.props || {}, x = typeof p.className == "string" ? p.className : "";
      if (!(h.type === ln || x.includes("nhsuk-grid-row"))) return u;
      const g = p.rowGap, S = g !== void 0 ? typeof g == "number" ? `${g}px` : g : c, I = f === 0 ? void 0 : S;
      if (!I) return u;
      const j = { ...p.style || {}, marginTop: I };
      return tt.cloneElement(h, { style: j });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(ln, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(al, { className: t, style: n, ...o, children: d });
}, qd = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = ke(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": a,
      [`nhsuk-list--${n}`]: n !== "medium"
    },
    o
  );
  return /* @__PURE__ */ r.jsx(c, { className: d, role: s, ...l, children: e });
}, Jd = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ke("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Xd = qd;
Xd.Item = Jd;
const Jv = ({
  debug: e = !1,
  className: t,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const o = [
    "nhsuk-spacing-utilities",
    e && "nhsuk-spacing-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: o, ...a, children: n });
}, Xv = {
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
}, Kv = ({
  debug: e = !1,
  className: t,
  children: n,
  ...a
}) => {
  if (!n)
    return null;
  const o = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: o, ...a, children: n });
}, Qv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, e1 = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ol = ({
  as: e = "main",
  size: t = "default",
  className: n,
  children: a,
  ...o
}) => {
  const s = [
    "nhsuk-main-wrapper",
    t === "large" && "nhsuk-main-wrapper--l",
    t === "small" && "nhsuk-main-wrapper--s",
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(e, { className: s, ...o, children: a });
};
function Kd(e) {
  switch (e) {
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
}
function Qd(e) {
  const t = e.level ?? Kd(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Ht = ({
  level: e,
  className: t,
  text: n,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const c = Qd({ level: e, size: s, className: t, marginBottom: i }), d = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return Yi(
    c.tag,
    { className: c.classes, style: c.style, ...l },
    d
  );
};
function eu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const As = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = eu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, t1 = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = Ze(null);
  nt(() => {
    c.current && c.current.focus();
  }, []);
  const d = ke(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (p) => {
    const x = p.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: x
      }
    ) : x;
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: c,
      className: d,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((p, x) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, x)) })
        ] })
      ]
    }
  );
}, n1 = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = Oe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, p] = Oe({}), x = (N) => N % 4 === 0 && N % 100 !== 0 || N % 400 === 0, m = (N, D) => {
    const R = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return N === 2 && x(D) ? 29 : R[N - 1];
  }, g = (N, D, R) => {
    if (!N) return;
    if (!/^\d+$/.test(N)) return "Day must be a number";
    const Z = parseInt(N, 10);
    if (Z < 1 || Z > 31) return "Day must be between 1 and 31";
    if (D && R) {
      const Q = parseInt(D, 10), B = parseInt(R, 10);
      if (!isNaN(Q) && !isNaN(B) && Q >= 1 && Q <= 12) {
        const J = m(Q, B);
        if (Z > J)
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
          ][Q - 1]} ${B} only has ${J} days`;
      }
    }
  }, S = (N) => {
    if (!N) return;
    if (!/^\d+$/.test(N)) return "Month must be a number";
    const D = parseInt(N, 10);
    if (D < 1 || D > 12) return "Month must be between 1 and 12";
  }, I = (N) => {
    if (!N) return;
    if (!/^\d+$/.test(N)) return "Year must be a number";
    const D = parseInt(N, 10), R = (/* @__PURE__ */ new Date()).getFullYear();
    if (D < 1900 || D > R + 10)
      return `Year must be between 1900 and ${R + 10}`;
  }, j = (N, D, R) => {
    if (!N || !D || !R) return;
    const Z = parseInt(N, 10), Q = parseInt(D, 10), B = parseInt(R, 10);
    if (isNaN(Z) || isNaN(Q) || isNaN(B) || Q < 1 || Q > 12 || B < 1900) return;
    const J = m(Q, B);
    Z < 1 || Z > J;
  }, k = fe(
    (N, D) => {
      const R = {
        ...u,
        [N]: D
      };
      f(R), c && c(R);
    },
    [u, c]
  ), b = fe(
    (N) => {
      const D = u[N];
      let R;
      if (N === "day")
        R = g(
          D,
          u.month,
          u.year
        );
      else if (N === "month") {
        if (R = S(D), !R && u.day) {
          const Z = g(
            u.day,
            D,
            u.year
          );
          p((Q) => ({
            ...Q,
            day: Z
          }));
        }
      } else if (N === "year" && (R = I(D), !R && u.day && u.month)) {
        const Z = g(
          u.day,
          u.month,
          D
        );
        p((Q) => ({
          ...Q,
          day: Z
        }));
      }
      if (p((Z) => ({
        ...Z,
        [N]: R
      })), u.day && u.month && u.year) {
        const Z = j(
          N === "day" ? D : u.day,
          N === "month" ? D : u.month,
          N === "year" ? D : u.year
        );
        Z && p((Q) => ({
          ...Q,
          day: Z
        }));
      }
    },
    [u, g, S, I, j]
  ), v = Re(
    () => [
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
    ],
    []
  ), C = n || v;
  let _ = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", w = l ? `${e}-error` : "";
  y && (_ = _ ? `${_} ${y}` : y), w && (_ = _ ? `${_} ${w}` : w);
  const E = Object.values(h).some((N) => N), T = ke("nhsuk-form-group", {
    "nhsuk-form-group--error": l || E
  }), L = ke("nhsuk-date-input", t), M = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(nl, { id: y, className: i.classes, children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ r.jsx(As, { id: w, className: l.classes, children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(h).map(
      ([N, D]) => D ? /* @__PURE__ */ r.jsxs(
        As,
        {
          id: `${e}-${N}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            D
          ]
        },
        `${N}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: L,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: C.map((N) => {
          const D = N.id || `${e}-${N.name}`, R = a ? `${a}[${N.name}]` : N.name, Z = N.label || N.name.charAt(0).toUpperCase() + N.name.slice(1), Q = h[N.name], B = u[N.name] || "";
          let J = _;
          if (Q) {
            const F = `${e}-${N.name}-error`;
            J = J ? `${J} ${F}` : F;
          }
          return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ r.jsx(es, { htmlFor: D, className: "nhsuk-date-input__label", children: Z }),
            /* @__PURE__ */ r.jsx(
              Qo,
              {
                id: D,
                name: R,
                value: B,
                className: ke("nhsuk-date-input__input", N.classes, {
                  "nhsuk-input--error": Q
                }),
                inputMode: N.inputmode,
                autoComplete: N.autocomplete,
                pattern: N.pattern,
                "aria-describedby": J || void 0,
                hasError: !!Q,
                onChange: (F) => k(N.name, F.target.value),
                onBlur: () => b(N.name)
              }
            )
          ] }, N.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: T, children: s ? /* @__PURE__ */ r.jsx(
    ts,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: _ || void 0,
      children: M()
    }
  ) : M() });
}, sl = {
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
}, il = qi(sl), tu = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...sl, ...t };
  return /* @__PURE__ */ r.jsx(il.Provider, { value: n, children: e });
}, r1 = () => {
  const e = Zi(il);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function nu() {
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
function ru() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = nu(), document.head.appendChild(e);
}
const a1 = ({ children: e, theme: t }) => (nt(() => {
  ru();
}, []), /* @__PURE__ */ r.jsx(tu, { theme: t, children: e })), au = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", ou = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", su = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", iu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", lu = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", cu = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", du = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var ns = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(ns || {}), rs = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(rs || {});
const uu = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: au,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: lu,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: iu,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: ou,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: su,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: cu,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: du,
      ariaLabel: "FDP"
    }
  }
};
function ll(e, t = "full") {
  return uu[e]?.[t];
}
function fu(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: c,
  navListRef: d,
  searchNode: u,
  brand: f
}) {
  const {
    className: h,
    logo: p = {},
    service: x = {},
    serviceName: m,
    organisation: g,
    search: S,
    account: I,
    navigation: j,
    containerClasses: k,
    variant: b = "default",
    attributes: v = {},
    fullWidth: C = !1,
    maxVisibleItems: _,
    // deprecated (ignored)
    responsiveNavigation: y = !0,
    logoVariant: w = rs.Full,
    // Prevent leaking to DOM when ...rest is spread
    logoVariant: E,
    ...T
  } = e, L = {
    ...x,
    text: x?.text ?? m
  };
  "maxVisibleItems" in T && delete T.maxVisibleItems;
  const M = L.href && !p.href || L.href && L.href === p.href, N = M ? L.href : p.href, R = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), Z = ke(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": b === "organisation" || g,
      "nhsuk-header--white": b === "white"
    },
    h
  ), Q = ke(
    "nhsuk-header__container",
    {
      "nhsuk-header__container--full-width": C && R === "nhs"
    },
    k
  ), B = ke(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": j?.white,
      "nhsuk-header__navigation--justified": j?.justified
    },
    j?.className
  ), J = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": p.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: p.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), F = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (R === "fdp" ? "FDP" : "NHS")
        }
      );
    if (R === "fdp") {
      const P = ll(ns.FDP, w);
      if (P?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: P.src,
            "data-logo-variant": w,
            width: "280",
            alt: P.ariaLabel || "FDP"
          }
        );
    }
    return J();
  }, $ = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, q = (P, V) => P ? V ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: V, children: P }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: P }) : null, A = (P) => P.active || P.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: P.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: P.html } }) : P.text }) : P.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: P.html } }) : P.text, z = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  return j?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: Z,
      role: "banner",
      "data-module": "nhsuk-header",
      ...v,
      ...T,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: Q, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            N ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: N, children: [
              F(),
              $(),
              M && q(L.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              F(),
              $(),
              M && q(L.text)
            ] }),
            L.text && !M && q(L.text, L.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            Ki,
            {
              ...I,
              variant: b === "white" ? "white" : "default"
            }
          )
        ] }),
        j && j.items && j.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: B,
            "aria-label": j.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ke(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  k
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (j?.items || []).map((P, V) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ke(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": P.active || P.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && V >= (s ?? 0)
                            },
                            P.className
                          ),
                          ...P.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: P.href,
                              ...P.active || P.current ? { "aria-current": P.current ? "page" : "true" } : {},
                              children: A(P)
                            }
                          )
                        },
                        V
                      )),
                      o && s !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
                        "button",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          type: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": a ? "true" : "false",
                          "aria-controls": "nhsuk-header-more-menu",
                          onClick: l,
                          children: [
                            /* @__PURE__ */ r.jsx("span", { children: "More" }),
                            z()
                          ]
                        }
                      ) })
                    ]
                  }
                )
              }
            )
          }
        ),
        n && j && j.items && j.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: j.items.slice(s ?? 0).map((P, V) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ke("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": P.active || P.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: P.href,
                    ...P.active || P.current ? { "aria-current": P.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: A(P)
                  }
                )
              },
              `overflow-${(s ?? 0) + V}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const uo = qi(void 0);
function o1({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, o] = Oe(e);
  nt(() => {
    o(e);
  }, [e]), nt(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const s = Re(() => ({ brand: a, setBrand: o }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(uo.Provider, { value: s, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(uo.Provider, { value: s, children: n });
}
function hu() {
  const e = Zi(uo);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const pu = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: c,
  disabled: d = !1,
  callbacks: u = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: p = [],
  formAttributes: x = {},
  inputAttributes: m = {},
  buttonAttributes: g = {},
  preventDefaultSubmit: S = !1,
  debounceMs: I = 300,
  minQueryLength: j = 1
}) => {
  const [k, b] = Oe(""), [v, C] = Oe(!1), _ = Ze(void 0), y = Ze(null), w = Ze(null), E = e === "controlled" && o !== void 0, T = E ? o : k, L = fe(
    ($) => {
      _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        u.onChange && $.length >= j && u.onChange($);
      }, I);
    },
    [u.onChange, I, j]
  ), M = fe(
    ($) => {
      const q = $.target.value;
      E || b(q), e !== "form" && L(q);
    },
    [E, e, L]
  ), N = fe(
    ($) => {
      const q = T.trim(), A = {
        query: q,
        timestamp: Date.now(),
        formData: new FormData($.currentTarget)
      };
      e === "controlled" || e === "hybrid" && S ? ($.preventDefault(), u.onSearch && q.length >= j && u.onSearch(A)) : e === "hybrid" && u.onSearch && q.length >= j && u.onSearch(A);
    },
    [
      e,
      T,
      u.onSearch,
      S,
      j
    ]
  ), D = fe(() => {
    C(!0), u.onFocus?.();
  }, [u.onFocus]), R = fe(() => {
    C(!1), u.onBlur?.();
  }, [u.onBlur]), Z = fe(() => {
    E || b(""), u.onClear?.(), w.current?.focus();
  }, [E, u.onClear]);
  nt(() => () => {
    _.current && clearTimeout(_.current);
  }, []);
  const Q = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ke("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), B = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsxs(
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
            /* @__PURE__ */ r.jsx(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ r.jsx(
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
  ), J = () => !T || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Z,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx(
        "svg",
        {
          className: "nhsuk-icon nhsuk-icon__close",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" })
        }
      )
    }
  ), F = () => !h || !p.length || !v ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map(($) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: $.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: $.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: $.title }),
            $.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: $.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: $.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: $.title }),
            $.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: $.description })
          ]
        }
      )
    },
    $.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ke("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": v,
        "nhsuk-header__search--has-results": h && p.length > 0
      }),
      children: [
        /* @__PURE__ */ r.jsxs(
          "form",
          {
            ref: y,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? n : void 0,
            role: "search",
            onSubmit: N,
            ...x,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: w,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: T,
                    onChange: M,
                    onFocus: D,
                    onBlur: R,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...m
                  }
                ),
                J()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && T.length < j,
                  ...g,
                  children: [
                    f ? B() : Q(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        F()
      ]
    }
  );
}, cl = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = Oe(!1), [p, x] = Oe(!1), [m, g] = Oe(i?.items?.length || 0), [S, I] = Oe(!1), [j, k] = Oe(!1), b = Ze(null), v = Ze(null), C = Ze(!1);
  nt(() => {
    typeof window > "u" || k(!0);
  }, []), nt(() => {
    if (typeof document > "u") return;
    const T = (L) => {
      L.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [f]);
  const _ = Ze(null), y = fe(() => {
    if (!j || !i?.items || i.items.length === 0 || C.current) return;
    const T = b.current, L = v.current;
    if (!T || !L) return;
    C.current = !0, T.classList.add("nhsuk-header__navigation-container--measuring");
    const M = T.clientWidth, N = Array.from(L.children);
    if (!N.length) {
      T.classList.remove("nhsuk-header__navigation-container--measuring"), C.current = !1;
      return;
    }
    if (_.current == null) {
      const A = document.createElement("button");
      A.type = "button", A.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", A.style.position = "absolute", A.style.visibility = "hidden", A.style.pointerEvents = "none", A.innerHTML = "<span>More</span>", T.appendChild(A), _.current = A.getBoundingClientRect().width || 104, T.removeChild(A);
    }
    const D = _.current + 16;
    let R = 0, Z = 0;
    const Q = window.getComputedStyle(T), B = parseFloat(Q.paddingLeft) || 0, J = parseFloat(Q.paddingRight) || 0;
    let F = B + J;
    for (const A of N) {
      const z = A.getBoundingClientRect().width;
      if (R + z + D + F > M) break;
      R += z, Z += 1;
    }
    const $ = Z < i.items.length, q = $ ? Z : i.items.length;
    x((A) => A === $ ? A : $), g((A) => A === q ? A : q), T.classList.remove("nhsuk-header__navigation-container--measuring"), C.current = !1;
  }, [j, i?.items]);
  nt(() => {
    if (!j) return;
    const T = b.current;
    if (!T) return;
    let L = null;
    const M = () => {
      L == null && (L = window.requestAnimationFrame(() => {
        L = null, y();
      }));
    };
    y();
    const N = new ResizeObserver(() => M());
    return N.observe(T), v.current && N.observe(v.current), () => {
      L != null && window.cancelAnimationFrame(L), N.disconnect();
    };
  }, [j, y]), nt(() => {
    j && y();
  }, [i?.items?.length, j, y]);
  const w = (T) => {
    T && (T.preventDefault(), T.stopPropagation());
    const L = !f;
    h(L), I(L);
  }, E = (() => {
    try {
      return hu();
    } catch {
      return;
    }
  })();
  return fu(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: o,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: c,
      attributes: d,
      ...u
    },
    {
      variant: "client",
      isClient: j,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: m,
      dropdownVisible: S,
      toggleMenu: w,
      navContainerRef: b,
      navListRef: v,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(pu, { ...o }) : null,
      brand: E?.brand
    }
  );
};
function mu(e, { isClient: t, brand: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: d,
    containerClasses: u,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: p,
    // deprecated (ignored)
    responsiveNavigation: x = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: m = rs.Full,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const S = {
    ...s,
    text: s?.text ?? i
  }, I = S.href && !o.href || S.href && S.href === o.href, j = I ? S.href : o.href, k = ke(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), b = ke(
    "nhsuk-header__container",
    u
  ), v = ke(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), C = n === "fdp" ? "fdp" : "nhs", _ = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": o.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: o.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), y = () => {
    if (o.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: o.src,
          width: "280",
          alt: o.ariaLabel || (C === "fdp" ? "FDP" : "NHS")
        }
      );
    if (C === "fdp") {
      const M = ll(ns.FDP, m);
      if (M?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: M.src,
            "data-logo-variant": m,
            width: "280",
            alt: M.ariaLabel || "FDP"
          }
        );
    }
    return _();
  }, w = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, E = (M, N) => M ? N ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: N, children: M }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: M }) : null, T = (M) => M.active || M.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: M.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: M.html } }) : M.text }) : M.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: M.html } }) : M.text;
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-module": "nhsuk-header",
      ...h,
      ...g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: b, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            j ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: j, children: [
              y(),
              w(),
              I && E(S.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              y(),
              w(),
              I && E(S.text)
            ] }),
            S.text && !I && E(S.text, S.href)
          ] }),
          /* @__PURE__ */ r.jsx(
            Ki,
            {
              ...c,
              variant: f === "white" ? "white" : "default"
            }
          )
        ] }),
        d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: v,
            "aria-label": d.ariaLabel || "Menu",
            "data-ssr-hydrating": "true",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ke(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--ssr": !t
                  },
                  u
                ),
                children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: d.items.map((M, N) => /* @__PURE__ */ r.jsx(
                  "li",
                  {
                    className: ke(
                      "nhsuk-header__navigation-item",
                      {
                        "nhsuk-header__navigation-item--current": M.active || M.current
                      },
                      M.className
                    ),
                    ...M.attributes || {},
                    children: /* @__PURE__ */ r.jsx(
                      "a",
                      {
                        className: "nhsuk-header__navigation-link",
                        href: M.href,
                        ...M.active || M.current ? { "aria-current": M.current ? "page" : "true" } : {},
                        children: T(M)
                      }
                    )
                  },
                  N
                )) })
              }
            )
          }
        ),
        !1
      ]
    }
  ) });
}
const s1 = (e) => {
  const t = e.attributes?.["data-brand"];
  return mu(e, {
    isClient: !1,
    brand: t === "fdp" || t === "nhs" ? t : void 0
  });
}, gu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: c,
  ...d
}) => {
  const u = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    n,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || a || o, x = () => {
    if (!e) return null;
    const m = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ r.jsx("h1", { ...m, children: e });
      case 2:
        return /* @__PURE__ */ r.jsx("h2", { ...m, children: e });
      case 3:
        return /* @__PURE__ */ r.jsx("h3", { ...m, children: e });
      case 4:
        return /* @__PURE__ */ r.jsx("h4", { ...m, children: e });
      case 5:
        return /* @__PURE__ */ r.jsx("h5", { ...m, children: e });
      case 6:
        return /* @__PURE__ */ r.jsx("h6", { ...m, children: e });
      default:
        return /* @__PURE__ */ r.jsx("h1", { ...m, children: e });
    }
  };
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          x(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          x(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
gu.displayName = "Hero";
const dl = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, x = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ke("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": x
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: p.URL,
          target: p.newWindow ? "_blank" : void 0,
          rel: p.newWindow ? "noopener noreferrer" : void 0,
          children: p.label
        }
      )
    },
    `${p.URL}-${p.label}`
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ke("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ke("nhsuk-footer", e), style: d, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (n || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Ir(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function as(e) {
  let t, n, a;
  e.length !== 2 ? (t = Ir, n = (l, c) => Ir(e(l), c), a = (l, c) => e(l) - c) : (t = e === Ir || e === xu ? e : yu, n = e, a = e);
  function o(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) <= 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function i(l, c, d = 0, u = l.length) {
    const f = o(l, c, d, u - 1);
    return f > d && a(l[f - 1], c) > -a(l[f], c) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function yu() {
  return 0;
}
function bu(e) {
  return e === null ? NaN : +e;
}
const vu = as(Ir), wu = vu.right;
as(bu).center;
function ul(e, t) {
  let n, a;
  if (t === void 0)
    for (const o of e)
      o != null && (n === void 0 ? o >= o && (n = a = o) : (n > o && (n = o), a < o && (a = o)));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (n === void 0 ? s >= s && (n = a = s) : (n > s && (n = s), a < s && (a = s)));
  }
  return [n, a];
}
class $s extends Map {
  constructor(t, n = ku) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Es(this, t));
  }
  has(t) {
    return super.has(Es(this, t));
  }
  set(t, n) {
    return super.set(_u(this, t), n);
  }
  delete(t) {
    return super.delete(Su(this, t));
  }
}
function Es({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function _u({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Su({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function ku(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Nu = Math.sqrt(50), Cu = Math.sqrt(10), ju = Math.sqrt(2);
function $r(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Nu ? 10 : s >= Cu ? 5 : s >= ju ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= n && n < 2 ? $r(e, t, n * 2) : [l, c, d];
}
function Mu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? $r(t, e, n) : $r(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (s - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (o + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (o + d) * i;
  return c;
}
function fo(e, t, n) {
  return t = +t, e = +e, n = +n, $r(e, t, n)[2];
}
function ho(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? fo(t, e, n) : fo(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Iu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function ja(e, t) {
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
const Fs = Symbol("implicit");
function fl() {
  var e = new $s(), t = [], n = [], a = Fs;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Fs) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new $s();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return fl(t, n).unknown(a);
  }, ja.apply(o, arguments), o;
}
function hl() {
  var e = fl().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = o < a, x = p ? o : a, m = p ? a : o;
    s = (m - x) / Math.max(1, h - c + d * 2), l && (s = Math.floor(s)), x += (m - x - s * (h - c)) * u, i = s * (1 - c), l && (x = Math.round(x), i = Math.round(i));
    var g = Iu(h).map(function(S) {
      return x + s * S;
    });
    return n(p ? g.reverse() : g);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, o] = h, a = +a, o = +o, f()) : [a, o];
  }, e.rangeRound = function(h) {
    return [a, o] = h, a = +a, o = +o, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(h) {
    return arguments.length ? (l = !!h, f()) : l;
  }, e.padding = function(h) {
    return arguments.length ? (c = Math.min(1, d = +h), f()) : c;
  }, e.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (d = +h, f()) : d;
  }, e.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), f()) : u;
  }, e.copy = function() {
    return hl(t(), [a, o]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, ja.apply(f(), arguments);
}
function os(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function pl(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function pr() {
}
var ar = 0.7, Er = 1 / ar, Ln = "\\s*([+-]?\\d+)\\s*", or = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Du = /^#([0-9a-f]{3,8})$/, Tu = new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`), Lu = new RegExp(`^rgb\\(${Rt},${Rt},${Rt}\\)$`), Au = new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${or}\\)$`), $u = new RegExp(`^rgba\\(${Rt},${Rt},${Rt},${or}\\)$`), Eu = new RegExp(`^hsl\\(${or},${Rt},${Rt}\\)$`), Fu = new RegExp(`^hsla\\(${or},${Rt},${Rt},${or}\\)$`), Ps = {
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
os(pr, sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Rs,
  // Deprecated! Use color.formatHex.
  formatHex: Rs,
  formatHex8: Pu,
  formatHsl: Ru,
  formatRgb: Bs,
  toString: Bs
});
function Rs() {
  return this.rgb().formatHex();
}
function Pu() {
  return this.rgb().formatHex8();
}
function Ru() {
  return ml(this).formatHsl();
}
function Bs() {
  return this.rgb().formatRgb();
}
function sr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Du.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Hs(t) : n === 3 ? new Ct(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Sr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Sr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Tu.exec(e)) ? new Ct(t[1], t[2], t[3], 1) : (t = Lu.exec(e)) ? new Ct(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Au.exec(e)) ? Sr(t[1], t[2], t[3], t[4]) : (t = $u.exec(e)) ? Sr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Eu.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, 1) : (t = Fu.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, t[4]) : Ps.hasOwnProperty(e) ? Hs(Ps[e]) : e === "transparent" ? new Ct(NaN, NaN, NaN, 0) : null;
}
function Hs(e) {
  return new Ct(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Sr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Ct(e, t, n, a);
}
function Bu(e) {
  return e instanceof pr || (e = sr(e)), e ? (e = e.rgb(), new Ct(e.r, e.g, e.b, e.opacity)) : new Ct();
}
function po(e, t, n, a) {
  return arguments.length === 1 ? Bu(e) : new Ct(e, t, n, a ?? 1);
}
function Ct(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
os(Ct, po, pl(pr, {
  brighter(e) {
    return e = e == null ? Er : Math.pow(Er, e), new Ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ct(mn(this.r), mn(this.g), mn(this.b), Fr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: zs,
  // Deprecated! Use color.formatHex.
  formatHex: zs,
  formatHex8: Hu,
  formatRgb: Os,
  toString: Os
}));
function zs() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}`;
}
function Hu() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}${pn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Os() {
  const e = Fr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mn(this.r)}, ${mn(this.g)}, ${mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Fr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function pn(e) {
  return e = mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Us(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Tt(e, t, n, a);
}
function ml(e) {
  if (e instanceof Tt) return new Tt(e.h, e.s, e.l, e.opacity);
  if (e instanceof pr || (e = sr(e)), !e) return new Tt();
  if (e instanceof Tt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Tt(i, l, c, e.opacity);
}
function zu(e, t, n, a) {
  return arguments.length === 1 ? ml(e) : new Tt(e, t, n, a ?? 1);
}
function Tt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
os(Tt, zu, pl(pr, {
  brighter(e) {
    return e = e == null ? Er : Math.pow(Er, e), new Tt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Tt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Ct(
      Wa(e >= 240 ? e - 240 : e + 120, o, a),
      Wa(e, o, a),
      Wa(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Tt(Ws(this.h), kr(this.s), kr(this.l), Fr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Fr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ws(this.h)}, ${kr(this.s) * 100}%, ${kr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ws(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function kr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ss = (e) => () => e;
function Ou(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Uu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Wu(e) {
  return (e = +e) == 1 ? gl : function(t, n) {
    return n - t ? Uu(t, n, e) : ss(isNaN(t) ? n : t);
  };
}
function gl(e, t) {
  var n = t - e;
  return n ? Ou(e, n) : ss(isNaN(e) ? t : e);
}
const Gs = (function e(t) {
  var n = Wu(t);
  function a(o, s) {
    var i = n((o = po(o)).r, (s = po(s)).r), l = n(o.g, s.g), c = n(o.b, s.b), d = gl(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Gu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Vu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Yu(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = is(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Zu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Pr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function qu(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = is(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var mo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ga = new RegExp(mo.source, "g");
function Ju(e) {
  return function() {
    return e;
  };
}
function Xu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ku(e, t) {
  var n = mo.lastIndex = Ga.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = mo.exec(e)) && (o = Ga.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Pr(a, o) })), n = Ga.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Xu(c[0].x) : Ju(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function is(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? ss(t) : (n === "number" ? Pr : n === "string" ? (a = sr(t)) ? (t = a, Gs) : Ku : t instanceof sr ? Gs : t instanceof Date ? Zu : Vu(t) ? Gu : Array.isArray(t) ? Yu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? qu : Pr)(e, t);
}
function Qu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function ef(e) {
  return function() {
    return e;
  };
}
function tf(e) {
  return +e;
}
var Vs = [0, 1];
function Mn(e) {
  return e;
}
function go(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : ef(isNaN(t) ? NaN : 0.5);
}
function nf(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function rf(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = go(o, a), s = n(i, s)) : (a = go(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function af(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = go(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = wu(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function xl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function of() {
  var e = Vs, t = Vs, n = is, a, o, s, i = Mn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== Mn && (i = nf(e[0], e[h - 1])), l = h > 2 ? af : rf, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((d || (d = l(t, e.map(a), Pr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, tf), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Qu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Mn, u()) : i !== Mn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return a = h, o = p, u();
  };
}
function yl() {
  return of()(Mn, Mn);
}
function sf(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Rr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Pn(e) {
  return e = Rr(Math.abs(e)), e ? e[1] : NaN;
}
function lf(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], c = 0; o > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), s.push(n.substring(o -= l, o + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function cf(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var df = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Br(e) {
  if (!(t = df.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ls({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Br.prototype = ls.prototype;
function ls(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ls.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function uf(e) {
  e: for (var t = e.length, n = 1, a = -1, o; n < t; ++n)
    switch (e[n]) {
      case ".":
        a = o = n;
        break;
      case "0":
        a === 0 && (a = n), o = n;
        break;
      default:
        if (!+e[n]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var bl;
function ff(e, t) {
  var n = Rr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (bl = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Rr(e, Math.max(0, t + s - 1))[0];
}
function Ys(e, t) {
  var n = Rr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Zs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: sf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ys(e * 100, t),
  r: Ys,
  s: ff,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function qs(e) {
  return e;
}
var Js = Array.prototype.map, Xs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hf(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? qs : lf(Js.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? qs : cf(Js.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Br(f);
    var h = f.fill, p = f.align, x = f.sign, m = f.symbol, g = f.zero, S = f.width, I = f.comma, j = f.precision, k = f.trim, b = f.type;
    b === "n" ? (I = !0, b = "g") : Zs[b] || (j === void 0 && (j = 12), k = !0, b = "g"), (g || h === "0" && p === "=") && (g = !0, h = "0", p = "=");
    var v = m === "$" ? n : m === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", C = m === "$" ? a : /[%p]/.test(b) ? i : "", _ = Zs[b], y = /[defgprs%]/.test(b);
    j = j === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, j)) : Math.max(0, Math.min(20, j));
    function w(E) {
      var T = v, L = C, M, N, D;
      if (b === "c")
        L = _(E) + L, E = "";
      else {
        E = +E;
        var R = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? c : _(Math.abs(E), j), k && (E = uf(E)), R && +E == 0 && x !== "+" && (R = !1), T = (R ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + T, L = (b === "s" ? Xs[8 + bl / 3] : "") + L + (R && x === "(" ? ")" : ""), y) {
          for (M = -1, N = E.length; ++M < N; )
            if (D = E.charCodeAt(M), 48 > D || D > 57) {
              L = (D === 46 ? o + E.slice(M + 1) : E.slice(M)) + L, E = E.slice(0, M);
              break;
            }
        }
      }
      I && !g && (E = t(E, 1 / 0));
      var Z = T.length + E.length + L.length, Q = Z < S ? new Array(S - Z + 1).join(h) : "";
      switch (I && g && (E = t(Q + E, Q.length ? S - L.length : 1 / 0), Q = ""), p) {
        case "<":
          E = T + E + L + Q;
          break;
        case "=":
          E = T + Q + E + L;
          break;
        case "^":
          E = Q.slice(0, Z = Q.length >> 1) + T + E + L + Q.slice(Z);
          break;
        default:
          E = Q + T + E + L;
          break;
      }
      return s(E);
    }
    return w.toString = function() {
      return f + "";
    }, w;
  }
  function u(f, h) {
    var p = d((f = Br(f), f.type = "f", f)), x = Math.max(-8, Math.min(8, Math.floor(Pn(h) / 3))) * 3, m = Math.pow(10, -x), g = Xs[8 + x / 3];
    return function(S) {
      return p(m * S) + g;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var Nr, vl, wl;
pf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function pf(e) {
  return Nr = hf(e), vl = Nr.format, wl = Nr.formatPrefix, Nr;
}
function mf(e) {
  return Math.max(0, -Pn(Math.abs(e)));
}
function gf(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) * 3 - Pn(Math.abs(e)));
}
function xf(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Pn(t) - Pn(e)) + 1;
}
function yf(e, t, n, a) {
  var o = ho(e, t, n), s;
  switch (a = Br(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = gf(o, i)) && (a.precision = s), wl(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = xf(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = mf(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return vl(a);
}
function bf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Mu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return yf(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = o, o = s, s = d); u-- > 0; ) {
      if (d = fo(i, l, n), d === c)
        return a[o] = i, a[s] = l, t(a);
      if (d > 0)
        i = Math.floor(i / d) * d, l = Math.ceil(l / d) * d;
      else if (d < 0)
        i = Math.ceil(i * d) / d, l = Math.floor(l * d) / d;
      else
        break;
      c = d;
    }
    return e;
  }, e;
}
function Hr() {
  var e = yl();
  return e.copy = function() {
    return xl(e, Hr());
  }, ja.apply(e, arguments), bf(e);
}
function vf(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Va = /* @__PURE__ */ new Date(), Ya = /* @__PURE__ */ new Date();
function yt(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const c = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return c;
    let d;
    do
      c.push(d = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (d < s && s < i);
    return c;
  }, o.filter = (s) => yt((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (Va.setTime(+s), Ya.setTime(+i), e(Va), e(Ya), Math.floor(n(Va, Ya))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const zr = yt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
zr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? yt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : zr);
zr.range;
const Kt = 1e3, It = Kt * 60, Qt = It * 60, en = Qt * 24, cs = en * 7, Ks = en * 30, Za = en * 365, In = yt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCSeconds());
In.range;
const ds = yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kt);
}, (e, t) => {
  e.setTime(+e + t * It);
}, (e, t) => (t - e) / It, (e) => e.getMinutes());
ds.range;
const wf = yt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * It);
}, (e, t) => (t - e) / It, (e) => e.getUTCMinutes());
wf.range;
const us = yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kt - e.getMinutes() * It);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getHours());
us.range;
const _f = yt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCHours());
_f.range;
const mr = yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * It) / en,
  (e) => e.getDate() - 1
);
mr.range;
const fs = yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / en, (e) => e.getUTCDate() - 1);
fs.range;
const Sf = yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / en, (e) => Math.floor(e / en));
Sf.range;
function _n(e) {
  return yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * It) / cs);
}
const Ma = _n(0), Or = _n(1), kf = _n(2), Nf = _n(3), Rn = _n(4), Cf = _n(5), jf = _n(6);
Ma.range;
Or.range;
kf.range;
Nf.range;
Rn.range;
Cf.range;
jf.range;
function Sn(e) {
  return yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / cs);
}
const _l = Sn(0), Ur = Sn(1), Mf = Sn(2), If = Sn(3), Bn = Sn(4), Df = Sn(5), Tf = Sn(6);
_l.range;
Ur.range;
Mf.range;
If.range;
Bn.range;
Df.range;
Tf.range;
const ir = yt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
ir.range;
const Lf = yt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Lf.range;
const tn = yt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
tn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
tn.range;
const vn = yt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
vn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
vn.range;
function Af(e, t, n, a, o, s) {
  const i = [
    [In, 1, Kt],
    [In, 5, 5 * Kt],
    [In, 15, 15 * Kt],
    [In, 30, 30 * Kt],
    [s, 1, It],
    [s, 5, 5 * It],
    [s, 15, 15 * It],
    [s, 30, 30 * It],
    [o, 1, Qt],
    [o, 3, 3 * Qt],
    [o, 6, 6 * Qt],
    [o, 12, 12 * Qt],
    [a, 1, en],
    [a, 2, 2 * en],
    [n, 1, cs],
    [t, 1, Ks],
    [t, 3, 3 * Ks],
    [e, 1, Za]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), x = p ? p.range(d, +u + 1) : [];
    return h ? x.reverse() : x;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = as(([, , g]) => g).right(i, h);
    if (p === i.length) return e.every(ho(d / Za, u / Za, f));
    if (p === 0) return zr.every(Math.max(ho(d, u, f), 1));
    const [x, m] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return x.every(m);
  }
  return [l, c];
}
const [$f, Ef] = Af(tn, ir, Ma, mr, us, ds);
function qa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ja(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Ff(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Vn(o), u = Yn(o), f = Vn(s), h = Yn(s), p = Vn(i), x = Yn(i), m = Vn(l), g = Yn(l), S = Vn(c), I = Yn(c), j = {
    a: R,
    A: Z,
    b: Q,
    B,
    c: null,
    d: ai,
    e: ai,
    f: oh,
    g: mh,
    G: xh,
    H: nh,
    I: rh,
    j: ah,
    L: Sl,
    m: sh,
    M: ih,
    p: J,
    q: F,
    Q: ii,
    s: li,
    S: lh,
    u: ch,
    U: dh,
    V: uh,
    w: fh,
    W: hh,
    x: null,
    X: null,
    y: ph,
    Y: gh,
    Z: yh,
    "%": si
  }, k = {
    a: $,
    A: q,
    b: A,
    B: z,
    c: null,
    d: oi,
    e: oi,
    f: _h,
    g: Lh,
    G: $h,
    H: bh,
    I: vh,
    j: wh,
    L: Nl,
    m: Sh,
    M: kh,
    p: P,
    q: V,
    Q: ii,
    s: li,
    S: Nh,
    u: Ch,
    U: jh,
    V: Mh,
    w: Ih,
    W: Dh,
    x: null,
    X: null,
    y: Th,
    Y: Ah,
    Z: Eh,
    "%": si
  }, b = {
    a: w,
    A: E,
    b: T,
    B: L,
    c: M,
    d: ni,
    e: ni,
    f: Kf,
    g: ti,
    G: ei,
    H: ri,
    I: ri,
    j: Zf,
    L: Xf,
    m: Yf,
    M: qf,
    p: y,
    q: Vf,
    Q: eh,
    s: th,
    S: Jf,
    u: zf,
    U: Of,
    V: Uf,
    w: Hf,
    W: Wf,
    x: N,
    X: D,
    y: ti,
    Y: ei,
    Z: Gf,
    "%": Qf
  };
  j.x = v(n, j), j.X = v(a, j), j.c = v(t, j), k.x = v(n, k), k.X = v(a, k), k.c = v(t, k);
  function v(G, ee) {
    return function(de) {
      var Y = [], ae = -1, le = 0, be = G.length, pe, Ie, Ve;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++ae < be; )
        G.charCodeAt(ae) === 37 && (Y.push(G.slice(le, ae)), (Ie = Qs[pe = G.charAt(++ae)]) != null ? pe = G.charAt(++ae) : Ie = pe === "e" ? " " : "0", (Ve = ee[pe]) && (pe = Ve(de, Ie)), Y.push(pe), le = ae + 1);
      return Y.push(G.slice(le, ae)), Y.join("");
    };
  }
  function C(G, ee) {
    return function(de) {
      var Y = Gn(1900, void 0, 1), ae = _(Y, G, de += "", 0), le, be;
      if (ae != de.length) return null;
      if ("Q" in Y) return new Date(Y.Q);
      if ("s" in Y) return new Date(Y.s * 1e3 + ("L" in Y ? Y.L : 0));
      if (ee && !("Z" in Y) && (Y.Z = 0), "p" in Y && (Y.H = Y.H % 12 + Y.p * 12), Y.m === void 0 && (Y.m = "q" in Y ? Y.q : 0), "V" in Y) {
        if (Y.V < 1 || Y.V > 53) return null;
        "w" in Y || (Y.w = 1), "Z" in Y ? (le = Ja(Gn(Y.y, 0, 1)), be = le.getUTCDay(), le = be > 4 || be === 0 ? Ur.ceil(le) : Ur(le), le = fs.offset(le, (Y.V - 1) * 7), Y.y = le.getUTCFullYear(), Y.m = le.getUTCMonth(), Y.d = le.getUTCDate() + (Y.w + 6) % 7) : (le = qa(Gn(Y.y, 0, 1)), be = le.getDay(), le = be > 4 || be === 0 ? Or.ceil(le) : Or(le), le = mr.offset(le, (Y.V - 1) * 7), Y.y = le.getFullYear(), Y.m = le.getMonth(), Y.d = le.getDate() + (Y.w + 6) % 7);
      } else ("W" in Y || "U" in Y) && ("w" in Y || (Y.w = "u" in Y ? Y.u % 7 : "W" in Y ? 1 : 0), be = "Z" in Y ? Ja(Gn(Y.y, 0, 1)).getUTCDay() : qa(Gn(Y.y, 0, 1)).getDay(), Y.m = 0, Y.d = "W" in Y ? (Y.w + 6) % 7 + Y.W * 7 - (be + 5) % 7 : Y.w + Y.U * 7 - (be + 6) % 7);
      return "Z" in Y ? (Y.H += Y.Z / 100 | 0, Y.M += Y.Z % 100, Ja(Y)) : qa(Y);
    };
  }
  function _(G, ee, de, Y) {
    for (var ae = 0, le = ee.length, be = de.length, pe, Ie; ae < le; ) {
      if (Y >= be) return -1;
      if (pe = ee.charCodeAt(ae++), pe === 37) {
        if (pe = ee.charAt(ae++), Ie = b[pe in Qs ? ee.charAt(ae++) : pe], !Ie || (Y = Ie(G, de, Y)) < 0) return -1;
      } else if (pe != de.charCodeAt(Y++))
        return -1;
    }
    return Y;
  }
  function y(G, ee, de) {
    var Y = d.exec(ee.slice(de));
    return Y ? (G.p = u.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function w(G, ee, de) {
    var Y = p.exec(ee.slice(de));
    return Y ? (G.w = x.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function E(G, ee, de) {
    var Y = f.exec(ee.slice(de));
    return Y ? (G.w = h.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function T(G, ee, de) {
    var Y = S.exec(ee.slice(de));
    return Y ? (G.m = I.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function L(G, ee, de) {
    var Y = m.exec(ee.slice(de));
    return Y ? (G.m = g.get(Y[0].toLowerCase()), de + Y[0].length) : -1;
  }
  function M(G, ee, de) {
    return _(G, t, ee, de);
  }
  function N(G, ee, de) {
    return _(G, n, ee, de);
  }
  function D(G, ee, de) {
    return _(G, a, ee, de);
  }
  function R(G) {
    return i[G.getDay()];
  }
  function Z(G) {
    return s[G.getDay()];
  }
  function Q(G) {
    return c[G.getMonth()];
  }
  function B(G) {
    return l[G.getMonth()];
  }
  function J(G) {
    return o[+(G.getHours() >= 12)];
  }
  function F(G) {
    return 1 + ~~(G.getMonth() / 3);
  }
  function $(G) {
    return i[G.getUTCDay()];
  }
  function q(G) {
    return s[G.getUTCDay()];
  }
  function A(G) {
    return c[G.getUTCMonth()];
  }
  function z(G) {
    return l[G.getUTCMonth()];
  }
  function P(G) {
    return o[+(G.getUTCHours() >= 12)];
  }
  function V(G) {
    return 1 + ~~(G.getUTCMonth() / 3);
  }
  return {
    format: function(G) {
      var ee = v(G += "", j);
      return ee.toString = function() {
        return G;
      }, ee;
    },
    parse: function(G) {
      var ee = C(G += "", !1);
      return ee.toString = function() {
        return G;
      }, ee;
    },
    utcFormat: function(G) {
      var ee = v(G += "", k);
      return ee.toString = function() {
        return G;
      }, ee;
    },
    utcParse: function(G) {
      var ee = C(G += "", !0);
      return ee.toString = function() {
        return G;
      }, ee;
    }
  };
}
var Qs = { "-": "", _: " ", 0: "0" }, vt = /^\s*\d+/, Pf = /^%/, Rf = /[\\^$*+?|[\]().{}]/g;
function at(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Bf(e) {
  return e.replace(Rf, "\\$&");
}
function Vn(e) {
  return new RegExp("^(?:" + e.map(Bf).join("|") + ")", "i");
}
function Yn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Hf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function zf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Of(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Uf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Wf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function ei(e, t, n) {
  var a = vt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function ti(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Gf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Vf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Yf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function ni(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Zf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function ri(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function qf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Jf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Xf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Kf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Qf(e, t, n) {
  var a = Pf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function eh(e, t, n) {
  var a = vt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function th(e, t, n) {
  var a = vt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function ai(e, t) {
  return at(e.getDate(), t, 2);
}
function nh(e, t) {
  return at(e.getHours(), t, 2);
}
function rh(e, t) {
  return at(e.getHours() % 12 || 12, t, 2);
}
function ah(e, t) {
  return at(1 + mr.count(tn(e), e), t, 3);
}
function Sl(e, t) {
  return at(e.getMilliseconds(), t, 3);
}
function oh(e, t) {
  return Sl(e, t) + "000";
}
function sh(e, t) {
  return at(e.getMonth() + 1, t, 2);
}
function ih(e, t) {
  return at(e.getMinutes(), t, 2);
}
function lh(e, t) {
  return at(e.getSeconds(), t, 2);
}
function ch(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function dh(e, t) {
  return at(Ma.count(tn(e) - 1, e), t, 2);
}
function kl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function uh(e, t) {
  return e = kl(e), at(Rn.count(tn(e), e) + (tn(e).getDay() === 4), t, 2);
}
function fh(e) {
  return e.getDay();
}
function hh(e, t) {
  return at(Or.count(tn(e) - 1, e), t, 2);
}
function ph(e, t) {
  return at(e.getFullYear() % 100, t, 2);
}
function mh(e, t) {
  return e = kl(e), at(e.getFullYear() % 100, t, 2);
}
function gh(e, t) {
  return at(e.getFullYear() % 1e4, t, 4);
}
function xh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Rn(e) : Rn.ceil(e), at(e.getFullYear() % 1e4, t, 4);
}
function yh(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + at(t / 60 | 0, "0", 2) + at(t % 60, "0", 2);
}
function oi(e, t) {
  return at(e.getUTCDate(), t, 2);
}
function bh(e, t) {
  return at(e.getUTCHours(), t, 2);
}
function vh(e, t) {
  return at(e.getUTCHours() % 12 || 12, t, 2);
}
function wh(e, t) {
  return at(1 + fs.count(vn(e), e), t, 3);
}
function Nl(e, t) {
  return at(e.getUTCMilliseconds(), t, 3);
}
function _h(e, t) {
  return Nl(e, t) + "000";
}
function Sh(e, t) {
  return at(e.getUTCMonth() + 1, t, 2);
}
function kh(e, t) {
  return at(e.getUTCMinutes(), t, 2);
}
function Nh(e, t) {
  return at(e.getUTCSeconds(), t, 2);
}
function Ch(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function jh(e, t) {
  return at(_l.count(vn(e) - 1, e), t, 2);
}
function Cl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function Mh(e, t) {
  return e = Cl(e), at(Bn.count(vn(e), e) + (vn(e).getUTCDay() === 4), t, 2);
}
function Ih(e) {
  return e.getUTCDay();
}
function Dh(e, t) {
  return at(Ur.count(vn(e) - 1, e), t, 2);
}
function Th(e, t) {
  return at(e.getUTCFullYear() % 100, t, 2);
}
function Lh(e, t) {
  return e = Cl(e), at(e.getUTCFullYear() % 100, t, 2);
}
function Ah(e, t) {
  return at(e.getUTCFullYear() % 1e4, t, 4);
}
function $h(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Bn(e) : Bn.ceil(e), at(e.getUTCFullYear() % 1e4, t, 4);
}
function Eh() {
  return "+0000";
}
function si() {
  return "%";
}
function ii(e) {
  return +e;
}
function li(e) {
  return Math.floor(+e / 1e3);
}
var Nn, jl;
Fh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Fh(e) {
  return Nn = Ff(e), jl = Nn.format, Nn.parse, Nn.utcFormat, Nn.utcParse, Nn;
}
function Ph(e) {
  return new Date(e);
}
function Rh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ml(e, t, n, a, o, s, i, l, c, d) {
  var u = yl(), f = u.invert, h = u.domain, p = d(".%L"), x = d(":%S"), m = d("%I:%M"), g = d("%I %p"), S = d("%a %d"), I = d("%b %d"), j = d("%B"), k = d("%Y");
  function b(v) {
    return (c(v) < v ? p : l(v) < v ? x : i(v) < v ? m : s(v) < v ? g : a(v) < v ? o(v) < v ? S : I : n(v) < v ? j : k)(v);
  }
  return u.invert = function(v) {
    return new Date(f(v));
  }, u.domain = function(v) {
    return arguments.length ? h(Array.from(v, Rh)) : h().map(Ph);
  }, u.ticks = function(v) {
    var C = h();
    return e(C[0], C[C.length - 1], v ?? 10);
  }, u.tickFormat = function(v, C) {
    return C == null ? b : d(C);
  }, u.nice = function(v) {
    var C = h();
    return (!v || typeof v.range != "function") && (v = t(C[0], C[C.length - 1], v ?? 10)), v ? h(vf(C, v)) : u;
  }, u.copy = function() {
    return xl(u, Ml(e, t, n, a, o, s, i, l, c, d));
  }, u;
}
function hs() {
  return ja.apply(Ml($f, Ef, tn, ir, Ma, mr, us, ds, In, jl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Bh({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = Ze(null), [u, f] = Oe(!1), [h, p] = Oe(!1), x = t(e.start), m = t(e.end), g = Math.max(m - x, 20), S = () => {
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
  }, I = e.progress ? g * e.progress / 100 : 0, j = () => {
    n?.(e);
  }, k = () => {
    a?.(e);
  }, b = (T) => {
    T.key === "Enter" ? (T.preventDefault(), j()) : T.key === " " && (T.preventDefault(), k());
  }, v = () => {
    f(!0);
  }, C = () => {
    f(!1);
  }, _ = () => {
    p(!0), l?.();
  }, y = () => {
    p(!1);
  }, w = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), E = {
    "--task-left": `${x}px`,
    "--task-width": `${g}px`,
    "--task-color": S(),
    left: `${x}px`,
    width: `${g}px`,
    backgroundColor: S()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: w,
      style: E,
      onClick: j,
      onDoubleClick: k,
      onKeyDown: b,
      onMouseDown: v,
      onMouseUp: C,
      onFocus: _,
      onBlur: y,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${I}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Hh({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Oe(-1), c = Ze(null), d = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const x = Math.max(0, i === -1 ? 0 : i - 1);
      l(x), h(x);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const x = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(x), h(x);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), l(0), h(0);
    else if (p.key === "End") {
      p.preventDefault();
      const x = a.length - 1;
      l(x), h(x);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (p.key === "ArrowRight") {
      p.preventDefault();
      const x = c.current;
      x && x.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (p) => {
    const x = c.current?.querySelector(`[data-date-index="${p}"]`);
    x && x.focus();
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-header",
      role: "row",
      "aria-rowindex": 1,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "header-resource",
            role: "columnheader",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": "Resource column header",
            onKeyDown: u,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: d,
            onFocus: f,
            children: a.map((p, x) => {
              const m = p.getTime() === s.getTime(), g = i === x;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": x,
                  className: `date-column ${m ? "today" : ""} ${g ? "focused" : ""}`,
                  tabIndex: g ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(x),
                  onKeyDown: d,
                  children: p.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                x
              );
            })
          }
        )
      ]
    }
  );
}
function zh({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = Oe(!1), [d, u] = Oe(-1), f = Ze(null);
  nt(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
  const h = (m) => {
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
          m.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          m.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (m.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const g = Math.max(0, d - 1);
        u(g), f.current?.querySelector(`[data-task-index="${g}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const I = Math.min(t.length - 1, d + 1);
        u(I), f.current?.querySelector(`[data-task-index="${I}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        m.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        m.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault(), f.current?.focus();
        break;
    }
  }, x = (m) => {
    l && u(m);
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-row",
      role: "row",
      "aria-rowindex": s + 2,
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "resource-label",
            role: "gridcell",
            "aria-colindex": 1,
            tabIndex: 0,
            "aria-label": `Resource: ${e.label}`,
            onKeyDown: p,
            children: e.label
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: f,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: h,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((m, g) => /* @__PURE__ */ r.jsx(
              Bh,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === g,
                taskIndex: g,
                tabIndex: l && d === g ? 0 : -1,
                onFocus: () => x(g)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function i1({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ze(null), [l, c] = Oe(800), d = Re(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), u = Re(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), f = Re(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  nt(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const g = new m((S) => {
      const I = S[0];
      I && c(Math.max(I.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const h = Re(
    () => hs().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = Re(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((g) => {
      const S = m.get(g.resourceId) || [];
      S.push(g), m.set(g.resourceId, S);
    }), m;
  }, [t]), x = (m) => {
    if (m.target === m.currentTarget)
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault(), typeof document < "u" && i.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          m.preventDefault(), typeof document < "u" && i.current?.querySelector(".header-resource")?.focus();
          break;
      }
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "gantt-chart",
      role: "grid",
      "aria-label": "Gantt Chart showing resource scheduling and task timelines",
      "aria-rowcount": e.length + 1,
      "aria-colcount": f + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: x,
      children: [
        /* @__PURE__ */ r.jsx(Hh, { viewStart: d, viewEnd: u, dateCount: f }),
        /* @__PURE__ */ r.jsx(
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
            children: e.map((m, g) => /* @__PURE__ */ r.jsx(
              zh,
              {
                resource: m,
                tasks: p.get(m.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: g,
                dateCount: f
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
const Wr = ({
  children: e,
  href: t,
  active: n = !1,
  attributes: a = {}
}) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", children: n ? /* @__PURE__ */ r.jsx(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...a,
    children: e
  }
) : /* @__PURE__ */ r.jsx(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...a,
    children: e
  }
) }), Oh = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? tt.Children.toArray(t).filter(
    (g) => tt.isValidElement(g) && (g.type === Wr || g.type?.displayName === "BreadcrumbItem")
  ).map((g) => ({
    text: typeof g.props.children == "string" ? g.props.children : String(g.props.children),
    href: g.props.href,
    active: g.props.active,
    attributes: g.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const m = d();
    if (m && m.length > 0) {
      const g = m.slice().reverse().find((S) => S.href && !S.active);
      if (g)
        return { href: g.href, text: g.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = ke(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), x = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: p,
      "aria-label": x,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          tt.Children.map(t, (m, g) => tt.isValidElement(m) && (m.type === Wr || m.type?.displayName === "BreadcrumbItem") ? tt.cloneElement(m, { key: g }) : null)
        ) : (
          // Render from items array
          f?.filter((m) => m.active || !!m.href).map((m, g) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ r.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...m.attributes || {},
              children: m.text
            }
          ) : /* @__PURE__ */ r.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: m.href,
              role: "link",
              ...m.attributes || {},
              children: m.text
            }
          ) }, g))
        ) }),
        h.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: h.href,
            role: "link",
            "aria-label": `Back to ${h.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              h.text
            ]
          }
        ) })
      ]
    }
  );
}, Il = Oh;
Il.Item = Wr;
Wr.displayName = "BreadcrumbItem";
const Dl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const o = ke("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: o,
      href: t,
      "data-module": "nhsuk-skip-link",
      ...a,
      children: e
    }
  );
}, l1 = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ke("nhsuk-pagination", o);
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...s,
      children: /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-list nhsuk-pagination__list", children: [
        e && t && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-pagination-item--previous", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: e, children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__title", children: "Previous" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__page", children: t }),
          /* @__PURE__ */ r.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-left",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ r.jsx("path", { d: "M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" })
            }
          )
        ] }) }),
        n && a && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-pagination-item--next", children: /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: n, children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__title", children: "Next" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" }),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-pagination__page", children: a }),
          /* @__PURE__ */ r.jsx(
            "svg",
            {
              className: "nhsuk-icon nhsuk-icon__arrow-right",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              "aria-hidden": "true",
              width: "34",
              height: "34",
              children: /* @__PURE__ */ r.jsx("path", { d: "M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" })
            }
          )
        ] }) })
      ] })
    }
  );
}, c1 = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ke("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...i.attributes || {},
      children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-contents-list__current", children: i.text })
    },
    l
  ) : /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-contents-list__item",
      children: /* @__PURE__ */ r.jsx(
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
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: o,
      role: "navigation",
      "aria-label": n,
      ...a,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Contents" }),
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-contents-list__list", children: e.map((i, l) => s(i, l)) })
      ]
    }
  );
}, Tl = tt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: d,
  ...u
}, f) => {
  const h = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), p = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), x = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const I = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Ht,
      {
        level: a,
        className: x,
        children: I()
      }
    );
  }, g = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, S = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "27",
      height: "27",
      "aria-hidden": "true",
      focusable: "false",
      children: [
        /* @__PURE__ */ r.jsx("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
        /* @__PURE__ */ r.jsxs("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667", children: [
          /* @__PURE__ */ r.jsx("path", { d: "M15.438 13l-3.771 3.771" }),
          /* @__PURE__ */ r.jsx("path", { d: "M11.667 9.229L15.438 13" })
        ] })
      ]
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ...u,
      className: h,
      ref: f,
      children: [
        c && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: p, children: [
          m(),
          g(),
          S()
        ] })
      ]
    }
  );
});
Tl.displayName = "Card";
const d1 = ({
  className: e,
  children: t,
  "data-testid": n,
  id: a
}) => {
  const o = ["nhsuk-card-group", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "ul",
    {
      className: o,
      "data-testid": n,
      id: a,
      children: t
    }
  );
}, u1 = ({
  className: e,
  children: t,
  "data-testid": n
}) => {
  const a = ["nhsuk-card-group__item", e].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "li",
    {
      className: a,
      "data-testid": n,
      children: t
    }
  );
}, f1 = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: c,
  "data-testid": d,
  id: u,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": p
}) => {
  const x = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const I = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], j = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        I,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Ht,
      {
        level: a,
        className: m,
        children: j
      }
    );
  }, S = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: x,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          g(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: S() })
      ]
    }
  );
}, Uh = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = ke(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Ht,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Ht,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => l ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, h1 = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ke("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, p1 = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = ke(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: c.href,
          className: "nhsuk-link",
          ...c.attributes,
          children: [
            s(c),
            c.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    d
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Zn = { current: null }, Wh = () => {
  if (Zn.current) return Zn.current;
  try {
    Zn.current = require("prismjs");
    try {
      require("prismjs/components/prism-typescript");
    } catch {
    }
    try {
      require("prismjs/components/prism-tsx");
    } catch {
    }
    try {
      require("prismjs/components/prism-json");
    } catch {
    }
  } catch {
    Zn.current = null;
  }
  return Zn.current;
}, Gh = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let n = e;
  return t.forEach((a) => {
    n = n.replace(a.regex, (o) => `<span class="nhsuk-code-${a.cls}">${o}</span>`);
  }), n;
}, Gr = (e, t, n) => {
  if (n || !t) return e;
  const a = Wh();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Gh(e);
}, Vh = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: c = !1,
  panelClasses: d,
  tableClasses: u,
  classes: f,
  attributes: h,
  "data-testid": p,
  columns: x,
  data: m,
  visuallyHiddenCaption: g = !1
}) => {
  const S = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), I = ke(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), j = ke(f), k = (y, w) => {
    const E = ke(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${y.format}`]: y.format
      },
      y.classes
    ), T = {
      scope: "col",
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && { role: "columnheader" },
      ...y.attributes
    };
    let L;
    if (y.node != null)
      L = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      L = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const M = Array.isArray(y.code), N = M ? y.code.join(`
`) : y.code, D = M || N.includes(`
`), R = {
        className: ke("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, Z = Gr(N, y.codeLanguage);
      L = D ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...R,
          dangerouslySetInnerHTML: { __html: Z }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...R,
          dangerouslySetInnerHTML: { __html: Z }
        }
      );
    } else
      L = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: E, ...T, children: L }, w);
  }, b = (y, w, E) => {
    const T = o && E || y.rowHeader, L = ke(
      T ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${T ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), M = {
      ...T && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: T ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let N;
    if (y.node != null)
      N = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      N = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const Z = Array.isArray(y.code), Q = Z ? y.code.join(`
`) : y.code, B = Z || Q.includes(`
`), J = {
        className: ke("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, F = Gr(
        Q,
        y.codeLanguage,
        y.disableHighlight
      );
      N = B ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...J,
          dangerouslySetInnerHTML: { __html: F }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...J,
          dangerouslySetInnerHTML: { __html: F }
        }
      );
    } else
      N = y.text;
    const D = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      N
    ] }), R = T ? "th" : "td";
    return /* @__PURE__ */ r.jsx(R, { className: L, ...M, children: D }, w);
  };
  let v = t, C = e;
  !v && x && x.length && (v = x.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !C && x && m && m.length && (C = m.map((y, w) => x.map((E) => {
    const T = E.accessor ? E.accessor(y, w) : y[E.key];
    let L = { format: E.format, classes: E.cellClasses, attributes: E.cellAttributes };
    if (E.rowHeader && (L.rowHeader = !0), E.render) {
      const M = E.render(T, y, w, E);
      return M == null || typeof M == "boolean" ? { ...L, text: "" } : typeof M == "string" || typeof M == "number" ? { ...L, text: String(M) } : { ...L, ...M };
    }
    return { ...L, text: T != null ? String(T) : "" };
  })));
  const _ = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: I,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ke(S, g && "nhsuk-u-visually-hidden"), children: n }),
        v && v.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: v.map(
              (y, w) => k(y, w)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: C && C.map((y, w) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              (E, T) => b(E, T, T === 0)
            )
          },
          w
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(Uh, { className: d, children: [
    i && /* @__PURE__ */ r.jsx(Ht, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    _()
  ] }) : j ? /* @__PURE__ */ r.jsx("div", { className: j, children: _() }) : _();
}, Yh = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = ke(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, Ll = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, Al = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  as: p = "th"
}) => {
  const x = ke(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    c
  ), m = {
    scope: "col",
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...h && { role: "columnheader" },
    ...f
  };
  let g;
  if (n != null) g = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) g = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const I = Array.isArray(a), j = I ? a.join(`
`) : a, k = I || j.includes(`
`), b = {
      className: ke("nhsuk-table__code", s, {
        "nhsuk-table__code--block": k,
        "nhsuk-table__code--inline": !k
      }),
      ...o ? { "data-language": o } : {}
    }, v = Gr(
      j,
      o,
      i
    );
    g = k ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...b,
        dangerouslySetInnerHTML: { __html: v }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: v } });
  } else g = e;
  const S = p;
  return /* @__PURE__ */ r.jsx(S, { className: x, ...m, children: g });
}, Zh = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  rowHeader: p
}) => {
  const x = !!p, m = x ? "th" : "td", g = ke(
    x ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${x ? "header" : "cell"}--${l}`,
    c
  ), S = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...x && { scope: "row" },
    ...h && { role: x ? "rowheader" : "cell" },
    ...f
  };
  let I;
  if (n != null) I = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) I = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const j = Array.isArray(a), k = j ? a.join(`
`) : a, b = j || k.includes(`
`), v = {
      className: ke("nhsuk-table__code", s, {
        "nhsuk-table__code--block": b,
        "nhsuk-table__code--inline": !b
      }),
      ...o ? { "data-language": o } : {}
    }, C = Gr(k, o, i);
    I = b ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...v, dangerouslySetInnerHTML: { __html: C } }) }) : /* @__PURE__ */ r.jsx("code", { ...v, dangerouslySetInnerHTML: { __html: C } });
  } else I = e;
  return /* @__PURE__ */ r.jsx(m, { className: g, ...S, children: I });
}, nn = Vh;
nn.Caption = Yh;
nn.BodyRow = Ll;
nn.HeaderCell = Al;
nn.Cell = Zh;
let ci = !1, di = !1;
Object.defineProperty(nn, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ci && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), ci = !0), Ll;
  }
});
Object.defineProperty(nn, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !di && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), di = !0), Al;
  }
});
const m1 = On(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: c,
  id: d,
  "data-testid": u,
  ...f
}, h) => {
  const p = n !== void 0, [x, m] = Oe(() => t || e[0]?.id || ""), g = p ? n : x, S = Ze(null), I = Ze(/* @__PURE__ */ new Map()), j = fe((w) => {
    p || m(w), a?.(w);
  }, [p, a]), k = fe((w) => {
    o?.(w), l && j(w);
  }, [o, l, j]), b = fe((w, E) => {
    const T = e.filter((N) => !N.disabled).map((N) => N.id), L = T.indexOf(E);
    let M = null;
    switch (w.key) {
      case "ArrowLeft":
        M = L > 0 ? L - 1 : T.length - 1;
        break;
      case "ArrowRight":
        M = L < T.length - 1 ? L + 1 : 0;
        break;
      case "Home":
        M = 0;
        break;
      case "End":
        M = T.length - 1;
        break;
      case "Escape":
        w.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (M !== null) {
      w.preventDefault();
      const N = T[M], D = I.current.get(N);
      D && (D.focus(), k(N));
    }
  }, [e, k, i]), v = fe((w, E) => {
    E ? I.current.set(w, E) : I.current.delete(w);
  }, []), C = fe((w) => {
    const E = I.current.get(w);
    E && E.focus();
  }, []);
  Ji(h, () => ({
    focusTab: C,
    getActiveTab: () => g,
    getTabListElement: () => S.current
  }), [C, g]);
  const _ = fe((w) => {
    const E = w.relatedTarget;
    S.current?.contains(E) || s?.();
  }, [s]), y = ke("nhsuk-tabs", c);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: S,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: _,
                children: e.map((w) => {
                  const E = w.id === g, T = w.disabled, L = ke("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": E,
                    "nhsuk-tabs__list-item--disabled": T
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: L, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (M) => v(w.id, M),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": E,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: E ? 0 : -1,
                      disabled: T,
                      onClick: () => !T && j(w.id),
                      onKeyDown: (M) => !T && b(M, w.id),
                      onFocus: () => !T && k(w.id),
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
          const E = w.id === g;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${w.id}-tab`,
              id: `${w.id}-panel`,
              hidden: !E,
              children: w.content
            },
            w.id
          );
        })
      ]
    }
  );
}), qh = On(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, d) => {
    const u = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
qh.displayName = "Details";
const Jh = On(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const c = ["nhsuk-do-dont-list"];
    s && c.push(s);
    const d = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], u = () => t === "cross" ? /* @__PURE__ */ r.jsxs(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__cross",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: [
          /* @__PURE__ */ r.jsx(
            "path",
            {
              d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "path",
            {
              d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
              fill: "#d5281b"
            }
          )
        ]
      }
    ) : /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__tick",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        width: "34",
        height: "34",
        children: /* @__PURE__ */ r.jsx(
          "path",
          {
            strokeWidth: "4",
            strokeLinecap: "round",
            d: "M18.4 7.8l-8.5 8.4L5.6 12",
            stroke: "#007f3b"
          }
        )
      }
    ), f = (p) => t === "cross" && !a ? `do not ${p}` : p, h = () => /* @__PURE__ */ r.jsx(
      Ht,
      {
        level: o,
        className: "nhsuk-do-dont-list__label",
        text: e
      }
    );
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: l,
        className: c.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: d.join(" "), role: "list", children: n.map((p, x) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, x)) }) })
        ]
      }
    );
  }
);
Jh.displayName = "DoDontList";
const Xh = On(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...c
  }, d) => {
    const u = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Xh.displayName = "Expander";
const Kh = On(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!l.href, p = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), x = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Qh,
        {
          item: l,
          itemClasses: p,
          hasLink: h,
          hintId: u,
          statusId: f,
          ariaDescribedBy: x
        },
        c
      );
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: o,
        className: s,
        ...a,
        children: e.map(i)
      }
    );
  }
), Qh = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const d = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": s,
        children: d
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: d });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const d = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(st, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Kh.displayName = "TaskList";
const g1 = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Yi(
          u,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            e,
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        c()
      ]
    }
  );
}, x1 = ({
  src: e,
  alt: t,
  caption: n,
  sizes: a,
  srcset: o,
  className: s,
  ...i
}) => {
  const l = [
    "nhsuk-image",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      className: l,
      ...i,
      children: [
        /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-image__img",
            src: e,
            alt: t,
            ...a && o ? { sizes: a, srcSet: o } : {}
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          "figcaption",
          {
            className: "nhsuk-image__caption",
            dangerouslySetInnerHTML: { __html: n }
          }
        )
      ]
    }
  );
}, ep = ({
  dateRange: e,
  onPrev: t,
  onNext: n,
  onToday: a,
  density: o,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx(xt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(xt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(xt, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      Ar,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (c) => s?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      Ar,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: i,
        onChange: (c) => l?.(c.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), tp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(st, { color: np(n.status), text: n.label }) }, n.status)) });
function np(e) {
  switch (e) {
    case "available":
      return "green";
    case "full":
      return "grey";
    case "overbook":
      return "orange";
    case "held":
      return "yellow";
    // 'blocked' not mapped directly; choose grey as neutral representation
    case "blocked":
      return "grey";
    default:
      return "default";
  }
}
const y1 = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: c,
  getSlotAriaLabel: d,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: p = !0,
  legendPlacement: x = "bottom",
  onA11yModeChange: m
}) => {
  const [g, S] = Oe("grid"), I = i || g, [j, k] = Oe(a || []), b = n ?? j, v = Re(() => {
    const M = /* @__PURE__ */ new Set();
    return e.forEach((N) => M.add(new Date(N.start).getTime())), Array.from(M).sort((N, D) => N - D);
  }, [e]), C = Re(() => {
    const M = {};
    return e.forEach((N) => {
      const D = new Date(N.start).getTime();
      M[D] || (M[D] = {});
      const R = N.capacity - N.booked - (N.held || 0);
      M[D][N.sessionId] = { slot: N, remaining: R };
    }), M;
  }, [e]), _ = fe((M) => {
    if (s === "single") {
      const N = [M.id];
      n || k(N), o?.(N, { lastAction: "select" });
    } else {
      const N = b.includes(M.id), D = N ? b.filter((R) => R !== M.id) : [...b, M.id];
      n || k(D), o?.(D, { lastAction: N ? "deselect" : "select" });
    }
  }, [s, b, n, o]), y = Re(() => h || (p ? Array.from(new Set(e.map((N) => N.status))).map((N) => ({
    status: N,
    label: N.charAt(0).toUpperCase() + N.slice(1)
  })) : void 0), [h, p, e]), w = y ? /* @__PURE__ */ r.jsx(
    tp,
    {
      items: y,
      orientation: x === "left" || x === "right" ? "vertical" : "horizontal"
    }
  ) : null, E = (M) => {
    i || S(M), m?.(M);
  }, T = u || (f ? /* @__PURE__ */ r.jsx(
    ep,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: I,
      onA11yModeChange: E
    }
  ) : null), L = /* @__PURE__ */ r.jsx("div", { style: c, className: ke(l), children: /* @__PURE__ */ r.jsx(co, { className: ke("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsx(rr, { width: bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    T,
    x === "top" && w,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((M) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => _(M), "aria-pressed": b.includes(M.id), children: [
      qn(new Date(M.start)),
      " – ",
      qn(new Date(M.end)),
      " (",
      M.status,
      ")"
    ] }) }, M.id)) }),
    x === "bottom" && w
  ] }) }) }) }) });
  return I === "list" ? L : /* @__PURE__ */ r.jsx("div", { style: c, className: ke(l), children: /* @__PURE__ */ r.jsx(co, { className: ke("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsx(rr, { width: bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    T,
    x === "top" && w,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": v.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((M) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${M.specialty}`, className: "nhs-slot-matrix__session-header", children: M.specialty }, M.id))
      ] }),
      v.map((M) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": qn(new Date(M)), children: qn(new Date(M)) }),
        t.map((N) => {
          const D = C[M]?.[N.id];
          if (!D)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, N.id);
          const { slot: R, remaining: Z } = D, Q = b.includes(R.id), B = d ? d(R) : `Slot ${qn(new Date(R.start))} ${R.status}${Z === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": R.status,
              className: ke("nhs-slot-matrix__cell", Q && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": Q || void 0,
              onClick: () => _(R),
              children: Z > 0 ? `${Z} left` : "Full"
            },
            R.id
          );
        })
      ] }, M))
    ] }),
    x === "bottom" && w
  ] }) }) }) }) });
};
function ui(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function qn(e) {
  return `${ui(e.getHours())}:${ui(e.getMinutes())}`;
}
function $l(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = $l(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Pt() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = $l(e)) && (a && (a += " "), a += t);
  return a;
}
const rp = ({ level: e, children: t, className: n }) => {
  const a = `h${e}`;
  return tt.createElement(a, { className: n }, t);
}, ap = ({ href: e, children: t, className: n, ...a }) => /* @__PURE__ */ r.jsx("a", { href: e, className: n, ...a, children: t });
function Cr(e, t) {
  return /* @__PURE__ */ r.jsx("span", { className: Pt("nhs-step-nav__title", { "nhs-step-nav__title--current": t }), children: e.title });
}
const b1 = ({
  id: e,
  className: t,
  ariaLabel: n = "Step by step",
  heading: a,
  summary: o,
  headingLevel: s = 3,
  variant: i = "full-width",
  items: l,
  numbered: c = !0,
  currentStepId: d,
  renderLink: u,
  collapsible: f = !0,
  singleOpen: h = !1,
  defaultExpandedIds: p,
  expandedIds: x,
  onToggle: m,
  showAllControls: g = !1,
  autoFocusExpanded: S = !1
}) => {
  const I = u ?? ap, j = i === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" }, k = j.as === "aside" ? "aside" : "nav", b = x === void 0, [v, C] = Oe(
    () => new Set(p ?? [])
  ), _ = Re(() => b ? v : new Set(x), [b, v, x]), y = Re(
    () => l.some((M) => M.description || M.items && M.items.length > 0),
    [l]
  ), w = fe((M) => _.has(M), [_]), E = fe((M, N) => {
    b && C((D) => {
      if (h)
        return N ? /* @__PURE__ */ new Set([M]) : /* @__PURE__ */ new Set();
      const R = new Set(D);
      return N ? R.add(M) : R.delete(M), R;
    }), m?.(M, N);
  }, [b, m, h]), T = fe((M) => {
    const N = l.filter((D) => D.description || D.items && D.items.length > 0).map((D) => D.id);
    b && C(() => M ? h ? new Set(N.slice(0, 1)) : new Set(N) : /* @__PURE__ */ new Set()), N.forEach((D) => m?.(D, M));
  }, [l, b, m, h]), L = fe((M, N) => {
    const D = !w(M.id);
    if (E(M.id, D), D && S) {
      const R = document.getElementById(`sbs-${M.id}-panel`);
      R && R.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )?.focus();
    } else
      N?.focus();
  }, [S, w, E]);
  return tt.createElement(
    k,
    { id: e, "aria-label": n, className: Pt(j.className, t) },
    /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i === "full-width" && (a || o) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__intro", children: [
        a && /* @__PURE__ */ r.jsx(rp, { level: s, className: "nhs-step-nav__heading", children: a }),
        o && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__summary", children: o }),
        f && !h && g && y && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => T(!0), children: "Show all" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => T(!1), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("ol", { className: Pt("nhs-step-nav__list", { "nhs-step-nav__list--numbered": c }), children: l.map((M, N) => {
        const D = d === M.id, R = Pt(
          "nhs-step-nav__item",
          D && "nhs-step-nav__item--current",
          M.status && `nhs-step-nav__item--${M.status}`
        ), Z = M.href ? /* @__PURE__ */ r.jsx(I, { href: M.href, className: "nhs-step-nav__link", "aria-current": D ? "step" : void 0, children: Cr(M, D) }) : Cr(M, D), Q = !!(M.description || M.items && M.items.length > 0), B = f && Q ? w(M.id) : !0, J = `sbs-${M.id}-header`, F = `sbs-${M.id}-panel`;
        return /* @__PURE__ */ r.jsxs("li", { className: R, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__header", children: [
            Z,
            (M.optional || M.duration || M.meta) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__meta", children: [
              M.optional && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              M.duration && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__duration", children: M.duration }),
              M.meta
            ] }),
            f && Q && /* @__PURE__ */ r.jsx(
              "button",
              {
                id: J,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": B,
                "aria-controls": F,
                onClick: ($) => L(M, $.currentTarget),
                "aria-label": (B ? "Hide" : "Show") + ` details for ${typeof M.title == "string" ? M.title : "this step"}`,
                children: /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          Q && (!f || B) && /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: F,
              role: "region",
              "aria-labelledby": f ? J : void 0,
              className: Pt("nhs-step-nav__content"),
              children: [
                M.description && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__description", children: M.description }),
                M.items && M.items.length > 0 && /* @__PURE__ */ r.jsx("ol", { className: "nhs-step-nav__sublist", children: M.items.map(($) => {
                  const q = d === $.id, A = $.href ? /* @__PURE__ */ r.jsx(I, { href: $.href, className: "nhs-step-nav__sublink", "aria-current": q ? "step" : void 0, children: Cr($, q) }) : Cr($, q);
                  return /* @__PURE__ */ r.jsx("li", { className: Pt("nhs-step-nav__subitem", $.status && `nhs-step-nav__subitem--${$.status}`), children: A }, $.id);
                }) })
              ]
            }
          )
        ] }, M.id || N);
      }) })
    ] })
  );
}, op = ({
  title: e,
  value: t,
  subtitle: n,
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
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Ht, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return o ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: d
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: d
    }
  );
}, v1 = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(co, { children: /* @__PURE__ */ r.jsx(ln, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    rr,
    {
      width: bn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(op, { ...o })
    },
    s
  )) }) }) });
};
var Dr = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(Dr || {}), Hn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Hn || {}), Xn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Xn || {});
function fi(e) {
  if (e == null) return null;
  const n = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(n) ? null : n;
}
const sp = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function ip(e, t) {
  return sp.compare(String(e), String(t));
}
function hi(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function lp(e, t, n, a) {
  if (n?.sortComparator)
    return n.sortComparator(e, t);
  const o = n?.sortType;
  if (o === Dr.Number) {
    const s = Number(e), i = Number(t), l = Number.isNaN(s), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : s - i;
  }
  if (o === Dr.Boolean) {
    const s = !!e, i = !!t, l = n?.booleanOrder ?? a?.booleanOrder ?? Xn.FalseFirst;
    return s === i ? 0 : l === Xn.TrueFirst ? s ? -1 : 1 : s ? 1 : -1;
  }
  if (o === Dr.Date) {
    const s = fi(e), i = fi(t);
    return s == null && i == null ? 0 : s == null ? 1 : i == null ? -1 : s - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const s = Number.isNaN(e), i = Number.isNaN(t);
    return s && i ? 0 : s ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const s = n?.booleanOrder ?? a?.booleanOrder ?? Xn.FalseFirst;
    return e === t ? 0 : s === Xn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return ip(e, t);
}
function xo(e, t, n = Hn.Last, a) {
  const o = new Map(e.map((i) => [i.key, i])), s = t ?? [];
  return (i, l) => {
    if (!s.length) return 0;
    for (const { key: c, direction: d } of s) {
      const u = o.get(c), f = u ? hi(i, u) : i[c], h = u ? hi(l, u) : l[c], p = f == null, x = h == null;
      if (p || x) {
        if (p && x) continue;
        return (u?.nullsPosition ?? a?.nullsPosition ?? n) === Hn.First ? p ? -1 : 1 : p ? 1 : -1;
      }
      let m = lp(f, h, u, a);
      if (m !== 0) return d === "asc" ? m : -m;
    }
    if (a?.stable) {
      const c = i.__originalIndex__ ?? i.originalIndex ?? void 0, d = l.__originalIndex__ ?? l.originalIndex ?? void 0;
      if (typeof c == "number" && typeof d == "number")
        return c - d;
    }
    return 0;
  };
}
const cp = tt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    sortingOptions: o,
    selectedRowIndex: s,
    onRowSelect: i,
    id: l,
    testId: c,
    ariaLabel: d,
    ariaLabelledby: u,
    ariaDescribedby: f,
    className: h,
    tableClassName: p,
    bordered: x = !1,
    striped: m = !1,
    responsive: g = !1,
    tableType: S = "default"
  }, I) => {
    const j = Ze(null), k = Ze(null), b = Ze(null);
    tt.useImperativeHandle(I, () => j.current, []);
    const [v, C] = Oe(0), [_, y] = Oe(0), [w, E] = Oe("headers"), [T, L] = Oe("browse"), M = t.length, N = e.length, D = Re(() => {
      if (!n || n.length === 0) return e;
      const $ = xo(
        t,
        n,
        Hn.Last,
        o
      );
      return [...e].sort($);
    }, [e, n, t, o]), R = fe(($, q) => {
      setTimeout(() => {
        const A = j.current?.querySelector(
          `tbody tr:nth-child(${$ + 1}) td:nth-child(${q + 1})`
        );
        A && (A.focus(), typeof A.scrollIntoView == "function" && A.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Z = fe(($) => {
      setTimeout(() => {
        const q = j.current?.querySelector(
          `th:nth-child(${$ + 1})`
        );
        q && (q.focus(), typeof q.scrollIntoView == "function" && q.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = fe(
      ($) => {
        a?.($);
      },
      [a]
    ), B = fe(
      ($) => {
        i?.($);
      },
      [i]
    ), J = fe(
      ($) => {
        const { key: q } = $;
        switch (q) {
          case "Enter":
            if ($.preventDefault(), w === "headers" && T === "browse")
              L("navigate"), Z(_);
            else if (w === "headers" && T === "navigate") {
              const A = t[_];
              A && Q(A.key);
            } else w === "cells" && T === "browse" ? (L("navigate"), R(v, _)) : w === "cells" && T === "navigate" && B(v);
            break;
          case "Escape":
            $.preventDefault(), (w === "headers" && T === "navigate" || w === "cells" && T === "navigate") && L("browse");
            break;
          case "ArrowLeft":
            if ($.preventDefault(), T === "navigate" || T === "browse" && w === "headers") {
              if (w === "headers") {
                const A = Math.max(0, _ - 1);
                y(A), Z(A);
              } else if (w === "cells") {
                const A = Math.max(0, _ - 1);
                y(A), R(v, A);
              }
            }
            break;
          case "ArrowRight":
            if ($.preventDefault(), T === "navigate" || T === "browse" && w === "headers") {
              if (w === "headers") {
                const A = Math.min(
                  M - 1,
                  _ + 1
                );
                y(A), Z(A);
              } else if (w === "cells") {
                const A = Math.min(
                  M - 1,
                  _ + 1
                );
                y(A), R(v, A);
              }
            }
            break;
          case "ArrowUp":
            if ($.preventDefault(), w === "cells") {
              if (T === "browse") {
                const A = Math.max(0, v - 1);
                C(A), R(A, 0), y(0);
              } else if (T === "navigate")
                if (v > 0) {
                  const A = v - 1;
                  C(A), R(A, _);
                } else
                  E("headers"), L("browse"), Z(_);
            }
            break;
          case "ArrowDown":
            if ($.preventDefault(), w === "headers" && T === "browse")
              E("cells"), C(0), y(0), R(0, 0);
            else if (w === "cells") {
              const A = N - 1;
              if (T === "browse") {
                const z = Math.min(A, v + 1);
                C(z), R(z, 0), y(0);
              } else if (T === "navigate" && v < A) {
                const z = v + 1;
                C(z), R(z, _);
              }
            }
            break;
          case "Home":
            $.preventDefault(), w === "headers" ? (y(0), Z(0)) : w === "cells" && ($.ctrlKey ? (C(0), y(0), R(0, 0)) : (y(0), R(v, 0)));
            break;
          case "End":
            if ($.preventDefault(), w === "headers") {
              const A = M - 1;
              y(A), Z(A);
            } else if (w === "cells")
              if ($.ctrlKey) {
                const A = N - 1, z = M - 1;
                C(A), y(z), R(A, z);
              } else {
                const A = M - 1;
                y(A), R(v, A);
              }
            break;
          case " ":
            if ($.preventDefault(), w === "headers" && T === "navigate") {
              const A = t[_];
              A && Q(A.key);
            } else w === "cells" && T === "navigate" && B(v);
            break;
        }
      },
      [
        w,
        T,
        _,
        v,
        M,
        N,
        t,
        R,
        Z,
        Q,
        B
      ]
    );
    nt(() => {
      const $ = j.current;
      if ($)
        return $.addEventListener("keydown", J), () => $.removeEventListener("keydown", J);
    }, [J]);
    const F = ke(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": m,
        "nhsuk-table--compact": S === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: j,
        className: F,
        id: l,
        "data-testid": c,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": u,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: k, role: "row", children: t.map(($, q) => {
            const A = n?.find(
              (V) => V.key === $.key
            ), z = !!A, P = w === "headers" && _ === q;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ke("sortable-header", {
                  "sortable-header--focused": P
                }),
                role: "columnheader",
                tabIndex: P ? 0 : -1,
                onClick: () => {
                  E("headers"), y(q), L("navigate"), Z(q), Q($.key);
                },
                onKeyDown: (V) => {
                  (V.key === "Enter" || V.key === " ") && (V.preventDefault(), Q($.key));
                },
                "aria-sort": z ? A?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: $.label }),
                  z && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex(
                      (V) => V.key === $.key
                    ) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: A?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              $.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: b, className: "nhsuk-table__body", role: "rowgroup", children: D.map(($, q) => {
            const A = s === q, z = w === "cells" && v === q;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ke("data-row", {
                  "data-row--selected": A,
                  "data-row--focused": z
                }),
                "aria-selected": A,
                children: t.map((P, V) => {
                  const G = P.tableRenderer ? P.tableRenderer($) : P.render ? P.render($) : $[P.key], ee = w === "cells" && v === q && _ === V, de = () => typeof G == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: G ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: G ? "Yes" : "No" })
                  ] }) : String(G ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ke("data-cell", {
                        "data-cell--focused": ee
                      }),
                      tabIndex: ee ? 0 : -1,
                      onClick: () => {
                        E("cells"), C(q), y(V), L("navigate"), R(q, V), B(q);
                      },
                      children: de()
                    },
                    P.key
                  );
                })
              },
              q
            );
          }) })
        ]
      }
    );
  }
);
cp.displayName = "AriaDataGrid";
const er = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Ze(null), h = Ze(null), p = Ze(null), x = fe((y, w) => {
    c || (h.current = w, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", w));
  }, [c]), m = fe((y, w) => {
    c || h.current === w || (y.preventDefault(), y.dataTransfer.dropEffect = "move", p.current = w);
  }, [c]), g = fe((y, w) => {
    if (c) return;
    y.preventDefault();
    const E = h.current;
    if (!E || E === w) return;
    const T = e.findIndex((M) => M.key === E), L = e.findIndex((M) => M.key === w);
    if (T !== -1 && L !== -1) {
      const M = [...e], [N] = M.splice(T, 1);
      M.splice(L, 0, N), n(M);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), S = fe(() => {
    h.current = null, p.current = null;
  }, []), I = fe((y) => {
    const w = t.find((E) => E.key === y);
    return w ? w.label : y;
  }, [t]), j = fe((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), k = fe((y) => {
    if (c) return;
    const w = e.map(
      (E) => E.key === y ? { ...E, direction: E.direction === "asc" ? "desc" : "asc" } : E
    );
    n(w);
  }, [e, n, c]), b = fe((y) => {
    if (c) return;
    const w = e.filter((E) => E.key !== y);
    n(w);
  }, [e, n, c]), v = fe(() => {
    c || n([]);
  }, [n, c]), C = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((w, E) => {
      const T = w.direction === "asc" ? "ascending" : "descending";
      return `${E + 1}. ${I(w.key)} (${T})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const w = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${w}`;
    }
  }, _ = Re(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), u && y.push(u), y.join(" ");
  }, [l, u]);
  return e.length === 0 ? /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description",
        id: "sort-description",
        "aria-live": "polite",
        children: o
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${a}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: C()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": d,
          "aria-describedby": _,
          children: e.map((y, w) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (E) => x(E, y.key),
              onDragOver: (E) => m(E, y.key),
              onDrop: (E) => g(E, y.key),
              onDragEnd: S,
              onClick: () => k(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                st,
                {
                  color: j(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => b(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: I(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (E) => {
                          E.stopPropagation(), k(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${I(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${y.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${y.direction}`,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            focusable: "false",
                            children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
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
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        xt,
        {
          variant: "secondary",
          onClick: v,
          disabled: c,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function dp(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
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
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
        i[d] = e.tabLoadingStates[d], l[d] = e.tabErrors[d], c[d] = e.selectedRows[d];
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
const yo = On(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: c,
    ariaDescription: d,
    className: u = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: p,
    isLoading: x = !1,
    loadingComponent: m,
    error: g = null,
    errorComponent: S,
    "data-testid": I,
    actions: j,
    actionsMinGap: k = 16,
    forceActionsAbove: b = !1,
    hideTabsIfSingle: v = !1,
    minColumnWidth: C,
    enableColumnCollapse: _ = !1,
    minVisibleColumns: y = 2,
    showCollapsedColumnsIndicator: w = !0,
    sortStatusPlacement: E = "header"
  } = t, T = v && o.length === 1, L = tr(), M = p ?? `aria-tabs-datagrid-${L}`, N = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), D = `${M}-description`, R = `${M}-navigation-help`, {
    dataComparator: Z = (U, ne) => JSON.stringify(U) === JSON.stringify(ne),
    filterFunction: Q = (U) => U,
    booleanRenderer: B = (U) => U ? "✓" : "✗"
  } = a || {}, J = s !== void 0, F = s ?? 0, [$, q] = Oe({
    focusArea: T ? "headers" : "tabs",
    focusedTabIndex: F,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), A = Re(() => ({
    selectedIndex: F,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [F]), [z, P] = Xi(dp, A);
  nt(() => {
    const U = z.tabLoadingStates.length, ne = o.length;
    U !== ne && P({ type: "ADJUST_ARRAYS", payload: { newLength: ne } });
  }, [o.length]), nt(() => {
    J && P({ type: "SET_SELECTED_INDEX", payload: F });
  }, [F, J]), nt(() => {
    q((U) => ({
      ...U,
      focusArea: T ? "headers" : "tabs",
      focusedTabIndex: z.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [z.selectedIndex, T]);
  const V = Ze(null), G = fe((U) => {
    U.shiftKey && (U.key === "ArrowLeft" ? (U.preventDefault(), V.current?.scrollBy({ left: -64, behavior: "smooth" })) : U.key === "ArrowRight" && (U.preventDefault(), V.current?.scrollBy({ left: 64, behavior: "smooth" })));
  }, []), [ee, de] = Oe({}), [Y, ae] = Oe(!1), le = Ze(null), be = Ze(null), pe = fe((U) => {
    const ne = o[U];
    if (!ne) return [];
    const xe = ee[U] || /* @__PURE__ */ new Set();
    return ne.columns.filter((ge) => !xe.has(ge.key));
  }, [o, ee]), Ie = fe((U) => {
    const ne = o[U];
    if (!ne) return /* @__PURE__ */ new Set();
    if (!_) return /* @__PURE__ */ new Set();
    const xe = V.current?.parentElement;
    if (!xe) return /* @__PURE__ */ new Set();
    const ge = typeof C == "number" ? `${C}px` : C || "160px", ye = ne.columns.map((Fe, Ue) => ({
      key: Fe.key,
      min: Fe.minWidth !== void 0 ? typeof Fe.minWidth == "number" ? `${Fe.minWidth}px` : String(Fe.minWidth) : ge,
      priority: Fe.collapsePriority ?? Ue,
      lock: !!Fe.alwaysVisible,
      group: Fe.collapseGroup,
      groupPriority: Fe.collapseGroupPriority ?? 0
    })), Se = (Fe) => {
      if (Fe.endsWith("px")) return parseFloat(Fe);
      const Ue = document.createElement("div");
      Ue.style.width = Fe, xe.appendChild(Ue);
      const At = Ue.getBoundingClientRect().width;
      return Ue.remove(), At || 0;
    }, Be = ye.reduce((Fe, Ue) => Fe + Se(Ue.min), 0), Ce = xe.clientWidth;
    if (Be <= Ce || ye.length <= y) return /* @__PURE__ */ new Set();
    const Me = ye.map((Fe, Ue) => ({ ...Fe, idx: Ue })), we = /* @__PURE__ */ new Map();
    for (const Fe of Me)
      if (Fe.group) {
        const Ue = we.get(Fe.group) || { keys: [], width: 0, groupPriority: Fe.groupPriority, lock: !1, indices: [] };
        Ue.keys.push(Fe.key), Ue.width += Se(Fe.min), Ue.groupPriority = Math.max(Ue.groupPriority, Fe.groupPriority), Ue.lock = Ue.lock || Fe.lock, Ue.indices.push(Fe.idx), we.set(Fe.group, Ue);
      }
    const je = [];
    for (const [Fe, Ue] of we)
      Ue.lock || je.push({ type: "group", keys: Ue.keys, width: Ue.width, priority: Ue.groupPriority, rightmostIndex: Math.max(...Ue.indices) });
    for (const Fe of Me)
      !Fe.group && !Fe.lock && je.push({ type: "column", keys: [Fe.key], width: Se(Fe.min), priority: Fe.priority, rightmostIndex: Fe.idx });
    je.sort((Fe, Ue) => Fe.priority !== Ue.priority ? Ue.priority - Fe.priority : Ue.rightmostIndex - Fe.rightmostIndex);
    let Ke = /* @__PURE__ */ new Set(), ot = Be;
    const Ae = ye.length;
    for (const Fe of je) {
      if (Ae - Ke.size <= y) break;
      if (ot - Fe.width >= Ce) {
        for (const Ue of Fe.keys) Ke.add(Ue);
        ot -= Fe.width;
      } else
        continue;
    }
    return Ke;
  }, [o, _, C, y]);
  nt(() => {
    if (!_) return;
    const U = () => {
      const xe = Ie(z.selectedIndex);
      if (de((ge) => ({ ...ge, [z.selectedIndex]: xe })), w && be.current) {
        const ge = xe.size;
        be.current.textContent = ge > 0 ? `${ge} column${ge === 1 ? "" : "s"} collapsed` : "All columns visible";
      }
    };
    U();
    const ne = new ResizeObserver(U);
    return re.current && ne.observe(re.current), () => {
      ne.disconnect();
    };
  }, [z.selectedIndex, o, _, Ie, w]), nt(() => {
    l && l(z.globalSelectedRowData);
  }, [z.globalSelectedRowData, l]);
  const Ve = fe(
    (U, ne) => Z(U, ne),
    [Z]
  ), Te = fe(
    (U) => {
      U >= 0 && U < o.length && !o[U].disabled && (P({ type: "SET_SELECTED_INDEX", payload: U }), q((ne) => ({
        ...ne,
        focusedTabIndex: U,
        focusArea: "tabs"
      })), i?.(U));
    },
    [o, i]
  ), Le = Ze(!1), _e = fe(
    (U, ne) => {
      if (!ne?.force && !Le.current && U === 0) {
        Le.current = !0;
        return;
      }
      Le.current = !0, setTimeout(() => {
        const xe = H.current[U], ge = xe?.parentElement;
        if (xe && ge) {
          const ye = xe.offsetLeft, Se = xe.offsetWidth, Be = ge.clientWidth, Ce = ye - Be / 2 + Se / 2;
          try {
            ge.scrollTo({
              left: Math.max(0, Ce),
              behavior: "smooth"
            });
          } catch {
            xe.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!xe,
          tabListElementExists: !!ge
        });
      }, 50);
    },
    []
  ), H = Ze([]), X = Ze([]), se = fe(
    (U, ne) => {
      const xe = z.sortConfig || [], ge = xe.find(
        (Be) => Be.key === ne
      );
      let ye;
      ge ? ge.direction === "asc" ? ye = xe.map(
        (Be) => Be.key === ne ? { ...Be, direction: "desc" } : Be
      ) : ye = xe.filter(
        (Be) => Be.key !== ne
      ) : ye = [...xe, { key: ne, direction: "asc" }], P({
        type: "SET_SORT",
        payload: ye
      }), o[U].onSort?.(ne);
    },
    [z.sortConfig, o]
  ), he = fe(
    (U) => {
      setTimeout(() => {
        const ne = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] th:nth-child(${U + 1})`
        );
        ne && ne.focus();
      }, 0);
    },
    [z.selectedIndex]
  ), me = fe(
    (U) => B(U),
    [B]
  ), O = fe(
    (U, ne) => {
      setTimeout(() => {
        const xe = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] tbody tr:nth-child(${U + 1}) td:nth-child(${ne + 1})`
        );
        xe && xe.focus();
      }, 0);
    },
    [z.selectedIndex]
  );
  nt(() => {
    $.isGridActive && ($.focusArea === "headers" ? setTimeout(() => {
      he($.focusedHeaderIndex);
    }, 0) : $.focusArea === "cells" && setTimeout(() => {
      O(
        $.focusedRowIndex,
        $.focusedColumnIndex
      );
    }, 0));
  }, [
    $.focusArea,
    $.isGridActive,
    $.focusedHeaderIndex,
    $.focusedRowIndex,
    $.focusedColumnIndex,
    he,
    O
  ]), nt(() => {
    T || _e(z.selectedIndex);
  }, [z.selectedIndex, _e, T]);
  const W = fe(
    (U, ne) => {
      const { key: xe } = U, ge = pe(z.selectedIndex).length || 0;
      switch (xe) {
        case "ArrowLeft":
          U.preventDefault();
          const ye = Math.max(0, ne - 1);
          q((Me) => ({
            ...Me,
            focusedHeaderIndex: ye
          })), he(ye);
          break;
        case "ArrowRight":
          U.preventDefault();
          const Se = Math.min(ge - 1, ne + 1);
          q((Me) => ({
            ...Me,
            focusedHeaderIndex: Se
          })), he(Se);
          break;
        case "ArrowUp":
          U.preventDefault(), T ? j && setTimeout(() => {
            const Me = ue.current;
            if (!Me) return;
            Me.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )?.focus();
          }, 0) : (q((Me) => ({
            ...Me,
            focusArea: "tabs",
            focusedTabIndex: z.selectedIndex
          })), _e(z.selectedIndex), H.current[z.selectedIndex]?.focus());
          break;
        case "ArrowDown":
          U.preventDefault(), q((Me) => ({
            ...Me,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: ne,
            isGridActive: !0
          }));
          break;
        case "Home":
          U.preventDefault(), q((Me) => ({ ...Me, focusedHeaderIndex: 0 })), he(0);
          break;
        case "End":
          U.preventDefault();
          const Be = ge - 1;
          q((Me) => ({
            ...Me,
            focusedHeaderIndex: Be
          })), he(Be);
          break;
        case "Enter":
        case " ":
          U.preventDefault();
          const Ce = pe(z.selectedIndex)[ne]?.key;
          Ce && se(z.selectedIndex, Ce);
          break;
      }
    },
    [
      o,
      z.selectedIndex,
      se,
      q,
      he,
      O,
      H,
      pe
    ]
  ), oe = fe(
    (U, ne, xe) => {
      const { key: ge } = U, ye = o[z.selectedIndex], Se = ye?.data.length || 0, Be = pe(z.selectedIndex).length || 0;
      switch (ge) {
        case "ArrowUp":
          if (U.preventDefault(), ne === 0)
            q((je) => ({
              ...je,
              focusArea: "headers",
              focusedHeaderIndex: xe,
              isGridActive: !1
            })), he(xe);
          else {
            const je = ne - 1;
            q((Ke) => ({
              ...Ke,
              focusedRowIndex: je
            })), O(je, xe);
          }
          break;
        case "ArrowDown":
          U.preventDefault();
          const Ce = Math.min(Se - 1, ne + 1);
          q((je) => ({
            ...je,
            focusedRowIndex: Ce
          })), O(Ce, xe);
          break;
        case "ArrowLeft":
          U.preventDefault();
          const Me = Math.max(0, xe - 1);
          q((je) => ({
            ...je,
            focusedColumnIndex: Me
          })), O(ne, Me);
          break;
        case "ArrowRight":
          U.preventDefault();
          const we = Math.min(Be - 1, xe + 1);
          q((je) => ({
            ...je,
            focusedColumnIndex: we
          })), O(ne, we);
          break;
        case "Home":
          U.preventDefault(), U.ctrlKey ? (q((je) => ({
            ...je,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), O(0, 0)) : (q((je) => ({ ...je, focusedColumnIndex: 0 })), O(ne, 0));
          break;
        case "End":
          if (U.preventDefault(), U.ctrlKey) {
            const je = Se - 1, Ke = Be - 1;
            q((ot) => ({
              ...ot,
              focusedRowIndex: je,
              focusedColumnIndex: Ke
            })), O(je, Ke);
          } else {
            const je = Be - 1;
            q((Ke) => ({
              ...Ke,
              focusedColumnIndex: je
            })), O(ne, je);
          }
          break;
        case "Enter":
        case " ":
          if (U.preventDefault(), ye && ye.data[ne]) {
            const je = ye.data.some(
              (Ae) => "ews_data" in Ae
            ) ? Q(ye.data, z.filters) : ye.data, Ke = z.sortConfig;
            let ot = je;
            if (Ke && Ke.length > 0) {
              const Ae = xo(ye.columns, Ke, Hn.Last, a?.sortingOptions);
              ot = [...je].sort(Ae);
            }
            if (ot[ne]) {
              const Ae = ot[ne], Ue = z.globalSelectedRowData && Ve(z.globalSelectedRowData, Ae) ? null : Ae;
              P({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Ue
              });
            }
          }
          break;
      }
    },
    [
      o,
      z.selectedIndex,
      z.filters,
      z.sortConfig,
      Q,
      Ve,
      P,
      q,
      he,
      O,
      pe
    ]
  ), te = fe(
    (U, ne) => Q(U, ne),
    [Q]
  );
  if (Ji(
    n,
    () => ({
      selectTab: (U) => {
        U >= 0 && U < o.length && (P({ type: "SET_SELECTED_INDEX", payload: U }), i?.(U));
      },
      refreshData: (U) => {
        console.log("Refreshing data for tab:", U ?? "all");
      },
      exportData: (U) => {
        const ne = U ?? z.selectedIndex, xe = o[ne];
        return xe ? xe.data : [];
      },
      getSelectedRows: (U) => z.globalSelectedRowData ? [] : [],
      clearSelection: (U) => {
        P({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (U) => {
        P({ type: "SET_FILTERS", payload: U });
      }
    }),
    [z.selectedIndex, z.selectedRows, o, i]
  ), x)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": I,
        children: m || /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-spinner",
            role: "status",
            "aria-label": "Loading data",
            children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." })
          }
        ) })
      }
    );
  if (g)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": I,
        children: S || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: g })
        ] })
      }
    );
  const re = Ze(null), ce = Ze(null), ue = Ze(null), [ve, Ne] = Oe(!0);
  nt(() => {
    if (!j) {
      Ne(!1);
      return;
    }
    if (T || b) {
      Ne(!1);
      return;
    }
    function U() {
      if (!re.current || !ce.current || !ue.current) return;
      const ge = re.current.clientWidth, ye = Array.from(
        ce.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), Se = ye.reduce((we, je) => we + je.offsetWidth, 0), Be = ue.current.offsetWidth, Ce = Math.max(8 * (ye.length - 1), 0), Me = Se + Ce + Be + k <= ge;
      Ne(Me);
    }
    const ne = requestAnimationFrame(() => U()), xe = new ResizeObserver(() => U());
    return re.current && xe.observe(re.current), ce.current && xe.observe(ce.current), () => {
      cancelAnimationFrame(ne), xe.disconnect();
    };
  }, [j, k, b, o.length, T]);
  const He = ue, Ye = fe(() => He.current ? Array.from(
    He.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((U) => !U.hasAttribute("disabled")) : [], []), lt = fe(
    (U) => {
      const ne = Ye();
      if (!ne.length) return;
      const xe = Math.max(0, Math.min(U, ne.length - 1));
      ne[xe].focus(), q((ge) => ({ ...ge, focusArea: "actions", focusedActionIndex: xe }));
    },
    [Ye]
  ), Qe = fe(() => lt(0), [lt]), ie = fe(
    (U, ne) => {
      const { key: xe } = U, ge = o.length - 1;
      switch (xe) {
        case "ArrowUp": {
          j && !ve && (U.preventDefault(), Qe());
          break;
        }
        case "ArrowLeft": {
          U.preventDefault();
          const ye = ne > 0 ? ne - 1 : ge;
          Te(ye), _e(ye), H.current[ye]?.focus();
          break;
        }
        case "ArrowRight": {
          if (U.preventDefault(), ne === ge && j && ve) {
            Qe();
            return;
          }
          const ye = ne < ge ? ne + 1 : 0;
          Te(ye), _e(ye), H.current[ye]?.focus();
          break;
        }
        case "ArrowDown": {
          U.preventDefault(), q((ye) => ({
            ...ye,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          U.preventDefault(), Te(0), _e(0), H.current[0]?.focus();
          break;
        }
        case "End": {
          U.preventDefault(), Te(ge), _e(ge), H.current[ge]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          U.preventDefault(), Te(ne);
          break;
        }
        case "Tab": {
          !U.shiftKey && ne === ge && j && ve && Qe();
          break;
        }
      }
    },
    [o.length, Te, _e, j, ve, Qe]
  ), $e = fe((U) => {
    const { key: ne } = U, xe = Ye();
    if (!xe.length) return;
    const ge = xe.findIndex((ye) => ye === document.activeElement);
    switch (ne) {
      case "ArrowLeft": {
        if (ve)
          if (ge > 0)
            U.preventDefault(), lt(ge - 1);
          else {
            U.preventDefault();
            const ye = o.length - 1;
            Te(ye), _e(ye), H.current[ye]?.focus(), q((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: ye }));
          }
        break;
      }
      case "ArrowRight": {
        ve && (ge < xe.length - 1 ? (U.preventDefault(), lt(ge + 1)) : (U.preventDefault(), Te(0), _e(0), H.current[0]?.focus(), q((ye) => ({ ...ye, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ve)
          U.preventDefault(), q((ye) => ({ ...ye, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          U.preventDefault();
          const ye = z.selectedIndex;
          H.current[ye]?.focus(), q((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: ye }));
        }
        break;
      }
    }
  }, [Ye, ve, lt, o.length, Te, _e, z.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": I,
      ref: re,
      children: [
        d && !N && /* @__PURE__ */ r.jsx("div", { id: D, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: R,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        E === "header" && /* @__PURE__ */ r.jsx(
          er,
          {
            sortConfig: z.sortConfig || [],
            columns: o.flatMap((U) => U.columns.map((ne) => ({ key: ne.key, label: ne.label }))).filter((U, ne, xe) => xe.findIndex((ge) => ge.key === U.key) === ne),
            onSortChange: (U) => {
              P({ type: "SET_SORT", payload: U });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        j && (!ve || T) && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ue,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: $e,
            children: j
          }
        ),
        !T && /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ve ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? N ? d : D : R,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: ce,
              children: o.map((U, ne) => {
                const xe = ne === z.selectedIndex, ge = U.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${U.id}`,
                    "aria-controls": `panel-${U.id}`,
                    "aria-selected": xe,
                    "aria-disabled": ge,
                    tabIndex: xe ? 0 : -1,
                    ref: (ye) => {
                      H.current[ne] = ye;
                    },
                    onClick: () => Te(ne),
                    onKeyDown: (ye) => ie(ye, ne),
                    disabled: ge,
                    className: [
                      "aria-tabs-datagrid__tab",
                      xe ? "aria-tabs-datagrid__tab--selected" : "",
                      ge ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: U.label }),
                      z.tabLoadingStates[ne] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      z.tabErrors[ne] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  U.id
                );
              })
            }
          ),
          j && ve && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ue,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: $e,
              children: j
            }
          )
        ] }),
        _ && w && (() => {
          const U = T ? 0 : z.selectedIndex, ne = ee[U] || /* @__PURE__ */ new Set();
          if (ne.size === 0) return null;
          const xe = o[U], ge = xe ? xe.columns.filter((ye) => ne.has(ye.key)).map((ye) => ye.label) : [];
          return /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__collapsed-indicator", children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "nhsuk-u-visually-hidden",
                "aria-live": "polite",
                ref: be
              }
            ),
            /* @__PURE__ */ r.jsxs("div", { className: "collapsed-chip-wrapper", children: [
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  ref: le,
                  type: "button",
                  className: "collapsed-chip",
                  title: `Collapsed columns: ${ge.join(", ")}`,
                  onClick: () => ae((ye) => !ye),
                  children: [
                    ne.size,
                    " hidden column",
                    ne.size === 1 ? "" : "s"
                  ]
                }
              ),
              Y && /* @__PURE__ */ r.jsx("div", { className: "collapsed-popover", role: "dialog", "aria-label": "Collapsed columns", children: /* @__PURE__ */ r.jsx("ul", { children: ge.map((ye, Se) => /* @__PURE__ */ r.jsx("li", { children: ye }, Se)) }) })
            ] })
          ] });
        })(),
        E === "above" && /* @__PURE__ */ r.jsx(
          er,
          {
            sortConfig: z.sortConfig || [],
            columns: o.flatMap((U) => U.columns.map((ne) => ({ key: ne.key, label: ne.label }))).filter((U, ne, xe) => xe.findIndex((ge) => ge.key === U.key) === ne),
            onSortChange: (U) => {
              P({ type: "SET_SORT", payload: U });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        o.map((U, ne) => {
          const xe = T ? ne === 0 : ne === z.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: T ? void 0 : "tabpanel",
              id: T ? void 0 : `panel-${U.id}`,
              "aria-labelledby": T ? void 0 : `tab-${U.id}`,
              tabIndex: 0,
              hidden: !xe,
              ref: (ge) => {
                X.current[ne] = ge;
              },
              className: `aria-tabs-datagrid__panel ${U.className || ""}`,
              "data-tab-panel": ne,
              children: xe && (() => {
                const ge = U.data.some(
                  (Se) => "ews_data" in Se
                ) ? te(U.data, z.filters) : U.data, ye = Re(() => {
                  const Se = z.sortConfig;
                  if (!Se || Se.length === 0) return ge;
                  const Be = xo(U.columns, Se, Hn.Last, a?.sortingOptions);
                  return [...ge].sort(Be);
                }, [ge, z.sortConfig, U.columns, a?.sortingOptions]);
                return /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "aria-tabs-datagrid__scroll",
                    ref: V,
                    onKeyDown: G,
                    style: {
                      // Expose CSS var to SCSS; inline for SSR safety
                      "--atd-min-col-w": typeof C == "number" ? `${C}px` : C || void 0
                    },
                    children: /* @__PURE__ */ r.jsxs(
                      "table",
                      {
                        className: "nhsuk-table aria-tabs-datagrid__grid",
                        role: "grid",
                        "aria-label": U.ariaLabel,
                        "aria-describedby": U.ariaDescription ? `panel-${U.id}-description` : void 0,
                        children: [
                          U.ariaDescription && /* @__PURE__ */ r.jsx(
                            "caption",
                            {
                              className: "nhsuk-u-visually-hidden",
                              id: `panel-${U.id}-description`,
                              children: U.ariaDescription
                            }
                          ),
                          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: pe(ne).map((Se, Be) => {
                            const Ce = z.sortConfig?.find(
                              (je) => je.key === Se.key
                            ), Me = !!Ce, we = $.focusArea === "headers" && $.focusedHeaderIndex === Be;
                            return /* @__PURE__ */ r.jsx(
                              "th",
                              {
                                className: `sortable-header ${we ? "sortable-header--focused" : ""} ${Me ? "sortable-header--sorted" : ""}`,
                                role: "columnheader",
                                tabIndex: we ? 0 : -1,
                                onClick: () => se(ne, Se.key),
                                onKeyDown: (je) => W(je, Be),
                                "aria-sort": Me ? Ce?.direction === "asc" ? "ascending" : "descending" : "none",
                                style: { minWidth: Se.minWidth !== void 0 ? typeof Se.minWidth == "number" ? `${Se.minWidth}px` : Se.minWidth : typeof C == "number" ? `${C}px` : C || void 0 },
                                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: Se.label }),
                                  /* @__PURE__ */ r.jsxs(
                                    "div",
                                    {
                                      className: `sort-indicator-container ${Me ? `sort-indicator--${Ce?.direction}` : ""}`,
                                      children: [
                                        z.sortConfig && z.sortConfig.length > 0 && z.sortConfig.findIndex(
                                          (je) => je.key === Se.key
                                        ) !== -1 && /* @__PURE__ */ r.jsx(
                                          "span",
                                          {
                                            className: `sort-priority sort-priority--priority-${z.sortConfig.findIndex((je) => je.key === Se.key) + 1}`,
                                            "data-priority": z.sortConfig.findIndex(
                                              (je) => je.key === Se.key
                                            ) + 1,
                                            title: `Sort priority: ${z.sortConfig.findIndex((je) => je.key === Se.key) + 1}`,
                                            children: z.sortConfig.findIndex(
                                              (je) => je.key === Se.key
                                            ) + 1
                                          }
                                        ),
                                        Me && /* @__PURE__ */ r.jsx(
                                          "svg",
                                          {
                                            className: `nhsuk-icon sort-arrow sort-arrow--${Ce?.direction}`,
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            focusable: "false",
                                            children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ] })
                              },
                              Se.key
                            );
                          }) }) }),
                          /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: ye.map((Se, Be) => {
                            const Ce = z.globalSelectedRowData && Ve(z.globalSelectedRowData, Se), Me = $.focusArea === "cells" && $.focusedRowIndex === Be;
                            return /* @__PURE__ */ r.jsx(
                              "tr",
                              {
                                role: "row",
                                className: `data-row ${Ce ? "data-row--selected" : ""} ${Me ? "data-row--focused" : ""}`,
                                "aria-selected": Ce,
                                children: pe(ne).map((we, je) => {
                                  const Ke = Se[we.key];
                                  let ot;
                                  we.tableRenderer ? ot = we.tableRenderer(Se) : we.render ? ot = we.render(Se) : ot = Ke;
                                  const Ae = $.focusArea === "cells" && $.focusedRowIndex === Be && $.focusedColumnIndex === je, Fe = () => {
                                    if (we.customRenderer) {
                                      const Ue = we.customRenderer(
                                        Ke,
                                        Se
                                      );
                                      return /* @__PURE__ */ r.jsx(
                                        "span",
                                        {
                                          className: "data-cell__custom",
                                          "data-custom-rendered": "true",
                                          children: Ue
                                        }
                                      );
                                    }
                                    return typeof Ke == "boolean" && ot === Ke ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                      me(Ke),
                                      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ke ? "Yes" : "No" })
                                    ] }) : tt.isValidElement(ot) || typeof ot != "object" ? ot ?? "" : ot;
                                  };
                                  return /* @__PURE__ */ r.jsx(
                                    "td",
                                    {
                                      role: "gridcell",
                                      className: `data-cell ${Ae ? "data-cell--focused" : ""}`,
                                      tabIndex: Ae ? 0 : -1,
                                      style: { minWidth: we.minWidth !== void 0 ? typeof we.minWidth == "number" ? `${we.minWidth}px` : we.minWidth : typeof C == "number" ? `${C}px` : C || void 0 },
                                      onClick: () => {
                                        const At = z.globalSelectedRowData && Ve(
                                          z.globalSelectedRowData,
                                          Se
                                        ) ? null : Se;
                                        P({
                                          type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                          payload: At
                                        });
                                      },
                                      onKeyDown: (Ue) => oe(Ue, Be, je),
                                      children: Fe()
                                    },
                                    we.key
                                  );
                                })
                              },
                              Be
                            );
                          }) })
                        ]
                      }
                    )
                  }
                );
              })()
            },
            U.id
          );
        }),
        E === "below" && /* @__PURE__ */ r.jsx(
          er,
          {
            sortConfig: z.sortConfig || [],
            columns: o.flatMap((U) => U.columns.map((ne) => ({ key: ne.key, label: ne.label }))).filter((U, ne, xe) => xe.findIndex((ge) => ge.key === U.key) === ne),
            onSortChange: (U) => {
              P({ type: "SET_SORT", payload: U });
            },
            ariaLabel: "Data grid sort configuration"
          }
        )
      ]
    }
  );
}), jr = {
  asc: "↑",
  desc: "↓"
}, up = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Xa(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function fp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function hp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function pp(e, t) {
  const n = t.find((o) => o.id === e), a = fp(t);
  return n ? n.priority < a : !1;
}
const w1 = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = Re(() => up(e), [e]), f = fe(
    (I) => {
      if (l) return;
      const j = e.map(
        (k) => k.id === I ? {
          ...k,
          direction: k.direction === "asc" ? "desc" : "asc"
        } : k
      );
      t(j);
    },
    [e, t, l]
  ), h = fe(
    (I) => {
      if (l) return;
      const j = e.findIndex((b) => b.id === I);
      if (j <= 0) return;
      const k = [...e];
      [k[j], k[j - 1]] = [
        k[j - 1],
        k[j]
      ], t(Xa(k));
    },
    [e, t, l]
  ), p = fe(
    (I) => {
      if (l) return;
      const j = e.findIndex((b) => b.id === I);
      if (j >= e.length - 1 || j === -1) return;
      const k = [...e];
      [k[j], k[j + 1]] = [
        k[j + 1],
        k[j]
      ], t(Xa(k));
    },
    [e, t, l]
  ), x = fe(
    (I) => {
      if (l) return;
      const j = e.filter(
        (k) => k.id !== I
      );
      t(Xa(j));
    },
    [e, t, l]
  ), m = fe(() => {
    l || t([]);
  }, [t, l]), g = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const I = u.map((j, k) => {
      const b = j.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${j.label} (${b})`;
    });
    if (I.length === 1)
      return `Sorted by: ${I[0]}`;
    if (I.length === 2)
      return `Sorted by: ${I.join(" and ")}`;
    {
      const j = I.pop();
      return `Sorted by: ${I.join(", ")}, and ${j}`;
    }
  }, S = Re(() => {
    const I = ["sort-description"];
    return i && I.push("sort-help"), d && I.push(d), I.join(" ");
  }, [i, d]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `sort-status-control sort-status-control--empty ${n}`,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "sort-status-control__description",
          id: "sort-description",
          "aria-live": "polite",
          children: g()
        }
      )
    }
  ) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: g()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": S,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((I) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                st,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(I.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: I.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: I.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(I.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${I.label}. Currently ${I.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: I.direction === "asc" ? jr.asc : jr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(I.id),
                          disabled: l || !hp(I.id, e),
                          "aria-label": `Move ${I.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(I.id),
                          disabled: l || !pp(I.id, e),
                          "aria-label": `Move ${I.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            I.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "secondary",
        onClick: m,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsxs("small", { children: [
      "Click ",
      jr.asc,
      "/",
      jr.desc,
      " ",
      "to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ps = (e, t) => t.map((n) => ({
  id: n.id,
  label: n.label,
  data: n.filter ? n.filter(e) : e,
  columns: n.columns.map((a) => ({
    key: a.key,
    label: a.label,
    render: a.render,
    customRenderer: a.customRenderer
  })),
  sortConfig: n.sortConfig,
  ariaLabel: n.ariaLabel || `${n.label} Data Grid`,
  ariaDescription: n.ariaDescription || `Data grid showing ${n.label.toLowerCase()}`,
  className: n.className,
  disabled: n.disabled
})), bo = [
  {
    value: !0,
    icon: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__tick", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", width: "100%", height: "34", children: /* @__PURE__ */ r.jsx("path", { strokeWidth: "4", strokeLinecap: "round", d: "M18.4 7.8l-8.5 8.4L5.6 12", stroke: "#007f3b" }) })
  },
  {
    value: !1,
    icon: /* @__PURE__ */ r.jsxs("svg", { className: "nhsuk-icon nhsuk-icon__cross", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", width: "100%", height: "34", children: [
      /* @__PURE__ */ r.jsx("path", { d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z", fill: "#d5281b" }),
      /* @__PURE__ */ r.jsx("path", { d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z", fill: "#d5281b" })
    ] })
  }
], mp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), gp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, xp = (e) => {
  if (typeof e == "boolean") {
    const n = bo.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = bo.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, yp = (e) => `${e.name}-${e.bed_name}`, bp = () => ({
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
}), _1 = (e) => {
  const t = bp();
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
      data: e.filter((n) => n.anticipated_discharge_date),
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
}, vp = {
  dataComparator: mp,
  filterFunction: gp,
  booleanRenderer: xp,
  getDataId: yp
};
function pi(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((j) => j.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const b = t.find((y) => y.key === k), v = e[k], C = d[k] ? d[k](v, e) : b?.cardRenderer ? b.cardRenderer(e) : b?.render ? b.render(e) : v;
    return `${b?.label || k}: ${C}`;
  }).join(" • "), x = () => s.length === 0 ? null : s.filter((j) => e[j.fieldKey] !== void 0).map((j) => {
    const k = e[j.fieldKey], b = j.render ? j.render(k, e) : k;
    return `<span class="nhsuk-tag ${wp(j, k)}">${b}</span>`;
  }).join(""), m = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", g = x(), S = p(), I = g ? `${S}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : S;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: I,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function wp(e, t) {
  const n = e.className || "adaptive-card__badge";
  if (e.fieldKey === "ews_score" || e.fieldKey.includes("score")) {
    const a = Number(t);
    return a >= 7 ? `${n} nhsuk-tag--red` : a >= 3 ? `${n} nhsuk-tag--yellow` : `${n} nhsuk-tag--green`;
  }
  if (e.fieldKey === "priority") {
    const a = String(t).toLowerCase();
    if (a === "high") return `${n} nhsuk-tag--red`;
    if (a === "medium") return `${n} nhsuk-tag--yellow`;
    if (a === "low") return `${n} nhsuk-tag--green`;
  }
  if (e.fieldKey === "status") {
    const a = String(t).toLowerCase();
    if (a === "urgent" || a === "critical") return `${n} nhsuk-tag--red`;
    if (a === "pending" || a === "warning") return `${n} nhsuk-tag--yellow`;
    if (a === "completed" || a === "success") return `${n} nhsuk-tag--green`;
  }
  switch (e.color) {
    case "primary":
      return `${n} nhsuk-tag--blue`;
    case "secondary":
      return `${n} nhsuk-tag--grey`;
    case "success":
      return `${n} nhsuk-tag--green`;
    case "warning":
      return `${n} nhsuk-tag--yellow`;
    case "danger":
      return `${n} nhsuk-tag--red`;
    default:
      return n;
  }
}
const _p = {
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
}, El = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${d}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ r.jsxs(
            st,
            {
              color: kp(Bl(u)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                u
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: d })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ r.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ r.jsx("dd", { children: h })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            xt,
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
}, Fl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        st,
        {
          color: Np(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        st,
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
  /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Patient" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.patient_name })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.consultant })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Location" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.location })
    ] })
  ] }) }),
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Pl = ({
  data: e,
  onAction: t
}) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--medication healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__medication-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__medication-name", children: e.medication }),
      /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__dose", children: [
        e.dose,
        " • ",
        e.frequency
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        st,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        st,
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
  /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Patient" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.patient_name })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Prescriber" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.prescriber })
    ] }),
    e.allergies && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--urgent", children: [
      /* @__PURE__ */ r.jsx("dt", { children: "Allergies" }),
      /* @__PURE__ */ r.jsx("dd", { children: e.allergies })
    ] })
  ] }) }),
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
    /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Rl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${o}, EWS Score ${s}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: o }),
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Sp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            st,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                f.toUpperCase()
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vitals-grid", children: [
          i !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Respiratory Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              i,
              " bpm"
            ] })
          ] }),
          l !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "SpO2" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              l,
              "%"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "°C"
            ] })
          ] }),
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: d })
          ] }),
          u !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (h) => {
                h.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            xt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (h) => {
                h.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function Bl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Sp(e) {
  return Bl(e);
}
function kp(e) {
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
function Np(e) {
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
const Cp = [
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
], Hl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", jp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Mp = (e) => Hl(e) === "high" || e.status === "urgent" ? "primary" : "default", Ip = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Dp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Cp,
  hiddenFields: [],
  getPriority: Hl,
  getStatus: jp,
  getVariant: Mp,
  fieldRenderers: Ip,
  classPrefix: "adaptive-card--healthcare"
}, Tp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      El,
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
  appointment: (e, t, n) => {
    const a = n.getStatus?.(e) || "pending", o = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ r.jsx(
      Fl,
      {
        data: e,
        columns: t,
        status: o,
        onSelect: (s) => console.log("Appointment selected:", s),
        onAction: (s, i) => console.log("Appointment action:", s, i)
      }
    );
  },
  medication: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      Pl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Medication selected:", o),
        onAction: (o, s) => console.log("Medication action:", o, s)
      }
    );
  },
  vitals: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium";
    return /* @__PURE__ */ r.jsx(
      Rl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Lp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, mi = {
  name: "healthcare",
  defaultCardConfig: Dp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Tp,
  fieldTypes: Lp
};
function gi(e) {
  return {
    primaryField: e?.primaryField || "name",
    secondaryFields: e?.secondaryFields || [],
    badges: e?.badgeFields?.map((t) => ({
      fieldKey: t,
      className: "adaptive-card__badge"
    })) || [],
    hiddenFields: e?.hiddenFields || [],
    cardTemplate: e?.cardTemplate ? (t, n, a) => e.cardTemplate(t, n) : void 0,
    classPrefix: "adaptive-card--generic"
  };
}
function xi(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Ap(e, t) {
  switch (t.type) {
    case "SET_SELECTED_INDEX":
      return { ...e, selectedIndex: t.payload };
    case "SET_TAB_LOADING":
      const n = [...e.tabLoadingStates];
      return n[t.payload.tabIndex] = t.payload.isLoading, { ...e, tabLoadingStates: n };
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
      for (let d = 0; d < Math.min(e.tabLoadingStates.length, s); d++)
        i[d] = e.tabLoadingStates[d], l[d] = e.tabErrors[d], c[d] = e.selectedRows[d];
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
function $p(e, t) {
  const [n, a] = Oe("cards");
  return nt(() => {
    if (t) {
      a(t);
      return;
    }
    const o = () => {
      const s = window.innerWidth;
      s < e.mobile ? a("cards") : s < e.desktop ? a("hybrid") : a("table");
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [e, t]), n;
}
function Ep(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Fp(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ..._p, ...n };
  if (a && a.cardTemplates) {
    const s = Ep(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](
        e,
        t,
        o
      );
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(
    e,
    t,
    o
  ), pi(e, t, o);
}
const S1 = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: c,
  hideTabsIfSingle: d,
  // Overflow/collapse props (typed from ResponsiveDataGridProps)
  minColumnWidth: u,
  enableColumnCollapse: f,
  minVisibleColumns: h,
  showCollapsedColumnsIndicator: p,
  // Additional grid options
  sortStatusPlacement: x,
  // Standard AriaTabsDataGrid props
  tabPanels: m,
  dataConfig: g,
  selectedIndex: S,
  onTabChange: I,
  ariaLabel: j = "Data grid",
  ariaDescription: k,
  orientation: b = "horizontal",
  id: v,
  disabled: C = !1,
  className: _,
  ...y
}) => {
  const w = $p(e, t), E = S !== void 0, T = S ?? 0, L = Re(() => {
    if (m.some(
      (W) => W.data && W.data.length > 0 && xi(W.data)
    )) {
      const W = gi(n);
      return {
        ...mi.defaultCardConfig,
        ...W
      };
    } else
      return gi(n);
  }, [n, m]), M = Re(() => m.some(
    (W) => W.data && W.data.length > 0 && xi(W.data)
  ) ? mi : void 0, [m]), N = Re(() => ({
    selectedIndex: T,
    tabLoadingStates: new Array(m.length).fill(!1),
    tabErrors: new Array(m.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(m.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [T, m.length]), [D, R] = Xi(Ap, N), Z = Ze([]), Q = Ze([]), B = Ze([]), J = Ze(null), [F, $] = Oe({
    // If tabs are hidden (single panel), default focus to sort-controls; otherwise start at tabs
    focusArea: d && m.length === 1 ? "sort-controls" : "tabs",
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
  }), q = fe(
    (O) => {
      if (!O.current)
        return { columns: 1, rows: 0 };
      const W = O.current, oe = W.querySelectorAll(
        ".aria-tabs-datagrid-adaptive__card-wrapper"
      );
      if (oe.length === 0)
        return { columns: 1, rows: 0 };
      const te = W.offsetWidth, ce = oe[0].offsetWidth, ue = Math.floor(te / ce) || 1, ve = Math.ceil(oe.length / ue);
      return { columns: ue, rows: ve };
    },
    []
  ), A = fe((O, W) => ({
    row: Math.floor(O / W),
    col: O % W
  }), []), z = fe(
    (O, W, oe) => O * oe + W,
    []
  ), P = fe(
    (O, W, oe, te) => {
      const { row: re, col: ce } = A(O, te);
      let ue = re, ve = ce;
      switch (W) {
        case "up":
          ue = Math.max(0, re - 1);
          break;
        case "down":
          ue = Math.min(Math.floor((oe - 1) / te), re + 1);
          break;
        case "left":
          ve = Math.max(0, ce - 1);
          break;
        case "right":
          ve = Math.min(te - 1, ce + 1);
          break;
      }
      const Ne = z(ue, ve, te);
      return Math.min(Ne, oe - 1);
    },
    [A, z]
  );
  nt(() => {
    F.isCardNavigationActive && F.focusedCardElementIndex >= 0 && F.cardElements.length > 0 && setTimeout(() => {
      const O = F.cardElements[F.focusedCardElementIndex];
      O && (O.element.focus(), O.element.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      }));
    }, 0);
  }, [
    F.isCardNavigationActive,
    F.focusedCardElementIndex,
    F.cardElements.length
  ]), nt(() => {
    const O = () => {
      if (w === "cards" && J.current) {
        const { columns: te, rows: re } = q(J);
        $((ce) => ({
          ...ce,
          gridColumns: te,
          gridRows: re
        }));
      }
    }, W = setTimeout(O, 200), oe = () => {
      setTimeout(O, 100);
    };
    return window.addEventListener("resize", oe), () => {
      clearTimeout(W), window.removeEventListener("resize", oe);
    };
  }, [w, m, q]), nt(() => {
    const O = D.tabLoadingStates.length, W = m.length;
    O !== W && R({ type: "ADJUST_ARRAYS", payload: { newLength: W } });
  }, [m.length, D.tabLoadingStates.length]), nt(() => {
    E && S !== D.selectedIndex && R({ type: "SET_SELECTED_INDEX", payload: S });
  }, [E, S, D.selectedIndex]);
  const V = fe(
    (O) => {
      O >= 0 && O < m.length && !m[O].disabled && (R({ type: "SET_SELECTED_INDEX", payload: O }), I?.(O));
    },
    [m, I]
  ), G = fe((O) => {
    console.log("Card selected:", O), R({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: O
    });
  }, []), ee = fe((O) => {
    const W = Q.current[O];
    W && (W.focus(), W.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), de = fe((O) => {
    const W = Q.current[O];
    if (!W) return [];
    const oe = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), te = W.querySelectorAll(
      oe
    );
    return Array.from(te).map((re, ce) => ({
      id: re.id || `card-${O}-element-${ce}`,
      element: re,
      label: re.getAttribute("aria-label") || re.textContent?.trim() || re.getAttribute("title") || `Element ${ce + 1}`,
      type: re.tagName.toLowerCase() === "button" ? "button" : re.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(
        re.tagName.toLowerCase()
      ) ? "input" : "generic"
    }));
  }, []), Y = Ze(null), ae = fe((O) => {
    const W = Y.current;
    if (!W) return;
    const oe = document.createElement("div");
    oe.setAttribute("aria-live", "polite"), oe.setAttribute("aria-atomic", "true"), oe.className = "sr-only", oe.textContent = O, W.appendChild(oe), setTimeout(() => {
      W.contains(oe) && W.removeChild(oe);
    }, 1e3);
  }, []), le = fe((O) => {
    const W = O.filter((te) => te.sortable !== !1), oe = [
      { value: "", label: "Sort by..." }
    ];
    return W.forEach((te) => {
      const re = te.label || te.key;
      te.key === "name" ? oe.push(
        { value: `${te.key}-asc`, label: `${re} (A-Z)` },
        { value: `${te.key}-desc`, label: `${re} (Z-A)` }
      ) : te.key === "ews_score" || te.key.includes("score") ? oe.push(
        { value: `${te.key}-desc`, label: `${re} (High-Low)` },
        { value: `${te.key}-asc`, label: `${re} (Low-High)` }
      ) : te.key === "age" || te.key.includes("date") || te.key.includes("time") ? oe.push(
        {
          value: `${te.key}-desc`,
          label: `${re} (Oldest-Youngest)`
        },
        {
          value: `${te.key}-asc`,
          label: `${re} (Youngest-Oldest)`
        }
      ) : oe.push(
        { value: `${te.key}-asc`, label: `${re} (A-Z)` },
        { value: `${te.key}-desc`, label: `${re} (Z-A)` }
      );
    }), oe;
  }, []), be = fe(
    (O, W) => W ? [...O].sort((oe, te) => {
      const re = oe[W.key], ce = te[W.key];
      if (re == null && ce == null) return 0;
      if (re == null) return 1;
      if (ce == null) return -1;
      const ue = Number(re), ve = Number(ce);
      if (!isNaN(ue) && !isNaN(ve))
        return W.direction === "asc" ? ue - ve : ve - ue;
      const Ne = String(re).toLowerCase(), He = String(ce).toLowerCase(), Ye = Ne.localeCompare(He);
      return W.direction === "asc" ? Ye : -Ye;
    }) : O,
    []
  ), pe = fe(
    (O) => {
      if (!O) {
        $((Ne) => ({ ...Ne, cardSortConfig: null })), ae("Card sorting cleared");
        return;
      }
      const [W, oe] = O.split("-"), te = { key: W, direction: oe };
      $((Ne) => ({ ...Ne, cardSortConfig: te }));
      const ue = m[D.selectedIndex]?.columns.find((Ne) => Ne.key === W)?.label || W;
      ae(
        `Cards sorted by ${ue} in ${oe === "asc" ? "ascending" : "descending"} order`
      );
    },
    [m, D.selectedIndex, ae]
  ), Ie = fe(
    (O) => {
      const te = m[D.selectedIndex]?.columns.find(
        (ce) => ce.key === O.key
      )?.label || O.key, re = O.direction === "asc" ? "ascending" : "descending";
      return `${te} (${re})`;
    },
    [m, D.selectedIndex]
  ), Ve = fe(
    (O) => {
      const W = m[D.selectedIndex];
      if (o) {
        const oe = D.sortConfig;
        return !oe || oe.length === 0 ? O : [...O].sort((te, re) => {
          for (const { key: ce, direction: ue } of oe) {
            let ve = te[ce], Ne = re[ce];
            const He = W?.columns.find(
              (U) => U.key === ce
            );
            if (He?.cardRenderer ? (ve = He.cardRenderer(te), Ne = He.cardRenderer(re)) : He?.render && (ve = He.render(te), Ne = He.render(re)), ve == null && Ne == null) continue;
            if (ve == null) return ue === "asc" ? -1 : 1;
            if (Ne == null) return ue === "asc" ? 1 : -1;
            const Ye = Number(ve), lt = Number(Ne);
            if (!isNaN(Ye) && !isNaN(lt)) {
              const U = Ye - lt;
              if (U !== 0) return ue === "asc" ? U : -U;
              continue;
            }
            const Qe = String(ve).toLowerCase(), ie = String(Ne).toLowerCase(), $e = Qe.localeCompare(ie);
            if ($e !== 0) return ue === "asc" ? $e : -$e;
          }
          return 0;
        });
      } else
        return be(O, F.cardSortConfig);
    },
    [
      o,
      D.sortConfig,
      F.cardSortConfig,
      be,
      m,
      D.selectedIndex
    ]
  ), Te = fe(
    (O, W) => {
      const oe = de(O), te = oe[W];
      if (te) {
        te.element.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
        const re = `Focused on ${te.label}, ${te.type} ${W + 1} of ${oe.length} within card`;
        ae(re);
      }
    },
    [de, ae]
  ), Le = fe((O) => {
    Z.current[O]?.focus();
  }, []), _e = fe(() => {
    const O = B.current[0];
    if (!O) return [];
    const W = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), oe = O.querySelectorAll(
      W
    );
    return Array.from(oe);
  }, []), H = fe(
    (O) => {
      if (O === 0) {
        const W = B.current[0], oe = W?.querySelector(
          ".sort-controls-row"
        );
        if (oe) {
          oe.setAttribute("tabindex", "-1"), oe.focus();
          const re = `Sort controls group with ${_e().length} interactive elements. Press Enter or Space to begin navigating controls.`;
          ae(re);
        } else W && W.focus();
      } else {
        const W = _e(), oe = O - 1, te = W[oe];
        if (te) {
          te.focus();
          const re = te.tagName.toLowerCase() === "select", ce = te.tagName.toLowerCase() === "button", ue = re ? "dropdown" : ce ? "button" : "control", ve = re ? ". Use Space key to open dropdown" : "", Ne = `${ue} ${oe + 1} of ${W.length}${ve}`;
          ae(Ne);
        }
      }
    },
    [_e, ae]
  ), X = fe(
    (O, W) => {
      const { key: oe } = O, te = m[D.selectedIndex], re = te?.data.length || 0;
      if (oe === "ArrowLeft" && O.shiftKey) {
        O.preventDefault(), O.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
        return;
      } else if (oe === "ArrowRight" && O.shiftKey) {
        O.preventDefault(), O.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
        return;
      }
      if (!F.isCardNavigationActive) {
        switch (oe) {
          case "ArrowUp":
            if (O.preventDefault(), W === 0)
              $((Ne) => ({
                ...Ne,
                focusArea: "sort-controls",
                focusedSortControlIndex: 0,
                isSortControlsActive: !1
              })), H(0);
            else {
              const Ne = P(
                W,
                "up",
                re,
                F.gridColumns
              );
              Ne !== W && ($((He) => ({
                ...He,
                focusedCardIndex: Ne
              })), ee(Ne), ae(
                `Moved to card ${Ne + 1} of ${re}`
              ));
            }
            break;
          case "ArrowDown":
            O.preventDefault();
            const ce = P(
              W,
              "down",
              re,
              F.gridColumns
            );
            ce !== W && ($((Ne) => ({
              ...Ne,
              focusedCardIndex: ce
            })), ee(ce), ae(
              `Moved to card ${ce + 1} of ${re}`
            ));
            break;
          case "ArrowLeft":
            O.preventDefault();
            const ue = P(
              W,
              "left",
              re,
              F.gridColumns
            );
            ue !== W ? ($((Ne) => ({
              ...Ne,
              focusedCardIndex: ue
            })), ee(ue), ae(
              `Moved to card ${ue + 1} of ${re}`
            )) : D.selectedIndex > 0 && (R({
              type: "SET_SELECTED_INDEX",
              payload: D.selectedIndex - 1
            }), $((Ne) => ({ ...Ne, focusArea: "tabs" })), setTimeout(() => Le(D.selectedIndex - 1), 0));
            break;
          case "ArrowRight":
            O.preventDefault();
            const ve = P(
              W,
              "right",
              re,
              F.gridColumns
            );
            ve !== W ? ($((Ne) => ({
              ...Ne,
              focusedCardIndex: ve
            })), ee(ve), ae(
              `Moved to card ${ve + 1} of ${re}`
            )) : D.selectedIndex < m.length - 1 && (R({
              type: "SET_SELECTED_INDEX",
              payload: D.selectedIndex + 1
            }), $((Ne) => ({ ...Ne, focusArea: "tabs" })), setTimeout(() => Le(D.selectedIndex + 1), 0));
            break;
          case "Enter":
            if (te?.data[W]) {
              O.preventDefault(), $((He) => ({
                ...He,
                selectedCardIndex: W
              }));
              const Ne = de(W);
              Ne.length > 0 ? ($((He) => ({
                ...He,
                focusArea: "card",
                isCardNavigationActive: !0,
                focusedCardElementIndex: 0,
                cardElements: Ne,
                selectedCardIndex: W
                // Ensure selection is maintained
              })), ae(
                `Card ${W + 1} selected and navigation activated. ${Ne.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`
              )) : ae(`Card ${W + 1} selected.`);
            }
            break;
          case " ":
            if (te?.data[W]) {
              O.preventDefault(), $((He) => ({
                ...He,
                selectedCardIndex: He.selectedCardIndex === W ? -1 : W
              }));
              const Ne = F.selectedCardIndex === W;
              ae(
                `Card ${W + 1} ${Ne ? "deselected" : "selected"}.`
              );
            }
            break;
        }
        return;
      }
      switch (oe) {
        case "ArrowUp":
        case "ArrowLeft":
          O.preventDefault();
          const ce = Math.max(
            0,
            F.focusedCardElementIndex - 1
          );
          $((He) => ({
            ...He,
            focusedCardElementIndex: ce
          })), Te(W, ce);
          break;
        case "ArrowDown":
        case "ArrowRight":
          O.preventDefault();
          const ue = Math.min(
            F.cardElements.length - 1,
            F.focusedCardElementIndex + 1
          );
          $((He) => ({
            ...He,
            focusedCardElementIndex: ue
          })), Te(W, ue);
          break;
        case "Enter":
          O.preventDefault();
          const ve = F.cardElements[F.focusedCardElementIndex];
          ve && (ve.element.click(), ae(`Activated ${ve.label}`));
          break;
        case " ":
          O.preventDefault();
          const Ne = F.cardElements[F.focusedCardElementIndex];
          if (Ne) {
            const He = new MouseEvent("dblclick", { bubbles: !0 });
            Ne.element.dispatchEvent(He), ae(
              `Double-clicked ${Ne.label}`
            );
          }
          break;
        case "Escape":
          O.preventDefault(), $((He) => ({
            ...He,
            focusArea: "cards",
            isCardNavigationActive: !1,
            focusedCardElementIndex: 0,
            cardElements: []
          })), setTimeout(() => ee(W), 0), ae(
            "Exited card navigation, returned to card level"
          );
          break;
        case "Home":
          O.preventDefault(), F.cardElements.length > 0 && ($((He) => ({
            ...He,
            focusedCardElementIndex: 0
          })), Te(W, 0));
          break;
        case "End":
          if (O.preventDefault(), F.cardElements.length > 0) {
            const He = F.cardElements.length - 1;
            $((Ye) => ({
              ...Ye,
              focusedCardElementIndex: He
            })), Te(W, He);
          }
          break;
      }
    },
    [
      F,
      D.selectedIndex,
      m,
      G,
      ee,
      Le,
      $,
      de,
      Te,
      ae
    ]
  ), se = fe((O) => {
    const W = Z.current[O], oe = W?.parentElement;
    if (!W || !oe) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const te = W.getBoundingClientRect(), re = oe.getBoundingClientRect();
    te.left >= re.left && te.right <= re.right || (console.log("Tab not visible, scrolling into view (mobile)"), W.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), he = fe(
    (O, W) => {
      if (w !== "cards")
        return;
      const { key: oe } = O;
      switch (oe) {
        case "ArrowLeft":
          O.preventDefault();
          const te = W > 0 ? W - 1 : m.length - 1;
          V(te), $((ve) => ({ ...ve, focusedTabIndex: te })), Z.current[te]?.focus(), se(te);
          break;
        case "ArrowRight":
          O.preventDefault();
          const re = W < m.length - 1 ? W + 1 : 0;
          V(re), $((ve) => ({ ...ve, focusedTabIndex: re })), Z.current[re]?.focus(), se(re);
          break;
        case "ArrowDown":
          O.preventDefault();
          const ce = m[D.selectedIndex];
          ce && ce.columns && ce.columns.length > 0 ? ($((ve) => ({
            ...ve,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), H(0)) : ($((ve) => ({
            ...ve,
            focusArea: "cards",
            focusedCardIndex: 0
          })), ee(0));
          break;
        case "Home":
          O.preventDefault(), V(0), $((ve) => ({ ...ve, focusedTabIndex: 0 })), Z.current[0]?.focus(), se(0);
          break;
        case "End":
          O.preventDefault();
          const ue = m.length - 1;
          V(ue), $((ve) => ({ ...ve, focusedTabIndex: ue })), Z.current[ue]?.focus(), se(ue);
          break;
        case "Enter":
        case " ":
          O.preventDefault(), V(W);
          break;
      }
    },
    [
      m.length,
      V,
      w,
      ee,
      $,
      se
    ]
  ), me = fe(
    (O, W) => {
      if (w !== "cards")
        return;
      const { key: oe } = O, te = m[D.selectedIndex];
      if (W === 0 && !F.isSortControlsActive) {
        switch (oe) {
          case "ArrowUp":
            O.preventDefault(), $((ce) => ({
              ...ce,
              focusArea: "tabs",
              isSortControlsActive: !1
            })), Le(D.selectedIndex);
            break;
          case "ArrowDown":
            O.preventDefault(), te?.data && te.data.length > 0 && ($((ce) => ({
              ...ce,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), ee(0));
            break;
          case "Enter":
          case " ":
            O.preventDefault();
            const re = _e();
            if (re.length > 0) {
              $((ue) => ({
                ...ue,
                isSortControlsActive: !0,
                focusedSortControlIndex: 1
                // Start with the first actual control (skip container)
              })), H(1);
              const ce = `Entered sort controls navigation mode. ${re.length} controls available. Use arrow keys to navigate between controls.`;
              ae(ce);
            }
            break;
          case "Escape":
            O.preventDefault(), $((ce) => ({
              ...ce,
              isSortControlsActive: !1,
              focusArea: "tabs"
            })), Le(D.selectedIndex);
            break;
        }
        return;
      }
      if (F.isSortControlsActive) {
        const ce = _e().length;
        switch (oe) {
          case "ArrowLeft":
            O.preventDefault();
            const ue = F.focusedSortControlIndex > 1 ? F.focusedSortControlIndex - 1 : ce;
            $((Ne) => ({
              ...Ne,
              focusedSortControlIndex: ue
            })), H(ue);
            break;
          case "ArrowRight":
            O.preventDefault();
            const ve = F.focusedSortControlIndex < ce ? F.focusedSortControlIndex + 1 : 1;
            $((Ne) => ({
              ...Ne,
              focusedSortControlIndex: ve
            })), H(ve);
            break;
          case "ArrowDown":
            if (O.preventDefault(), F.isSortControlsActive) {
              const Ne = F.focusedSortControlIndex < ce ? F.focusedSortControlIndex + 1 : 1;
              $((He) => ({
                ...He,
                focusedSortControlIndex: Ne
              })), H(Ne);
            } else
              te?.data && te.data.length > 0 && ($((Ne) => ({
                ...Ne,
                focusArea: "cards",
                focusedCardIndex: 0,
                isSortControlsActive: !1
              })), ee(0));
            break;
          case "ArrowUp":
            O.preventDefault(), $((Ne) => ({
              ...Ne,
              isSortControlsActive: !1,
              focusArea: "sort-controls"
            })), H(0);
            break;
          case "Escape":
            O.preventDefault(), $((Ne) => ({
              ...Ne,
              isSortControlsActive: !1,
              focusArea: "sort-controls",
              focusedSortControlIndex: 0
            })), H(0);
            break;
        }
      }
    },
    [
      w,
      m,
      D.selectedIndex,
      F.isSortControlsActive,
      F.focusedSortControlIndex,
      H,
      Le,
      ee,
      $,
      ae
    ]
  );
  if (w === "cards") {
    const O = !!d && m.length === 1, W = O ? m[0] : m[D.selectedIndex];
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${_ || ""}`,
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
            !O && /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "tablist",
                "aria-label": j,
                "aria-describedby": `${k || ""} ${v ? `${v}-navigation-help` : ""}`.trim(),
                "aria-orientation": b,
                className: "aria-tabs-datagrid__tabs",
                children: m.map((oe, te) => {
                  const re = te === D.selectedIndex, ce = oe.disabled || C;
                  return /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      role: "tab",
                      id: `tab-${oe.id}`,
                      "aria-controls": `panel-${oe.id}`,
                      "aria-selected": re,
                      "aria-disabled": ce,
                      tabIndex: re ? 0 : -1,
                      ref: (ue) => {
                        Z.current[te] = ue;
                      },
                      onClick: () => V(te),
                      onKeyDown: (ue) => he(ue, te),
                      disabled: ce,
                      className: [
                        "aria-tabs-datagrid__tab",
                        re ? "aria-tabs-datagrid__tab--selected" : "",
                        ce ? "aria-tabs-datagrid__tab--disabled" : ""
                      ].filter(Boolean).join(" "),
                      children: [
                        /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: oe.label }),
                        D.tabLoadingStates[te] && /* @__PURE__ */ r.jsx(
                          "span",
                          {
                            className: "aria-tabs-datagrid__tab-loading",
                            "aria-hidden": "true",
                            children: "⏳"
                          }
                        ),
                        D.tabErrors[te] && /* @__PURE__ */ r.jsx(
                          "span",
                          {
                            className: "aria-tabs-datagrid__tab-error",
                            "aria-hidden": "true",
                            children: "⚠️"
                          }
                        )
                      ]
                    },
                    oe.id
                  );
                })
              }
            ),
            s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
          ] }),
          W && W.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
            /* Advanced sorting with SortStatusControl: place above cards for 'header'/'above' (default), hide when 'none' */
            /* @__PURE__ */ r.jsx(r.Fragment, { children: (!x || x === "header" || x === "above") && /* @__PURE__ */ r.jsx(
              er,
              {
                sortConfig: D.sortConfig || [],
                columns: W.columns.map((oe) => ({ key: oe.key, label: oe.label })),
                onSortChange: (oe) => {
                  R({ type: "SET_SORT", payload: oe });
                },
                ariaLabel: "Card view sort configuration",
                className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
              }
            ) })
          ) : (
            /* Simple card sorting (unaffected by sortStatusPlacement) */
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "aria-tabs-datagrid-adaptive__sort-controls",
                role: "region",
                "aria-label": "Sort controls",
                tabIndex: F.focusArea === "sort-controls" ? 0 : -1,
                ref: (oe) => {
                  B.current[0] = oe;
                },
                onKeyDown: (oe) => me(oe, 0),
                children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                    /* @__PURE__ */ r.jsx(
                      "label",
                      {
                        htmlFor: `card-sort-${W.id}`,
                        className: "sort-label",
                        children: "Sort cards by"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      Ar,
                      {
                        id: `card-sort-${W.id}`,
                        name: `card-sort-${W.id}`,
                        value: F.cardSortConfig ? `${F.cardSortConfig.key}-${F.cardSortConfig.direction}` : "",
                        onChange: (oe) => pe(oe.target.value),
                        className: "sort-select",
                        children: le(W.columns).map((oe) => /* @__PURE__ */ r.jsx("option", { value: oe.value, children: oe.label }, oe.value))
                      }
                    )
                  ] }),
                  F.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                    /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                      "Sorted by ",
                      Ie(F.cardSortConfig)
                    ] }),
                    /* @__PURE__ */ r.jsx(
                      xt,
                      {
                        variant: "secondary",
                        size: "small",
                        onClick: () => pe(""),
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
          /* @__PURE__ */ r.jsx(
            "div",
            {
              ref: J,
              className: "aria-tabs-datagrid-adaptive__cards",
              role: "grid",
              "aria-label": `${W?.label || "Data"} cards in ${F.gridRows} rows and ${F.gridColumns} columns`,
              "aria-rowcount": F.gridRows,
              "aria-colcount": F.gridColumns,
              id: `panel-${W?.id}`,
              "aria-labelledby": `tab-${W?.id}`,
              children: Ve(W?.data || []).map((oe, te) => {
                const re = F.selectedCardIndex === te, ce = F.focusedCardIndex === te && F.focusArea === "cards", ue = F.focusedCardIndex === te && F.focusArea === "card" && F.isCardNavigationActive, ve = te === 0 && F.focusArea !== "cards", Ne = ce || ve, He = A(te, F.gridColumns);
                if (n.cardTemplate) {
                  const Qe = n.cardTemplate(
                    oe,
                    W.columns
                  );
                  return /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      role: "row",
                      "aria-rowindex": He.row + 1,
                      className: "aria-tabs-datagrid-adaptive__row",
                      children: /* @__PURE__ */ r.jsx(
                        "div",
                        {
                          ref: (ie) => {
                            Q.current[te] = ie;
                          },
                          className: [
                            "aria-tabs-datagrid-adaptive__card-wrapper",
                            re ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                            ce ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                            ue ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                          ].filter(Boolean).join(" "),
                          role: "gridcell",
                          "aria-colindex": He.col + 1,
                          "aria-selected": re,
                          "aria-expanded": ue,
                          "aria-description": ue ? `Card navigation active. ${F.cardElements.length} interactive elements available.` : void 0,
                          tabIndex: Ne ? 0 : -1,
                          onClick: () => {
                            $((ie) => ({
                              ...ie,
                              selectedCardIndex: ie.selectedCardIndex === te ? -1 : te
                            })), G(oe);
                          },
                          onKeyDown: (ie) => X(ie, te),
                          onFocus: () => {
                            $((ie) => ie.isCardNavigationActive ? ie : ie.focusedCardIndex !== te || ie.focusArea !== "cards" ? {
                              ...ie,
                              focusedCardIndex: te,
                              focusArea: "cards"
                            } : ie);
                          },
                          children: Qe
                        }
                      )
                    },
                    `card-${te}`
                  );
                }
                const Ye = Fp(
                  oe,
                  W.columns,
                  L,
                  M
                ), lt = [
                  Ye.className || "",
                  re ? "aria-tabs-datagrid-adaptive__card--selected" : "",
                  ce ? "aria-tabs-datagrid-adaptive__card--focused" : "",
                  ue ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
                ].filter(Boolean).join(" ");
                return /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    role: "row",
                    "aria-rowindex": He.row + 1,
                    className: "aria-tabs-datagrid-adaptive__row",
                    children: /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: [
                          "aria-tabs-datagrid-adaptive__card-wrapper",
                          re ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                          ce ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                          ue ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                        ].filter(Boolean).join(" "),
                        role: "gridcell",
                        "aria-colindex": He.col + 1,
                        "aria-selected": re,
                        "aria-expanded": ue,
                        onKeyDown: (Qe) => {
                          Qe.key === "Enter" && (Qe.preventDefault(), $((ie) => ({
                            ...ie,
                            selectedCardIndex: te
                          }))), X(Qe, te);
                        },
                        children: /* @__PURE__ */ r.jsx(
                          Tl,
                          {
                            ...Ye,
                            ref: (Qe) => {
                              Q.current[te] = Qe;
                            },
                            className: lt,
                            "aria-label": `${Ye["aria-label"] || Ye.heading}. ${ue ? `Card navigation active with ${F.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                            tabIndex: Ne ? 0 : -1,
                            onClick: () => {
                              $((Qe) => ({
                                ...Qe,
                                selectedCardIndex: Qe.selectedCardIndex === te ? -1 : te
                              })), G(oe);
                            },
                            onKeyDown: (Qe) => X(Qe, te),
                            onFocus: () => {
                              F.isCardNavigationActive || $((Qe) => Qe.focusedCardIndex !== te || Qe.focusArea !== "cards" ? {
                                ...Qe,
                                focusedCardIndex: te,
                                focusArea: "cards",
                                focusedCardElementIndex: 0,
                                cardElements: []
                              } : Qe);
                            }
                          }
                        )
                      }
                    )
                  },
                  `card-${te}`
                );
              })
            }
          ),
          o && x === "below" && W && W.columns && /* @__PURE__ */ r.jsx(
            er,
            {
              sortConfig: D.sortConfig || [],
              columns: W.columns.map((oe) => ({ key: oe.key, label: oe.label })),
              onSortChange: (oe) => {
                R({ type: "SET_SORT", payload: oe });
              },
              ariaLabel: "Card view sort configuration",
              className: "aria-tabs-datagrid-adaptive__advanced-sort-controls aria-tabs-datagrid-adaptive__advanced-sort-controls--below"
            }
          ),
          i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              ref: Y,
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
        ]
      }
    );
  }
  return w === "hybrid" ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${_ || ""}`,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
        /* @__PURE__ */ r.jsx(
          yo,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: j,
            ariaDescription: k,
            orientation: b,
            id: v,
            disabled: C,
            selectedIndex: S,
            onTabChange: I,
            className: "aria-tabs-datagrid-adaptive__table--hybrid",
            actions: l,
            forceActionsAbove: c,
            hideTabsIfSingle: d,
            minColumnWidth: u,
            enableColumnCollapse: f,
            minVisibleColumns: h,
            showCollapsedColumnsIndicator: p,
            sortStatusPlacement: x,
            ...y
          }
        ),
        i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${_ || ""}`,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
        /* @__PURE__ */ r.jsx(
          yo,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: j,
            ariaDescription: k,
            orientation: b,
            id: v,
            disabled: C,
            selectedIndex: S,
            onTabChange: I,
            actions: l,
            forceActionsAbove: c,
            hideTabsIfSingle: d,
            minColumnWidth: u,
            enableColumnCollapse: f,
            minVisibleColumns: h,
            showCollapsedColumnsIndicator: p,
            sortStatusPlacement: x,
            ...y
          }
        ),
        i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  );
}, zl = (e) => {
  const t = bo.find((n) => n.value === e);
  return t ? t.icon : null;
}, Pp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => zl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Rp = (e) => ps(e, [
  {
    id: "all-products",
    label: "All Products",
    columns: [
      { key: "name", label: "Product Name" },
      {
        key: "price",
        label: "Price",
        render: (n) => n.discountedPrice ? `$${n.price.toFixed(2)} → $${n.discountedPrice.toFixed(2)}` : `$${n.price.toFixed(2)}`
      },
      { key: "inStock", label: "Availability" },
      { key: "category", label: "Category" },
      {
        key: "rating",
        label: "Rating",
        render: (n) => `${n.rating}/5 (${n.reviews} reviews)`
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
        render: (n) => `$${n.price.toFixed(2)}`
      },
      {
        key: "discountedPrice",
        label: "Sale Price",
        render: (n) => `$${n.discountedPrice?.toFixed(2) || "N/A"}`
      },
      {
        key: "discount",
        label: "Discount",
        render: (n) => n.discountedPrice ? `${((n.price - n.discountedPrice) / n.price * 100).toFixed(0)}% OFF` : "N/A"
      }
    ],
    filter: (n) => n.filter((a) => a.discountedPrice !== void 0),
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
    filter: (n) => n.filter((a) => a.rating >= 4),
    sortConfig: [{ key: "rating", direction: "desc" }],
    ariaLabel: "Top Rated Products Grid",
    ariaDescription: "Highest rated products with 4+ star ratings"
  }
]), Bp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.dateRange) {
      const [a, o] = t.dateRange;
      if (n.date < a || n.date > o) return !1;
    }
    if (t.amountRange) {
      const [a, o] = t.amountRange;
      if (Math.abs(n.amount) < a || Math.abs(n.amount) > o) return !1;
    }
    return !(t.types && t.types.length > 0 && !t.types.includes(n.type) || t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.pending !== void 0 && n.pending !== t.pending);
  }) : e,
  booleanRenderer: (e) => zl(e),
  getDataId: (e) => `financial-${e.id}`
}, Hp = (e) => ps(e, [
  {
    id: "all-transactions",
    label: "All Transactions",
    columns: [
      {
        key: "date",
        label: "Date",
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `${n.type === "credit" ? "+" : "-"}$${Math.abs(n.amount).toFixed(2)}`
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
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `+$${n.amount.toFixed(2)}`
      },
      { key: "category", label: "Category" }
    ],
    filter: (n) => n.filter((a) => a.type === "credit"),
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
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `-$${Math.abs(n.amount).toFixed(2)}`
      },
      { key: "category", label: "Category" }
    ],
    filter: (n) => n.filter((a) => a.type === "debit"),
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
        render: (n) => n.date.toLocaleDateString()
      },
      { key: "description", label: "Description" },
      {
        key: "amount",
        label: "Amount",
        render: (n) => `${n.type === "credit" ? "+" : "-"}$${Math.abs(n.amount).toFixed(2)}`
      },
      { key: "type", label: "Type" }
    ],
    filter: (n) => n.filter((a) => a.pending),
    ariaLabel: "Pending Transactions Grid",
    ariaDescription: "Transactions awaiting processing"
  }
]), zp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Pp,
    createTabs: Rp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Bp,
    createTabs: Hp
  }
}, yi = (e, t) => {
  const n = zp[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, Ol = [
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
], Op = [
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
], Up = [
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
], Wp = [
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
], bi = [
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
], vi = [
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
], wi = [
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
], Gp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Vp = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ol,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      El,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected patient:", n),
        onAction: (n, a) => console.log("Patient action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  },
  {
    id: "appointments",
    label: "Appointments",
    data: Op,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Fl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected appointment:", n),
        onAction: (n, a) => console.log("Appointment action:", n, a),
        status: e.status
      }
    )
  },
  {
    id: "medications",
    label: "Medications",
    data: Up,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Pl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected medication:", n),
        onAction: (n, a) => console.log("Medication action:", n, a),
        priority: e.priority
      }
    )
  },
  {
    id: "vitals",
    label: "Vital Signs",
    data: Wp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Rl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Yp = () => {
  const [e, t] = Oe("healthcare"), n = Re(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: vp,
      tabPanels: Vp(),
      data: Ol
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...yi("ecommerce", bi),
      data: bi
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...yi("financial", vi),
      data: vi
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Gp,
      tabPanels: ps(wi, [
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
      data: wi
    }
  }), []), a = n[e];
  return /* @__PURE__ */ r.jsxs("div", { style: { padding: "2rem", maxWidth: "1200px", margin: "0 auto" }, children: [
    /* @__PURE__ */ r.jsxs("div", { style: { marginBottom: "2rem" }, children: [
      /* @__PURE__ */ r.jsx("h1", { style: {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        color: "#1f2937"
      }, children: "AriaTabsDataGrid - Comprehensive Demo" }),
      /* @__PURE__ */ r.jsx("p", { style: {
        fontSize: "1.1rem",
        color: "#6b7280",
        marginBottom: "2rem",
        lineHeight: "1.6"
      }, children: "This demo showcases the component's versatility across different domains: healthcare, e-commerce, financial services, and custom business applications. Each configuration demonstrates domain-specific data operations, custom renderers, and specialized filtering logic." }),
      /* @__PURE__ */ r.jsx("div", { style: {
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap"
      }, children: Object.keys(n).map((o) => /* @__PURE__ */ r.jsx(
        xt,
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
      /* @__PURE__ */ r.jsxs("div", { style: {
        backgroundColor: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        marginBottom: "2rem"
      }, children: [
        /* @__PURE__ */ r.jsx("h2", { style: {
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "0.5rem",
          color: "#1e293b"
        }, children: a.title }),
        /* @__PURE__ */ r.jsx("p", { style: {
          color: "#64748b",
          marginBottom: "1rem"
        }, children: a.description }),
        /* @__PURE__ */ r.jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          fontSize: "0.9rem"
        }, children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Data Records:" }),
            " ",
            a.data.length
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Tab Panels:" }),
            " ",
            a.tabPanels.length
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Features:" }),
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
    /* @__PURE__ */ r.jsx(
      yo,
      {
        dataConfig: a.dataConfig,
        tabPanels: a.tabPanels,
        ariaLabel: `${a.title} Data Grid`,
        ariaDescription: `Interactive data grid for ${a.description.toLowerCase()}`
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { style: {
      marginTop: "3rem",
      padding: "1.5rem",
      backgroundColor: "#f1f5f9",
      borderRadius: "0.5rem",
      border: "1px solid #cbd5e1"
    }, children: [
      /* @__PURE__ */ r.jsx("h3", { style: {
        fontSize: "1.25rem",
        fontWeight: "600",
        marginBottom: "1rem",
        color: "#334155"
      }, children: "Implementation Details" }),
      /* @__PURE__ */ r.jsxs("div", { style: { display: "grid", gap: "1rem", fontSize: "0.9rem" }, children: [
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Current Mode:" }),
          " ",
          e,
          " configuration"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Data Operations:" }),
          " Custom comparator, filter function, and boolean renderer"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Architecture:" }),
          " Generic core with domain-specific plugins and factory helpers"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "State Management:" }),
          " Global row selection with data-object persistence"
        ] }),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("strong", { children: "Accessibility:" }),
          " Full ARIA support with dynamic labels and descriptions"
        ] })
      ] })
    ] })
  ] });
}, k1 = Yp;
function Zp(e) {
  var t = 0, n = e.children, a = n && n.length;
  if (!a) t = 1;
  else for (; --a >= 0; ) t += n[a].value;
  e.value = t;
}
function qp() {
  return this.eachAfter(Zp);
}
function Jp(e, t) {
  let n = -1;
  for (const a of this)
    e.call(t, a, ++n, this);
  return this;
}
function Xp(e, t) {
  for (var n = this, a = [n], o, s, i = -1; n = a.pop(); )
    if (e.call(t, n, ++i, this), o = n.children)
      for (s = o.length - 1; s >= 0; --s)
        a.push(o[s]);
  return this;
}
function Kp(e, t) {
  for (var n = this, a = [n], o = [], s, i, l, c = -1; n = a.pop(); )
    if (o.push(n), s = n.children)
      for (i = 0, l = s.length; i < l; ++i)
        a.push(s[i]);
  for (; n = o.pop(); )
    e.call(t, n, ++c, this);
  return this;
}
function Qp(e, t) {
  let n = -1;
  for (const a of this)
    if (e.call(t, a, ++n, this))
      return a;
}
function em(e) {
  return this.eachAfter(function(t) {
    for (var n = +e(t.data) || 0, a = t.children, o = a && a.length; --o >= 0; ) n += a[o].value;
    t.value = n;
  });
}
function tm(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function nm(e) {
  for (var t = this, n = rm(t, e), a = [t]; t !== n; )
    t = t.parent, a.push(t);
  for (var o = a.length; e !== n; )
    a.splice(o, 0, e), e = e.parent;
  return a;
}
function rm(e, t) {
  if (e === t) return e;
  var n = e.ancestors(), a = t.ancestors(), o = null;
  for (e = n.pop(), t = a.pop(); e === t; )
    o = e, e = n.pop(), t = a.pop();
  return o;
}
function am() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function om() {
  return Array.from(this);
}
function sm() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function im() {
  var e = this, t = [];
  return e.each(function(n) {
    n !== e && t.push({ source: n.parent, target: n });
  }), t;
}
function* lm() {
  var e = this, t, n = [e], a, o, s;
  do
    for (t = n.reverse(), n = []; e = t.pop(); )
      if (yield e, a = e.children)
        for (o = 0, s = a.length; o < s; ++o)
          n.push(a[o]);
  while (n.length);
}
function ms(e, t) {
  e instanceof Map ? (e = [void 0, e], t === void 0 && (t = um)) : t === void 0 && (t = dm);
  for (var n = new Vr(e), a, o = [n], s, i, l, c; a = o.pop(); )
    if ((i = t(a.data)) && (c = (i = Array.from(i)).length))
      for (a.children = i, l = c - 1; l >= 0; --l)
        o.push(s = i[l] = new Vr(i[l])), s.parent = a, s.depth = a.depth + 1;
  return n.eachBefore(hm);
}
function cm() {
  return ms(this).eachBefore(fm);
}
function dm(e) {
  return e.children;
}
function um(e) {
  return Array.isArray(e) ? e[1] : null;
}
function fm(e) {
  e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function hm(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function Vr(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
Vr.prototype = ms.prototype = {
  constructor: Vr,
  count: qp,
  each: Jp,
  eachAfter: Kp,
  eachBefore: Xp,
  find: Qp,
  sum: em,
  sort: tm,
  path: nm,
  ancestors: am,
  descendants: om,
  leaves: sm,
  links: im,
  copy: cm,
  [Symbol.iterator]: lm
};
function Ia(e) {
  return typeof e == "number" && !isNaN(e);
}
function pm(e, t) {
  return e.map((n) => {
    const a = t.split(".");
    let o = n;
    for (const s of a)
      if (o = o?.[s], o === void 0) break;
    return o;
  }).filter((n) => n != null);
}
function Ul(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? 0 : t.reduce((n, a) => n + a, 0);
}
function mm(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? 0 : Ul(t) / t.length;
}
function gm(e) {
  return e.length;
}
function xm(e) {
  return new Set(e).size;
}
function ym(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? null : Math.min(...t);
}
function bm(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? null : Math.max(...t);
}
function vm(e) {
  return e.length > 0 ? e[0] : null;
}
function wm(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function _m(e) {
  return e.filter((n) => n != null).map((n) => String(n)).join(", ");
}
const Sm = {
  sum: Ul,
  avg: mm,
  count: gm,
  min: ym,
  max: bm,
  first: vm,
  last: wm,
  concat: _m,
  countUnique: xm
};
function km(e, t) {
  if (t.length === 0)
    return null;
  const n = pm(t, e.column);
  let a;
  if (e.type === "custom") {
    if (!e.customFn)
      throw new Error(`Custom aggregation for column "${e.column}" requires a customFn`);
    a = e.customFn(n, t);
  } else {
    const o = Sm[e.type];
    a = o(n, t);
  }
  return a;
}
function vo(e, t) {
  const n = {};
  for (const a of e) {
    const o = a.label || `${a.column}_${a.type}`;
    n[o] = km(a, t);
  }
  return n;
}
function Nm(e, t, n) {
  try {
    return e.calculate(t, n);
  } catch (a) {
    return console.error(`Error calculating field "${e.key}":`, a), null;
  }
}
function Cm(e, t) {
  return t.length === 0 ? e : e.map((n) => {
    const a = { ...n };
    for (const o of t)
      a[o.key] = Nm(o, n, e);
    return a;
  });
}
function jm(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const o = typeof t == "function" ? t(a) : a[t];
    n.has(o) || n.set(o, []), n.get(o).push(a);
  }
  return n;
}
function Mm(e, t) {
  return t.label ? `${t.label}: ${e}` : String(e);
}
function Im(e, t) {
  const { levels: n } = t;
  function a(i, l, c) {
    if (l >= n.length)
      return i.map((p, x) => ({
        id: `${c}-item-${x}`,
        type: "item",
        level: l,
        data: p,
        items: [p]
      }));
    const d = n[l], u = jm(i, d.groupBy), f = [];
    let h = Array.from(u.entries());
    d.sortDirection && h.sort((p, x) => (d.sortDirection === "asc" ? 1 : -1) * String(p[0]).localeCompare(String(x[0])));
    for (const [p, x] of h) {
      const m = `${c}-${l}-${p}`, g = a(x, l + 1, m), S = d.aggregations ? vo(d.aggregations, x) : {};
      f.push({
        id: m,
        type: "group",
        level: l,
        key: p,
        label: Mm(p, d),
        items: x,
        aggregations: S,
        children: g
      });
    }
    return f;
  }
  const o = a(e, 0, "root"), s = t.globalAggregations ? vo(t.globalAggregations, e) : {};
  return {
    id: "root",
    type: "root",
    level: -1,
    items: e,
    aggregations: s,
    children: o
  };
}
function Dm(e, t) {
  const { getId: n, getParentId: a, rootIds: o = [] } = t, s = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = n(u);
    s.set(f, u);
  }
  const i = /* @__PURE__ */ new Map();
  function l(u, f = 0) {
    const h = n(u);
    if (i.has(h))
      return i.get(h);
    const p = {
      id: h,
      type: "item",
      level: f,
      data: u,
      items: [u],
      children: []
    };
    i.set(h, p);
    const x = [];
    for (const m of e)
      a?.(m) === h && x.push(m);
    if (x.length > 0 && (p.children = x.map((m) => l(m, f + 1)), t.aggregations && t.showChildAggregations)) {
      const m = Wl(p);
      p.aggregations = vo(t.aggregations, m);
    }
    return p;
  }
  const c = [];
  for (const u of e) {
    const f = a?.(u);
    (!f || o.includes(f)) && c.push(u);
  }
  const d = c.map((u) => l(u, 0));
  return {
    id: "root",
    type: "root",
    level: -1,
    items: e,
    children: d
  };
}
function Wl(e) {
  const t = [...e.items || []];
  if (e.children)
    for (const n of e.children)
      t.push(...Wl(n));
  return t;
}
function Tm(e, t, n) {
  const a = [];
  function o(s) {
    const i = s.data;
    if (i.type === "root") {
      if (s.children)
        for (const d of s.children)
          o(d);
      return;
    }
    const l = t.has(i.id), c = (s.children?.length || 0) > 0;
    if (i.type === "group") {
      if (a.push({
        id: i.id,
        type: "group",
        level: i.level,
        isExpandable: c,
        isExpanded: l,
        groupMetadata: {
          key: i.key,
          label: i.label,
          aggregations: i.aggregations || {},
          itemCount: i.items?.length || 0
        },
        parentId: s.parent?.data.id !== "root" ? s.parent?.data.id : void 0,
        path: Ka(s)
      }), l && s.children)
        for (const d of s.children)
          o(d);
    } else if (i.type === "item")
      if (n === "tree" && c) {
        if (a.push({
          id: i.id,
          type: "tree-node",
          level: i.level,
          isExpandable: !0,
          isExpanded: l,
          data: i.data,
          parentId: s.parent?.data.id !== "root" ? s.parent?.data.id : void 0,
          path: Ka(s)
        }), l && s.children)
          for (const d of s.children)
            o(d);
      } else
        a.push({
          id: i.id,
          type: n === "tree" ? "tree-node" : "item",
          level: i.level,
          isExpandable: c,
          isExpanded: !1,
          data: i.data,
          parentId: s.parent?.data.id !== "root" ? s.parent?.data.id : void 0,
          path: Ka(s)
        });
  }
  return o(e), a;
}
function Ka(e) {
  const t = [];
  let n = e;
  for (; n && n.data.type !== "root"; )
    t.unshift(n.data.id), n = n.parent;
  return t;
}
class _i {
  hierarchyRoot;
  mode;
  constructor(t, n, a) {
    this.mode = n;
    const o = n === "grouped" ? Im(t, a) : Dm(t, a);
    this.hierarchyRoot = ms(o);
  }
  /**
   * Get the hierarchy root
   */
  getRoot() {
    return this.hierarchyRoot;
  }
  /**
   * Get flattened nodes for rendering
   */
  getFlattenedNodes(t) {
    return Tm(this.hierarchyRoot, t, this.mode);
  }
  /**
   * Find a node by ID
   */
  findNode(t) {
    return this.hierarchyRoot.find((n) => n.data.id === t);
  }
  /**
   * Get all descendant node IDs
   */
  getDescendantIds(t) {
    const n = this.findNode(t);
    if (!n) return [];
    const a = [];
    return n.each((o) => {
      o.data.id !== t && a.push(o.data.id);
    }), a;
  }
  /**
   * Get all ancestor node IDs
   */
  getAncestorIds(t) {
    const n = this.findNode(t);
    if (!n) return [];
    const a = [];
    let o = n.parent;
    for (; o && o.data.type !== "root"; )
      a.push(o.data.id), o = o.parent;
    return a;
  }
  /**
   * Get siblings of a node
   */
  getSiblingIds(t) {
    const n = this.findNode(t);
    return !n || !n.parent ? [] : (n.parent.children || []).filter((a) => a.data.id !== t).map((a) => a.data.id);
  }
  /**
   * Get total item count
   */
  getTotalCount() {
    return this.hierarchyRoot.data.items?.length || 0;
  }
  /**
   * Get maximum depth
   */
  getMaxDepth() {
    return this.hierarchyRoot.height;
  }
  /**
   * Get aggregations for a node
   */
  getAggregations(t) {
    return this.findNode(t)?.data.aggregations;
  }
  /**
   * Get global (root) aggregations
   */
  getGlobalAggregations() {
    return this.hierarchyRoot.data.aggregations || {};
  }
}
function Si(e, t, n) {
  if (e instanceof Set)
    return new Set(e);
  if (Array.isArray(e))
    return new Set(e);
  if (!t)
    return /* @__PURE__ */ new Set();
  if (e === "all") {
    const a = /* @__PURE__ */ new Set();
    return t.getRoot().each((o) => {
      o.data.type !== "root" && (!n || o.depth <= n) && a.add(o.data.id);
    }), a;
  }
  if (e === "first") {
    const a = /* @__PURE__ */ new Set(), o = t.getRoot();
    if (o.children)
      for (const s of o.children)
        a.add(s.data.id);
    return a;
  }
  return /* @__PURE__ */ new Set();
}
function Lm(e) {
  if (typeof window > "u")
    return null;
  try {
    const t = localStorage.getItem(e);
    if (t) {
      const n = JSON.parse(t);
      return new Set(n);
    }
  } catch (t) {
    console.warn("Failed to load persisted expansion state:", t);
  }
  return null;
}
function Am(e, t) {
  if (!(typeof window > "u"))
    try {
      const n = JSON.stringify(Array.from(t));
      localStorage.setItem(e, n);
    } catch (n) {
      console.warn("Failed to persist expansion state:", n);
    }
}
function $m(e = {}) {
  const {
    initialExpanded: t,
    expandedIds: n,
    onExpansionChange: a,
    hierarchyManager: o,
    maxAutoExpandDepth: s,
    persistKey: i
  } = e, l = n !== void 0, c = Re(() => i ? Lm(i) : null, [i]), [d, u] = Oe(() => c || Si(t, o, s)), f = l ? n : d, h = fe(
    (j) => {
      l || u(j), i && Am(i, j), a?.(j);
    },
    [l, i, a]
  ), p = fe(
    (j) => {
      const k = new Set(f);
      k.add(j), h(k);
    },
    [f, h]
  ), x = fe(
    (j) => {
      const k = new Set(f);
      k.delete(j), h(k);
    },
    [f, h]
  ), m = fe(
    (j) => {
      f.has(j) ? x(j) : p(j);
    },
    [f, p, x]
  ), g = fe(() => {
    if (!o) {
      console.warn("Cannot expand all: hierarchyManager not provided");
      return;
    }
    const j = /* @__PURE__ */ new Set();
    o.getRoot().each((k) => {
      k.data.type !== "root" && (!s || k.depth <= s) && j.add(k.data.id);
    }), h(j);
  }, [o, s, h]), S = fe(() => {
    h(/* @__PURE__ */ new Set());
  }, [h]), I = fe(
    (j) => {
      if (!o) {
        console.warn("Cannot expand to depth: hierarchyManager not provided");
        return;
      }
      const k = /* @__PURE__ */ new Set();
      o.getRoot().each((b) => {
        b.data.type !== "root" && b.depth <= j && k.add(b.data.id);
      }), h(k);
    },
    [o, h]
  );
  return nt(() => {
    if (!l && t) {
      const j = Si(
        t,
        o,
        s
      );
      u(j);
    }
  }, [t, o, s, l]), {
    expandedIds: f,
    expand: p,
    collapse: x,
    toggle: m,
    expandAll: g,
    collapseAll: S,
    expandToDepth: I
  };
}
function Em(e) {
  const {
    flattenedNodes: t,
    expansionState: n,
    hierarchyManager: a,
    columnCount: o,
    onFocusChange: s,
    onRowActivate: i,
    enableColumnNavigation: l = !1
  } = e, [c, d] = Oe(null), [u, f] = Oe(0), [h, p] = Oe(!1), x = Ze(!1);
  nt(() => {
    !x.current && t.length > 0 && !c && (d(t[0].id), x.current = !0);
  }, [t, c]);
  const m = fe(
    (L) => L ? t.findIndex((M) => M.id === L) : -1,
    [t]
  ), g = fe(() => c && t.find((L) => L.id === c) || null, [c, t]), S = fe(
    (L) => {
      d(L), f(0), s?.(L);
    },
    [s]
  ), I = fe(() => {
    const L = m(c);
    L < t.length - 1 && S(t[L + 1].id);
  }, [c, t, m, S]), j = fe(() => {
    const L = m(c);
    L > 0 && S(t[L - 1].id);
  }, [c, t, m, S]), k = fe(() => {
    t.length > 0 && S(t[0].id);
  }, [t, S]), b = fe(() => {
    t.length > 0 && S(t[t.length - 1].id);
  }, [t, S]), v = fe(() => {
    const L = g();
    !L || !L.parentId || S(L.parentId);
  }, [g, S]), C = fe(() => {
    if (!c) return;
    const L = g();
    L && L.isExpandable && !L.isExpanded && n.expand(c);
  }, [c, g, n]), _ = fe(() => {
    if (!c) return;
    const L = g();
    L && L.isExpandable && L.isExpanded ? n.collapse(c) : L && L.parentId && v();
  }, [c, g, n, v]), y = fe(() => {
    if (!c) return;
    const L = g();
    L && L.isExpandable && n.toggle(c);
  }, [c, g, n]), w = fe(() => {
    p(!0);
  }, []), E = fe(() => {
    p(!1);
  }, []), T = fe(
    (L) => {
      const { key: M, ctrlKey: N, metaKey: D } = L, R = N || D;
      switch (M) {
        case "ArrowDown":
          L.preventDefault(), I();
          break;
        case "ArrowUp":
          L.preventDefault(), j();
          break;
        case "ArrowRight":
          L.preventDefault(), l && !R ? u < o - 1 && f((Z) => Z + 1) : C();
          break;
        case "ArrowLeft":
          L.preventDefault(), l && u > 0 ? f((Z) => Z - 1) : _();
          break;
        case "Home":
          L.preventDefault(), R ? k() : f(0);
          break;
        case "End":
          L.preventDefault(), R ? b() : f(o - 1);
          break;
        case "Enter":
          L.preventDefault(), c && (h ? i?.(c) : w());
          break;
        case " ":
          L.preventDefault(), y();
          break;
        case "Escape":
          L.preventDefault(), h ? E() : c && (d(null), s?.(null));
          break;
        case "*":
          L.preventDefault();
          {
            const Z = g();
            Z && Z.parentId && a.getSiblingIds(Z.id).forEach((B) => {
              const J = t.find((F) => F.id === B);
              J && J.isExpandable && n.expand(B);
            });
          }
          break;
      }
    },
    [
      I,
      j,
      k,
      b,
      C,
      _,
      y,
      w,
      E,
      c,
      u,
      o,
      l,
      h,
      i,
      s,
      g,
      a,
      t,
      n
    ]
  );
  return {
    focusedNodeId: c,
    focusedColumnIndex: u,
    isNavigationActive: h,
    focusNode: S,
    handleKeyDown: T,
    focusNext: I,
    focusPrevious: j,
    focusFirst: k,
    focusLast: b,
    focusParent: v,
    expandFocused: C,
    collapseFocused: _,
    toggleFocused: y,
    activateNavigation: w,
    deactivateNavigation: E
  };
}
const Fm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M7 5L12 10L7 15",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Gl = ({
  context: e,
  columnCount: t,
  customRenderer: n,
  isFocused: a = !1,
  onKeyDown: o,
  onClick: s,
  tabIndex: i = -1,
  "data-testid": l
}) => {
  const { node: c, level: d, isExpanded: u, toggleExpansion: f, aggregations: h, totalCount: p } = e;
  if (n)
    return /* @__PURE__ */ r.jsx(
      "tr",
      {
        className: ke("group-header", {
          "group-header--expanded": u,
          "group-header--focused": a,
          [`group-header--level-${d + 1}`]: !0
        }),
        role: "row",
        "aria-expanded": u,
        "aria-level": d + 1,
        tabIndex: i,
        onClick: s || f,
        onKeyDown: o,
        "data-testid": l,
        "data-node-id": c.id,
        children: /* @__PURE__ */ r.jsx("td", { colSpan: t, className: "group-header__cell group-header__cell--custom", children: n(e) })
      }
    );
  const x = Object.entries(h), m = x.length > 0;
  return /* @__PURE__ */ r.jsxs(
    "tr",
    {
      className: ke("group-header", {
        "group-header--expanded": u,
        "group-header--focused": a,
        [`group-header--level-${d + 1}`]: !0
      }),
      role: "row",
      "aria-expanded": u,
      "aria-level": d + 1,
      tabIndex: i,
      onClick: s || f,
      onKeyDown: o,
      "data-testid": l,
      "data-node-id": c.id,
      children: [
        /* @__PURE__ */ r.jsxs(
          "td",
          {
            className: ke(
              "group-header__cell",
              "group-header__cell--first",
              `group-header__cell--indent-${d}`
            ),
            children: [
              /* @__PURE__ */ r.jsx(
                "span",
                {
                  className: ke("group-header__icon", {
                    "group-header__icon--expanded": u
                  }),
                  children: /* @__PURE__ */ r.jsx(Fm, {})
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "group-header__label", children: c.label }),
              /* @__PURE__ */ r.jsxs("span", { className: "group-header__count", children: [
                "(",
                p,
                " ",
                p === 1 ? "item" : "items",
                ")"
              ] })
            ]
          }
        ),
        t > 1 && m && /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "group-header__cell group-header__cell--aggregations",
            colSpan: t - 1,
            children: /* @__PURE__ */ r.jsx("div", { className: "group-header__aggregations", children: x.map(([g, S], I) => {
              const j = typeof S == "object" && S !== null ? JSON.stringify(S) : String(S ?? "—");
              return /* @__PURE__ */ r.jsxs("div", { className: "group-header__aggregation", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "group-header__aggregation-label", children: [
                  g,
                  ":"
                ] }),
                /* @__PURE__ */ r.jsx("span", { className: "group-header__aggregation-value", children: j })
              ] }, `${g}-${I}`);
            }) })
          }
        ),
        t > 1 && !m && /* @__PURE__ */ r.jsx("td", { colSpan: t - 1, className: "group-header__cell" })
      ]
    }
  );
};
Gl.displayName = "GroupHeader";
const Pm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M6 4L10 8L6 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function Rm(e, t) {
  const n = e[t.key];
  return t.render ? t.render(e) : n == null ? "—" : String(n);
}
const Vl = ({
  context: e,
  columns: t,
  customRenderer: n,
  isFocused: a = !1,
  onKeyDown: o,
  onExpanderClick: s,
  tabIndex: i = -1,
  "data-testid": l
}) => {
  const { node: c, depth: d, isExpanded: u, toggleExpansion: f, hasChildren: h, aggregations: p } = e;
  return n ? /* @__PURE__ */ r.jsx(
    "tr",
    {
      className: ke("tree-node", {
        "tree-node--expanded": u,
        "tree-node--focused": a,
        "tree-node--has-children": h
      }),
      role: "row",
      "aria-expanded": h ? u : void 0,
      "aria-level": d + 1,
      tabIndex: i,
      onKeyDown: o,
      "data-testid": l,
      "data-node-id": c.id,
      children: /* @__PURE__ */ r.jsx("td", { colSpan: t.length, className: "tree-node__cell tree-node__cell--custom", children: n(e) })
    }
  ) : /* @__PURE__ */ r.jsx(
    "tr",
    {
      className: ke("tree-node", {
        "tree-node--expanded": u,
        "tree-node--focused": a,
        "tree-node--has-children": h
      }),
      role: "row",
      "aria-expanded": h ? u : void 0,
      "aria-level": d + 1,
      tabIndex: i,
      onKeyDown: o,
      "data-testid": l,
      "data-node-id": c.id,
      children: t.map((x, m) => {
        const g = m === 0;
        return /* @__PURE__ */ r.jsxs(
          "td",
          {
            className: ke("tree-node__cell", {
              "tree-node__cell--first": g,
              [`tree-node__cell--depth-${d}`]: g
            }),
            role: "gridcell",
            children: [
              g && /* @__PURE__ */ r.jsx(r.Fragment, { children: h ? /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  className: ke("tree-node__expander", {
                    "tree-node__expander--expanded": u
                  }),
                  onClick: (S) => {
                    S.stopPropagation(), s ? s() : f();
                  },
                  "aria-label": u ? "Collapse node" : "Expand node",
                  tabIndex: -1,
                  children: /* @__PURE__ */ r.jsx(Pm, {})
                }
              ) : /* @__PURE__ */ r.jsx("span", { className: "tree-node__expander tree-node__expander--placeholder" }) }),
              /* @__PURE__ */ r.jsx("span", { className: "tree-node__content", children: Rm(c.data, x) }),
              g && p && Object.keys(p).length > 0 && /* @__PURE__ */ r.jsxs("span", { className: "tree-node__aggregation-hint", title: "Has aggregated data from children", children: [
                " ",
                "(",
                Object.keys(p).length,
                " agg)"
              ] })
            ]
          },
          x.key
        );
      })
    }
  );
};
Vl.displayName = "TreeNode";
const Bm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 10L8 6L4 10",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Hm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M4 6L8 10L12 6",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), zm = () => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M12 6L8 2L4 6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M4 10L8 14L12 10",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
function Om(e, t, n, a, o, s, i) {
  return e.data ? /* @__PURE__ */ r.jsx(
    "tr",
    {
      className: ke("groupable-datagrid__data-row", {
        "groupable-datagrid__data-row--focused": a,
        "groupable-datagrid__data-row--selected": o
      }),
      role: "row",
      "aria-selected": o,
      tabIndex: a ? 0 : -1,
      onKeyDown: s,
      onClick: i,
      "data-row-index": n,
      "data-node-id": e.id,
      style: { cursor: i ? "pointer" : void 0 },
      children: t.map((l) => {
        const c = e.data[l.key], d = l.customRenderer ? l.customRenderer(c, e.data) : l.render ? l.render(e.data) : c != null ? String(c) : "—";
        return /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "groupable-datagrid__data-cell",
            role: "gridcell",
            children: d
          },
          l.key
        );
      })
    },
    e.id
  ) : null;
}
const Um = ({
  mode: e,
  data: t,
  columns: n,
  groupConfig: a,
  treeConfig: o,
  // pivotConfig, // Future use
  calculatedFields: s = [],
  initialExpanded: i,
  expandedIds: l,
  onExpansionChange: c,
  // enableVirtualization = false, // Future use
  // virtualizationConfig, // Future use
  // onDataChange, // Future use
  // enableInlineEditing = false, // Future use
  // onCellEditStart, // Future use
  // onCellEditComplete, // Future use
  selectedRow: d,
  onGlobalRowSelectionChange: u,
  onRowClick: f,
  sortConfig: h,
  onSortChange: p,
  enableMultiSort: x = !1,
  showControls: m = !0,
  controlsRenderer: g,
  isLoading: S = !1,
  error: I = null,
  ariaLabel: j,
  ariaDescription: k,
  className: b,
  "data-testid": v,
  mobileDisplay: C = "auto",
  mobileBreakpoint: _ = 768
}) => {
  const y = Ze(null), [w, E] = tt.useState(!1);
  tt.useEffect(() => {
    const A = () => {
      E(window.innerWidth < _);
    };
    return A(), window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [_]);
  const T = C === "cards" || C === "auto" && w, L = C === "scroll" || C === "auto" && !w, M = Re(() => {
    if (!h || h.length === 0) return t;
    const A = [...t];
    for (let z = h.length - 1; z >= 0; z--) {
      const P = h[z], V = n.find((G) => G.key === P.key);
      A.sort((G, ee) => {
        let de = G[P.key], Y = ee[P.key];
        if (V?.render && (de = V.render(G), Y = V.render(ee)), de == null && Y == null) return 0;
        if (de == null) return 1;
        if (Y == null) return -1;
        if (typeof de == "number" && typeof Y == "number")
          return P.direction === "asc" ? de - Y : Y - de;
        const ae = String(de), le = String(Y), be = ae.localeCompare(le);
        return P.direction === "asc" ? be : -be;
      });
    }
    return A;
  }, [t, h, n]), N = fe(
    (A) => {
      if (!p) return;
      const z = h?.find((P) => P.key === A);
      if (x) {
        let P = [...h || []];
        z ? z.direction === "asc" ? P = P.map(
          (V) => V.key === A ? { ...V, direction: "desc" } : V
        ) : P = P.filter((V) => V.key !== A) : P.push({ key: A, direction: "asc" }), p(P);
      } else
        z ? z.direction === "asc" ? p([{ key: A, direction: "desc" }]) : p([]) : p([{ key: A, direction: "asc" }]);
    },
    [h, p, x]
  ), D = fe(
    (A, z) => {
      f && f(A, z), u && u(d === A ? null : A);
    },
    [f, u, d]
  ), R = Re(() => {
    const A = M;
    return s.length === 0 ? A : Cm(A, s);
  }, [M, s]), Z = Re(() => e === "flat" || e === "pivot" ? null : e === "grouped" ? a ? new _i(R, "grouped", a) : (console.warn("GroupableDataGrid: grouped mode requires groupConfig"), null) : e === "tree" ? o ? new _i(R, "tree", o) : (console.warn("GroupableDataGrid: tree mode requires treeConfig"), null) : null, [e, R, a, o]), Q = $m({
    initialExpanded: i,
    expandedIds: l,
    onExpansionChange: c,
    hierarchyManager: Z || void 0,
    maxAutoExpandDepth: a?.maxAutoExpandDepth || o?.maxAutoExpandDepth
  }), B = Re(() => Z ? Z.getFlattenedNodes(Q.expandedIds) : R.map((A, z) => ({
    id: `flat-${z}`,
    type: "item",
    level: 0,
    isExpandable: !1,
    isExpanded: !1,
    data: A,
    path: [`flat-${z}`]
  })), [Z, Q.expandedIds, R]), J = Em({
    flattenedNodes: B,
    expansionState: Q,
    hierarchyManager: Z,
    columnCount: n.length,
    enableColumnNavigation: e === "tree"
  });
  nt(() => {
    if (J.focusedNodeId && y.current) {
      const A = y.current.querySelector(
        `[data-node-id="${J.focusedNodeId}"]`
      );
      A && document.activeElement !== A && (document.activeElement instanceof HTMLElement && document.activeElement !== document.body && y.current.contains(document.activeElement) && document.activeElement.blur(), A.focus());
    }
  }, [J.focusedNodeId]);
  const F = fe(
    (A, z) => {
      const P = J.focusedNodeId === A.id;
      if (A.type === "group") {
        if (!Z || !a) return null;
        const ee = Z.findNode(A.id);
        if (!ee) return null;
        const de = {
          node: {
            id: A.id,
            key: A.groupMetadata.key,
            label: A.groupMetadata.label,
            level: A.level,
            items: ee.data.items || [],
            aggregations: A.groupMetadata.aggregations,
            totalCount: A.groupMetadata.itemCount
          },
          level: A.level,
          isExpanded: A.isExpanded,
          toggleExpansion: () => Q.toggle(A.id),
          aggregations: A.groupMetadata.aggregations,
          totalCount: A.groupMetadata.itemCount,
          childCount: ee.children?.length || 0
        }, ae = a.levels[A.level]?.headerRenderer;
        return /* @__PURE__ */ r.jsx(
          Gl,
          {
            context: de,
            columnCount: n.length,
            customRenderer: ae,
            isFocused: P,
            onKeyDown: J.handleKeyDown,
            tabIndex: P ? 0 : -1
          },
          A.id
        );
      }
      if (A.type === "tree-node") {
        if (!Z || !o) return null;
        const ee = Z.findNode(A.id);
        if (!ee) return null;
        const de = {
          node: {
            id: A.id,
            data: A.data,
            depth: A.level,
            children: ee.children?.map((ae) => ({
              id: ae.data.id,
              data: ae.data.data,
              depth: ae.depth
            })),
            aggregations: ee.data.aggregations
          },
          depth: A.level,
          isExpanded: A.isExpanded,
          toggleExpansion: () => Q.toggle(A.id),
          hasChildren: A.isExpandable,
          aggregations: ee.data.aggregations,
          path: A.path.map((ae) => {
            const le = Z.findNode(ae);
            return le ? { id: ae, data: le.data.data, depth: le.depth } : { id: ae, data: {}, depth: 0 };
          })
        }, Y = o.nodeRenderer;
        return /* @__PURE__ */ r.jsx(
          Vl,
          {
            context: de,
            columns: n,
            customRenderer: Y,
            isFocused: P,
            onKeyDown: J.handleKeyDown,
            tabIndex: P ? 0 : -1
          },
          A.id
        );
      }
      const V = d === A.data, G = u || f ? (ee) => D(A.data, ee) : void 0;
      return Om(
        A,
        n,
        z,
        P,
        V,
        J.handleKeyDown,
        G
      );
    },
    [
      J,
      Z,
      a,
      o,
      n,
      Q,
      d,
      D,
      u,
      f
    ]
  ), $ = fe(() => {
    if (!m) return null;
    if (g) {
      const A = {
        mode: e,
        expansion: Q,
        totalItems: R.length,
        visibleItems: B.length,
        groupLevels: a?.levels
      };
      return /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__controls", children: g(A) });
    }
    return e === "flat" ? null : /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__controls", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__controls-left", children: [
        /* @__PURE__ */ r.jsx(xt, { variant: "secondary", onClick: () => Q.expandAll(), children: "Expand All" }),
        /* @__PURE__ */ r.jsx(xt, { variant: "secondary", onClick: () => Q.collapseAll(), children: "Collapse All" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__controls-right", children: /* @__PURE__ */ r.jsxs("span", { className: "groupable-datagrid__controls-info", children: [
        "Showing ",
        B.filter((A) => A.type === "item").length,
        " of",
        " ",
        R.length,
        " items"
      ] }) })
    ] });
  }, [
    m,
    g,
    e,
    Q,
    R.length,
    B.length,
    a
  ]), q = fe(
    (A) => {
      if (A.type === "group") {
        const z = A.level || 0, P = A.isExpanded;
        return /* @__PURE__ */ r.jsx(
          "div",
          {
            className: ke(
              "groupable-datagrid__card",
              "groupable-datagrid__card--group",
              `groupable-datagrid__card--level-${z}`,
              {
                "groupable-datagrid__card--expanded": P
              }
            ),
            onClick: () => Q.toggle(A.id),
            children: /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__card-group-header", children: [
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "groupable-datagrid__card-group-toggle",
                  "aria-label": P ? "Collapse group" : "Expand group",
                  "aria-expanded": P,
                  children: /* @__PURE__ */ r.jsx(
                    "svg",
                    {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: ke(
                        "groupable-datagrid__card-group-chevron",
                        {
                          "groupable-datagrid__card-group-chevron--expanded": P
                        }
                      ),
                      children: /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          d: "M6 8L10 12L14 8",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "groupable-datagrid__card-group-label", children: A.groupMetadata?.label || "Group" }),
              A.groupMetadata?.itemCount !== void 0 && /* @__PURE__ */ r.jsxs("span", { className: "groupable-datagrid__card-group-count", children: [
                "(",
                A.groupMetadata.itemCount,
                ")"
              ] })
            ] })
          },
          A.id
        );
      }
      if (A.type === "item" && A.data) {
        const z = d === A.data, P = n.find(
          (G) => G.key === "metricName" || G.key === "name" || G.key === "title"
        ) || n[0], V = n.filter((G) => G.key !== P.key);
        return /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: ke("groupable-datagrid__card", {
              "groupable-datagrid__card--selected": z
            }),
            onClick: (G) => {
              u && u(
                z ? null : A.data
              ), f && f(A.data, G);
            },
            children: [
              (() => {
                const G = A.data[P.key], ee = P.customRenderer ? P.customRenderer(G, A.data) : P.render ? P.render(A.data) : G != null ? String(G) : "—";
                return /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__card-title", children: ee });
              })(),
              V.map((G) => {
                const ee = A.data[G.key], de = G.customRenderer ? G.customRenderer(ee, A.data) : G.render ? G.render(A.data) : ee != null ? String(ee) : "—";
                return /* @__PURE__ */ r.jsxs(
                  "div",
                  {
                    className: "groupable-datagrid__card-field",
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__card-label", children: G.label }),
                      /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__card-value", children: de })
                    ]
                  },
                  G.key
                );
              })
            ]
          },
          A.id
        );
      }
      return null;
    },
    [
      n,
      Q,
      a,
      d,
      u,
      f,
      Z
    ]
  );
  return S ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: ke(
        "groupable-datagrid",
        "groupable-datagrid--loading",
        b
      ),
      children: /* @__PURE__ */ r.jsx("p", { children: "Loading data..." })
    }
  ) : I ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: ke(
        "groupable-datagrid",
        "groupable-datagrid--error",
        b
      ),
      children: /* @__PURE__ */ r.jsxs("p", { children: [
        "Error: ",
        I
      ] })
    }
  ) : R.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: ke("groupable-datagrid", b), children: /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__empty", children: "No data available" }) }) : /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: y,
      className: ke("groupable-datagrid", b, {
        "groupable-datagrid--mobile-cards": T,
        "groupable-datagrid--mobile-scroll": L
      }),
      "data-testid": v,
      "data-mode": e,
      children: [
        $(),
        T && /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__cards", children: B.map((A) => q(A)) }),
        !T && /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__table-wrapper", children: /* @__PURE__ */ r.jsxs(
          "table",
          {
            className: "groupable-datagrid__treegrid",
            role: e === "flat" ? "table" : "treegrid",
            "aria-label": j,
            "aria-describedby": k,
            children: [
              /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { className: "groupable-datagrid__header-row", role: "row", children: n.map((A) => {
                const z = h?.find(
                  (G) => G.key === A.key
                ), P = A.sortable !== !1 && p, V = h?.findIndex(
                  (G) => G.key === A.key
                );
                return /* @__PURE__ */ r.jsx(
                  "th",
                  {
                    role: "columnheader",
                    "aria-sort": z ? z.direction === "asc" ? "ascending" : "descending" : void 0,
                    className: ke("groupable-datagrid__header-cell", {
                      "groupable-datagrid__header-cell--sortable": P,
                      "groupable-datagrid__header-cell--sorted": !!z
                    }),
                    onClick: P ? () => N(A.key) : void 0,
                    style: { cursor: P ? "pointer" : void 0 },
                    children: /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__header-content", children: [
                      /* @__PURE__ */ r.jsx("span", { children: A.label }),
                      P && /* @__PURE__ */ r.jsxs("span", { className: "groupable-datagrid__sort-indicator", children: [
                        !z && /* @__PURE__ */ r.jsx(zm, {}),
                        z?.direction === "asc" && /* @__PURE__ */ r.jsx(Bm, {}),
                        z?.direction === "desc" && /* @__PURE__ */ r.jsx(Hm, {}),
                        x && z && V !== void 0 && V >= 0 && /* @__PURE__ */ r.jsx("span", { className: "groupable-datagrid__sort-order", children: V + 1 })
                      ] })
                    ] })
                  },
                  A.key
                );
              }) }) }),
              /* @__PURE__ */ r.jsx("tbody", { role: "rowgroup", children: B.map((A, z) => F(A, z)) }),
              Z && a?.showSummaryFooter && /* @__PURE__ */ r.jsx("tfoot", { children: /* @__PURE__ */ r.jsx("tr", { className: "groupable-datagrid__summary-row", role: "row", children: /* @__PURE__ */ r.jsxs("td", { colSpan: n.length, children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Total:" }),
                " ",
                Z.getTotalCount(),
                " ",
                "items"
              ] }) }) })
            ]
          }
        ) })
      ]
    }
  );
};
Um.displayName = "GroupableDataGrid";
const Yl = (e) => /* @__PURE__ */ r.jsx(al, { ...e }), N1 = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = bn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: h,
  logo: p,
  className: x,
  ...m
}) => {
  const g = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Dl, { ...s }),
    /* @__PURE__ */ r.jsx(cl, { ...g }),
    /* @__PURE__ */ r.jsx(Yl, { className: x, ...m, children: /* @__PURE__ */ r.jsx(ol, { size: o, children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsxs(rr, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Ht, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(dl, { ...l })
  ] });
}, C1 = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = bn.TwoThirds,
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: c,
  serviceName: d,
  serviceHref: u,
  logo: f,
  className: h,
  ...p
}) => {
  const x = {
    service: {
      text: d,
      href: u
    },
    logo: f,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Dl, { ...s }),
    /* @__PURE__ */ r.jsx(cl, { ...x }),
    /* @__PURE__ */ r.jsxs(Yl, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(nr, { ...c }),
      /* @__PURE__ */ r.jsx(ol, { size: o, children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsxs(rr, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Ht, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(dl, { ...l })
  ] });
};
function Wm(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = K.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = K.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return K.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(n, String(o)) : c.delete(n), c.set(a, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Gm = ({
  className: e
}) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z"
      }
    )
  }
), Vm = ({
  className: e
}) => /* @__PURE__ */ r.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z"
      }
    )
  }
), Yr = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ke("nhsuk-back-link", a), c = ke("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
    t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e,
    /* @__PURE__ */ r.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: s, ...i, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: d() }) });
};
Yr.displayName = "ForwardLink";
const Ym = ({
  show: e,
  label: t,
  contentHeaderLevel: n,
  detailActive: a,
  headerContext: o,
  backLabel: s,
  nextLabel: i,
  onBack: l,
  onForward: c,
  renderContentHeader: d,
  item: u,
  contentSubheader: f,
  tertiaryInlineActive: h
}) => {
  if (!e || !u) return null;
  const p = `h${n}`, x = t ? K.createElement(
    p,
    {
      style: {
        marginLeft: a ? 32 : 0,
        marginRight: a ? 32 : 0
      }
    },
    t
  ) : null, m = a ? /* @__PURE__ */ r.jsx(
    nr,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, g = h ? void 0 : /* @__PURE__ */ r.jsx(Yr, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: a,
      context: o,
      backLink: m,
      defaultHeading: x
    }) });
  const S = u && f ? typeof f == "function" ? f(u) : f : null;
  return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 0,
          flex: "1 1 auto",
          minWidth: 0
        },
        children: [
          m,
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: 0
              },
              children: [
                x,
                S && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: S })
              ]
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: g })
  ] }) });
};
function Zm({
  layout: e,
  items: t,
  getId: n,
  selectedId: a,
  isLoading: o,
  emptyState: s,
  renderItemContent: i,
  onSelect: l,
  orientation: c,
  initialFocus: d,
  onFocusChange: u,
  justSelectedId: f,
  listRef: h,
  onKeyDownList: p,
  navigationInstructions: x,
  controlledFocusedIndex: m
}) {
  const [g, S] = K.useState(
    () => d === "first" ? 0 : -1
  ), I = K.useRef(0);
  K.useEffect(() => {
    if (typeof m == "number" || g < 0 || !h?.current) return;
    const C = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[g];
    if (C) {
      document.activeElement !== C && C.focus(), I.current = g;
      const _ = t[g];
      u?.(_ ? n(_) : void 0, _, g);
    }
  }, [m, g, t, u, n, h]);
  const j = (v) => {
    if (p) return p(v);
    const C = c === "vertical" ? "ArrowDown" : "ArrowRight", _ = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (v.key === C)
      v.preventDefault(), S((y) => Math.min(t.length - 1, y + 1));
    else if (v.key === _)
      v.preventDefault(), S((y) => Math.max(0, y - 1));
    else if (v.key === "Home")
      v.preventDefault(), S(0);
    else if (v.key === "End")
      v.preventDefault(), S(t.length - 1);
    else if (v.key === "Enter" || v.key === " ") {
      v.preventDefault();
      const y = t[g];
      y && !y.disabled && l(n(y), y, g);
    }
  };
  if (e === "cards")
    return /* @__PURE__ */ r.jsxs(
      "ul",
      {
        className: "nhs-navigation-split-view__cards",
        role: "listbox",
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((v, C) => {
            const _ = n(v), y = _ === a;
            return /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": y,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    id: String(_),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": y || void 0,
                    "data-disabled": v.disabled || void 0,
                    disabled: v.disabled,
                    onClick: () => !v.disabled && l(_, v, C),
                    children: [
                      v.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: v.icon }),
                      /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: v.label }),
                      v.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: v.description }),
                      i?.(v),
                      v.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: v.badge })
                    ]
                  }
                )
              },
              String(_)
            );
          }),
          t.length === 0 && !o && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  const k = "nsv-nav-instructions", b = K.useMemo(() => K.memo(
    ({
      item: v,
      idx: C,
      selected: _,
      focused: y
    }) => {
      const w = n(v), E = v.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: y ? 0 : -1,
        onClick: () => {
          I.current = C, l(w, v, C);
        },
        onKeyDown: (T) => {
          (T.key === "Enter" || T.key === " ") && (T.preventDefault(), I.current = C, l(w, v, C));
        }
      };
      return /* @__PURE__ */ r.jsxs(
        "li",
        {
          id: String(w),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": _,
          "aria-current": _ ? "true" : void 0,
          "data-selected": _ || void 0,
          "data-disabled": v.disabled || void 0,
          ...E,
          children: [
            v.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: v.icon }),
            /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: v.label }),
              v.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: v.description }),
              i?.(v)
            ] }),
            v.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: v.badge })
          ]
        }
      );
    }
  ), [n, l, i]);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "ul",
      {
        ref: h,
        className: "nhs-navigation-split-view__list",
        onKeyDown: j,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": k,
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((v, C) => /* @__PURE__ */ r.jsx(
            b,
            {
              item: v,
              idx: C,
              selected: n(v) === a,
              focused: /* @__PURE__ */ (() => {
                const _ = typeof m == "number" ? m : g;
                return C === _ || _ === -1 && C === 0 && d === "first";
              })(),
              "data-just-selected": n(v) === f ? "true" : void 0
            },
            String(n(v))
          )),
          t.length === 0 && !o && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: k,
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)"
        },
        children: x || "Use arrow keys to navigate, Enter to open."
      }
    )
  ] });
}
const Cn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ki() {
  return typeof window > "u" ? Cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function gs() {
  const [e, t] = K.useState(ki());
  K.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ki());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = K.useCallback((s) => e >= Cn[s], [e]), a = K.useCallback((s) => e < Cn[s], [e]), o = K.useCallback((s, i) => e >= Cn[s] && e < Cn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Cn
  };
}
function j1(e) {
  const { width: t, values: n } = gs();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function qm(e, t, n) {
  const { up: a } = gs(), [o, s] = K.useState(!1);
  K.useEffect(() => s(!0), []);
  const i = o && a("medium"), l = o && a("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && n && l && (c = "three-column"), { effectiveLayout: c, hydrated: o, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Jm(e) {
  const {
    enabled: t,
    isAtLeastMedium: n,
    initiallyCollapsed: a,
    persist: o,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, c = K.useMemo(() => {
    if (o && (o === "url" || o === "both") && typeof window < "u") {
      const p = new URLSearchParams(window.location.search).get(i);
      if (p === "1") return !0;
      if (p === "0") return !1;
    }
    if (o && (o === "localStorage" || o === "both") && typeof window < "u")
      try {
        const h = window.localStorage.getItem(s);
        if (h === "1") return !0;
        if (h === "0") return !1;
      } catch {
      }
    return a;
  }, [o, a, s, i]), [d, u] = K.useState(c);
  K.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = K.useCallback(() => {
    t && n && u((h) => !h);
  }, [t, n]);
  return K.useEffect(() => {
    if (!(!o || typeof window > "u")) {
      if (o === "localStorage" || o === "both")
        try {
          window.localStorage.setItem(s, d ? "1" : "0");
        } catch {
        }
      if (o === "url" || o === "both") {
        const h = new URLSearchParams(window.location.search);
        h.set(i, d ? "1" : "0");
        const p = `${window.location.pathname}?${h.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", p);
      }
    }
  }, [d, o, s, i]), { collapsed: d, toggle: f };
}
function Xm(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: p,
    a11y: x,
    className: m,
    getId: g = (De) => De.id,
    orientation: S = "vertical",
    autoEnableThirdColumn: I = !0,
    onDrillChange: j,
    navigationInstructions: k = "Use arrow keys to navigate, Enter to open.",
    initialFocus: b = "first",
    skipFocusOnSelect: v = !1,
    skipAnnouncements: C = !1,
    onFocusChange: _,
    syncUrl: y = !1,
    urlParamSelected: w = "nsv",
    urlParamDrill: E = "nsvDrill",
    urlSyncDebounceMs: T = 0,
    lazySecondary: L = !1,
    navFooter: M,
    collapsibleNav: N = !1,
    navInitiallyCollapsed: D = !1,
    onNavCollapseChange: R,
    collapseToggleLabelShow: Z = "Show navigation",
    collapseToggleLabelHide: Q = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: J,
    persistNavCollapsed: F,
    navCollapsedStorageKey: $ = "nsvCollapsed",
    navCollapsedUrlParam: q = "nsvCollapsed",
    autoContentHeader: A,
    contentHeaderLevel: z = 2,
    renderContentHeader: P,
    contentSubheader: V,
    secondarySubheader: G
  } = e, { effectiveLayout: ee, hydrated: de, isAtLeastMedium: Y } = qm(
    c,
    I,
    !!l
  ), ae = Wm({
    enabled: y,
    paramSelected: w,
    paramDrill: E
  }), [le, be] = K.useState(
    () => ae.selectedId !== void 0 ? ae.selectedId : a
  ), pe = n !== void 0 ? n : le, Ie = t.find((De) => g(De) === pe), [Ve, Te] = K.useState(
    void 0
  );
  K.useEffect(() => {
    if (pe === void 0) return;
    Te(pe);
    const De = setTimeout(() => Te(void 0), 220);
    return () => clearTimeout(De);
  }, [pe]);
  const Le = K.useRef(null), _e = K.useRef(null), H = K.useRef(null), X = K.useRef(null), [se, he] = K.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [me, O] = K.useState(() => "nav"), [W, oe] = K.useState(0), te = () => [
    X.current,
    _e.current,
    H.current
  ].filter(Boolean), re = (De) => {
    const ze = te(), Je = Math.max(0, Math.min(De, ze.length - 1));
    ue(ze[Je]), oe(Je);
  }, ce = K.useCallback(
    (De) => De ? Array.from(De.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (Je) => !Je.hasAttribute("disabled") && Je.tabIndex !== -1
    ) : [],
    []
  ), ue = K.useCallback((De) => {
    if (De)
      try {
        De.focus({ preventScroll: !0 });
      } catch {
        De.focus();
      }
  }, []), ve = K.useCallback(
    (De) => {
      const ze = ce(_e.current);
      if (!ze.length) {
        ue(_e.current);
        return;
      }
      const Je = Math.max(0, Math.min(De, ze.length - 1)), rt = ze[Je];
      rt.focus(), setTimeout(() => {
        document.activeElement !== rt && (rt.focus(), setTimeout(() => {
          document.activeElement !== rt && rt.click();
        }, 10));
      }, 10), he((dt) => ({ ...dt, contentIndex: Je }));
      const St = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), ue(_e.current), rt.removeEventListener("keydown", St));
      };
      ze.forEach((dt) => {
        const pt = dt._escapeHandler;
        pt && dt.removeEventListener("keydown", pt);
      }), rt._escapeHandler = St, rt.addEventListener("keydown", St);
    },
    [ce]
  ), Ne = K.useCallback(
    (De) => {
      const ze = ce(H.current);
      if (!ze.length) {
        ue(H.current);
        return;
      }
      const Je = Math.max(0, Math.min(De, ze.length - 1)), rt = ze[Je];
      rt.focus(), setTimeout(() => {
        document.activeElement !== rt && (rt.focus(), setTimeout(() => {
          document.activeElement !== rt && rt.click();
        }, 10));
      }, 10), he((dt) => ({ ...dt, secondaryIndex: Je }));
      const St = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), ue(H.current), rt.removeEventListener("keydown", St));
      };
      ze.forEach((dt) => {
        const pt = dt._escapeHandler;
        pt && dt.removeEventListener("keydown", pt);
      }), rt._escapeHandler = St, rt.addEventListener("keydown", St);
    },
    [ce]
  ), He = (De) => {
    if (De.defaultPrevented) return;
    const ze = De.key, Je = De.target, rt = !!we.current && we.current.contains(Je), St = !!_e.current && _e.current.contains(Je), dt = !!H.current && H.current.contains(Je), pt = !!H.current, vr = Je === X.current || Je === _e.current || Je === H.current, Ba = Ye && (ee === "list" || ee === "cards"), wr = St && !!Je.closest(".nhs-navigation-split-view__header");
    if (me === "containers" && vr) {
      if (ze === "ArrowRight") {
        De.preventDefault();
        const et = te(), ut = Math.min(et.length - 1, W + 1);
        re(ut);
        return;
      }
      if (ze === "ArrowLeft") {
        De.preventDefault();
        const et = Math.max(0, W - 1);
        re(et);
        return;
      }
      if (ze === "Home") {
        De.preventDefault(), re(0);
        return;
      }
      if (ze === "End") {
        De.preventDefault(), re(te().length - 1);
        return;
      }
      if (ze === "Enter" || ze === " ") {
        if (De.preventDefault(), Je === X.current) {
          if (O("nav"), we.current) {
            const et = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            );
            (et[je >= 0 ? je : 0] || et[0])?.focus();
          }
        } else Je === _e.current ? (O("content"), ve(se.contentIndex)) : Je === H.current && (O("secondary"), Ne(se.secondaryIndex));
        return;
      }
      return;
    }
    if (ze === "Escape") {
      if (me === "content" || me === "secondary") {
        if (St || dt) {
          if (De.preventDefault(), O("nav"), we.current) {
            const ut = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            )[je >= 0 ? je : 0];
            setTimeout(() => ut?.focus(), 10);
          }
        } else if ((Je === _e.current || Je === H.current) && (De.preventDefault(), O("nav"), we.current)) {
          const ut = Array.from(
            we.current.querySelectorAll("[data-nav-item]")
          )[je >= 0 ? je : 0];
          setTimeout(() => ut?.focus(), 10);
        }
      }
      return;
    }
    if (ze === "Enter" || ze === " ") {
      if (Je.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (Je === _e.current && me === "content") {
        De.preventDefault(), De.stopPropagation(), ce(_e.current).length > 0 && setTimeout(() => {
          ve(se.contentIndex);
        }, 50);
        return;
      }
      if (Je === H.current && me === "secondary") {
        De.preventDefault(), De.stopPropagation(), ce(
          H.current
        ).length > 0 && setTimeout(() => {
          Ne(se.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ba && wr && !vr && (ze === "ArrowRight" || ze === "ArrowLeft")) {
      const et = ce(_e.current).filter(
        (ut) => ut.closest(".nhs-navigation-split-view__header")
      );
      if (et.length > 1) {
        const ut = et.indexOf(Je);
        if (ut >= 0) {
          const js = (ut + (ze === "ArrowRight" ? 1 : -1) + et.length) % et.length;
          De.preventDefault(), et[js].focus();
          return;
        }
      }
    }
    if (ze === "ArrowRight") {
      if (rt || me === "nav") {
        De.preventDefault(), O("content"), setTimeout(() => ue(_e.current), 10);
        return;
      }
      if (St || me === "content") {
        pt && (De.preventDefault(), O("secondary"), setTimeout(() => ue(H.current), 10));
        return;
      }
    }
    if (ze === "ArrowLeft") {
      if (dt || me === "secondary") {
        De.preventDefault(), O("content"), setTimeout(() => ue(_e.current), 10);
        return;
      }
      if (St || me === "content") {
        if (De.preventDefault(), O("nav"), we.current) {
          const ut = Array.from(
            we.current.querySelectorAll("[data-nav-item]")
          )[je >= 0 ? je : 0];
          setTimeout(() => ue(ut), 10);
        }
        return;
      }
    }
    if (ze === "Home" && !rt && (De.preventDefault(), O("nav"), we.current)) {
      const et = Array.from(
        we.current.querySelectorAll("[data-nav-item]")
      ), ut = et[je >= 0 ? je : 0] || et[0];
      setTimeout(() => ue(ut), 10);
    }
    if (ze === "End") {
      const et = pt ? H.current : _e.current;
      et && !et.contains(Je) && (De.preventDefault(), pt ? (O("secondary"), setTimeout(() => ue(H.current), 10)) : (O("content"), setTimeout(() => ue(_e.current), 10)));
    }
    if (ze === "ArrowDown" || ze === "ArrowUp") {
      if (Je === _e.current && ze === "ArrowDown") {
        De.preventDefault(), ce(_e.current).length > 0 && ve(0);
        return;
      }
      if (Je === H.current && ze === "ArrowDown") {
        De.preventDefault(), ce(
          H.current
        ).length > 0 && Ne(0);
        return;
      }
      if (St) {
        const et = ce(_e.current);
        if (et.length) {
          De.preventDefault();
          const ut = ze === "ArrowDown" ? 1 : -1, $t = (se.contentIndex + ut + et.length) % et.length;
          ve($t);
        }
      } else if (dt) {
        const et = ce(H.current);
        if (et.length) {
          De.preventDefault();
          const ut = ze === "ArrowDown" ? 1 : -1, $t = (se.secondaryIndex + ut + et.length) % et.length;
          Ne($t);
        }
      }
    }
  }, Ye = !!Ie && (ee === "list" || ee === "cards"), lt = K.useMemo(() => A === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : A === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : A === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: A.mobile !== void 0 ? A.mobile : !0,
    tablet: A.tablet || !1,
    desktop: A.desktop || !1
  }, [A]), Qe = de && Y && ee !== "three-column", ie = de && ee === "three-column", $e = !!l, U = ee === "three-column", [ne, xe] = K.useState(!1);
  K.useEffect(() => {
    U && ne && xe(!1);
  }, [U, ne]), K.useEffect(() => {
    ne && !U && (O("secondary"), oe(2), setTimeout(() => {
      ue(H.current);
    }, 50));
  }, [ne, U]), K.useEffect(() => {
    !ne && !U && me === "secondary" && (O("content"), oe(1), setTimeout(() => {
      ue(_e.current);
    }, 50));
  }, [ne, U, me]);
  const ye = !!Ie && (Ye && lt.mobile || !Ye && Qe && lt.tablet || !Ye && ie && lt.desktop) || $e && !U, Se = Ye ? "mobile" : Qe ? "tablet" : "desktop";
  K.useEffect(() => {
    if (!y) return;
    const De = ee === "three-column";
    let ze = !1;
    const Je = () => {
      ze || (ae.selectedId !== pe && ae.setSelectedId(pe), ae.drilledIn !== De && ae.setDrilledIn(De));
    };
    if (T && T > 0) {
      const rt = setTimeout(Je, T);
      return () => {
        ze = !0, clearTimeout(rt);
      };
    } else
      Je();
  }, [y, ae, pe, ee, T]), K.useEffect(() => {
    if (!y) return;
    const De = () => {
      const ze = new URLSearchParams(window.location.search), Je = ze.get(w);
      ze.get(E), be(Je === null ? void 0 : Je);
    };
    return window.addEventListener("popstate", De), () => window.removeEventListener("popstate", De);
  }, [
    y,
    w,
    E,
    c,
    l
  ]);
  const Be = K.useRef(0), Ce = K.useRef(
    null
  ), Me = K.useCallback(
    (De, ze) => {
      De !== pe && (n === void 0 && be(De), o?.(De, ze));
    },
    [n, o, pe]
  );
  K.useEffect(() => {
    if (!v && Ye && _e.current) {
      const De = setTimeout(() => ue(_e.current), 30);
      return () => clearTimeout(De);
    }
  }, [Ye, pe, v]);
  const we = K.useRef(null), [je, Ke] = K.useState(
    () => b === "first" ? 0 : -1
  );
  K.useEffect(() => {
    if (je < 0 || !we.current) return;
    const ze = Array.from(
      we.current.querySelectorAll("[data-nav-item]")
    )[je];
    if (ze) {
      document.activeElement !== ze && ue(ze), Be.current = je;
      const Je = t[je];
      _?.(
        Je ? g(Je) : void 0,
        Je,
        je
      );
    }
  }, [je, t, _, g]);
  const ot = (De) => {
    const ze = S === "vertical" ? "ArrowDown" : "ArrowRight", Je = S === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (De.key === "ArrowRight" && S === "vertical") {
      De.preventDefault(), ne ? (O("secondary"), setTimeout(() => {
        ue(H.current);
      }, 10)) : (O("content"), setTimeout(() => {
        ue(_e.current);
      }, 10));
      return;
    }
    if (De.key === ze)
      De.preventDefault(), Ke((rt) => Math.min(t.length - 1, rt + 1));
    else if (De.key === Je)
      De.preventDefault(), Ke((rt) => Math.max(0, rt - 1));
    else if (De.key === "Home")
      De.preventDefault(), Ke(0);
    else if (De.key === "End")
      De.preventDefault(), Ke(t.length - 1);
    else if (De.key === "Enter" || De.key === " ") {
      De.preventDefault();
      const rt = t[je];
      rt && !rt.disabled && Me(g(rt), rt);
    } else if (De.key.length === 1 && /[a-z0-9]/i.test(De.key)) {
      Ce.current || (Ce.current = { buffer: "", last: 0 });
      const rt = Date.now(), St = 700, dt = De.key.toLowerCase();
      rt - Ce.current.last > St ? Ce.current.buffer = dt : Ce.current.buffer += dt, Ce.current.last = rt;
      let pt = Ce.current.buffer;
      const vr = pt.split("").every(($t) => $t === pt[0]), Ba = t.map(
        ($t) => String($t.label || "").toLowerCase()
      );
      let wr = 0;
      je >= 0 && (wr = (je + 1) % t.length);
      let et;
      const ut = ($t, js) => {
        const Ms = t.length;
        for (let Ha = 0; Ha < Ms; Ha++) {
          const za = (wr + Ha) % Ms;
          if (!t[za].disabled && Ba[za].startsWith($t))
            return za;
        }
      };
      vr && pt.length > 1 ? et = ut(pt[0]) : (et = ut(pt), et === void 0 && pt.length > 1 && (et = ut(pt[pt.length - 1]), et !== void 0 && Ce.current && (Ce.current.buffer = pt[pt.length - 1]))), et !== void 0 && Ke(et);
    }
  }, { collapsed: Ae, toggle: Fe } = Jm({
    enabled: N,
    isAtLeastMedium: Y,
    initiallyCollapsed: D,
    persist: F,
    storageKey: $,
    urlParam: q,
    onChange: R
  }), Ue = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Ye ? "nhs-navigation-split-view--detail-active" : "",
    ee === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    N && Y && Ae ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), At = K.useRef(null);
  K.useEffect(() => {
    if (!C && At.current) {
      const De = Ie ? `Selected ${Ie.label}` : "Selection cleared";
      At.current.textContent = De;
    }
  }, [Ie, C]), K.useEffect(() => {
    if (!Ye && pe == null && we.current) {
      const ze = we.current.querySelectorAll("[data-nav-item]")[Be.current];
      ue(ze);
    }
  }, [Ye, pe]);
  const Dt = ee === "three-column", [Ra, vd] = K.useState(!1);
  K.useEffect(() => {
    Dt && !Ra && vd(!0);
  }, [Dt, Ra]);
  const Cs = K.useRef(Dt);
  return K.useEffect(() => {
    Cs.current !== Dt && (j?.(Dt), Cs.current = Dt);
  }, [Dt, j]), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Le,
      className: Ue,
      "aria-label": x?.rootLabel,
      "data-layout": ee,
      onKeyDown: He,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ye || void 0,
            style: { transform: Ye ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: X,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": x?.navigationLabel || "Items",
                  "data-collapsed": Ae || void 0,
                  tabIndex: 0,
                  children: [
                    N && Y && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Fe,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Ae ? Z : Q,
                        title: Ae ? Z : Q,
                        children: Ae ? B || /* @__PURE__ */ r.jsx(Vm, {}) : J || /* @__PURE__ */ r.jsx(Gm, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ r.jsx(
                      Zm,
                      {
                        layout: ee === "cards" ? "cards" : "list",
                        items: t,
                        getId: g,
                        selectedId: pe,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: s,
                        onSelect: (De, ze, Je) => {
                          Be.current = Je, Me(De, ze);
                        },
                        orientation: S,
                        initialFocus: b,
                        onFocusChange: _,
                        justSelectedId: Ve,
                        listRef: we,
                        onKeyDownList: ot,
                        navigationInstructions: k,
                        controlledFocusedIndex: je
                      }
                    ) }),
                    M && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: M
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: _e,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": x?.contentLabel || "Content",
                  "data-has-selection": !!Ie || void 0,
                  tabIndex: 0,
                  style: {
                    display: ne && !U ? "none" : void 0
                  },
                  children: [
                    ye && /* @__PURE__ */ r.jsx(
                      Ym,
                      {
                        show: ye,
                        label: Ie ? Ie.label : void 0,
                        contentHeaderLevel: z,
                        detailActive: Ye,
                        headerContext: Se,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => Me(void 0, void 0),
                        onForward: () => xe(!0),
                        renderContentHeader: P,
                        item: Ie,
                        contentSubheader: V,
                        tertiaryInlineActive: ne
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Ie)
                      }
                    )
                  ]
                }
              ),
              ee === "three-column" && (!L || Ra) || ne && !U ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: H,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": x?.secondaryContentLabel || "Secondary",
                  tabIndex: 0,
                  children: /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: "nhs-navigation-split-view__secondary-inner",
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                        minWidth: 0
                      },
                      children: [
                        ne && !U && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              width: "100%"
                            },
                            children: /* @__PURE__ */ r.jsxs(
                              "div",
                              {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0,
                                  flex: "1 1 auto",
                                  minWidth: 0
                                },
                                children: [
                                  /* @__PURE__ */ r.jsx(
                                    nr,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => xe(!1)
                                    }
                                  ),
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Ie && typeof Ie == "object" && "label" in Ie ? Ie.label : String(Ie) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Ie && G && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof G == "function" ? G(Ie) : G
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Ie) })
                      ]
                    }
                  )
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: At,
            "aria-live": "polite",
            "aria-atomic": "true",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)"
            }
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            "aria-live": "polite",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clip: "rect(0 0 0 0)"
            },
            children: Dt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Xm.displayName = "NavigationSplitView";
function Km({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderCard: a,
  className: o,
  ariaLabel: s = "Steps"
}) {
  const i = K.useRef(null), l = (c) => {
    if (e?.length)
      if (c.key === "ArrowLeft" || c.key === "ArrowUp") {
        c.preventDefault();
        const d = Math.max(0, t - 1);
        d !== t && n?.(d);
      } else if (c.key === "ArrowRight" || c.key === "ArrowDown") {
        c.preventDefault();
        const d = Math.min(e.length - 1, t + 1);
        d !== t && n?.(d);
      } else c.key === "Home" ? (c.preventDefault(), n?.(0)) : c.key === "End" && (c.preventDefault(), n?.(e.length - 1));
  };
  return /* @__PURE__ */ r.jsx("div", { className: o, "aria-label": s, role: "region", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-cards-viewport",
      role: "group",
      "aria-roledescription": "steps",
      tabIndex: 0,
      onKeyDown: l,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: i,
          className: "nhsfdp-cards-track",
          style: { transform: `translate3d(-${Math.max(0, t) * 100}%, 0, 0)` },
          children: e.map((c, d) => {
            const u = d === t;
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "nhsfdp-pane mobile-pane" + (u ? " is-current" : ""),
                role: "group",
                "aria-roledescription": "step",
                "aria-label": (c.label ?? `Step ${d + 1}`).toString(),
                "aria-hidden": !u,
                onClick: (f) => {
                  if (f.defaultPrevented) return;
                  const h = f.target;
                  h && h.closest(
                    'button, a, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"], [data-prevent-card-click]'
                  ) || n?.(d);
                },
                children: a(c, d, u)
              },
              d
            );
          })
        }
      )
    }
  ) });
}
function Qm({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderLabel: a,
  ariaLabel: o = "Breadcrumbs",
  className: s,
  style: i
}) {
  const l = e.map((d, u) => {
    const f = u === t, h = u < t, p = a ? a(d, u) : d.label ?? `Step ${u + 1}`;
    return {
      text: String(p),
      href: h ? "#" : void 0,
      active: f,
      attributes: h ? { "data-index": String(u) } : void 0
    };
  }), c = (d) => {
    const f = d.target.closest("a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink");
    if (!f) return;
    if (f.classList.contains("nhsuk-breadcrumb__backlink")) {
      d.preventDefault();
      const p = Math.max(0, t - 1);
      p !== t && n?.(p);
      return;
    }
    const h = f.getAttribute("data-index");
    if (h != null) {
      d.preventDefault();
      const p = parseInt(h, 10);
      Number.isNaN(p) || n?.(p);
    }
  };
  return /* @__PURE__ */ r.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ r.jsx(Il, { labelText: o, classes: s, items: l }) });
}
function eg(e) {
  const { up: t } = gs(), [n, a] = K.useState(!1);
  K.useEffect(() => a(!0), []);
  const o = n && t("medium") && !t("xlarge"), s = n && t("xlarge"), i = s ? "desktop" : o ? "tablet" : "mobile", l = K.useMemo(() => {
    if (!e.step || !e.layoutForStep)
      return i === "mobile" ? { panes: 1, showPrimaryNav: !1, showSecondaryNav: !1 } : i === "tablet" ? { panes: 2, showPrimaryNav: !0, showSecondaryNav: !1 } : { panes: 3, showPrimaryNav: !0, showSecondaryNav: !0 };
    try {
      return e.layoutForStep({
        step: e.step,
        index: e.index,
        breakpoint: i
      }) || {};
    } catch {
      return {};
    }
  }, [e.step, e.index, e.layoutForStep, i]);
  return { hydrated: n, breakpoint: i, isTablet: o, isDesktop: s, paneConfig: l };
}
function M1(e) {
  const {
    steps: t,
    currentStepId: n,
    defaultStepId: a,
    onStepChange: o,
    layoutForStep: s,
    renderStepCard: i,
    renderStepContent: l,
    renderSecondaryContent: c,
    renderSecondaryNav: d,
    renderBreadcrumbs: u,
    className: f,
    getId: h = (ie) => ie.id,
    enableTabletGrid: p = !1,
    isStepComplete: x,
    showMobileControls: m,
    currentSectionId: g,
    defaultSectionIdForStep: S,
    onSectionChange: I
  } = e, j = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, k = (...ie) => {
    j && console.log("[WorkflowSplitView]", ...ie);
  }, b = () => {
    if (typeof document > "u") return {};
    const ie = document.activeElement, $e = ie?.getAttribute?.("role");
    return {
      activeTag: ie?.tagName,
      activeId: ie?.id,
      activeRole: $e,
      activeClasses: ie?.className
    };
  }, [v, C] = Oe(
    a ?? (t[0] ? h(t[0]) : void 0)
  ), _ = n ?? v, y = t.findIndex((ie) => h(ie) === _), w = y >= 0 ? t[y] : t[0], [E, T] = Oe({}), L = (ie) => ie ? String(h(ie)) : "", M = fe((ie) => {
    if (!ie) return;
    try {
      const U = S?.(ie);
      if (U !== void 0) return U;
    } catch {
    }
    const $e = ie.sections && ie.sections[0];
    return $e ? $e.id : void 0;
  }, [S]), N = g ?? E[L(w)] ?? M(w), D = w && w.sections ? w.sections : void 0, R = D?.find((ie) => ie.id === N), Z = (ie) => {
    if (w) {
      const $e = L(w);
      g === void 0 && T((U) => ({ ...U, [$e]: ie })), I?.(ie, D?.find((U) => U.id === ie), w);
    }
  }, Q = (ie) => {
    k("navigateTo", String(ie)), n === void 0 && C(ie);
    const $e = t.find((U) => h(U) === ie);
    $e && o && o(ie, $e);
  }, B = u ? u({ steps: t, current: w, onNavigate: Q }) : /* @__PURE__ */ r.jsx(
    Qm,
    {
      steps: t,
      currentIndex: Math.max(0, y),
      onNavigate: (ie) => {
        const $e = t[ie];
        $e && Q(h($e));
      }
    }
  ), { hydrated: J, breakpoint: F, paneConfig: $ } = eg({
    step: w,
    index: y,
    layoutForStep: s
  }), q = n !== void 0 || a !== void 0 && t.length > 0 && t[0] && a !== h(t[0]), A = Ze(null), z = Ze(null), P = Ze(null), V = Ze(null), G = Ze(null), ee = Ze(0), de = Ze(!1), Y = Ze(!1), ae = Ze(null), [le, be] = Oe("nav"), pe = Ze("nav");
  nt(() => {
    pe.current = le, le !== "nav" && H(!1), le !== "content" && se(!1), le !== "secondary" && me(!1);
  }, [le]);
  const [Ie, Ve] = Oe(0), [Te, Le] = Oe(
    () => Math.max(0, y)
  ), [_e, H] = Oe(!1), [X, se] = Oe(!1), [he, me] = Oe(!1), O = fe((ie) => {
    if (ie) {
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
        ie.focus();
      }
      k("focusEl", { to: ie.tagName, id: ie.id, class: ie.className });
    }
  }, []), W = fe(() => {
    const ie = () => P.current;
    let $e = 0;
    const U = () => {
      const ne = ie();
      ne && document.activeElement !== ne && O(ne), $e += 1, $e < 6 && document.activeElement !== ie() && setTimeout(U, 0);
    };
    k("focusContentSoon:start", { attempts: $e }), U(), typeof queueMicrotask == "function" && queueMicrotask(U), requestAnimationFrame(U);
  }, [O]), oe = fe((ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (U) => !U.hasAttribute("disabled") && U.tabIndex !== -1
  ) : [], []), te = () => [
    z.current,
    P.current,
    V.current
  ].filter(Boolean), re = (ie, $e) => {
    if (!ie) return;
    const U = typeof document < "u" ? document.activeElement : null;
    if (U && ie.contains(U))
      try {
        U.blur(), k("blurActiveIfInside", { label: $e, root: ie.getAttribute("aria-label") || ie.tagName });
      } catch {
      }
  }, ce = () => {
    const ie = typeof document < "u" ? document.activeElement : null;
    if (ie && z.current && z.current.contains(ie))
      try {
        ie.blur(), k("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, ue = (ie) => {
    const $e = te(), U = Math.max(0, Math.min(ie, $e.length - 1));
    k("focusContainerByIndex", { idx: ie, clamped: U }), O($e[U]), Ve(U);
  }, ve = fe(
    (ie) => {
      let $e = 0;
      const U = ie ?? Te, ne = () => {
        const ge = G.current;
        if (!ge) return null;
        const ye = Array.from(ge.querySelectorAll("[data-nav-item]"));
        return ye[U] || ye[0] || null;
      }, xe = () => {
        if (pe.current !== "nav") {
          k("focusNavItemSoon: abort (mode changed)", { mode: pe.current });
          return;
        }
        const ge = ne();
        ge && document.activeElement !== ge && O(ge), $e += 1, $e < 6 && document.activeElement !== ge && setTimeout(xe, 0);
      };
      k("focusNavItemSoon:start", { index: U, ...b() }), xe(), typeof queueMicrotask == "function" && queueMicrotask(xe), requestAnimationFrame(xe);
    },
    [O, Te]
  );
  nt(() => {
    if (!J) return;
    F === "desktop" || p && F === "tablet" ? q ? (be("nav"), Ve(0), k("init: grid preselected → mode=nav", { containerIndex: 0 })) : (be("containers"), Ve(0), k("init: grid default → mode=containers", { containerIndex: 0 })) : (be("nav"), k("init: non-grid → mode=nav"));
  }, [J, F, q, p]), nt(() => () => {
    ae.current != null && (clearTimeout(ae.current), ae.current = null, k("cleanup: cleared nav bootstrap timeout"));
  }, []), nt(() => {
    const ie = Math.max(0, y);
    Le(ie), k("sync navFocusedIndex with currentIndex", { currentIndex: y, navFocusedIndex: ie });
  }, [y]), nt(() => {
    k("paneFocusMode →", le, b());
  }, [le]);
  const Ne = (ie) => {
    if (!(J && (F === "desktop" || p && F === "tablet"))) return;
    const U = ie.key, ne = ie.target, xe = ne.tagName.toLowerCase(), ge = xe === "input" || xe === "textarea" || xe === "select", ye = ne.getAttribute("role"), Se = ye === "textbox" || ye === "searchbox" || ye === "combobox", Be = ne.getAttribute("contenteditable"), Ce = ge || Se || Be && Be !== "false";
    if (k("onRootKeyDown", { key: U, tag: xe, role: ye, isEditable: Ce, paneFocusMode: le, containerIndex: Ie, ...b() }), Ce && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(U))
      return;
    const Me = !!G.current && G.current.contains(ne), we = !!P.current && P.current.contains(ne), je = !!V.current && V.current.contains(ne), Ke = ne === z.current || ne === P.current || ne === V.current, ot = !!V.current;
    if (Ke) {
      if (U === "ArrowLeft" && ne === P.current) {
        ie.preventDefault(), k("container: ArrowLeft on content container → nav item"), be("nav"), re(P.current, "from-content"), ee.current = Te, ve(Te);
        return;
      }
      if (U === "ArrowRight" && ne === P.current && ot) {
        ie.preventDefault(), k("container: ArrowRight on content container → secondary"), be("secondary"), re(P.current, "from-content"), se(!1), setTimeout(() => O(V.current), 10);
        return;
      }
      if (U === "ArrowRight" && ne === z.current) {
        ie.preventDefault(), k("container: ArrowRight on nav container → content"), be("content"), re(z.current, "from-nav"), H(!1), W();
        return;
      }
      if (U === "ArrowLeft" && ne === V.current) {
        ie.preventDefault(), k("container: ArrowLeft on secondary container → content"), be("content"), re(V.current, "from-secondary"), me(!1), W();
        return;
      }
      if (U === "ArrowRight") {
        ie.preventDefault(), k("container: ArrowRight → next container"), re(ne, "container-roving"), ne === z.current && H(!1), ne === P.current && se(!1), ne === V.current && me(!1), ue(Ie + 1);
        return;
      }
      if (U === "ArrowLeft") {
        ie.preventDefault(), k("container: ArrowLeft → prev container"), re(ne, "container-roving"), ne === z.current && H(!1), ne === P.current && se(!1), ne === V.current && me(!1), ue(Ie - 1);
        return;
      }
      if (U === "Home") {
        ie.preventDefault(), k("container: Home → first container"), re(ne, "container-roving"), ne === z.current && H(!1), ne === P.current && se(!1), ne === V.current && me(!1), ue(0);
        return;
      }
      if (U === "End") {
        ie.preventDefault(), k("container: End → last container"), re(ne, "container-roving"), ne === z.current && H(!1), ne === P.current && se(!1), ne === V.current && me(!1), ue(te().length - 1);
        return;
      }
      if (U === "Enter" || U === " ") {
        if (ie.preventDefault(), ne === z.current)
          be("nav"), k("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Te }), ee.current = Te, Y.current = !0, ve(Te);
        else if (ne === P.current) {
          be("content"), re(P.current, "descend-content"), se(!1);
          const Ae = oe(P.current);
          k("container: Enter/Space on content → focus first focusable", { count: Ae.length }), (Ae[0] || P.current)?.focus();
        } else if (ne === V.current) {
          be("secondary"), re(V.current, "descend-secondary"), me(!1);
          const Ae = oe(V.current);
          k("container: Enter/Space on secondary → focus first focusable", { count: Ae.length }), (Ae[0] || V.current)?.focus();
        }
        return;
      }
    }
    if (U === "Escape") {
      if (we || je) {
        ie.preventDefault(), be("containers"), k("Escape: from", we ? "content" : "secondary", "→ containers (focus container)"), we && re(P.current, "escape-ascend"), je && re(V.current, "escape-ascend"), we && setTimeout(() => O(P.current), 10), je && setTimeout(() => O(V.current), 10);
        return;
      }
      if (Me) {
        ie.preventDefault(), be("containers"), k("Escape: from nav → containers (focus nav container)"), ce(), O(z.current);
        return;
      }
      if (Ke) {
        ie.preventDefault(), be("containers"), k("Escape: on container (stay in containers)");
        return;
      }
    }
    if (U === "Enter" || U === " ") {
      if (ne === P.current && le === "content") {
        ie.preventDefault(), re(P.current, "descend-content");
        const Ae = oe(P.current);
        k("Enter/Space on content container in content mode"), (Ae[0] || P.current)?.focus();
        return;
      }
      if (ne === V.current && le === "secondary") {
        ie.preventDefault(), re(V.current, "descend-secondary");
        const Ae = oe(V.current);
        k("Enter/Space on secondary container in secondary mode"), (Ae[0] || V.current)?.focus();
        return;
      }
    }
    if (U === "ArrowRight") {
      if (Me || le === "nav") {
        ie.preventDefault(), be("content"), k("ArrowRight: from nav → content (focus content)"), re(z.current, "from-nav"), H(!1), W();
        return;
      }
      if (we || le === "content") {
        ot && (ie.preventDefault(), be("secondary"), k("ArrowRight: from content → secondary (focus secondary)"), re(P.current, "from-content"), se(!1), setTimeout(() => O(V.current), 10));
        return;
      }
    }
    if (U === "ArrowLeft") {
      if (je || le === "secondary") {
        ie.preventDefault(), k("ArrowLeft: from secondary → content (focus content)"), re(V.current, "from-secondary"), me(!1), W();
        return;
      }
      if (we || le === "content") {
        ie.preventDefault(), be("nav"), k("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Te }), ee.current = Te, re(P.current, "from-content"), se(!1), ve(Te);
        return;
      }
    }
    if ((U === "Enter" || U === " ") && (Me || le === "nav")) {
      ie.preventDefault();
      const Ae = G.current, Fe = Ae ? Array.from(Ae.querySelectorAll("[data-nav-item]")) : [];
      let Ue = ee.current ?? Te;
      if (Fe.length) {
        const At = document.activeElement, Dt = At ? Fe.indexOf(At) : -1;
        Dt >= 0 && (Ue = Dt);
      }
      Ue = Math.max(0, Math.min(Ue, Fe.length - 1)), Le(Ue), ee.current = Ue, k("Root: Enter/Space activate from nav context", { idx: Ue }), Q(h(t[Ue])), be("content"), pe.current = "content", de.current = !0, ce(), W();
      return;
    }
  }, He = () => {
    const ie = () => {
      de.current = !1, Y.current = !1;
    }, $e = (ge) => {
      if (!G.current) return;
      const ye = Array.from(G.current.querySelectorAll("[data-nav-item]"));
      if (ye.length) {
        if (ge.key === "ArrowDown") {
          ge.preventDefault(), ge.stopPropagation(), Y.current = !1, be("nav");
          const Se = ee.current ?? Te, Be = Math.min(ye.length - 1, Se + 1);
          Le(Be), ee.current = Be, ve(Be), k("PrimaryNav: ArrowDown", { from: Se, to: Be });
        } else if (ge.key === "ArrowUp") {
          ge.preventDefault(), ge.stopPropagation(), Y.current = !1, be("nav");
          const Se = ee.current ?? Te, Be = Math.max(0, Se - 1);
          Le(Be), ee.current = Be, ve(Be), k("PrimaryNav: ArrowUp", { from: Se, to: Be });
        } else if (ge.key === "Home") {
          ge.preventDefault(), ge.stopPropagation(), Y.current = !1;
          const Se = 0;
          Le(Se), ee.current = Se, ve(Se), k("PrimaryNav: Home", { to: Se });
        } else if (ge.key === "End") {
          ge.preventDefault(), ge.stopPropagation(), Y.current = !1;
          const Se = ye.length - 1;
          Le(Se), ee.current = Se, ve(Se), k("PrimaryNav: End", { to: Se });
        }
      }
    }, U = (ge) => {
    }, ne = (ge) => {
      if (ge.key !== "Enter" && ge.key !== " " || !G.current) return;
      const ye = Array.from(G.current.querySelectorAll("[data-nav-item]"));
      if (!ye.length) return;
      ge.preventDefault();
      let Se = -1;
      const Ce = ge.target?.closest?.("[data-nav-item]");
      Ce && (Se = ye.indexOf(Ce)), Se < 0 && (Se = ee.current ?? Te), Se = Math.max(0, Math.min(Se, ye.length - 1)), Le(Se), ee.current = Se, k("PrimaryNav: Enter/Space activate (capture)", { idx: Se }), Q(h(t[Se])), be("content"), pe.current = "content", de.current = !0, ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
    }, xe = (ge) => {
      if (ge.defaultPrevented) return;
      de.current = !1;
      const ye = ge.target;
      if (!ye) return;
      const Se = ye.closest("[data-nav-item]");
      if (!Se || !G.current || !G.current.contains(Se)) return;
      const Ce = Array.from(G.current.querySelectorAll("[data-nav-item]")).indexOf(Se);
      Ce < 0 || (Le(Ce), ee.current = Ce, k("PrimaryNav: click delegate activate", { idx: Ce }), Q(h(t[Ce])), be("content"), ce(), ae.current != null && (clearTimeout(ae.current), ae.current = null), W());
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: G,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(h(t[Math.max(0, Te)])),
        onKeyDownCapture: ne,
        onKeyDown: $e,
        onKeyUp: U,
        onPointerDown: ie,
        onMouseDown: ie,
        onClick: xe,
        children: t.map((ge, ye) => {
          const Se = h(ge), Be = ye === y, Ce = le === "nav" && ye === Te;
          return /* @__PURE__ */ r.jsx("li", { id: String(Se), role: "option", "aria-selected": Be, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              "data-nav-item": !0,
              tabIndex: Ce ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (Be ? " is-current" : "") + (Ce ? " is-focused" : ""),
              "aria-current": Be ? "step" : void 0,
              onPointerDown: ie,
              onMouseDown: ie,
              onKeyDown: (Me) => {
                if (Me.key === "Enter" || Me.key === " ") {
                  if (Me.preventDefault(), Y.current) {
                    Y.current = !1;
                    return;
                  }
                  ee.current = ye, de.current = !0, k("NavItem: onKeyDown activate", { i: ye, id: String(h(t[ye])) }), Q(h(t[ye])), be("content"), pe.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
                }
              },
              onKeyUp: (Me) => {
                if (Me.key === "Enter" || Me.key === " ") {
                  if (Y.current) {
                    Y.current = !1;
                    return;
                  }
                  ee.current = ye, k("NavItem: onKeyUp activate (fallback)", { i: ye, id: String(h(t[ye])) }), Q(h(t[ye])), be("content"), pe.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
                }
              },
              onClick: (Me) => {
                if (de.current) {
                  de.current = !1, Me.preventDefault(), Me.stopPropagation(), k("NavItem: ignored synthetic click after keyboard activation", { i: ye });
                  return;
                }
                Le(ye), ee.current = ye, k("NavItem: onClick select", { i: ye, id: String(Se) }), Q(Se), be("content"), pe.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
              },
              children: ge.label
            }
          ) }, String(Se));
        })
      }
    );
  }, Ye = () => {
    const ie = Math.max(0, y), $e = ie > 0, U = ie < t.length - 1, ne = m ? m(w) : x ? x(w) : !0;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      F === "tablet" ? B : null,
      ne && /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        $e ? /* @__PURE__ */ r.jsx(
          nr,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const xe = t[ie - 1];
              xe && Q(h(xe));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ r.jsx(nr, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        U ? /* @__PURE__ */ r.jsx(
          Yr,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const xe = t[ie + 1];
              xe && Q(h(xe));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ r.jsx(Yr, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ r.jsx(
        Km,
        {
          steps: t,
          currentIndex: ie,
          onNavigate: (xe) => {
            const ge = t[xe];
            ge && Q(h(ge));
          },
          renderCard: (xe, ge, ye) => i ? i(xe) : l(xe)
        }
      )
    ] });
  }, lt = (ie) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-workflow-grid panes-" + (ie.panes ?? 2),
      onKeyDown: Ne,
      ref: A,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (ie.showPrimaryNav ? 1 : 0) + 1 + (ie.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        ie.showPrimaryNav && /* @__PURE__ */ r.jsx(
          "aside",
          {
            ref: z,
            className: "nhsfdp-pane primary-nav" + (_e ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: ($e) => {
              $e.target === z.current && H(!0);
            },
            onBlur: ($e) => {
              $e.target === z.current && H(!1);
            },
            children: /* @__PURE__ */ r.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ r.jsx(He, {}) })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "main",
          {
            ref: P,
            className: "nhsfdp-pane content" + (X ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: ($e) => {
              $e.target === P.current && se(!0);
            },
            onBlur: ($e) => {
              $e.target === P.current && se(!1);
            },
            children: [
              B,
              /* @__PURE__ */ r.jsx("div", { role: "main", children: l(w, R) })
            ]
          }
        ),
        (() => {
          const $e = d ? d(w, D, R, (xe) => Z(xe)) : D && D.length > 0 ? /* @__PURE__ */ r.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: D.map((xe) => {
            const ge = N === xe.id;
            return /* @__PURE__ */ r.jsx("li", { role: "option", "aria-selected": ge, children: /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (ge ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => Z(xe.id),
                children: xe.label
              }
            ) }, String(xe.id));
          }) }) : void 0, U = c?.(w, R);
          return ie.showSecondaryNav && ($e || U) ? /* @__PURE__ */ r.jsx(
            "aside",
            {
              ref: V,
              className: "nhsfdp-pane secondary-nav" + (he ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (xe) => {
                xe.target === V.current && me(!0);
              },
              onBlur: (xe) => {
                xe.target === V.current && me(!1);
              },
              children: /* @__PURE__ */ r.jsxs("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                $e,
                U
              ] })
            }
          ) : null;
        })()
      ] })
    }
  );
  return J ? F === "mobile" || !p && F === "tablet" || ($.panes ?? 1) === 1 ? /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Ye() }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: lt($) }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ r.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: w, onNavigate: Q }) : null,
    w ? l(w, w?.sections?.find((ie) => ie.id === (S?.(w) ?? w?.sections?.[0]?.id))) : null
  ] }) }) });
}
const tg = typeof window < "u" && window.document ? K.useLayoutEffect : K.useEffect, Ni = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), ng = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, x = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: p,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && p(m), m.key === "Escape" && o && p(m);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ke("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: c, top: d, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...x,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: ke("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, rg = wd(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = Oe(() => /* @__PURE__ */ new Set()), [h, p] = Oe(() => /* @__PURE__ */ new Set()), x = Ze(/* @__PURE__ */ new Set()), m = fe((T) => u.has(T), [u]), g = fe((T) => {
    f((L) => {
      const M = new Set(L);
      return M.has(T.id) ? (M.delete(T.id), p((N) => {
        const D = new Set(N);
        return D.add(T.id), D;
      }), setTimeout(() => p((N) => {
        const D = new Set(N);
        return D.delete(T.id), D;
      }), 240), l?.(T.id, !1)) : (M.add(T.id), l?.(T.id, !0)), M;
    });
  }, [l]);
  tg(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const T = [];
    if (u.forEach((D) => {
      x.current.has(D) || T.push(D);
    }), x.current = new Set(u), !T.length) return;
    const L = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, M = T.map((D) => `.nhsuk-product-roadmap__inline-children[data-parent="${D}"] .nhsuk-product-roadmap__inline-child`).join(","), N = Array.from(document.querySelectorAll(M));
    if (N.length) {
      if (L) {
        N.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((D) => {
        (D.gsap || D.default || D).to(N, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        N.forEach((D) => {
          D.style.opacity = "1", D.style.transform = "translateY(0)";
        });
      });
    }
  }, [u, c, i]);
  const S = fe(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), I = ke("nhsuk-product-roadmap", o), j = Ni(n, 120, 1200, 400), k = Ni(a, 1, 6, 2), b = Re(() => e.map((T) => /* @__PURE__ */ new Date(T + " 01")), [e]), v = Re(() => {
    if (b.length === 0) {
      const M = /* @__PURE__ */ new Date();
      return [M, M];
    }
    const T = new Date(b[0]), L = ir.offset(new Date(b[b.length - 1]), 1);
    return [T, L];
  }, [b]), C = Re(() => hs().domain(v).range([0, b.length * j]), [v, b.length, j]), _ = fe((T) => {
    if (T.startDate) {
      const Q = new Date(T.startDate), B = new Date(T.endDate ?? T.startDate);
      B < Q && B.setTime(Q.getTime());
      const J = C(Q), F = ir.offset(new Date(B), 1);
      let $ = C(F);
      Number.isFinite($) || ($ = J + j);
      const q = Math.max(j * 0.25, $ - J), A = J / j, z = q / j;
      return { ...T, _pxLeft: J, _pxWidth: q, _startFraction: A, _spanColumns: z };
    }
    const L = T.date ?? 1, M = T.dateOffset ?? 0, N = T.length ?? 1, D = T.partialLength ?? 1, R = L - 1 + M, Z = N - 1 + D;
    return { ...T, _pxLeft: R * j, _pxWidth: Z * j, _startFraction: R, _spanColumns: Z };
  }, [C, j]), y = Re(() => t.map((T) => {
    const M = T.roadmapItems.map((D) => {
      const R = !D.childItems && D.children ? { ...D, childItems: D.children } : { ...D };
      return _(R);
    }).sort((D, R) => D._pxLeft !== R._pxLeft ? D._pxLeft - R._pxLeft : R._pxWidth - D._pxWidth), N = [];
    return M.forEach((D) => {
      const R = D._pxLeft, Z = D._pxLeft + D._pxWidth;
      let Q = N.findIndex((B) => B <= R);
      Q === -1 && (Q = N.length, N.push(0)), N[Q] = Z, D.verticalPosition = Q + 1;
    }), { ...T, roadmapItems: M, _laneCount: N.length };
  }), [t, _]), w = Re(() => y.map((T) => T._laneCount || 1), [y]), E = Re(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: I,
      style: { "--column-width": `${j}px`, gridTemplateColumns: E },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((T, L) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": L + 2, children: T }, `${T}-${L}`))
        ] }),
        y.map((T, L) => {
          const M = L + 2, N = w[L];
          let D, R = 0, Z = [];
          i && c === "inline" && (Z = T.roadmapItems.filter((F) => m(F.id) && F.childItems && F.childItems.length).map((F) => ({ id: F.id, lane: F.verticalPosition || 1, count: F.childItems.length })).sort((F, $) => F.lane - $.lane), R = Z.reduce((F, $) => F + $.count, 0));
          const Q = N + R;
          D = `calc((${Q} * var(--roadmap-item-block-height)) + (max(0, ${Q} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let J = 0;
          return Z.forEach((F) => {
            J += F.count, B[F.lane + 1] = J;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": M, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: T.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: D }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: T.roadmapItems.map((F, $) => {
              const q = (F.verticalPosition || 1) - 1, A = Z.filter((G) => G.lane - 1 < q).reduce((G, ee) => G + ee.count, 0), z = q + A, P = m(F.id), V = h.has(F.id);
              return /* @__PURE__ */ r.jsxs(tt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(ng, { item: F, maxLines: k, enableDrilldown: i, onExpand: g, isActive: P, topLaneIndex: z, laneOffset: A }),
                i && c === "inline" && (P || V) && F.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": F.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${F.title} child tasks`, children: F.childItems.map((G, ee) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let Y = F._pxLeft, ae = F._pxWidth;
                  if (G.startDate) {
                    const pe = new Date(G.startDate);
                    let Ie = G.endDate ? new Date(G.endDate) : new Date(pe);
                    Ie < pe && (Ie = new Date(pe));
                    const Ve = new Date(Ie);
                    Ve.setDate(Ve.getDate() + 1);
                    const Te = C(pe);
                    let Le = C(Ve);
                    (!Number.isFinite(Le) || Le <= Te) && (Le = Te + 6), Y = Te, ae = Math.max(6, Le - Te);
                  }
                  const be = z + 1 + ee;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ke("nhsuk-product-roadmap__inline-child", G.status && `nhsuk-product-roadmap__inline-child--status-${G.status}`, !P && V && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${Y}px`, width: `${ae}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${be})`, height: de, opacity: P ? 0 : void 0, transform: P ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: G.title })
                      ]
                    },
                    G.id ?? ee
                  );
                }) })
              ] }, F.id ?? $);
            }) }) })
          ] }, `${T.heading}-${L}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const T = Array.from(u)[0], L = t.flatMap((M) => M.roadmapItems).find((M) => M.id === T);
          return !L || !L.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${L.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: L.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: S, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: L.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: L.childItems.map((M, N) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: M.title }),
                M.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: M.content })
              ] }, M.id ?? N)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: S, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
rg.displayName = "ProductRoadmap";
function bt(e) {
  return function() {
    return e;
  };
}
const wo = Math.PI, _o = 2 * wo, fn = 1e-6, ag = _o - fn;
function Zl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function og(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Zl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class sg {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Zl : og(t);
  }
  moveTo(t, n) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, n) {
    this._append`L${this._x1 = +t},${this._y1 = +n}`;
  }
  quadraticCurveTo(t, n, a, o) {
    this._append`Q${+t},${+n},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, n, a, o, s, i) {
    this._append`C${+t},${+n},${+a},${+o},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, n, a, o, s) {
    if (t = +t, n = +n, a = +a, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, c = a - t, d = o - n, u = i - t, f = l - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > fn) if (!(Math.abs(f * c - d * u) > fn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - i, x = o - l, m = c * c + d * d, g = p * p + x * x, S = Math.sqrt(m), I = Math.sqrt(h), j = s * Math.tan((wo - Math.acos((m + h - g) / (2 * S * I))) / 2), k = j / I, b = j / S;
      Math.abs(k - 1) > fn && this._append`L${t + k * u},${n + k * f}`, this._append`A${s},${s},0,0,${+(f * p > u * x)},${this._x1 = t + b * c},${this._y1 = n + b * d}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), c = a * Math.sin(o), d = t + l, u = n + c, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > fn || Math.abs(this._y1 - u) > fn) && this._append`L${d},${u}`, a && (h < 0 && (h = h % _o + _o), h > ag ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > fn && this._append`A${a},${a},0,${+(h >= wo)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function ql(e) {
  let t = 3;
  return e.digits = function(n) {
    if (!arguments.length) return t;
    if (n == null)
      t = null;
    else {
      const a = Math.floor(n);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${n}`);
      t = a;
    }
    return e;
  }, () => new sg(t);
}
function Jl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xl(e) {
  this._context = e;
}
Xl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Kl(e) {
  return new Xl(e);
}
function Ql(e) {
  return e[0];
}
function ec(e) {
  return e[1];
}
function tc(e, t) {
  var n = bt(!0), a = null, o = Kl, s = null, i = ql(l);
  e = typeof e == "function" ? e : e === void 0 ? Ql : bt(e), t = typeof t == "function" ? t : t === void 0 ? ec : bt(t);
  function l(c) {
    var d, u = (c = Jl(c)).length, f, h = !1, p;
    for (a == null && (s = o(p = i())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, d, c), +t(f, d, c));
    if (p) return s = null, p + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : bt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : bt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : bt(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), l) : a;
  }, l;
}
function So(e, t, n) {
  var a = null, o = bt(!0), s = null, i = Kl, l = null, c = ql(d);
  e = typeof e == "function" ? e : e === void 0 ? Ql : bt(+e), t = typeof t == "function" ? t : bt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? ec : bt(+n);
  function d(f) {
    var h, p, x, m = (f = Jl(f)).length, g, S = !1, I, j = new Array(m), k = new Array(m);
    for (s == null && (l = i(I = c())), h = 0; h <= m; ++h) {
      if (!(h < m && o(g = f[h], h, f)) === S)
        if (S = !S)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), x = h - 1; x >= p; --x)
            l.point(j[x], k[x]);
          l.lineEnd(), l.areaEnd();
        }
      S && (j[h] = +e(g, h, f), k[h] = +t(g, h, f), l.point(a ? +a(g, h, f) : j[h], n ? +n(g, h, f) : k[h]));
    }
    if (I) return l = null, I + "" || null;
  }
  function u() {
    return tc().defined(o).curve(i).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : bt(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : bt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : bt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : bt(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : bt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : bt(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : bt(!!f), d) : o;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), d) : s;
  }, d;
}
function Ci(e) {
  return e < 0 ? -1 : 1;
}
function ji(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (Ci(s) + Ci(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Mi(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Qa(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function Zr(e) {
  this._context = e;
}
Zr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Qa(this, this._t0, Mi(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var n = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Qa(this, Mi(this, n = ji(this, e, t)), n);
          break;
        default:
          Qa(this, this._t0, n = ji(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Zr.prototype).point = function(e, t) {
  Zr.prototype.point.call(this, t, e);
};
function qr(e) {
  return new Zr(e);
}
function ig(e, t, n) {
  const a = ul(e, t);
  return hs().domain(a).range(n);
}
function Ii(e, t, n) {
  const [a, o] = ul(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Hr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = o - a, d = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - d), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Hr().domain([i, l]).nice().range(n);
}
function ko(e, t, n, a) {
  const o = tc().x(t).y(n);
  return a?.smooth !== !1 && o.curve(qr), o(e) ?? "";
}
function lg(e = {}) {
  const t = K.useRef(null), n = K.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = K.useState({ width: 0, height: 0 });
  K.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        o({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const nc = K.createContext(null);
function un() {
  return K.useContext(nc);
}
const cg = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = lg(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(nc.Provider, { value: l, children: o }) });
}, xs = K.createContext(null), kn = () => K.useContext(xs), dg = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = un(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, x = K.useMemo(() => e.flatMap((b) => b.data), [e]), m = K.useCallback(
    (b) => {
      if (a) return a(b);
      const v = b.x;
      return v instanceof Date ? v : new Date(v);
    },
    [a]
  ), g = c ?? 6, S = d ?? 6, I = K.useMemo(
    () => ig(x, m, [
      g,
      Math.max(0, h - g)
    ]),
    [x, m, h, g]
  ), j = K.useMemo(() => {
    const b = Math.max(0, u ?? 0), v = Math.max(0, p - (S + b));
    if (l) {
      const C = Ii([], (_) => _.y, [
        v,
        S
      ]);
      return C.domain(l), C;
    }
    return Ii(x, (C) => C.y, [v, S]);
  }, [x, p, l, S, u]), k = K.useMemo(
    () => ({
      xScale: I,
      yScale: j,
      getXTicks: (b = s) => I.ticks(b),
      getYTicks: (b = i) => j.ticks(b)
    }),
    [I, j, s, i]
  );
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: k, children: o });
}, Tr = 16, Lr = 6, ug = 16, fg = 4, hg = 6, pg = 3, mg = void 0, Di = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: d,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: p,
  yZeroBreak: x
}) => {
  const m = kn(), g = un(), S = t || (e === "x" ? m?.xScale : m?.yScale), I = n ?? (e === "x" ? 6 : 5), j = typeof o == "function", k = K.useMemo(() => {
    if (j || !p) return;
    const C = (_) => new Intl.DateTimeFormat(void 0, _);
    switch (p) {
      case "dayShortMonth":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return `${y.getDate()}
${C({ month: "short" }).format(y)}`;
        };
      case "dayShortMonthYear":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return `${y.getDate()}
${C({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "shortMonth":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return C({ month: "short" }).format(y);
        };
      case "shortMonthYear":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return `${C({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "hourMinute":
        return (_) => {
          const y = _ instanceof Date ? _ : new Date(_);
          return C({ hour: "2-digit", minute: "2-digit" }).format(y);
        };
      default:
        return;
    }
  }, [j, p]);
  let b = j ? o : k || ((C) => String(C));
  const v = K.useMemo(() => a && Array.isArray(a) ? a : S ? typeof S.ticks == "function" ? S.ticks(I) : S.domain ? S.domain() : [] : [], [S, I, a]);
  if (e === "x" && !j && !p && v.length && v.every((C) => C instanceof Date)) {
    const C = v[0], _ = v[v.length - 1], y = _.getTime() - C.getTime(), w = 24 * 3600 * 1e3, E = 365 * w, T = C.getFullYear() === _.getFullYear(), L = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (y < 2 * w) {
      const M = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      b = (N) => M.format(N);
    } else if (y < 32 * w)
      b = (M) => {
        const N = M;
        return `${N.getDate()} ${L.format(N)}`;
      };
    else if (y < E && T)
      b = (M) => L.format(M);
    else if (y < 2 * E) {
      const M = /* @__PURE__ */ new Set();
      b = (N) => {
        const D = N, R = D.getMonth();
        return M.has(R) || M.add(R), `${L.format(D)} ${D.getFullYear()}`;
      };
    } else
      b = (M) => String(M.getFullYear());
  }
  if (!S || !g) return null;
  if (e === "x") {
    const C = i ?? g.innerHeight, _ = typeof S.bandwidth == "function", y = _ ? S.bandwidth() : 0, w = (L) => {
      const M = S(L);
      return _ ? M + y / 2 : M;
    };
    let E = c ?? 0;
    if (u && c == null) {
      const L = v.map(
        (N) => b(N).replace(/\n.*/g, "")
      ), M = L.length ? L.reduce((N, D) => N + D.length, 0) / L.length : 0;
      E = Math.max(12, Math.round(M * 6 + 4));
    }
    const T = K.useMemo(() => {
      if (a && Array.isArray(a) || E <= 0) return v;
      const L = [];
      let M = -1 / 0;
      for (const N of v) {
        const D = w(N);
        D - M >= E && (L.push(N), M = D);
      }
      return L;
    }, [
      v,
      S,
      E,
      a,
      _,
      y
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${C})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          T.map((L, M) => {
            const N = b(L), D = d && N.length > d ? N.slice(0, Math.max(1, d - 1)) + "…" : N, R = h ? D.split(/\n/) : [D.replace(/\n/g, " ")], Z = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${w(L)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: Z,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        R.map((Q, B) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: B === 0 ? 0 : "1.1em", children: Q }, B)),
                        D !== N && /* @__PURE__ */ r.jsx("title", { children: N })
                      ]
                    }
                  )
                ]
              },
              L?.toString?.() || M
            );
          })
        ]
      }
    );
  }
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "),
      fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
      children: [
        (() => {
          const C = !!x?.enabled, _ = Math.max(Lr, x?.gapPx ?? Tr);
          if (!C)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: g.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, g.innerHeight - _);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        v.map((C, _) => {
          const y = b(C), w = d && y.length > d ? y.slice(0, Math.max(1, d - 1)) + "…" : y, E = h ? w.split(/\n/) : [w.replace(/\n/g, " ")];
          if (!!x?.enabled) {
            const L = Math.max(Lr, x?.gapPx ?? Tr), M = Math.max(0, g.innerHeight - L);
            if (S(C) > M - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${S(C)})`,
              children: [
                /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    x: -9,
                    dy: "0.32em",
                    textAnchor: "end",
                    className: "fdp-axis__tick",
                    fontFamily: "inherit",
                    children: [
                      E.map((L, M) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: M === 0 ? 0 : "1.1em", children: L }, M)),
                      w !== y && /* @__PURE__ */ r.jsx("title", { children: y })
                    ]
                  }
                )
              ]
            },
            C?.toString?.() || _
          );
        }),
        !!x?.enabled && (() => {
          const C = Math.max(Lr, x?.gapPx ?? Tr), _ = g.innerHeight, w = Math.max(0, _ - C), E = w, L = Math.max(4, _ - E), M = fg, N = hg, D = Math.max(1, Math.round(x?.zigZag?.amplitudePx ?? M)), R = Math.max(1, Math.round(x?.zigZag?.stepXPx ?? pg)), Z = x?.zigZag?.heightPx ?? mg, Q = Math.max(4, Math.round(Z ?? 0));
          let B, J;
          if (x?.zigZag?.heightPx && x.zigZag.heightPx > 0) {
            const V = Math.max(4, Math.min(L - 2, Q));
            B = Math.max(1, Math.floor(V / (2 * D))), J = Math.max(0, Math.min(V, B * 2 * D));
          } else typeof x?.zigZag?.cycles == "number" && x?.zigZag?.cycles > 0 ? (B = Math.max(1, Math.round(x.zigZag.cycles)), J = B * 2 * D, J = Math.min(J, L - 2), B = Math.max(1, Math.floor(J / (2 * D)))) : (B = N, J = Math.min(L - 2, B * 2 * D), B = Math.max(1, Math.floor(J / (2 * D))));
          const F = E + (L - J) / 2, $ = F + J;
          let q = "M0,0";
          const A = J > 0 ? Math.max(0, Math.floor((J - D) / (2 * D))) : 0, z = Math.max(0, (J - A * 2 * D) / 2), P = D > 0 ? R * (z / D) : 0;
          z > 0 && (q += ` l${P},${z}`);
          for (let V = 0; V < A; V++)
            q += ` l-${R},${D} l${R},${D}`;
          return z > 0 && (q += ` l-${P},${z}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: w, y2: F, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${F})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: q, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: $, y2: _, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${_})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -g.innerHeight / 2,
            y: -g.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: s
          }
        )
      ]
    }
  );
}, gg = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = kn(), i = un();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    )),
    e === "x" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: s.xScale(c),
        x2: s.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    ))
  ] });
}, xg = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, gr = {
  color: xg
}, yg = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Da = {
  color: yg
}, bg = [
  "#005eb8",
  "#0072ce",
  "#41b6e6",
  "#00a499",
  "#7c2855",
  "#330072",
  "#d5281b",
  "#ffb81c",
  "#fae100",
  "#4c6272",
  "#768692",
  "#aeb7bd"
];
let eo = null, to = null, no = null, rc = "optimized";
function vg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), o);
    if (typeof i == "string") return i;
  }, n = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const o = `color.data-viz.categorical.${a}`, s = t(o);
      if (!s) throw new Error(`Missing token ${o}`);
      n.push(s);
    }
    return n;
  } catch {
    return bg;
  }
}
function wg() {
  return eo || (eo = vg()), eo;
}
function _g(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ro(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Sg(e, t, n) {
  const a = ro(e), o = ro(t), s = ro(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, c = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function kg(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function ac(e) {
  const t = _g(e);
  if (!t) return null;
  const n = Sg(t.r, t.g, t.b);
  return kg(n.x, n.y, n.z);
}
function Ti(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function Ng() {
  const e = wg();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => ac(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += Ti(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > a && (a = u, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const c of o) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const p = Ti(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Cg() {
  return to || (to = Ng()), to;
}
function jg(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, c = i(a) * 100, d = i(s) * 108.883;
  return { X: l, Y: c, Z: d };
}
function Mg(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Ig(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Dg(e, t) {
  const n = ac(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = jg(a, n.a, n.b), l = Mg(o, s, i);
  return Ig(l.r, l.g, l.b);
}
function Tg() {
  const e = Cg(), n = [12, -12, 24, -24].map((o) => e.map((s) => Dg(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function Lg() {
  return (!no || Ag()) && (no = Tg(), oc = rc), no;
}
let oc = null;
function Ag() {
  return oc !== rc;
}
function Bt(e) {
  const t = Lg();
  return t[e % t.length];
}
let An = null, lr = null, cr = null, dr = null;
function $g() {
  const e = gr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    An = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      An.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    lr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (lr[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    dr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (dr[s] = i);
    }), cr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (cr[s] = i);
    });
  }
}
function Ta() {
  (!An || !lr || !cr || !dr) && $g();
}
function wn(e) {
  return Ta(), An ? An[e % An.length] : "#212b32";
}
function Eg(e) {
  return Ta(), lr ? lr[e] : void 0;
}
function Jr(e, t) {
  return Eg(e) || wn(t);
}
const No = ["low", "moderate", "high", "critical"];
let ao = null;
function Fg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return No.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function sc() {
  return ao || (ao = Fg()), ao;
}
function Pg(e) {
  return sc()[e.toLowerCase()];
}
function Rg(e, t) {
  return Pg(e) || sc()[No[t % No.length]] || Bt(t);
}
function Bg(e) {
  return Ta(), cr ? cr[e] : void 0;
}
function Hg(e, t) {
  return Bg(e) || wn(t);
}
const Co = ["trust", "ambulance", "icb", "region"];
let oo = null;
function zg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Co.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function ic() {
  return oo || (oo = zg()), oo;
}
function Og(e) {
  return ic()[e.toLowerCase()];
}
function Ug(e, t) {
  return Og(e) || ic()[Co[t % Co.length]] || Bt(t);
}
function Wg(e) {
  return Ta(), dr ? dr[e] : void 0;
}
function Gg(e, t) {
  return Wg(e) || wn(t);
}
let so = null;
const Vg = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Yg(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Zg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return Vg.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function qg() {
  return so || (so = Zg()), so;
}
function Jg(e) {
  return qg()[Yg(e)];
}
function $n(e, t) {
  return Jg(e) || Bt(t);
}
const lc = K.createContext(null), xr = () => K.useContext(lc), I1 = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = K.useState(() => new Set(e)), i = n !== void 0, l = K.useMemo(() => i ? new Set(n) : o, [i, n, o]), c = K.useCallback((u) => {
    i || s(new Set(u)), a?.(Array.from(u));
  }, [i, a]), d = K.useMemo(() => ({
    hiddenIds: l,
    isHidden: (u) => l.has(u),
    toggle: (u) => {
      const f = new Set(l);
      f.has(u) ? f.delete(u) : f.add(u), c(f);
    },
    showOnly: (u) => {
      c(/* @__PURE__ */ new Set());
    },
    showAll: () => c(/* @__PURE__ */ new Set()),
    setHidden: (u) => c(new Set(Array.isArray(u) ? u : Array.from(u)))
  }), [l, c]);
  return /* @__PURE__ */ r.jsx(lc.Provider, { value: d, children: t });
}, cc = K.createContext(null), rn = () => K.useContext(cc), Xg = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = kn(), o = xr(), [s, i] = K.useState(null), l = K.useRef(/* @__PURE__ */ new Map()), [c, d] = K.useState([]), u = K.useCallback(
    (C, _) => {
      l.current.set(C, _);
    },
    []
  ), f = K.useCallback((C) => {
    l.current.delete(C);
  }, []), h = K.useCallback(
    (C, _) => {
      if (!a) return;
      const { xScale: y, yScale: w } = a;
      let E = null, T = 1 / 0;
      l.current.forEach((L, M) => {
        L.forEach((N, D) => {
          const R = y(N.x), Z = w(N.y), Q = R - C, B = Z - _, J = Math.sqrt(Q * Q + B * B);
          J < T && (T = J, E = {
            seriesId: M,
            index: D,
            x: N.x,
            y: N.y,
            clientX: R,
            clientY: Z
          });
        });
      }), E && T <= t ? i(E) : i(null);
    },
    [a, t]
  ), p = K.useCallback(() => i(null), []);
  K.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: C, yScale: _ } = a, y = [];
    l.current.forEach((w, E) => {
      w.forEach((T, L) => {
        (s.x instanceof Date && T.x instanceof Date ? T.x.getTime() === s.x.getTime() : T.x === s.x) && y.push({
          seriesId: E,
          index: L,
          x: T.x,
          y: T.y,
          clientX: C(T.x),
          clientY: _(T.y)
        });
      });
    }), y.sort((w, E) => w.seriesId.localeCompare(E.seriesId)), d(y);
  }, [s, a]);
  const x = K.useCallback(
    (C) => {
      if (!s) return;
      const _ = l.current.get(s.seriesId);
      if (!_) return;
      let y = s.index + C;
      if (y < 0 || y >= _.length) {
        if (!n) return;
        y = (y + _.length) % _.length;
      }
      const w = _[y];
      if (!a) return;
      const { xScale: E, yScale: T } = a;
      i({
        seriesId: s.seriesId,
        index: y,
        x: w.x,
        y: w.y,
        clientX: E(w.x),
        clientY: T(w.y)
      });
    },
    [s, a, n]
  ), m = K.useCallback(
    (C) => {
      let _ = Array.from(l.current.keys());
      if (o && (_ = _.filter((R) => !o.isHidden(R))), _.length === 0) return;
      if (!s) {
        const R = _[0], Z = l.current.get(R);
        if (!Z || !a) return;
        const { xScale: Q, yScale: B } = a, J = Z[0];
        i({
          seriesId: R,
          index: 0,
          x: J.x,
          y: J.y,
          clientX: Q(J.x),
          clientY: B(J.y)
        });
        return;
      }
      const y = _.indexOf(s.seriesId);
      if (y === -1) return;
      let w = y + C;
      if (w < 0 || w >= _.length) {
        if (!n) return;
        w = (w + _.length) % _.length;
      }
      const E = _[w], T = l.current.get(E);
      if (!T || !a) return;
      const L = Math.min(s.index, T.length - 1), M = T[L], { xScale: N, yScale: D } = a;
      i({
        seriesId: E,
        index: L,
        x: M.x,
        y: M.y,
        clientX: N(M.x),
        clientY: D(M.y)
      });
    },
    [s, a, n, o]
  ), g = K.useCallback(() => {
    let C = Array.from(l.current.keys());
    if (o && (C = C.filter((L) => !o.isHidden(L))), C.length === 0) return;
    const _ = s ? s.seriesId : C[0], y = l.current.get(_);
    if (!y || y.length === 0 || !a) return;
    const w = y[0], { xScale: E, yScale: T } = a;
    i({
      seriesId: _,
      index: 0,
      x: w.x,
      y: w.y,
      clientX: E(w.x),
      clientY: T(w.y)
    });
  }, [s, a, o]), S = K.useCallback(() => {
    let C = Array.from(l.current.keys());
    if (o && (C = C.filter((M) => !o.isHidden(M))), C.length === 0) return;
    const _ = s ? s.seriesId : C[0], y = l.current.get(_);
    if (!y || y.length === 0 || !a) return;
    const w = y.length - 1, E = y[w], { xScale: T, yScale: L } = a;
    i({
      seriesId: _,
      index: w,
      x: E.x,
      y: E.y,
      clientX: T(E.x),
      clientY: L(E.y)
    });
  }, [s, a, o]), I = K.useCallback(
    () => x(1),
    [x]
  ), j = K.useCallback(
    () => x(-1),
    [x]
  ), k = K.useCallback(
    () => m(1),
    [m]
  ), b = K.useCallback(
    () => m(-1),
    [m]
  ), v = K.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: I,
      focusPrevPoint: j,
      focusNextSeries: k,
      focusPrevSeries: b,
      focusFirstPoint: g,
      focusLastPoint: S
    }),
    [
      s,
      c,
      h,
      p,
      u,
      f,
      I,
      j,
      k,
      b,
      g,
      S
    ]
  );
  return /* @__PURE__ */ r.jsx(cc.Provider, { value: v, children: e });
}, Kg = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = kn();
  if (!h) return null;
  const { xScale: p, yScale: x } = h, g = xr()?.isHidden(e.id) ?? !1, S = g && l === "fade";
  if (g && l === "remove")
    return null;
  const I = rn();
  K.useEffect(() => {
    if (!I) return;
    const _ = e.data.map((y) => ({ x: i(y), y: y.y }));
    return I.registerSeries(e.id, _), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, i]);
  const j = K.useMemo(
    () => ko(
      e.data,
      (_) => p(i(_)),
      (_) => x(_.y),
      { smooth: d }
    ),
    [e.data, p, x, i, d]
  ), k = K.useMemo(() => {
    if (!e.data.length) return "";
    const [_] = x.domain(), y = So().x((w) => p(i(w))).y0(() => x(_)).y1((w) => x(w.y));
    return d && y.curve(qr), y(e.data) || "";
  }, [e.data, p, x, i, d]), b = f && f[t], v = e.color || b || (n === "region" ? $n(e.id, t) : Bt(t)), C = n === "region" ? Jr(e.id, t) : wn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: S ? 0.25 : 1,
      "aria-hidden": S ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: k,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: j,
            fill: "none",
            stroke: v,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((_, y) => {
          const w = p(i(_)), E = x(_.y), T = o ? 0 : -1, L = !S && (o && y === s || I?.focused?.seriesId === e.id && I.focused.index === y), M = () => {
            I && !S && I.setFocused({
              seriesId: e.id,
              index: y,
              x: i(_),
              y: _.y,
              clientX: w,
              clientY: E
            });
          }, N = () => {
            I && I.focused?.seriesId === e.id && I.focused.index === y && I.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: w,
              cy: E,
              r: L ? 5 : 3.5,
              stroke: L ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : C,
              strokeWidth: L ? 2 : 1,
              fill: L ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : v,
              className: "fdp-line-point",
              tabIndex: S ? -1 : T,
              "aria-label": `${e.label || e.id} ${i(_).toDateString()} value ${_.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: M,
              onFocus: M,
              onMouseLeave: N,
              onBlur: N
            },
            y
          );
        })
      ]
    }
  );
}, Qg = ({ polite: e = !0, format: t }) => {
  const n = rn(), [a, o] = K.useState(""), s = K.useRef("");
  return K.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : e0(i.seriesId, i.x, i.y, i.index);
    if (c !== s.current) {
      s.current = c, o("");
      const d = setTimeout(() => o(c), 10);
      return () => clearTimeout(d);
    }
  }, [n?.focused, t]), /* @__PURE__ */ r.jsx(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: a
    }
  );
};
function e0(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const D1 = () => {
  const e = rn(), t = un();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), c = i + 8, d = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), x = p ? parseInt(p[0], 10) - 1 : 0, m = Bt(x >= 0 ? x : 0) || "#005eb8", g = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: g, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: g, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const I = a.map((C) => `${C.seriesId}: ${C.y}`), j = [h, ...I], k = j.reduce((C, _) => Math.max(C, _.length), 0), b = Math.max(90, k * 6.2 + 16), v = 16 * j.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - v, rx: 4, ry: 4, width: b, height: v, fill: "#212b32", opacity: 0.92 }),
        j.map((C, _) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - v + 6 + 16 * (_ + 0.7), fill: "#fff", fontSize: 12, children: C }, _))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, T1 = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const d = xr(), u = !!(d && !a && !l && s === void 0), f = a || u, h = e || [], p = s !== void 0, [x, m] = K.useState(new Set(i)), g = p ? new Set(s) : x, [S, I] = K.useState(""), j = (k) => {
    if (u && d) {
      const T = d.isHidden(k);
      d.toggle(k);
      const M = h.find((D) => D.id === k)?.label || k, N = c ? c(k, T, M) : `${M} ${T ? "shown" : "hidden"}`;
      I(N);
      return;
    }
    if (!f) return;
    const b = new Set(g), v = b.has(k);
    v ? b.delete(k) : b.add(k), p || m(b);
    const C = h.filter((T) => !b.has(T.id)).map((T) => T.id), _ = Array.from(b);
    l?.(C, _);
    const w = h.find((T) => T.id === k)?.label || k, E = c ? c(k, v, w) : `${w} ${v ? "shown" : "hidden"}`;
    I(E);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((k, b) => {
      const v = k.palette || t, C = k.color || (v === "region" ? $n(k.id, b) : v === "severity" ? Rg(k.id, b) : v === "org-level" ? Ug(k.id, b) : Bt(b));
      let _ = k.stroke || (v === "region" ? Jr(k.id, b) : v === "severity" ? Hg(k.id, b) : v === "org-level" ? Gg(k.id, b) : wn(b));
      if (o && _) {
        const E = _.trim().toLowerCase();
        (E === "#fff" || E === "#ffffff" || E === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(E)) && (_ = "#212b32");
      }
      const y = u && d ? d.isHidden(k.id) : g.has(k.id), w = f ? {
        "aria-pressed": !y,
        "aria-label": `${k.label} (${y ? "show" : "hide"})`,
        onClick: () => j(k.id)
      } : { "aria-label": k.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: C,
              backgroundImage: k.patternDataUrl ? `url(${k.patternDataUrl})` : void 0,
              backgroundSize: k.patternDataUrl ? "auto" : void 0,
              borderColor: _
            },
            ...w
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: k.label })
      ] }, k.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: S })
  ] });
}, L1 = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = kn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, m = xr()?.isHidden(e.id) ?? !1, g = m && s === "fade";
  if (m && s === "remove") return null;
  const S = rn();
  K.useEffect(() => {
    if (!S) return;
    const C = e.data.map((_) => ({ x: a(_), y: _.y }));
    return S.registerSeries(e.id, C), () => S.unregisterSeries(e.id);
  }, [S, e.id, e.data, a]);
  const I = u && u[t], j = e.color || I || (n === "region" ? $n(e.id, t) : Bt(t)), k = K.useMemo(() => c && c.length === e.data.length ? ko(
    e.data,
    (C) => h(a(C)),
    (C) => {
      const _ = e.data.indexOf(C);
      return p(c[_].y1);
    },
    { smooth: l }
  ) : ko(
    e.data,
    (C) => h(a(C)),
    (C) => p(C.y),
    { smooth: l }
  ), [e.data, c, h, p, a, l]), b = K.useMemo(() => {
    if (c && c.length === e.data.length) {
      const E = So().x((T) => h(a(T))).y0((T, L) => p(c[L].y0)).y1((T, L) => p(c[L].y1));
      return l && E.curve(qr), E(e.data) || "";
    }
    const [C, _] = p.domain();
    let y = i;
    y < C ? y = C : y > _ && (y = _);
    const w = So().x((E) => h(a(E))).y0(() => p(y)).y1((E) => p(E.y));
    return l && w.curve(qr), w(e.data) || "";
  }, [e.data, c, h, p, a, i, l]), v = K.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: v, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: j, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: j, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: b,
            fill: d ? `url(#${v})` : j,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: k, fill: "none", stroke: j, strokeWidth: 1 })
      ]
    }
  );
}, A1 = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: d = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: p,
  stacked: x,
  gapRatio: m = 0.15,
  minBarWidth: g,
  gradientFill: S = !1,
  gradientStrokeMatch: I = !0,
  opacity: j = 1,
  fadedOpacity: k = 0.25,
  flatFillOpacity: b = 1,
  colors: v
}) => {
  const C = Math.max(0, m), _ = kn(), y = un();
  if (!_ || !y) return null;
  const { xScale: w, yScale: E } = _, L = xr()?.isHidden(e.id) ?? !1, M = L && f === "fade";
  if (L && f === "remove") return null;
  const N = rn();
  K.useEffect(() => {
    if (!N) return;
    const G = e.data.map((ee) => ({ x: o(ee), y: ee.y }));
    return N.registerSeries(e.id, G), () => N.unregisterSeries(e.id);
  }, [N, e.id, e.data, o]);
  const D = typeof w.bandwidth == "function", R = D ? w.bandwidth() : void 0, Z = K.useMemo(() => {
    if (R != null) return R;
    const G = p && p.length ? p : [e], ee = [];
    G.forEach((le) => {
      le.data.forEach((be) => {
        const pe = w(o(be));
        Number.isFinite(pe) && ee.push(pe);
      });
    });
    const de = ee.sort((le, be) => le - be);
    if (de.length <= 1) return 40;
    const Y = [];
    for (let le = 1; le < de.length; le++)
      Y.push(de[le] - de[le - 1]);
    return Y.sort((le, be) => le - be), (Y[Math.floor(Y.length / 2)] || 40) * i;
  }, [e.data, p, w, o, i, R]), { basePerBar: Q } = K.useMemo(() => {
    if (D) {
      const de = Z, Y = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), ae = e.barWidth ?? c;
      let le = ae ? Math.min(ae, de) : Y;
      if (d) {
        const be = de * Math.min(1, Math.max(0.05, u)), pe = Math.max(
          1,
          (be - l * (n - 1)) / n
        );
        le = ae ? Math.min(le, pe) : pe;
      }
      return { basePerBar: le };
    }
    const G = e.barWidth ?? c, ee = Math.max(
      1,
      (Z - l * (n - 1)) / n
    );
    if (d) {
      const de = p && p.length ? p : [e], Y = [];
      de.forEach(
        (Ve) => Ve.data.forEach((Te) => {
          const Le = w(o(Te));
          Number.isFinite(Le) && Y.push(Le);
        })
      ), Y.sort((Ve, Te) => Ve - Te);
      const ae = [];
      for (let Ve = 1; Ve < Y.length; Ve++)
        ae.push(Y[Ve] - Y[Ve - 1]);
      ae.sort((Ve, Te) => Ve - Te);
      const be = (ae[Math.floor(ae.length / 2)] || Z) * Math.min(1, Math.max(0.05, u)), pe = Math.max(
        1,
        (be - l * (n - 1)) / n
      );
      return { basePerBar: G ? Math.min(G, pe) : pe };
    }
    return G ? { basePerBar: Math.min(G, ee) } : { basePerBar: ee };
  }, [
    D,
    Z,
    l,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    w,
    o
  ]), B = K.useMemo(() => {
    if (D) return [];
    const G = [];
    return (p && p.length ? p : [e]).forEach(
      (de) => de.data.forEach((Y) => {
        const ae = w(o(Y));
        Number.isFinite(ae) && G.push(ae);
      })
    ), G.sort((de, Y) => de - Y), Array.from(new Set(G));
  }, [D, p, e, w, o]), J = K.useMemo(() => {
    if (D)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: y.innerWidth }
      ];
    const G = [];
    for (let ee = 0; ee < B.length; ee++) {
      const de = B[ee], Y = ee === 0 ? 0 : (B[ee - 1] + de) / 2, ae = ee === B.length - 1 ? y.innerWidth : (de + B[ee + 1]) / 2;
      G.push({
        center: de,
        left: Math.max(0, Y),
        right: Math.min(y.innerWidth, ae)
      });
    }
    return G;
  }, [D, B, y.innerWidth]), F = K.useMemo(() => {
    if (D || !J.length)
      return;
    const G = Math.min(1, Math.max(0.05, i)), ee = J.map((be) => Math.max(2, be.right - be.left)), de = ee.map(
      (be) => Math.max(2, Math.min(be - 1, be * G))
    );
    let Y = Math.min(...de);
    if (g)
      if (n <= 1) {
        const be = Math.min(...ee.map((pe) => pe - 1));
        be >= g && Y < g && (Y = Math.min(be, g));
      } else {
        const be = Math.min(...ee.map((Ie) => Ie - 1)), pe = g * n + (n - 1) * (g * C);
        pe <= be && Y < pe && (Y = pe);
      }
    if (n <= 1)
      return g && Y < g && ee.every((pe) => pe >= g) ? { groupWidth: g, barWidth: g } : { groupWidth: Y, barWidth: Y };
    let ae = Y / (n + (n - 1) * C);
    return ae < 1 && (ae = 1), g && ae < g && g * n + (n - 1) * (g * C) <= Y && (ae = g), { groupWidth: ae * n + (n - 1) * (ae * C), barWidth: ae };
  }, [
    D,
    J,
    i,
    n,
    C,
    g
  ]), $ = v && v[t] ? v[t] : void 0, q = e.color || $ || (a === "region" ? $n(e.id, t) : Bt(t)), A = a === "region" ? Jr(e.id, t) : wn(t), z = I && (e.color || $) ? q : A, P = Number.isFinite(E(0)) ? E(0) : E.range()[0], V = K.useId();
  return x && x.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: M ? k : j,
      "aria-hidden": M ? !0 : void 0,
      children: [
        S && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: V,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: q, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: q,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: q,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((G, ee) => {
          const de = o(G), Y = w(D ? G.x : de);
          let ae, le;
          if (D)
            ae = Z, le = Y;
          else {
            const X = J.find(
              (se) => Math.abs(se.center - Y) < 0.5
            );
            if (!X || !F)
              ae = Q, le = Y - Q / 2;
            else {
              const { groupWidth: se } = F;
              ae = se;
              let he = Y - se / 2;
              he < X.left && (he = X.left), he + se > X.right && (he = Math.max(X.left, X.right - se)), le = he;
            }
          }
          const be = x[ee], pe = E(be.y0), Ie = E(be.y1), Ve = Math.min(pe, Ie), Te = Math.abs(Ie - pe) || 1;
          if (!D && g && ae < g) {
            const X = J.find(
              (se) => Math.abs(se.center - Y) < 0.5
            );
            if (X) {
              const se = Math.max(2, X.right - X.left - 1), he = Math.min(se, g);
              he > ae && (ae = he, le = Math.max(
                X.left,
                Math.min(X.right - ae, Y - ae / 2)
              ));
            }
          }
          const Le = !M && N?.focused?.seriesId === e.id && N.focused.index === ee, _e = () => {
            !N || M || N.setFocused({
              seriesId: e.id,
              index: ee,
              x: de,
              y: be.y1 - be.y0,
              clientX: le + ae / 2,
              clientY: Ve
            });
          }, H = () => {
            N?.focused?.seriesId === e.id && N.focused.index === ee && N.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: le,
              y: Ve,
              width: ae,
              height: Te,
              fill: S ? `url(#${V})` : q,
              ...S ? {} : { fillOpacity: b },
              stroke: Le ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : S && I ? q : void 0,
              strokeWidth: Le ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: M || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${be.y1 - be.y0}`,
              onMouseEnter: _e,
              onFocus: _e,
              onMouseLeave: H,
              onBlur: H
            },
            ee
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: M ? k : j,
      "aria-hidden": M ? !0 : void 0,
      children: [
        S && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: V,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: q, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: q,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: q,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((G, ee) => {
            const Y = v && v[ee] || (a === "region" ? $n(String(G.x), ee) : Bt(ee)), ae = `${V}-${ee}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ae,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: Y, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: Y, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: Y, stopOpacity: 0.06 })
                ]
              },
              ae
            );
          })
        ] }),
        e.data.map((G, ee) => {
          const de = o(G), Y = w(D ? G.x : de);
          let ae, le;
          if (D) {
            const O = Z;
            if (n <= 1)
              le = O, ae = Y;
            else {
              le = Math.max(
                1,
                O / (n + (n - 1) * C)
              );
              const W = le * C, oe = le * n + W * (n - 1);
              ae = Y + (O - oe) / 2 + t * (le + W);
            }
          } else {
            const O = J.find((W) => W.center === Y);
            if (!O || !F)
              le = Q, ae = Y - Q / 2, g && le < g && (le = g, ae = Y - le / 2);
            else {
              const { barWidth: W } = F;
              le = W;
              const oe = n > 1 ? W * C : 0, te = le * n + oe * (n - 1);
              let re = Y - te / 2;
              re < O.left && (re = O.left), re + te > O.right && (re = Math.max(O.left, O.right - te)), ae = re + t * (le + oe);
            }
            if (g && le < g) {
              const W = J.find(
                (oe) => Math.abs(oe.center - Y) < 0.5
              );
              if (W) {
                const oe = Math.max(2, W.right - W.left - 1), te = Math.min(oe, g);
                if (te > le)
                  if (n <= 1)
                    le = te, ae = Math.max(
                      W.left,
                      Math.min(W.right - le, Y - le / 2)
                    );
                  else {
                    const re = te * C, ce = te * n + re * (n - 1);
                    if (ce <= W.right - W.left - 1) {
                      le = te;
                      const ue = ce;
                      let ve = Y - ue / 2;
                      ve < W.left && (ve = W.left), ve + ue > W.right && (ve = Math.max(
                        W.left,
                        W.right - ue
                      )), ae = ve + t * (le + re);
                    }
                  }
              }
            }
          }
          const be = ae + le / 2, pe = E(G.y), Ie = Math.min(P, pe), Ve = Math.abs(P - pe), Te = !M && N?.focused?.seriesId === e.id && N.focused.index === ee, Le = () => {
            !N || M || N.setFocused({
              seriesId: e.id,
              index: ee,
              x: de,
              y: G.y,
              clientX: be,
              clientY: pe
            });
          }, _e = () => {
            N?.focused?.seriesId === e.id && N.focused.index === ee && N.clear();
          }, H = h === "category" && v ? v[ee] : void 0, X = h === "category" ? H || (a === "region" ? $n(String(G.x), ee) : Bt(ee)) : q, se = h === "category" ? `${V}-${ee}` : V, he = S && I ? X : h === "category" ? a === "region" ? Jr(String(G.x), ee) : wn(ee) : z, me = Te ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : he || X;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ae,
              y: Ie,
              width: le,
              height: Ve || 1,
              fill: S ? `url(#${se})` : X,
              ...S ? {} : { fillOpacity: b },
              stroke: me,
              strokeWidth: Te ? 2 : 1,
              className: "fdp-bar",
              tabIndex: M || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${G.y}`,
              onMouseEnter: Le,
              onFocus: Le,
              onMouseLeave: _e,
              onBlur: _e
            },
            ee
          );
        })
      ]
    }
  );
}, $1 = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = un(), c = t ?? l?.innerWidth ?? 0, d = n ?? l?.innerHeight ?? 0, u = K.useMemo(() => e.flatMap((g) => g.data), [e]), f = K.useMemo(() => {
    const g = /* @__PURE__ */ new Set();
    return u.forEach((S) => g.add(S.x)), Array.from(g);
  }, [u]), h = K.useMemo(
    () => Math.max(0, ...u.map((g) => g.y)),
    [u]
  ), p = K.useMemo(
    () => hl().domain(f).range([0, c]).paddingInner(a).paddingOuter(o),
    [f, c, a, o]
  ), x = K.useMemo(
    () => Hr().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), m = K.useMemo(
    () => ({
      xScale: p,
      yScale: x,
      getXTicks: () => f,
      getYTicks: (g = i) => x.ticks(g)
    }),
    [p, x, f, i]
  );
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: m, children: s });
}, E1 = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = K.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Pt("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Pt(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(nn, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(nn, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, F1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = K.useRef(null);
  return K.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const c = [];
      l.forEach((d) => {
        d.classList.contains("fdp-chart--enhanced") || (d.classList.add("fdp-chart--enhanced"), c.push(d));
      }), c.length && t && t(c);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, t0 = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: d = !1,
  error: u,
  valueFormatter: f,
  className: h,
  style: p,
  id: x,
  announceDelta: m = !0,
  visual: g
}) => {
  const S = K.useId(), I = x || S, j = `${I}-label`, k = `${I}-value`, b = `${I}-delta`, v = typeof t == "number" && !Number.isNaN(t), C = d ? "—" : u ? "" : v ? f ? f(t) : t.toLocaleString() : t;
  let _, y = "", w = "";
  if (a && !d && !u) {
    _ = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const E = Math.abs(a.value), T = _ === "up" ? `+${E}` : _ === "down" ? `-${E}` : "0", L = a.isPercent ? "%" : "";
    if (y = `${T}${L}`, a.ariaLabel)
      w = a.ariaLabel;
    else {
      const M = a.invert ? _ === "down" : _ === "up";
      w = `${_ === "neutral" ? "no change" : _ === "up" ? "up" : "down"} ${E}${L}${_ === "neutral" ? "" : M ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Pt(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        h
      ),
      style: p,
      role: "group",
      "aria-labelledby": j,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: j, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: k, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: C }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: b,
              "aria-label": w,
              className: Pt(
                "fdp-metric-card__delta",
                _ && `fdp-metric-card__delta--${_}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: y }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        g && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: g }),
        m && a && !a.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: w })
      ] })
    }
  );
};
var ht = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(ht || {}), dc = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(dc || {}), cn = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(cn || {}), qe = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(qe || {});
const ys = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
ys.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const n0 = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, r0 = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, uc = ys.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: n0[t],
    category: r0[t],
    participatesInRanking: !0
  }, e),
  {}
);
ys.map(
  (e) => uc[e]
);
var ur = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ur || {}), dn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(dn || {}), fc = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(fc || {});
const En = {
  singlePointUp: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointDown: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeUp: {
    tooltip: "Two of three points beyond +2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeDown: {
    tooltip: "Two of three points beyond -2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveUp: {
    tooltip: "Four of five points beyond +1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveDown: {
    tooltip: "Four of five points beyond -1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftUp: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftDown: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendUp: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDown: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function La(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointUp && t.push(
    "singlePointUp"
    /* SinglePointUp */
  ), e.specialCauseSinglePointDown && t.push(
    "singlePointDown"
    /* SinglePointDown */
  ), e.specialCauseTwoOfThreeUp && t.push(
    "twoOfThreeUp"
    /* TwoOfThreeUp */
  ), e.specialCauseTwoOfThreeDown && t.push(
    "twoOfThreeDown"
    /* TwoOfThreeDown */
  ), e.specialCauseFourOfFiveUp && t.push(
    "fourOfFiveUp"
    /* FourOfFiveUp */
  ), e.specialCauseFourOfFiveDown && t.push(
    "fourOfFiveDown"
    /* FourOfFiveDown */
  ), e.specialCauseShiftUp && t.push(
    "shiftUp"
    /* ShiftUp */
  ), e.specialCauseShiftDown && t.push(
    "shiftDown"
    /* ShiftDown */
  ), e.specialCauseTrendUp && t.push(
    "trendUp"
    /* TrendUp */
  ), e.specialCauseTrendDown && t.push(
    "trendDown"
    /* TrendDown */
  ), t;
}
function Aa(e) {
  switch (e) {
    case qe.Improvement:
      return "Improvement signal";
    case qe.Concern:
      return "Concern signal";
    case qe.Neither:
      return "Common cause variation";
    case qe.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function hc(e) {
  switch (e) {
    case dn.Pass:
      return "Target met";
    case dn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function a0(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Lt = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  },
  suppressed: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  }
};
function pc(e) {
  return e ? Lt[e]?.token ?? Lt.neither.token : Lt.neither.token;
}
function o0(e) {
  return e ? Lt[e]?.hex ?? Lt.neither.hex : Lt.neither.hex;
}
var gn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(gn || {});
const s0 = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, i0 = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var mt = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(mt || {}), Ge = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ge || {}), Nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Nt || {}), Pe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Pe || {});
const l0 = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, $a = {
  special_cause_deteriorating: {
    hex: Lt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Lt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Lt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Lt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values($a).forEach((e) => {
  e.text || (e.text = l0(e.hex));
});
const mc = (e) => $a[e], bs = (e) => $a[e].judgement || "none", Li = {
  special: {
    higher: [
      { cx: 77.5, cy: 158.5 },
      { cx: 114, cy: 175 },
      { cx: 150.5, cy: 158.5 },
      { cx: 188, cy: 125 },
      { cx: 225, cy: 137 }
    ],
    lower: [
      { cx: 77.5, cy: 139.5 },
      { cx: 114, cy: 124.5 },
      { cx: 150.5, cy: 139.5 },
      { cx: 188, cy: 175.5 },
      { cx: 224.5, cy: 162 }
    ]
  },
  common: [
    { cx: 76.5, cy: 149.5 },
    { cx: 113, cy: 179.5 },
    { cx: 149.5, cy: 117 },
    { cx: 187, cy: 171 },
    { cx: 223.5, cy: 158 }
  ]
};
function c0(e, t) {
  let n;
  return e === "common_cause" ? n = Li.common : n = Li.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
let jo = null;
try {
  jo = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const _t = (e, t) => {
  if (!jo) return t;
  const n = e.split(".");
  let a = jo;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ea = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: _t("gradient.stop.start-opacity", "0.12"),
  mid: _t("gradient.stop.mid-opacity", "0.03"),
  end: _t("gradient.stop.end-opacity", "0"),
  triStart: _t(
    "gradient.stop.triangle-start-opacity",
    _t("gradient.stop.start-opacity", "0.12")
  ),
  triMid: _t(
    "gradient.stop.triangle-mid-opacity",
    _t("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: _t(
    "gradient.stop.triangle-end-opacity",
    _t("gradient.stop.end-opacity", "0")
  )
}), Fa = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, Pa = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, gc = () => _t(Fa.improvement, Pa.improvement), xc = () => _t(Fa.concern, Pa.concern), d0 = () => _t(Fa.noJudgement, Pa.noJudgement), hn = () => _t(Fa.common, Pa.common);
function Mr(e) {
  switch (e) {
    case qe.Improvement:
      return gc();
    case qe.Concern:
      return xc();
    case qe.Neither:
    case qe.Suppressed:
    default:
      return hn();
  }
}
function yc(e) {
  switch (e) {
    case Pe.SpecialCauseImproving:
      return gc();
    case Pe.SpecialCauseDeteriorating:
      return xc();
    case Pe.SpecialCauseNoJudgement:
      return d0();
    case Pe.CommonCause:
    default:
      return hn();
  }
}
var Mt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Mt || {}), Xe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Xe || {}), Ee = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ee || {}), ct = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(ct || {}), xn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(xn || {}), Et = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Et || {}), Fn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Fn || {}), Dn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Dn || {}), wt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(wt || {}), zt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(zt || {}), Ft = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Ft || {}), Xr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Xr || {}), Kr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Kr || {});
const on = {
  [ct.SinglePoint]: 1,
  [ct.TwoSigma]: 2,
  [ct.Shift]: 3,
  [ct.Trend]: 4
}, Ai = 3.267, u0 = 2.66, $i = 0.2777;
function We(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Tn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function Ei(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !We(s))) {
      if (a !== null) {
        const i = e[a];
        We(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function Fi(e, t) {
  const n = e.filter(We);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = Tn(a), i = Ai * s;
    a = a.filter((l) => l <= i);
  }
  const o = Tn(a);
  return { mrMean: o, mrUcl: Ai * o };
}
function Pi(e, t) {
  if (!We(e) || !We(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = u0 * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function f0(e, t, n, a) {
  if (e === Mt.T) {
    const f = t.map((_) => We(_) && _ > 0 ? Math.pow(_, $i) : null), h = Ei(f, n), p = Fi(h, a), x = f.filter((_, y) => !n[y] && We(_)), m = x.length ? Tn(x) : NaN, g = Pi(m, p.mrMean), S = (_) => We(_) && _ > 0 ? Math.pow(_, 1 / $i) : null, I = We(g.upperProcessLimit) ? S(g.upperProcessLimit) : null, j = We(g.lowerProcessLimit) && g.lowerProcessLimit > 0 ? S(g.lowerProcessLimit) : null, k = We(g.upperTwoSigma) ? S(g.upperTwoSigma) : null, b = We(g.lowerTwoSigma) && g.lowerTwoSigma > 0 ? S(g.lowerTwoSigma) : null, v = We(g.upperOneSigma) ? S(g.upperOneSigma) : null, C = We(g.lowerOneSigma) && g.lowerOneSigma > 0 ? S(g.lowerOneSigma) : null;
    return {
      mean: We(m) && m > 0 ? S(m) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: I,
      lowerProcessLimit: j,
      upperTwoSigma: k,
      lowerTwoSigma: b,
      upperOneSigma: v,
      lowerOneSigma: C
    };
  }
  if (e === Mt.G) {
    const f = t.filter((E, T) => !n[T] && We(E)), h = f.length ? Tn(f) : NaN, p = We(h) ? 1 / (h + 1) : NaN, x = (E) => {
      if (!We(p) || p <= 0 || p >= 1) return NaN;
      const T = Math.ceil(Math.log(1 - E) / Math.log(1 - p)) - 1;
      return Math.max(0, T);
    }, m = 135e-5, g = 1 - 135e-5, S = 0.02275, I = 1 - 0.02275, j = 0.158655, k = 1 - 0.158655, b = x(g), v = x(m), C = x(I), _ = x(S), y = x(k), w = x(j);
    return {
      mean: We(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: We(b) ? b : null,
      lowerProcessLimit: We(v) ? v : null,
      upperTwoSigma: We(C) ? C : null,
      lowerTwoSigma: We(_) ? _ : null,
      upperOneSigma: We(y) ? y : null,
      lowerOneSigma: We(w) ? w : null
    };
  }
  if (e !== Mt.XmR)
    return {
      mean: NaN,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const o = Ei(t, n), s = o.filter(We), i = s.length ? Tn(s) : NaN, l = We(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, x) => {
      if (n[x] || !We(p)) return h;
      if (!a)
        return h.push(p), h;
      const m = o[x];
      return (m === null || !We(l) || We(m) && m <= l) && h.push(p), h;
    }, []);
    c = f.length ? Tn(f) : NaN;
  }
  const d = Fi(o, a), u = Pi(c, d.mrMean);
  return {
    mean: c,
    mr: o,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function h0(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && We(e[c].value)), a = (c) => e[c], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const d = a(c);
    if (!We(d.mean) || !We(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= o)
      for (const u of i) a(u).shiftUp = !0;
    if (l.length >= o)
      for (const u of l) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((k) => We(k.value) && We(k.mean)))
      continue;
    const f = u[0].mean, h = u.every((k) => k.value > f), p = u.every((k) => k.value < f);
    if (!h && !p)
      continue;
    const x = u[0].upperTwoSigma ?? 1 / 0, m = u[0].lowerTwoSigma ?? -1 / 0, g = u[0].upperProcessLimit ?? 1 / 0, S = u[0].lowerProcessLimit ?? -1 / 0, I = u.filter((k) => t.twoSigmaIncludeAboveThree ? k.value > x : k.value > x && k.value <= g), j = u.filter((k) => t.twoSigmaIncludeAboveThree ? k.value < m : k.value < m && k.value >= S);
    h && I.length >= 2 && I.forEach((k) => k.twoSigmaUp = !0), p && j.length >= 2 && j.forEach((k) => k.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((I) => We(I.value) && We(I.mean)))
        continue;
      const f = u[0].mean, h = u.every((I) => I.value > f), p = u.every((I) => I.value < f);
      if (!h && !p)
        continue;
      const x = u[0].upperOneSigma ?? 1 / 0, m = u[0].lowerOneSigma ?? -1 / 0, g = u.filter((I) => I.value > x), S = u.filter((I) => I.value < m);
      h && g.length >= 4 && g.forEach((I) => I.fourOfFiveUp = !0), p && S.length >= 4 && S.forEach((I) => I.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const d = n.slice(c, c + s), u = d.map(a);
    if (!u.every((p) => We(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function bc(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: ct.SinglePoint,
    rank: on[ct.SinglePoint]
  }), e.singlePointDown && n.push({
    id: ct.SinglePoint,
    rank: on[ct.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: ct.TwoSigma,
    rank: on[ct.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: ct.TwoSigma,
    rank: on[ct.TwoSigma]
  }), e.shiftUp && t.push({ id: ct.Shift, rank: on[ct.Shift] }), e.shiftDown && n.push({ id: ct.Shift, rank: on[ct.Shift] }), e.trendUp && t.push({ id: ct.Trend, rank: on[ct.Trend] }), e.trendDown && n.push({ id: ct.Trend, rank: on[ct.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? xn.Upwards : o > a ? xn.Downwards : xn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function Ri(e, t) {
  const n = t === Xe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Xe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Xe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Xe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Bi(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = bc(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && p0({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Xe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementHigh : e.specialCauseConcernValue !== null ? Ee.ConcernLow : Ee.CommonCause : t === Xe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementLow : e.specialCauseConcernValue !== null ? Ee.ConcernHigh : Ee.CommonCause : e.variationIcon = Ee.CommonCause;
  const x = e.specialCauseImprovementValue !== null ? Et.Up : e.specialCauseConcernValue !== null ? Et.Down : void 0, m = x === Et.Up ? d : x === Et.Down ? u : Math.max(d, u);
  e.primeRank = m || void 0;
  const g = x === Et.Up ? l.find((S) => S.rank === m) : x === Et.Down ? c.find((S) => S.rank === m) : void 0;
  return e.primeRuleId = g?.id, { originalImprovement: h, originalConcern: p };
}
function p0(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? xn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Xe.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Xe.Down) {
      if (f && !u) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!f && u) {
        t.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const d = o ? Dn.PreferImprovement : l ?? Dn.SqlPrimeThenRule;
  if (d === Dn.PreferImprovement) {
    n === Xe.Up ? t.specialCauseConcernValue = null : n === Xe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Dn.RuleHierarchy) {
    const u = c ?? [ct.Trend, ct.Shift, ct.TwoSigma, ct.SinglePoint], { up: f, dn: h } = bc(t);
    for (const p of u) {
      const x = f.some((g) => g.id === p), m = h.some((g) => g.id === p);
      if (x && !m) {
        n === Xe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !x) {
        n === Xe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (x && m) {
        (n === Xe.Up || n === Xe.Down) && (a === Fn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === xn.Upwards ? n === Xe.Up ? t.specialCauseConcernValue = null : n === Xe.Down && (t.specialCauseImprovementValue = null) : i === xn.Downwards ? n === Xe.Up ? t.specialCauseImprovementValue = null : n === Xe.Down && (t.specialCauseConcernValue = null) : a === Fn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var Mo = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Mo || {});
function m0(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function g0(e) {
  const t = m0(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function Hi(e) {
  const t = [], n = (i, l, c) => ({
    segStart: i,
    segSide: l,
    minV: c,
    maxV: c,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (i, l, c, d, u) => ({
    minV: Math.min(c, i),
    maxV: Math.max(d, i),
    maxAbsDelta: Math.max(u, l)
  }), o = (i, l, c, d, u, f, h, p) => {
    i.push({
      trendDirection: p,
      start: l,
      end: c,
      side: d,
      minValue: u,
      maxValue: f,
      maxAbsDeltaFromMean: h
    });
  };
  let s = 0;
  for (; s < e.length; ) {
    const i = e[s];
    if (!i || i.value == null || i.ghost || !i.trendUp && !i.trendDown) {
      s++;
      continue;
    }
    const l = i.trendUp ? "Up" : i.trendDown ? "Down" : void 0;
    let c = s, d = s;
    for (; d < e.length; d++) {
      const S = e[d];
      if (!S || S.value == null || S.ghost || !(l === "Up" ? S.trendUp : S.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, x = 1 / 0, m = -1 / 0, g = 0;
    for (let S = c; S <= u; S++) {
      const I = e[S];
      if (I.value == null) continue;
      const j = I.value - (I.mean ?? 0), k = g0(j);
      if (!k) {
        h !== void 0 && (o(f, h, S - 1, p, x, m, g, l), h = void 0, p = void 0, x = 1 / 0, m = -1 / 0, g = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const b = n(S, k, I.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(j)
          };
        })());
      else if (k !== p)
        o(f, h, S - 1, p, x, m, g, l), { segStart: h, segSide: p, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const b = n(S, k, I.value);
          return {
            segStart: b.segStart,
            segSide: b.segSide,
            minV: b.minV,
            maxV: b.maxV,
            maxAbsDelta: Math.abs(j)
          };
        })();
      else {
        const b = a(I.value, Math.abs(j), x, m, g);
        x = b.minV, m = b.maxV, g = b.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, u, p, x, m, g, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function x0(e) {
  if (e === Xe.Up) return "Above";
  if (e === Xe.Down) return "Below";
}
function y0(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function zi(e, t) {
  const n = t.strategy ?? wt.CrossingAfterFavourable, a = x0(t.metricImprovement), o = y0(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === wt.ExtremeFavourable || n === wt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        s.push(c);
      }
      continue;
    }
    if (n === wt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === wt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === wt.CrossingAfterFavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === a && d > 0 && l[d - 1].side !== a) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === a);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === wt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === o && d > 0 && l[d - 1].side !== o) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === o);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === wt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === wt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (n === wt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (n === wt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (n === wt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === wt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (n === wt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === wt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var it = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(it || {}), zn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(zn || {});
function b0(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function yr(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = b0(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case Ee.ImprovementHigh:
      case Ee.ImprovementLow:
        return "Improvement";
      case Ee.ConcernHigh:
      case Ee.ConcernLow:
        return "Concern";
      case Ee.NeitherHigh:
      case Ee.NeitherLow: {
        if (a === "Ungated" && n !== Xe.Neither) {
          if (i && !l)
            return n === Xe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Xe.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function v0(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = yr(e, {
    metricImprovement: t,
    trendVisualMode: zn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Xe.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const p = o[f];
    (p === it.Common || p === it.NoJudgement) && (o[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((x, m) => (m.partitionId === f && typeof m.value == "number" && !m.ghost && x.push(m.value), x), []);
    return h.length ? h.reduce((x, m) => x + m, 0) / h.length : null;
  }, u = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, p) => {
    if (p === 0) return f;
    const x = e[p - 1];
    return x && h && h.partitionId !== x.partitionId && f.push(p), f;
  }, []);
  for (const f of u) {
    const h = e[f - 1], p = e[f];
    if (!h || !p)
      continue;
    let x = f - 1;
    for (; x - 1 >= 0 && e[x - 1] && e[x - 1].partitionId === h.partitionId; )
      x--;
    let m = f;
    for (; m + 1 < e.length && e[m + 1] && e[m + 1].partitionId === p.partitionId; )
      m++;
    let g = null;
    for (let v = f - 1; v >= 0; v--) {
      const C = e[v];
      if (C.partitionId !== h.partitionId) break;
      if (typeof C.mean == "number") {
        g = C.mean;
        break;
      }
    }
    let S = null;
    for (let v = f; v < e.length; v++) {
      const C = e[v];
      if (C.partitionId !== p.partitionId) break;
      if (typeof C.mean == "number") {
        S = C.mean;
        break;
      }
    }
    if (g == null && (g = d(h.partitionId ?? null)), S == null && (S = d(p.partitionId ?? null)), g == null || S == null)
      continue;
    const I = S - g, j = t === Xe.Up ? I > 0 : I < 0, k = j ? it.Improvement : it.Concern, b = l === "Same" ? k : j ? it.Concern : it.Improvement;
    for (let v = 1; v <= s; v++) {
      const C = f - v;
      if (C < x) break;
      c(C, b);
    }
    for (let v = 0; v < i; v++) {
      const C = f + v;
      if (C > m) break;
      c(C, k);
    }
  }
  return o;
}
function vc(e) {
  if (!e) return {};
  if (typeof e == "object" && ("minimumPoints" in e || "shiftPoints" in e || "trendPoints" in e))
    return e;
  const t = e, n = {};
  if (t.thresholds) {
    const a = t.thresholds;
    a.minimumPoints != null && (n.minimumPoints = a.minimumPoints), a.shiftPoints != null && (n.shiftPoints = a.shiftPoints), a.trendPoints != null && (n.trendPoints = a.trendPoints), a.excludeMovingRangeOutliers != null && (n.excludeMovingRangeOutliers = a.excludeMovingRangeOutliers);
  }
  if (t.eligibility && t.eligibility.chartLevel != null && (n.chartLevelEligibility = t.eligibility.chartLevel), t.parity && (t.parity.trendAcrossPartitions != null && (n.trendAcrossPartitions = t.parity.trendAcrossPartitions), t.parity.twoSigmaIncludeAboveThree != null && (n.twoSigmaIncludeAboveThree = t.parity.twoSigmaIncludeAboveThree), t.parity.enableFourOfFiveRule != null && (n.enableFourOfFiveRule = t.parity.enableFourOfFiveRule)), t.conflict && (t.conflict.preferImprovementWhenConflict != null && (n.preferImprovementWhenConflict = t.conflict.preferImprovementWhenConflict), t.conflict.preferTrendWhenConflict != null && (n.preferTrendWhenConflict = t.conflict.preferTrendWhenConflict), t.conflict.strategy != null && (n.conflictStrategy = t.conflict.strategy), t.conflict.ruleHierarchy != null && (n.ruleHierarchy = t.conflict.ruleHierarchy), t.conflict.metricRuleOnTie != null && (n.metricConflictRule = t.conflict.metricRuleOnTie)), t.trend?.segmentation) {
    const a = t.trend.segmentation;
    a.mode != null && (n.trendSegmentationMode = a.mode), a.favourableSegmentation != null && (n.trendFavourableSegmentation = a.favourableSegmentation), a.strategy != null && (n.trendSegmentationStrategy = a.strategy), a.dominatesHighlightedWindow != null && (n.trendDominatesHighlightedWindow = a.dominatesHighlightedWindow);
  }
  return n;
}
function br(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = vc(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Fn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Dn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: zt.Off,
    trendSegmentationStrategy: wt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? zt.Always : o?.trendFavourableSegmentation === !1 ? zt.Off : s.trendSegmentationMode), l = a.map((m, g) => ({
    rowId: g + 1,
    x: m.x,
    value: We(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: We(m.target) ? m.target : null
  })), c = [];
  let d = [];
  for (const m of l)
    m.baseline && d.length && (c.push(d), d = []), d.push(m);
  d.length && c.push(d);
  const u = [], f = (s.trendFavourableSegmentation || i !== zt.Off) && !s.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && We(m.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let x = 0;
  for (const m of c) {
    x++;
    const g = m.map((b) => b.value), S = m.map((b) => b.ghost), I = f0(
      t,
      g,
      S,
      !!s.excludeMovingRangeOutliers
    ), j = m.map((b, v) => {
      const C = !b.ghost && We(b.value) ? g.slice(0, v + 1).filter((y, w) => !S[w] && We(y)).length : 0, _ = p ? !0 : C >= s.minimumPoints;
      return {
        rowId: b.rowId,
        x: b.x,
        value: We(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: x,
        pointRank: C,
        mean: (_ || p) && We(I.mean) ? I.mean : null,
        upperProcessLimit: _ || p ? I.upperProcessLimit : null,
        lowerProcessLimit: _ || p ? I.lowerProcessLimit : null,
        upperTwoSigma: _ || p ? I.upperTwoSigma : null,
        lowerTwoSigma: _ || p ? I.lowerTwoSigma : null,
        upperOneSigma: _ || p ? I.upperOneSigma : null,
        lowerOneSigma: _ || p ? I.lowerOneSigma : null,
        // rules
        singlePointUp: !1,
        singlePointDown: !1,
        twoSigmaUp: !1,
        twoSigmaDown: !1,
        fourOfFiveUp: !1,
        fourOfFiveDown: !1,
        shiftUp: !1,
        shiftDown: !1,
        trendUp: !1,
        trendDown: !1,
        // candidates
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        variationIcon: Ee.CommonCause
      };
    });
    for (const b of j)
      b.ghost || !We(b.value) || b.mean === null || (We(b.upperProcessLimit) && b.value > b.upperProcessLimit && (b.singlePointUp = !0), We(b.lowerProcessLimit) && b.value < b.lowerProcessLimit && (b.singlePointDown = !0));
    h0(j, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((b) => {
      const v = b.some(
        (E) => (E.singlePointUp || E.twoSigmaUp || E.shiftUp || E.trendUp) && (E.singlePointDown || E.twoSigmaDown || E.shiftDown || E.trendDown)
      );
      if (i === zt.Off || i === zt.AutoWhenConflict && !v)
        return;
      const C = Hi(b), _ = zi(C, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
      for (const E of _)
        for (let T = E.start; T <= E.end; T++)
          E.trendDirection === Mo.Up ? y.add(T) : w.add(T);
      b.forEach((E, T) => {
        E.trendUp = y.has(T) ? E.trendUp : !1, E.trendDown = w.has(T) ? E.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(T) ? (E.singlePointDown = !1, E.twoSigmaDown = !1, E.shiftDown = !1) : w.has(T) && (E.singlePointUp = !1, E.twoSigmaUp = !1, E.shiftUp = !1));
      });
    })(j);
    for (const b of j) {
      if (b.ghost || !We(b.value) || b.mean === null) {
        u.push(b);
        continue;
      }
      const { aligned: v, opposite: C } = Ri(
        b,
        n
      );
      if (b.specialCauseImprovementValue = v ? b.value : null, b.specialCauseConcernValue = C ? b.value : null, n === Xe.Neither) {
        const _ = b.singlePointUp || b.twoSigmaUp || b.shiftUp || b.trendUp, y = b.singlePointDown || b.twoSigmaDown || b.shiftDown || b.trendDown;
        b.variationIcon = _ ? Ee.NeitherHigh : y ? Ee.NeitherLow : Ee.CommonCause;
      } else
        Bi(b, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(b);
    }
  }
  if (s.trendAcrossPartitions) {
    const m = u.map((g, S) => ({ idx: S, r: g })).filter(({ r: g }) => !g.ghost && We(g.value));
    if (m.length >= s.trendPoints)
      for (let g = 0; g <= m.length - s.trendPoints; g++) {
        const S = m.slice(g, g + s.trendPoints).map((b) => b.idx), I = S.map((b) => u[b]);
        if (!I.every((b) => We(b.value))) continue;
        let j = !0, k = !0;
        for (let b = 1; b < I.length && (I[b].value > I[b - 1].value || (j = !1), I[b].value < I[b - 1].value || (k = !1), !(!j && !k)); b++)
          ;
        j && S.forEach((b) => u[b].trendUp = !0), k && S.forEach((b) => u[b].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const m = u.some(
        (g) => (g.singlePointUp || g.twoSigmaUp || g.shiftUp || g.trendUp) && (g.singlePointDown || g.twoSigmaDown || g.shiftDown || g.trendDown)
      );
      if (i === zt.Always || i === zt.AutoWhenConflict && m) {
        const g = Hi(u), S = zi(g, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), I = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set();
        for (const k of S)
          for (let b = k.start; b <= k.end; b++)
            k.trendDirection === Mo.Up ? I.add(b) : j.add(b);
        u.forEach((k, b) => {
          k.trendUp = I.has(b) ? k.trendUp : !1, k.trendDown = j.has(b) ? k.trendDown : !1, s.trendDominatesHighlightedWindow && (I.has(b) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : j.has(b) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
        });
      }
    }
    for (const m of u) {
      if (m.ghost || !We(m.value) || m.mean === null || n === Xe.Neither) continue;
      const { aligned: g, opposite: S } = Ri(m, n);
      m.specialCauseImprovementValue = g ? m.value : null, m.specialCauseConcernValue = S ? m.value : null, Bi(m, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function vs(e, t) {
  const n = br(e), a = yr(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? zn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = v0(n.rows, s, o), l = a.map((c, d) => {
    const u = i[d];
    if (c === it.Common || c === it.NoJudgement) {
      if (u === it.Improvement) return it.Improvement;
      if (u === it.Concern) return it.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var wc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(wc || {});
function w0(e, t, n) {
  const a = n?.trendVisualMode ?? zn.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
  let i;
  switch (t) {
    case "recalc-crossing-shift": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "recalc-crossing-trend": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "baselines-recalculated":
      i = {
        mode: "RecalcCrossing",
        preWindow: 0,
        postWindow: 0,
        prePolarity: "Same",
        directionOverride: e.metricImprovement,
        boundaryIndices: s
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      i = void 0;
  }
  const { rows: l, visuals: c } = vs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: i
  });
  let d = c.slice(), u = s.length ? s[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = it.Common), { rows: l, visuals: d };
}
const _c = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Fn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function _0(e) {
  return { ..._c, ...e ?? {} };
}
var gt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(gt || {}), yn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(yn || {}), fr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(fr || {});
const Io = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Xe.Up ? mt.HigherIsBetter : i.improvementDirection === Xe.Down ? mt.LowerIsBetter : mt.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const d = i.variationIcon;
    if (d === qe.Improvement || d === qe.Concern || d === qe.Neither || d === qe.Suppressed)
      d === qe.Improvement ? c = Pe.SpecialCauseImproving : d === qe.Concern ? c = Pe.SpecialCauseDeteriorating : d === qe.Neither ? c = Pe.CommonCause : c = Pe.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Ee.ImprovementHigh:
        case Ee.ImprovementLow:
          c = Pe.SpecialCauseImproving;
          break;
        case Ee.ConcernHigh:
        case Ee.ConcernLow:
          c = Pe.SpecialCauseDeteriorating;
          break;
        case Ee.NeitherHigh:
        case Ee.NeitherLow:
          c = i.specialCauseNeutral ? Pe.SpecialCauseNoJudgement : Pe.CommonCause;
          break;
        case Ee.CommonCause:
          c = Pe.CommonCause;
          break;
        default:
          c = Pe.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (c === Pe.SpecialCauseImproving ? u = l === mt.LowerIsBetter ? Ge.Lower : Ge.Higher : c === Pe.SpecialCauseDeteriorating ? u = l === mt.LowerIsBetter ? Ge.Higher : Ge.Lower : c === Pe.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Ge.Higher : i.lowSideSignal && !i.highSideSignal ? u = Ge.Lower : u = Ge.Higher : u = Ge.Higher), { state: c, direction: u, polarity: l ?? mt.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Pe.SpecialCauseImproving || i.state === Pe.SpecialCauseDeteriorating) && i.polarity && (i.state === Pe.SpecialCauseImproving ? l = i.polarity === mt.LowerIsBetter ? Ge.Lower : Ge.Higher : l = i.polarity === mt.LowerIsBetter ? Ge.Higher : Ge.Lower), l || (i.state === Pe.SpecialCauseImproving ? l = Ge.Higher : i.state === Pe.SpecialCauseDeteriorating ? l = Ge.Lower : l = Ge.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? mt.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [Nt.Improving]: Pe.SpecialCauseImproving,
    [Nt.Deteriorating]: Pe.SpecialCauseDeteriorating,
    [Nt.No_Judgement]: Pe.SpecialCauseNoJudgement,
    [Nt.None]: Pe.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === Nt.Improving ? s = n.polarity === mt.LowerIsBetter ? Ge.Lower : Ge.Higher : n.judgement === Nt.Deteriorating ? s = n.polarity === mt.LowerIsBetter ? Ge.Higher : Ge.Lower : s = n.trend ?? Ge.Higher, { state: o, direction: s, polarity: n.polarity };
};
function Sc(e, t) {
  const { state: n, direction: a, polarity: o } = Io(e), s = bs(n), i = a === Ge.Higher ? "above" : "below", l = a === Ge.Higher ? "upwards" : "downwards", c = (() => {
    switch (o) {
      case mt.HigherIsBetter:
        return "For this measure, higher values are better.";
      case mt.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case Nt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Nt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Nt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Nt.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    c,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const io = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
  a && /* @__PURE__ */ r.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  o && /* @__PURE__ */ r.jsx("linearGradient", { id: n, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ r.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), ws = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: a = 44,
  ariaLabel: o,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = yn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = fr.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = tr(), x = tr(), {
    start: m,
    mid: g,
    end: S,
    triStart: I,
    triMid: j,
    triEnd: k
  } = Ea(), { state: b, direction: v, polarity: C, ariaInput: _ } = Re(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const q = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Xe.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Pe.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: A, direction: z, polarity: P } = Io(q);
      return { state: A, direction: z, polarity: P, ariaInput: q };
    }
    const { state: J, direction: F, polarity: $ } = Io(e);
    return { state: J, direction: F, polarity: $, ariaInput: e };
  }, [e, t, n]), y = Re(() => mc(b), [b]), w = Re(() => bs(b), [b]), E = w === Nt.Improving || w === Nt.Deteriorating;
  let T = "";
  s && E && (u === fr.Polarity ? C === mt.HigherIsBetter ? T = "H" : C === mt.LowerIsBetter ? T = "L" : T = "" : T = v === Ge.Higher ? "H" : "L"), f !== void 0 && (T = f);
  const L = b !== Pe.CommonCause, M = b === Pe.SpecialCauseNoJudgement, N = _t("common-cause", "#A6A6A6"), D = L ? y.hex : N, R = Re(
    () => c0(b, v),
    [b, v]
  ), Z = o || `${y.label}${T ? v === Ge.Higher ? " – Higher" : " – Lower" : ""}`, Q = Sc(_);
  if (c === yn.TriangleWithRun) {
    const q = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], A = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let z = null;
    b === Pe.SpecialCauseImproving || b === Pe.SpecialCauseDeteriorating ? z = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (v === Ge.Higher ? q : A).map((pe) => pe.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: v === Ge.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : b === Pe.SpecialCauseNoJudgement && (z = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: v === Ge.Higher ? q.map((pe) => pe.join(",")).join(" ") : A.map((pe) => pe.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: v === Ge.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const P = Math.max(0, Math.min(5, Math.floor(d || 0))), V = b === Pe.CommonCause ? 160 : v === Ge.Higher ? 220 : 70, G = 10, ee = 26, de = 150 - 2 * ee, Y = b === Pe.CommonCause ? N : yc(b), ae = Array.from({ length: 5 }).map((pe, Ie) => {
      const Te = (b === Pe.SpecialCauseImproving || b === Pe.SpecialCauseDeteriorating) && Ie >= 5 - P ? Y : N;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + Ie * ee,
          cy: V,
          r: G,
          fill: Te,
          stroke: Te,
          strokeWidth: 1
        },
        Ie
      );
    }), le = io(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: I },
        { offset: "75%", opacity: j },
        { offset: "100%", opacity: k }
      ]
    ), be = b === Pe.CommonCause || v === Ge.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": Z,
        "aria-description": Q,
        ...h,
        children: [
          le,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${x})` : "#ffffff",
              ...i ? { filter: `url(#${p})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: y.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: be, children: [
            z,
            T && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: v === Ge.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: T
              }
            ),
            ae
          ] })
        ]
      }
    );
  }
  if (c === yn.Triangle) {
    const q = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], A = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], z = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let P = null;
    b === Pe.SpecialCauseImproving || b === Pe.SpecialCauseDeteriorating ? P = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (v === Ge.Higher ? q : A).map((G) => G.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: v === Ge.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : b === Pe.SpecialCauseNoJudgement ? P = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: v === Ge.Higher ? q.map((G) => G.join(",")).join(" ") : A.map((G) => G.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: v === Ge.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : b === Pe.CommonCause && (P = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: z[0][0],
        y1: z[0][1],
        x2: z[1][0],
        y2: z[1][1],
        stroke: y.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const V = io(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: I },
        { offset: "65%", opacity: j },
        { offset: "100%", opacity: k }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": Z,
        "aria-description": Q,
        ...h,
        children: [
          V,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${x})` : "#ffffff",
              ...i ? { filter: `url(#${p})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: y.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          P,
          T && (b === Pe.SpecialCauseImproving || b === Pe.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: v === Ge.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: T
            }
          )
        ]
      }
    );
  }
  const B = io(
    y.hex,
    p,
    x,
    i,
    l,
    [
      { offset: "0%", opacity: m },
      { offset: "65%", opacity: g },
      { offset: "100%", opacity: S }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: a,
      height: a,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": Z,
      "aria-description": Q,
      ...h,
      children: [
        B,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: l ? `url(#${x})` : "#ffffff",
            ...i ? { filter: `url(#${p})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: y.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        T && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: y.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: v === Ge.Lower ? "340" : "155", children: T })
          }
        ),
        M ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: y.hex,
            ...v === Ge.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          R.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: N,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${R.map((J) => `${J.cx} ${J.cy}`).join(" L ")}`
            }
          ),
          R.map((J, F) => {
            const q = F >= R.length - 2 && L ? D : N, A = q;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: A,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: q,
                cx: J.cx,
                cy: J.cy,
                r: 16
              },
              F
            );
          })
        ] })
      ]
    }
  );
};
ws.displayName = "SPCVariationIcon";
const S0 = {
  [ht.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [ht.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [ht.Md]: { height: 44, pointR: 4, stroke: 1 },
  [ht.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [ht.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [ht.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function k0(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function N0(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
const C0 = (e) => yc(e), _s = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = ht.Sm,
  ariaLabel: p,
  className: x,
  onPointClick: m,
  maxPoints: g,
  thinningStrategy: S = "stride",
  colorPointsBySignal: I = !0,
  centerLine: j,
  controlLimits: k,
  sigmaBands: b,
  pointSignals: v,
  pointNeutralSpecialCause: C,
  visualCategories: _
}) => {
  const y = u, w = Re(
    () => k0(e, t),
    [e, t]
  ), E = Re(() => N0(w), [w]), T = (() => {
    if (typeof h == "string")
      switch (h) {
        case "xs":
          return ht.Xs;
        case "sm":
          return ht.Sm;
        case "md":
          return ht.Md;
        case "lg":
          return ht.Lg;
        case "xl":
          return ht.Xl;
        case "full":
          return ht.Full;
        default:
          return ht.Sm;
      }
    return h ?? ht.Sm;
  })(), L = S0[T], M = Math.max(w.length * 6, 60), N = M, D = T === ht.Full ? "100%" : M, R = L.height, Z = Re(() => {
    if (T === ht.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${N} / ${R}`,
        display: "block"
      };
  }, [T, N, R]), Q = Math.max(6, L.pointR + 3), B = Math.max(4, L.pointR + 3), J = Re(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), F = j ?? E.mean ?? null, $ = Re(() => {
    if (!o) return null;
    if (k) return k;
    const _e = w.filter((he) => typeof he.value == "number");
    if (!_e.length || F == null) return null;
    const H = _e.map((he) => he.value), X = Math.min(...H), se = Math.max(...H);
    return { lower: X, upper: se };
  }, [o, k?.lower, k?.upper, w, F]), A = Re(() => ({
    state: d ?? Pe.CommonCause,
    firedRules: [],
    mean: F ?? null,
    stdDev: null,
    side: E.latestValue != null && F != null ? E.latestValue > F ? "above" : "below" : void 0
  }), [d, F, E.latestValue]).state, z = C0(A), P = (_e) => {
    const H = w.filter((me) => me.value != null);
    if (!H.length) return R / 2;
    const X = H.map((me) => me.value);
    $ && ($.lower != null && X.push($.lower), $.upper != null && X.push($.upper));
    const se = Math.min(...X), he = Math.max(...X);
    return se === he ? R / 2 : R - (_e - se) / (he - se) * (R - B * 2) - B;
  }, V = Re(() => {
    if (!g || w.length <= g)
      return w.map((O, W) => W);
    if (S === "stride") {
      const O = Math.max(2, g), W = (w.length - 1) / (O - 1), oe = /* @__PURE__ */ new Set();
      for (let te = 0; te < O; te++) oe.add(Math.round(te * W));
      return oe.add(w.length - 1), Array.from(oe).sort((te, re) => te - re);
    }
    const _e = w.map((O, W) => ({ i: W, v: O.value }));
    function H(O, W, oe) {
      const te = O.i, re = O.v ?? 0, ce = W.i, ue = W.v ?? 0, ve = oe.i, Ne = oe.v ?? 0, He = Math.abs((Ne - ue) * te - (ve - ce) * re + ve * ue - Ne * ce), Ye = Math.hypot(Ne - ue, ve - ce);
      return Ye === 0 ? 0 : He / Ye;
    }
    function X(O, W) {
      if (O.length <= 2) return O;
      let oe = -1, te = -1;
      for (let re = 1; re < O.length - 1; re++) {
        const ce = H(O[re], O[0], O[O.length - 1]);
        ce > oe && (oe = ce, te = re);
      }
      if (oe > W) {
        const re = X(O.slice(0, te + 1), W), ce = X(O.slice(te), W);
        return [...re.slice(0, -1), ...ce];
      }
      return [O[0], O[O.length - 1]];
    }
    let se = 0.1, he = _e;
    for (let O = 0; O < 8 && (he = X(_e, se), !(he.length <= g)); O++)
      se *= 1.6;
    const me = new Set(he.map((O) => O.i));
    return me.add(0), me.add(w.length - 1), Array.from(me).sort((O, W) => O - W);
  }, [w, g, S]), G = Re(
    () => V.map((_e) => w[_e]),
    [V, w]
  ), ee = Re(() => Math.max(1, N - Q * 2), [N, Q]), de = Re(() => {
    const _e = Math.max(1, G.length - 1);
    return (H) => H / _e * ee + Q;
  }, [G.length, ee, Q]), Y = Re(() => {
    let _e = "";
    return G.forEach((H, X) => {
      if (H.value == null) return;
      const se = P(H.value), he = de(X);
      _e += _e ? ` L ${he} ${se}` : `M ${he} ${se}`;
    }), _e;
  }, [G, de]), ae = E.latestIndex ?? -1, le = $, be = Ea(), pe = Re(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, f]
  ), Ie = w.length >= (n || 0), Ve = p || "SPC sparkline", Te = (() => {
    if (!A) return;
    const _e = y === Xe.Up ? mt.HigherIsBetter : y === Xe.Down ? mt.LowerIsBetter : mt.ContextDependent, H = {
      variationIcon: A === Pe.SpecialCauseImproving ? qe.Improvement : A === Pe.SpecialCauseDeteriorating ? qe.Concern : A === Pe.SpecialCauseNoJudgement ? qe.Suppressed : qe.Neither,
      trend: y === Xe.Up ? Ge.Higher : Ge.Lower,
      polarity: _e
    };
    try {
      return Sc(H);
    } catch {
      return;
    }
  })(), Le = Re(() => {
    if (!Ie) return 10;
    const _e = [...w].reverse().filter((X) => X.value != null).slice(0, 6).map((X) => P(X.value));
    return _e.length && _e.reduce((X, se) => X + se, 0) / _e.length < R / 2 ? R : 10;
  }, [w, Ie, R]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ve,
      "aria-description": Te,
      width: T === ht.Full ? void 0 : D,
      height: T === ht.Full ? void 0 : R,
      style: Z,
      className: x,
      viewBox: `0 0 ${N} ${R}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: pe, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: z,
                stopOpacity: Number(be.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: z,
                stopOpacity: Number(be.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: z,
                stopOpacity: Number(be.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: N,
              height: R,
              fill: `url(#${pe})`
            }
          )
        ] }),
        le && le.lower != null && le.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                P(le.upper),
                P(le.lower)
              ),
              width: N,
              height: Math.abs(
                P(le.upper) - P(le.lower)
              ),
              fill: z,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: N,
              y1: P(le.lower),
              y2: P(le.lower),
              stroke: z,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: N,
              y1: P(le.upper),
              y2: P(le.upper),
              stroke: z,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          b && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            b.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: P(b.lowerTwo),
                y2: P(b.lowerTwo),
                stroke: z,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: P(b.lowerOne),
                y2: P(b.lowerOne),
                stroke: z,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: P(b.upperOne),
                y2: P(b.upperOne),
                stroke: z,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            b.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: P(b.upperTwo),
                y2: P(b.upperTwo),
                stroke: z,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && F != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: N,
            y1: P(F),
            y2: P(F),
            stroke: hn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: Y,
            fill: "none",
            stroke: hn(),
            strokeWidth: L.stroke,
            strokeLinecap: "round"
          }
        ),
        V.map((_e, H) => {
          const X = w[_e];
          if (!X || X.value == null) return null;
          const se = P(X.value), he = de(H), O = (_e === ae && l ? L.pointR + 1 : L.pointR) - 0.5;
          let W = hn();
          if (I) {
            const oe = _?.[J + _e];
            if (oe != null)
              oe === it.Improvement ? W = Mr(qe.Improvement) : oe === it.Concern ? W = Mr(qe.Concern) : oe === it.NoJudgement ? W = _t("no-judgement", "#490092") : W = hn();
            else {
              const te = v?.[J + _e];
              te === qe.Improvement || te === qe.Concern ? W = Mr(te) : W = C?.[J + _e] ? _t("no-judgement", "#490092") : hn();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: he,
              cy: se,
              r: O,
              fill: W,
              stroke: "none",
              strokeWidth: 0,
              onClick: m ? () => m(_e, X) : void 0,
              style: m ? { cursor: "pointer" } : void 0,
              "data-index": _e,
              "data-signal-colour": I ? W : void 0
            },
            _e
          );
        }),
        c && Ie && A && A !== Pe.CommonCause && y && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: N - 4,
            y: Le,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: z,
            "data-glyph-pos": Le < R / 2 ? "top" : "bottom",
            children: y === Xe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
_s.displayName = "SPCSpark";
function Qr(e) {
  switch (e) {
    case Ee.ImprovementHigh:
    case Ee.ImprovementLow:
      return Pe.SpecialCauseImproving;
    case Ee.ConcernHigh:
    case Ee.ConcernLow:
      return Pe.SpecialCauseDeteriorating;
    case Ee.NeitherHigh:
    case Ee.NeitherLow:
      return Pe.SpecialCauseNoJudgement;
    case Ee.CommonCause:
      return Pe.CommonCause;
    default:
      return null;
  }
}
function kc(e) {
  return e === Ee.ImprovementHigh || e === Ee.ImprovementLow || e === Ee.ConcernHigh || e === Ee.ConcernLow || e === Ee.NeitherHigh || e === Ee.NeitherLow;
}
function j0({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [o, s] = K.useState(""), i = K.useRef("");
  return K.useEffect(() => {
    if (!t) {
      i.current !== "" && (i.current = "", s(""));
      return;
    }
    const l = e.length;
    if (!l) {
      const f = "Diagnostics: no warnings.";
      f !== i.current && (i.current = f, s(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === Ft.Error).length,
      warning: e.filter((f) => f.severity === Ft.Warning).length,
      info: e.filter((f) => f.severity === Ft.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${d.join(", ")}).`;
    u !== i.current && (i.current = u, s(u));
  }, [t, e]), t ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    o && /* @__PURE__ */ r.jsx(
      "div",
      {
        "data-testid": "spc-diagnostics-live",
        "aria-live": "polite",
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: 0,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0
        },
        children: o
      }
    ),
    e.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ r.jsx(
        nn,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === Ft.Error ? c = "red" : l.severity === Ft.Warning ? c = "orange" : l.severity === Ft.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(st, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(st, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(st, { color: "grey", text: a(l.code) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
              },
              {
                node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                  /* @__PURE__ */ r.jsx("span", { children: l.message }),
                  l.context && Object.keys(l.context).length > 0 && /* @__PURE__ */ r.jsxs("details", { className: "fdp-spc-chart__warning-context", style: { marginTop: 4 }, children: [
                    /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                    /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(l.context, null, 2) })
                  ] })
                ] }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message"
              }
            ];
          }),
          classes: "fdp-spc-chart__warnings-table-wrapper",
          tableClasses: "fdp-spc-chart__warnings-table"
        }
      )
    ] })
  ] }) : null;
}
function M0({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const Ss = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...c
}) => {
  const d = tr(), u = tr(), { start: f, mid: h, end: p } = Ea(), x = o || s0[e], m = (i || i0[e]).slice(0, 2), g = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": g,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: d, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: x, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: x, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${u})` : "#ffffff",
            ...a ? { filter: `url(#${d})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: x,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: m })
          }
        ),
        l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          e === gn.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: x,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === gn.Uncertain ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "uncertain-line",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "16.5,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 36,174 L 266,174"
            }
          ) : /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "pass-line",
              stroke: x,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 48,204 L 254,204"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "data-sparkline",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 12,
              strokeMiterlimit: 12,
              fill: "none",
              d: "M 59.9,187.91 C 72.79,171.72 87.33,158.06 104.4,157.83 121.91,158.58 140.94,187.85 153.4,189.91 164.1,192.12 163.78,171.38 169.17,170.53 172.87,169.55 174.88,187.45 184.94,189.24 197,191.86 230.54,184.47 239.01,185.9"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: x,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          )
        ] })
      ]
    }
  );
};
Ss.displayName = "SPCAssuranceIcon";
const I0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: gn,
  Direction: Ge,
  MetricPolarity: mt,
  SPCAssuranceIcon: Ss,
  SPCVariationIcon: ws,
  VariationJudgement: Nt,
  VariationState: Pe,
  getVariationColour: mc,
  getVariationTrend: bs
}, Symbol.toStringTag, { value: "Module" }));
function D0(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: o, variant: s, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (b) => !b.data.ghost && b.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let b = l.length - 1; b >= 0; b--) {
    const v = l[b];
    if (v && v.data.value != null && !v.data.ghost) {
      u = b;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, x = h === qe.Neither && !!f.classification?.neutralSpecialCauseValue, m = p === dn.Pass ? gn.Pass : p === dn.Fail ? gn.Fail : gn.Uncertain;
  let g;
  if (h === qe.Suppressed) {
    const b = !!f.rules.singlePoint.up, v = !!f.rules.singlePoint.down;
    o === cn.Up ? b ? g = Ge.Higher : v && (g = Ge.Lower) : o === cn.Down ? v ? g = Ge.Lower : b && (g = Ge.Higher) : g = Ge.Higher;
  } else if (h === qe.Neither && x) {
    const b = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, v = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    b && !v ? g = Ge.Higher : v && !b ? g = Ge.Lower : g = Ge.Higher;
  }
  const S = 80, I = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, j = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let k = Ee.CommonCause;
  return h === qe.Improvement ? k = Ee.ImprovementHigh : h === qe.Concern ? k = Ee.ConcernHigh : h === qe.Neither && (x ? g === Ge.Lower || j && !I ? k = Ee.NeitherLow : k = Ee.NeitherHigh : k = Ee.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": g ? String(g) : "none",
            style: { width: S, height: S },
            children: /* @__PURE__ */ r.jsx(
              ws,
              {
                dropShadow: !1,
                data: {
                  variationIcon: k,
                  improvementDirection: o,
                  specialCauseNeutral: x,
                  highSideSignal: I,
                  lowSideSignal: j,
                  ...g ? { trend: g } : {}
                },
                letterMode: o === cn.Neither ? fr.Direction : fr.Polarity,
                size: S,
                variant: s,
                runLength: s === yn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: S, height: S },
            children: /* @__PURE__ */ r.jsx(
              Ss,
              {
                status: m,
                size: S,
                dropShadow: !1
              }
            )
          }
        )
      ]
    },
    `embedded-icon-${u}`
  );
}
const Nc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = rn(), d = un(), [u, f] = K.useState(null), [h, p] = K.useState(!1), x = K.useRef(null);
  K.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), x.current && (cancelAnimationFrame(x.current), x.current = null)), !c.focused && !h) {
        const Le = requestAnimationFrame(() => {
          f(null), x.current = null;
        });
        x.current = Le;
      }
      return () => {
        x.current && (cancelAnimationFrame(x.current), x.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const m = c && (c.focused || (h ? u : null) || u), [g, S] = K.useState(!1);
  K.useEffect(() => {
    const Le = requestAnimationFrame(() => S(!0));
    return () => cancelAnimationFrame(Le);
  }, [m?.index]);
  const I = d?.innerWidth ?? 0, j = d?.innerHeight ?? 0, k = m ? Math.min(Math.max(m.clientX, 0), I) : 0, b = m ? Math.min(Math.max(m.clientY, 0), j) : 0, v = d?.ref?.current || void 0;
  if (!m)
    return null;
  const C = e?.[m.index], y = La(
    C ? {
      specialCauseSinglePointUp: !!C.rules.singlePoint.up,
      specialCauseSinglePointDown: !!C.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!C.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!C.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!C.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!C.rules.fourOfFive.down,
      specialCauseShiftUp: !!C.rules.shift.up,
      specialCauseShiftDown: !!C.rules.shift.down,
      specialCauseTrendUp: !!C.rules.trend.up,
      specialCauseTrendDown: !!C.rules.trend.down
    } : null
  ).map((Le) => ({ id: Le, label: En[Le].tooltip })), w = m.x instanceof Date ? m.x : new Date(m.x), E = s ? s(w) : w.toDateString(), T = o ? `${o}` : "", L = a || T ? `${m.y}${T ? "" + T : " "}${a ? " " + a : ""}` : `${m.y}`, M = Aa(C?.classification?.variation), N = hc(C?.classification?.assurance), D = a0(
    t.mean ?? null,
    t.sigma,
    m.y
  ), R = n ? n(m.index, { x: m.x, y: m.y }) : void 0, Z = M || N || D, Q = C?.rules.trend.up || C?.rules.trend.down, B = C?.classification?.variation === qe.Neither && Q, J = l && B ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, F = y.length > 0, $ = C && "primeDirection" in C ? C.primeDirection : void 0, q = C && "primeRuleId" in C ? C.primeRuleId : void 0, A = i && C?.classification?.variation === qe.Neither && F, z = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", P = pc(C?.classification?.variation), V = 6.2, ee = [
    R || "",
    `${E} • ${L}`
  ].filter(Boolean).reduce(
    (Le, _e) => Math.max(Le, _e.length * V + 32),
    0
  ), de = 200, Y = 440, ae = Math.min(Y, Math.max(de, ee));
  let le = k + 12, pe = (d.margin?.top ?? 0) + b + 16;
  le + ae > I && (le = k - -60 - ae), le < 0 && (le = Math.max(0, I - ae));
  const Ie = m ? `spc-tooltip-${m.index}` : "spc-tooltip", Ve = typeof m.index == "number" ? m.index : NaN, Te = v ? _d(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: Ie,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (g ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: le,
          top: pe,
          width: ae,
          maxWidth: Y,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": g ? "false" : "true",
        "data-floating": !0,
        "data-placement": le + ae + 12 > I ? "left" : "right",
        onPointerEnter: () => {
          p(!0), x.current && (cancelAnimationFrame(x.current), x.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const Le = requestAnimationFrame(() => {
              f(null), x.current = null;
            });
            x.current = Le;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ve
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: E })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: L })
          ] }),
          Z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: M?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: M,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : M?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: M,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : A ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : M ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: M,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          N && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Le = N.toLowerCase(), H = !(Le.includes("not met") || Le.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Le);
              return /* @__PURE__ */ r.jsx(
                st,
                {
                  text: N,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${H ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${N}`
                }
              );
            })() })
          ] }),
          D && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              st,
              {
                text: (() => {
                  const Le = D.toLowerCase();
                  return Le.startsWith("within 1") ? "≤1σ" : Le.startsWith("1–2") ? "1–2σ" : Le.startsWith("2–3") ? "2–3σ" : Le.startsWith(">3") ? ">3σ" : D;
                })(),
                color: D.includes(">3") ? "orange" : D.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${D}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          J && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: J })
          ] }),
          F && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: Le, label: _e }) => {
                  const H = String(Le), se = H === ur.TrendIncreasing || H === ur.TrendDecreasing ? "fdp-spc-tag--trend" : A ? "fdp-spc-tag--no-judgement" : M ? M.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : M.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    st,
                    {
                      text: _e,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${se}`,
                      "data-rule-id": H
                    },
                    H
                  );
                })
              }
            ),
            $ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Le = A ? "fdp-spc-tag--no-judgement" : M ? M.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : M.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", _e = `${$}${q ? ` (${q})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  st,
                  {
                    text: _e,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Le}`,
                    "aria-label": `Prime direction ${$}${q ? ` via ${q}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    v
  ) : null;
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: b,
            r: 7,
            fill: "none",
            stroke: z,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: b,
            r: 5,
            fill: "#000",
            stroke: z,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: b,
            r: 2.5,
            fill: P,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Te
      ]
    }
  );
}, T0 = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = rn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = K.useMemo(
    () => l ? La({
      specialCauseSinglePointUp: !!l.rules.singlePoint.up,
      specialCauseSinglePointDown: !!l.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!l.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!l.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!l.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!l.rules.fourOfFive.down,
      specialCauseShiftUp: !!l.rules.shift.up,
      specialCauseShiftDown: !!l.rules.shift.down,
      specialCauseTrendUp: !!l.rules.trend.up,
      specialCauseTrendDown: !!l.rules.trend.down
    }) : [],
    [l]
  ), d = K.useMemo(
    () => Array.from(
      new Set(c.map((m) => En[m]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? Aa(l.classification?.variation) : null, f = l ? hc(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === qe.Neither && h : !1, x = K.useRef(null);
  return K.useEffect(() => {
    if (!a || !s || l == null) return;
    const m = `${s.seriesId}:${s.index}`;
    if (x.current !== m) {
      x.current = m;
      try {
        a({
          index: s.index,
          x: s.x,
          y: s.y,
          row: l,
          rules: c
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, c, a]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "fdp-spc-inspector",
      role: "region",
      "aria-label": "Signals inspector",
      "data-testid": "spc-signals-inspector",
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-inspector__header",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ r.jsx("strong", { children: "Signals inspector" }),
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !o, children: o && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      o.focused ? o.focusPrevPoint() : o.focusFirstPoint();
                    },
                    "aria-label": "Previous point",
                    children: "◀"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      o.focused ? o.focusNextPoint() : o.focusFirstPoint();
                    },
                    "aria-label": "Next point",
                    children: "▶"
                  }
                )
              ] }) })
            ]
          }
        ),
        !l || !s ? /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Point:" }),
                  " ",
                  s.index + 1
                ] }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Value:" }),
                  " ",
                  s.y,
                  n ? ` ${n}` : "",
                  t ? ` ${t}` : ""
                ] })
              ]
            }
          ),
          (u || p || f) && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-inspector__signals",
              style: { marginTop: 8 },
              children: /* @__PURE__ */ r.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    alignItems: "center"
                  },
                  children: [
                    u?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), S = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        st,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${S ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                          "aria-label": `Assurance: ${f}`
                        }
                      );
                    })()
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__rules", style: { marginTop: 8 }, children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Special cause:" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                style: {
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  marginTop: 4
                },
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((m) => {
                  const g = String(m), I = g === ur.TrendIncreasing || g === ur.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", j = En[m]?.tooltip || g;
                  return /* @__PURE__ */ r.jsx(
                    st,
                    {
                      text: j,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${I}`,
                      "data-rule-id": g,
                      title: En[m]?.tooltip
                    },
                    g
                  );
                })
              }
            )
          ] }),
          d.length > 0 && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Summary:" }),
                " ",
                d.join("; ")
              ]
            }
          )
        ] })
      ]
    }
  );
};
function L0(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === gt.Common && n[s - 1] === n[s + 1] && n[s - 1] !== gt.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== gt.Common && (n[o] = gt.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, c = l - o + 1;
        (i === gt.Common || c >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
var Kn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Kn || {}), Cc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Cc || {});
function A0(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: o,
    a11y: s,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: d,
    height: u,
    showZones: f,
    showPoints: h,
    announceFocus: p,
    className: x,
    unit: m,
    targets: g,
    baselines: S,
    ghosts: I,
    settings: j,
    chartType: k,
    metricImprovement: b,
    gradientSequences: v,
    sequenceTransition: C,
    processLineWidth: _,
    showPartitionMarkers: y,
    showWarningsPanel: w,
    warningsFilter: E,
    enableNeutralNoJudgement: T,
    showTrendGatingExplanation: L,
    trendVisualMode: M,
    alwaysShowZeroY: N,
    alwaysShowHundredY: D,
    percentScale: R,
    showTrendStartMarkers: Z,
    showFirstFavourableCrossMarkers: Q,
    showTrendBridgeOverlay: B,
    showSignalsInspector: J,
    onSignalFocus: F,
    showIcons: $,
    showEmbeddedIcon: q,
    embeddedIconVariant: A,
    embeddedIconRunLength: z,
    showFocusIndicator: P,
    visualsScenario: V,
    visualsEngineSettings: G,
    source: ee,
    narrationContext: de,
    highlightOutOfControl: Y,
    precomputed: ae
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (g !== void 0 || S !== void 0 || I !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && j !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (u !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || de !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (V !== void 0 || G !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && Y !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && ee !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const le = n?.data ?? c ?? [], be = n?.targets ?? g, pe = n?.baselines ?? S, Ie = n?.ghosts ?? I, Ve = a?.chartType ?? k ?? dc.XmR, Te = a?.metricImprovement ?? b ?? cn.Neither, Le = a?.settings ?? j, _e = a?.autoRecalc, H = t?.axes?.alwaysShowZeroY ?? N ?? !1, X = t?.axes?.alwaysShowHundredY ?? D ?? !1, se = t?.axes?.percentScale ?? R ?? !1, he = t?.visuals?.gradientSequences ?? v ?? !0, me = t?.visuals?.sequenceTransition ?? C ?? "slope", O = t?.visuals?.processLineWidth ?? _ ?? 2, W = t?.visuals?.trend?.visualMode ?? M ?? "ungated", oe = t?.visuals?.trend?.showGatingExplanation ?? L ?? !0, te = t?.visuals?.rules?.enableNeutralNoJudgement ?? T ?? !0, re = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, ce = t?.visuals?.showZones, ue = t?.visuals?.showPoints, ve = t?.visuals?.rules?.highlightOutOfControl, Ne = o?.height, He = o?.className, Ye = s?.label, lt = s?.unit, Qe = s?.narrationContext, ie = i?.scenario, $e = i?.settings, U = l?.source, ne = t?.overlays?.partitionMarkers ?? y ?? !1, xe = t?.overlays?.trendStartMarkers ?? Z ?? !1, ge = t?.overlays?.firstFavourableCrossMarkers ?? Q ?? !1, ye = t?.overlays?.trendBridge ?? B ?? !1, Se = t?.inspector?.show ?? J ?? !1, Be = t?.inspector?.onFocus ?? F, Ce = t?.warnings?.show ?? w ?? !1, Me = t?.warnings?.filter ?? E, we = t?.icons?.show ?? $ ?? !1, je = t?.icons?.embedded?.show ?? q ?? !0, Ke = t?.icons?.embedded?.variant ?? A ?? yn.Classic, ot = t?.icons?.embedded?.runLength ?? z, Ae = t?.overlays?.focusIndicator ?? P ?? !0;
  return {
    effData: le,
    effTargets: be,
    effBaselines: pe,
    effGhosts: Ie,
    effChartTypeCore: Ve,
    effMetricImprovementCore: Te,
    effEngineSettings: Le,
    effEngineAutoRecalc: _e,
    effHeight: Ne,
    effClassName: He,
    effAriaLabel: Ye,
    effUnit: lt,
    effNarrationContext: Qe,
    effShowZones: ce,
    effShowPoints: ue,
    effHighlightOutOfControl: ve,
    effVisualsScenario: ie,
    effVisualsEngineSettings: $e,
    effPrecomputedVisuals: ae,
    effSource: U,
    effAlwaysShowZeroY: H,
    effAlwaysShowHundredY: X,
    effPercentScale: se,
    effGradientSequences: he,
    effSequenceTransition: me,
    effProcessLineWidth: O,
    effTrendVisualMode: W,
    effShowTrendGatingExplanation: oe,
    effEnableNeutralNoJudgement: te,
    effEnableRules: re,
    effShowPartitionMarkers: ne,
    effShowTrendStartMarkers: xe,
    effShowFirstFavourableCrossMarkers: ge,
    effShowTrendBridgeOverlay: ye,
    effShowSignalsInspector: Se,
    effOnSignalFocus: Be,
    effShowWarningsPanel: Ce,
    effWarningsFilter: Me,
    effShowIcons: we,
    effShowEmbeddedIcon: je,
    effEmbeddedIconVariant: Ke,
    effEmbeddedIconRunLength: ot,
    effShowFocusIndicator: Ae
  };
}
let $0 = 0;
const E0 = ({ data: e, targets: t, visuals: n, a11y: a, axis: o, compute: s }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: c,
    partitionMarkers: d
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: h,
    showZones: p,
    highlightOutOfControl: x,
    gradientSequences: m,
    sequenceTransition: g,
    processLineWidth: S,
    showFocusIndicator: I = !1,
    enableRules: j,
    enableNeutralNoJudgement: k = !0,
    showTrendStartMarkers: b = !1,
    showFirstFavourableCrossMarkers: v = !1,
    showTrendBridgeOverlay: C = !1
  } = n, {
    announceFocus: _,
    ariaLabel: y,
    narrationContext: w,
    showSignalsInspector: E = !1,
    onSignalFocus: T,
    showTrendGatingExplanation: L = !0
  } = a, { zeroBreakSlotGapPx: M } = o, { metricImprovement: N, effectiveUnit: D } = s, R = kn(), Z = un();
  if (!R) return null;
  const { xScale: Q, yScale: B } = R, J = K.useRef(
    "spc-seq-" + ++$0
  ), F = rn(), $ = i[0]?.data || [], q = K.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const H = /* @__PURE__ */ new Set();
    return $.forEach((X, se) => {
      typeof u.ucl == "number" && X.y > u.ucl && H.add(se), typeof u.lcl == "number" && X.y < u.lcl && H.add(se);
    }), H;
  }, [u.ucl, u.lcl, $]), A = K.useMemo(() => {
    if (!l || !l.length) return null;
    const H = [];
    return l.forEach((X, se) => {
      const he = X.classification.variation === qe.Concern || X.classification.variation === qe.Improvement || !!X.classification.neutralSpecialCauseValue, me = !!X.rules.singlePoint.up || !!X.rules.twoOfThree.up || !!X.rules.fourOfFive.up || !!X.rules.shift.up || !!X.rules.trend.up, O = !!X.rules.singlePoint.down || !!X.rules.twoOfThree.down || !!X.rules.fourOfFive.down || !!X.rules.shift.down || !!X.rules.trend.down;
      H[se] = {
        variation: X.classification.variation,
        assurance: X.classification.assurance,
        special: he,
        concern: X.classification.variation === qe.Concern,
        improvement: X.classification.variation === qe.Improvement,
        trendUp: !!X.rules.trend.up,
        trendDown: !!X.rules.trend.down,
        upAny: me,
        downAny: O,
        neutralSpecial: !!X.classification.neutralSpecialCauseValue,
        shiftUp: !!X.rules.shift.up,
        shiftDown: !!X.rules.shift.down,
        twoOfThreeUp: !!X.rules.twoOfThree.up,
        twoOfThreeDown: !!X.rules.twoOfThree.down,
        fourOfFiveUp: !!X.rules.fourOfFive.up,
        fourOfFiveDown: !!X.rules.fourOfFive.down,
        partitionId: X.partition.id ?? null
      };
    }), H;
  }, [l]), z = K.useMemo(() => (c || []).map((H) => H === it.Improvement ? gt.Improvement : H === it.Concern ? gt.Concern : H === it.NoJudgement ? gt.NoJudgement : gt.Common), [c]), P = K.useMemo(() => !m || !z.length ? [] : L0(z, !0), [m, z, y]), V = K.useMemo(
    () => $.map((H) => Q(H.x instanceof Date ? H.x : new Date(H.x))),
    [$, Q]
  ), G = Q.range()[1], ee = Q.range()[0], de = K.useMemo(() => {
    if (!l || !l.length)
      return null;
    let H = Number.POSITIVE_INFINITY, X = Number.POSITIVE_INFINITY;
    if (l.forEach((te, re) => {
      te.rules.trend.up && (H = Math.min(H, re)), te.rules.trend.down && (X = Math.min(X, re));
    }), !Number.isFinite(H) && !Number.isFinite(X))
      return null;
    const se = H <= X, he = se ? Et.Up : Et.Down, me = se ? H : X, O = (te) => N == null || N === cn.Neither || te == null || typeof te.data.value != "number" || typeof te.limits.mean != "number" ? !1 : he === Et.Up ? N === cn.Up ? te.data.value > te.limits.mean : te.data.value < te.limits.mean : N === cn.Down ? te.data.value < te.limits.mean : te.data.value > te.limits.mean;
    let W = null;
    for (let te = me; te < l.length; te++) {
      const re = l[te];
      if (!(se ? !!re.rules.trend.up : !!re.rules.trend.down)) break;
      if (O(re)) {
        W = te;
        break;
      }
    }
    let oe = !1;
    if (W != null) {
      let te = 0;
      for (let re = W; re < l.length; re++) {
        const ce = l[re];
        if (!(se ? !!ce.rules.trend.up : !!ce.rules.trend.down)) break;
        O(ce) && te++;
      }
      oe = te >= 2;
    }
    return {
      direction: he,
      detectedAt: me,
      firstFavourableCrossAt: W,
      persistedAcrossMean: oe
    };
  }, [l, N]), Y = K.useMemo(() => {
    if (!l || !l.length) return null;
    const H = (X) => {
      const se = [];
      let he = null, me = null;
      for (let O = 0; O < l.length; O++) {
        const W = l[O], oe = X(W), te = typeof oe == "number" && !isNaN(oe) ? oe : null;
        if (te == null) {
          he !== null && me != null && (se.push({
            x1: V[he],
            x2: V[O - 1],
            y: B(me)
          }), he = null, me = null);
          continue;
        }
        if (he === null) {
          he = O, me = te;
          continue;
        }
        me != null && Math.abs(te - me) <= 1e-9 || (me != null && se.push({
          x1: V[he],
          x2: V[O - 1],
          y: B(me)
        }), he = O, me = te);
      }
      return he !== null && me != null && se.push({
        x1: V[he],
        x2: V[l.length - 1],
        y: B(me)
      }), se;
    };
    return {
      mean: H((X) => X.limits.mean ?? null),
      ucl: H((X) => X.limits.ucl ?? null),
      lcl: H((X) => X.limits.lcl ?? null),
      onePos: H((X) => X.limits.oneSigma.upper ?? null),
      oneNeg: H((X) => X.limits.oneSigma.lower ?? null),
      twoPos: H((X) => X.limits.twoSigma.upper ?? null),
      twoNeg: H((X) => X.limits.twoSigma.lower ?? null)
    };
  }, [l, V, B]), ae = K.useMemo(() => P.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${J.current}-grad-common`,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: [
          /* @__PURE__ */ r.jsx(
            "stop",
            {
              offset: "0%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.28
            }
          ),
          /* @__PURE__ */ r.jsx(
            "stop",
            {
              offset: "70%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.12
            }
          ),
          /* @__PURE__ */ r.jsx(
            "stop",
            {
              offset: "100%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.045
            }
          )
        ]
      }
    ),
    P.map((H, X) => {
      const se = `${J.current}-grad-${X}`;
      let he, me = 0.28, O = 0.12, W = 0.045;
      switch (H.category) {
        case gt.Concern:
          he = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", me = 0.28, O = 0.12, W = 0.045;
          break;
        case gt.Improvement:
          he = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", me = 0.26, O = 0.11, W = 0.045;
          break;
        case gt.NoJudgement:
          he = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", me = 0.26, O = 0.11, W = 0.045;
          break;
        default:
          he = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: se, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: he, stopOpacity: me }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: he, stopOpacity: O }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: he, stopOpacity: W })
      ] }, se);
    })
  ] }) : null, [P]), le = K.useMemo(() => {
    if (!P.length) return null;
    const [H] = B.domain(), X = B(H), se = P.map((he, me) => {
      const { start: O, end: W, category: oe } = he;
      if (O < 0 || W >= V.length || O > W)
        return null;
      const te = V[O], re = V[W];
      let ce = "";
      if (oe === gt.Common) {
        const ue = me > 0 ? P[me - 1] : null, ve = me < P.length - 1 ? P[me + 1] : null, Ne = ue ? V[ue.end] : ee, He = ue ? B($[ue.end].y) : X, Ye = ve ? V[ve.start] : G, lt = ve ? B($[ve.start].y) : X;
        ce = `M ${Ne} ${X}`, ce += ` L ${Ne} ${He}`;
        for (let Qe = O; Qe <= W; Qe++)
          ce += ` L ${V[Qe]} ${B($[Qe].y)}`;
        ce += ` L ${Ye} ${lt}`, ce += ` L ${Ye} ${X} Z`;
      } else {
        const ue = me > 0 ? P[me - 1] : null, ve = me < P.length - 1 ? P[me + 1] : null, Ne = ue && ue.category !== gt.Common, He = ve && ve.category !== gt.Common, Ye = B($[O].y), lt = B($[W].y);
        let Qe = te, ie = re;
        if (Ne) {
          const $e = V[ue.end], U = B($[ue.end].y), ne = $[O].y - $[ue.end].y;
          g === Kn.Slope && ne > 0 ? (ce = `M ${$e} ${U} L ${te} ${Ye}`, Qe = $e) : (ce = `M ${te} ${X} L ${te} ${Ye}`, Qe = te);
        } else
          ce = `M ${te} ${X} L ${te} ${Ye}`;
        for (let $e = O + 1; $e <= W; $e++)
          ce += ` L ${V[$e]} ${B($[$e].y)}`;
        if (ce += ` L ${re} ${lt}`, He) {
          const $e = V[ve.start], U = B($[ve.start].y), ne = $[ve.start].y - $[W].y;
          (g === Kn.Slope && ne <= 0 || g === Kn.Extend) && (ce += ` L ${$e} ${U}`, ie = $e);
        }
        if (ce += ` L ${ie} ${X}`, ce += ` L ${Qe} ${X} Z`, g === Kn.Neutral && Ne) {
          const $e = V[ue.end], U = B($[ue.end].y), ne = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${$e} ${X} L ${$e} ${U} L ${te} ${Ye} L ${te} ${X} Z`,
              fill: `url(#${J.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${me}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            ne,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: ce,
                fill: `url(#${J.current}-grad-${me})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${me}`
            )
          ] }, `seq-group-${me}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: ce,
          fill: `url(#${J.current}-grad-${me})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${me}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: se });
  }, [P, V, G, B, $, g]), be = K.useMemo(() => {
    if (!w?.timeframe && $.length >= 2) {
      const H = $.map((W) => W.x instanceof Date ? W.x : new Date(W.x)), X = new Date(Math.min(...H.map((W) => W.getTime()))), se = new Date(Math.max(...H.map((W) => W.getTime()))), he = Math.round((se.getTime() - X.getTime()) / 864e5) || 0;
      if (he < 14)
        return `The chart shows a timeframe of ${he + 1} days`;
      const me = Math.round(he / 7);
      return me < 20 ? `The chart shows a timeframe of ${me} weeks` : `The chart shows a timeframe of ${(se.getFullYear() - X.getFullYear()) * 12 + (se.getMonth() - X.getMonth()) + 1} months`;
    }
    if (w?.timeframe)
      return `The chart shows a timeframe of ${w.timeframe}`;
  }, [w?.timeframe, $]), pe = (H) => {
    const X = H % 10, se = H % 100;
    return X === 1 && se !== 11 ? `${H}st` : X === 2 && se !== 12 ? `${H}nd` : X === 3 && se !== 13 ? `${H}rd` : `${H}th`;
  }, Ie = (H) => `${pe(H.getDate())} ${H.toLocaleString("en-GB", { month: "long" })}, ${H.getFullYear()}`, Ve = (H) => ({
    specialCauseSinglePointUp: !!H?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!H?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!H?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!H?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!H?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!H?.rules.fourOfFive.down,
    specialCauseShiftUp: !!H?.rules.shift.up,
    specialCauseShiftDown: !!H?.rules.shift.down,
    specialCauseTrendUp: !!H?.rules.trend.up,
    specialCauseTrendDown: !!H?.rules.trend.down
  }), Te = K.useCallback(
    ({
      index: H,
      x: X,
      y: se
    }) => {
      const he = l?.[H], me = X instanceof Date ? X : new Date(X), O = Ie(me), W = w?.measureUnit ? ` ${w.measureUnit}` : "", oe = w?.measureName ? ` ${w.measureName}` : "";
      if (!he)
        return `General summary is: ${be ? be + ". " : ""}Point ${H + 1}, ${O}, ${se}${W}${oe}`;
      const te = Aa(he.classification?.variation) || "Variation", re = La(Ve(he)), ce = re.length ? ` Rules: ${[...new Set(re.map((ve) => En[ve].narration))].join("; ")}.` : " No special cause rules.", ue = [];
      return w?.measureName && ue.push(`Measure: ${w.measureName}.`), w?.datasetContext && ue.push(`${w.datasetContext}.`), w?.organisation && ue.push(`Organisation: ${w.organisation}.`), w?.additionalNote && ue.push(w.additionalNote), [
        "General summary is:",
        ...ue,
        `Point ${H + 1} recorded on `,
        O + ",",
        `with a value of ${se} ${W}${oe}`,
        te + ".",
        ce
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, w, be]
  ), Le = K.useCallback(
    (H, X) => l?.[H] ? Te({
      index: H,
      seriesId: "process",
      x: X.x instanceof Date ? X.x : new Date(X.x),
      y: X.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Te]
  ), _e = K.useMemo(() => {
    try {
      const H = typeof B?.domain == "function" ? B.domain() : void 0;
      if (!H || !Array.isArray(H) || H.length < 2) return !1;
      const X = Math.min(H[0], H[1]), se = Math.max(H[0], H[1]);
      return !(0 >= X && 0 <= se);
    } catch {
      return !1;
    }
  }, [B]);
  return /* @__PURE__ */ r.jsx(Xg, { children: /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart",
      children: [
        /* @__PURE__ */ r.jsx(
          "svg",
          {
            width: R.xScale.range()[1] + 56 + 16,
            height: (Z?.innerHeight ?? R.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Di, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                Di,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: _e,
                    gapPx: M,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(gg, { axis: "y" }),
              ae,
              le,
              d.map((H, X) => {
                const se = $[H];
                if (!se) return null;
                const he = Q(se.x instanceof Date ? se.x : new Date(se.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: he,
                    x2: he,
                    y1: 0,
                    y2: B.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${X}`
                );
              }),
              Y?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                Y.mean.map((H, X) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: H.x1,
                    x2: H.x2,
                    y1: H.y,
                    y2: H.y
                  },
                  `mean-${X}`
                )),
                Y.mean.map((H, X) => {
                  if (X === Y.mean.length - 1) return null;
                  const se = Y.mean[X + 1];
                  if (!se || H.y === se.y) return null;
                  const me = Math.max(4, se.x1 - H.x2 || 0) * 0.5, O = `M ${H.x2},${H.y} C ${H.x2 + me},${H.y} ${se.x1 - me},${se.y} ${se.x1},${se.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: O,
                      fill: "none"
                    },
                    `mean-join-${X}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              Y?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    Y.ucl.map((H, X) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: H.x1,
                        x2: H.x2,
                        y1: H.y,
                        y2: H.y,
                        strokeWidth: 2
                      },
                      `ucl-${X}`
                    )),
                    Y.ucl.map((H, X) => {
                      if (X === Y.ucl.length - 1) return null;
                      const se = Y.ucl[X + 1];
                      if (!se || H.y === se.y) return null;
                      const me = Math.max(4, se.x1 - H.x2 || 0) * 0.5, O = `M ${H.x2},${H.y} C ${H.x2 + me},${H.y} ${se.x1 - me},${se.y} ${se.x1},${se.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: O,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${X}`
                      );
                    })
                  ]
                }
              ) : null,
              Y?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    Y.lcl.map((H, X) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: H.x1,
                        x2: H.x2,
                        y1: H.y,
                        y2: H.y,
                        strokeWidth: 2
                      },
                      `lcl-${X}`
                    )),
                    Y.lcl.map((H, X) => {
                      if (X === Y.lcl.length - 1) return null;
                      const se = Y.lcl[X + 1];
                      if (!se || H.y === se.y) return null;
                      const me = Math.max(4, se.x1 - H.x2 || 0) * 0.5, O = `M ${H.x2},${H.y} C ${H.x2 + me},${H.y} ${se.x1 - me},${se.y} ${se.x1},${se.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: O,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${X}`
                      );
                    })
                  ]
                }
              ) : null,
              f != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: Q.range()[1],
                    y1: B(f),
                    y2: B(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: Q.range()[0] - 7,
                    y: B(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      D || w?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && Y && Y.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                Y.onePos.map((H, X) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: H.x1,
                    x2: H.x2,
                    y1: H.y,
                    y2: H.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${X}`
                )),
                Y.oneNeg.map((H, X) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: H.x1,
                    x2: H.x2,
                    y1: H.y,
                    y2: H.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${X}`
                )),
                Y.twoPos.map((H, X) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: H.x1,
                    x2: H.x2,
                    y1: H.y,
                    y2: H.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${X}`
                )),
                Y.twoNeg.map((H, X) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: H.x1,
                    x2: H.x2,
                    y1: H.y,
                    y2: H.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${X}`
                ))
              ] }),
              de && (b || v || C) && (() => {
                const H = de.detectedAt, X = de.firstFavourableCrossAt, se = $[H] ? Q(
                  $[H].x instanceof Date ? $[H].x : new Date($[H].x)
                ) : null, he = $[H] ? B($[H].y) : null, me = X != null && $[X] ? Q(
                  $[X].x instanceof Date ? $[X].x : new Date($[X].x)
                ) : null, O = X != null && $[X] ? B($[X].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  C && se != null && he != null && me != null && O != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: se,
                      y1: he,
                      x2: me,
                      y2: O,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  b && se != null && he != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  v && me != null && O != null && /* @__PURE__ */ r.jsx("circle", { cx: me, cy: O, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Kg,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (H) => H.x instanceof Date ? H.x : new Date(H.x),
                  smooth: !1,
                  strokeWidth: S
                }
              ),
              h && $.map((H, X) => {
                const se = Q(H.x instanceof Date ? H.x : new Date(H.x)), he = B(H.y), me = q.has(X), O = A?.[X], W = z[X], oe = W === gt.Improvement, te = W === gt.Concern, re = W === gt.NoJudgement, ce = [
                  "fdp-spc__point",
                  me && x ? "fdp-spc__point--ooc" : null,
                  j && te ? "fdp-spc__point--sc-concern" : null,
                  j && oe ? "fdp-spc__point--sc-improvement" : null,
                  j && k && re ? "fdp-spc__point--sc-no-judgement" : null,
                  O?.assurance === dn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  O?.assurance === dn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ue = F?.focused?.index === X;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: se,
                    cy: he,
                    r: 5,
                    className: ce,
                    "data-variation": O?.variation,
                    "data-assurance": O?.assurance,
                    "aria-label": y,
                    ...ue ? { "aria-describedby": `spc-tooltip-${X}` } : {}
                  },
                  X
                );
              }),
              I && E && F?.focused && (() => {
                const H = F.focused, X = typeof H.index == "number" ? H.index : -1;
                if (X < 0 || !$[X]) return null;
                const se = Q(
                  $[X].x instanceof Date ? $[X].x : new Date($[X].x)
                ), he = B($[X].y), me = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 7,
                      fill: "none",
                      stroke: me,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 5,
                      fill: "#000",
                      stroke: me,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              Z && /* @__PURE__ */ r.jsx(
                F0,
                {
                  width: Q.range()[1],
                  height: B.range()[0]
                }
              ),
              !E && /* @__PURE__ */ r.jsx(
                Nc,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Le,
                  measureName: w?.measureName,
                  measureUnit: w?.measureUnit,
                  dateFormatter: (H) => Ie(H),
                  enableNeutralNoJudgement: k,
                  showTrendGatingExplanation: L
                }
              )
            ] })
          }
        ),
        E && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          T0,
          {
            engineRows: l,
            measureName: w?.measureName,
            measureUnit: D || w?.measureUnit,
            onSignalFocus: T
          }
        ) }),
        _ && /* @__PURE__ */ r.jsx(
          Qg,
          {
            format: (H) => Te({ ...H, x: H.x instanceof Date ? H.x : new Date(H.x) })
          }
        )
      ]
    }
  ) });
}, F0 = ({
  width: e,
  height: t
}) => {
  const n = rn();
  return n ? /* @__PURE__ */ r.jsx(
    "rect",
    {
      className: "fdp-spc__interaction-layer",
      width: e,
      height: t,
      fill: "transparent",
      tabIndex: 0,
      "aria-label": "Interactive chart area. Use arrow keys to move between points.",
      onMouseMove: (a) => {
        const s = a.currentTarget.getBoundingClientRect(), i = a.clientX - s.left, l = a.clientY - s.top;
        n.focusNearest(i, l);
      },
      onMouseLeave: () => n.clear(),
      onKeyDown: (a) => {
        switch (a.key) {
          case "ArrowRight":
            n.focusNextPoint(), a.preventDefault();
            break;
          case "ArrowLeft":
            n.focusPrevPoint(), a.preventDefault();
            break;
          case "ArrowDown":
            n.focusNextSeries(), a.preventDefault();
            break;
          case "ArrowUp":
            n.focusPrevSeries(), a.preventDefault();
            break;
          case "Home":
            n.focusFirstPoint(), a.preventDefault();
            break;
          case "End":
            n.focusLastPoint(), a.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
};
function Oi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function P0(e, t, n) {
  const a = new Array(e), o = new Date(t);
  for (let s = 0; s < e; s++)
    switch (a[s] = new Date(o), n) {
      case "hourly":
        o.setHours(o.getHours() + 1);
        break;
      case "daily":
        o.setDate(o.getDate() + 1);
        break;
      case "weekly":
        o.setDate(o.getDate() + 7);
        break;
      case "monthly":
        o.setMonth(o.getMonth() + 1);
        break;
      case "quarterly":
        o.setMonth(o.getMonth() + 3);
        break;
      case "annually":
        o.setFullYear(o.getFullYear() + 1);
        break;
    }
  return a;
}
function R0(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++)
    a.push(n[c].getTime() - n[c - 1].getTime());
  const o = a.sort((c, d) => c - d), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function Ui(e, t) {
  if (e)
    try {
      switch (t) {
        case "hourly":
          return new Intl.DateTimeFormat(void 0, {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "daily":
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "weekly":
          return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e)}`;
        case "monthly":
          return new Intl.DateTimeFormat(void 0, {
            month: "short",
            year: "numeric"
          }).format(e);
        case "quarterly":
          return `Q${Math.floor(e.getMonth() / 3) + 1} ${e.getFullYear()}`;
        case "annually":
          return `${e.getFullYear()}`;
        default:
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
      }
    } catch {
      return;
    }
}
function B0(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function H0(e, t, n = 1) {
  switch (e || t) {
    case "hourly":
      return n === 1 ? "last hour" : `last ${n} hours`;
    case "daily":
      return n === 1 ? "last day" : `last ${n} days`;
    case "weekly":
      return n === 1 ? "last week" : `last ${n} weeks`;
    case "monthly":
      return n === 1 ? "last month" : `last ${n} months`;
    case "quarterly":
      return n === 1 ? "last quarter" : `last ${n} quarters`;
    case "annually":
      return n === 1 ? "last year" : `last ${n} years`;
    default:
      return "previous";
  }
}
function jc(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: c = !0,
    autoMetadata: d = !0,
    deltaConfig: u
  } = e, f = t.map(
    (y) => typeof y == "number" ? y : y == null ? null : Number(y)
  );
  let h = -1;
  for (let y = f.length - 1; y >= 0; y--)
    if (f[y] != null) {
      h = y;
      break;
    }
  let p = (n || []).map(Oi);
  if (!p.some(Boolean)) {
    const y = Oi(o);
    y && a ? p = P0(f.length, y, a) : p = new Array(f.length).fill(void 0);
  }
  const m = R0(p, a), g = B0(
    f,
    s,
    i,
    e.percentHeuristic
  ), S = l && h >= 0 && f[h] != null ? f[h] : void 0, I = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function j() {
    if (h < 0) return -1;
    if (I.strategy === "previous" || I.strategy === "n-points") {
      let L = h - (I.strategy === "previous" ? 1 : Math.max(1, I.n || 1));
      if (!I.skipNulls) return L;
      for (let M = L; M >= 0; M--) if (f[M] != null) return M;
      return -1;
    }
    const y = p[h];
    if (!y) return -1;
    const w = new Date(y);
    w.setFullYear(w.getFullYear() - 1);
    let E = -1, T = 1 / 0;
    for (let L = 0; L < p.length; L++) {
      const M = p[L];
      if (!M || f[L] == null) continue;
      const N = Math.abs(M.getTime() - w.getTime());
      N < T && (T = N, E = L);
    }
    return E;
  }
  const k = j(), b = k >= 0 ? f[k] : null;
  let v;
  if (c && S != null && b != null) {
    const y = S - b, w = I.absolute !== !1, E = w ? y : b === 0 ? 0 : y / Math.abs(b) * 100;
    v = {
      value: Number.isFinite(E) ? Number(E.toFixed(2)) : 0,
      isPercent: w ? g === "%" : !0,
      period: `vs ${H0(m, a, I.strategy === "n-points" ? Math.max(1, I.n || 1) : 1)}`
    };
  }
  const C = h >= 0 ? p[h] : void 0, _ = d && Ui(C, m) ? `Latest: ${Ui(C, m)}` : void 0;
  return { value: S, unit: g, delta: v, metadata: _, latestDate: C, frequency: m };
}
function z0(e) {
  const { rows: t } = br(e), n = vs(e);
  return { rows: t, visuals: n.visuals };
}
const ks = 13;
function Ns(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case it.Improvement:
          return qe.Improvement;
        case it.Concern:
          return qe.Concern;
        case it.NoJudgement:
          return qe.Neither;
        default:
          return null;
      }
    });
}
function Mc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === it.NoJudgement);
}
function Wi(e, t) {
  const n = e === Mt.G ? Mt.G : e === Mt.T ? Mt.T : Mt.XmR, a = t === Xe.Up ? Xe.Up : t === Xe.Down ? Xe.Down : Xe.Neither;
  return { chartType: n, metricImprovement: a };
}
function Gi(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : ks, o = { minimumPoints: a };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= a && (o.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (o.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(o, n), Object.keys(o).length ? o : void 0;
}
function O0(e, t, n) {
  const a = K.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: o, totalReservedPx: s } = K.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = Tr, u = c + ug, f = n?.maxFraction, h = Math.max(
      Lr,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: o, totalReservedPx: s };
}
function U0(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
  }
  const o = e.map((c) => c.y), s = (c) => {
    c != null && o.push(c);
  };
  if (s(t.mean), s(t.ucl), s(t.lcl), s(t.onePos), s(t.oneNeg), s(t.twoPos), s(t.twoNeg), a && a.length)
    for (const c of a)
      typeof c == "number" && !isNaN(c) && o.push(c);
  if (!o.length) return;
  let i = Math.min(...o), l = Math.max(...o);
  return n.alwaysShowZeroY && (i = Math.min(0, i)), n.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function Do(e, t) {
  if (!e?.length || t.chartType !== Mt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const x = e[p], m = x.value;
    x?.ghost || typeof m == "number" && Number.isFinite(m) && a.push({ idx: p, value: m });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let p = 1; p < a.length; p++)
    o += Math.abs(a[p].value - a[p - 1].value), s++;
  if (s === 0) return null;
  const l = o / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Xe.Up, u = t.metricImprovement === Xe.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, x) {
    let m = 0, g = 0;
    for (let S = p; S < x; S++)
      m += a[S].value, g++;
    return g ? m / g : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const x = h(p - n, p), m = h(p, p + n);
    if (!Number.isFinite(x) || !Number.isFinite(m)) continue;
    const g = m - x, S = g / l;
    let I = !1, j = !1;
    if (d ? (I = S >= c, j = !0) : u ? (I = -S >= c, j = !1) : (I = Math.abs(S) >= c, j = g > 0), !I) continue;
    const k = (C) => j ? C > x : C < x;
    let b = !0;
    for (let C = p; C < p + n; C++)
      if (!k(a[C].value)) {
        b = !1;
        break;
      }
    if (!b) continue;
    const v = a[p].idx;
    if (!(t.minGap && f >= 0 && v - f < t.minGap))
      return v;
  }
  return null;
}
function W0(e, t) {
  const n = Do(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
function G0(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return W0(e, t);
  let a = e.slice(), o = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const i = Do(a, { ...t, minGap: s });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = Do(a, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      a = a.map((c, d) => d === l ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), o++;
  }
  return a;
}
const V0 = (e) => {
  const t = K.useCallback(
    (Ce) => String(Ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((we) => we.length ? we[0].toUpperCase() + we.slice(1) : we).join(" "),
    []
  ), n = K.useCallback(
    (Ce) => String(Ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Me) => Me.length ? Me[0].toUpperCase() + Me.slice(1) : Me).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: a,
    effTargets: o,
    effBaselines: s,
    effGhosts: i,
    effChartTypeCore: l,
    effMetricImprovementCore: c,
    effEngineSettings: d,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: p,
    effSequenceTransition: x,
    effProcessLineWidth: m,
    effTrendVisualMode: g,
    effShowTrendGatingExplanation: S,
    effEnableNeutralNoJudgement: I,
    effEnableRules: j,
    effShowPartitionMarkers: k,
    effShowTrendStartMarkers: b,
    effShowFirstFavourableCrossMarkers: v,
    effShowTrendBridgeOverlay: C,
    effShowSignalsInspector: _,
    effOnSignalFocus: y,
    effShowWarningsPanel: w,
    effWarningsFilter: E,
    effShowEmbeddedIcon: T,
    effEmbeddedIconVariant: L,
    effEmbeddedIconRunLength: M,
    effShowFocusIndicator: N,
    effHeight: D,
    effClassName: R,
    effAriaLabel: Z,
    effUnit: Q,
    effNarrationContext: B,
    effShowZones: J,
    effShowPoints: F,
    effHighlightOutOfControl: $,
    effVisualsScenario: q,
    effVisualsEngineSettings: A,
    effSource: z,
    effPrecomputedVisuals: P,
    effEngineAutoRecalc: V
  } = A0(e), G = Z ?? e.ariaLabel, ee = D ?? e.height ?? 260, de = R ?? e.className, Y = Q ?? e.unit, ae = B ?? e.narrationContext, le = J ?? e.showZones, be = F ?? e.showPoints, pe = $ ?? e.highlightOutOfControl, Ie = q ?? e.visualsScenario ?? wc.None, Ve = A ?? e.visualsEngineSettings, Te = z ?? e.source, Le = e.a11y?.announceFocus ?? e.announceFocus ?? !1, _e = K.useMemo(() => a.map((Ce, Me) => ({
    x: Ce.x,
    value: Ce.y,
    target: o?.[Me] ?? void 0,
    baseline: s?.[Me] ?? void 0,
    ghost: i?.[Me] ?? void 0
  })), [a, o, s, i]), H = K.useMemo(() => {
    try {
      const Ce = V;
      return Ce?.enabled ? G0(_e, {
        chartType: l,
        metricImprovement: c,
        shiftLength: Ce.shiftLength,
        deltaSigma: Ce.deltaSigma,
        minGap: Ce.minGap,
        maxInsertions: Ce.maxInsertions
      }) : _e;
    } catch {
      return _e;
    }
  }, [_e, V, l, c]), X = K.useMemo(() => {
    if (P?.visuals) return P.visuals;
    try {
      const Ce = Gi(
        d,
        H,
        Ve
      ), { chartType: Me, metricImprovement: we } = Wi(
        l,
        c
      ), je = {
        chartType: Me,
        metricImprovement: we,
        data: H,
        settings: Ce
      }, { visuals: Ke } = w0(je, Ie, {
        trendVisualMode: g === Cc.Ungated ? zn.Ungated : zn.Gated,
        enableNeutralNoJudgement: I
      });
      return Ke || [];
    } catch {
      return [];
    }
  }, [
    P?.visuals?.length,
    H,
    l,
    c,
    g,
    I,
    d,
    Ie,
    Ve
  ]), he = K.useMemo(() => {
    if (P?.rows)
      try {
        const Ce = P.rows, Me = (we) => {
          switch (we) {
            case Ee.ImprovementHigh:
            case Ee.ImprovementLow:
              return qe.Improvement;
            case Ee.ConcernHigh:
            case Ee.ConcernLow:
              return qe.Concern;
            case Ee.NeitherHigh:
            case Ee.NeitherLow:
              return qe.Neither;
            case Ee.CommonCause:
            default:
              return qe.Neither;
          }
        };
        return Ce.map(
          (we, je) => ({
            data: {
              value: we.value,
              ghost: !!we.ghost
            },
            partition: { id: we.partitionId },
            limits: {
              mean: we.mean,
              ucl: we.upperProcessLimit,
              lcl: we.lowerProcessLimit,
              oneSigma: { upper: we.upperOneSigma, lower: we.lowerOneSigma },
              twoSigma: { upper: we.upperTwoSigma, lower: we.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!we.singlePointUp, down: !!we.singlePointDown },
              twoOfThree: { up: !!we.twoSigmaUp, down: !!we.twoSigmaDown },
              fourOfFive: { up: !!we.fourOfFiveUp, down: !!we.fourOfFiveDown },
              shift: { up: !!we.shiftUp, down: !!we.shiftDown },
              trend: { up: !!we.trendUp, down: !!we.trendDown }
            },
            classification: {
              variation: Me(we.variationIcon),
              neutralSpecialCauseValue: we.variationIcon === Ee.NeitherHigh || we.variationIcon === Ee.NeitherLow ? we.specialCauseImprovementValue ?? we.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: H[je]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = Gi(
        d,
        H,
        Ve
      ), { chartType: Me, metricImprovement: we } = Wi(
        l,
        c
      ), je = {
        chartType: Me,
        metricImprovement: we,
        data: H,
        settings: Ce
      }, { rows: Ke } = z0(je), ot = (Ae) => {
        switch (Ae) {
          case Ee.ImprovementHigh:
          case Ee.ImprovementLow:
            return qe.Improvement;
          case Ee.ConcernHigh:
          case Ee.ConcernLow:
            return qe.Concern;
          case Ee.NeitherHigh:
          case Ee.NeitherLow:
            return qe.Neither;
          case Ee.CommonCause:
          default:
            return qe.Neither;
        }
      };
      return Ke.map(
        (Ae, Fe) => ({
          data: {
            value: Ae.value,
            ghost: !!Ae.ghost
          },
          partition: { id: Ae.partitionId },
          limits: {
            mean: Ae.mean,
            ucl: Ae.upperProcessLimit,
            lcl: Ae.lowerProcessLimit,
            oneSigma: { upper: Ae.upperOneSigma, lower: Ae.lowerOneSigma },
            twoSigma: { upper: Ae.upperTwoSigma, lower: Ae.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!Ae.singlePointUp, down: !!Ae.singlePointDown },
            twoOfThree: { up: !!Ae.twoSigmaUp, down: !!Ae.twoSigmaDown },
            fourOfFive: { up: !!Ae.fourOfFiveUp, down: !!Ae.fourOfFiveDown },
            shift: { up: !!Ae.shiftUp, down: !!Ae.shiftDown },
            trend: { up: !!Ae.trendUp, down: !!Ae.trendDown }
          },
          classification: {
            variation: ot(Ae.variationIcon),
            neutralSpecialCauseValue: Ae.variationIcon === Ee.NeitherHigh || Ae.variationIcon === Ee.NeitherLow ? Ae.specialCauseImprovementValue ?? Ae.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: H[Fe]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    P?.rows?.length,
    H,
    l,
    c,
    d,
    Ve
  ]) || null, me = (he || []).slice().reverse().find((Ce) => Ce.limits.mean != null), O = me?.limits.mean ?? null, W = K.useMemo(() => {
    const Ce = [];
    try {
      const Me = he, we = d?.minimumPoints ?? 13, je = d?.minimumPoints ?? 12;
      if (Me && Me.length) {
        const Ke = Me.filter(
          (Ae) => !Ae.data.ghost && Ae.data.value != null
        ).length;
        Ke < we && Ce.push({
          code: Kr.InsufficientPointsGlobal,
          severity: Ft.Warning,
          category: Xr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: Ke, minimumPoints: we }
        });
        const ot = /* @__PURE__ */ new Map();
        for (const Ae of Me) {
          const Fe = Ae.partition.id ?? 0, Ue = ot.get(Fe) || { size: 0, nonGhost: 0 };
          Ue.size += 1, !Ae.data.ghost && Ae.data.value != null && (Ue.nonGhost += 1), ot.set(Fe, Ue);
        }
        for (const [Ae, Fe] of ot)
          Fe.nonGhost > 0 && Fe.nonGhost < je && Ce.push({
            code: Kr.InsufficientPointsPartition,
            severity: Ft.Warning,
            category: Xr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: Ae,
              nonGhostCount: Fe.nonGhost,
              minimumPointsPartition: je
            }
          });
      }
    } catch {
    }
    return Ce;
  }, [he, d?.minimumPoints]), oe = K.useMemo(() => W.length ? E ? W.filter((Ce) => !(E.severities && Ce.severity && !E.severities.includes(Ce.severity) || E.categories && Ce.category && !E.categories.includes(Ce.category) || E.codes && !E.codes.includes(Ce.code))) : W : [], [W, E]), te = me?.limits.ucl ?? null, re = me?.limits.lcl ?? null, ce = me?.limits.oneSigma.upper ?? null, ue = me?.limits.oneSigma.lower ?? null, ve = me?.limits.twoSigma.upper ?? null, Ne = me?.limits.twoSigma.lower ?? null, He = O != null && ce != null ? Math.abs(ce - O) : 0, Ye = K.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), lt = K.useMemo(
    () => U0(
      a,
      { mean: O, ucl: te, lcl: re, onePos: ce, oneNeg: ue, twoPos: ve, twoNeg: Ne },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      o ?? null
    ),
    [
      a,
      O,
      te,
      re,
      ce,
      ue,
      ve,
      Ne,
      o,
      u,
      f,
      h
    ]
  ), Qe = K.useMemo(() => {
    const Ce = (Me) => {
      const we = Me.filter(
        (Ke) => typeof Ke == "number" && !isNaN(Ke)
      );
      if (!we.length) return null;
      const je = we[0];
      return we.every((Ke) => Ke === je) ? je : null;
    };
    if (he && he.length) {
      const Me = Ce(he.map((we) => we.target));
      if (Me != null) return Me;
    }
    return o && o.length ? Ce(o) : null;
  }, [he, o]), { show: ie, slotPx: $e, totalReservedPx: U } = O0(
    lt,
    ee,
    { maxFraction: 0.35 }
  ), ne = ie ? U : 0, xe = K.useMemo(() => {
    const Ce = a.map((Me) => Me.x);
    return jc({
      values: a.map((Me) => Me.y),
      dates: Ce,
      providedUnit: Y || ae?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, Y, ae?.measureUnit]), ge = Y ?? ae?.measureUnit ?? xe.unit, ye = K.useMemo(() => ge ? { ...ae || {}, measureUnit: ge } : ae, [ae, ge]), Se = K.useMemo(() => {
    if (!he) return [];
    const Ce = [];
    for (let Me = 1; Me < he.length; Me++)
      he[Me].partition.id !== he[Me - 1].partition.id && Ce.push(Me);
    return Ce;
  }, [he]), Be = K.useMemo(
    () => D0({
      show: !!T,
      rowsForUi: he,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: L,
      runLength: M
    }),
    [
      T,
      he,
      d?.minimumPoints,
      c,
      L,
      M
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: de ? `fdp-spc-chart-wrapper ${de}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          M0,
          {
            show: !!T,
            variationNode: Be,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          cg,
          {
            height: ee,
            ariaLabel: G,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(dg, { series: Ye, yDomain: lt, yBottomGapPx: ne, children: (() => {
              const Ce = {
                data: {
                  series: Ye,
                  engineRows: he,
                  visualCategories: X,
                  partitionMarkers: k ? Se : []
                },
                targets: {
                  limits: { mean: O, ucl: te, lcl: re, sigma: He, onePos: ce, oneNeg: ue, twoPos: ve, twoNeg: Ne },
                  uniformTarget: Qe
                },
                visuals: {
                  showPoints: be,
                  showZones: le,
                  highlightOutOfControl: pe,
                  gradientSequences: p,
                  sequenceTransition: x,
                  processLineWidth: m,
                  showFocusIndicator: N,
                  enableRules: j,
                  enableNeutralNoJudgement: I,
                  showTrendStartMarkers: b,
                  showFirstFavourableCrossMarkers: v,
                  showTrendBridgeOverlay: C
                },
                a11y: {
                  announceFocus: Le,
                  ariaLabel: G,
                  narrationContext: ye,
                  showSignalsInspector: _,
                  onSignalFocus: y,
                  showTrendGatingExplanation: S
                },
                axis: { zeroBreakSlotGapPx: $e },
                compute: { effectiveUnit: ge, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(E0, { ...Ce });
            })() })
          }
        ),
        Te && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Te == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Te
        ] }) : Te }),
        /* @__PURE__ */ r.jsx(
          j0,
          {
            show: !!w,
            warnings: oe,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Y0(e, t) {
  const {
    chartType: n = Mt.XmR,
    metricImprovement: a,
    minimumPoints: o = ks,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((j) => ({ x: j.x, value: j.value ?? j.y ?? null }));
  let c = null;
  try {
    const j = l.filter(
      (b) => typeof b.value == "number"
    ).length, k = { minimumPoints: o };
    j >= o && (k.chartLevelEligibility = !0), c = br({ chartType: n, metricImprovement: a, data: l, settings: k });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let j = d.length - 1; j >= 0; j--) {
    const k = d[j];
    if (k && k.value != null && !k.ghost) {
      u = k;
      break;
    }
  }
  let f = [];
  try {
    f = yr(d, {
      metricImprovement: a,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const h = Qr(
    u?.variationIcon
  ), p = u?.variationIcon ?? null, x = u?.mean ?? null, m = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, g = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let S, I;
  return i && (S = Ns(f), I = Mc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: x,
    controlLimits: m,
    sigmaBands: g,
    pointSignals: S,
    pointNeutralSpecialCause: I
  };
}
const P1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: dn,
  BaselineSuggestionReason: fc,
  ChartType: Mt,
  DEFAULT_MIN_POINTS: ks,
  Icons: I0,
  ImprovementDirection: Xe,
  PARITY_V26: _c,
  RULE_METADATA: uc,
  SPCChart: V0,
  SPCSpark: _s,
  SPCTooltipOverlay: Nc,
  SparkSize: ht,
  SpcEmbeddedIconVariant: yn,
  SpcVisualCategory: it,
  SpcWarningCategory: Xr,
  SpcWarningCode: Kr,
  SpcWarningSeverity: Ft,
  VARIATION_COLOR_TOKENS: Lt,
  VariationIcon: Ee,
  buildSpcV26a: br,
  buildSpcV26aWithVisuals: vs,
  computeSpcPrecomputed: Y0,
  computeSpcVisualCategories: yr,
  extractRuleIds: La,
  getVariationColorHex: o0,
  getVariationColorToken: pc,
  isSpecialCauseIcon: kc,
  mapIconToVariation: Qr,
  normaliseSpcSettingsV2: vc,
  ruleGlossary: En,
  variationLabel: Aa,
  visualsToNeutralFlags: Mc,
  visualsToPointSignals: Ns,
  withParityV26: _0
}, Symbol.toStringTag, { value: "Module" }));
function Z0(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function q0(e) {
  const {
    values: t,
    x: n,
    chartType: a = Mt.XmR,
    metricImprovement: o = Xe.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = K.useMemo(() => {
    const b = [];
    for (let v = 0; v < t.length; v++)
      b.push({ x: n?.[v], value: t[v] });
    return b;
  }, [t, n]), u = K.useMemo(() => {
    try {
      const b = d.map((y, w) => ({ x: y.x ?? w, value: y.value })), v = 13, C = b.filter((y) => typeof y.value == "number").length, _ = { minimumPoints: v };
      return C >= v && (_.chartLevelEligibility = !0), br({ chartType: a, metricImprovement: o, data: b, settings: _ });
    } catch {
      return null;
    }
  }, [d, a, o]), f = K.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    for (let v = b.length - 1; v >= 0; v--) {
      const C = b[v];
      if (C && C.value != null && !C.ghost) return C;
    }
    return b[b.length - 1] ?? null;
  }, [u]), h = K.useMemo(() => {
    const b = u?.rows;
    if (!b || b.length === 0) return null;
    let v = b[b.length - 1];
    for (let C = b.length - 1; C >= 0; C--) {
      const _ = b[C];
      if (_ && _.value != null && !_.ghost) {
        v = _;
        break;
      }
    }
    return Qr(v?.variationIcon);
  }, [u]), p = K.useMemo(() => f?.mean ?? null, [f]), x = K.useMemo(() => {
    if (!f) return null;
    const b = f?.lowerProcessLimit ?? null, v = f?.upperProcessLimit ?? null;
    return b == null && v == null ? null : { lower: b, upper: v };
  }, [f]), m = K.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), g = K.useMemo(() => {
    const b = u?.rows;
    if (!(!b || b.length === 0))
      try {
        return yr(b, {
          metricImprovement: o,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, o]), S = K.useMemo(() => Ns(g), [g?.length]), I = K.useMemo(() => {
    if (!(!g || g.length === 0))
      return g.map((b) => b === it.NoJudgement);
  }, [g?.length]), j = K.useMemo(() => {
    let b = null;
    if (f && f.value != null && !f.ghost) {
      const L = f.variationIcon;
      h === Pe.SpecialCauseNoJudgement ? b = kc(L) ? Pe.SpecialCauseNoJudgement : Pe.CommonCause : b = Qr(L) ?? Pe.CommonCause;
    }
    const v = b ?? Pe.CommonCause, C = $a[v].hex, [_, y, w] = Z0(C), E = Ea();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${_}, ${y}, ${w}, ${E.start}) 0%, rgba(${_}, ${y}, ${w}, ${E.mid}) 50%, rgba(${_}, ${y}, ${w}, ${E.end}) 100%)`,
      "--fdp-metric-card-accent": C
    };
  }, [f, h]);
  return { sparkProps: K.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: p,
    controlLimits: x,
    sigmaBands: m,
    pointSignals: S,
    pointNeutralSpecialCause: I,
    visualCategories: g,
    variationState: h ?? void 0
  }), [
    d,
    c,
    s,
    i,
    l,
    o,
    h,
    p,
    x?.lower,
    x?.upper,
    m?.upperTwo,
    m?.lowerOne,
    m?.lowerTwo,
    S?.length,
    I?.length,
    g?.length
  ]), metricCardStyle: j, latestState: h };
}
const R1 = ({
  sparkData: e,
  direction: t = Xe.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: h,
  deltaConfig: p,
  ...x
}) => {
  const m = q0({
    values: e.map((v) => v.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n
  }), g = /* @__PURE__ */ r.jsx(_s, { ...m.sparkProps, maxPoints: i }), S = K.useMemo(() => jc({
    values: e.map((v) => typeof v.value == "number" ? v.value : null),
    dates: e.map((v) => v.date),
    intervalHint: f,
    startDate: h,
    providedUnit: x.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, x.unit, u, l, c, d, p]), I = l && S.value != null ? S.value : x.value, j = c && S.delta ? S.delta : x.delta, k = S.unit || x.unit, b = d && S.metadata ? S.metadata : x.metadata;
  return /* @__PURE__ */ r.jsx(
    t0,
    {
      ...x,
      value: I,
      unit: k,
      delta: j,
      metadata: b,
      visual: g,
      style: m.metricCardStyle
    }
  );
};
function J0(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function X0(e = "auto") {
  const [t, n] = tt.useState(
    !1
  );
  return tt.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const a = window.matchMedia("(prefers-reduced-motion: reduce)"), o = () => n(a.matches);
    return o(), a.addEventListener?.("change", o), () => a.removeEventListener?.("change", o);
  }, [e]), e === "off" ? !1 : t;
}
function Vi(e, t) {
  return t[Math.floor(e() * t.length)];
}
function sn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function K0(e, t) {
  const n = e.seed ?? 1, a = J0(n), o = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ], d = (typeof e.callout.width == "number" ? e.callout.width : void 0) ?? Math.min(520, t * 0.7), u = (t - d) / 2, f = u + d, h = {
    left: u / t * 100,
    right: f / t * 100,
    top: 20,
    bottom: 80
  }, p = (m, g) => !(m > h.left - 6 && m < h.right + 6 && g > h.top - 10 && g < h.bottom + 10);
  let x = 0;
  for (; i.length < o && x < o * 50; ) {
    x++;
    const m = Vi(a, s), g = sn(a() * 1, 0.15, 0.95), S = 24 + a() * 72, I = a() * 100, j = a() * 100;
    if (!p(I, j)) continue;
    const k = Vi(a, l);
    if (m === "rect") {
      const b = 0.6 + a() * 0.8;
      i.push({
        kind: m,
        width: S * b,
        height: S,
        x: I,
        y: j,
        depth: g,
        fillToken: k,
        shadow: "soft"
      });
    } else
      i.push({
        kind: m,
        size: S,
        x: I,
        y: j,
        depth: g,
        fillToken: k,
        shadow: "soft"
      });
  }
  return i;
}
const B1 = (e) => {
  const {
    seed: t = 1,
    mode: n = "scroll",
    axis: a = "xy",
    height: o = 520,
    strength: s = 120,
    scrub: i = 0.3,
    scrollStart: l = "top bottom",
    scrollEnd: c = "bottom top",
    debugMarkers: d = !1,
    pin: u = !1,
    pinSpacing: f = !0,
    reducedMotion: h = "auto",
    callout: p,
    className: x,
    style: m
  } = e, g = tt.useRef(null), [S, I] = tt.useState({
    w: 1e3,
    h: 520
  }), j = X0(h), k = e.direction ?? "se", b = tt.useMemo(() => {
    switch (k) {
      case "ne":
        return { x: 1, y: -1 };
      case "nw":
        return { x: -1, y: -1 };
      case "sw":
        return { x: -1, y: 1 };
      case "se":
      default:
        return { x: 1, y: 1 };
    }
  }, [k]);
  tt.useLayoutEffect(() => {
    if (!g.current) return;
    const L = new ResizeObserver((M) => {
      for (const N of M) {
        const D = N.contentRect;
        I({ w: D.width, h: D.height });
      }
    });
    return L.observe(g.current), () => L.disconnect();
  }, []);
  const v = tt.useMemo(() => e.shapes && e.shapes.length ? e.shapes : K0(e, S.w), [t, S.w, S.h]), [C, _] = tt.useState(0), [y, w] = tt.useState(null);
  tt.useEffect(() => {
    if (n !== "scroll" || j) return;
    let L;
    return (async () => {
      if (typeof window > "u") return;
      const M = g.current;
      if (M)
        try {
          const N = await import("./index-C_MjGuuK.js"), D = await import("./ScrollTrigger-7ivQEezo.js"), R = N.default ?? N.gsap ?? N, Z = D.ScrollTrigger ?? D.default ?? D;
          R.registerPlugin(Z);
          const Q = Z.create({
            trigger: M,
            start: l,
            end: c,
            markers: d,
            pin: u,
            pinSpacing: f,
            scrub: i,
            invalidateOnRefresh: !0,
            onUpdate: (B) => _(B.progress)
          });
          w((B) => B === null ? Q.progress ?? 0.5 : B), d && window && (window.__parallaxRefresh = () => {
            try {
              Z.refresh();
            } catch {
            }
          }), L = () => {
            try {
              Q.kill();
            } catch {
            }
          };
        } catch {
          const D = () => {
            const R = M.getBoundingClientRect(), Z = window.innerHeight || document.documentElement.clientHeight, Q = R.height + Z, B = Z - R.top, J = sn(B / Q, 0, 1);
            w((F) => F === null ? J : F), _(J);
          };
          D(), window.addEventListener("scroll", D, { passive: !0 }), window.addEventListener("resize", D), L = () => {
            window.removeEventListener("scroll", D), window.removeEventListener("resize", D);
          };
        }
    })(), () => {
      L && L();
    };
  }, [n, j, l, c, d, u, f, i]), tt.useEffect(() => {
    if (n !== "timed" || j) return;
    let L = 0, M = performance.now();
    const N = 8e3, D = (R) => {
      const Q = (R - M) % N / N;
      _(Q), L = requestAnimationFrame(D);
    };
    return L = requestAnimationFrame(D), () => cancelAnimationFrame(L);
  }, [n, j]);
  const E = (L) => 0.15 + (L ?? 0.5) * 0.6, T = {
    position: "absolute",
    left: "50%",
    top: "50%",
    bottom: void 0,
    right: void 0,
    transform: "translate(-50%, -50%)",
    width: typeof p.width == "number" ? `${p.width}px` : p.width || "min(520px, 70%)"
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: g,
      className: ["nhs-parallax-scene", x].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof o == "number" ? `${o}px` : o,
        overflow: "hidden",
        ...m
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-parallax-canvas",
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ r.jsxs("defs", { children: [
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#2E61A5" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#1B3E73" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-aqua", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#1DC6D2" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#117E8A" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-green", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#2BC06A" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#1A874A" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-dark-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#003087" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-light-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#60b2e2" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-purple", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#ac98cb" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#d6cce3" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-green-palette", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#007f3b" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#63a691" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-grey", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#4c6272" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#768692" })
                ] })
              ] }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-connectors", children: v.map((L, M) => {
                const N = L.x, D = L.y, R = (L.width ?? L.size ?? 40) / S.w * 100 * 1, Z = (L.height ?? L.size ?? 40) / S.h * 100 * 1, Q = L.kind === "circle" ? [
                  [N, D - Z / 2],
                  [N + R / 2, D],
                  [N, D + Z / 2],
                  [N - R / 2, D]
                ] : L.kind === "rect" || L.kind === "svg" ? [
                  [N - R / 2, D - Z / 2],
                  [N + R / 2, D - Z / 2],
                  [N + R / 2, D + Z / 2],
                  [N - R / 2, D + Z / 2]
                ] : (
                  // hexagon approx points
                  [
                    [N - R / 2, D],
                    [N - R / 4, D - Z / 2],
                    [N + R / 4, D - Z / 2],
                    [N + R / 2, D],
                    [N + R / 4, D + Z / 2],
                    [N - R / 4, D + Z / 2]
                  ]
                ), B = E(L.depth), $ = (u ? C : C - (y ?? 0.5)) * s * B, q = a === "x" ? $ : a === "xy" ? $ * b.x : 0, A = a === "y" ? $ : a === "xy" ? $ * b.y : 0;
                return Q.map((z, P) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: sn(z[0] + q, 0, 100),
                    y1: sn(z[1] + A, 0, 100),
                    x2: sn(50 + q * 0.2, 0, 100),
                    y2: sn(50 + A * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${M}-${P}`
                ));
              }) }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-shapes", children: v.map((L, M) => {
                const N = E(L.depth), Z = (u ? C : C - (y ?? 0.5)) * s * N, Q = a === "x" ? Z : a === "xy" ? Z * b.x : 0, B = a === "y" ? Z : a === "xy" ? Z * b.y : 0, J = sn(L.x + Q, 0, 100), F = sn(L.y + B, 0, 100), $ = L.rotate ?? 0, q = [
                  "nhs-parallax-shape",
                  L.fillToken,
                  L.shadow && `nhs-parallax-shadow--${L.shadow}`
                ].filter(Boolean).join(" ");
                if (L.kind === "circle") {
                  const V = (L.size ?? 40) / S.w * 100 * 0.5;
                  return /* @__PURE__ */ r.jsx("circle", { cx: J, cy: F, r: V, className: q }, M);
                }
                if (L.kind === "rect") {
                  const V = (L.width ?? 48) / S.w * 100, G = (L.height ?? 36) / S.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: J - V / 2,
                      y: F - G / 2,
                      width: V,
                      height: G,
                      transform: `rotate(${$} ${J} ${F})`,
                      className: q
                    },
                    M
                  );
                }
                if (L.kind === "svg" && L.src) {
                  const V = (L.width ?? 48) / S.w * 100, G = (L.height ?? 48) / S.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: L.src,
                      x: J - V / 2,
                      y: F - G / 2,
                      width: V,
                      height: G,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${$} ${J} ${F})`,
                      className: q
                    },
                    M
                  );
                }
                const A = (L.size ?? 40) / S.w * 100, z = A * 0.866, P = [
                  [J - A / 2, F],
                  [J - A / 4, F - z / 2],
                  [J + A / 4, F - z / 2],
                  [J + A / 2, F],
                  [J + A / 4, F + z / 2],
                  [J - A / 4, F + z / 2]
                ].map((V) => V.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: P, className: q }, M);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: T,
            "aria-hidden": !1,
            children: /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: ["nhs-parallax-callout-inner", p.backgroundToken].filter(Boolean).join(" "),
                children: [
                  " ",
                  p.content,
                  " "
                ]
              }
            )
          }
        )
      ]
    }
  );
};
function Q0(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function ft(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ex(e, t, n, a, o, s, i, l, c, d, u, f) {
  const h = Q0(e), p = [], x = [], m = ["rect", "hex", "circle"], g = { x: 50, y: 50 }, S = a, I = 1200, j = 400, k = 1.2, b = {
    left: g.x - S.w / 2,
    right: g.x + S.w / 2,
    top: g.y - S.h / 2,
    bottom: g.y + S.h / 2
  }, v = !c && !!u && u.r > 0, C = !c && !!f && (f.rx > 0 || f.ry > 0), _ = (D, R) => {
    if (!v) return !1;
    const Z = D - g.x, Q = R - g.y;
    return Z * Z + Q * Q <= u.r * u.r;
  }, y = (D, R) => {
    if (!C) return !1;
    const Z = Math.max(1e-6, f.rx || 0), Q = Math.max(1e-6, f.ry || 0), B = (D - g.x) / Z, J = (R - g.y) / Q;
    return B * B + J * J <= 1;
  }, w = (D, R) => !(D.right < R.left || D.left > R.right || D.bottom < R.top || D.top > R.bottom), E = (D) => D.left >= 0 && D.top >= 0 && D.right <= 100 && D.bottom <= 100, T = (D, R, Z, Q, B, J) => {
    let F = 0, $ = 0;
    if (D === "rect") {
      const q = Q ?? 48, A = B ?? 36;
      F = q / I * 100, $ = A / j * 100;
    } else if (D === "circle") {
      const q = J ?? 40;
      F = q / I * 100, $ = q / j * 100;
    } else {
      const q = J ?? 40;
      F = q / I * 100, $ = q * s / j * 100;
    }
    return {
      left: R - F / 2 - k,
      right: R + F / 2 + k,
      top: Z - $ / 2 - k,
      bottom: Z + $ / 2 + k
    };
  };
  let L = 0;
  const M = ft(Math.round(t), 4, 48);
  let N = null;
  if (d) {
    const D = Math.ceil(Math.sqrt(M)), R = Math.ceil(M / D);
    N = [];
    for (let Z = 0; Z < R; Z++)
      for (let Q = 0; Q < D && !(N.length >= M); Q++) {
        const B = (Q + 0.5) / D * 100, J = (Z + 0.5) / R * 100;
        N.push({ x: B, y: J });
      }
  }
  for (; p.length < M && L < M * 120; ) {
    L++;
    const D = m[Math.floor(h() * m.length)];
    let R, Z;
    if (d && N && N.length) {
      const F = p.length % N.length;
      R = N[F].x, Z = N[F].y;
    } else {
      const F = ft(o ?? 0, 0, 1), $ = () => h() * 100, q = () => {
        const z = Math.max(h(), 1e-6), P = Math.max(h(), 1e-6), V = Math.sqrt(-2 * Math.log(z)), G = 2 * Math.PI * P;
        return 50 + V * Math.cos(G) * 12.5;
      }, A = (z, P, V) => z * (1 - V) + P * V;
      R = ft(A($(), q(), F), 0, 100), Z = ft(A($(), q(), F), 0, 100);
    }
    const Q = T(D, R, Z, 32, 24, 28);
    if (!E(Q)) continue;
    const B = ft(h(), 0.15, 0.95), J = 0;
    if (D === "rect") {
      const F = 40 + h() * 80, $ = 28 + h() * 64, q = T(D, R, Z, F, $);
      if (!c && (w(q, b) || _(R, Z) || y(R, Z)))
        continue;
      if (!i) {
        let z = !1;
        for (let P = 0; P < x.length; P++)
          if (w(q, x[P])) {
            z = !0;
            break;
          }
        if (z) continue;
      }
      let A;
      if (i) {
        const z = /* @__PURE__ */ new Set();
        for (let V = 0; V < x.length; V++)
          if (w(q, x[V])) {
            const G = p[V].fill;
            G && z.add(G);
          }
        const P = n.filter((V) => !z.has(V));
        if (P.length === 0) {
          if (l === "skip") continue;
          A = n[Math.floor(h() * n.length)];
        } else
          A = P[Math.floor(h() * P.length)];
      } else
        A = n[Math.floor(h() * n.length)];
      x.push(q), p.push({ kind: D, x: R, y: Z, width: F, height: $, rotate: J, depth: B, fill: A, shadow: "soft" });
    } else if (D === "circle") {
      const F = 24 + h() * 80, $ = T(D, R, Z, void 0, void 0, F);
      if (!c && (w($, b) || _(R, Z) || y(R, Z)))
        continue;
      if (!i) {
        let A = !1;
        for (let z = 0; z < x.length; z++)
          if (w($, x[z])) {
            A = !0;
            break;
          }
        if (A) continue;
      }
      let q;
      if (i) {
        const A = /* @__PURE__ */ new Set();
        for (let P = 0; P < x.length; P++)
          if (w($, x[P])) {
            const V = p[P].fill;
            V && A.add(V);
          }
        const z = n.filter((P) => !A.has(P));
        if (z.length === 0) {
          if (l === "skip") continue;
          q = n[Math.floor(h() * n.length)];
        } else
          q = z[Math.floor(h() * z.length)];
      } else
        q = n[Math.floor(h() * n.length)];
      x.push($), p.push({ kind: D, x: R, y: Z, size: F, rotate: J, depth: B, fill: q, shadow: "soft" });
    } else {
      const F = 28 + h() * 72, $ = T(D, R, Z, void 0, void 0, F);
      if (!c && (w($, b) || _(R, Z) || y(R, Z)))
        continue;
      if (!i) {
        let A = !1;
        for (let z = 0; z < x.length; z++)
          if (w($, x[z])) {
            A = !0;
            break;
          }
        if (A) continue;
      }
      let q;
      if (i) {
        const A = /* @__PURE__ */ new Set();
        for (let P = 0; P < x.length; P++)
          if (w($, x[P])) {
            const V = p[P].fill;
            V && A.add(V);
          }
        const z = n.filter((P) => !A.has(P));
        if (z.length === 0) {
          if (l === "skip") continue;
          q = n[Math.floor(h() * n.length)];
        } else
          q = z[Math.floor(h() * z.length)];
      } else
        q = n[Math.floor(h() * n.length)];
      x.push($), p.push({ kind: D, x: R, y: Z, size: F, rotate: J, depth: B, fill: q, shadow: "soft" });
    }
  }
  return p;
}
const H1 = ({
  seed: e = 1,
  width: t = "100%",
  height: n = 400,
  density: a = 16,
  centrality: o = 0,
  gradients: s = [
    "pb-grad-aqua-green",
    "pb-grad-purple",
    "pb-grad-blue",
    "pb-grad-grey",
    "pb-grad-azure"
  ],
  shapes: i,
  neighbors: l = 1,
  connectorColor: c,
  connectorWidth: d,
  connectorDasharray: u,
  hexAspectRatio: f = Math.sqrt(3) / 2,
  allowOverlaps: h = !1,
  overlapColorPolicy: p = "recolor",
  feature: x,
  featureWidth: m = "min(640px, 80%)",
  featureLayer: g = "over",
  excludeBoxPct: S = { w: 50, h: 36 },
  excludeCirclePct: I,
  excludeEllipsePct: j,
  uniformDistribution: k = !1,
  className: b,
  style: v
}) => {
  const C = tt.useRef(null), [_, y] = tt.useState({ w: 1200, h: 400 });
  tt.useLayoutEffect(() => {
    if (!C.current) return;
    const N = new ResizeObserver((D) => {
      for (const R of D) {
        const Z = R.contentRect;
        y({ w: Z.width, h: Z.height });
      }
    });
    return N.observe(C.current), () => N.disconnect();
  }, []);
  const w = tt.useMemo(() => i?.length ? i : ex(
    e,
    a,
    s,
    S,
    o,
    f,
    h,
    p,
    g === "over" || k,
    k,
    I,
    j
  ), [
    e,
    a,
    s.join(","),
    S.w,
    S.h,
    o,
    f,
    h,
    p,
    g,
    k,
    I?.r,
    j?.rx,
    j?.ry,
    i
  ]), E = 100, T = 100, L = Math.sqrt(3) / 2, M = (N, D, R) => {
    const Z = (R ?? 40) / 2, Q = N / 100 * _.w, B = D / 100 * _.h, J = f / L;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map(($) => {
      const q = Q + Z * Math.cos($), A = B + Z * Math.sin($) * J;
      return [ft(q / _.w * 100, 0, 100), ft(A / _.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: C,
      className: [
        "nhs-pattern-banner",
        g === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        b
      ].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof n == "number" ? `${n}px` : n,
        ...v
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${E} ${T}`,
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ r.jsxs("defs", { children: [
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-aqua-green",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-purple",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(214, 203, 226)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "0.72", stopColor: "rgb(192, 177, 213)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(171, 151, 199)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-blue",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(38, 58, 127)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(34, 94, 171)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-grey",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(66, 85, 101)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(112, 132, 147)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-azure",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(96, 178, 226)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "0.51", stopColor: "rgb(34, 94, 172)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx("g", { children: (() => {
                const N = (F) => F / _.w * 100, D = (F) => F / _.h * 100, R = w.map((F) => {
                  const $ = ft(F.x, 0, 100), q = ft(F.y, 0, 100);
                  if (F.kind === "circle") return [[$, q]];
                  if (F.kind === "rect") {
                    const A = N(F.width ?? 48), z = D(F.height ?? 36);
                    return [
                      [$ - A / 2, q - z / 2],
                      [$ + A / 2, q - z / 2],
                      [$ + A / 2, q + z / 2],
                      [$ - A / 2, q + z / 2]
                    ];
                  }
                  if (F.kind === "svg") {
                    const A = N(F.width ?? 48), z = D(F.height ?? 48);
                    return [
                      [$ - A / 2, q - z / 2],
                      [$ + A / 2, q - z / 2],
                      [$ + A / 2, q + z / 2],
                      [$ - A / 2, q + z / 2]
                    ];
                  }
                  return M($, q, F.size ?? 40);
                }), Z = Math.max(1, Math.floor(l ?? 1)), Q = /* @__PURE__ */ new Set(), B = [];
                for (let F = 0; F < w.length; F++) {
                  const $ = [];
                  for (let A = 0; A < w.length; A++) {
                    if (F === A) continue;
                    const z = w[F].x - w[A].x, P = w[F].y - w[A].y;
                    $.push({ j: A, d2: z * z + P * P });
                  }
                  $.sort((A, z) => A.d2 - z.d2);
                  const q = Math.min(Z, $.length);
                  for (let A = 0; A < q; A++) {
                    const z = $[A].j, P = Math.min(F, z), V = Math.max(F, z), G = `${P}-${V}`;
                    Q.has(G) || (Q.add(G), B.push([P, V]));
                  }
                }
                const J = [];
                for (const [F, $] of B) {
                  const q = R[F], A = R[$];
                  let z = null;
                  for (const P of q)
                    for (const V of A) {
                      const G = P[0] - V[0], ee = P[1] - V[1], de = G * G + ee * ee;
                      (!z || de < z.d2) && (z = { p: P, q: V, d2: de });
                    }
                  z && J.push(
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: ft(z.p[0], 0, 100),
                        y1: ft(z.p[1], 0, 100),
                        x2: ft(z.q[0], 0, 100),
                        y2: ft(z.q[1], 0, 100),
                        className: "nhs-pattern-banner-connector",
                        style: {
                          stroke: c,
                          strokeWidth: d,
                          strokeDasharray: u
                        }
                      },
                      `nn-line-${F}-${$}`
                    )
                  );
                }
                return J;
              })() }),
              /* @__PURE__ */ r.jsx("g", { children: w.map((N, D) => {
                const R = ["nhs-pattern-banner-shape", N.fill].filter(Boolean).join(" ");
                if (N.kind === "circle") {
                  const F = (N.size ?? 40) / _.w * 100 * 0.5, $ = _.w / _.h, q = F * $;
                  return /* @__PURE__ */ r.jsx(
                    "ellipse",
                    {
                      cx: ft(N.x, 0, 100),
                      cy: ft(N.y, 0, 100),
                      rx: F,
                      ry: q,
                      className: R
                    },
                    D
                  );
                }
                if (N.kind === "rect") {
                  const F = (N.width ?? 48) / _.w * 100, $ = (N.height ?? 36) / _.h * 100, q = ft(N.x - F / 2, 0, 100), A = ft(N.y - $ / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: q,
                      y: A,
                      width: F,
                      height: $,
                      className: R
                    },
                    D
                  );
                }
                if (N.kind === "svg" && N.src) {
                  const F = (N.width ?? 48) / _.w * 100, $ = (N.height ?? 48) / _.h * 100, q = ft(N.x - F / 2, 0, 100), A = ft(N.y - $ / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: N.src,
                      x: q,
                      y: A,
                      width: F,
                      height: $,
                      preserveAspectRatio: "xMidYMid meet",
                      className: R
                    },
                    D
                  );
                }
                const Z = ft(N.x, 0, 100), Q = ft(N.y, 0, 100), J = M(Z, Q, N.size ?? 40).map((F) => F.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: J, className: R }, D);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-pattern-banner__feature",
            style: {
              width: typeof m == "number" ? `${m}px` : m
            },
            children: x
          }
        )
      ]
    }
  );
};
var tx = /* @__PURE__ */ ((e) => (e.Photo = "photo", e.Graphic = "graphic", e))(tx || {}), Qn = /* @__PURE__ */ ((e) => (e.Vertical = "vertical", e.Horizontal = "horizontal", e.Portrait = "portrait", e.Landscape = "landscape", e))(Qn || {}), jn = /* @__PURE__ */ ((e) => (e.AquaGreen = "aqua-green", e.Purple = "purple", e.Blue = "blue", e.Grey = "grey", e.Azure = "azure", e))(jn || {}), jt = /* @__PURE__ */ ((e) => (e.Rect = "rect", e.Hex = "hex", e.Circle = "circle", e))(jt || {}), hr = /* @__PURE__ */ ((e) => (e.None = "none", e.Soft = "soft", e.Strong = "strong", e))(hr || {}), nx = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e))(nx || {});
function rx(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const Jn = [
  jn.AquaGreen,
  jn.Purple,
  jn.Blue,
  jn.Grey,
  jn.Azure
];
function lo(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ax(e, t, n = 4) {
  const a = rx(e), o = [], s = [
    jt.Rect,
    jt.Hex,
    jt.Circle
  ], i = Jn.indexOf(t), l = [
    t,
    Jn[(i + 2) % Jn.length],
    Jn[(i + 3) % Jn.length]
  ], c = [], d = 1200, u = 400, f = 1.2, h = (S, I) => !(S.right < I.left || S.left > I.right || S.bottom < I.top || S.top > I.bottom), p = (S) => S.left >= 0 && S.top >= 0 && S.right <= 100 && S.bottom <= 100, x = (S, I, j, k, b, v) => {
    let C = 0, _ = 0;
    if (S === jt.Rect) {
      const y = k ?? 48, w = b ?? 36;
      C = y / d * 100, _ = w / u * 100;
    } else if (S === jt.Circle) {
      const y = v ?? 40;
      C = y / d * 100, _ = y / u * 100;
    } else {
      const y = v ?? 40;
      C = y / d * 100, _ = y * (Math.sqrt(3) / 2) / u * 100;
    }
    return {
      left: I - C / 2 - f,
      right: I + C / 2 + f,
      top: j - _ / 2 - f,
      bottom: j + _ / 2 + f
    };
  };
  let m = 0;
  const g = lo(Math.round(n), 4, 12);
  for (; o.length < g && m < g * 120; ) {
    m++;
    const S = s[Math.floor(a() * s.length)], I = lo(20 + a() * 60, 10, 90), j = lo(20 + a() * 60, 10, 90), k = l[Math.floor(a() * l.length)], b = o.length < 2 ? hr.Soft : hr.None;
    if (S === jt.Rect) {
      const v = 40 + a() * 80, C = 28 + a() * 64, _ = x(S, I, j, v, C);
      if (!p(_)) continue;
      let y = !1;
      for (let w = 0; w < c.length; w++)
        if (h(_, c[w])) {
          y = !0;
          break;
        }
      if (y) continue;
      c.push(_), o.push({ kind: S, x: I, y: j, width: v, height: C, gradient: k, rotate: 0, shadow: b });
    } else if (S === jt.Circle) {
      const v = 24 + a() * 80, C = x(S, I, j, void 0, void 0, v);
      if (!p(C)) continue;
      let _ = !1;
      for (let y = 0; y < c.length; y++)
        if (h(C, c[y])) {
          _ = !0;
          break;
        }
      if (_) continue;
      c.push(C), o.push({ kind: S, x: I, y: j, size: v, gradient: k, rotate: 0, shadow: b });
    } else {
      const v = 28 + a() * 72, C = a() * 360, _ = x(S, I, j, void 0, void 0, v);
      if (!p(_)) continue;
      let y = !1;
      for (let w = 0; w < c.length; w++)
        if (h(_, c[w])) {
          y = !0;
          break;
        }
      if (y) continue;
      c.push(_), o.push({ kind: S, x: I, y: j, size: v, gradient: k, rotate: C, shadow: b });
    }
  }
  return o;
}
const ox = ({ shapes: e, aspectRatio: t }) => {
  const a = 600 * t, o = 600, s = (l) => l.toFixed(2), i = (l, c, d) => {
    const u = d / 2;
    return [0, 60, 120, 180, 240, 300].map((h) => {
      const p = h * Math.PI / 180, x = l + u * Math.cos(p), m = c + u * Math.sin(p);
      return `${s(x)},${s(m)}`;
    }).join(" ");
  };
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhs-product-card__graphic",
      viewBox: `0 0 ${a} ${o}`,
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-aqua-green",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-purple",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(176, 161, 201)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(198, 189, 216)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-blue",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 94, 184)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(65, 131, 196)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-grey",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(76, 98, 114)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(174, 184, 192)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-azure",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 122, 204)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(103, 192, 229)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "filter",
            {
              id: "pc-shadow-soft",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ r.jsx("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "2" }),
                /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "2", result: "offsetblur" }),
                /* @__PURE__ */ r.jsx("feComponentTransfer", { children: /* @__PURE__ */ r.jsx("feFuncA", { type: "linear", slope: "0.2" }) }),
                /* @__PURE__ */ r.jsxs("feMerge", { children: [
                  /* @__PURE__ */ r.jsx("feMergeNode", {}),
                  /* @__PURE__ */ r.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "filter",
            {
              id: "pc-shadow-strong",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ r.jsx("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "4" }),
                /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                /* @__PURE__ */ r.jsx("feComponentTransfer", { children: /* @__PURE__ */ r.jsx("feFuncA", { type: "linear", slope: "0.3" }) }),
                /* @__PURE__ */ r.jsxs("feMerge", { children: [
                  /* @__PURE__ */ r.jsx("feMergeNode", {}),
                  /* @__PURE__ */ r.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("g", { style: { mixBlendMode: "multiply" }, children: (() => {
          if (e.length < 2) return null;
          const l = e.map((f) => {
            const h = f.x / 100 * a, p = f.y / 100 * o;
            if (f.kind === jt.Circle) {
              const x = (f.size ?? 40) / 2;
              return [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
                const S = g * Math.PI / 180;
                return [h + x * Math.cos(S), p + x * Math.sin(S)];
              });
            } else if (f.kind === jt.Rect) {
              const x = f.width ?? 60, m = f.height ?? 40;
              return [
                [h - x / 2, p - m / 2],
                [h + x / 2, p - m / 2],
                [h + x / 2, p + m / 2],
                [h - x / 2, p + m / 2]
              ];
            } else {
              const m = (f.size ?? 40) / 2;
              return [0, 60, 120, 180, 240, 300].map((S) => {
                const I = S * Math.PI / 180;
                return [h + m * Math.cos(I), p + m * Math.sin(I)];
              });
            }
          }), c = 1, d = /* @__PURE__ */ new Set(), u = [];
          for (let f = 0; f < e.length; f++) {
            const h = [];
            for (let x = 0; x < e.length; x++) {
              if (f === x) continue;
              const m = e[f].x - e[x].x, g = e[f].y - e[x].y;
              h.push({ j: x, d2: m * m + g * g });
            }
            h.sort((x, m) => x.d2 - m.d2);
            const p = Math.min(c, h.length);
            for (let x = 0; x < p; x++) {
              const m = h[x].j, g = Math.min(f, m), S = Math.max(f, m), I = `${g}-${S}`;
              d.has(I) || (d.add(I), u.push([g, S]));
            }
          }
          return u.map(([f, h]) => {
            const p = l[f], x = l[h];
            let m = null;
            for (const g of p)
              for (const S of x) {
                const I = g[0] - S[0], j = g[1] - S[1], k = I * I + j * j;
                (!m || k < m.d2) && (m = { p: g, q: S, d2: k });
              }
            return m ? /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: s(m.p[0]),
                y1: s(m.p[1]),
                x2: s(m.q[0]),
                y2: s(m.q[1]),
                stroke: "rgb(158, 171, 181)",
                strokeWidth: s(0.5),
                strokeMiterlimit: s(0.5)
              },
              `connector-${f}-${h}`
            ) : null;
          });
        })() }),
        e.map((l, c) => {
          const d = `pc-grad-${l.gradient}`, u = l.shadow === hr.Soft ? "url(#pc-shadow-soft)" : l.shadow === hr.Strong ? "url(#pc-shadow-strong)" : void 0, f = l.x / 100 * a, h = l.y / 100 * o, p = s(f), x = s(h);
          if (l.kind === jt.Rect) {
            const m = l.width || 60, g = l.height || 40;
            return /* @__PURE__ */ r.jsx(
              "rect",
              {
                className: d,
                x: s(f - m / 2),
                y: s(h - g / 2),
                width: s(m),
                height: s(g),
                transform: `rotate(${l.rotate || 0} ${p} ${x})`,
                filter: u
              },
              c
            );
          } else if (l.kind === jt.Circle) {
            const m = (l.size || 40) / 2;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                className: d,
                cx: p,
                cy: x,
                r: s(m),
                filter: u
              },
              c
            );
          } else if (l.kind === jt.Hex) {
            const m = l.size || 40;
            return /* @__PURE__ */ r.jsx(
              "polygon",
              {
                className: d,
                points: i(f, h, m),
                transform: `rotate(${l.rotate || 0} ${p} ${x})`,
                filter: u
              },
              c
            );
          }
          return null;
        })
      ]
    }
  );
}, z1 = ({
  title: e,
  description: t,
  image: n,
  layout: a = Qn.Vertical,
  buttons: o = [],
  badge: s,
  theme: i = "blue",
  className: l,
  style: c,
  onClick: d,
  href: u,
  headingLevel: f = 3,
  footer: h,
  elevated: p = !0,
  imageAspectRatio: x = 1.5
}) => {
  const m = tt.useMemo(() => a === Qn.Landscape ? "horizontal" : a === Qn.Portrait ? "vertical" : a === Qn.Horizontal ? "horizontal" : "vertical", [a]), g = tt.useMemo(() => {
    if (n?.type === "graphic") {
      if (n.shapes) return n.shapes;
      const v = n.seed ?? 0, C = n.theme ?? i;
      return ax(v, C);
    }
    return [];
  }, [n, i]), S = [
    "nhs-product-card",
    `nhs-product-card--${m}`,
    `nhs-product-card--theme-${i}`,
    p && "nhs-product-card--elevated",
    (d || u) && "nhs-product-card--clickable",
    l
  ].filter(Boolean).join(" "), I = (v) => {
    d ? d(v) : u && !v.defaultPrevented && (window.location.href = u);
  }, j = (v) => {
    (d || u) && (v.key === "Enter" || v.key === " ") && (v.preventDefault(), d ? d(v) : u && (window.location.href = u));
  }, k = () => {
    if (!n) return null;
    const v = [
      "nhs-product-card__image",
      n.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: v,
        style: { aspectRatio: x.toString() },
        children: n.type === "photo" && n.src ? /* @__PURE__ */ r.jsx("img", { src: n.src, alt: n.alt || "" }) : n.type === "graphic" ? /* @__PURE__ */ r.jsx(ox, { shapes: g, aspectRatio: x }) : null
      }
    );
  }, b = () => o.length ? /* @__PURE__ */ r.jsx("div", { className: "nhs-product-card__actions", children: o.map((v, C) => {
    const _ = [
      "nhs-product-card__button",
      `nhs-product-card__button--${v.variant || "primary"}`,
      v.disabled && "nhs-product-card__button--disabled"
    ].filter(Boolean).join(" ");
    return v.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: v.href,
        className: _,
        "aria-label": v.ariaLabel,
        onClick: (y) => {
          if (v.disabled) {
            y.preventDefault();
            return;
          }
          v.onClick && (y.stopPropagation(), v.onClick(y));
        },
        children: v.label
      },
      C
    ) : /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: _,
        disabled: v.disabled,
        "aria-label": v.ariaLabel,
        onClick: (y) => {
          v.onClick && (y.stopPropagation(), v.onClick(y));
        },
        children: v.label
      },
      C
    );
  }) }) : null;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: S,
      style: c,
      onClick: d || u ? I : void 0,
      onKeyDown: d || u ? j : void 0,
      role: d || u ? "button" : void 0,
      tabIndex: d || u ? 0 : void 0,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhs-product-card__badge", children: s }),
        k(),
        /* @__PURE__ */ r.jsxs("div", { className: "nhs-product-card__content", children: [
          /* @__PURE__ */ r.jsx(Ht, { level: f, className: "nhs-product-card__title", children: e }),
          /* @__PURE__ */ r.jsx("p", { className: "nhs-product-card__description", children: t }),
          b(),
          h && /* @__PURE__ */ r.jsx("div", { className: "nhs-product-card__footer", children: h })
        ] })
      ]
    }
  );
}, sx = "150ms", ix = "300ms", lx = "500ms", cx = "cubic-bezier(0.4, 0, 1, 1)", dx = "cubic-bezier(0, 0, 0.2, 1)", ux = "cubic-bezier(0.4, 0, 0.2, 1)", fx = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", hx = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", px = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", mx = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", gx = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", xx = "1px", yx = "2px", bx = "4px", vx = "4px", wx = "4px", _x = "2px", Sx = "1px", kx = "0px", Nx = "4px", Cx = "8px", jx = "12px", Ic = "#d8dde0", Dc = "#4c6272", Tc = "#d8dde0", Lc = "#aeb7bd", Ac = "#d5281b", $c = "#005eb8", Ec = "#ffffff", Fc = "#212b32", Pc = "#007f3b", Rc = "#330072", Bc = "#7c2855", Hc = "#d5281b", zc = "#ffeb3b", Oc = "#fff9c4", Uc = "#ffb81c", Wc = "#ed8b00", Gc = "#00a499", Vc = "#ae2573", Yc = "#4c6272", Zc = "#768692", qc = "#aeb7bd", Jc = "#d8dde0", Xc = "#f0f4f5", Mx = "#212b32", Ix = "#4c6272", Dx = "#ffffff", Tx = "#212b32", Lx = "#005eb8", Ax = "#7c2855", $x = "#003087", Ex = "#330072", Fx = "#ffeb3b", Px = "#212b32", Rx = "#d8dde0", Bx = "#ffffff33", Hx = "#d5281b", zx = "#4c6272", Ox = "#ffffff", Ux = "#007f3b", Wx = "#ffffff", Gx = "#006530", Vx = "#004021", Yx = "#004021", Zx = "#00000000", qx = "#ffffff", Jx = "#005eb8", Xx = "#005eb8", Kx = "#d9e5f2", Qx = "#c7daf0", ey = "#005eb8", ty = "#ffffff", ny = "#212b32", ry = "#d9dde0", ay = "#b3bcc2", oy = "#b3bcc2", sy = "#d5281b", iy = "#aa2016", ly = "#6a140e", cy = "#6a140e", dy = "#005eb8", uy = "#004b93", fy = "#002f5c", hy = "#002f5c", py = "8px", my = "16px", gy = "12px", xy = "16px", yy = "4px", by = "40px", vy = "4px", wy = "40px", _y = "12px", Sy = "16px", ky = "32px", Ny = "16px", Cy = "20px", jy = "28px", My = "9px", Iy = "2px", Dy = "16px", Ty = "24px", Ly = "8px", Ay = "24px", $y = "16px", Ey = "4px", Fy = "4px", Py = "4px", Ry = "8px", By = "4px", Hy = "16px", zy = "#007f3b", Oy = "#006530", Uy = "#004021", Wy = "#d8dde0", Gy = "#ffffff", Vy = "#768692", Yy = "#00000000", Zy = "#ffeb3b", qy = "#00000000", Jy = "#ffffff", Xy = "#d9e5f2", Ky = "#c7daf0", Qy = "#005eb8", eb = "#005eb8", Kc = "8px", Qc = "16px", ed = "12px", td = "16px", tb = "2px", nb = "4px", rb = "4px", ab = "600", ob = "#ffffff", sb = "#d8dde0", ib = "#aeb7bd", lb = "#f0f4f5", cb = "#212b32", db = "#212b32", ub = "#005eb8", nd = "16px", rd = "32px", ad = "16px", fb = "1px", hb = "4px", pb = "none", mb = "0 2px 4px rgba(0, 0, 0, 0.1)", gb = "#ffffff", xb = "#ffffff", yb = "#d8dde0", bb = "#ffffff", vb = "#4c6272", wb = "#ffeb3b", _b = "#d5281b", Sb = "#aeb7bd", kb = "#212b32", Nb = "#4c6272", Cb = "#768692", jb = "#212b32", Mb = "#ffffff", Ib = "600", Db = "#d5281b", Tb = "600", Lb = "#4c6272", od = "4px", sd = "40px", id = "40px", ld = "12px", Ab = "2px", $b = "4px", Eb = "0px", Fb = "16px", Pb = "18px", Rb = "24px", Bb = "32px", Hb = "34px", zb = "32px", Ob = "40px", Ub = "48px", Wb = "5.4ex", Gb = "7.2ex", Vb = "9ex", Yb = "10.8ex", Zb = "20ex", qb = "38ex", Jb = "56ex", Xb = "44px", Kb = "40px", Qb = "1020px", ev = "100%", tv = "50%", nv = "33.333%", rv = "25%", av = "20%", ov = "320px", sv = "641px", iv = "1025px", lv = "1280px", cv = "960px", dv = "32px", uv = "16px", fv = "#d5281b", hv = "#d5281b", pv = "#ffffff", mv = "#007f3b", gv = "#007f3b", xv = "#ffffff", yv = "#ffeb3b", bv = "#ffeb3b", vv = "#212b32", wv = "#005eb8", _v = "#005eb8", Sv = "#ffffff", kv = "#d8dde0", Nv = "#aeb7bd", Cv = "#768692", jv = "0 4px 0 #004021", Mv = "0 4px 0 #005eb8", Iv = "0 4px 0 #6a140e", Dv = "0 4px 0 #ffeb3b", Tv = "none", Lv = "0 2px 4px rgba(0, 0, 0, 0.1)", Av = "4px", $v = "0px", Ev = "solid", Fv = "0 0 0 3px #ffeb3b", Pv = "0 0 0 3px #ffeb3b", Rv = "none", Bv = "0 1px 3px rgba(0, 0, 0, 0.12)", Hv = "0 2px 6px rgba(0, 0, 0, 0.16)", zv = "0 4px 12px rgba(0, 0, 0, 0.20)", cd = "0", dd = "4px", ud = "8px", fd = "16px", hd = "24px", pd = "32px", md = "40px", gd = "48px", xd = "56px", yd = "64px", To = "0", Lo = "0", Ao = "4px", $o = "4px", Eo = "8px", Fo = "8px", Po = "8px", Ro = "16px", Bo = "16px", Ho = "24px", zo = "24px", Oo = "32px", Uo = "32px", Wo = "40px", Go = "40px", Vo = "48px", Yo = "48px", Zo = "56px", qo = "56px", Jo = "64px", ea = "Frutiger W01", ta = "Arial, Helvetica, sans-serif", na = "sans-serif", ra = "400", aa = "600", oa = "400", sa = "12px", ia = "14px", la = "12pt", ca = "14px", da = "16px", ua = "12pt", fa = "16px", ha = "19px", pa = "13pt", ma = "19px", ga = "22px", xa = "15pt", ya = "22px", ba = "26px", va = "17pt", wa = "27px", _a = "36px", Sa = "20pt", ka = "33px", Na = "48px", Ca = "24pt", Xo = "16px", Ko = "24px", Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, qt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Xt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: sx,
  AnimationDurationNormal: ix,
  AnimationDurationSlow: lx,
  AnimationEasingBounce: fx,
  AnimationEasingEaseIn: cx,
  AnimationEasingEaseInOut: ux,
  AnimationEasingEaseOut: dx,
  BorderColorCard: Tc,
  BorderColorCardHover: Lc,
  BorderColorDefault: Ic,
  BorderColorError: Ac,
  BorderColorForm: Dc,
  BorderRadiusLarge: jx,
  BorderRadiusMedium: Cx,
  BorderRadiusNone: kx,
  BorderRadiusSmall: Nx,
  BorderWidthCardBottom: vx,
  BorderWidthDefault: xx,
  BorderWidthFormElement: yx,
  BorderWidthFormElementError: bx,
  BorderWidthPanel: wx,
  BorderWidthTableCell: Sx,
  BorderWidthTableHeader: _x,
  BreakpointDesktop: iv,
  BreakpointLargeDesktop: lv,
  BreakpointMobile: ov,
  BreakpointTablet: sv,
  ButtonBorderRadius: nb,
  ButtonBorderWidth: tb,
  ButtonPrimaryBackgroundActive: Uy,
  ButtonPrimaryBackgroundDefault: zy,
  ButtonPrimaryBackgroundDisabled: Wy,
  ButtonPrimaryBackgroundHover: Oy,
  ButtonPrimaryBorderDefault: Yy,
  ButtonPrimaryBorderFocus: Zy,
  ButtonPrimaryTextDefault: Gy,
  ButtonPrimaryTextDisabled: Vy,
  ButtonSecondaryBackgroundActive: Ky,
  ButtonSecondaryBackgroundDefault: qy,
  ButtonSecondaryBackgroundHover: Xy,
  ButtonSecondaryBackgroundSolid: Jy,
  ButtonSecondaryBorderDefault: eb,
  ButtonSecondaryTextDefault: Qy,
  ButtonShadowSize: rb,
  ButtonSpacingPaddingHorizontalDesktop: td,
  ButtonSpacingPaddingHorizontalMobile: Qc,
  ButtonSpacingPaddingVerticalDesktop: ed,
  ButtonSpacingPaddingVerticalMobile: Kc,
  ButtonTypographyWeight: ab,
  CardBackgroundDefault: ob,
  CardBorderBottom: lb,
  CardBorderDefault: sb,
  CardBorderHover: ib,
  CardBorderWidthBottom: hb,
  CardBorderWidthDefault: fb,
  CardShadowDefault: pb,
  CardShadowHover: mb,
  CardSpacingHeadingMargin: ad,
  CardSpacingPaddingDesktop: rd,
  CardSpacingPaddingMobile: nd,
  CardTextDescription: db,
  CardTextHeading: cb,
  CardTextLink: ub,
  ColorBorderDefault: Rx,
  ColorBorderSecondary: Bx,
  ColorButtonLoginActive: fy,
  ColorButtonLoginBackground: dy,
  ColorButtonLoginHover: uy,
  ColorButtonLoginShadow: hy,
  ColorButtonPrimaryActive: Vx,
  ColorButtonPrimaryBackground: Ux,
  ColorButtonPrimaryHover: Gx,
  ColorButtonPrimaryShadow: Yx,
  ColorButtonPrimaryText: Wx,
  ColorButtonReverseActive: ay,
  ColorButtonReverseBackground: ty,
  ColorButtonReverseHover: ry,
  ColorButtonReverseShadow: oy,
  ColorButtonReverseText: ny,
  ColorButtonSecondaryActive: Qx,
  ColorButtonSecondaryBackground: Zx,
  ColorButtonSecondaryBackgroundSolid: qx,
  ColorButtonSecondaryBorder: Jx,
  ColorButtonSecondaryHover: Kx,
  ColorButtonSecondaryShadow: ey,
  ColorButtonSecondaryText: Xx,
  ColorButtonWarningActive: ly,
  ColorButtonWarningBackground: sy,
  ColorButtonWarningHover: iy,
  ColorButtonWarningShadow: cy,
  ColorError: Hx,
  ColorFocusBackground: Fx,
  ColorFocusText: Px,
  ColorFormBackground: Ox,
  ColorFormBorder: zx,
  ColorGrey1: Yc,
  ColorGrey2: Zc,
  ColorGrey3: qc,
  ColorGrey4: Jc,
  ColorGrey5: Xc,
  ColorLinkActive: $x,
  ColorLinkDefault: Lx,
  ColorLinkHover: Ax,
  ColorLinkVisited: Ex,
  ColorPrimaryBlack: Fc,
  ColorPrimaryBlue: $c,
  ColorPrimaryDarkPink: Bc,
  ColorPrimaryGreen: Pc,
  ColorPrimaryPurple: Rc,
  ColorPrimaryRed: Hc,
  ColorPrimaryWhite: Ec,
  ColorPrimaryYellow: zc,
  ColorSecondaryAquaGreen: Gc,
  ColorSecondaryOrange: Wc,
  ColorSecondaryPaleYellow: Oc,
  ColorSecondaryPink: Vc,
  ColorSecondaryWarmYellow: Uc,
  ColorTextPrimary: Mx,
  ColorTextPrint: Tx,
  ColorTextReverse: Dx,
  ColorTextSecondary: Ix,
  ComponentBlur: Fy,
  ComponentBreadcrumbChevronMarginLeft: My,
  ComponentBreadcrumbChevronMarginRight: Iy,
  ComponentBreadcrumbPaddingTopDesktop: Ty,
  ComponentBreadcrumbPaddingTopMobile: Dy,
  ComponentButtonPaddingDesktopHorizontal: xy,
  ComponentButtonPaddingDesktopVertical: gy,
  ComponentButtonPaddingMobileHorizontal: my,
  ComponentButtonPaddingMobileVertical: py,
  ComponentButtonShadowSize: yy,
  ComponentCardHeadingMargin: Ny,
  ComponentCardPaddingDesktop: ky,
  ComponentCardPaddingMobile: Sy,
  ComponentDetails: Ry,
  ComponentExpander: By,
  ComponentFormCheckboxLabelPadding: _y,
  ComponentFormCheckboxSize: wy,
  ComponentFormInputMinHeight: by,
  ComponentFormInputPadding: vy,
  ComponentLink: Py,
  ComponentPagination: Hy,
  ComponentPanelPaddingDesktop: jy,
  ComponentPanelPaddingMobile: Cy,
  ComponentSpread: Ey,
  ComponentSummaryListCellPaddingHorizontal: Ay,
  ComponentSummaryListCellPaddingVertical: Ly,
  ComponentSummaryListRowMargin: $y,
  ElevationHigh: zv,
  ElevationLow: Bv,
  ElevationMedium: Hv,
  ElevationNone: Rv,
  FocusOutlineOffset: $v,
  FocusOutlineStyle: Ev,
  FocusOutlineWidth: Av,
  FocusShadowButton: Pv,
  FocusShadowInput: Fv,
  FontFamilyBase: ea,
  FontFamilyFallback: ta,
  FontFamilyPrint: na,
  FontLineHeightBase: Ko,
  FontSize14Mobile: sa,
  FontSize14Print: la,
  FontSize14Tablet: ia,
  FontSize16Mobile: ca,
  FontSize16Print: ua,
  FontSize16Tablet: da,
  FontSize19Mobile: fa,
  FontSize19Print: pa,
  FontSize19Tablet: ha,
  FontSize22Mobile: ma,
  FontSize22Print: xa,
  FontSize22Tablet: ga,
  FontSize26Mobile: ya,
  FontSize26Print: va,
  FontSize26Tablet: ba,
  FontSize36Mobile: wa,
  FontSize36Print: Sa,
  FontSize36Tablet: _a,
  FontSize48Mobile: ka,
  FontSize48Print: Ca,
  FontSize48Tablet: Na,
  FontSizeBase: Xo,
  FontWeightBold: aa,
  FontWeightLight: oa,
  FontWeightNormal: ra,
  FormBorderRadius: Eb,
  FormBorderWidthDefault: Ab,
  FormBorderWidthError: $b,
  FormErrorTextDefault: Db,
  FormErrorTypographyWeight: Tb,
  FormHintTextDefault: Lb,
  FormInputBackgroundDefault: gb,
  FormInputBackgroundDisabled: yb,
  FormInputBackgroundError: bb,
  FormInputBackgroundFocus: xb,
  FormInputBorderDefault: vb,
  FormInputBorderDisabled: Sb,
  FormInputBorderError: _b,
  FormInputBorderFocus: wb,
  FormInputTextDefault: kb,
  FormInputTextDisabled: Cb,
  FormInputTextPlaceholder: Nb,
  FormLabelTextDefault: jb,
  FormLabelTextRequired: Mb,
  FormLabelTypographyWeight: Ib,
  FormSpacingCheckboxLabelPadding: ld,
  FormSpacingCheckboxSize: id,
  FormSpacingInputMinHeight: sd,
  FormSpacingInputPadding: od,
  GridGutter: dv,
  GridGutterHalf: uv,
  GridPageWidth: cv,
  HeadingsNhsukHeadingL: Ut,
  HeadingsNhsukHeadingM: Wt,
  HeadingsNhsukHeadingS: Gt,
  HeadingsNhsukHeadingXl: Ot,
  HeadingsNhsukHeadingXs: Vt,
  LayoutColumnActions: av,
  LayoutColumnFull: ev,
  LayoutColumnHalf: tv,
  LayoutColumnQuarter: rv,
  LayoutColumnThird: nv,
  LayoutContainerMaxWidth: Qb,
  ParagraphsBody: Yt,
  ParagraphsBodyLarge: Zt,
  ParagraphsBodySmall: qt,
  ParagraphsLedeText: Jt,
  ParagraphsLedeTextSmall: Xt,
  ShadowButtonDefault: jv,
  ShadowButtonFocus: Dv,
  ShadowButtonSecondary: Mv,
  ShadowButtonWarning: Iv,
  ShadowCardDefault: Tv,
  ShadowCardHover: Lv,
  SizeButtonMinHeightDesktop: Kb,
  SizeButtonMinHeightMobile: Xb,
  SizeFormControlLarge: Ub,
  SizeFormControlMedium: Ob,
  SizeFormControlSmall: zb,
  SizeFormInputWidth2xl: qb,
  SizeFormInputWidth3xl: Jb,
  SizeFormInputWidthLg: Yb,
  SizeFormInputWidthMd: Vb,
  SizeFormInputWidthSm: Gb,
  SizeFormInputWidthXl: Zb,
  SizeFormInputWidthXs: Wb,
  SizeIconExtraLarge: Bb,
  SizeIconLarge: Rb,
  SizeIconMedium: Pb,
  SizeIconNhsDefault: Hb,
  SizeIconSmall: Fb,
  Spacing0: cd,
  Spacing1: dd,
  Spacing2: ud,
  Spacing3: fd,
  Spacing4: hd,
  Spacing5: pd,
  Spacing6: md,
  Spacing7: gd,
  Spacing8: xd,
  Spacing9: yd,
  SpacingResponsive0Mobile: To,
  SpacingResponsive0Tablet: Lo,
  SpacingResponsive1Mobile: Ao,
  SpacingResponsive1Tablet: $o,
  SpacingResponsive2Mobile: Eo,
  SpacingResponsive2Tablet: Fo,
  SpacingResponsive3Mobile: Po,
  SpacingResponsive3Tablet: Ro,
  SpacingResponsive4Mobile: Bo,
  SpacingResponsive4Tablet: Ho,
  SpacingResponsive5Mobile: zo,
  SpacingResponsive5Tablet: Oo,
  SpacingResponsive6Mobile: Uo,
  SpacingResponsive6Tablet: Wo,
  SpacingResponsive7Mobile: Go,
  SpacingResponsive7Tablet: Vo,
  SpacingResponsive8Mobile: Yo,
  SpacingResponsive8Tablet: Zo,
  SpacingResponsive9Mobile: qo,
  SpacingResponsive9Tablet: Jo,
  StateDisabledBackground: kv,
  StateDisabledBorder: Nv,
  StateDisabledText: Cv,
  StateErrorBackground: fv,
  StateErrorBorder: hv,
  StateErrorText: pv,
  StateInfoBackground: wv,
  StateInfoBorder: _v,
  StateInfoText: Sv,
  StateSuccessBackground: mv,
  StateSuccessBorder: gv,
  StateSuccessText: xv,
  StateWarningBackground: yv,
  StateWarningBorder: bv,
  StateWarningText: vv,
  TransitionButtonDefault: hx,
  TransitionButtonShadow: px,
  TransitionCardHover: gx,
  TransitionInputFocus: mx
}, Symbol.toStringTag, { value: "Module" })), O1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), U1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Ot.fontFamily,
      fontWeight: Ot.fontWeight,
      fontSize: Ot.fontSize.mobile,
      lineHeight: Ot.lineHeight,
      marginTop: Ot.marginTop,
      marginBottom: Ot.marginBottom.mobile,
      ...n
    },
    children: e
  }
), W1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Ut.fontFamily,
      fontWeight: Ut.fontWeight,
      fontSize: Ut.fontSize.mobile,
      lineHeight: Ut.lineHeight,
      marginTop: Ut.marginTop,
      marginBottom: Ut.marginBottom.mobile,
      ...n
    },
    children: e
  }
), G1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Wt.fontFamily,
      fontWeight: Wt.fontWeight,
      fontSize: Wt.fontSize.mobile,
      lineHeight: Wt.lineHeight,
      marginTop: Wt.marginTop,
      marginBottom: Wt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), V1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Gt.fontFamily,
      fontWeight: Gt.fontWeight,
      fontSize: Gt.fontSize.mobile,
      lineHeight: Gt.lineHeight,
      marginTop: Gt.marginTop,
      marginBottom: Gt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Y1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Vt.fontFamily,
      fontWeight: Vt.fontWeight,
      fontSize: Vt.fontSize.mobile,
      lineHeight: Vt.lineHeight,
      marginTop: Vt.marginTop,
      marginBottom: Vt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Z1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Yt.fontFamily,
      fontWeight: Yt.fontWeight,
      fontSize: Yt.fontSize.mobile,
      lineHeight: Yt.lineHeight,
      marginTop: Yt.marginTop,
      marginBottom: Yt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), q1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Zt.fontFamily,
      fontWeight: Zt.fontWeight,
      fontSize: Zt.fontSize.mobile,
      lineHeight: Zt.lineHeight,
      marginTop: Zt.marginTop,
      marginBottom: Zt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), J1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: qt.fontFamily,
      fontWeight: qt.fontWeight,
      fontSize: qt.fontSize.mobile,
      lineHeight: qt.lineHeight,
      marginTop: qt.marginTop,
      marginBottom: qt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), X1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Jt.fontFamily,
      fontWeight: Jt.fontWeight,
      fontSize: Jt.fontSize.mobile,
      lineHeight: Jt.lineHeight,
      marginTop: Jt.marginTop,
      marginBottom: Jt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), K1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Xt.fontFamily,
      fontWeight: Xt.fontWeight,
      fontSize: Xt.fontSize.mobile,
      lineHeight: Xt.lineHeight,
      marginTop: Xt.marginTop,
      marginBottom: Xt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Q1 = () => Re(() => Ov, []), e2 = () => Re(() => ({
  // Border colors
  BorderColorDefault: Ic,
  BorderColorForm: Dc,
  BorderColorCard: Tc,
  BorderColorCardHover: Lc,
  BorderColorError: Ac,
  // Primary colors
  ColorPrimaryBlue: $c,
  ColorPrimaryWhite: Ec,
  ColorPrimaryBlack: Fc,
  ColorPrimaryGreen: Pc,
  ColorPrimaryPurple: Rc,
  ColorPrimaryDarkPink: Bc,
  ColorPrimaryRed: Hc,
  ColorPrimaryYellow: zc,
  // Secondary colors
  ColorSecondaryPaleYellow: Oc,
  ColorSecondaryWarmYellow: Uc,
  ColorSecondaryOrange: Wc,
  ColorSecondaryAquaGreen: Gc,
  ColorSecondaryPink: Vc,
  // Grey scale
  ColorGrey1: Yc,
  ColorGrey2: Zc,
  ColorGrey3: qc,
  ColorGrey4: Jc,
  ColorGrey5: Xc
}), []), t2 = () => Re(() => ({
  Spacing0: cd,
  Spacing1: dd,
  Spacing2: ud,
  Spacing3: fd,
  Spacing4: hd,
  Spacing5: pd,
  Spacing6: md,
  Spacing7: gd,
  Spacing8: xd,
  Spacing9: yd
}), []), n2 = () => Re(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: sa,
    Size16: ca,
    Size19: fa,
    Size22: ma,
    Size26: ya,
    Size36: wa,
    Size48: ka
  },
  Tablet: {
    Size14: ia,
    Size16: da,
    Size19: ha,
    Size22: ga,
    Size26: ba,
    Size36: _a,
    Size48: Na
  },
  Print: {
    Size14: la,
    Size16: ua,
    Size19: pa,
    Size22: xa,
    Size26: va,
    Size36: Sa,
    Size48: Ca
  },
  Family: {
    Base: ea,
    Fallback: ta,
    Print: na
  },
  Weight: {
    Normal: ra,
    Bold: aa,
    Light: oa
  },
  Base: {
    Size: Xo,
    LineHeight: Ko
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ea,
  FontFamilyFallback: ta,
  FontFamilyPrint: na,
  FontWeightNormal: ra,
  FontWeightBold: aa,
  FontWeightLight: oa,
  FontSize14Mobile: sa,
  FontSize14Tablet: ia,
  FontSize14Print: la,
  FontSize16Mobile: ca,
  FontSize16Tablet: da,
  FontSize16Print: ua,
  FontSize19Mobile: fa,
  FontSize19Tablet: ha,
  FontSize19Print: pa,
  FontSize22Mobile: ma,
  FontSize22Tablet: ga,
  FontSize22Print: xa,
  FontSize26Mobile: ya,
  FontSize26Tablet: ba,
  FontSize26Print: va,
  FontSize36Mobile: wa,
  FontSize36Tablet: _a,
  FontSize36Print: Sa,
  FontSize48Mobile: ka,
  FontSize48Tablet: Na,
  FontSize48Print: Ca,
  FontSizeBase: Xo,
  FontLineHeightBase: Ko
}), []), r2 = () => Re(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: To,
    Size1: Ao,
    Size2: Eo,
    Size3: Po,
    Size4: Bo,
    Size5: zo,
    Size6: Uo,
    Size7: Go,
    Size8: Yo,
    Size9: qo
  },
  Tablet: {
    Size0: Lo,
    Size1: $o,
    Size2: Fo,
    Size3: Ro,
    Size4: Ho,
    Size5: Oo,
    Size6: Wo,
    Size7: Vo,
    Size8: Zo,
    Size9: Jo
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: To,
  SpacingResponsive0Tablet: Lo,
  SpacingResponsive1Mobile: Ao,
  SpacingResponsive1Tablet: $o,
  SpacingResponsive2Mobile: Eo,
  SpacingResponsive2Tablet: Fo,
  SpacingResponsive3Mobile: Po,
  SpacingResponsive3Tablet: Ro,
  SpacingResponsive4Mobile: Bo,
  SpacingResponsive4Tablet: Ho,
  SpacingResponsive5Mobile: zo,
  SpacingResponsive5Tablet: Oo,
  SpacingResponsive6Mobile: Uo,
  SpacingResponsive6Tablet: Wo,
  SpacingResponsive7Mobile: Go,
  SpacingResponsive7Tablet: Vo,
  SpacingResponsive8Mobile: Yo,
  SpacingResponsive8Tablet: Zo,
  SpacingResponsive9Mobile: qo,
  SpacingResponsive9Tablet: Jo
}), []), a2 = () => Re(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Kc,
  ButtonSpacingPaddingHorizontalMobile: Qc,
  ButtonSpacingPaddingVerticalDesktop: ed,
  ButtonSpacingPaddingHorizontalDesktop: td,
  // Card spacing	
  CardSpacingPaddingMobile: nd,
  CardSpacingPaddingDesktop: rd,
  CardSpacingHeadingMargin: ad,
  // Form spacing
  FormSpacingInputPadding: od,
  FormSpacingInputMinHeight: sd,
  FormSpacingCheckboxSize: id,
  FormSpacingCheckboxLabelPadding: ld
}), []), o2 = () => Re(() => ({
  xl: Ot,
  l: Ut,
  m: Wt,
  s: Gt,
  xs: Vt
}), []), s2 = () => Re(() => ({
  body: Yt,
  bodyLarge: Zt,
  bodySmall: qt,
  ledeText: Jt,
  ledeTextSmall: Xt
}), []), i2 = () => Re(() => ({
  headings: {
    xl: Ot,
    l: Ut,
    m: Wt,
    s: Gt,
    xs: Vt
  },
  paragraphs: {
    body: Yt,
    bodyLarge: Zt,
    bodySmall: qt,
    ledeText: Jt,
    ledeTextSmall: Xt
  },
  fonts: {
    family: {
      base: ea,
      fallback: ta,
      print: na
    },
    weight: {
      normal: ra,
      bold: aa,
      light: oa
    },
    sizes: {
      mobile: {
        size14: sa,
        size16: ca,
        size19: fa,
        size22: ma,
        size26: ya,
        size36: wa,
        size48: ka
      },
      tablet: {
        size14: ia,
        size16: da,
        size19: ha,
        size22: ga,
        size26: ba,
        size36: _a,
        size48: Na
      },
      print: {
        size14: la,
        size16: ua,
        size19: pa,
        size22: xa,
        size26: va,
        size36: Sa,
        size48: Ca
      }
    }
  }
}), []);
function l2(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = K.useState(t), s = K.useCallback(() => o("three-column"), []), i = K.useCallback(() => o((c) => c === "three-column" ? n : c), [n]), l = K.useCallback(() => o((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const bd = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, kt = {
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
function c2(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...bd, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${kt.normal.eot}?#iefix") format("eot"),
       url("${t}${kt.normal.woff2}") format("woff2"),
       url("${t}${kt.normal.woff}") format("woff"),
       url("${t}${kt.normal.ttf}") format("truetype");
  src: url("${t}${kt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${kt.bold.eot}?#iefix") format("eot"),
       url("${t}${kt.bold.woff2}") format("woff2"),
       url("${t}${kt.bold.woff}") format("woff"),
       url("${t}${kt.bold.ttf}") format("truetype");
  src: url("${t}${kt.bold.eot}");
}`), a.join(`
`);
}
function d2(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...bd, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${kt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${kt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const u2 = '"Frutiger W01", Arial, Helvetica, sans-serif', f2 = "Arial, Helvetica, sans-serif";
async function h2() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  ug as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Tr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Lr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  fg as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  hg as AXIS_ZIGZAG_DEFAULT_CYCLES,
  mg as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  pg as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ki as Account,
  Vv as ActionLink,
  S1 as AdaptiveDataGrid,
  sx as AnimationDurationFast,
  ix as AnimationDurationNormal,
  lx as AnimationDurationSlow,
  fx as AnimationEasingBounce,
  cx as AnimationEasingEaseIn,
  ux as AnimationEasingEaseInOut,
  dx as AnimationEasingEaseOut,
  Fl as AppointmentCard,
  L1 as AreaSeriesPrimitive,
  cp as AriaDataGrid,
  yo as AriaTabsDataGrid,
  S1 as AriaTabsDataGridAdaptive,
  Di as Axis,
  nr as BackLink,
  $1 as BandScalesProvider,
  A1 as BarSeriesPrimitive,
  Tc as BorderColorCard,
  Lc as BorderColorCardHover,
  Ic as BorderColorDefault,
  Ac as BorderColorError,
  Dc as BorderColorForm,
  jx as BorderRadiusLarge,
  Cx as BorderRadiusMedium,
  kx as BorderRadiusNone,
  Nx as BorderRadiusSmall,
  vx as BorderWidthCardBottom,
  xx as BorderWidthDefault,
  yx as BorderWidthFormElement,
  bx as BorderWidthFormElementError,
  wx as BorderWidthPanel,
  Sx as BorderWidthTableCell,
  _x as BorderWidthTableHeader,
  ns as BrandKey,
  o1 as BrandThemeProvider,
  Il as Breadcrumb,
  Vd as Breakpoint,
  iv as BreakpointDesktop,
  lv as BreakpointLargeDesktop,
  ov as BreakpointMobile,
  sv as BreakpointTablet,
  xt as Button,
  nb as ButtonBorderRadius,
  tb as ButtonBorderWidth,
  Uy as ButtonPrimaryBackgroundActive,
  zy as ButtonPrimaryBackgroundDefault,
  Wy as ButtonPrimaryBackgroundDisabled,
  Oy as ButtonPrimaryBackgroundHover,
  Yy as ButtonPrimaryBorderDefault,
  Zy as ButtonPrimaryBorderFocus,
  Gy as ButtonPrimaryTextDefault,
  Vy as ButtonPrimaryTextDisabled,
  Ky as ButtonSecondaryBackgroundActive,
  qy as ButtonSecondaryBackgroundDefault,
  Xy as ButtonSecondaryBackgroundHover,
  Jy as ButtonSecondaryBackgroundSolid,
  eb as ButtonSecondaryBorderDefault,
  Qy as ButtonSecondaryTextDefault,
  rb as ButtonShadowSize,
  el as ButtonSize,
  td as ButtonSpacingPaddingHorizontalDesktop,
  Qc as ButtonSpacingPaddingHorizontalMobile,
  ed as ButtonSpacingPaddingVerticalDesktop,
  Kc as ButtonSpacingPaddingVerticalMobile,
  ab as ButtonTypographyWeight,
  Qi as ButtonVariant,
  Tl as Card,
  ob as CardBackgroundDefault,
  lb as CardBorderBottom,
  sb as CardBorderDefault,
  ib as CardBorderHover,
  hb as CardBorderWidthBottom,
  fb as CardBorderWidthDefault,
  d1 as CardGroup,
  u1 as CardGroupItem,
  pb as CardShadowDefault,
  mb as CardShadowHover,
  ad as CardSpacingHeadingMargin,
  rd as CardSpacingPaddingDesktop,
  nd as CardSpacingPaddingMobile,
  db as CardTextDescription,
  cb as CardTextHeading,
  ub as CardTextLink,
  f1 as CareCard,
  Yv as CharacterCount,
  F1 as ChartEnhancer,
  E1 as ChartNoScript,
  cg as ChartRoot,
  Ad as Checkbox,
  Pd as Checkboxes,
  Rx as ColorBorderDefault,
  Bx as ColorBorderSecondary,
  fy as ColorButtonLoginActive,
  dy as ColorButtonLoginBackground,
  uy as ColorButtonLoginHover,
  hy as ColorButtonLoginShadow,
  Vx as ColorButtonPrimaryActive,
  Ux as ColorButtonPrimaryBackground,
  Gx as ColorButtonPrimaryHover,
  Yx as ColorButtonPrimaryShadow,
  Wx as ColorButtonPrimaryText,
  ay as ColorButtonReverseActive,
  ty as ColorButtonReverseBackground,
  ry as ColorButtonReverseHover,
  oy as ColorButtonReverseShadow,
  ny as ColorButtonReverseText,
  Qx as ColorButtonSecondaryActive,
  Zx as ColorButtonSecondaryBackground,
  qx as ColorButtonSecondaryBackgroundSolid,
  Jx as ColorButtonSecondaryBorder,
  Kx as ColorButtonSecondaryHover,
  ey as ColorButtonSecondaryShadow,
  Xx as ColorButtonSecondaryText,
  ly as ColorButtonWarningActive,
  sy as ColorButtonWarningBackground,
  iy as ColorButtonWarningHover,
  cy as ColorButtonWarningShadow,
  Hx as ColorError,
  Fx as ColorFocusBackground,
  Px as ColorFocusText,
  Ox as ColorFormBackground,
  zx as ColorFormBorder,
  Yc as ColorGrey1,
  Zc as ColorGrey2,
  qc as ColorGrey3,
  Jc as ColorGrey4,
  Xc as ColorGrey5,
  $x as ColorLinkActive,
  Lx as ColorLinkDefault,
  Ax as ColorLinkHover,
  Ex as ColorLinkVisited,
  Fc as ColorPrimaryBlack,
  $c as ColorPrimaryBlue,
  Bc as ColorPrimaryDarkPink,
  Pc as ColorPrimaryGreen,
  Rc as ColorPrimaryPurple,
  Hc as ColorPrimaryRed,
  Ec as ColorPrimaryWhite,
  zc as ColorPrimaryYellow,
  Gc as ColorSecondaryAquaGreen,
  Wc as ColorSecondaryOrange,
  Oc as ColorSecondaryPaleYellow,
  Vc as ColorSecondaryPink,
  Uc as ColorSecondaryWarmYellow,
  Mx as ColorTextPrimary,
  Tx as ColorTextPrint,
  Dx as ColorTextReverse,
  Ix as ColorTextSecondary,
  rr as Column,
  Zd as ColumnAlign,
  Fy as ComponentBlur,
  My as ComponentBreadcrumbChevronMarginLeft,
  Iy as ComponentBreadcrumbChevronMarginRight,
  Ty as ComponentBreadcrumbPaddingTopDesktop,
  Dy as ComponentBreadcrumbPaddingTopMobile,
  xy as ComponentButtonPaddingDesktopHorizontal,
  gy as ComponentButtonPaddingDesktopVertical,
  my as ComponentButtonPaddingMobileHorizontal,
  py as ComponentButtonPaddingMobileVertical,
  yy as ComponentButtonShadowSize,
  Ny as ComponentCardHeadingMargin,
  ky as ComponentCardPaddingDesktop,
  Sy as ComponentCardPaddingMobile,
  Ry as ComponentDetails,
  By as ComponentExpander,
  _y as ComponentFormCheckboxLabelPadding,
  wy as ComponentFormCheckboxSize,
  by as ComponentFormInputMinHeight,
  vy as ComponentFormInputPadding,
  Py as ComponentLink,
  Hy as ComponentPagination,
  jy as ComponentPanelPaddingDesktop,
  Cy as ComponentPanelPaddingMobile,
  Ey as ComponentSpread,
  Ay as ComponentSummaryListCellPaddingHorizontal,
  Ly as ComponentSummaryListCellPaddingVertical,
  $y as ComponentSummaryListRowMargin,
  al as Container,
  c1 as ContentsList,
  bd as DEFAULT_FONT_CONFIG,
  v1 as DashboardSummaryGrid,
  n1 as DateInput,
  qh as Details,
  Jh as DoDontList,
  zv as ElevationHigh,
  Bv as ElevationLow,
  Hv as ElevationMedium,
  Rv as ElevationNone,
  As as ErrorMessage,
  t1 as ErrorSummary,
  Xh as Expander,
  kt as FRUTIGER_FONT_FILES,
  ts as Fieldset,
  Yd as Float,
  $v as FocusOutlineOffset,
  Ev as FocusOutlineStyle,
  Av as FocusOutlineWidth,
  Pv as FocusShadowButton,
  Fv as FocusShadowInput,
  ea as FontFamilyBase,
  ta as FontFamilyFallback,
  na as FontFamilyPrint,
  Ko as FontLineHeightBase,
  sa as FontSize14Mobile,
  la as FontSize14Print,
  ia as FontSize14Tablet,
  ca as FontSize16Mobile,
  ua as FontSize16Print,
  da as FontSize16Tablet,
  fa as FontSize19Mobile,
  pa as FontSize19Print,
  ha as FontSize19Tablet,
  ma as FontSize22Mobile,
  xa as FontSize22Print,
  ga as FontSize22Tablet,
  ya as FontSize26Mobile,
  va as FontSize26Print,
  ba as FontSize26Tablet,
  wa as FontSize36Mobile,
  Sa as FontSize36Print,
  _a as FontSize36Tablet,
  ka as FontSize48Mobile,
  Ca as FontSize48Print,
  Na as FontSize48Tablet,
  Xo as FontSizeBase,
  aa as FontWeightBold,
  oa as FontWeightLight,
  ra as FontWeightNormal,
  dl as Footer,
  Eb as FormBorderRadius,
  Ab as FormBorderWidthDefault,
  $b as FormBorderWidthError,
  Db as FormErrorTextDefault,
  Tb as FormErrorTypographyWeight,
  Lb as FormHintTextDefault,
  gb as FormInputBackgroundDefault,
  yb as FormInputBackgroundDisabled,
  bb as FormInputBackgroundError,
  xb as FormInputBackgroundFocus,
  vb as FormInputBorderDefault,
  Sb as FormInputBorderDisabled,
  _b as FormInputBorderError,
  wb as FormInputBorderFocus,
  kb as FormInputTextDefault,
  Cb as FormInputTextDisabled,
  Nb as FormInputTextPlaceholder,
  jb as FormLabelTextDefault,
  Mb as FormLabelTextRequired,
  Ib as FormLabelTypographyWeight,
  ld as FormSpacingCheckboxLabelPadding,
  id as FormSpacingCheckboxSize,
  sd as FormSpacingInputMinHeight,
  od as FormSpacingInputPadding,
  i1 as GanttChart,
  co as Grid,
  dv as GridGutter,
  uv as GridGutterHalf,
  gg as GridLines,
  cv as GridPageWidth,
  bn as GridWidth,
  Gl as GroupHeader,
  Um as GroupableDataGrid,
  cl as Header,
  s1 as HeaderSSR,
  pu as HeaderSearch,
  cl as HeaderStatic,
  Ht as Heading,
  Ut as HeadingsNhsukHeadingL,
  Wt as HeadingsNhsukHeadingM,
  Gt as HeadingsNhsukHeadingS,
  Ot as HeadingsNhsukHeadingXl,
  Vt as HeadingsNhsukHeadingXs,
  gu as Hero,
  _i as HierarchyDataManager,
  nl as Hint,
  x1 as Images,
  Qo as Input,
  h1 as InsetText,
  es as Label,
  av as LayoutColumnActions,
  ev as LayoutColumnFull,
  tv as LayoutColumnHalf,
  rv as LayoutColumnQuarter,
  nv as LayoutColumnThird,
  Qb as LayoutContainerMaxWidth,
  T1 as Legend,
  dg as LineScalesProvider,
  Kg as LineSeriesPrimitive,
  Xd as List,
  rs as LogoVariant,
  ol as MainWrapper,
  Pl as MedicationCard,
  t0 as MetricCard,
  Z1 as NHSBodyText,
  q1 as NHSBodyTextLarge,
  J1 as NHSBodyTextSmall,
  U1 as NHSHeading1,
  W1 as NHSHeading2,
  G1 as NHSHeading3,
  V1 as NHSHeading4,
  Y1 as NHSHeading5,
  X1 as NHSLedeText,
  K1 as NHSLedeTextSmall,
  a1 as NHSThemeProvider,
  f2 as NHS_FALLBACK_FONT_STACK,
  u2 as NHS_FONT_STACK,
  Xm as NavigationSplitView,
  N1 as PageTemplate,
  l1 as Pagination,
  Uh as Panel,
  Yt as ParagraphsBody,
  Zt as ParagraphsBodyLarge,
  qt as ParagraphsBodySmall,
  Jt as ParagraphsLedeText,
  Xt as ParagraphsLedeTextSmall,
  B1 as ParallaxScene,
  El as PatientCard,
  H1 as PatternBanner,
  z1 as ProductCard,
  nx as ProductCardButtonVariantEnum,
  tx as ProductCardImageTypeEnum,
  Qn as ProductCardLayoutEnum,
  jn as ProductCardThemeEnum,
  rg as ProductRoadmap,
  Zv as Radios,
  qv as RadiosServer,
  S1 as ResponsiveDataGrid,
  k1 as ResponsiveDataGridDemo,
  ln as Row,
  P1 as SPC,
  V0 as SPCChart,
  R1 as SPCMetricCard,
  Ar as Select,
  Od as SelectOption,
  jv as ShadowButtonDefault,
  Dv as ShadowButtonFocus,
  Mv as ShadowButtonSecondary,
  Iv as ShadowButtonWarning,
  Tv as ShadowCardDefault,
  Lv as ShadowCardHover,
  Kb as SizeButtonMinHeightDesktop,
  Xb as SizeButtonMinHeightMobile,
  Ub as SizeFormControlLarge,
  Ob as SizeFormControlMedium,
  zb as SizeFormControlSmall,
  qb as SizeFormInputWidth2xl,
  Jb as SizeFormInputWidth3xl,
  Yb as SizeFormInputWidthLg,
  Vb as SizeFormInputWidthMd,
  Gb as SizeFormInputWidthSm,
  Zb as SizeFormInputWidthXl,
  Wb as SizeFormInputWidthXs,
  Bb as SizeIconExtraLarge,
  Rb as SizeIconLarge,
  Pb as SizeIconMedium,
  Hb as SizeIconNhsDefault,
  Fb as SizeIconSmall,
  Dl as SkipLink,
  y1 as SlotMatrix,
  w1 as SortStatusControl,
  cd as Spacing0,
  dd as Spacing1,
  ud as Spacing2,
  fd as Spacing3,
  hd as Spacing4,
  pd as Spacing5,
  md as Spacing6,
  gd as Spacing7,
  xd as Spacing8,
  yd as Spacing9,
  To as SpacingResponsive0Mobile,
  Lo as SpacingResponsive0Tablet,
  Ao as SpacingResponsive1Mobile,
  $o as SpacingResponsive1Tablet,
  Eo as SpacingResponsive2Mobile,
  Fo as SpacingResponsive2Tablet,
  Po as SpacingResponsive3Mobile,
  Ro as SpacingResponsive3Tablet,
  Bo as SpacingResponsive4Mobile,
  Ho as SpacingResponsive4Tablet,
  zo as SpacingResponsive5Mobile,
  Oo as SpacingResponsive5Tablet,
  Uo as SpacingResponsive6Mobile,
  Wo as SpacingResponsive6Tablet,
  Go as SpacingResponsive7Mobile,
  Vo as SpacingResponsive7Tablet,
  Yo as SpacingResponsive8Mobile,
  Zo as SpacingResponsive8Tablet,
  qo as SpacingResponsive9Mobile,
  Jo as SpacingResponsive9Tablet,
  Jv as SpacingUtilities,
  kv as StateDisabledBackground,
  Nv as StateDisabledBorder,
  Cv as StateDisabledText,
  fv as StateErrorBackground,
  hv as StateErrorBorder,
  pv as StateErrorText,
  wv as StateInfoBackground,
  _v as StateInfoBorder,
  Sv as StateInfoText,
  mv as StateSuccessBackground,
  gv as StateSuccessBorder,
  xv as StateSuccessText,
  yv as StateWarningBackground,
  bv as StateWarningBorder,
  vv as StateWarningText,
  b1 as StepByStepNavigation,
  op as SummaryCard,
  p1 as SummaryList,
  nn as Table,
  m1 as Tabs,
  st as Tag,
  Kh as TaskList,
  Bd as Textarea,
  D1 as TooltipOverlay,
  Xg as TooltipProvider,
  C1 as TransactionalPageTemplate,
  hx as TransitionButtonDefault,
  px as TransitionButtonShadow,
  gx as TransitionCardHover,
  mx as TransitionInputFocus,
  Vl as TreeNodeComponent,
  jt as VectorGraphicKindEnum,
  hr as VectorGraphicShadowEnum,
  I1 as VisibilityProvider,
  Rl as VitalsCard,
  e1 as WIDTH_FRACTIONS,
  g1 as WarningCallout,
  Yl as WidthContainer,
  Kv as WidthUtilities,
  M1 as WorkflowSplitView,
  km as applyAggregation,
  vo as applyAggregations,
  uu as brandLogos,
  h2 as checkFrutigerLoaded,
  ps as createGenericTabsConfig,
  _1 as createTCHTabsConfig,
  Cm as enhanceDataWithCalculatedFields,
  c2 as generateFrutigerFontFace,
  ll as getBrandLogo,
  O1 as getResponsiveStyles,
  Xv as getSpacingClass,
  Qv as getWidthClass,
  d2 as preloadFrutigerFonts,
  vp as tchDataConfig,
  hu as useBrand,
  e2 as useColors,
  a2 as useComponentSpacing,
  o2 as useNHSHeadings,
  s2 as useNHSParagraphs,
  r1 as useNHSTheme,
  i2 as useNHSTypographySystem,
  l2 as useNavigationSplitDrill,
  Wm as useNavigationSplitUrlSync,
  gs as useNhsFdpBreakpoints,
  r2 as useResponsiveSpacing,
  j1 as useResponsiveValue,
  t2 as useSpacing,
  q0 as useSpc,
  Q1 as useTokens,
  n2 as useTypography
};
//# sourceMappingURL=index.esm.js.map
