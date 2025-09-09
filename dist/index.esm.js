import * as Y from "react";
import rt, { useState as Ie, useEffect as Ae, useCallback as ge, useRef as Le, createElement as _o, useMemo as De, useContext as Rl, createContext as Hl, forwardRef as fn, useImperativeHandle as wo, useReducer as So, memo as zl, useLayoutEffect as Wl, useId as zn } from "react";
import { createPortal as Ol } from "react-dom";
function Ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var An = { exports: {} }, mn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ws;
function Gl() {
  if (ws) return mn;
  ws = 1;
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
  return mn.Fragment = t, mn.jsx = r, mn.jsxs = r, mn;
}
var gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Yl() {
  return Ss || (Ss = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === _ ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case p:
          return "Fragment";
        case P:
          return "Profiler";
        case u:
          return "StrictMode";
        case B:
          return "Suspense";
        case N:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case T:
            return "Portal";
          case D:
            return (R.displayName || "Context") + ".Provider";
          case A:
            return (R._context.displayName || "Context") + ".Consumer";
          case S:
            var U = R.render;
            return R = R.displayName, R || (R = U.displayName || U.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case $:
            return U = R.displayName || null, U !== null ? U : e(R.type) || "Memo";
          case x:
            U = R._payload, R = R._init;
            try {
              return e(R(U));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function r(R) {
      try {
        t(R);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var E = U.error, I = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return E.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), t(R);
      }
    }
    function a(R) {
      if (R === p) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === x)
        return "<...>";
      try {
        var U = e(R);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = m.A;
      return R === null ? null : R.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(R) {
      if (y.call(R, "key")) {
        var U = Object.getOwnPropertyDescriptor(R, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function l(R, U) {
      function E() {
        w || (w = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: E,
        configurable: !0
      });
    }
    function d() {
      var R = e(this.type);
      return b[R] || (b[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function c(R, U, E, I, C, Z, oe, J) {
      return E = Z.ref, R = {
        $$typeof: v,
        type: R,
        key: U,
        props: Z,
        _owner: C
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: oe
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function f(R, U, E, I, C, Z, oe, J) {
      var V = U.children;
      if (V !== void 0)
        if (I)
          if (L(V)) {
            for (I = 0; I < V.length; I++)
              h(V[I]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(V);
      if (y.call(U, "key")) {
        V = e(R);
        var H = Object.keys(U).filter(function(le) {
          return le !== "key";
        });
        I = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", z[V + I] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          V,
          H,
          V
        ), z[V + I] = !0);
      }
      if (V = null, E !== void 0 && (r(E), V = "" + E), i(U) && (r(U.key), V = "" + U.key), "key" in U) {
        E = {};
        for (var G in U)
          G !== "key" && (E[G] = U[G]);
      } else E = U;
      return V && l(
        E,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), c(
        R,
        V,
        Z,
        C,
        o(),
        E,
        oe,
        J
      );
    }
    function h(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var g = rt, v = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), D = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), m = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, L = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var w, b = {}, F = g.react_stack_bottom_frame.bind(
      g,
      s
    )(), Q = j(a(s)), z = {};
    gn.Fragment = p, gn.jsx = function(R, U, E, I, C) {
      var Z = 1e4 > m.recentlyCreatedOwnerStacks++;
      return f(
        R,
        U,
        E,
        !1,
        I,
        C,
        Z ? Error("react-stack-top-frame") : F,
        Z ? j(a(R)) : Q
      );
    }, gn.jsxs = function(R, U, E, I, C) {
      var Z = 1e4 > m.recentlyCreatedOwnerStacks++;
      return f(
        R,
        U,
        E,
        !0,
        I,
        C,
        Z ? Error("react-stack-top-frame") : F,
        Z ? j(a(R)) : Q
      );
    };
  })()), gn;
}
var ks;
function Vl() {
  return ks || (ks = 1, process.env.NODE_ENV === "production" ? An.exports = Gl() : An.exports = Yl()), An.exports;
}
var n = Vl(), Vr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Cs;
function ql() {
  return Cs || (Cs = 1, (function(e) {
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
  })(Vr)), Vr.exports;
}
var Xl = ql();
const be = /* @__PURE__ */ Ul(Xl), K0 = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = be(
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
}, Kl = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, d = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: d }) : s.action ? /* @__PURE__ */ n.jsx(
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
            children: d
          }
        )
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: d });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: be(
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
          className: be("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
};
function Zl(e) {
  const t = e.variant || "primary", r = e.size || "default", a = !!e.fullWidth, o = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
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
const { forwardRef: Jl, useCallback: At, useState: qr } = Y;
function Ql(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = qr(!1), [h, g] = qr(!1), [v, T] = qr(!1), p = Zl({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", P = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, A = At(
    () => !u && f(!0),
    [u]
  ), D = At(() => f(!1), []), S = At(
    () => !u && g(!0),
    [u]
  ), B = At(() => {
    g(!1), f(!1);
  }, []), N = At(() => T(!0), []), $ = At(() => T(!1), []), x = At(
    (V) => {
      V.key === " " && ("href" in d || V.currentTarget.getAttribute("role") === "button") && (V.preventDefault(), V.currentTarget.click());
    },
    [d]
  ), k = At(
    (V) => {
      if (l) {
        const H = V.currentTarget;
        if (H.getAttribute("data-processing") === "true") {
          V.preventDefault();
          return;
        }
        H.setAttribute("data-processing", "true"), setTimeout(() => {
          H.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in d && d.href) {
    const {
      id: V,
      style: H,
      title: G,
      ["aria-label"]: le,
      ["aria-describedby"]: O,
      ["aria-labelledby"]: ie,
      tabIndex: se,
      ...de
    } = d, ue = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: ue.href,
        target: ue.target,
        rel: ue.rel,
        className: p.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...P,
        ...l && { "data-prevent-double-click": "true" },
        ...de,
        onKeyDown: (ve) => {
          ue.onKeyDown?.(ve), x(ve);
        },
        onClick: (ve) => {
          ue.onClick?.(ve), k(ve);
        },
        onMouseDown: (ve) => {
          ue.onMouseDown?.(ve), A();
        },
        onMouseUp: (ve) => {
          ue.onMouseUp?.(ve), D();
        },
        onMouseEnter: (ve) => {
          ue.onMouseEnter?.(ve), S();
        },
        onMouseLeave: (ve) => {
          ue.onMouseLeave?.(ve), B();
        },
        onFocus: (ve) => {
          ue.onFocus?.(ve), N();
        },
        onBlur: (ve) => {
          ue.onBlur?.(ve), $();
        },
        "aria-disabled": ue["aria-disabled"],
        ...ue["aria-disabled"] === "true" && { tabIndex: -1 },
        id: V,
        style: H,
        title: G,
        "aria-label": le,
        "aria-describedby": O,
        "aria-labelledby": ie,
        tabIndex: se,
        children: r
      }
    );
  }
  const {
    id: _,
    style: m,
    title: y,
    ["aria-label"]: L,
    ["aria-describedby"]: j,
    ["aria-labelledby"]: w,
    tabIndex: b,
    name: F,
    value: Q,
    form: z,
    formAction: R,
    formEncType: U,
    formMethod: E,
    formNoValidate: I,
    formTarget: C,
    autoFocus: Z,
    ...oe
  } = d, J = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: J.type || "button",
      disabled: J.disabled,
      className: p.classes,
      "data-module": "nhs-button",
      ...P,
      ...l && { "data-prevent-double-click": "true" },
      ...J.disabled && { "aria-disabled": "true" },
      ...oe,
      onKeyDown: (V) => {
        J.onKeyDown?.(V), x(V);
      },
      onClick: (V) => {
        J.onClick?.(V), k(V);
      },
      onMouseDown: (V) => {
        J.onMouseDown?.(V), A();
      },
      onMouseUp: (V) => {
        J.onMouseUp?.(V), D();
      },
      onMouseEnter: (V) => {
        J.onMouseEnter?.(V), S();
      },
      onMouseLeave: (V) => {
        J.onMouseLeave?.(V), B();
      },
      onFocus: (V) => {
        J.onFocus?.(V), N();
      },
      onBlur: (V) => {
        J.onBlur?.(V), $();
      },
      id: _,
      style: m,
      title: y,
      "aria-label": L,
      "aria-describedby": j,
      "aria-labelledby": w,
      tabIndex: b,
      name: F,
      value: Q,
      form: z,
      formAction: R,
      formEncType: U,
      formMethod: E,
      formNoValidate: I,
      formTarget: C,
      autoFocus: Z,
      children: r
    }
  );
}
const Qe = Jl(Ql);
Qe.displayName = "Button";
const fa = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = be(
    "nhsuk-back-link",
    a
  ), d = be(
    "nhsuk-back-link__link"
  ), c = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
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
      className: d,
      onClick: s,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: d,
      href: r,
      ...i,
      children: c()
    }
  ) });
};
function ec(e) {
  const { color: t = "default", noBorder: r, closable: a, disabled: o, className: s } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    r ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!o };
}
const Ye = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: d,
  ...c
}) => {
  const f = ec({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (g) => {
    g.preventDefault(), g.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: f.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ n.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: h,
        disabled: l,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, tc = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: d,
  children: c,
  onChange: f,
  onBlur: h,
  onFocus: g,
  attributes: v,
  ...T
}) => {
  const [p, u] = Ie(a), P = r !== void 0, A = P ? r : p;
  Ae(() => {
    P || u(a);
  }, [a, P]);
  const D = (x) => {
    const k = x.target.checked;
    P || u(k), f?.(k, x);
  }, S = i ? `${e}-hint` : void 0, B = l ? `${e}-error` : void 0, N = [S, B].filter(Boolean).join(" ") || void 0, $ = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: $, ...T, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: A,
        disabled: o,
        onChange: D,
        onBlur: h,
        onFocus: g,
        "aria-describedby": N,
        ...v
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: S, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: B, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
tc.displayName = "Checkbox";
function nc(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const Za = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: d = !1,
  hasError: c = !1,
  describedBy: f,
  className: h,
  width: g = "full",
  inputMode: v,
  autoComplete: T,
  maxLength: p,
  minLength: u,
  pattern: P,
  step: A,
  min: D,
  max: S,
  showValueLabels: B = !1,
  showCurrentValue: N = !1,
  valueLabels: $,
  onChange: x,
  onBlur: k,
  onFocus: _,
  onKeyDown: m,
  ...y
}) => {
  const [L, j] = Ie(a || o || (r === "range" ? D || "0" : ""));
  Ae(() => {
    a !== void 0 && j(a);
  }, [a]);
  const w = (C) => {
    const Z = C.target;
    j(Z.value), ("type" in C && C.nativeEvent || C.type === "keydown") && x?.(C);
  }, { classes: b, isRange: F } = nc({ type: r, hasError: c, width: g, className: h }), Q = a !== void 0, z = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": f,
    inputMode: v,
    autoComplete: T,
    maxLength: p,
    minLength: u,
    pattern: P,
    step: A,
    min: D,
    max: S,
    onChange: w,
    onBlur: k,
    onFocus: _,
    onKeyDown: (C) => {
      if (F && /[0-9]/.test(C.key)) {
        const Z = (L?.toString() || "") + C.key;
        C.target.value = Z, w(C);
      }
      m?.(C);
    },
    ...y
  }, R = !Q && o !== void 0 ? { defaultValue: o } : {}, U = Q ? { value: a } : {}, E = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: b,
      ...U,
      ...R,
      "data-current-value": L,
      ...z
    }
  ), I = F ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    B && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: $?.min || D || "0" }),
      E(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: $?.max || S || "100" })
    ] }),
    !B && E(),
    N && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      $?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: L })
    ] }) })
  ] }) : null;
  return F ? I : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: b,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": f,
      inputMode: v,
      autoComplete: T,
      maxLength: p,
      minLength: u,
      pattern: P,
      step: A,
      min: D,
      max: S,
      onChange: x,
      onBlur: k,
      onFocus: _,
      onKeyDown: m,
      ...y
    }
  );
};
function rc(e) {
  const t = e.size || "m", r = [
    "nhsuk-label",
    t !== "m" ? `nhsuk-label--${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.isPageHeading ? "h1" : "label",
    classes: r,
    size: t,
    htmlFor: e.isPageHeading ? void 0 : e.htmlFor,
    isPageHeading: !!e.isPageHeading
  };
}
const Ja = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = rc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, Qa = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = be(
    "nhsuk-fieldset",
    r
  ), i = be(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), l = () => {
    const d = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: d }) : d;
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
}, ac = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: d = "",
  small: c = !1,
  onChange: f,
  fieldsetAttributes: h,
  attributes: g,
  ...v
}) => {
  const [T, p] = Ie(
    e.filter((x) => x.checked).map((x) => x.value)
  ), u = r || t, P = i ? `${u}-hint` : void 0, A = l ? `${u}-error` : void 0, D = [P, A].filter(Boolean).join(" ") || void 0, S = (x, k) => {
    let _;
    k ? _ = [...T, x] : _ = T.filter((m) => m !== x), p(_), f?.(_);
  }, B = () => e.map((x, k) => {
    const _ = `${u}-${k + 1}`, m = `${_}-conditional`, y = T.includes(x.value), L = x.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: _,
          name: t,
          type: "checkbox",
          value: x.value,
          checked: y,
          disabled: L,
          onChange: (j) => S(x.value, j.target.checked),
          "aria-describedby": x.hint ? `${_}-hint` : D,
          ...x.conditional && {
            "aria-controls": m,
            "aria-expanded": y ? "true" : "false"
          },
          ...x.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: _, children: x.text }),
      x.hint && /* @__PURE__ */ n.jsx("div", { id: `${_}-hint`, className: "nhsuk-checkboxes__hint", children: x.hint }),
      x.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: be("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !y
          }),
          id: m,
          children: typeof x.conditional == "object" && x.conditional !== null && "label" in x.conditional && "id" in x.conditional && "name" in x.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            x.conditional.label && /* @__PURE__ */ n.jsx(Ja, { htmlFor: x.conditional.id, children: x.conditional.label }),
            /* @__PURE__ */ n.jsx(Za, { ...x.conditional })
          ] }) : x.conditional
        }
      )
    ] }, x.value);
  }), N = be(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), $ = be("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: $, ...g, ...v, children: /* @__PURE__ */ n.jsxs(
    Qa,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: D,
      ...h,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: P, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: A, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: N, children: B() })
      ]
    }
  ) });
};
ac.displayName = "Checkboxes";
const sc = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: d = !1,
  describedBy: c,
  className: f,
  rows: h = 5,
  cols: g,
  maxLength: v,
  minLength: T,
  wrap: p = "soft",
  resize: u = "vertical",
  autoComplete: P,
  spellCheck: A,
  onChange: D,
  onBlur: S,
  onFocus: B,
  onKeyDown: N,
  ...$
}) => {
  const x = be(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${u}`]: u !== "vertical"
    },
    f
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: x,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: h,
      cols: g,
      maxLength: v,
      minLength: T,
      wrap: p,
      autoComplete: P,
      spellCheck: A,
      onChange: D,
      onBlur: S,
      onFocus: B,
      onKeyDown: N,
      ...$
    }
  );
};
function oc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const ko = ({ id: e, className: t, children: r, ...a }) => {
  const o = oc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: o.classes, id: o.id, ...a, children: r });
}, Z0 = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: d,
  countMessage: c,
  onCountChange: f,
  onChange: h,
  ...g
}) => {
  const v = s ?? i ?? "", [T, p] = Ie(v), [u, P] = Ie(0), [A, D] = Ie(!1), [S, B] = Ie(!1), N = ge((y) => r ? y.trim() === "" ? 0 : y.trim().split(/\s+/).length : y.length, [r]);
  Ae(() => {
    const y = N(T), L = t || r || 0, j = L - y, w = Math.floor(L * (a / 100));
    P(j), D(y > L), B(y >= w || y > L), f && f(y, j);
  }, [T, t, r, a, N, f]);
  const $ = (y) => {
    const L = y.target.value;
    p(L), h && h(y);
  }, x = () => {
    const y = t || r || 0, L = r ? "word" : "character", j = r ? "words" : "characters";
    if (!S)
      return `You can enter up to ${y} ${y === 1 ? L : j}`;
    if (A) {
      const w = Math.abs(u);
      return `You have ${w} ${w === 1 ? L : j} too many`;
    } else
      return `You have ${u} ${u === 1 ? L : j} remaining`;
  }, k = be(
    "nhsuk-character-count",
    d
  ), _ = be(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !S,
      "nhsuk-error-message": A
    },
    c?.classes
  ), m = be(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": A
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: k,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          sc,
          {
            id: e,
            name: o,
            value: s !== void 0 ? T : void 0,
            defaultValue: s === void 0 ? i ?? T : void 0,
            rows: l,
            className: m,
            onChange: $,
            "aria-describedby": `${e}-info`,
            "aria-invalid": A || void 0,
            ...g
          }
        ),
        /* @__PURE__ */ n.jsx(
          ko,
          {
            id: `${e}-info`,
            className: _,
            role: "status",
            "aria-live": "polite",
            children: x()
          }
        )
      ]
    }
  );
}, ic = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = be(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...s,
      children: o
    }
  );
}, lc = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: d,
  className: c,
  multiple: f = !1,
  size: h,
  autoComplete: g,
  options: v,
  children: T,
  onChange: p,
  onBlur: u,
  onFocus: P,
  ...A
}) => {
  const D = be(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), S = () => v ? v.map((N, $) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: N.value,
      disabled: N.disabled,
      "data-initial-selected": N.selected || void 0,
      children: N.text
    },
    `${N.value}-${$}`
  )) : null, B = o === void 0 && a === void 0 && v ? v.find((N) => N.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: D,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : B,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: f,
      size: h,
      autoComplete: g,
      onChange: p,
      onBlur: u,
      onFocus: P,
      ...A,
      children: T || S()
    }
  );
}, Wn = lc;
Wn.Option = ic;
function Co(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: d
}) {
  const { onChange: c, onBlur: f, onFocus: h, ...g } = e, {
    name: v,
    hasError: T = !1,
    describedBy: p,
    className: u,
    size: P = "normal",
    inline: A = !1,
    options: D,
    ...S
  } = g, B = be(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": T,
      "nhsuk-radios--small": P === "small",
      "nhsuk-radios--inline": A
    },
    u
  );
  return /* @__PURE__ */ n.jsx(Qa, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: B,
      ...S,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: D.map((N, $) => {
        const x = `${v}-${$}`, k = N.conditional ? `${x}-conditional` : void 0, _ = r === N.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: x,
              name: v,
              type: "radio",
              value: N.value,
              disabled: N.disabled,
              ...t === "client" ? { checked: _, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (m) => {
                m && d && (d.current[$] = m);
              } } : { defaultChecked: _, "data-nhs-radios-input": !0 },
              "aria-describedby": p
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: x, children: N.text }),
          N.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: N.hint }),
          N.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: be("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !_
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                N.conditional.label && /* @__PURE__ */ n.jsx(Ja, { htmlFor: N.conditional.id, children: N.conditional.label }),
                /* @__PURE__ */ n.jsx(Za, { ...N.conditional })
              ] }) : N.conditional
            }
          )
        ] }, N.value);
      })
    }
  ) });
}
const J0 = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Ie(e || t || ""), d = Le([]), c = Le(i), f = (v) => {
    const T = v.target.value;
    T !== c.current && (c.current = T, l(T), r?.(v));
  }, h = (v) => {
    o?.(v);
  }, g = ge((v) => {
    const { key: T } = v;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(T)) return;
    v.preventDefault();
    const p = d.current.filter((D) => D && !D.disabled), u = p.indexOf(v.currentTarget);
    if (u === -1) return;
    let P = u;
    ["ArrowDown", "ArrowRight"].includes(T) ? P = (u + 1) % p.length : ["ArrowUp", "ArrowLeft"].includes(T) && (P = (u - 1 + p.length) % p.length);
    const A = p[P];
    A && (A.focus(), A.checked || A.click());
  }, []);
  return Co(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: f,
      handleBlur: a,
      handleFocus: h,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: g,
      itemsRef: d
    }
  );
}, Q0 = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return Co(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, jo = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = be(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, Yt = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = be("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, style: r, ...a, children: e });
}, _n = ({
  children: e,
  width: t = "full",
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: d,
  ...c
}) => {
  const f = be(
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
  return /* @__PURE__ */ n.jsx("div", { className: f, style: d, ...c, children: e });
}, ha = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = rt.Children.toArray(e)[0], i = rt.isValidElement(s) && (s.type === Yt || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(jo, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(Yt, { children: e }) });
}, cc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = be(
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
  return /* @__PURE__ */ n.jsx(d, { className: c, role: s, ...l, children: e });
}, dc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = be("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, uc = cc;
uc.Item = dc;
const ex = ({
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
}, tx = {
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
}, nx = ({
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
}, rx = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, ax = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], No = ({
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
};
function fc(e) {
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
function hc(e) {
  const t = e.level ?? fc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Dt = ({ level: e, className: t, text: r, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = hc({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return _o(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function pc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const js = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...o }) => {
  const s = pc({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, sx = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Le(null);
  Ae(() => {
    d.current && d.current.focus();
  }, []);
  const c = be(
    "nhsuk-error-summary",
    s
  ), f = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, g = (v) => {
    const T = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
    return v.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: v.href,
        ...v.attributes,
        children: T
      }
    ) : T;
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: d,
      className: c,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: f() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: h() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((v, T) => /* @__PURE__ */ n.jsx("li", { children: g(v) }, T)) })
        ] })
      ]
    }
  );
}, ox = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: d,
  ...c
}) => {
  const [f, h] = Ie(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [g, v] = Ie({}), T = (w) => w % 4 === 0 && w % 100 !== 0 || w % 400 === 0, p = (w, b) => {
    const F = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return w === 2 && T(b) ? 29 : F[w - 1];
  }, u = (w, b, F) => {
    if (!w) return;
    if (!/^\d+$/.test(w)) return "Day must be a number";
    const Q = parseInt(w, 10);
    if (Q < 1 || Q > 31) return "Day must be between 1 and 31";
    if (b && F) {
      const z = parseInt(b, 10), R = parseInt(F, 10);
      if (!isNaN(z) && !isNaN(R) && z >= 1 && z <= 12) {
        const U = p(z, R);
        if (Q > U)
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
          ][z - 1]} ${R} only has ${U} days`;
      }
    }
  }, P = (w) => {
    if (!w) return;
    if (!/^\d+$/.test(w)) return "Month must be a number";
    const b = parseInt(w, 10);
    if (b < 1 || b > 12) return "Month must be between 1 and 12";
  }, A = (w) => {
    if (!w) return;
    if (!/^\d+$/.test(w)) return "Year must be a number";
    const b = parseInt(w, 10), F = (/* @__PURE__ */ new Date()).getFullYear();
    if (b < 1900 || b > F + 10)
      return `Year must be between 1900 and ${F + 10}`;
  }, D = (w, b, F) => {
    if (!w || !b || !F) return;
    const Q = parseInt(w, 10), z = parseInt(b, 10), R = parseInt(F, 10);
    if (isNaN(Q) || isNaN(z) || isNaN(R) || z < 1 || z > 12 || R < 1900) return;
    const U = p(z, R);
    Q < 1 || Q > U;
  }, S = ge((w, b) => {
    const F = {
      ...f,
      [w]: b
    };
    h(F), d && d(F);
  }, [f, d]), B = ge((w) => {
    const b = f[w];
    let F;
    if (w === "day")
      F = u(b, f.month, f.year);
    else if (w === "month") {
      if (F = P(b), !F && f.day) {
        const Q = u(f.day, b, f.year);
        v((z) => ({
          ...z,
          day: Q
        }));
      }
    } else if (w === "year" && (F = A(b), !F && f.day && f.month)) {
      const Q = u(f.day, f.month, b);
      v((z) => ({
        ...z,
        day: Q
      }));
    }
    if (v((Q) => ({
      ...Q,
      [w]: F
    })), f.day && f.month && f.year) {
      const Q = D(
        w === "day" ? b : f.day,
        w === "month" ? b : f.month,
        w === "year" ? b : f.year
      );
      Q && v((z) => ({
        ...z,
        day: Q
      }));
    }
  }, [f, u, P, A, D]), N = De(() => [
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
  ], []), $ = r || N;
  let x = s?.describedBy || "";
  const k = i ? `${e}-hint` : "", _ = l ? `${e}-error` : "";
  k && (x = x ? `${x} ${k}` : k), _ && (x = x ? `${x} ${_}` : _);
  const m = Object.values(g).some((w) => w), y = be(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || m
    }
  ), L = be(
    "nhsuk-date-input",
    t
  ), j = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      ko,
      {
        id: k,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      js,
      {
        id: _,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(g).map(
      ([w, b]) => b ? /* @__PURE__ */ n.jsxs(
        js,
        {
          id: `${e}-${w}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            b
          ]
        },
        `${w}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: L, id: e, "data-testid": "date-input", ...c, children: $.map((w) => {
      const b = w.id || `${e}-${w.name}`, F = a ? `${a}[${w.name}]` : w.name, Q = w.label || w.name.charAt(0).toUpperCase() + w.name.slice(1), z = g[w.name], R = f[w.name] || "";
      let U = x;
      if (z) {
        const E = `${e}-${w.name}-error`;
        U = U ? `${U} ${E}` : E;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Ja,
          {
            htmlFor: b,
            className: "nhsuk-date-input__label",
            children: Q
          }
        ),
        /* @__PURE__ */ n.jsx(
          Za,
          {
            id: b,
            name: F,
            value: R,
            className: be("nhsuk-date-input__input", w.classes, {
              "nhsuk-input--error": z
            }),
            inputMode: w.inputmode,
            autoComplete: w.autocomplete,
            pattern: w.pattern,
            "aria-describedby": U || void 0,
            hasError: !!z,
            onChange: (E) => S(w.name, E.target.value),
            onBlur: () => B(w.name)
          }
        )
      ] }, w.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: y, children: s ? /* @__PURE__ */ n.jsx(
    Qa,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: x || void 0,
      children: j()
    }
  ) : j() });
}, To = {
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
}, $o = Hl(To), mc = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...To, ...t };
  return /* @__PURE__ */ n.jsx($o.Provider, { value: r, children: e });
}, ix = () => {
  const e = Rl($o);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function gc() {
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
function xc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = gc(), document.head.appendChild(e);
}
const lx = ({ children: e, theme: t }) => (Ae(() => {
  xc();
}, []), /* @__PURE__ */ n.jsx(mc, { theme: t, children: e })), bc = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: d,
  disabled: c = !1,
  callbacks: f = {},
  isLoading: h = !1,
  showResults: g = !1,
  results: v = [],
  formAttributes: T = {},
  inputAttributes: p = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: P = !1,
  debounceMs: A = 300,
  minQueryLength: D = 1
}) => {
  const [S, B] = Ie(""), [N, $] = Ie(!1), x = Le(void 0), k = Le(null), _ = Le(null), m = e === "controlled" && o !== void 0, y = m ? o : S, L = ge((I) => {
    x.current && clearTimeout(x.current), x.current = setTimeout(() => {
      f.onChange && I.length >= D && f.onChange(I);
    }, A);
  }, [f.onChange, A, D]), j = ge((I) => {
    const C = I.target.value;
    m || B(C), e !== "form" && L(C);
  }, [m, e, L]), w = ge((I) => {
    const C = y.trim(), Z = {
      query: C,
      timestamp: Date.now(),
      formData: new FormData(I.currentTarget)
    };
    e === "controlled" || e === "hybrid" && P ? (I.preventDefault(), f.onSearch && C.length >= D && f.onSearch(Z)) : e === "hybrid" && f.onSearch && C.length >= D && f.onSearch(Z);
  }, [e, y, f.onSearch, P, D]), b = ge(() => {
    $(!0), f.onFocus?.();
  }, [f.onFocus]), F = ge(() => {
    $(!1), f.onBlur?.();
  }, [f.onBlur]), Q = ge(() => {
    m || B(""), f.onClear?.(), _.current?.focus();
  }, [m, f.onClear]);
  Ae(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const z = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: be("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": h
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), R = () => /* @__PURE__ */ n.jsx(
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
  ), U = () => !y || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), E = () => !g || !v.length || !N ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((I) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: I.href ? /* @__PURE__ */ n.jsxs("a", { href: I.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: I.title }),
    I.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: I.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => f.onSearch?.({ query: I.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: I.title }),
        I.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: I.description })
      ]
    }
  ) }, I.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: be("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": N,
    "nhsuk-header__search--has-results": g && v.length > 0
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
        onSubmit: w,
        ...T,
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
                placeholder: s,
                autoComplete: "off",
                value: y,
                onChange: j,
                onFocus: b,
                onBlur: F,
                disabled: c || h,
                ...g && v.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...p
              }
            ),
            U()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && y.length < D,
              ...u,
              children: [
                h ? R() : z(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    E()
  ] });
};
function Do(e, {
  variant: t,
  isClient: r,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: d,
  navListRef: c
}) {
  const {
    className: f,
    logo: h = {},
    service: g = {},
    organisation: v,
    search: T,
    account: p,
    navigation: u,
    containerClasses: P,
    variant: A = "default",
    attributes: D = {},
    maxVisibleItems: S,
    // deprecated (ignored)
    responsiveNavigation: B = !0,
    ...N
  } = e;
  "maxVisibleItems" in N && delete N.maxVisibleItems;
  const $ = g.href && !h.href || g.href && g.href === h.href, x = $ ? g.href : h.href, k = be(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": A === "organisation" || v,
      "nhsuk-header--white": A === "white"
    },
    f
  ), _ = be(
    "nhsuk-header__container",
    P
  ), m = be(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
  ), y = () => /* @__PURE__ */ n.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": h.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: h.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), L = () => h.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : y(), j = () => v ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      v.name,
      v.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        v.split
      ] })
    ] }),
    v.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: v.descriptor })
  ] }) : null, w = (U, E) => U ? E ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: E, children: U }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: U }) : null, b = (U) => U.active || U.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text }) : U.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: U.html } }) : U.text, F = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), Q = t === "server" && u?.items && !B, z = Q ? [] : u?.items, R = Q ? u.items : [];
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-module": "nhsuk-header",
      ...D,
      ...N,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              L(),
              j(),
              $ && w(g.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              L(),
              j(),
              $ && w(g.text)
            ] }),
            g.text && !$ && w(g.text, g.href)
          ] }),
          T && /* @__PURE__ */ n.jsx(bc, { ...T }),
          /* @__PURE__ */ n.jsx(
            Kl,
            {
              ...p,
              variant: A === "white" ? "white" : "default"
            }
          )
        ] }),
        u && u.items && u.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: m,
            "aria-label": u.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: be(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  P
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? z || [] : u?.items || []).map((U, E) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: be(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": U.active || U.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && o && s !== void 0 && E >= (s ?? 0)
                            },
                            U.className
                          ),
                          ...U.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: U.href,
                              ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                              children: b(U)
                            }
                          )
                        },
                        E
                      )),
                      t === "client" && o && s !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            F()
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
        t === "client" && r && u && u.items && u.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: u.items.slice(s ?? 0).map((U, E) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: be("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": U.active || U.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: U.href,
                    ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: b(U)
                  }
                )
              },
              `overflow-${(s ?? 0) + E}`
            )) })
          }
        ),
        t === "server" && Q && R.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: R.map((U, E) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: be("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": U.active || U.current
            }),
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: U.href,
                ...U.active || U.current ? { "aria-current": U.current ? "page" : "true" } : {},
                children: b(U)
              }
            )
          },
          `overflow-server-${E}`
        )) }) })
      ]
    }
  );
}
const Io = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: d = "default",
  attributes: c = {},
  ...f
}) => {
  const [h, g] = Ie(!1), [v, T] = Ie(!1), [p, u] = Ie(i?.items?.length || 0), [P, A] = Ie(!1), [D, S] = Ie(!1), B = Le(null), N = Le(null), $ = Le(!1);
  Ae(() => {
    typeof window > "u" || S(!0);
  }, []), Ae(() => {
    if (typeof document > "u") return;
    const m = (y) => {
      y.key === "Escape" && h && g(!1);
    };
    if (h)
      return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m);
  }, [h]);
  const x = Le(null), k = ge(() => {
    if (!D || !i?.items || i.items.length === 0 || $.current) return;
    const m = B.current, y = N.current;
    if (!m || !y) return;
    $.current = !0, m.classList.add("nhsuk-header__navigation-container--measuring");
    const L = m.clientWidth, j = Array.from(y.children);
    if (!j.length) {
      m.classList.remove("nhsuk-header__navigation-container--measuring"), $.current = !1;
      return;
    }
    if (x.current == null) {
      const C = document.createElement("button");
      C.type = "button", C.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", C.style.position = "absolute", C.style.visibility = "hidden", C.style.pointerEvents = "none", C.innerHTML = "<span>More</span>", m.appendChild(C), x.current = C.getBoundingClientRect().width || 104, m.removeChild(C);
    }
    const w = x.current + 16;
    let b = 0, F = 0;
    const Q = window.getComputedStyle(m), z = parseFloat(Q.paddingLeft) || 0, R = parseFloat(Q.paddingRight) || 0;
    let U = z + R;
    for (const C of j) {
      const Z = C.getBoundingClientRect().width;
      if (b + Z + w + U > L) break;
      b += Z, F += 1;
    }
    const E = F < i.items.length, I = E ? F : i.items.length;
    T((C) => C === E ? C : E), u((C) => C === I ? C : I), m.classList.remove("nhsuk-header__navigation-container--measuring"), $.current = !1;
  }, [D, i?.items]);
  Ae(() => {
    if (!D) return;
    const m = B.current;
    if (!m) return;
    let y = null;
    const L = () => {
      y == null && (y = window.requestAnimationFrame(() => {
        y = null, k();
      }));
    };
    k();
    const j = new ResizeObserver(() => L());
    return j.observe(m), N.current && j.observe(N.current), () => {
      y != null && window.cancelAnimationFrame(y), j.disconnect();
    };
  }, [D, k]), Ae(() => {
    D && k();
  }, [i?.items?.length, D, k]);
  const _ = (m) => {
    m && (m.preventDefault(), m.stopPropagation());
    const y = !h;
    g(y), A(y);
  };
  return Do(
    {
      className: e,
      logo: t,
      service: r,
      organisation: a,
      search: o,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: d,
      attributes: c,
      ...f
    },
    {
      variant: "client",
      isClient: D,
      menuOpen: h,
      showMoreButton: v,
      visibleItems: p,
      dropdownVisible: P,
      toggleMenu: _,
      navContainerRef: B,
      navListRef: N
    }
  );
}, cx = (e) => Do(e, {
  variant: "server",
  isClient: !1
}), yc = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: d,
  ...c
}) => {
  const f = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), h = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), v = d || e || a || o, T = () => {
    if (!e) return null;
    const p = { className: g };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...p, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...p, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...p, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...p, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...p, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...p, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...p, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: f,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          T(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && v && /* @__PURE__ */ n.jsx("div", { className: h, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          T(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
yc.displayName = "Hero";
const Mo = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: d,
  footerStyle: c,
  containerStyle: f
}) => {
  const h = (v, T = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: be("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": T
      }),
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: v.URL,
          target: v.newWindow ? "_blank" : void 0,
          rel: v.newWindow ? "noopener noreferrer" : void 0,
          children: v.label
        }
      )
    },
    `${v.URL}-${v.label}`
  ), g = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: be("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: be("nhsuk-footer", e), style: c, children: g ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((v) => h(v)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((v) => h(v)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((v) => h(v)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((v) => h(v)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((v) => h(v, !0)),
              (r || []).map((v) => h(v, !0)),
              (a || []).map((v) => h(v, !0)),
              (o || []).map((v) => h(v, !0))
            ] })
          ) }),
          !g && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Hn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function vc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function es(e) {
  let t, r, a;
  e.length !== 2 ? (t = Hn, r = (l, d) => Hn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Hn || e === vc ? e : _c, r = e, a = e);
  function o(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        r(l[h], d) < 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function s(l, d, c = 0, f = l.length) {
    if (c < f) {
      if (t(d, d) !== 0) return f;
      do {
        const h = c + f >>> 1;
        r(l[h], d) <= 0 ? c = h + 1 : f = h;
      } while (c < f);
    }
    return c;
  }
  function i(l, d, c = 0, f = l.length) {
    const h = o(l, d, c, f - 1);
    return h > c && a(l[h - 1], d) > -a(l[h], d) ? h - 1 : h;
  }
  return { left: o, center: i, right: s };
}
function _c() {
  return 0;
}
function wc(e) {
  return e === null ? NaN : +e;
}
const Sc = es(Hn), kc = Sc.right;
es(wc).center;
function Lo(e, t) {
  let r, a;
  if (t === void 0)
    for (const o of e)
      o != null && (r === void 0 ? o >= o && (r = a = o) : (r > o && (r = o), a < o && (a = o)));
  else {
    let o = -1;
    for (let s of e)
      (s = t(s, ++o, e)) != null && (r === void 0 ? s >= s && (r = a = s) : (r > s && (r = s), a < s && (a = s)));
  }
  return [r, a];
}
class Ns extends Map {
  constructor(t, r = Nc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Ts(this, t));
  }
  has(t) {
    return super.has(Ts(this, t));
  }
  set(t, r) {
    return super.set(Cc(this, t), r);
  }
  delete(t) {
    return super.delete(jc(this, t));
  }
}
function Ts({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function Cc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function jc({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function Nc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Tc = Math.sqrt(50), $c = Math.sqrt(10), Dc = Math.sqrt(2);
function On(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Tc ? 10 : s >= $c ? 5 : s >= Dc ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? On(e, t, r * 2) : [l, d, c];
}
function Ic(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? On(t, e, r) : On(e, t, r);
  if (!(s >= o)) return [];
  const l = s - o + 1, d = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) d[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) d[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) d[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) d[c] = (o + c) * i;
  return d;
}
function pa(e, t, r) {
  return t = +t, e = +e, r = +r, On(e, t, r)[2];
}
function ma(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? pa(t, e, r) : pa(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Mc(e, t, r) {
  e = +e, t = +t, r = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +r;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / r)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * r;
  return s;
}
function Ir(e, t) {
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
const $s = Symbol("implicit");
function Fo() {
  var e = new Ns(), t = [], r = [], a = $s;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== $s) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return r[i % r.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ns();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (r = Array.from(s), o) : r.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Fo(t, r).unknown(a);
  }, Ir.apply(o, arguments), o;
}
function Ao() {
  var e = Fo().unknown(void 0), t = e.domain, r = e.range, a = 0, o = 1, s, i, l = !1, d = 0, c = 0, f = 0.5;
  delete e.unknown;
  function h() {
    var g = t().length, v = o < a, T = v ? o : a, p = v ? a : o;
    s = (p - T) / Math.max(1, g - d + c * 2), l && (s = Math.floor(s)), T += (p - T - s * (g - d)) * f, i = s * (1 - d), l && (T = Math.round(T), i = Math.round(i));
    var u = Mc(g).map(function(P) {
      return T + s * P;
    });
    return r(v ? u.reverse() : u);
  }
  return e.domain = function(g) {
    return arguments.length ? (t(g), h()) : t();
  }, e.range = function(g) {
    return arguments.length ? ([a, o] = g, a = +a, o = +o, h()) : [a, o];
  }, e.rangeRound = function(g) {
    return [a, o] = g, a = +a, o = +o, l = !0, h();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(g) {
    return arguments.length ? (l = !!g, h()) : l;
  }, e.padding = function(g) {
    return arguments.length ? (d = Math.min(1, c = +g), h()) : d;
  }, e.paddingInner = function(g) {
    return arguments.length ? (d = Math.min(1, g), h()) : d;
  }, e.paddingOuter = function(g) {
    return arguments.length ? (c = +g, h()) : c;
  }, e.align = function(g) {
    return arguments.length ? (f = Math.max(0, Math.min(1, g)), h()) : f;
  }, e.copy = function() {
    return Ao(t(), [a, o]).round(l).paddingInner(d).paddingOuter(c).align(f);
  }, Ir.apply(h(), arguments);
}
function ts(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Eo(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function $n() {
}
var wn = 0.7, Un = 1 / wn, sn = "\\s*([+-]?\\d+)\\s*", Sn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Lc = /^#([0-9a-f]{3,8})$/, Fc = new RegExp(`^rgb\\(${sn},${sn},${sn}\\)$`), Ac = new RegExp(`^rgb\\(${pt},${pt},${pt}\\)$`), Ec = new RegExp(`^rgba\\(${sn},${sn},${sn},${Sn}\\)$`), Bc = new RegExp(`^rgba\\(${pt},${pt},${pt},${Sn}\\)$`), Pc = new RegExp(`^hsl\\(${Sn},${pt},${pt}\\)$`), Rc = new RegExp(`^hsla\\(${Sn},${pt},${pt},${Sn}\\)$`), Ds = {
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
ts($n, kn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Is,
  // Deprecated! Use color.formatHex.
  formatHex: Is,
  formatHex8: Hc,
  formatHsl: zc,
  formatRgb: Ms,
  toString: Ms
});
function Is() {
  return this.rgb().formatHex();
}
function Hc() {
  return this.rgb().formatHex8();
}
function zc() {
  return Bo(this).formatHsl();
}
function Ms() {
  return this.rgb().formatRgb();
}
function kn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Lc.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ls(t) : r === 3 ? new at(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? En(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? En(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Fc.exec(e)) ? new at(t[1], t[2], t[3], 1) : (t = Ac.exec(e)) ? new at(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ec.exec(e)) ? En(t[1], t[2], t[3], t[4]) : (t = Bc.exec(e)) ? En(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Pc.exec(e)) ? Es(t[1], t[2] / 100, t[3] / 100, 1) : (t = Rc.exec(e)) ? Es(t[1], t[2] / 100, t[3] / 100, t[4]) : Ds.hasOwnProperty(e) ? Ls(Ds[e]) : e === "transparent" ? new at(NaN, NaN, NaN, 0) : null;
}
function Ls(e) {
  return new at(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function En(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new at(e, t, r, a);
}
function Wc(e) {
  return e instanceof $n || (e = kn(e)), e ? (e = e.rgb(), new at(e.r, e.g, e.b, e.opacity)) : new at();
}
function ga(e, t, r, a) {
  return arguments.length === 1 ? Wc(e) : new at(e, t, r, a ?? 1);
}
function at(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
ts(at, ga, Eo($n, {
  brighter(e) {
    return e = e == null ? Un : Math.pow(Un, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new at(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new at(Gt(this.r), Gt(this.g), Gt(this.b), Gn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Fs,
  // Deprecated! Use color.formatHex.
  formatHex: Fs,
  formatHex8: Oc,
  formatRgb: As,
  toString: As
}));
function Fs() {
  return `#${Ut(this.r)}${Ut(this.g)}${Ut(this.b)}`;
}
function Oc() {
  return `#${Ut(this.r)}${Ut(this.g)}${Ut(this.b)}${Ut((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function As() {
  const e = Gn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Gt(this.r)}, ${Gt(this.g)}, ${Gt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Gn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Gt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ut(e) {
  return e = Gt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Es(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new it(e, t, r, a);
}
function Bo(e) {
  if (e instanceof it) return new it(e.h, e.s, e.l, e.opacity);
  if (e instanceof $n || (e = kn(e)), !e) return new it();
  if (e instanceof it) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new it(i, l, d, e.opacity);
}
function Uc(e, t, r, a) {
  return arguments.length === 1 ? Bo(e) : new it(e, t, r, a ?? 1);
}
function it(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
ts(it, Uc, Eo($n, {
  brighter(e) {
    return e = e == null ? Un : Math.pow(Un, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? wn : Math.pow(wn, e), new it(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new at(
      Xr(e >= 240 ? e - 240 : e + 120, o, a),
      Xr(e, o, a),
      Xr(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new it(Bs(this.h), Bn(this.s), Bn(this.l), Gn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Gn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Bs(this.h)}, ${Bn(this.s) * 100}%, ${Bn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Bs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Xr(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ns = (e) => () => e;
function Gc(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Yc(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Vc(e) {
  return (e = +e) == 1 ? Po : function(t, r) {
    return r - t ? Yc(t, r, e) : ns(isNaN(t) ? r : t);
  };
}
function Po(e, t) {
  var r = t - e;
  return r ? Gc(e, r) : ns(isNaN(e) ? t : e);
}
const Ps = (function e(t) {
  var r = Vc(t);
  function a(o, s) {
    var i = r((o = ga(o)).r, (s = ga(s)).r), l = r(o.g, s.g), d = r(o.b, s.b), c = Po(o.opacity, s.opacity);
    return function(f) {
      return o.r = i(f), o.g = l(f), o.b = d(f), o.opacity = c(f), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function qc(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Xc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Kc(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = rs(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Zc(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function Yn(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Jc(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = rs(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var xa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Kr = new RegExp(xa.source, "g");
function Qc(e) {
  return function() {
    return e;
  };
}
function ed(e) {
  return function(t) {
    return e(t) + "";
  };
}
function td(e, t) {
  var r = xa.lastIndex = Kr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = xa.exec(e)) && (o = Kr.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Yn(a, o) })), r = Kr.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? ed(d[0].x) : Qc(t) : (t = d.length, function(c) {
    for (var f = 0, h; f < t; ++f) l[(h = d[f]).i] = h.x(c);
    return l.join("");
  });
}
function rs(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? ns(t) : (r === "number" ? Yn : r === "string" ? (a = kn(t)) ? (t = a, Ps) : td : t instanceof kn ? Ps : t instanceof Date ? Zc : Xc(t) ? qc : Array.isArray(t) ? Kc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Jc : Yn)(e, t);
}
function nd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function rd(e) {
  return function() {
    return e;
  };
}
function ad(e) {
  return +e;
}
var Rs = [0, 1];
function rn(e) {
  return e;
}
function ba(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : rd(isNaN(t) ? NaN : 0.5);
}
function sd(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function od(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = ba(o, a), s = r(i, s)) : (a = ba(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function id(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = ba(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = kc(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Ro(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ld() {
  var e = Rs, t = Rs, r = rs, a, o, s, i = rn, l, d, c;
  function f() {
    var g = Math.min(e.length, t.length);
    return i !== rn && (i = sd(e[0], e[g - 1])), l = g > 2 ? id : od, d = c = null, h;
  }
  function h(g) {
    return g == null || isNaN(g = +g) ? s : (d || (d = l(e.map(a), t, r)))(a(i(g)));
  }
  return h.invert = function(g) {
    return i(o((c || (c = l(t, e.map(a), Yn)))(g)));
  }, h.domain = function(g) {
    return arguments.length ? (e = Array.from(g, ad), f()) : e.slice();
  }, h.range = function(g) {
    return arguments.length ? (t = Array.from(g), f()) : t.slice();
  }, h.rangeRound = function(g) {
    return t = Array.from(g), r = nd, f();
  }, h.clamp = function(g) {
    return arguments.length ? (i = g ? !0 : rn, f()) : i !== rn;
  }, h.interpolate = function(g) {
    return arguments.length ? (r = g, f()) : r;
  }, h.unknown = function(g) {
    return arguments.length ? (s = g, h) : s;
  }, function(g, v) {
    return a = g, o = v, f();
  };
}
function Ho() {
  return ld()(rn, rn);
}
function cd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Vn(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function cn(e) {
  return e = Vn(Math.abs(e)), e ? e[1] : NaN;
}
function dd(e, t) {
  return function(r, a) {
    for (var o = r.length, s = [], i = 0, l = e[0], d = 0; o > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), s.push(r.substring(o -= l, o + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function ud(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var fd = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function qn(e) {
  if (!(t = fd.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new as({
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
qn.prototype = as.prototype;
function as(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
as.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hd(e) {
  e: for (var t = e.length, r = 1, a = -1, o; r < t; ++r)
    switch (e[r]) {
      case ".":
        a = o = r;
        break;
      case "0":
        a === 0 && (a = r), o = r;
        break;
      default:
        if (!+e[r]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(o + 1) : e;
}
var zo;
function pd(e, t) {
  var r = Vn(e, t);
  if (!r) return e + "";
  var a = r[0], o = r[1], s = o - (zo = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Vn(e, Math.max(0, t + s - 1))[0];
}
function Hs(e, t) {
  var r = Vn(e, t);
  if (!r) return e + "";
  var a = r[0], o = r[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const zs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: cd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Hs(e * 100, t),
  r: Hs,
  s: pd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Ws(e) {
  return e;
}
var Os = Array.prototype.map, Us = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function md(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Ws : dd(Os.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Ws : ud(Os.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = qn(h);
    var g = h.fill, v = h.align, T = h.sign, p = h.symbol, u = h.zero, P = h.width, A = h.comma, D = h.precision, S = h.trim, B = h.type;
    B === "n" ? (A = !0, B = "g") : zs[B] || (D === void 0 && (D = 12), S = !0, B = "g"), (u || g === "0" && v === "=") && (u = !0, g = "0", v = "=");
    var N = p === "$" ? r : p === "#" && /[boxX]/.test(B) ? "0" + B.toLowerCase() : "", $ = p === "$" ? a : /[%p]/.test(B) ? i : "", x = zs[B], k = /[defgprs%]/.test(B);
    D = D === void 0 ? 6 : /[gprs]/.test(B) ? Math.max(1, Math.min(21, D)) : Math.max(0, Math.min(20, D));
    function _(m) {
      var y = N, L = $, j, w, b;
      if (B === "c")
        L = x(m) + L, m = "";
      else {
        m = +m;
        var F = m < 0 || 1 / m < 0;
        if (m = isNaN(m) ? d : x(Math.abs(m), D), S && (m = hd(m)), F && +m == 0 && T !== "+" && (F = !1), y = (F ? T === "(" ? T : l : T === "-" || T === "(" ? "" : T) + y, L = (B === "s" ? Us[8 + zo / 3] : "") + L + (F && T === "(" ? ")" : ""), k) {
          for (j = -1, w = m.length; ++j < w; )
            if (b = m.charCodeAt(j), 48 > b || b > 57) {
              L = (b === 46 ? o + m.slice(j + 1) : m.slice(j)) + L, m = m.slice(0, j);
              break;
            }
        }
      }
      A && !u && (m = t(m, 1 / 0));
      var Q = y.length + m.length + L.length, z = Q < P ? new Array(P - Q + 1).join(g) : "";
      switch (A && u && (m = t(z + m, z.length ? P - L.length : 1 / 0), z = ""), v) {
        case "<":
          m = y + m + L + z;
          break;
        case "=":
          m = y + z + m + L;
          break;
        case "^":
          m = z.slice(0, Q = z.length >> 1) + y + m + L + z.slice(Q);
          break;
        default:
          m = z + y + m + L;
          break;
      }
      return s(m);
    }
    return _.toString = function() {
      return h + "";
    }, _;
  }
  function f(h, g) {
    var v = c((h = qn(h), h.type = "f", h)), T = Math.max(-8, Math.min(8, Math.floor(cn(g) / 3))) * 3, p = Math.pow(10, -T), u = Us[8 + T / 3];
    return function(P) {
      return v(p * P) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var Pn, Wo, Oo;
gd({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function gd(e) {
  return Pn = md(e), Wo = Pn.format, Oo = Pn.formatPrefix, Pn;
}
function xd(e) {
  return Math.max(0, -cn(Math.abs(e)));
}
function bd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(cn(t) / 3))) * 3 - cn(Math.abs(e)));
}
function yd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, cn(t) - cn(e)) + 1;
}
function vd(e, t, r, a) {
  var o = ma(e, t, r), s;
  switch (a = qn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = bd(o, i)) && (a.precision = s), Oo(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = yd(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = xd(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Wo(a);
}
function _d(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return Ic(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var o = t();
    return vd(o[0], o[o.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], d, c, f = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); f-- > 0; ) {
      if (c = pa(i, l, r), c === d)
        return a[o] = i, a[s] = l, t(a);
      if (c > 0)
        i = Math.floor(i / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        i = Math.ceil(i * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      d = c;
    }
    return e;
  }, e;
}
function Xn() {
  var e = Ho();
  return e.copy = function() {
    return Ro(e, Xn());
  }, Ir.apply(e, arguments), _d(e);
}
function wd(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Zr = /* @__PURE__ */ new Date(), Jr = /* @__PURE__ */ new Date();
function qe(e, t, r, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const d = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return d;
    let c;
    do
      d.push(c = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (c < s && s < i);
    return d;
  }, o.filter = (s) => qe((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (Zr.setTime(+s), Jr.setTime(+i), e(Zr), e(Jr), Math.floor(r(Zr, Jr))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Kn = qe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Kn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? qe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Kn);
Kn.range;
const Tt = 1e3, ot = Tt * 60, $t = ot * 60, It = $t * 24, ss = It * 7, Gs = It * 30, Qr = It * 365, an = qe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCSeconds());
an.range;
const os = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Tt);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
os.range;
const Sd = qe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
Sd.range;
const is = qe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Tt - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getHours());
is.range;
const kd = qe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $t);
}, (e, t) => (t - e) / $t, (e) => e.getUTCHours());
kd.range;
const Dn = qe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / It,
  (e) => e.getDate() - 1
);
Dn.range;
const ls = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => e.getUTCDate() - 1);
ls.range;
const Cd = qe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / It, (e) => Math.floor(e / It));
Cd.range;
function Xt(e) {
  return qe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / ss);
}
const Mr = Xt(0), Zn = Xt(1), jd = Xt(2), Nd = Xt(3), dn = Xt(4), Td = Xt(5), $d = Xt(6);
Mr.range;
Zn.range;
jd.range;
Nd.range;
dn.range;
Td.range;
$d.range;
function Kt(e) {
  return qe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ss);
}
const Uo = Kt(0), Jn = Kt(1), Dd = Kt(2), Id = Kt(3), un = Kt(4), Md = Kt(5), Ld = Kt(6);
Uo.range;
Jn.range;
Dd.range;
Id.range;
un.range;
Md.range;
Ld.range;
const Cn = qe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Cn.range;
const Fd = qe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Fd.range;
const Mt = qe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Mt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Mt.range;
const Vt = qe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Vt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : qe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Vt.range;
function Ad(e, t, r, a, o, s) {
  const i = [
    [an, 1, Tt],
    [an, 5, 5 * Tt],
    [an, 15, 15 * Tt],
    [an, 30, 30 * Tt],
    [s, 1, ot],
    [s, 5, 5 * ot],
    [s, 15, 15 * ot],
    [s, 30, 30 * ot],
    [o, 1, $t],
    [o, 3, 3 * $t],
    [o, 6, 6 * $t],
    [o, 12, 12 * $t],
    [a, 1, It],
    [a, 2, 2 * It],
    [r, 1, ss],
    [t, 1, Gs],
    [t, 3, 3 * Gs],
    [e, 1, Qr]
  ];
  function l(c, f, h) {
    const g = f < c;
    g && ([c, f] = [f, c]);
    const v = h && typeof h.range == "function" ? h : d(c, f, h), T = v ? v.range(c, +f + 1) : [];
    return g ? T.reverse() : T;
  }
  function d(c, f, h) {
    const g = Math.abs(f - c) / h, v = es(([, , u]) => u).right(i, g);
    if (v === i.length) return e.every(ma(c / Qr, f / Qr, h));
    if (v === 0) return Kn.every(Math.max(ma(c, f, h), 1));
    const [T, p] = i[g / i[v - 1][2] < i[v][2] / g ? v - 1 : v];
    return T.every(p);
  }
  return [l, d];
}
const [Ed, Bd] = Ad(Mt, Cn, Mr, Dn, is, os);
function ea(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ta(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function xn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Pd(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = bn(o), f = yn(o), h = bn(s), g = yn(s), v = bn(i), T = yn(i), p = bn(l), u = yn(l), P = bn(d), A = yn(d), D = {
    a: F,
    A: Q,
    b: z,
    B: R,
    c: null,
    d: Zs,
    e: Zs,
    f: iu,
    g: xu,
    G: yu,
    H: au,
    I: su,
    j: ou,
    L: Go,
    m: lu,
    M: cu,
    p: U,
    q: E,
    Q: eo,
    s: to,
    S: du,
    u: uu,
    U: fu,
    V: hu,
    w: pu,
    W: mu,
    x: null,
    X: null,
    y: gu,
    Y: bu,
    Z: vu,
    "%": Qs
  }, S = {
    a: I,
    A: C,
    b: Z,
    B: oe,
    c: null,
    d: Js,
    e: Js,
    f: ku,
    g: Fu,
    G: Eu,
    H: _u,
    I: wu,
    j: Su,
    L: Vo,
    m: Cu,
    M: ju,
    p: J,
    q: V,
    Q: eo,
    s: to,
    S: Nu,
    u: Tu,
    U: $u,
    V: Du,
    w: Iu,
    W: Mu,
    x: null,
    X: null,
    y: Lu,
    Y: Au,
    Z: Bu,
    "%": Qs
  }, B = {
    a: _,
    A: m,
    b: y,
    B: L,
    c: j,
    d: Xs,
    e: Xs,
    f: eu,
    g: qs,
    G: Vs,
    H: Ks,
    I: Ks,
    j: Kd,
    L: Qd,
    m: Xd,
    M: Zd,
    p: k,
    q: qd,
    Q: nu,
    s: ru,
    S: Jd,
    u: Od,
    U: Ud,
    V: Gd,
    w: Wd,
    W: Yd,
    x: w,
    X: b,
    y: qs,
    Y: Vs,
    Z: Vd,
    "%": tu
  };
  D.x = N(r, D), D.X = N(a, D), D.c = N(t, D), S.x = N(r, S), S.X = N(a, S), S.c = N(t, S);
  function N(H, G) {
    return function(le) {
      var O = [], ie = -1, se = 0, de = H.length, ue, ve, ce;
      for (le instanceof Date || (le = /* @__PURE__ */ new Date(+le)); ++ie < de; )
        H.charCodeAt(ie) === 37 && (O.push(H.slice(se, ie)), (ve = Ys[ue = H.charAt(++ie)]) != null ? ue = H.charAt(++ie) : ve = ue === "e" ? " " : "0", (ce = G[ue]) && (ue = ce(le, ve)), O.push(ue), se = ie + 1);
      return O.push(H.slice(se, ie)), O.join("");
    };
  }
  function $(H, G) {
    return function(le) {
      var O = xn(1900, void 0, 1), ie = x(O, H, le += "", 0), se, de;
      if (ie != le.length) return null;
      if ("Q" in O) return new Date(O.Q);
      if ("s" in O) return new Date(O.s * 1e3 + ("L" in O ? O.L : 0));
      if (G && !("Z" in O) && (O.Z = 0), "p" in O && (O.H = O.H % 12 + O.p * 12), O.m === void 0 && (O.m = "q" in O ? O.q : 0), "V" in O) {
        if (O.V < 1 || O.V > 53) return null;
        "w" in O || (O.w = 1), "Z" in O ? (se = ta(xn(O.y, 0, 1)), de = se.getUTCDay(), se = de > 4 || de === 0 ? Jn.ceil(se) : Jn(se), se = ls.offset(se, (O.V - 1) * 7), O.y = se.getUTCFullYear(), O.m = se.getUTCMonth(), O.d = se.getUTCDate() + (O.w + 6) % 7) : (se = ea(xn(O.y, 0, 1)), de = se.getDay(), se = de > 4 || de === 0 ? Zn.ceil(se) : Zn(se), se = Dn.offset(se, (O.V - 1) * 7), O.y = se.getFullYear(), O.m = se.getMonth(), O.d = se.getDate() + (O.w + 6) % 7);
      } else ("W" in O || "U" in O) && ("w" in O || (O.w = "u" in O ? O.u % 7 : "W" in O ? 1 : 0), de = "Z" in O ? ta(xn(O.y, 0, 1)).getUTCDay() : ea(xn(O.y, 0, 1)).getDay(), O.m = 0, O.d = "W" in O ? (O.w + 6) % 7 + O.W * 7 - (de + 5) % 7 : O.w + O.U * 7 - (de + 6) % 7);
      return "Z" in O ? (O.H += O.Z / 100 | 0, O.M += O.Z % 100, ta(O)) : ea(O);
    };
  }
  function x(H, G, le, O) {
    for (var ie = 0, se = G.length, de = le.length, ue, ve; ie < se; ) {
      if (O >= de) return -1;
      if (ue = G.charCodeAt(ie++), ue === 37) {
        if (ue = G.charAt(ie++), ve = B[ue in Ys ? G.charAt(ie++) : ue], !ve || (O = ve(H, le, O)) < 0) return -1;
      } else if (ue != le.charCodeAt(O++))
        return -1;
    }
    return O;
  }
  function k(H, G, le) {
    var O = c.exec(G.slice(le));
    return O ? (H.p = f.get(O[0].toLowerCase()), le + O[0].length) : -1;
  }
  function _(H, G, le) {
    var O = v.exec(G.slice(le));
    return O ? (H.w = T.get(O[0].toLowerCase()), le + O[0].length) : -1;
  }
  function m(H, G, le) {
    var O = h.exec(G.slice(le));
    return O ? (H.w = g.get(O[0].toLowerCase()), le + O[0].length) : -1;
  }
  function y(H, G, le) {
    var O = P.exec(G.slice(le));
    return O ? (H.m = A.get(O[0].toLowerCase()), le + O[0].length) : -1;
  }
  function L(H, G, le) {
    var O = p.exec(G.slice(le));
    return O ? (H.m = u.get(O[0].toLowerCase()), le + O[0].length) : -1;
  }
  function j(H, G, le) {
    return x(H, t, G, le);
  }
  function w(H, G, le) {
    return x(H, r, G, le);
  }
  function b(H, G, le) {
    return x(H, a, G, le);
  }
  function F(H) {
    return i[H.getDay()];
  }
  function Q(H) {
    return s[H.getDay()];
  }
  function z(H) {
    return d[H.getMonth()];
  }
  function R(H) {
    return l[H.getMonth()];
  }
  function U(H) {
    return o[+(H.getHours() >= 12)];
  }
  function E(H) {
    return 1 + ~~(H.getMonth() / 3);
  }
  function I(H) {
    return i[H.getUTCDay()];
  }
  function C(H) {
    return s[H.getUTCDay()];
  }
  function Z(H) {
    return d[H.getUTCMonth()];
  }
  function oe(H) {
    return l[H.getUTCMonth()];
  }
  function J(H) {
    return o[+(H.getUTCHours() >= 12)];
  }
  function V(H) {
    return 1 + ~~(H.getUTCMonth() / 3);
  }
  return {
    format: function(H) {
      var G = N(H += "", D);
      return G.toString = function() {
        return H;
      }, G;
    },
    parse: function(H) {
      var G = $(H += "", !1);
      return G.toString = function() {
        return H;
      }, G;
    },
    utcFormat: function(H) {
      var G = N(H += "", S);
      return G.toString = function() {
        return H;
      }, G;
    },
    utcParse: function(H) {
      var G = $(H += "", !0);
      return G.toString = function() {
        return H;
      }, G;
    }
  };
}
var Ys = { "-": "", _: " ", 0: "0" }, Ze = /^\s*\d+/, Rd = /^%/, Hd = /[\\^$*+?|[\]().{}]/g;
function Fe(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function zd(e) {
  return e.replace(Hd, "\\$&");
}
function bn(e) {
  return new RegExp("^(?:" + e.map(zd).join("|") + ")", "i");
}
function yn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Wd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Od(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ud(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Gd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Yd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function Vs(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function qs(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Vd(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function qd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Xd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function Xs(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Kd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Ks(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Zd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Jd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Qd(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function eu(e, t, r) {
  var a = Ze.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function tu(e, t, r) {
  var a = Rd.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function nu(e, t, r) {
  var a = Ze.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function ru(e, t, r) {
  var a = Ze.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Zs(e, t) {
  return Fe(e.getDate(), t, 2);
}
function au(e, t) {
  return Fe(e.getHours(), t, 2);
}
function su(e, t) {
  return Fe(e.getHours() % 12 || 12, t, 2);
}
function ou(e, t) {
  return Fe(1 + Dn.count(Mt(e), e), t, 3);
}
function Go(e, t) {
  return Fe(e.getMilliseconds(), t, 3);
}
function iu(e, t) {
  return Go(e, t) + "000";
}
function lu(e, t) {
  return Fe(e.getMonth() + 1, t, 2);
}
function cu(e, t) {
  return Fe(e.getMinutes(), t, 2);
}
function du(e, t) {
  return Fe(e.getSeconds(), t, 2);
}
function uu(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function fu(e, t) {
  return Fe(Mr.count(Mt(e) - 1, e), t, 2);
}
function Yo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? dn(e) : dn.ceil(e);
}
function hu(e, t) {
  return e = Yo(e), Fe(dn.count(Mt(e), e) + (Mt(e).getDay() === 4), t, 2);
}
function pu(e) {
  return e.getDay();
}
function mu(e, t) {
  return Fe(Zn.count(Mt(e) - 1, e), t, 2);
}
function gu(e, t) {
  return Fe(e.getFullYear() % 100, t, 2);
}
function xu(e, t) {
  return e = Yo(e), Fe(e.getFullYear() % 100, t, 2);
}
function bu(e, t) {
  return Fe(e.getFullYear() % 1e4, t, 4);
}
function yu(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? dn(e) : dn.ceil(e), Fe(e.getFullYear() % 1e4, t, 4);
}
function vu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Fe(t / 60 | 0, "0", 2) + Fe(t % 60, "0", 2);
}
function Js(e, t) {
  return Fe(e.getUTCDate(), t, 2);
}
function _u(e, t) {
  return Fe(e.getUTCHours(), t, 2);
}
function wu(e, t) {
  return Fe(e.getUTCHours() % 12 || 12, t, 2);
}
function Su(e, t) {
  return Fe(1 + ls.count(Vt(e), e), t, 3);
}
function Vo(e, t) {
  return Fe(e.getUTCMilliseconds(), t, 3);
}
function ku(e, t) {
  return Vo(e, t) + "000";
}
function Cu(e, t) {
  return Fe(e.getUTCMonth() + 1, t, 2);
}
function ju(e, t) {
  return Fe(e.getUTCMinutes(), t, 2);
}
function Nu(e, t) {
  return Fe(e.getUTCSeconds(), t, 2);
}
function Tu(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function $u(e, t) {
  return Fe(Uo.count(Vt(e) - 1, e), t, 2);
}
function qo(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? un(e) : un.ceil(e);
}
function Du(e, t) {
  return e = qo(e), Fe(un.count(Vt(e), e) + (Vt(e).getUTCDay() === 4), t, 2);
}
function Iu(e) {
  return e.getUTCDay();
}
function Mu(e, t) {
  return Fe(Jn.count(Vt(e) - 1, e), t, 2);
}
function Lu(e, t) {
  return Fe(e.getUTCFullYear() % 100, t, 2);
}
function Fu(e, t) {
  return e = qo(e), Fe(e.getUTCFullYear() % 100, t, 2);
}
function Au(e, t) {
  return Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Eu(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? un(e) : un.ceil(e), Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Bu() {
  return "+0000";
}
function Qs() {
  return "%";
}
function eo(e) {
  return +e;
}
function to(e) {
  return Math.floor(+e / 1e3);
}
var en, Xo;
Pu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Pu(e) {
  return en = Pd(e), Xo = en.format, en.parse, en.utcFormat, en.utcParse, en;
}
function Ru(e) {
  return new Date(e);
}
function Hu(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ko(e, t, r, a, o, s, i, l, d, c) {
  var f = Ho(), h = f.invert, g = f.domain, v = c(".%L"), T = c(":%S"), p = c("%I:%M"), u = c("%I %p"), P = c("%a %d"), A = c("%b %d"), D = c("%B"), S = c("%Y");
  function B(N) {
    return (d(N) < N ? v : l(N) < N ? T : i(N) < N ? p : s(N) < N ? u : a(N) < N ? o(N) < N ? P : A : r(N) < N ? D : S)(N);
  }
  return f.invert = function(N) {
    return new Date(h(N));
  }, f.domain = function(N) {
    return arguments.length ? g(Array.from(N, Hu)) : g().map(Ru);
  }, f.ticks = function(N) {
    var $ = g();
    return e($[0], $[$.length - 1], N ?? 10);
  }, f.tickFormat = function(N, $) {
    return $ == null ? B : c($);
  }, f.nice = function(N) {
    var $ = g();
    return (!N || typeof N.range != "function") && (N = t($[0], $[$.length - 1], N ?? 10)), N ? g(wd($, N)) : f;
  }, f.copy = function() {
    return Ro(f, Ko(e, t, r, a, o, s, i, l, d, c));
  }, f;
}
function cs() {
  return Ir.apply(Ko(Ed, Bd, Mt, Cn, Mr, Dn, is, os, an, Xo).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function zu({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": d
}) {
  const c = Le(null), [f, h] = Ie(!1), [g, v] = Ie(!1), T = t(e.start), p = t(e.end), u = Math.max(p - T, 20), P = () => {
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
  }, A = e.progress ? u * e.progress / 100 : 0, D = () => {
    r?.(e);
  }, S = () => {
    a?.(e);
  }, B = (y) => {
    y.key === "Enter" ? (y.preventDefault(), D()) : y.key === " " && (y.preventDefault(), S());
  }, N = () => {
    h(!0);
  }, $ = () => {
    h(!1);
  }, x = () => {
    v(!0), l?.();
  }, k = () => {
    v(!1);
  }, _ = [
    "gantt-task-bar",
    f && "gantt-task-bar--pressed",
    (g || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), m = {
    "--task-left": `${T}px`,
    "--task-width": `${u}px`,
    "--task-color": P(),
    left: `${T}px`,
    width: `${u}px`,
    backgroundColor: P()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: _,
      style: m,
      onClick: D,
      onDoubleClick: S,
      onKeyDown: B,
      onMouseDown: N,
      onMouseUp: $,
      onFocus: x,
      onBlur: k,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${A}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Wu({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let v = e.getTime(); v <= t.getTime(); v += 864e5)
    a.push(new Date(v));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Ie(-1), d = Le(null), c = (v) => {
    if (v.key === "ArrowLeft") {
      v.preventDefault();
      const T = Math.max(0, i === -1 ? 0 : i - 1);
      l(T), g(T);
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const T = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(T), g(T);
    } else if (v.key === "ArrowDown") {
      v.preventDefault();
      const T = document.querySelector(".gantt-row .timeline-container");
      T && T.focus();
    } else if (v.key === "Home")
      v.preventDefault(), l(0), g(0);
    else if (v.key === "End") {
      v.preventDefault();
      const T = a.length - 1;
      l(T), g(T);
    }
  }, f = (v) => {
    if (v.key === "ArrowDown") {
      v.preventDefault();
      const T = document.querySelector(".gantt-row .resource-label");
      T && T.focus();
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const T = d.current;
      T && T.focus();
    }
  }, h = () => {
    i === -1 && (l(0), setTimeout(() => g(0), 0));
  }, g = (v) => {
    const T = d.current?.querySelector(`[data-date-index="${v}"]`);
    T && T.focus();
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
            onKeyDown: f,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: d,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: h,
            children: a.map((v, T) => {
              const p = v.getTime() === s.getTime(), u = i === T;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": T,
                  className: `date-column ${p ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${v.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${p ? " (Today)" : ""}`,
                  onFocus: () => l(T),
                  onKeyDown: c,
                  children: v.toLocaleDateString("en-GB", {
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
function Ou({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = Ie(!1), [c, f] = Ie(-1), h = Le(null);
  Ae(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      h.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const g = (p) => {
    if (p.key === "ArrowLeft" && p.shiftKey) {
      p.preventDefault(), p.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (p.key === "ArrowRight" && p.shiftKey) {
      p.preventDefault(), p.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (p.key) {
        case "ArrowUp":
          p.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          p.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          p.preventDefault(), h.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (p.preventDefault(), d(!0), f(0));
          break;
      }
      return;
    }
    switch (p.key) {
      case "ArrowLeft":
        p.preventDefault();
        const u = Math.max(0, c - 1);
        f(u), h.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
        break;
      case "ArrowRight":
        p.preventDefault();
        const A = Math.min(t.length - 1, c + 1);
        f(A), h.current?.querySelector(`[data-task-index="${A}"]`)?.focus();
        break;
      case "Enter":
        p.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        p.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        p.preventDefault(), d(!1), f(-1), h.current?.focus();
        break;
    }
  }, v = (p) => {
    switch (p.key) {
      case "ArrowUp":
        p.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        p.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        p.preventDefault(), h.current?.focus();
        break;
    }
  }, T = (p) => {
    l && f(p);
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
            onKeyDown: v,
            children: e.label
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: h,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: g,
            onFocus: () => {
              l || f(-1);
            },
            children: t.map((p, u) => /* @__PURE__ */ n.jsx(
              zu,
              {
                task: p,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => T(u)
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
function dx({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Le(null), [l, d] = Ie(800), c = De(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const p = new Date(r);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : p;
  }, [r]), f = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const p = new Date(a);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : p;
  }, [a]), h = De(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Ae(() => {
    if (!i.current) return;
    const p = new ResizeObserver((u) => {
      const P = u[0];
      P && d(Math.max(P.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const g = De(
    () => cs().domain([c, f]).range([0, l]),
    [c, f, l]
  ), v = De(() => {
    const p = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const P = p.get(u.resourceId) || [];
      P.push(u), p.set(u.resourceId, P);
    }), p;
  }, [t]), T = (p) => {
    if (p.target === p.currentTarget)
      switch (p.key) {
        case "ArrowDown":
          p.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          p.preventDefault();
          const P = i.current?.querySelector(".header-resource");
          P && P.focus();
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
      "aria-colcount": h + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: T,
      children: [
        /* @__PURE__ */ n.jsx(Wu, { viewStart: c, viewEnd: f, dateCount: h }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (p) => {
              p.key === "ArrowLeft" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : p.key === "ArrowRight" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : p.key === "ArrowUp" && p.altKey ? (p.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : p.key === "ArrowDown" && p.altKey && (p.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((p, u) => /* @__PURE__ */ n.jsx(
              Ou,
              {
                resource: p,
                tasks: v.get(p.id) || [],
                scale: g,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: u,
                dateCount: h
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
const Qn = ({
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
) }), Uu = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? rt.Children.toArray(t).filter(
    (u) => rt.isValidElement(u) && (u.type === Qn || u.type?.displayName === "BreadcrumbItem")
  ).map((u) => ({
    text: typeof u.props.children == "string" ? u.props.children : String(u.props.children),
    href: u.props.href,
    active: u.props.active,
    attributes: u.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, f = () => {
    const p = c();
    if (p && p.length > 0) {
      const u = p.slice().reverse().find((P) => P.href && !P.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), g = f(), v = be(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), T = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: v,
      "aria-label": T,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          rt.Children.map(t, (p, u) => rt.isValidElement(p) && (p.type === Qn || p.type?.displayName === "BreadcrumbItem") ? rt.cloneElement(p, { key: u }) : null)
        ) : (
          // Render from items array
          h?.filter((p) => p.active || !!p.href).map((p, u) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: p.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...p.attributes || {},
              children: p.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: p.href,
              role: "link",
              ...p.attributes || {},
              children: p.text
            }
          ) }, u))
        ) }),
        g.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: g.href,
            role: "link",
            "aria-label": `Back to ${g.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              g.text
            ]
          }
        ) })
      ]
    }
  );
}, Gu = Uu;
Gu.Item = Qn;
Qn.displayName = "BreadcrumbItem";
const Zo = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = Ie(!1);
  Ae(() => {
    s(!0);
  }, []), Ae(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, f = c.getAttribute("href");
      if (f && f.startsWith("#")) {
        const h = document.querySelector(f);
        if (h) {
          h.hasAttribute("tabindex") || h.setAttribute("tabindex", "-1"), h.focus(), h.classList.add("nhsuk-skip-link-focused-element");
          const g = window.setTimeout(() => {
            h.classList.remove("nhsuk-skip-link-focused-element"), h.getAttribute("tabindex") === "-1" && h.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = g;
        }
      }
    };
    try {
      const d = document.querySelectorAll(".nhsuk-skip-link");
      return d.forEach((c) => {
        c.addEventListener("click", l);
      }), () => {
        try {
          d.forEach((c) => {
            c.removeEventListener("click", l);
            const f = c.__nhsSkipLinkTimeout;
            f && window.clearTimeout && window.clearTimeout(f);
          });
        } catch (c) {
          console.warn("SkipLink cleanup error:", c);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [o]);
  const i = be("nhsuk-skip-link", r);
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
}, ux = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = be("nhsuk-pagination", o);
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
}, fx = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = be("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Jo = rt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: d,
  imgAlt: c,
  ...f
}, h) => {
  const g = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    f.className
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), T = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const A = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Dt,
      {
        level: a,
        className: T,
        children: A()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, P = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...f,
      className: g,
      ref: h,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          p(),
          u(),
          P()
        ] })
      ]
    }
  );
});
Jo.displayName = "Card";
const hx = ({
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
}, px = ({
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
}, mx = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: d,
  "data-testid": c,
  id: f,
  "aria-label": h,
  "aria-labelledby": g,
  "aria-describedby": v
}) => {
  const T = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), p = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), u = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const A = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], D = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        A,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Dt,
      {
        level: a,
        className: p,
        children: D
      }
    );
  }, P = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: T,
      "data-testid": c,
      id: f,
      "aria-label": h,
      "aria-labelledby": g,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          u(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: P() })
      ]
    }
  );
}, Yu = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...d
}) => {
  const c = be(
    "nhsuk-panel",
    t
  ), f = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Dt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Dt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, h = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    f(),
    h()
  ] });
}, gx = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = be("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, xx = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = be(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((d, c) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: d.href,
          className: "nhsuk-link",
          ...d.attributes,
          children: [
            s(d),
            d.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: d.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: o, ...a, children: e.map((l, d) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, d)) }) });
}, ya = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: d = !1,
  panelClasses: c,
  tableClasses: f,
  classes: h,
  attributes: g,
  "data-testid": v
}) => {
  const T = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), p = be(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), u = be(h), P = rt.useRef(null), A = () => {
    if (P.current) return P.current;
    try {
      P.current = require("prismjs");
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
      P.current = null;
    }
    return P.current;
  }, D = (x) => {
    const k = [
      { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
      { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
      { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
      { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
    ];
    let _ = x;
    return k.forEach((m) => {
      _ = _.replace(m.regex, (y) => `<span class="nhsuk-code-${m.cls}">${y}</span>`);
    }), _;
  }, S = (x, k, _) => {
    if (_ || !k) return x;
    const m = A();
    if (m && m.languages) {
      const y = m.languages[k] ? k : m.languages.typescript && (k === "ts" || k === "tsx" || k === "typescript") ? "typescript" : m.languages.json && k === "json" ? "json" : void 0;
      if (y)
        try {
          return m.highlight(x, m.languages[y], y);
        } catch {
        }
    }
    return D(x);
  }, B = (x, k) => {
    const _ = be("nhsuk-table__header", {
      [`nhsuk-table__header--${x.format}`]: x.format
    }, x.classes), m = {
      scope: "col",
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...s && { role: "columnheader" },
      ...x.attributes
    };
    let y;
    if (x.node != null)
      y = /* @__PURE__ */ n.jsx(n.Fragment, { children: x.node });
    else if (x.html)
      y = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const L = Array.isArray(x.code), j = L ? x.code.join(`
`) : x.code, w = L || j.includes(`
`), b = {
        className: be("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": w,
          "nhsuk-table__code--inline": !w
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, F = S(j, x.codeLanguage);
      y = w ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: F } }) }) : /* @__PURE__ */ n.jsx("code", { ...b, dangerouslySetInnerHTML: { __html: F } });
    } else
      y = x.text;
    return /* @__PURE__ */ n.jsx("th", { className: _, ...m, children: y }, k);
  }, N = (x, k, _) => {
    const m = o && _, y = be(
      m ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${m ? "header" : "cell"}--${x.format}`]: x.format
      },
      x.classes
    ), L = {
      ...m && { scope: "row" },
      ...x.colspan && { colSpan: x.colspan },
      ...x.rowspan && { rowSpan: x.rowspan },
      ...s && {
        role: m ? "rowheader" : "cell",
        ...x.header && { "data-label": x.header }
      },
      ...x.attributes
    };
    let j;
    if (x.node != null)
      j = /* @__PURE__ */ n.jsx(n.Fragment, { children: x.node });
    else if (x.html)
      j = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: x.html } });
    else if (x.code != null) {
      const F = Array.isArray(x.code), Q = F ? x.code.join(`
`) : x.code, z = F || Q.includes(`
`), R = {
        className: be("nhsuk-table__code", x.codeClassName, {
          "nhsuk-table__code--block": z,
          "nhsuk-table__code--inline": !z
        }),
        ...x.codeLanguage ? { "data-language": x.codeLanguage } : {}
      }, U = S(Q, x.codeLanguage, x.disableHighlight);
      j = z ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...R, dangerouslySetInnerHTML: { __html: U } }) }) : /* @__PURE__ */ n.jsx("code", { ...R, dangerouslySetInnerHTML: { __html: U } });
    } else
      j = x.text;
    const w = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && x.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        x.header,
        " "
      ] }),
      j
    ] }), b = m ? "th" : "td";
    return /* @__PURE__ */ n.jsx(b, { className: y, ...L, children: w }, k);
  }, $ = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: p,
      ...s && { role: "table" },
      ...g,
      ...v && { "data-testid": v },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: T, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((x, k) => B(x, k)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((x, k) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: x.map(
              (_, m) => N(_, m, m === 0)
            )
          },
          k
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(Yu, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Dt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    $()
  ] }) : u ? /* @__PURE__ */ n.jsx("div", { className: u, children: $() }) : $();
}, bx = fn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: d,
  id: c,
  "data-testid": f,
  ...h
}, g) => {
  const v = r !== void 0, [T, p] = Ie(() => t || e[0]?.id || ""), u = v ? r : T, P = Le(null), A = Le(/* @__PURE__ */ new Map()), D = ge((_) => {
    v || p(_), a?.(_);
  }, [v, a]), S = ge((_) => {
    o?.(_), l && D(_);
  }, [o, l, D]), B = ge((_, m) => {
    const y = e.filter((w) => !w.disabled).map((w) => w.id), L = y.indexOf(m);
    let j = null;
    switch (_.key) {
      case "ArrowLeft":
        j = L > 0 ? L - 1 : y.length - 1;
        break;
      case "ArrowRight":
        j = L < y.length - 1 ? L + 1 : 0;
        break;
      case "Home":
        j = 0;
        break;
      case "End":
        j = y.length - 1;
        break;
      case "Escape":
        _.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (j !== null) {
      _.preventDefault();
      const w = y[j], b = A.current.get(w);
      b && (b.focus(), S(w));
    }
  }, [e, S, i]), N = ge((_, m) => {
    m ? A.current.set(_, m) : A.current.delete(_);
  }, []), $ = ge((_) => {
    const m = A.current.get(_);
    m && m.focus();
  }, []);
  wo(g, () => ({
    focusTab: $,
    getActiveTab: () => u,
    getTabListElement: () => P.current
  }), [$, u]);
  const x = ge((_) => {
    const m = _.relatedTarget;
    P.current?.contains(m) || s?.();
  }, [s]), k = be("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: k,
      id: c,
      "data-testid": f,
      ...h,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: P,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: x,
                children: e.map((_) => {
                  const m = _.id === u, y = _.disabled, L = be("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": m,
                    "nhsuk-tabs__list-item--disabled": y
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: L, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (j) => N(_.id, j),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": m,
                      "aria-controls": `${_.id}-panel`,
                      id: `${_.id}-tab`,
                      tabIndex: m ? 0 : -1,
                      disabled: y,
                      onClick: () => !y && D(_.id),
                      onKeyDown: (j) => !y && B(j, _.id),
                      onFocus: () => !y && S(_.id),
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
          const m = _.id === u;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${_.id}-tab`,
              id: `${_.id}-panel`,
              hidden: !m,
              children: _.content
            },
            _.id
          );
        })
      ]
    }
  );
}), Vu = fn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const f = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : a ? g = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (g = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
Vu.displayName = "Details";
const qu = fn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const d = ["nhsuk-do-dont-list"];
    s && d.push(s);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], f = () => t === "cross" ? /* @__PURE__ */ n.jsxs(
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
    ), h = (v) => t === "cross" && !a ? `do not ${v}` : v, g = () => /* @__PURE__ */ n.jsx(
      Dt,
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
        className: d.join(" "),
        ...i,
        children: [
          g(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((v, T) => /* @__PURE__ */ n.jsxs("li", { children: [
            f(),
            h(v.item)
          ] }, T)) }) })
        ]
      }
    );
  }
);
qu.displayName = "DoDontList";
const Xu = fn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...d
  }, c) => {
    const f = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), h = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let g;
    return l ? g = l : a ? g = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (g = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: f,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: h }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: g })
        ]
      }
    );
  }
);
Xu.displayName = "Expander";
const Ku = fn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, g = !!l.href, v = [
        "nhsuk-task-list__item",
        g && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), T = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Zu,
        {
          item: l,
          itemClasses: v,
          hasLink: g,
          hintId: f,
          statusId: h,
          ariaDescribedBy: T
        },
        d
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
), Zu = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, f = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: f,
        href: e.href,
        "aria-describedby": s,
        children: c
      }
    ) : /* @__PURE__ */ n.jsx("div", { className: e.title.classes || "", children: c });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ n.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, d = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let f;
    return e.status.tag ? f = /* @__PURE__ */ n.jsx(Ye, { ...e.status.tag }) : e.status.html ? f = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : f = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: o, children: f });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
Ku.displayName = "TaskList";
const yx = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), d = () => o || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), f = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        _o(
          f,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            e,
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        d()
      ]
    }
  );
}, vx = ({
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
}, Ju = ({
  dateRange: e,
  onPrev: t,
  onNext: r,
  onToday: a,
  density: o,
  onDensityChange: s,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx(Qe, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(Qe, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(Qe, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      Wn,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (d) => s?.(d.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      Wn,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: i,
        onChange: (d) => l?.(d.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), Qu = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(Ye, { color: ef(r.status), text: r.label }) }, r.status)) });
function ef(e) {
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
const _x = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: d,
  getSlotAriaLabel: c,
  toolbar: f,
  enableDefaultToolbar: h = !0,
  legendItems: g,
  enableDefaultLegend: v = !0,
  legendPlacement: T = "bottom",
  onA11yModeChange: p
}) => {
  const [u, P] = Ie("grid"), A = i || u, [D, S] = Ie(a || []), B = r ?? D, N = De(() => {
    const j = /* @__PURE__ */ new Set();
    return e.forEach((w) => j.add(new Date(w.start).getTime())), Array.from(j).sort((w, b) => w - b);
  }, [e]), $ = De(() => {
    const j = {};
    return e.forEach((w) => {
      const b = new Date(w.start).getTime();
      j[b] || (j[b] = {});
      const F = w.capacity - w.booked - (w.held || 0);
      j[b][w.sessionId] = { slot: w, remaining: F };
    }), j;
  }, [e]), x = ge((j) => {
    if (s === "single") {
      const w = [j.id];
      r || S(w), o?.(w, { lastAction: "select" });
    } else {
      const w = B.includes(j.id), b = w ? B.filter((F) => F !== j.id) : [...B, j.id];
      r || S(b), o?.(b, { lastAction: w ? "deselect" : "select" });
    }
  }, [s, B, r, o]), k = De(() => g || (v ? Array.from(new Set(e.map((w) => w.status))).map((w) => ({
    status: w,
    label: w.charAt(0).toUpperCase() + w.slice(1)
  })) : void 0), [g, v, e]), _ = k ? /* @__PURE__ */ n.jsx(
    Qu,
    {
      items: k,
      orientation: T === "left" || T === "right" ? "vertical" : "horizontal"
    }
  ) : null, m = (j) => {
    i || P(j), p?.(j);
  }, y = f || (h ? /* @__PURE__ */ n.jsx(
    Ju,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: A,
      onA11yModeChange: m
    }
  ) : null), L = /* @__PURE__ */ n.jsx("div", { style: d, className: be(l), children: /* @__PURE__ */ n.jsx(ha, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsx(_n, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    y,
    T === "top" && _,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((j) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => x(j), "aria-pressed": B.includes(j.id), children: [
      vn(new Date(j.start)),
      " – ",
      vn(new Date(j.end)),
      " (",
      j.status,
      ")"
    ] }) }, j.id)) }),
    T === "bottom" && _
  ] }) }) }) }) });
  return A === "list" ? L : /* @__PURE__ */ n.jsx("div", { style: d, className: be(l), children: /* @__PURE__ */ n.jsx(ha, { className: be("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsx(_n, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    y,
    T === "top" && _,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": N.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((j) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${j.specialty}`, className: "nhs-slot-matrix__session-header", children: j.specialty }, j.id))
      ] }),
      N.map((j) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": vn(new Date(j)), children: vn(new Date(j)) }),
        t.map((w) => {
          const b = $[j]?.[w.id];
          if (!b)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, w.id);
          const { slot: F, remaining: Q } = b, z = B.includes(F.id), R = c ? c(F) : `Slot ${vn(new Date(F.start))} ${F.status}${Q === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": F.status,
              className: be("nhs-slot-matrix__cell", z && "nhs-slot-matrix__cell--selected"),
              "aria-label": R,
              "aria-selected": z || void 0,
              onClick: () => x(F),
              children: Q > 0 ? `${Q} left` : "Full"
            },
            F.id
          );
        })
      ] }, j))
    ] }),
    T === "bottom" && _
  ] }) }) }) }) });
};
function no(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function vn(e) {
  return `${no(e.getHours())}:${no(e.getMinutes())}`;
}
const tf = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Dt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return o ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: d,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, wx = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(ha, { children: /* @__PURE__ */ n.jsx(Yt, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    _n,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(tf, { ...o })
    },
    s
  )) }) }) });
}, nf = rt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: d,
    ariaLabelledby: c,
    ariaDescribedby: f,
    className: h,
    tableClassName: g,
    bordered: v = !1,
    striped: T = !1,
    responsive: p = !1,
    tableType: u = "default"
  }, P) => {
    const A = Le(null), D = Le(null), S = Le(null);
    rt.useImperativeHandle(P, () => A.current, []);
    const [B, N] = Ie(0), [$, x] = Ie(0), [k, _] = Ie("headers"), [m, y] = Ie("browse"), L = t.length, j = e.length, w = De(() => !r || r.length === 0 ? e : [...e].sort((E, I) => {
      for (const { key: C, direction: Z } of r) {
        const oe = E[C], J = I[C];
        if (oe == null && J == null) continue;
        if (oe == null) return 1;
        if (J == null) return -1;
        let V = 0;
        if (typeof oe == "number" && typeof J == "number" ? V = oe - J : V = String(oe).localeCompare(String(J)), V !== 0)
          return Z === "asc" ? V : -V;
      }
      return 0;
    }), [e, r]), b = ge((E, I) => {
      setTimeout(() => {
        const C = A.current?.querySelector(
          `tbody tr:nth-child(${E + 1}) td:nth-child(${I + 1})`
        );
        C && (C.focus(), typeof C.scrollIntoView == "function" && C.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), F = ge((E) => {
      setTimeout(() => {
        const I = A.current?.querySelector(`th:nth-child(${E + 1})`);
        I && (I.focus(), typeof I.scrollIntoView == "function" && I.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Q = ge((E) => {
      a?.(E);
    }, [a]), z = ge((E) => {
      s?.(E);
    }, [s]), R = ge((E) => {
      const { key: I } = E;
      switch (I) {
        case "Enter":
          if (E.preventDefault(), k === "headers" && m === "browse")
            y("navigate"), F($);
          else if (k === "headers" && m === "navigate") {
            const C = t[$];
            C && Q(C.key);
          } else k === "cells" && m === "browse" ? (y("navigate"), b(B, $)) : k === "cells" && m === "navigate" && z(B);
          break;
        case "Escape":
          E.preventDefault(), (k === "headers" && m === "navigate" || k === "cells" && m === "navigate") && y("browse");
          break;
        case "ArrowLeft":
          if (E.preventDefault(), m === "navigate" || m === "browse" && k === "headers") {
            if (k === "headers") {
              const C = Math.max(0, $ - 1);
              x(C), F(C);
            } else if (k === "cells") {
              const C = Math.max(0, $ - 1);
              x(C), b(B, C);
            }
          }
          break;
        case "ArrowRight":
          if (E.preventDefault(), m === "navigate" || m === "browse" && k === "headers") {
            if (k === "headers") {
              const C = Math.min(L - 1, $ + 1);
              x(C), F(C);
            } else if (k === "cells") {
              const C = Math.min(L - 1, $ + 1);
              x(C), b(B, C);
            }
          }
          break;
        case "ArrowUp":
          if (E.preventDefault(), k === "cells") {
            if (m === "browse") {
              const C = Math.max(0, B - 1);
              N(C), b(C, 0), x(0);
            } else if (m === "navigate")
              if (B > 0) {
                const C = B - 1;
                N(C), b(C, $);
              } else
                _("headers"), y("browse"), F($);
          }
          break;
        case "ArrowDown":
          if (E.preventDefault(), k === "headers" && m === "browse")
            _("cells"), N(0), x(0), b(0, 0);
          else if (k === "cells") {
            const C = j - 1;
            if (m === "browse") {
              const Z = Math.min(C, B + 1);
              N(Z), b(Z, 0), x(0);
            } else if (m === "navigate" && B < C) {
              const Z = B + 1;
              N(Z), b(Z, $);
            }
          }
          break;
        case "Home":
          E.preventDefault(), k === "headers" ? (x(0), F(0)) : k === "cells" && (E.ctrlKey ? (N(0), x(0), b(0, 0)) : (x(0), b(B, 0)));
          break;
        case "End":
          if (E.preventDefault(), k === "headers") {
            const C = L - 1;
            x(C), F(C);
          } else if (k === "cells")
            if (E.ctrlKey) {
              const C = j - 1, Z = L - 1;
              N(C), x(Z), b(C, Z);
            } else {
              const C = L - 1;
              x(C), b(B, C);
            }
          break;
        case " ":
          if (E.preventDefault(), k === "headers" && m === "navigate") {
            const C = t[$];
            C && Q(C.key);
          } else k === "cells" && m === "navigate" && z(B);
          break;
      }
    }, [
      k,
      m,
      $,
      B,
      L,
      j,
      t,
      b,
      F,
      Q,
      z
    ]);
    Ae(() => {
      const E = A.current;
      if (E)
        return E.addEventListener("keydown", R), () => E.removeEventListener("keydown", R);
    }, [R]);
    const U = be(
      "nhsuk-table",
      g,
      {
        "nhsuk-table--responsive": p,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": T,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: A,
        className: U,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: D, role: "row", children: t.map((E, I) => {
            const C = r?.find((J) => J.key === E.key), Z = !!C, oe = k === "headers" && $ === I;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: be("sortable-header", {
                  "sortable-header--focused": oe
                }),
                role: "columnheader",
                tabIndex: oe ? 0 : -1,
                onClick: () => Q(E.key),
                onKeyDown: (J) => {
                  (J.key === "Enter" || J.key === " ") && (J.preventDefault(), Q(E.key));
                },
                "aria-sort": Z ? C?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: E.label }),
                  Z && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((J) => J.key === E.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: C?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              E.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: S, className: "nhsuk-table__body", role: "rowgroup", children: w.map((E, I) => {
            const C = o === I, Z = k === "cells" && B === I;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: be("data-row", {
                  "data-row--selected": C,
                  "data-row--focused": Z
                }),
                "aria-selected": C,
                children: t.map((oe, J) => {
                  const V = oe.tableRenderer ? oe.tableRenderer(E) : oe.render ? oe.render(E) : E[oe.key], H = k === "cells" && B === I && $ === J, G = () => typeof V == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: V ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: V ? "Yes" : "No" })
                  ] }) : String(V ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: be("data-cell", {
                        "data-cell--focused": H
                      }),
                      tabIndex: H ? 0 : -1,
                      onClick: () => z(I),
                      children: G()
                    },
                    oe.key
                  );
                })
              },
              I
            );
          }) })
        ]
      }
    );
  }
);
nf.displayName = "AriaDataGrid";
const Qo = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: d = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: f
}) => {
  const h = Le(null), g = Le(null), v = Le(null), T = ge((k, _) => {
    d || (g.current = _, k.dataTransfer.effectAllowed = "move", k.dataTransfer.setData("text/plain", _));
  }, [d]), p = ge((k, _) => {
    d || g.current === _ || (k.preventDefault(), k.dataTransfer.dropEffect = "move", v.current = _);
  }, [d]), u = ge((k, _) => {
    if (d) return;
    k.preventDefault();
    const m = g.current;
    if (!m || m === _) return;
    const y = e.findIndex((j) => j.key === m), L = e.findIndex((j) => j.key === _);
    if (y !== -1 && L !== -1) {
      const j = [...e], [w] = j.splice(y, 1);
      j.splice(L, 0, w), r(j);
    }
    g.current = null, v.current = null;
  }, [d, e, r]), P = ge(() => {
    g.current = null, v.current = null;
  }, []), A = ge((k) => {
    const _ = t.find((m) => m.key === k);
    return _ ? _.label : k;
  }, [t]), D = ge((k) => ["red", "orange", "blue", "aqua-green", "grey"][k] || "grey", []), S = ge((k) => {
    if (d) return;
    const _ = e.map(
      (m) => m.key === k ? { ...m, direction: m.direction === "asc" ? "desc" : "asc" } : m
    );
    r(_);
  }, [e, r, d]), B = ge((k) => {
    if (d) return;
    const _ = e.filter((m) => m.key !== k);
    r(_);
  }, [e, r, d]), N = ge(() => {
    d || r([]);
  }, [r, d]), $ = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const k = e.map((_, m) => {
      const y = _.direction === "asc" ? "ascending" : "descending";
      return `${m + 1}. ${A(_.key)} (${y})`;
    });
    if (k.length === 1)
      return `Sorted by: ${k[0]}`;
    if (k.length === 2)
      return `Sorted by: ${k.join(" and ")}`;
    {
      const _ = k.pop();
      return `Sorted by: ${k.join(", ")}, and ${_}`;
    }
  }, x = De(() => {
    const k = ["sort-description"];
    return l && k.push("sort-help"), f && k.push(f), k.join(" ");
  }, [l, f]);
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
        children: $()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: h,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": x,
          children: e.map((k, _) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (m) => T(m, k.key),
              onDragOver: (m) => p(m, k.key),
              onDrop: (m) => u(m, k.key),
              onDragEnd: P,
              onClick: () => S(k.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": k.key,
              children: /* @__PURE__ */ n.jsx(
                Ye,
                {
                  color: D(_),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(k.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${_ + 1}`, children: _ + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: A(k.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (m) => {
                          m.stopPropagation(), S(k.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${A(k.key)}. Currently ${k.direction === "asc" ? "ascending" : "descending"}`,
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
        Qe,
        {
          variant: "secondary",
          onClick: N,
          disabled: d,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function rf(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), d = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], d[c] = e.selectedRows[c];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: d
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
const va = fn(function(t, r) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: f = "",
    disabled: h = !1,
    orientation: g = "horizontal",
    id: v,
    isLoading: T = !1,
    loadingComponent: p,
    error: u = null,
    errorComponent: P,
    "data-testid": A,
    actions: D,
    actionsMinGap: S = 16,
    forceActionsAbove: B = !1
  } = t, $ = Le(
    v || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, x = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), k = `${$}-description`, _ = `${$}-navigation-help`, {
    dataComparator: m = (M, q) => JSON.stringify(M) === JSON.stringify(q),
    filterFunction: y = (M) => M,
    booleanRenderer: L = (M) => M ? "✓" : "✗"
  } = a || {}, j = s !== void 0, w = s ?? 0, [b, F] = Ie({
    focusArea: "tabs",
    focusedTabIndex: w,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), Q = De(() => ({
    selectedIndex: w,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [w]), [z, R] = So(rf, Q);
  Ae(() => {
    const M = z.tabLoadingStates.length, q = o.length;
    M !== q && R({ type: "ADJUST_ARRAYS", payload: { newLength: q } });
  }, [o.length]), Ae(() => {
    j && R({ type: "SET_SELECTED_INDEX", payload: w });
  }, [w, j]), Ae(() => {
    F((M) => ({
      ...M,
      focusArea: "tabs",
      focusedTabIndex: z.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [z.selectedIndex]), Ae(() => {
    l && l(z.globalSelectedRowData);
  }, [z.globalSelectedRowData, l]);
  const U = ge(
    (M, q) => m(M, q),
    [m]
  ), E = ge(
    (M) => {
      M >= 0 && M < o.length && !o[M].disabled && (R({ type: "SET_SELECTED_INDEX", payload: M }), F((q) => ({
        ...q,
        focusedTabIndex: M,
        focusArea: "tabs"
      })), i?.(M));
    },
    [o, i]
  ), I = Le(!1), C = ge(
    (M, q) => {
      if (!q?.force && !I.current && M === 0) {
        I.current = !0;
        return;
      }
      I.current = !0, setTimeout(() => {
        const te = Z.current[M], re = te?.parentElement;
        if (te && re) {
          const K = te.offsetLeft, ae = te.offsetWidth, _e = re.clientWidth, Se = K - _e / 2 + ae / 2;
          try {
            re.scrollTo({
              left: Math.max(0, Se),
              behavior: "smooth"
            });
          } catch {
            te.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!te,
          tabListElementExists: !!re
        });
      }, 50);
    },
    []
  ), Z = Le([]), oe = Le([]), J = ge(
    (M, q) => {
      const te = z.sortConfig || [], re = te.find(
        (_e) => _e.key === q
      );
      let K;
      re ? re.direction === "asc" ? K = te.map(
        (_e) => _e.key === q ? { ..._e, direction: "desc" } : _e
      ) : K = te.filter(
        (_e) => _e.key !== q
      ) : K = [...te, { key: q, direction: "asc" }], R({
        type: "SET_SORT",
        payload: K
      }), o[M].onSort?.(q);
    },
    [z.sortConfig, o]
  ), V = ge(
    (M) => {
      setTimeout(() => {
        const q = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] th:nth-child(${M + 1})`
        );
        q && q.focus();
      }, 0);
    },
    [z.selectedIndex]
  ), H = ge(
    (M) => L(M),
    [L]
  ), G = ge(
    (M, q) => {
      setTimeout(() => {
        const te = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] tbody tr:nth-child(${M + 1}) td:nth-child(${q + 1})`
        );
        te && te.focus();
      }, 0);
    },
    [z.selectedIndex]
  );
  Ae(() => {
    b.isGridActive && (b.focusArea === "headers" ? setTimeout(() => {
      V(b.focusedHeaderIndex);
    }, 0) : b.focusArea === "cells" && setTimeout(() => {
      G(
        b.focusedRowIndex,
        b.focusedColumnIndex
      );
    }, 0));
  }, [
    b.focusArea,
    b.isGridActive,
    b.focusedHeaderIndex,
    b.focusedRowIndex,
    b.focusedColumnIndex,
    V,
    G
  ]), Ae(() => {
    C(z.selectedIndex);
  }, [z.selectedIndex, C]);
  const le = ge(
    (M, q) => {
      const { key: te } = M, re = o[z.selectedIndex], K = re?.columns.length || 0;
      switch (te) {
        case "ArrowLeft":
          M.preventDefault();
          const ae = Math.max(0, q - 1);
          F((Ne) => ({
            ...Ne,
            focusedHeaderIndex: ae
          })), V(ae);
          break;
        case "ArrowRight":
          M.preventDefault();
          const _e = Math.min(K - 1, q + 1);
          F((Ne) => ({
            ...Ne,
            focusedHeaderIndex: _e
          })), V(_e);
          break;
        case "ArrowUp":
          M.preventDefault(), F((Ne) => ({
            ...Ne,
            focusArea: "tabs",
            focusedTabIndex: z.selectedIndex
          })), C(z.selectedIndex), Z.current[z.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          M.preventDefault(), F((Ne) => ({
            ...Ne,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: q,
            isGridActive: !0
          }));
          break;
        case "Home":
          M.preventDefault(), F((Ne) => ({ ...Ne, focusedHeaderIndex: 0 })), V(0);
          break;
        case "End":
          M.preventDefault();
          const Se = K - 1;
          F((Ne) => ({
            ...Ne,
            focusedHeaderIndex: Se
          })), V(Se);
          break;
        case "Enter":
        case " ":
          M.preventDefault();
          const je = re?.columns[q]?.key;
          je && J(z.selectedIndex, je);
          break;
      }
    },
    [
      o,
      z.selectedIndex,
      J,
      F,
      V,
      G,
      Z
    ]
  ), O = ge(
    (M, q, te) => {
      const { key: re } = M, K = o[z.selectedIndex], ae = K?.data.length || 0, _e = K?.columns.length || 0;
      switch (re) {
        case "ArrowUp":
          if (M.preventDefault(), q === 0)
            F((ye) => ({
              ...ye,
              focusArea: "headers",
              focusedHeaderIndex: te,
              isGridActive: !1
            })), V(te);
          else {
            const ye = q - 1;
            F(($e) => ({
              ...$e,
              focusedRowIndex: ye
            })), G(ye, te);
          }
          break;
        case "ArrowDown":
          M.preventDefault();
          const Se = Math.min(ae - 1, q + 1);
          F((ye) => ({
            ...ye,
            focusedRowIndex: Se
          })), G(Se, te);
          break;
        case "ArrowLeft":
          M.preventDefault();
          const je = Math.max(0, te - 1);
          F((ye) => ({
            ...ye,
            focusedColumnIndex: je
          })), G(q, je);
          break;
        case "ArrowRight":
          M.preventDefault();
          const Ne = Math.min(_e - 1, te + 1);
          F((ye) => ({
            ...ye,
            focusedColumnIndex: Ne
          })), G(q, Ne);
          break;
        case "Home":
          M.preventDefault(), M.ctrlKey ? (F((ye) => ({
            ...ye,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), G(0, 0)) : (F((ye) => ({ ...ye, focusedColumnIndex: 0 })), G(q, 0));
          break;
        case "End":
          if (M.preventDefault(), M.ctrlKey) {
            const ye = ae - 1, $e = _e - 1;
            F((Ee) => ({
              ...Ee,
              focusedRowIndex: ye,
              focusedColumnIndex: $e
            })), G(ye, $e);
          } else {
            const ye = _e - 1;
            F(($e) => ({
              ...$e,
              focusedColumnIndex: ye
            })), G(q, ye);
          }
          break;
        case "Enter":
        case " ":
          if (M.preventDefault(), K && K.data[q]) {
            const ye = K.data.some(
              (Ge) => "ews_data" in Ge
            ) ? y(K.data, z.filters) : K.data, $e = z.sortConfig;
            let Ee = ye;
            if ($e && $e.length > 0 && (Ee = [...ye].sort((Ge, Be) => {
              for (const { key: et, direction: Lt } of $e) {
                let gt = Ge[et], ct = Be[et];
                const Ve = K.columns.find(
                  (hn) => hn.key === et
                );
                if (Ve?.tableRenderer ? (gt = Ve.tableRenderer(Ge), ct = Ve.tableRenderer(Be)) : Ve?.render && (gt = Ve.render(Ge), ct = Ve.render(Be)), gt == null && ct == null) continue;
                if (gt == null) return Lt === "asc" ? -1 : 1;
                if (ct == null) return Lt === "asc" ? 1 : -1;
                let Xe = 0;
                if (typeof gt == "number" && typeof ct == "number" ? Xe = gt - ct : Xe = String(gt).localeCompare(
                  String(ct),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Xe !== 0)
                  return Lt === "asc" ? Xe : -Xe;
              }
              return 0;
            })), Ee[q]) {
              const Ge = Ee[q], et = z.globalSelectedRowData && U(z.globalSelectedRowData, Ge) ? null : Ge;
              R({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: et
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
      y,
      U,
      R,
      F,
      V,
      G
    ]
  ), ie = ge(
    (M, q) => y(M, q),
    [y]
  );
  if (wo(
    r,
    () => ({
      selectTab: (M) => {
        M >= 0 && M < o.length && (R({ type: "SET_SELECTED_INDEX", payload: M }), i?.(M));
      },
      refreshData: (M) => {
        console.log("Refreshing data for tab:", M ?? "all");
      },
      exportData: (M) => {
        const q = M ?? z.selectedIndex, te = o[q];
        return te ? te.data : [];
      },
      getSelectedRows: (M) => z.globalSelectedRowData ? [] : [],
      clearSelection: (M) => {
        R({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (M) => {
        R({ type: "SET_FILTERS", payload: M });
      }
    }),
    [z.selectedIndex, z.selectedRows, o, i]
  ), T)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${f}`,
        "data-testid": A,
        children: p || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-spinner",
            role: "status",
            "aria-label": "Loading data",
            children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." })
          }
        ) })
      }
    );
  if (u)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${f}`,
        "data-testid": A,
        children: P || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: u })
        ] })
      }
    );
  const se = Le(null), de = Le(null), ue = Le(null), [ve, ce] = Ie(!0);
  Ae(() => {
    if (!D) {
      ce(!1);
      return;
    }
    if (B) {
      ce(!1);
      return;
    }
    function M() {
      if (!se.current || !de.current || !ue.current) return;
      const re = se.current.clientWidth, K = Array.from(
        de.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ae = K.reduce((Ne, ye) => Ne + ye.offsetWidth, 0), _e = ue.current.offsetWidth, Se = Math.max(8 * (K.length - 1), 0), je = ae + Se + _e + S <= re;
      ce(je);
    }
    const q = requestAnimationFrame(() => M()), te = new ResizeObserver(() => M());
    return se.current && te.observe(se.current), de.current && te.observe(de.current), () => {
      cancelAnimationFrame(q), te.disconnect();
    };
  }, [D, S, B, o.length]);
  const he = ue, fe = ge(() => he.current ? Array.from(
    he.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((M) => !M.hasAttribute("disabled")) : [], []), X = ge(
    (M) => {
      const q = fe();
      if (!q.length) return;
      const te = Math.max(0, Math.min(M, q.length - 1));
      q[te].focus(), F((re) => ({ ...re, focusArea: "actions", focusedActionIndex: te }));
    },
    [fe]
  ), W = ge(() => X(0), [X]), ne = ge(
    (M, q) => {
      const { key: te } = M, re = o.length - 1;
      switch (te) {
        case "ArrowUp": {
          D && !ve && (M.preventDefault(), W());
          break;
        }
        case "ArrowLeft": {
          M.preventDefault();
          const K = q > 0 ? q - 1 : re;
          E(K), C(K), Z.current[K]?.focus();
          break;
        }
        case "ArrowRight": {
          if (M.preventDefault(), q === re && D && ve) {
            W();
            return;
          }
          const K = q < re ? q + 1 : 0;
          E(K), C(K), Z.current[K]?.focus();
          break;
        }
        case "ArrowDown": {
          M.preventDefault(), F((K) => ({
            ...K,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          M.preventDefault(), E(0), C(0), Z.current[0]?.focus();
          break;
        }
        case "End": {
          M.preventDefault(), E(re), C(re), Z.current[re]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          M.preventDefault(), E(q);
          break;
        }
        case "Tab": {
          !M.shiftKey && q === re && D && ve && W();
          break;
        }
      }
    },
    [o.length, E, C, D, ve, W]
  ), ee = ge((M) => {
    const { key: q } = M, te = fe();
    if (!te.length) return;
    const re = te.findIndex((K) => K === document.activeElement);
    switch (q) {
      case "ArrowLeft": {
        if (ve)
          if (re > 0)
            M.preventDefault(), X(re - 1);
          else {
            M.preventDefault();
            const K = o.length - 1;
            E(K), C(K), Z.current[K]?.focus(), F((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: K }));
          }
        break;
      }
      case "ArrowRight": {
        ve && (re < te.length - 1 ? (M.preventDefault(), X(re + 1)) : (M.preventDefault(), E(0), C(0), Z.current[0]?.focus(), F((K) => ({ ...K, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ve)
          M.preventDefault(), F((K) => ({ ...K, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          M.preventDefault();
          const K = z.selectedIndex;
          Z.current[K]?.focus(), F((ae) => ({ ...ae, focusArea: "tabs", focusedTabIndex: K }));
        }
        break;
      }
    }
  }, [fe, ve, X, o.length, E, C, z.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${g} ${f}`,
      id: v,
      "data-testid": A,
      ref: se,
      children: [
        c && !x && /* @__PURE__ */ n.jsx("div", { id: k, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: _,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          Qo,
          {
            sortConfig: z.sortConfig || [],
            columns: o.flatMap(
              (M) => M.columns.map((q) => ({ key: q.key, label: q.label }))
            ).filter(
              (M, q, te) => te.findIndex((re) => re.key === M.key) === q
              // Remove duplicates
            ),
            onSortChange: (M) => {
              R({ type: "SET_SORT", payload: M });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        D && !ve && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ue,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: ee,
            children: D
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ve ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? x ? c : k : _,
              "aria-orientation": g,
              className: "aria-tabs-datagrid__tabs",
              ref: de,
              children: o.map((M, q) => {
                const te = q === z.selectedIndex, re = M.disabled || h;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${M.id}`,
                    "aria-controls": `panel-${M.id}`,
                    "aria-selected": te,
                    "aria-disabled": re,
                    tabIndex: te ? 0 : -1,
                    ref: (K) => {
                      Z.current[q] = K;
                    },
                    onClick: () => E(q),
                    onKeyDown: (K) => ne(K, q),
                    disabled: re,
                    className: [
                      "aria-tabs-datagrid__tab",
                      te ? "aria-tabs-datagrid__tab--selected" : "",
                      re ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: M.label }),
                      z.tabLoadingStates[q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      z.tabErrors[q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  M.id
                );
              })
            }
          ),
          D && ve && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ue,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: ee,
              children: D
            }
          )
        ] }),
        o.map((M, q) => {
          const te = q === z.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${M.id}`,
              "aria-labelledby": `tab-${M.id}`,
              tabIndex: 0,
              hidden: !te,
              ref: (re) => {
                oe.current[q] = re;
              },
              className: `aria-tabs-datagrid__panel ${M.className || ""}`,
              "data-tab-panel": q,
              children: te && (() => {
                const re = M.data.some(
                  (ae) => "ews_data" in ae
                ) ? ie(M.data, z.filters) : M.data, K = De(() => {
                  const ae = z.sortConfig;
                  return !ae || ae.length === 0 ? re : [...re].sort((_e, Se) => {
                    for (const { key: je, direction: Ne } of ae) {
                      let ye = _e[je], $e = Se[je];
                      const Ee = M.columns.find(
                        (Be) => Be.key === je
                      );
                      if (Ee?.tableRenderer ? (ye = Ee.tableRenderer(_e), $e = Ee.tableRenderer(Se)) : Ee?.render && (ye = Ee.render(_e), $e = Ee.render(Se)), ye == null && $e == null) continue;
                      if (ye == null) return 1;
                      if ($e == null) return -1;
                      let Ge = 0;
                      if (typeof ye == "number" && typeof $e == "number" ? Ge = ye - $e : typeof ye == "boolean" && typeof $e == "boolean" ? Ge = ye === $e ? 0 : ye ? 1 : -1 : Ge = String(ye).localeCompare(
                        String($e),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Ge !== 0)
                        return Ne === "asc" ? Ge : -Ge;
                    }
                    return 0;
                  });
                }, [re, z.sortConfig, M.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": M.ariaLabel,
                    "aria-describedby": M.ariaDescription ? `panel-${M.id}-description` : void 0,
                    children: [
                      M.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${M.id}-description`,
                          children: M.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: M.columns.map((ae, _e) => {
                        const Se = z.sortConfig?.find(
                          (ye) => ye.key === ae.key
                        ), je = !!Se, Ne = b.focusArea === "headers" && b.focusedHeaderIndex === _e;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${Ne ? "sortable-header--focused" : ""} ${je ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Ne ? 0 : -1,
                            onClick: () => J(q, ae.key),
                            onKeyDown: (ye) => le(ye, _e),
                            "aria-sort": je ? Se?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: ae.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${je ? `sort-indicator--${Se?.direction}` : ""}`,
                                  children: [
                                    z.sortConfig && z.sortConfig.length > 0 && z.sortConfig.findIndex(
                                      (ye) => ye.key === ae.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${z.sortConfig.findIndex((ye) => ye.key === ae.key) + 1}`,
                                        "data-priority": z.sortConfig.findIndex(
                                          (ye) => ye.key === ae.key
                                        ) + 1,
                                        title: `Sort priority: ${z.sortConfig.findIndex((ye) => ye.key === ae.key) + 1}`,
                                        children: z.sortConfig.findIndex(
                                          (ye) => ye.key === ae.key
                                        ) + 1
                                      }
                                    ),
                                    je && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${Se?.direction}`,
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        focusable: "false",
                                        children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                                      }
                                    )
                                  ]
                                }
                              )
                            ] })
                          },
                          ae.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: K.map((ae, _e) => {
                        const Se = z.globalSelectedRowData && U(z.globalSelectedRowData, ae), je = b.focusArea === "cells" && b.focusedRowIndex === _e;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${Se ? "data-row--selected" : ""} ${je ? "data-row--focused" : ""}`,
                            "aria-selected": Se,
                            children: M.columns.map((Ne, ye) => {
                              const $e = ae[Ne.key];
                              let Ee;
                              Ne.tableRenderer ? Ee = Ne.tableRenderer(ae) : Ne.render ? Ee = Ne.render(ae) : Ee = $e;
                              const Ge = b.focusArea === "cells" && b.focusedRowIndex === _e && b.focusedColumnIndex === ye, Be = () => {
                                if (Ne.customRenderer) {
                                  const et = Ne.customRenderer(
                                    $e,
                                    ae
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: et
                                    }
                                  );
                                }
                                return typeof $e == "boolean" && Ee === $e ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  H($e),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: $e ? "Yes" : "No" })
                                ] }) : rt.isValidElement(Ee) || typeof Ee != "object" ? Ee ?? "" : Ee;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Ge ? "data-cell--focused" : ""}`,
                                  tabIndex: Ge ? 0 : -1,
                                  onClick: () => {
                                    const Lt = z.globalSelectedRowData && U(
                                      z.globalSelectedRowData,
                                      ae
                                    ) ? null : ae;
                                    R({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Lt
                                    });
                                  },
                                  onKeyDown: (et) => O(et, _e, ye),
                                  children: Be()
                                },
                                Ne.key
                              );
                            })
                          },
                          _e
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            M.id
          );
        })
      ]
    }
  );
}), Rn = {
  asc: "↑",
  desc: "↓"
}, af = (e) => [...e].sort((t, r) => t.priority - r.priority);
function na(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function sf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function of(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function lf(e, t) {
  const r = t.find((o) => o.id === e), a = sf(t);
  return r ? r.priority < a : !1;
}
const Sx = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const f = De(() => af(e), [e]), h = ge((A) => {
    if (l) return;
    const D = e.map(
      (S) => S.id === A ? { ...S, direction: S.direction === "asc" ? "desc" : "asc" } : S
    );
    t(D);
  }, [e, t, l]), g = ge((A) => {
    if (l) return;
    const D = e.findIndex((B) => B.id === A);
    if (D <= 0) return;
    const S = [...e];
    [S[D], S[D - 1]] = [S[D - 1], S[D]], t(na(S));
  }, [e, t, l]), v = ge((A) => {
    if (l) return;
    const D = e.findIndex((B) => B.id === A);
    if (D >= e.length - 1 || D === -1) return;
    const S = [...e];
    [S[D], S[D + 1]] = [S[D + 1], S[D]], t(na(S));
  }, [e, t, l]), T = ge((A) => {
    if (l) return;
    const D = e.filter((S) => S.id !== A);
    t(na(D));
  }, [e, t, l]), p = ge(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const A = f.map((D, S) => {
      const B = D.direction === "asc" ? "ascending" : "descending";
      return `${S + 1}. ${D.label} (${B})`;
    });
    if (A.length === 1)
      return `Sorted by: ${A[0]}`;
    if (A.length === 2)
      return `Sorted by: ${A.join(" and ")}`;
    {
      const D = A.pop();
      return `Sorted by: ${A.join(", ")}, and ${D}`;
    }
  }, P = De(() => {
    const A = ["sort-description"];
    return i && A.push("sort-help"), c && A.push(c), A.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: u()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: u()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": P,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          f.map((A) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                Ye,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => T(A.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: A.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: A.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h(A.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${A.label}. Currently ${A.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: A.direction === "asc" ? Rn.asc : Rn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(A.id),
                          disabled: l || !of(A.id, e),
                          "aria-label": `Move ${A.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => v(A.id),
                          disabled: l || !lf(A.id, e),
                          "aria-label": `Move ${A.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            A.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      Qe,
      {
        variant: "secondary",
        onClick: p,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Rn.asc,
      "/",
      Rn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ds = (e, t) => t.map((r) => ({
  id: r.id,
  label: r.label,
  data: r.filter ? r.filter(e) : e,
  columns: r.columns.map((a) => ({
    key: a.key,
    label: a.label,
    render: a.render,
    customRenderer: a.customRenderer
  })),
  sortConfig: r.sortConfig,
  ariaLabel: r.ariaLabel || `${r.label} Data Grid`,
  ariaDescription: r.ariaDescription || `Data grid showing ${r.label.toLowerCase()}`,
  className: r.className,
  disabled: r.disabled
})), _a = [
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
], cf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), df = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, uf = (e) => {
  if (typeof e == "boolean") {
    const r = _a.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = _a.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, ff = (e) => `${e.name}-${e.bed_name}`, hf = () => ({
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
}), kx = (e) => {
  const t = hf();
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
}, pf = {
  dataComparator: cf,
  filterFunction: df,
  booleanRenderer: uf,
  getDataId: ff
};
function ro(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: f = "adaptive-card"
  } = r, h = t.find((D) => D.key === a), g = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", v = () => o.filter((S) => !i.includes(S) && e[S]).slice(0, 3).map((S) => {
    const B = t.find((k) => k.key === S), N = e[S], $ = c[S] ? c[S](N, e) : B?.cardRenderer ? B.cardRenderer(e) : B?.render ? B.render(e) : N;
    return `${B?.label || S}: ${$}`;
  }).join(" • "), T = () => s.length === 0 ? null : s.filter((D) => e[D.fieldKey] !== void 0).map((D) => {
    const S = e[D.fieldKey], B = D.render ? D.render(S, e) : S;
    return `<span class="nhsuk-tag ${mf(D, S)}">${B}</span>`;
  }).join(""), p = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = T(), P = v(), A = u ? `${P}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : P;
  return {
    variant: p(),
    heading: String(g),
    descriptionHtml: A,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${g}`
  };
}
function mf(e, t) {
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
const gf = {
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
}, ei = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, f = e.ews_score, h = e.speciality, g = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${d}, Bed ${c}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ n.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f !== void 0 && /* @__PURE__ */ n.jsxs(
            Ye,
            {
              color: bf(ai(f)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                f
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ n.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ n.jsx("dd", { children: d })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: g })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (v) => {
                v.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, ti = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        Ye,
        {
          color: yf(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        Ye,
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
      Qe,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Qe,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ni = ({
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
        Ye,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        Ye,
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
      Qe,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Qe,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), ri = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, f = e.ews_data?.heart_rate, h = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${xf(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: h && /* @__PURE__ */ n.jsxs(
            Ye,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                h.toUpperCase()
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
          d !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: c })
          ] }),
          f !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              f,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (g) => {
                g.stopPropagation(), r?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Qe,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (g) => {
                g.stopPropagation(), r?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function ai(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function xf(e) {
  return ai(e);
}
function bf(e) {
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
function yf(e) {
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
const vf = [
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
], si = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", _f = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, wf = (e) => si(e) === "high" || e.status === "urgent" ? "primary" : "default", Sf = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, kf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: vf,
  hiddenFields: [],
  getPriority: si,
  getStatus: _f,
  getVariant: wf,
  fieldRenderers: Sf,
  classPrefix: "adaptive-card--healthcare"
}, Cf = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      ei,
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
      ti,
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
      ni,
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
      ri,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, jf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ao = {
  name: "healthcare",
  defaultCardConfig: kf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Cf,
  fieldTypes: jf
};
function so(e) {
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
function oo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Nf(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), d = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], d[c] = e.selectedRows[c];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: d
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
function Tf(e, t) {
  const [r, a] = Ie("cards");
  return Ae(() => {
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
function $f(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Df(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...gf, ...r };
  if (a && a.cardTemplates) {
    const s = $f(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), ro(e, t, o);
}
const Cx = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: d,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: f,
  selectedIndex: h,
  onTabChange: g,
  ariaLabel: v = "Data grid",
  ariaDescription: T,
  orientation: p = "horizontal",
  id: u,
  disabled: P = !1,
  className: A,
  ...D
}) => {
  const S = Tf(e, t), B = h !== void 0, N = h ?? 0, $ = De(() => {
    if (c.some(
      (W) => W.data && W.data.length > 0 && oo(W.data)
    )) {
      const W = so(r);
      return {
        ...ao.defaultCardConfig,
        ...W
      };
    } else
      return so(r);
  }, [r, c]), x = De(() => c.some(
    (W) => W.data && W.data.length > 0 && oo(W.data)
  ) ? ao : void 0, [c]), k = De(() => ({
    selectedIndex: N,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [N, c.length]), [_, m] = So(Nf, k), y = Le([]), L = Le([]), j = Le([]), w = Le(null), [b, F] = Ie({
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
  }), Q = ge((X) => {
    if (!X.current)
      return { columns: 1, rows: 0 };
    const W = X.current, ne = W.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ne.length === 0)
      return { columns: 1, rows: 0 };
    const ee = W.offsetWidth, q = ne[0].offsetWidth, te = Math.floor(ee / q) || 1, re = Math.ceil(ne.length / te);
    return { columns: te, rows: re };
  }, []), z = ge((X, W) => ({
    row: Math.floor(X / W),
    col: X % W
  }), []), R = ge((X, W, ne) => X * ne + W, []), U = ge((X, W, ne, ee) => {
    const { row: M, col: q } = z(X, ee);
    let te = M, re = q;
    switch (W) {
      case "up":
        te = Math.max(0, M - 1);
        break;
      case "down":
        te = Math.min(Math.floor((ne - 1) / ee), M + 1);
        break;
      case "left":
        re = Math.max(0, q - 1);
        break;
      case "right":
        re = Math.min(ee - 1, q + 1);
        break;
    }
    const K = R(te, re, ee);
    return Math.min(K, ne - 1);
  }, [z, R]);
  Ae(() => {
    b.isCardNavigationActive && b.focusedCardElementIndex >= 0 && b.cardElements.length > 0 && setTimeout(() => {
      const X = b.cardElements[b.focusedCardElementIndex];
      X && (X.element.focus(), X.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [b.isCardNavigationActive, b.focusedCardElementIndex, b.cardElements.length]), Ae(() => {
    const X = () => {
      if (S === "cards" && w.current) {
        const { columns: ee, rows: M } = Q(w);
        F((q) => ({
          ...q,
          gridColumns: ee,
          gridRows: M
        }));
      }
    }, W = setTimeout(X, 200), ne = () => {
      setTimeout(X, 100);
    };
    return window.addEventListener("resize", ne), () => {
      clearTimeout(W), window.removeEventListener("resize", ne);
    };
  }, [S, c, Q]), Ae(() => {
    const X = _.tabLoadingStates.length, W = c.length;
    X !== W && m({ type: "ADJUST_ARRAYS", payload: { newLength: W } });
  }, [c.length, _.tabLoadingStates.length]), Ae(() => {
    B && h !== _.selectedIndex && m({ type: "SET_SELECTED_INDEX", payload: h });
  }, [B, h, _.selectedIndex]);
  const E = ge((X) => {
    X >= 0 && X < c.length && !c[X].disabled && (m({ type: "SET_SELECTED_INDEX", payload: X }), g?.(X));
  }, [c, g]), I = ge((X) => {
    console.log("Card selected:", X), m({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: X
    });
  }, []), C = ge((X) => {
    const W = L.current[X];
    W && (W.focus(), W.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), Z = ge((X) => {
    const W = L.current[X];
    if (!W) return [];
    const ne = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), ee = W.querySelectorAll(ne);
    return Array.from(ee).map((M, q) => ({
      id: M.id || `card-${X}-element-${q}`,
      element: M,
      label: M.getAttribute("aria-label") || M.textContent?.trim() || M.getAttribute("title") || `Element ${q + 1}`,
      type: M.tagName.toLowerCase() === "button" ? "button" : M.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(M.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), oe = Le(null), J = ge((X) => {
    const W = oe.current;
    if (!W) return;
    const ne = document.createElement("div");
    ne.setAttribute("aria-live", "polite"), ne.setAttribute("aria-atomic", "true"), ne.className = "sr-only", ne.textContent = X, W.appendChild(ne), setTimeout(() => {
      W.contains(ne) && W.removeChild(ne);
    }, 1e3);
  }, []), V = ge((X) => {
    const W = X.filter((ee) => ee.sortable !== !1), ne = [
      { value: "", label: "Sort by..." }
    ];
    return W.forEach((ee) => {
      const M = ee.label || ee.key;
      ee.key === "name" ? ne.push(
        { value: `${ee.key}-asc`, label: `${M} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${M} (Z-A)` }
      ) : ee.key === "ews_score" || ee.key.includes("score") ? ne.push(
        { value: `${ee.key}-desc`, label: `${M} (High-Low)` },
        { value: `${ee.key}-asc`, label: `${M} (Low-High)` }
      ) : ee.key === "age" || ee.key.includes("date") || ee.key.includes("time") ? ne.push(
        { value: `${ee.key}-desc`, label: `${M} (Oldest-Youngest)` },
        { value: `${ee.key}-asc`, label: `${M} (Youngest-Oldest)` }
      ) : ne.push(
        { value: `${ee.key}-asc`, label: `${M} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${M} (Z-A)` }
      );
    }), ne;
  }, []), H = ge((X, W) => W ? [...X].sort((ne, ee) => {
    const M = ne[W.key], q = ee[W.key];
    if (M == null && q == null) return 0;
    if (M == null) return 1;
    if (q == null) return -1;
    const te = Number(M), re = Number(q);
    if (!isNaN(te) && !isNaN(re))
      return W.direction === "asc" ? te - re : re - te;
    const K = String(M).toLowerCase(), ae = String(q).toLowerCase(), _e = K.localeCompare(ae);
    return W.direction === "asc" ? _e : -_e;
  }) : X, []), G = ge((X) => {
    if (!X) {
      F((K) => ({ ...K, cardSortConfig: null })), J("Card sorting cleared");
      return;
    }
    const [W, ne] = X.split("-"), ee = { key: W, direction: ne };
    F((K) => ({ ...K, cardSortConfig: ee }));
    const te = c[_.selectedIndex]?.columns.find((K) => K.key === W)?.label || W;
    J(`Cards sorted by ${te} in ${ne === "asc" ? "ascending" : "descending"} order`);
  }, [c, _.selectedIndex, J]), le = ge((X) => {
    const ee = c[_.selectedIndex]?.columns.find((q) => q.key === X.key)?.label || X.key, M = X.direction === "asc" ? "ascending" : "descending";
    return `${ee} (${M})`;
  }, [c, _.selectedIndex]), O = ge((X) => {
    const W = c[_.selectedIndex];
    if (o) {
      const ne = _.sortConfig;
      return !ne || ne.length === 0 ? X : [...X].sort((ee, M) => {
        for (const { key: q, direction: te } of ne) {
          let re = ee[q], K = M[q];
          const ae = W?.columns.find(($e) => $e.key === q);
          if (ae?.cardRenderer ? (re = ae.cardRenderer(ee), K = ae.cardRenderer(M)) : ae?.render && (re = ae.render(ee), K = ae.render(M)), re == null && K == null) continue;
          if (re == null) return te === "asc" ? -1 : 1;
          if (K == null) return te === "asc" ? 1 : -1;
          const _e = Number(re), Se = Number(K);
          if (!isNaN(_e) && !isNaN(Se)) {
            const $e = _e - Se;
            if ($e !== 0) return te === "asc" ? $e : -$e;
            continue;
          }
          const je = String(re).toLowerCase(), Ne = String(K).toLowerCase(), ye = je.localeCompare(Ne);
          if (ye !== 0) return te === "asc" ? ye : -ye;
        }
        return 0;
      });
    } else
      return H(X, b.cardSortConfig);
  }, [o, _.sortConfig, b.cardSortConfig, H, c, _.selectedIndex]), ie = ge((X, W) => {
    const ne = Z(X), ee = ne[W];
    if (ee) {
      ee.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const M = `Focused on ${ee.label}, ${ee.type} ${W + 1} of ${ne.length} within card`;
      J(M);
    }
  }, [Z, J]), se = ge((X) => {
    y.current[X]?.focus();
  }, []), de = ge(() => {
    const X = j.current[0];
    if (!X) return [];
    const W = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ne = X.querySelectorAll(W);
    return Array.from(ne);
  }, []), ue = ge((X) => {
    if (X === 0) {
      const W = j.current[0], ne = W?.querySelector(".sort-controls-row");
      if (ne) {
        ne.setAttribute("tabindex", "-1"), ne.focus();
        const M = `Sort controls group with ${de().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        J(M);
      } else W && W.focus();
    } else {
      const W = de(), ne = X - 1, ee = W[ne];
      if (ee) {
        ee.focus();
        const M = ee.tagName.toLowerCase() === "select", q = ee.tagName.toLowerCase() === "button", te = M ? "dropdown" : q ? "button" : "control", re = M ? ". Use Space key to open dropdown" : "", K = `${te} ${ne + 1} of ${W.length}${re}`;
        J(K);
      }
    }
  }, [de, J]), ve = ge((X, W) => {
    const { key: ne } = X, ee = c[_.selectedIndex], M = ee?.data.length || 0;
    if (ne === "ArrowLeft" && X.shiftKey) {
      X.preventDefault(), X.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ne === "ArrowRight" && X.shiftKey) {
      X.preventDefault(), X.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!b.isCardNavigationActive) {
      switch (ne) {
        case "ArrowUp":
          if (X.preventDefault(), W === 0)
            F((K) => ({ ...K, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), ue(0);
          else {
            const K = U(W, "up", M, b.gridColumns);
            K !== W && (F((ae) => ({ ...ae, focusedCardIndex: K })), C(K), J(`Moved to card ${K + 1} of ${M}`));
          }
          break;
        case "ArrowDown":
          X.preventDefault();
          const q = U(W, "down", M, b.gridColumns);
          q !== W && (F((K) => ({ ...K, focusedCardIndex: q })), C(q), J(`Moved to card ${q + 1} of ${M}`));
          break;
        case "ArrowLeft":
          X.preventDefault();
          const te = U(W, "left", M, b.gridColumns);
          te !== W ? (F((K) => ({ ...K, focusedCardIndex: te })), C(te), J(`Moved to card ${te + 1} of ${M}`)) : _.selectedIndex > 0 && (m({ type: "SET_SELECTED_INDEX", payload: _.selectedIndex - 1 }), F((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => se(_.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          X.preventDefault();
          const re = U(W, "right", M, b.gridColumns);
          re !== W ? (F((K) => ({ ...K, focusedCardIndex: re })), C(re), J(`Moved to card ${re + 1} of ${M}`)) : _.selectedIndex < c.length - 1 && (m({ type: "SET_SELECTED_INDEX", payload: _.selectedIndex + 1 }), F((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => se(_.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (ee?.data[W]) {
            X.preventDefault(), F((ae) => ({
              ...ae,
              selectedCardIndex: W
            }));
            const K = Z(W);
            K.length > 0 ? (F((ae) => ({
              ...ae,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: K,
              selectedCardIndex: W
              // Ensure selection is maintained
            })), J(`Card ${W + 1} selected and navigation activated. ${K.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : J(`Card ${W + 1} selected.`);
          }
          break;
        case " ":
          if (ee?.data[W]) {
            X.preventDefault(), F((ae) => ({
              ...ae,
              selectedCardIndex: ae.selectedCardIndex === W ? -1 : W
            }));
            const K = b.selectedCardIndex === W;
            J(`Card ${W + 1} ${K ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ne) {
      case "ArrowUp":
      case "ArrowLeft":
        X.preventDefault();
        const q = Math.max(0, b.focusedCardElementIndex - 1);
        F((ae) => ({ ...ae, focusedCardElementIndex: q })), ie(W, q);
        break;
      case "ArrowDown":
      case "ArrowRight":
        X.preventDefault();
        const te = Math.min(b.cardElements.length - 1, b.focusedCardElementIndex + 1);
        F((ae) => ({ ...ae, focusedCardElementIndex: te })), ie(W, te);
        break;
      case "Enter":
        X.preventDefault();
        const re = b.cardElements[b.focusedCardElementIndex];
        re && (re.element.click(), J(`Activated ${re.label}`));
        break;
      case " ":
        X.preventDefault();
        const K = b.cardElements[b.focusedCardElementIndex];
        if (K) {
          const ae = new MouseEvent("dblclick", { bubbles: !0 });
          K.element.dispatchEvent(ae), J(`Double-clicked ${K.label}`);
        }
        break;
      case "Escape":
        X.preventDefault(), F((ae) => ({
          ...ae,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => C(W), 0), J("Exited card navigation, returned to card level");
        break;
      case "Home":
        X.preventDefault(), b.cardElements.length > 0 && (F((ae) => ({ ...ae, focusedCardElementIndex: 0 })), ie(W, 0));
        break;
      case "End":
        if (X.preventDefault(), b.cardElements.length > 0) {
          const ae = b.cardElements.length - 1;
          F((_e) => ({ ..._e, focusedCardElementIndex: ae })), ie(W, ae);
        }
        break;
    }
  }, [b, _.selectedIndex, c, I, C, se, F, Z, ie, J]), ce = ge((X) => {
    const W = y.current[X], ne = W?.parentElement;
    if (!W || !ne) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const ee = W.getBoundingClientRect(), M = ne.getBoundingClientRect();
    ee.left >= M.left && ee.right <= M.right || (console.log("Tab not visible, scrolling into view (mobile)"), W.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), he = ge((X, W) => {
    if (S !== "cards")
      return;
    const { key: ne } = X;
    switch (ne) {
      case "ArrowLeft":
        X.preventDefault();
        const ee = W > 0 ? W - 1 : c.length - 1;
        E(ee), F((re) => ({ ...re, focusedTabIndex: ee })), y.current[ee]?.focus(), ce(ee);
        break;
      case "ArrowRight":
        X.preventDefault();
        const M = W < c.length - 1 ? W + 1 : 0;
        E(M), F((re) => ({ ...re, focusedTabIndex: M })), y.current[M]?.focus(), ce(M);
        break;
      case "ArrowDown":
        X.preventDefault();
        const q = c[_.selectedIndex];
        q && q.columns && q.columns.length > 0 ? (F((re) => ({
          ...re,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), ue(0)) : (F((re) => ({
          ...re,
          focusArea: "cards",
          focusedCardIndex: 0
        })), C(0));
        break;
      case "Home":
        X.preventDefault(), E(0), F((re) => ({ ...re, focusedTabIndex: 0 })), y.current[0]?.focus(), ce(0);
        break;
      case "End":
        X.preventDefault();
        const te = c.length - 1;
        E(te), F((re) => ({ ...re, focusedTabIndex: te })), y.current[te]?.focus(), ce(te);
        break;
      case "Enter":
      case " ":
        X.preventDefault(), E(W);
        break;
    }
  }, [c.length, E, S, C, F, ce]), fe = ge((X, W) => {
    if (S !== "cards")
      return;
    const { key: ne } = X, ee = c[_.selectedIndex];
    if (W === 0 && !b.isSortControlsActive) {
      switch (ne) {
        case "ArrowUp":
          X.preventDefault(), F((q) => ({
            ...q,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), se(_.selectedIndex);
          break;
        case "ArrowDown":
          X.preventDefault(), ee?.data && ee.data.length > 0 && (F((q) => ({
            ...q,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), C(0));
          break;
        case "Enter":
        case " ":
          X.preventDefault();
          const M = de();
          if (M.length > 0) {
            F((te) => ({
              ...te,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), ue(1);
            const q = `Entered sort controls navigation mode. ${M.length} controls available. Use arrow keys to navigate between controls.`;
            J(q);
          }
          break;
        case "Escape":
          X.preventDefault(), F((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), se(_.selectedIndex);
          break;
      }
      return;
    }
    if (b.isSortControlsActive) {
      const q = de().length;
      switch (ne) {
        case "ArrowLeft":
          X.preventDefault();
          const te = b.focusedSortControlIndex > 1 ? b.focusedSortControlIndex - 1 : q;
          F((K) => ({ ...K, focusedSortControlIndex: te })), ue(te);
          break;
        case "ArrowRight":
          X.preventDefault();
          const re = b.focusedSortControlIndex < q ? b.focusedSortControlIndex + 1 : 1;
          F((K) => ({ ...K, focusedSortControlIndex: re })), ue(re);
          break;
        case "ArrowDown":
          if (X.preventDefault(), b.isSortControlsActive) {
            const K = b.focusedSortControlIndex < q ? b.focusedSortControlIndex + 1 : 1;
            F((ae) => ({ ...ae, focusedSortControlIndex: K })), ue(K);
          } else
            ee?.data && ee.data.length > 0 && (F((K) => ({
              ...K,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), C(0));
          break;
        case "ArrowUp":
          X.preventDefault(), F((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), ue(0);
          break;
        case "Escape":
          X.preventDefault(), F((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), ue(0);
          break;
      }
    }
  }, [S, c, _.selectedIndex, b.isSortControlsActive, b.focusedSortControlIndex, ue, se, C, F, J]);
  if (S === "cards") {
    const X = c[_.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${A || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": v,
            "aria-describedby": `${T || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": p,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((W, ne) => {
              const ee = ne === _.selectedIndex, M = W.disabled || P;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${W.id}`,
                  "aria-controls": `panel-${W.id}`,
                  "aria-selected": ee,
                  "aria-disabled": M,
                  tabIndex: ee ? 0 : -1,
                  ref: (q) => {
                    y.current[ne] = q;
                  },
                  onClick: () => E(ne),
                  onKeyDown: (q) => he(q, ne),
                  disabled: M,
                  className: [
                    "aria-tabs-datagrid__tab",
                    ee ? "aria-tabs-datagrid__tab--selected" : "",
                    M ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: W.label }),
                    _.tabLoadingStates[ne] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    _.tabErrors[ne] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                W.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      X && X.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Qo,
          {
            sortConfig: _.sortConfig || [],
            columns: X.columns.map((W) => ({ key: W.key, label: W.label })),
            onSortChange: (W) => {
              m({ type: "SET_SORT", payload: W });
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
            tabIndex: b.focusArea === "sort-controls" ? 0 : -1,
            ref: (W) => {
              j.current[0] = W;
            },
            onKeyDown: (W) => fe(W, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${X.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Wn,
                  {
                    id: `card-sort-${X.id}`,
                    name: `card-sort-${X.id}`,
                    value: b.cardSortConfig ? `${b.cardSortConfig.key}-${b.cardSortConfig.direction}` : "",
                    onChange: (W) => G(W.target.value),
                    className: "sort-select",
                    children: V(X.columns).map((W) => /* @__PURE__ */ n.jsx("option", { value: W.value, children: W.label }, W.value))
                  }
                )
              ] }),
              b.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  le(b.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Qe,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => G(""),
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
          ref: w,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${X?.label || "Data"} cards in ${b.gridRows} rows and ${b.gridColumns} columns`,
          "aria-rowcount": b.gridRows,
          "aria-colcount": b.gridColumns,
          id: `panel-${X?.id}`,
          "aria-labelledby": `tab-${X?.id}`,
          children: O(X?.data || []).map((W, ne) => {
            const ee = b.selectedCardIndex === ne, M = b.focusedCardIndex === ne && b.focusArea === "cards", q = b.focusedCardIndex === ne && b.focusArea === "card" && b.isCardNavigationActive, te = ne === 0 && b.focusArea !== "cards", re = M || te, K = z(ne, b.gridColumns);
            if (r.cardTemplate) {
              const Se = r.cardTemplate(W, X.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": K.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (je) => {
                        L.current[ne] = je;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        ee ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        M ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": K.col + 1,
                      "aria-selected": ee,
                      "aria-expanded": q,
                      "aria-description": q ? `Card navigation active. ${b.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: re ? 0 : -1,
                      onClick: () => {
                        F((je) => ({
                          ...je,
                          selectedCardIndex: je.selectedCardIndex === ne ? -1 : ne
                        })), I(W);
                      },
                      onKeyDown: (je) => ve(je, ne),
                      onFocus: () => {
                        F((je) => je.isCardNavigationActive ? je : je.focusedCardIndex !== ne || je.focusArea !== "cards" ? {
                          ...je,
                          focusedCardIndex: ne,
                          focusArea: "cards"
                        } : je);
                      },
                      children: Se
                    }
                  )
                },
                `card-${ne}`
              );
            }
            const ae = Df(W, X.columns, $, x), _e = [
              ae.className || "",
              ee ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              M ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              q ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": K.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      ee ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      M ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": K.col + 1,
                    "aria-selected": ee,
                    "aria-expanded": q,
                    onKeyDown: (Se) => {
                      Se.key === "Enter" && (Se.preventDefault(), F((je) => ({
                        ...je,
                        selectedCardIndex: ne
                      }))), ve(Se, ne);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      Jo,
                      {
                        ...ae,
                        ref: (Se) => {
                          L.current[ne] = Se;
                        },
                        className: _e,
                        "aria-label": `${ae["aria-label"] || ae.heading}. ${q ? `Card navigation active with ${b.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: re ? 0 : -1,
                        onClick: () => {
                          F((Se) => ({
                            ...Se,
                            selectedCardIndex: Se.selectedCardIndex === ne ? -1 : ne
                          })), I(W);
                        },
                        onKeyDown: (Se) => ve(Se, ne),
                        onFocus: () => {
                          b.isCardNavigationActive || F((Se) => Se.focusedCardIndex !== ne || Se.focusArea !== "cards" ? {
                            ...Se,
                            focusedCardIndex: ne,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : Se);
                        }
                      }
                    )
                  }
                )
              },
              `card-${ne}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: oe,
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
  return S === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${A || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      va,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: v,
        ariaDescription: T,
        orientation: p,
        id: u,
        disabled: P,
        selectedIndex: h,
        onTabChange: g,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...D
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${A || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      va,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: v,
        ariaDescription: T,
        orientation: p,
        id: u,
        disabled: P,
        selectedIndex: h,
        onTabChange: g,
        actions: l,
        forceActionsAbove: d,
        ...D
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, oi = (e) => {
  const t = _a.find((r) => r.value === e);
  return t ? t.icon : null;
}, If = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => oi(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Mf = (e) => ds(e, [
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
]), Lf = {
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
  booleanRenderer: (e) => oi(e),
  getDataId: (e) => `financial-${e.id}`
}, Ff = (e) => ds(e, [
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
]), Af = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: If,
    createTabs: Mf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Lf,
    createTabs: Ff
  }
}, io = (e, t) => {
  const r = Af[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, ii = [
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
], Ef = [
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
], Bf = [
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
], Pf = [
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
], lo = [
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
], co = [
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
], uo = [
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
], Rf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Hf = () => [
  {
    id: "patients",
    label: "Patients",
    data: ii,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ei,
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
    data: Ef,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ti,
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
    data: Bf,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ni,
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
    data: Pf,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ri,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], zf = () => {
  const [e, t] = Ie("healthcare"), r = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: pf,
      tabPanels: Hf(),
      data: ii
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...io("ecommerce", lo),
      data: lo
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...io("financial", co),
      data: co
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Rf,
      tabPanels: ds(uo, [
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
      data: uo
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
        Qe,
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
      va,
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
}, jx = zf, li = (e) => /* @__PURE__ */ n.jsx(jo, { ...e }), Nx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: d,
  navigation: c,
  search: f,
  account: h,
  organisation: g,
  logo: v,
  className: T,
  ...p
}) => {
  const u = {
    service: d,
    navigation: c,
    search: f,
    account: h,
    organisation: g,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Zo, { ...s }),
    /* @__PURE__ */ n.jsx(Io, { ...u }),
    /* @__PURE__ */ n.jsx(li, { className: T, ...p, children: /* @__PURE__ */ n.jsx(No, { size: o, children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsxs(_n, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Dt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Mo, { ...l })
  ] });
}, Tx = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = "two-thirds",
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: d,
  serviceName: c,
  serviceHref: f,
  logo: h,
  className: g,
  ...v
}) => {
  const T = {
    service: {
      text: c,
      href: f
    },
    logo: h,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Zo, { ...s }),
    /* @__PURE__ */ n.jsx(Io, { ...T }),
    /* @__PURE__ */ n.jsxs(li, { className: g, ...v, children: [
      d && /* @__PURE__ */ n.jsx(fa, { ...d }),
      /* @__PURE__ */ n.jsx(No, { size: o, children: /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsxs(_n, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Dt, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Mo, { ...l })
  ] });
}, ci = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = be("nhsuk-back-link", a), d = be("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx("button", { className: d, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: d, href: r, ...i, children: c() }) });
};
ci.displayName = "ForwardLink";
const nn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function fo() {
  return typeof window > "u" ? nn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function di() {
  const [e, t] = Y.useState(fo());
  Y.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(fo());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = Y.useCallback((s) => e >= nn[s], [e]), a = Y.useCallback((s) => e < nn[s], [e]), o = Y.useCallback((s, i) => e >= nn[s] && e < nn[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: nn
  };
}
function $x(e) {
  const { width: t, values: r } = di();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Wf(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = Y.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = Y.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Y.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(r, String(o)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Of = ({ className: e }) => /* @__PURE__ */ n.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z"
      }
    )
  }
), Uf = ({ className: e }) => /* @__PURE__ */ n.jsx(
  "svg",
  {
    className: e,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    "aria-hidden": "true",
    focusable: "false",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z"
      }
    )
  }
);
function Gf(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: d,
    animated: c = !0,
    backLabel: f = "Back",
    nextLabel: h = "Next",
    isLoading: g = !1,
    emptyState: v,
    a11y: T,
    className: p,
    getId: u = (pe) => pe.id,
    orientation: P = "vertical",
    autoEnableThirdColumn: A = !0,
    onDrillChange: D,
    navigationInstructions: S = "Use arrow keys to navigate, Enter to open.",
    initialFocus: B = "first",
    skipFocusOnSelect: N = !1,
    skipAnnouncements: $ = !1,
    onFocusChange: x,
    syncUrl: k = !1,
    urlParamSelected: _ = "nsv",
    urlParamDrill: m = "nsvDrill",
    urlSyncDebounceMs: y = 0,
    lazySecondary: L = !1,
    navFooter: j,
    collapsibleNav: w = !1,
    navInitiallyCollapsed: b = !1,
    onNavCollapseChange: F,
    collapseToggleLabelShow: Q = "Show navigation",
    collapseToggleLabelHide: z = "Hide navigation",
    collapseToggleIconShow: R,
    collapseToggleIconHide: U,
    persistNavCollapsed: E,
    navCollapsedStorageKey: I = "nsvCollapsed",
    navCollapsedUrlParam: C = "nsvCollapsed",
    autoContentHeader: Z,
    contentHeaderLevel: oe = 2,
    renderContentHeader: J,
    contentSubheader: V,
    secondarySubheader: H
  } = e, { up: G } = di(), [le, O] = Y.useState(!1);
  Y.useEffect(() => {
    O(!0);
  }, []);
  const ie = le && G("medium"), se = le && G("xlarge");
  let de;
  d ? de = d : ie ? de = "two-column" : de = "list", !d && A && l && se && (de = "three-column");
  const ue = Wf({
    enabled: k,
    paramSelected: _,
    paramDrill: m
  }), [ve, ce] = Y.useState(
    () => ue.selectedId !== void 0 ? ue.selectedId : a
  ), he = r !== void 0 ? r : ve, fe = t.find((pe) => u(pe) === he), [X, W] = Y.useState(
    void 0
  );
  Y.useEffect(() => {
    if (he === void 0) return;
    W(he);
    const pe = setTimeout(() => W(void 0), 220);
    return () => clearTimeout(pe);
  }, [he]);
  const ne = Y.useRef(null), ee = Y.useRef(null), M = Y.useRef(null), q = Y.useRef(null), [te, re] = Y.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [K, ae] = Y.useState(() => "nav"), [_e, Se] = Y.useState(0), je = () => [
    q.current,
    ee.current,
    M.current
  ].filter(Boolean), Ne = (pe) => {
    const we = je(), xe = Math.max(0, Math.min(pe, we.length - 1));
    we[xe]?.focus(), Se(xe);
  }, ye = Y.useCallback(
    (pe) => pe ? Array.from(pe.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (xe) => !xe.hasAttribute("disabled") && xe.tabIndex !== -1
    ) : [],
    []
  ), $e = Y.useCallback(
    (pe) => {
      const we = ye(ee.current);
      if (!we.length) {
        ee.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(pe, we.length - 1)), Ce = we[xe];
      Ce.focus(), setTimeout(() => {
        document.activeElement !== Ce && (Ce.focus(), setTimeout(() => {
          document.activeElement !== Ce && Ce.click();
        }, 10));
      }, 10), re((Pe) => ({ ...Pe, contentIndex: xe }));
      const ze = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), ee.current?.focus(), Ce.removeEventListener("keydown", ze));
      };
      we.forEach((Pe) => {
        const Re = Pe._escapeHandler;
        Re && Pe.removeEventListener("keydown", Re);
      }), Ce._escapeHandler = ze, Ce.addEventListener("keydown", ze);
    },
    [ye]
  ), Ee = Y.useCallback(
    (pe) => {
      const we = ye(M.current);
      if (!we.length) {
        M.current?.focus();
        return;
      }
      const xe = Math.max(0, Math.min(pe, we.length - 1)), Ce = we[xe];
      Ce.focus(), setTimeout(() => {
        document.activeElement !== Ce && (Ce.focus(), setTimeout(() => {
          document.activeElement !== Ce && Ce.click();
        }, 10));
      }, 10), re((Pe) => ({ ...Pe, secondaryIndex: xe }));
      const ze = (Pe) => {
        Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), M.current?.focus(), Ce.removeEventListener("keydown", ze));
      };
      we.forEach((Pe) => {
        const Re = Pe._escapeHandler;
        Re && Pe.removeEventListener("keydown", Re);
      }), Ce._escapeHandler = ze, Ce.addEventListener("keydown", ze);
    },
    [ye]
  ), Ge = (pe) => {
    if (pe.defaultPrevented) return;
    const we = pe.key, xe = pe.target, Ce = !!Je.current && Je.current.contains(xe), ze = !!ee.current && ee.current.contains(xe), Pe = !!M.current && M.current.contains(xe), Re = !!M.current, Qt = xe === q.current || xe === ee.current || xe === M.current, zt = Be && (de === "list" || de === "cards"), Fn = ze && !!xe.closest(".nhs-navigation-split-view__header");
    if (K === "containers" && Qt) {
      if (we === "ArrowRight") {
        pe.preventDefault();
        const Te = je(), He = Math.min(Te.length - 1, _e + 1);
        Ne(He);
        return;
      }
      if (we === "ArrowLeft") {
        pe.preventDefault();
        const Te = Math.max(0, _e - 1);
        Ne(Te);
        return;
      }
      if (we === "Home") {
        pe.preventDefault(), Ne(0);
        return;
      }
      if (we === "End") {
        pe.preventDefault(), Ne(je().length - 1);
        return;
      }
      if (we === "Enter" || we === " ") {
        if (pe.preventDefault(), xe === q.current) {
          if (ae("nav"), Je.current) {
            const Te = Array.from(
              Je.current.querySelectorAll("[data-nav-item]")
            );
            (Te[We >= 0 ? We : 0] || Te[0])?.focus();
          }
        } else xe === ee.current ? (ae("content"), $e(te.contentIndex)) : xe === M.current && (ae("secondary"), Ee(te.secondaryIndex));
        return;
      }
      return;
    }
    if (we === "Escape") {
      if (K === "content" || K === "secondary") {
        if (ze || Pe) {
          if (pe.preventDefault(), ae("nav"), Je.current) {
            const He = Array.from(
              Je.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => He?.focus(), 10);
          }
        } else if ((xe === ee.current || xe === M.current) && (pe.preventDefault(), ae("nav"), Je.current)) {
          const He = Array.from(
            Je.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
      }
      return;
    }
    if (we === "Enter" || we === " ") {
      if (xe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (xe === ee.current && K === "content") {
        pe.preventDefault(), pe.stopPropagation(), ye(ee.current).length > 0 && setTimeout(() => {
          $e(te.contentIndex);
        }, 50);
        return;
      }
      if (xe === M.current && K === "secondary") {
        pe.preventDefault(), pe.stopPropagation(), ye(
          M.current
        ).length > 0 && setTimeout(() => {
          Ee(te.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (zt && Fn && !Qt && (we === "ArrowRight" || we === "ArrowLeft")) {
      const Te = ye(ee.current).filter(
        (He) => He.closest(".nhs-navigation-split-view__header")
      );
      if (Te.length > 1) {
        const He = Te.indexOf(xe);
        if (He >= 0) {
          const vs = (He + (we === "ArrowRight" ? 1 : -1) + Te.length) % Te.length;
          pe.preventDefault(), Te[vs].focus();
          return;
        }
      }
    }
    if (we === "ArrowRight") {
      if (Ce || K === "nav") {
        pe.preventDefault(), ae("content"), setTimeout(() => ee.current?.focus(), 10);
        return;
      }
      if (ze || K === "content") {
        Re && (pe.preventDefault(), ae("secondary"), setTimeout(() => M.current?.focus(), 10));
        return;
      }
    }
    if (we === "ArrowLeft") {
      if (Pe || K === "secondary") {
        pe.preventDefault(), ae("content"), setTimeout(() => ee.current?.focus(), 10);
        return;
      }
      if (ze || K === "content") {
        if (pe.preventDefault(), ae("nav"), Je.current) {
          const He = Array.from(
            Je.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
        return;
      }
    }
    if (we === "Home" && !Ce && (pe.preventDefault(), ae("nav"), Je.current)) {
      const Te = Array.from(
        Je.current.querySelectorAll("[data-nav-item]")
      ), He = Te[We >= 0 ? We : 0] || Te[0];
      setTimeout(() => He?.focus(), 10);
    }
    if (we === "End") {
      const Te = Re ? M.current : ee.current;
      Te && !Te.contains(xe) && (pe.preventDefault(), Re ? (ae("secondary"), setTimeout(() => M.current?.focus(), 10)) : (ae("content"), setTimeout(() => ee.current?.focus(), 10)));
    }
    if (we === "ArrowDown" || we === "ArrowUp") {
      if (xe === ee.current && we === "ArrowDown") {
        pe.preventDefault(), ye(ee.current).length > 0 && $e(0);
        return;
      }
      if (xe === M.current && we === "ArrowDown") {
        pe.preventDefault(), ye(
          M.current
        ).length > 0 && Ee(0);
        return;
      }
      if (ze) {
        const Te = ye(ee.current);
        if (Te.length) {
          pe.preventDefault();
          const He = we === "ArrowDown" ? 1 : -1, ut = (te.contentIndex + He + Te.length) % Te.length;
          $e(ut);
        }
      } else if (Pe) {
        const Te = ye(M.current);
        if (Te.length) {
          pe.preventDefault();
          const He = we === "ArrowDown" ? 1 : -1, ut = (te.secondaryIndex + He + Te.length) % Te.length;
          Ee(ut);
        }
      }
    }
  }, Be = !!fe && (de === "list" || de === "cards"), et = Y.useMemo(() => Z === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : Z === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : Z === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: Z.mobile !== void 0 ? Z.mobile : !0,
    tablet: Z.tablet || !1,
    desktop: Z.desktop || !1
  }, [Z]), Lt = le && G("medium") && !G("xlarge"), gt = le && G("xlarge"), ct = !!l, Ve = de === "three-column", [Xe, hn] = Y.useState(!1);
  Y.useEffect(() => {
    Ve && Xe && hn(!1);
  }, [Ve, Xe]), Y.useEffect(() => {
    Xe && !Ve && (ae("secondary"), Se(2), setTimeout(() => {
      M.current?.focus();
    }, 50));
  }, [Xe, Ve]), Y.useEffect(() => {
    !Xe && !Ve && K === "secondary" && (ae("content"), Se(1), setTimeout(() => {
      ee.current?.focus();
    }, 50));
  }, [Xe, Ve, K]);
  const Pr = !!fe && (Be && et.mobile || !Be && Lt && et.tablet || !Be && gt && et.desktop) || ct && !Ve, $l = `h${oe}`, Rr = fe ? Y.createElement(
    $l,
    {
      style: {
        marginLeft: Be ? 32 : 0,
        marginRight: Be ? 32 : 0
      }
    },
    fe.label
  ) : null, bs = Be ? "mobile" : Lt ? "tablet" : "desktop", Dl = ct && !Ve && !Xe, Hr = Be && et.mobile ? /* @__PURE__ */ n.jsx(
    fa,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => Jt(void 0, void 0)
    }
  ) : void 0, zr = Dl ? /* @__PURE__ */ n.jsx(
    ci,
    {
      element: "button",
      text: h,
      onClick: () => {
        hn(!0);
      }
    }
  ) : void 0, Wr = !Ve && Xe ? /* @__PURE__ */ n.jsx(
    fa,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => hn(!1)
    }
  ) : void 0, Il = Y.useMemo(() => {
    if (!Pr || !fe) return null;
    if (J)
      return J({
        item: fe,
        detailActive: Be,
        context: bs,
        backLink: Hr,
        defaultHeading: Rr
      });
    const pe = fe && V ? typeof V == "function" ? V(fe) : V : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs(
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
            Wr || Hr,
            /* @__PURE__ */ n.jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: 0
                },
                children: [
                  Rr,
                  pe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: pe })
                ]
              }
            )
          ]
        }
      ),
      zr && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: zr })
    ] });
  }, [
    Pr,
    fe,
    J,
    Be,
    bs,
    Hr,
    Wr,
    Rr,
    zr,
    V
  ]);
  Y.useEffect(() => {
    if (!k) return;
    const pe = de === "three-column";
    let we = !1;
    const xe = () => {
      we || (ue.selectedId !== he && ue.setSelectedId(he), ue.drilledIn !== pe && ue.setDrilledIn(pe));
    };
    if (y && y > 0) {
      const Ce = setTimeout(xe, y);
      return () => {
        we = !0, clearTimeout(Ce);
      };
    } else
      xe();
  }, [k, ue, he, de, y]), Y.useEffect(() => {
    if (!k) return;
    const pe = () => {
      const we = new URLSearchParams(window.location.search), xe = we.get(_);
      we.get(m), ce(xe === null ? void 0 : xe);
    };
    return window.addEventListener("popstate", pe), () => window.removeEventListener("popstate", pe);
  }, [
    k,
    _,
    m,
    d,
    l
  ]);
  const Ln = Y.useRef(0), xt = Y.useRef(
    null
  ), Jt = Y.useCallback(
    (pe, we) => {
      pe !== he && (r === void 0 && ce(pe), o?.(pe, we));
    },
    [r, o, he]
  );
  Y.useEffect(() => {
    if (!N && Be && ee.current) {
      const pe = setTimeout(() => ee.current?.focus(), 30);
      return () => clearTimeout(pe);
    }
  }, [Be, he, N]);
  const Je = Y.useRef(null), [We, pn] = Y.useState(
    () => B === "first" ? 0 : -1
  );
  Y.useEffect(() => {
    if (We < 0 || !Je.current) return;
    const we = Array.from(
      Je.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (we) {
      document.activeElement !== we && we.focus(), Ln.current = We;
      const xe = t[We];
      x?.(
        xe ? u(xe) : void 0,
        xe,
        We
      );
    }
  }, [We, t, x, u]);
  const Ml = (pe) => {
    const we = P === "vertical" ? "ArrowDown" : "ArrowRight", xe = P === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (pe.key === "ArrowRight" && P === "vertical") {
      pe.preventDefault(), Xe ? (ae("secondary"), setTimeout(() => {
        M.current?.focus();
      }, 10)) : (ae("content"), setTimeout(() => {
        ee.current?.focus();
      }, 10));
      return;
    }
    if (pe.key === we)
      pe.preventDefault(), pn((Ce) => Math.min(t.length - 1, Ce + 1));
    else if (pe.key === xe)
      pe.preventDefault(), pn((Ce) => Math.max(0, Ce - 1));
    else if (pe.key === "Home")
      pe.preventDefault(), pn(0);
    else if (pe.key === "End")
      pe.preventDefault(), pn(t.length - 1);
    else if (pe.key === "Enter" || pe.key === " ") {
      pe.preventDefault();
      const Ce = t[We];
      Ce && !Ce.disabled && Jt(u(Ce), Ce);
    } else if (pe.key.length === 1 && /[a-z0-9]/i.test(pe.key)) {
      xt.current || (xt.current = { buffer: "", last: 0 });
      const Ce = Date.now(), ze = 700, Pe = pe.key.toLowerCase();
      Ce - xt.current.last > ze ? xt.current.buffer = Pe : xt.current.buffer += Pe, xt.current.last = Ce;
      let Re = xt.current.buffer;
      const Qt = Re.split("").every((ut) => ut === Re[0]), zt = t.map(
        (ut) => String(ut.label || "").toLowerCase()
      );
      let Fn = 0;
      We >= 0 && (Fn = (We + 1) % t.length);
      let Te;
      const He = (ut, vs) => {
        const _s = t.length;
        for (let Gr = 0; Gr < _s; Gr++) {
          const Yr = (Fn + Gr) % _s;
          if (!t[Yr].disabled && zt[Yr].startsWith(ut))
            return Yr;
        }
      };
      Qt && Re.length > 1 ? Te = He(Re[0]) : (Te = He(Re), Te === void 0 && Re.length > 1 && (Te = He(Re[Re.length - 1]), Te !== void 0 && xt.current && (xt.current.buffer = Re[Re.length - 1]))), Te !== void 0 && pn(Te);
    }
  }, Ll = Y.useMemo(() => {
    if (E && (E === "url" || E === "both") && typeof window < "u") {
      const we = new URLSearchParams(window.location.search).get(C);
      if (we === "1") return !0;
      if (we === "0") return !1;
    }
    if (E && (E === "localStorage" || E === "both") && typeof window < "u")
      try {
        const pe = window.localStorage.getItem(I);
        if (pe === "1") return !0;
        if (pe === "0") return !1;
      } catch {
      }
    return b;
  }, [
    E,
    b,
    I,
    C
  ]), [dt, Fl] = Y.useState(Ll);
  Y.useEffect(() => {
    F?.(dt);
  }, [dt, F]);
  const Al = Y.useCallback(() => {
    ie && w && Fl((pe) => !pe);
  }, [ie, w]);
  Y.useEffect(() => {
    if (E && !(typeof window > "u")) {
      if (E === "localStorage" || E === "both")
        try {
          window.localStorage.setItem(
            I,
            dt ? "1" : "0"
          );
        } catch {
        }
      if (E === "url" || E === "both") {
        const pe = new URLSearchParams(window.location.search);
        pe.set(C, dt ? "1" : "0");
        const we = `${window.location.pathname}?${pe.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", we);
      }
    }
  }, [
    dt,
    E,
    I,
    C
  ]);
  const El = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Be ? "nhs-navigation-split-view--detail-active" : "",
    de === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    w && ie && dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    p
  ].filter(Boolean).join(" "), Or = Y.useRef(null);
  Y.useEffect(() => {
    if (!$ && Or.current) {
      const pe = fe ? `Selected ${fe.label}` : "Selection cleared";
      Or.current.textContent = pe;
    }
  }, [fe, $]), Y.useEffect(() => {
    !Be && he == null && Je.current && Je.current.querySelectorAll("[data-nav-item]")[Ln.current]?.focus();
  }, [Be, he]);
  const Ft = de === "three-column", [Ur, Bl] = Y.useState(!1);
  Y.useEffect(() => {
    Ft && !Ur && Bl(!0);
  }, [Ft, Ur]);
  const ys = Y.useRef(Ft);
  Y.useEffect(() => {
    ys.current !== Ft && (D?.(Ft), ys.current = Ft);
  }, [Ft, D]);
  const Pl = () => {
    if (de === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": he ? String(he) : void 0,
          children: [
            t.map((xe) => {
              const Ce = u(xe), ze = Ce === he;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": ze,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(Ce),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": ze || void 0,
                      "data-disabled": xe.disabled || void 0,
                      disabled: xe.disabled,
                      onClick: () => !xe.disabled && Jt(Ce, xe),
                      children: [
                        xe.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                        xe.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                        s?.(xe),
                        xe.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
                      ]
                    }
                  )
                },
                Ce
              );
            }),
            t.length === 0 && !g && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                "aria-disabled": "true",
                children: v || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      );
    const pe = "nsv-nav-instructions", we = Y.useMemo(() => Y.memo(
      ({
        item: xe,
        idx: Ce,
        selected: ze,
        focused: Pe
      }) => {
        const Re = u(xe), Qt = xe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Pe ? 0 : -1,
          onClick: () => {
            Ln.current = Ce, Jt(Re, xe);
          },
          onKeyDown: (zt) => {
            (zt.key === "Enter" || zt.key === " ") && (zt.preventDefault(), Ln.current = Ce, Jt(Re, xe));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Re),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": ze,
            "aria-current": ze ? "true" : void 0,
            "data-selected": ze || void 0,
            "data-disabled": xe.disabled || void 0,
            ...Qt,
            children: [
              xe.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: xe.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: xe.label }),
                xe.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: xe.description }),
                s?.(xe)
              ] }),
              xe.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: xe.badge })
            ]
          }
        );
      }
    ), [u, Jt, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Je,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ml,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": pe,
          "aria-activedescendant": he ? String(he) : void 0,
          children: [
            t.map((xe, Ce) => /* @__PURE__ */ n.jsx(
              we,
              {
                item: xe,
                idx: Ce,
                selected: u(xe) === he,
                focused: Ce === We || We === -1 && Ce === 0 && B === "first",
                "data-just-selected": u(xe) === X ? "true" : void 0
              },
              u(xe)
            )),
            t.length === 0 && !g && /* @__PURE__ */ n.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__list-item",
                "aria-disabled": "true",
                children: v || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          id: pe,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: S
        }
      )
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: ne,
      className: El,
      "aria-label": T?.rootLabel,
      "data-layout": de,
      onKeyDown: Ge,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Be || void 0,
            style: { transform: Be ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: q,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": T?.navigationLabel || "Items",
                  "data-collapsed": dt || void 0,
                  tabIndex: 0,
                  children: [
                    w && ie && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Al,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": dt ? Q : z,
                        title: dt ? Q : z,
                        children: dt ? R || /* @__PURE__ */ n.jsx(Uf, {}) : U || /* @__PURE__ */ n.jsx(Of, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Pl() }),
                    j && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: j
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: ee,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": T?.contentLabel || "Content",
                  "data-has-selection": !!fe || void 0,
                  tabIndex: 0,
                  style: {
                    display: Xe && !Ve ? "none" : void 0
                  },
                  children: [
                    Pr && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: Il }),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(fe)
                      }
                    )
                  ]
                }
              ),
              de === "three-column" && (!L || Ur) || Xe && !Ve ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: M,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": T?.secondaryContentLabel || "Secondary",
                  tabIndex: 0,
                  children: /* @__PURE__ */ n.jsxs(
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
                        Xe && !Ve && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              width: "100%"
                            },
                            children: /* @__PURE__ */ n.jsxs(
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
                                  Wr,
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: fe && typeof fe == "object" && "label" in fe ? fe.label : String(fe) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        fe && H && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof H == "function" ? H(fe) : H
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(fe) })
                      ]
                    }
                  )
                }
              ) : null
            ]
          }
        ),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: Or,
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
        /* @__PURE__ */ n.jsx(
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
            children: Ft ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Gf.displayName = "NavigationSplitView";
const ho = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), Yf = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), g = r && e.childItems && e.childItems.length > 0, v = (p) => {
    g && (p.preventDefault(), a?.(e));
  }, T = g ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: v,
    onKeyDown: (p) => {
      (p.key === "Enter" || p.key === " ") && v(p), p.key === "Escape" && o && v(p);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: be("nhsuk-product-roadmap__item", g && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: d, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": f,
      "aria-colspan": h,
      ...T,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          g && /* @__PURE__ */ n.jsx("span", { className: be("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Vf = zl(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: d = "overlay",
  ...c
}) => {
  const [f, h] = Ie(() => /* @__PURE__ */ new Set()), [g, v] = Ie(() => /* @__PURE__ */ new Set()), T = Le(/* @__PURE__ */ new Set()), p = ge((y) => f.has(y), [f]), u = ge((y) => {
    h((L) => {
      const j = new Set(L);
      return j.has(y.id) ? (j.delete(y.id), v((w) => {
        const b = new Set(w);
        return b.add(y.id), b;
      }), setTimeout(() => v((w) => {
        const b = new Set(w);
        return b.delete(y.id), b;
      }), 240), l?.(y.id, !1)) : (j.add(y.id), l?.(y.id, !0)), j;
    });
  }, [l]);
  Wl(() => {
    if (d !== "inline" || !i) return;
    const y = [];
    if (f.forEach((b) => {
      T.current.has(b) || y.push(b);
    }), T.current = new Set(f), !y.length) return;
    const L = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, j = y.map((b) => `.nhsuk-product-roadmap__inline-children[data-parent="${b}"] .nhsuk-product-roadmap__inline-child`).join(","), w = Array.from(document.querySelectorAll(j));
    if (w.length) {
      if (L) {
        w.forEach((b) => {
          b.style.opacity = "1", b.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((b) => {
        (b.gsap || b.default || b).to(w, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        w.forEach((b) => {
          b.style.opacity = "1", b.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const P = ge(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), A = be("nhsuk-product-roadmap", o), D = ho(r, 120, 1200, 400), S = ho(a, 1, 6, 2), B = De(() => e.map((y) => /* @__PURE__ */ new Date(y + " 01")), [e]), N = De(() => {
    if (B.length === 0) {
      const j = /* @__PURE__ */ new Date();
      return [j, j];
    }
    const y = new Date(B[0]), L = Cn.offset(new Date(B[B.length - 1]), 1);
    return [y, L];
  }, [B]), $ = De(() => cs().domain(N).range([0, B.length * D]), [N, B.length, D]), x = ge((y) => {
    if (y.startDate) {
      const z = new Date(y.startDate), R = new Date(y.endDate ?? y.startDate);
      R < z && R.setTime(z.getTime());
      const U = $(z), E = Cn.offset(new Date(R), 1);
      let I = $(E);
      Number.isFinite(I) || (I = U + D);
      const C = Math.max(D * 0.25, I - U), Z = U / D, oe = C / D;
      return { ...y, _pxLeft: U, _pxWidth: C, _startFraction: Z, _spanColumns: oe };
    }
    const L = y.date ?? 1, j = y.dateOffset ?? 0, w = y.length ?? 1, b = y.partialLength ?? 1, F = L - 1 + j, Q = w - 1 + b;
    return { ...y, _pxLeft: F * D, _pxWidth: Q * D, _startFraction: F, _spanColumns: Q };
  }, [$, D]), k = De(() => t.map((y) => {
    const j = y.roadmapItems.map((b) => {
      const F = !b.childItems && b.children ? { ...b, childItems: b.children } : { ...b };
      return x(F);
    }).sort((b, F) => b._pxLeft !== F._pxLeft ? b._pxLeft - F._pxLeft : F._pxWidth - b._pxWidth), w = [];
    return j.forEach((b) => {
      const F = b._pxLeft, Q = b._pxLeft + b._pxWidth;
      let z = w.findIndex((R) => R <= F);
      z === -1 && (z = w.length, w.push(0)), w[z] = Q, b.verticalPosition = z + 1;
    }), { ...y, roadmapItems: j, _laneCount: w.length };
  }), [t, x]), _ = De(() => k.map((y) => y._laneCount || 1), [k]), m = De(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: A,
      style: { "--column-width": `${D}px`, gridTemplateColumns: m },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": k.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((y, L) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": L + 2, children: y }, `${y}-${L}`))
        ] }),
        k.map((y, L) => {
          const j = L + 2, w = _[L];
          let b, F = 0, Q = [];
          i && d === "inline" && (Q = y.roadmapItems.filter((E) => p(E.id) && E.childItems && E.childItems.length).map((E) => ({ id: E.id, lane: E.verticalPosition || 1, count: E.childItems.length })).sort((E, I) => E.lane - I.lane), F = Q.reduce((E, I) => E + I.count, 0));
          const z = w + F;
          b = `calc((${z} * var(--roadmap-item-block-height)) + (max(0, ${z} - 1) * var(--roadmap-row-gap)))`;
          const R = {};
          let U = 0;
          return Q.forEach((E) => {
            U += E.count, R[E.lane + 1] = U;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": j, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: y.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: b }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: y.roadmapItems.map((E, I) => {
              const C = (E.verticalPosition || 1) - 1, Z = Q.filter((H) => H.lane - 1 < C).reduce((H, G) => H + G.count, 0), oe = C + Z, J = p(E.id), V = g.has(E.id);
              return /* @__PURE__ */ n.jsxs(rt.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Yf, { item: E, maxLines: S, enableDrilldown: i, onExpand: u, isActive: J, topLaneIndex: oe, laneOffset: Z }),
                i && d === "inline" && (J || V) && E.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": E.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${E.title} child tasks`, children: E.childItems.map((H, G) => {
                  const le = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let O = E._pxLeft, ie = E._pxWidth;
                  if (H.startDate) {
                    const ue = new Date(H.startDate);
                    let ve = H.endDate ? new Date(H.endDate) : new Date(ue);
                    ve < ue && (ve = new Date(ue));
                    const ce = new Date(ve);
                    ce.setDate(ce.getDate() + 1);
                    const he = $(ue);
                    let fe = $(ce);
                    (!Number.isFinite(fe) || fe <= he) && (fe = he + 6), O = he, ie = Math.max(6, fe - he);
                  }
                  const de = oe + 1 + G;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: be("nhsuk-product-roadmap__inline-child", H.status && `nhsuk-product-roadmap__inline-child--status-${H.status}`, !J && V && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${O}px`, width: `${ie}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${de})`, height: le, opacity: J ? 0 : void 0, transform: J ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: H.title })
                      ]
                    },
                    H.id ?? G
                  );
                }) })
              ] }, E.id ?? I);
            }) }) })
          ] }, `${y.heading}-${L}`);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const y = Array.from(f)[0], L = t.flatMap((j) => j.roadmapItems).find((j) => j.id === y);
          return !L || !L.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${L.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: L.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: P, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: L.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: L.childItems.map((j, w) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: j.title }),
                j.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: j.content })
              ] }, j.id ?? w)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: P, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Vf.displayName = "ProductRoadmap";
function ui(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ui(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function er() {
  for (var e, t, r = 0, a = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ui(e)) && (a && (a += " "), a += t);
  return a;
}
function Ke(e) {
  return function() {
    return e;
  };
}
const wa = Math.PI, Sa = 2 * wa, Ot = 1e-6, qf = Sa - Ot;
function fi(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Xf(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return fi;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * r) / r + a[o];
  };
}
class Kf {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? fi : Xf(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, a, o) {
    this._append`Q${+t},${+r},${this._x1 = +a},${this._y1 = +o}`;
  }
  bezierCurveTo(t, r, a, o, s, i) {
    this._append`C${+t},${+r},${+a},${+o},${this._x1 = +s},${this._y1 = +i}`;
  }
  arcTo(t, r, a, o, s) {
    if (t = +t, r = +r, a = +a, o = +o, s = +s, s < 0) throw new Error(`negative radius: ${s}`);
    let i = this._x1, l = this._y1, d = a - t, c = o - r, f = i - t, h = l - r, g = f * f + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (g > Ot) if (!(Math.abs(h * d - c * f) > Ot) || !s)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = a - i, T = o - l, p = d * d + c * c, u = v * v + T * T, P = Math.sqrt(p), A = Math.sqrt(g), D = s * Math.tan((wa - Math.acos((p + g - u) / (2 * P * A))) / 2), S = D / A, B = D / P;
      Math.abs(S - 1) > Ot && this._append`L${t + S * f},${r + S * h}`, this._append`A${s},${s},0,0,${+(h * v > f * T)},${this._x1 = t + B * d},${this._y1 = r + B * c}`;
    }
  }
  arc(t, r, a, o, s, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = r + d, h = 1 ^ i, g = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Ot || Math.abs(this._y1 - f) > Ot) && this._append`L${c},${f}`, a && (g < 0 && (g = g % Sa + Sa), g > qf ? this._append`A${a},${a},0,1,${h},${t - l},${r - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : g > Ot && this._append`A${a},${a},0,${+(g >= wa)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = r + a * Math.sin(s)}`);
  }
  rect(t, r, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function hi(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const a = Math.floor(r);
      if (!(a >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = a;
    }
    return e;
  }, () => new Kf(t);
}
function pi(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function mi(e) {
  this._context = e;
}
mi.prototype = {
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
function gi(e) {
  return new mi(e);
}
function xi(e) {
  return e[0];
}
function bi(e) {
  return e[1];
}
function yi(e, t) {
  var r = Ke(!0), a = null, o = gi, s = null, i = hi(l);
  e = typeof e == "function" ? e : e === void 0 ? xi : Ke(e), t = typeof t == "function" ? t : t === void 0 ? bi : Ke(t);
  function l(d) {
    var c, f = (d = pi(d)).length, h, g = !1, v;
    for (a == null && (s = o(v = i())), c = 0; c <= f; ++c)
      !(c < f && r(h = d[c], c, d)) === g && ((g = !g) ? s.lineStart() : s.lineEnd()), g && s.point(+e(h, c, d), +t(h, c, d));
    if (v) return s = null, v + "" || null;
  }
  return l.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ke(+d), l) : e;
  }, l.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ke(+d), l) : t;
  }, l.defined = function(d) {
    return arguments.length ? (r = typeof d == "function" ? d : Ke(!!d), l) : r;
  }, l.curve = function(d) {
    return arguments.length ? (o = d, a != null && (s = o(a)), l) : o;
  }, l.context = function(d) {
    return arguments.length ? (d == null ? a = s = null : s = o(a = d), l) : a;
  }, l;
}
function ka(e, t, r) {
  var a = null, o = Ke(!0), s = null, i = gi, l = null, d = hi(c);
  e = typeof e == "function" ? e : e === void 0 ? xi : Ke(+e), t = typeof t == "function" ? t : Ke(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? bi : Ke(+r);
  function c(h) {
    var g, v, T, p = (h = pi(h)).length, u, P = !1, A, D = new Array(p), S = new Array(p);
    for (s == null && (l = i(A = d())), g = 0; g <= p; ++g) {
      if (!(g < p && o(u = h[g], g, h)) === P)
        if (P = !P)
          v = g, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), T = g - 1; T >= v; --T)
            l.point(D[T], S[T]);
          l.lineEnd(), l.areaEnd();
        }
      P && (D[g] = +e(u, g, h), S[g] = +t(u, g, h), l.point(a ? +a(u, g, h) : D[g], r ? +r(u, g, h) : S[g]));
    }
    if (A) return l = null, A + "" || null;
  }
  function f() {
    return yi().defined(o).curve(i).context(s);
  }
  return c.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ke(+h), a = null, c) : e;
  }, c.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : Ke(+h), c) : e;
  }, c.x1 = function(h) {
    return arguments.length ? (a = h == null ? null : typeof h == "function" ? h : Ke(+h), c) : a;
  }, c.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ke(+h), r = null, c) : t;
  }, c.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : Ke(+h), c) : t;
  }, c.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : Ke(+h), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return f().x(e).y(t);
  }, c.lineY1 = function() {
    return f().x(e).y(r);
  }, c.lineX1 = function() {
    return f().x(a).y(t);
  }, c.defined = function(h) {
    return arguments.length ? (o = typeof h == "function" ? h : Ke(!!h), c) : o;
  }, c.curve = function(h) {
    return arguments.length ? (i = h, s != null && (l = i(s)), c) : i;
  }, c.context = function(h) {
    return arguments.length ? (h == null ? s = l = null : l = i(s = h), c) : s;
  }, c;
}
function po(e) {
  return e < 0 ? -1 : 1;
}
function mo(e, t, r) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (r - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (po(s) + po(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function go(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function ra(e, t, r) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * r, s, i);
}
function tr(e) {
  this._context = e;
}
tr.prototype = {
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
        ra(this, this._t0, go(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, ra(this, go(this, r = mo(this, e, t)), r);
          break;
        default:
          ra(this, this._t0, r = mo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(tr.prototype).point = function(e, t) {
  tr.prototype.point.call(this, t, e);
};
function nr(e) {
  return new tr(e);
}
function Zf(e, t, r) {
  const a = Lo(e, t);
  return cs().domain(a).range(r);
}
function xo(e, t, r) {
  const [a, o] = Lo(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Xn().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const d = o - a, c = (d > 0 ? d : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Xn().domain([i, l]).nice().range(r);
}
function Ca(e, t, r, a) {
  const o = yi().x(t).y(r);
  return a?.smooth !== !1 && o.curve(nr), o(e) ?? "";
}
function Jf(e = {}) {
  const t = Y.useRef(null), r = Y.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = Y.useState({ width: 0, height: 0 });
  Y.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((d) => {
      for (const c of d) {
        const { width: f, height: h } = c.contentRect;
        o({ width: f, height: h });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: r, ref: t };
}
const vi = Y.createContext(null);
function Rt() {
  return Y.useContext(vi);
}
const Qf = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Jf(t), d = { height: e, position: "relative" };
  return r !== void 0 && (d.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ n.jsx(vi.Provider, { value: l, children: o }) });
}, us = Y.createContext(null), Zt = () => Y.useContext(us), eh = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: d,
  yPadding: c
}) => {
  const f = Rt(), h = t ?? f?.innerWidth ?? 0, g = r ?? f?.innerHeight ?? 0, v = Y.useMemo(() => e.flatMap((S) => S.data), [e]), T = Y.useCallback((S) => {
    if (a) return a(S);
    const B = S.x;
    return B instanceof Date ? B : new Date(B);
  }, [a]), p = d ?? 6, u = c ?? 6, P = Y.useMemo(() => Zf(v, T, [p, Math.max(0, h - p)]), [v, T, h, p]), A = Y.useMemo(() => {
    if (l) {
      const S = xo([], (B) => B.y, [Math.max(0, g - u), u]);
      return S.domain(l), S;
    }
    return xo(v, (S) => S.y, [Math.max(0, g - u), u]);
  }, [v, g, l]), D = Y.useMemo(() => ({
    xScale: P,
    yScale: A,
    getXTicks: (S = s) => P.ticks(S),
    getYTicks: (S = i) => A.ticks(S)
  }), [P, A, s, i]);
  return /* @__PURE__ */ n.jsx(us.Provider, { value: D, children: o });
}, bo = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: d,
  maxTickLabelLength: c,
  autoMinLabelSpacing: f = e === "x",
  labelAngle: h = 0,
  allowLabelWrap: g = !0,
  tickFormatPreset: v
}) => {
  const T = Zt(), p = Rt(), u = t || (e === "x" ? T?.xScale : T?.yScale), P = r ?? (e === "x" ? 6 : 5), A = typeof o == "function", D = Y.useMemo(() => {
    if (A || !v) return;
    const N = ($) => new Intl.DateTimeFormat(void 0, $);
    switch (v) {
      case "dayShortMonth":
        return ($) => {
          const x = $ instanceof Date ? $ : new Date($);
          return `${x.getDate()}
${N({ month: "short" }).format(x)}`;
        };
      case "dayShortMonthYear":
        return ($) => {
          const x = $ instanceof Date ? $ : new Date($);
          return `${x.getDate()}
${N({ month: "short" }).format(x)} ${x.getFullYear()}`;
        };
      case "shortMonth":
        return ($) => {
          const x = $ instanceof Date ? $ : new Date($);
          return N({ month: "short" }).format(x);
        };
      case "shortMonthYear":
        return ($) => {
          const x = $ instanceof Date ? $ : new Date($);
          return `${N({ month: "short" }).format(x)} ${x.getFullYear()}`;
        };
      case "hourMinute":
        return ($) => {
          const x = $ instanceof Date ? $ : new Date($);
          return N({ hour: "2-digit", minute: "2-digit" }).format(x);
        };
      default:
        return;
    }
  }, [A, v]);
  let S = A ? o : D || ((N) => String(N));
  const B = Y.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(P) : u.domain ? u.domain() : [] : [], [u, P, a]);
  if (e === "x" && !A && !v && B.length && B.every((N) => N instanceof Date)) {
    const N = B[0], $ = B[B.length - 1], x = $.getTime() - N.getTime(), k = 24 * 3600 * 1e3, _ = 365 * k, m = N.getFullYear() === $.getFullYear(), y = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (x < 2 * k) {
      const L = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      S = (j) => L.format(j);
    } else if (x < 32 * k)
      S = (L) => {
        const j = L;
        return `${j.getDate()} ${y.format(j)}`;
      };
    else if (x < _ && m)
      S = (L) => y.format(L);
    else if (x < 2 * _) {
      const L = /* @__PURE__ */ new Set();
      S = (j) => {
        const w = j, b = w.getMonth();
        return L.has(b) || L.add(b), `${y.format(w)} ${w.getFullYear()}`;
      };
    } else
      S = (L) => String(L.getFullYear());
  }
  if (!u || !p) return null;
  if (e === "x") {
    const N = i ?? p.innerHeight, $ = typeof u.bandwidth == "function", x = $ ? u.bandwidth() : 0, k = (y) => {
      const L = u(y);
      return $ ? L + x / 2 : L;
    };
    let _ = d ?? 0;
    if (f && d == null) {
      const y = B.map((j) => S(j).replace(/\n.*/g, "")), L = y.length ? y.reduce((j, w) => j + w.length, 0) / y.length : 0;
      _ = Math.max(12, Math.round(L * 6 + 4));
    }
    const m = Y.useMemo(() => {
      if (a && Array.isArray(a) || _ <= 0) return B;
      const y = [];
      let L = -1 / 0;
      for (const j of B) {
        const w = k(j);
        w - L >= _ && (y.push(j), L = w);
      }
      return y;
    }, [B, u, _, a, $, x]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${N})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: p.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      m.map((y, L) => {
        const j = S(y), w = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, b = g ? w.split(/\n/) : [w.replace(/\n/g, " ")], F = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${k(y)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: F, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            b.map((Q, z) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: z === 0 ? 0 : "1.1em", children: Q }, z)),
            w !== j && /* @__PURE__ */ n.jsx("title", { children: j })
          ] })
        ] }, y?.toString?.() || L);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    B.map((N, $) => {
      const x = S(N), k = c && x.length > c ? x.slice(0, Math.max(1, c - 1)) + "…" : x, _ = g ? k.split(/\n/) : [k.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${u(N)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          _.map((m, y) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: y === 0 ? 0 : "1.1em", children: m }, y)),
          k !== x && /* @__PURE__ */ n.jsx("title", { children: x })
        ] })
      ] }, N?.toString?.() || $);
    }),
    s && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -p.innerHeight / 2, y: -p.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, th = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = Zt(), i = Rt();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(d), y2: s.yScale(d), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((d, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(d), x2: s.xScale(d), stroke: r, strokeDasharray: a }, c))
  ] });
}, nh = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, In = {
  color: nh
}, rh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Lr = {
  color: rh
}, ah = [
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
let aa = null, sa = null, oa = null, _i = "optimized";
function sh() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), o);
    if (typeof i == "string") return i;
  }, r = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const o = `color.data-viz.categorical.${a}`, s = t(o);
      if (!s) throw new Error(`Missing token ${o}`);
      r.push(s);
    }
    return r;
  } catch {
    return ah;
  }
}
function oh() {
  return aa || (aa = sh()), aa;
}
function ih(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ia(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function lh(e, t, r) {
  const a = ia(e), o = ia(t), s = ia(r), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, d = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function ch(e, t, r) {
  let i = e / 95.047, l = t / 100, d = r / 108.883;
  const c = (f) => f > 8856e-6 ? Math.cbrt(f) : 7.787 * f + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function wi(e) {
  const t = ih(e);
  if (!t) return null;
  const r = lh(t.r, t.g, t.b);
  return ch(r.x, r.y, r.z);
}
function yo(e, t) {
  const r = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(r * r + a * a + o * o);
}
function dh() {
  const e = oh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => wi(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let d = 0, c = 0;
    for (let h = 0; h < e.length; h++) i !== h && t[h] && (d += yo(l, t[h]), c++);
    const f = d / Math.max(1, c);
    f > a && (a = f, r = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(r), o.delete(r); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const d of o) {
      const c = t[d];
      if (!c) continue;
      let f = 1 / 0;
      for (const h of s) {
        const g = t[h];
        if (g) {
          const v = yo(c, g);
          v < f && (f = v);
        }
      }
      f > l && (l = f, i = d);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function uh() {
  return sa || (sa = dh()), sa;
}
function fh(e, t, r) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - r / 200, i = (f) => {
    const h = f * f * f;
    return h > 8856e-6 ? h : (f - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, d = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function hh(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, o = e * -0.9689 + t * 1.8758 + r * 0.0415, s = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function ph(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function mh(e, t) {
  const r = wi(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: o, Y: s, Z: i } = fh(a, r.a, r.b), l = hh(o, s, i);
  return ph(l.r, l.g, l.b);
}
function gh() {
  const e = uh(), r = [12, -12, 24, -24].map((o) => e.map((s) => mh(s, o))), a = [...e];
  return r.forEach((o) => a.push(...o)), a;
}
function xh() {
  return (!oa || bh()) && (oa = gh(), Si = _i), oa;
}
let Si = null;
function bh() {
  return Si !== _i;
}
function mt(e) {
  const t = xh();
  return t[e % t.length];
}
let on = null, jn = null, Nn = null, Tn = null;
function yh() {
  const e = In?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    on = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      on.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    jn = {}, Object.keys(r).forEach((s) => {
      const i = r[s]?.$value || r[s]?.value;
      typeof i == "string" && (jn[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    Tn = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (Tn[s] = i);
    }), Nn = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (Nn[s] = i);
    });
  }
}
function Fr() {
  (!on || !jn || !Nn || !Tn) && yh();
}
function qt(e) {
  return Fr(), on ? on[e % on.length] : "#212b32";
}
function vh(e) {
  return Fr(), jn ? jn[e] : void 0;
}
function rr(e, t) {
  return vh(e) || qt(t);
}
const ja = ["low", "moderate", "high", "critical"];
let la = null;
function _h() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, r = {};
  return ja.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (r[a] = o);
  }), r;
}
function ki() {
  return la || (la = _h()), la;
}
function wh(e) {
  return ki()[e.toLowerCase()];
}
function Sh(e, t) {
  return wh(e) || ki()[ja[t % ja.length]] || mt(t);
}
function kh(e) {
  return Fr(), Nn ? Nn[e] : void 0;
}
function Ch(e, t) {
  return kh(e) || qt(t);
}
const Na = ["trust", "ambulance", "icb", "region"];
let ca = null;
function jh() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, d) => l ? l[d] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Na.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (r[a] = o);
  }), r;
}
function Ci() {
  return ca || (ca = jh()), ca;
}
function Nh(e) {
  return Ci()[e.toLowerCase()];
}
function Th(e, t) {
  return Nh(e) || Ci()[Na[t % Na.length]] || mt(t);
}
function $h(e) {
  return Fr(), Tn ? Tn[e] : void 0;
}
function Dh(e, t) {
  return $h(e) || qt(t);
}
let da = null;
const Ih = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Mh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Lh() {
  const e = { color: { ...Lr.color, ...In.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return Ih.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? r[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function Fh() {
  return da || (da = Lh()), da;
}
function Ah(e) {
  return Fh()[Mh(e)];
}
function ln(e, t) {
  return Ah(e) || mt(t);
}
const ji = Y.createContext(null), Mn = () => Y.useContext(ji), Dx = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [o, s] = Y.useState(() => new Set(e)), i = r !== void 0, l = Y.useMemo(() => i ? new Set(r) : o, [i, r, o]), d = Y.useCallback((f) => {
    i || s(new Set(f)), a?.(Array.from(f));
  }, [i, a]), c = Y.useMemo(() => ({
    hiddenIds: l,
    isHidden: (f) => l.has(f),
    toggle: (f) => {
      const h = new Set(l);
      h.has(f) ? h.delete(f) : h.add(f), d(h);
    },
    showOnly: (f) => {
      d(/* @__PURE__ */ new Set());
    },
    showAll: () => d(/* @__PURE__ */ new Set()),
    setHidden: (f) => d(new Set(Array.isArray(f) ? f : Array.from(f)))
  }), [l, d]);
  return /* @__PURE__ */ n.jsx(ji.Provider, { value: c, children: t });
}, Ni = Y.createContext(null), Ht = () => Y.useContext(Ni), Eh = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = Zt(), o = Mn(), [s, i] = Y.useState(null), l = Y.useRef(/* @__PURE__ */ new Map()), [d, c] = Y.useState([]), f = Y.useCallback(
    ($, x) => {
      l.current.set($, x);
    },
    []
  ), h = Y.useCallback(($) => {
    l.current.delete($);
  }, []), g = Y.useCallback(
    ($, x) => {
      if (!a) return;
      const { xScale: k, yScale: _ } = a;
      let m = null, y = 1 / 0;
      l.current.forEach((L, j) => {
        L.forEach((w, b) => {
          const F = k(w.x), Q = _(w.y), z = F - $, R = Q - x, U = Math.sqrt(z * z + R * R);
          U < y && (y = U, m = {
            seriesId: j,
            index: b,
            x: w.x,
            y: w.y,
            clientX: F,
            clientY: Q
          });
        });
      }), m && y <= t ? i(m) : i(null);
    },
    [a, t]
  ), v = Y.useCallback(() => i(null), []);
  Y.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: $, yScale: x } = a, k = [];
    l.current.forEach((_, m) => {
      _.forEach((y, L) => {
        (s.x instanceof Date && y.x instanceof Date ? y.x.getTime() === s.x.getTime() : y.x === s.x) && k.push({
          seriesId: m,
          index: L,
          x: y.x,
          y: y.y,
          clientX: $(y.x),
          clientY: x(y.y)
        });
      });
    }), k.sort((_, m) => _.seriesId.localeCompare(m.seriesId)), c(k);
  }, [s, a]);
  const T = Y.useCallback(
    ($) => {
      if (!s) return;
      const x = l.current.get(s.seriesId);
      if (!x) return;
      let k = s.index + $;
      if (k < 0 || k >= x.length) {
        if (!r) return;
        k = (k + x.length) % x.length;
      }
      const _ = x[k];
      if (!a) return;
      const { xScale: m, yScale: y } = a;
      i({
        seriesId: s.seriesId,
        index: k,
        x: _.x,
        y: _.y,
        clientX: m(_.x),
        clientY: y(_.y)
      });
    },
    [s, a, r]
  ), p = Y.useCallback(
    ($) => {
      let x = Array.from(l.current.keys());
      if (o && (x = x.filter((F) => !o.isHidden(F))), x.length === 0) return;
      if (!s) {
        const F = x[0], Q = l.current.get(F);
        if (!Q || !a) return;
        const { xScale: z, yScale: R } = a, U = Q[0];
        i({
          seriesId: F,
          index: 0,
          x: U.x,
          y: U.y,
          clientX: z(U.x),
          clientY: R(U.y)
        });
        return;
      }
      const k = x.indexOf(s.seriesId);
      if (k === -1) return;
      let _ = k + $;
      if (_ < 0 || _ >= x.length) {
        if (!r) return;
        _ = (_ + x.length) % x.length;
      }
      const m = x[_], y = l.current.get(m);
      if (!y || !a) return;
      const L = Math.min(s.index, y.length - 1), j = y[L], { xScale: w, yScale: b } = a;
      i({
        seriesId: m,
        index: L,
        x: j.x,
        y: j.y,
        clientX: w(j.x),
        clientY: b(j.y)
      });
    },
    [s, a, r, o]
  ), u = Y.useCallback(() => {
    let $ = Array.from(l.current.keys());
    if (o && ($ = $.filter((L) => !o.isHidden(L))), $.length === 0) return;
    const x = s ? s.seriesId : $[0], k = l.current.get(x);
    if (!k || k.length === 0 || !a) return;
    const _ = k[0], { xScale: m, yScale: y } = a;
    i({
      seriesId: x,
      index: 0,
      x: _.x,
      y: _.y,
      clientX: m(_.x),
      clientY: y(_.y)
    });
  }, [s, a, o]), P = Y.useCallback(() => {
    let $ = Array.from(l.current.keys());
    if (o && ($ = $.filter((j) => !o.isHidden(j))), $.length === 0) return;
    const x = s ? s.seriesId : $[0], k = l.current.get(x);
    if (!k || k.length === 0 || !a) return;
    const _ = k.length - 1, m = k[_], { xScale: y, yScale: L } = a;
    i({
      seriesId: x,
      index: _,
      x: m.x,
      y: m.y,
      clientX: y(m.x),
      clientY: L(m.y)
    });
  }, [s, a, o]), A = Y.useCallback(
    () => T(1),
    [T]
  ), D = Y.useCallback(
    () => T(-1),
    [T]
  ), S = Y.useCallback(
    () => p(1),
    [p]
  ), B = Y.useCallback(
    () => p(-1),
    [p]
  ), N = Y.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: g,
      clear: v,
      registerSeries: f,
      unregisterSeries: h,
      focusNextPoint: A,
      focusPrevPoint: D,
      focusNextSeries: S,
      focusPrevSeries: B,
      focusFirstPoint: u,
      focusLastPoint: P
    }),
    [
      s,
      d,
      g,
      v,
      f,
      h,
      A,
      D,
      S,
      B,
      u,
      P
    ]
  );
  return /* @__PURE__ */ n.jsx(Ni.Provider, { value: N, children: e });
}, Bh = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: d = 1,
  smooth: c = !0,
  gradientFillId: f,
  colors: h
}) => {
  const g = Zt();
  if (!g) return null;
  const { xScale: v, yScale: T } = g, u = Mn()?.isHidden(e.id) ?? !1, P = u && l === "fade";
  if (u && l === "remove")
    return null;
  const A = Ht();
  Y.useEffect(() => {
    if (!A) return;
    const x = e.data.map((k) => ({ x: i(k), y: k.y }));
    return A.registerSeries(e.id, x), () => A.unregisterSeries(e.id);
  }, [A, e.id, e.data, i]);
  const D = Y.useMemo(
    () => Ca(
      e.data,
      (x) => v(i(x)),
      (x) => T(x.y),
      { smooth: c }
    ),
    [e.data, v, T, i, c]
  ), S = Y.useMemo(() => {
    if (!e.data.length) return "";
    const [x] = T.domain(), k = ka().x((_) => v(i(_))).y0(() => T(x)).y1((_) => T(_.y));
    return c && k.curve(nr), k(e.data) || "";
  }, [e.data, v, T, i, c]), B = h && h[t], N = e.color || B || (r === "region" ? ln(e.id, t) : mt(t)), $ = r === "region" ? rr(e.id, t) : qt(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: P ? 0.25 : 1,
      "aria-hidden": P ? !0 : void 0,
      children: [
        f && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: S,
            fill: `url(#${f})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: D,
            fill: "none",
            stroke: N,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((x, k) => {
          const _ = v(i(x)), m = T(x.y), y = o ? 0 : -1, L = !P && (o && k === s || A?.focused?.seriesId === e.id && A.focused.index === k), j = () => {
            A && !P && A.setFocused({
              seriesId: e.id,
              index: k,
              x: i(x),
              y: x.y,
              clientX: _,
              clientY: m
            });
          }, w = () => {
            A && A.focused?.seriesId === e.id && A.focused.index === k && A.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: _,
              cy: m,
              r: L ? 5 : 3.5,
              stroke: L ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : $,
              strokeWidth: L ? 2 : 1,
              fill: L ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : N,
              className: "fdp-line-point",
              tabIndex: P ? -1 : y,
              "aria-label": `${e.label || e.id} ${i(x).toDateString()} value ${x.y}`,
              "data-series": e.id,
              "data-index": k,
              onMouseEnter: j,
              onFocus: j,
              onMouseLeave: w,
              onBlur: w
            },
            k
          );
        })
      ]
    }
  );
}, Ph = ({ polite: e = !0, format: t }) => {
  const r = Ht(), [a, o] = Y.useState(""), s = Y.useRef("");
  return Y.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let d;
    if (l && l.length > 1) {
      const c = l.map((h) => `${h.seriesId} ${h.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Rh(i.seriesId, i.x, i.y, i.index);
    if (d !== s.current) {
      s.current = d, o("");
      const c = setTimeout(() => o(d), 10);
      return () => clearTimeout(c);
    }
  }, [r?.focused, t]), /* @__PURE__ */ n.jsx(
    "div",
    {
      "aria-live": e ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: a
    }
  );
};
function Rh(e, t, r, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${r}`;
}
const Ix = () => {
  const e = Ht(), t = Rt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(r.clientX, 0), o), l = Math.min(Math.max(r.clientY, 0), s), d = i + 8, c = l - 8, f = a.length > 1, h = r.x instanceof Date ? r.x.toDateString() : String(r.x), g = f ? h : `${h} • ${r.y}`, v = /\d+$/.exec(r.seriesId || ""), T = v ? parseInt(v[0], 10) - 1 : 0, p = mt(T >= 0 ? T : 0) || "#005eb8", u = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: u, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: u, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: p, stroke: "#fff", strokeWidth: 0.5 }),
    f ? (() => {
      const A = a.map(($) => `${$.seriesId}: ${$.y}`), D = [g, ...A], S = D.reduce(($, x) => Math.max($, x.length), 0), B = Math.max(90, S * 6.2 + 16), N = 16 * D.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: d, y: c - N, rx: 4, ry: 4, width: B, height: N, fill: "#212b32", opacity: 0.92 }),
        D.map(($, x) => /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - N + 6 + 16 * (x + 0.7), fill: "#fff", fontSize: 12, children: $ }, x))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, g.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: g })
    ] })
  ] });
}, Mx = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: d
}) => {
  const c = Mn(), f = !!(c && !a && !l && s === void 0), h = a || f, g = e || [], v = s !== void 0, [T, p] = Y.useState(new Set(i)), u = v ? new Set(s) : T, [P, A] = Y.useState(""), D = (S) => {
    if (f && c) {
      const y = c.isHidden(S);
      c.toggle(S);
      const j = g.find((b) => b.id === S)?.label || S, w = d ? d(S, y, j) : `${j} ${y ? "shown" : "hidden"}`;
      A(w);
      return;
    }
    if (!h) return;
    const B = new Set(u), N = B.has(S);
    N ? B.delete(S) : B.add(S), v || p(B);
    const $ = g.filter((y) => !B.has(y.id)).map((y) => y.id), x = Array.from(B);
    l?.($, x);
    const _ = g.find((y) => y.id === S)?.label || S, m = d ? d(S, N, _) : `${_} ${N ? "shown" : "hidden"}`;
    A(m);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: g.map((S, B) => {
      const N = S.palette || t, $ = S.color || (N === "region" ? ln(S.id, B) : N === "severity" ? Sh(S.id, B) : N === "org-level" ? Th(S.id, B) : mt(B));
      let x = S.stroke || (N === "region" ? rr(S.id, B) : N === "severity" ? Ch(S.id, B) : N === "org-level" ? Dh(S.id, B) : qt(B));
      if (o && x) {
        const m = x.trim().toLowerCase();
        (m === "#fff" || m === "#ffffff" || m === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(m)) && (x = "#212b32");
      }
      const k = f && c ? c.isHidden(S.id) : u.has(S.id), _ = h ? {
        "aria-pressed": !k,
        "aria-label": `${S.label} (${k ? "show" : "hide"})`,
        onClick: () => D(S.id)
      } : { "aria-label": S.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${k ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: $,
              backgroundImage: S.patternDataUrl ? `url(${S.patternDataUrl})` : void 0,
              backgroundSize: S.patternDataUrl ? "auto" : void 0,
              borderColor: x
            },
            ..._
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: S.label })
      ] }, S.id);
    }) }),
    h && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: P })
  ] });
}, Lx = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: d,
  gradientFill: c = !0,
  colors: f
}) => {
  const h = Zt();
  if (!h) return null;
  const { xScale: g, yScale: v } = h, p = Mn()?.isHidden(e.id) ?? !1, u = p && s === "fade";
  if (p && s === "remove") return null;
  const P = Ht();
  Y.useEffect(() => {
    if (!P) return;
    const $ = e.data.map((x) => ({ x: a(x), y: x.y }));
    return P.registerSeries(e.id, $), () => P.unregisterSeries(e.id);
  }, [P, e.id, e.data, a]);
  const A = f && f[t], D = e.color || A || (r === "region" ? ln(e.id, t) : mt(t)), S = Y.useMemo(() => d && d.length === e.data.length ? Ca(
    e.data,
    ($) => g(a($)),
    ($) => {
      const x = e.data.indexOf($);
      return v(d[x].y1);
    },
    { smooth: l }
  ) : Ca(
    e.data,
    ($) => g(a($)),
    ($) => v($.y),
    { smooth: l }
  ), [e.data, d, g, v, a, l]), B = Y.useMemo(() => {
    if (d && d.length === e.data.length) {
      const m = ka().x((y) => g(a(y))).y0((y, L) => v(d[L].y0)).y1((y, L) => v(d[L].y1));
      return l && m.curve(nr), m(e.data) || "";
    }
    const [$, x] = v.domain();
    let k = i;
    k < $ ? k = $ : k > x && (k = x);
    const _ = ka().x((m) => g(a(m))).y0(() => v(k)).y1((m) => v(m.y));
    return l && _.curve(nr), _(e.data) || "";
  }, [e.data, d, g, v, a, i, l]), N = Y.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: u ? 0.25 : 1,
      "aria-hidden": u ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: N, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: D, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: D, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: B,
            fill: c ? `url(#${N})` : D,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ n.jsx("path", { d: S, fill: "none", stroke: D, strokeWidth: 1 })
      ]
    }
  );
}, Fx = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: d,
  adaptive: c = !1,
  adaptiveGroupOccupancy: f = 0.9,
  visibilityMode: h = "remove",
  colorMode: g = "series",
  allSeries: v,
  stacked: T,
  gapRatio: p = 0.15,
  minBarWidth: u,
  gradientFill: P = !0,
  gradientStrokeMatch: A = !0,
  opacity: D = 1,
  fadedOpacity: S = 0.25,
  flatFillOpacity: B = 1,
  colors: N
}) => {
  const $ = Math.max(0, p), x = Zt(), k = Rt();
  if (!x || !k) return null;
  const { xScale: _, yScale: m } = x, L = Mn()?.isHidden(e.id) ?? !1, j = L && h === "fade";
  if (L && h === "remove") return null;
  const w = Ht();
  Y.useEffect(() => {
    if (!w) return;
    const H = e.data.map((G) => ({ x: o(G), y: G.y }));
    return w.registerSeries(e.id, H), () => w.unregisterSeries(e.id);
  }, [w, e.id, e.data, o]);
  const b = typeof _.bandwidth == "function", F = b ? _.bandwidth() : void 0, Q = Y.useMemo(() => {
    if (F != null) return F;
    const H = v && v.length ? v : [e], G = [];
    H.forEach((se) => {
      se.data.forEach((de) => {
        const ue = _(o(de));
        Number.isFinite(ue) && G.push(ue);
      });
    });
    const le = G.sort((se, de) => se - de);
    if (le.length <= 1) return 40;
    const O = [];
    for (let se = 1; se < le.length; se++)
      O.push(le[se] - le[se - 1]);
    return O.sort((se, de) => se - de), (O[Math.floor(O.length / 2)] || 40) * i;
  }, [e.data, v, _, o, i, F]), { basePerBar: z } = Y.useMemo(() => {
    if (b) {
      const le = Q, O = Math.max(
        1,
        (le - l * (r - 1)) / r
      ), ie = e.barWidth ?? d;
      let se = ie ? Math.min(ie, le) : O;
      if (c) {
        const de = le * Math.min(1, Math.max(0.05, f)), ue = Math.max(
          1,
          (de - l * (r - 1)) / r
        );
        se = ie ? Math.min(se, ue) : ue;
      }
      return { basePerBar: se };
    }
    const H = e.barWidth ?? d, G = Math.max(
      1,
      (Q - l * (r - 1)) / r
    );
    if (c) {
      const le = v && v.length ? v : [e], O = [];
      le.forEach(
        (ce) => ce.data.forEach((he) => {
          const fe = _(o(he));
          Number.isFinite(fe) && O.push(fe);
        })
      ), O.sort((ce, he) => ce - he);
      const ie = [];
      for (let ce = 1; ce < O.length; ce++)
        ie.push(O[ce] - O[ce - 1]);
      ie.sort((ce, he) => ce - he);
      const de = (ie[Math.floor(ie.length / 2)] || Q) * Math.min(1, Math.max(0.05, f)), ue = Math.max(
        1,
        (de - l * (r - 1)) / r
      );
      return { basePerBar: H ? Math.min(H, ue) : ue };
    }
    return H ? { basePerBar: Math.min(H, G) } : { basePerBar: G };
  }, [
    b,
    Q,
    l,
    r,
    d,
    e.barWidth,
    c,
    f,
    v,
    _,
    o
  ]), R = Y.useMemo(() => {
    if (b) return [];
    const H = [];
    return (v && v.length ? v : [e]).forEach(
      (le) => le.data.forEach((O) => {
        const ie = _(o(O));
        Number.isFinite(ie) && H.push(ie);
      })
    ), H.sort((le, O) => le - O), Array.from(new Set(H));
  }, [b, v, e, _, o]), U = Y.useMemo(() => {
    if (b)
      return [];
    if (!R.length) return [];
    if (R.length === 1)
      return [
        { center: R[0], left: 0, right: k.innerWidth }
      ];
    const H = [];
    for (let G = 0; G < R.length; G++) {
      const le = R[G], O = G === 0 ? 0 : (R[G - 1] + le) / 2, ie = G === R.length - 1 ? k.innerWidth : (le + R[G + 1]) / 2;
      H.push({
        center: le,
        left: Math.max(0, O),
        right: Math.min(k.innerWidth, ie)
      });
    }
    return H;
  }, [b, R, k.innerWidth]), E = Y.useMemo(() => {
    if (b || !U.length)
      return;
    const H = Math.min(1, Math.max(0.05, i)), G = U.map((de) => Math.max(2, de.right - de.left)), le = G.map(
      (de) => Math.max(2, Math.min(de - 1, de * H))
    );
    let O = Math.min(...le);
    if (u)
      if (r <= 1) {
        const de = Math.min(...G.map((ue) => ue - 1));
        de >= u && O < u && (O = Math.min(de, u));
      } else {
        const de = Math.min(...G.map((ve) => ve - 1)), ue = u * r + (r - 1) * (u * $);
        ue <= de && O < ue && (O = ue);
      }
    if (r <= 1)
      return u && O < u && G.every((ue) => ue >= u) ? { groupWidth: u, barWidth: u } : { groupWidth: O, barWidth: O };
    let ie = O / (r + (r - 1) * $);
    return ie < 1 && (ie = 1), u && ie < u && u * r + (r - 1) * (u * $) <= O && (ie = u), { groupWidth: ie * r + (r - 1) * (ie * $), barWidth: ie };
  }, [
    b,
    U,
    i,
    r,
    $,
    u
  ]), I = N && N[t] ? N[t] : void 0, C = e.color || I || (a === "region" ? ln(e.id, t) : mt(t)), Z = a === "region" ? rr(e.id, t) : qt(t), oe = A && (e.color || I) ? C : Z, J = Number.isFinite(m(0)) ? m(0) : m.range()[0], V = Y.useId();
  return T && T.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: j ? S : D,
      "aria-hidden": j ? !0 : void 0,
      children: [
        P && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: V,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: C,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: C,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((H, G) => {
          const le = o(H), O = _(b ? H.x : le);
          let ie, se;
          if (b)
            ie = Q, se = O;
          else {
            const ne = U.find(
              (ee) => Math.abs(ee.center - O) < 0.5
            );
            if (!ne || !E)
              ie = z, se = O - z / 2;
            else {
              const { groupWidth: ee } = E;
              ie = ee;
              let M = O - ee / 2;
              M < ne.left && (M = ne.left), M + ee > ne.right && (M = Math.max(ne.left, ne.right - ee)), se = M;
            }
          }
          const de = T[G], ue = m(de.y0), ve = m(de.y1), ce = Math.min(ue, ve), he = Math.abs(ve - ue) || 1;
          if (!b && u && ie < u) {
            const ne = U.find(
              (ee) => Math.abs(ee.center - O) < 0.5
            );
            if (ne) {
              const ee = Math.max(2, ne.right - ne.left - 1), M = Math.min(ee, u);
              M > ie && (ie = M, se = Math.max(
                ne.left,
                Math.min(ne.right - ie, O - ie / 2)
              ));
            }
          }
          const fe = !j && w?.focused?.seriesId === e.id && w.focused.index === G, X = () => {
            !w || j || w.setFocused({
              seriesId: e.id,
              index: G,
              x: le,
              y: de.y1 - de.y0,
              clientX: se + ie / 2,
              clientY: ce
            });
          }, W = () => {
            w?.focused?.seriesId === e.id && w.focused.index === G && w.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: se,
              y: ce,
              width: ie,
              height: he,
              fill: P ? `url(#${V})` : C,
              ...P ? {} : { fillOpacity: B },
              stroke: fe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : P && A ? C : void 0,
              strokeWidth: fe ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: j || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${le instanceof Date ? le.toDateString() : le} value ${de.y1 - de.y0}`,
              onMouseEnter: X,
              onFocus: X,
              onMouseLeave: W,
              onBlur: W
            },
            G
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: j ? S : D,
      "aria-hidden": j ? !0 : void 0,
      children: [
        P && /* @__PURE__ */ n.jsxs("defs", { children: [
          g === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: V,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: C,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: C,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          g === "category" && e.data.map((H, G) => {
            const O = N && N[G] || (a === "region" ? ln(String(H.x), G) : mt(G)), ie = `${V}-${G}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: ie,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: O, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: O, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: O, stopOpacity: 0.06 })
                ]
              },
              ie
            );
          })
        ] }),
        e.data.map((H, G) => {
          const le = o(H), O = _(b ? H.x : le);
          let ie, se;
          if (b) {
            const te = Q;
            if (r <= 1)
              se = te, ie = O;
            else {
              se = Math.max(
                1,
                te / (r + (r - 1) * $)
              );
              const re = se * $, K = se * r + re * (r - 1);
              ie = O + (te - K) / 2 + t * (se + re);
            }
          } else {
            const te = U.find((re) => re.center === O);
            if (!te || !E)
              se = z, ie = O - z / 2, u && se < u && (se = u, ie = O - se / 2);
            else {
              const { barWidth: re } = E;
              se = re;
              const K = r > 1 ? re * $ : 0, ae = se * r + K * (r - 1);
              let _e = O - ae / 2;
              _e < te.left && (_e = te.left), _e + ae > te.right && (_e = Math.max(te.left, te.right - ae)), ie = _e + t * (se + K);
            }
            if (u && se < u) {
              const re = U.find(
                (K) => Math.abs(K.center - O) < 0.5
              );
              if (re) {
                const K = Math.max(2, re.right - re.left - 1), ae = Math.min(K, u);
                if (ae > se)
                  if (r <= 1)
                    se = ae, ie = Math.max(
                      re.left,
                      Math.min(re.right - se, O - se / 2)
                    );
                  else {
                    const _e = ae * $, Se = ae * r + _e * (r - 1);
                    if (Se <= re.right - re.left - 1) {
                      se = ae;
                      const je = Se;
                      let Ne = O - je / 2;
                      Ne < re.left && (Ne = re.left), Ne + je > re.right && (Ne = Math.max(
                        re.left,
                        re.right - je
                      )), ie = Ne + t * (se + _e);
                    }
                  }
              }
            }
          }
          const de = ie + se / 2, ue = m(H.y), ve = Math.min(J, ue), ce = Math.abs(J - ue), he = !j && w?.focused?.seriesId === e.id && w.focused.index === G, fe = () => {
            !w || j || w.setFocused({
              seriesId: e.id,
              index: G,
              x: le,
              y: H.y,
              clientX: de,
              clientY: ue
            });
          }, X = () => {
            w?.focused?.seriesId === e.id && w.focused.index === G && w.clear();
          }, W = g === "category" && N ? N[G] : void 0, ne = g === "category" ? W || (a === "region" ? ln(String(H.x), G) : mt(G)) : C, ee = g === "category" ? `${V}-${G}` : V, M = P && A ? ne : g === "category" ? a === "region" ? rr(String(H.x), G) : qt(G) : oe, q = he ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : M || ne;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: ie,
              y: ve,
              width: se,
              height: ce || 1,
              fill: P ? `url(#${ee})` : ne,
              ...P ? {} : { fillOpacity: B },
              stroke: q,
              strokeWidth: he ? 2 : 1,
              className: "fdp-bar",
              tabIndex: j || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${le instanceof Date ? le.toDateString() : le} value ${H.y}`,
              onMouseEnter: fe,
              onFocus: fe,
              onMouseLeave: X,
              onBlur: X
            },
            G
          );
        })
      ]
    }
  );
}, Ax = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = Rt(), d = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, f = Y.useMemo(() => e.flatMap((u) => u.data), [e]), h = Y.useMemo(() => {
    const u = /* @__PURE__ */ new Set();
    return f.forEach((P) => u.add(P.x)), Array.from(u);
  }, [f]), g = Y.useMemo(
    () => Math.max(0, ...f.map((u) => u.y)),
    [f]
  ), v = Y.useMemo(
    () => Ao().domain(h).range([0, d]).paddingInner(a).paddingOuter(o),
    [h, d, a, o]
  ), T = Y.useMemo(
    () => Xn().domain([0, g]).nice().range([c, 0]),
    [g, c]
  ), p = Y.useMemo(
    () => ({
      xScale: v,
      yScale: T,
      getXTicks: () => h,
      getYTicks: (u = i) => T.ticks(u)
    }),
    [v, T, h, i]
  );
  return /* @__PURE__ */ n.jsx(us.Provider, { value: p, children: s });
}, Ex = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const d = Y.useId(), c = s || d, f = t ? `${c}-desc` : void 0, h = r ? `${c}-src` : void 0, g = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: er("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": er(f, h),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: f, className: "fdp-chart__description", children: t }),
        !g && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(ya, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(ya, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: h, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, Bx = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const o = Y.useRef(null);
  return Y.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const d = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), d.push(c));
      }), d.length && t && t(d);
    };
    if (r > 0) {
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: o, children: a });
}, Px = ({
  label: e,
  value: t,
  unit: r,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: d,
  loading: c = !1,
  error: f,
  valueFormatter: h,
  className: g,
  id: v,
  announceDelta: T = !0
}) => {
  const p = Y.useId(), u = v || p, P = `${u}-label`, A = `${u}-value`, D = `${u}-delta`, S = typeof t == "number" && !Number.isNaN(t), B = c ? "—" : f ? "" : S ? h ? h(t) : t.toLocaleString() : t;
  let N, $ = "", x = "";
  if (a && !c && !f) {
    N = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const k = Math.abs(a.value), _ = N === "up" ? `+${k}` : N === "down" ? `-${k}` : "0", m = a.isPercent ? "%" : "";
    if ($ = `${_}${m}`, a.ariaLabel)
      x = a.ariaLabel;
    else {
      const y = a.invert ? N === "down" : N === "up";
      x = `${N === "neutral" ? "no change" : N === "up" ? "up" : "down"} ${k}${m}${N === "neutral" ? "" : y ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: er(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        f && "fdp-metric-card--error",
        g
      ),
      role: "group",
      "aria-labelledby": P,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: P, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: A, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : f ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: f }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: B }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: D,
              "aria-label": x,
              className: er(
                "fdp-metric-card__delta",
                N && `fdp-metric-card__delta--${N}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: $ }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        T && a && !a.ariaLabel && !c && !f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: x })
      ] })
    }
  );
};
var fs = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(fs || {}), ft = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(ft || {}), Ue = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Ue || {}), Pt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Pt || {}), Et = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Et || {}), Ti = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Ti || {}), $i = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))($i || {}), Di = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(Di || {});
const me = (e) => typeof e == "number" && Number.isFinite(e), Hh = (e) => e.reduce((t, r) => t + r, 0), ht = (e) => e.length ? Hh(e) / e.length : NaN;
function zh(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function Wh(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((f, h) => ({ idx: h, value: f.value })).filter((f) => me(f.value));
  if (o.length < a * 2) return;
  const s = r === "Up" || r === "Neither", i = r === "Down";
  function l(f, h) {
    const g = o.slice(f, h).map((v) => v.value);
    return g.length ? ht(g) : NaN;
  }
  let d = null;
  if (o.length > 1) {
    const f = [];
    for (let g = 1; g < o.length; g++) f.push(Math.abs(o[g].value - o[g - 1].value));
    const h = ht(f);
    me(h) && h > 0 && (d = h * (2.66 / 3));
  }
  if (!d || d <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let f = a; f <= o.length - a; f++) {
    const h = f - a, g = l(h, f), v = l(f, f + a);
    if (!me(g) || !me(v)) continue;
    const p = (v - g) / d;
    if (!(s ? p >= c : i ? -p >= c : Math.abs(p) >= c)) continue;
    const P = o.slice(f, f + a).map((S) => S.value);
    if (!(s ? P.every((S) => S > g) : i ? P.every((S) => S < g) : P.every((S) => s ? S > g : S < g))) continue;
    const D = o[f].idx;
    e[D].baseline || (e[D].baseline = !0);
    return;
  }
}
function Ii(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && me(s)) {
      if (a !== null) {
        const i = e[a];
        r[o] = me(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return r;
}
function Mi(e, t) {
  const r = e.filter((s) => me(s));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = ht(r), o = 3.267 * a;
  if (t) {
    const s = r.filter((i) => i <= o);
    s.length && s.length !== r.length && (a = ht(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function Oh(e, t) {
  if (!me(e) || !me(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = 2.66, a = 2 / 3 * r, o = 1 / 3 * r;
  return {
    upperProcessLimit: e + r * t,
    lowerProcessLimit: e - r * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + o * t,
    lowerOneSigma: e - o * t
  };
}
const Uh = 0.2777, Gh = 3.6, Yh = (e) => me(e) && e >= 0 ? Math.pow(e, Uh) : null, Wt = (e) => me(e) && e >= 0 ? Math.pow(e, Gh) : null, tn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Vh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function qh(e) {
  if (!me(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), r = (f) => Vh(f, t) - 1, a = r(0.5), o = Math.max(0, r(tn.three.low)), s = r(tn.three.high), i = Math.max(0, r(tn.one.low)), l = r(tn.one.high), d = Math.max(0, r(tn.two.low)), c = r(tn.two.high);
  return {
    cl: a,
    lcl: o,
    ucl: s,
    oneLow: i,
    oneHigh: l,
    twoLow: d,
    twoHigh: c
  };
}
function Xh(e, t, r) {
  const a = e.map((x) => me(x) ? Yh(x) : null), o = Ii(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = Mi(o, !!r), i = a.filter((x, k) => !t[k] && me(x)), l = i.length ? ht(i) : NaN;
  if (!me(l) || !me(s))
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: o,
      mrMean: null,
      mrUcl: null
    };
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, g = l - d * s, v = l + c * s, T = l - c * s, p = l + f * s, u = l - f * s, P = Wt(l), A = Wt(h), D = g <= 0 ? null : Wt(g), S = Wt(p), B = u <= 0 ? null : Wt(u), N = Wt(v), $ = T <= 0 ? null : Wt(T);
  return {
    center: P ?? null,
    upperProcessLimit: A ?? null,
    lowerProcessLimit: D ?? null,
    upperTwoSigma: N ?? null,
    lowerTwoSigma: $ ?? null,
    upperOneSigma: S ?? null,
    lowerOneSigma: B ?? null,
    mr: o,
    mrMean: s,
    mrUcl: me(s) ? 3.267 * s : null
  };
}
function Li(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: o = {}
  } = e, s = {
    excludeMovingRangeOutliers: !1,
    specialCauseShiftPoints: 6,
    specialCauseTrendPoints: 6,
    enableFourOfFiveRule: !1,
    minimumPoints: 13,
    minimumPointsWarning: !1,
    minimumPointsPartition: 12,
    maximumPointsPartition: null,
    maximumPoints: null,
    variationIconConflictWarning: !0,
    nullValueWarning: !0,
    targetSuppressedWarning: !0,
    ghostOnRareEventWarning: !0,
    partitionSizeWarnings: !0,
    baselineSpecialCauseWarning: !0,
    maximumPointsWarnings: !0,
    assuranceCapabilityMode: !0,
    collapseClusterRules: !0,
    baselineSuggest: !1,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    precedenceStrategy: "legacy",
    emergingDirectionGrace: !1,
    trendSideGatingEnabled: !0,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const i = a.map((p, u) => ({
    rowId: u + 1,
    x: p.x,
    value: me(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: me(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      Wh(i, o, r);
    } catch {
    }
  const l = zh(i), d = [], c = [], h = i.filter(
    (p) => !p.ghost && me(p.value)
  ).length >= (s.minimumPoints ?? 13);
  let g = 0;
  const v = {};
  for (const p of l) {
    g++;
    const u = p.map((m) => m.value), P = p.map((m) => m.ghost);
    let A = new Array(u.length).fill(null), D = NaN, S = NaN, B = NaN, N = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      A = Ii(u, P);
      const m = u.filter(
        (L, j) => !P[j] && me(L)
      );
      D = m.length ? ht(m) : NaN;
      const y = Mi(
        A,
        !!s.excludeMovingRangeOutliers
      );
      S = y.mrMean, B = y.mrUcl, N = Oh(D, S);
    } else if (t === "T") {
      const m = Xh(
        u,
        P,
        !!s.excludeMovingRangeOutliers
      );
      A = m.mr, S = m.mrMean ?? NaN, B = m.mrUcl ?? NaN, D = m.center ?? NaN, N = {
        upperProcessLimit: m.upperProcessLimit,
        lowerProcessLimit: m.lowerProcessLimit,
        upperTwoSigma: m.upperTwoSigma,
        lowerTwoSigma: m.lowerTwoSigma,
        upperOneSigma: m.upperOneSigma,
        lowerOneSigma: m.lowerOneSigma
      };
    } else if (t === "G") {
      const m = u.filter(
        (j, w) => !P[w] && me(j)
      ), y = m.length ? ht(m) : NaN, L = qh(y);
      D = L.cl ?? NaN, N = {
        upperProcessLimit: L.ucl,
        lowerProcessLimit: L.lcl,
        upperTwoSigma: L.twoHigh,
        lowerTwoSigma: L.twoLow,
        upperOneSigma: L.oneHigh,
        lowerOneSigma: L.oneLow
      }, A = new Array(u.length).fill(null), S = NaN, B = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const $ = p.map((m, y) => {
      const L = !m.ghost && me(m.value) ? u.slice(0, y + 1).filter((F, Q) => !P[Q] && me(F)).length : 0, j = h, w = j ? N : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: m.rowId,
        x: m.x,
        value: me(m.value) ? m.value : null,
        ghost: m.ghost,
        partitionId: g,
        pointRank: L,
        mean: j && me(D) ? D : null,
        mr: me(A[y]) ? A[y] : null,
        mrMean: j && me(S) ? S : null,
        mrUcl: j && me(B) ? B : null,
        upperProcessLimit: me(w.upperProcessLimit) ? w.upperProcessLimit : null,
        lowerProcessLimit: me(w.lowerProcessLimit) ? w.lowerProcessLimit : null,
        upperTwoSigma: me(w.upperTwoSigma) ? w.upperTwoSigma : null,
        lowerTwoSigma: me(w.lowerTwoSigma) ? w.lowerTwoSigma : null,
        upperOneSigma: me(w.upperOneSigma) ? w.upperOneSigma : null,
        lowerOneSigma: me(w.lowerOneSigma) ? w.lowerOneSigma : null,
        target: me(m.target) ? m.target : null,
        specialCauseSinglePointAbove: !1,
        specialCauseSinglePointBelow: !1,
        specialCauseTwoOfThreeAbove: !1,
        specialCauseTwoOfThreeBelow: !1,
        specialCauseFourOfFiveAbove: !1,
        specialCauseFourOfFiveBelow: !1,
        specialCauseShiftHigh: !1,
        specialCauseShiftLow: !1,
        specialCauseTrendIncreasing: !1,
        specialCauseTrendDecreasing: !1,
        specialCauseFifteenInnerThird: !1,
        variationIcon: "none",
        assuranceIcon: "none",
        upperBaseline: j && me(D) ? D : null,
        lowerBaseline: j && me(D) ? D : null,
        movingRangeHighPointValue: j && me(B) ? B : null,
        ghostValue: m.ghost && me(m.value) ? m.value : null,
        ghostFlag: !!m.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    v[g] = $.filter(
      (m) => !m.ghost && me(m.value)
    ).length;
    const x = s.specialCauseShiftPoints ?? 6, k = s.specialCauseTrendPoints ?? 6, _ = [];
    for (let m = 0; m < $.length; m++) {
      const y = $[m], L = y.value;
      if (!y.ghost && me(L) && _.push(m), !(me(y.mean) && me(y.upperProcessLimit) && me(y.lowerProcessLimit)) || y.ghost || !me(L)) {
        d.push(y);
        continue;
      }
      y.specialCauseSinglePointAbove = me(y.upperProcessLimit) ? L > y.upperProcessLimit : !1, y.specialCauseSinglePointBelow = me(y.lowerProcessLimit) ? L < y.lowerProcessLimit : !1, d.push(y);
    }
    if (_.length) {
      const m = (j) => $[j];
      let y = [], L = [];
      for (const j of _) {
        const w = m(j);
        if (!me(w.mean) || !me(w.value)) {
          y = [], L = [];
          continue;
        }
        if (w.value > w.mean ? (y.push(j), L = []) : w.value < w.mean ? (L.push(j), y = []) : (y = [], L = []), y.length >= x)
          for (const b of y) m(b).specialCauseShiftHigh = !0;
        if (L.length >= x)
          for (const b of L) m(b).specialCauseShiftLow = !0;
      }
      for (let j = 0; j <= _.length - 3; j++) {
        const b = _.slice(j, j + 3).map(m);
        if (!b.every((oe) => me(oe.mean) && me(oe.value))) continue;
        const F = b[0].mean, Q = b.every((oe) => oe.value > F), z = b.every((oe) => oe.value < F);
        if (!Q && !z) continue;
        const R = b[0].upperTwoSigma ?? 1 / 0, U = b[0].lowerTwoSigma ?? -1 / 0, E = b[0].upperProcessLimit ?? 1 / 0, I = b[0].lowerProcessLimit ?? -1 / 0, C = b.filter((oe) => oe.value > R && oe.value <= E), Z = b.filter((oe) => oe.value < U && oe.value >= I);
        if (Q && C.length >= 2)
          for (const oe of C) oe.specialCauseTwoOfThreeAbove = !0;
        if (z && Z.length >= 2)
          for (const oe of Z) oe.specialCauseTwoOfThreeBelow = !0;
      }
      if (s.enableFourOfFiveRule)
        for (let j = 0; j <= _.length - 5; j++) {
          const b = _.slice(j, j + 5).map(m);
          if (!b.every((E) => me(E.mean) && me(E.value))) continue;
          const F = b[0].mean;
          if (!b.every((E) => E.value > F) && !b.every((E) => E.value < F)) continue;
          const Q = b[0].upperOneSigma ?? 1 / 0, z = b[0].lowerOneSigma ?? -1 / 0, R = b.filter((E) => E.value > Q), U = b.filter((E) => E.value < z);
          if (b.every((E) => E.value > F) && R.length >= 4)
            for (const E of R) E.specialCauseFourOfFiveAbove = !0;
          if (b.every((E) => E.value < F) && U.length >= 4)
            for (const E of U) E.specialCauseFourOfFiveBelow = !0;
        }
      for (let j = 0; j <= _.length - k; j++) {
        const w = _.slice(j, j + k), b = w.map(m);
        if (!b.every((z) => me(z.value))) continue;
        let F = !0, Q = !0;
        for (let z = 1; z < b.length && (b[z].value > b[z - 1].value || (F = !1), b[z].value < b[z - 1].value || (Q = !1), !(!F && !Q)); z++)
          ;
        if (F) for (const z of w) m(z).specialCauseTrendIncreasing = !0;
        if (Q) for (const z of w) m(z).specialCauseTrendDecreasing = !0;
      }
      if (s.enableFifteenInInnerThirdRule) {
        let j = [];
        for (const w of _) {
          const b = m(w);
          if (!me(b.value) || !me(b.mean) || !me(b.upperOneSigma) || !me(b.lowerOneSigma)) {
            j = [];
            continue;
          }
          if (!(b.value < b.upperOneSigma && b.value > b.lowerOneSigma)) {
            j = [];
            continue;
          }
          if (j.push(w), j.length >= 15) {
            const Q = j.map(m), z = Q.some((U) => U.value > U.mean), R = Q.some((U) => U.value < U.mean);
            if (z && R)
              for (const U of j) m(U).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const m = s.maximumPointsPartition;
      let y = 0;
      for (const L of d.filter((j) => j.partitionId === g))
        !L.ghost && me(L.value) && y++, y > m && (L.mean = L.upperProcessLimit = L.lowerProcessLimit = null, L.upperTwoSigma = L.lowerTwoSigma = L.upperOneSigma = L.lowerOneSigma = null);
    }
  }
  for (const p of d) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const u = [];
    p.specialCauseShiftHigh && u.push("shift_high"), p.specialCauseShiftLow && u.push("shift_low"), p.specialCauseTrendIncreasing && u.push("trend_inc"), p.specialCauseTrendDecreasing && u.push("trend_dec"), p.specialCauseSinglePointAbove && u.push("single_above"), p.specialCauseSinglePointBelow && u.push("single_below"), p.specialCauseTwoOfThreeAbove && u.push("two_of_three_high"), p.specialCauseTwoOfThreeBelow && u.push("two_of_three_low"), p.specialCauseFourOfFiveAbove && u.push("four_of_five_high"), p.specialCauseFourOfFiveBelow && u.push("four_of_five_low"), p.specialCauseFifteenInnerThird && u.push("fifteen_inner_third"), u.length && (p.ruleTags = u);
  }
  for (let p = 0; p < d.length; p++) {
    const u = d[p];
    if (u.ghost || !me(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const P = me(u.value) && me(u.mean) && u.value > u.mean, A = me(u.value) && me(u.mean) && u.value < u.mean;
    s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1));
    const D = u.specialCauseTrendIncreasing && (s.trendSideGatingEnabled ? P : !0), S = u.specialCauseTrendDecreasing && (s.trendSideGatingEnabled ? A : !0), B = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || D, N = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || S;
    let $ = !1;
    if (s.precedenceStrategy === "directional_first" && s.emergingDirectionGrace) {
      const k = s.specialCauseTrendPoints || 6;
      if (k > 1 && !(u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing)) {
        const _ = k - 1, m = [];
        for (let y = p; y >= 0 && m.length < _; y--) {
          const L = d[y];
          !L.ghost && me(L.value) && L.mean !== null && m.unshift(L);
        }
        if (m.length === _) {
          let y = !0;
          for (let L = 1; L < m.length && y; L++)
            r === "Up" ? m[L].value > m[L - 1].value || (y = !1) : r === "Down" && m[L].value < m[L - 1].value || (y = !1);
          $ = y;
        }
      }
    }
    if (s.precedenceStrategy === "directional_first") {
      const k = r === "Up" ? B : r === "Down" ? N : !1, _ = r === "Up" ? N : r === "Down" ? B : !1;
      k && !_ ? u.variationIcon = "improvement" : _ && !k ? u.variationIcon = $ ? "neither" : "concern" : k && _ ? u.variationIcon = $ || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing ? "improvement" : "neither" : u.variationIcon = "neither";
    } else
      r === "Up" ? u.variationIcon = B ? "improvement" : N ? "concern" : "neither" : r === "Down" ? u.variationIcon = N ? "improvement" : B ? "concern" : "neither" : u.variationIcon = "neither";
    const x = B || N;
    if (u.specialCauseImprovementValue = x && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = x && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = x && u.variationIcon === "neither" ? u.value : null, me(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const k = i[u.rowId - 1];
      if (me(k.target)) {
        const _ = k.target;
        s.assuranceCapabilityMode && me(u.upperProcessLimit) && me(u.lowerProcessLimit) ? r === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > _ ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < _ ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : r === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < _ ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > _ ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : r === "Down" ? u.assuranceIcon = u.value <= _ ? "pass" : "fail" : r === "Up" ? u.assuranceIcon = u.value >= _ ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const p = i.filter(
      (u) => !u.ghost && me(u.value)
    ).length;
    c.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${p} non-ghost points available; minimum required is ${s.minimumPoints}. Limits and icons suppressed.`,
      context: { available: p, minimumRequired: s.minimumPoints }
    });
  }
  if (s.variationIconConflictWarning)
    for (const p of d)
      p.variationIcon === "improvement" && (p.specialCauseSinglePointAbove || p.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && p.specialCauseFourOfFiveAbove || p.specialCauseShiftHigh || p.specialCauseTrendIncreasing) && (p.specialCauseSinglePointBelow || p.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && p.specialCauseFourOfFiveBelow || p.specialCauseShiftLow || p.specialCauseTrendDecreasing) && c.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (s.maximumPoints && Number.isFinite(s.maximumPoints)) {
    const p = s.maximumPoints;
    let u = 0;
    for (const P of d)
      !P.ghost && me(P.value) && u++, u > p && (P.mean = P.upperProcessLimit = P.lowerProcessLimit = null, P.upperTwoSigma = P.lowerTwoSigma = P.upperOneSigma = P.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const p = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !me(u.value))
    ).length;
    p && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => me(u.target)) && c.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), s.ghostOnRareEventWarning && (t === "T" || t === "G")) {
    const p = i.filter((u) => u.ghost).length;
    p && c.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (s.partitionSizeWarnings && Object.entries(v).forEach(([p, u]) => {
    u < s.minimumPointsPartition && c.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${u} non-ghost point(s); below recommended ${s.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: u,
        minimum: s.minimumPointsPartition
      }
    });
  }), s.baselineSpecialCauseWarning) {
    const p = [];
    d.forEach((u) => {
      i[u.rowId - 1].baseline && (u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow || u.specialCauseShiftHigh || u.specialCauseShiftLow || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) && p.push(u.rowId);
    }), p.length && c.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${p.join(", ")}.`,
      context: { rows: p }
    });
  }
  s.maximumPointsWarnings && (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition) && c.push({
    code: "partition_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after ${s.maximumPointsPartition} non-ghost points per partition.`,
    context: { cap: s.maximumPointsPartition }
  }), s.maximumPoints && Number.isFinite(s.maximumPoints) && c.push({
    code: "global_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after global cap of ${s.maximumPoints} non-ghost points.`,
    context: { cap: s.maximumPoints }
  }));
  let T;
  if (s.baselineSuggest) {
    const p = d, u = s.baselineSuggestStabilityPoints, P = s.baselineSuggestMinGap, A = s.baselineSuggestMinDeltaSigma, D = s.baselineSuggestScoreThreshold, S = [];
    let B = 0;
    for (let N = 0; N < p.length; N++) {
      let $ = function(m) {
        return !!x[m] && !k?.[m];
      };
      const x = p[N];
      N > 0 && p[N - 1].partitionId !== x.partitionId && (B = N);
      const k = p[N - 1], _ = [];
      ($("specialCauseShiftHigh") || $("specialCauseShiftLow")) && _.push({ reason: "shift", index: N }), ($("specialCauseTrendIncreasing") || $("specialCauseTrendDecreasing")) && _.push({ reason: "trend", index: N }), ($("specialCauseSinglePointAbove") || $("specialCauseSinglePointBelow")) && _.push({ reason: "point", index: N });
      for (const m of _) {
        if (m.index - B < P) continue;
        const y = Math.max(0, m.index - u), L = m.index - 1;
        if (L - y + 1 < u) continue;
        const j = m.index, w = m.index + u - 1;
        if (w >= p.length) continue;
        const b = p.slice(y, L + 1).map((G) => G.value).filter(me), F = p.slice(j, w + 1).map((G) => G.value).filter(me);
        if (b.length < u || F.length < u) continue;
        const Q = p[m.index];
        let z = null;
        if (me(Q.upperProcessLimit) && me(Q.mean)) {
          const G = Q.upperProcessLimit - Q.mean;
          G > 0 && (z = G / 3);
        }
        if (!z || z <= 0) continue;
        const R = ht(b), U = ht(F), E = U - R;
        if (Math.abs(E) < A * z) continue;
        const C = p.slice(j, w + 1).filter(
          (G) => G.variationIcon === "concern"
          /* Concern */
        ).length;
        if (C > 1) continue;
        const Z = (G) => {
          const le = ht(G);
          return G.length ? G.reduce((O, ie) => O + (ie - le) * (ie - le), 0) / G.length : 0;
        }, oe = Z(b), J = Z(F);
        let V = m.reason === "shift" ? 90 : m.reason === "trend" ? 70 : 60;
        if (J < oe && (V += 10), V -= C * 15, V < D) continue;
        const H = S.find((G) => G.index === m.index);
        if (H) {
          const G = (le) => le === "shift" ? 3 : le === "trend" ? 2 : 1;
          (G(m.reason) > G(H.reason) || V > H.score) && (H.reason = m.reason, H.score = V, H.deltaMean = E, H.oldMean = R, H.newMean = U, H.window = [j, w]);
        } else
          S.push({
            index: m.index,
            reason: m.reason,
            score: V,
            deltaMean: E,
            oldMean: R,
            newMean: U,
            window: [j, w]
          });
      }
      N > 0 && p[N - 1].partitionId !== p[N].partitionId && (B = N);
    }
    S.sort((N, $) => N.index - $.index), T = S;
  }
  return { rows: d, warnings: c, ...T ? { suggestedBaselines: T } : {} };
}
const hs = {
  singlePointAbove: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointBelow: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeAbove: {
    tooltip: "Two of three points beyond +2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeBelow: {
    tooltip: "Two of three points beyond -2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveAbove: {
    tooltip: "Four of five points beyond +1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveBelow: {
    tooltip: "Four of five points beyond -1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftHigh: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftLow: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendIncreasing: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDecreasing: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function ps(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointAbove && t.push("singlePointAbove"), e.specialCauseSinglePointBelow && t.push("singlePointBelow"), e.specialCauseTwoOfThreeAbove && t.push("twoOfThreeAbove"), e.specialCauseTwoOfThreeBelow && t.push("twoOfThreeBelow"), e.specialCauseFourOfFiveAbove && t.push("fourOfFiveAbove"), e.specialCauseFourOfFiveBelow && t.push("fourOfFiveBelow"), e.specialCauseShiftHigh && t.push("shiftHigh"), e.specialCauseShiftLow && t.push("shiftLow"), e.specialCauseTrendIncreasing && t.push("trendIncreasing"), e.specialCauseTrendDecreasing && t.push("trendDecreasing"), t;
}
function ms(e) {
  switch (e) {
    case Ue.Improvement:
      return "Improvement signal";
    case Ue.Concern:
      return "Concern signal";
    case Ue.Neither:
      return "Common cause variation";
    case Ue.None:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Kh(e) {
  switch (e) {
    case Pt.Pass:
      return "Target met";
    case Pt.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Zh(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const lt = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  none: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  }
};
function Fi(e) {
  return e ? lt[e]?.token ?? lt.neither.token : lt.neither.token;
}
function Jh(e) {
  return e ? lt[e]?.hex ?? lt.neither.hex : lt.neither.hex;
}
const Ai = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const d = Ht(), c = Rt(), [f, h] = Y.useState(null), [g, v] = Y.useState(!1), T = Y.useRef(null);
  Y.useEffect(() => {
    if (d) {
      if (d.focused && (h(d.focused), T.current && (cancelAnimationFrame(T.current), T.current = null)), !d.focused && !g) {
        const ce = requestAnimationFrame(() => {
          h(null), T.current = null;
        });
        T.current = ce;
      }
      return () => {
        T.current && (cancelAnimationFrame(T.current), T.current = null);
      };
    }
  }, [d, d?.focused, g]);
  const p = d && (d.focused || (g ? f : null) || f), [u, P] = Y.useState(!1);
  Y.useEffect(() => {
    const ce = requestAnimationFrame(() => P(!0));
    return () => cancelAnimationFrame(ce);
  }, [p?.index]);
  const A = c?.innerWidth ?? 0, D = c?.innerHeight ?? 0, S = p ? Math.min(Math.max(p.clientX, 0), A) : 0, B = p ? Math.min(Math.max(p.clientY, 0), D) : 0, $ = c.ref?.current;
  if (!p)
    return null;
  const x = e?.[p.index], _ = ps(x).map((ce) => ({ id: ce, label: hs[ce].tooltip })), m = p.x instanceof Date ? p.x : new Date(p.x), y = s ? s(m) : m.toDateString(), L = o ? `${o}` : "", j = a || L ? `${p.y}${L ? "" + L : " "}${a ? " " + a : ""}` : `${p.y}`, w = ms(x?.variationIcon), b = Kh(x?.assuranceIcon), F = Zh(
    t.mean ?? null,
    t.sigma,
    p.y
  ), Q = r ? r(p.index, { x: p.x, y: p.y }) : void 0, z = w || b || F, R = x?.specialCauseTrendIncreasing || x?.specialCauseTrendDecreasing, U = x?.variationIcon === Ue.Neither && R, E = l && U ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, I = _.length > 0, C = i && x?.variationIcon === Ue.Neither && I, Z = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", oe = Fi(x?.variationIcon), J = 6.2, H = [
    Q || "",
    `${y} • ${j}`
  ].filter(Boolean).reduce(
    (ce, he) => Math.max(ce, he.length * J + 32),
    0
  ), G = 200, le = 440, O = Math.min(le, Math.max(G, H));
  let ie = S + 12, de = (c.margin?.top ?? 0) + B + 16;
  ie + O > A && (ie = S - -60 - O), ie < 0 && (ie = Math.max(0, A - O));
  const ue = p ? `spc-tooltip-${p.index}` : "spc-tooltip", ve = $ ? Ol(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: ue,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (u ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ie,
          top: de,
          width: O,
          maxWidth: le,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": u ? "false" : "true",
        "data-floating": !0,
        "data-placement": ie + O + 12 > A ? "left" : "right",
        onPointerEnter: () => {
          v(!0), T.current && (cancelAnimationFrame(T.current), T.current = null);
        },
        onPointerLeave: () => {
          if (v(!1), !d?.focused) {
            const ce = requestAnimationFrame(() => {
              h(null), T.current = null;
            });
            T.current = ce;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: y })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: j })
          ] }),
          z && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: w?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : w?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : C ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : w ? /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: w,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          b && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const ce = b.toLowerCase(), fe = !(ce.includes("not met") || ce.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(ce);
              return /* @__PURE__ */ n.jsx(
                Ye,
                {
                  text: b,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${fe ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${b}`
                }
              );
            })() })
          ] }),
          F && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              Ye,
              {
                text: (() => {
                  const ce = F.toLowerCase();
                  return ce.startsWith("within 1") ? "≤1σ" : ce.startsWith("1–2") ? "1–2σ" : ce.startsWith("2–3") ? "2–3σ" : ce.startsWith(">3") ? ">3σ" : F;
                })(),
                color: F.includes(">3") ? "orange" : F.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${F}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          E && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: E })
          ] }),
          I && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: _.map(({ id: ce, label: he }) => {
                  const fe = String(ce), W = fe === "trend_inc" || fe === "trend_dec" ? "fdp-spc-tag--trend" : C ? "fdp-spc-tag--no-judgement" : w ? w.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : w.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    Ye,
                    {
                      text: he,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${W}`,
                      "data-rule-id": fe
                    },
                    fe
                  );
                })
              }
            )
          ] })
        ] })
      }
    ),
    $
  ) : null;
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: S,
            cy: B,
            r: 7,
            fill: "none",
            stroke: Z,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: S,
            cy: B,
            r: 5,
            fill: "#000",
            stroke: Z,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: S,
            cy: B,
            r: 2.5,
            fill: oe,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        ve
      ]
    }
  );
};
let Ta = null;
try {
  Ta = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const st = (e, t) => {
  if (!Ta) return t;
  const r = e.split(".");
  let a = Ta;
  for (const s of r) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ei = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: st("gradient.stop.start-opacity", "0.12"),
  mid: st("gradient.stop.mid-opacity", "0.03"),
  end: st("gradient.stop.end-opacity", "0"),
  triStart: st(
    "gradient.stop.triangle-start-opacity",
    st("gradient.stop.start-opacity", "0.12")
  ),
  triMid: st(
    "gradient.stop.triangle-mid-opacity",
    st("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: st(
    "gradient.stop.triangle-end-opacity",
    st("gradient.stop.end-opacity", "0")
  )
});
var Bt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Bt || {});
const Qh = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, ep = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Oe = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Oe || {}), ke = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(ke || {}), tt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(tt || {}), Me = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Me || {});
const tp = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [r, a, o].map((l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4));
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, gs = {
  special_cause_deteriorating: {
    hex: lt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: lt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: lt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: lt.none.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(gs).forEach((e) => {
  e.text || (e.text = tp(e.hex));
});
const xs = (e) => gs[e], Ar = (e) => gs[e].judgement || "none", vo = {
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
function np(e, t) {
  let r;
  return e === "common_cause" ? r = vo.common : r = vo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
const Bi = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === ft.Up ? Oe.HigherIsBetter : i.improvementDirection === ft.Down ? Oe.LowerIsBetter : Oe.ContextDependent : i.polarity && (l = i.polarity);
    let d;
    switch (i.variationIcon) {
      case Ue.Improvement:
        d = Me.SpecialCauseImproving;
        break;
      case Ue.Concern:
        d = Me.SpecialCauseDeteriorating;
        break;
      case Ue.Neither:
        d = i.specialCauseNeutral ? Me.SpecialCauseNoJudgement : Me.CommonCause;
        break;
      case Ue.None:
      default:
        d = Me.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (d === Me.SpecialCauseImproving ? c = l === Oe.LowerIsBetter ? ke.Lower : ke.Higher : d === Me.SpecialCauseDeteriorating ? c = l === Oe.LowerIsBetter ? ke.Higher : ke.Lower : d === Me.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = ke.Higher : i.lowSideSignal && !i.highSideSignal ? c = ke.Lower : c = ke.Higher : c = ke.Higher), { state: d, direction: c, polarity: l ?? Oe.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Me.SpecialCauseImproving || i.state === Me.SpecialCauseDeteriorating) && i.polarity && (i.state === Me.SpecialCauseImproving ? l = i.polarity === Oe.LowerIsBetter ? ke.Lower : ke.Higher : l = i.polarity === Oe.LowerIsBetter ? ke.Higher : ke.Lower), l || (i.state === Me.SpecialCauseImproving ? l = ke.Higher : i.state === Me.SpecialCauseDeteriorating ? l = ke.Lower : l = ke.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Oe.ContextDependent
    };
  }
  const r = e;
  t();
  const o = {
    [tt.Improving]: Me.SpecialCauseImproving,
    [tt.Deteriorating]: Me.SpecialCauseDeteriorating,
    [tt.No_Judgement]: Me.SpecialCauseNoJudgement,
    [tt.None]: Me.CommonCause
  }[r.judgement];
  let s;
  return r.judgement === tt.Improving ? s = r.polarity === Oe.LowerIsBetter ? ke.Lower : ke.Higher : r.judgement === tt.Deteriorating ? s = r.polarity === Oe.LowerIsBetter ? ke.Higher : ke.Lower : s = r.trend ?? ke.Higher, { state: o, direction: s, polarity: r.polarity };
};
function rp(e, t) {
  const { state: r, direction: a, polarity: o } = Bi(e), s = Ar(r), i = a === ke.Higher ? "above" : "below", l = a === ke.Higher ? "upwards" : "downwards", d = (() => {
    switch (o) {
      case Oe.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Oe.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case tt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case tt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case tt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case tt.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    d,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const ua = (e, t, r, a, o, s) => /* @__PURE__ */ n.jsxs("defs", { children: [
  a && /* @__PURE__ */ n.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  o && /* @__PURE__ */ n.jsx("linearGradient", { id: r, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: s.map((i) => /* @__PURE__ */ n.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), Er = ({
  data: e,
  size: t = 44,
  ariaLabel: r,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = "classic",
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: d = "polarity",
  letterOverride: c,
  ...f
}) => {
  const h = zn(), g = zn(), {
    start: v,
    mid: T,
    end: p,
    triStart: u,
    triMid: P,
    triEnd: A
  } = Ei(), { state: D, direction: S, polarity: B } = De(
    () => Bi(e),
    [e]
  ), N = De(() => xs(D), [D]), $ = De(() => Ar(D), [D]), x = $ === tt.Improving || $ === tt.Deteriorating;
  let k = "";
  a && x && (d === "polarity" ? B === Oe.HigherIsBetter ? k = "H" : B === Oe.LowerIsBetter ? k = "L" : k = "" : k = S === ke.Higher ? "H" : "L"), c !== void 0 && (k = c);
  const _ = D !== Me.CommonCause, m = D === Me.SpecialCauseNoJudgement, y = st("common-cause", "#A6A6A6"), L = _ ? N.hex : y, j = De(
    () => np(D, S),
    [D, S]
  ), w = r || `${N.label}${k ? S === ke.Higher ? " – Higher" : " – Lower" : ""}`, b = rp(
    e
  );
  if (i === "triangleWithRun") {
    const U = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], E = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let I = null;
    D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating ? I = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (S === ke.Higher ? U : E).map((ie) => ie.join(",")).join(" "),
        fill: N.hex,
        stroke: N.hex,
        strokeWidth: 6,
        transform: S === ke.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : D === Me.SpecialCauseNoJudgement && (I = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: S === ke.Higher ? U.map((ie) => ie.join(",")).join(" ") : E.map((ie) => ie.join(",")).join(" "),
        fill: N.hex,
        stroke: N.hex,
        strokeWidth: 6,
        transform: S === ke.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const C = Math.max(0, Math.min(5, Math.floor(l || 0))), Z = D === Me.CommonCause ? 160 : S === ke.Higher ? 220 : 70, oe = 10, J = 26, V = 150 - 2 * J, H = D === Me.SpecialCauseImproving ? st("improvement", "#00B0F0") : D === Me.SpecialCauseDeteriorating ? st("concern", "#E46C0A") : y, G = Array.from({ length: 5 }).map((ie, se) => {
      const ue = (D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating) && se >= 5 - C ? H : y;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: V + se * J,
          cy: Z,
          r: oe,
          fill: ue,
          stroke: ue,
          strokeWidth: 1
        },
        se
      );
    }), le = ua(
      N.hex,
      h,
      g,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: P },
        { offset: "100%", opacity: A }
      ]
    ), O = D === Me.CommonCause || S === ke.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": w,
        "aria-description": b,
        ...f,
        children: [
          le,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${g})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: N.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: O, children: [
            I,
            k && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: S === ke.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: k
              }
            ),
            G
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const U = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], E = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], I = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let C = null;
    D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating ? C = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (S === ke.Higher ? U : E).map((oe) => oe.join(",")).join(" "),
        fill: N.hex,
        stroke: N.hex,
        strokeWidth: 8,
        transform: S === ke.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : D === Me.SpecialCauseNoJudgement ? C = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: S === ke.Higher ? U.map((oe) => oe.join(",")).join(" ") : E.map((oe) => oe.join(",")).join(" "),
        fill: N.hex,
        stroke: N.hex,
        strokeWidth: 8,
        transform: S === ke.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : D === Me.CommonCause && (C = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: I[0][0],
        y1: I[0][1],
        x2: I[1][0],
        y2: I[1][1],
        stroke: N.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const Z = ua(
      N.hex,
      h,
      g,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: P },
        { offset: "100%", opacity: A }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": w,
        "aria-description": b,
        ...f,
        children: [
          Z,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${g})` : "#ffffff",
              ...o ? { filter: `url(#${h})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: N.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          C,
          k && (D === Me.SpecialCauseImproving || D === Me.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: S === ke.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: k
            }
          )
        ]
      }
    );
  }
  const F = ua(
    N.hex,
    h,
    g,
    o,
    s,
    [
      { offset: "0%", opacity: v },
      { offset: "65%", opacity: T },
      { offset: "100%", opacity: p }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": w,
      "aria-description": b,
      ...f,
      children: [
        F,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${g})` : "#ffffff",
            ...o ? { filter: `url(#${h})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: N.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        k && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: N.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: S === ke.Lower ? "340" : "155", children: k })
          }
        ),
        m ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: N.hex,
            ...S === ke.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          j.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: y,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${j.map((Q) => `${Q.cx} ${Q.cy}`).join(" L ")}`
            }
          ),
          j.map((Q, z) => {
            const U = z >= j.length - 2 && _ ? L : y, E = U;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: E,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: U,
                cx: Q.cx,
                cy: Q.cy,
                r: 16
              },
              z
            );
          })
        ] })
      ]
    }
  );
};
Er.displayName = "SPCVariationIcon";
const Br = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...d
}) => {
  const c = zn(), f = zn(), { start: h, mid: g, end: v } = Ei(), T = o || Qh[e], p = (i || ep[e]).slice(0, 2), u = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          a && /* @__PURE__ */ n.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ n.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ n.jsxs("linearGradient", { id: f, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: T, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: T, stopOpacity: parseFloat(g) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(v) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${f})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: T,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: p })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === Bt.Fail ? /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "fail-line",
              stroke: T,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Bt.Uncertain ? /* @__PURE__ */ n.jsx(
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
          ) : /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "pass-line",
              stroke: T,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 48,204 L 254,204"
            }
          ),
          /* @__PURE__ */ n.jsx(
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
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: T,
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
Br.displayName = "SPCAssuranceIcon";
let ap = 0;
const sp = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: d = !0,
  chartType: c = fs.XmR,
  metricImprovement: f = ft.Neither,
  enableRules: h = !0,
  showIcons: g = !1,
  showEmbeddedIcon: v = !0,
  embeddedIconVariant: T = "classic",
  embeddedIconRunLength: p,
  targets: u,
  baselines: P,
  ghosts: A,
  settings: D,
  narrationContext: S,
  gradientSequences: B = !1,
  processLineWidth: N = 2,
  showWarningsPanel: $ = !1,
  warningsFilter: x,
  enableNeutralNoJudgement: k = !0,
  showTrendGatingExplanation: _ = !0,
  enableTrendSideGating: m,
  disableTrendSideGating: y
}) => {
  const L = Y.useCallback(
    (ce) => String(ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((fe) => fe.length ? fe[0].toUpperCase() + fe.slice(1) : fe).join(" "),
    []
  ), j = Y.useCallback(
    (ce) => String(ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((he) => he.length ? he[0].toUpperCase() + he.slice(1) : he).join(" "),
    []
  ), w = m ?? (y !== void 0 ? !y : !1);
  process.env.NODE_ENV !== "production" && y !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' is deprecated. Use 'enableTrendSideGating' instead (inverted semantics)."
  );
  const b = Y.useMemo(() => {
    const ce = e.map((he, fe) => ({
      x: he.x,
      value: he.y,
      target: u?.[fe] ?? void 0,
      baseline: P?.[fe] ?? void 0,
      ghost: A?.[fe] ?? void 0
    }));
    try {
      const he = D ? { ...D, trendSideGatingEnabled: D.trendSideGatingEnabled ?? w } : { trendSideGatingEnabled: w };
      return Li({
        chartType: c,
        metricImprovement: f,
        data: ce,
        settings: he
      });
    } catch {
      return null;
    }
  }, [
    e,
    u,
    P,
    A,
    c,
    f,
    D,
    m,
    y
  ]), F = b?.rows.slice().reverse().find((ce) => ce.mean != null), Q = F?.mean ?? null, z = b?.warnings || [], R = Y.useMemo(() => z.length ? x ? z.filter((ce) => !(x.severities && ce.severity && !x.severities.includes(ce.severity) || x.categories && ce.category && !x.categories.includes(ce.category) || x.codes && !x.codes.includes(ce.code))) : z : [], [z, x]), [U, E] = Y.useState(""), I = Y.useRef("");
  Y.useEffect(() => {
    if (!$) {
      I.current !== "" && (I.current = "", E(""));
      return;
    }
    const ce = R.length;
    if (!ce) {
      const W = "Diagnostics: no warnings.";
      W !== I.current && (I.current = W, E(W));
      return;
    }
    const he = {
      error: R.filter(
        (W) => W.severity === Et.Error
      ).length,
      warning: R.filter(
        (W) => W.severity === Et.Warning
      ).length,
      info: R.filter(
        (W) => W.severity === Et.Info
      ).length
    }, fe = [];
    he.error && fe.push(
      `${he.error} error${he.error === 1 ? "" : "s"}`
    ), he.warning && fe.push(
      `${he.warning} warning${he.warning === 1 ? "" : "s"}`
    ), he.info && fe.push(`${he.info} info`);
    const X = `Diagnostics updated: ${ce} warning${ce === 1 ? "" : "s"} (${fe.join(", ")}).`;
    X !== I.current && (I.current = X, E(X));
  }, [$, R]);
  const C = F?.upperProcessLimit ?? null, Z = F?.lowerProcessLimit ?? null, oe = F?.upperOneSigma ?? null, J = F?.lowerOneSigma ?? null, V = F?.upperTwoSigma ?? null, H = F?.lowerTwoSigma ?? null, G = Q != null && oe != null ? Math.abs(oe - Q) : 0, le = Y.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), O = Y.useMemo(() => {
    const he = [...e.map((fe) => fe.y)];
    if ([Q, C, Z, oe, J, V, H].forEach((fe) => {
      fe != null && he.push(fe);
    }), u && u.forEach((fe) => {
      typeof fe == "number" && !isNaN(fe) && he.push(fe);
    }), !!he.length)
      return [Math.min(...he), Math.max(...he)];
  }, [e, Q, C, Z, oe, J, V, H, u]), ie = Y.useMemo(() => {
    if (!(l || S?.measureUnit) && e.length)
      return e.every((ce) => ce.y >= 0 && ce.y <= 1) ? "%" : void 0;
  }, [l, S?.measureUnit, e]), se = l ?? S?.measureUnit ?? ie, de = Y.useMemo(() => se ? { ...S || {}, measureUnit: se } : S, [S, se]), ue = Y.useMemo(() => {
    if (!b?.rows) return [];
    const ce = [];
    for (let he = 1; he < b.rows.length; he++)
      b.rows[he].partitionId !== b.rows[he - 1].partitionId && ce.push(he);
    return ce;
  }, [b?.rows]), ve = Y.useMemo(() => {
    if (!v || !b?.rows?.length) return null;
    const ce = b.rows, he = D?.minimumPoints ?? 13;
    if (ce.filter(
      (ae) => !ae.ghost && ae.value != null
    ).length < he) return null;
    let X = -1;
    for (let ae = ce.length - 1; ae >= 0; ae--) {
      const _e = ce[ae];
      if (_e && _e.value != null && !_e.ghost) {
        X = ae;
        break;
      }
    }
    if (X === -1) return null;
    const W = ce[X], ne = W.variationIcon, ee = W.assuranceIcon, M = ne === Ue.Neither && !!W.specialCauseNeitherValue, q = ee === Pt.Pass ? Bt.Pass : ee === Pt.Fail ? Bt.Fail : Bt.Uncertain;
    let te;
    if (ne === Ue.None) {
      const ae = W.specialCauseSinglePointAbove, _e = W.specialCauseSinglePointBelow;
      f === ft.Up ? ae ? te = ke.Higher : _e && (te = ke.Lower) : f === ft.Down ? _e ? te = ke.Lower : ae && (te = ke.Higher) : te = ke.Higher;
    } else if (ne === Ue.Neither && M) {
      const ae = W.specialCauseSinglePointAbove || W.specialCauseTwoOfThreeAbove || W.specialCauseFourOfFiveAbove || W.specialCauseShiftHigh || W.specialCauseTrendIncreasing, _e = W.specialCauseSinglePointBelow || W.specialCauseTwoOfThreeBelow || W.specialCauseFourOfFiveBelow || W.specialCauseShiftLow || W.specialCauseTrendDecreasing;
      ae && !_e ? te = ke.Higher : _e && !ae ? te = ke.Lower : te = ke.Higher;
    }
    let re;
    f === ft.Up ? re = Oe.HigherIsBetter : f === ft.Down ? re = Oe.LowerIsBetter : re = Oe.ContextDependent;
    const K = 80;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(ne),
              "data-trend-raw": te ? String(te) : "none",
              "data-trend": te ? String(te) : "none",
              "data-polarity": String(re ?? "unknown"),
              style: { width: K, height: K },
              children: /* @__PURE__ */ n.jsx(
                Er,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: ne,
                    improvementDirection: f,
                    polarity: re,
                    specialCauseNeutral: M,
                    highSideSignal: W.specialCauseSinglePointAbove || W.specialCauseTwoOfThreeAbove || W.specialCauseFourOfFiveAbove || W.specialCauseShiftHigh || W.specialCauseTrendIncreasing,
                    lowSideSignal: W.specialCauseSinglePointBelow || W.specialCauseTwoOfThreeBelow || W.specialCauseFourOfFiveBelow || W.specialCauseShiftLow || W.specialCauseTrendDecreasing,
                    ...te ? { trend: te } : {}
                  },
                  letterMode: f === ft.Neither ? "direction" : "polarity",
                  size: K,
                  variant: T,
                  runLength: T === "triangleWithRun" ? p : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(ee),
              style: { width: K, height: K },
              children: /* @__PURE__ */ n.jsx(
                Br,
                {
                  status: q,
                  size: K,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${X}`
    );
  }, [
    v,
    b?.rows,
    f,
    D?.minimumPoints,
    u,
    T,
    p
  ]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        v && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: ve
          }
        ),
        /* @__PURE__ */ n.jsx(
          Qf,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(eh, { series: le, yDomain: O, children: /* @__PURE__ */ n.jsx(
              op,
              {
                series: le,
                showPoints: o,
                announceFocus: s,
                limits: { mean: Q, ucl: C, lcl: Z, sigma: G, onePos: oe, oneNeg: J, twoPos: V, twoNeg: H },
                showZones: a,
                highlightOutOfControl: d,
                engineRows: b?.rows || null,
                enableRules: h,
                showIcons: g,
                narrationContext: de,
                metricImprovement: f,
                gradientSequences: B,
                processLineWidth: N,
                effectiveUnit: se,
                partitionMarkers: ue,
                ariaLabel: t,
                enableNeutralNoJudgement: k,
                showTrendGatingExplanation: _
              }
            ) })
          }
        ),
        $ && U && /* @__PURE__ */ n.jsx(
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
            children: U
          }
        ),
        $ && R.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
                ya,
                {
                  firstCellIsHeader: !1,
                  panel: !1,
                  responsive: !1,
                  head: [
                    { text: "Severity" },
                    { text: "Category" },
                    { text: "Code" },
                    { text: "Details" }
                  ],
                  rows: R.map((ce) => {
                    let he = "grey";
                    return ce.severity === Et.Error ? he = "red" : ce.severity === Et.Warning ? he = "orange" : ce.severity === Et.Info && (he = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          Ye,
                          {
                            color: he,
                            text: (ce.severity ? String(ce.severity) : "Info").replace(
                              /^[a-z]/,
                              (fe) => fe.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: ce.category ? /* @__PURE__ */ n.jsx(
                          Ye,
                          {
                            color: "purple",
                            text: j(ce.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(Ye, { color: "grey", text: L(ce.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: ce.message }),
                          ce.context && Object.keys(ce.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(ce.context, null, 2) })
                              ]
                            }
                          )
                        ] }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message"
                      }
                    ];
                  }),
                  classes: "fdp-spc-chart__warnings-table-wrapper",
                  tableClasses: "fdp-spc-chart__warnings-table"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, op = ({
  series: e,
  showPoints: t,
  announceFocus: r,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  showIcons: d,
  narrationContext: c,
  gradientSequences: f,
  processLineWidth: h,
  effectiveUnit: g,
  partitionMarkers: v,
  ariaLabel: T,
  enableNeutralNoJudgement: p = !0,
  showTrendGatingExplanation: u = !0
}) => {
  const P = Zt(), A = Rt();
  if (!P) return null;
  const { xScale: D, yScale: S } = P, B = Y.useRef(
    "spc-seq-" + ++ap
  ), N = Ht(), $ = e[0]?.data || [], x = Y.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const I = /* @__PURE__ */ new Set();
    return $.forEach((C, Z) => {
      (a.ucl != null && C.y > a.ucl || a.lcl != null && C.y < a.lcl) && I.add(Z);
    }), I;
  }, [$, a.ucl, a.lcl]), k = Y.useMemo(() => {
    if (!i) return null;
    const I = {};
    return i.forEach((C, Z) => {
      if (C.value == null || C.ghost) return;
      const oe = C.specialCauseSinglePointAbove || C.specialCauseSinglePointBelow || C.specialCauseTwoOfThreeAbove || C.specialCauseTwoOfThreeBelow || C.specialCauseFourOfFiveAbove || C.specialCauseFourOfFiveBelow || C.specialCauseShiftHigh || C.specialCauseShiftLow || C.specialCauseTrendIncreasing || C.specialCauseTrendDecreasing;
      I[Z] = {
        variation: C.variationIcon,
        assurance: C.assuranceIcon,
        special: oe,
        concern: C.variationIcon === Ue.Concern,
        improvement: C.variationIcon === Ue.Improvement
      };
    }), I;
  }, [i]), _ = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const I = [];
    for (const Z of i)
      typeof Z.target == "number" && !isNaN(Z.target) && I.push(Z.target);
    if (!I.length) return null;
    const C = I[0];
    return I.every((Z) => Z === C) ? C : null;
  }, [i]), m = Y.useMemo(() => {
    if (!k || !$.length)
      return [];
    const I = $.map((Z, oe) => {
      const J = k?.[oe];
      return J?.concern ? "concern" : J?.improvement ? "improvement" : p && J?.special && J.variation === Ue.Neither ? "noJudgement" : "common";
    });
    return T?.includes("Rule Clash") && console.log(
      `[${T}] Raw categories:`,
      I.map((Z, oe) => `${oe}:${Z}(${$[oe].y})`).join(", ")
    ), I;
  }, [k, $, T, p]), y = Y.useMemo(() => {
    if (!f || !m.length)
      return [];
    const I = [...m];
    let C = 0;
    for (; C < I.length; ) {
      const J = I[C];
      let V = C + 1;
      for (; V < I.length && I[V] === J; ) V++;
      V - C === 1 && J !== "common" && (I[C] = "common"), C = V;
    }
    const Z = [];
    if (I.length) {
      let J = 0;
      for (let V = 1; V <= I.length; V++)
        if (V === I.length || I[V] !== I[J]) {
          const H = I[J], G = V - 1, le = G - J + 1;
          (H === "common" || le >= 2) && Z.push({ start: J, end: G, category: H }), J = V;
        }
    }
    return T?.includes("Rule Clash") && console.log(
      `[${T}] Final sequences:`,
      Z.map((J) => `${J.start}-${J.end}:${J.category}`).join(", ")
    ), Z;
  }, [f, m, T]), L = Y.useMemo(
    () => $.map((I) => D(I.x instanceof Date ? I.x : new Date(I.x))),
    [$, D]
  ), j = D.range()[1], w = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const I = (C) => {
      const Z = [];
      let oe = null, J = null;
      for (let V = 0; V < i.length; V++) {
        const H = i[V], G = typeof H[C] == "number" ? H[C] : null;
        if (G == null || isNaN(G)) {
          oe !== null && J != null && (Z.push({
            x1: L[oe],
            x2: L[V - 1],
            y: S(J)
          }), oe = null, J = null);
          continue;
        }
        if (oe === null) {
          oe = V, J = G;
          continue;
        }
        J != null && Math.abs(G - J) <= 1e-9 || (J != null && Z.push({
          x1: L[oe],
          x2: L[V - 1],
          y: S(J)
        }), oe = V, J = G);
      }
      return oe !== null && J != null && Z.push({
        x1: L[oe],
        x2: L[i.length - 1],
        y: S(J)
      }), Z;
    };
    return {
      mean: I("mean"),
      ucl: I("upperProcessLimit"),
      lcl: I("lowerProcessLimit"),
      onePos: I("upperOneSigma"),
      oneNeg: I("lowerOneSigma"),
      twoPos: I("upperTwoSigma"),
      twoNeg: I("lowerTwoSigma")
    };
  }, [i, L, S]), b = Y.useMemo(() => y.length ? /* @__PURE__ */ n.jsx("defs", { children: y.map((I, C) => {
    const Z = `${B.current}-grad-${C}`;
    let oe, J = 0.28, V = 0.12, H = 0.045;
    switch (I.category) {
      case "concern":
        oe = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", J = 0.28, V = 0.12, H = 0.045;
        break;
      case "improvement":
        oe = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", J = 0.26, V = 0.11, H = 0.045;
        break;
      case "noJudgement":
        oe = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", J = 0.26, V = 0.11, H = 0.045;
        break;
      default:
        oe = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ n.jsxs("linearGradient", { id: Z, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: oe, stopOpacity: J }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: oe, stopOpacity: V }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: oe, stopOpacity: H })
    ] }, Z);
  }) }) : null, [y]), F = Y.useMemo(() => {
    if (!y.length) return null;
    const [I] = S.domain(), C = S(I), Z = y.map((oe, J) => {
      const { start: V, end: H, category: G } = oe;
      if (V < 0 || H >= L.length || V > H)
        return null;
      const le = L[V], O = L[H];
      let ie = "";
      if (G === "common") {
        const se = J > 0 ? y[J - 1] : null, de = J < y.length - 1 ? y[J + 1] : null, ue = se ? L[se.end] : 0, ve = se ? S($[se.end].y) : C, ce = de ? L[de.start] : j, he = de ? S($[de.start].y) : C;
        ie = `M ${ue} ${C}`, ie += ` L ${ue} ${ve}`;
        for (let fe = V; fe <= H; fe++)
          ie += ` L ${L[fe]} ${S($[fe].y)}`;
        ie += ` L ${ce} ${he}`, ie += ` L ${ce} ${C} Z`;
      } else {
        const se = J > 0 ? y[J - 1] : null, de = J < y.length - 1 ? y[J + 1] : null, ue = se && se.category !== "common", ve = de && de.category !== "common", ce = S($[V].y), he = S($[H].y);
        if (ue) {
          const fe = L[se.end], X = S($[se.end].y);
          ie = `M ${fe} ${X} L ${le} ${ce}`;
        } else
          ie = `M ${le} ${C} L ${le} ${ce}`;
        for (let fe = V + 1; fe <= H; fe++)
          ie += ` L ${L[fe]} ${S($[fe].y)}`;
        if (ie += ` L ${O} ${he}`, ve ? ie += ` L ${O} ${he} L ${O} ${C}` : ie += ` L ${O} ${he} L ${O} ${C}`, ue) {
          const fe = L[se.end];
          ie += ` L ${fe} ${C} Z`;
        } else
          ie += ` L ${le} ${C} Z`;
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: ie,
          fill: `url(#${B.current}-grad-${J})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${J}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: Z });
  }, [y, L, j, S, $]), Q = Y.useMemo(() => {
    if (!c?.timeframe && $.length >= 2) {
      const I = $.map((H) => H.x instanceof Date ? H.x : new Date(H.x)), C = new Date(Math.min(...I.map((H) => H.getTime()))), Z = new Date(Math.max(...I.map((H) => H.getTime()))), oe = Math.round((Z.getTime() - C.getTime()) / 864e5) || 0;
      if (oe < 14)
        return `The chart shows a timeframe of ${oe + 1} days`;
      const J = Math.round(oe / 7);
      return J < 20 ? `The chart shows a timeframe of ${J} weeks` : `The chart shows a timeframe of ${(Z.getFullYear() - C.getFullYear()) * 12 + (Z.getMonth() - C.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, $]), z = (I) => {
    const C = I % 10, Z = I % 100;
    return C === 1 && Z !== 11 ? `${I}st` : C === 2 && Z !== 12 ? `${I}nd` : C === 3 && Z !== 13 ? `${I}rd` : `${I}th`;
  }, R = (I) => `${z(I.getDate())} ${I.toLocaleString("en-GB", { month: "long" })}, ${I.getFullYear()}`, U = Y.useCallback(
    ({
      index: I,
      x: C,
      y: Z
    }) => {
      const oe = i?.[I], J = C instanceof Date ? C : new Date(C), V = R(J), H = c?.measureUnit ? ` ${c.measureUnit}` : "", G = c?.measureName ? ` ${c.measureName}` : "";
      if (!oe)
        return `General summary is: ${Q ? Q + ". " : ""}Point ${I + 1}, ${V}, ${Z}${H}${G}`;
      const le = ms(oe.variationIcon) || "Variation", O = ps(oe), ie = O.length ? ` Rules: ${[...new Set(O.map((de) => hs[de].narration))].join("; ")}.` : " No special cause rules.", se = [];
      return c?.measureName && se.push(`Measure: ${c.measureName}.`), c?.datasetContext && se.push(`${c.datasetContext}.`), c?.organisation && se.push(`Organisation: ${c.organisation}.`), c?.additionalNote && se.push(c.additionalNote), [
        "General summary is:",
        ...se,
        `Point ${I + 1} recorded on `,
        V + ",",
        `with a value of ${Z} ${H}${G}`,
        le + ".",
        ie
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, Q]
  ), E = Y.useCallback(
    (I, C) => i?.[I] ? U({
      index: I,
      seriesId: "process",
      x: C.x instanceof Date ? C.x : new Date(C.x),
      y: C.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, U]
  );
  return /* @__PURE__ */ n.jsx(Eh, { children: /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart",
      children: [
        /* @__PURE__ */ n.jsx(
          "svg",
          {
            width: P.xScale.range()[1] + 56 + 16,
            height: P.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(bo, { type: "x" }),
              /* @__PURE__ */ n.jsx(bo, { type: "y" }),
              /* @__PURE__ */ n.jsx(th, { axis: "y" }),
              b,
              F,
              v.map((I, C) => {
                const Z = $[I];
                if (!Z) return null;
                const oe = D(Z.x instanceof Date ? Z.x : new Date(Z.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: oe,
                    x2: oe,
                    y1: 0,
                    y2: S.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${C}`
                );
              }),
              w?.mean.map((I, C) => /* @__PURE__ */ n.jsx(
                "line",
                {
                  className: "fdp-spc__cl",
                  x1: I.x1,
                  x2: I.x2,
                  y1: I.y,
                  y2: I.y,
                  "aria-hidden": "true"
                },
                `mean-${C}`
              )),
              _ != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              w?.ucl.map((I, C) => /* @__PURE__ */ n.jsx(
                "line",
                {
                  className: "fdp-spc__limit fdp-spc__limit--ucl",
                  x1: I.x1,
                  x2: I.x2,
                  y1: I.y,
                  y2: I.y,
                  "aria-hidden": "true",
                  strokeWidth: 2
                },
                `ucl-${C}`
              )),
              w?.lcl.map((I, C) => /* @__PURE__ */ n.jsx(
                "line",
                {
                  className: "fdp-spc__limit fdp-spc__limit--lcl",
                  x1: I.x1,
                  x2: I.x2,
                  y1: I.y,
                  y2: I.y,
                  "aria-hidden": "true",
                  strokeWidth: 2
                },
                `lcl-${C}`
              )),
              _ != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: D.range()[1],
                    y1: S(_),
                    y2: S(_),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: D.range()[0] - 7,
                    y: S(_) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      _,
                      " ",
                      g || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && w && w.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                w.onePos.map((I, C) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: I.x1,
                    x2: I.x2,
                    y1: I.y,
                    y2: I.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${C}`
                )),
                w.oneNeg.map((I, C) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: I.x1,
                    x2: I.x2,
                    y1: I.y,
                    y2: I.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${C}`
                )),
                w.twoPos.map((I, C) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: I.x1,
                    x2: I.x2,
                    y1: I.y,
                    y2: I.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${C}`
                )),
                w.twoNeg.map((I, C) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: I.x1,
                    x2: I.x2,
                    y1: I.y,
                    y2: I.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${C}`
                ))
              ] }),
              /* @__PURE__ */ n.jsx(
                Bh,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (I) => I.x instanceof Date ? I.x : new Date(I.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && $.map((I, C) => {
                const Z = D(I.x instanceof Date ? I.x : new Date(I.x)), oe = S(I.y), J = x.has(C), V = k?.[C], H = [
                  "fdp-spc__point",
                  J && s ? "fdp-spc__point--ooc" : null,
                  l && V?.special && V.concern ? "fdp-spc__point--sc-concern" : null,
                  l && V?.special && V.improvement ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral (context-dependent) metrics: show purple when special cause present but neither improvement nor concern
                  l && p && V?.special && V.variation === Ue.Neither ? "fdp-spc__point--sc-no-judgement" : null,
                  V?.assurance === Pt.Pass ? "fdp-spc__point--assurance-pass" : null,
                  V?.assurance === Pt.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), G = `Point ${C + 1} value ${I.y}` + (V?.special ? " special cause" : "") + (V?.variation === Ue.Improvement ? " improving" : V?.variation === Ue.Concern ? " concern" : ""), le = N?.focused?.index === C;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: Z,
                    cy: oe,
                    r: 5,
                    className: H,
                    "data-variation": V?.variation,
                    "data-assurance": V?.assurance,
                    "aria-label": G,
                    ...le ? { "aria-describedby": `spc-tooltip-${C}` } : {}
                  },
                  C
                );
              }),
              d && l && k && $.map((I, C) => {
                const Z = k[C];
                if (!Z || !(Z.concern || Z.improvement)) return null;
                const oe = D(I.x instanceof Date ? I.x : new Date(I.x)), J = S(I.y);
                let V = J - 10;
                const H = 12, G = S.range()[0] - 4;
                V < H && (V = Math.min(J + 16, G));
                const le = D.range()[1], O = Math.min(Math.max(oe, 0), le - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: O,
                    y: V,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${Z.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: Z.concern ? "!" : "★"
                  },
                  `icon-${C}`
                );
              }),
              A && /* @__PURE__ */ n.jsx(
                ip,
                {
                  width: D.range()[1],
                  height: S.range()[0]
                }
              ),
              /* @__PURE__ */ n.jsx(
                Ai,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: E,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (I) => R(I),
                  enableNeutralNoJudgement: p,
                  showTrendGatingExplanation: u
                }
              )
            ] })
          }
        ),
        r && /* @__PURE__ */ n.jsx(
          Ph,
          {
            format: (I) => U({ ...I, x: I.x instanceof Date ? I.x : new Date(I.x) })
          }
        )
      ]
    }
  ) });
}, ip = ({
  width: e,
  height: t
}) => {
  const r = Ht();
  return r ? /* @__PURE__ */ n.jsx(
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
        r.focusNearest(i, l);
      },
      onMouseLeave: () => r.clear(),
      onKeyDown: (a) => {
        switch (a.key) {
          case "ArrowRight":
            r.focusNextPoint(), a.preventDefault();
            break;
          case "ArrowLeft":
            r.focusPrevPoint(), a.preventDefault();
            break;
          case "ArrowDown":
            r.focusNextSeries(), a.preventDefault();
            break;
          case "ArrowUp":
            r.focusPrevSeries(), a.preventDefault();
            break;
          case "Home":
            r.focusFirstPoint(), a.preventDefault();
            break;
          case "End":
            r.focusLastPoint(), a.preventDefault();
            break;
        }
      },
      style: { cursor: "crosshair" }
    }
  ) : null;
}, lp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Bt,
  Direction: ke,
  MetricPolarity: Oe,
  SPCAssuranceIcon: Br,
  SPCVariationIcon: Er,
  VariationJudgement: tt,
  VariationState: Me,
  getVariationColour: xs,
  getVariationTrend: Ar
}, Symbol.toStringTag, { value: "Module" })), Rx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Pt,
  AssuranceResult: Bt,
  BaselineSuggestionReason: Di,
  ChartType: fs,
  Direction: ke,
  Icons: lp,
  ImprovementDirection: ft,
  MetricPolarity: Oe,
  SPCAssuranceIcon: Br,
  SPCChart: sp,
  SPCTooltipOverlay: Ai,
  SPCVariationIcon: Er,
  SpcWarningCategory: Ti,
  SpcWarningCode: $i,
  SpcWarningSeverity: Et,
  VARIATION_COLOR_TOKENS: lt,
  VariationIcon: Ue,
  VariationJudgement: tt,
  VariationState: Me,
  buildSpc: Li,
  extractRuleIds: ps,
  getVariationColorHex: Jh,
  getVariationColorToken: Fi,
  getVariationColour: xs,
  getVariationTrend: Ar,
  ruleGlossary: hs,
  variationLabel: ms
}, Symbol.toStringTag, { value: "Module" })), cp = "150ms", dp = "300ms", up = "500ms", fp = "cubic-bezier(0.4, 0, 1, 1)", hp = "cubic-bezier(0, 0, 0.2, 1)", pp = "cubic-bezier(0.4, 0, 0.2, 1)", mp = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", gp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", xp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", bp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", yp = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", vp = "1px", _p = "2px", wp = "4px", Sp = "4px", kp = "4px", Cp = "2px", jp = "1px", Np = "0px", Tp = "4px", $p = "8px", Dp = "12px", Pi = "#d8dde0", Ri = "#4c6272", Hi = "#d8dde0", zi = "#aeb7bd", Wi = "#d5281b", Oi = "#005eb8", Ui = "#ffffff", Gi = "#212b32", Yi = "#007f3b", Vi = "#330072", qi = "#7c2855", Xi = "#d5281b", Ki = "#ffeb3b", Zi = "#fff9c4", Ji = "#ffb81c", Qi = "#ed8b00", el = "#00a499", tl = "#ae2573", nl = "#4c6272", rl = "#768692", al = "#aeb7bd", sl = "#d8dde0", ol = "#f0f4f5", Ip = "#212b32", Mp = "#4c6272", Lp = "#ffffff", Fp = "#212b32", Ap = "#005eb8", Ep = "#7c2855", Bp = "#003087", Pp = "#330072", Rp = "#ffeb3b", Hp = "#212b32", zp = "#d8dde0", Wp = "#ffffff33", Op = "#d5281b", Up = "#4c6272", Gp = "#ffffff", Yp = "#007f3b", Vp = "#ffffff", qp = "#006530", Xp = "#004021", Kp = "#004021", Zp = "#00000000", Jp = "#ffffff", Qp = "#005eb8", em = "#005eb8", tm = "#d9e5f2", nm = "#c7daf0", rm = "#005eb8", am = "#ffffff", sm = "#212b32", om = "#d9dde0", im = "#b3bcc2", lm = "#b3bcc2", cm = "#d5281b", dm = "#aa2016", um = "#6a140e", fm = "#6a140e", hm = "#005eb8", pm = "#004b93", mm = "#002f5c", gm = "#002f5c", xm = "8px", bm = "16px", ym = "12px", vm = "16px", _m = "4px", wm = "40px", Sm = "4px", km = "40px", Cm = "12px", jm = "16px", Nm = "32px", Tm = "16px", $m = "20px", Dm = "28px", Im = "9px", Mm = "2px", Lm = "16px", Fm = "24px", Am = "8px", Em = "24px", Bm = "16px", Pm = "4px", Rm = "4px", Hm = "4px", zm = "8px", Wm = "4px", Om = "16px", Um = "#007f3b", Gm = "#006530", Ym = "#004021", Vm = "#d8dde0", qm = "#ffffff", Xm = "#768692", Km = "#00000000", Zm = "#ffeb3b", Jm = "#00000000", Qm = "#ffffff", eg = "#d9e5f2", tg = "#c7daf0", ng = "#005eb8", rg = "#005eb8", il = "8px", ll = "16px", cl = "12px", dl = "16px", ag = "2px", sg = "4px", og = "4px", ig = "600", lg = "#ffffff", cg = "#d8dde0", dg = "#aeb7bd", ug = "#f0f4f5", fg = "#212b32", hg = "#212b32", pg = "#005eb8", ul = "16px", fl = "32px", hl = "16px", mg = "1px", gg = "4px", xg = "none", bg = "0 2px 4px rgba(0, 0, 0, 0.1)", yg = "#ffffff", vg = "#ffffff", _g = "#d8dde0", wg = "#ffffff", Sg = "#4c6272", kg = "#ffeb3b", Cg = "#d5281b", jg = "#aeb7bd", Ng = "#212b32", Tg = "#4c6272", $g = "#768692", Dg = "#212b32", Ig = "#ffffff", Mg = "600", Lg = "#d5281b", Fg = "600", Ag = "#4c6272", pl = "4px", ml = "40px", gl = "40px", xl = "12px", Eg = "2px", Bg = "4px", Pg = "0px", Rg = "16px", Hg = "18px", zg = "24px", Wg = "32px", Og = "34px", Ug = "32px", Gg = "40px", Yg = "48px", Vg = "5.4ex", qg = "7.2ex", Xg = "9ex", Kg = "10.8ex", Zg = "20ex", Jg = "38ex", Qg = "56ex", e0 = "44px", t0 = "40px", n0 = "1020px", r0 = "100%", a0 = "50%", s0 = "33.333%", o0 = "25%", i0 = "20%", l0 = "320px", c0 = "641px", d0 = "1025px", u0 = "1280px", f0 = "960px", h0 = "32px", p0 = "16px", m0 = "#d5281b", g0 = "#d5281b", x0 = "#ffffff", b0 = "#007f3b", y0 = "#007f3b", v0 = "#ffffff", _0 = "#ffeb3b", w0 = "#ffeb3b", S0 = "#212b32", k0 = "#005eb8", C0 = "#005eb8", j0 = "#ffffff", N0 = "#d8dde0", T0 = "#aeb7bd", $0 = "#768692", D0 = "0 4px 0 #004021", I0 = "0 4px 0 #005eb8", M0 = "0 4px 0 #6a140e", L0 = "0 4px 0 #ffeb3b", F0 = "none", A0 = "0 2px 4px rgba(0, 0, 0, 0.1)", E0 = "4px", B0 = "0px", P0 = "solid", R0 = "0 0 0 3px #ffeb3b", H0 = "0 0 0 3px #ffeb3b", z0 = "none", W0 = "0 1px 3px rgba(0, 0, 0, 0.12)", O0 = "0 2px 6px rgba(0, 0, 0, 0.16)", U0 = "0 4px 12px rgba(0, 0, 0, 0.20)", bl = "0", yl = "4px", vl = "8px", _l = "16px", wl = "24px", Sl = "32px", kl = "40px", Cl = "48px", jl = "56px", Nl = "64px", $a = "0", Da = "0", Ia = "4px", Ma = "4px", La = "8px", Fa = "8px", Aa = "8px", Ea = "16px", Ba = "16px", Pa = "24px", Ra = "24px", Ha = "32px", za = "32px", Wa = "40px", Oa = "40px", Ua = "48px", Ga = "48px", Ya = "56px", Va = "56px", qa = "64px", ar = "Frutiger W01", sr = "Arial, Helvetica, sans-serif", or = "sans-serif", ir = "400", lr = "600", cr = "400", dr = "12px", ur = "14px", fr = "12pt", hr = "14px", pr = "16px", mr = "12pt", gr = "16px", xr = "19px", br = "13pt", yr = "19px", vr = "22px", _r = "15pt", wr = "22px", Sr = "26px", kr = "17pt", Cr = "27px", jr = "36px", Nr = "20pt", Tr = "33px", $r = "48px", Dr = "24pt", Xa = "16px", Ka = "24px", bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, _t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, St = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, kt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, G0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: cp,
  AnimationDurationNormal: dp,
  AnimationDurationSlow: up,
  AnimationEasingBounce: mp,
  AnimationEasingEaseIn: fp,
  AnimationEasingEaseInOut: pp,
  AnimationEasingEaseOut: hp,
  BorderColorCard: Hi,
  BorderColorCardHover: zi,
  BorderColorDefault: Pi,
  BorderColorError: Wi,
  BorderColorForm: Ri,
  BorderRadiusLarge: Dp,
  BorderRadiusMedium: $p,
  BorderRadiusNone: Np,
  BorderRadiusSmall: Tp,
  BorderWidthCardBottom: Sp,
  BorderWidthDefault: vp,
  BorderWidthFormElement: _p,
  BorderWidthFormElementError: wp,
  BorderWidthPanel: kp,
  BorderWidthTableCell: jp,
  BorderWidthTableHeader: Cp,
  BreakpointDesktop: d0,
  BreakpointLargeDesktop: u0,
  BreakpointMobile: l0,
  BreakpointTablet: c0,
  ButtonBorderRadius: sg,
  ButtonBorderWidth: ag,
  ButtonPrimaryBackgroundActive: Ym,
  ButtonPrimaryBackgroundDefault: Um,
  ButtonPrimaryBackgroundDisabled: Vm,
  ButtonPrimaryBackgroundHover: Gm,
  ButtonPrimaryBorderDefault: Km,
  ButtonPrimaryBorderFocus: Zm,
  ButtonPrimaryTextDefault: qm,
  ButtonPrimaryTextDisabled: Xm,
  ButtonSecondaryBackgroundActive: tg,
  ButtonSecondaryBackgroundDefault: Jm,
  ButtonSecondaryBackgroundHover: eg,
  ButtonSecondaryBackgroundSolid: Qm,
  ButtonSecondaryBorderDefault: rg,
  ButtonSecondaryTextDefault: ng,
  ButtonShadowSize: og,
  ButtonSpacingPaddingHorizontalDesktop: dl,
  ButtonSpacingPaddingHorizontalMobile: ll,
  ButtonSpacingPaddingVerticalDesktop: cl,
  ButtonSpacingPaddingVerticalMobile: il,
  ButtonTypographyWeight: ig,
  CardBackgroundDefault: lg,
  CardBorderBottom: ug,
  CardBorderDefault: cg,
  CardBorderHover: dg,
  CardBorderWidthBottom: gg,
  CardBorderWidthDefault: mg,
  CardShadowDefault: xg,
  CardShadowHover: bg,
  CardSpacingHeadingMargin: hl,
  CardSpacingPaddingDesktop: fl,
  CardSpacingPaddingMobile: ul,
  CardTextDescription: hg,
  CardTextHeading: fg,
  CardTextLink: pg,
  ColorBorderDefault: zp,
  ColorBorderSecondary: Wp,
  ColorButtonLoginActive: mm,
  ColorButtonLoginBackground: hm,
  ColorButtonLoginHover: pm,
  ColorButtonLoginShadow: gm,
  ColorButtonPrimaryActive: Xp,
  ColorButtonPrimaryBackground: Yp,
  ColorButtonPrimaryHover: qp,
  ColorButtonPrimaryShadow: Kp,
  ColorButtonPrimaryText: Vp,
  ColorButtonReverseActive: im,
  ColorButtonReverseBackground: am,
  ColorButtonReverseHover: om,
  ColorButtonReverseShadow: lm,
  ColorButtonReverseText: sm,
  ColorButtonSecondaryActive: nm,
  ColorButtonSecondaryBackground: Zp,
  ColorButtonSecondaryBackgroundSolid: Jp,
  ColorButtonSecondaryBorder: Qp,
  ColorButtonSecondaryHover: tm,
  ColorButtonSecondaryShadow: rm,
  ColorButtonSecondaryText: em,
  ColorButtonWarningActive: um,
  ColorButtonWarningBackground: cm,
  ColorButtonWarningHover: dm,
  ColorButtonWarningShadow: fm,
  ColorError: Op,
  ColorFocusBackground: Rp,
  ColorFocusText: Hp,
  ColorFormBackground: Gp,
  ColorFormBorder: Up,
  ColorGrey1: nl,
  ColorGrey2: rl,
  ColorGrey3: al,
  ColorGrey4: sl,
  ColorGrey5: ol,
  ColorLinkActive: Bp,
  ColorLinkDefault: Ap,
  ColorLinkHover: Ep,
  ColorLinkVisited: Pp,
  ColorPrimaryBlack: Gi,
  ColorPrimaryBlue: Oi,
  ColorPrimaryDarkPink: qi,
  ColorPrimaryGreen: Yi,
  ColorPrimaryPurple: Vi,
  ColorPrimaryRed: Xi,
  ColorPrimaryWhite: Ui,
  ColorPrimaryYellow: Ki,
  ColorSecondaryAquaGreen: el,
  ColorSecondaryOrange: Qi,
  ColorSecondaryPaleYellow: Zi,
  ColorSecondaryPink: tl,
  ColorSecondaryWarmYellow: Ji,
  ColorTextPrimary: Ip,
  ColorTextPrint: Fp,
  ColorTextReverse: Lp,
  ColorTextSecondary: Mp,
  ComponentBlur: Rm,
  ComponentBreadcrumbChevronMarginLeft: Im,
  ComponentBreadcrumbChevronMarginRight: Mm,
  ComponentBreadcrumbPaddingTopDesktop: Fm,
  ComponentBreadcrumbPaddingTopMobile: Lm,
  ComponentButtonPaddingDesktopHorizontal: vm,
  ComponentButtonPaddingDesktopVertical: ym,
  ComponentButtonPaddingMobileHorizontal: bm,
  ComponentButtonPaddingMobileVertical: xm,
  ComponentButtonShadowSize: _m,
  ComponentCardHeadingMargin: Tm,
  ComponentCardPaddingDesktop: Nm,
  ComponentCardPaddingMobile: jm,
  ComponentDetails: zm,
  ComponentExpander: Wm,
  ComponentFormCheckboxLabelPadding: Cm,
  ComponentFormCheckboxSize: km,
  ComponentFormInputMinHeight: wm,
  ComponentFormInputPadding: Sm,
  ComponentLink: Hm,
  ComponentPagination: Om,
  ComponentPanelPaddingDesktop: Dm,
  ComponentPanelPaddingMobile: $m,
  ComponentSpread: Pm,
  ComponentSummaryListCellPaddingHorizontal: Em,
  ComponentSummaryListCellPaddingVertical: Am,
  ComponentSummaryListRowMargin: Bm,
  ElevationHigh: U0,
  ElevationLow: W0,
  ElevationMedium: O0,
  ElevationNone: z0,
  FocusOutlineOffset: B0,
  FocusOutlineStyle: P0,
  FocusOutlineWidth: E0,
  FocusShadowButton: H0,
  FocusShadowInput: R0,
  FontFamilyBase: ar,
  FontFamilyFallback: sr,
  FontFamilyPrint: or,
  FontLineHeightBase: Ka,
  FontSize14Mobile: dr,
  FontSize14Print: fr,
  FontSize14Tablet: ur,
  FontSize16Mobile: hr,
  FontSize16Print: mr,
  FontSize16Tablet: pr,
  FontSize19Mobile: gr,
  FontSize19Print: br,
  FontSize19Tablet: xr,
  FontSize22Mobile: yr,
  FontSize22Print: _r,
  FontSize22Tablet: vr,
  FontSize26Mobile: wr,
  FontSize26Print: kr,
  FontSize26Tablet: Sr,
  FontSize36Mobile: Cr,
  FontSize36Print: Nr,
  FontSize36Tablet: jr,
  FontSize48Mobile: Tr,
  FontSize48Print: Dr,
  FontSize48Tablet: $r,
  FontSizeBase: Xa,
  FontWeightBold: lr,
  FontWeightLight: cr,
  FontWeightNormal: ir,
  FormBorderRadius: Pg,
  FormBorderWidthDefault: Eg,
  FormBorderWidthError: Bg,
  FormErrorTextDefault: Lg,
  FormErrorTypographyWeight: Fg,
  FormHintTextDefault: Ag,
  FormInputBackgroundDefault: yg,
  FormInputBackgroundDisabled: _g,
  FormInputBackgroundError: wg,
  FormInputBackgroundFocus: vg,
  FormInputBorderDefault: Sg,
  FormInputBorderDisabled: jg,
  FormInputBorderError: Cg,
  FormInputBorderFocus: kg,
  FormInputTextDefault: Ng,
  FormInputTextDisabled: $g,
  FormInputTextPlaceholder: Tg,
  FormLabelTextDefault: Dg,
  FormLabelTextRequired: Ig,
  FormLabelTypographyWeight: Mg,
  FormSpacingCheckboxLabelPadding: xl,
  FormSpacingCheckboxSize: gl,
  FormSpacingInputMinHeight: ml,
  FormSpacingInputPadding: pl,
  GridGutter: h0,
  GridGutterHalf: p0,
  GridPageWidth: f0,
  HeadingsNhsukHeadingL: yt,
  HeadingsNhsukHeadingM: vt,
  HeadingsNhsukHeadingS: _t,
  HeadingsNhsukHeadingXl: bt,
  HeadingsNhsukHeadingXs: wt,
  LayoutColumnActions: i0,
  LayoutColumnFull: r0,
  LayoutColumnHalf: a0,
  LayoutColumnQuarter: o0,
  LayoutColumnThird: s0,
  LayoutContainerMaxWidth: n0,
  ParagraphsBody: St,
  ParagraphsBodyLarge: kt,
  ParagraphsBodySmall: Ct,
  ParagraphsLedeText: jt,
  ParagraphsLedeTextSmall: Nt,
  ShadowButtonDefault: D0,
  ShadowButtonFocus: L0,
  ShadowButtonSecondary: I0,
  ShadowButtonWarning: M0,
  ShadowCardDefault: F0,
  ShadowCardHover: A0,
  SizeButtonMinHeightDesktop: t0,
  SizeButtonMinHeightMobile: e0,
  SizeFormControlLarge: Yg,
  SizeFormControlMedium: Gg,
  SizeFormControlSmall: Ug,
  SizeFormInputWidth2xl: Jg,
  SizeFormInputWidth3xl: Qg,
  SizeFormInputWidthLg: Kg,
  SizeFormInputWidthMd: Xg,
  SizeFormInputWidthSm: qg,
  SizeFormInputWidthXl: Zg,
  SizeFormInputWidthXs: Vg,
  SizeIconExtraLarge: Wg,
  SizeIconLarge: zg,
  SizeIconMedium: Hg,
  SizeIconNhsDefault: Og,
  SizeIconSmall: Rg,
  Spacing0: bl,
  Spacing1: yl,
  Spacing2: vl,
  Spacing3: _l,
  Spacing4: wl,
  Spacing5: Sl,
  Spacing6: kl,
  Spacing7: Cl,
  Spacing8: jl,
  Spacing9: Nl,
  SpacingResponsive0Mobile: $a,
  SpacingResponsive0Tablet: Da,
  SpacingResponsive1Mobile: Ia,
  SpacingResponsive1Tablet: Ma,
  SpacingResponsive2Mobile: La,
  SpacingResponsive2Tablet: Fa,
  SpacingResponsive3Mobile: Aa,
  SpacingResponsive3Tablet: Ea,
  SpacingResponsive4Mobile: Ba,
  SpacingResponsive4Tablet: Pa,
  SpacingResponsive5Mobile: Ra,
  SpacingResponsive5Tablet: Ha,
  SpacingResponsive6Mobile: za,
  SpacingResponsive6Tablet: Wa,
  SpacingResponsive7Mobile: Oa,
  SpacingResponsive7Tablet: Ua,
  SpacingResponsive8Mobile: Ga,
  SpacingResponsive8Tablet: Ya,
  SpacingResponsive9Mobile: Va,
  SpacingResponsive9Tablet: qa,
  StateDisabledBackground: N0,
  StateDisabledBorder: T0,
  StateDisabledText: $0,
  StateErrorBackground: m0,
  StateErrorBorder: g0,
  StateErrorText: x0,
  StateInfoBackground: k0,
  StateInfoBorder: C0,
  StateInfoText: j0,
  StateSuccessBackground: b0,
  StateSuccessBorder: y0,
  StateSuccessText: v0,
  StateWarningBackground: _0,
  StateWarningBorder: w0,
  StateWarningText: S0,
  TransitionButtonDefault: gp,
  TransitionButtonShadow: xp,
  TransitionCardHover: yp,
  TransitionInputFocus: bp
}, Symbol.toStringTag, { value: "Module" })), Hx = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), zx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: bt.fontFamily,
      fontWeight: bt.fontWeight,
      fontSize: bt.fontSize.mobile,
      lineHeight: bt.lineHeight,
      marginTop: bt.marginTop,
      marginBottom: bt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Wx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: yt.fontFamily,
      fontWeight: yt.fontWeight,
      fontSize: yt.fontSize.mobile,
      lineHeight: yt.lineHeight,
      marginTop: yt.marginTop,
      marginBottom: yt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Ox = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: vt.fontFamily,
      fontWeight: vt.fontWeight,
      fontSize: vt.fontSize.mobile,
      lineHeight: vt.lineHeight,
      marginTop: vt.marginTop,
      marginBottom: vt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Ux = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: _t.fontFamily,
      fontWeight: _t.fontWeight,
      fontSize: _t.fontSize.mobile,
      lineHeight: _t.lineHeight,
      marginTop: _t.marginTop,
      marginBottom: _t.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Gx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: wt.fontFamily,
      fontWeight: wt.fontWeight,
      fontSize: wt.fontSize.mobile,
      lineHeight: wt.lineHeight,
      marginTop: wt.marginTop,
      marginBottom: wt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Yx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: St.fontFamily,
      fontWeight: St.fontWeight,
      fontSize: St.fontSize.mobile,
      lineHeight: St.lineHeight,
      marginTop: St.marginTop,
      marginBottom: St.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Vx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: kt.fontFamily,
      fontWeight: kt.fontWeight,
      fontSize: kt.fontSize.mobile,
      lineHeight: kt.lineHeight,
      marginTop: kt.marginTop,
      marginBottom: kt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), qx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ct.fontFamily,
      fontWeight: Ct.fontWeight,
      fontSize: Ct.fontSize.mobile,
      lineHeight: Ct.lineHeight,
      marginTop: Ct.marginTop,
      marginBottom: Ct.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Xx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: jt.fontFamily,
      fontWeight: jt.fontWeight,
      fontSize: jt.fontSize.mobile,
      lineHeight: jt.lineHeight,
      marginTop: jt.marginTop,
      marginBottom: jt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Kx = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Nt.fontFamily,
      fontWeight: Nt.fontWeight,
      fontSize: Nt.fontSize.mobile,
      lineHeight: Nt.lineHeight,
      marginTop: Nt.marginTop,
      marginBottom: Nt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Zx = () => De(() => G0, []), Jx = () => De(() => ({
  // Border colors
  BorderColorDefault: Pi,
  BorderColorForm: Ri,
  BorderColorCard: Hi,
  BorderColorCardHover: zi,
  BorderColorError: Wi,
  // Primary colors
  ColorPrimaryBlue: Oi,
  ColorPrimaryWhite: Ui,
  ColorPrimaryBlack: Gi,
  ColorPrimaryGreen: Yi,
  ColorPrimaryPurple: Vi,
  ColorPrimaryDarkPink: qi,
  ColorPrimaryRed: Xi,
  ColorPrimaryYellow: Ki,
  // Secondary colors
  ColorSecondaryPaleYellow: Zi,
  ColorSecondaryWarmYellow: Ji,
  ColorSecondaryOrange: Qi,
  ColorSecondaryAquaGreen: el,
  ColorSecondaryPink: tl,
  // Grey scale
  ColorGrey1: nl,
  ColorGrey2: rl,
  ColorGrey3: al,
  ColorGrey4: sl,
  ColorGrey5: ol
}), []), Qx = () => De(() => ({
  Spacing0: bl,
  Spacing1: yl,
  Spacing2: vl,
  Spacing3: _l,
  Spacing4: wl,
  Spacing5: Sl,
  Spacing6: kl,
  Spacing7: Cl,
  Spacing8: jl,
  Spacing9: Nl
}), []), eb = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: dr,
    Size16: hr,
    Size19: gr,
    Size22: yr,
    Size26: wr,
    Size36: Cr,
    Size48: Tr
  },
  Tablet: {
    Size14: ur,
    Size16: pr,
    Size19: xr,
    Size22: vr,
    Size26: Sr,
    Size36: jr,
    Size48: $r
  },
  Print: {
    Size14: fr,
    Size16: mr,
    Size19: br,
    Size22: _r,
    Size26: kr,
    Size36: Nr,
    Size48: Dr
  },
  Family: {
    Base: ar,
    Fallback: sr,
    Print: or
  },
  Weight: {
    Normal: ir,
    Bold: lr,
    Light: cr
  },
  Base: {
    Size: Xa,
    LineHeight: Ka
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ar,
  FontFamilyFallback: sr,
  FontFamilyPrint: or,
  FontWeightNormal: ir,
  FontWeightBold: lr,
  FontWeightLight: cr,
  FontSize14Mobile: dr,
  FontSize14Tablet: ur,
  FontSize14Print: fr,
  FontSize16Mobile: hr,
  FontSize16Tablet: pr,
  FontSize16Print: mr,
  FontSize19Mobile: gr,
  FontSize19Tablet: xr,
  FontSize19Print: br,
  FontSize22Mobile: yr,
  FontSize22Tablet: vr,
  FontSize22Print: _r,
  FontSize26Mobile: wr,
  FontSize26Tablet: Sr,
  FontSize26Print: kr,
  FontSize36Mobile: Cr,
  FontSize36Tablet: jr,
  FontSize36Print: Nr,
  FontSize48Mobile: Tr,
  FontSize48Tablet: $r,
  FontSize48Print: Dr,
  FontSizeBase: Xa,
  FontLineHeightBase: Ka
}), []), tb = () => De(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: $a,
    Size1: Ia,
    Size2: La,
    Size3: Aa,
    Size4: Ba,
    Size5: Ra,
    Size6: za,
    Size7: Oa,
    Size8: Ga,
    Size9: Va
  },
  Tablet: {
    Size0: Da,
    Size1: Ma,
    Size2: Fa,
    Size3: Ea,
    Size4: Pa,
    Size5: Ha,
    Size6: Wa,
    Size7: Ua,
    Size8: Ya,
    Size9: qa
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: $a,
  SpacingResponsive0Tablet: Da,
  SpacingResponsive1Mobile: Ia,
  SpacingResponsive1Tablet: Ma,
  SpacingResponsive2Mobile: La,
  SpacingResponsive2Tablet: Fa,
  SpacingResponsive3Mobile: Aa,
  SpacingResponsive3Tablet: Ea,
  SpacingResponsive4Mobile: Ba,
  SpacingResponsive4Tablet: Pa,
  SpacingResponsive5Mobile: Ra,
  SpacingResponsive5Tablet: Ha,
  SpacingResponsive6Mobile: za,
  SpacingResponsive6Tablet: Wa,
  SpacingResponsive7Mobile: Oa,
  SpacingResponsive7Tablet: Ua,
  SpacingResponsive8Mobile: Ga,
  SpacingResponsive8Tablet: Ya,
  SpacingResponsive9Mobile: Va,
  SpacingResponsive9Tablet: qa
}), []), nb = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: il,
  ButtonSpacingPaddingHorizontalMobile: ll,
  ButtonSpacingPaddingVerticalDesktop: cl,
  ButtonSpacingPaddingHorizontalDesktop: dl,
  // Card spacing	
  CardSpacingPaddingMobile: ul,
  CardSpacingPaddingDesktop: fl,
  CardSpacingHeadingMargin: hl,
  // Form spacing
  FormSpacingInputPadding: pl,
  FormSpacingInputMinHeight: ml,
  FormSpacingCheckboxSize: gl,
  FormSpacingCheckboxLabelPadding: xl
}), []), rb = () => De(() => ({
  xl: bt,
  l: yt,
  m: vt,
  s: _t,
  xs: wt
}), []), ab = () => De(() => ({
  body: St,
  bodyLarge: kt,
  bodySmall: Ct,
  ledeText: jt,
  ledeTextSmall: Nt
}), []), sb = () => De(() => ({
  headings: {
    xl: bt,
    l: yt,
    m: vt,
    s: _t,
    xs: wt
  },
  paragraphs: {
    body: St,
    bodyLarge: kt,
    bodySmall: Ct,
    ledeText: jt,
    ledeTextSmall: Nt
  },
  fonts: {
    family: {
      base: ar,
      fallback: sr,
      print: or
    },
    weight: {
      normal: ir,
      bold: lr,
      light: cr
    },
    sizes: {
      mobile: {
        size14: dr,
        size16: hr,
        size19: gr,
        size22: yr,
        size26: wr,
        size36: Cr,
        size48: Tr
      },
      tablet: {
        size14: ur,
        size16: pr,
        size19: xr,
        size22: vr,
        size26: Sr,
        size36: jr,
        size48: $r
      },
      print: {
        size14: fr,
        size16: mr,
        size19: br,
        size22: _r,
        size26: kr,
        size36: Nr,
        size48: Dr
      }
    }
  }
}), []);
function ob(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = Y.useState(t), s = Y.useCallback(() => o("three-column"), []), i = Y.useCallback(() => o((d) => d === "three-column" ? r : d), [r]), l = Y.useCallback(() => o((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Tl = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, nt = {
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
function ib(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...Tl, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${nt.normal.eot}?#iefix") format("eot"),
       url("${t}${nt.normal.woff2}") format("woff2"),
       url("${t}${nt.normal.woff}") format("woff"),
       url("${t}${nt.normal.ttf}") format("truetype");
  src: url("${t}${nt.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${nt.bold.eot}?#iefix") format("eot"),
       url("${t}${nt.bold.woff2}") format("woff2"),
       url("${t}${nt.bold.woff}") format("woff"),
       url("${t}${nt.bold.ttf}") format("truetype");
  src: url("${t}${nt.bold.eot}");
}`), a.join(`
`);
}
function lb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...Tl, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${nt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${nt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${nt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${nt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const cb = '"Frutiger W01", Arial, Helvetica, sans-serif', db = "Arial, Helvetica, sans-serif";
async function ub() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Kl as Account,
  K0 as ActionLink,
  Cx as AdaptiveDataGrid,
  cp as AnimationDurationFast,
  dp as AnimationDurationNormal,
  up as AnimationDurationSlow,
  mp as AnimationEasingBounce,
  fp as AnimationEasingEaseIn,
  pp as AnimationEasingEaseInOut,
  hp as AnimationEasingEaseOut,
  ti as AppointmentCard,
  Lx as AreaSeriesPrimitive,
  nf as AriaDataGrid,
  va as AriaTabsDataGrid,
  Cx as AriaTabsDataGridAdaptive,
  bo as Axis,
  fa as BackLink,
  Ax as BandScalesProvider,
  Fx as BarSeriesPrimitive,
  Hi as BorderColorCard,
  zi as BorderColorCardHover,
  Pi as BorderColorDefault,
  Wi as BorderColorError,
  Ri as BorderColorForm,
  Dp as BorderRadiusLarge,
  $p as BorderRadiusMedium,
  Np as BorderRadiusNone,
  Tp as BorderRadiusSmall,
  Sp as BorderWidthCardBottom,
  vp as BorderWidthDefault,
  _p as BorderWidthFormElement,
  wp as BorderWidthFormElementError,
  kp as BorderWidthPanel,
  jp as BorderWidthTableCell,
  Cp as BorderWidthTableHeader,
  Gu as Breadcrumb,
  d0 as BreakpointDesktop,
  u0 as BreakpointLargeDesktop,
  l0 as BreakpointMobile,
  c0 as BreakpointTablet,
  Qe as Button,
  sg as ButtonBorderRadius,
  ag as ButtonBorderWidth,
  Ym as ButtonPrimaryBackgroundActive,
  Um as ButtonPrimaryBackgroundDefault,
  Vm as ButtonPrimaryBackgroundDisabled,
  Gm as ButtonPrimaryBackgroundHover,
  Km as ButtonPrimaryBorderDefault,
  Zm as ButtonPrimaryBorderFocus,
  qm as ButtonPrimaryTextDefault,
  Xm as ButtonPrimaryTextDisabled,
  tg as ButtonSecondaryBackgroundActive,
  Jm as ButtonSecondaryBackgroundDefault,
  eg as ButtonSecondaryBackgroundHover,
  Qm as ButtonSecondaryBackgroundSolid,
  rg as ButtonSecondaryBorderDefault,
  ng as ButtonSecondaryTextDefault,
  og as ButtonShadowSize,
  dl as ButtonSpacingPaddingHorizontalDesktop,
  ll as ButtonSpacingPaddingHorizontalMobile,
  cl as ButtonSpacingPaddingVerticalDesktop,
  il as ButtonSpacingPaddingVerticalMobile,
  ig as ButtonTypographyWeight,
  Jo as Card,
  lg as CardBackgroundDefault,
  ug as CardBorderBottom,
  cg as CardBorderDefault,
  dg as CardBorderHover,
  gg as CardBorderWidthBottom,
  mg as CardBorderWidthDefault,
  hx as CardGroup,
  px as CardGroupItem,
  xg as CardShadowDefault,
  bg as CardShadowHover,
  hl as CardSpacingHeadingMargin,
  fl as CardSpacingPaddingDesktop,
  ul as CardSpacingPaddingMobile,
  hg as CardTextDescription,
  fg as CardTextHeading,
  pg as CardTextLink,
  mx as CareCard,
  Z0 as CharacterCount,
  Bx as ChartEnhancer,
  Ex as ChartNoScript,
  Qf as ChartRoot,
  tc as Checkbox,
  ac as Checkboxes,
  zp as ColorBorderDefault,
  Wp as ColorBorderSecondary,
  mm as ColorButtonLoginActive,
  hm as ColorButtonLoginBackground,
  pm as ColorButtonLoginHover,
  gm as ColorButtonLoginShadow,
  Xp as ColorButtonPrimaryActive,
  Yp as ColorButtonPrimaryBackground,
  qp as ColorButtonPrimaryHover,
  Kp as ColorButtonPrimaryShadow,
  Vp as ColorButtonPrimaryText,
  im as ColorButtonReverseActive,
  am as ColorButtonReverseBackground,
  om as ColorButtonReverseHover,
  lm as ColorButtonReverseShadow,
  sm as ColorButtonReverseText,
  nm as ColorButtonSecondaryActive,
  Zp as ColorButtonSecondaryBackground,
  Jp as ColorButtonSecondaryBackgroundSolid,
  Qp as ColorButtonSecondaryBorder,
  tm as ColorButtonSecondaryHover,
  rm as ColorButtonSecondaryShadow,
  em as ColorButtonSecondaryText,
  um as ColorButtonWarningActive,
  cm as ColorButtonWarningBackground,
  dm as ColorButtonWarningHover,
  fm as ColorButtonWarningShadow,
  Op as ColorError,
  Rp as ColorFocusBackground,
  Hp as ColorFocusText,
  Gp as ColorFormBackground,
  Up as ColorFormBorder,
  nl as ColorGrey1,
  rl as ColorGrey2,
  al as ColorGrey3,
  sl as ColorGrey4,
  ol as ColorGrey5,
  Bp as ColorLinkActive,
  Ap as ColorLinkDefault,
  Ep as ColorLinkHover,
  Pp as ColorLinkVisited,
  Gi as ColorPrimaryBlack,
  Oi as ColorPrimaryBlue,
  qi as ColorPrimaryDarkPink,
  Yi as ColorPrimaryGreen,
  Vi as ColorPrimaryPurple,
  Xi as ColorPrimaryRed,
  Ui as ColorPrimaryWhite,
  Ki as ColorPrimaryYellow,
  el as ColorSecondaryAquaGreen,
  Qi as ColorSecondaryOrange,
  Zi as ColorSecondaryPaleYellow,
  tl as ColorSecondaryPink,
  Ji as ColorSecondaryWarmYellow,
  Ip as ColorTextPrimary,
  Fp as ColorTextPrint,
  Lp as ColorTextReverse,
  Mp as ColorTextSecondary,
  _n as Column,
  Rm as ComponentBlur,
  Im as ComponentBreadcrumbChevronMarginLeft,
  Mm as ComponentBreadcrumbChevronMarginRight,
  Fm as ComponentBreadcrumbPaddingTopDesktop,
  Lm as ComponentBreadcrumbPaddingTopMobile,
  vm as ComponentButtonPaddingDesktopHorizontal,
  ym as ComponentButtonPaddingDesktopVertical,
  bm as ComponentButtonPaddingMobileHorizontal,
  xm as ComponentButtonPaddingMobileVertical,
  _m as ComponentButtonShadowSize,
  Tm as ComponentCardHeadingMargin,
  Nm as ComponentCardPaddingDesktop,
  jm as ComponentCardPaddingMobile,
  zm as ComponentDetails,
  Wm as ComponentExpander,
  Cm as ComponentFormCheckboxLabelPadding,
  km as ComponentFormCheckboxSize,
  wm as ComponentFormInputMinHeight,
  Sm as ComponentFormInputPadding,
  Hm as ComponentLink,
  Om as ComponentPagination,
  Dm as ComponentPanelPaddingDesktop,
  $m as ComponentPanelPaddingMobile,
  Pm as ComponentSpread,
  Em as ComponentSummaryListCellPaddingHorizontal,
  Am as ComponentSummaryListCellPaddingVertical,
  Bm as ComponentSummaryListRowMargin,
  jo as Container,
  fx as ContentsList,
  Tl as DEFAULT_FONT_CONFIG,
  wx as DashboardSummaryGrid,
  ox as DateInput,
  Vu as Details,
  qu as DoDontList,
  U0 as ElevationHigh,
  W0 as ElevationLow,
  O0 as ElevationMedium,
  z0 as ElevationNone,
  js as ErrorMessage,
  sx as ErrorSummary,
  Xu as Expander,
  nt as FRUTIGER_FONT_FILES,
  Qa as Fieldset,
  B0 as FocusOutlineOffset,
  P0 as FocusOutlineStyle,
  E0 as FocusOutlineWidth,
  H0 as FocusShadowButton,
  R0 as FocusShadowInput,
  ar as FontFamilyBase,
  sr as FontFamilyFallback,
  or as FontFamilyPrint,
  Ka as FontLineHeightBase,
  dr as FontSize14Mobile,
  fr as FontSize14Print,
  ur as FontSize14Tablet,
  hr as FontSize16Mobile,
  mr as FontSize16Print,
  pr as FontSize16Tablet,
  gr as FontSize19Mobile,
  br as FontSize19Print,
  xr as FontSize19Tablet,
  yr as FontSize22Mobile,
  _r as FontSize22Print,
  vr as FontSize22Tablet,
  wr as FontSize26Mobile,
  kr as FontSize26Print,
  Sr as FontSize26Tablet,
  Cr as FontSize36Mobile,
  Nr as FontSize36Print,
  jr as FontSize36Tablet,
  Tr as FontSize48Mobile,
  Dr as FontSize48Print,
  $r as FontSize48Tablet,
  Xa as FontSizeBase,
  lr as FontWeightBold,
  cr as FontWeightLight,
  ir as FontWeightNormal,
  Mo as Footer,
  Pg as FormBorderRadius,
  Eg as FormBorderWidthDefault,
  Bg as FormBorderWidthError,
  Lg as FormErrorTextDefault,
  Fg as FormErrorTypographyWeight,
  Ag as FormHintTextDefault,
  yg as FormInputBackgroundDefault,
  _g as FormInputBackgroundDisabled,
  wg as FormInputBackgroundError,
  vg as FormInputBackgroundFocus,
  Sg as FormInputBorderDefault,
  jg as FormInputBorderDisabled,
  Cg as FormInputBorderError,
  kg as FormInputBorderFocus,
  Ng as FormInputTextDefault,
  $g as FormInputTextDisabled,
  Tg as FormInputTextPlaceholder,
  Dg as FormLabelTextDefault,
  Ig as FormLabelTextRequired,
  Mg as FormLabelTypographyWeight,
  xl as FormSpacingCheckboxLabelPadding,
  gl as FormSpacingCheckboxSize,
  ml as FormSpacingInputMinHeight,
  pl as FormSpacingInputPadding,
  dx as GanttChart,
  ha as Grid,
  h0 as GridGutter,
  p0 as GridGutterHalf,
  th as GridLines,
  f0 as GridPageWidth,
  Io as Header,
  cx as HeaderSSR,
  bc as HeaderSearch,
  Io as HeaderStatic,
  Dt as Heading,
  yt as HeadingsNhsukHeadingL,
  vt as HeadingsNhsukHeadingM,
  _t as HeadingsNhsukHeadingS,
  bt as HeadingsNhsukHeadingXl,
  wt as HeadingsNhsukHeadingXs,
  yc as Hero,
  ko as Hint,
  vx as Images,
  Za as Input,
  gx as InsetText,
  Ja as Label,
  i0 as LayoutColumnActions,
  r0 as LayoutColumnFull,
  a0 as LayoutColumnHalf,
  o0 as LayoutColumnQuarter,
  s0 as LayoutColumnThird,
  n0 as LayoutContainerMaxWidth,
  Mx as Legend,
  eh as LineScalesProvider,
  Bh as LineSeriesPrimitive,
  uc as List,
  No as MainWrapper,
  ni as MedicationCard,
  Px as MetricCard,
  Yx as NHSBodyText,
  Vx as NHSBodyTextLarge,
  qx as NHSBodyTextSmall,
  zx as NHSHeading1,
  Wx as NHSHeading2,
  Ox as NHSHeading3,
  Ux as NHSHeading4,
  Gx as NHSHeading5,
  Xx as NHSLedeText,
  Kx as NHSLedeTextSmall,
  lx as NHSThemeProvider,
  db as NHS_FALLBACK_FONT_STACK,
  cb as NHS_FONT_STACK,
  Gf as NavigationSplitView,
  Nx as PageTemplate,
  ux as Pagination,
  Yu as Panel,
  St as ParagraphsBody,
  kt as ParagraphsBodyLarge,
  Ct as ParagraphsBodySmall,
  jt as ParagraphsLedeText,
  Nt as ParagraphsLedeTextSmall,
  ei as PatientCard,
  Vf as ProductRoadmap,
  J0 as Radios,
  Q0 as RadiosServer,
  Cx as ResponsiveDataGrid,
  jx as ResponsiveDataGridDemo,
  Yt as Row,
  Rx as SPC,
  sp as SPCChart,
  Wn as Select,
  ic as SelectOption,
  D0 as ShadowButtonDefault,
  L0 as ShadowButtonFocus,
  I0 as ShadowButtonSecondary,
  M0 as ShadowButtonWarning,
  F0 as ShadowCardDefault,
  A0 as ShadowCardHover,
  t0 as SizeButtonMinHeightDesktop,
  e0 as SizeButtonMinHeightMobile,
  Yg as SizeFormControlLarge,
  Gg as SizeFormControlMedium,
  Ug as SizeFormControlSmall,
  Jg as SizeFormInputWidth2xl,
  Qg as SizeFormInputWidth3xl,
  Kg as SizeFormInputWidthLg,
  Xg as SizeFormInputWidthMd,
  qg as SizeFormInputWidthSm,
  Zg as SizeFormInputWidthXl,
  Vg as SizeFormInputWidthXs,
  Wg as SizeIconExtraLarge,
  zg as SizeIconLarge,
  Hg as SizeIconMedium,
  Og as SizeIconNhsDefault,
  Rg as SizeIconSmall,
  Zo as SkipLink,
  _x as SlotMatrix,
  Sx as SortStatusControl,
  bl as Spacing0,
  yl as Spacing1,
  vl as Spacing2,
  _l as Spacing3,
  wl as Spacing4,
  Sl as Spacing5,
  kl as Spacing6,
  Cl as Spacing7,
  jl as Spacing8,
  Nl as Spacing9,
  $a as SpacingResponsive0Mobile,
  Da as SpacingResponsive0Tablet,
  Ia as SpacingResponsive1Mobile,
  Ma as SpacingResponsive1Tablet,
  La as SpacingResponsive2Mobile,
  Fa as SpacingResponsive2Tablet,
  Aa as SpacingResponsive3Mobile,
  Ea as SpacingResponsive3Tablet,
  Ba as SpacingResponsive4Mobile,
  Pa as SpacingResponsive4Tablet,
  Ra as SpacingResponsive5Mobile,
  Ha as SpacingResponsive5Tablet,
  za as SpacingResponsive6Mobile,
  Wa as SpacingResponsive6Tablet,
  Oa as SpacingResponsive7Mobile,
  Ua as SpacingResponsive7Tablet,
  Ga as SpacingResponsive8Mobile,
  Ya as SpacingResponsive8Tablet,
  Va as SpacingResponsive9Mobile,
  qa as SpacingResponsive9Tablet,
  ex as SpacingUtilities,
  N0 as StateDisabledBackground,
  T0 as StateDisabledBorder,
  $0 as StateDisabledText,
  m0 as StateErrorBackground,
  g0 as StateErrorBorder,
  x0 as StateErrorText,
  k0 as StateInfoBackground,
  C0 as StateInfoBorder,
  j0 as StateInfoText,
  b0 as StateSuccessBackground,
  y0 as StateSuccessBorder,
  v0 as StateSuccessText,
  _0 as StateWarningBackground,
  w0 as StateWarningBorder,
  S0 as StateWarningText,
  tf as SummaryCard,
  xx as SummaryList,
  ya as Table,
  bx as Tabs,
  Ye as Tag,
  Ku as TaskList,
  sc as Textarea,
  Ix as TooltipOverlay,
  Eh as TooltipProvider,
  Tx as TransactionalPageTemplate,
  gp as TransitionButtonDefault,
  xp as TransitionButtonShadow,
  yp as TransitionCardHover,
  bp as TransitionInputFocus,
  Dx as VisibilityProvider,
  ri as VitalsCard,
  ax as WIDTH_FRACTIONS,
  yx as WarningCallout,
  li as WidthContainer,
  nx as WidthUtilities,
  ub as checkFrutigerLoaded,
  ds as createGenericTabsConfig,
  kx as createTCHTabsConfig,
  ib as generateFrutigerFontFace,
  Hx as getResponsiveStyles,
  tx as getSpacingClass,
  rx as getWidthClass,
  lb as preloadFrutigerFonts,
  pf as tchDataConfig,
  Jx as useColors,
  nb as useComponentSpacing,
  rb as useNHSHeadings,
  ab as useNHSParagraphs,
  ix as useNHSTheme,
  sb as useNHSTypographySystem,
  ob as useNavigationSplitDrill,
  Wf as useNavigationSplitUrlSync,
  di as useNhsFdpBreakpoints,
  tb as useResponsiveSpacing,
  $x as useResponsiveValue,
  Qx as useSpacing,
  Zx as useTokens,
  eb as useTypography
};
//# sourceMappingURL=index.esm.js.map
