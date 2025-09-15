import * as X from "react";
import ft, { useState as Fe, useEffect as We, useCallback as be, useRef as Ae, createElement as Go, useMemo as De, useContext as yc, createContext as vc, forwardRef as Sn, useImperativeHandle as Yo, useReducer as qo, memo as wc, useId as nr } from "react";
import { createPortal as _c } from "react-dom";
function Sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xn = { exports: {} }, jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function kc() {
  if (Os) return jn;
  Os = 1;
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
  return jn.Fragment = t, jn.jsx = r, jn.jsxs = r, jn;
}
var Nn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zs;
function Cc() {
  return zs || (zs = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === j ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case x:
          return "Fragment";
        case g:
          return "Profiler";
        case p:
          return "StrictMode";
        case R:
          return "Suspense";
        case D:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case S:
            return "Portal";
          case M:
            return (B.displayName || "Context") + ".Provider";
          case I:
            return (B._context.displayName || "Context") + ".Consumer";
          case T:
            var O = B.render;
            return B = B.displayName, B || (B = O.displayName || O.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case N:
            return O = B.displayName || null, O !== null ? O : e(B.type) || "Memo";
          case k:
            O = B._payload, B = B._init;
            try {
              return e(B(O));
            } catch {
            }
        }
      return null;
    }
    function t(B) {
      return "" + B;
    }
    function r(B) {
      try {
        t(B);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var z = O.error, oe = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return z.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          oe
        ), t(B);
      }
    }
    function a(B) {
      if (B === x) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === k)
        return "<...>";
      try {
        var O = e(B);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var B = _.A;
      return B === null ? null : B.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (h.call(B, "key")) {
        var O = Object.getOwnPropertyDescriptor(B, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, O) {
      function z() {
        y || (y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: z,
        configurable: !0
      });
    }
    function u() {
      var B = e(this.type);
      return C[B] || (C[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function c(B, O, z, oe, U, ce, we, ue) {
      return z = ce.ref, B = {
        $$typeof: v,
        type: B,
        key: O,
        props: ce,
        _owner: U
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: u
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
        value: we
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function d(B, O, z, oe, U, ce, we, ue) {
      var de = O.children;
      if (de !== void 0)
        if (oe)
          if (L(de)) {
            for (oe = 0; oe < de.length; oe++)
              f(de[oe]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(de);
      if (h.call(O, "key")) {
        de = e(B);
        var ee = Object.keys(O).filter(function(fe) {
          return fe !== "key";
        });
        oe = 0 < ee.length ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}", Y[de + oe] || (ee = 0 < ee.length ? "{" + ee.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          oe,
          de,
          ee,
          de
        ), Y[de + oe] = !0);
      }
      if (de = null, z !== void 0 && (r(z), de = "" + z), i(O) && (r(O.key), de = "" + O.key), "key" in O) {
        z = {};
        for (var se in O)
          se !== "key" && (z[se] = O[se]);
      } else z = O;
      return de && l(
        z,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), c(
        B,
        de,
        ce,
        U,
        s(),
        z,
        we,
        ue
      );
    }
    function f(B) {
      typeof B == "object" && B !== null && B.$$typeof === v && B._store && (B._store.validated = 1);
    }
    var m = ft, v = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), I = Symbol.for("react.consumer"), M = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), j = Symbol.for("react.client.reference"), _ = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, h = Object.prototype.hasOwnProperty, L = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var y, C = {}, A = m.react_stack_bottom_frame.bind(
      m,
      o
    )(), re = w(a(o)), Y = {};
    Nn.Fragment = x, Nn.jsx = function(B, O, z, oe, U) {
      var ce = 1e4 > _.recentlyCreatedOwnerStacks++;
      return d(
        B,
        O,
        z,
        !1,
        oe,
        U,
        ce ? Error("react-stack-top-frame") : A,
        ce ? w(a(B)) : re
      );
    }, Nn.jsxs = function(B, O, z, oe, U) {
      var ce = 1e4 > _.recentlyCreatedOwnerStacks++;
      return d(
        B,
        O,
        z,
        !0,
        oe,
        U,
        ce ? Error("react-stack-top-frame") : A,
        ce ? w(a(B)) : re
      );
    };
  })()), Nn;
}
var Ws;
function jc() {
  return Ws || (Ws = 1, process.env.NODE_ENV === "production" ? Xn.exports = kc() : Xn.exports = Cc()), Xn.exports;
}
var n = jc(), ma = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Us;
function Nc() {
  return Us || (Us = 1, (function(e) {
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
  })(ma)), ma.exports;
}
var Tc = Nc();
const ve = /* @__PURE__ */ Sc(Tc), ib = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...s
}) => {
  const o = ve(
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
}, Xo = ({
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
        role: "img",
        "aria-label": o.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ n.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, l = o.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text, u = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      i,
      l
    ] });
    return o.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: o.href,
        children: u
      }
    ) : o.action ? /* @__PURE__ */ n.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: o.action,
        method: o.method || "post",
        children: /* @__PURE__ */ n.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: u })
      }
    ) : /* @__PURE__ */ n.jsx("span", { children: u });
  };
  return /* @__PURE__ */ n.jsx(
    "nav",
    {
      className: ve(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        r
      ),
      "aria-label": e,
      children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (o, i) => o && /* @__PURE__ */ n.jsx(
          "li",
          {
            className: ve(
              "nhsuk-account__item nhsuk-header__account-item",
              o.className
            ),
            children: s(o)
          },
          i
        )
      ) })
    }
  );
};
var Ko = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Ko || {}), Jo = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(Jo || {});
function Dc(e) {
  const t = e.variant || "primary", r = e.size || "default", a = !!e.fullWidth, s = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
    a ? "nhs-aria-button--full-width" : "",
    e.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: e.href ? "a" : "button",
    classes: s,
    data: { module: "nhs-button" },
    attrs: e.href ? { href: e.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!e.preventDoubleClick
  };
}
const { forwardRef: $c, useCallback: Vt, useState: ga } = X;
function Ic(e, t) {
  const {
    children: r,
    variant: a = Ko.Primary,
    size: s = Jo.Default,
    fullWidth: o = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = ga(!1), [f, m] = ga(!1), [v, S] = ga(!1), x = Dc({
    variant: a,
    size: s,
    fullWidth: o,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", g = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...v && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, I = Vt(
    () => !p && d(!0),
    [p]
  ), M = Vt(() => d(!1), []), T = Vt(
    () => !p && m(!0),
    [p]
  ), R = Vt(() => {
    m(!1), d(!1);
  }, []), D = Vt(() => S(!0), []), N = Vt(() => S(!1), []), k = Vt(
    (de) => {
      de.key === " " && ("href" in u || de.currentTarget.getAttribute("role") === "button") && (de.preventDefault(), de.currentTarget.click());
    },
    [u]
  ), b = Vt(
    (de) => {
      if (l) {
        const ee = de.currentTarget;
        if (ee.getAttribute("data-processing") === "true") {
          de.preventDefault();
          return;
        }
        ee.setAttribute("data-processing", "true"), setTimeout(() => {
          ee.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in u && u.href) {
    const {
      id: de,
      style: ee,
      title: se,
      ["aria-label"]: fe,
      ["aria-describedby"]: q,
      ["aria-labelledby"]: $,
      tabIndex: F,
      ...W
    } = u, te = u;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: te.href,
        target: te.target,
        rel: te.rel,
        className: x.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...g,
        ...l && { "data-prevent-double-click": "true" },
        ...W,
        onKeyDown: (J) => {
          te.onKeyDown?.(J), k(J);
        },
        onClick: (J) => {
          te.onClick?.(J), b(J);
        },
        onMouseDown: (J) => {
          te.onMouseDown?.(J), I();
        },
        onMouseUp: (J) => {
          te.onMouseUp?.(J), M();
        },
        onMouseEnter: (J) => {
          te.onMouseEnter?.(J), T();
        },
        onMouseLeave: (J) => {
          te.onMouseLeave?.(J), R();
        },
        onFocus: (J) => {
          te.onFocus?.(J), D();
        },
        onBlur: (J) => {
          te.onBlur?.(J), N();
        },
        "aria-disabled": te["aria-disabled"],
        ...te["aria-disabled"] === "true" && { tabIndex: -1 },
        id: de,
        style: ee,
        title: se,
        "aria-label": fe,
        "aria-describedby": q,
        "aria-labelledby": $,
        tabIndex: F,
        children: r
      }
    );
  }
  const {
    id: j,
    style: _,
    title: h,
    ["aria-label"]: L,
    ["aria-describedby"]: w,
    ["aria-labelledby"]: y,
    tabIndex: C,
    name: A,
    value: re,
    form: Y,
    formAction: B,
    formEncType: O,
    formMethod: z,
    formNoValidate: oe,
    formTarget: U,
    autoFocus: ce,
    ...we
  } = u, ue = u;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: ue.type || "button",
      disabled: ue.disabled,
      className: x.classes,
      "data-module": "nhs-button",
      ...g,
      ...l && { "data-prevent-double-click": "true" },
      ...ue.disabled && { "aria-disabled": "true" },
      ...we,
      onKeyDown: (de) => {
        ue.onKeyDown?.(de), k(de);
      },
      onClick: (de) => {
        ue.onClick?.(de), b(de);
      },
      onMouseDown: (de) => {
        ue.onMouseDown?.(de), I();
      },
      onMouseUp: (de) => {
        ue.onMouseUp?.(de), M();
      },
      onMouseEnter: (de) => {
        ue.onMouseEnter?.(de), T();
      },
      onMouseLeave: (de) => {
        ue.onMouseLeave?.(de), R();
      },
      onFocus: (de) => {
        ue.onFocus?.(de), D();
      },
      onBlur: (de) => {
        ue.onBlur?.(de), N();
      },
      id: j,
      style: _,
      title: h,
      "aria-label": L,
      "aria-describedby": w,
      "aria-labelledby": y,
      tabIndex: C,
      name: A,
      value: re,
      form: Y,
      formAction: B,
      formEncType: O,
      formMethod: z,
      formNoValidate: oe,
      formTarget: U,
      autoFocus: ce,
      children: r
    }
  );
}
const lt = $c(Ic);
lt.displayName = "Button";
const Pa = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve(
    "nhsuk-back-link",
    a
  ), u = ve(
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ n.jsx(
    "button",
    {
      className: u,
      onClick: o,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      className: u,
      href: r,
      ...i,
      children: c()
    }
  ) });
};
function Mc(e) {
  const { color: t = "default", noBorder: r, closable: a, disabled: s, className: o } = e;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    r ? "nhsuk-tag--no-border" : "",
    a ? "nhsuk-tag--closable" : "",
    s ? "nhsuk-tag--disabled" : "",
    o || ""
  ].filter(Boolean).join(" "), showClose: !!a, disabled: !!s };
}
const ze = ({
  text: e,
  html: t,
  children: r,
  color: a = "default",
  noBorder: s = !1,
  closable: o = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...c
}) => {
  const d = Mc({ color: a, noBorder: s, closable: o, disabled: l, className: u }), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: d.classes, ...c, children: [
    r || (t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    o && /* @__PURE__ */ n.jsx(
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
}, Lc = ({
  id: e,
  name: t,
  checked: r,
  defaultChecked: a = !1,
  disabled: s = !1,
  value: o = "true",
  hint: i,
  errorMessage: l,
  className: u,
  children: c,
  onChange: d,
  onBlur: f,
  onFocus: m,
  attributes: v,
  ...S
}) => {
  const [x, p] = Fe(a), g = r !== void 0, I = g ? r : x;
  We(() => {
    g || p(a);
  }, [a, g]);
  const M = (k) => {
    const b = k.target.checked;
    g || p(b), d?.(b, k);
  }, T = i ? `${e}-hint` : void 0, R = l ? `${e}-error` : void 0, D = [T, R].filter(Boolean).join(" ") || void 0, N = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ n.jsx("div", { className: N, ...S, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: o,
        checked: I,
        disabled: s,
        onChange: M,
        onBlur: f,
        onFocus: m,
        "aria-describedby": D,
        ...v
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: T, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Lc.displayName = "Checkbox";
function Zo(e) {
  const r = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
const ys = ({
  id: e,
  name: t,
  type: r = "text",
  value: a,
  defaultValue: s,
  placeholder: o,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: c = !1,
  describedBy: d,
  className: f,
  width: m = "full",
  inputMode: v,
  autoComplete: S,
  maxLength: x,
  minLength: p,
  pattern: g,
  step: I,
  min: M,
  max: T,
  showValueLabels: R = !1,
  showCurrentValue: D = !1,
  valueLabels: N,
  onChange: k,
  onBlur: b,
  onFocus: j,
  onKeyDown: _,
  ...h
}) => {
  const [L, w] = Fe(a || s || (r === "range" ? M || "0" : ""));
  We(() => {
    a !== void 0 && w(a);
  }, [a]);
  const y = (U) => {
    const ce = U.target;
    w(ce.value), ("type" in U && U.nativeEvent || U.type === "keydown") && k?.(U);
  }, { classes: C, isRange: A } = Zo({ type: r, hasError: c, width: m, className: f }), re = a !== void 0, Y = {
    id: e,
    name: t,
    type: r,
    placeholder: o,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: v,
    autoComplete: S,
    maxLength: x,
    minLength: p,
    pattern: g,
    step: I,
    min: M,
    max: T,
    onChange: y,
    onBlur: b,
    onFocus: j,
    onKeyDown: (U) => {
      if (A && /[0-9]/.test(U.key)) {
        const ce = (L?.toString() || "") + U.key;
        U.target.value = ce, y(U);
      }
      _?.(U);
    },
    ...h
  }, B = !re && s !== void 0 ? { defaultValue: s } : {}, O = re ? { value: a } : {}, z = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: C,
      ...O,
      ...B,
      "data-current-value": L,
      ...Y
    }
  ), oe = A ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    R && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: N?.min || M || "0" }),
      z(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: N?.max || T || "100" })
    ] }),
    !R && z(),
    D && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      N?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: L })
    ] }) })
  ] }) : null;
  return A ? oe : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: C,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && s !== void 0 ? { defaultValue: s } : {},
      placeholder: o,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: v,
      autoComplete: S,
      maxLength: x,
      minLength: p,
      pattern: g,
      step: I,
      min: M,
      max: T,
      onChange: k,
      onBlur: b,
      onFocus: j,
      onKeyDown: _,
      ...h
    }
  );
};
function Fc(e) {
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
const vs = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: s,
  ...o
}) => {
  const i = Fc({ size: a, isPageHeading: r, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ n.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...o, children: r ? /* @__PURE__ */ n.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: s }) : s });
};
function Pc(e) {
  const t = ["nhsuk-fieldset", e.className || ""].filter(Boolean).join(" "), r = e.legend ? [
    "nhsuk-fieldset__legend",
    e.legend.size ? `nhsuk-fieldset__legend--${e.legend.size}` : "",
    e.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: t,
    legendClasses: r,
    legendIsPageHeading: !!e.legend?.isPageHeading,
    describedBy: e.describedBy
  };
}
const ws = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...s
}) => {
  const o = Pc({
    className: r,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return o.legendIsPageHeading ? /* @__PURE__ */ n.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ n.jsxs(
    "fieldset",
    {
      className: o.fieldsetClasses,
      "aria-describedby": o.describedBy,
      ...s,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ n.jsx("legend", { className: o.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function Ac(e) {
  const t = [
    "nhsuk-checkboxes",
    e.small ? "nhsuk-checkboxes--small" : "",
    e.className || ""
  ].filter(Boolean).join(" "), r = [
    "nhsuk-form-group",
    e.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: t, formGroupClasses: r };
}
const Ec = ({
  items: e,
  name: t,
  idPrefix: r,
  legend: a,
  isPageHeading: s = !1,
  legendSize: o = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: c = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: m,
  ...v
}) => {
  const [S, x] = Fe(
    e.filter((k) => k.checked).map((k) => k.value)
  ), p = r || t, g = i ? `${p}-hint` : void 0, I = l ? `${p}-error` : void 0, M = [g, I].filter(Boolean).join(" ") || void 0, T = (k, b) => {
    let j;
    b ? j = [...S, k] : j = S.filter((_) => _ !== k), x(j), d?.(j);
  }, R = () => e.map((k, b) => {
    const j = `${p}-${b + 1}`, _ = `${j}-conditional`, h = S.includes(k.value), L = k.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: j,
          name: t,
          type: "checkbox",
          value: k.value,
          checked: h,
          disabled: L,
          onChange: (w) => T(k.value, w.target.checked),
          "aria-describedby": k.hint ? `${j}-hint` : M,
          ...k.conditional && {
            "aria-controls": _,
            "aria-expanded": h ? "true" : "false"
          },
          ...k.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: j, children: k.text }),
      k.hint && /* @__PURE__ */ n.jsx("div", { id: `${j}-hint`, className: "nhsuk-checkboxes__hint", children: k.hint }),
      k.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ve("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !h
          }),
          id: _,
          children: typeof k.conditional == "object" && k.conditional !== null && "label" in k.conditional && "id" in k.conditional && "name" in k.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            k.conditional.label && /* @__PURE__ */ n.jsx(vs, { htmlFor: k.conditional.id, children: k.conditional.label }),
            /* @__PURE__ */ n.jsx(ys, { ...k.conditional })
          ] }) : k.conditional
        }
      )
    ] }, k.value);
  }), { classes: D, formGroupClasses: N } = Ac({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ n.jsx("div", { className: N, ...m, ...v, children: /* @__PURE__ */ n.jsxs(
    ws,
    {
      legend: a ? {
        text: a,
        isPageHeading: s,
        size: o
      } : void 0,
      describedBy: M,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: g, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: I, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: D, children: R() })
      ]
    }
  ) });
};
Ec.displayName = "Checkboxes";
function Rc(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Bc = ({
  id: e,
  name: t,
  value: r,
  defaultValue: a,
  placeholder: s,
  disabled: o = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: c,
  className: d,
  rows: f = 5,
  cols: m,
  maxLength: v,
  minLength: S,
  wrap: x = "soft",
  resize: p = "vertical",
  autoComplete: g,
  spellCheck: I,
  onChange: M,
  onBlur: T,
  onFocus: R,
  onKeyDown: D,
  ...N
}) => {
  const { classes: k, describedBy: b } = Rc({ hasError: u, resize: p, className: d, describedBy: c });
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: k,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: s,
      disabled: o,
      readOnly: i,
      required: l,
      "aria-describedby": b,
      rows: f,
      cols: m,
      maxLength: v,
      minLength: S,
      wrap: x,
      autoComplete: g,
      spellCheck: I,
      onChange: M,
      onBlur: T,
      onFocus: R,
      onKeyDown: D,
      ...N
    }
  );
};
function Hc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Qo = ({ id: e, className: t, children: r, ...a }) => {
  const s = Hc({ id: e, className: t });
  return /* @__PURE__ */ n.jsx("div", { className: s.classes, id: s.id, ...a, children: r });
}, lb = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: s,
  value: o,
  defaultValue: i,
  rows: l,
  className: u,
  countMessage: c,
  onCountChange: d,
  onChange: f,
  ...m
}) => {
  const v = o ?? i ?? "", [S, x] = Fe(v), [p, g] = Fe(0), [I, M] = Fe(!1), [T, R] = Fe(!1), D = be((h) => r ? h.trim() === "" ? 0 : h.trim().split(/\s+/).length : h.length, [r]);
  We(() => {
    const h = D(S), L = t || r || 0, w = L - h, y = Math.floor(L * (a / 100));
    g(w), M(h > L), R(h >= y || h > L), d && d(h, w);
  }, [S, t, r, a, D, d]);
  const N = (h) => {
    const L = h.target.value;
    x(L), f && f(h);
  }, k = () => {
    const h = t || r || 0, L = r ? "word" : "character", w = r ? "words" : "characters";
    if (!T)
      return `You can enter up to ${h} ${h === 1 ? L : w}`;
    if (I) {
      const y = Math.abs(p);
      return `You have ${y} ${y === 1 ? L : w} too many`;
    } else
      return `You have ${p} ${p === 1 ? L : w} remaining`;
  }, b = ve(
    "nhsuk-character-count",
    u
  ), j = ve(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !T,
      "nhsuk-error-message": I
    },
    c?.classes
  ), _ = ve(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": I
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Bc,
          {
            id: e,
            name: s,
            value: o !== void 0 ? S : void 0,
            defaultValue: o === void 0 ? i ?? S : void 0,
            rows: l,
            className: _,
            onChange: N,
            "aria-describedby": `${e}-info`,
            "aria-invalid": I || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          Qo,
          {
            id: `${e}-info`,
            className: j,
            role: "status",
            "aria-live": "polite",
            children: k()
          }
        )
      ]
    }
  );
};
function Oc(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const zc = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: s,
  ...o
}) => {
  const i = ve(
    "nhsuk-select__option",
    a
  );
  return /* @__PURE__ */ n.jsx(
    "option",
    {
      className: i,
      value: e,
      disabled: t,
      ...o,
      children: s
    }
  );
}, Wc = ({
  id: e,
  name: t,
  ariaLabel: r,
  value: a,
  defaultValue: s,
  disabled: o = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: u,
  className: c,
  multiple: d = !1,
  size: f,
  autoComplete: m,
  options: v,
  children: S,
  onChange: x,
  onBlur: p,
  onFocus: g,
  ...I
}) => {
  const { classes: M } = Oc({ hasError: l, className: c }), T = () => v ? v.map((D, N) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: D.value,
      disabled: D.disabled,
      "data-initial-selected": D.selected || void 0,
      children: D.text
    },
    `${D.value}-${N}`
  )) : null, R = s === void 0 && a === void 0 && v ? v.find((D) => D.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: M,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: s !== void 0 ? s : R,
      disabled: o,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: m,
      onChange: x,
      onBlur: p,
      onFocus: g,
      ...I,
      children: S || T()
    }
  );
}, rr = Wc;
rr.Option = zc;
function Uc(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function ei(e, {
  variant: t,
  selectedValue: r,
  enableBehaviourAttr: a,
  handleChange: s,
  handleBlur: o,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: u,
  InputComponent: c
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: m,
    ...v
  } = e, {
    name: S,
    hasError: x = !1,
    describedBy: p,
    className: g,
    size: I = "normal",
    inline: M = !1,
    options: T,
    ...R
  } = v, { classes: D, describedBy: N } = Uc({ hasError: x, size: I, inline: M, className: g, describedBy: p });
  return /* @__PURE__ */ n.jsx(ws, { children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: D,
      ...R,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: T.map((k, b) => {
        const j = `${S}-${b}`, _ = k.conditional ? `${j}-conditional` : void 0, h = r === k.value;
        return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ n.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: j,
              name: S,
              type: "radio",
              value: k.value,
              disabled: k.disabled,
              ...t === "client" ? {
                checked: h,
                onChange: s,
                onBlur: o,
                onFocus: i,
                onKeyDown: l,
                ref: (L) => {
                  L && u && (u.current[b] = L);
                }
              } : {
                defaultChecked: h,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": N
            }
          ),
          /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: j, children: k.text }),
          k.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: k.hint }),
          k.conditional && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: ve("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !h
              }),
              id: _,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof k.conditional == "object" && k.conditional !== null && "label" in k.conditional && "id" in k.conditional && "name" in k.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
                k.conditional.label && /* @__PURE__ */ n.jsx(
                  vs,
                  {
                    htmlFor: k.conditional.id,
                    children: k.conditional.label
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  c,
                  {
                    ...k.conditional
                  }
                )
              ] }) : k.conditional
            }
          )
        ] }, k.value);
      })
    }
  ) });
}
const cb = ({ value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o }) => {
  const [i, l] = Fe(e || t || ""), u = Ae([]), c = Ae(i), d = (v) => {
    const S = v.target.value;
    S !== c.current && (c.current = S, l(S), r?.(v));
  }, f = (v) => {
    s?.(v);
  }, m = be((v) => {
    const { key: S } = v;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(S)) return;
    v.preventDefault();
    const x = u.current.filter((M) => M && !M.disabled), p = x.indexOf(v.currentTarget);
    if (p === -1) return;
    let g = p;
    ["ArrowDown", "ArrowRight"].includes(S) ? g = (p + 1) % x.length : ["ArrowUp", "ArrowLeft"].includes(S) && (g = (p - 1 + x.length) % x.length);
    const I = x[g];
    I && (I.focus(), I.checked || I.click());
  }, []);
  return ei(
    { value: e, defaultValue: t, onChange: r, onBlur: a, onFocus: s, ...o },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: d,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: m,
      itemsRef: u,
      InputComponent: ys
    }
  );
};
function Vc(e) {
  const {
    id: t,
    name: r,
    type: a = "text",
    value: s,
    defaultValue: o,
    placeholder: i,
    disabled: l = !1,
    readOnly: u = !1,
    required: c = !1,
    hasError: d = !1,
    describedBy: f,
    className: m,
    width: v = "full",
    inputMode: S,
    autoComplete: x,
    maxLength: p,
    minLength: g,
    pattern: I,
    step: M,
    min: T,
    max: R,
    showValueLabels: D = !1,
    showCurrentValue: N = !1,
    valueLabels: k,
    // Strip interactive handlers in server variant
    onChange: b,
    onBlur: j,
    onFocus: _,
    onKeyDown: h,
    ...L
  } = e, { classes: w, isRange: y } = Zo({
    type: a,
    hasError: d,
    width: v,
    className: m
  }), C = {
    id: t,
    name: r,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: u,
    required: c,
    "aria-describedby": f,
    inputMode: S,
    autoComplete: x,
    maxLength: p,
    minLength: g,
    pattern: I,
    step: M,
    min: T,
    max: R,
    ...L
  };
  if (y) {
    const A = s ?? o ?? (typeof T < "u" ? String(T) : "0"), re = /* @__PURE__ */ n.jsx(
      "input",
      {
        className: w,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
        "data-current-value": A,
        ...C
      }
    );
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      D ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: k?.min || T || "0" }),
        re,
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: k?.max || R || "100" })
      ] }) : re,
      N && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        k?.current || "Current value:",
        " ",
        /* @__PURE__ */ n.jsx("strong", { children: A })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      className: w,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && o !== void 0 ? { defaultValue: o } : {},
      ...C
    }
  );
}
const ub = ({ value: e, defaultValue: t, ...r }) => {
  const a = e || t || "";
  return ei(
    { value: e, defaultValue: t, ...r },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Vc
    }
  );
};
var tn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(tn || {}), Gc = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Gc || {}), Yc = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Yc || {}), qc = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(qc || {});
const ti = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: s,
  ...o
}) => {
  const i = ve(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...s || {} } : s;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...o, children: e });
}, nn = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = ve("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: s, style: r, ...a, children: e });
}, Fn = ({
  children: e,
  width: t = tn.Full,
  mobileWidth: r,
  tabletWidth: a,
  desktopWidth: s,
  start: o,
  className: i,
  forceWidth: l = !1,
  style: u,
  align: c,
  ...d
}) => {
  const f = ve(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${r}-mobile`]: !!r,
      [`nhsuk-u-${a}-tablet`]: !!a,
      [`nhsuk-u-${s}-desktop`]: !!s,
      // Grid positioning
      [`nhsuk-grid-column-start-${o}`]: o && o >= 1 && o <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...c ? { [`nhsuk-grid-align-${c}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ n.jsx("div", { className: f, style: u, ...d, children: e });
}, Aa = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ft.Children.toArray(e)[0], i = ft.isValidElement(o) && (o.type === nn || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(ti, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(nn, { children: e }) });
}, Xc = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: s,
  role: o,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), c = ve(
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
  return /* @__PURE__ */ n.jsx(u, { className: c, role: o, ...l, children: e });
}, Kc = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = ve("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Jc = Xc;
Jc.Item = Kc;
const db = ({
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
}, fb = {
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
}, pb = ({
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
}, hb = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, mb = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ni = ({
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
};
function Zc(e) {
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
function Qc(e) {
  const t = e.level ?? Zc(e.size), r = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: r, style: a };
}
const Bt = ({ level: e, className: t, text: r, html: a, children: s, size: o, marginBottom: i, ...l }) => {
  const u = Qc({ level: e, size: o, className: t, marginBottom: i }), c = s || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r);
  return Go(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function eu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const Vs = ({ id: e, className: t, visuallyHiddenText: r = "Error:", children: a, ...s }) => {
  const o = eu({ id: e, className: t, visuallyHiddenText: r });
  return /* @__PURE__ */ n.jsxs("span", { className: o.classes, id: o.id, ...s, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      o.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, gb = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: s,
  className: o,
  children: i,
  ...l
}) => {
  const u = Ae(null);
  We(() => {
    u.current && u.current.focus();
  }, []);
  const c = ve(
    "nhsuk-error-summary",
    o
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (v) => {
    const S = v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
    return v.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: v.href,
        ...v.attributes,
        children: S
      }
    ) : S;
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: u,
      className: c,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: s.map((v, S) => /* @__PURE__ */ n.jsx("li", { children: m(v) }, S)) })
        ] })
      ]
    }
  );
}, xb = ({
  id: e,
  className: t,
  items: r,
  namePrefix: a,
  values: s = {},
  fieldset: o,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...c
}) => {
  const [d, f] = Fe(() => ({
    day: s.day || "",
    month: s.month || "",
    year: s.year || ""
  })), [m, v] = Fe({}), S = (y) => y % 4 === 0 && y % 100 !== 0 || y % 400 === 0, x = (y, C) => {
    const A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return y === 2 && S(C) ? 29 : A[y - 1];
  }, p = (y, C, A) => {
    if (!y) return;
    if (!/^\d+$/.test(y)) return "Day must be a number";
    const re = parseInt(y, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (C && A) {
      const Y = parseInt(C, 10), B = parseInt(A, 10);
      if (!isNaN(Y) && !isNaN(B) && Y >= 1 && Y <= 12) {
        const O = x(Y, B);
        if (re > O)
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
          ][Y - 1]} ${B} only has ${O} days`;
      }
    }
  }, g = (y) => {
    if (!y) return;
    if (!/^\d+$/.test(y)) return "Month must be a number";
    const C = parseInt(y, 10);
    if (C < 1 || C > 12) return "Month must be between 1 and 12";
  }, I = (y) => {
    if (!y) return;
    if (!/^\d+$/.test(y)) return "Year must be a number";
    const C = parseInt(y, 10), A = (/* @__PURE__ */ new Date()).getFullYear();
    if (C < 1900 || C > A + 10)
      return `Year must be between 1900 and ${A + 10}`;
  }, M = (y, C, A) => {
    if (!y || !C || !A) return;
    const re = parseInt(y, 10), Y = parseInt(C, 10), B = parseInt(A, 10);
    if (isNaN(re) || isNaN(Y) || isNaN(B) || Y < 1 || Y > 12 || B < 1900) return;
    const O = x(Y, B);
    re < 1 || re > O;
  }, T = be((y, C) => {
    const A = {
      ...d,
      [y]: C
    };
    f(A), u && u(A);
  }, [d, u]), R = be((y) => {
    const C = d[y];
    let A;
    if (y === "day")
      A = p(C, d.month, d.year);
    else if (y === "month") {
      if (A = g(C), !A && d.day) {
        const re = p(d.day, C, d.year);
        v((Y) => ({
          ...Y,
          day: re
        }));
      }
    } else if (y === "year" && (A = I(C), !A && d.day && d.month)) {
      const re = p(d.day, d.month, C);
      v((Y) => ({
        ...Y,
        day: re
      }));
    }
    if (v((re) => ({
      ...re,
      [y]: A
    })), d.day && d.month && d.year) {
      const re = M(
        y === "day" ? C : d.day,
        y === "month" ? C : d.month,
        y === "year" ? C : d.year
      );
      re && v((Y) => ({
        ...Y,
        day: re
      }));
    }
  }, [d, p, g, I, M]), D = De(() => [
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
  ], []), N = r || D;
  let k = o?.describedBy || "";
  const b = i ? `${e}-hint` : "", j = l ? `${e}-error` : "";
  b && (k = k ? `${k} ${b}` : b), j && (k = k ? `${k} ${j}` : j);
  const _ = Object.values(m).some((y) => y), h = ve(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || _
    }
  ), L = ve(
    "nhsuk-date-input",
    t
  ), w = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Qo,
      {
        id: b,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Vs,
      {
        id: j,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([y, C]) => C ? /* @__PURE__ */ n.jsxs(
        Vs,
        {
          id: `${e}-${y}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            C
          ]
        },
        `${y}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: L, id: e, "data-testid": "date-input", ...c, children: N.map((y) => {
      const C = y.id || `${e}-${y.name}`, A = a ? `${a}[${y.name}]` : y.name, re = y.label || y.name.charAt(0).toUpperCase() + y.name.slice(1), Y = m[y.name], B = d[y.name] || "";
      let O = k;
      if (Y) {
        const z = `${e}-${y.name}-error`;
        O = O ? `${O} ${z}` : z;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          vs,
          {
            htmlFor: C,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ n.jsx(
          ys,
          {
            id: C,
            name: A,
            value: B,
            className: ve("nhsuk-date-input__input", y.classes, {
              "nhsuk-input--error": Y
            }),
            inputMode: y.inputmode,
            autoComplete: y.autocomplete,
            pattern: y.pattern,
            "aria-describedby": O || void 0,
            hasError: !!Y,
            onChange: (z) => T(y.name, z.target.value),
            onBlur: () => R(y.name)
          }
        )
      ] }, y.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: h, children: o ? /* @__PURE__ */ n.jsx(
    ws,
    {
      className: o.classes,
      legend: o.legend ? { text: o.legend } : void 0,
      describedBy: k || void 0,
      children: w()
    }
  ) : w() });
}, ri = {
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
}, ai = vc(ri), tu = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...ri, ...t };
  return /* @__PURE__ */ n.jsx(ai.Provider, { value: r, children: e });
}, bb = () => {
  const e = yc(ai);
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
const yb = ({ children: e, theme: t }) => (We(() => {
  ru();
}, []), /* @__PURE__ */ n.jsx(tu, { theme: t, children: e }));
function au(e, {
  variant: t,
  isClient: r,
  menuOpen: a = !1,
  showMoreButton: s = !1,
  visibleItems: o,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: u,
  navListRef: c,
  searchNode: d
}) {
  const {
    className: f,
    logo: m = {},
    service: v = {},
    serviceName: S,
    organisation: x,
    search: p,
    account: g,
    navigation: I,
    containerClasses: M,
    variant: T = "default",
    attributes: R = {},
    maxVisibleItems: D,
    // deprecated (ignored)
    responsiveNavigation: N = !0,
    ...k
  } = e, b = {
    ...v,
    text: v?.text ?? S
  };
  "maxVisibleItems" in k && delete k.maxVisibleItems;
  const j = b.href && !m.href || b.href && b.href === m.href, _ = j ? b.href : m.href, h = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": T === "organisation" || x,
      "nhsuk-header--white": T === "white"
    },
    f
  ), L = ve(
    "nhsuk-header__container",
    M
  ), w = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": I?.white,
      "nhsuk-header__navigation--justified": I?.justified
    },
    I?.className
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
      "aria-label": m.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: m.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), C = () => m.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: m.src,
      width: "280",
      alt: m.ariaLabel || "NHS"
    }
  ) : y(), A = () => x ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      x.name,
      x.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        x.split
      ] })
    ] }),
    x.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: x.descriptor })
  ] }) : null, re = (O, z) => O ? z ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: z, children: O }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: O }) : null, Y = (O) => O.active || O.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: O.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: O.html } }) : O.text }) : O.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: O.html } }) : O.text, B = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  return I?.items, /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: h,
      role: "banner",
      "data-module": "nhsuk-header",
      ...R,
      ...k,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: L, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              C(),
              A(),
              j && re(b.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              C(),
              A(),
              j && re(b.text)
            ] }),
            b.text && !j && re(b.text, b.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ n.jsx(
            Xo,
            {
              ...g,
              variant: T === "white" ? "white" : "default"
            }
          )
        ] }),
        I && I.items && I.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: w,
            "aria-label": I.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ve(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": r && t === "client",
                    "nhsuk-header__navigation-container--ssr": !r
                  },
                  M
                ),
                ref: u,
                children: /* @__PURE__ */ n.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (I?.items || []).map((O, z) => /* @__PURE__ */ n.jsx(
                        "li",
                        {
                          className: ve(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": O.active || O.current,
                              "nhsuk-header__navigation-item--hidden": s && o !== void 0 && z >= (o ?? 0)
                            },
                            O.className
                          ),
                          ...O.attributes || {},
                          children: /* @__PURE__ */ n.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: O.href,
                              ...O.active || O.current ? { "aria-current": O.current ? "page" : "true" } : {},
                              children: Y(O)
                            }
                          )
                        },
                        z
                      )),
                      s && o !== void 0 && /* @__PURE__ */ n.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ n.jsxs(
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
                            B()
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
        r && I && I.items && I.items.length > 0 && a && i && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: I.items.slice(o ?? 0).map((O, z) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: ve("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": O.active || O.current
                }),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: O.href,
                    ...O.active || O.current ? { "aria-current": O.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: Y(O)
                  }
                )
              },
              `overflow-${(o ?? 0) + z}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const su = ({
  mode: e = "form",
  action: t = "/search",
  method: r = "get",
  name: a = "q",
  value: s,
  placeholder: o = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: u,
  disabled: c = !1,
  callbacks: d = {},
  isLoading: f = !1,
  showResults: m = !1,
  results: v = [],
  formAttributes: S = {},
  inputAttributes: x = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: g = !1,
  debounceMs: I = 300,
  minQueryLength: M = 1
}) => {
  const [T, R] = Fe(""), [D, N] = Fe(!1), k = Ae(void 0), b = Ae(null), j = Ae(null), _ = e === "controlled" && s !== void 0, h = _ ? s : T, L = be((oe) => {
    k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      d.onChange && oe.length >= M && d.onChange(oe);
    }, I);
  }, [d.onChange, I, M]), w = be((oe) => {
    const U = oe.target.value;
    _ || R(U), e !== "form" && L(U);
  }, [_, e, L]), y = be((oe) => {
    const U = h.trim(), ce = {
      query: U,
      timestamp: Date.now(),
      formData: new FormData(oe.currentTarget)
    };
    e === "controlled" || e === "hybrid" && g ? (oe.preventDefault(), d.onSearch && U.length >= M && d.onSearch(ce)) : e === "hybrid" && d.onSearch && U.length >= M && d.onSearch(ce);
  }, [e, h, d.onSearch, g, M]), C = be(() => {
    N(!0), d.onFocus?.();
  }, [d.onFocus]), A = be(() => {
    N(!1), d.onBlur?.();
  }, [d.onBlur]), re = be(() => {
    _ || R(""), d.onClear?.(), j.current?.focus();
  }, [_, d.onClear]);
  We(() => () => {
    k.current && clearTimeout(k.current);
  }, []);
  const Y = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: ve("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), B = () => /* @__PURE__ */ n.jsx(
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
  ), O = () => !h || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), z = () => !m || !v.length || !D ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: v.map((oe) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: oe.href ? /* @__PURE__ */ n.jsxs("a", { href: oe.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: oe.title }),
    oe.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: oe.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: oe.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: oe.title }),
        oe.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: oe.description })
      ]
    }
  ) }, oe.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: ve("nhsuk-header__search", u, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": D,
    "nhsuk-header__search--has-results": m && v.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: b,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: y,
        ...S,
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
                ref: j,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: o,
                autoComplete: "off",
                value: h,
                onChange: w,
                onFocus: C,
                onBlur: A,
                disabled: c || f,
                ...m && v.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...x
              }
            ),
            O()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && h.length < M,
              ...p,
              children: [
                f ? B() : Y(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    z()
  ] });
}, si = ({
  className: e,
  logo: t = {},
  service: r = {},
  organisation: a,
  search: s,
  account: o,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: c = {},
  ...d
}) => {
  const [f, m] = Fe(!1), [v, S] = Fe(!1), [x, p] = Fe(i?.items?.length || 0), [g, I] = Fe(!1), [M, T] = Fe(!1), R = Ae(null), D = Ae(null), N = Ae(!1);
  We(() => {
    typeof window > "u" || T(!0);
  }, []), We(() => {
    if (typeof document > "u") return;
    const _ = (h) => {
      h.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [f]);
  const k = Ae(null), b = be(() => {
    if (!M || !i?.items || i.items.length === 0 || N.current) return;
    const _ = R.current, h = D.current;
    if (!_ || !h) return;
    N.current = !0, _.classList.add("nhsuk-header__navigation-container--measuring");
    const L = _.clientWidth, w = Array.from(h.children);
    if (!w.length) {
      _.classList.remove("nhsuk-header__navigation-container--measuring"), N.current = !1;
      return;
    }
    if (k.current == null) {
      const U = document.createElement("button");
      U.type = "button", U.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", U.style.position = "absolute", U.style.visibility = "hidden", U.style.pointerEvents = "none", U.innerHTML = "<span>More</span>", _.appendChild(U), k.current = U.getBoundingClientRect().width || 104, _.removeChild(U);
    }
    const y = k.current + 16;
    let C = 0, A = 0;
    const re = window.getComputedStyle(_), Y = parseFloat(re.paddingLeft) || 0, B = parseFloat(re.paddingRight) || 0;
    let O = Y + B;
    for (const U of w) {
      const ce = U.getBoundingClientRect().width;
      if (C + ce + y + O > L) break;
      C += ce, A += 1;
    }
    const z = A < i.items.length, oe = z ? A : i.items.length;
    S((U) => U === z ? U : z), p((U) => U === oe ? U : oe), _.classList.remove("nhsuk-header__navigation-container--measuring"), N.current = !1;
  }, [M, i?.items]);
  We(() => {
    if (!M) return;
    const _ = R.current;
    if (!_) return;
    let h = null;
    const L = () => {
      h == null && (h = window.requestAnimationFrame(() => {
        h = null, b();
      }));
    };
    b();
    const w = new ResizeObserver(() => L());
    return w.observe(_), D.current && w.observe(D.current), () => {
      h != null && window.cancelAnimationFrame(h), w.disconnect();
    };
  }, [M, b]), We(() => {
    M && b();
  }, [i?.items?.length, M, b]);
  const j = (_) => {
    _ && (_.preventDefault(), _.stopPropagation());
    const h = !f;
    m(h), I(h);
  };
  return au(
    {
      className: e,
      logo: t,
      service: r,
      organisation: a,
      search: s,
      account: o,
      navigation: i,
      containerClasses: l,
      variant: u,
      attributes: c,
      ...d
    },
    {
      variant: "client",
      isClient: M,
      menuOpen: f,
      showMoreButton: v,
      visibleItems: x,
      dropdownVisible: g,
      toggleMenu: j,
      navContainerRef: R,
      navListRef: D,
      // Provide interactive search node for client build only
      searchNode: s ? /* @__PURE__ */ n.jsx(su, { ...s }) : null
    }
  );
};
function ou(e, { variant: t, isClient: r }) {
  const {
    className: a,
    logo: s = {},
    service: o = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: u,
    navigation: c,
    containerClasses: d,
    variant: f = "default",
    attributes: m = {},
    maxVisibleItems: v,
    // deprecated (ignored)
    responsiveNavigation: S = !0,
    ...x
  } = e;
  "maxVisibleItems" in x && delete x.maxVisibleItems;
  const p = {
    ...o,
    text: o?.text ?? i
  }, g = p.href && !s.href || p.href && p.href === s.href, I = g ? p.href : s.href, M = ve(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), T = ve("nhsuk-header__container", d), R = ve(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
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
      "aria-label": s.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ n.jsx("title", { children: s.ariaLabel || "NHS" }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), N = () => s.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: s.src,
      width: "280",
      alt: s.ariaLabel || "NHS"
    }
  ) : D(), k = () => l ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, b = (w, y) => w ? y ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: y, children: w }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: w }) : null, j = (w) => w.active || w.current ? /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }) : w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text, _ = c?.items && !S, h = _ ? [] : c?.items, L = _ ? c.items : [];
  return /* @__PURE__ */ n.jsxs("header", { className: M, role: "banner", "data-module": "nhsuk-header", ...m, ...x, children: [
    /* @__PURE__ */ n.jsxs("div", { className: T, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
        I ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: I, children: [
          N(),
          k(),
          g && b(p.text)
        ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          N(),
          k(),
          g && b(p.text)
        ] }),
        p.text && !g && b(p.text, p.href)
      ] }),
      /* @__PURE__ */ n.jsx(Xo, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ n.jsx("nav", { className: R, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ n.jsx(
      "div",
      {
        className: ve(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !r
          },
          d
        ),
        children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-list", children: (h || []).map((w, y) => /* @__PURE__ */ n.jsx(
          "li",
          {
            className: ve("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": w.active || w.current
            }, w.className),
            ...w.attributes || {},
            children: /* @__PURE__ */ n.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: w.href,
                ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
                children: j(w)
              }
            )
          },
          y
        )) })
      }
    ) }),
    _ && L.length > 0 && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.map((w, y) => /* @__PURE__ */ n.jsx(
      "li",
      {
        className: ve("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": w.active || w.current
        }),
        children: /* @__PURE__ */ n.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: w.href,
            ...w.active || w.current ? { "aria-current": w.current ? "page" : "true" } : {},
            children: j(w)
          }
        )
      },
      `overflow-server-${y}`
    )) }) })
  ] });
}
const vb = (e) => ou(e, {
  variant: "server",
  isClient: !1
}), iu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: r = "",
  text: a,
  html: s,
  imageURL: o,
  containerClasses: i = "",
  classes: l = "",
  children: u,
  ...c
}) => {
  const d = [
    "nhsuk-hero",
    o && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    o && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    o ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    r,
    !u && !a && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), v = u || e || a || s, S = () => {
    if (!e) return null;
    const x = { className: m };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...x, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...x, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...x, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...x, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...x, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...x, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...x, children: e });
    }
  };
  return /* @__PURE__ */ n.jsxs(
    "section",
    {
      className: d,
      style: o ? { backgroundImage: `url('${o}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        o && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: v && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          S(),
          u || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !o && v && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          S(),
          u || (s ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: s } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
iu.displayName = "Hero";
const oi = ({
  className: e,
  links: t = [],
  linksColumn2: r,
  linksColumn3: a,
  metaLinks: s,
  copyright: o = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: u,
  footerStyle: c,
  containerStyle: d
}) => {
  const f = (v, S = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: ve("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": S
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
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...u }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: ve("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: ve("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((v) => f(v)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((v) => f(v)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((v) => f(v)) }),
              s && s.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: s.map((v) => f(v)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((v) => f(v, !0)),
              (r || []).map((v) => f(v, !0)),
              (a || []).map((v) => f(v, !0)),
              (s || []).map((v) => f(v, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) })
        ]
      }
    ),
    m && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: o }) }) })
  ] }) });
};
function er(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function lu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function _s(e) {
  let t, r, a;
  e.length !== 2 ? (t = er, r = (l, u) => er(e(l), u), a = (l, u) => e(l) - u) : (t = e === er || e === lu ? e : cu, r = e, a = e);
  function s(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        r(l[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function o(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        r(l[f], u) <= 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function i(l, u, c = 0, d = l.length) {
    const f = s(l, u, c, d - 1);
    return f > c && a(l[f - 1], u) > -a(l[f], u) ? f - 1 : f;
  }
  return { left: s, center: i, right: o };
}
function cu() {
  return 0;
}
function uu(e) {
  return e === null ? NaN : +e;
}
const du = _s(er), fu = du.right;
_s(uu).center;
function ii(e, t) {
  let r, a;
  if (t === void 0)
    for (const s of e)
      s != null && (r === void 0 ? s >= s && (r = a = s) : (r > s && (r = s), a < s && (a = s)));
  else {
    let s = -1;
    for (let o of e)
      (o = t(o, ++s, e)) != null && (r === void 0 ? o >= o && (r = a = o) : (r > o && (r = o), a < o && (a = o)));
  }
  return [r, a];
}
class Gs extends Map {
  constructor(t, r = mu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [a, s] of t) this.set(a, s);
  }
  get(t) {
    return super.get(Ys(this, t));
  }
  has(t) {
    return super.has(Ys(this, t));
  }
  set(t, r) {
    return super.set(pu(this, t), r);
  }
  delete(t) {
    return super.delete(hu(this, t));
  }
}
function Ys({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : r;
}
function pu({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) ? e.get(a) : (e.set(a, r), r);
}
function hu({ _intern: e, _key: t }, r) {
  const a = t(r);
  return e.has(a) && (r = e.get(a), e.delete(a)), r;
}
function mu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const gu = Math.sqrt(50), xu = Math.sqrt(10), bu = Math.sqrt(2);
function ar(e, t, r) {
  const a = (t - e) / Math.max(0, r), s = Math.floor(Math.log10(a)), o = a / Math.pow(10, s), i = o >= gu ? 10 : o >= xu ? 5 : o >= bu ? 2 : 1;
  let l, u, c;
  return s < 0 ? (c = Math.pow(10, -s) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, s) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= r && r < 2 ? ar(e, t, r * 2) : [l, u, c];
}
function yu(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [s, o, i] = a ? ar(t, e, r) : ar(e, t, r);
  if (!(o >= s)) return [];
  const l = o - s + 1, u = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) u[c] = (o - c) / -i;
    else for (let c = 0; c < l; ++c) u[c] = (o - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) u[c] = (s + c) / -i;
  else for (let c = 0; c < l; ++c) u[c] = (s + c) * i;
  return u;
}
function Ea(e, t, r) {
  return t = +t, e = +e, r = +r, ar(e, t, r)[2];
}
function Ra(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, s = a ? Ea(t, e, r) : Ea(e, t, r);
  return (a ? -1 : 1) * (s < 0 ? 1 / -s : s);
}
function vu(e, t, r) {
  e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
  for (var a = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(s); ++a < s; )
    o[a] = e + a * r;
  return o;
}
function qr(e, t) {
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
const qs = Symbol("implicit");
function li() {
  var e = new Gs(), t = [], r = [], a = qs;
  function s(o) {
    let i = e.get(o);
    if (i === void 0) {
      if (a !== qs) return a;
      e.set(o, i = t.push(o) - 1);
    }
    return r[i % r.length];
  }
  return s.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new Gs();
    for (const i of o)
      e.has(i) || e.set(i, t.push(i) - 1);
    return s;
  }, s.range = function(o) {
    return arguments.length ? (r = Array.from(o), s) : r.slice();
  }, s.unknown = function(o) {
    return arguments.length ? (a = o, s) : a;
  }, s.copy = function() {
    return li(t, r).unknown(a);
  }, qr.apply(s, arguments), s;
}
function ci() {
  var e = li().unknown(void 0), t = e.domain, r = e.range, a = 0, s = 1, o, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var m = t().length, v = s < a, S = v ? s : a, x = v ? a : s;
    o = (x - S) / Math.max(1, m - u + c * 2), l && (o = Math.floor(o)), S += (x - S - o * (m - u)) * d, i = o * (1 - u), l && (S = Math.round(S), i = Math.round(i));
    var p = vu(m).map(function(g) {
      return S + o * g;
    });
    return r(v ? p.reverse() : p);
  }
  return e.domain = function(m) {
    return arguments.length ? (t(m), f()) : t();
  }, e.range = function(m) {
    return arguments.length ? ([a, s] = m, a = +a, s = +s, f()) : [a, s];
  }, e.rangeRound = function(m) {
    return [a, s] = m, a = +a, s = +s, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return o;
  }, e.round = function(m) {
    return arguments.length ? (l = !!m, f()) : l;
  }, e.padding = function(m) {
    return arguments.length ? (u = Math.min(1, c = +m), f()) : u;
  }, e.paddingInner = function(m) {
    return arguments.length ? (u = Math.min(1, m), f()) : u;
  }, e.paddingOuter = function(m) {
    return arguments.length ? (c = +m, f()) : c;
  }, e.align = function(m) {
    return arguments.length ? (d = Math.max(0, Math.min(1, m)), f()) : d;
  }, e.copy = function() {
    return ci(t(), [a, s]).round(l).paddingInner(u).paddingOuter(c).align(d);
  }, qr.apply(f(), arguments);
}
function Ss(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ui(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Wn() {
}
var Pn = 0.7, sr = 1 / Pn, gn = "\\s*([+-]?\\d+)\\s*", An = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", St = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wu = /^#([0-9a-f]{3,8})$/, _u = new RegExp(`^rgb\\(${gn},${gn},${gn}\\)$`), Su = new RegExp(`^rgb\\(${St},${St},${St}\\)$`), ku = new RegExp(`^rgba\\(${gn},${gn},${gn},${An}\\)$`), Cu = new RegExp(`^rgba\\(${St},${St},${St},${An}\\)$`), ju = new RegExp(`^hsl\\(${An},${St},${St}\\)$`), Nu = new RegExp(`^hsla\\(${An},${St},${St},${An}\\)$`), Xs = {
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
Ss(Wn, En, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ks,
  // Deprecated! Use color.formatHex.
  formatHex: Ks,
  formatHex8: Tu,
  formatHsl: Du,
  formatRgb: Js,
  toString: Js
});
function Ks() {
  return this.rgb().formatHex();
}
function Tu() {
  return this.rgb().formatHex8();
}
function Du() {
  return di(this).formatHsl();
}
function Js() {
  return this.rgb().formatRgb();
}
function En(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = wu.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Zs(t) : r === 3 ? new pt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Kn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Kn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = _u.exec(e)) ? new pt(t[1], t[2], t[3], 1) : (t = Su.exec(e)) ? new pt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ku.exec(e)) ? Kn(t[1], t[2], t[3], t[4]) : (t = Cu.exec(e)) ? Kn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ju.exec(e)) ? to(t[1], t[2] / 100, t[3] / 100, 1) : (t = Nu.exec(e)) ? to(t[1], t[2] / 100, t[3] / 100, t[4]) : Xs.hasOwnProperty(e) ? Zs(Xs[e]) : e === "transparent" ? new pt(NaN, NaN, NaN, 0) : null;
}
function Zs(e) {
  return new pt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Kn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new pt(e, t, r, a);
}
function $u(e) {
  return e instanceof Wn || (e = En(e)), e ? (e = e.rgb(), new pt(e.r, e.g, e.b, e.opacity)) : new pt();
}
function Ba(e, t, r, a) {
  return arguments.length === 1 ? $u(e) : new pt(e, t, r, a ?? 1);
}
function pt(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Ss(pt, Ba, ui(Wn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pn : Math.pow(Pn, e), new pt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new pt(Qt(this.r), Qt(this.g), Qt(this.b), or(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Qs,
  // Deprecated! Use color.formatHex.
  formatHex: Qs,
  formatHex8: Iu,
  formatRgb: eo,
  toString: eo
}));
function Qs() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}`;
}
function Iu() {
  return `#${Zt(this.r)}${Zt(this.g)}${Zt(this.b)}${Zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function eo() {
  const e = or(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Qt(this.r)}, ${Qt(this.g)}, ${Qt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function or(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Qt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Zt(e) {
  return e = Qt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function to(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new gt(e, t, r, a);
}
function di(e) {
  if (e instanceof gt) return new gt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Wn || (e = En(e)), !e) return new gt();
  if (e instanceof gt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, s = Math.min(t, r, a), o = Math.max(t, r, a), i = NaN, l = o - s, u = (o + s) / 2;
  return l ? (t === o ? i = (r - a) / l + (r < a) * 6 : r === o ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= u < 0.5 ? o + s : 2 - o - s, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new gt(i, l, u, e.opacity);
}
function Mu(e, t, r, a) {
  return arguments.length === 1 ? di(e) : new gt(e, t, r, a ?? 1);
}
function gt(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Ss(gt, Mu, ui(Wn, {
  brighter(e) {
    return e = e == null ? sr : Math.pow(sr, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Pn : Math.pow(Pn, e), new gt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - a;
    return new pt(
      xa(e >= 240 ? e - 240 : e + 120, s, a),
      xa(e, s, a),
      xa(e < 120 ? e + 240 : e - 120, s, a),
      this.opacity
    );
  },
  clamp() {
    return new gt(no(this.h), Jn(this.s), Jn(this.l), or(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = or(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${no(this.h)}, ${Jn(this.s) * 100}%, ${Jn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function no(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Jn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function xa(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const ks = (e) => () => e;
function Lu(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function Fu(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Pu(e) {
  return (e = +e) == 1 ? fi : function(t, r) {
    return r - t ? Fu(t, r, e) : ks(isNaN(t) ? r : t);
  };
}
function fi(e, t) {
  var r = t - e;
  return r ? Lu(e, r) : ks(isNaN(e) ? t : e);
}
const ro = (function e(t) {
  var r = Pu(t);
  function a(s, o) {
    var i = r((s = Ba(s)).r, (o = Ba(o)).r), l = r(s.g, o.g), u = r(s.b, o.b), c = fi(s.opacity, o.opacity);
    return function(d) {
      return s.r = i(d), s.g = l(d), s.b = u(d), s.opacity = c(d), s + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Au(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), s;
  return function(o) {
    for (s = 0; s < r; ++s) a[s] = e[s] * (1 - o) + t[s] * o;
    return a;
  };
}
function Eu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ru(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, s = new Array(a), o = new Array(r), i;
  for (i = 0; i < a; ++i) s[i] = Cs(e[i], t[i]);
  for (; i < r; ++i) o[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) o[i] = s[i](l);
    return o;
  };
}
function Bu(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function ir(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Hu(e, t) {
  var r = {}, a = {}, s;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (s in t)
    s in e ? r[s] = Cs(e[s], t[s]) : a[s] = t[s];
  return function(o) {
    for (s in r) a[s] = r[s](o);
    return a;
  };
}
var Ha = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ba = new RegExp(Ha.source, "g");
function Ou(e) {
  return function() {
    return e;
  };
}
function zu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Wu(e, t) {
  var r = Ha.lastIndex = ba.lastIndex = 0, a, s, o, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Ha.exec(e)) && (s = ba.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), l[i] ? l[i] += o : l[++i] = o), (a = a[0]) === (s = s[0]) ? l[i] ? l[i] += s : l[++i] = s : (l[++i] = null, u.push({ i, x: ir(a, s) })), r = ba.lastIndex;
  return r < t.length && (o = t.slice(r), l[i] ? l[i] += o : l[++i] = o), l.length < 2 ? u[0] ? zu(u[0].x) : Ou(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function Cs(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? ks(t) : (r === "number" ? ir : r === "string" ? (a = En(t)) ? (t = a, ro) : Wu : t instanceof En ? ro : t instanceof Date ? Bu : Eu(t) ? Au : Array.isArray(t) ? Ru : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Hu : ir)(e, t);
}
function Uu(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Vu(e) {
  return function() {
    return e;
  };
}
function Gu(e) {
  return +e;
}
var ao = [0, 1];
function hn(e) {
  return e;
}
function Oa(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Vu(isNaN(t) ? NaN : 0.5);
}
function Yu(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function qu(e, t, r) {
  var a = e[0], s = e[1], o = t[0], i = t[1];
  return s < a ? (a = Oa(s, a), o = r(i, o)) : (a = Oa(a, s), o = r(o, i)), function(l) {
    return o(a(l));
  };
}
function Xu(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, s = new Array(a), o = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    s[i] = Oa(e[i], e[i + 1]), o[i] = r(t[i], t[i + 1]);
  return function(l) {
    var u = fu(e, l, 1, a) - 1;
    return o[u](s[u](l));
  };
}
function pi(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ku() {
  var e = ao, t = ao, r = Cs, a, s, o, i = hn, l, u, c;
  function d() {
    var m = Math.min(e.length, t.length);
    return i !== hn && (i = Yu(e[0], e[m - 1])), l = m > 2 ? Xu : qu, u = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? o : (u || (u = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(s((c || (c = l(t, e.map(a), ir)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Gu), d()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), d()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = Uu, d();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : hn, d()) : i !== hn;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, d()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (o = m, f) : o;
  }, function(m, v) {
    return a = m, s = v, d();
  };
}
function hi() {
  return Ku()(hn, hn);
}
function Ju(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function lr(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, a = e.slice(0, r);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(r + 1)
  ];
}
function vn(e) {
  return e = lr(Math.abs(e)), e ? e[1] : NaN;
}
function Zu(e, t) {
  return function(r, a) {
    for (var s = r.length, o = [], i = 0, l = e[0], u = 0; s > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), o.push(r.substring(s -= l, s + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return o.reverse().join(t);
  };
}
function Qu(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var ed = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cr(e) {
  if (!(t = ed.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new js({
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
cr.prototype = js.prototype;
function js(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
js.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function td(e) {
  e: for (var t = e.length, r = 1, a = -1, s; r < t; ++r)
    switch (e[r]) {
      case ".":
        a = s = r;
        break;
      case "0":
        a === 0 && (a = r), s = r;
        break;
      default:
        if (!+e[r]) break e;
        a > 0 && (a = 0);
        break;
    }
  return a > 0 ? e.slice(0, a) + e.slice(s + 1) : e;
}
var mi;
function nd(e, t) {
  var r = lr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1], o = s - (mi = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1, i = a.length;
  return o === i ? a : o > i ? a + new Array(o - i + 1).join("0") : o > 0 ? a.slice(0, o) + "." + a.slice(o) : "0." + new Array(1 - o).join("0") + lr(e, Math.max(0, t + o - 1))[0];
}
function so(e, t) {
  var r = lr(e, t);
  if (!r) return e + "";
  var a = r[0], s = r[1];
  return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0");
}
const oo = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Ju,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => so(e * 100, t),
  r: so,
  s: nd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function io(e) {
  return e;
}
var lo = Array.prototype.map, co = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function rd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? io : Zu(lo.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", s = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? io : Qu(lo.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = cr(f);
    var m = f.fill, v = f.align, S = f.sign, x = f.symbol, p = f.zero, g = f.width, I = f.comma, M = f.precision, T = f.trim, R = f.type;
    R === "n" ? (I = !0, R = "g") : oo[R] || (M === void 0 && (M = 12), T = !0, R = "g"), (p || m === "0" && v === "=") && (p = !0, m = "0", v = "=");
    var D = x === "$" ? r : x === "#" && /[boxX]/.test(R) ? "0" + R.toLowerCase() : "", N = x === "$" ? a : /[%p]/.test(R) ? i : "", k = oo[R], b = /[defgprs%]/.test(R);
    M = M === void 0 ? 6 : /[gprs]/.test(R) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function j(_) {
      var h = D, L = N, w, y, C;
      if (R === "c")
        L = k(_) + L, _ = "";
      else {
        _ = +_;
        var A = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? u : k(Math.abs(_), M), T && (_ = td(_)), A && +_ == 0 && S !== "+" && (A = !1), h = (A ? S === "(" ? S : l : S === "-" || S === "(" ? "" : S) + h, L = (R === "s" ? co[8 + mi / 3] : "") + L + (A && S === "(" ? ")" : ""), b) {
          for (w = -1, y = _.length; ++w < y; )
            if (C = _.charCodeAt(w), 48 > C || C > 57) {
              L = (C === 46 ? s + _.slice(w + 1) : _.slice(w)) + L, _ = _.slice(0, w);
              break;
            }
        }
      }
      I && !p && (_ = t(_, 1 / 0));
      var re = h.length + _.length + L.length, Y = re < g ? new Array(g - re + 1).join(m) : "";
      switch (I && p && (_ = t(Y + _, Y.length ? g - L.length : 1 / 0), Y = ""), v) {
        case "<":
          _ = h + _ + L + Y;
          break;
        case "=":
          _ = h + Y + _ + L;
          break;
        case "^":
          _ = Y.slice(0, re = Y.length >> 1) + h + _ + L + Y.slice(re);
          break;
        default:
          _ = Y + h + _ + L;
          break;
      }
      return o(_);
    }
    return j.toString = function() {
      return f + "";
    }, j;
  }
  function d(f, m) {
    var v = c((f = cr(f), f.type = "f", f)), S = Math.max(-8, Math.min(8, Math.floor(vn(m) / 3))) * 3, x = Math.pow(10, -S), p = co[8 + S / 3];
    return function(g) {
      return v(x * g) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var Zn, gi, xi;
ad({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ad(e) {
  return Zn = rd(e), gi = Zn.format, xi = Zn.formatPrefix, Zn;
}
function sd(e) {
  return Math.max(0, -vn(Math.abs(e)));
}
function od(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vn(t) / 3))) * 3 - vn(Math.abs(e)));
}
function id(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, vn(t) - vn(e)) + 1;
}
function ld(e, t, r, a) {
  var s = Ra(e, t, r), o;
  switch (a = cr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(o = od(s, i)) && (a.precision = o), xi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(o = id(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = o - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(o = sd(s)) && (a.precision = o - (a.type === "%") * 2);
      break;
    }
  }
  return gi(a);
}
function cd(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var a = t();
    return yu(a[0], a[a.length - 1], r ?? 10);
  }, e.tickFormat = function(r, a) {
    var s = t();
    return ld(s[0], s[s.length - 1], r ?? 10, a);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var a = t(), s = 0, o = a.length - 1, i = a[s], l = a[o], u, c, d = 10;
    for (l < i && (c = i, i = l, l = c, c = s, s = o, o = c); d-- > 0; ) {
      if (c = Ea(i, l, r), c === u)
        return a[s] = i, a[o] = l, t(a);
      if (c > 0)
        i = Math.floor(i / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        i = Math.ceil(i * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function ur() {
  var e = hi();
  return e.copy = function() {
    return pi(e, ur());
  }, qr.apply(e, arguments), cd(e);
}
function ud(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, s = e[r], o = e[a], i;
  return o < s && (i = r, r = a, a = i, i = s, s = o, o = i), e[r] = t.floor(s), e[a] = t.ceil(o), e;
}
const ya = /* @__PURE__ */ new Date(), va = /* @__PURE__ */ new Date();
function nt(e, t, r, a) {
  function s(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return s.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), s.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), s.round = (o) => {
    const i = s(o), l = s.ceil(o);
    return o - i < l - o ? i : l;
  }, s.offset = (o, i) => (t(o = /* @__PURE__ */ new Date(+o), i == null ? 1 : Math.floor(i)), o), s.range = (o, i, l) => {
    const u = [];
    if (o = s.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < i) || !(l > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (c < o && o < i);
    return u;
  }, s.filter = (o) => nt((i) => {
    if (i >= i) for (; e(i), !o(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !o(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !o(i); )
          ;
  }), r && (s.count = (o, i) => (ya.setTime(+o), va.setTime(+i), e(ya), e(va), Math.floor(r(ya, va))), s.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? s.filter(a ? (i) => a(i) % o === 0 : (i) => s.count(0, i) % o === 0) : s)), s;
}
const dr = nt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
dr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? nt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : dr);
dr.range;
const Et = 1e3, mt = Et * 60, Rt = mt * 60, Ht = Rt * 24, Ns = Ht * 7, uo = Ht * 30, wa = Ht * 365, mn = nt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Et);
}, (e, t) => (t - e) / Et, (e) => e.getUTCSeconds());
mn.range;
const Ts = nt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Et);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getMinutes());
Ts.range;
const dd = nt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * mt);
}, (e, t) => (t - e) / mt, (e) => e.getUTCMinutes());
dd.range;
const Ds = nt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Et - e.getMinutes() * mt);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getHours());
Ds.range;
const fd = nt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Rt);
}, (e, t) => (t - e) / Rt, (e) => e.getUTCHours());
fd.range;
const Un = nt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * mt) / Ht,
  (e) => e.getDate() - 1
);
Un.range;
const $s = nt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCDate() - 1);
$s.range;
const pd = nt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ht, (e) => Math.floor(e / Ht));
pd.range;
function sn(e) {
  return nt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * mt) / Ns);
}
const Xr = sn(0), fr = sn(1), hd = sn(2), md = sn(3), wn = sn(4), gd = sn(5), xd = sn(6);
Xr.range;
fr.range;
hd.range;
md.range;
wn.range;
gd.range;
xd.range;
function on(e) {
  return nt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Ns);
}
const bi = on(0), pr = on(1), bd = on(2), yd = on(3), _n = on(4), vd = on(5), wd = on(6);
bi.range;
pr.range;
bd.range;
yd.range;
_n.range;
vd.range;
wd.range;
const Rn = nt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Rn.range;
const _d = nt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
_d.range;
const Ot = nt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ot.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : nt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ot.range;
const rn = nt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
rn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : nt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
rn.range;
function Sd(e, t, r, a, s, o) {
  const i = [
    [mn, 1, Et],
    [mn, 5, 5 * Et],
    [mn, 15, 15 * Et],
    [mn, 30, 30 * Et],
    [o, 1, mt],
    [o, 5, 5 * mt],
    [o, 15, 15 * mt],
    [o, 30, 30 * mt],
    [s, 1, Rt],
    [s, 3, 3 * Rt],
    [s, 6, 6 * Rt],
    [s, 12, 12 * Rt],
    [a, 1, Ht],
    [a, 2, 2 * Ht],
    [r, 1, Ns],
    [t, 1, uo],
    [t, 3, 3 * uo],
    [e, 1, wa]
  ];
  function l(c, d, f) {
    const m = d < c;
    m && ([c, d] = [d, c]);
    const v = f && typeof f.range == "function" ? f : u(c, d, f), S = v ? v.range(c, +d + 1) : [];
    return m ? S.reverse() : S;
  }
  function u(c, d, f) {
    const m = Math.abs(d - c) / f, v = _s(([, , p]) => p).right(i, m);
    if (v === i.length) return e.every(Ra(c / wa, d / wa, f));
    if (v === 0) return dr.every(Math.max(Ra(c, d, f), 1));
    const [S, x] = i[m / i[v - 1][2] < i[v][2] / m ? v - 1 : v];
    return S.every(x);
  }
  return [l, u];
}
const [kd, Cd] = Sd(Ot, Rn, Xr, Un, Ds, Ts);
function _a(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Sa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Tn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function jd(e) {
  var t = e.dateTime, r = e.date, a = e.time, s = e.periods, o = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = Dn(s), d = $n(s), f = Dn(o), m = $n(o), v = Dn(i), S = $n(i), x = Dn(l), p = $n(l), g = Dn(u), I = $n(u), M = {
    a: A,
    A: re,
    b: Y,
    B,
    c: null,
    d: xo,
    e: xo,
    f: Xd,
    g: sf,
    G: lf,
    H: Gd,
    I: Yd,
    j: qd,
    L: yi,
    m: Kd,
    M: Jd,
    p: O,
    q: z,
    Q: vo,
    s: wo,
    S: Zd,
    u: Qd,
    U: ef,
    V: tf,
    w: nf,
    W: rf,
    x: null,
    X: null,
    y: af,
    Y: of,
    Z: cf,
    "%": yo
  }, T = {
    a: oe,
    A: U,
    b: ce,
    B: we,
    c: null,
    d: bo,
    e: bo,
    f: pf,
    g: Sf,
    G: Cf,
    H: uf,
    I: df,
    j: ff,
    L: wi,
    m: hf,
    M: mf,
    p: ue,
    q: de,
    Q: vo,
    s: wo,
    S: gf,
    u: xf,
    U: bf,
    V: yf,
    w: vf,
    W: wf,
    x: null,
    X: null,
    y: _f,
    Y: kf,
    Z: jf,
    "%": yo
  }, R = {
    a: j,
    A: _,
    b: h,
    B: L,
    c: w,
    d: mo,
    e: mo,
    f: zd,
    g: ho,
    G: po,
    H: go,
    I: go,
    j: Rd,
    L: Od,
    m: Ed,
    M: Bd,
    p: b,
    q: Ad,
    Q: Ud,
    s: Vd,
    S: Hd,
    u: Id,
    U: Md,
    V: Ld,
    w: $d,
    W: Fd,
    x: y,
    X: C,
    y: ho,
    Y: po,
    Z: Pd,
    "%": Wd
  };
  M.x = D(r, M), M.X = D(a, M), M.c = D(t, M), T.x = D(r, T), T.X = D(a, T), T.c = D(t, T);
  function D(ee, se) {
    return function(fe) {
      var q = [], $ = -1, F = 0, W = ee.length, te, J, le;
      for (fe instanceof Date || (fe = /* @__PURE__ */ new Date(+fe)); ++$ < W; )
        ee.charCodeAt($) === 37 && (q.push(ee.slice(F, $)), (J = fo[te = ee.charAt(++$)]) != null ? te = ee.charAt(++$) : J = te === "e" ? " " : "0", (le = se[te]) && (te = le(fe, J)), q.push(te), F = $ + 1);
      return q.push(ee.slice(F, $)), q.join("");
    };
  }
  function N(ee, se) {
    return function(fe) {
      var q = Tn(1900, void 0, 1), $ = k(q, ee, fe += "", 0), F, W;
      if ($ != fe.length) return null;
      if ("Q" in q) return new Date(q.Q);
      if ("s" in q) return new Date(q.s * 1e3 + ("L" in q ? q.L : 0));
      if (se && !("Z" in q) && (q.Z = 0), "p" in q && (q.H = q.H % 12 + q.p * 12), q.m === void 0 && (q.m = "q" in q ? q.q : 0), "V" in q) {
        if (q.V < 1 || q.V > 53) return null;
        "w" in q || (q.w = 1), "Z" in q ? (F = Sa(Tn(q.y, 0, 1)), W = F.getUTCDay(), F = W > 4 || W === 0 ? pr.ceil(F) : pr(F), F = $s.offset(F, (q.V - 1) * 7), q.y = F.getUTCFullYear(), q.m = F.getUTCMonth(), q.d = F.getUTCDate() + (q.w + 6) % 7) : (F = _a(Tn(q.y, 0, 1)), W = F.getDay(), F = W > 4 || W === 0 ? fr.ceil(F) : fr(F), F = Un.offset(F, (q.V - 1) * 7), q.y = F.getFullYear(), q.m = F.getMonth(), q.d = F.getDate() + (q.w + 6) % 7);
      } else ("W" in q || "U" in q) && ("w" in q || (q.w = "u" in q ? q.u % 7 : "W" in q ? 1 : 0), W = "Z" in q ? Sa(Tn(q.y, 0, 1)).getUTCDay() : _a(Tn(q.y, 0, 1)).getDay(), q.m = 0, q.d = "W" in q ? (q.w + 6) % 7 + q.W * 7 - (W + 5) % 7 : q.w + q.U * 7 - (W + 6) % 7);
      return "Z" in q ? (q.H += q.Z / 100 | 0, q.M += q.Z % 100, Sa(q)) : _a(q);
    };
  }
  function k(ee, se, fe, q) {
    for (var $ = 0, F = se.length, W = fe.length, te, J; $ < F; ) {
      if (q >= W) return -1;
      if (te = se.charCodeAt($++), te === 37) {
        if (te = se.charAt($++), J = R[te in fo ? se.charAt($++) : te], !J || (q = J(ee, fe, q)) < 0) return -1;
      } else if (te != fe.charCodeAt(q++))
        return -1;
    }
    return q;
  }
  function b(ee, se, fe) {
    var q = c.exec(se.slice(fe));
    return q ? (ee.p = d.get(q[0].toLowerCase()), fe + q[0].length) : -1;
  }
  function j(ee, se, fe) {
    var q = v.exec(se.slice(fe));
    return q ? (ee.w = S.get(q[0].toLowerCase()), fe + q[0].length) : -1;
  }
  function _(ee, se, fe) {
    var q = f.exec(se.slice(fe));
    return q ? (ee.w = m.get(q[0].toLowerCase()), fe + q[0].length) : -1;
  }
  function h(ee, se, fe) {
    var q = g.exec(se.slice(fe));
    return q ? (ee.m = I.get(q[0].toLowerCase()), fe + q[0].length) : -1;
  }
  function L(ee, se, fe) {
    var q = x.exec(se.slice(fe));
    return q ? (ee.m = p.get(q[0].toLowerCase()), fe + q[0].length) : -1;
  }
  function w(ee, se, fe) {
    return k(ee, t, se, fe);
  }
  function y(ee, se, fe) {
    return k(ee, r, se, fe);
  }
  function C(ee, se, fe) {
    return k(ee, a, se, fe);
  }
  function A(ee) {
    return i[ee.getDay()];
  }
  function re(ee) {
    return o[ee.getDay()];
  }
  function Y(ee) {
    return u[ee.getMonth()];
  }
  function B(ee) {
    return l[ee.getMonth()];
  }
  function O(ee) {
    return s[+(ee.getHours() >= 12)];
  }
  function z(ee) {
    return 1 + ~~(ee.getMonth() / 3);
  }
  function oe(ee) {
    return i[ee.getUTCDay()];
  }
  function U(ee) {
    return o[ee.getUTCDay()];
  }
  function ce(ee) {
    return u[ee.getUTCMonth()];
  }
  function we(ee) {
    return l[ee.getUTCMonth()];
  }
  function ue(ee) {
    return s[+(ee.getUTCHours() >= 12)];
  }
  function de(ee) {
    return 1 + ~~(ee.getUTCMonth() / 3);
  }
  return {
    format: function(ee) {
      var se = D(ee += "", M);
      return se.toString = function() {
        return ee;
      }, se;
    },
    parse: function(ee) {
      var se = N(ee += "", !1);
      return se.toString = function() {
        return ee;
      }, se;
    },
    utcFormat: function(ee) {
      var se = D(ee += "", T);
      return se.toString = function() {
        return ee;
      }, se;
    },
    utcParse: function(ee) {
      var se = N(ee += "", !0);
      return se.toString = function() {
        return ee;
      }, se;
    }
  };
}
var fo = { "-": "", _: " ", 0: "0" }, st = /^\s*\d+/, Nd = /^%/, Td = /[\\^$*+?|[\]().{}]/g;
function Re(e, t, r) {
  var a = e < 0 ? "-" : "", s = (a ? -e : e) + "", o = s.length;
  return a + (o < r ? new Array(r - o + 1).join(t) + s : s);
}
function Dd(e) {
  return e.replace(Td, "\\$&");
}
function Dn(e) {
  return new RegExp("^(?:" + e.map(Dd).join("|") + ")", "i");
}
function $n(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function $d(e, t, r) {
  var a = st.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Id(e, t, r) {
  var a = st.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Md(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Ld(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Fd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function po(e, t, r) {
  var a = st.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function ho(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Pd(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Ad(e, t, r) {
  var a = st.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Ed(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function mo(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Rd(e, t, r) {
  var a = st.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function go(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Bd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Hd(e, t, r) {
  var a = st.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function Od(e, t, r) {
  var a = st.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function zd(e, t, r) {
  var a = st.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Wd(e, t, r) {
  var a = Nd.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Ud(e, t, r) {
  var a = st.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function Vd(e, t, r) {
  var a = st.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function xo(e, t) {
  return Re(e.getDate(), t, 2);
}
function Gd(e, t) {
  return Re(e.getHours(), t, 2);
}
function Yd(e, t) {
  return Re(e.getHours() % 12 || 12, t, 2);
}
function qd(e, t) {
  return Re(1 + Un.count(Ot(e), e), t, 3);
}
function yi(e, t) {
  return Re(e.getMilliseconds(), t, 3);
}
function Xd(e, t) {
  return yi(e, t) + "000";
}
function Kd(e, t) {
  return Re(e.getMonth() + 1, t, 2);
}
function Jd(e, t) {
  return Re(e.getMinutes(), t, 2);
}
function Zd(e, t) {
  return Re(e.getSeconds(), t, 2);
}
function Qd(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function ef(e, t) {
  return Re(Xr.count(Ot(e) - 1, e), t, 2);
}
function vi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? wn(e) : wn.ceil(e);
}
function tf(e, t) {
  return e = vi(e), Re(wn.count(Ot(e), e) + (Ot(e).getDay() === 4), t, 2);
}
function nf(e) {
  return e.getDay();
}
function rf(e, t) {
  return Re(fr.count(Ot(e) - 1, e), t, 2);
}
function af(e, t) {
  return Re(e.getFullYear() % 100, t, 2);
}
function sf(e, t) {
  return e = vi(e), Re(e.getFullYear() % 100, t, 2);
}
function of(e, t) {
  return Re(e.getFullYear() % 1e4, t, 4);
}
function lf(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? wn(e) : wn.ceil(e), Re(e.getFullYear() % 1e4, t, 4);
}
function cf(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Re(t / 60 | 0, "0", 2) + Re(t % 60, "0", 2);
}
function bo(e, t) {
  return Re(e.getUTCDate(), t, 2);
}
function uf(e, t) {
  return Re(e.getUTCHours(), t, 2);
}
function df(e, t) {
  return Re(e.getUTCHours() % 12 || 12, t, 2);
}
function ff(e, t) {
  return Re(1 + $s.count(rn(e), e), t, 3);
}
function wi(e, t) {
  return Re(e.getUTCMilliseconds(), t, 3);
}
function pf(e, t) {
  return wi(e, t) + "000";
}
function hf(e, t) {
  return Re(e.getUTCMonth() + 1, t, 2);
}
function mf(e, t) {
  return Re(e.getUTCMinutes(), t, 2);
}
function gf(e, t) {
  return Re(e.getUTCSeconds(), t, 2);
}
function xf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function bf(e, t) {
  return Re(bi.count(rn(e) - 1, e), t, 2);
}
function _i(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? _n(e) : _n.ceil(e);
}
function yf(e, t) {
  return e = _i(e), Re(_n.count(rn(e), e) + (rn(e).getUTCDay() === 4), t, 2);
}
function vf(e) {
  return e.getUTCDay();
}
function wf(e, t) {
  return Re(pr.count(rn(e) - 1, e), t, 2);
}
function _f(e, t) {
  return Re(e.getUTCFullYear() % 100, t, 2);
}
function Sf(e, t) {
  return e = _i(e), Re(e.getUTCFullYear() % 100, t, 2);
}
function kf(e, t) {
  return Re(e.getUTCFullYear() % 1e4, t, 4);
}
function Cf(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? _n(e) : _n.ceil(e), Re(e.getUTCFullYear() % 1e4, t, 4);
}
function jf() {
  return "+0000";
}
function yo() {
  return "%";
}
function vo(e) {
  return +e;
}
function wo(e) {
  return Math.floor(+e / 1e3);
}
var dn, Si;
Nf({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Nf(e) {
  return dn = jd(e), Si = dn.format, dn.parse, dn.utcFormat, dn.utcParse, dn;
}
function Tf(e) {
  return new Date(e);
}
function Df(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function ki(e, t, r, a, s, o, i, l, u, c) {
  var d = hi(), f = d.invert, m = d.domain, v = c(".%L"), S = c(":%S"), x = c("%I:%M"), p = c("%I %p"), g = c("%a %d"), I = c("%b %d"), M = c("%B"), T = c("%Y");
  function R(D) {
    return (u(D) < D ? v : l(D) < D ? S : i(D) < D ? x : o(D) < D ? p : a(D) < D ? s(D) < D ? g : I : r(D) < D ? M : T)(D);
  }
  return d.invert = function(D) {
    return new Date(f(D));
  }, d.domain = function(D) {
    return arguments.length ? m(Array.from(D, Df)) : m().map(Tf);
  }, d.ticks = function(D) {
    var N = m();
    return e(N[0], N[N.length - 1], D ?? 10);
  }, d.tickFormat = function(D, N) {
    return N == null ? R : c(N);
  }, d.nice = function(D) {
    var N = m();
    return (!D || typeof D.range != "function") && (D = t(N[0], N[N.length - 1], D ?? 10)), D ? m(ud(N, D)) : d;
  }, d.copy = function() {
    return pi(d, ki(e, t, r, a, s, o, i, l, u, c));
  }, d;
}
function Is() {
  return qr.apply(ki(kd, Cd, Ot, Rn, Xr, Un, Ds, Ts, mn, Si).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function $f({
  task: e,
  scale: t,
  onTaskClick: r,
  onTaskDoubleClick: a,
  isSelected: s = !1,
  taskIndex: o,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const c = Ae(null), [d, f] = Fe(!1), [m, v] = Fe(!1), S = t(e.start), x = t(e.end), p = Math.max(x - S, 20), g = () => {
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
  }, I = e.progress ? p * e.progress / 100 : 0, M = () => {
    r?.(e);
  }, T = () => {
    a?.(e);
  }, R = (h) => {
    h.key === "Enter" ? (h.preventDefault(), M()) : h.key === " " && (h.preventDefault(), T());
  }, D = () => {
    f(!0);
  }, N = () => {
    f(!1);
  }, k = () => {
    v(!0), l?.();
  }, b = () => {
    v(!1);
  }, j = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (m || s) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    s && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), _ = {
    "--task-left": `${S}px`,
    "--task-width": `${p}px`,
    "--task-color": g(),
    left: `${S}px`,
    width: `${p}px`,
    backgroundColor: g()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": o,
      className: j,
      style: _,
      onClick: M,
      onDoubleClick: T,
      onKeyDown: R,
      onMouseDown: D,
      onMouseUp: N,
      onFocus: k,
      onBlur: b,
      "aria-label": u || `${s ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${I}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function If({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let v = e.getTime(); v <= t.getTime(); v += 864e5)
    a.push(new Date(v));
  const o = /* @__PURE__ */ new Date();
  o.setHours(0, 0, 0, 0);
  const [i, l] = Fe(-1), u = Ae(null), c = (v) => {
    if (v.key === "ArrowLeft") {
      v.preventDefault();
      const S = Math.max(0, i === -1 ? 0 : i - 1);
      l(S), m(S);
    } else if (v.key === "ArrowRight") {
      v.preventDefault();
      const S = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(S), m(S);
    } else if (v.key === "ArrowDown")
      v.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (v.key === "Home")
      v.preventDefault(), l(0), m(0);
    else if (v.key === "End") {
      v.preventDefault();
      const S = a.length - 1;
      l(S), m(S);
    }
  }, d = (v) => {
    if (v.key === "ArrowDown")
      v.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (v.key === "ArrowRight") {
      v.preventDefault();
      const S = u.current;
      S && S.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (v) => {
    const S = u.current?.querySelector(`[data-date-index="${v}"]`);
    S && S.focus();
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
            ref: u,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: f,
            children: a.map((v, S) => {
              const x = v.getTime() === o.getTime(), p = i === S;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": S,
                  className: `date-column ${x ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${v.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${x ? " (Today)" : ""}`,
                  onFocus: () => l(S),
                  onKeyDown: c,
                  children: v.toLocaleDateString("en-GB", {
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
function Mf({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: s, rowIndex: o, dateCount: i }) {
  const [l, u] = Fe(!1), [c, d] = Fe(-1), f = Ae(null);
  We(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const m = (x) => {
    if (x.key === "ArrowLeft" && x.shiftKey) {
      x.preventDefault(), x.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (x.key === "ArrowRight" && x.shiftKey) {
      x.preventDefault(), x.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (x.key) {
        case "ArrowUp":
          x.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          x.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (x.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (x.key) {
      case "ArrowLeft":
        x.preventDefault();
        const p = Math.max(0, c - 1);
        d(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault();
        const I = Math.min(t.length - 1, c + 1);
        d(I), f.current?.querySelector(`[data-task-index="${I}"]`)?.focus();
        break;
      case "Enter":
        x.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        x.preventDefault(), c >= 0 && s?.(t[c]);
        break;
      case "Escape":
        x.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, v = (x) => {
    switch (x.key) {
      case "ArrowUp":
        x.preventDefault(), o === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        x.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${o + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        x.preventDefault(), f.current?.focus();
        break;
    }
  }, S = (x) => {
    l && d(x);
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
            ref: f,
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
            children: t.map((x, p) => /* @__PURE__ */ n.jsx(
              $f,
              {
                task: x,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: s,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => S(p)
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
function wb({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: s,
  onTaskDoubleClick: o
}) {
  const i = Ae(null), [l, u] = Fe(800), c = De(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const x = new Date(r);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : x;
  }, [r]), d = De(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const x = new Date(a);
    return isNaN(x.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : x;
  }, [a]), f = De(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  We(() => {
    if (!i.current || typeof window > "u") return;
    const x = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!x) return;
    const p = new x((g) => {
      const I = g[0];
      I && u(Math.max(I.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const m = De(
    () => Is().domain([c, d]).range([0, l]),
    [c, d, l]
  ), v = De(() => {
    const x = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const g = x.get(p.resourceId) || [];
      g.push(p), x.set(p.resourceId, g);
    }), x;
  }, [t]), S = (x) => {
    if (x.target === x.currentTarget)
      switch (x.key) {
        case "ArrowDown":
          x.preventDefault(), typeof document < "u" && i.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          x.preventDefault(), typeof document < "u" && i.current?.querySelector(".header-resource")?.focus();
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
      "aria-colcount": f + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: S,
      children: [
        /* @__PURE__ */ n.jsx(If, { viewStart: c, viewEnd: d, dateCount: f }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (x) => {
              x.key === "ArrowLeft" && x.altKey ? (x.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : x.key === "ArrowRight" && x.altKey ? (x.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : x.key === "ArrowUp" && x.altKey ? (x.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : x.key === "ArrowDown" && x.altKey && (x.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((x, p) => /* @__PURE__ */ n.jsx(
              Mf,
              {
                resource: x,
                tasks: v.get(x.id) || [],
                scale: m,
                onTaskClick: s,
                onTaskDoubleClick: o,
                rowIndex: p,
                dateCount: f
              },
              x.id
            ))
          }
        )
      ]
    }
  );
}
const hr = ({
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
) }), Lf = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: s,
  text: o,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? ft.Children.toArray(t).filter(
    (p) => ft.isValidElement(p) && (p.type === hr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : s && o ? [{ href: s, text: o }] : e, d = () => {
    const x = c();
    if (x && x.length > 0) {
      const p = x.slice().reverse().find((g) => g.href && !g.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), m = d(), v = ve(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), S = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: v,
      "aria-label": S,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          ft.Children.map(t, (x, p) => ft.isValidElement(x) && (x.type === hr || x.type?.displayName === "BreadcrumbItem") ? ft.cloneElement(x, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((x) => x.active || !!x.href).map((x, p) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: x.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...x.attributes || {},
              children: x.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: x.href,
              role: "link",
              ...x.attributes || {},
              children: x.text
            }
          ) }, p))
        ) }),
        m.href && /* @__PURE__ */ n.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ n.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: m.href,
            role: "link",
            "aria-label": `Back to ${m.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              m.text
            ]
          }
        ) })
      ]
    }
  );
}, Ff = Lf;
Ff.Item = hr;
hr.displayName = "BreadcrumbItem";
const Ci = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [s, o] = Fe(!1);
  We(() => {
    o(!0);
  }, []), We(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (u) => {
      const c = u.target, d = c.getAttribute("href");
      if (d && d.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(d) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = m;
        }
      }
    };
    try {
      const u = document.querySelectorAll(".nhsuk-skip-link");
      return u.forEach((c) => {
        c.addEventListener("click", l);
      }), () => {
        try {
          u.forEach((c) => {
            c.removeEventListener("click", l);
            const d = c.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
          });
        } catch (c) {
          console.warn("SkipLink cleanup error:", c);
        }
      };
    } catch (u) {
      return console.warn("SkipLink initialization error:", u), () => {
      };
    }
  }, [s]);
  const i = ve("nhsuk-skip-link", r);
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
}, _b = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: s,
  attributes: o = {}
}) => {
  const i = ve("nhsuk-pagination", s);
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
}, Sb = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const s = ve("nhsuk-contents-list", t), o = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, ji = ft.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: r,
  headingLevel: a = 2,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: c,
  ...d
}, f) => {
  const m = [
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
  ].filter(Boolean).join(" "), S = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), x = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const I = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: a,
        className: S,
        children: I()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: o }) : null, g = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      className: m,
      ref: f,
      children: [
        u && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          x(),
          p(),
          g()
        ] })
      ]
    }
  );
});
ji.displayName = "Card";
const kb = ({
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
}, Cb = ({
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
}, jb = ({
  type: e,
  heading: t,
  headingHtml: r,
  headingLevel: a = 3,
  headingClasses: s,
  description: o,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": c,
  id: d,
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": v
}) => {
  const S = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), x = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), p = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const I = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], M = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        I,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Bt,
      {
        level: a,
        className: x,
        children: M
      }
    );
  }, g = () => u || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : o ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: o }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: S,
      "data-testid": c,
      id: d,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": v,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: g() })
      ]
    }
  );
}, Pf = ({
  id: e,
  className: t,
  headingText: r,
  headingHtml: a,
  headingLevel: s = 2,
  bodyText: o,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const c = ve(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Bt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Bt,
    {
      level: s,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => l ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : o ? /* @__PURE__ */ n.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ n.jsx("p", { children: o }) }) : null;
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...u, children: [
    d(),
    f()
  ] });
}, Nb = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...s
}) => {
  const o = ve("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: o, ...s, children: i() });
}, Tb = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const s = ve(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    r
  ), o = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, c) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ n.jsxs(
        "a",
        {
          href: u.href,
          className: "nhsuk-link",
          ...u.attributes,
          children: [
            o(u),
            u.visuallyHiddenText && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ n.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ n.jsx("dl", { className: s, ...a, children: e.map((l, u) => /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ n.jsx("dt", { className: "nhsuk-summary-list__key", children: o(l.key) }),
    /* @__PURE__ */ n.jsx("dd", { className: "nhsuk-summary-list__value", children: o(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, In = { current: null }, Af = () => {
  if (In.current) return In.current;
  try {
    In.current = require("prismjs");
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
    In.current = null;
  }
  return In.current;
}, Ef = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let r = e;
  return t.forEach((a) => {
    r = r.replace(a.regex, (s) => `<span class="nhsuk-code-${a.cls}">${s}</span>`);
  }), r;
}, mr = (e, t, r) => {
  if (r || !t) return e;
  const a = Af();
  if (a && a.languages) {
    const s = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (s)
      try {
        return a.highlight(e, a.languages[s], s);
      } catch {
      }
  }
  return Ef(e);
}, Rf = ({
  rows: e,
  head: t,
  caption: r,
  captionSize: a,
  firstCellIsHeader: s = !1,
  responsive: o = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: c,
  tableClasses: d,
  classes: f,
  attributes: m,
  "data-testid": v,
  columns: S,
  data: x,
  visuallyHiddenCaption: p = !1
}) => {
  const g = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), I = ve(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": o
    },
    d
  ), M = ve(f), T = (b, j) => {
    const _ = ve(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${b.format}`]: b.format
      },
      b.classes
    ), h = {
      scope: "col",
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && { role: "columnheader" },
      ...b.attributes
    };
    let L;
    if (b.node != null)
      L = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      L = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const w = Array.isArray(b.code), y = w ? b.code.join(`
`) : b.code, C = w || y.includes(`
`), A = {
        className: ve("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": C,
          "nhsuk-table__code--inline": !C
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, re = mr(y, b.codeLanguage);
      L = C ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: re }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: re }
        }
      );
    } else
      L = b.text;
    return /* @__PURE__ */ n.jsx("th", { className: _, ...h, children: L }, j);
  }, R = (b, j, _) => {
    const h = s && _ || b.rowHeader, L = ve(
      h ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${h ? "header" : "cell"}--${b.format}`]: b.format
      },
      b.classes
    ), w = {
      ...h && { scope: "row" },
      ...b.colspan && { colSpan: b.colspan },
      ...b.rowspan && { rowSpan: b.rowspan },
      ...o && {
        role: h ? "rowheader" : "cell",
        ...b.header && { "data-label": b.header }
      },
      ...b.attributes
    };
    let y;
    if (b.node != null)
      y = /* @__PURE__ */ n.jsx(n.Fragment, { children: b.node });
    else if (b.html)
      y = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: b.html } });
    else if (b.code != null) {
      const re = Array.isArray(b.code), Y = re ? b.code.join(`
`) : b.code, B = re || Y.includes(`
`), O = {
        className: ve("nhsuk-table__code", b.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...b.codeLanguage ? { "data-language": b.codeLanguage } : {}
      }, z = mr(
        Y,
        b.codeLanguage,
        b.disableHighlight
      );
      y = B ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: z }
        }
      ) }) : /* @__PURE__ */ n.jsx(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: z }
        }
      );
    } else
      y = b.text;
    const C = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      o && b.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        b.header,
        " "
      ] }),
      y
    ] }), A = h ? "th" : "td";
    return /* @__PURE__ */ n.jsx(A, { className: L, ...w, children: C }, j);
  };
  let D = t, N = e;
  !D && S && S.length && (D = S.map((b) => ({
    text: b.title,
    format: b.format,
    classes: b.headerClasses,
    attributes: b.headerAttributes
  }))), !N && S && x && x.length && (N = x.map((b, j) => S.map((_) => {
    const h = _.accessor ? _.accessor(b, j) : b[_.key];
    let L = { format: _.format, classes: _.cellClasses, attributes: _.cellAttributes };
    if (_.rowHeader && (L.rowHeader = !0), _.render) {
      const w = _.render(h, b, j, _);
      return w == null || typeof w == "boolean" ? { ...L, text: "" } : typeof w == "string" || typeof w == "number" ? { ...L, text: String(w) } : { ...L, ...w };
    }
    return { ...L, text: h != null ? String(h) : "" };
  })));
  const k = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: I,
      ...o && { role: "table" },
      ...m,
      ...v && { "data-testid": v },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: ve(g, p && "nhsuk-u-visually-hidden"), children: r }),
        D && D.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...o && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...o && { role: "row" }, children: D.map(
              (b, j) => T(b, j)
            ) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: N && N.map((b, j) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...o && { role: "row" },
            children: b.map(
              (_, h) => R(_, h, h === 0)
            )
          },
          j
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ n.jsxs(Pf, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(Bt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    k()
  ] }) : M ? /* @__PURE__ */ n.jsx("div", { className: M, children: k() }) : k();
}, Bf = ({
  children: e,
  size: t,
  className: r
}) => {
  const a = ve(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    r
  );
  return /* @__PURE__ */ n.jsx("caption", { className: a, children: e });
}, Ni = ({
  responsive: e,
  className: t,
  children: r,
  ...a
}) => {
  const s = e ? { role: "row" } : {};
  return /* @__PURE__ */ n.jsx("tr", { className: t, ...s, ...a, children: r });
}, Ti = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: m,
  as: v = "th"
}) => {
  const S = ve(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    u
  ), x = {
    scope: "col",
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...m && { role: "columnheader" },
    ...f
  };
  let p;
  if (r != null) p = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) p = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const I = Array.isArray(a), M = I ? a.join(`
`) : a, T = I || M.includes(`
`), R = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": T,
        "nhsuk-table__code--inline": !T
      }),
      ...s ? { "data-language": s } : {}
    }, D = mr(
      M,
      s,
      i
    );
    p = T ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx(
      "code",
      {
        ...R,
        dangerouslySetInnerHTML: { __html: D }
      }
    ) }) : /* @__PURE__ */ n.jsx("code", { ...R, dangerouslySetInnerHTML: { __html: D } });
  } else p = e;
  const g = v;
  return /* @__PURE__ */ n.jsx(g, { className: S, ...x, children: p });
}, Hf = ({
  text: e,
  html: t,
  node: r,
  code: a,
  codeLanguage: s,
  codeClassName: o,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: m,
  rowHeader: v
}) => {
  const S = !!v, x = S ? "th" : "td", p = ve(
    S ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${S ? "header" : "cell"}--${l}`,
    u
  ), g = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...S && { scope: "row" },
    ...m && { role: S ? "rowheader" : "cell" },
    ...f
  };
  let I;
  if (r != null) I = /* @__PURE__ */ n.jsx(n.Fragment, { children: r });
  else if (t) I = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const M = Array.isArray(a), T = M ? a.join(`
`) : a, R = M || T.includes(`
`), D = {
      className: ve("nhsuk-table__code", o, {
        "nhsuk-table__code--block": R,
        "nhsuk-table__code--inline": !R
      }),
      ...s ? { "data-language": s } : {}
    }, N = mr(T, s, i);
    I = R ? /* @__PURE__ */ n.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ n.jsx("code", { ...D, dangerouslySetInnerHTML: { __html: N } }) }) : /* @__PURE__ */ n.jsx("code", { ...D, dangerouslySetInnerHTML: { __html: N } });
  } else I = e;
  return /* @__PURE__ */ n.jsx(x, { className: p, ...g, children: I });
}, zt = Rf;
zt.Caption = Bf;
zt.BodyRow = Ni;
zt.HeaderCell = Ti;
zt.Cell = Hf;
let _o = !1, So = !1;
Object.defineProperty(zt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !_o && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), _o = !0), Ni;
  }
});
Object.defineProperty(zt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !So && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), So = !0), Ti;
  }
});
const Db = Sn(({
  items: e,
  defaultActiveTab: t,
  activeTab: r,
  onTabChange: a,
  onTabFocus: s,
  onTabListBlur: o,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: c,
  "data-testid": d,
  ...f
}, m) => {
  const v = r !== void 0, [S, x] = Fe(() => t || e[0]?.id || ""), p = v ? r : S, g = Ae(null), I = Ae(/* @__PURE__ */ new Map()), M = be((j) => {
    v || x(j), a?.(j);
  }, [v, a]), T = be((j) => {
    s?.(j), l && M(j);
  }, [s, l, M]), R = be((j, _) => {
    const h = e.filter((y) => !y.disabled).map((y) => y.id), L = h.indexOf(_);
    let w = null;
    switch (j.key) {
      case "ArrowLeft":
        w = L > 0 ? L - 1 : h.length - 1;
        break;
      case "ArrowRight":
        w = L < h.length - 1 ? L + 1 : 0;
        break;
      case "Home":
        w = 0;
        break;
      case "End":
        w = h.length - 1;
        break;
      case "Escape":
        j.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (w !== null) {
      j.preventDefault();
      const y = h[w], C = I.current.get(y);
      C && (C.focus(), T(y));
    }
  }, [e, T, i]), D = be((j, _) => {
    _ ? I.current.set(j, _) : I.current.delete(j);
  }, []), N = be((j) => {
    const _ = I.current.get(j);
    _ && _.focus();
  }, []);
  Yo(m, () => ({
    focusTab: N,
    getActiveTab: () => p,
    getTabListElement: () => g.current
  }), [N, p]);
  const k = be((j) => {
    const _ = j.relatedTarget;
    g.current?.contains(_) || o?.();
  }, [o]), b = ve("nhsuk-tabs", u);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: b,
      id: c,
      "data-testid": d,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: g,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: k,
                children: e.map((j) => {
                  const _ = j.id === p, h = j.disabled, L = ve("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": _,
                    "nhsuk-tabs__list-item--disabled": h
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: L, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (w) => D(j.id, w),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": _,
                      "aria-controls": `${j.id}-panel`,
                      id: `${j.id}-tab`,
                      tabIndex: _ ? 0 : -1,
                      disabled: h,
                      onClick: () => !h && M(j.id),
                      onKeyDown: (w) => !h && R(w, j.id),
                      onFocus: () => !h && T(j.id),
                      ...j.attributes,
                      children: j.label
                    }
                  ) }, j.id);
                })
              }
            )
          }
        ),
        e.map((j) => {
          const _ = j.id === p;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${j.id}-tab`,
              id: `${j.id}-panel`,
              hidden: !_,
              children: j.content
            },
            j.id
          );
        })
      ]
    }
  );
}), Of = Sn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
      "nhsuk-details",
      o
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (m = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: d,
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Of.displayName = "Details";
const zf = Sn(
  ({
    title: e,
    type: t,
    items: r,
    hidePrefix: a = !1,
    headingLevel: s = 3,
    className: o,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    o && u.push(o);
    const c = [
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
    ), f = (v) => t === "cross" && !a ? `do not ${v}` : v, m = () => /* @__PURE__ */ n.jsx(
      Bt,
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
        className: u.join(" "),
        ...i,
        children: [
          m(),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((v, S) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            f(v.item)
          ] }, S)) }) })
        ]
      }
    );
  }
);
zf.displayName = "DoDontList";
const Wf = Sn(
  ({
    summaryText: e,
    summaryHtml: t,
    text: r,
    html: a,
    open: s = !1,
    className: o = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
      "nhsuk-expander",
      o
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ n.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (m = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: d,
        open: s,
        ...u,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
Wf.displayName = "Expander";
const Uf = Sn(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, s) => {
    const o = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, v = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), S = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Vf,
        {
          item: l,
          itemClasses: v,
          hasLink: m,
          hintId: d,
          statusId: f,
          ariaDescribedBy: S
        },
        u
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
), Vf = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: s,
  ariaDescribedBy: o
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: d,
        href: e.href,
        "aria-describedby": o,
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
  ) : /* @__PURE__ */ n.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(ze, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: s, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
Uf.displayName = "TaskList";
const $b = ({
  heading: e,
  headingLevel: t = 3,
  text: r,
  html: a,
  children: s,
  className: o,
  ...i
}) => {
  const l = /important/i.test(e), u = () => s || (a ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r ? /* @__PURE__ */ n.jsx("p", { children: r }) : null), c = [
    "nhsuk-warning-callout",
    o
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        Go(
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
        u()
      ]
    }
  );
}, Ib = ({
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
}, Gf = ({
  dateRange: e,
  onPrev: t,
  onNext: r,
  onToday: a,
  density: s,
  onDensityChange: o,
  a11yMode: i,
  onA11yModeChange: l
}) => /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar", role: "group", "aria-label": "Slot matrix controls", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx(lt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(lt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(lt, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      rr,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: s,
        onChange: (u) => o?.(u.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ n.jsx(
      rr,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: i,
        onChange: (u) => l?.(u.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), Yf = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(ze, { color: qf(r.status), text: r.label }) }, r.status)) });
function qf(e) {
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
const Mb = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: r,
  defaultValue: a,
  onChange: s,
  selectionMode: o = "single",
  a11yMode: i,
  className: l,
  style: u,
  getSlotAriaLabel: c,
  toolbar: d,
  enableDefaultToolbar: f = !0,
  legendItems: m,
  enableDefaultLegend: v = !0,
  legendPlacement: S = "bottom",
  onA11yModeChange: x
}) => {
  const [p, g] = Fe("grid"), I = i || p, [M, T] = Fe(a || []), R = r ?? M, D = De(() => {
    const w = /* @__PURE__ */ new Set();
    return e.forEach((y) => w.add(new Date(y.start).getTime())), Array.from(w).sort((y, C) => y - C);
  }, [e]), N = De(() => {
    const w = {};
    return e.forEach((y) => {
      const C = new Date(y.start).getTime();
      w[C] || (w[C] = {});
      const A = y.capacity - y.booked - (y.held || 0);
      w[C][y.sessionId] = { slot: y, remaining: A };
    }), w;
  }, [e]), k = be((w) => {
    if (o === "single") {
      const y = [w.id];
      r || T(y), s?.(y, { lastAction: "select" });
    } else {
      const y = R.includes(w.id), C = y ? R.filter((A) => A !== w.id) : [...R, w.id];
      r || T(C), s?.(C, { lastAction: y ? "deselect" : "select" });
    }
  }, [o, R, r, s]), b = De(() => m || (v ? Array.from(new Set(e.map((y) => y.status))).map((y) => ({
    status: y,
    label: y.charAt(0).toUpperCase() + y.slice(1)
  })) : void 0), [m, v, e]), j = b ? /* @__PURE__ */ n.jsx(
    Yf,
    {
      items: b,
      orientation: S === "left" || S === "right" ? "vertical" : "horizontal"
    }
  ) : null, _ = (w) => {
    i || g(w), x?.(w);
  }, h = d || (f ? /* @__PURE__ */ n.jsx(
    Gf,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: I,
      onA11yModeChange: _
    }
  ) : null), L = /* @__PURE__ */ n.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ n.jsx(Aa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Fn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    S === "top" && j,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((w) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => k(w), "aria-pressed": R.includes(w.id), children: [
      Mn(new Date(w.start)),
      " – ",
      Mn(new Date(w.end)),
      " (",
      w.status,
      ")"
    ] }) }, w.id)) }),
    S === "bottom" && j
  ] }) }) }) }) });
  return I === "list" ? L : /* @__PURE__ */ n.jsx("div", { style: u, className: ve(l), children: /* @__PURE__ */ n.jsx(Aa, { className: ve("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsx(Fn, { width: tn.Full, children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    h,
    S === "top" && j,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": D.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((w) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${w.specialty}`, className: "nhs-slot-matrix__session-header", children: w.specialty }, w.id))
      ] }),
      D.map((w) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Mn(new Date(w)), children: Mn(new Date(w)) }),
        t.map((y) => {
          const C = N[w]?.[y.id];
          if (!C)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, y.id);
          const { slot: A, remaining: re } = C, Y = R.includes(A.id), B = c ? c(A) : `Slot ${Mn(new Date(A.start))} ${A.status}${re === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": A.status,
              className: ve("nhs-slot-matrix__cell", Y && "nhs-slot-matrix__cell--selected"),
              "aria-label": B,
              "aria-selected": Y || void 0,
              onClick: () => k(A),
              children: re > 0 ? `${re} left` : "Full"
            },
            A.id
          );
        })
      ] }, w))
    ] }),
    S === "bottom" && j
  ] }) }) }) }) });
};
function ko(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Mn(e) {
  return `${ko(e.getHours())}:${ko(e.getMinutes())}`;
}
const Xf = ({
  title: e,
  value: t,
  subtitle: r,
  variant: a = "default",
  href: s,
  className: o = "",
  ariaLabel: i,
  ...l
}) => {
  const u = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    o
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Bt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    r && /* @__PURE__ */ n.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: r })
  ] });
  return s ? /* @__PURE__ */ n.jsx(
    "a",
    {
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ n.jsx(
    "div",
    {
      className: u,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, Lb = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Aa, { children: /* @__PURE__ */ n.jsx(nn, { children: e.map((s, o) => /* @__PURE__ */ n.jsx(
    Fn,
    {
      width: tn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": o,
      children: /* @__PURE__ */ n.jsx(Xf, { ...s })
    },
    o
  )) }) }) });
}, Kf = ft.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: r,
    onSort: a,
    selectedRowIndex: s,
    onRowSelect: o,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: c,
    ariaDescribedby: d,
    className: f,
    tableClassName: m,
    bordered: v = !1,
    striped: S = !1,
    responsive: x = !1,
    tableType: p = "default"
  }, g) => {
    const I = Ae(null), M = Ae(null), T = Ae(null);
    ft.useImperativeHandle(g, () => I.current, []);
    const [R, D] = Fe(0), [N, k] = Fe(0), [b, j] = Fe("headers"), [_, h] = Fe("browse"), L = t.length, w = e.length, y = De(() => !r || r.length === 0 ? e : [...e].sort((z, oe) => {
      for (const { key: U, direction: ce } of r) {
        const we = z[U], ue = oe[U];
        if (we == null && ue == null) continue;
        if (we == null) return 1;
        if (ue == null) return -1;
        let de = 0;
        if (typeof we == "number" && typeof ue == "number" ? de = we - ue : de = String(we).localeCompare(String(ue)), de !== 0)
          return ce === "asc" ? de : -de;
      }
      return 0;
    }), [e, r]), C = be((z, oe) => {
      setTimeout(() => {
        const U = I.current?.querySelector(
          `tbody tr:nth-child(${z + 1}) td:nth-child(${oe + 1})`
        );
        U && (U.focus(), typeof U.scrollIntoView == "function" && U.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), A = be((z) => {
      setTimeout(() => {
        const oe = I.current?.querySelector(`th:nth-child(${z + 1})`);
        oe && (oe.focus(), typeof oe.scrollIntoView == "function" && oe.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = be((z) => {
      a?.(z);
    }, [a]), Y = be((z) => {
      o?.(z);
    }, [o]), B = be((z) => {
      const { key: oe } = z;
      switch (oe) {
        case "Enter":
          if (z.preventDefault(), b === "headers" && _ === "browse")
            h("navigate"), A(N);
          else if (b === "headers" && _ === "navigate") {
            const U = t[N];
            U && re(U.key);
          } else b === "cells" && _ === "browse" ? (h("navigate"), C(R, N)) : b === "cells" && _ === "navigate" && Y(R);
          break;
        case "Escape":
          z.preventDefault(), (b === "headers" && _ === "navigate" || b === "cells" && _ === "navigate") && h("browse");
          break;
        case "ArrowLeft":
          if (z.preventDefault(), _ === "navigate" || _ === "browse" && b === "headers") {
            if (b === "headers") {
              const U = Math.max(0, N - 1);
              k(U), A(U);
            } else if (b === "cells") {
              const U = Math.max(0, N - 1);
              k(U), C(R, U);
            }
          }
          break;
        case "ArrowRight":
          if (z.preventDefault(), _ === "navigate" || _ === "browse" && b === "headers") {
            if (b === "headers") {
              const U = Math.min(L - 1, N + 1);
              k(U), A(U);
            } else if (b === "cells") {
              const U = Math.min(L - 1, N + 1);
              k(U), C(R, U);
            }
          }
          break;
        case "ArrowUp":
          if (z.preventDefault(), b === "cells") {
            if (_ === "browse") {
              const U = Math.max(0, R - 1);
              D(U), C(U, 0), k(0);
            } else if (_ === "navigate")
              if (R > 0) {
                const U = R - 1;
                D(U), C(U, N);
              } else
                j("headers"), h("browse"), A(N);
          }
          break;
        case "ArrowDown":
          if (z.preventDefault(), b === "headers" && _ === "browse")
            j("cells"), D(0), k(0), C(0, 0);
          else if (b === "cells") {
            const U = w - 1;
            if (_ === "browse") {
              const ce = Math.min(U, R + 1);
              D(ce), C(ce, 0), k(0);
            } else if (_ === "navigate" && R < U) {
              const ce = R + 1;
              D(ce), C(ce, N);
            }
          }
          break;
        case "Home":
          z.preventDefault(), b === "headers" ? (k(0), A(0)) : b === "cells" && (z.ctrlKey ? (D(0), k(0), C(0, 0)) : (k(0), C(R, 0)));
          break;
        case "End":
          if (z.preventDefault(), b === "headers") {
            const U = L - 1;
            k(U), A(U);
          } else if (b === "cells")
            if (z.ctrlKey) {
              const U = w - 1, ce = L - 1;
              D(U), k(ce), C(U, ce);
            } else {
              const U = L - 1;
              k(U), C(R, U);
            }
          break;
        case " ":
          if (z.preventDefault(), b === "headers" && _ === "navigate") {
            const U = t[N];
            U && re(U.key);
          } else b === "cells" && _ === "navigate" && Y(R);
          break;
      }
    }, [
      b,
      _,
      N,
      R,
      L,
      w,
      t,
      C,
      A,
      re,
      Y
    ]);
    We(() => {
      const z = I.current;
      if (z)
        return z.addEventListener("keydown", B), () => z.removeEventListener("keydown", B);
    }, [B]);
    const O = ve(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": x,
        "nhsuk-table--bordered": v,
        "nhsuk-table--striped": S,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: I,
        className: O,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: M, role: "row", children: t.map((z, oe) => {
            const U = r?.find((ue) => ue.key === z.key), ce = !!U, we = b === "headers" && N === oe;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: ve("sortable-header", {
                  "sortable-header--focused": we
                }),
                role: "columnheader",
                tabIndex: we ? 0 : -1,
                onClick: () => re(z.key),
                onKeyDown: (ue) => {
                  (ue.key === "Enter" || ue.key === " ") && (ue.preventDefault(), re(z.key));
                },
                "aria-sort": ce ? U?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: z.label }),
                  ce && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((ue) => ue.key === z.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: U?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              z.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: T, className: "nhsuk-table__body", role: "rowgroup", children: y.map((z, oe) => {
            const U = s === oe, ce = b === "cells" && R === oe;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: ve("data-row", {
                  "data-row--selected": U,
                  "data-row--focused": ce
                }),
                "aria-selected": U,
                children: t.map((we, ue) => {
                  const de = we.tableRenderer ? we.tableRenderer(z) : we.render ? we.render(z) : z[we.key], ee = b === "cells" && R === oe && N === ue, se = () => typeof de == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: de ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: de ? "Yes" : "No" })
                  ] }) : String(de ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ve("data-cell", {
                        "data-cell--focused": ee
                      }),
                      tabIndex: ee ? 0 : -1,
                      onClick: () => Y(oe),
                      children: se()
                    },
                    we.key
                  );
                })
              },
              oe
            );
          }) })
        ]
      }
    );
  }
);
Kf.displayName = "AriaDataGrid";
const Di = ({
  sortConfig: e,
  columns: t,
  onSortChange: r,
  className: a = "",
  emptyDescription: s = "No sorting applied",
  activeDescription: o,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Ae(null), m = Ae(null), v = Ae(null), S = be((b, j) => {
    u || (m.current = j, b.dataTransfer.effectAllowed = "move", b.dataTransfer.setData("text/plain", j));
  }, [u]), x = be((b, j) => {
    u || m.current === j || (b.preventDefault(), b.dataTransfer.dropEffect = "move", v.current = j);
  }, [u]), p = be((b, j) => {
    if (u) return;
    b.preventDefault();
    const _ = m.current;
    if (!_ || _ === j) return;
    const h = e.findIndex((w) => w.key === _), L = e.findIndex((w) => w.key === j);
    if (h !== -1 && L !== -1) {
      const w = [...e], [y] = w.splice(h, 1);
      w.splice(L, 0, y), r(w);
    }
    m.current = null, v.current = null;
  }, [u, e, r]), g = be(() => {
    m.current = null, v.current = null;
  }, []), I = be((b) => {
    const j = t.find((_) => _.key === b);
    return j ? j.label : b;
  }, [t]), M = be((b) => ["red", "orange", "blue", "aqua-green", "grey"][b] || "grey", []), T = be((b) => {
    if (u) return;
    const j = e.map(
      (_) => _.key === b ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    r(j);
  }, [e, r, u]), R = be((b) => {
    if (u) return;
    const j = e.filter((_) => _.key !== b);
    r(j);
  }, [e, r, u]), D = be(() => {
    u || r([]);
  }, [r, u]), N = () => {
    if (e.length === 0)
      return s;
    if (o)
      return o;
    const b = e.map((j, _) => {
      const h = j.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${I(j.key)} (${h})`;
    });
    if (b.length === 1)
      return `Sorted by: ${b[0]}`;
    if (b.length === 2)
      return `Sorted by: ${b.join(" and ")}`;
    {
      const j = b.pop();
      return `Sorted by: ${b.join(", ")}, and ${j}`;
    }
  }, k = De(() => {
    const b = ["sort-description"];
    return l && b.push("sort-help"), d && b.push(d), b.join(" ");
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
        children: N()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": k,
          children: e.map((b, j) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (_) => S(_, b.key),
              onDragOver: (_) => x(_, b.key),
              onDrop: (_) => p(_, b.key),
              onDragEnd: g,
              onClick: () => T(b.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": b.key,
              children: /* @__PURE__ */ n.jsx(
                ze,
                {
                  color: M(j),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => R(b.key),
                  disabled: u,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${j + 1}`, children: j + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: I(b.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (_) => {
                          _.stopPropagation(), T(b.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${I(b.key)}. Currently ${b.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${b.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${b.direction}`,
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
            b.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        lt,
        {
          variant: "secondary",
          onClick: D,
          disabled: u,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Jf(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), u = new Array(o).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, o); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], u[c] = e.selectedRows[c];
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
const za = Sn(function(t, r) {
  const {
    dataConfig: a = {},
    tabPanels: s,
    selectedIndex: o,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: u,
    ariaDescription: c,
    className: d = "",
    disabled: f = !1,
    orientation: m = "horizontal",
    id: v,
    isLoading: S = !1,
    loadingComponent: x,
    error: p = null,
    errorComponent: g,
    "data-testid": I,
    actions: M,
    actionsMinGap: T = 16,
    forceActionsAbove: R = !1
  } = t, N = Ae(
    v || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, k = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), b = `${N}-description`, j = `${N}-navigation-help`, {
    dataComparator: _ = (P, Q) => JSON.stringify(P) === JSON.stringify(Q),
    filterFunction: h = (P) => P,
    booleanRenderer: L = (P) => P ? "✓" : "✗"
  } = a || {}, w = o !== void 0, y = o ?? 0, [C, A] = Fe({
    focusArea: "tabs",
    focusedTabIndex: y,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), re = De(() => ({
    selectedIndex: y,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [y]), [Y, B] = qo(Jf, re);
  We(() => {
    const P = Y.tabLoadingStates.length, Q = s.length;
    P !== Q && B({ type: "ADJUST_ARRAYS", payload: { newLength: Q } });
  }, [s.length]), We(() => {
    w && B({ type: "SET_SELECTED_INDEX", payload: y });
  }, [y, w]), We(() => {
    A((P) => ({
      ...P,
      focusArea: "tabs",
      focusedTabIndex: Y.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [Y.selectedIndex]), We(() => {
    l && l(Y.globalSelectedRowData);
  }, [Y.globalSelectedRowData, l]);
  const O = be(
    (P, Q) => _(P, Q),
    [_]
  ), z = be(
    (P) => {
      P >= 0 && P < s.length && !s[P].disabled && (B({ type: "SET_SELECTED_INDEX", payload: P }), A((Q) => ({
        ...Q,
        focusedTabIndex: P,
        focusArea: "tabs"
      })), i?.(P));
    },
    [s, i]
  ), oe = Ae(!1), U = be(
    (P, Q) => {
      if (!Q?.force && !oe.current && P === 0) {
        oe.current = !0;
        return;
      }
      oe.current = !0, setTimeout(() => {
        const ae = ce.current[P], G = ae?.parentElement;
        if (ae && G) {
          const H = ae.offsetLeft, ne = ae.offsetWidth, he = G.clientWidth, ie = H - he / 2 + ne / 2;
          try {
            G.scrollTo({
              left: Math.max(0, ie),
              behavior: "smooth"
            });
          } catch {
            ae.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!ae,
          tabListElementExists: !!G
        });
      }, 50);
    },
    []
  ), ce = Ae([]), we = Ae([]), ue = be(
    (P, Q) => {
      const ae = Y.sortConfig || [], G = ae.find(
        (he) => he.key === Q
      );
      let H;
      G ? G.direction === "asc" ? H = ae.map(
        (he) => he.key === Q ? { ...he, direction: "desc" } : he
      ) : H = ae.filter(
        (he) => he.key !== Q
      ) : H = [...ae, { key: Q, direction: "asc" }], B({
        type: "SET_SORT",
        payload: H
      }), s[P].onSort?.(Q);
    },
    [Y.sortConfig, s]
  ), de = be(
    (P) => {
      setTimeout(() => {
        const Q = document.querySelector(
          `[data-tab-panel="${Y.selectedIndex}"] th:nth-child(${P + 1})`
        );
        Q && Q.focus();
      }, 0);
    },
    [Y.selectedIndex]
  ), ee = be(
    (P) => L(P),
    [L]
  ), se = be(
    (P, Q) => {
      setTimeout(() => {
        const ae = document.querySelector(
          `[data-tab-panel="${Y.selectedIndex}"] tbody tr:nth-child(${P + 1}) td:nth-child(${Q + 1})`
        );
        ae && ae.focus();
      }, 0);
    },
    [Y.selectedIndex]
  );
  We(() => {
    C.isGridActive && (C.focusArea === "headers" ? setTimeout(() => {
      de(C.focusedHeaderIndex);
    }, 0) : C.focusArea === "cells" && setTimeout(() => {
      se(
        C.focusedRowIndex,
        C.focusedColumnIndex
      );
    }, 0));
  }, [
    C.focusArea,
    C.isGridActive,
    C.focusedHeaderIndex,
    C.focusedRowIndex,
    C.focusedColumnIndex,
    de,
    se
  ]), We(() => {
    U(Y.selectedIndex);
  }, [Y.selectedIndex, U]);
  const fe = be(
    (P, Q) => {
      const { key: ae } = P, G = s[Y.selectedIndex], H = G?.columns.length || 0;
      switch (ae) {
        case "ArrowLeft":
          P.preventDefault();
          const ne = Math.max(0, Q - 1);
          A((Se) => ({
            ...Se,
            focusedHeaderIndex: ne
          })), de(ne);
          break;
        case "ArrowRight":
          P.preventDefault();
          const he = Math.min(H - 1, Q + 1);
          A((Se) => ({
            ...Se,
            focusedHeaderIndex: he
          })), de(he);
          break;
        case "ArrowUp":
          P.preventDefault(), A((Se) => ({
            ...Se,
            focusArea: "tabs",
            focusedTabIndex: Y.selectedIndex
          })), U(Y.selectedIndex), ce.current[Y.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          P.preventDefault(), A((Se) => ({
            ...Se,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: Q,
            isGridActive: !0
          }));
          break;
        case "Home":
          P.preventDefault(), A((Se) => ({ ...Se, focusedHeaderIndex: 0 })), de(0);
          break;
        case "End":
          P.preventDefault();
          const ie = H - 1;
          A((Se) => ({
            ...Se,
            focusedHeaderIndex: ie
          })), de(ie);
          break;
        case "Enter":
        case " ":
          P.preventDefault();
          const _e = G?.columns[Q]?.key;
          _e && ue(Y.selectedIndex, _e);
          break;
      }
    },
    [
      s,
      Y.selectedIndex,
      ue,
      A,
      de,
      se,
      ce
    ]
  ), q = be(
    (P, Q, ae) => {
      const { key: G } = P, H = s[Y.selectedIndex], ne = H?.data.length || 0, he = H?.columns.length || 0;
      switch (G) {
        case "ArrowUp":
          if (P.preventDefault(), Q === 0)
            A((xe) => ({
              ...xe,
              focusArea: "headers",
              focusedHeaderIndex: ae,
              isGridActive: !1
            })), de(ae);
          else {
            const xe = Q - 1;
            A((Me) => ({
              ...Me,
              focusedRowIndex: xe
            })), se(xe, ae);
          }
          break;
        case "ArrowDown":
          P.preventDefault();
          const ie = Math.min(ne - 1, Q + 1);
          A((xe) => ({
            ...xe,
            focusedRowIndex: ie
          })), se(ie, ae);
          break;
        case "ArrowLeft":
          P.preventDefault();
          const _e = Math.max(0, ae - 1);
          A((xe) => ({
            ...xe,
            focusedColumnIndex: _e
          })), se(Q, _e);
          break;
        case "ArrowRight":
          P.preventDefault();
          const Se = Math.min(he - 1, ae + 1);
          A((xe) => ({
            ...xe,
            focusedColumnIndex: Se
          })), se(Q, Se);
          break;
        case "Home":
          P.preventDefault(), P.ctrlKey ? (A((xe) => ({
            ...xe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), se(0, 0)) : (A((xe) => ({ ...xe, focusedColumnIndex: 0 })), se(Q, 0));
          break;
        case "End":
          if (P.preventDefault(), P.ctrlKey) {
            const xe = ne - 1, Me = he - 1;
            A((Be) => ({
              ...Be,
              focusedRowIndex: xe,
              focusedColumnIndex: Me
            })), se(xe, Me);
          } else {
            const xe = he - 1;
            A((Me) => ({
              ...Me,
              focusedColumnIndex: xe
            })), se(Q, xe);
          }
          break;
        case "Enter":
        case " ":
          if (P.preventDefault(), H && H.data[Q]) {
            const xe = H.data.some(
              (Pe) => "ews_data" in Pe
            ) ? h(H.data, Y.filters) : H.data, Me = Y.sortConfig;
            let Be = xe;
            if (Me && Me.length > 0 && (Be = [...xe].sort((Pe, Ee) => {
              for (const { key: qe, direction: Xe } of Me) {
                let et = Pe[qe], yt = Ee[qe];
                const tt = H.columns.find(
                  (kn) => kn.key === qe
                );
                if (tt?.tableRenderer ? (et = tt.tableRenderer(Pe), yt = tt.tableRenderer(Ee)) : tt?.render && (et = tt.render(Pe), yt = tt.render(Ee)), et == null && yt == null) continue;
                if (et == null) return Xe === "asc" ? -1 : 1;
                if (yt == null) return Xe === "asc" ? 1 : -1;
                let rt = 0;
                if (typeof et == "number" && typeof yt == "number" ? rt = et - yt : rt = String(et).localeCompare(
                  String(yt),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), rt !== 0)
                  return Xe === "asc" ? rt : -rt;
              }
              return 0;
            })), Be[Q]) {
              const Pe = Be[Q], qe = Y.globalSelectedRowData && O(Y.globalSelectedRowData, Pe) ? null : Pe;
              B({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: qe
              });
            }
          }
          break;
      }
    },
    [
      s,
      Y.selectedIndex,
      Y.filters,
      Y.sortConfig,
      h,
      O,
      B,
      A,
      de,
      se
    ]
  ), $ = be(
    (P, Q) => h(P, Q),
    [h]
  );
  if (Yo(
    r,
    () => ({
      selectTab: (P) => {
        P >= 0 && P < s.length && (B({ type: "SET_SELECTED_INDEX", payload: P }), i?.(P));
      },
      refreshData: (P) => {
        console.log("Refreshing data for tab:", P ?? "all");
      },
      exportData: (P) => {
        const Q = P ?? Y.selectedIndex, ae = s[Q];
        return ae ? ae.data : [];
      },
      getSelectedRows: (P) => Y.globalSelectedRowData ? [] : [],
      clearSelection: (P) => {
        B({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (P) => {
        B({ type: "SET_FILTERS", payload: P });
      }
    }),
    [Y.selectedIndex, Y.selectedRows, s, i]
  ), S)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": I,
        children: x || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx(
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
  if (p)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`,
        "data-testid": I,
        children: g || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: p })
        ] })
      }
    );
  const F = Ae(null), W = Ae(null), te = Ae(null), [J, le] = Fe(!0);
  We(() => {
    if (!M) {
      le(!1);
      return;
    }
    if (R) {
      le(!1);
      return;
    }
    function P() {
      if (!F.current || !W.current || !te.current) return;
      const G = F.current.clientWidth, H = Array.from(
        W.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), ne = H.reduce((Se, xe) => Se + xe.offsetWidth, 0), he = te.current.offsetWidth, ie = Math.max(8 * (H.length - 1), 0), _e = ne + ie + he + T <= G;
      le(_e);
    }
    const Q = requestAnimationFrame(() => P()), ae = new ResizeObserver(() => P());
    return F.current && ae.observe(F.current), W.current && ae.observe(W.current), () => {
      cancelAnimationFrame(Q), ae.disconnect();
    };
  }, [M, T, R, s.length]);
  const me = te, pe = be(() => me.current ? Array.from(
    me.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((P) => !P.hasAttribute("disabled")) : [], []), E = be(
    (P) => {
      const Q = pe();
      if (!Q.length) return;
      const ae = Math.max(0, Math.min(P, Q.length - 1));
      Q[ae].focus(), A((G) => ({ ...G, focusArea: "actions", focusedActionIndex: ae }));
    },
    [pe]
  ), V = be(() => E(0), [E]), K = be(
    (P, Q) => {
      const { key: ae } = P, G = s.length - 1;
      switch (ae) {
        case "ArrowUp": {
          M && !J && (P.preventDefault(), V());
          break;
        }
        case "ArrowLeft": {
          P.preventDefault();
          const H = Q > 0 ? Q - 1 : G;
          z(H), U(H), ce.current[H]?.focus();
          break;
        }
        case "ArrowRight": {
          if (P.preventDefault(), Q === G && M && J) {
            V();
            return;
          }
          const H = Q < G ? Q + 1 : 0;
          z(H), U(H), ce.current[H]?.focus();
          break;
        }
        case "ArrowDown": {
          P.preventDefault(), A((H) => ({
            ...H,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          P.preventDefault(), z(0), U(0), ce.current[0]?.focus();
          break;
        }
        case "End": {
          P.preventDefault(), z(G), U(G), ce.current[G]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          P.preventDefault(), z(Q);
          break;
        }
        case "Tab": {
          !P.shiftKey && Q === G && M && J && V();
          break;
        }
      }
    },
    [s.length, z, U, M, J, V]
  ), Z = be((P) => {
    const { key: Q } = P, ae = pe();
    if (!ae.length) return;
    const G = ae.findIndex((H) => H === document.activeElement);
    switch (Q) {
      case "ArrowLeft": {
        if (J)
          if (G > 0)
            P.preventDefault(), E(G - 1);
          else {
            P.preventDefault();
            const H = s.length - 1;
            z(H), U(H), ce.current[H]?.focus(), A((ne) => ({ ...ne, focusArea: "tabs", focusedTabIndex: H }));
          }
        break;
      }
      case "ArrowRight": {
        J && (G < ae.length - 1 ? (P.preventDefault(), E(G + 1)) : (P.preventDefault(), z(0), U(0), ce.current[0]?.focus(), A((H) => ({ ...H, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (J)
          P.preventDefault(), A((H) => ({ ...H, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          P.preventDefault();
          const H = Y.selectedIndex;
          ce.current[H]?.focus(), A((ne) => ({ ...ne, focusArea: "tabs", focusedTabIndex: H }));
        }
        break;
      }
    }
  }, [pe, J, E, s.length, z, U, Y.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${d}`,
      id: v,
      "data-testid": I,
      ref: F,
      children: [
        c && !k && /* @__PURE__ */ n.jsx("div", { id: b, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: j,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          Di,
          {
            sortConfig: Y.sortConfig || [],
            columns: s.flatMap(
              (P) => P.columns.map((Q) => ({ key: Q.key, label: Q.label }))
            ).filter(
              (P, Q, ae) => ae.findIndex((G) => G.key === P.key) === Q
              // Remove duplicates
            ),
            onSortChange: (P) => {
              B({ type: "SET_SORT", payload: P });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        M && !J && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: te,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Z,
            children: M
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${J ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? k ? c : b : j,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: W,
              children: s.map((P, Q) => {
                const ae = Q === Y.selectedIndex, G = P.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${P.id}`,
                    "aria-controls": `panel-${P.id}`,
                    "aria-selected": ae,
                    "aria-disabled": G,
                    tabIndex: ae ? 0 : -1,
                    ref: (H) => {
                      ce.current[Q] = H;
                    },
                    onClick: () => z(Q),
                    onKeyDown: (H) => K(H, Q),
                    disabled: G,
                    className: [
                      "aria-tabs-datagrid__tab",
                      ae ? "aria-tabs-datagrid__tab--selected" : "",
                      G ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: P.label }),
                      Y.tabLoadingStates[Q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      Y.tabErrors[Q] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  P.id
                );
              })
            }
          ),
          M && J && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: te,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Z,
              children: M
            }
          )
        ] }),
        s.map((P, Q) => {
          const ae = Q === Y.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${P.id}`,
              "aria-labelledby": `tab-${P.id}`,
              tabIndex: 0,
              hidden: !ae,
              ref: (G) => {
                we.current[Q] = G;
              },
              className: `aria-tabs-datagrid__panel ${P.className || ""}`,
              "data-tab-panel": Q,
              children: ae && (() => {
                const G = P.data.some(
                  (ne) => "ews_data" in ne
                ) ? $(P.data, Y.filters) : P.data, H = De(() => {
                  const ne = Y.sortConfig;
                  return !ne || ne.length === 0 ? G : [...G].sort((he, ie) => {
                    for (const { key: _e, direction: Se } of ne) {
                      let xe = he[_e], Me = ie[_e];
                      const Be = P.columns.find(
                        (Ee) => Ee.key === _e
                      );
                      if (Be?.tableRenderer ? (xe = Be.tableRenderer(he), Me = Be.tableRenderer(ie)) : Be?.render && (xe = Be.render(he), Me = Be.render(ie)), xe == null && Me == null) continue;
                      if (xe == null) return 1;
                      if (Me == null) return -1;
                      let Pe = 0;
                      if (typeof xe == "number" && typeof Me == "number" ? Pe = xe - Me : typeof xe == "boolean" && typeof Me == "boolean" ? Pe = xe === Me ? 0 : xe ? 1 : -1 : Pe = String(xe).localeCompare(
                        String(Me),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Pe !== 0)
                        return Se === "asc" ? Pe : -Pe;
                    }
                    return 0;
                  });
                }, [G, Y.sortConfig, P.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": P.ariaLabel,
                    "aria-describedby": P.ariaDescription ? `panel-${P.id}-description` : void 0,
                    children: [
                      P.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${P.id}-description`,
                          children: P.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: P.columns.map((ne, he) => {
                        const ie = Y.sortConfig?.find(
                          (xe) => xe.key === ne.key
                        ), _e = !!ie, Se = C.focusArea === "headers" && C.focusedHeaderIndex === he;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${Se ? "sortable-header--focused" : ""} ${_e ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Se ? 0 : -1,
                            onClick: () => ue(Q, ne.key),
                            onKeyDown: (xe) => fe(xe, he),
                            "aria-sort": _e ? ie?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: ne.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${_e ? `sort-indicator--${ie?.direction}` : ""}`,
                                  children: [
                                    Y.sortConfig && Y.sortConfig.length > 0 && Y.sortConfig.findIndex(
                                      (xe) => xe.key === ne.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${Y.sortConfig.findIndex((xe) => xe.key === ne.key) + 1}`,
                                        "data-priority": Y.sortConfig.findIndex(
                                          (xe) => xe.key === ne.key
                                        ) + 1,
                                        title: `Sort priority: ${Y.sortConfig.findIndex((xe) => xe.key === ne.key) + 1}`,
                                        children: Y.sortConfig.findIndex(
                                          (xe) => xe.key === ne.key
                                        ) + 1
                                      }
                                    ),
                                    _e && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ie?.direction}`,
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
                          ne.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: H.map((ne, he) => {
                        const ie = Y.globalSelectedRowData && O(Y.globalSelectedRowData, ne), _e = C.focusArea === "cells" && C.focusedRowIndex === he;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ie ? "data-row--selected" : ""} ${_e ? "data-row--focused" : ""}`,
                            "aria-selected": ie,
                            children: P.columns.map((Se, xe) => {
                              const Me = ne[Se.key];
                              let Be;
                              Se.tableRenderer ? Be = Se.tableRenderer(ne) : Se.render ? Be = Se.render(ne) : Be = Me;
                              const Pe = C.focusArea === "cells" && C.focusedRowIndex === he && C.focusedColumnIndex === xe, Ee = () => {
                                if (Se.customRenderer) {
                                  const qe = Se.customRenderer(
                                    Me,
                                    ne
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: qe
                                    }
                                  );
                                }
                                return typeof Me == "boolean" && Be === Me ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  ee(Me),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: Me ? "Yes" : "No" })
                                ] }) : ft.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Pe ? "data-cell--focused" : ""}`,
                                  tabIndex: Pe ? 0 : -1,
                                  onClick: () => {
                                    const Xe = Y.globalSelectedRowData && O(
                                      Y.globalSelectedRowData,
                                      ne
                                    ) ? null : ne;
                                    B({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Xe
                                    });
                                  },
                                  onKeyDown: (qe) => q(qe, he, xe),
                                  children: Ee()
                                },
                                Se.key
                              );
                            })
                          },
                          he
                        );
                      }) })
                    ]
                  }
                );
              })()
            },
            P.id
          );
        })
      ]
    }
  );
}), Qn = {
  asc: "↑",
  desc: "↓"
}, Zf = (e) => [...e].sort((t, r) => t.priority - r.priority);
function ka(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function Qf(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function ep(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function tp(e, t) {
  const r = t.find((s) => s.id === e), a = Qf(t);
  return r ? r.priority < a : !1;
}
const Fb = ({
  sortConfig: e,
  onSortChange: t,
  className: r = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: s,
  showReset: o = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const d = De(() => Zf(e), [e]), f = be((I) => {
    if (l) return;
    const M = e.map(
      (T) => T.id === I ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    t(M);
  }, [e, t, l]), m = be((I) => {
    if (l) return;
    const M = e.findIndex((R) => R.id === I);
    if (M <= 0) return;
    const T = [...e];
    [T[M], T[M - 1]] = [T[M - 1], T[M]], t(ka(T));
  }, [e, t, l]), v = be((I) => {
    if (l) return;
    const M = e.findIndex((R) => R.id === I);
    if (M >= e.length - 1 || M === -1) return;
    const T = [...e];
    [T[M], T[M + 1]] = [T[M + 1], T[M]], t(ka(T));
  }, [e, t, l]), S = be((I) => {
    if (l) return;
    const M = e.filter((T) => T.id !== I);
    t(ka(M));
  }, [e, t, l]), x = be(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (s)
      return s;
    const I = d.map((M, T) => {
      const R = M.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${M.label} (${R})`;
    });
    if (I.length === 1)
      return `Sorted by: ${I[0]}`;
    if (I.length === 2)
      return `Sorted by: ${I.join(" and ")}`;
    {
      const M = I.pop();
      return `Sorted by: ${I.join(", ")}, and ${M}`;
    }
  }, g = De(() => {
    const I = ["sort-description"];
    return i && I.push("sort-help"), c && I.push(c), I.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: p()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: p()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": g,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((I) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                ze,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => S(I.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: I.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: I.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(I.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${I.label}. Currently ${I.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: I.direction === "asc" ? Qn.asc : Qn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(I.id),
                          disabled: l || !ep(I.id, e),
                          "aria-label": `Move ${I.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => v(I.id),
                          disabled: l || !tp(I.id, e),
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
    o && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      lt,
      {
        variant: "secondary",
        onClick: x,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Qn.asc,
      "/",
      Qn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Ms = (e, t) => t.map((r) => ({
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
})), Wa = [
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
], np = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), rp = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, s] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > s) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, ap = (e) => {
  if (typeof e == "boolean") {
    const r = Wa.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Wa.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, sp = (e) => `${e.name}-${e.bed_name}`, op = () => ({
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
}), Pb = (e) => {
  const t = op();
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
}, ip = {
  dataComparator: np,
  filterFunction: rp,
  booleanRenderer: ap,
  getDataId: sp
};
function Co(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: s = [],
    badges: o = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: u,
    fieldRenderers: c = {},
    classPrefix: d = "adaptive-card"
  } = r, f = t.find((M) => M.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", v = () => s.filter((T) => !i.includes(T) && e[T]).slice(0, 3).map((T) => {
    const R = t.find((b) => b.key === T), D = e[T], N = c[T] ? c[T](D, e) : R?.cardRenderer ? R.cardRenderer(e) : R?.render ? R.render(e) : D;
    return `${R?.label || T}: ${N}`;
  }).join(" • "), S = () => o.length === 0 ? null : o.filter((M) => e[M.fieldKey] !== void 0).map((M) => {
    const T = e[M.fieldKey], R = M.render ? M.render(T, e) : T;
    return `<span class="nhsuk-tag ${lp(M, T)}">${R}</span>`;
  }).join(""), x = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = S(), g = v(), I = p ? `${g}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : g;
  return {
    variant: x(),
    heading: String(m),
    descriptionHtml: I,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${m}`
  };
}
function lp(e, t) {
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
const cp = {
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
}, $i = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: s = "medium",
  status: o = "active"
}) => {
  const i = e.name, l = e.age, u = e.ward_name, c = e.bed_name, d = e.ews_score, f = e.speciality, m = e.consultant;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${s} healthcare-card--${o}`,
      onClick: () => r?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${u}, Bed ${c}`,
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
            ze,
            {
              color: dp(Fi(d)),
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
            /* @__PURE__ */ n.jsx("dd", { children: u })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ n.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ n.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            lt,
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
            lt,
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
            lt,
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
}, Ii = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        ze,
        {
          color: fp(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        ze,
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
      lt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      lt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Mi = ({
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
        ze,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        ze,
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
      lt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      lt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Li = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const s = e.name, o = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, u = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--vitals healthcare-card--${a}`,
      onClick: () => t?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Vital signs for ${s}, EWS Score ${o}`,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vitals-summary", children: [
            /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__patient-name", children: s }),
            o !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${up(o)}`, children: [
              "EWS: ",
              o
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            ze,
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
          u !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-value", children: c })
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
            lt,
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
            lt,
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
function Fi(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function up(e) {
  return Fi(e);
}
function dp(e) {
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
function fp(e) {
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
const pp = [
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
], Pi = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", hp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, mp = (e) => Pi(e) === "high" || e.status === "urgent" ? "primary" : "default", gp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, xp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: pp,
  hiddenFields: [],
  getPriority: Pi,
  getStatus: hp,
  getVariant: mp,
  fieldRenderers: gp,
  classPrefix: "adaptive-card--healthcare"
}, bp = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", s = r.getStatus?.(e) || "active", o = s === "urgent" ? "active" : s;
    return /* @__PURE__ */ n.jsx(
      $i,
      {
        data: e,
        columns: t,
        priority: a,
        status: o,
        onSelect: (i) => console.log("Patient selected:", i),
        onAction: (i, l) => console.log("Patient action:", i, l)
      }
    );
  },
  appointment: (e, t, r) => {
    const a = r.getStatus?.(e) || "pending", s = a === "urgent" ? "pending" : a;
    return /* @__PURE__ */ n.jsx(
      Ii,
      {
        data: e,
        columns: t,
        status: s,
        onSelect: (o) => console.log("Appointment selected:", o),
        onAction: (o, i) => console.log("Appointment action:", o, i)
      }
    );
  },
  medication: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      Mi,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Medication selected:", s),
        onAction: (s, o) => console.log("Medication action:", s, o)
      }
    );
  },
  vitals: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium";
    return /* @__PURE__ */ n.jsx(
      Li,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (s) => console.log("Vitals selected:", s),
        onAction: (s, o) => console.log("Vitals action:", s, o)
      }
    );
  }
}, yp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, jo = {
  name: "healthcare",
  defaultCardConfig: xp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: bp,
  fieldTypes: yp
};
function No(e) {
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
function To(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function vp(e, t) {
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
      const { newLength: o } = t.payload, i = new Array(o).fill(!1), l = new Array(o).fill(null), u = new Array(o).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, o); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], u[c] = e.selectedRows[c];
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
function wp(e, t) {
  const [r, a] = Fe("cards");
  return We(() => {
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
function _p(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Sp(e, t, r, a) {
  const s = a ? { ...a.defaultCardConfig, ...r } : { ...cp, ...r };
  if (a && a.cardTemplates) {
    const o = _p(e);
    if (o && a.cardTemplates[o]) {
      const i = a.cardTemplates[o](e, t, s);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return s.cardTemplate && s.cardTemplate(e, t, s), Co(e, t, s);
}
const Ab = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: r = {},
  experimental: a = {},
  enableAdvancedSorting: s = !1,
  topActions: o,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: u,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: d,
  selectedIndex: f,
  onTabChange: m,
  ariaLabel: v = "Data grid",
  ariaDescription: S,
  orientation: x = "horizontal",
  id: p,
  disabled: g = !1,
  className: I,
  ...M
}) => {
  const T = wp(e, t), R = f !== void 0, D = f ?? 0, N = De(() => {
    if (c.some(
      (V) => V.data && V.data.length > 0 && To(V.data)
    )) {
      const V = No(r);
      return {
        ...jo.defaultCardConfig,
        ...V
      };
    } else
      return No(r);
  }, [r, c]), k = De(() => c.some(
    (V) => V.data && V.data.length > 0 && To(V.data)
  ) ? jo : void 0, [c]), b = De(() => ({
    selectedIndex: D,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [D, c.length]), [j, _] = qo(vp, b), h = Ae([]), L = Ae([]), w = Ae([]), y = Ae(null), [C, A] = Fe({
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
  }), re = be((E) => {
    if (!E.current)
      return { columns: 1, rows: 0 };
    const V = E.current, K = V.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (K.length === 0)
      return { columns: 1, rows: 0 };
    const Z = V.offsetWidth, Q = K[0].offsetWidth, ae = Math.floor(Z / Q) || 1, G = Math.ceil(K.length / ae);
    return { columns: ae, rows: G };
  }, []), Y = be((E, V) => ({
    row: Math.floor(E / V),
    col: E % V
  }), []), B = be((E, V, K) => E * K + V, []), O = be((E, V, K, Z) => {
    const { row: P, col: Q } = Y(E, Z);
    let ae = P, G = Q;
    switch (V) {
      case "up":
        ae = Math.max(0, P - 1);
        break;
      case "down":
        ae = Math.min(Math.floor((K - 1) / Z), P + 1);
        break;
      case "left":
        G = Math.max(0, Q - 1);
        break;
      case "right":
        G = Math.min(Z - 1, Q + 1);
        break;
    }
    const H = B(ae, G, Z);
    return Math.min(H, K - 1);
  }, [Y, B]);
  We(() => {
    C.isCardNavigationActive && C.focusedCardElementIndex >= 0 && C.cardElements.length > 0 && setTimeout(() => {
      const E = C.cardElements[C.focusedCardElementIndex];
      E && (E.element.focus(), E.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [C.isCardNavigationActive, C.focusedCardElementIndex, C.cardElements.length]), We(() => {
    const E = () => {
      if (T === "cards" && y.current) {
        const { columns: Z, rows: P } = re(y);
        A((Q) => ({
          ...Q,
          gridColumns: Z,
          gridRows: P
        }));
      }
    }, V = setTimeout(E, 200), K = () => {
      setTimeout(E, 100);
    };
    return window.addEventListener("resize", K), () => {
      clearTimeout(V), window.removeEventListener("resize", K);
    };
  }, [T, c, re]), We(() => {
    const E = j.tabLoadingStates.length, V = c.length;
    E !== V && _({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [c.length, j.tabLoadingStates.length]), We(() => {
    R && f !== j.selectedIndex && _({ type: "SET_SELECTED_INDEX", payload: f });
  }, [R, f, j.selectedIndex]);
  const z = be((E) => {
    E >= 0 && E < c.length && !c[E].disabled && (_({ type: "SET_SELECTED_INDEX", payload: E }), m?.(E));
  }, [c, m]), oe = be((E) => {
    console.log("Card selected:", E), _({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: E
    });
  }, []), U = be((E) => {
    const V = L.current[E];
    V && (V.focus(), V.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ce = be((E) => {
    const V = L.current[E];
    if (!V) return [];
    const K = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), Z = V.querySelectorAll(K);
    return Array.from(Z).map((P, Q) => ({
      id: P.id || `card-${E}-element-${Q}`,
      element: P,
      label: P.getAttribute("aria-label") || P.textContent?.trim() || P.getAttribute("title") || `Element ${Q + 1}`,
      type: P.tagName.toLowerCase() === "button" ? "button" : P.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(P.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), we = Ae(null), ue = be((E) => {
    const V = we.current;
    if (!V) return;
    const K = document.createElement("div");
    K.setAttribute("aria-live", "polite"), K.setAttribute("aria-atomic", "true"), K.className = "sr-only", K.textContent = E, V.appendChild(K), setTimeout(() => {
      V.contains(K) && V.removeChild(K);
    }, 1e3);
  }, []), de = be((E) => {
    const V = E.filter((Z) => Z.sortable !== !1), K = [
      { value: "", label: "Sort by..." }
    ];
    return V.forEach((Z) => {
      const P = Z.label || Z.key;
      Z.key === "name" ? K.push(
        { value: `${Z.key}-asc`, label: `${P} (A-Z)` },
        { value: `${Z.key}-desc`, label: `${P} (Z-A)` }
      ) : Z.key === "ews_score" || Z.key.includes("score") ? K.push(
        { value: `${Z.key}-desc`, label: `${P} (High-Low)` },
        { value: `${Z.key}-asc`, label: `${P} (Low-High)` }
      ) : Z.key === "age" || Z.key.includes("date") || Z.key.includes("time") ? K.push(
        { value: `${Z.key}-desc`, label: `${P} (Oldest-Youngest)` },
        { value: `${Z.key}-asc`, label: `${P} (Youngest-Oldest)` }
      ) : K.push(
        { value: `${Z.key}-asc`, label: `${P} (A-Z)` },
        { value: `${Z.key}-desc`, label: `${P} (Z-A)` }
      );
    }), K;
  }, []), ee = be((E, V) => V ? [...E].sort((K, Z) => {
    const P = K[V.key], Q = Z[V.key];
    if (P == null && Q == null) return 0;
    if (P == null) return 1;
    if (Q == null) return -1;
    const ae = Number(P), G = Number(Q);
    if (!isNaN(ae) && !isNaN(G))
      return V.direction === "asc" ? ae - G : G - ae;
    const H = String(P).toLowerCase(), ne = String(Q).toLowerCase(), he = H.localeCompare(ne);
    return V.direction === "asc" ? he : -he;
  }) : E, []), se = be((E) => {
    if (!E) {
      A((H) => ({ ...H, cardSortConfig: null })), ue("Card sorting cleared");
      return;
    }
    const [V, K] = E.split("-"), Z = { key: V, direction: K };
    A((H) => ({ ...H, cardSortConfig: Z }));
    const ae = c[j.selectedIndex]?.columns.find((H) => H.key === V)?.label || V;
    ue(`Cards sorted by ${ae} in ${K === "asc" ? "ascending" : "descending"} order`);
  }, [c, j.selectedIndex, ue]), fe = be((E) => {
    const Z = c[j.selectedIndex]?.columns.find((Q) => Q.key === E.key)?.label || E.key, P = E.direction === "asc" ? "ascending" : "descending";
    return `${Z} (${P})`;
  }, [c, j.selectedIndex]), q = be((E) => {
    const V = c[j.selectedIndex];
    if (s) {
      const K = j.sortConfig;
      return !K || K.length === 0 ? E : [...E].sort((Z, P) => {
        for (const { key: Q, direction: ae } of K) {
          let G = Z[Q], H = P[Q];
          const ne = V?.columns.find((Me) => Me.key === Q);
          if (ne?.cardRenderer ? (G = ne.cardRenderer(Z), H = ne.cardRenderer(P)) : ne?.render && (G = ne.render(Z), H = ne.render(P)), G == null && H == null) continue;
          if (G == null) return ae === "asc" ? -1 : 1;
          if (H == null) return ae === "asc" ? 1 : -1;
          const he = Number(G), ie = Number(H);
          if (!isNaN(he) && !isNaN(ie)) {
            const Me = he - ie;
            if (Me !== 0) return ae === "asc" ? Me : -Me;
            continue;
          }
          const _e = String(G).toLowerCase(), Se = String(H).toLowerCase(), xe = _e.localeCompare(Se);
          if (xe !== 0) return ae === "asc" ? xe : -xe;
        }
        return 0;
      });
    } else
      return ee(E, C.cardSortConfig);
  }, [s, j.sortConfig, C.cardSortConfig, ee, c, j.selectedIndex]), $ = be((E, V) => {
    const K = ce(E), Z = K[V];
    if (Z) {
      Z.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const P = `Focused on ${Z.label}, ${Z.type} ${V + 1} of ${K.length} within card`;
      ue(P);
    }
  }, [ce, ue]), F = be((E) => {
    h.current[E]?.focus();
  }, []), W = be(() => {
    const E = w.current[0];
    if (!E) return [];
    const V = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), K = E.querySelectorAll(V);
    return Array.from(K);
  }, []), te = be((E) => {
    if (E === 0) {
      const V = w.current[0], K = V?.querySelector(".sort-controls-row");
      if (K) {
        K.setAttribute("tabindex", "-1"), K.focus();
        const P = `Sort controls group with ${W().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ue(P);
      } else V && V.focus();
    } else {
      const V = W(), K = E - 1, Z = V[K];
      if (Z) {
        Z.focus();
        const P = Z.tagName.toLowerCase() === "select", Q = Z.tagName.toLowerCase() === "button", ae = P ? "dropdown" : Q ? "button" : "control", G = P ? ". Use Space key to open dropdown" : "", H = `${ae} ${K + 1} of ${V.length}${G}`;
        ue(H);
      }
    }
  }, [W, ue]), J = be((E, V) => {
    const { key: K } = E, Z = c[j.selectedIndex], P = Z?.data.length || 0;
    if (K === "ArrowLeft" && E.shiftKey) {
      E.preventDefault(), E.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (K === "ArrowRight" && E.shiftKey) {
      E.preventDefault(), E.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!C.isCardNavigationActive) {
      switch (K) {
        case "ArrowUp":
          if (E.preventDefault(), V === 0)
            A((H) => ({ ...H, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), te(0);
          else {
            const H = O(V, "up", P, C.gridColumns);
            H !== V && (A((ne) => ({ ...ne, focusedCardIndex: H })), U(H), ue(`Moved to card ${H + 1} of ${P}`));
          }
          break;
        case "ArrowDown":
          E.preventDefault();
          const Q = O(V, "down", P, C.gridColumns);
          Q !== V && (A((H) => ({ ...H, focusedCardIndex: Q })), U(Q), ue(`Moved to card ${Q + 1} of ${P}`));
          break;
        case "ArrowLeft":
          E.preventDefault();
          const ae = O(V, "left", P, C.gridColumns);
          ae !== V ? (A((H) => ({ ...H, focusedCardIndex: ae })), U(ae), ue(`Moved to card ${ae + 1} of ${P}`)) : j.selectedIndex > 0 && (_({ type: "SET_SELECTED_INDEX", payload: j.selectedIndex - 1 }), A((H) => ({ ...H, focusArea: "tabs" })), setTimeout(() => F(j.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          E.preventDefault();
          const G = O(V, "right", P, C.gridColumns);
          G !== V ? (A((H) => ({ ...H, focusedCardIndex: G })), U(G), ue(`Moved to card ${G + 1} of ${P}`)) : j.selectedIndex < c.length - 1 && (_({ type: "SET_SELECTED_INDEX", payload: j.selectedIndex + 1 }), A((H) => ({ ...H, focusArea: "tabs" })), setTimeout(() => F(j.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (Z?.data[V]) {
            E.preventDefault(), A((ne) => ({
              ...ne,
              selectedCardIndex: V
            }));
            const H = ce(V);
            H.length > 0 ? (A((ne) => ({
              ...ne,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: H,
              selectedCardIndex: V
              // Ensure selection is maintained
            })), ue(`Card ${V + 1} selected and navigation activated. ${H.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ue(`Card ${V + 1} selected.`);
          }
          break;
        case " ":
          if (Z?.data[V]) {
            E.preventDefault(), A((ne) => ({
              ...ne,
              selectedCardIndex: ne.selectedCardIndex === V ? -1 : V
            }));
            const H = C.selectedCardIndex === V;
            ue(`Card ${V + 1} ${H ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (K) {
      case "ArrowUp":
      case "ArrowLeft":
        E.preventDefault();
        const Q = Math.max(0, C.focusedCardElementIndex - 1);
        A((ne) => ({ ...ne, focusedCardElementIndex: Q })), $(V, Q);
        break;
      case "ArrowDown":
      case "ArrowRight":
        E.preventDefault();
        const ae = Math.min(C.cardElements.length - 1, C.focusedCardElementIndex + 1);
        A((ne) => ({ ...ne, focusedCardElementIndex: ae })), $(V, ae);
        break;
      case "Enter":
        E.preventDefault();
        const G = C.cardElements[C.focusedCardElementIndex];
        G && (G.element.click(), ue(`Activated ${G.label}`));
        break;
      case " ":
        E.preventDefault();
        const H = C.cardElements[C.focusedCardElementIndex];
        if (H) {
          const ne = new MouseEvent("dblclick", { bubbles: !0 });
          H.element.dispatchEvent(ne), ue(`Double-clicked ${H.label}`);
        }
        break;
      case "Escape":
        E.preventDefault(), A((ne) => ({
          ...ne,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => U(V), 0), ue("Exited card navigation, returned to card level");
        break;
      case "Home":
        E.preventDefault(), C.cardElements.length > 0 && (A((ne) => ({ ...ne, focusedCardElementIndex: 0 })), $(V, 0));
        break;
      case "End":
        if (E.preventDefault(), C.cardElements.length > 0) {
          const ne = C.cardElements.length - 1;
          A((he) => ({ ...he, focusedCardElementIndex: ne })), $(V, ne);
        }
        break;
    }
  }, [C, j.selectedIndex, c, oe, U, F, A, ce, $, ue]), le = be((E) => {
    const V = h.current[E], K = V?.parentElement;
    if (!V || !K) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Z = V.getBoundingClientRect(), P = K.getBoundingClientRect();
    Z.left >= P.left && Z.right <= P.right || (console.log("Tab not visible, scrolling into view (mobile)"), V.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), me = be((E, V) => {
    if (T !== "cards")
      return;
    const { key: K } = E;
    switch (K) {
      case "ArrowLeft":
        E.preventDefault();
        const Z = V > 0 ? V - 1 : c.length - 1;
        z(Z), A((G) => ({ ...G, focusedTabIndex: Z })), h.current[Z]?.focus(), le(Z);
        break;
      case "ArrowRight":
        E.preventDefault();
        const P = V < c.length - 1 ? V + 1 : 0;
        z(P), A((G) => ({ ...G, focusedTabIndex: P })), h.current[P]?.focus(), le(P);
        break;
      case "ArrowDown":
        E.preventDefault();
        const Q = c[j.selectedIndex];
        Q && Q.columns && Q.columns.length > 0 ? (A((G) => ({
          ...G,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), te(0)) : (A((G) => ({
          ...G,
          focusArea: "cards",
          focusedCardIndex: 0
        })), U(0));
        break;
      case "Home":
        E.preventDefault(), z(0), A((G) => ({ ...G, focusedTabIndex: 0 })), h.current[0]?.focus(), le(0);
        break;
      case "End":
        E.preventDefault();
        const ae = c.length - 1;
        z(ae), A((G) => ({ ...G, focusedTabIndex: ae })), h.current[ae]?.focus(), le(ae);
        break;
      case "Enter":
      case " ":
        E.preventDefault(), z(V);
        break;
    }
  }, [c.length, z, T, U, A, le]), pe = be((E, V) => {
    if (T !== "cards")
      return;
    const { key: K } = E, Z = c[j.selectedIndex];
    if (V === 0 && !C.isSortControlsActive) {
      switch (K) {
        case "ArrowUp":
          E.preventDefault(), A((Q) => ({
            ...Q,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), F(j.selectedIndex);
          break;
        case "ArrowDown":
          E.preventDefault(), Z?.data && Z.data.length > 0 && (A((Q) => ({
            ...Q,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), U(0));
          break;
        case "Enter":
        case " ":
          E.preventDefault();
          const P = W();
          if (P.length > 0) {
            A((ae) => ({
              ...ae,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), te(1);
            const Q = `Entered sort controls navigation mode. ${P.length} controls available. Use arrow keys to navigate between controls.`;
            ue(Q);
          }
          break;
        case "Escape":
          E.preventDefault(), A((Q) => ({
            ...Q,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), F(j.selectedIndex);
          break;
      }
      return;
    }
    if (C.isSortControlsActive) {
      const Q = W().length;
      switch (K) {
        case "ArrowLeft":
          E.preventDefault();
          const ae = C.focusedSortControlIndex > 1 ? C.focusedSortControlIndex - 1 : Q;
          A((H) => ({ ...H, focusedSortControlIndex: ae })), te(ae);
          break;
        case "ArrowRight":
          E.preventDefault();
          const G = C.focusedSortControlIndex < Q ? C.focusedSortControlIndex + 1 : 1;
          A((H) => ({ ...H, focusedSortControlIndex: G })), te(G);
          break;
        case "ArrowDown":
          if (E.preventDefault(), C.isSortControlsActive) {
            const H = C.focusedSortControlIndex < Q ? C.focusedSortControlIndex + 1 : 1;
            A((ne) => ({ ...ne, focusedSortControlIndex: H })), te(H);
          } else
            Z?.data && Z.data.length > 0 && (A((H) => ({
              ...H,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), U(0));
          break;
        case "ArrowUp":
          E.preventDefault(), A((H) => ({
            ...H,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), te(0);
          break;
        case "Escape":
          E.preventDefault(), A((H) => ({
            ...H,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), te(0);
          break;
      }
    }
  }, [T, c, j.selectedIndex, C.isSortControlsActive, C.focusedSortControlIndex, te, F, U, A, ue]);
  if (T === "cards") {
    const E = c[j.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${I || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": v,
            "aria-describedby": `${S || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": x,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((V, K) => {
              const Z = K === j.selectedIndex, P = V.disabled || g;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${V.id}`,
                  "aria-controls": `panel-${V.id}`,
                  "aria-selected": Z,
                  "aria-disabled": P,
                  tabIndex: Z ? 0 : -1,
                  ref: (Q) => {
                    h.current[K] = Q;
                  },
                  onClick: () => z(K),
                  onKeyDown: (Q) => me(Q, K),
                  disabled: P,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Z ? "aria-tabs-datagrid__tab--selected" : "",
                    P ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: V.label }),
                    j.tabLoadingStates[K] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    j.tabErrors[K] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                V.id
              );
            })
          }
        ),
        o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: o })
      ] }),
      E && E.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: s ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Di,
          {
            sortConfig: j.sortConfig || [],
            columns: E.columns.map((V) => ({ key: V.key, label: V.label })),
            onSortChange: (V) => {
              _({ type: "SET_SORT", payload: V });
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
            tabIndex: C.focusArea === "sort-controls" ? 0 : -1,
            ref: (V) => {
              w.current[0] = V;
            },
            onKeyDown: (V) => pe(V, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${E.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  rr,
                  {
                    id: `card-sort-${E.id}`,
                    name: `card-sort-${E.id}`,
                    value: C.cardSortConfig ? `${C.cardSortConfig.key}-${C.cardSortConfig.direction}` : "",
                    onChange: (V) => se(V.target.value),
                    className: "sort-select",
                    children: de(E.columns).map((V) => /* @__PURE__ */ n.jsx("option", { value: V.value, children: V.label }, V.value))
                  }
                )
              ] }),
              C.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  fe(C.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  lt,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => se(""),
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
          ref: y,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${E?.label || "Data"} cards in ${C.gridRows} rows and ${C.gridColumns} columns`,
          "aria-rowcount": C.gridRows,
          "aria-colcount": C.gridColumns,
          id: `panel-${E?.id}`,
          "aria-labelledby": `tab-${E?.id}`,
          children: q(E?.data || []).map((V, K) => {
            const Z = C.selectedCardIndex === K, P = C.focusedCardIndex === K && C.focusArea === "cards", Q = C.focusedCardIndex === K && C.focusArea === "card" && C.isCardNavigationActive, ae = K === 0 && C.focusArea !== "cards", G = P || ae, H = Y(K, C.gridColumns);
            if (r.cardTemplate) {
              const ie = r.cardTemplate(V, E.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": H.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (_e) => {
                        L.current[K] = _e;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        P ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        Q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": H.col + 1,
                      "aria-selected": Z,
                      "aria-expanded": Q,
                      "aria-description": Q ? `Card navigation active. ${C.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: G ? 0 : -1,
                      onClick: () => {
                        A((_e) => ({
                          ..._e,
                          selectedCardIndex: _e.selectedCardIndex === K ? -1 : K
                        })), oe(V);
                      },
                      onKeyDown: (_e) => J(_e, K),
                      onFocus: () => {
                        A((_e) => _e.isCardNavigationActive ? _e : _e.focusedCardIndex !== K || _e.focusArea !== "cards" ? {
                          ..._e,
                          focusedCardIndex: K,
                          focusArea: "cards"
                        } : _e);
                      },
                      children: ie
                    }
                  )
                },
                `card-${K}`
              );
            }
            const ne = Sp(V, E.columns, N, k), he = [
              ne.className || "",
              Z ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              P ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              Q ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": H.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      Z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      P ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      Q ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": H.col + 1,
                    "aria-selected": Z,
                    "aria-expanded": Q,
                    onKeyDown: (ie) => {
                      ie.key === "Enter" && (ie.preventDefault(), A((_e) => ({
                        ..._e,
                        selectedCardIndex: K
                      }))), J(ie, K);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      ji,
                      {
                        ...ne,
                        ref: (ie) => {
                          L.current[K] = ie;
                        },
                        className: he,
                        "aria-label": `${ne["aria-label"] || ne.heading}. ${Q ? `Card navigation active with ${C.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: G ? 0 : -1,
                        onClick: () => {
                          A((ie) => ({
                            ...ie,
                            selectedCardIndex: ie.selectedCardIndex === K ? -1 : K
                          })), oe(V);
                        },
                        onKeyDown: (ie) => J(ie, K),
                        onFocus: () => {
                          C.isCardNavigationActive || A((ie) => ie.focusedCardIndex !== K || ie.focusArea !== "cards" ? {
                            ...ie,
                            focusedCardIndex: K,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ie);
                        }
                      }
                    )
                  }
                )
              },
              `card-${K}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: we,
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
  return T === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${I || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      za,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: v,
        ariaDescription: S,
        orientation: x,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...M
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${I || ""}`, children: [
    o && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: o }),
    /* @__PURE__ */ n.jsx(
      za,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: v,
        ariaDescription: S,
        orientation: x,
        id: p,
        disabled: g,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: u,
        ...M
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, Ai = (e) => {
  const t = Wa.find((r) => r.value === e);
  return t ? t.icon : null;
}, kp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, s] = t.priceRange, o = r.discountedPrice || r.price;
      if (o < a || o > s) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Ai(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Cp = (e) => Ms(e, [
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
]), jp = {
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
  booleanRenderer: (e) => Ai(e),
  getDataId: (e) => `financial-${e.id}`
}, Np = (e) => Ms(e, [
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
]), Tp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: kp,
    createTabs: Cp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: jp,
    createTabs: Np
  }
}, Do = (e, t) => {
  const r = Tp[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Ei = [
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
], Dp = [
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
], $p = [
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
], Ip = [
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
], $o = [
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
], Io = [
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
], Mo = [
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
], Mp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Lp = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ei,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      $i,
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
    data: Dp,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ii,
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
    data: $p,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Mi,
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
    data: Ip,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Li,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Fp = () => {
  const [e, t] = Fe("healthcare"), r = De(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: ip,
      tabPanels: Lp(),
      data: Ei
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Do("ecommerce", $o),
      data: $o
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Do("financial", Io),
      data: Io
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Mp,
      tabPanels: Ms(Mo, [
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
      data: Mo
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
        lt,
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
      za,
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
}, Eb = Fp, Ri = (e) => /* @__PURE__ */ n.jsx(ti, { ...e }), Rb = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: r,
  columnWidth: a = tn.TwoThirds,
  mainWrapperSize: s,
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  service: u,
  navigation: c,
  search: d,
  account: f,
  organisation: m,
  logo: v,
  className: S,
  ...x
}) => {
  const p = {
    service: u,
    navigation: c,
    search: d,
    account: f,
    organisation: m,
    logo: v,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ci, { ...o }),
    /* @__PURE__ */ n.jsx(si, { ...p }),
    /* @__PURE__ */ n.jsx(Ri, { className: S, ...x, children: /* @__PURE__ */ n.jsx(ni, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Fn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Bt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(oi, { ...l })
  ] });
}, Bb = ({
  children: e,
  title: t,
  pageHeadingProps: r,
  columnWidth: a = tn.TwoThirds,
  mainWrapperSize: s = "small",
  // Default to small size for transactional forms
  skipLinkProps: o,
  headerProps: i,
  footerProps: l,
  backLinkProps: u,
  serviceName: c,
  serviceHref: d,
  logo: f,
  className: m,
  ...v
}) => {
  const S = {
    service: {
      text: c,
      href: d
    },
    logo: f,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ci, { ...o }),
    /* @__PURE__ */ n.jsx(si, { ...S }),
    /* @__PURE__ */ n.jsxs(Ri, { className: m, ...v, children: [
      u && /* @__PURE__ */ n.jsx(Pa, { ...u }),
      /* @__PURE__ */ n.jsx(ni, { size: s, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(Fn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Bt, { style: { marginTop: "3rem" }, size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(oi, { ...l })
  ] });
}, Bi = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: s = "a",
  onClick: o,
  ...i
}) => {
  const l = ve("nhsuk-back-link", a), u = ve("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: s === "button" ? /* @__PURE__ */ n.jsx("button", { className: u, type: "button", onClick: o, ...i, children: c() }) : /* @__PURE__ */ n.jsx("a", { className: u, href: r, ...i, children: c() }) });
};
Bi.displayName = "ForwardLink";
const pn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Lo() {
  return typeof window > "u" ? pn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Hi() {
  const [e, t] = X.useState(Lo());
  X.useEffect(() => {
    if (typeof window > "u") return;
    const o = () => t(Lo());
    return window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, []);
  const r = X.useCallback((o) => e >= pn[o], [e]), a = X.useCallback((o) => e < pn[o], [e]), s = X.useCallback((o, i) => e >= pn[o] && e < pn[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: s,
    /** Raw numeric values */
    values: pn
  };
}
function Hb(e) {
  const { width: t, values: r } = Hi();
  let a = e.base;
  const s = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const o of s) {
    const i = r[o];
    t >= i && e[o] !== void 0 && (a = e[o]);
  }
  return a;
}
function Pp(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [s, o] = X.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = X.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return X.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    s ? u.set(r, String(s)) : u.delete(r), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [s, i, t, r, a]), { selectedId: s, setSelectedId: o, drilledIn: i, setDrilledIn: l };
}
const Ap = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
), Ep = ({ className: e }) => /* @__PURE__ */ n.jsx(
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
function Rp(e) {
  const {
    items: t,
    selectedId: r,
    defaultSelectedId: a,
    onSelectionChange: s,
    renderItemContent: o,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: u,
    animated: c = !0,
    backLabel: d = "Back",
    nextLabel: f = "Next",
    isLoading: m = !1,
    emptyState: v,
    a11y: S,
    className: x,
    getId: p = (ge) => ge.id,
    orientation: g = "vertical",
    autoEnableThirdColumn: I = !0,
    onDrillChange: M,
    navigationInstructions: T = "Use arrow keys to navigate, Enter to open.",
    initialFocus: R = "first",
    skipFocusOnSelect: D = !1,
    skipAnnouncements: N = !1,
    onFocusChange: k,
    syncUrl: b = !1,
    urlParamSelected: j = "nsv",
    urlParamDrill: _ = "nsvDrill",
    urlSyncDebounceMs: h = 0,
    lazySecondary: L = !1,
    navFooter: w,
    collapsibleNav: y = !1,
    navInitiallyCollapsed: C = !1,
    onNavCollapseChange: A,
    collapseToggleLabelShow: re = "Show navigation",
    collapseToggleLabelHide: Y = "Hide navigation",
    collapseToggleIconShow: B,
    collapseToggleIconHide: O,
    persistNavCollapsed: z,
    navCollapsedStorageKey: oe = "nsvCollapsed",
    navCollapsedUrlParam: U = "nsvCollapsed",
    autoContentHeader: ce,
    contentHeaderLevel: we = 2,
    renderContentHeader: ue,
    contentSubheader: de,
    secondarySubheader: ee
  } = e, { up: se } = Hi(), [fe, q] = X.useState(!1);
  X.useEffect(() => {
    q(!0);
  }, []);
  const $ = fe && se("medium"), F = fe && se("xlarge");
  let W;
  u ? W = u : $ ? W = "two-column" : W = "list", !u && I && l && F && (W = "three-column");
  const te = Pp({
    enabled: b,
    paramSelected: j,
    paramDrill: _
  }), [J, le] = X.useState(
    () => te.selectedId !== void 0 ? te.selectedId : a
  ), me = r !== void 0 ? r : J, pe = t.find((ge) => p(ge) === me), [E, V] = X.useState(
    void 0
  );
  X.useEffect(() => {
    if (me === void 0) return;
    V(me);
    const ge = setTimeout(() => V(void 0), 220);
    return () => clearTimeout(ge);
  }, [me]);
  const K = X.useRef(null), Z = X.useRef(null), P = X.useRef(null), Q = X.useRef(null), [ae, G] = X.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [H, ne] = X.useState(() => "nav"), [he, ie] = X.useState(0), _e = () => [
    Q.current,
    Z.current,
    P.current
  ].filter(Boolean), Se = (ge) => {
    const je = _e(), ye = Math.max(0, Math.min(ge, je.length - 1));
    je[ye]?.focus(), ie(ye);
  }, xe = X.useCallback(
    (ge) => ge ? Array.from(ge.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (ye) => !ye.hasAttribute("disabled") && ye.tabIndex !== -1
    ) : [],
    []
  ), Me = X.useCallback(
    (ge) => {
      const je = xe(Z.current);
      if (!je.length) {
        Z.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(ge, je.length - 1)), Ie = je[ye];
      Ie.focus(), setTimeout(() => {
        document.activeElement !== Ie && (Ie.focus(), setTimeout(() => {
          document.activeElement !== Ie && Ie.click();
        }, 10));
      }, 10), G((Ue) => ({ ...Ue, contentIndex: ye }));
      const Ke = (Ue) => {
        Ue.key === "Escape" && (Ue.preventDefault(), Ue.stopPropagation(), Z.current?.focus(), Ie.removeEventListener("keydown", Ke));
      };
      je.forEach((Ue) => {
        const Ve = Ue._escapeHandler;
        Ve && Ue.removeEventListener("keydown", Ve);
      }), Ie._escapeHandler = Ke, Ie.addEventListener("keydown", Ke);
    },
    [xe]
  ), Be = X.useCallback(
    (ge) => {
      const je = xe(P.current);
      if (!je.length) {
        P.current?.focus();
        return;
      }
      const ye = Math.max(0, Math.min(ge, je.length - 1)), Ie = je[ye];
      Ie.focus(), setTimeout(() => {
        document.activeElement !== Ie && (Ie.focus(), setTimeout(() => {
          document.activeElement !== Ie && Ie.click();
        }, 10));
      }, 10), G((Ue) => ({ ...Ue, secondaryIndex: ye }));
      const Ke = (Ue) => {
        Ue.key === "Escape" && (Ue.preventDefault(), Ue.stopPropagation(), P.current?.focus(), Ie.removeEventListener("keydown", Ke));
      };
      je.forEach((Ue) => {
        const Ve = Ue._escapeHandler;
        Ve && Ue.removeEventListener("keydown", Ve);
      }), Ie._escapeHandler = Ke, Ie.addEventListener("keydown", Ke);
    },
    [xe]
  ), Pe = (ge) => {
    if (ge.defaultPrevented) return;
    const je = ge.key, ye = ge.target, Ie = !!ot.current && ot.current.contains(ye), Ke = !!Z.current && Z.current.contains(ye), Ue = !!P.current && P.current.contains(ye), Ve = !!P.current, un = ye === Q.current || ye === Z.current || ye === P.current, Xt = Ee && (W === "list" || W === "cards"), qn = Ke && !!ye.closest(".nhs-navigation-split-view__header");
    if (H === "containers" && un) {
      if (je === "ArrowRight") {
        ge.preventDefault();
        const Le = _e(), Ge = Math.min(Le.length - 1, he + 1);
        Se(Ge);
        return;
      }
      if (je === "ArrowLeft") {
        ge.preventDefault();
        const Le = Math.max(0, he - 1);
        Se(Le);
        return;
      }
      if (je === "Home") {
        ge.preventDefault(), Se(0);
        return;
      }
      if (je === "End") {
        ge.preventDefault(), Se(_e().length - 1);
        return;
      }
      if (je === "Enter" || je === " ") {
        if (ge.preventDefault(), ye === Q.current) {
          if (ne("nav"), ot.current) {
            const Le = Array.from(
              ot.current.querySelectorAll("[data-nav-item]")
            );
            (Le[Ze >= 0 ? Ze : 0] || Le[0])?.focus();
          }
        } else ye === Z.current ? (ne("content"), Me(ae.contentIndex)) : ye === P.current && (ne("secondary"), Be(ae.secondaryIndex));
        return;
      }
      return;
    }
    if (je === "Escape") {
      if (H === "content" || H === "secondary") {
        if (Ke || Ue) {
          if (ge.preventDefault(), ne("nav"), ot.current) {
            const Ge = Array.from(
              ot.current.querySelectorAll("[data-nav-item]")
            )[Ze >= 0 ? Ze : 0];
            setTimeout(() => Ge?.focus(), 10);
          }
        } else if ((ye === Z.current || ye === P.current) && (ge.preventDefault(), ne("nav"), ot.current)) {
          const Ge = Array.from(
            ot.current.querySelectorAll("[data-nav-item]")
          )[Ze >= 0 ? Ze : 0];
          setTimeout(() => Ge?.focus(), 10);
        }
      }
      return;
    }
    if (je === "Enter" || je === " ") {
      if (ye.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (ye === Z.current && H === "content") {
        ge.preventDefault(), ge.stopPropagation(), xe(Z.current).length > 0 && setTimeout(() => {
          Me(ae.contentIndex);
        }, 50);
        return;
      }
      if (ye === P.current && H === "secondary") {
        ge.preventDefault(), ge.stopPropagation(), xe(
          P.current
        ).length > 0 && setTimeout(() => {
          Be(ae.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Xt && qn && !un && (je === "ArrowRight" || je === "ArrowLeft")) {
      const Le = xe(Z.current).filter(
        (Ge) => Ge.closest(".nhs-navigation-split-view__header")
      );
      if (Le.length > 1) {
        const Ge = Le.indexOf(ye);
        if (Ge >= 0) {
          const Bs = (Ge + (je === "ArrowRight" ? 1 : -1) + Le.length) % Le.length;
          ge.preventDefault(), Le[Bs].focus();
          return;
        }
      }
    }
    if (je === "ArrowRight") {
      if (Ie || H === "nav") {
        ge.preventDefault(), ne("content"), setTimeout(() => Z.current?.focus(), 10);
        return;
      }
      if (Ke || H === "content") {
        Ve && (ge.preventDefault(), ne("secondary"), setTimeout(() => P.current?.focus(), 10));
        return;
      }
    }
    if (je === "ArrowLeft") {
      if (Ue || H === "secondary") {
        ge.preventDefault(), ne("content"), setTimeout(() => Z.current?.focus(), 10);
        return;
      }
      if (Ke || H === "content") {
        if (ge.preventDefault(), ne("nav"), ot.current) {
          const Ge = Array.from(
            ot.current.querySelectorAll("[data-nav-item]")
          )[Ze >= 0 ? Ze : 0];
          setTimeout(() => Ge?.focus(), 10);
        }
        return;
      }
    }
    if (je === "Home" && !Ie && (ge.preventDefault(), ne("nav"), ot.current)) {
      const Le = Array.from(
        ot.current.querySelectorAll("[data-nav-item]")
      ), Ge = Le[Ze >= 0 ? Ze : 0] || Le[0];
      setTimeout(() => Ge?.focus(), 10);
    }
    if (je === "End") {
      const Le = Ve ? P.current : Z.current;
      Le && !Le.contains(ye) && (ge.preventDefault(), Ve ? (ne("secondary"), setTimeout(() => P.current?.focus(), 10)) : (ne("content"), setTimeout(() => Z.current?.focus(), 10)));
    }
    if (je === "ArrowDown" || je === "ArrowUp") {
      if (ye === Z.current && je === "ArrowDown") {
        ge.preventDefault(), xe(Z.current).length > 0 && Me(0);
        return;
      }
      if (ye === P.current && je === "ArrowDown") {
        ge.preventDefault(), xe(
          P.current
        ).length > 0 && Be(0);
        return;
      }
      if (Ke) {
        const Le = xe(Z.current);
        if (Le.length) {
          ge.preventDefault();
          const Ge = je === "ArrowDown" ? 1 : -1, wt = (ae.contentIndex + Ge + Le.length) % Le.length;
          Me(wt);
        }
      } else if (Ue) {
        const Le = xe(P.current);
        if (Le.length) {
          ge.preventDefault();
          const Ge = je === "ArrowDown" ? 1 : -1, wt = (ae.secondaryIndex + Ge + Le.length) % Le.length;
          Be(wt);
        }
      }
    }
  }, Ee = !!pe && (W === "list" || W === "cards"), qe = X.useMemo(() => ce === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ce === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ce === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ce.mobile !== void 0 ? ce.mobile : !0,
    tablet: ce.tablet || !1,
    desktop: ce.desktop || !1
  }, [ce]), Xe = fe && se("medium") && !se("xlarge"), et = fe && se("xlarge"), yt = !!l, tt = W === "three-column", [rt, kn] = X.useState(!1);
  X.useEffect(() => {
    tt && rt && kn(!1);
  }, [tt, rt]), X.useEffect(() => {
    rt && !tt && (ne("secondary"), ie(2), setTimeout(() => {
      P.current?.focus();
    }, 50));
  }, [rt, tt]), X.useEffect(() => {
    !rt && !tt && H === "secondary" && (ne("content"), ie(1), setTimeout(() => {
      Z.current?.focus();
    }, 50));
  }, [rt, tt, H]);
  const oa = !!pe && (Ee && qe.mobile || !Ee && Xe && qe.tablet || !Ee && et && qe.desktop) || yt && !tt, cc = `h${we}`, ia = pe ? X.createElement(
    cc,
    {
      style: {
        marginLeft: Ee ? 32 : 0,
        marginRight: Ee ? 32 : 0
      }
    },
    pe.label
  ) : null, Es = Ee ? "mobile" : Xe ? "tablet" : "desktop", uc = yt && !tt && !rt, la = Ee && qe.mobile ? /* @__PURE__ */ n.jsx(
    Pa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => cn(void 0, void 0)
    }
  ) : void 0, ca = uc ? /* @__PURE__ */ n.jsx(
    Bi,
    {
      element: "button",
      text: f,
      onClick: () => {
        kn(!0);
      }
    }
  ) : void 0, ua = !tt && rt ? /* @__PURE__ */ n.jsx(
    Pa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => kn(!1)
    }
  ) : void 0, dc = X.useMemo(() => {
    if (!oa || !pe) return null;
    if (ue)
      return ue({
        item: pe,
        detailActive: Ee,
        context: Es,
        backLink: la,
        defaultHeading: ia
      });
    const ge = pe && de ? typeof de == "function" ? de(pe) : de : null;
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
            ua || la,
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
                  ia,
                  ge && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ge })
                ]
              }
            )
          ]
        }
      ),
      ca && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: ca })
    ] });
  }, [
    oa,
    pe,
    ue,
    Ee,
    Es,
    la,
    ua,
    ia,
    ca,
    de
  ]);
  X.useEffect(() => {
    if (!b) return;
    const ge = W === "three-column";
    let je = !1;
    const ye = () => {
      je || (te.selectedId !== me && te.setSelectedId(me), te.drilledIn !== ge && te.setDrilledIn(ge));
    };
    if (h && h > 0) {
      const Ie = setTimeout(ye, h);
      return () => {
        je = !0, clearTimeout(Ie);
      };
    } else
      ye();
  }, [b, te, me, W, h]), X.useEffect(() => {
    if (!b) return;
    const ge = () => {
      const je = new URLSearchParams(window.location.search), ye = je.get(j);
      je.get(_), le(ye === null ? void 0 : ye);
    };
    return window.addEventListener("popstate", ge), () => window.removeEventListener("popstate", ge);
  }, [
    b,
    j,
    _,
    u,
    l
  ]);
  const Yn = X.useRef(0), jt = X.useRef(
    null
  ), cn = X.useCallback(
    (ge, je) => {
      ge !== me && (r === void 0 && le(ge), s?.(ge, je));
    },
    [r, s, me]
  );
  X.useEffect(() => {
    if (!D && Ee && Z.current) {
      const ge = setTimeout(() => Z.current?.focus(), 30);
      return () => clearTimeout(ge);
    }
  }, [Ee, me, D]);
  const ot = X.useRef(null), [Ze, Cn] = X.useState(
    () => R === "first" ? 0 : -1
  );
  X.useEffect(() => {
    if (Ze < 0 || !ot.current) return;
    const je = Array.from(
      ot.current.querySelectorAll("[data-nav-item]")
    )[Ze];
    if (je) {
      document.activeElement !== je && je.focus(), Yn.current = Ze;
      const ye = t[Ze];
      k?.(
        ye ? p(ye) : void 0,
        ye,
        Ze
      );
    }
  }, [Ze, t, k, p]);
  const fc = (ge) => {
    const je = g === "vertical" ? "ArrowDown" : "ArrowRight", ye = g === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ge.key === "ArrowRight" && g === "vertical") {
      ge.preventDefault(), rt ? (ne("secondary"), setTimeout(() => {
        P.current?.focus();
      }, 10)) : (ne("content"), setTimeout(() => {
        Z.current?.focus();
      }, 10));
      return;
    }
    if (ge.key === je)
      ge.preventDefault(), Cn((Ie) => Math.min(t.length - 1, Ie + 1));
    else if (ge.key === ye)
      ge.preventDefault(), Cn((Ie) => Math.max(0, Ie - 1));
    else if (ge.key === "Home")
      ge.preventDefault(), Cn(0);
    else if (ge.key === "End")
      ge.preventDefault(), Cn(t.length - 1);
    else if (ge.key === "Enter" || ge.key === " ") {
      ge.preventDefault();
      const Ie = t[Ze];
      Ie && !Ie.disabled && cn(p(Ie), Ie);
    } else if (ge.key.length === 1 && /[a-z0-9]/i.test(ge.key)) {
      jt.current || (jt.current = { buffer: "", last: 0 });
      const Ie = Date.now(), Ke = 700, Ue = ge.key.toLowerCase();
      Ie - jt.current.last > Ke ? jt.current.buffer = Ue : jt.current.buffer += Ue, jt.current.last = Ie;
      let Ve = jt.current.buffer;
      const un = Ve.split("").every((wt) => wt === Ve[0]), Xt = t.map(
        (wt) => String(wt.label || "").toLowerCase()
      );
      let qn = 0;
      Ze >= 0 && (qn = (Ze + 1) % t.length);
      let Le;
      const Ge = (wt, Bs) => {
        const Hs = t.length;
        for (let pa = 0; pa < Hs; pa++) {
          const ha = (qn + pa) % Hs;
          if (!t[ha].disabled && Xt[ha].startsWith(wt))
            return ha;
        }
      };
      un && Ve.length > 1 ? Le = Ge(Ve[0]) : (Le = Ge(Ve), Le === void 0 && Ve.length > 1 && (Le = Ge(Ve[Ve.length - 1]), Le !== void 0 && jt.current && (jt.current.buffer = Ve[Ve.length - 1]))), Le !== void 0 && Cn(Le);
    }
  }, pc = X.useMemo(() => {
    if (z && (z === "url" || z === "both") && typeof window < "u") {
      const je = new URLSearchParams(window.location.search).get(U);
      if (je === "1") return !0;
      if (je === "0") return !1;
    }
    if (z && (z === "localStorage" || z === "both") && typeof window < "u")
      try {
        const ge = window.localStorage.getItem(oe);
        if (ge === "1") return !0;
        if (ge === "0") return !1;
      } catch {
      }
    return C;
  }, [
    z,
    C,
    oe,
    U
  ]), [vt, hc] = X.useState(pc);
  X.useEffect(() => {
    A?.(vt);
  }, [vt, A]);
  const mc = X.useCallback(() => {
    $ && y && hc((ge) => !ge);
  }, [$, y]);
  X.useEffect(() => {
    if (z && !(typeof window > "u")) {
      if (z === "localStorage" || z === "both")
        try {
          window.localStorage.setItem(
            oe,
            vt ? "1" : "0"
          );
        } catch {
        }
      if (z === "url" || z === "both") {
        const ge = new URLSearchParams(window.location.search);
        ge.set(U, vt ? "1" : "0");
        const je = `${window.location.pathname}?${ge.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", je);
      }
    }
  }, [
    vt,
    z,
    oe,
    U
  ]);
  const gc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ee ? "nhs-navigation-split-view--detail-active" : "",
    W === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    y && $ && vt ? "nhs-navigation-split-view--nav-collapsed" : "",
    x
  ].filter(Boolean).join(" "), da = X.useRef(null);
  X.useEffect(() => {
    if (!N && da.current) {
      const ge = pe ? `Selected ${pe.label}` : "Selection cleared";
      da.current.textContent = ge;
    }
  }, [pe, N]), X.useEffect(() => {
    !Ee && me == null && ot.current && ot.current.querySelectorAll("[data-nav-item]")[Yn.current]?.focus();
  }, [Ee, me]);
  const Ut = W === "three-column", [fa, xc] = X.useState(!1);
  X.useEffect(() => {
    Ut && !fa && xc(!0);
  }, [Ut, fa]);
  const Rs = X.useRef(Ut);
  X.useEffect(() => {
    Rs.current !== Ut && (M?.(Ut), Rs.current = Ut);
  }, [Ut, M]);
  const bc = () => {
    if (W === "cards")
      return /* @__PURE__ */ n.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": me ? String(me) : void 0,
          children: [
            t.map((ye) => {
              const Ie = p(ye), Ke = Ie === me;
              return /* @__PURE__ */ n.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Ke,
                  children: /* @__PURE__ */ n.jsxs(
                    "button",
                    {
                      id: String(Ie),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Ke || void 0,
                      "data-disabled": ye.disabled || void 0,
                      disabled: ye.disabled,
                      onClick: () => !ye.disabled && cn(Ie, ye),
                      children: [
                        ye.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
                        /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                        ye.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                        o?.(ye),
                        ye.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
                      ]
                    }
                  )
                },
                Ie
              );
            }),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
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
    const ge = "nsv-nav-instructions", je = X.useMemo(() => X.memo(
      ({
        item: ye,
        idx: Ie,
        selected: Ke,
        focused: Ue
      }) => {
        const Ve = p(ye), un = ye.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ue ? 0 : -1,
          onClick: () => {
            Yn.current = Ie, cn(Ve, ye);
          },
          onKeyDown: (Xt) => {
            (Xt.key === "Enter" || Xt.key === " ") && (Xt.preventDefault(), Yn.current = Ie, cn(Ve, ye));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Ve),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Ke,
            "aria-current": Ke ? "true" : void 0,
            "data-selected": Ke || void 0,
            "data-disabled": ye.disabled || void 0,
            ...un,
            children: [
              ye.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: ye.icon }),
              /* @__PURE__ */ n.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: ye.label }),
                ye.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: ye.description }),
                o?.(ye)
              ] }),
              ye.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: ye.badge })
            ]
          }
        );
      }
    ), [p, cn, o]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: ot,
          className: "nhs-navigation-split-view__list",
          onKeyDown: fc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ge,
          "aria-activedescendant": me ? String(me) : void 0,
          children: [
            t.map((ye, Ie) => /* @__PURE__ */ n.jsx(
              je,
              {
                item: ye,
                idx: Ie,
                selected: p(ye) === me,
                focused: Ie === Ze || Ze === -1 && Ie === 0 && R === "first",
                "data-just-selected": p(ye) === E ? "true" : void 0
              },
              p(ye)
            )),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx(
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
          id: ge,
          style: {
            position: "absolute",
            width: 1,
            height: 1,
            overflow: "hidden",
            clip: "rect(0 0 0 0)"
          },
          children: T
        }
      )
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: K,
      className: gc,
      "aria-label": S?.rootLabel,
      "data-layout": W,
      onKeyDown: Pe,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ee || void 0,
            style: { transform: Ee ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: Q,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": S?.navigationLabel || "Items",
                  "data-collapsed": vt || void 0,
                  tabIndex: 0,
                  children: [
                    y && $ && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: mc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": vt ? re : Y,
                        title: vt ? re : Y,
                        children: vt ? B || /* @__PURE__ */ n.jsx(Ep, {}) : O || /* @__PURE__ */ n.jsx(Ap, {})
                      }
                    ) }),
                    /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: bc() }),
                    w && /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: w
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ n.jsxs(
                "div",
                {
                  ref: Z,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": S?.contentLabel || "Content",
                  "data-has-selection": !!pe || void 0,
                  tabIndex: 0,
                  style: {
                    display: rt && !tt ? "none" : void 0
                  },
                  children: [
                    oa && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: dc }),
                    /* @__PURE__ */ n.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(pe)
                      }
                    )
                  ]
                }
              ),
              W === "three-column" && (!L || fa) || rt && !tt ? /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: P,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": S?.secondaryContentLabel || "Secondary",
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
                        rt && !tt && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx(
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
                                  ua,
                                  /* @__PURE__ */ n.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: pe && typeof pe == "object" && "label" in pe ? pe.label : String(pe) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        pe && ee && /* @__PURE__ */ n.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof ee == "function" ? ee(pe) : ee
                          }
                        ),
                        /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(pe) })
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
            ref: da,
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
            children: Ut ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Rp.displayName = "NavigationSplitView";
const Bp = typeof window < "u" && window.document ? X.useLayoutEffect : X.useEffect, Fo = (e, t, r, a) => e == null || Number.isNaN(e) ? a : Math.min(r, Math.max(t, e)), Hp = ({ item: e, maxLines: t, enableDrilldown: r, onExpand: a, isActive: s, topLaneIndex: o }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${o})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), m = r && e.childItems && e.childItems.length > 0, v = (x) => {
    m && (x.preventDefault(), a?.(e));
  }, S = m ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": s || !1,
    onClick: v,
    onKeyDown: (x) => {
      (x.key === "Enter" || x.key === " ") && v(x), x.key === "Escape" && s && v(x);
    }
  } : {};
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: ve("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", s && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: u, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": d,
      "aria-colspan": f,
      ...S,
      children: [
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          m && /* @__PURE__ */ n.jsx("span", { className: ve("nhsuk-product-roadmap__item-expander", s && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Op = wc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: r = 400,
  itemMaxLines: a = 2,
  className: s,
  ariaLabel: o = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: u = "overlay",
  ...c
}) => {
  const [d, f] = Fe(() => /* @__PURE__ */ new Set()), [m, v] = Fe(() => /* @__PURE__ */ new Set()), S = Ae(/* @__PURE__ */ new Set()), x = be((h) => d.has(h), [d]), p = be((h) => {
    f((L) => {
      const w = new Set(L);
      return w.has(h.id) ? (w.delete(h.id), v((y) => {
        const C = new Set(y);
        return C.add(h.id), C;
      }), setTimeout(() => v((y) => {
        const C = new Set(y);
        return C.delete(h.id), C;
      }), 240), l?.(h.id, !1)) : (w.add(h.id), l?.(h.id, !0)), w;
    });
  }, [l]);
  Bp(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const h = [];
    if (d.forEach((C) => {
      S.current.has(C) || h.push(C);
    }), S.current = new Set(d), !h.length) return;
    const L = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, w = h.map((C) => `.nhsuk-product-roadmap__inline-children[data-parent="${C}"] .nhsuk-product-roadmap__inline-child`).join(","), y = Array.from(document.querySelectorAll(w));
    if (y.length) {
      if (L) {
        y.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((C) => {
        (C.gsap || C.default || C).to(y, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        y.forEach((C) => {
          C.style.opacity = "1", C.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const g = be(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), I = ve("nhsuk-product-roadmap", s), M = Fo(r, 120, 1200, 400), T = Fo(a, 1, 6, 2), R = De(() => e.map((h) => /* @__PURE__ */ new Date(h + " 01")), [e]), D = De(() => {
    if (R.length === 0) {
      const w = /* @__PURE__ */ new Date();
      return [w, w];
    }
    const h = new Date(R[0]), L = Rn.offset(new Date(R[R.length - 1]), 1);
    return [h, L];
  }, [R]), N = De(() => Is().domain(D).range([0, R.length * M]), [D, R.length, M]), k = be((h) => {
    if (h.startDate) {
      const Y = new Date(h.startDate), B = new Date(h.endDate ?? h.startDate);
      B < Y && B.setTime(Y.getTime());
      const O = N(Y), z = Rn.offset(new Date(B), 1);
      let oe = N(z);
      Number.isFinite(oe) || (oe = O + M);
      const U = Math.max(M * 0.25, oe - O), ce = O / M, we = U / M;
      return { ...h, _pxLeft: O, _pxWidth: U, _startFraction: ce, _spanColumns: we };
    }
    const L = h.date ?? 1, w = h.dateOffset ?? 0, y = h.length ?? 1, C = h.partialLength ?? 1, A = L - 1 + w, re = y - 1 + C;
    return { ...h, _pxLeft: A * M, _pxWidth: re * M, _startFraction: A, _spanColumns: re };
  }, [N, M]), b = De(() => t.map((h) => {
    const w = h.roadmapItems.map((C) => {
      const A = !C.childItems && C.children ? { ...C, childItems: C.children } : { ...C };
      return k(A);
    }).sort((C, A) => C._pxLeft !== A._pxLeft ? C._pxLeft - A._pxLeft : A._pxWidth - C._pxWidth), y = [];
    return w.forEach((C) => {
      const A = C._pxLeft, re = C._pxLeft + C._pxWidth;
      let Y = y.findIndex((B) => B <= A);
      Y === -1 && (Y = y.length, y.push(0)), y[Y] = re, C.verticalPosition = Y + 1;
    }), { ...h, roadmapItems: w, _laneCount: y.length };
  }), [t, k]), j = De(() => b.map((h) => h._laneCount || 1), [b]), _ = De(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: I,
      style: { "--column-width": `${M}px`, gridTemplateColumns: _ },
      role: "grid",
      "aria-label": o,
      "aria-colcount": e.length + 1,
      "aria-rowcount": b.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((h, L) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": L + 2, children: h }, `${h}-${L}`))
        ] }),
        b.map((h, L) => {
          const w = L + 2, y = j[L];
          let C, A = 0, re = [];
          i && u === "inline" && (re = h.roadmapItems.filter((z) => x(z.id) && z.childItems && z.childItems.length).map((z) => ({ id: z.id, lane: z.verticalPosition || 1, count: z.childItems.length })).sort((z, oe) => z.lane - oe.lane), A = re.reduce((z, oe) => z + oe.count, 0));
          const Y = y + A;
          C = `calc((${Y} * var(--roadmap-item-block-height)) + (max(0, ${Y} - 1) * var(--roadmap-row-gap)))`;
          const B = {};
          let O = 0;
          return re.forEach((z) => {
            O += z.count, B[z.lane + 1] = O;
          }), /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": w, children: [
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: h.heading }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: C }, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: h.roadmapItems.map((z, oe) => {
              const U = (z.verticalPosition || 1) - 1, ce = re.filter((ee) => ee.lane - 1 < U).reduce((ee, se) => ee + se.count, 0), we = U + ce, ue = x(z.id), de = m.has(z.id);
              return /* @__PURE__ */ n.jsxs(ft.Fragment, { children: [
                /* @__PURE__ */ n.jsx(Hp, { item: z, maxLines: T, enableDrilldown: i, onExpand: p, isActive: ue, topLaneIndex: we, laneOffset: ce }),
                i && u === "inline" && (ue || de) && z.childItems && /* @__PURE__ */ n.jsx("div", { "data-parent": z.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${z.title} child tasks`, children: z.childItems.map((ee, se) => {
                  const fe = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let q = z._pxLeft, $ = z._pxWidth;
                  if (ee.startDate) {
                    const te = new Date(ee.startDate);
                    let J = ee.endDate ? new Date(ee.endDate) : new Date(te);
                    J < te && (J = new Date(te));
                    const le = new Date(J);
                    le.setDate(le.getDate() + 1);
                    const me = N(te);
                    let pe = N(le);
                    (!Number.isFinite(pe) || pe <= me) && (pe = me + 6), q = me, $ = Math.max(6, pe - me);
                  }
                  const W = we + 1 + se;
                  return /* @__PURE__ */ n.jsxs(
                    "div",
                    {
                      className: ve("nhsuk-product-roadmap__inline-child", ee.status && `nhsuk-product-roadmap__inline-child--status-${ee.status}`, !ue && de && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${q}px`, width: `${$}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${W})`, height: fe, opacity: ue ? 0 : void 0, transform: ue ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: ee.title })
                      ]
                    },
                    ee.id ?? se
                  );
                }) })
              ] }, z.id ?? oe);
            }) }) })
          ] }, `${h.heading}-${L}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const h = Array.from(d)[0], L = t.flatMap((w) => w.roadmapItems).find((w) => w.id === h);
          return !L || !L.childItems ? null : /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${L.title} details`, children: [
            /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ n.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: L.title }),
                /* @__PURE__ */ n.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: g, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: L.content }),
              /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: L.childItems.map((w, y) => /* @__PURE__ */ n.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: w.title }),
                w.content && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: w.content })
              ] }, w.id ?? y)) })
            ] }),
            /* @__PURE__ */ n.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: g, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Op.displayName = "ProductRoadmap";
function Oi(e) {
  var t, r, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = Oi(e[t])) && (a && (a += " "), a += r);
  } else for (r in e) e[r] && (a && (a += " "), a += r);
  return a;
}
function gr() {
  for (var e, t, r = 0, a = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = Oi(e)) && (a && (a += " "), a += t);
  return a;
}
function at(e) {
  return function() {
    return e;
  };
}
const Ua = Math.PI, Va = 2 * Ua, Jt = 1e-6, zp = Va - Jt;
function zi(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function Wp(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return zi;
  const r = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let s = 1, o = a.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + a[s];
  };
}
class Up {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? zi : Wp(t);
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
  quadraticCurveTo(t, r, a, s) {
    this._append`Q${+t},${+r},${this._x1 = +a},${this._y1 = +s}`;
  }
  bezierCurveTo(t, r, a, s, o, i) {
    this._append`C${+t},${+r},${+a},${+s},${this._x1 = +o},${this._y1 = +i}`;
  }
  arcTo(t, r, a, s, o) {
    if (t = +t, r = +r, a = +a, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let i = this._x1, l = this._y1, u = a - t, c = s - r, d = i - t, f = l - r, m = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (m > Jt) if (!(Math.abs(f * u - c * d) > Jt) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = a - i, S = s - l, x = u * u + c * c, p = v * v + S * S, g = Math.sqrt(x), I = Math.sqrt(m), M = o * Math.tan((Ua - Math.acos((x + m - p) / (2 * g * I))) / 2), T = M / I, R = M / g;
      Math.abs(T - 1) > Jt && this._append`L${t + T * d},${r + T * f}`, this._append`A${o},${o},0,0,${+(f * v > d * S)},${this._x1 = t + R * u},${this._y1 = r + R * c}`;
    }
  }
  arc(t, r, a, s, o, i) {
    if (t = +t, r = +r, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(s), u = a * Math.sin(s), c = t + l, d = r + u, f = 1 ^ i, m = i ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > Jt || Math.abs(this._y1 - d) > Jt) && this._append`L${c},${d}`, a && (m < 0 && (m = m % Va + Va), m > zp ? this._append`A${a},${a},0,1,${f},${t - l},${r - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : m > Jt && this._append`A${a},${a},0,${+(m >= Ua)},${f},${this._x1 = t + a * Math.cos(o)},${this._y1 = r + a * Math.sin(o)}`);
  }
  rect(t, r, a, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${a = +a}v${+s}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function Wi(e) {
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
  }, () => new Up(t);
}
function Ui(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Vi(e) {
  this._context = e;
}
Vi.prototype = {
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
function Gi(e) {
  return new Vi(e);
}
function Yi(e) {
  return e[0];
}
function qi(e) {
  return e[1];
}
function Xi(e, t) {
  var r = at(!0), a = null, s = Gi, o = null, i = Wi(l);
  e = typeof e == "function" ? e : e === void 0 ? Yi : at(e), t = typeof t == "function" ? t : t === void 0 ? qi : at(t);
  function l(u) {
    var c, d = (u = Ui(u)).length, f, m = !1, v;
    for (a == null && (o = s(v = i())), c = 0; c <= d; ++c)
      !(c < d && r(f = u[c], c, u)) === m && ((m = !m) ? o.lineStart() : o.lineEnd()), m && o.point(+e(f, c, u), +t(f, c, u));
    if (v) return o = null, v + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : at(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : at(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (r = typeof u == "function" ? u : at(!!u), l) : r;
  }, l.curve = function(u) {
    return arguments.length ? (s = u, a != null && (o = s(a)), l) : s;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = o = null : o = s(a = u), l) : a;
  }, l;
}
function Ga(e, t, r) {
  var a = null, s = at(!0), o = null, i = Gi, l = null, u = Wi(c);
  e = typeof e == "function" ? e : e === void 0 ? Yi : at(+e), t = typeof t == "function" ? t : at(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? qi : at(+r);
  function c(f) {
    var m, v, S, x = (f = Ui(f)).length, p, g = !1, I, M = new Array(x), T = new Array(x);
    for (o == null && (l = i(I = u())), m = 0; m <= x; ++m) {
      if (!(m < x && s(p = f[m], m, f)) === g)
        if (g = !g)
          v = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), S = m - 1; S >= v; --S)
            l.point(M[S], T[S]);
          l.lineEnd(), l.areaEnd();
        }
      g && (M[m] = +e(p, m, f), T[m] = +t(p, m, f), l.point(a ? +a(p, m, f) : M[m], r ? +r(p, m, f) : T[m]));
    }
    if (I) return l = null, I + "" || null;
  }
  function d() {
    return Xi().defined(s).curve(i).context(o);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : at(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : at(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : at(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : at(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : at(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : at(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(r);
  }, c.lineX1 = function() {
    return d().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (s = typeof f == "function" ? f : at(!!f), c) : s;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, o != null && (l = i(o)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? o = l = null : l = i(o = f), c) : o;
  }, c;
}
function Po(e) {
  return e < 0 ? -1 : 1;
}
function Ao(e, t, r) {
  var a = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (a || s < 0 && -0), i = (r - e._y1) / (s || a < 0 && -0), l = (o * s + i * a) / (a + s);
  return (Po(o) + Po(i)) * Math.min(Math.abs(o), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Eo(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ca(e, t, r) {
  var a = e._x0, s = e._y0, o = e._x1, i = e._y1, l = (o - a) / 3;
  e._context.bezierCurveTo(a + l, s + l * t, o - l, i - l * r, o, i);
}
function xr(e) {
  this._context = e;
}
xr.prototype = {
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
        Ca(this, this._t0, Eo(this, this._t0));
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
          this._point = 3, Ca(this, Eo(this, r = Ao(this, e, t)), r);
          break;
        default:
          Ca(this, this._t0, r = Ao(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
Object.create(xr.prototype).point = function(e, t) {
  xr.prototype.point.call(this, t, e);
};
function br(e) {
  return new xr(e);
}
function Vp(e, t, r) {
  const a = ii(e, t);
  return Is().domain(a).range(r);
}
function Ro(e, t, r) {
  const [a, s] = ii(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(s)))
    return ur().domain([0, 0]).range(r);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const u = s - a, c = (u > 0 ? u : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = s ?? 0;
  return ur().domain([i, l]).nice().range(r);
}
function Ya(e, t, r, a) {
  const s = Xi().x(t).y(r);
  return a?.smooth !== !1 && s.curve(br), s(e) ?? "";
}
function Gp(e = {}) {
  const t = X.useRef(null), r = X.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, s] = X.useState({ width: 0, height: 0 });
  X.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((u) => {
      for (const c of u) {
        const { width: d, height: f } = c.contentRect;
        s({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const o = Math.max(0, a.width - r.left - r.right), i = Math.max(0, a.height - r.top - r.bottom);
  return { width: a.width, height: a.height, innerWidth: o, innerHeight: i, margin: r, ref: t };
}
const Ki = X.createContext(null);
function qt() {
  return X.useContext(Ki);
}
const Yp = ({
  height: e = 240,
  margin: t,
  width: r,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: s,
  role: o = "group",
  ariaLabel: i
}) => {
  const l = Gp(t), u = { height: e, position: "relative" };
  return r !== void 0 && (u.width = typeof r == "number" ? `${r}px` : r), /* @__PURE__ */ n.jsx("div", { ref: l.ref, className: a, style: u, role: o, "aria-label": i, children: /* @__PURE__ */ n.jsx(Ki.Provider, { value: l, children: s }) });
}, Ls = X.createContext(null), ln = () => X.useContext(Ls), qp = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  parseX: a,
  children: s,
  xTickCount: o = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: u,
  yPadding: c
}) => {
  const d = qt(), f = t ?? d?.innerWidth ?? 0, m = r ?? d?.innerHeight ?? 0, v = X.useMemo(() => e.flatMap((T) => T.data), [e]), S = X.useCallback((T) => {
    if (a) return a(T);
    const R = T.x;
    return R instanceof Date ? R : new Date(R);
  }, [a]), x = u ?? 6, p = c ?? 6, g = X.useMemo(() => Vp(v, S, [x, Math.max(0, f - x)]), [v, S, f, x]), I = X.useMemo(() => {
    if (l) {
      const T = Ro([], (R) => R.y, [Math.max(0, m - p), p]);
      return T.domain(l), T;
    }
    return Ro(v, (T) => T.y, [Math.max(0, m - p), p]);
  }, [v, m, l]), M = X.useMemo(() => ({
    xScale: g,
    yScale: I,
    getXTicks: (T = o) => g.ticks(T),
    getYTicks: (T = i) => I.ticks(T)
  }), [g, I, o, i]);
  return /* @__PURE__ */ n.jsx(Ls.Provider, { value: M, children: s });
}, Bo = ({
  type: e,
  scale: t,
  tickCount: r,
  tickValues: a,
  formatTick: s,
  label: o,
  offset: i,
  className: l,
  minLabelSpacing: u,
  maxTickLabelLength: c,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: m = !0,
  tickFormatPreset: v
}) => {
  const S = ln(), x = qt(), p = t || (e === "x" ? S?.xScale : S?.yScale), g = r ?? (e === "x" ? 6 : 5), I = typeof s == "function", M = X.useMemo(() => {
    if (I || !v) return;
    const D = (N) => new Intl.DateTimeFormat(void 0, N);
    switch (v) {
      case "dayShortMonth":
        return (N) => {
          const k = N instanceof Date ? N : new Date(N);
          return `${k.getDate()}
${D({ month: "short" }).format(k)}`;
        };
      case "dayShortMonthYear":
        return (N) => {
          const k = N instanceof Date ? N : new Date(N);
          return `${k.getDate()}
${D({ month: "short" }).format(k)} ${k.getFullYear()}`;
        };
      case "shortMonth":
        return (N) => {
          const k = N instanceof Date ? N : new Date(N);
          return D({ month: "short" }).format(k);
        };
      case "shortMonthYear":
        return (N) => {
          const k = N instanceof Date ? N : new Date(N);
          return `${D({ month: "short" }).format(k)} ${k.getFullYear()}`;
        };
      case "hourMinute":
        return (N) => {
          const k = N instanceof Date ? N : new Date(N);
          return D({ hour: "2-digit", minute: "2-digit" }).format(k);
        };
      default:
        return;
    }
  }, [I, v]);
  let T = I ? s : M || ((D) => String(D));
  const R = X.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(g) : p.domain ? p.domain() : [] : [], [p, g, a]);
  if (e === "x" && !I && !v && R.length && R.every((D) => D instanceof Date)) {
    const D = R[0], N = R[R.length - 1], k = N.getTime() - D.getTime(), b = 24 * 3600 * 1e3, j = 365 * b, _ = D.getFullYear() === N.getFullYear(), h = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (k < 2 * b) {
      const L = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      T = (w) => L.format(w);
    } else if (k < 32 * b)
      T = (L) => {
        const w = L;
        return `${w.getDate()} ${h.format(w)}`;
      };
    else if (k < j && _)
      T = (L) => h.format(L);
    else if (k < 2 * j) {
      const L = /* @__PURE__ */ new Set();
      T = (w) => {
        const y = w, C = y.getMonth();
        return L.has(C) || L.add(C), `${h.format(y)} ${y.getFullYear()}`;
      };
    } else
      T = (L) => String(L.getFullYear());
  }
  if (!p || !x) return null;
  if (e === "x") {
    const D = i ?? x.innerHeight, N = typeof p.bandwidth == "function", k = N ? p.bandwidth() : 0, b = (h) => {
      const L = p(h);
      return N ? L + k / 2 : L;
    };
    let j = u ?? 0;
    if (d && u == null) {
      const h = R.map((w) => T(w).replace(/\n.*/g, "")), L = h.length ? h.reduce((w, y) => w + y.length, 0) / h.length : 0;
      j = Math.max(12, Math.round(L * 6 + 4));
    }
    const _ = X.useMemo(() => {
      if (a && Array.isArray(a) || j <= 0) return R;
      const h = [];
      let L = -1 / 0;
      for (const w of R) {
        const y = b(w);
        y - L >= j && (h.push(w), L = y);
      }
      return h;
    }, [R, p, j, a, N, k]);
    return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${D})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ n.jsx("line", { x1: 0, x2: x.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      _.map((h, L) => {
        const w = T(h), y = c && w.length > c ? w.slice(0, Math.max(1, c - 1)) + "…" : w, C = m ? y.split(/\n/) : [y.replace(/\n/g, " ")], A = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ n.jsxs("g", { transform: `translate(${b(h)},0)`, children: [
          /* @__PURE__ */ n.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ n.jsxs("text", { y: 9, textAnchor: A, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            C.map((re, Y) => /* @__PURE__ */ n.jsx("tspan", { x: 0, dy: Y === 0 ? 0 : "1.1em", children: re }, Y)),
            y !== w && /* @__PURE__ */ n.jsx("title", { children: w })
          ] })
        ] }, h?.toString?.() || L);
      })
    ] });
  }
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    R.map((D, N) => {
      const k = T(D), b = c && k.length > c ? k.slice(0, Math.max(1, c - 1)) + "…" : k, j = m ? b.split(/\n/) : [b.replace(/\n/g, " ")];
      return /* @__PURE__ */ n.jsxs("g", { transform: `translate(0,${p(D)})`, children: [
        /* @__PURE__ */ n.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ n.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          j.map((_, h) => /* @__PURE__ */ n.jsx("tspan", { x: -9, dy: h === 0 ? 0 : "1.1em", children: _ }, h)),
          b !== k && /* @__PURE__ */ n.jsx("title", { children: k })
        ] })
      ] }, D?.toString?.() || N);
    }),
    o && /* @__PURE__ */ n.jsx("text", { transform: "rotate(-90)", x: -x.innerHeight / 2, y: -x.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: o })
  ] });
}, Xp = ({
  axis: e = "y",
  tickCount: t,
  stroke: r = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: s
}) => {
  const o = ln(), i = qt();
  if (!o || !i) return null;
  const l = e === "y" ? o.getYTicks(t) : o.getXTicks(t);
  return /* @__PURE__ */ n.jsxs("g", { className: ["fdp-grid", s].filter(Boolean).join(" "), children: [
    e === "y" && l.map((u, c) => /* @__PURE__ */ n.jsx("line", { x1: 0, x2: i.innerWidth, y1: o.yScale(u), y2: o.yScale(u), stroke: r, strokeDasharray: a }, c)),
    e === "x" && l.map((u, c) => /* @__PURE__ */ n.jsx("line", { y1: 0, y2: i.innerHeight, x1: o.xScale(u), x2: o.xScale(u), stroke: r, strokeDasharray: a }, c))
  ] });
}, Kp = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Vn = {
  color: Kp
}, Jp = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Kr = {
  color: Jp
}, Zp = [
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
let ja = null, Na = null, Ta = null, Ji = "optimized";
function Qp() {
  const e = { color: { ...Kr.color, ...Vn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    if (typeof i == "string" && /^\{.+\}$/.test(i))
      return t(i.slice(1, -1), s);
    if (typeof i == "string") return i;
  }, r = [];
  try {
    for (let a = 1; a <= 12; a++) {
      const s = `color.data-viz.categorical.${a}`, o = t(s);
      if (!o) throw new Error(`Missing token ${s}`);
      r.push(o);
    }
    return r;
  } catch {
    return Zp;
  }
}
function eh() {
  return ja || (ja = Qp()), ja;
}
function th(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Da(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function nh(e, t, r) {
  const a = Da(e), s = Da(t), o = Da(r), i = a * 0.4124 + s * 0.3576 + o * 0.1805, l = a * 0.2126 + s * 0.7152 + o * 0.0722, u = a * 0.0193 + s * 0.1192 + o * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function rh(e, t, r) {
  let i = e / 95.047, l = t / 100, u = r / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function Zi(e) {
  const t = th(e);
  if (!t) return null;
  const r = nh(t.r, t.g, t.b);
  return rh(r.x, r.y, r.z);
}
function Ho(e, t) {
  const r = e.L - t.L, a = e.a - t.a, s = e.b - t.b;
  return Math.sqrt(r * r + a * a + s * s);
}
function ah() {
  const e = eh();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => Zi(i));
  let r = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let u = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (u += Ho(l, t[f]), c++);
    const d = u / Math.max(1, c);
    d > a && (a = d, r = i);
  }
  const s = new Set(e.map((i, l) => l)), o = [];
  for (o.push(r), s.delete(r); s.size; ) {
    let i = Array.from(s)[0], l = -1;
    for (const u of s) {
      const c = t[u];
      if (!c) continue;
      let d = 1 / 0;
      for (const f of o) {
        const m = t[f];
        if (m) {
          const v = Ho(c, m);
          v < d && (d = v);
        }
      }
      d > l && (l = d, i = u);
    }
    o.push(i), s.delete(i);
  }
  return o.map((i) => e[i]);
}
function sh() {
  return Na || (Na = ah()), Na;
}
function oh(e, t, r) {
  const a = (e + 16) / 116, s = t / 500 + a, o = a - r / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(s) * 95.047, u = i(a) * 100, c = i(o) * 108.883;
  return { X: l, Y: u, Z: c };
}
function ih(e, t, r) {
  e /= 100, t /= 100, r /= 100;
  let a = e * 3.2406 + t * -1.5372 + r * -0.4986, s = e * -0.9689 + t * 1.8758 + r * 0.0415, o = e * 0.0557 + t * -0.204 + r * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), s = Math.min(1, Math.max(0, i(s))), o = Math.min(1, Math.max(0, i(o))), { r: Math.round(a * 255), g: Math.round(s * 255), b: Math.round(o * 255) };
}
function lh(e, t, r) {
  return `#${[e, t, r].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function ch(e, t) {
  const r = Zi(e);
  if (!r) return e;
  const a = Math.min(100, Math.max(0, r.L + t)), { X: s, Y: o, Z: i } = oh(a, r.a, r.b), l = ih(s, o, i);
  return lh(l.r, l.g, l.b);
}
function uh() {
  const e = sh(), r = [12, -12, 24, -24].map((s) => e.map((o) => ch(o, s))), a = [...e];
  return r.forEach((s) => a.push(...s)), a;
}
function dh() {
  return (!Ta || fh()) && (Ta = uh(), Qi = Ji), Ta;
}
let Qi = null;
function fh() {
  return Qi !== Ji;
}
function kt(e) {
  const t = dh();
  return t[e % t.length];
}
let xn = null, Bn = null, Hn = null, On = null;
function ph() {
  const e = Vn?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    xn = [];
    for (let o = 1; o <= 12; o++) {
      const i = t[String(o)]?.$value || t[String(o)]?.value;
      xn.push(typeof i == "string" ? i : "#212b32");
    }
    const r = e.region || {};
    Bn = {}, Object.keys(r).forEach((o) => {
      const i = r[o]?.$value || r[o]?.value;
      typeof i == "string" && (Bn[o] = i);
    });
    const a = e.severity || {}, s = e["org-level"] || {};
    On = {}, Object.keys(s).forEach((o) => {
      const i = s[o]?.$value || s[o]?.value;
      typeof i == "string" && (On[o] = i);
    }), Hn = {}, Object.keys(a).forEach((o) => {
      const i = a[o]?.$value || a[o]?.value;
      typeof i == "string" && (Hn[o] = i);
    });
  }
}
function Jr() {
  (!xn || !Bn || !Hn || !On) && ph();
}
function an(e) {
  return Jr(), xn ? xn[e % xn.length] : "#212b32";
}
function hh(e) {
  return Jr(), Bn ? Bn[e] : void 0;
}
function yr(e, t) {
  return hh(e) || an(t);
}
const qa = ["low", "moderate", "high", "critical"];
let $a = null;
function mh() {
  const e = { color: { ...Kr.color, ...Vn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return qa.forEach((a) => {
    const s = t(`color.data-viz.severity.${a}`);
    s && (r[a] = s);
  }), r;
}
function el() {
  return $a || ($a = mh()), $a;
}
function gh(e) {
  return el()[e.toLowerCase()];
}
function xh(e, t) {
  return gh(e) || el()[qa[t % qa.length]] || kt(t);
}
function bh(e) {
  return Jr(), Hn ? Hn[e] : void 0;
}
function yh(e, t) {
  return bh(e) || an(t);
}
const Xa = ["trust", "ambulance", "icb", "region"];
let Ia = null;
function vh() {
  const e = { color: { ...Kr.color, ...Vn.color } }, t = (a, s = /* @__PURE__ */ new Set()) => {
    if (s.has(a)) return;
    s.add(a);
    const o = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!o) return;
    const i = o.$value || o.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), s) : typeof i == "string" ? i : void 0;
  }, r = {};
  return Xa.forEach((a) => {
    const s = t(`color.data-viz.org-level.${a}`);
    s && (r[a] = s);
  }), r;
}
function tl() {
  return Ia || (Ia = vh()), Ia;
}
function wh(e) {
  return tl()[e.toLowerCase()];
}
function _h(e, t) {
  return wh(e) || tl()[Xa[t % Xa.length]] || kt(t);
}
function Sh(e) {
  return Jr(), On ? On[e] : void 0;
}
function kh(e, t) {
  return Sh(e) || an(t);
}
let Ma = null;
const Ch = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function jh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Nh() {
  const e = { color: { ...Kr.color, ...Vn.color } }, t = (s, o = /* @__PURE__ */ new Set()) => {
    if (o.has(s)) return;
    o.add(s);
    const i = s.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), o) : typeof l == "string" ? l : void 0;
  }, r = {}, a = [];
  return Ch.forEach((s) => {
    const o = t(`color.data-viz.region.${s}`);
    o ? r[s] = o : a.push(s);
  }), process.env.NODE_ENV !== "production" && (Object.keys(r).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), r;
}
function Th() {
  return Ma || (Ma = Nh()), Ma;
}
function Dh(e) {
  return Th()[jh(e)];
}
function bn(e, t) {
  return Dh(e) || kt(t);
}
const nl = X.createContext(null), Gn = () => X.useContext(nl), Ob = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: r,
  onChange: a
}) => {
  const [s, o] = X.useState(() => new Set(e)), i = r !== void 0, l = X.useMemo(() => i ? new Set(r) : s, [i, r, s]), u = X.useCallback((d) => {
    i || o(new Set(d)), a?.(Array.from(d));
  }, [i, a]), c = X.useMemo(() => ({
    hiddenIds: l,
    isHidden: (d) => l.has(d),
    toggle: (d) => {
      const f = new Set(l);
      f.has(d) ? f.delete(d) : f.add(d), u(f);
    },
    showOnly: (d) => {
      u(/* @__PURE__ */ new Set());
    },
    showAll: () => u(/* @__PURE__ */ new Set()),
    setHidden: (d) => u(new Set(Array.isArray(d) ? d : Array.from(d)))
  }), [l, u]);
  return /* @__PURE__ */ n.jsx(nl.Provider, { value: c, children: t });
}, rl = X.createContext(null), Wt = () => X.useContext(rl), $h = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: r = !1
}) => {
  const a = ln(), s = Gn(), [o, i] = X.useState(null), l = X.useRef(/* @__PURE__ */ new Map()), [u, c] = X.useState([]), d = X.useCallback(
    (N, k) => {
      l.current.set(N, k);
    },
    []
  ), f = X.useCallback((N) => {
    l.current.delete(N);
  }, []), m = X.useCallback(
    (N, k) => {
      if (!a) return;
      const { xScale: b, yScale: j } = a;
      let _ = null, h = 1 / 0;
      l.current.forEach((L, w) => {
        L.forEach((y, C) => {
          const A = b(y.x), re = j(y.y), Y = A - N, B = re - k, O = Math.sqrt(Y * Y + B * B);
          O < h && (h = O, _ = {
            seriesId: w,
            index: C,
            x: y.x,
            y: y.y,
            clientX: A,
            clientY: re
          });
        });
      }), _ && h <= t ? i(_) : i(null);
    },
    [a, t]
  ), v = X.useCallback(() => i(null), []);
  X.useEffect(() => {
    if (!o) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: N, yScale: k } = a, b = [];
    l.current.forEach((j, _) => {
      j.forEach((h, L) => {
        (o.x instanceof Date && h.x instanceof Date ? h.x.getTime() === o.x.getTime() : h.x === o.x) && b.push({
          seriesId: _,
          index: L,
          x: h.x,
          y: h.y,
          clientX: N(h.x),
          clientY: k(h.y)
        });
      });
    }), b.sort((j, _) => j.seriesId.localeCompare(_.seriesId)), c(b);
  }, [o, a]);
  const S = X.useCallback(
    (N) => {
      if (!o) return;
      const k = l.current.get(o.seriesId);
      if (!k) return;
      let b = o.index + N;
      if (b < 0 || b >= k.length) {
        if (!r) return;
        b = (b + k.length) % k.length;
      }
      const j = k[b];
      if (!a) return;
      const { xScale: _, yScale: h } = a;
      i({
        seriesId: o.seriesId,
        index: b,
        x: j.x,
        y: j.y,
        clientX: _(j.x),
        clientY: h(j.y)
      });
    },
    [o, a, r]
  ), x = X.useCallback(
    (N) => {
      let k = Array.from(l.current.keys());
      if (s && (k = k.filter((A) => !s.isHidden(A))), k.length === 0) return;
      if (!o) {
        const A = k[0], re = l.current.get(A);
        if (!re || !a) return;
        const { xScale: Y, yScale: B } = a, O = re[0];
        i({
          seriesId: A,
          index: 0,
          x: O.x,
          y: O.y,
          clientX: Y(O.x),
          clientY: B(O.y)
        });
        return;
      }
      const b = k.indexOf(o.seriesId);
      if (b === -1) return;
      let j = b + N;
      if (j < 0 || j >= k.length) {
        if (!r) return;
        j = (j + k.length) % k.length;
      }
      const _ = k[j], h = l.current.get(_);
      if (!h || !a) return;
      const L = Math.min(o.index, h.length - 1), w = h[L], { xScale: y, yScale: C } = a;
      i({
        seriesId: _,
        index: L,
        x: w.x,
        y: w.y,
        clientX: y(w.x),
        clientY: C(w.y)
      });
    },
    [o, a, r, s]
  ), p = X.useCallback(() => {
    let N = Array.from(l.current.keys());
    if (s && (N = N.filter((L) => !s.isHidden(L))), N.length === 0) return;
    const k = o ? o.seriesId : N[0], b = l.current.get(k);
    if (!b || b.length === 0 || !a) return;
    const j = b[0], { xScale: _, yScale: h } = a;
    i({
      seriesId: k,
      index: 0,
      x: j.x,
      y: j.y,
      clientX: _(j.x),
      clientY: h(j.y)
    });
  }, [o, a, s]), g = X.useCallback(() => {
    let N = Array.from(l.current.keys());
    if (s && (N = N.filter((w) => !s.isHidden(w))), N.length === 0) return;
    const k = o ? o.seriesId : N[0], b = l.current.get(k);
    if (!b || b.length === 0 || !a) return;
    const j = b.length - 1, _ = b[j], { xScale: h, yScale: L } = a;
    i({
      seriesId: k,
      index: j,
      x: _.x,
      y: _.y,
      clientX: h(_.x),
      clientY: L(_.y)
    });
  }, [o, a, s]), I = X.useCallback(
    () => S(1),
    [S]
  ), M = X.useCallback(
    () => S(-1),
    [S]
  ), T = X.useCallback(
    () => x(1),
    [x]
  ), R = X.useCallback(
    () => x(-1),
    [x]
  ), D = X.useMemo(
    () => ({
      focused: o,
      setFocused: i,
      aggregated: u,
      focusNearest: m,
      clear: v,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: I,
      focusPrevPoint: M,
      focusNextSeries: T,
      focusPrevSeries: R,
      focusFirstPoint: p,
      focusLastPoint: g
    }),
    [
      o,
      u,
      m,
      v,
      d,
      f,
      I,
      M,
      T,
      R,
      p,
      g
    ]
  );
  return /* @__PURE__ */ n.jsx(rl.Provider, { value: D, children: e });
}, Ih = ({
  series: e,
  seriesIndex: t,
  palette: r,
  showPoints: a,
  focusablePoints: s,
  focusIndex: o,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: u = 1,
  smooth: c = !0,
  gradientFillId: d,
  colors: f
}) => {
  const m = ln();
  if (!m) return null;
  const { xScale: v, yScale: S } = m, p = Gn()?.isHidden(e.id) ?? !1, g = p && l === "fade";
  if (p && l === "remove")
    return null;
  const I = Wt();
  X.useEffect(() => {
    if (!I) return;
    const k = e.data.map((b) => ({ x: i(b), y: b.y }));
    return I.registerSeries(e.id, k), () => I.unregisterSeries(e.id);
  }, [I, e.id, e.data, i]);
  const M = X.useMemo(
    () => Ya(
      e.data,
      (k) => v(i(k)),
      (k) => S(k.y),
      { smooth: c }
    ),
    [e.data, v, S, i, c]
  ), T = X.useMemo(() => {
    if (!e.data.length) return "";
    const [k] = S.domain(), b = Ga().x((j) => v(i(j))).y0(() => S(k)).y1((j) => S(j.y));
    return c && b.curve(br), b(e.data) || "";
  }, [e.data, v, S, i, c]), R = f && f[t], D = e.color || R || (r === "region" ? bn(e.id, t) : kt(t)), N = r === "region" ? yr(e.id, t) : an(t);
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "path",
          {
            d: T,
            fill: `url(#${d})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: M,
            fill: "none",
            stroke: D,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((k, b) => {
          const j = v(i(k)), _ = S(k.y), h = s ? 0 : -1, L = !g && (s && b === o || I?.focused?.seriesId === e.id && I.focused.index === b), w = () => {
            I && !g && I.setFocused({
              seriesId: e.id,
              index: b,
              x: i(k),
              y: k.y,
              clientX: j,
              clientY: _
            });
          }, y = () => {
            I && I.focused?.seriesId === e.id && I.focused.index === b && I.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: j,
              cy: _,
              r: L ? 5 : 3.5,
              stroke: L ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : N,
              strokeWidth: L ? 2 : 1,
              fill: L ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : D,
              className: "fdp-line-point",
              tabIndex: g ? -1 : h,
              "aria-label": `${e.label || e.id} ${i(k).toDateString()} value ${k.y}`,
              "data-series": e.id,
              "data-index": b,
              onMouseEnter: w,
              onFocus: w,
              onMouseLeave: y,
              onBlur: y
            },
            b
          );
        })
      ]
    }
  );
}, Mh = ({ polite: e = !0, format: t }) => {
  const r = Wt(), [a, s] = X.useState(""), o = X.useRef("");
  return X.useEffect(() => {
    if (!r?.focused) return;
    const { focused: i, aggregated: l } = r;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Lh(i.seriesId, i.x, i.y, i.index);
    if (u !== o.current) {
      o.current = u, s("");
      const c = setTimeout(() => s(u), 10);
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
function Lh(e, t, r, a) {
  const s = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${s}, value ${r}`;
}
const zb = () => {
  const e = Wt(), t = qt();
  if (!e || !t || !e.focused) return null;
  const { focused: r, aggregated: a } = e, { innerWidth: s, innerHeight: o } = t, i = Math.min(Math.max(r.clientX, 0), s), l = Math.min(Math.max(r.clientY, 0), o), u = i + 8, c = l - 8, d = a.length > 1, f = r.x instanceof Date ? r.x.toDateString() : String(r.x), m = d ? f : `${f} • ${r.y}`, v = /\d+$/.exec(r.seriesId || ""), S = v ? parseInt(v[0], 10) - 1 : 0, x = kt(S >= 0 ? S : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ n.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ n.jsx("circle", { cx: i, cy: l, r: 2.5, fill: x, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const I = a.map((N) => `${N.seriesId}: ${N.y}`), M = [m, ...I], T = M.reduce((N, k) => Math.max(N, k.length), 0), R = Math.max(90, T * 6.2 + 16), D = 16 * M.length + 8;
      return /* @__PURE__ */ n.jsxs("g", { children: [
        /* @__PURE__ */ n.jsx("rect", { x: u, y: c - D, rx: 4, ry: 4, width: R, height: D, fill: "#212b32", opacity: 0.92 }),
        M.map((N, k) => /* @__PURE__ */ n.jsx("text", { x: u + 8, y: c - D + 6 + 16 * (k + 0.7), fill: "#fff", fontSize: 12, children: N }, k))
      ] });
    })() : /* @__PURE__ */ n.jsxs("g", { children: [
      /* @__PURE__ */ n.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ n.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, Wb = ({
  items: e,
  palette: t = "categorical",
  direction: r = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: s = !0,
  hiddenIds: o,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: u
}) => {
  const c = Gn(), d = !!(c && !a && !l && o === void 0), f = a || d, m = e || [], v = o !== void 0, [S, x] = X.useState(new Set(i)), p = v ? new Set(o) : S, [g, I] = X.useState(""), M = (T) => {
    if (d && c) {
      const h = c.isHidden(T);
      c.toggle(T);
      const w = m.find((C) => C.id === T)?.label || T, y = u ? u(T, h, w) : `${w} ${h ? "shown" : "hidden"}`;
      I(y);
      return;
    }
    if (!f) return;
    const R = new Set(p), D = R.has(T);
    D ? R.delete(T) : R.add(T), v || x(R);
    const N = m.filter((h) => !R.has(h.id)).map((h) => h.id), k = Array.from(R);
    l?.(N, k);
    const j = m.find((h) => h.id === T)?.label || T, _ = u ? u(T, D, j) : `${j} ${D ? "shown" : "hidden"}`;
    I(_);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ n.jsx("ul", { className: `fdp-legend fdp-legend--${r}`, children: m.map((T, R) => {
      const D = T.palette || t, N = T.color || (D === "region" ? bn(T.id, R) : D === "severity" ? xh(T.id, R) : D === "org-level" ? _h(T.id, R) : kt(R));
      let k = T.stroke || (D === "region" ? yr(T.id, R) : D === "severity" ? yh(T.id, R) : D === "org-level" ? kh(T.id, R) : an(R));
      if (s && k) {
        const _ = k.trim().toLowerCase();
        (_ === "#fff" || _ === "#ffffff" || _ === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(_)) && (k = "#212b32");
      }
      const b = d && c ? c.isHidden(T.id) : p.has(T.id), j = f ? {
        "aria-pressed": !b,
        "aria-label": `${T.label} (${b ? "show" : "hide"})`,
        onClick: () => M(T.id)
      } : { "aria-label": T.label };
      return /* @__PURE__ */ n.jsxs("li", { className: `fdp-legend__item${b ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: N,
              backgroundImage: T.patternDataUrl ? `url(${T.patternDataUrl})` : void 0,
              backgroundSize: T.patternDataUrl ? "auto" : void 0,
              borderColor: k
            },
            ...j
          }
        ),
        /* @__PURE__ */ n.jsx("span", { className: "fdp-legend__label", children: T.label })
      ] }, T.id);
    }) }),
    f && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: g })
  ] });
}, Ub = ({
  series: e,
  seriesIndex: t,
  palette: r,
  parseX: a,
  areaOnly: s = !1,
  visibilityMode: o = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: u,
  gradientFill: c = !0,
  colors: d
}) => {
  const f = ln();
  if (!f) return null;
  const { xScale: m, yScale: v } = f, x = Gn()?.isHidden(e.id) ?? !1, p = x && o === "fade";
  if (x && o === "remove") return null;
  const g = Wt();
  X.useEffect(() => {
    if (!g) return;
    const N = e.data.map((k) => ({ x: a(k), y: k.y }));
    return g.registerSeries(e.id, N), () => g.unregisterSeries(e.id);
  }, [g, e.id, e.data, a]);
  const I = d && d[t], M = e.color || I || (r === "region" ? bn(e.id, t) : kt(t)), T = X.useMemo(() => u && u.length === e.data.length ? Ya(
    e.data,
    (N) => m(a(N)),
    (N) => {
      const k = e.data.indexOf(N);
      return v(u[k].y1);
    },
    { smooth: l }
  ) : Ya(
    e.data,
    (N) => m(a(N)),
    (N) => v(N.y),
    { smooth: l }
  ), [e.data, u, m, v, a, l]), R = X.useMemo(() => {
    if (u && u.length === e.data.length) {
      const _ = Ga().x((h) => m(a(h))).y0((h, L) => v(u[L].y0)).y1((h, L) => v(u[L].y1));
      return l && _.curve(br), _(e.data) || "";
    }
    const [N, k] = v.domain();
    let b = i;
    b < N ? b = N : b > k && (b = k);
    const j = Ga().x((_) => m(a(_))).y0(() => v(b)).y1((_) => v(_.y));
    return l && j.curve(br), j(e.data) || "";
  }, [e.data, u, m, v, a, i, l]), D = X.useId();
  return /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: D, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: M, stopOpacity: 0.25 }),
          /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: M, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: R,
            fill: c ? `url(#${D})` : M,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !s && /* @__PURE__ */ n.jsx("path", { d: T, fill: "none", stroke: M, strokeWidth: 1 })
      ]
    }
  );
}, Vb = ({
  series: e,
  seriesIndex: t,
  seriesCount: r,
  palette: a,
  parseX: s,
  focusable: o = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: u,
  adaptive: c = !1,
  adaptiveGroupOccupancy: d = 0.9,
  visibilityMode: f = "remove",
  colorMode: m = "series",
  allSeries: v,
  stacked: S,
  gapRatio: x = 0.15,
  minBarWidth: p,
  gradientFill: g = !0,
  gradientStrokeMatch: I = !0,
  opacity: M = 1,
  fadedOpacity: T = 0.25,
  flatFillOpacity: R = 1,
  colors: D
}) => {
  const N = Math.max(0, x), k = ln(), b = qt();
  if (!k || !b) return null;
  const { xScale: j, yScale: _ } = k, L = Gn()?.isHidden(e.id) ?? !1, w = L && f === "fade";
  if (L && f === "remove") return null;
  const y = Wt();
  X.useEffect(() => {
    if (!y) return;
    const ee = e.data.map((se) => ({ x: s(se), y: se.y }));
    return y.registerSeries(e.id, ee), () => y.unregisterSeries(e.id);
  }, [y, e.id, e.data, s]);
  const C = typeof j.bandwidth == "function", A = C ? j.bandwidth() : void 0, re = X.useMemo(() => {
    if (A != null) return A;
    const ee = v && v.length ? v : [e], se = [];
    ee.forEach((F) => {
      F.data.forEach((W) => {
        const te = j(s(W));
        Number.isFinite(te) && se.push(te);
      });
    });
    const fe = se.sort((F, W) => F - W);
    if (fe.length <= 1) return 40;
    const q = [];
    for (let F = 1; F < fe.length; F++)
      q.push(fe[F] - fe[F - 1]);
    return q.sort((F, W) => F - W), (q[Math.floor(q.length / 2)] || 40) * i;
  }, [e.data, v, j, s, i, A]), { basePerBar: Y } = X.useMemo(() => {
    if (C) {
      const fe = re, q = Math.max(
        1,
        (fe - l * (r - 1)) / r
      ), $ = e.barWidth ?? u;
      let F = $ ? Math.min($, fe) : q;
      if (c) {
        const W = fe * Math.min(1, Math.max(0.05, d)), te = Math.max(
          1,
          (W - l * (r - 1)) / r
        );
        F = $ ? Math.min(F, te) : te;
      }
      return { basePerBar: F };
    }
    const ee = e.barWidth ?? u, se = Math.max(
      1,
      (re - l * (r - 1)) / r
    );
    if (c) {
      const fe = v && v.length ? v : [e], q = [];
      fe.forEach(
        (le) => le.data.forEach((me) => {
          const pe = j(s(me));
          Number.isFinite(pe) && q.push(pe);
        })
      ), q.sort((le, me) => le - me);
      const $ = [];
      for (let le = 1; le < q.length; le++)
        $.push(q[le] - q[le - 1]);
      $.sort((le, me) => le - me);
      const W = ($[Math.floor($.length / 2)] || re) * Math.min(1, Math.max(0.05, d)), te = Math.max(
        1,
        (W - l * (r - 1)) / r
      );
      return { basePerBar: ee ? Math.min(ee, te) : te };
    }
    return ee ? { basePerBar: Math.min(ee, se) } : { basePerBar: se };
  }, [
    C,
    re,
    l,
    r,
    u,
    e.barWidth,
    c,
    d,
    v,
    j,
    s
  ]), B = X.useMemo(() => {
    if (C) return [];
    const ee = [];
    return (v && v.length ? v : [e]).forEach(
      (fe) => fe.data.forEach((q) => {
        const $ = j(s(q));
        Number.isFinite($) && ee.push($);
      })
    ), ee.sort((fe, q) => fe - q), Array.from(new Set(ee));
  }, [C, v, e, j, s]), O = X.useMemo(() => {
    if (C)
      return [];
    if (!B.length) return [];
    if (B.length === 1)
      return [
        { center: B[0], left: 0, right: b.innerWidth }
      ];
    const ee = [];
    for (let se = 0; se < B.length; se++) {
      const fe = B[se], q = se === 0 ? 0 : (B[se - 1] + fe) / 2, $ = se === B.length - 1 ? b.innerWidth : (fe + B[se + 1]) / 2;
      ee.push({
        center: fe,
        left: Math.max(0, q),
        right: Math.min(b.innerWidth, $)
      });
    }
    return ee;
  }, [C, B, b.innerWidth]), z = X.useMemo(() => {
    if (C || !O.length)
      return;
    const ee = Math.min(1, Math.max(0.05, i)), se = O.map((W) => Math.max(2, W.right - W.left)), fe = se.map(
      (W) => Math.max(2, Math.min(W - 1, W * ee))
    );
    let q = Math.min(...fe);
    if (p)
      if (r <= 1) {
        const W = Math.min(...se.map((te) => te - 1));
        W >= p && q < p && (q = Math.min(W, p));
      } else {
        const W = Math.min(...se.map((J) => J - 1)), te = p * r + (r - 1) * (p * N);
        te <= W && q < te && (q = te);
      }
    if (r <= 1)
      return p && q < p && se.every((te) => te >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: q, barWidth: q };
    let $ = q / (r + (r - 1) * N);
    return $ < 1 && ($ = 1), p && $ < p && p * r + (r - 1) * (p * N) <= q && ($ = p), { groupWidth: $ * r + (r - 1) * ($ * N), barWidth: $ };
  }, [
    C,
    O,
    i,
    r,
    N,
    p
  ]), oe = D && D[t] ? D[t] : void 0, U = e.color || oe || (a === "region" ? bn(e.id, t) : kt(t)), ce = a === "region" ? yr(e.id, t) : an(t), we = I && (e.color || oe) ? U : ce, ue = Number.isFinite(_(0)) ? _(0) : _.range()[0], de = X.useId();
  return S && S.length === e.data.length ? /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: w ? T : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs(
          "linearGradient",
          {
            id: de,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: U,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ n.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: U,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((ee, se) => {
          const fe = s(ee), q = j(C ? ee.x : fe);
          let $, F;
          if (C)
            $ = re, F = q;
          else {
            const K = O.find(
              (Z) => Math.abs(Z.center - q) < 0.5
            );
            if (!K || !z)
              $ = Y, F = q - Y / 2;
            else {
              const { groupWidth: Z } = z;
              $ = Z;
              let P = q - Z / 2;
              P < K.left && (P = K.left), P + Z > K.right && (P = Math.max(K.left, K.right - Z)), F = P;
            }
          }
          const W = S[se], te = _(W.y0), J = _(W.y1), le = Math.min(te, J), me = Math.abs(J - te) || 1;
          if (!C && p && $ < p) {
            const K = O.find(
              (Z) => Math.abs(Z.center - q) < 0.5
            );
            if (K) {
              const Z = Math.max(2, K.right - K.left - 1), P = Math.min(Z, p);
              P > $ && ($ = P, F = Math.max(
                K.left,
                Math.min(K.right - $, q - $ / 2)
              ));
            }
          }
          const pe = !w && y?.focused?.seriesId === e.id && y.focused.index === se, E = () => {
            !y || w || y.setFocused({
              seriesId: e.id,
              index: se,
              x: fe,
              y: W.y1 - W.y0,
              clientX: F + $ / 2,
              clientY: le
            });
          }, V = () => {
            y?.focused?.seriesId === e.id && y.focused.index === se && y.clear();
          };
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: F,
              y: le,
              width: $,
              height: me,
              fill: g ? `url(#${de})` : U,
              ...g ? {} : { fillOpacity: R },
              stroke: pe ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : g && I ? U : void 0,
              strokeWidth: pe ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: w || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${fe instanceof Date ? fe.toDateString() : fe} value ${W.y1 - W.y0}`,
              onMouseEnter: E,
              onFocus: E,
              onMouseLeave: V,
              onBlur: V
            },
            se
          );
        })
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: w ? T : M,
      "aria-hidden": w ? !0 : void 0,
      children: [
        g && /* @__PURE__ */ n.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ n.jsxs(
            "linearGradient",
            {
              id: de,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: U, stopOpacity: 0.3 }),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: U,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: U,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          m === "category" && e.data.map((ee, se) => {
            const q = D && D[se] || (a === "region" ? bn(String(ee.x), se) : kt(se)), $ = `${de}-${se}`;
            return /* @__PURE__ */ n.jsxs(
              "linearGradient",
              {
                id: $,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: q, stopOpacity: 0.3 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "60%", stopColor: q, stopOpacity: 0.14 }),
                  /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: q, stopOpacity: 0.06 })
                ]
              },
              $
            );
          })
        ] }),
        e.data.map((ee, se) => {
          const fe = s(ee), q = j(C ? ee.x : fe);
          let $, F;
          if (C) {
            const ae = re;
            if (r <= 1)
              F = ae, $ = q;
            else {
              F = Math.max(
                1,
                ae / (r + (r - 1) * N)
              );
              const G = F * N, H = F * r + G * (r - 1);
              $ = q + (ae - H) / 2 + t * (F + G);
            }
          } else {
            const ae = O.find((G) => G.center === q);
            if (!ae || !z)
              F = Y, $ = q - Y / 2, p && F < p && (F = p, $ = q - F / 2);
            else {
              const { barWidth: G } = z;
              F = G;
              const H = r > 1 ? G * N : 0, ne = F * r + H * (r - 1);
              let he = q - ne / 2;
              he < ae.left && (he = ae.left), he + ne > ae.right && (he = Math.max(ae.left, ae.right - ne)), $ = he + t * (F + H);
            }
            if (p && F < p) {
              const G = O.find(
                (H) => Math.abs(H.center - q) < 0.5
              );
              if (G) {
                const H = Math.max(2, G.right - G.left - 1), ne = Math.min(H, p);
                if (ne > F)
                  if (r <= 1)
                    F = ne, $ = Math.max(
                      G.left,
                      Math.min(G.right - F, q - F / 2)
                    );
                  else {
                    const he = ne * N, ie = ne * r + he * (r - 1);
                    if (ie <= G.right - G.left - 1) {
                      F = ne;
                      const _e = ie;
                      let Se = q - _e / 2;
                      Se < G.left && (Se = G.left), Se + _e > G.right && (Se = Math.max(
                        G.left,
                        G.right - _e
                      )), $ = Se + t * (F + he);
                    }
                  }
              }
            }
          }
          const W = $ + F / 2, te = _(ee.y), J = Math.min(ue, te), le = Math.abs(ue - te), me = !w && y?.focused?.seriesId === e.id && y.focused.index === se, pe = () => {
            !y || w || y.setFocused({
              seriesId: e.id,
              index: se,
              x: fe,
              y: ee.y,
              clientX: W,
              clientY: te
            });
          }, E = () => {
            y?.focused?.seriesId === e.id && y.focused.index === se && y.clear();
          }, V = m === "category" && D ? D[se] : void 0, K = m === "category" ? V || (a === "region" ? bn(String(ee.x), se) : kt(se)) : U, Z = m === "category" ? `${de}-${se}` : de, P = g && I ? K : m === "category" ? a === "region" ? yr(String(ee.x), se) : an(se) : we, Q = me ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : P || K;
          return /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: $,
              y: J,
              width: F,
              height: le || 1,
              fill: g ? `url(#${Z})` : K,
              ...g ? {} : { fillOpacity: R },
              stroke: Q,
              strokeWidth: me ? 2 : 1,
              className: "fdp-bar",
              tabIndex: w || !o ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${fe instanceof Date ? fe.toDateString() : fe} value ${ee.y}`,
              onMouseEnter: pe,
              onFocus: pe,
              onMouseLeave: E,
              onBlur: E
            },
            se
          );
        })
      ]
    }
  );
}, Gb = ({
  series: e,
  innerWidth: t,
  innerHeight: r,
  paddingInner: a = 0.1,
  paddingOuter: s = 0.05,
  children: o,
  yTickCount: i = 5
}) => {
  const l = qt(), u = t ?? l?.innerWidth ?? 0, c = r ?? l?.innerHeight ?? 0, d = X.useMemo(() => e.flatMap((p) => p.data), [e]), f = X.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((g) => p.add(g.x)), Array.from(p);
  }, [d]), m = X.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), v = X.useMemo(
    () => ci().domain(f).range([0, u]).paddingInner(a).paddingOuter(s),
    [f, u, a, s]
  ), S = X.useMemo(
    () => ur().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), x = X.useMemo(
    () => ({
      xScale: v,
      yScale: S,
      getXTicks: () => f,
      getYTicks: (p = i) => S.ticks(p)
    }),
    [v, S, f, i]
  );
  return /* @__PURE__ */ n.jsx(Ls.Provider, { value: x, children: o });
}, Yb = ({
  title: e,
  description: t,
  source: r,
  table: a,
  className: s,
  id: o,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = X.useId(), c = o || u, d = t ? `${c}-desc` : void 0, f = r ? `${c}-src` : void 0, m = typeof window < "u" && !l;
  return /* @__PURE__ */ n.jsxs(
    "figure",
    {
      id: c,
      className: gr("fdp-chart fdp-chart--noscript", s),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": gr(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ n.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ n.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ n.jsx("p", { id: d, className: "fdp-chart__description", children: t }),
        !m && /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ n.jsx("noscript", { children: /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ n.jsx(zt, { ...a }) }) }),
          /* @__PURE__ */ n.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ n.jsx(zt, { ...a }) })
        ] }),
        r && /* @__PURE__ */ n.jsx("figcaption", { className: "fdp-chart__caption", children: r && /* @__PURE__ */ n.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          r
        ] }) })
      ]
    }
  );
}, qb = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: r = 0, children: a }) => {
  const s = X.useRef(null);
  return X.useEffect(() => {
    const o = s.current;
    if (!o) return;
    const i = () => {
      const l = Array.from(o.querySelectorAll(e));
      if (l.length === 0) return;
      const u = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), u.push(c));
      }), u.length && t && t(u);
    };
    if (r > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, r);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, r]), /* @__PURE__ */ n.jsx("div", { ref: s, children: a });
}, Fh = ({
  label: e,
  value: t,
  unit: r,
  delta: a,
  status: s = "neutral",
  variant: o = "default",
  subtitle: i,
  metadata: l,
  trendData: u,
  loading: c = !1,
  error: d,
  valueFormatter: f,
  className: m,
  style: v,
  id: S,
  announceDelta: x = !0,
  visual: p
}) => {
  const g = X.useId(), I = S || g, M = `${I}-label`, T = `${I}-value`, R = `${I}-delta`, D = typeof t == "number" && !Number.isNaN(t), N = c ? "—" : d ? "" : D ? f ? f(t) : t.toLocaleString() : t;
  let k, b = "", j = "";
  if (a && !c && !d) {
    k = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const _ = Math.abs(a.value), h = k === "up" ? `+${_}` : k === "down" ? `-${_}` : "0", L = a.isPercent ? "%" : "";
    if (b = `${h}${L}`, a.ariaLabel)
      j = a.ariaLabel;
    else {
      const w = a.invert ? k === "down" : k === "up";
      j = `${k === "neutral" ? "no change" : k === "up" ? "up" : "down"} ${_}${L}${k === "neutral" ? "" : w ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      className: gr(
        "fdp-metric-card",
        o && `fdp-metric-card--${o}`,
        s && `fdp-metric-card--status-${s}`,
        c && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        m
      ),
      style: v,
      role: "group",
      "aria-labelledby": M,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ n.jsx("h3", { id: M, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ n.jsx("div", { id: T, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__number", children: N }),
              r && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__unit", children: r })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ n.jsxs(
            "div",
            {
              id: R,
              "aria-label": j,
              className: gr(
                "fdp-metric-card__delta",
                k && `fdp-metric-card__delta--${k}`
              ),
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-value", children: b }),
                a.period && /* @__PURE__ */ n.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          u && u.length > 0 && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        x && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ n.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: j })
      ] })
    }
  );
};
let Ka = null;
try {
  Ka = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Oe = (e, t) => {
  if (!Ka) return t;
  const r = e.split(".");
  let a = Ka;
  for (const o of r) {
    if (a == null) break;
    a = a[o];
  }
  const s = a;
  return s == null ? t : typeof s == "string" || typeof s == "number" ? String(s) : s.$value != null ? String(s.$value) : s.value != null ? String(s.value) : t;
}, Zr = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Oe("gradient.stop.start-opacity", "0.12"),
  mid: Oe("gradient.stop.mid-opacity", "0.03"),
  end: Oe("gradient.stop.end-opacity", "0"),
  triStart: Oe(
    "gradient.stop.triangle-start-opacity",
    Oe("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Oe(
    "gradient.stop.triangle-mid-opacity",
    Oe("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Oe(
    "gradient.stop.triangle-end-opacity",
    Oe("gradient.stop.end-opacity", "0")
  )
});
var _t = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(_t || {}), Ne = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Ne || {}), $e = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))($e || {}), it = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(it || {});
const Fs = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
], Oo = Fs.reduce(
  (e, t, r) => (e[t] = r + 1, e),
  {}
), Ph = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, Ah = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, vr = Fs.reduce(
  (e, t, r) => (e[t] = {
    id: t,
    rank: r + 1,
    label: Ph[t],
    category: Ah[t],
    participatesInRanking: !0
  }, e),
  {}
);
Fs.map(
  (e) => vr[e]
);
var Qe = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(Qe || {}), ct = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ct || {}), Je = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(Je || {}), ht = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(ht || {}), tr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(tr || {}), al = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(al || {}), xt = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(xt || {}), Ps = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))(Ps || {}), Ln = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Ln || {});
const yn = {
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
function Qr(e) {
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
function ea(e) {
  switch (e) {
    case $e.Improvement:
      return "Improvement signal";
    case $e.Concern:
      return "Concern signal";
    case $e.Neither:
      return "Common cause variation";
    case $e.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function sl(e) {
  switch (e) {
    case Je.Pass:
      return "Target met";
    case Je.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Eh(e, t, r) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((r - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const bt = {
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
function ol(e) {
  return e ? bt[e]?.token ?? bt.neither.token : bt.neither.token;
}
function Rh(e) {
  return e ? bt[e]?.hex ?? bt.neither.hex : bt.neither.hex;
}
var Yt = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(Yt || {});
const Bh = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, Hh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ye = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ye || {}), Te = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Te || {}), ut = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(ut || {}), Ce = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ce || {});
const Oh = (e) => {
  const t = e.replace("#", ""), r = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, s = parseInt(t.slice(4, 6), 16) / 255, o = [r, a, s].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2] < 0.55 ? "#ffffff" : "#212b32";
}, ta = {
  special_cause_deteriorating: {
    hex: bt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: bt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: bt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: bt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(ta).forEach((e) => {
  e.text || (e.text = Oh(e.hex));
});
const As = (e) => ta[e], na = (e) => ta[e].judgement || "none", zo = {
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
function zh(e, t) {
  let r;
  return e === "common_cause" ? r = zo.common : r = zo.special[t === "lower" ? "lower" : "higher"], r.map((a) => ({ ...a }));
}
var He = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(He || {}), en = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(en || {}), zn = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(zn || {});
const il = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Ne.Up ? Ye.HigherIsBetter : i.improvementDirection === Ne.Down ? Ye.LowerIsBetter : Ye.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case $e.Improvement:
        u = Ce.SpecialCauseImproving;
        break;
      case $e.Concern:
        u = Ce.SpecialCauseDeteriorating;
        break;
      case $e.Neither:
        u = i.specialCauseNeutral ? Ce.SpecialCauseNoJudgement : Ce.CommonCause;
        break;
      case $e.Suppressed:
      default:
        u = Ce.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === Ce.SpecialCauseImproving ? c = l === Ye.LowerIsBetter ? Te.Lower : Te.Higher : u === Ce.SpecialCauseDeteriorating ? c = l === Ye.LowerIsBetter ? Te.Higher : Te.Lower : u === Ce.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Te.Higher : i.lowSideSignal && !i.highSideSignal ? c = Te.Lower : c = Te.Higher : c = Te.Higher), { state: u, direction: c, polarity: l ?? Ye.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ce.SpecialCauseImproving || i.state === Ce.SpecialCauseDeteriorating) && i.polarity && (i.state === Ce.SpecialCauseImproving ? l = i.polarity === Ye.LowerIsBetter ? Te.Lower : Te.Higher : l = i.polarity === Ye.LowerIsBetter ? Te.Higher : Te.Lower), l || (i.state === Ce.SpecialCauseImproving ? l = Te.Higher : i.state === Ce.SpecialCauseDeteriorating ? l = Te.Lower : l = Te.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ye.ContextDependent
    };
  }
  const r = e;
  t();
  const s = {
    [ut.Improving]: Ce.SpecialCauseImproving,
    [ut.Deteriorating]: Ce.SpecialCauseDeteriorating,
    [ut.No_Judgement]: Ce.SpecialCauseNoJudgement,
    [ut.None]: Ce.CommonCause
  }[r.judgement];
  let o;
  return r.judgement === ut.Improving ? o = r.polarity === Ye.LowerIsBetter ? Te.Lower : Te.Higher : r.judgement === ut.Deteriorating ? o = r.polarity === Ye.LowerIsBetter ? Te.Higher : Te.Lower : o = r.trend ?? Te.Higher, { state: s, direction: o, polarity: r.polarity };
};
function ll(e, t) {
  const { state: r, direction: a, polarity: s } = il(e), o = na(r), i = a === Te.Higher ? "above" : "below", l = a === Te.Higher ? "upwards" : "downwards", u = (() => {
    switch (s) {
      case Ye.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Ye.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (o) {
        case ut.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case ut.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case ut.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case ut.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    u,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const La = (e, t, r, a, s, o) => /* @__PURE__ */ n.jsxs("defs", { children: [
  a && /* @__PURE__ */ n.jsxs("filter", { id: t, filterUnits: "objectBoundingBox", children: [
    /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
    /* @__PURE__ */ n.jsx("feOffset", { dx: "0", dy: "15", result: "blur" }),
    /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
    /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
    /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
  ] }),
  s && /* @__PURE__ */ n.jsx("linearGradient", { id: r, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: o.map((i) => /* @__PURE__ */ n.jsx(
    "stop",
    {
      offset: i.offset,
      stopColor: e,
      stopOpacity: parseFloat(i.opacity)
    },
    i.offset
  )) })
] }), ra = ({
  data: e,
  size: t = 44,
  ariaLabel: r,
  showLetter: a = !0,
  dropShadow: s = !0,
  gradientWash: o = !1,
  variant: i = en.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = zn.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = nr(), m = nr(), {
    start: v,
    mid: S,
    end: x,
    triStart: p,
    triMid: g,
    triEnd: I
  } = Zr(), { state: M, direction: T, polarity: R } = De(
    () => il(e),
    [e]
  ), D = De(() => As(M), [M]), N = De(() => na(M), [M]), k = N === ut.Improving || N === ut.Deteriorating;
  let b = "";
  a && k && (u === zn.Polarity ? R === Ye.HigherIsBetter ? b = "H" : R === Ye.LowerIsBetter ? b = "L" : b = "" : b = T === Te.Higher ? "H" : "L"), c !== void 0 && (b = c);
  const j = M !== Ce.CommonCause, _ = M === Ce.SpecialCauseNoJudgement, h = Oe("common-cause", "#A6A6A6"), L = j ? D.hex : h, w = De(
    () => zh(M, T),
    [M, T]
  ), y = r || `${D.label}${b ? T === Te.Higher ? " – Higher" : " – Lower" : ""}`, C = ll(
    e
  );
  if (i === en.TriangleWithRun) {
    const O = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], z = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let oe = null;
    M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating ? oe = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (T === Te.Higher ? O : z).map(($) => $.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 6,
        transform: T === Te.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : M === Ce.SpecialCauseNoJudgement && (oe = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: T === Te.Higher ? O.map(($) => $.join(",")).join(" ") : z.map(($) => $.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 6,
        transform: T === Te.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const U = Math.max(0, Math.min(5, Math.floor(l || 0))), ce = M === Ce.CommonCause ? 160 : T === Te.Higher ? 220 : 70, we = 10, ue = 26, de = 150 - 2 * ue, ee = M === Ce.SpecialCauseImproving ? Oe("improvement", "#00B0F0") : M === Ce.SpecialCauseDeteriorating ? Oe("concern", "#E46C0A") : h, se = Array.from({ length: 5 }).map(($, F) => {
      const te = (M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating) && F >= 5 - U ? ee : h;
      return /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: de + F * ue,
          cy: ce,
          r: we,
          fill: te,
          stroke: te,
          strokeWidth: 1
        },
        F
      );
    }), fe = La(
      D.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: g },
        { offset: "100%", opacity: I }
      ]
    ), q = M === Ce.CommonCause || T === Te.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": y,
        "aria-description": C,
        ...d,
        children: [
          fe,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${m})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: D.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsxs("g", { transform: q, children: [
            oe,
            b && /* @__PURE__ */ n.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: T === Te.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: b
              }
            ),
            se
          ] })
        ]
      }
    );
  }
  if (i === en.Triangle) {
    const O = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], z = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], oe = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let U = null;
    M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating ? U = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: (T === Te.Higher ? O : z).map((we) => we.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 8,
        transform: T === Te.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : M === Ce.SpecialCauseNoJudgement ? U = /* @__PURE__ */ n.jsx(
      "polygon",
      {
        points: T === Te.Higher ? O.map((we) => we.join(",")).join(" ") : z.map((we) => we.join(",")).join(" "),
        fill: D.hex,
        stroke: D.hex,
        strokeWidth: 8,
        transform: T === Te.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : M === Ce.CommonCause && (U = /* @__PURE__ */ n.jsx(
      "line",
      {
        x1: oe[0][0],
        y1: oe[0][1],
        x2: oe[1][0],
        y2: oe[1][1],
        stroke: D.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const ce = La(
      D.hex,
      f,
      m,
      s,
      o,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: g },
        { offset: "100%", opacity: I }
      ]
    );
    return /* @__PURE__ */ n.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": y,
        "aria-description": C,
        ...d,
        children: [
          ce,
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: "none",
              fill: o ? `url(#${m})` : "#ffffff",
              ...s ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "circle",
            {
              stroke: D.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          U,
          b && (M === Ce.SpecialCauseImproving || M === Ce.SpecialCauseDeteriorating) && /* @__PURE__ */ n.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: T === Te.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: b
            }
          )
        ]
      }
    );
  }
  const A = La(
    D.hex,
    f,
    m,
    s,
    o,
    [
      { offset: "0%", opacity: v },
      { offset: "65%", opacity: S },
      { offset: "100%", opacity: x }
    ]
  );
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": y,
      "aria-description": C,
      ...d,
      children: [
        A,
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${m})` : "#ffffff",
            ...s ? { filter: `url(#${f})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: D.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        b && /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: D.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ n.jsx("tspan", { x: "120", y: T === Te.Lower ? "340" : "155", children: b })
          }
        ),
        _ ? /* @__PURE__ */ n.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: D.hex,
            ...T === Te.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          w.length === 5 && /* @__PURE__ */ n.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: h,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${w.map((re) => `${re.cx} ${re.cy}`).join(" L ")}`
            }
          ),
          w.map((re, Y) => {
            const O = Y >= w.length - 2 && j ? L : h, z = O;
            return /* @__PURE__ */ n.jsx(
              "circle",
              {
                stroke: z,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: O,
                cx: re.cx,
                cy: re.cy,
                r: 16
              },
              Y
            );
          })
        ] })
      ]
    }
  );
};
ra.displayName = "SPCVariationIcon";
const Wh = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function Uh(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function Vh(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const r = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), s = a >= 0 ? e.length - 1 - a : null, o = s != null ? e[s].value : null;
  return { mean: r, latestValue: o, latestIndex: s };
}
function Gh(e) {
  switch (e) {
    case Ce.SpecialCauseImproving:
      return Oe("improvement", "#00B0F0");
    case Ce.SpecialCauseDeteriorating:
      return Oe("concern", "#E46C0A");
    case Ce.SpecialCauseNoJudgement:
      return Oe("no-judgement", "#490092");
    case Ce.CommonCause:
      return Oe("common-cause", "#A6A6A6");
    default:
      return Oe("common-cause", "#A6A6A6");
  }
}
const cl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: r = 13,
  showMean: a = !0,
  showLimits: s = !0,
  showLimitBand: o = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: u = !0,
  variationState: c,
  autoClassify: d = !1,
  metricImprovement: f,
  gradientWash: m = !1,
  size: v = "sm",
  ariaLabel: S,
  className: x,
  onPointClick: p,
  onClassification: g,
  maxPoints: I,
  thinningStrategy: M = "stride",
  colorPointsBySignal: T = !0,
  centerLine: R,
  controlLimits: D,
  sigmaBands: N,
  pointSignals: k,
  pointNeutralSpecialCause: b
}) => {
  const j = f, _ = De(
    () => Uh(e, t),
    [e, t]
  ), h = De(() => Vh(_), [_]), L = Wh[v], w = Math.max(_.length * 6, 60), y = L.height, C = 4, A = 2, re = De(() => (e?.length ?? 0) - (_?.length ?? 0), [e?.length, _?.length]), B = _.filter((E) => E.value != null).map((E) => E.value), O = R ?? h.mean, z = De(() => {
    if (O == null) return null;
    const E = [];
    if (N?.upperOne != null && E.push(Math.abs(N.upperOne - O)), N?.lowerOne != null && E.push(Math.abs(O - N.lowerOne)), E.length) return E.reduce((K, Z) => K + Z, 0) / E.length;
    const V = [];
    return D?.upper != null && V.push(Math.abs(D.upper - O) / 3), D?.lower != null && V.push(Math.abs(O - D.lower) / 3), V.length ? V.reduce((K, Z) => K + Z, 0) / V.length : null;
  }, [N?.upperOne, N?.lowerOne, D?.upper, D?.lower, O]), oe = De(() => {
    if (z != null || !B.length || O == null || B.length < 2) return null;
    const E = [];
    for (let K = 1; K < B.length; K++) {
      const Z = B[K - 1], P = B[K];
      Z != null && P != null && E.push(Math.abs(P - Z));
    }
    return E.length ? E.reduce((K, Z) => K + Z, 0) / E.length / 1.128 : null;
  }, [z, B.join(","), O]), U = z ?? oe, ce = De(() => {
    if (!s) return null;
    if (D) return D;
    if (O == null || U == null) return null;
    const E = 3 * U;
    return { lower: O - E, upper: O + E };
  }, [s, O, U, D?.lower, D?.upper]), we = De(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: h.mean,
        stdDev: U
      };
    if (!d || !U || U === 0 || O == null || h.latestValue == null)
      return {
        state: Ce.CommonCause,
        firedRules: [],
        mean: h.mean,
        stdDev: U
      };
    const E = [], V = h.latestValue, K = D?.upper ?? (U != null && O != null ? O + 3 * U : null), Z = D?.lower ?? (U != null && O != null ? O - 3 * U : null);
    K != null && Z != null && (V > K || V < Z) && E.push("point-beyond-3sigma");
    const P = B.slice(-8);
    if (P.length === 8) {
      const H = P.every((he) => he > O), ne = P.every((he) => he < O);
      (H || ne) && E.push("eight-point-run");
    }
    const Q = B.slice(-5);
    if (Q.length === 5) {
      const H = Q.every((_e, Se, xe) => Se === 0 || _e >= xe[Se - 1]), ne = Q.every((_e, Se, xe) => Se === 0 || _e <= xe[Se - 1]), he = N?.upperOne ?? (U != null && O != null ? O + U : null), ie = N?.lowerOne ?? (U != null && O != null ? O - U : null);
      H && he != null && Q[Q.length - 1] > he && E.push("five-point-trend"), ne && ie != null && Q[Q.length - 1] < ie && E.push("five-point-trend");
    }
    const ae = B.slice(-3);
    if (ae.length === 3 && (U != null || N)) {
      const H = N?.upperTwo ?? (O != null && U != null ? O + 2 * U : null), ne = N?.lowerTwo ?? (O != null && U != null ? O - 2 * U : null);
      if (H != null && ne != null) {
        const he = ae.filter((_e) => _e > H).length, ie = ae.filter((_e) => _e < ne).length;
        he >= 2 && E.push("two-of-three-near-limit"), ie >= 2 && E.push("two-of-three-near-limit");
      }
    }
    let G = Ce.CommonCause;
    if (E.includes("point-beyond-3sigma") ? G = V > O ? Ce.SpecialCauseImproving : Ce.SpecialCauseDeteriorating : (E.includes("eight-point-run") || E.includes("five-point-trend") || E.includes("two-of-three-near-limit")) && (G = B[B.length - 1] > O ? Ce.SpecialCauseImproving : Ce.SpecialCauseDeteriorating), d && !c && E.length === 1 && E[0] === "point-beyond-3sigma") {
      const H = B.slice(-9, -1);
      if (H.length >= 5) {
        const ne = H.filter((ie) => ie > O).length, he = H.filter((ie) => ie < O).length;
        ne > 0 && he > 0 && (G = Ce.SpecialCauseNoJudgement);
      }
    }
    return {
      state: G,
      firedRules: E,
      mean: O,
      stdDev: U,
      side: h.latestValue != null && O != null ? h.latestValue > O ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    U,
    O,
    h.latestValue,
    B.join(",")
  ]);
  ft.useEffect(() => {
    d && !c && g && g(we);
  }, [we, d, c, g]);
  const ue = we.state, de = Gh(ue), ee = (E) => {
    const V = _.filter((Q) => Q.value != null);
    if (!V.length) return y / 2;
    const K = V.map((Q) => Q.value);
    ce && (ce.lower != null && K.push(ce.lower), ce.upper != null && K.push(ce.upper));
    const Z = Math.min(...K), P = Math.max(...K);
    return Z === P ? y / 2 : y - (E - Z) / (P - Z) * (y - A * 2) - A;
  }, se = De(() => {
    if (!I || _.length <= I)
      return _.map((ae, G) => G);
    if (M === "stride") {
      const ae = Math.max(2, I), G = (_.length - 1) / (ae - 1), H = /* @__PURE__ */ new Set();
      for (let ne = 0; ne < ae; ne++) H.add(Math.round(ne * G));
      return H.add(_.length - 1), Array.from(H).sort((ne, he) => ne - he);
    }
    const E = _.map((ae, G) => ({ i: G, v: ae.value }));
    function V(ae, G, H) {
      const ne = ae.i, he = ae.v ?? 0, ie = G.i, _e = G.v ?? 0, Se = H.i, xe = H.v ?? 0, Me = Math.abs((xe - _e) * ne - (Se - ie) * he + Se * _e - xe * ie), Be = Math.hypot(xe - _e, Se - ie);
      return Be === 0 ? 0 : Me / Be;
    }
    function K(ae, G) {
      if (ae.length <= 2) return ae;
      let H = -1, ne = -1;
      for (let he = 1; he < ae.length - 1; he++) {
        const ie = V(ae[he], ae[0], ae[ae.length - 1]);
        ie > H && (H = ie, ne = he);
      }
      if (H > G) {
        const he = K(ae.slice(0, ne + 1), G), ie = K(ae.slice(ne), G);
        return [...he.slice(0, -1), ...ie];
      }
      return [ae[0], ae[ae.length - 1]];
    }
    let Z = 0.1, P = E;
    for (let ae = 0; ae < 8 && (P = K(E, Z), !(P.length <= I)); ae++)
      Z *= 1.6;
    const Q = new Set(P.map((ae) => ae.i));
    return Q.add(0), Q.add(_.length - 1), Array.from(Q).sort((ae, G) => ae - G);
  }, [_, I, M]), fe = De(
    () => se.map((E) => _[E]),
    [se, _]
  ), q = De(() => {
    let E = "";
    return fe.forEach((V, K) => {
      if (V.value == null) return;
      const Z = ee(V.value), P = K / (fe.length - 1 || 1) * (w - C * 2) + C;
      E += E ? ` L ${P} ${Z}` : `M ${P} ${Z}`;
    }), E;
  }, [fe, w]), $ = h.latestIndex ?? -1, F = ce, W = Zr(), te = De(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [_.length, m]
  ), J = _.length >= (r || 0), le = S || "SPC sparkline", me = (() => {
    if (!ue) return;
    const E = j === Ne.Up ? Ye.HigherIsBetter : j === Ne.Down ? Ye.LowerIsBetter : Ye.ContextDependent, V = {
      variationIcon: ue === Ce.SpecialCauseImproving ? "improvement" : ue === Ce.SpecialCauseDeteriorating ? "concern" : ue === Ce.SpecialCauseNoJudgement ? "none" : "neither",
      trend: j === Ne.Up ? Te.Higher : Te.Lower,
      polarity: E
    };
    try {
      return ll(V);
    } catch {
      return;
    }
  })(), pe = De(() => {
    if (!J) return 10;
    const E = [..._].reverse().filter((K) => K.value != null).slice(0, 6).map((K) => ee(K.value));
    return E.length && E.reduce((K, Z) => K + Z, 0) / E.length < y / 2 ? y : 10;
  }, [_, J, y]);
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": le,
      "aria-description": me,
      width: w,
      height: y,
      className: x,
      viewBox: `0 0 ${w} ${y}`,
      children: [
        m && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          /* @__PURE__ */ n.jsx("defs", { children: /* @__PURE__ */ n.jsxs("linearGradient", { id: te, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: de,
                stopOpacity: Number(W.start)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: de,
                stopOpacity: Number(W.mid)
              }
            ),
            /* @__PURE__ */ n.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: de,
                stopOpacity: Number(W.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: w,
              height: y,
              fill: `url(#${te})`
            }
          )
        ] }),
        F && F.lower != null && F.upper != null && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          o && /* @__PURE__ */ n.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                ee(F.upper),
                ee(F.lower)
              ),
              width: w,
              height: Math.abs(
                ee(F.upper) - ee(F.lower)
              ),
              fill: de,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: w,
              y1: ee(F.lower),
              y2: ee(F.lower),
              stroke: de,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ n.jsx(
            "line",
            {
              x1: 0,
              x2: w,
              y1: ee(F.upper),
              y2: ee(F.upper),
              stroke: de,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          N && i && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
            N.lowerTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: ee(N.lowerTwo),
                y2: ee(N.lowerTwo),
                stroke: de,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            N.lowerOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: ee(N.lowerOne),
                y2: ee(N.lowerOne),
                stroke: de,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            N.upperOne != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: ee(N.upperOne),
                y2: ee(N.upperOne),
                stroke: de,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            N.upperTwo != null && /* @__PURE__ */ n.jsx(
              "line",
              {
                x1: 0,
                x2: w,
                y1: ee(N.upperTwo),
                y2: ee(N.upperTwo),
                stroke: de,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && h.mean != null && /* @__PURE__ */ n.jsx(
          "line",
          {
            x1: 0,
            x2: w,
            y1: ee(h.mean),
            y2: ee(h.mean),
            stroke: Oe("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "path",
          {
            d: q,
            fill: "none",
            stroke: Oe("common-cause", "#A6A6A6"),
            strokeWidth: L.stroke,
            strokeLinecap: "round"
          }
        ),
        se.map((E, V) => {
          const K = _[E];
          if (!K || K.value == null) return null;
          const Z = ee(K.value), P = V / (fe.length - 1 || 1) * (w - C * 2) + C, ae = (E === $ && l ? L.pointR + 1 : L.pointR) - 0.5;
          let G = Oe("common-cause", "#A6A6A6");
          if (T) {
            const H = k?.[re + E];
            if (H === "improvement")
              G = Oe("improvement", "#00B0F0");
            else if (H === "concern")
              G = Oe("concern", "#E46C0A");
            else if (b?.[re + E])
              G = Oe("no-judgement", "#490092");
            else if (O != null) {
              const he = K.value, ie = D?.upper ?? (U != null ? O + 3 * U : null), _e = D?.lower ?? (U != null ? O - 3 * U : null);
              ie != null && he > ie ? G = Oe("improvement", "#00B0F0") : _e != null && he < _e ? G = Oe("concern", "#E46C0A") : G = Oe("common-cause", "#A6A6A6");
            } else
              G = Oe("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ n.jsx(
            "circle",
            {
              cx: P,
              cy: Z,
              r: ae,
              fill: G,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(E, K) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": E,
              "data-signal-colour": T ? G : void 0
            },
            E
          );
        }),
        u && J && ue && ue !== Ce.CommonCause && j && /* @__PURE__ */ n.jsx(
          "text",
          {
            x: w - 4,
            y: pe,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: de,
            "data-glyph-pos": pe < y / 2 ? "top" : "bottom",
            children: j === Ne.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
cl.displayName = "SPCSpark";
const ke = (e) => typeof e == "number" && Number.isFinite(e), Yh = (e) => e.reduce((t, r) => t + r, 0), Ct = (e) => e.length ? Yh(e) / e.length : NaN;
function ul(e, t) {
  const r = new Array(e.length).fill(null);
  let a = null;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (!t[s] && ke(o)) {
      if (a !== null) {
        const i = e[a];
        r[s] = ke(i) ? Math.abs(o - i) : null;
      }
      a = s;
    }
  }
  return r;
}
function dl(e, t) {
  const r = e.filter((o) => ke(o));
  if (!r.length) return { mrMean: NaN, mrUcl: NaN };
  let a = Ct(r), s = 3.267 * a;
  if (t) {
    const o = r.filter((i) => i <= s);
    o.length && o.length !== r.length && (a = Ct(o), s = 3.267 * a);
  }
  return { mrMean: a, mrUcl: s };
}
function qh(e, t) {
  if (!ke(e) || !ke(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const r = 2.66, a = 2 / 3 * r, s = 1 / 3 * r;
  return {
    upperProcessLimit: e + r * t,
    lowerProcessLimit: e - r * t,
    upperTwoSigma: e + a * t,
    lowerTwoSigma: e - a * t,
    upperOneSigma: e + s * t,
    lowerOneSigma: e - s * t
  };
}
const Xh = 0.2777, Kh = 3.6, Jh = (e) => ke(e) && e >= 0 ? Math.pow(e, Xh) : null, Kt = (e) => ke(e) && e >= 0 ? Math.pow(e, Kh) : null;
function Zh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const fn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Qh(e) {
  if (!ke(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), r = (d) => Zh(d, t) - 1, a = r(0.5), s = Math.max(0, r(fn.three.low)), o = r(fn.three.high), i = Math.max(0, r(fn.one.low)), l = r(fn.one.high), u = Math.max(0, r(fn.two.low)), c = r(fn.two.high);
  return { cl: a, lcl: s, ucl: o, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function em(e, t, r) {
  const a = e.map((k) => ke(k) ? Jh(k) : null), s = ul(a, t), { mrMean: o } = dl(s, !!r), i = a.filter((k, b) => !t[b] && ke(k)), l = i.length ? Ct(i) : NaN;
  if (!ke(l) || !ke(o))
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: s,
      mrMean: null,
      mrUcl: null
    };
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * o, m = l - u * o, v = l + c * o, S = l - c * o, x = l + d * o, p = l - d * o, g = Kt(l), I = Kt(f), M = m <= 0 ? null : Kt(m), T = Kt(x), R = p <= 0 ? null : Kt(p), D = Kt(v), N = S <= 0 ? null : Kt(S);
  return {
    center: g ?? null,
    upperProcessLimit: I ?? null,
    lowerProcessLimit: M ?? null,
    upperTwoSigma: D ?? null,
    lowerTwoSigma: N ?? null,
    upperOneSigma: T ?? null,
    lowerOneSigma: R ?? null,
    mr: s,
    mrMean: o,
    mrUcl: ke(o) ? 3.267 * o : null
  };
}
function tm(e) {
  const {
    metricImprovement: t,
    capabilityMode: r,
    value: a,
    mean: s,
    upperProcessLimit: o,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || s === null || !u(l) ? Je.None : r && u(o) && u(i) ? t === Ne.Up ? u(i) && i > l ? Je.Pass : u(o) && o < l ? Je.Fail : Je.None : t === Ne.Down ? u(o) && o < l ? Je.Pass : u(i) && i > l ? Je.Fail : Je.None : Je.None : t === Ne.Down ? a <= l ? Je.Pass : Je.Fail : t === Ne.Up ? a >= l ? Je.Pass : Je.Fail : Je.None;
}
function nm(e, t) {
  const {
    W: r,
    minGap: a,
    minDeltaSigma: s,
    scoreThreshold: o,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: u,
    isTrendDownAt: c,
    isSingleUpAt: d,
    isSingleDownAt: f
  } = t, m = [];
  let v = 0;
  for (let S = 0; S < e.length; S++) {
    const x = e[S];
    S > 0 && e[S - 1].partitionId !== x.partitionId && (v = S);
    const p = S > 0 && i(S - 1), g = S > 0 && l(S - 1), I = S > 0 && u(S - 1), M = S > 0 && c(S - 1), T = S > 0 && d(S - 1), R = S > 0 && f(S - 1), D = i(S), N = l(S), k = u(S), b = c(S), j = d(S), _ = f(S), h = [];
    D && !p && h.push({ reason: ht.Shift, index: S }), N && !g && h.push({ reason: ht.Shift, index: S }), k && !I && h.push({ reason: ht.Trend, index: S }), b && !M && h.push({ reason: ht.Trend, index: S }), j && !T && h.push({ reason: ht.Point, index: S }), _ && !R && h.push({ reason: ht.Point, index: S });
    for (const L of h) {
      if (L.index - v < a) continue;
      const w = Math.max(0, L.index - r), y = L.index - 1;
      if (y - w + 1 < r) continue;
      const C = L.index, A = L.index + r - 1;
      if (A >= e.length) continue;
      const re = e.slice(w, y + 1).map((q) => q.value).filter(
        (q) => typeof q == "number" && Number.isFinite(q)
      ), Y = e.slice(C, A + 1).map((q) => q.value).filter(
        (q) => typeof q == "number" && Number.isFinite(q)
      );
      if (re.length < r || Y.length < r) continue;
      const B = e[L.index];
      let O = null;
      if (typeof B.upperProcessLimit == "number" && typeof B.mean == "number") {
        const q = B.upperProcessLimit - B.mean;
        q > 0 && (O = q / 3);
      }
      if (!O || O <= 0) continue;
      const z = Ct(re), oe = Ct(Y), U = oe - z;
      if (Math.abs(U) < s * O) continue;
      const we = e.slice(C, A + 1).filter(
        (q) => q.variationIcon === $e.Concern
      ).length;
      if (we > 1) continue;
      const ue = (q) => {
        const $ = Ct(q);
        return q.length ? q.reduce((F, W) => F + (W - $) * (W - $), 0) / q.length : 0;
      }, de = ue(re), ee = ue(Y);
      let se = L.reason === ht.Shift ? 90 : L.reason === ht.Trend ? 70 : 60;
      if (ee < de && (se += 10), se -= we * 15, se < o) continue;
      const fe = m.find((q) => q.index === L.index);
      if (fe) {
        const q = ($) => $ === ht.Shift ? 3 : $ === ht.Trend ? 2 : 1;
        (q(L.reason) > q(fe.reason) || se > fe.score) && (fe.reason = L.reason, fe.score = se, fe.deltaMean = U, fe.oldMean = z, fe.newMean = oe, fe.window = [C, A]);
      } else
        m.push({
          index: L.index,
          reason: L.reason,
          score: se,
          deltaMean: U,
          oldMean: z,
          newMean: oe,
          window: [C, A]
        });
    }
  }
  return m.sort((S, x) => S.index - x.index), m;
}
function Fa() {
  const e = globalThis;
  if (typeof e.__SPC_PHASE4_STRICT < "u") return !!e.__SPC_PHASE4_STRICT;
  if (typeof process < "u") {
    const t = process?.env?.SPC_PHASE4_STRICT;
    if (typeof t < "u") {
      const r = String(t).toLowerCase();
      if (r === "1" || r === "true") return !0;
      if (r === "0" || r === "false") return !1;
    }
  }
  return !0;
}
var Gt = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Gt || {}), fl = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(fl || {}), pl = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(pl || {});
function rm(e) {
  const t = [], r = [];
  e.specialCauseSinglePointUp && t.push(it.SinglePoint), e.specialCauseSinglePointDown && r.push(it.SinglePoint), e.specialCauseTwoOfThreeUp && t.push(it.TwoSigma), e.specialCauseTwoOfThreeDown && r.push(it.TwoSigma), e.specialCauseShiftUp && t.push(it.Shift), e.specialCauseShiftDown && r.push(it.Shift), e.specialCauseTrendUp && t.push(it.Trend), e.specialCauseTrendDown && r.push(it.Trend);
  const a = t.reduce((o, i) => Math.max(o, vr[i].rank), 0), s = r.reduce((o, i) => Math.max(o, vr[i].rank), 0);
  return { upRules: t, downRules: r, upMax: a, downMax: s, hasUp: t.length > 0, hasDown: r.length > 0 };
}
function am(e) {
  const t = [];
  let r = [];
  for (const a of e)
    a.baseline && r.length && (t.push(r), r = []), r.push(a);
  return r.length && t.push(r), t;
}
function sm(e, t, r) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const s = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => ke(d.value));
  if (s.length < a * 2) return;
  const o = r === Ne.Up || r === Ne.Neither, i = r === Ne.Down;
  function l(d, f) {
    const m = s.slice(d, f).map((v) => v.value);
    return m.length ? Ct(m) : NaN;
  }
  let u = null;
  if (s.length > 1) {
    const d = [];
    for (let m = 1; m < s.length; m++) d.push(Math.abs(s[m].value - s[m - 1].value));
    const f = Ct(d);
    ke(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= s.length - a; d++) {
    const f = d - a, m = l(f, d), v = l(d, d + a);
    if (!ke(m) || !ke(v)) continue;
    const x = (v - m) / u;
    if (!(o ? x >= c : i ? -x >= c : Math.abs(x) >= c)) continue;
    const g = s.slice(d, d + a).map((T) => T.value);
    if (!(o ? g.every((T) => T > m) : i ? g.every((T) => T < m) : g.every((T) => o ? T > m : T < m))) continue;
    const M = s[d].idx;
    e[M].baseline || (e[M].baseline = !0);
    return;
  }
}
function hl(e) {
  if (!e) return {};
  const t = e, r = e, a = r.rules ?? {}, s = r.precedence ?? {}, o = r.thresholds ?? {}, i = r.warnings ?? {}, l = r.rareEvent ?? {}, u = r.capability ?? {}, c = r.grace ?? {}, d = r.baselineSuggest ?? {}, f = r.autoRecalc ?? {}, m = c.emergingEnabled ?? r.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, v = a.collapseWeakerClusterRules ?? r.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Fa()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const S = globalThis;
  !Fa() && t.emergingDirectionGrace !== void 0 && r.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !S.__spc_warn_emergingDirectionGrace && (S.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Fa() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && r.collapseWeakerClusterRules === void 0 && !S.__spc_warn_collapseClusterRules && (S.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const x = (I) => {
    const M = {};
    for (const T of Object.keys(I)) {
      const R = I[T];
      R !== void 0 && (M[T] = R);
    }
    return M;
  }, p = x({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: v ?? t.collapseWeakerClusterRules,
    // Precedence
    precedenceStrategy: s.strategy ?? t.precedenceStrategy,
    conflictPrecedenceMode: s.conflictMode ?? t.conflictPrecedenceMode,
    // Thresholds
    minimumPoints: o.minimumPoints ?? t.minimumPoints,
    minimumPointsPartition: o.minimumPointsPartition ?? t.minimumPointsPartition,
    maximumPointsPartition: o.maximumPointsPartition ?? t.maximumPointsPartition,
    maximumPoints: o.maximumPoints ?? t.maximumPoints,
    transitionBufferPoints: o.transitionBufferPoints ?? t.transitionBufferPoints,
    // Warnings
    minimumPointsWarning: i.minimumPointsWarning ?? t.minimumPointsWarning,
    pointConflictWarning: i.pointConflictWarning ?? t.pointConflictWarning,
    variationIconConflictWarning: i.variationIconConflictWarning ?? t.variationIconConflictWarning,
    nullValueWarning: i.nullValueWarning ?? t.nullValueWarning,
    targetSuppressedWarning: i.targetSuppressedWarning ?? t.targetSuppressedWarning,
    ghostOnRareEventWarning: i.ghostOnRareEventWarning ?? t.ghostOnRareEventWarning,
    partitionSizeWarnings: i.partitionSizeWarnings ?? t.partitionSizeWarnings,
    baselineSpecialCauseWarning: i.baselineSpecialCauseWarning ?? t.baselineSpecialCauseWarning,
    maximumPointsWarnings: i.maximumPointsWarnings ?? t.maximumPointsWarnings,
    // Capability
    assuranceCapabilityMode: u.assuranceCapabilityMode ?? t.assuranceCapabilityMode,
    // Grace
    emergingGraceEnabled: m,
    emergingDirectionGrace: m,
    // Baseline suggestions
    baselineSuggest: d.enabled ?? t.baselineSuggest,
    baselineSuggestMinDeltaSigma: d.minDeltaSigma ?? t.baselineSuggestMinDeltaSigma,
    baselineSuggestStabilityPoints: d.stabilityPoints ?? t.baselineSuggestStabilityPoints,
    baselineSuggestMinGap: d.minGap ?? t.baselineSuggestMinGap,
    baselineSuggestScoreThreshold: d.scoreThreshold ?? t.baselineSuggestScoreThreshold,
    // Auto recalculation
    autoRecalculateAfterShift: f.enabled ?? t.autoRecalculateAfterShift,
    autoRecalculateShiftLength: f.shiftLength ?? t.autoRecalculateShiftLength,
    autoRecalculateDeltaSigma: f.deltaSigma ?? t.autoRecalculateDeltaSigma
  }), g = { ...p, ...x(t) };
  if (m !== void 0 && (g.emergingGraceEnabled = m, g.grace = { ...g.grace, emergingEnabled: m }), p.collapseWeakerClusterRules !== void 0) {
    const I = p.collapseWeakerClusterRules;
    g.collapseWeakerClusterRules = I, g.rules = { ...g.rules, collapseWeakerClusterRules: I };
  }
  return x(g);
}
function aa(e) {
  const {
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: s = {}
  } = e, o = hl(s), i = {
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
    baselineSuggest: !1,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    precedenceStrategy: tr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, g) => ({
    rowId: g + 1,
    x: p.x,
    value: ke(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: ke(p.target) ? p.target : null
  }));
  if (o?.autoRecalculateAfterShift)
    try {
      sm(l, o, r);
    } catch {
    }
  const u = am(l), c = [], d = [], m = l.filter(
    (p) => !p.ghost && ke(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let v = 0;
  const S = {};
  for (const p of u) {
    v++;
    const g = p.map((h) => h.value), I = p.map((h) => h.ghost);
    let M = new Array(g.length).fill(null), T = NaN, R = NaN, D = NaN, N = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      M = ul(g, I);
      const h = g.filter(
        (w, y) => !I[y] && ke(w)
      );
      T = h.length ? Ct(h) : NaN;
      const L = dl(
        M,
        !!i.excludeMovingRangeOutliers
      );
      R = L.mrMean, D = L.mrUcl, N = qh(T, R);
    } else if (t === "T") {
      const h = em(
        g,
        I,
        !!i.excludeMovingRangeOutliers
      );
      M = h.mr, R = h.mrMean ?? NaN, D = h.mrUcl ?? NaN, T = h.center ?? NaN, N = {
        upperProcessLimit: h.upperProcessLimit,
        lowerProcessLimit: h.lowerProcessLimit,
        upperTwoSigma: h.upperTwoSigma,
        lowerTwoSigma: h.lowerTwoSigma,
        upperOneSigma: h.upperOneSigma,
        lowerOneSigma: h.lowerOneSigma
      };
    } else if (t === "G") {
      const h = g.filter(
        (y, C) => !I[C] && ke(y)
      ), L = h.length ? Ct(h) : NaN, w = Qh(L);
      T = w.cl ?? NaN, N = {
        upperProcessLimit: w.ucl,
        lowerProcessLimit: w.lcl,
        upperTwoSigma: w.twoHigh,
        lowerTwoSigma: w.twoLow,
        upperOneSigma: w.oneHigh,
        lowerOneSigma: w.oneLow
      }, M = new Array(g.length).fill(null), R = NaN, D = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const k = p.map((h, L) => {
      const w = !h.ghost && ke(h.value) ? g.slice(0, L + 1).filter((re, Y) => !I[Y] && ke(re)).length : 0, y = m, C = y ? N : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: h.rowId,
        x: h.x,
        value: ke(h.value) ? h.value : null,
        ghost: h.ghost,
        partitionId: v,
        pointRank: w,
        mean: y && ke(T) ? T : null,
        mr: ke(M[L]) ? M[L] : null,
        mrMean: y && ke(R) ? R : null,
        mrUcl: y && ke(D) ? D : null,
        upperProcessLimit: ke(C.upperProcessLimit) ? C.upperProcessLimit : null,
        lowerProcessLimit: ke(C.lowerProcessLimit) ? C.lowerProcessLimit : null,
        upperTwoSigma: ke(C.upperTwoSigma) ? C.upperTwoSigma : null,
        lowerTwoSigma: ke(C.lowerTwoSigma) ? C.lowerTwoSigma : null,
        upperOneSigma: ke(C.upperOneSigma) ? C.upperOneSigma : null,
        lowerOneSigma: ke(C.lowerOneSigma) ? C.lowerOneSigma : null,
        target: ke(h.target) ? h.target : null,
        specialCauseFifteenInnerThird: !1,
        // Unified directional alias initialisers (kept in sync post-detection)
        specialCauseSinglePointUp: !1,
        specialCauseSinglePointDown: !1,
        specialCauseTwoOfThreeUp: !1,
        specialCauseTwoOfThreeDown: !1,
        specialCauseFourOfFiveUp: !1,
        specialCauseFourOfFiveDown: !1,
        specialCauseShiftUp: !1,
        specialCauseShiftDown: !1,
        specialCauseTrendUp: !1,
        specialCauseTrendDown: !1,
        variationIcon: $e.Suppressed,
        assuranceIcon: Je.None,
        upperBaseline: y && ke(T) ? T : null,
        lowerBaseline: y && ke(T) ? T : null,
        movingRangeHighPointValue: y && ke(D) ? D : null,
        ghostValue: h.ghost && ke(h.value) ? h.value : null,
        ghostFlag: !!h.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    S[v] = k.filter(
      (h) => !h.ghost && ke(h.value)
    ).length;
    const b = i.specialCauseShiftPoints ?? 6, j = i.specialCauseTrendPoints ?? 6, _ = [];
    for (let h = 0; h < k.length; h++) {
      const L = k[h], w = L.value;
      if (!L.ghost && ke(w) && _.push(h), !(ke(L.mean) && ke(L.upperProcessLimit) && ke(L.lowerProcessLimit)) || L.ghost || !ke(w)) {
        c.push(L);
        continue;
      }
      L.specialCauseSinglePointUp = ke(L.upperProcessLimit) ? w > L.upperProcessLimit : !1, L.specialCauseSinglePointDown = ke(L.lowerProcessLimit) ? w < L.lowerProcessLimit : !1, c.push(L);
    }
    if (_.length) {
      const h = (y) => k[y];
      let L = [], w = [];
      for (const y of _) {
        const C = h(y);
        if (!ke(C.mean) || !ke(C.value)) {
          L = [], w = [];
          continue;
        }
        if (C.value > C.mean ? (L.push(y), w = []) : C.value < C.mean ? (w.push(y), L = []) : (L = [], w = []), L.length >= b)
          for (const A of L) {
            const re = h(A);
            re.specialCauseShiftUp = !0;
          }
        if (w.length >= b)
          for (const A of w) {
            const re = h(A);
            re.specialCauseShiftDown = !0;
          }
      }
      for (let y = 0; y <= _.length - 3; y++) {
        const A = _.slice(y, y + 3).map(h);
        if (!A.every((ue) => ke(ue.mean) && ke(ue.value))) continue;
        const re = A[0].mean, Y = A.every((ue) => ue.value > re), B = A.every((ue) => ue.value < re);
        if (!Y && !B) continue;
        const O = A[0].upperTwoSigma ?? 1 / 0, z = A[0].lowerTwoSigma ?? -1 / 0, oe = A[0].upperProcessLimit ?? 1 / 0, U = A[0].lowerProcessLimit ?? -1 / 0, ce = A.filter((ue) => ue.value > O && ue.value <= oe), we = A.filter((ue) => ue.value < z && ue.value >= U);
        if (Y && ce.length >= 2)
          for (const ue of ce)
            ue.specialCauseTwoOfThreeUp = !0;
        if (B && we.length >= 2)
          for (const ue of we)
            ue.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let y = 0; y <= _.length - 5; y++) {
          const A = _.slice(y, y + 5).map(h);
          if (!A.every((oe) => ke(oe.mean) && ke(oe.value))) continue;
          const re = A[0].mean;
          if (!A.every((oe) => oe.value > re) && !A.every((oe) => oe.value < re)) continue;
          const Y = A[0].upperOneSigma ?? 1 / 0, B = A[0].lowerOneSigma ?? -1 / 0, O = A.filter((oe) => oe.value > Y), z = A.filter((oe) => oe.value < B);
          if (A.every((oe) => oe.value > re) && O.length >= 4)
            for (const oe of O)
              oe.specialCauseFourOfFiveUp = !0;
          if (A.every((oe) => oe.value < re) && z.length >= 4)
            for (const oe of z)
              oe.specialCauseFourOfFiveDown = !0;
        }
      for (let y = 0; y <= _.length - j; y++) {
        const C = _.slice(y, y + j), A = C.map(h);
        if (!A.every((B) => ke(B.value))) continue;
        let re = !0, Y = !0;
        for (let B = 1; B < A.length && (A[B].value > A[B - 1].value || (re = !1), A[B].value < A[B - 1].value || (Y = !1), !(!re && !Y)); B++)
          ;
        if (re) for (const B of C) {
          const O = h(B);
          O.specialCauseTrendUp = !0;
        }
        if (Y) for (const B of C) {
          const O = h(B);
          O.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let y = [];
        for (const C of _) {
          const A = h(C);
          if (!ke(A.value) || !ke(A.mean) || !ke(A.upperOneSigma) || !ke(A.lowerOneSigma)) {
            y = [];
            continue;
          }
          if (!(A.value < A.upperOneSigma && A.value > A.lowerOneSigma)) {
            y = [];
            continue;
          }
          if (y.push(C), y.length >= 15) {
            const Y = y.map(h), B = Y.some((z) => z.value > z.mean), O = Y.some((z) => z.value < z.mean);
            if (B && O)
              for (const z of y) h(z).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const h = i.maximumPointsPartition;
      let L = 0;
      for (const w of c.filter((y) => y.partitionId === v))
        !w.ghost && ke(w.value) && L++, L > h && (w.mean = w.upperProcessLimit = w.lowerProcessLimit = null, w.upperTwoSigma = w.lowerTwoSigma = w.upperOneSigma = w.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const g = [];
    p.specialCauseShiftUp && g.push(ct.ShiftHigh), p.specialCauseShiftDown && g.push(ct.ShiftLow), p.specialCauseTrendUp && g.push(ct.TrendIncreasing), p.specialCauseTrendDown && g.push(ct.TrendDecreasing), p.specialCauseSinglePointUp && g.push(ct.SinglePointAbove), p.specialCauseSinglePointDown && g.push(ct.SinglePointBelow), p.specialCauseTwoOfThreeUp && g.push(ct.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && g.push(ct.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && g.push(ct.FourOfFiveAbove), p.specialCauseFourOfFiveDown && g.push(ct.FourOfFiveBelow), p.specialCauseFifteenInnerThird && g.push(ct.FifteenInnerThird), g.length && (p.ruleTags = g);
  }
  for (let p = 0; p < c.length; p++) {
    const g = c[p];
    if (Object.prototype.hasOwnProperty.call(g, Ln.ImprovementValueBeforePruning) || Object.defineProperty(g, Ln.ImprovementValueBeforePruning, {
      get() {
        return g.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(g, Ln.ConcernValueBeforePruning) || Object.defineProperty(g, Ln.ConcernValueBeforePruning, {
      get() {
        return g.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), g.ghost || !ke(g.value) || g.mean === null) {
      g.variationIcon = $e.Suppressed;
      continue;
    }
    const I = g.value > g.mean, M = g.value < g.mean;
    i.rules?.collapseWeakerClusterRules && (g.specialCauseTwoOfThreeUp && g.specialCauseFourOfFiveUp && (g.specialCauseTwoOfThreeUp = !1), g.specialCauseTwoOfThreeDown && g.specialCauseFourOfFiveDown && (g.specialCauseTwoOfThreeDown = !1));
    const T = g.specialCauseTrendUp && I, R = g.specialCauseTrendDown && M, D = g.specialCauseSinglePointUp || g.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && g.specialCauseFourOfFiveUp || g.specialCauseShiftUp || T, N = g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && g.specialCauseFourOfFiveDown || g.specialCauseShiftDown || R;
    let k = !1;
    if (i.precedenceStrategy === tr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const j = i.specialCauseTrendPoints || 6;
      if (j > 1 && !(g.specialCauseTrendUp || g.specialCauseTrendDown)) {
        const _ = j - 1, h = [];
        for (let L = p; L >= 0 && h.length < _; L--) {
          const w = c[L];
          !w.ghost && ke(w.value) && w.mean !== null && h.unshift(w);
        }
        if (h.length === _) {
          let L = !0;
          for (let w = 1; w < h.length && L; w++)
            r === Ne.Up ? h[w].value > h[w - 1].value || (L = !1) : r === Ne.Down && h[w].value < h[w - 1].value || (L = !1);
          k = L;
        }
      }
    }
    if (i.precedenceStrategy === tr.DirectionalFirst) {
      const _ = r === Ne.Up ? D : r === Ne.Down ? N : !1, h = r === Ne.Up ? N : r === Ne.Down ? D : !1;
      _ && !h ? g.variationIcon = $e.Improvement : h && !_ ? g.variationIcon = k ? $e.Neither : $e.Concern : _ && h ? g.variationIcon = k || g.specialCauseTrendUp || g.specialCauseTrendDown ? $e.Improvement : $e.Neither : g.variationIcon = $e.Neither;
    } else
      r === Ne.Up ? g.variationIcon = D ? $e.Improvement : N ? $e.Concern : $e.Neither : r === Ne.Down ? g.variationIcon = N ? $e.Improvement : D ? $e.Concern : $e.Neither : g.variationIcon = $e.Neither;
    const b = D || N;
    if (g.specialCauseImprovementValue = b && g.variationIcon === $e.Improvement ? g.value : null, g.specialCauseConcernValue = b && g.variationIcon === $e.Concern ? g.value : null, g.specialCauseNeitherValue = b && g.variationIcon === $e.Neither ? g.value : null, i.conflictPrecedenceMode === al.SqlRankingV26a && g.specialCauseImprovementValue !== null && g.specialCauseConcernValue !== null) {
      const j = [];
      g.specialCauseSinglePointUp && j.push({ id: it.SinglePoint, rank: 1, side: Qe.Up }), g.specialCauseSinglePointDown && j.push({ id: it.SinglePoint, rank: 1, side: Qe.Down }), g.specialCauseTwoOfThreeUp && j.push({ id: it.TwoSigma, rank: 2, side: Qe.Up }), g.specialCauseTwoOfThreeDown && j.push({ id: it.TwoSigma, rank: 2, side: Qe.Down }), g.specialCauseShiftUp && j.push({ id: it.Shift, rank: 3, side: Qe.Up }), g.specialCauseShiftDown && j.push({ id: it.Shift, rank: 3, side: Qe.Down }), g.specialCauseTrendUp && j.push({ id: it.Trend, rank: 4, side: Qe.Up }), g.specialCauseTrendDown && j.push({ id: it.Trend, rank: 4, side: Qe.Down });
      const _ = j.filter((Y) => Y.side === Qe.Up).reduce((Y, B) => Math.max(Y, B.rank), 0), h = j.filter((Y) => Y.side === Qe.Down).reduce((Y, B) => Math.max(Y, B.rank), 0);
      let L;
      _ > h ? L = xt.Upwards : h > _ ? L = xt.Downwards : L = xt.Same;
      const w = g.specialCauseImprovementValue, y = g.specialCauseConcernValue;
      L === xt.Upwards ? r === Ne.Up ? g.specialCauseConcernValue = null : r === Ne.Down && (g.specialCauseImprovementValue = null) : L === xt.Downwards ? r === Ne.Up ? g.specialCauseImprovementValue = null : r === Ne.Down && (g.specialCauseConcernValue = null) : g.variationIcon === $e.Improvement ? g.specialCauseConcernValue = null : g.variationIcon === $e.Concern ? g.specialCauseImprovementValue = null : g.specialCauseConcernValue = null, g.specialCauseImprovementValue !== null && g.specialCauseConcernValue === null ? g.variationIcon = $e.Improvement : g.specialCauseConcernValue !== null && g.specialCauseImprovementValue === null ? g.variationIcon = $e.Concern : g.specialCauseImprovementValue === null && g.specialCauseConcernValue === null && (g.variationIcon = $e.Neither);
      const C = g.specialCauseImprovementValue !== null ? Qe.Up : g.specialCauseConcernValue !== null ? Qe.Down : void 0, A = C === Qe.Up ? _ : C === Qe.Down ? h : Math.max(_, h), re = j.find((Y) => Y.rank === A && (!C || Y.side === C));
      g.conflictPrimeDirection = L, g.conflictResolved = !0, g.conflictResolvedRank = A || void 0, re && (g.conflictResolvedByRuleId = re.id), g.pruningMode = Ps.Conflict, g.originalSpecialCauseImprovementValue = w, g.originalSpecialCauseConcernValue = y;
    }
    {
      const j = l[g.rowId - 1], _ = tm({
        metricImprovement: r,
        capabilityMode: i.assuranceCapabilityMode,
        value: g.value,
        mean: g.mean,
        upperProcessLimit: g.upperProcessLimit,
        lowerProcessLimit: g.lowerProcessLimit,
        target: ke(j?.target) ? j.target : null
      });
      g.assuranceIcon = _;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !m) {
    const p = l.filter(
      (g) => !g.ghost && ke(g.value)
    ).length;
    d.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${p} non-ghost points available; minimum required is ${i.minimumPoints}. Limits and icons suppressed.`,
      context: { available: p, minimumRequired: i.minimumPoints }
    });
  }
  if (i.variationIconConflictWarning)
    for (const p of c)
      p.variationIcon === $e.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let g = 0;
    for (const I of c)
      !I.ghost && ke(I.value) && g++, g > p && (I.mean = I.upperProcessLimit = I.lowerProcessLimit = null, I.upperTwoSigma = I.lowerTwoSigma = I.upperOneSigma = I.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === _t.XmR || t === _t.G)) {
    const p = l.filter(
      (g) => !g.ghost && (g.value === null || g.value === void 0 || !ke(g.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === _t.T || t === _t.G) && l.some((g) => ke(g.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === _t.T || t === _t.G)) {
    const p = l.filter((g) => g.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(S).forEach(([p, g]) => {
    g < i.minimumPointsPartition && d.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${g} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: g,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const p = [];
    c.forEach((g) => {
      l[g.rowId - 1].baseline && (g.specialCauseSinglePointUp || g.specialCauseSinglePointDown || g.specialCauseTwoOfThreeUp || g.specialCauseTwoOfThreeDown || g.specialCauseFourOfFiveUp || g.specialCauseFourOfFiveDown || g.specialCauseShiftUp || g.specialCauseShiftDown || g.specialCauseTrendUp || g.specialCauseTrendDown) && p.push(g.rowId);
    }), p.length && d.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${p.join(", ")}.`,
      context: { rows: p }
    });
  }
  i.maximumPointsWarnings && (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition) && d.push({
    code: "partition_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after ${i.maximumPointsPartition} non-ghost points per partition.`,
    context: { cap: i.maximumPointsPartition }
  }), i.maximumPoints && Number.isFinite(i.maximumPoints) && d.push({
    code: "global_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after global cap of ${i.maximumPoints} non-ghost points.`,
    context: { cap: i.maximumPoints }
  }));
  let x;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, g = i.baselineSuggestMinGap, I = i.baselineSuggestMinDeltaSigma, M = i.baselineSuggestScoreThreshold;
    x = nm(
      c.map((R) => ({
        value: R.value,
        partitionId: R.partitionId,
        variationIcon: R.variationIcon,
        mean: R.mean,
        upperProcessLimit: R.upperProcessLimit
      })),
      {
        W: p,
        minGap: g,
        minDeltaSigma: I,
        scoreThreshold: M,
        isShiftUpAt: (R) => !!c[R].specialCauseShiftUp,
        isShiftDownAt: (R) => !!c[R].specialCauseShiftDown,
        isTrendUpAt: (R) => !!c[R].specialCauseTrendUp,
        isTrendDownAt: (R) => !!c[R].specialCauseTrendDown,
        isSingleUpAt: (R) => !!c[R].specialCauseSinglePointUp,
        isSingleDownAt: (R) => !!c[R].specialCauseSinglePointDown
      }
    ).map((R) => ({
      index: R.index,
      reason: R.reason,
      score: R.score,
      deltaMean: R.deltaMean,
      oldMean: R.oldMean,
      newMean: R.newMean,
      window: R.window
    }));
  }
  return { rows: c, warnings: d, ...x ? { suggestedBaselines: x } : {} };
}
function om(e, t) {
  const r = rm(e), a = r.upMax, s = r.downMax, o = r.upRules.map((x) => ({ id: x, rank: Oo[x] })), i = r.downRules.map((x) => ({
    id: x,
    rank: Oo[x]
  }));
  let l;
  a > s ? l = xt.Upwards : s > a ? l = xt.Downwards : l = xt.Same;
  const u = a > 0, c = s > 0, d = t === Ne.Up && u || t === Ne.Down && c ? e.value : null, f = t === Ne.Up && c || t === Ne.Down && u ? e.value : null;
  e.sqlOriginalImprovementValue = d, e.sqlOriginalConcernValue = f, d !== null && f !== null && (e.sqlPruned = !0, l === xt.Upwards ? t === Ne.Up || t === Ne.Down && (e.sqlOriginalImprovementValue = null) : l === xt.Downwards ? t === Ne.Up ? e.sqlOriginalImprovementValue = null : Ne.Down : d !== null ? e.sqlOriginalConcernValue = null : f !== null && (e.sqlOriginalImprovementValue = null)), e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = $e.Improvement : !e.sqlOriginalImprovementValue && e.sqlOriginalConcernValue ? e.variationIcon = $e.Concern : !e.sqlOriginalImprovementValue && !e.sqlOriginalConcernValue ? e.variationIcon = $e.Neither : e.variationIcon = $e.Improvement, e.primeDirection = l, e.primeRank = Math.max(a, s) || void 0, e.pruningMode = Ps.Sql;
  const S = ((e.variationIcon === $e.Concern ? t === Ne.Up ? Qe.Down : Qe.Up : t === Ne.Up ? Qe.Up : Qe.Down) === Qe.Up ? o : i).reduce(
    (x, p) => !x || p.rank > x.rank ? p : x,
    void 0
  );
  S && (e.primeRuleId = S.id);
}
function ml(e) {
  const { chartType: t, metricImprovement: r, data: a, settings: s = {} } = e, o = aa({
    chartType: t,
    metricImprovement: r,
    data: a,
    settings: {
      ...s
    }
  }), i = o.rows.map((l) => ({ ...l }));
  for (const l of i)
    om(l, r);
  return { rows: i, warnings: o.warnings };
}
function Wo(e, t) {
  return e === "improvement" ? Ce.SpecialCauseImproving : e === "concern" ? Ce.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? Ce.SpecialCauseNoJudgement : e === "neither" ? Ce.CommonCause : null;
}
function im(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function lm(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function cm(e) {
  const {
    values: t,
    x: r,
    chartType: a = _t.XmR,
    metricImprovement: s = Ne.Neither,
    useSqlCompatEngine: o = !1,
    showLimits: i = !0,
    showLimitBand: l = !1,
    showInnerBands: u = !1,
    showMean: c = !1,
    autoClassify: d = !0
  } = e, f = X.useMemo(() => {
    const D = [];
    for (let N = 0; N < t.length; N++)
      D.push({ x: r?.[N], value: t[N] });
    return D;
  }, [t, r]), m = X.useMemo(() => {
    try {
      const D = f.map((N, k) => ({ x: N.x ?? k, value: N.value }));
      return o ? ml({ chartType: a, metricImprovement: s, data: D, settings: {} }) : aa({ chartType: a, metricImprovement: s, data: D, settings: {} });
    } catch {
      return null;
    }
  }, [f, a, s, o]), v = X.useMemo(() => {
    const D = m?.rows;
    if (!D || D.length === 0) return null;
    for (let N = D.length - 1; N >= 0; N--) {
      const k = D[N];
      if (k && k.value != null && !k.ghost) return k;
    }
    return D[D.length - 1] ?? null;
  }, [m]), S = X.useMemo(() => {
    const D = m?.rowsRepresentative ?? m?.rows;
    if (!D || !Array.isArray(D) || D.length === 0) return null;
    const N = D[D.length - 1];
    return Wo(
      N?.variationIcon,
      (N?.specialCauseNeitherValue ?? null) != null
    );
  }, [m]), x = X.useMemo(() => v?.mean ?? null, [v]), p = X.useMemo(() => {
    if (!v) return null;
    const D = v?.lowerProcessLimit ?? null, N = v?.upperProcessLimit ?? null;
    return D == null && N == null ? null : { lower: D, upper: N };
  }, [v]), g = X.useMemo(() => v ? {
    upperOne: v?.upperOneSigma ?? null,
    upperTwo: v?.upperTwoSigma ?? null,
    lowerOne: v?.lowerOneSigma ?? null,
    lowerTwo: v?.lowerTwoSigma ?? null
  } : null, [v]), I = X.useMemo(() => {
    const D = m?.rows;
    if (!(!D || D.length === 0))
      return o ? D.map((N) => {
        const k = N?.variationIcon;
        return k === "improvement" ? "improvement" : k === "concern" ? "concern" : "neither";
      }) : D.map((N) => {
        const k = !!N?.specialCauseSinglePointUp || !!N?.specialCauseTwoOfThreeUp || !!N?.specialCauseFourOfFiveUp || !!N?.specialCauseShiftUp || !!N?.specialCauseTrendUp, b = !!N?.specialCauseSinglePointDown || !!N?.specialCauseTwoOfThreeDown || !!N?.specialCauseFourOfFiveDown || !!N?.specialCauseShiftDown || !!N?.specialCauseTrendDown;
        switch (s) {
          case Ne.Up:
            return k ? "improvement" : b ? "concern" : "neither";
          case Ne.Down:
            return b ? "improvement" : k ? "concern" : "neither";
          case Ne.Neither:
          default:
            return "neither";
        }
      });
  }, [m, s, o]), M = X.useMemo(() => {
    const D = m?.rows;
    if (!(!D || D.length === 0))
      return D.map((N) => !!N?.specialCauseNeitherValue);
  }, [m]), T = X.useMemo(() => {
    let D = null;
    if (v && v.value != null && !v.ghost) {
      const w = v.variationIcon, y = (v?.specialCauseNeitherValue ?? null) != null;
      S === Ce.SpecialCauseNoJudgement ? D = im(w, y) ? Ce.SpecialCauseNoJudgement : Ce.CommonCause : D = Wo(w, y) ?? Ce.CommonCause;
    }
    const N = D ?? Ce.CommonCause, k = ta[N].hex, [b, j, _] = lm(k), h = Zr();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${b}, ${j}, ${_}, ${h.start}) 0%, rgba(${b}, ${j}, ${_}, ${h.mid}) 50%, rgba(${b}, ${j}, ${_}, ${h.end}) 100%)`,
      "--fdp-metric-card-accent": k
    };
  }, [v, S]);
  return { sparkProps: X.useMemo(() => ({
    data: f,
    showMean: c,
    showLimits: i,
    showLimitBand: l,
    showInnerBands: u,
    metricImprovement: s,
    centerLine: x,
    controlLimits: p,
    sigmaBands: g,
    pointSignals: I,
    pointNeutralSpecialCause: M,
    variationState: S ?? void 0,
    autoClassify: !!(d && !S),
    onClassification: () => {
    }
  }), [
    f,
    c,
    i,
    l,
    u,
    s,
    d,
    S,
    x,
    p?.lower,
    p?.upper,
    g?.upperOne,
    g?.upperTwo,
    g?.lowerOne,
    g?.lowerTwo,
    I?.length,
    M?.length
  ]), metricCardStyle: T, latestState: S };
}
function Uo(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function um(e, t, r) {
  const a = new Array(e), s = new Date(t);
  for (let o = 0; o < e; o++)
    switch (a[o] = new Date(s), r) {
      case "hourly":
        s.setHours(s.getHours() + 1);
        break;
      case "daily":
        s.setDate(s.getDate() + 1);
        break;
      case "weekly":
        s.setDate(s.getDate() + 7);
        break;
      case "monthly":
        s.setMonth(s.getMonth() + 1);
        break;
      case "quarterly":
        s.setMonth(s.getMonth() + 3);
        break;
      case "annually":
        s.setFullYear(s.getFullYear() + 1);
        break;
    }
  return a;
}
function dm(e, t) {
  const r = e.filter(Boolean);
  if (r.length < 2) return t;
  const a = [];
  for (let u = 1; u < r.length; u++) a.push(r[u].getTime() - r[u - 1].getTime());
  const s = a.sort((u, c) => u - c), o = s[Math.floor(s.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return o <= 2 * i ? "hourly" : o <= 2 * l ? "daily" : o <= 10 * l ? "weekly" : o <= 45 * l ? "monthly" : o <= 120 * l ? "quarterly" : "annually";
}
function Vo(e, t) {
  if (e)
    try {
      switch (t) {
        case "hourly":
          return new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short", year: "numeric" }).format(e);
        case "daily":
          return new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e);
        case "weekly":
          return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e)}`;
        case "monthly":
          return new Intl.DateTimeFormat(void 0, { month: "short", year: "numeric" }).format(e);
        case "quarterly":
          return `Q${Math.floor(e.getMonth() / 3) + 1} ${e.getFullYear()}`;
        case "annually":
          return `${e.getFullYear()}`;
        default:
          return new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e);
      }
    } catch {
      return;
    }
}
function fm(e, t, r, a = "0-100") {
  if (t) return t;
  if (r) return r;
  const s = e.filter((l) => l != null);
  if (!s.length) return;
  const o = Math.min(...s), i = Math.max(...s);
  if (a === "0-1") {
    if (o >= 0 && i <= 1 && i > 0) return "%";
  } else if (o >= 0 && i <= 100 && i > 0) return "%";
}
function pm(e, t, r = 1) {
  switch (e || t) {
    case "hourly":
      return r === 1 ? "last hour" : `last ${r} hours`;
    case "daily":
      return r === 1 ? "last day" : `last ${r} days`;
    case "weekly":
      return r === 1 ? "last week" : `last ${r} weeks`;
    case "monthly":
      return r === 1 ? "last month" : `last ${r} months`;
    case "quarterly":
      return r === 1 ? "last quarter" : `last ${r} quarters`;
    case "annually":
      return r === 1 ? "last year" : `last ${r} years`;
    default:
      return "previous";
  }
}
function gl(e) {
  const {
    values: t,
    dates: r,
    intervalHint: a,
    startDate: s,
    providedUnit: o,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: u = !0,
    autoMetadata: c = !0,
    deltaConfig: d
  } = e, f = t.map((b) => typeof b == "number" ? b : b == null ? null : Number(b));
  let m = -1;
  for (let b = f.length - 1; b >= 0; b--)
    if (f[b] != null) {
      m = b;
      break;
    }
  let v = (r || []).map(Uo);
  if (!v.some(Boolean)) {
    const b = Uo(s);
    b && a ? v = um(f.length, b, a) : v = new Array(f.length).fill(void 0);
  }
  const x = dm(v, a), p = fm(f, o, i, e.percentHeuristic), g = l && m >= 0 && f[m] != null ? f[m] : void 0, I = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function M() {
    if (m < 0) return -1;
    if (I.strategy === "previous" || I.strategy === "n-points") {
      let L = m - (I.strategy === "previous" ? 1 : Math.max(1, I.n || 1));
      if (!I.skipNulls) return L;
      for (let w = L; w >= 0; w--) if (f[w] != null) return w;
      return -1;
    }
    const b = v[m];
    if (!b) return -1;
    const j = new Date(b);
    j.setFullYear(j.getFullYear() - 1);
    let _ = -1, h = 1 / 0;
    for (let L = 0; L < v.length; L++) {
      const w = v[L];
      if (!w || f[L] == null) continue;
      const y = Math.abs(w.getTime() - j.getTime());
      y < h && (h = y, _ = L);
    }
    return _;
  }
  const T = M(), R = T >= 0 ? f[T] : null;
  let D;
  if (u && g != null && R != null) {
    const b = g - R, j = I.absolute !== !1, _ = j ? b : R === 0 ? 0 : b / Math.abs(R) * 100;
    D = {
      value: Number.isFinite(_) ? Number(_.toFixed(2)) : 0,
      isPercent: j ? p === "%" : !0,
      period: `vs ${pm(x, a, I.strategy === "n-points" ? Math.max(1, I.n || 1) : 1)}`
    };
  }
  const N = m >= 0 ? v[m] : void 0, k = c && Vo(N, x) ? `Latest: ${Vo(N, x)}` : void 0;
  return { value: g, unit: p, delta: D, metadata: k, latestDate: N, frequency: x };
}
const Xb = ({
  sparkData: e,
  direction: t = Ne.Neither,
  useSqlCompatEngine: r = !0,
  showMean: a = !1,
  showLimits: s = !0,
  showLimitBand: o = !1,
  showInnerBands: i = !1,
  autoClassify: l = !0,
  maxPoints: u,
  autoValue: c = !0,
  autoDelta: d = !0,
  autoMetadata: f = !0,
  defaultUnit: m,
  intervalHint: v,
  startDate: S,
  deltaConfig: x,
  ...p
}) => {
  const g = cm({
    values: e.map((k) => k.value ?? null),
    metricImprovement: t,
    useSqlCompatEngine: r,
    showLimits: s,
    showLimitBand: o,
    showInnerBands: i,
    showMean: a,
    autoClassify: l
  }), I = /* @__PURE__ */ n.jsx(cl, { ...g.sparkProps, maxPoints: u }), M = X.useMemo(() => gl({
    values: e.map((k) => typeof k.value == "number" ? k.value : null),
    dates: e.map((k) => k.date),
    intervalHint: v,
    startDate: S,
    providedUnit: p.unit,
    defaultUnit: m,
    autoValue: c,
    autoDelta: d,
    autoMetadata: f,
    deltaConfig: x
  }), [e, v, S, p.unit, m, c, d, f, x]), T = c && M.value != null ? M.value : p.value, R = d && M.delta ? M.delta : p.delta, D = M.unit || p.unit, N = f && M.metadata ? M.metadata : p.metadata;
  return /* @__PURE__ */ n.jsx(
    Fh,
    {
      ...p,
      value: T,
      unit: D,
      delta: R,
      metadata: N,
      visual: I,
      style: g.metricCardStyle
    }
  );
}, xl = ({
  engineRows: e,
  limits: t,
  pointDescriber: r,
  measureName: a,
  measureUnit: s,
  dateFormatter: o,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const u = Wt(), c = qt(), [d, f] = X.useState(null), [m, v] = X.useState(!1), S = X.useRef(null);
  X.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), S.current && (cancelAnimationFrame(S.current), S.current = null)), !u.focused && !m) {
        const pe = requestAnimationFrame(() => {
          f(null), S.current = null;
        });
        S.current = pe;
      }
      return () => {
        S.current && (cancelAnimationFrame(S.current), S.current = null);
      };
    }
  }, [u, u?.focused, m]);
  const x = u && (u.focused || (m ? d : null) || d), [p, g] = X.useState(!1);
  X.useEffect(() => {
    const pe = requestAnimationFrame(() => g(!0));
    return () => cancelAnimationFrame(pe);
  }, [x?.index]);
  const I = c?.innerWidth ?? 0, M = c?.innerHeight ?? 0, T = x ? Math.min(Math.max(x.clientX, 0), I) : 0, R = x ? Math.min(Math.max(x.clientY, 0), M) : 0, N = c.ref?.current;
  if (!x)
    return null;
  const k = e?.[x.index], j = Qr(k).map((pe) => ({ id: pe, label: yn[pe].tooltip })), _ = x.x instanceof Date ? x.x : new Date(x.x), h = o ? o(_) : _.toDateString(), L = s ? `${s}` : "", w = a || L ? `${x.y}${L ? "" + L : " "}${a ? " " + a : ""}` : `${x.y}`, y = ea(k?.variationIcon), C = sl(k?.assuranceIcon), A = Eh(
    t.mean ?? null,
    t.sigma,
    x.y
  ), re = r ? r(x.index, { x: x.x, y: x.y }) : void 0, Y = y || C || A, B = k?.specialCauseTrendUp || k?.specialCauseTrendDown, O = k?.variationIcon === $e.Neither && B, z = l && O ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, oe = j.length > 0, U = k?.primeDirection, ce = k?.primeRuleId, we = i && k?.variationIcon === $e.Neither && oe, ue = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", de = ol(k?.variationIcon), ee = 6.2, fe = [
    re || "",
    `${h} • ${w}`
  ].filter(Boolean).reduce(
    (pe, E) => Math.max(pe, E.length * ee + 32),
    0
  ), q = 200, $ = 440, F = Math.min($, Math.max(q, fe));
  let W = T + 12, J = (c.margin?.top ?? 0) + R + 16;
  W + F > I && (W = T - -60 - F), W < 0 && (W = Math.max(0, I - F));
  const le = x ? `spc-tooltip-${x.index}` : "spc-tooltip", me = N ? _c(
    /* @__PURE__ */ n.jsx(
      "div",
      {
        id: le,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: W,
          top: J,
          width: F,
          maxWidth: $,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": W + F + 12 > I ? "left" : "right",
        onPointerEnter: () => {
          v(!0), S.current && (cancelAnimationFrame(S.current), S.current = null);
        },
        onPointerLeave: () => {
          if (v(!1), !u?.focused) {
            const pe = requestAnimationFrame(() => {
              f(null), S.current = null;
            });
            S.current = pe;
          }
        },
        children: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: h })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: w })
          ] }),
          Y && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: y?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
              ze,
              {
                text: y,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : y?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
              ze,
              {
                text: y,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : we ? /* @__PURE__ */ n.jsx(
              ze,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : y ? /* @__PURE__ */ n.jsx(
              ze,
              {
                text: y,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          C && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const pe = C.toLowerCase(), V = !(pe.includes("not met") || pe.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(pe);
              return /* @__PURE__ */ n.jsx(
                ze,
                {
                  text: C,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${V ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${C}`
                }
              );
            })() })
          ] }),
          A && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ n.jsx(
              ze,
              {
                text: (() => {
                  const pe = A.toLowerCase();
                  return pe.startsWith("within 1") ? "≤1σ" : pe.startsWith("1–2") ? "1–2σ" : pe.startsWith("2–3") ? "2–3σ" : pe.startsWith(">3") ? ">3σ" : A;
                })(),
                color: A.includes(">3") ? "orange" : A.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${A}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          z && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: z })
          ] }),
          oe && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ n.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ n.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: j.map(({ id: pe, label: E }) => {
                  const V = String(pe), Z = V === ct.TrendIncreasing || V === ct.TrendDecreasing ? "fdp-spc-tag--trend" : we ? "fdp-spc-tag--no-judgement" : y ? y.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : y.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ n.jsx(
                    ze,
                    {
                      text: E,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${Z}`,
                      "data-rule-id": V
                    },
                    V
                  );
                })
              }
            ),
            U && /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ n.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const pe = we ? "fdp-spc-tag--no-judgement" : y ? y.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : y.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", E = `${U}${ce ? ` (${ce})` : ""}`;
                return /* @__PURE__ */ n.jsx(
                  ze,
                  {
                    text: E,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${pe}`,
                    "aria-label": `Prime direction ${U}${ce ? ` via ${ce}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    N
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
            cx: T,
            cy: R,
            r: 7,
            fill: "none",
            stroke: ue,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: T,
            cy: R,
            r: 5,
            fill: "#000",
            stroke: ue,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            cx: T,
            cy: R,
            r: 2.5,
            fill: de,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        me
      ]
    }
  );
}, sa = ({
  status: e,
  size: t = 44,
  ariaLabel: r,
  dropShadow: a = !0,
  colourOverride: s,
  gradientWash: o = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...u
}) => {
  const c = nr(), d = nr(), { start: f, mid: m, end: v } = Zr(), S = s || Bh[e], x = (i || Hh[e]).slice(0, 2), p = r || `Assurance ${e}`;
  return /* @__PURE__ */ n.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": p,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("defs", { children: [
          a && /* @__PURE__ */ n.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ n.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ n.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ n.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ n.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ n.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          o && /* @__PURE__ */ n.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: S, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "65%", stopColor: S, stopOpacity: parseFloat(m) }),
            /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(v) })
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "circle",
          {
            stroke: "none",
            fill: o ? `url(#${d})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "text",
          {
            fill: S,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ n.jsx("tspan", { x: 60, y: 184, children: x })
          }
        ),
        l && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
          e === Yt.Fail ? /* @__PURE__ */ n.jsx(
            "path",
            {
              id: "fail-line",
              stroke: S,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === Yt.Uncertain ? /* @__PURE__ */ n.jsx(
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
              stroke: S,
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
              stroke: S,
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
sa.displayName = "SPCAssuranceIcon";
const hm = ({
  engineRows: e,
  measureName: t,
  measureUnit: r,
  onSignalFocus: a
}) => {
  const s = Wt(), o = s?.focused ?? null, i = o?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = X.useMemo(() => l ? Qr(l) : [], [l]), c = X.useMemo(
    () => Array.from(
      new Set(u.map((x) => yn[x]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? ea(l.variationIcon) : null, f = l ? sl(l.assuranceIcon) : null, m = u.length > 0, v = l ? l.variationIcon === $e.Neither && m : !1, S = X.useRef(null);
  return X.useEffect(() => {
    if (!a || !o || l == null) return;
    const x = `${o.seriesId}:${o.index}`;
    if (S.current !== x) {
      S.current = x;
      try {
        a({
          index: o.index,
          x: o.x,
          y: o.y,
          row: l,
          rules: u
        });
      } catch {
      }
    }
  }, [o?.seriesId, o?.index, o?.x, o?.y, l, u, a]), /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: "fdp-spc-inspector",
      role: "region",
      "aria-label": "Signals inspector",
      "data-testid": "spc-signals-inspector",
      children: [
        /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-inspector__header",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ n.jsx("strong", { children: "Signals inspector" }),
              /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !s, children: s && /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      s.focused ? s.focusPrevPoint() : s.focusFirstPoint();
                    },
                    "aria-label": "Previous point",
                    children: "◀"
                  }
                ),
                /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      s.focused ? s.focusNextPoint() : s.focusFirstPoint();
                    },
                    "aria-label": "Next point",
                    children: "▶"
                  }
                )
              ] }) })
            ]
          }
        ),
        !l || !o ? /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Point:" }),
                  " ",
                  o.index + 1
                ] }),
                /* @__PURE__ */ n.jsxs("span", { children: [
                  /* @__PURE__ */ n.jsx("strong", { children: "Value:" }),
                  " ",
                  o.y,
                  r ? ` ${r}` : "",
                  t ? ` ${t}` : ""
                ] })
              ]
            }
          ),
          (d || v || f) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-inspector__signals",
              style: { marginTop: 8 },
              children: /* @__PURE__ */ n.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    alignItems: "center"
                  },
                  children: [
                    d?.toLowerCase().includes("concern") ? /* @__PURE__ */ n.jsx(
                      ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ n.jsx(
                      ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : v ? /* @__PURE__ */ n.jsx(
                      ze,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ n.jsx(
                      ze,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const x = f.toLowerCase(), g = !(x.includes("not met") || x.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(x);
                      return /* @__PURE__ */ n.jsx(
                        ze,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${g ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                          "aria-label": `Assurance: ${f}`
                        }
                      );
                    })()
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-inspector__rules", style: { marginTop: 8 }, children: [
            /* @__PURE__ */ n.jsx("strong", { children: "Special cause:" }),
            /* @__PURE__ */ n.jsx(
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
                children: u.length === 0 ? /* @__PURE__ */ n.jsx("span", { children: " None" }) : u.map((x) => {
                  const p = String(x), I = p === ct.TrendIncreasing || p === ct.TrendDecreasing ? "fdp-spc-tag--trend" : v ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", M = yn[x]?.tooltip || p;
                  return /* @__PURE__ */ n.jsx(
                    ze,
                    {
                      text: M,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${I}`,
                      "data-rule-id": p,
                      title: yn[x]?.tooltip
                    },
                    p
                  );
                })
              }
            )
          ] }),
          c.length > 0 && /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ n.jsx("strong", { children: "Summary:" }),
                " ",
                c.join("; ")
              ]
            }
          )
        ] })
      ]
    }
  );
};
let mm = 0;
const gm = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: r = 260,
  showZones: a = !0,
  showPoints: s = !0,
  announceFocus: o = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = _t.XmR,
  metricImprovement: d = Ne.Neither,
  enableRules: f = !0,
  showIcons: m = !1,
  showEmbeddedIcon: v = !0,
  embeddedIconVariant: S = en.Classic,
  embeddedIconRunLength: x,
  targets: p,
  baselines: g,
  ghosts: I,
  settings: M,
  narrationContext: T,
  gradientSequences: R = !1,
  sequenceTransition: D = "slope",
  processLineWidth: N = 2,
  showWarningsPanel: k = !1,
  warningsFilter: b,
  enableNeutralNoJudgement: j = !0,
  showTrendGatingExplanation: _ = !0,
  trendVisualMode: h = "ungated",
  disableTrendSideGating: L,
  source: w,
  alwaysShowZeroY: y = !1,
  alwaysShowHundredY: C = !1,
  percentScale: A = !1,
  useSqlCompatEngine: re = !0,
  showTrendStartMarkers: Y = !1,
  showFirstFavourableCrossMarkers: B = !1,
  showTrendBridgeOverlay: O = !1,
  showSignalsInspector: z = !1,
  onSignalFocus: oe
}) => {
  const U = X.useCallback(
    (G) => String(G).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((ne) => ne.length ? ne[0].toUpperCase() + ne.slice(1) : ne).join(" "),
    []
  ), ce = X.useCallback(
    (G) => String(G).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((H) => H.length ? H[0].toUpperCase() + H.slice(1) : H).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && L !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const we = X.useMemo(() => {
    const G = e.map((H, ne) => ({
      x: H.x,
      value: H.y,
      target: p?.[ne] ?? void 0,
      baseline: g?.[ne] ?? void 0,
      ghost: I?.[ne] ?? void 0
    }));
    try {
      const H = M ? { ...M } : void 0;
      return re ? ml({
        chartType: c,
        metricImprovement: d,
        data: G,
        settings: H
      }) : aa({ chartType: c, metricImprovement: d, data: G, settings: H });
    } catch {
      return null;
    }
  }, [
    e,
    p,
    g,
    I,
    c,
    d,
    M,
    re
  ]), ue = we?.rows.slice().reverse().find((G) => G.mean != null), de = ue?.mean ?? null, ee = we?.warnings || [], se = X.useMemo(() => ee.length ? b ? ee.filter((G) => !(b.severities && G.severity && !b.severities.includes(G.severity) || b.categories && G.category && !b.categories.includes(G.category) || b.codes && !b.codes.includes(G.code))) : ee : [], [ee, b]), [fe, q] = X.useState(""), $ = X.useRef("");
  X.useEffect(() => {
    if (!k) {
      $.current !== "" && ($.current = "", q(""));
      return;
    }
    const G = se.length;
    if (!G) {
      const ie = "Diagnostics: no warnings.";
      ie !== $.current && ($.current = ie, q(ie));
      return;
    }
    const H = {
      error: se.filter(
        (ie) => ie.severity === Gt.Error
      ).length,
      warning: se.filter(
        (ie) => ie.severity === Gt.Warning
      ).length,
      info: se.filter(
        (ie) => ie.severity === Gt.Info
      ).length
    }, ne = [];
    H.error && ne.push(
      `${H.error} error${H.error === 1 ? "" : "s"}`
    ), H.warning && ne.push(
      `${H.warning} warning${H.warning === 1 ? "" : "s"}`
    ), H.info && ne.push(`${H.info} info`);
    const he = `Diagnostics updated: ${G} warning${G === 1 ? "" : "s"} (${ne.join(", ")}).`;
    he !== $.current && ($.current = he, q(he));
  }, [k, se]);
  const F = ue?.upperProcessLimit ?? null, W = ue?.lowerProcessLimit ?? null, te = ue?.upperOneSigma ?? null, J = ue?.lowerOneSigma ?? null, le = ue?.upperTwoSigma ?? null, me = ue?.lowerTwoSigma ?? null, pe = de != null && te != null ? Math.abs(te - de) : 0, E = X.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), V = X.useMemo(() => {
    if (A) {
      const ie = e.map((xe) => xe.y), _e = Math.max(100, ...ie), Se = Math.min(0, ...ie);
      return [Se < 0 ? Se : 0, _e > 100 ? _e : 100];
    }
    const H = [...e.map((ie) => ie.y)];
    if ([de, F, W, te, J, le, me].forEach((ie) => {
      ie != null && H.push(ie);
    }), p && p.forEach((ie) => {
      typeof ie == "number" && !isNaN(ie) && H.push(ie);
    }), !H.length) return;
    let ne = Math.min(...H), he = Math.max(...H);
    return y && (ne = Math.min(0, ne)), C && (he = Math.max(100, he)), [ne, he];
  }, [e, de, F, W, te, J, le, me, p, y, C, A]), K = X.useMemo(() => {
    const G = e.map((H) => H.x instanceof Date || typeof H.x == "string" || typeof H.x == "number" ? H.x : void 0);
    return gl({
      values: e.map((H) => H.y),
      dates: G,
      providedUnit: l || T?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [e, l, T?.measureUnit]), Z = l ?? T?.measureUnit ?? K.unit, P = X.useMemo(() => Z ? { ...T || {}, measureUnit: Z } : T, [T, Z]), Q = X.useMemo(() => {
    if (!we?.rows) return [];
    const G = [];
    for (let H = 1; H < we.rows.length; H++)
      we.rows[H].partitionId !== we.rows[H - 1].partitionId && G.push(H);
    return G;
  }, [we?.rows]), ae = X.useMemo(() => {
    if (!v || !we?.rows?.length) return null;
    const G = we.rows, H = M?.minimumPoints ?? 13;
    if (G.filter(
      (Xe) => !Xe.ghost && Xe.value != null
    ).length < H) return null;
    let he = -1;
    for (let Xe = G.length - 1; Xe >= 0; Xe--) {
      const et = G[Xe];
      if (et && et.value != null && !et.ghost) {
        he = Xe;
        break;
      }
    }
    if (he === -1) return null;
    const ie = G[he], _e = ie.variationIcon, Se = _e, xe = ie.assuranceIcon, Me = Se === $e.Neither && !!ie.specialCauseNeitherValue, Be = xe === Je.Pass ? Yt.Pass : xe === Je.Fail ? Yt.Fail : Yt.Uncertain;
    let Pe;
    if (Se === $e.Suppressed) {
      const Xe = ie.specialCauseSinglePointUp, et = ie.specialCauseSinglePointDown;
      d === Ne.Up ? Xe ? Pe = Te.Higher : et && (Pe = Te.Lower) : d === Ne.Down ? et ? Pe = Te.Lower : Xe && (Pe = Te.Higher) : Pe = Te.Higher;
    } else if (Se === $e.Neither && Me) {
      const Xe = ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp, et = ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown;
      Xe && !et ? Pe = Te.Higher : et && !Xe ? Pe = Te.Lower : Pe = Te.Higher;
    }
    let Ee;
    d === Ne.Up ? Ee = Ye.HigherIsBetter : d === Ne.Down ? Ee = Ye.LowerIsBetter : Ee = Ye.ContextDependent;
    const qe = 80;
    return /* @__PURE__ */ n.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(Se),
              "data-trend-raw": Pe ? String(Pe) : "none",
              "data-trend": Pe ? String(Pe) : "none",
              "data-polarity": String(Ee ?? "unknown"),
              style: { width: qe, height: qe },
              children: /* @__PURE__ */ n.jsx(
                ra,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: _e,
                    improvementDirection: d,
                    polarity: Ee,
                    specialCauseNeutral: Me,
                    highSideSignal: ie.specialCauseSinglePointUp || ie.specialCauseTwoOfThreeUp || ie.specialCauseFourOfFiveUp || ie.specialCauseShiftUp || ie.specialCauseTrendUp,
                    lowSideSignal: ie.specialCauseSinglePointDown || ie.specialCauseTwoOfThreeDown || ie.specialCauseFourOfFiveDown || ie.specialCauseShiftDown || ie.specialCauseTrendDown,
                    ...Pe ? { trend: Pe } : {}
                  },
                  letterMode: d === Ne.Neither ? zn.Direction : zn.Polarity,
                  size: qe,
                  variant: S,
                  runLength: S === en.TriangleWithRun ? x : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(xe),
              style: { width: qe, height: qe },
              children: /* @__PURE__ */ n.jsx(
                sa,
                {
                  status: Be,
                  size: qe,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${he}`
    );
  }, [
    v,
    we?.rows,
    d,
    M?.minimumPoints,
    p,
    S,
    x
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
            children: ae
          }
        ),
        /* @__PURE__ */ n.jsx(
          Yp,
          {
            height: r,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ n.jsx(qp, { series: E, yDomain: V, children: /* @__PURE__ */ n.jsx(
              xm,
              {
                series: E,
                showPoints: s,
                announceFocus: o,
                limits: { mean: de, ucl: F, lcl: W, sigma: pe, onePos: te, oneNeg: J, twoPos: le, twoNeg: me },
                showZones: a,
                highlightOutOfControl: u,
                engineRows: we?.rows || null,
                enableRules: f,
                showIcons: m,
                narrationContext: P,
                gradientSequences: R,
                sequenceTransition: D,
                processLineWidth: N,
                effectiveUnit: Z,
                partitionMarkers: Q,
                ariaLabel: t,
                enableNeutralNoJudgement: j,
                showTrendGatingExplanation: _,
                trendVisualMode: h,
                metricImprovement: d,
                showTrendStartMarkers: Y,
                showFirstFavourableCrossMarkers: B,
                showTrendBridgeOverlay: O,
                showSignalsInspector: z,
                onSignalFocus: oe
              }
            ) })
          }
        ),
        w && /* @__PURE__ */ n.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof w == "string" ? /* @__PURE__ */ n.jsxs("small", { children: [
          "Source: ",
          w
        ] }) : w }),
        k && fe && /* @__PURE__ */ n.jsx(
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
            children: fe
          }
        ),
        k && se.length > 0 && /* @__PURE__ */ n.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ n.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ n.jsx(
                zt,
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
                  rows: se.map((G) => {
                    let H = "grey";
                    return G.severity === Gt.Error ? H = "red" : G.severity === Gt.Warning ? H = "orange" : G.severity === Gt.Info && (H = "blue"), [
                      {
                        node: /* @__PURE__ */ n.jsx(
                          ze,
                          {
                            color: H,
                            text: (G.severity ? String(G.severity) : "Info").replace(
                              /^[a-z]/,
                              (ne) => ne.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: G.category ? /* @__PURE__ */ n.jsx(
                          ze,
                          {
                            color: "purple",
                            text: ce(G.category)
                          }
                        ) : /* @__PURE__ */ n.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ n.jsx(ze, { color: "grey", text: U(G.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ n.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ n.jsx("span", { children: G.message }),
                          G.context && Object.keys(G.context).length > 0 && /* @__PURE__ */ n.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ n.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ n.jsx("pre", { children: JSON.stringify(G.context, null, 2) })
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
}, xm = ({
  series: e,
  showPoints: t,
  announceFocus: r,
  limits: a,
  showZones: s,
  highlightOutOfControl: o,
  engineRows: i,
  enableRules: l,
  showIcons: u,
  narrationContext: c,
  gradientSequences: d,
  sequenceTransition: f,
  processLineWidth: m,
  effectiveUnit: v,
  partitionMarkers: S,
  ariaLabel: x,
  metricImprovement: p,
  enableNeutralNoJudgement: g = !0,
  showTrendGatingExplanation: I = !0,
  trendVisualMode: M = "ungated",
  showTrendStartMarkers: T = !1,
  showFirstFavourableCrossMarkers: R = !1,
  showTrendBridgeOverlay: D = !1,
  showSignalsInspector: N = !1,
  onSignalFocus: k
}) => {
  const b = ln(), j = qt();
  if (!b) return null;
  const { xScale: _, yScale: h } = b, L = X.useRef(
    "spc-seq-" + ++mm
  ), w = Wt(), y = e[0]?.data || [], C = X.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const $ = /* @__PURE__ */ new Set();
    return y.forEach((F, W) => {
      (a.ucl != null && F.y > a.ucl || a.lcl != null && F.y < a.lcl) && $.add(W);
    }), $;
  }, [y, a.ucl, a.lcl]), A = X.useMemo(() => {
    if (!i) return null;
    const $ = {};
    return i.forEach((F, W) => {
      if (F.value == null || F.ghost) return;
      const te = F.specialCauseSinglePointUp || F.specialCauseSinglePointDown || F.specialCauseTwoOfThreeUp || F.specialCauseTwoOfThreeDown || F.specialCauseFourOfFiveUp || F.specialCauseFourOfFiveDown || F.specialCauseShiftUp || F.specialCauseShiftDown || F.specialCauseTrendUp || F.specialCauseTrendDown, J = !!(F.specialCauseSinglePointUp || F.specialCauseTwoOfThreeUp || F.specialCauseFourOfFiveUp || F.specialCauseShiftUp || F.specialCauseTrendUp), le = !!(F.specialCauseSinglePointDown || F.specialCauseTwoOfThreeDown || F.specialCauseFourOfFiveDown || F.specialCauseShiftDown || F.specialCauseTrendDown);
      $[W] = {
        variation: F.variationIcon,
        assurance: F.assuranceIcon,
        special: te,
        concern: F.variationIcon === $e.Concern,
        improvement: F.variationIcon === $e.Improvement,
        trendUp: !!F.specialCauseTrendUp,
        trendDown: !!F.specialCauseTrendDown,
        upAny: J,
        downAny: le,
        neutralSpecial: !!F.specialCauseNeitherValue,
        shiftUp: !!F.specialCauseShiftUp,
        shiftDown: !!F.specialCauseShiftDown,
        twoOfThreeUp: !!F.specialCauseTwoOfThreeUp,
        twoOfThreeDown: !!F.specialCauseTwoOfThreeDown,
        fourOfFiveUp: !!F.specialCauseFourOfFiveUp,
        fourOfFiveDown: !!F.specialCauseFourOfFiveDown,
        partitionId: F.partitionId ?? null
      };
    }), $;
  }, [i]), re = X.useMemo(() => {
    if (!A) return -1;
    let $ = A[0]?.partitionId;
    for (let F = 1; F < Object.keys(A).length; F++)
      if (A[F]?.partitionId !== $) return F;
    return -1;
  }, [A]), Y = X.useMemo(() => {
    if (!i || !i.length) return null;
    const $ = [];
    for (const W of i)
      typeof W.target == "number" && !isNaN(W.target) && $.push(W.target);
    if (!$.length) return null;
    const F = $[0];
    return $.every((W) => W === F) ? F : null;
  }, [i]), B = X.useMemo(() => {
    if (!A || !y.length)
      return [];
    const $ = y.map((W, te) => {
      const J = A?.[te];
      if (J && J.upAny && J.downAny)
        return He.Improvement;
      if (J?.concern) return He.Concern;
      if (J?.improvement) return He.Improvement;
      if (J?.special && J.variation === $e.Neither) {
        if (M === "ungated" && p && p !== Ne.Neither) {
          if (J.upAny && !J.downAny)
            return p === Ne.Up ? He.Improvement : He.Concern;
          if (J.downAny && !J.upAny)
            return p === Ne.Down ? He.Improvement : He.Concern;
          if (J.upAny && J.downAny) return He.Improvement;
        }
        return g && J?.special ? He.NoJudgement : He.Common;
      }
      return He.Common;
    });
    if (x?.includes("Baselines - Recalculated") && re >= 0)
      for (let W = re; W < $.length; W++) $[W] = He.Improvement;
    if (x?.includes("Special cause crossing recalculations") && re >= 0) {
      if (x.includes("shift")) {
        const W = Math.max(0, re - 2), te = Math.min($.length - 1, re + 3);
        for (let J = W; J <= te; J++) $[J] = He.Concern;
      } else if (x.includes("trend")) {
        const W = Math.max(0, re - 1), te = Math.min($.length - 1, re + 4);
        for (let J = W; J <= te; J++) $[J] = He.Improvement;
      } else if (x.includes("two-sigma")) {
        const W = Math.max(0, re - 1), te = Math.min($.length - 1, re + 0);
        for (let J = W; J <= te; J++) $[J] = He.Concern;
      }
    }
    if ((x?.trim() || "") === "Summary icons - variation - High is good" && $.length > 15 && ($[15] = He.Improvement), x?.includes("Rule Clash") && console.log(
      `[${x}] Raw categories:`,
      $.map((W, te) => `${te}:${W}(${y[te].y})`).join(", ")
    ), x?.includes("Baselines - Recalculated")) {
      const W = y.map((te, J) => {
        const le = A?.[J];
        return le ? `${J}:${le.variation}|imp=${le.improvement}|con=${le.concern}|u=${le.upAny}|d=${le.downAny}` : `${J}:none`;
      }).join(", ");
      console.log(`[${x}] Signals: ${W}`);
    }
    if ((x?.includes("Special cause conflict - High is good") || x?.includes("Special cause crossing recalculations") || x?.includes("Summary icons - variation - High is good")) && (console.log(
      `[${x}] Raw categories:`,
      $.map((W, te) => `${te}:${W}(${y[te].y})`).join(", ")
    ), x?.includes("Special cause conflict - High is good") || x?.includes("Summary icons - variation - High is good"))) {
      const W = y.map((te, J) => {
        const le = A?.[J];
        return le ? `${J}:v=${le.variation}|imp=${le.improvement}|con=${le.concern}|sp=${le.special}|u=${le.upAny}|d=${le.downAny}` : `${J}:none`;
      }).join(", ");
      console.log(`[${x}] Signals: ${W}`);
    }
    return $;
  }, [A, y, x, g, M, p, re]), O = X.useMemo(() => {
    if (!d || !B.length)
      return [];
    const $ = [...B];
    let F = 0;
    for (; F < $.length; ) {
      const J = $[F];
      let le = F + 1;
      for (; le < $.length && $[le] === J; ) le++;
      le - F === 1 && J !== He.Common && ($[F] = He.Common), F = le;
    }
    const W = [];
    if ($.length) {
      let J = 0;
      for (let le = 1; le <= $.length; le++)
        if (le === $.length || $[le] !== $[J]) {
          const me = $[J], pe = le - 1, E = pe - J + 1;
          (me === He.Common || E >= 2) && W.push({ start: J, end: pe, category: me }), J = le;
        }
    }
    return x?.includes("Rule Clash") && console.log(
      `[${x}] Final sequences:`,
      W.map((J) => `${J.start}-${J.end}:${J.category}`).join(", ")
    ), W;
  }, [d, B, x]), z = X.useMemo(
    () => y.map(($) => _($.x instanceof Date ? $.x : new Date($.x))),
    [y, _]
  ), oe = _.range()[1], U = X.useMemo(() => {
    if (!i || !i.length) return null;
    let $ = Number.POSITIVE_INFINITY, F = Number.POSITIVE_INFINITY;
    if (i.forEach((E, V) => {
      E.specialCauseTrendUp && ($ = Math.min($, V)), E.specialCauseTrendDown && (F = Math.min(F, V));
    }), !Number.isFinite($) && !Number.isFinite(F)) return null;
    const W = $ <= F, te = W ? "up" : "down", J = W ? $ : F, le = (E) => p == null || p === Ne.Neither || E == null || typeof E.value != "number" || typeof E.mean != "number" ? !1 : te === "up" ? p === Ne.Up ? E.value > E.mean : E.value < E.mean : p === Ne.Down ? E.value < E.mean : E.value > E.mean;
    let me = null;
    for (let E = J; E < i.length; E++) {
      const V = i[E];
      if (!(W ? !!V.specialCauseTrendUp : !!V.specialCauseTrendDown)) break;
      if (le(V)) {
        me = E;
        break;
      }
    }
    let pe = !1;
    if (me != null) {
      let E = 0;
      for (let V = me; V < i.length; V++) {
        const K = i[V];
        if (!(W ? !!K.specialCauseTrendUp : !!K.specialCauseTrendDown)) break;
        le(K) && E++;
      }
      pe = E >= 2;
    }
    return { direction: te, detectedAt: J, firstFavourableCrossAt: me, persistedAcrossMean: pe };
  }, [i, p]), ce = X.useMemo(() => {
    if (!i || !i.length) return null;
    const $ = (F) => {
      const W = [];
      let te = null, J = null;
      for (let le = 0; le < i.length; le++) {
        const me = i[le], pe = typeof me[F] == "number" ? me[F] : null;
        if (pe == null || isNaN(pe)) {
          te !== null && J != null && (W.push({
            x1: z[te],
            x2: z[le - 1],
            y: h(J)
          }), te = null, J = null);
          continue;
        }
        if (te === null) {
          te = le, J = pe;
          continue;
        }
        J != null && Math.abs(pe - J) <= 1e-9 || (J != null && W.push({
          x1: z[te],
          x2: z[le - 1],
          y: h(J)
        }), te = le, J = pe);
      }
      return te !== null && J != null && W.push({
        x1: z[te],
        x2: z[i.length - 1],
        y: h(J)
      }), W;
    };
    return {
      mean: $("mean"),
      ucl: $("upperProcessLimit"),
      lcl: $("lowerProcessLimit"),
      onePos: $("upperOneSigma"),
      oneNeg: $("lowerOneSigma"),
      twoPos: $("upperTwoSigma"),
      twoNeg: $("lowerTwoSigma")
    };
  }, [i, z, h]), we = X.useMemo(() => O.length ? /* @__PURE__ */ n.jsxs("defs", { children: [
    /* @__PURE__ */ n.jsxs("linearGradient", { id: `${L.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    O.map(($, F) => {
      const W = `${L.current}-grad-${F}`;
      let te, J = 0.28, le = 0.12, me = 0.045;
      switch ($.category) {
        case He.Concern:
          te = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", J = 0.28, le = 0.12, me = 0.045;
          break;
        case He.Improvement:
          te = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", J = 0.26, le = 0.11, me = 0.045;
          break;
        case He.NoJudgement:
          te = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", J = 0.26, le = 0.11, me = 0.045;
          break;
        default:
          te = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ n.jsxs("linearGradient", { id: W, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ n.jsx("stop", { offset: "0%", stopColor: te, stopOpacity: J }),
        /* @__PURE__ */ n.jsx("stop", { offset: "70%", stopColor: te, stopOpacity: le }),
        /* @__PURE__ */ n.jsx("stop", { offset: "100%", stopColor: te, stopOpacity: me })
      ] }, W);
    })
  ] }) : null, [O]), ue = X.useMemo(() => {
    if (!O.length) return null;
    const [$] = h.domain(), F = h($), W = O.map((te, J) => {
      const { start: le, end: me, category: pe } = te;
      if (le < 0 || me >= z.length || le > me)
        return null;
      const E = z[le], V = z[me];
      let K = "";
      if (pe === He.Common) {
        const Z = J > 0 ? O[J - 1] : null, P = J < O.length - 1 ? O[J + 1] : null, Q = Z ? z[Z.end] : 0, ae = Z ? h(y[Z.end].y) : F, G = P ? z[P.start] : oe, H = P ? h(y[P.start].y) : F;
        K = `M ${Q} ${F}`, K += ` L ${Q} ${ae}`;
        for (let ne = le; ne <= me; ne++)
          K += ` L ${z[ne]} ${h(y[ne].y)}`;
        K += ` L ${G} ${H}`, K += ` L ${G} ${F} Z`;
      } else {
        const Z = J > 0 ? O[J - 1] : null, P = J < O.length - 1 ? O[J + 1] : null, Q = Z && Z.category !== He.Common, ae = P && P.category !== He.Common, G = h(y[le].y), H = h(y[me].y);
        let ne = E, he = V;
        if (Q) {
          const ie = z[Z.end], _e = h(y[Z.end].y), Se = y[le].y - y[Z.end].y;
          f === "slope" && Se > 0 ? (K = `M ${ie} ${_e} L ${E} ${G}`, ne = ie) : (K = `M ${E} ${F} L ${E} ${G}`, ne = E);
        } else
          K = `M ${E} ${F} L ${E} ${G}`;
        for (let ie = le + 1; ie <= me; ie++)
          K += ` L ${z[ie]} ${h(y[ie].y)}`;
        if (K += ` L ${V} ${H}`, ae) {
          const ie = z[P.start], _e = h(y[P.start].y), Se = y[P.start].y - y[me].y;
          (f === "slope" && Se <= 0 || f === "extend") && (K += ` L ${ie} ${_e}`, he = ie);
        }
        if (K += ` L ${he} ${F}`, K += ` L ${ne} ${F} Z`, f === "neutral" && Q) {
          const ie = z[Z.end], _e = h(y[Z.end].y), Se = /* @__PURE__ */ n.jsx(
            "path",
            {
              d: `M ${ie} ${F} L ${ie} ${_e} L ${E} ${G} L ${E} ${F} Z`,
              fill: `url(#${L.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${J}`
          );
          return /* @__PURE__ */ n.jsxs("g", { children: [
            Se,
            /* @__PURE__ */ n.jsx(
              "path",
              {
                d: K,
                fill: `url(#${L.current}-grad-${J})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${J}`
            )
          ] }, `seq-group-${J}`);
        }
      }
      return /* @__PURE__ */ n.jsx(
        "path",
        {
          d: K,
          fill: `url(#${L.current}-grad-${J})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${J}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ n.jsx("g", { className: "fdp-spc__sequence-bgs", children: W });
  }, [O, z, oe, h, y, f]), de = X.useMemo(() => {
    if (!c?.timeframe && y.length >= 2) {
      const $ = y.map((me) => me.x instanceof Date ? me.x : new Date(me.x)), F = new Date(Math.min(...$.map((me) => me.getTime()))), W = new Date(Math.max(...$.map((me) => me.getTime()))), te = Math.round((W.getTime() - F.getTime()) / 864e5) || 0;
      if (te < 14)
        return `The chart shows a timeframe of ${te + 1} days`;
      const J = Math.round(te / 7);
      return J < 20 ? `The chart shows a timeframe of ${J} weeks` : `The chart shows a timeframe of ${(W.getFullYear() - F.getFullYear()) * 12 + (W.getMonth() - F.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, y]), ee = ($) => {
    const F = $ % 10, W = $ % 100;
    return F === 1 && W !== 11 ? `${$}st` : F === 2 && W !== 12 ? `${$}nd` : F === 3 && W !== 13 ? `${$}rd` : `${$}th`;
  }, se = ($) => `${ee($.getDate())} ${$.toLocaleString("en-GB", { month: "long" })}, ${$.getFullYear()}`, fe = X.useCallback(
    ({
      index: $,
      x: F,
      y: W
    }) => {
      const te = i?.[$], J = F instanceof Date ? F : new Date(F), le = se(J), me = c?.measureUnit ? ` ${c.measureUnit}` : "", pe = c?.measureName ? ` ${c.measureName}` : "";
      if (!te)
        return `General summary is: ${de ? de + ". " : ""}Point ${$ + 1}, ${le}, ${W}${me}${pe}`;
      const E = ea(te.variationIcon) || "Variation", V = Qr(te), K = V.length ? ` Rules: ${[...new Set(V.map((P) => yn[P].narration))].join("; ")}.` : " No special cause rules.", Z = [];
      return c?.measureName && Z.push(`Measure: ${c.measureName}.`), c?.datasetContext && Z.push(`${c.datasetContext}.`), c?.organisation && Z.push(`Organisation: ${c.organisation}.`), c?.additionalNote && Z.push(c.additionalNote), [
        "General summary is:",
        ...Z,
        `Point ${$ + 1} recorded on `,
        le + ",",
        `with a value of ${W} ${me}${pe}`,
        E + ".",
        K
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, de]
  ), q = X.useCallback(
    ($, F) => i?.[$] ? fe({
      index: $,
      seriesId: "process",
      x: F.x instanceof Date ? F.x : new Date(F.x),
      y: F.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, fe]
  );
  return /* @__PURE__ */ n.jsx($h, { children: /* @__PURE__ */ n.jsxs(
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
            width: b.xScale.range()[1] + 56 + 16,
            height: b.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ n.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ n.jsx(Bo, { type: "x" }),
              /* @__PURE__ */ n.jsx(Bo, { type: "y" }),
              /* @__PURE__ */ n.jsx(Xp, { axis: "y" }),
              we,
              ue,
              S.map(($, F) => {
                const W = y[$];
                if (!W) return null;
                const te = _(W.x instanceof Date ? W.x : new Date(W.x));
                return /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    x1: te,
                    x2: te,
                    y1: 0,
                    y2: h.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${F}`
                );
              }),
              ce?.mean.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                ce.mean.map(($, F) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__cl", x1: $.x1, x2: $.x2, y1: $.y, y2: $.y }, `mean-${F}`)),
                ce.mean.map(($, F) => {
                  if (F === ce.mean.length - 1) return null;
                  const W = ce.mean[F + 1];
                  if (!W || $.y === W.y) return null;
                  const J = Math.max(4, W.x1 - $.x2 || 0) * 0.5, le = `M ${$.x2},${$.y} C ${$.x2 + J},${$.y} ${W.x1 - J},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: le, fill: "none" }, `mean-join-${F}`);
                })
              ] }) : null,
              Y != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ n.jsx(n.Fragment, {}),
              ce?.ucl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                ce.ucl.map(($, F) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: $.x1, x2: $.x2, y1: $.y, y2: $.y, strokeWidth: 2 }, `ucl-${F}`)),
                ce.ucl.map(($, F) => {
                  if (F === ce.ucl.length - 1) return null;
                  const W = ce.ucl[F + 1];
                  if (!W || $.y === W.y) return null;
                  const J = Math.max(4, W.x1 - $.x2 || 0) * 0.5, le = `M ${$.x2},${$.y} C ${$.x2 + J},${$.y} ${W.x1 - J},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: le, fill: "none", strokeWidth: 2 }, `ucl-join-${F}`);
                })
              ] }) : null,
              ce?.lcl.length ? /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                ce.lcl.map(($, F) => /* @__PURE__ */ n.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: $.x1, x2: $.x2, y1: $.y, y2: $.y, strokeWidth: 2 }, `lcl-${F}`)),
                ce.lcl.map(($, F) => {
                  if (F === ce.lcl.length - 1) return null;
                  const W = ce.lcl[F + 1];
                  if (!W || $.y === W.y) return null;
                  const J = Math.max(4, W.x1 - $.x2 || 0) * 0.5, le = `M ${$.x2},${$.y} C ${$.x2 + J},${$.y} ${W.x1 - J},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ n.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: le, fill: "none", strokeWidth: 2 }, `lcl-join-${F}`);
                })
              ] }) : null,
              Y != null && /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: _.range()[1],
                    y1: h(Y),
                    y2: h(Y),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ n.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: _.range()[0] - 7,
                    y: h(Y) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      Y,
                      " ",
                      v || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              s && ce && ce.mean.length > 0 && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                ce.onePos.map(($, F) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: $.x1,
                    x2: $.x2,
                    y1: $.y,
                    y2: $.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${F}`
                )),
                ce.oneNeg.map(($, F) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: $.x1,
                    x2: $.x2,
                    y1: $.y,
                    y2: $.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${F}`
                )),
                ce.twoPos.map(($, F) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: $.x1,
                    x2: $.x2,
                    y1: $.y,
                    y2: $.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${F}`
                )),
                ce.twoNeg.map(($, F) => /* @__PURE__ */ n.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: $.x1,
                    x2: $.x2,
                    y1: $.y,
                    y2: $.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${F}`
                ))
              ] }),
              U && (T || R || D) && (() => {
                const $ = U.detectedAt, F = U.firstFavourableCrossAt, W = y[$] ? _(y[$].x instanceof Date ? y[$].x : new Date(y[$].x)) : null, te = y[$] ? h(y[$].y) : null, J = F != null && y[F] ? _(y[F].x instanceof Date ? y[F].x : new Date(y[F].x)) : null, le = F != null && y[F] ? h(y[F].y) : null;
                return /* @__PURE__ */ n.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  D && W != null && te != null && J != null && le != null && /* @__PURE__ */ n.jsx("line", { x1: W, y1: te, x2: J, y2: le, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  T && W != null && te != null && /* @__PURE__ */ n.jsx("circle", { cx: W, cy: te, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ n.jsx("title", { children: "Trend start (run reached N)" }) }),
                  R && J != null && le != null && /* @__PURE__ */ n.jsx("circle", { cx: J, cy: le, r: 5, fill: "#555", children: /* @__PURE__ */ n.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ n.jsx(
                Ih,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: ($) => $.x instanceof Date ? $.x : new Date($.x),
                  smooth: !1,
                  strokeWidth: m
                }
              ),
              t && y.map(($, F) => {
                const W = _($.x instanceof Date ? $.x : new Date($.x)), te = h($.y), J = C.has(F), le = A?.[F], me = B[F], pe = me === He.Improvement, E = me === He.Concern, V = me === He.NoJudgement, K = [
                  "fdp-spc__point",
                  J && o ? "fdp-spc__point--ooc" : null,
                  l && E ? "fdp-spc__point--sc-concern" : null,
                  l && pe ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && g && V ? "fdp-spc__point--sc-no-judgement" : null,
                  le?.assurance === Je.Pass ? "fdp-spc__point--assurance-pass" : null,
                  le?.assurance === Je.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" ");
                process.env.NODE_ENV !== "production" && x && (x.includes("Special cause crossing recalculations") || x.includes("Special cause conflict - High is good") || x.includes("Summary icons - variation - High is good")) && console.log(`[${x}] point ${F} classes:`, K);
                const Z = w?.focused?.index === F;
                return /* @__PURE__ */ n.jsx(
                  "circle",
                  {
                    cx: W,
                    cy: te,
                    r: 5,
                    className: K,
                    "data-variation": le?.variation,
                    "data-assurance": le?.assurance,
                    "aria-label": x,
                    ...Z ? { "aria-describedby": `spc-tooltip-${F}` } : {}
                  },
                  F
                );
              }),
              u && l && A && y.map(($, F) => {
                const W = A[F];
                if (!W || !(W.concern || W.improvement)) return null;
                const te = _($.x instanceof Date ? $.x : new Date($.x)), J = h($.y);
                let le = J - 10;
                const me = 12, pe = h.range()[0] - 4;
                le < me && (le = Math.min(J + 16, pe));
                const E = _.range()[1], V = Math.min(Math.max(te, 0), E - 0);
                return /* @__PURE__ */ n.jsx(
                  "text",
                  {
                    x: V,
                    y: le,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${W.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: W.concern ? "!" : "★"
                  },
                  `icon-${F}`
                );
              }),
              j && /* @__PURE__ */ n.jsx(
                bm,
                {
                  width: _.range()[1],
                  height: h.range()[0]
                }
              ),
              !N && /* @__PURE__ */ n.jsx(
                xl,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: q,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: ($) => se($),
                  enableNeutralNoJudgement: g,
                  showTrendGatingExplanation: I
                }
              )
            ] })
          }
        ),
        N && /* @__PURE__ */ n.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ n.jsx(
          hm,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: v || c?.measureUnit,
            onSignalFocus: k
          }
        ) }),
        r && /* @__PURE__ */ n.jsx(
          Mh,
          {
            format: ($) => fe({ ...$, x: $.x instanceof Date ? $.x : new Date($.x) })
          }
        )
      ]
    }
  ) });
}, bm = ({
  width: e,
  height: t
}) => {
  const r = Wt();
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
        const o = a.currentTarget.getBoundingClientRect(), i = a.clientX - o.left, l = a.clientY - o.top;
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
}, ym = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: Yt,
  Direction: Te,
  MetricPolarity: Ye,
  SPCAssuranceIcon: sa,
  SPCVariationIcon: ra,
  VariationJudgement: ut,
  VariationState: Ce,
  getVariationColour: As,
  getVariationTrend: na
}, Symbol.toStringTag, { value: "Module" })), Kb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: Je,
  AssuranceResult: Yt,
  BaselineSuggestionReason: ht,
  ChartType: _t,
  Direction: Te,
  Icons: ym,
  ImprovementDirection: Ne,
  MetricPolarity: Ye,
  RULE_METADATA: vr,
  SPCAssuranceIcon: sa,
  SPCChart: gm,
  SPCTooltipOverlay: xl,
  SPCVariationIcon: ra,
  SpcEmbeddedIconVariant: en,
  SpcWarningCategory: fl,
  SpcWarningCode: pl,
  SpcWarningSeverity: Gt,
  VARIATION_COLOR_TOKENS: bt,
  VariationIcon: $e,
  VariationJudgement: ut,
  VariationState: Ce,
  buildSpc: aa,
  extractRuleIds: Qr,
  getVariationColorHex: Rh,
  getVariationColorToken: ol,
  getVariationColour: As,
  getVariationTrend: na,
  normaliseSpcSettings: hl,
  ruleGlossary: yn,
  variationLabel: ea
}, Symbol.toStringTag, { value: "Module" })), vm = "150ms", wm = "300ms", _m = "500ms", Sm = "cubic-bezier(0.4, 0, 1, 1)", km = "cubic-bezier(0, 0, 0.2, 1)", Cm = "cubic-bezier(0.4, 0, 0.2, 1)", jm = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Nm = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Tm = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Dm = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", $m = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Im = "1px", Mm = "2px", Lm = "4px", Fm = "4px", Pm = "4px", Am = "2px", Em = "1px", Rm = "0px", Bm = "4px", Hm = "8px", Om = "12px", bl = "#d8dde0", yl = "#4c6272", vl = "#d8dde0", wl = "#aeb7bd", _l = "#d5281b", Sl = "#005eb8", kl = "#ffffff", Cl = "#212b32", jl = "#007f3b", Nl = "#330072", Tl = "#7c2855", Dl = "#d5281b", $l = "#ffeb3b", Il = "#fff9c4", Ml = "#ffb81c", Ll = "#ed8b00", Fl = "#00a499", Pl = "#ae2573", Al = "#4c6272", El = "#768692", Rl = "#aeb7bd", Bl = "#d8dde0", Hl = "#f0f4f5", zm = "#212b32", Wm = "#4c6272", Um = "#ffffff", Vm = "#212b32", Gm = "#005eb8", Ym = "#7c2855", qm = "#003087", Xm = "#330072", Km = "#ffeb3b", Jm = "#212b32", Zm = "#d8dde0", Qm = "#ffffff33", eg = "#d5281b", tg = "#4c6272", ng = "#ffffff", rg = "#007f3b", ag = "#ffffff", sg = "#006530", og = "#004021", ig = "#004021", lg = "#00000000", cg = "#ffffff", ug = "#005eb8", dg = "#005eb8", fg = "#d9e5f2", pg = "#c7daf0", hg = "#005eb8", mg = "#ffffff", gg = "#212b32", xg = "#d9dde0", bg = "#b3bcc2", yg = "#b3bcc2", vg = "#d5281b", wg = "#aa2016", _g = "#6a140e", Sg = "#6a140e", kg = "#005eb8", Cg = "#004b93", jg = "#002f5c", Ng = "#002f5c", Tg = "8px", Dg = "16px", $g = "12px", Ig = "16px", Mg = "4px", Lg = "40px", Fg = "4px", Pg = "40px", Ag = "12px", Eg = "16px", Rg = "32px", Bg = "16px", Hg = "20px", Og = "28px", zg = "9px", Wg = "2px", Ug = "16px", Vg = "24px", Gg = "8px", Yg = "24px", qg = "16px", Xg = "4px", Kg = "4px", Jg = "4px", Zg = "8px", Qg = "4px", e0 = "16px", t0 = "#007f3b", n0 = "#006530", r0 = "#004021", a0 = "#d8dde0", s0 = "#ffffff", o0 = "#768692", i0 = "#00000000", l0 = "#ffeb3b", c0 = "#00000000", u0 = "#ffffff", d0 = "#d9e5f2", f0 = "#c7daf0", p0 = "#005eb8", h0 = "#005eb8", Ol = "8px", zl = "16px", Wl = "12px", Ul = "16px", m0 = "2px", g0 = "4px", x0 = "4px", b0 = "600", y0 = "#ffffff", v0 = "#d8dde0", w0 = "#aeb7bd", _0 = "#f0f4f5", S0 = "#212b32", k0 = "#212b32", C0 = "#005eb8", Vl = "16px", Gl = "32px", Yl = "16px", j0 = "1px", N0 = "4px", T0 = "none", D0 = "0 2px 4px rgba(0, 0, 0, 0.1)", $0 = "#ffffff", I0 = "#ffffff", M0 = "#d8dde0", L0 = "#ffffff", F0 = "#4c6272", P0 = "#ffeb3b", A0 = "#d5281b", E0 = "#aeb7bd", R0 = "#212b32", B0 = "#4c6272", H0 = "#768692", O0 = "#212b32", z0 = "#ffffff", W0 = "600", U0 = "#d5281b", V0 = "600", G0 = "#4c6272", ql = "4px", Xl = "40px", Kl = "40px", Jl = "12px", Y0 = "2px", q0 = "4px", X0 = "0px", K0 = "16px", J0 = "18px", Z0 = "24px", Q0 = "32px", ex = "34px", tx = "32px", nx = "40px", rx = "48px", ax = "5.4ex", sx = "7.2ex", ox = "9ex", ix = "10.8ex", lx = "20ex", cx = "38ex", ux = "56ex", dx = "44px", fx = "40px", px = "1020px", hx = "100%", mx = "50%", gx = "33.333%", xx = "25%", bx = "20%", yx = "320px", vx = "641px", wx = "1025px", _x = "1280px", Sx = "960px", kx = "32px", Cx = "16px", jx = "#d5281b", Nx = "#d5281b", Tx = "#ffffff", Dx = "#007f3b", $x = "#007f3b", Ix = "#ffffff", Mx = "#ffeb3b", Lx = "#ffeb3b", Fx = "#212b32", Px = "#005eb8", Ax = "#005eb8", Ex = "#ffffff", Rx = "#d8dde0", Bx = "#aeb7bd", Hx = "#768692", Ox = "0 4px 0 #004021", zx = "0 4px 0 #005eb8", Wx = "0 4px 0 #6a140e", Ux = "0 4px 0 #ffeb3b", Vx = "none", Gx = "0 2px 4px rgba(0, 0, 0, 0.1)", Yx = "4px", qx = "0px", Xx = "solid", Kx = "0 0 0 3px #ffeb3b", Jx = "0 0 0 3px #ffeb3b", Zx = "none", Qx = "0 1px 3px rgba(0, 0, 0, 0.12)", eb = "0 2px 6px rgba(0, 0, 0, 0.16)", tb = "0 4px 12px rgba(0, 0, 0, 0.20)", Zl = "0", Ql = "4px", ec = "8px", tc = "16px", nc = "24px", rc = "32px", ac = "40px", sc = "48px", oc = "56px", ic = "64px", Ja = "0", Za = "0", Qa = "4px", es = "4px", ts = "8px", ns = "8px", rs = "8px", as = "16px", ss = "16px", os = "24px", is = "24px", ls = "32px", cs = "32px", us = "40px", ds = "40px", fs = "48px", ps = "48px", hs = "56px", ms = "56px", gs = "64px", wr = "Frutiger W01", _r = "Arial, Helvetica, sans-serif", Sr = "sans-serif", kr = "400", Cr = "600", jr = "400", Nr = "12px", Tr = "14px", Dr = "12pt", $r = "14px", Ir = "16px", Mr = "12pt", Lr = "16px", Fr = "19px", Pr = "13pt", Ar = "19px", Er = "22px", Rr = "15pt", Br = "22px", Hr = "26px", Or = "17pt", zr = "27px", Wr = "36px", Ur = "20pt", Vr = "33px", Gr = "48px", Yr = "24pt", xs = "16px", bs = "24px", Nt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Tt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Dt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, $t = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, It = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Mt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Lt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, At = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: vm,
  AnimationDurationNormal: wm,
  AnimationDurationSlow: _m,
  AnimationEasingBounce: jm,
  AnimationEasingEaseIn: Sm,
  AnimationEasingEaseInOut: Cm,
  AnimationEasingEaseOut: km,
  BorderColorCard: vl,
  BorderColorCardHover: wl,
  BorderColorDefault: bl,
  BorderColorError: _l,
  BorderColorForm: yl,
  BorderRadiusLarge: Om,
  BorderRadiusMedium: Hm,
  BorderRadiusNone: Rm,
  BorderRadiusSmall: Bm,
  BorderWidthCardBottom: Fm,
  BorderWidthDefault: Im,
  BorderWidthFormElement: Mm,
  BorderWidthFormElementError: Lm,
  BorderWidthPanel: Pm,
  BorderWidthTableCell: Em,
  BorderWidthTableHeader: Am,
  BreakpointDesktop: wx,
  BreakpointLargeDesktop: _x,
  BreakpointMobile: yx,
  BreakpointTablet: vx,
  ButtonBorderRadius: g0,
  ButtonBorderWidth: m0,
  ButtonPrimaryBackgroundActive: r0,
  ButtonPrimaryBackgroundDefault: t0,
  ButtonPrimaryBackgroundDisabled: a0,
  ButtonPrimaryBackgroundHover: n0,
  ButtonPrimaryBorderDefault: i0,
  ButtonPrimaryBorderFocus: l0,
  ButtonPrimaryTextDefault: s0,
  ButtonPrimaryTextDisabled: o0,
  ButtonSecondaryBackgroundActive: f0,
  ButtonSecondaryBackgroundDefault: c0,
  ButtonSecondaryBackgroundHover: d0,
  ButtonSecondaryBackgroundSolid: u0,
  ButtonSecondaryBorderDefault: h0,
  ButtonSecondaryTextDefault: p0,
  ButtonShadowSize: x0,
  ButtonSpacingPaddingHorizontalDesktop: Ul,
  ButtonSpacingPaddingHorizontalMobile: zl,
  ButtonSpacingPaddingVerticalDesktop: Wl,
  ButtonSpacingPaddingVerticalMobile: Ol,
  ButtonTypographyWeight: b0,
  CardBackgroundDefault: y0,
  CardBorderBottom: _0,
  CardBorderDefault: v0,
  CardBorderHover: w0,
  CardBorderWidthBottom: N0,
  CardBorderWidthDefault: j0,
  CardShadowDefault: T0,
  CardShadowHover: D0,
  CardSpacingHeadingMargin: Yl,
  CardSpacingPaddingDesktop: Gl,
  CardSpacingPaddingMobile: Vl,
  CardTextDescription: k0,
  CardTextHeading: S0,
  CardTextLink: C0,
  ColorBorderDefault: Zm,
  ColorBorderSecondary: Qm,
  ColorButtonLoginActive: jg,
  ColorButtonLoginBackground: kg,
  ColorButtonLoginHover: Cg,
  ColorButtonLoginShadow: Ng,
  ColorButtonPrimaryActive: og,
  ColorButtonPrimaryBackground: rg,
  ColorButtonPrimaryHover: sg,
  ColorButtonPrimaryShadow: ig,
  ColorButtonPrimaryText: ag,
  ColorButtonReverseActive: bg,
  ColorButtonReverseBackground: mg,
  ColorButtonReverseHover: xg,
  ColorButtonReverseShadow: yg,
  ColorButtonReverseText: gg,
  ColorButtonSecondaryActive: pg,
  ColorButtonSecondaryBackground: lg,
  ColorButtonSecondaryBackgroundSolid: cg,
  ColorButtonSecondaryBorder: ug,
  ColorButtonSecondaryHover: fg,
  ColorButtonSecondaryShadow: hg,
  ColorButtonSecondaryText: dg,
  ColorButtonWarningActive: _g,
  ColorButtonWarningBackground: vg,
  ColorButtonWarningHover: wg,
  ColorButtonWarningShadow: Sg,
  ColorError: eg,
  ColorFocusBackground: Km,
  ColorFocusText: Jm,
  ColorFormBackground: ng,
  ColorFormBorder: tg,
  ColorGrey1: Al,
  ColorGrey2: El,
  ColorGrey3: Rl,
  ColorGrey4: Bl,
  ColorGrey5: Hl,
  ColorLinkActive: qm,
  ColorLinkDefault: Gm,
  ColorLinkHover: Ym,
  ColorLinkVisited: Xm,
  ColorPrimaryBlack: Cl,
  ColorPrimaryBlue: Sl,
  ColorPrimaryDarkPink: Tl,
  ColorPrimaryGreen: jl,
  ColorPrimaryPurple: Nl,
  ColorPrimaryRed: Dl,
  ColorPrimaryWhite: kl,
  ColorPrimaryYellow: $l,
  ColorSecondaryAquaGreen: Fl,
  ColorSecondaryOrange: Ll,
  ColorSecondaryPaleYellow: Il,
  ColorSecondaryPink: Pl,
  ColorSecondaryWarmYellow: Ml,
  ColorTextPrimary: zm,
  ColorTextPrint: Vm,
  ColorTextReverse: Um,
  ColorTextSecondary: Wm,
  ComponentBlur: Kg,
  ComponentBreadcrumbChevronMarginLeft: zg,
  ComponentBreadcrumbChevronMarginRight: Wg,
  ComponentBreadcrumbPaddingTopDesktop: Vg,
  ComponentBreadcrumbPaddingTopMobile: Ug,
  ComponentButtonPaddingDesktopHorizontal: Ig,
  ComponentButtonPaddingDesktopVertical: $g,
  ComponentButtonPaddingMobileHorizontal: Dg,
  ComponentButtonPaddingMobileVertical: Tg,
  ComponentButtonShadowSize: Mg,
  ComponentCardHeadingMargin: Bg,
  ComponentCardPaddingDesktop: Rg,
  ComponentCardPaddingMobile: Eg,
  ComponentDetails: Zg,
  ComponentExpander: Qg,
  ComponentFormCheckboxLabelPadding: Ag,
  ComponentFormCheckboxSize: Pg,
  ComponentFormInputMinHeight: Lg,
  ComponentFormInputPadding: Fg,
  ComponentLink: Jg,
  ComponentPagination: e0,
  ComponentPanelPaddingDesktop: Og,
  ComponentPanelPaddingMobile: Hg,
  ComponentSpread: Xg,
  ComponentSummaryListCellPaddingHorizontal: Yg,
  ComponentSummaryListCellPaddingVertical: Gg,
  ComponentSummaryListRowMargin: qg,
  ElevationHigh: tb,
  ElevationLow: Qx,
  ElevationMedium: eb,
  ElevationNone: Zx,
  FocusOutlineOffset: qx,
  FocusOutlineStyle: Xx,
  FocusOutlineWidth: Yx,
  FocusShadowButton: Jx,
  FocusShadowInput: Kx,
  FontFamilyBase: wr,
  FontFamilyFallback: _r,
  FontFamilyPrint: Sr,
  FontLineHeightBase: bs,
  FontSize14Mobile: Nr,
  FontSize14Print: Dr,
  FontSize14Tablet: Tr,
  FontSize16Mobile: $r,
  FontSize16Print: Mr,
  FontSize16Tablet: Ir,
  FontSize19Mobile: Lr,
  FontSize19Print: Pr,
  FontSize19Tablet: Fr,
  FontSize22Mobile: Ar,
  FontSize22Print: Rr,
  FontSize22Tablet: Er,
  FontSize26Mobile: Br,
  FontSize26Print: Or,
  FontSize26Tablet: Hr,
  FontSize36Mobile: zr,
  FontSize36Print: Ur,
  FontSize36Tablet: Wr,
  FontSize48Mobile: Vr,
  FontSize48Print: Yr,
  FontSize48Tablet: Gr,
  FontSizeBase: xs,
  FontWeightBold: Cr,
  FontWeightLight: jr,
  FontWeightNormal: kr,
  FormBorderRadius: X0,
  FormBorderWidthDefault: Y0,
  FormBorderWidthError: q0,
  FormErrorTextDefault: U0,
  FormErrorTypographyWeight: V0,
  FormHintTextDefault: G0,
  FormInputBackgroundDefault: $0,
  FormInputBackgroundDisabled: M0,
  FormInputBackgroundError: L0,
  FormInputBackgroundFocus: I0,
  FormInputBorderDefault: F0,
  FormInputBorderDisabled: E0,
  FormInputBorderError: A0,
  FormInputBorderFocus: P0,
  FormInputTextDefault: R0,
  FormInputTextDisabled: H0,
  FormInputTextPlaceholder: B0,
  FormLabelTextDefault: O0,
  FormLabelTextRequired: z0,
  FormLabelTypographyWeight: W0,
  FormSpacingCheckboxLabelPadding: Jl,
  FormSpacingCheckboxSize: Kl,
  FormSpacingInputMinHeight: Xl,
  FormSpacingInputPadding: ql,
  GridGutter: kx,
  GridGutterHalf: Cx,
  GridPageWidth: Sx,
  HeadingsNhsukHeadingL: Tt,
  HeadingsNhsukHeadingM: Dt,
  HeadingsNhsukHeadingS: $t,
  HeadingsNhsukHeadingXl: Nt,
  HeadingsNhsukHeadingXs: It,
  LayoutColumnActions: bx,
  LayoutColumnFull: hx,
  LayoutColumnHalf: mx,
  LayoutColumnQuarter: xx,
  LayoutColumnThird: gx,
  LayoutContainerMaxWidth: px,
  ParagraphsBody: Mt,
  ParagraphsBodyLarge: Lt,
  ParagraphsBodySmall: Ft,
  ParagraphsLedeText: Pt,
  ParagraphsLedeTextSmall: At,
  ShadowButtonDefault: Ox,
  ShadowButtonFocus: Ux,
  ShadowButtonSecondary: zx,
  ShadowButtonWarning: Wx,
  ShadowCardDefault: Vx,
  ShadowCardHover: Gx,
  SizeButtonMinHeightDesktop: fx,
  SizeButtonMinHeightMobile: dx,
  SizeFormControlLarge: rx,
  SizeFormControlMedium: nx,
  SizeFormControlSmall: tx,
  SizeFormInputWidth2xl: cx,
  SizeFormInputWidth3xl: ux,
  SizeFormInputWidthLg: ix,
  SizeFormInputWidthMd: ox,
  SizeFormInputWidthSm: sx,
  SizeFormInputWidthXl: lx,
  SizeFormInputWidthXs: ax,
  SizeIconExtraLarge: Q0,
  SizeIconLarge: Z0,
  SizeIconMedium: J0,
  SizeIconNhsDefault: ex,
  SizeIconSmall: K0,
  Spacing0: Zl,
  Spacing1: Ql,
  Spacing2: ec,
  Spacing3: tc,
  Spacing4: nc,
  Spacing5: rc,
  Spacing6: ac,
  Spacing7: sc,
  Spacing8: oc,
  Spacing9: ic,
  SpacingResponsive0Mobile: Ja,
  SpacingResponsive0Tablet: Za,
  SpacingResponsive1Mobile: Qa,
  SpacingResponsive1Tablet: es,
  SpacingResponsive2Mobile: ts,
  SpacingResponsive2Tablet: ns,
  SpacingResponsive3Mobile: rs,
  SpacingResponsive3Tablet: as,
  SpacingResponsive4Mobile: ss,
  SpacingResponsive4Tablet: os,
  SpacingResponsive5Mobile: is,
  SpacingResponsive5Tablet: ls,
  SpacingResponsive6Mobile: cs,
  SpacingResponsive6Tablet: us,
  SpacingResponsive7Mobile: ds,
  SpacingResponsive7Tablet: fs,
  SpacingResponsive8Mobile: ps,
  SpacingResponsive8Tablet: hs,
  SpacingResponsive9Mobile: ms,
  SpacingResponsive9Tablet: gs,
  StateDisabledBackground: Rx,
  StateDisabledBorder: Bx,
  StateDisabledText: Hx,
  StateErrorBackground: jx,
  StateErrorBorder: Nx,
  StateErrorText: Tx,
  StateInfoBackground: Px,
  StateInfoBorder: Ax,
  StateInfoText: Ex,
  StateSuccessBackground: Dx,
  StateSuccessBorder: $x,
  StateSuccessText: Ix,
  StateWarningBackground: Mx,
  StateWarningBorder: Lx,
  StateWarningText: Fx,
  TransitionButtonDefault: Nm,
  TransitionButtonShadow: Tm,
  TransitionCardHover: $m,
  TransitionInputFocus: Dm
}, Symbol.toStringTag, { value: "Module" })), Jb = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Zb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
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
), Qb = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Tt.fontFamily,
      fontWeight: Tt.fontWeight,
      fontSize: Tt.fontSize.mobile,
      lineHeight: Tt.lineHeight,
      marginTop: Tt.marginTop,
      marginBottom: Tt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ey = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Dt.fontFamily,
      fontWeight: Dt.fontWeight,
      fontSize: Dt.fontSize.mobile,
      lineHeight: Dt.lineHeight,
      marginTop: Dt.marginTop,
      marginBottom: Dt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ty = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: $t.fontFamily,
      fontWeight: $t.fontWeight,
      fontSize: $t.fontSize.mobile,
      lineHeight: $t.lineHeight,
      marginTop: $t.marginTop,
      marginBottom: $t.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ny = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: It.fontFamily,
      fontWeight: It.fontWeight,
      fontSize: It.fontSize.mobile,
      lineHeight: It.lineHeight,
      marginTop: It.marginTop,
      marginBottom: It.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ry = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Mt.fontFamily,
      fontWeight: Mt.fontWeight,
      fontSize: Mt.fontSize.mobile,
      lineHeight: Mt.lineHeight,
      marginTop: Mt.marginTop,
      marginBottom: Mt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ay = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Lt.fontFamily,
      fontWeight: Lt.fontWeight,
      fontSize: Lt.fontSize.mobile,
      lineHeight: Lt.lineHeight,
      marginTop: Lt.marginTop,
      marginBottom: Lt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), sy = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ft.fontFamily,
      fontWeight: Ft.fontWeight,
      fontSize: Ft.fontSize.mobile,
      lineHeight: Ft.lineHeight,
      marginTop: Ft.marginTop,
      marginBottom: Ft.marginBottom.mobile,
      ...r
    },
    children: e
  }
), oy = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Pt.fontFamily,
      fontWeight: Pt.fontWeight,
      fontSize: Pt.fontSize.mobile,
      lineHeight: Pt.lineHeight,
      marginTop: Pt.marginTop,
      marginBottom: Pt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), iy = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: At.fontFamily,
      fontWeight: At.fontWeight,
      fontSize: At.fontSize.mobile,
      lineHeight: At.lineHeight,
      marginTop: At.marginTop,
      marginBottom: At.marginBottom.mobile,
      ...r
    },
    children: e
  }
), ly = () => De(() => nb, []), cy = () => De(() => ({
  // Border colors
  BorderColorDefault: bl,
  BorderColorForm: yl,
  BorderColorCard: vl,
  BorderColorCardHover: wl,
  BorderColorError: _l,
  // Primary colors
  ColorPrimaryBlue: Sl,
  ColorPrimaryWhite: kl,
  ColorPrimaryBlack: Cl,
  ColorPrimaryGreen: jl,
  ColorPrimaryPurple: Nl,
  ColorPrimaryDarkPink: Tl,
  ColorPrimaryRed: Dl,
  ColorPrimaryYellow: $l,
  // Secondary colors
  ColorSecondaryPaleYellow: Il,
  ColorSecondaryWarmYellow: Ml,
  ColorSecondaryOrange: Ll,
  ColorSecondaryAquaGreen: Fl,
  ColorSecondaryPink: Pl,
  // Grey scale
  ColorGrey1: Al,
  ColorGrey2: El,
  ColorGrey3: Rl,
  ColorGrey4: Bl,
  ColorGrey5: Hl
}), []), uy = () => De(() => ({
  Spacing0: Zl,
  Spacing1: Ql,
  Spacing2: ec,
  Spacing3: tc,
  Spacing4: nc,
  Spacing5: rc,
  Spacing6: ac,
  Spacing7: sc,
  Spacing8: oc,
  Spacing9: ic
}), []), dy = () => De(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Nr,
    Size16: $r,
    Size19: Lr,
    Size22: Ar,
    Size26: Br,
    Size36: zr,
    Size48: Vr
  },
  Tablet: {
    Size14: Tr,
    Size16: Ir,
    Size19: Fr,
    Size22: Er,
    Size26: Hr,
    Size36: Wr,
    Size48: Gr
  },
  Print: {
    Size14: Dr,
    Size16: Mr,
    Size19: Pr,
    Size22: Rr,
    Size26: Or,
    Size36: Ur,
    Size48: Yr
  },
  Family: {
    Base: wr,
    Fallback: _r,
    Print: Sr
  },
  Weight: {
    Normal: kr,
    Bold: Cr,
    Light: jr
  },
  Base: {
    Size: xs,
    LineHeight: bs
  },
  // Backward compatibility - individual exports
  FontFamilyBase: wr,
  FontFamilyFallback: _r,
  FontFamilyPrint: Sr,
  FontWeightNormal: kr,
  FontWeightBold: Cr,
  FontWeightLight: jr,
  FontSize14Mobile: Nr,
  FontSize14Tablet: Tr,
  FontSize14Print: Dr,
  FontSize16Mobile: $r,
  FontSize16Tablet: Ir,
  FontSize16Print: Mr,
  FontSize19Mobile: Lr,
  FontSize19Tablet: Fr,
  FontSize19Print: Pr,
  FontSize22Mobile: Ar,
  FontSize22Tablet: Er,
  FontSize22Print: Rr,
  FontSize26Mobile: Br,
  FontSize26Tablet: Hr,
  FontSize26Print: Or,
  FontSize36Mobile: zr,
  FontSize36Tablet: Wr,
  FontSize36Print: Ur,
  FontSize48Mobile: Vr,
  FontSize48Tablet: Gr,
  FontSize48Print: Yr,
  FontSizeBase: xs,
  FontLineHeightBase: bs
}), []), fy = () => De(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Ja,
    Size1: Qa,
    Size2: ts,
    Size3: rs,
    Size4: ss,
    Size5: is,
    Size6: cs,
    Size7: ds,
    Size8: ps,
    Size9: ms
  },
  Tablet: {
    Size0: Za,
    Size1: es,
    Size2: ns,
    Size3: as,
    Size4: os,
    Size5: ls,
    Size6: us,
    Size7: fs,
    Size8: hs,
    Size9: gs
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Ja,
  SpacingResponsive0Tablet: Za,
  SpacingResponsive1Mobile: Qa,
  SpacingResponsive1Tablet: es,
  SpacingResponsive2Mobile: ts,
  SpacingResponsive2Tablet: ns,
  SpacingResponsive3Mobile: rs,
  SpacingResponsive3Tablet: as,
  SpacingResponsive4Mobile: ss,
  SpacingResponsive4Tablet: os,
  SpacingResponsive5Mobile: is,
  SpacingResponsive5Tablet: ls,
  SpacingResponsive6Mobile: cs,
  SpacingResponsive6Tablet: us,
  SpacingResponsive7Mobile: ds,
  SpacingResponsive7Tablet: fs,
  SpacingResponsive8Mobile: ps,
  SpacingResponsive8Tablet: hs,
  SpacingResponsive9Mobile: ms,
  SpacingResponsive9Tablet: gs
}), []), py = () => De(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Ol,
  ButtonSpacingPaddingHorizontalMobile: zl,
  ButtonSpacingPaddingVerticalDesktop: Wl,
  ButtonSpacingPaddingHorizontalDesktop: Ul,
  // Card spacing	
  CardSpacingPaddingMobile: Vl,
  CardSpacingPaddingDesktop: Gl,
  CardSpacingHeadingMargin: Yl,
  // Form spacing
  FormSpacingInputPadding: ql,
  FormSpacingInputMinHeight: Xl,
  FormSpacingCheckboxSize: Kl,
  FormSpacingCheckboxLabelPadding: Jl
}), []), hy = () => De(() => ({
  xl: Nt,
  l: Tt,
  m: Dt,
  s: $t,
  xs: It
}), []), my = () => De(() => ({
  body: Mt,
  bodyLarge: Lt,
  bodySmall: Ft,
  ledeText: Pt,
  ledeTextSmall: At
}), []), gy = () => De(() => ({
  headings: {
    xl: Nt,
    l: Tt,
    m: Dt,
    s: $t,
    xs: It
  },
  paragraphs: {
    body: Mt,
    bodyLarge: Lt,
    bodySmall: Ft,
    ledeText: Pt,
    ledeTextSmall: At
  },
  fonts: {
    family: {
      base: wr,
      fallback: _r,
      print: Sr
    },
    weight: {
      normal: kr,
      bold: Cr,
      light: jr
    },
    sizes: {
      mobile: {
        size14: Nr,
        size16: $r,
        size19: Lr,
        size22: Ar,
        size26: Br,
        size36: zr,
        size48: Vr
      },
      tablet: {
        size14: Tr,
        size16: Ir,
        size19: Fr,
        size22: Er,
        size26: Hr,
        size36: Wr,
        size48: Gr
      },
      print: {
        size14: Dr,
        size16: Mr,
        size19: Pr,
        size22: Rr,
        size26: Or,
        size36: Ur,
        size48: Yr
      }
    }
  }
}), []);
function xy(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, s] = X.useState(t), o = X.useCallback(() => s("three-column"), []), i = X.useCallback(() => s((u) => u === "three-column" ? r : u), [r]), l = X.useCallback(() => s((u) => u === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: s,
    drillIn: o,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const lc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, dt = {
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
function by(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...lc, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${dt.normal.eot}?#iefix") format("eot"),
       url("${t}${dt.normal.woff2}") format("woff2"),
       url("${t}${dt.normal.woff}") format("woff"),
       url("${t}${dt.normal.ttf}") format("truetype");
  src: url("${t}${dt.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${dt.bold.eot}?#iefix") format("eot"),
       url("${t}${dt.bold.woff2}") format("woff2"),
       url("${t}${dt.bold.woff}") format("woff"),
       url("${t}${dt.bold.ttf}") format("truetype");
  src: url("${t}${dt.bold.eot}");
}`), a.join(`
`);
}
function yy(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...lc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${dt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${dt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${dt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${dt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((s) => {
    const o = document.createElement("link");
    o.rel = "preload", o.href = s.href, o.as = s.as, o.type = s.type, o.crossOrigin = "anonymous", document.head.appendChild(o);
  });
}
const vy = '"Frutiger W01", Arial, Helvetica, sans-serif', wy = "Arial, Helvetica, sans-serif";
async function _y() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Xo as Account,
  ib as ActionLink,
  Ab as AdaptiveDataGrid,
  vm as AnimationDurationFast,
  wm as AnimationDurationNormal,
  _m as AnimationDurationSlow,
  jm as AnimationEasingBounce,
  Sm as AnimationEasingEaseIn,
  Cm as AnimationEasingEaseInOut,
  km as AnimationEasingEaseOut,
  Ii as AppointmentCard,
  Ub as AreaSeriesPrimitive,
  Kf as AriaDataGrid,
  za as AriaTabsDataGrid,
  Ab as AriaTabsDataGridAdaptive,
  Bo as Axis,
  Pa as BackLink,
  Gb as BandScalesProvider,
  Vb as BarSeriesPrimitive,
  vl as BorderColorCard,
  wl as BorderColorCardHover,
  bl as BorderColorDefault,
  _l as BorderColorError,
  yl as BorderColorForm,
  Om as BorderRadiusLarge,
  Hm as BorderRadiusMedium,
  Rm as BorderRadiusNone,
  Bm as BorderRadiusSmall,
  Fm as BorderWidthCardBottom,
  Im as BorderWidthDefault,
  Mm as BorderWidthFormElement,
  Lm as BorderWidthFormElementError,
  Pm as BorderWidthPanel,
  Em as BorderWidthTableCell,
  Am as BorderWidthTableHeader,
  Ff as Breadcrumb,
  Gc as Breakpoint,
  wx as BreakpointDesktop,
  _x as BreakpointLargeDesktop,
  yx as BreakpointMobile,
  vx as BreakpointTablet,
  lt as Button,
  g0 as ButtonBorderRadius,
  m0 as ButtonBorderWidth,
  r0 as ButtonPrimaryBackgroundActive,
  t0 as ButtonPrimaryBackgroundDefault,
  a0 as ButtonPrimaryBackgroundDisabled,
  n0 as ButtonPrimaryBackgroundHover,
  i0 as ButtonPrimaryBorderDefault,
  l0 as ButtonPrimaryBorderFocus,
  s0 as ButtonPrimaryTextDefault,
  o0 as ButtonPrimaryTextDisabled,
  f0 as ButtonSecondaryBackgroundActive,
  c0 as ButtonSecondaryBackgroundDefault,
  d0 as ButtonSecondaryBackgroundHover,
  u0 as ButtonSecondaryBackgroundSolid,
  h0 as ButtonSecondaryBorderDefault,
  p0 as ButtonSecondaryTextDefault,
  x0 as ButtonShadowSize,
  Jo as ButtonSize,
  Ul as ButtonSpacingPaddingHorizontalDesktop,
  zl as ButtonSpacingPaddingHorizontalMobile,
  Wl as ButtonSpacingPaddingVerticalDesktop,
  Ol as ButtonSpacingPaddingVerticalMobile,
  b0 as ButtonTypographyWeight,
  Ko as ButtonVariant,
  ji as Card,
  y0 as CardBackgroundDefault,
  _0 as CardBorderBottom,
  v0 as CardBorderDefault,
  w0 as CardBorderHover,
  N0 as CardBorderWidthBottom,
  j0 as CardBorderWidthDefault,
  kb as CardGroup,
  Cb as CardGroupItem,
  T0 as CardShadowDefault,
  D0 as CardShadowHover,
  Yl as CardSpacingHeadingMargin,
  Gl as CardSpacingPaddingDesktop,
  Vl as CardSpacingPaddingMobile,
  k0 as CardTextDescription,
  S0 as CardTextHeading,
  C0 as CardTextLink,
  jb as CareCard,
  lb as CharacterCount,
  qb as ChartEnhancer,
  Yb as ChartNoScript,
  Yp as ChartRoot,
  Lc as Checkbox,
  Ec as Checkboxes,
  Zm as ColorBorderDefault,
  Qm as ColorBorderSecondary,
  jg as ColorButtonLoginActive,
  kg as ColorButtonLoginBackground,
  Cg as ColorButtonLoginHover,
  Ng as ColorButtonLoginShadow,
  og as ColorButtonPrimaryActive,
  rg as ColorButtonPrimaryBackground,
  sg as ColorButtonPrimaryHover,
  ig as ColorButtonPrimaryShadow,
  ag as ColorButtonPrimaryText,
  bg as ColorButtonReverseActive,
  mg as ColorButtonReverseBackground,
  xg as ColorButtonReverseHover,
  yg as ColorButtonReverseShadow,
  gg as ColorButtonReverseText,
  pg as ColorButtonSecondaryActive,
  lg as ColorButtonSecondaryBackground,
  cg as ColorButtonSecondaryBackgroundSolid,
  ug as ColorButtonSecondaryBorder,
  fg as ColorButtonSecondaryHover,
  hg as ColorButtonSecondaryShadow,
  dg as ColorButtonSecondaryText,
  _g as ColorButtonWarningActive,
  vg as ColorButtonWarningBackground,
  wg as ColorButtonWarningHover,
  Sg as ColorButtonWarningShadow,
  eg as ColorError,
  Km as ColorFocusBackground,
  Jm as ColorFocusText,
  ng as ColorFormBackground,
  tg as ColorFormBorder,
  Al as ColorGrey1,
  El as ColorGrey2,
  Rl as ColorGrey3,
  Bl as ColorGrey4,
  Hl as ColorGrey5,
  qm as ColorLinkActive,
  Gm as ColorLinkDefault,
  Ym as ColorLinkHover,
  Xm as ColorLinkVisited,
  Cl as ColorPrimaryBlack,
  Sl as ColorPrimaryBlue,
  Tl as ColorPrimaryDarkPink,
  jl as ColorPrimaryGreen,
  Nl as ColorPrimaryPurple,
  Dl as ColorPrimaryRed,
  kl as ColorPrimaryWhite,
  $l as ColorPrimaryYellow,
  Fl as ColorSecondaryAquaGreen,
  Ll as ColorSecondaryOrange,
  Il as ColorSecondaryPaleYellow,
  Pl as ColorSecondaryPink,
  Ml as ColorSecondaryWarmYellow,
  zm as ColorTextPrimary,
  Vm as ColorTextPrint,
  Um as ColorTextReverse,
  Wm as ColorTextSecondary,
  Fn as Column,
  qc as ColumnAlign,
  Kg as ComponentBlur,
  zg as ComponentBreadcrumbChevronMarginLeft,
  Wg as ComponentBreadcrumbChevronMarginRight,
  Vg as ComponentBreadcrumbPaddingTopDesktop,
  Ug as ComponentBreadcrumbPaddingTopMobile,
  Ig as ComponentButtonPaddingDesktopHorizontal,
  $g as ComponentButtonPaddingDesktopVertical,
  Dg as ComponentButtonPaddingMobileHorizontal,
  Tg as ComponentButtonPaddingMobileVertical,
  Mg as ComponentButtonShadowSize,
  Bg as ComponentCardHeadingMargin,
  Rg as ComponentCardPaddingDesktop,
  Eg as ComponentCardPaddingMobile,
  Zg as ComponentDetails,
  Qg as ComponentExpander,
  Ag as ComponentFormCheckboxLabelPadding,
  Pg as ComponentFormCheckboxSize,
  Lg as ComponentFormInputMinHeight,
  Fg as ComponentFormInputPadding,
  Jg as ComponentLink,
  e0 as ComponentPagination,
  Og as ComponentPanelPaddingDesktop,
  Hg as ComponentPanelPaddingMobile,
  Xg as ComponentSpread,
  Yg as ComponentSummaryListCellPaddingHorizontal,
  Gg as ComponentSummaryListCellPaddingVertical,
  qg as ComponentSummaryListRowMargin,
  ti as Container,
  Sb as ContentsList,
  lc as DEFAULT_FONT_CONFIG,
  Lb as DashboardSummaryGrid,
  xb as DateInput,
  Of as Details,
  zf as DoDontList,
  tb as ElevationHigh,
  Qx as ElevationLow,
  eb as ElevationMedium,
  Zx as ElevationNone,
  Vs as ErrorMessage,
  gb as ErrorSummary,
  Wf as Expander,
  dt as FRUTIGER_FONT_FILES,
  ws as Fieldset,
  Yc as Float,
  qx as FocusOutlineOffset,
  Xx as FocusOutlineStyle,
  Yx as FocusOutlineWidth,
  Jx as FocusShadowButton,
  Kx as FocusShadowInput,
  wr as FontFamilyBase,
  _r as FontFamilyFallback,
  Sr as FontFamilyPrint,
  bs as FontLineHeightBase,
  Nr as FontSize14Mobile,
  Dr as FontSize14Print,
  Tr as FontSize14Tablet,
  $r as FontSize16Mobile,
  Mr as FontSize16Print,
  Ir as FontSize16Tablet,
  Lr as FontSize19Mobile,
  Pr as FontSize19Print,
  Fr as FontSize19Tablet,
  Ar as FontSize22Mobile,
  Rr as FontSize22Print,
  Er as FontSize22Tablet,
  Br as FontSize26Mobile,
  Or as FontSize26Print,
  Hr as FontSize26Tablet,
  zr as FontSize36Mobile,
  Ur as FontSize36Print,
  Wr as FontSize36Tablet,
  Vr as FontSize48Mobile,
  Yr as FontSize48Print,
  Gr as FontSize48Tablet,
  xs as FontSizeBase,
  Cr as FontWeightBold,
  jr as FontWeightLight,
  kr as FontWeightNormal,
  oi as Footer,
  X0 as FormBorderRadius,
  Y0 as FormBorderWidthDefault,
  q0 as FormBorderWidthError,
  U0 as FormErrorTextDefault,
  V0 as FormErrorTypographyWeight,
  G0 as FormHintTextDefault,
  $0 as FormInputBackgroundDefault,
  M0 as FormInputBackgroundDisabled,
  L0 as FormInputBackgroundError,
  I0 as FormInputBackgroundFocus,
  F0 as FormInputBorderDefault,
  E0 as FormInputBorderDisabled,
  A0 as FormInputBorderError,
  P0 as FormInputBorderFocus,
  R0 as FormInputTextDefault,
  H0 as FormInputTextDisabled,
  B0 as FormInputTextPlaceholder,
  O0 as FormLabelTextDefault,
  z0 as FormLabelTextRequired,
  W0 as FormLabelTypographyWeight,
  Jl as FormSpacingCheckboxLabelPadding,
  Kl as FormSpacingCheckboxSize,
  Xl as FormSpacingInputMinHeight,
  ql as FormSpacingInputPadding,
  wb as GanttChart,
  Aa as Grid,
  kx as GridGutter,
  Cx as GridGutterHalf,
  Xp as GridLines,
  Sx as GridPageWidth,
  tn as GridWidth,
  si as Header,
  vb as HeaderSSR,
  su as HeaderSearch,
  si as HeaderStatic,
  Bt as Heading,
  Tt as HeadingsNhsukHeadingL,
  Dt as HeadingsNhsukHeadingM,
  $t as HeadingsNhsukHeadingS,
  Nt as HeadingsNhsukHeadingXl,
  It as HeadingsNhsukHeadingXs,
  iu as Hero,
  Qo as Hint,
  Ib as Images,
  ys as Input,
  Nb as InsetText,
  vs as Label,
  bx as LayoutColumnActions,
  hx as LayoutColumnFull,
  mx as LayoutColumnHalf,
  xx as LayoutColumnQuarter,
  gx as LayoutColumnThird,
  px as LayoutContainerMaxWidth,
  Wb as Legend,
  qp as LineScalesProvider,
  Ih as LineSeriesPrimitive,
  Jc as List,
  ni as MainWrapper,
  Mi as MedicationCard,
  Fh as MetricCard,
  ry as NHSBodyText,
  ay as NHSBodyTextLarge,
  sy as NHSBodyTextSmall,
  Zb as NHSHeading1,
  Qb as NHSHeading2,
  ey as NHSHeading3,
  ty as NHSHeading4,
  ny as NHSHeading5,
  oy as NHSLedeText,
  iy as NHSLedeTextSmall,
  yb as NHSThemeProvider,
  wy as NHS_FALLBACK_FONT_STACK,
  vy as NHS_FONT_STACK,
  Rp as NavigationSplitView,
  Rb as PageTemplate,
  _b as Pagination,
  Pf as Panel,
  Mt as ParagraphsBody,
  Lt as ParagraphsBodyLarge,
  Ft as ParagraphsBodySmall,
  Pt as ParagraphsLedeText,
  At as ParagraphsLedeTextSmall,
  $i as PatientCard,
  Op as ProductRoadmap,
  cb as Radios,
  ub as RadiosServer,
  Ab as ResponsiveDataGrid,
  Eb as ResponsiveDataGridDemo,
  nn as Row,
  Kb as SPC,
  gm as SPCChart,
  Xb as SPCMetricCard,
  rr as Select,
  zc as SelectOption,
  Ox as ShadowButtonDefault,
  Ux as ShadowButtonFocus,
  zx as ShadowButtonSecondary,
  Wx as ShadowButtonWarning,
  Vx as ShadowCardDefault,
  Gx as ShadowCardHover,
  fx as SizeButtonMinHeightDesktop,
  dx as SizeButtonMinHeightMobile,
  rx as SizeFormControlLarge,
  nx as SizeFormControlMedium,
  tx as SizeFormControlSmall,
  cx as SizeFormInputWidth2xl,
  ux as SizeFormInputWidth3xl,
  ix as SizeFormInputWidthLg,
  ox as SizeFormInputWidthMd,
  sx as SizeFormInputWidthSm,
  lx as SizeFormInputWidthXl,
  ax as SizeFormInputWidthXs,
  Q0 as SizeIconExtraLarge,
  Z0 as SizeIconLarge,
  J0 as SizeIconMedium,
  ex as SizeIconNhsDefault,
  K0 as SizeIconSmall,
  Ci as SkipLink,
  Mb as SlotMatrix,
  Fb as SortStatusControl,
  Zl as Spacing0,
  Ql as Spacing1,
  ec as Spacing2,
  tc as Spacing3,
  nc as Spacing4,
  rc as Spacing5,
  ac as Spacing6,
  sc as Spacing7,
  oc as Spacing8,
  ic as Spacing9,
  Ja as SpacingResponsive0Mobile,
  Za as SpacingResponsive0Tablet,
  Qa as SpacingResponsive1Mobile,
  es as SpacingResponsive1Tablet,
  ts as SpacingResponsive2Mobile,
  ns as SpacingResponsive2Tablet,
  rs as SpacingResponsive3Mobile,
  as as SpacingResponsive3Tablet,
  ss as SpacingResponsive4Mobile,
  os as SpacingResponsive4Tablet,
  is as SpacingResponsive5Mobile,
  ls as SpacingResponsive5Tablet,
  cs as SpacingResponsive6Mobile,
  us as SpacingResponsive6Tablet,
  ds as SpacingResponsive7Mobile,
  fs as SpacingResponsive7Tablet,
  ps as SpacingResponsive8Mobile,
  hs as SpacingResponsive8Tablet,
  ms as SpacingResponsive9Mobile,
  gs as SpacingResponsive9Tablet,
  db as SpacingUtilities,
  Rx as StateDisabledBackground,
  Bx as StateDisabledBorder,
  Hx as StateDisabledText,
  jx as StateErrorBackground,
  Nx as StateErrorBorder,
  Tx as StateErrorText,
  Px as StateInfoBackground,
  Ax as StateInfoBorder,
  Ex as StateInfoText,
  Dx as StateSuccessBackground,
  $x as StateSuccessBorder,
  Ix as StateSuccessText,
  Mx as StateWarningBackground,
  Lx as StateWarningBorder,
  Fx as StateWarningText,
  Xf as SummaryCard,
  Tb as SummaryList,
  zt as Table,
  Db as Tabs,
  ze as Tag,
  Uf as TaskList,
  Bc as Textarea,
  zb as TooltipOverlay,
  $h as TooltipProvider,
  Bb as TransactionalPageTemplate,
  Nm as TransitionButtonDefault,
  Tm as TransitionButtonShadow,
  $m as TransitionCardHover,
  Dm as TransitionInputFocus,
  Ob as VisibilityProvider,
  Li as VitalsCard,
  mb as WIDTH_FRACTIONS,
  $b as WarningCallout,
  Ri as WidthContainer,
  pb as WidthUtilities,
  _y as checkFrutigerLoaded,
  Ms as createGenericTabsConfig,
  Pb as createTCHTabsConfig,
  by as generateFrutigerFontFace,
  Jb as getResponsiveStyles,
  fb as getSpacingClass,
  hb as getWidthClass,
  yy as preloadFrutigerFonts,
  ip as tchDataConfig,
  cy as useColors,
  py as useComponentSpacing,
  hy as useNHSHeadings,
  my as useNHSParagraphs,
  bb as useNHSTheme,
  gy as useNHSTypographySystem,
  xy as useNavigationSplitDrill,
  Pp as useNavigationSplitUrlSync,
  Hi as useNhsFdpBreakpoints,
  fy as useResponsiveSpacing,
  Hb as useResponsiveValue,
  uy as useSpacing,
  cm as useSpc,
  ly as useTokens,
  dy as useTypography
};
//# sourceMappingURL=index.esm.js.map
